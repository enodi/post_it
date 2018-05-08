Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "index#index"
  get "/signup", to: "users#index"
  get "/signin", to: "users#show"
  # get "api/v1/users", to: "users#index"
  post "api/v1/user/signup", to: "users#create"
end
