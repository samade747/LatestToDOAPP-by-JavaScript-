var getul = document.getElementById('ul');
var clearallitems = document.getElementById('clearitems')

var clibutton = document.createElement('button');
clibutton.className = 'btn btn-danger';
clibutton.appendChild(document.createTextNode('Clear Items'));
clibutton.addEventListener('click', deleteall);
clearallitems.appendChild(clibutton);


function additem(){
    var ca = document.getElementById('textinput');
    var li = document.createElement('li');
    var litext = document.createTextNode(ca.value);
    li.appendChild(litext)
    getul.appendChild(li)
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


    if(!document.getElementById('clearButton')){
    // var clibutton = document.createElement('Button')
    // var clearallitemstext = document.createTextNode('clear items')
    // clearallitems.appendChild(clearallitemstext);
    clearallitems.setAttribute('onclick', 'deleteall()' );    
    clearallitems.append(clibutton);

}

}






function deleteall(){
    getul.innerHTML = ''
    clearallitems.innerHTML = '';
    clearallitems.display = none;
}


function del(e){
    e.parentNode.remove()
}


function editfun(e){
    var userEdit = prompt('Enter Edit value' ,e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = userEdit;
}