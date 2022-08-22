class MessagesController < ApplicationController
    prepend_before_action :search, except: [:index,:create]
    before_action :save_history, only: [:destroy,:update]


    def create
        render json: Message.create!(message_params), status: 202
    end

    def index
        render json: Message.all
    end

    def show
        render json: @message
    end

    def destroy
        @message.destroy
        head :no_content
    end
    
    private
    def message_params
        params.permit(:post,:isPinned,:likes,:user_id,:channel_id,:sub_channel_id)
    end

    def save_history
        Message.create(@message.attributes)
    end

    def search
        @message = Message.find(params[:id])
    end
end
