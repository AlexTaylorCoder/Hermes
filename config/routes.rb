Rails.application.routes.draw do
  resources :message_merge_histories, only: [:index,:show]
  resources :request_histories, only: [:index,:show]
  resources :requests, except: [:destroy]
  resources :message_merges
  resources :message_histories, only: [:index,:show]
  resources :sub_channel_histories, only: [:index,:show]
  resources :user_histories, only: [:index,:show]
  resources :member_histories, only: [:index,:show]
  resources :channel_histories, only: [:index,:show] 
  resources :sub_channels
  resources :members
  resources :messages
  resources :channels  

  resources :users


  post '/login', to: "session#login"
  delete '/logout', to: "session#logout"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
