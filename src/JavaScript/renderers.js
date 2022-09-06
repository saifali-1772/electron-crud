let {remote, dialog} = require('electron');
const dbInstance = remote.getGlobal('db');

// console.log(dbInstance)
let sname = document.getElementsByName('sname')[0].value;
let saddress = document.getElementsByName('saddress')[0].value;
let sphone = document.getElementsByName('sphone')[0].value;
let Btn = document.getElementById('addBtn');
// if(Btn){
   Btn.addEventListener('submit',async (e)=>{
      // e.preventDefault()

      // if(sname!='' && saddress!='' && sphone!=''){
         dbInstance.create({
            name: sname,
            address: saddress,
            phone: sphone
         })
         // .then(result => {
         //    sname = ''
         //    saddress = ''
         //    sphone = ''
         // })
      // }else{
      //    console.log();
      // }
   })
// }

// form.addEventListener("submit", async (e) => {
//   e.preventDefault()
//   let line = input.value
//   input.value = ""
//   let responseText = await ipcRenderer.invoke("console", line)
//   let response = document.createElement("div")
//   response.textContent = responseText
//   responses.appendChild(response)
// })