const dgram = require("dgram")

const socket = dgram.createSocket('udp4')
// ipv4
socket.on('message', (msg,rinfo)=>{
    console.log(`Server got ${msg} from ${rinfo.address}:${rinfo.port}`)
})


socket.bind(8081)