function length() {
  let str = document.getElementById("string").value;
  var n = str.length;
  document.getElementById("number").innerHTML = "Amount of characters: "+str.length;
  document.getElementById("output").innerHTML = "'"+str+"'";
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
