document.getElementById("itemForm").addEventListener('submit', function(event){
    event.preventDefault();

    const itemName = document.getElementById("itemName").value;
    const itemAmount = document.getElementById("itemAmount").value;

    if(!itemName || !itemAmount){
        alert("fill the inputs");
        return;
    }

    addItemToTable(itemName,itemAmount);
    document.getElementById("itemForm").reset();

});

let itemId= 0;

function addItemToTable(name,amount){
    const tableBody = document.getElementById("itemsTableBody");

    const row = tableBody.insertRow();

    row.setAttribute("id", "item-" + itemId);

    row.insertCell(0).innerText = itemId + 1;
    row.insertCell(1).innerText = name;
    row.insertCell(2).innerText = amount;

   const actionsCell = row.insertCell(3);
  actionsCell.innerHTML = `<button onclick="editItem(${itemId})" class="btn btn-primary btn-sm">Edit</button>
                             <button onclick="deleteItem(${itemId})" class="btn btn-danger btn-sm">Delete</button>`;

  itemId++;



}





