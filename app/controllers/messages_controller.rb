class MessagesController < ApplicationController
    prepend_before_action :search, except: [:index,:create]
    before_action :save_history, only: [:destroy,:update]

    def create
        user = User.find(session[:user_id])
        render json: user.messages.create!(message_params), status: 202
    end

    def index
        render json: Message.all
    end

    def show
        render json: @message
    end

    def update

        if params[:post]
            @message.update(params[:post])
        elsif params[:likes]
            @message.update(params[:likes])
        elsif params[:isPinned]
            @message.update(params[:isPinned])
        end

        render json: @message
    end 

    def destroy
        @message.destroy
        head :no_content
    end
    
    private
    def message_params
        params.permit(:post,:channel_id)
    end

    def save_history
        MessageHistory.create(@message.attributes)
    end

    def search
        @message = Message.find(params[:id])
    end
end
