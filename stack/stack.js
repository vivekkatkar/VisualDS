var container = document.getElementById("stack");
var i = 0;

var overflow = document.getElementById("msg_over");	 
var msg = document.createElement("label");

var underflow = document.getElementById("msg_under");	 
var msg2 = document.createElement("label");

function push() {
	if(i==6)
	{
		msg.innerHTML = "YES";
		overflow.appendChild(msg);
	}
	else
	{
		var value = Math.ceil(Math.random() * 100);

		var array_ele = document.createElement("div");

		array_ele.classList.add("block");
		array_ele.style.transform = `translate(${i * 70}px)`;

		var array_ele_label = document.createElement("label");
		array_ele_label.classList.add("block_id");
		array_ele_label.innerHTML = value;

		array_ele.appendChild(array_ele_label);
		container.appendChild(array_ele);

		i = i+1;
		msg2.innerHTML = "NO";
		underflow.appendChild(msg2);
		msg.innerHTML = " ";
		overflow.appendChild(msg);
	}
}

function pop()
{
	if(i==0)
	{
		msg2.innerHTML = "YES";
		underflow.appendChild(msg2);
	}
	else
	{
		var stack = document.getElementById("stack");
		var block = document.getElementsByClassName("block");

		stack.removeChild(block[i-1]);
		i = i-1;

		msg2.innerHTML = "NO";
		underflow.appendChild(msg2);
		
		msg.innerHTML = " ";
		overflow.appendChild(msg);
	}
}

  