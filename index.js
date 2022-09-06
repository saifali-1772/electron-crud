const {app, BrowserWindow} = require('electron')
const ejse = require('ejs-electron')
const axios = require('axios').default;
const fetch = require('electron-fetch').default;
// const db = require('./src/db/config/db_config')
// const {ipcMain} = require('electron')
// global.db = db;

ejse.data('userData',[{
   id:1,
   name:"amit",
   roll: 78,
   contact: 9848983432,
   location: "pune location",
   class: "B.Sc"
},
{
   id:2,
   name:"rajesh",
   roll: 86,
   contact: 9848983432,
   location: "pune location",
   class: "B.Com"
}
])
// axios.get('http://localhost:4000/getAll').then(result=>ejse.data('userData',result.data)).catch(err=>console.log(err))
   
async function getUser() {
   try {
      // const response = await axios.get('https://reqres.in/api/users/2');
      // const response = await axios.get('​​http://127.0.0.1:6677/api/crud/read');
      // ejse.data('userData',[response.data.data])
      // return [response.data.data]
      // fetch('https://reqres.in/api/users/2').then(res=>{
         let response = await axios.get('​​http://127.0.0.1:6677/api/crud/read ')
         console.log(response.data.data);
         // .then(res => res.json())
         // .then(body => console.log(body))
         // .catch(err=> console.log(err))
      // console.log(response); 
   } catch (error) {
     console.error(error);
   }
 }
 getUser()

app.allowRendererProcessReuse = false
function createWindow(){
   let win = new BrowserWindow({
      width:1200,
      height:700,
      webPreferences:{
         nodeIntegration:true,
         contextIsolation:false
      }
   })
   win.loadFile('./src/pages/index.ejs')
   // win.loadFile('./index.ejs')
}

// app.on('ready',createWindow)
app.whenReady().then(createWindow)

// console.log(process.platform);
app.on('window-all-closed',()=>{
   if(process.platform !== 'darwin') app.quit();
})

app.on('activate', function () {
   if (BrowserWindow.getAllWindows().length === 0) createWindow()
 })