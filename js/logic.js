const totalIncome = document.querySelector("#total-income");

function renderIncome(doc) {
    let li = document.createElement("li");
    let name = document.createElement("span");
    let amount = document.createElement("span");

    li.setAttribute("data-id", doc.id);
    name.textContent = doc.data().name;
    amount.textContent = doc.data().amount;

    li.appendChild(name);
    li.appendChild(amount);
    
    totalIncome.appendChild(li);
}