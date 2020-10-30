const addEntryBtn = document.getElementById("add-entry");
const entry = document.getElementById("entry");
const tbod = document.getElementsByTagName("tbody");
const tbody = tbod[0];

let marked = 0;
let numPositiveClicks = 0;
let numNegativeClicks = 0;
addEntryBtn.onclick = function() {
    numPositiveClicks++;

    const entriesNone = document.querySelector("h2");
    entriesNone.style.display = "none";

    const numTasks = document.querySelector("span");

    const newEntry = document.createElement("tr");
    const data1 = document.createElement("td");
    const data2 = document.createElement("td");
    const data3 = document.createElement("td");
    const data4 = document.createElement("td");
    const data5 = document.createElement("td");

    const itemNum = document.createElement("p");
    const itemName = document.createElement("input");
    const itemDesc = document.createElement("textarea");
    const mark = document.createElement("button");
    const remove = document.createElement("button");

    itemNum.setAttribute("class", "item-num");
    itemName.setAttribute("class", "item-name-input");
    itemDesc.setAttribute("class", "item-desc-textarea");
    
    mark.textContent = "Mark Complete";
    mark.setAttribute("class", "mark-button");

    remove.textContent = "Remove Entry";
    remove.setAttribute("class", "remove-button"); 

    data1.appendChild(itemNum);
    data2.appendChild(itemName);
    data3.appendChild(itemDesc);
    data4.appendChild(mark);
    data5.appendChild(remove);

    newEntry.appendChild(data1);
    newEntry.appendChild(data2);
    newEntry.appendChild(data3);
    newEntry.appendChild(data4);
    newEntry.appendChild(data5);
    newEntry.setAttribute("class", "tr-in-tbody");

    tbody.appendChild(newEntry);

    mark.onclick = function() {
        marked++;
        numTasks.textContent = marked;
        mark.parentElement.previousSibling.previousSibling.previousSibling.style.backgroundColor = "green";
        mark.disabled = "true";
    }
    
    remove.onclick = function() {
        numNegativeClicks++;
        remove.parentElement.parentElement.style.display = "none";

        let showNoCurrent = numPositiveClicks - numNegativeClicks;
        if (showNoCurrent == 0) {
            entriesNone.style.display = "block";
        }
    }
}
