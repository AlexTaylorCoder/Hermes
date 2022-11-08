class RequestsController < ApplicationController
    prepend_before_action :search, except: [:index,:create]
    rescue_from ActiveRecord::RecordNotFound, with: :not_found

    def create
        user = User.find_by!(username:params[:username])
        # if (user)
        render json: Request.create!(message:params[:message],
            user_id:user.id,member_id:params[:member_id],channel_id:params[:channel_id]), status: 202
    end

    def index
        render json: Request.all
    end

    def show
        render json: @request
    end

    def destroy
        @request.destroy
        head :no_content
    end

    def update
        
        if params[:status] == "accepted" && session[:user_id] == @request.user_id
            @request.update(status: "accepted")
            member = Member.create(user_id:@request.user_id,channel_id:@request.channel_id,isAdmin:false)
            render json: member
        elsif params[:status] == "declined"
            @request.update(status: "declined")
            render json: @request
        else    
            render json: {error: "Invalid status. Either accepted or declined / You must be an admin to accept"}
        end
    end
    
    private
    def not_found
        render json: {error: "Username not found!"}
    end
    def create_params
        params.permit(:message,:member_id,:username,:channel_id)
    end

    def patch_params
        params.permit(:status)
    end

    def search
        @request = Request.find(params[:id])
    end
end
