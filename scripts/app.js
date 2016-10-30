'use strict';

$( document ).ready(function whenLoaded(){
  console.log("sanity check");

  // Your jQuery here
  // 1. Get the value "Hello There".
  $('#greeting');
  // 2. Change (or set) the value to "Hola".
  $('#greeting').text('Hola');
  // 3. Add an h1 to the page that says "A Spanish Greeting".
  $('body').prepend('<h1>A Spanish Greeting</h1>');
  // 4. Add a second greeting ("Que tal?"), in a second column to the right of the first.
  $('.col-sm-6').addClass('row')
  $('#greeting').addClass('col-sm-6');
  $('.row:last').append('<div class=col-sm-6>Que tal?</div>')
  // 5. Add the class "blue" to both greetings.
  $('.row:last div:first-child').addClass('blue')
  $('.row:last div:last-child').addClass('blue')
});
