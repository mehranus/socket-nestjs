const gurop=io('http://localhost:3000/gurop')
gurop.on("connect",()=>{

  gurop.emit("list",{message:"send gurop list!"})
  gurop.on("list",(data)=>{
    console.log("gurop list : "+ JSON.stringify(data))
  })
})