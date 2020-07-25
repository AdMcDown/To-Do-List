//hands drag and drop functions for browers API
let workouts = document.getElementById('Wul');
let groceries = document.getElementById('Gul');
let notePad = document.getElementById('notePad');


//for loops to add all my drag and dropp features to my elements

//set whats needed in groceries for drag items
let gItems = groceries.getElementsByTagName('li');
for (i = 0; i < gItems.length; i++) {
    gItems[i].setAttribute('id', gItems[i].textContent);
    gItems[i].setAttribute('class', 'grocery');
    gItems[i].setAttribute('draggable', true);
    gItems[i].setAttribute('ondragstart', 'dragging(event)');
}

//set whats needed in workouts for drag items
let wItems = workouts.getElementsByTagName('li');
for (i = 0; i < wItems.length; i++) {
    wItems[i].setAttribute('id', wItems[i].textContent);
    wItems[i].setAttribute('class', 'workout');
    wItems[i].setAttribute('draggable', true);
    wItems[i].setAttribute('ondragstart', 'dragging(event)');
}

//sets up notePad to accept drops
notePad.setAttribute('ondrop', 'drop(event)');
notePad.setAttribute('ondragover', 'allowDrop(event)');
notePad.setAttribute('ondragenter', 'dragIn(event)');
notePad.setAttribute('ondragleave', 'dragOut(event)');

//simple drag function, allows draging of targeted item
function dragging(e) {
    if (welcome.className == "Logged In") {
        e.dataTransfer.setData('text', e.target.id);
    } else {
        alert("You must Login to facebook at access your to do list");
    }
}

function drop(e) {
    e.preventDefault();
    let info = e.dataTransfer.getData('text');
    let data = document.getElementById(info); //gets the element so i can check its class later in code

    let li = document.createElement('li');
    let checkbox = document.createElement('input');
    let del = document.createElement('button');

    //checks if dragged item is from the groceries or workouts and makes them in the proper list
    if (data.className == 'grocery') {

        del.textContent = 'Delete';
        del.setAttribute('id', 'delete');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('name', 'unchecked');
        li.setAttribute('id', info);
        li.appendChild(checkbox);
        li.textContent = '  ' + info + '  ';

        gro.insertBefore(li, gro.firstChild);
        li.insertBefore(checkbox, li.firstChild);
        li.appendChild(del);

    } else if (data.className == 'workout') {

        del.textContent = 'Delete';
        del.setAttribute('id', 'delete');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('name', 'unchecked');
        li.setAttribute('id', info);
        li.appendChild(checkbox);
        li.textContent = '  ' + info + '  ';

        work.insertBefore(li, work.firstChild);
        li.insertBefore(checkbox, li.firstChild);
        li.appendChild(del);
    }

    //so this grabs the methods from another js folder!!! same with using some of the elements grabbed above like gro!!!
    //glad it works, which means i dont have to re write the same code for the delete and modify
    //im assuming it works because the other js folder is called on first anf therefore this folder knows all its info.
    //I'm sure its not the right way and maybe a bit slopy but makes it easier and this did take time to figure out :P
    del.onclick = Delete;
    checkbox.addEventListener('change', modify);
}

//shows its a drop area i think... didnt get this part that well
function allowDrop(e) {
    e.preventDefault();
}

//add this for a drag in effect but its far from perfect...
//it will change the colour but wont work if you hover over an element within the section which idk y
function dragIn(e) {
    e.preventDefault();

    if (e.target.className == 'notePad') {
        e.target.style.background = 'rgb(230, 230, 250, 0.6)';
    }
}

function dragOut(e) {
    e.preventDefault();

    if (e.target.className == 'notePad') {
        e.target.style.background = 'rgb(255, 255, 136, 0.6)';
    }
}