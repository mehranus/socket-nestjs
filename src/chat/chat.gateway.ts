import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "socket.io";

@WebSocketGateway({cors:{origin:"*"}})
export class ChatGateway implements OnGatewayInit, OnGatewayConnection,OnGatewayDisconnect{
 @WebSocketServer() server:Server
  afterInit(server: any) {
    console.log("connction init")
  }
  handleConnection(client: any, ...args: any[]) {
    const {sockets}= this.server.sockets
    console.log(`Client Id : ${client.id} Connected`)
    console.log(`Online User: ${sockets.size}`)
  }
  handleDisconnect(client: any) {
    const {sockets}= this.server.sockets
    console.log(`Client Id : ${client.id} Disconnected`)
    console.log(`Online User: ${sockets.size}`)
  }
}