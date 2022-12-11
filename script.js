const progress =document.getElementById('progress')
const next =document.getElementById('next')
const prev =document.getElementById('prev')
const circles =document.querySelectorAll('.circle')

let currentActive=1

next.addEventListener('click',()=>{
currentActive++

if(currentActive>circles.length){
    currentActive=circles.length
}
update()
//console.log(currentActive)
})
prev.addEventListener('click',()=>{
    currentActive--
    
    if(currentActive<1){
        currentActive=1
    }


    update()
})
function update(){
circles.forEach((circles,idx)=>{
    if(idx<currentActive){
        circles.classList.add('active')
    }
    else{
        circles.classList.remove('active')
    }
})
const actives=document.querySelectorAll('.active')
// console.log(actives.length,circles.length)
progress.style.width=(actives.length-1.5)/(circles.length-1.5)*100+'%'

if(currentActive==1){
    prev.disabled=true
}
else if(currentActive==circles.length)
{
next.disabled=true
}
else{
    next.disabled=false
    next.disabled=false
}


}

