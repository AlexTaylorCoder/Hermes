class MembersController < ApplicationController
    prepend_before_action :search, except: [:index,:create]
    before_action :save_history, only: [:destroy,:update]
    before_action :member_params, only: [:create]

    # When joining a channel check if user and channel have relatioship through 
    # member. If true send back member, else check requests. 

    
    # "/user:id/channelid" has members return member info
    # Create new member
    # To access user history see if admin true
 
    def create
        user = User.find(session[:user_id])


        member = user.members.create!(member_params)
        channel = Channel.find(params[:channel_id])

        channelSerial = ActiveModelSerializers::SerializableResource.new(channel, {serializer: ChannelfullSerializer}).as_json

        response = {channel:channelSerial,member:member}

        render json: response
    end

    def index
        render json: Member.all
    end

    def show
        render json: @member
    end

    def destroy
        @member.destroy
        head :no_content
    end
    
    private
    
    def member_params
        params.permit(:channel_id)
    end

    def save_history
        MemberHistory.create(@member.attributes)
    end

    def search
        @member = Member.find(params[:id])
    end
end
