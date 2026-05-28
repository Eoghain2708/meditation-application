Rails.application.routes.draw do

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check


  # Authentication and Users
  post "/auth/signup",                to: "users#create"                  # done in front end
  post "/auth/login",                 to: "auth#login"                    # done in front end
  get  "/me",                         to: "users#me"                      # done in front end
  get "/users/search",                to: "users#index"
  get "/users/current",               to: "users#current_user"
  patch "/users/update",              to: "users#update"

  # Meditations
  get "/meditations",                 to: "meditations#index"             # done in front end
  get "/meditations/:id",             to: "meditations#show"              # done in front end
  get "/categories",                  to: "meditations#category"          # done in front end

  # Meditation Sessions
  get "/meditation-sessions",         to: "meditation_sessions#index"     # done in front end
  get "/meditation-sessions/:id",     to: "meditation_sessions#show"      # done in front end
  post "/meditation-sessions",        to: "meditation_sessions#create"    # done in front end
  delete "/meditation-sessions/:id",  to: "meditation_sessions#destroy"   # done in front end
  patch "/meditation-sessions/:id",   to: "meditation_sessions#update"    # done in front end

  # Other User Meditation Sessions
  get "/users/:user_id/meditation-sessions",                            # ---needs done---
  to: "users/meditation_sessions#index"

  get "/users/:user_id/meditation-sessions/:id",                        # ---needs done---
  to: "users/meditation_sessions#show"


  # Meditation Sessions Per Meditation
  get "/meditations/:meditation_id/meditation-sessions",                # done in front end
  to: "meditations/meditation_sessions#index"

  get "/meditations/:meditation_id/meditation-sessions/:id",            # ---needs done---
  to: "meditations/meditation_sessions#show"

end
