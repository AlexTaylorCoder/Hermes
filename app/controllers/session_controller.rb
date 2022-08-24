class SessionController < ApplicationController
    skip_before_action :validate_user, except: [:logout]
    rescue_from ActiveRecord::RecordNotFound, with: :not_found

    def show
        current_user = User.find(session[:user_id])
        render json: current_user
    end

    def login

        user = User.find_by(username: params[:username])

        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: 202
        else
            render json: {error: "Invalid username or password"}, status: 401
        end
    end

    def logout
        session.destroy
        head :no_content
    end

    private

    def not_found
        render json: {error: "Invalid username"}
    end

    def permitted
        params.permit(:id)
    end
end
