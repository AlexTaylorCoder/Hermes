class RequestsController < ApplicationController
    prepend_before_action :search, except: [:index,:create]
    before_action :save_history, only: [:destroy,:update]


    def create
        render json: Request.create!(request_params), status: 202
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
    
    private
    def request_params
        params.permit(:message,:status,:member_id,:user_id)
    end

    def save_history
        Request.create(@request.attributes)
    end

    def search
        @request = Request.find(params[:id])
    end
end
