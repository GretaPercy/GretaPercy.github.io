addEventListener('resize', colocar);
addEventListener('load', colocar);

function colocar(event){
	let ivt = document.querySelector("div#tarjeta img");
	let map1 = document.querySelector("div#mapa1");
	let map2 = document.querySelector("div#mapa2");
	
	let diam = ivt.height*0.04;
	
	map1.style.top = ivt.height/2 + diam*1.2;
	map1.style.left = ivt.width/2 + diam*5.1;
	map1.style.width = diam;
	map1.style.height = diam;
	
	map2.style.top = ivt.height/2 + diam*4.4;
	map2.style.left = ivt.width/2 + diam*5.1;
	map2.style.width = diam;
	map2.style.height = diam;
}