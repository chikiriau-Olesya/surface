Rails.application.routes.draw do
  resources :questions
  resources :surftypes
  resources :cities
  resources :schools
  resources :coments
  resources :post_types
  resources :follows
  resources :categories
  mount Ckeditor::Engine => '/ckeditor'
  devise_for :users
  resources :users, only: [:show, :edit, :update]
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
  get '/posts/hashtag/:name', to: 'posts#hashtags'
  # get '/posts/hashtag', to: 'posts#hashtags'
  get "postsMain" => "posts#postsMain", as: "postsMain"

  get 'promo', to: 'promo#index'
  get 'about', to: 'about#index'
  get 'landing', to: 'landingo#index'
  get 'styleguide', to: 'styleguide#index'
  get 'schools', to: 'schools#index'
  get 'cities', to: 'cities#index'
  get 'questions', to: 'questions#index'

  get "schoolsMain" => "schools#schoolsMain", as: "schoolsMain"
  get "schoolsCities" => "schools#schoolsCities", as: "schoolsCities"
  # get 'landing/index'
  # get 'styleguide/index'

  root 'landing#index'

  get "search", to: "search#search"
  # get "searchPage", to: "searchPage#searchPage"
  get "searchPage" => "search#searchPage", as: "searchPage"

  get 'users', to: 'users#index'
  get 'users/:id' => 'users#show'
  delete 'users/:id', to: 'users#destroy'
  get 'users/:id/following', :to => "users#following", :as => :following

  get 'admin', to: 'admin#index'
  get "changeRole" => "users#changeRole", as: "changeRole"
  # get 'admin#index', to: 'choosePost#index'
end
