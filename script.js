const bar = document.getElementById('bar');
const nav = document.querySelector('.navbar');
const clos = document.querySelector('.close');

if (bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
        console.log("open")
    })
};
if (clos){
    clos.addEventListener('click',()=>{
        nav.classList.remove('active');
        console.log("close")
    })
}
