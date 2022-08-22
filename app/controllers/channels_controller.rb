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
            render json: @channel
        end
    end

    def create
        channel = Channel.create!(permitted)
        Member.create(isAdmin:true,channel_id:channel.id,user_id:session[:user_id])

        render json: channel
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
           @member = member.find_by(channel_id: params[:id])
        end
    end
    def permitted
        params.permit(:name,:isPinned)
    end

    def search
        @channel = Channel.find(params[:id])
    end

    def save_history
        ChannelHistory.create(@channel.attributes)
    end
end