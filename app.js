// User click on the button.

// We capture the text in the input field.

// Display that text on the screen.
    //create the element
    //add the user text to the element
    //add the element as a child to UL

// When delete is clicked, delete the item.
    //add a delete button
    //delete button on click, should remove the item
        //add an event listner
        //delete the parent

// when item is added clear the text field.

// Auto focus after Add item.

// Enable Enter-to-submit functionality

document.addEventListener("DOMContentLoaded",init)

function init() {

    const form = document.querySelector("form.add");
    const addButton = document.querySelector("#addButton");
    const itemToAdd = document.querySelector("#itemToAdd");
    const ul = document.querySelector(".todo");
    const clearList = document.querySelector("#clearList")


    clearList.addEventListener("click",function () {
        ul.innerHTML = "";
        itemToAdd.value = "";
        itemToAdd.focus();
    })


    form.addEventListener("submit",function(event){
        event.preventDefault();
        if (itemToAdd.value){
            const newItem = createListItem(itemToAdd.value);
            ul.appendChild(newItem);
            itemToAdd.value = "";
            itemToAdd.focus();
        }
    });

    function createListItem(itemAdd) {
        const item = document.createElement("li");
        const span = document.createElement("span");
        const dltBtn = document.createElement("button");

        span.textContent = itemAdd
        dltBtn.textContent = "Delete"
        dltBtn.classList.add('btn-link');

        item.appendChild(span);
        item.appendChild(dltBtn);


        dltBtn.addEventListener("click", function () {
            item.parentNode.removeChild(item)
        })

        return item;
    }

}




