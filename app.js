var getul = document.getElementById('ul');
var clearallitems = document.getElementById('clearitems')

var clibutton = document.createElement('button');
clibutton.className = 'btn btn-danger';
clibutton.appendChild(document.createTextNode('Clear Items'));
clibutton.addEventListener('click', deleteall);
clearallitems.appendChild(clibutton);
var lastAddedItem;
var bodyback = document.getElementById('body1')




function additem(){
    var ca = document.getElementById('textinput');
    var li = document.createElement('li');
    var litext = document.createTextNode(ca.value);
    li.appendChild(litext)
    getul.appendChild(li)
    savingtoLocalStorage();
    ca.value = ''
    var deletebtn = document.createElement('button');
    var deletebtntext = document.createTextNode('del');
    deletebtn.appendChild(deletebtntext);
    li.appendChild(deletebtn);
    deletebtn.setAttribute('onclick', 'del(this.parentNode)');
    var editbtn = document.createElement('button');
    var editbtntext = document.createTextNode('Edit')
    editbtn.appendChild(editbtntext);
    editbtn.setAttribute('onclick', 'editfun(this)')
    
    li.appendChild(editbtn)
    deletebtn.setAttribute( 'class', 'btn btn-danger aaa')
    deletebtn.setAttribute('onclick', 'del(this)');
    editbtn.setAttribute('class', 'btn btn-info aaa')
    li.style.listStyleType = 'none';

    savingtoLocalStorage(li.innerText.trim());

    if(!document.getElementById('clearButton')){
    // var clibutton = document.createElement('Button')
    // var clearallitemstext = document.createTextNode('clear items')
    // clearallitems.appendChild(clearallitemstext);
    clearallitems.setAttribute('onclick', 'deleteall()' );    
    clearallitems.append(clibutton);
    

}
    lastAddedItem = li;
}


function savingtoLocalStorage(item){
    // Retriving Existing items in our local storage
    var items = JSON.parse(localStorage.getItem('items')) || [] ;
    // Now we add new items into array, ab ham new item array mai add krengai
    items.push(item);
    // save the updated array back to local storage
    localStorage.setItem('items', JSON.stringify(items));
}





function deleteall(){
    getul.innerHTML = ''
    clearallitems.innerHTML = '';
    // clearallitems.display = none;
    localStorage.clear()
}


function del(e){
    e.parentNode.remove(e)
}


function editfun(e){
    var userEdit = e.parentNode.firstChild.nodeValue;
    document.getElementById('textinput').value = userEdit;
    e.parentNode.remove(e);
    
}

// function edititem(){
//     var ca = document.getElementById('textinput');
//     var li = lastAddedItem;
//     if(li){
//         li.firstChild.nodeValue = ca.value;
//         ca.value = '';
//     }
    

// }

function themechange(){
    console.log("Function called")
    var body = document.getElementById('body1');
    var checkbox = document.querySelector('.theme-checkbox');
    

    if (checkbox.checked){
        body.style.backgroundColor = 'black';

    } else {
        body.style.backgroundColor = 'rgba(238,244,250,255)';
    }
}


function themechange1(){
    console.log("Function called")
    var indoor = document.getElementById('indoor');
    var checkbox1 = document.getElementById('ind1');
    console.log("Checkbox checked: " + checkbox1.checked);

    if (checkbox1.checked){
        indoor.style.backgroundColor = 'black';

    } else {
        indoor.style.backgroundColor = 'rgba(238,244,250,255)';
    }
}