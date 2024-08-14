let icon = document.getElementById('icon');
let task = document.getElementById('task');
let submit = document.getElementById('takedata');
let taskcontainer = document.querySelector('.listcontent')
let edit = document.querySelector('#edit')
let remove = document.querySelector('#delete')
let value,newelem;
console.log(taskcontainer);
let a = 0;
let count = 0


icon.addEventListener('click', function () {

    a = a + 360;
    gsap.to(icon, {

        rotate: a,
        duration: 1,
        ease: "power1.out",
    })
})
let x = 1;
submit.addEventListener('click', function () {
    value = task.value;
    console.log(value);
    if (value == "") {
        Swal.fire("No Task Added");
    }
    else {
        let div = document.createElement('div');
        let action = document.createElement('div')
       
        taskcontainer.appendChild(div)
        div.setAttribute('id', 'task' + x)
        div.setAttribute('class', 'task')
        action.setAttribute('class', 'action')
        let p = document.createElement('p');
        p.setAttribute('class', 'taskp');
        p.textContent = value;
        div.appendChild(p)
        div.appendChild(action)
        let editicon = document.createElement("i")
        editicon.classList.add('fa-solid','fa-pen-to-square','fa-xl','edit')
        let deleteicon = document.createElement("i")
        deleteicon.classList.add('fa-solid','fa-trash','fa-xl','delete')
        action.appendChild(editicon)
        action.appendChild(deleteicon)
        editicon.setAttribute('data-bs-toggle', 'modal')
        editicon.setAttribute('data-bs-target', '#nextvalue')
       

      
        console.log(taskcontainer);
        x++;
        task.value = "";
       
        
        removetask()
        edittask()
        count++;
       
        
    }
})
// delete

function removetask(){
    let delete1 = document.querySelectorAll('.delete')
    for (let i = count; i < delete1.length; i++) {
    delete1[i].addEventListener('click',function(){
        delete1[i].parentNode.parentNode.remove()
    })

}
}

function edittask(){
    let task1 = document.getElementById('task1')
    let edit1 = document.querySelectorAll('.edit');
    let change = document.getElementById('againdata')
    
    for(let i = count; i<edit1.length; i++){
       edit1[i].addEventListener('click',function(){
        let elem = edit1[i].parentNode.previousSibling
        task1.value = elem.textContent;
        newelem = elem;

       })
    }
    change.addEventListener('click',function(){
        let nexttask = task1.value;
        newelem.textContent = nexttask;
    })

}
  




    


