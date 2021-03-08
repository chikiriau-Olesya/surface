Rails.application.routes.draw do
  resources :coments
  resources :post_types
  resources :follows
  resources :categories
  mount Ckeditor::Engine => '/ckeditor'
  devise_for :users
  resources :users
  post 'users/:id/follow', to: "users#follow", as: "follow_user"
  post 'users/:id/unfollow', to: "users#unfollow", as: "unfollow_user"

  #get 'about/index'
  #get 'promo/index'
  resources :posts do
    collection do
     get :newmagazine
     get :newsport
   end
	  resources :coments
    resources :likes
    resources :favorites
  end
  resources :subscribers

  # resources :admins do
  #   collection do
  #    get :choosePost
  #  end
  # end

  get 'posts/index'

  get 'promo', to: 'promo#index'
  get 'about', to: 'about#index'
  get 'landing', to: 'landingo#index'
  get 'styleguide', to: 'styleguide#index'

  # get 'landing/index'
  # get 'styleguide/index'

  root 'landing#index'

  get 'users', to: 'users#index'
  get 'users/:id' => 'users#show'
  delete 'users/:id', to: 'users#destroy'
  get 'users/:id/following', :to => "users#following", :as => :following

  get 'admin', to: 'admin#index'
  # get 'admin#index', to: 'choosePost#index'
end
