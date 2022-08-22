class MembersController < ApplicationController
    prepend_before_action :search, except: [:index,:create]
    before_action :save_history, only: [:destroy,:update]

    # When joining a channel check if user and channel have relatioship through 
    # member. If true send back member, else create new member.

    # "/user:id/channelid" has members return member info
    # Create new member
    # To access user history see if admin true
 
    def create
        render json: Member.create!(member_params), status: 202
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
        params.permit(:user_id,:channel_id,:isAdmin)
    end

    def save_history
        MemberHistory.create(@member.attributes)
    end

    def search
        @member = Member.find(params[:id])
    end
end
