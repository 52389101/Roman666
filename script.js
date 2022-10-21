const burger = document.querySelector('.btnOpen');
const modal = document.querySelector('.modal');

burger.addEventListener('click', function(){
    modal.classList.add('open')
});

modal.addEventListener('click', function(event){
    const targ = event.target;
    if(targ.classList.contains('btnClose')){
        modal.classList.remove('open');
    }
})


