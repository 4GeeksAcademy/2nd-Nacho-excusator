import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ['Tu madre', 'Mi primo', 'El presidente', 'Dios', 'Horacio', 'El gato de Pablo', 'El monstruo de debajo de mi cama', 'Mi gemelo malvado', 'La sociedad occidental'];
  let action = [' se ha comido', ' ha destrozado por completo', ' ha vendido', ' ha esclavizado', ' ha intentado controlar'];
  let what = [' a mi perro', ' mi coche', ' a la humanidad', ' el continuo espacio-tiempo', ' a toda la clase', ' a J.K.Rowling', ' el Pentágono', ' a Santa Claus'];
  let when = [' justo antes de venir', ' justo ahora', ' cuando salía de casa', ' mientras dormía'];

  let elementExcuse = this.document.getElementById('excusa');

  let excuseContent = who[Math.floor(Math.random() * 9)] 
  + action[Math.floor(Math.random() * 5)] 
  + what[Math.floor(Math.random() * 8)]
  + when[Math.floor(Math.random() * 4)];

  elementExcuse.innerHTML = excuseContent;

};