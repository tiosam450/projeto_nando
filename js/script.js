const cardClose = document.querySelectorAll('.valoresFechado');
const cardOpen = document.querySelectorAll('.valoresAberto');
const containerCard = document.querySelector('.valoresContainer');

function abreCard(index){
    cardClose.forEach((item)=>{
        item.classList.remove('closeCard')
    })
    
    cardOpen.forEach((item)=>{
        item.classList.remove('closeCard')
    })

    cardClose[index].classList.add('upCard');
    containerCard.classList.add('limiteBox');
    cardOpen[index].classList.add('upCard')
}


cardClose.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        abreCard(index)
    })
})

function fechaCard(index){
    cardClose[index].classList.remove('upCard');
    cardClose[index].classList.add('closeCard');
    containerCard.classList.remove('limiteBox');
    cardOpen[index].classList.add('closeCard')

}


cardOpen.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        fechaCard(index)
    })
})


// FOTO GALERIA
if(window.matchMedia('(min-width: 700px)').matches){
const foto = document.querySelectorAll('.foto');

function abreFoto(index){
    foto[index].classList.toggle('fotoTelaCheia')
}

foto.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        abreFoto(index)
    })
})
}

// MENU
const menu = document.querySelector('nav');
const btnFechar = document.querySelector('.btnFechar');
const containerMenu = document.querySelector('.menuContainer');
const links = document.querySelectorAll('.itensMenu');


function abreMenu(){
    containerMenu.classList.add('visible')
}

function fechaMenu(){
    containerMenu.classList.remove('visible')
}

menu.addEventListener('click', abreMenu);
btnFechar.addEventListener('click', fechaMenu);
links.forEach((item)=>{
    item.addEventListener('click', fechaMenu);
})


