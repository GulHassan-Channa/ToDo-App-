
var input = document.getElementById('input');
var textstore = document.getElementById('valuestore')
var remove =document.getElementById('Remove')
function Add(){
    var listItems = document.createElement('li')
    listItems.innerText=input.value;
    textstore.appendChild(listItems)
    input.value="";
    remove.addEventListener('click' , function (){
        textstore.removeChild(listItems);

    })
    listItems.addEventListener('click' , function (){
        textstore.removeChild(listItems);

    })
}
