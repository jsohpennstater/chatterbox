class Api::MessagesController < ApiController
  def index
    @messages = Message.all
    render json: { messages: @messages }, status: :ok
  end
end
