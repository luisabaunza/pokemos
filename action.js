var pokemones = [{
    "id":"001",
    "name":"Charmander",
    "photo":"01.jpg", 
    "type":"fire.png"
  },
  {
    "id":"002",
    "name":"Kanjaskan",
    "photo":"02.jpg",
    "type":"fighting.png"
  },
  {
    "id":"003",
    "name":"Mewtwo",
    "photo":"03.jpg",
    "type":"fairy.png"
  },
  {
    "id":"004",
    "name":"Blastoise",
    "photo":"04.jpg",
    "type":"water.png"
  },
  {
    "id":"005",
    "name":"Bulbasaur",
    "photo":"05.jpg",
    "type":"grass.png"
  },
  {
    "id":"006",
    "name":"Magikarp",
    "photo":"06.jpg",
    "type":"water.png"
  },
  {
    "id":"007",
    "name":"Pikachu",
    "photo":"07.jpg",
    "type":"electric.png"
  },
  {
    "id":"008",
    "name":"Gengar",
    "photo":"08.jpg",
    "type":"ghost.png"
  },
  {
    "id":"009",
    "name":"Vamoacalmarno",
    "photo":"09.jpg",
    "type":"water.png"
  },
  {
    "id":"010",
    "name":"Sirpona",
    "photo":"03.jpg",
    "type":"grass.png"
  }
];

function json1(){
	
var contenido ="";
// var type= pokemonesJ[i].type;
for (var i=0; i<pokemonesJ.length; i++){
  var type = pokemonesJ[i].type;
  console.log(type);
	contenido += "<div class='pokemones'>";
	contenido += "<img id='pok' src='"+ pokemonesJ[i].ThumbnailImage +"'>"
  contenido += "<h2 id='name'>" + pokemonesJ[i].name + "</h2>"
  contenido += "<h1 id='id'>" + pokemonesJ[i].id + "</h1>";
  for (var t=0; t < type.length; t++) {
  contenido += "<span id='"+type[t]+"'>"+type[t]+"  "+"</span>";
    console.log(type[t]);
  }

  // for (var t=0; t<type.length; t++){
  //     console.log(type[t]);
  // }

  // contenido += "<img id='type'src='type/"+ pokemones[i].type +"'>"
	contenido += "</div>";
}
document.getElementById("result").innerHTML=contenido;
}

function buscar() {
  var contenido = "";
  var search = document.getElementById("search").value;

//filtros
/*var filtered = pokemones.filter(function(pokemon) {
  if(pokemon.name.toLowerCase().includes(search.toLowerCase())) {
    return pokemon;
  }
  return pokemon.name.toLowerCase().includes(search.toLowerCase()) || pokemon.id.includes(search);
})*/

var filtered = pokemones.filter(pokemon => (pokemon.name.toLowerCase().includes(search))|| (pokemon.id.includes(search)) || (pokemon.type.includes(search)) )
console.log(filtered)
for (var i=0; i<filtered.length; i++){
  contenido += "<div class='pokemones'>";
  contenido += "<img id='pok' src='img/"+ filtered[i].photo +"'>"
  contenido += "<h2 id='name'>" + filtered[i].name + "</h2>"
  contenido += "<h1 id='id'>" + filtered[i].id + "</h1>"
  contenido += "<img id='type'src='type/"+ filtered[i].type +"'>"
  contenido += "</div>";
}
document.getElementById("result").innerHTML=contenido;
}

function agregar(){
  var nameP = document.getElementById("nombre").value
  var idP = document.getElementById("idP").value
  var typeP = document.getElementById("typeP").value
  var photoP = document.getElementById("photoP").value


  var addPokemones ={id:idP,name:nameP,photo:photoP,type:typeP} 
  console.log(addPokemones)
  pokemones.push(addPokemones)
  json1()
}
