Rails.application.routes.draw do
    namespace :api do
      namespace :v1 do
        resources :tiny_urls
      end
    end
    get '/:tiny_url', to: 'api/v1/tiny_urls#go_to'
end
