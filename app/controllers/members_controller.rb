class MembersController < ApplicationController
    before_action :save_history, only: [:destroy,:update]

    private

    def save_history
        
    end
end
