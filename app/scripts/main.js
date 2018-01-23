console.log('\'Allo \'Allo!');
var context = {image: "http://thecatapi.com/api/images/get?format=src&type=gif", title: "Prueba 2", content: "Contenido Prueba 2", action: 'Ver imagen'};
var html = PriceApp.test(context);
document.querySelector('.cardImage').innerHTML = html;
