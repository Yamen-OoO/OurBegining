let pyramid = document.querySelector(".pyramid")
// console.log(pyramid)

function MakePieces(){
    let bottom = 0
    let left = 0
    let i =0
    let addpicese = setInterval(()=>{
        if(i === 12){
            clearInterval(addpicese)
        }
        let piece = document.createElement("div")
        piece.className = "pyramid-piece"
        piece.style.bottom = `${bottom}px`
        piece.style.left = `${left}%`
        piece.setAttribute("data-left",`${left}%`)
        piece.classList.add("animate")
        pyramid.appendChild(piece)
        bottom+= 50
        left+= 6
        i++
        // console.log(piece.getAttribute("data-left"))
        // console.log(i)
    },400)
}
MakePieces()









