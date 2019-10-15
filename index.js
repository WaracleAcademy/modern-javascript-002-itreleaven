
import {render} from './renderer.js';
import * as data from './data.json';



function getThingTemplate(thing){
	
	return `<li>${thing.name} ${thing.registry}</li>`;;

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
	

console.log(data.results);
//console.log(data.results[0]);

const things =data.results.sort(sortMyStuff);
let content = '<ul>';

for(let i=0; i < things.length; i++){

console.log(things[i]);
content += getThingTemplate(things[i]);



};
content += '</ul>';

render(content);
getThingTemplate({});

//const things  = ['Voyager','Enterprise','Defiant'];



//render('<h2>testing something changing<br>great</h2>');



//console.log('this is javascript Ian');