class Api::MessagesController < ApiController

  def index
    @messages = Message.all
    render json: { messages: @messages }, status: :ok
  end

  def create
    new_message = Message.create(body: params[:message])
    @messages = Message.all
    render json: { messages: @messages }, status: :ok
  end

end
