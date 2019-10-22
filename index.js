
import {render} from './renderer.js';
import * as data from './data.json';



function getThingTemplate(thing){
	
	return `<li class="list-item" data-id="${thing.id}">${thing.name} ${thing.registry}</li>`; //back ticks important to use strings

};

function getThingDetails(thing){
	
	return `
	<nav>
		<button class="back-button">
			Back
		</button>
		</nav>
	<article>
      <h1>Name: ${thing.name}</h1>
      <p>Class: ${thing.class}</p>
      <p>Registry: ${thing.registry}</p>
    </article>


	`; //back ticks important to use strings

};


function sortMyStuff(first,second){
if(first.sort > second.sort){

return 1;
}
else if(first.sort < second.sort){

	return -1;
}

else{

	return 0;
}
}

function findById(things,id){
	return things.find(function(thing){// returns item in the list that matches
	//console.log(result);
	return thing.id == id; //returns true or false
	});
}
	

//console.log(data.results);
//console.log(data.results[0]);

function renderList(things){
	let content = '<ul>';

	for(let i=0; i < things.length; i++){

	//console.log(things[i]);
	content += getThingTemplate(things[i]);



	};
	content += '</ul>';

	render(content);
	//getThingTemplate({});	




const allLists = document.querySelectorAll('.list-item');

allLists.forEach(function(item){

	
	item.addEventListener('click',function(event){
		//console.log(item);
		const ship = findById(things,item.dataset.id);
		console.log(ship);
		//content += getThingDetails(ship); //testing
		//render(content);	//testing
		const template = getThingDetails(ship);
		//console.log(template);
		render(template);
		const backButton = document.querySelector('.back-button');
		backButton.addEventListener('click',function(event){

			renderList(things);
		});

		//getThingDetails({});
		//console.log(item.dataset.id);
	});

});

};


const things =data.results.sort(sortMyStuff);

renderList(things);
//console.log(allLists);



// const ship = things.find(function(item){
// return item.id == "1";


// });
// console.log(ship);


//console.log('this is a feature change');

//const things  = ['Voyager','Enterprise','Defiant'];



//render('<h2>testing something changing<br>great</h2>');



//console.log('this is javascript Ian');