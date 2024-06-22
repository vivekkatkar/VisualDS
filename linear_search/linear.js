var container = document.getElementById("array");

function generatearray() {
    
	for (var i = 0; i < 10; i++) {

		var value = Math.ceil(Math.random() * 100);

		var array_ele = document.createElement("div");

		array_ele.classList.add("block");
		array_ele.style.transform = `translate(${i * 70}px)`;

		var array_ele_label = document.createElement("label");
		array_ele_label.classList.add("block_id");
		array_ele_label.innerText = value;

		array_ele.appendChild(array_ele_label);
		container.appendChild(array_ele);

		var label_div = document.createElement("div");
		label_div.classList.add("block_arrow");
		var new_label = document.createElement("label");
		new_label.classList.add("arrow_label");

		label_div.appendChild(new_label);
		label_div.style.transform = `translate(${i * 70}px)`;
		container.appendChild(label_div);
	}

}

function linearSearch()
{
	var container = document.getElementById("array");
    var block = document.getElementsByClassName("block");

    for(var i=0;i<10;i++)
    {
		block[i].style.backgroundColor = "red";

		var label_div = document.createElement("div");
		label_div.classList.add("block_arrow");
		var new_label = document.createElement("label");
		new_label.classList.add("arrow_label");
		new_label.innerHTML = "|";
		label_div.appendChild(new_label);
		label_div.style.transform = `translate(${i * 70}px)`;
		container.appendChild(label_div);
    }
}

generatearray();
linearSearch();
