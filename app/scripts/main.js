var context = {image: 'http://thecatapi.com/api/images/get?format=src&type=gif',
               title: 'Card Image',
               content: 'Contenido Card Image',
               action: 'Ver imagen'};
var html = PriceApp.test(context);
document.querySelector('.cardImage').innerHTML = html;
