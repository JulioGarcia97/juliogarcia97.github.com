/*
DOM
document.querySelector('.container');
// Este nos devuelve solo un elemento aunque existan mas con ese mismo criterio
let links = document.querySelectorAll('a');
// Este nos devuelve todos los elementos encontrados

links.forEach(function(link){
    console.log(link);
})
*/

let close = document.querySelectorAll('.close');

close.forEach(function(cl){
    cl.addEventListener('click', function(evento){
        evento.preventDefault();

        let content = document.querySelector('.content');
        content.classList.remove('fadeInDown');
        content.classList.remove('animated');
        
        content.classList.add('fadeOutUp');
        content.classList.add('animated');

        setTimeout(function(){
            location.href = '/';
        },600);

        return false;
    })
})

