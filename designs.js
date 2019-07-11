const mainHeading = document.querySelector('h1');

mainHeading.addEventListener('click',function(){
  mainHeading.style.backgroundColor='aqua';
});

const table = document.querySelector("table");

function makeGrid(height,width){
  table.innerHTML='';
  for(let i=0;i<height;i++){
    const tr=document.createElement('tr');
    table.appendChild(tr);
    for(let j=0;j<width;j++){
      const td=document.createElement('td');
      tr.appendChild(td);
    }
  }
}

const sizePicker = document.querySelector('#sizePicker');

sizePicker.addEventListener("submit",function(event){
  event.preventDefault();
  const height=document.querySelector('#inputHeight');
  const width=document.querySelector('#inputWidth');
  makeGrid(height.value,width.value);
});

table.addEventListener("click",function(event){
  const colorPicker=document.querySelector("#colorPicker");
  if(event.target.nodeName==='TD'){
    event.target.style.backgroundColor=colorPicker.value;
  }
});
