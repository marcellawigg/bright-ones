Rails.application.routes.draw do
  root "ideas#index"

  resources :ideas, only: [:show]

  namespace :api do
    namespace :v1, defaults: {format: :json} do
      resources :ideas do
      end
    end
  end
end
