var Navcontroller = new ScrollMagic.Controller()
let navBackground = document.querySelector("nav")
let startaproject = document.querySelector("nav a.startaproject")
let whiteSections = document.querySelectorAll(".whiteSection")
// ^section white

onload=()=>{
    ChangeNav()
}


function ChangeNav(){
    function MakeSenece(){
        whiteSections.forEach(ele =>{
            // console.log(ele.clientHeight)
            let object = {
                triggerElement: ele,
                duration:ele.clientHeight,
                triggerHook:0.1
            }
            var sence = new ScrollMagic.Scene(object)
            .on("enter" , function(){
                // console.log('hello im on')
                navBackground.classList.add("bg-orange2")
                navBackground.classList.remove("bg-nav-black")
                startaproject.classList.add('textGray')
                startaproject.classList.remove('text-white')
            }).on("leave" , function(){
                navBackground.classList.remove("bg-orange2")
                navBackground.classList.add("bg-nav-black")
                startaproject.classList.add('text-white')
                startaproject.classList.remove('textGray')
                // console.log('hello im out')
            })
            // .addIndicators({
            //     name:'fade scene white',
            //     colorTrigger : 'red',
            //     indent:100,
            //     colorStart : "red",
            //     colorEnd : "blue"
            // })
            .addTo(Navcontroller) 
        })
    }
    MakeSenece()
}
