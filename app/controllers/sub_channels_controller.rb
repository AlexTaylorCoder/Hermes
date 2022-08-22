class SubChannelsController < ApplicationController
    prepend_before_action :search, except: [:index,:create]
    before_action :save_history, only: [:destroy,:update]


    def create
        render json: SubChannel.create!(subchannel_params), status: 202
    end

    def index
        render json: SubChannel.all
    end

    def show
        render json: @subchannel
    end

    def destroy
        @subchannel.destroy
        head :no_content
    end
    
    private
    def subchannel_params
        params.permit(:post,:likes)
    end

    def save_history
        SubChannelHistory.create(@subchannel.attributes)
    end

    def search
        @subchannel = SubChannel.find(params[:id])
    end
    
end
