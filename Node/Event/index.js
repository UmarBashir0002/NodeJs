const EventEmitter =  require('events');
const event = new EventEmitter();

event.on("Name",()=>{
    console.log("HELLO MY NAME IS UMAR ");
})
event.on("Name",()=>{
    console.log("HELLO ");
})
event.emit("Name");







event.on("pageLoad", (a,i)=>{
if (i==200) {
    console.log(`status is ${i} and condition is ${a}`);
} else{
    console.log("attempt failed");
}
})

event.emit("pageLoad",true,100);
