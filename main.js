//let statements 
let toDoItem = document.getElementById('toDo');
let itemTitle = document.getElementById('listTypes');
let addButton = document.getElementById('addToList');
let gro = document.getElementById('Groceries');
let work = document.getElementById('Workouts');
let oth = document.getElementById('Other');


//Add to the list
addButton.onclick = AddToList;

function AddToList(e) {
    e.preventDefault();
    let listItem = toDoItem.value;
    let ItemTitle = itemTitle.value;

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
        //sorts the items into there sections
        if (ItemTitle == "groceries") {
            gro.insertBefore(li, gro.firstChild);
            li.insertBefore(checkbox, li.firstChild);
            li.appendChild(del);
        } else if (ItemTitle == "workout") {
            work.insertBefore(li, work.firstChild);
            li.insertBefore(checkbox, li.firstChild);
            li.appendChild(del);
        } else {
            oth.insertBefore(li, oth.firstChild);
            li.insertBefore(checkbox, li.firstChild);
            li.appendChild(del);

        }



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
    let ol = e.target.closest('ol');

    //added bit more take make this so they can uncheck and it will go back to noraml!
    //messed with this more so it moves the right item within the right list
    if (check.name == "unchecked") {
        current.setAttribute('style', 'text-decoration: line-through; color: red');
        ol.appendChild(current);
        document.getElementById("check").play();
        check.setAttribute('name', 'checked');
    } else {
        current.setAttribute('style', 'color: black');
        ol.insertBefore(current, ol.firstChild);
        check.setAttribute('name', 'unchecked');
        document.getElementById("mistake").play();
    } //added sound for if you unckeck something it says oops! i had lots of fun with sounds stuff :P
}