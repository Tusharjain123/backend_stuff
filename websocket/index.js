const http = require("http")
const websocketServer = require("websocket").server

let connection = null

const httpServer = http.createServer((req,res) => {
    console.log("Request Received")
})

const websocket = new websocketServer({
    "httpServer": httpServer
})
// request on webSocket
// if someone request this websocket then call this function
websocket.on("request", request =>{
    // You decide as a server whether accept it as or not
    // in first parameter it is accepted protocol
    // you can create your own protocol like gaming chatting or anything that is secure 
    // here we have pass null to denote accept all protocol 
    // you can check the origin 
    connection = request.accept(null, request.origin)
    // req.accept gives the switching protocol if accepted

    connection.on("open", () =>{
      console.log("Opened")  
    })
    connection.off ("close",(e)=>{
        console.log("Closed")
    })
    connection.on("message",(message)=>{
        console.log(message.utf8Data)
    })
    // we are going to get a connection of connection
    fun()
} )

httpServer.listen(8080, ()=> {
    console.log("Port 8080")
})

function fun(){
    connection.send(`Message from server ${Math.random()}`)

    setTimeout(fun, 3000)
}