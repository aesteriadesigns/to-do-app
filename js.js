var item = document.getElementsByTagName("LI");
var i;
for (i = 0; i < item.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  item[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function addItem() {
    var item = document.createElement("li");
    var inputValue = document.getElementById("list-input--field").value;
    var textnode = document.createTextNode(inputValue);

    item.appendChild(textnode);
    if (inputValue === "") {
        alert("Please fill out the field.");
    } else {
        document.getElementById("list").appendChild(item);
    }

    document.getElementById("list-input--field").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    item.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        }
    }
}

function showModal() {
	var modal = document.getElementById("modal");
	var btn = document.getElementById("modalbtn");
	var close = document.getElementsByClassName("closebtn")[0];

	if (modal.style.display == "block") {
		modal.style.display = "none";
	} else {
		modal.style.display = "block";
	}

	close.onclick = function() {
	    modal.style.display = "none";
	}

	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}
}
