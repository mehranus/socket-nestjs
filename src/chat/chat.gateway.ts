import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, WebSocketGateway } from "@nestjs/websockets";

@WebSocketGateway({cors:{origin:"*"}})
export class ChatGateway implements OnGatewayInit, OnGatewayConnection,OnGatewayDisconnect{
  afterInit(server: any) {
    console.log("connction init")
  }
  handleConnection(client: any, ...args: any[]) {
    
  }
  handleDisconnect(client: any) {
    
  }
}