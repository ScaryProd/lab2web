// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
var pokemonValue;



for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
let items = [];
let total = Number("0");
// Create a new list item when clicking on the "Add" button
function newElement() {

  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  

  var totalVar = document.getElementById("totalSpan");
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonValue}`).then(response => {
  const pokemon = response.data
  // El weight esta en pokemon.weight
  })

  var inputCost = pokemon.weight;

  var t = document.createTextNode(inputValue);
  var cost = document.createTextNode(inputCost);
  var costSpan = document.createElement("span");
  costSpan.className = "cost"
  costSpan.append(cost)
  li.appendChild(t);
  //li.appendChild(tab);
  li.appendChild(costSpan);
  if (inputValue === '') {
    document.getElementById("myDIV").style.backgroundColor = "red";
  } else {
    document.getElementById("myDIV").style.backgroundColor = "transparent";
    total += Number(inputCost);
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  totalVar.innerText = total;
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function(event) {
      let cost = event.target.parentNode.querySelector("span.cost").innerText;
      var newTotal = parseFloat(document.getElementById("totalSpan").innerText) - cost;
      document.getElementById("totalSpan").innerText = newTotal;
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}