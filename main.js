//let statements 
let toDoItem = document.getElementById('toDo');
let addButton = document.getElementById('addToList');
let lists = document.getElementById('lists');


//Add to the list
addButton.onclick = AddToList;

function AddToList(e) {
    e.preventDefault();
    let listItem = toDoItem.value;
    let li = document.createElement('li');
    let checkbox = document.createElement('input');
    let del = document.createElement('button');

    del.textContent = 'Delete';
    del.setAttribute('id', 'delete');

    checkbox.setAttribute('type', 'checkbox');
    li.setAttribute('id', listItem);
    li.appendChild(checkbox);
    li.textContent = '  ' + listItem + '  ';

    lists.appendChild(li);
    li.insertBefore(checkbox, li.firstChild);
    li.appendChild(del);

    del.onclick = Delete;
    checkbox.addEventListener('change', modify);
}

function Delete(e) {
    let neerLi = e.target.closest('li');
    neerLi.remove();
    document.getElementById("deadly").play();
}

function modify(e) {
    let current = e.target.closest('li');
    current.setAttribute('style', 'text-decoration: line-through; color: red');
    lists.appendChild(current);
    document.getElementById("check").play();
}