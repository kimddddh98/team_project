const slides=document.querySelector('.slied');
const slideImg=document.querySelectorAll('.slied li')
let index=0;
const slideCount=slideImg.length;
const prev=document.querySelector('p .prev');
const next=document.querySelector('p .next');
const slideWidth=1200;

slides.style.width=slideWidth*slideCount+'px';

function silder(num){
    slides.style.left=-num*1200+'px';
    index=num;
}
prev.addEventListener('click',function(){
    if(index !==0){silder(index-1);}
});
next.addEventListener('click',function(){
    if(index !==slideCount-1){
        silder(index+1)
    }
});