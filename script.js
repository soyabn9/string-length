function remove() {
  let str = document.getElementById("string");
  whitespaceString(str.value);
}

function whitespaceString(str) {
  document.getElementById("output").innerHTML = str
      .trim();
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
}
