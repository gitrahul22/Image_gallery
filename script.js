let scrollContainer=document.querySelector(".gallery");
let back=document.getElementById("back");
let next=document.getElementById("next");

scrollContainer.addEventListener("wheel",(e)=>{
    e.preventDefault();
    scrollContainer.scrollLeft+=e.deltaY;
    scrollContainer.style.scrollBehavior="auto";//smoothens the mouse Wheel scroll;
});
next.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior="smooth";//smoothens the scroll on clicking the next buttn
    scrollContainer.scrollLeft+=900;
});

back.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior="smooth";//does the same with respect to back
    scrollContainer.scrollLeft-=900;
});