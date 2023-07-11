const btnClose = document.querySelectorAll('.containerPopUpCard img')
const containerPopUp = document.querySelectorAll('.containerPopUpCard')
const btnOpen = document.querySelectorAll('a.botao')

function abrePopUp(index){
    containerPopUp[index].classList.add('visibleCard');
}

btnOpen.forEach((item, index)=>{
    item.addEventListener('click', function(event){
        event.preventDefault();
        abrePopUp(index);
    })
})

function fechaPopUp(){
    containerPopUp.forEach(item=>{
        item.classList.remove('visibleCard')
    })
}

btnClose.forEach((item)=>{
    item.addEventListener('click', fechaPopUp)
})