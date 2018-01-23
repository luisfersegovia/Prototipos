console.log('\'Allo \'Allo!');
var context = {title: "Prueba 2", content: "Contenido Prueba 2"};
var html = PriceApp.templates.test(context);
document.querySelector('#testHandlebars').innerHTML = html;
