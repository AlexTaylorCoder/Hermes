class ChannelsController < ApplicationController
    prepend_before_action :search, except: [:index,:create]
    before_action :save_history, only: [:destroy,:update]

    def index
        render json: Channel.all
    end

    def show
        render json: @channel
    end
    def create
        render json: Channel.create!(permitted), status: 202
    end

    def update
        render json: @channel.update!(permitted)
    end

    def destroy
        @channel.destroy
        head :no_content
    end

    private

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

