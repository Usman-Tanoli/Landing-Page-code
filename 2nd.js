const input_box=document.getElementById('input_box');
const list_container=document.getElementById('list_container');
const button=document.getElementById('button_click');
button.addEventListener('click',function(){
    if(input_box.value===""){
        alert("Write something")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input_box.value;
        list_container.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input_box.value='';
    savedata();
})
list_container.addEventListener('click',function(e){
if(e.target.tagName==="LI"){
    e.target.classList.toggle('checked');
    savedata();
}
else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
}
},false);
function savedata(){
    localStorage.setItem("data",list_container.innerHTML);
};
function showTask(){
    list_container.innerHTML=localStorage.getItem("data");
};
showTask();