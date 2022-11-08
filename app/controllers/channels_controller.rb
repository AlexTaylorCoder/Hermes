class ChannelsController < ApplicationController
    prepend_before_action :validate_member, except: [:create]
    before_action :search, except: [:index,:create]
    before_action :save_history, only: [:destroy,:update]

    def index
        render json: Channel.all
    end

    def show
        if !@member
            render json: @channel, serializer: ChannelpreviewSerializer
        elsif @member
            channel = ActiveModelSerializers::SerializableResource.new(@channel, {serializer: ChannelfullSerializer}).as_json

            response = {channel:channel,member:@member}

            render json: response

          
        end
    end

    def create
        channel = Channel.create!(permitted)
        # byebug
        username = User.find(session[:user_id]).username
        member = Member.create!(isAdmin:true,channel_id:channel.id,user_id:session[:user_id],name:username)

        channelSerial = ActiveModelSerializers::SerializableResource.new(channel, {serializer: ChannelfullSerializer}).as_json

        response = {channel:channelSerial,member:member}
        render json: response
    end

    # def update
    #     if session[:user_id].
    #     render json: @channel.update!(permitted)
    # end

    def destroy
        @channel.destroy
        head :no_content
    end

    private

    def validate_member
        User.find(session[:user_id]).members.each do |member|
           @member = Member.find_by(channel_id: params[:id])
        end
    end
    def permitted
        params.permit(:name)
    end

    def search
        @channel = Channel.find(params[:id])
    end

    def save_history
        ChannelHistory.create(@channel.attributes)
    end
end