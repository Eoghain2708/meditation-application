Rails.application.routes.draw do
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check


  # Authentication and Users
  post "/auth/signup",              to: "users#create"
  post "/auth/login",               to: "auth#login"
  get  "/me",                       to: "users#me"

  # Meditations
  get "/meditations",               to: "meditations#index"
  get "/meditations/:id",           to: "meditations#show"
  get "/categories",                to: "meditations#category"

  # Meditation Sessions
  get "/meditation-sessions",       to: "meditation_sessions#index"
  get "/meditation-sessions/:id",   to: "meditation_sessions#show"
  post "/meditation-sessions",      to: "medtiation_sessions#create"
  delete "/meditation-sessions/:id",  to: "meditation_sessions#destroy"

  # Other User Meditation Sessions
  get "/users/:user_id/meditation-sessions",
  to: "users/meditation_sessions#index"

  get "/users/:user_id/meditation-sessions/:id",
  to: "users/meditation_sessions#show"


  # Meditation Sessions Per Meditation
  get "/meditations/:meditation_id/meditation-sessions",
  to: "meditations/meditation_sessions#index"

  get "/meditations/:meditation_id/meditation-sessions/:id",
  to: "meditations/meditation_sessions#show"

end
