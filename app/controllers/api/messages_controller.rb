class Api::MessagesController < ApiController
  def index
    @messages = Message.all
  end

  def create
    new_message = Message.new(body: params[:message])
    if new_message.save
      @messages = Message.all
      render json: { messages: @messages }, status: :ok
    else
      render json: { message: 'failure' }, status: :error
    end

  end

end
