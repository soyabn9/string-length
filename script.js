function length() {
  let str = document.getElementById("string");
  calculateString(str.value);
}

function calculateString(str) {
  document.getElementById("output").innerHTML = "Amount of characters: "+str.length;
  document.getElementById("input").innerHTML = str;
}

function copyElementText() {
    var text = document.getElementById("output").innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    alert("Copied");
}
