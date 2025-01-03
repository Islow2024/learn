let itemId = 0;
let isEditing = false; // Flag to track editing state
let editingItemId = null; // Store the ID of the row being edited

document.getElementById("itemForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const itemName = document.getElementById("itemName").value;
  const itemAmount = document.getElementById("itemAmount").value;

  if (!itemName || !itemAmount) {
    alert("Please fill out all fields.");
    return;
  }

  if (isEditing) {
    updateItem(editingItemId, itemName, itemAmount);
  } else {
    addItemToTable(itemName, itemAmount);
  }

  document.getElementById("itemForm").reset();
  isEditing = false; // Reset the editing state
  editingItemId = null; // Clear the editing ID
});

function addItemToTable(name, amount) {
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

function editItem(id) {
  const row = document.getElementById("item-" + id);
  const name = row.cells[1].innerText;
  const amount = row.cells[2].innerText;

  document.getElementById("itemName").value = name;
  document.getElementById("itemAmount").value = amount;

  isEditing = true; // Set to editing mode
  editingItemId = id; // Store the ID of the row being edited
}

function updateItem(id, name, amount) {
  const row = document.getElementById("item-" + id);

  row.cells[1].innerText = name;
  row.cells[2].innerText = amount;

  isEditing = false; // Reset the editing state
  editingItemId = null; // Clear the editing ID
}

function deleteItem(id) {
  // Show a confirmation dialog
  const isConfirmed = confirm("Are you sure you want to delete this item?");
  
  if (isConfirmed) {
    const row = document.getElementById("item-" + id);
    row.parentNode.removeChild(row);
  }
}
