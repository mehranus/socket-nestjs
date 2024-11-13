import { SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "socket.io";


@WebSocketGateway({cors:{origin:'*'},namespace:'gurop'})
export class GuropGateway{
  @WebSocketServer() server:Server
  @SubscribeMessage('list')
  getList(client:any,data:any){
    console.log(data)
    client.emit('list',[{name:"gurop-1"},{name:"gurop-2"},{name:"gurop-3"},{name:"gurop-4"},{name:"gurop-5"}])
  }
}