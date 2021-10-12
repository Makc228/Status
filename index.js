var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Крутой статус !!!",
assets : {
large_image : "5",
large_text : "Уютный Сервер"
},
buttons : [{label : "Уютный Сервер" , url : "https://discord.gg/pkB8CsxvJw"}]
}
})
})
client.login({ clientId : "787746892230033479" }).catch(console.error);