const date = new Date().toISOString().substring(0, 10); //змінна з поточною датою   2
const allLi = document.getElementsByTagName("li");

const inDate = document.querySelector(".date"); // обʼєкт input для вводу date    1
inDate.setAttribute("min", date);
inDate.addEventListener("change", createInput);

const btn = document
  .querySelector(".bat")
  .addEventListener("click", addNewList);

function showDate(today) {
  // функція передає дату в інпут дейт    4
  return (inDate.value = today);
}

showDate(date); // 3

function addNewList() {
  const nameGoods = document.querySelector(".goods");
  if (nameGoods != null && nameGoods.value != "") {
    const newGoods = document.createElement("li");
    document.querySelector(".list").append(newGoods);

    newGoods.innerHTML = `${inDate.value} ${nameGoods.value} `;

    nameGoods.remove();
    inDate.addEventListener("change", createInput);
    inDate.value = date;
  }
  listenerForLi();
  contextMenu();
}

function createInput() {
  //динамічно створюю поле вводу продукта та його кількість
  const goods = document.createElement("input");
  goods.classList.add("goods");
  goods.setAttribute("type", "text");

  document.querySelector(".bat").before(goods);

  inDate.removeEventListener("change", createInput);
}

function listenerForLi() {
  for (i = 0; i < allLi.length; i++) {
    allLi[i].addEventListener("click", test);
  }
}

let objectLi;
function test() {
  toggleForUl();
  objectLi = this;
}

function contextMenu() {
  const newDiv = document.createElement("div");
  newDiv.classList.add("divForContext");
  document.querySelector(".conteiner").append(newDiv);

  const del = document.createElement("ul");
  del.classList.add("ulDel");
  del.value = deleteUl;
  del.textContent = "delete";
  newDiv.append(del);

  const change = document.createElement("ul");
  change.classList.add("ulChange");
  change.value = changeUl;
  change.textContent = "change";
  newDiv.append(change);

  listenerForUl();
}

function toggleForUl() {
  const divUl = document.querySelector(".divForContext");
  if (divUl.style.display === "" || divUl.style.display === "none") {
    console.log("case 1");
    divUl.style.display = "block";
  } else {
    console.log("case 2");
    divUl.style.display = "none";
  }
}

function listenerForUl() {
  const allUl = document.getElementsByTagName("ul");
  for (let i = 0; i < allUl.length; i++) {
    allUl[i].addEventListener("click", eventForLi);
  }
}

function eventForLi() {
  this.value(objectLi);
}

function changeUl(elemUl) {
  const d = elemUl.textContent.slice(0, 10);
  elemUl.textContent = `${d} ${prompt()}`;
  document.querySelector(".divForContext").style.display = "none";
}

function deleteUl(elemUl) {
  elemUl.remove();
  document.querySelector(".divForContext").style.display = "none";
}
