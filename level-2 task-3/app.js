const input=document.querySelector('input')
const ol=document.querySelector('ol')
let todoarry=[]
function addtodo() {
   
    if (input.value=="") {
        alert('first enter input')
    } else {
        todoarry.push(input.value)
       ol.innerHTML=''
       for (let i = 0; i<todoarry.length; i++) {
      const list = todoarry[i];
       ol.innerHTML +=`<li> ${list}
       <button onclick="deletetext(${i})"><i class="ri-delete-bin-5-line"></i></button>
       <button onclick="edittext(${i})"><i class="ri-edit-line"></i></button></li>`
       } 
    }
    
    input.value=''
    
}


function render(){
    ol.innerHTML=''
       for (let i = 0; i<todoarry.length; i++) {
      const list = todoarry[i];
       ol.innerHTML +=`<li> ${list}
       <button onclick="deletetext(${i})"><i class="ri-delete-bin-5-line"></i></button>
       <button onclick="edittext(${i})"><i class="ri-edit-line"></i></button></li>`
       } 
}


function deletetext(index){
    todoarry.splice(index,1)
    render()
}


function edittext(index) {
    const textchange= prompt('enter edited value')
    todoarry.splice(index,1,textchange)
    render()
}