

export interface User{
  username:string,
  socketId:string
}

export interface Message{
  message:string,
  user:User,
  time:string,
  roomName:string
}

export interface JoinPaylod{
  roomName:string,
  user:User
}