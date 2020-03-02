require 'securerandom'

module Api::V1
    class TinyUrlsController < ApiController
      before_action :set_tiny_url_by_tiny_url, only: [:show, :update, :go_to]
      before_action :set_tiny_url_by_id, only: [:destroy]

      def go_to
        redirect_to @tiny_url.long_url
      end

      def index
        @tiny_url = TinyUrl.all
        render json: @tiny_url
      end

      def show
        #@tiny_url = TinyUrl.find_by(tiny_url: tiny_url)
        render json: @tiny_url
      end

      # POST /tiny_urls
      def create
        @tiny_url = TinyUrl.new(tiny_url_params)
        @tiny_url.tiny_url = SecureRandom.alphanumeric(7)
        if @tiny_url.save
          render json: @tiny_url.as_json(only: [:id, :tiny_url, :long_url]), status: :created
        else
          render json_errors: @tiny_urls.error
        end
      end

      # PATCH/PUT /tiny_urls/1
      def update
        if @tiny_url.update(tiny_url_params)
          render json: @tiny_url
        else
          render json: @tiny_url.errors, status: :unprocessable_entity
        end
      end

      # DELETE /tiny_urls/1
      def destroy
        @tiny_url.destroy
      end

      private
        def set_tiny_url_by_id
          @tiny_url = TinyUrl.find(params[:id])
        end

        def set_tiny_url_by_tiny_url
          @tiny_url = TinyUrl.find_by(tiny_url: params[:id])
        end

        def tiny_url_params
          params.fetch(:tiny_url, {}).permit(:long_url)
        end
    end
end
