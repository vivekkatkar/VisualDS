var container = document.getElementById("array");
var label_dis = document.getElementById("value_label");
var new_div = document.createElement("div");
	new_div.classList.add("new_div");
	var new_div2 = document.createElement("div");
	new_div2.classList.add("new_div");
	var new_label = document.createElement("label");
	var new_label2 = document.createElement("label");
	var new_label3 = document.createElement("label");
	var new_div3 = document.createElement("div");
	new_div3.classList.add("new_div3");

	var new_label4 = document.createElement("label");
	var new_div4 = document.createElement("div");
	new_div4.classList.add("new_div3");

	var delay = 600;
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
	}

	var linebreak = document.createElement("br");
	container.appendChild(linebreak);
}


function swap(el1, el2) {
	return new Promise((resolve) => {

		var temp = el1.style.transform;
		el1.style.transform = el2.style.transform;
		el2.style.transform = temp;

		window.requestAnimationFrame(function() 
		{
			setTimeout(() => {
				container.insertBefore(el2, el1);
				resolve();
			}, 300);
		});
	});
}
async function BubbleSort() {
	var blocks = document.querySelectorAll(".block");

	for (var i = 0; i < blocks.length; i += 1) {
		for (var j = 0; j < blocks.length - i - 1; j += 1) {

			blocks[j].style.backgroundColor = "#FF4949";
			blocks[j + 1].style.backgroundColor = "#FF4949";

			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, delay)
			);

			console.log("run");
			var value1 = Number(blocks[j].childNodes[0].innerHTML);

			var value2 = Number(blocks[j + 1].childNodes[0].innerHTML);

			new_label.innerText = "Number 1 : "+value1;
			new_label2.innerText = "Number 2 : "+value2;
			new_div.appendChild(new_label);
			label_dis.appendChild(new_div);
			new_div2.appendChild(new_label2);
			label_dis.appendChild(new_div2);

			if (value1 > value2) {
				new_label3.innerText =  value1 + " > " + value2;
				new_div3.appendChild(new_label3);
				label_dis.appendChild(new_div3);

				new_label4.innerText =  " Since Values Swapped";
				new_div4.appendChild(new_label4);
				label_dis.appendChild(new_div4);
				await swap(blocks[j], blocks[j + 1]);
				blocks = document.querySelectorAll(".block");
			}
			else if (value1 == value2) {
				new_label3.innerText =  value1 + " = " + value2;
				new_div3.appendChild(new_label3);
				label_dis.appendChild(new_div3);

				new_label4.innerText =  " Since Values not Swapped";
				new_div4.appendChild(new_label4);
				label_dis.appendChild(new_div4);
			}
			else{
				new_label3.innerText = value1 + " < " + value2;
				new_div3.appendChild(new_label3);
				label_dis.appendChild(new_div3);

				new_label4.innerText =  " Since Values not Swapped";
				new_div4.appendChild(new_label4);
				label_dis.appendChild(new_div4);
			}
			blocks[j].style.backgroundColor = "#6b5b95";
			blocks[j + 1].style.backgroundColor = "#6b5b95";
		}
		blocks[blocks.length - i - 1]
				.style.backgroundColor = "#13CE66";
	}
}

generatearray();

function start_sorting()
{
    BubbleSort();
}

function new_array()
{
    location.reload();
}

function inc()
{
	delay = delay + 150;
}

function dec()
{
	delay = delay - 150;
}