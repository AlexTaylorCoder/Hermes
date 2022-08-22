class RequestsController < ApplicationController
    prepend_before_action :search, except: [:index,:create]


    def create
        render json: Request.create!(create_params), status: 202
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
    def create_params
        params.permit(:message,:member_id,:user_id)
    end

    def patch_params
        params.permit(:status)
    end

    def search
        @request = Request.find(params[:id])
    end
end
