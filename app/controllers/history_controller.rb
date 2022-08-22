class HistoryController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found

    before_action :model_context
    before_action :permitted

    def index
        if params.keys.length > 3 
            hash = {}
  
            permitted.each do |k,v| 
                instance = @model_context.find_by!("#{k}":v)
                # channel = ChannelHistory.where(["? = ?","#{k}","#{v}"])
                # .Classify
                if hash[instance]
                    hash[instance] += 1
                else
                    hash[instance] = 1
                end
            end
            render json: hash.keys  
        else
            render json: @model_context.all
        end
    end

    def show
         render json: @model_context.find(params[:id])
    end

    def search
        render json: @model_context.find(params)
    end

    private

    def model_context
        @model_context = controller_name.classify.constantize
    end

    def not_found
        render json: {error: "#{controller_name} --> Invalid parameter to search by!"}
    end

    def permitted
        params.permit!
    end
end
