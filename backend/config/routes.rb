Rails.application.routes.draw do
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  post "/auth/signup",            to: "users#create"
  post "/auth/login",             to: "auth#login"
  get  "/me",                     to: "users#me"

  get "/meditations",             to: "meditations#index"
  get "/meditations/:id",         to: "meditations#show"
  get "/categories",              to: "meditations#category"

  # meditation sessions
  get "/meditation-sessions",     to: "meditation_sessions#index"
  get "/meditation-sessions/:id", to: "meditation_sessions#show"
  post "/meditation-sessions",    to: "medtiation_sessions#create"
  post "/meditation-sessions/:id",to: "meditation_sessions#destroy"

  # user meditation sessions
  get "/users/:user_id/meditation_"
end
