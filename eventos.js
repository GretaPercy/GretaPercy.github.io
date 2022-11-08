addEventListener('resize', colocar);
addEventListener('load', colocar);

function colocar(event){
	let ivt = document.querySelector("div#tarjeta img");
	let map1 = document.querySelector("div#mapa1");
	let map2 = document.querySelector("div#mapa2");
	
	let alto = ivt.height*0.03; 
	
	map1.style.top = ivt.height/2 + ivt.height*0.1;
	map1.style.left = ivt.width/2 + ivt.height*0.07;
	map1.style.width = alto;
	map1.style.height = alto;
	
	map2.style.top = ivt.height/2 + ivt.height*0.2;
	map2.style.left = ivt.width/2 + ivt.height*0.07;
	map2.style.width = alto;
	map2.style.height = alto;
}