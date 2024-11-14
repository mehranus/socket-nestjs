import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { JoinPaylod, Message } from "src/interface/chat.interface";


@WebSocketGateway({cors:{origin:'*'}})
export class indexGateway{
  @WebSocketServer() server:Server

  @SubscribeMessage("join_room")
  async joinRoom(@ConnectedSocket() client:Socket,@MessageBody() data:JoinPaylod){
    if(client.id && data?.roomName){
        if(client.rooms.has(data.roomName)){
            console.log("allredy join in : "+data.roomName)
        }else{
          client.join(data.roomName)
        }
    }else{
      client.emit("error","you are disconnect")
    }

  }

  @SubscribeMessage("server-chat")
  async serverChat(@ConnectedSocket() client:Socket,data:Message){

    if(data.roomName){
      return this.server.to(data.roomName).emit("client-chat",data)
    }
    return client.emit("error","room not found")
  }
}

