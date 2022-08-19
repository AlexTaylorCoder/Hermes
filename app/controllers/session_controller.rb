class SessionController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    def login

        user = User.find_by!(username: params[:username])

        if user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: 202
        else 
            render json: {error: "Invalid password"}
        end
    end

    def logout
        session.destroy
    end

    private

    def not_found
        render json: {error: "Invalid username"}
    end

    def permitted
        params.permit(:id)
    end
end
