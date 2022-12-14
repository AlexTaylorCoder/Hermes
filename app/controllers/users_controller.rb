class UsersController < ApplicationController
    skip_before_action :validate_user, only: [:create]
    before_action :search, except: [:index,:create]
    before_action :save_history, only: [:destroy,:update]

    def create
        render json: User.create!(user_params), status: 202
    end

    def index
        render json: User.all
    end

    def show
        render json: @user
    end

    def destroy
        @user.destroy
        head :no_content
    end

    def save_history
        UserHistory.create(@user.attributes)
    end

    def search
        @user = User.find(params[:id])
    end
    
    def user_params
        params.permit(:username,:password,:first_name,:last_name,:email,:prof,:bio)
    end

end
