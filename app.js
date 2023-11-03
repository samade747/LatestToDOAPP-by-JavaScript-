var getul = document.getElementById('ul');

function additem(){
    var ca = document.getElementById('textinput');
    var li = document.createElement('li');
    var litext = document.createTextNode(ca.value);
    li.appendChild(litext)
    getul.appendChild(li)
    ca.value = ''
    



}