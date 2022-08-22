class ChannelHistoriesController < HistoryController
    prepend_before_action :validate_admin


    def validate_admin
        User.find(session[:user_id]).members.each do |member|
            @member = member.find_by(channel_id: params[:id])
        end
        if member.admin != true
          render json: {error: "You must be an admin to access history"}
        else
            render json: {error: "Can't access history"}
        end
    end
end
