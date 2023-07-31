
let tringle1 = document.querySelector("#tringle1")
let tringle2 = document.querySelector("#tringle2")
let tringle3 = document.querySelector("#tringle3")

let pone = document.querySelector('li.one')
let ptow = document.querySelector('li.tow')
let pthree = document.querySelector('li.three')



pone.addEventListener("mouseover" , function(){
    tringle1.style.top = "20%"
    tringle2.style.top = "10%"
    tringle3.style.top = "40%"
})
pone.addEventListener("mouseleave" , function(){
    tringle1.style.top = "10%"
    tringle2.style.top = "30%"
    tringle3.style.top = "20%"
})


ptow.addEventListener("mouseover" , function(){
    tringle1.style.top = "20%"
    tringle2.style.top = "35%"
    tringle3.style.top = "10%"
})
ptow.addEventListener("mouseleave" , function(){
    tringle1.style.top = "10%"
    tringle2.style.top = "30%"
    tringle3.style.top = "20%"
})


pthree.addEventListener("mouseover" , function(){
    tringle1.style.top = "18%"
    tringle2.style.top = "4%"
    tringle3.style.top = "30%"
})
pthree.addEventListener("mouseleave" , function(){
    tringle1.style.top = "10%"
    tringle2.style.top = "30%"
    tringle3.style.top = "20%"
})


// pfour.addEventListener("mouseover" , function(){
//     tringle1.style.top = "16%"
//     tringle2.style.top = "00%"
//     tringle3.style.top = "40%"
// })
// pfour.addEventListener("mouseleave" , function(){
//     tringle1.style.top = "10%"
//     tringle2.style.top = "30%"
//     tringle3.style.top = "20%"
// })


