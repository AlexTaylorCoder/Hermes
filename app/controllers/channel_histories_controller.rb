class ChannelHistoriesController < ApplicationController
    rescue_from ActiveRecord::RecrodNotFound, with: :not_found
    before_action :permitted
    def index
        if params.keys.length > 2
            hash = {}
  
            permitted.each do |k,v| 
                channel = ChannelHistory.find_by!("#{k}":v)
                # channel = ChannelHistory.where(["? = ?","#{k}","#{v}"])

                if hash[channel]
                    hash[channel] += 1
                else
                    hash[channel] = 1
                end
            end
            render json: hash.keys  
        else
            render json: ChannelHistory.all
        end
    end

    def show
         render json: Channel.find(params[:id])
    end

    def search
        byebug
        render json: Channel.find(params)
    end

    private

    def not_found
        render json: {error: "Invalid parameter to search by!"}
    end

    def permitted
        params.permit(:id,:name,:isPinned)
    end
end
