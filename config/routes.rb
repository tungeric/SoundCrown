Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :update, :show], param: :username do
      resources :tracks, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :tracks, only: [:index, :show, :update, :create, :destroy] do
      resources :comments, only: [:index]
      resources :tags, only: [:index]
    end
    resources :comments, only: [:show, :create, :destroy]
    resources :tags, only: [:index, :show, :create, :destroy]
    resources :taggings, only: [:show, :create, :destroy]
    
    get '/new_tracks', to: 'tracks#index_new'
    get '/top_tracks', to: 'tracks#index_top'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
end
