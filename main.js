//let statements 
let toDoItem = document.getElementById('toDo');
let addButton = document.getElementById('addToList');
let lists = document.getElementById('lists');


//Add to the list
addButton.onclick = AddToList;

function AddToList(e) {
    e.preventDefault();
    let listItem = toDoItem.value;

    if (listItem.trim()) { //Simple if statement to check that the user actuall added text! the trim makes it so they cant just put a bunch of spaces!

        //create my three elements
        let li = document.createElement('li');
        let checkbox = document.createElement('input');
        let del = document.createElement('button');

        //Add some attributes and text, including text in input
        del.textContent = 'Delete';
        del.setAttribute('id', 'delete');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('name', 'unchecked');
        li.setAttribute('id', listItem);
        li.appendChild(checkbox);
        li.textContent = '  ' + listItem + '  ';

        //inserts and appends! id did an insert before for the li, this makes it so the new item comes in at the top instead of under ones already checked off! looks better basiclly!
        lists.insertBefore(li, lists.firstChild);
        li.insertBefore(checkbox, li.firstChild);
        li.appendChild(del);

        //delete button and checkbox listener. P.S u might not want to delete anything.... u have been warned :p
        del.onclick = Delete;
        checkbox.addEventListener('change', modify);

    } else { //alert system incase they dont add any text and hit the add button!
        alert("You can not leave your to do list empty!");
    }

}

//my delete function, give it a short if your dare!
function Delete(e) {
    let neerLi = e.target.closest('li');
    neerLi.remove();
    document.getElementById("deadly").play();
}

//modifies my li when checkbox is clicked
function modify(e) {
    let check = e.target.closest('input');
    let current = e.target.closest('li');

    //added bit more take make this so they can uncheck and it will go back to noraml!
    if (check.name == "unchecked") {
        current.setAttribute('style', 'text-decoration: line-through; color: red');
        lists.appendChild(current);
        document.getElementById("check").play();
        check.setAttribute('name', 'checked');
    } else {
        current.setAttribute('style', 'text-decoration: underline; color: black');
        lists.insertBefore(current, lists.firstChild);
        check.setAttribute('name', 'unchecked');
        document.getElementById("mistake").play();
    } //added sound for if you unckeck something it says oops! i had lots of fun with sounds stuff :P
}