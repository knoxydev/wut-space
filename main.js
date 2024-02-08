const global = {
	btn_names : ["Rooms", "Emails", "Clubs"],
};


const create_btn = () =>
{
	global.btn_names.forEach((elm, idx) => {
		let div = document.createElement('div');
		let div_two = document.createElement('div');
		let btn = document.createElement('button');
		btn.innerHTML = global.btn_names;

		div.append(btn);
		div.append(div_two);



		document.getElementById("main-block").append(div);
	});
};

//create_btn();