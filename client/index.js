const socket=io('http://localhost:3000')
socket.on("connect",()=>{
  console.log("connected")


})
socket.on('client_chat',(data)=>{
  console.log(data)
})

socket.on('error',(data)=>{
  console.log(data)
})

const msgInput=document.querySelector("#messageInput")
const sendBtn=document.querySelector("#sendBtn")
const usernameTag=document.querySelector("#username")
const msg_sent=document.querySelector("#msg_sent")

const roomName=prompt("enter name room :", "GangBang")
const username=prompt("enter username :", "مهران فریدونی")

sendBtn.addEventListener("click",()=>{
  usernameTag.innerHTML=username
  const message=msgInput.value
  if(roomName && username){
    socket.emit("join_room",{
      roomName,
      user:{
        username,
        socketId:socket.id
      }
    })
    
    socket.emit('server_chat',{
      message,
      roomName,
      user:{
        username,
        socketId:socket.id
      },
      time:new Date().toISOString()
    })
    msg_sent.innerHTML=message

  }else{
    alert("please enter data")
  }
})

