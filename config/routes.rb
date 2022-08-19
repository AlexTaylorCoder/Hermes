Rails.application.routes.draw do
  resources :requests
  resources :message_merges
  resources :message_histories
  resources :sub_channel_histories
  resources :user_histories
  resources :member_histories
  resources :channel_histories
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
