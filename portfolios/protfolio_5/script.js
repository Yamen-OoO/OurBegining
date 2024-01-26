// the paid version (the customer own version , we only change the values of the root to the choosen color by him and keep the theme functionality working)
import ColorsPlatte from './library.min.js'





window.addEventListener('load',function(){
    this.scrollTo(0,0)
})
window.onscroll = function(){
    checkScroll()
}

let pageSettings = {
    themeColor: 'dark',
    themeColorPlatte: {},

    //! paid version comment these
    mainColor: 'orange',
    mainColorPlatte: {},
    setMainColor: function (choosenColor) {
        // console.log(this)
        this.mainColor = choosenColor
        this.mainColorPlatte = ColorsPlatte.mainColor[choosenColor]
    },

    //! paid version dont comment
    setThemeColorPlatte: function (choosenColor) {
        this.themeColor = choosenColor
        this.themeColorPlatte = ColorsPlatte.theme[choosenColor]
    }
}



//~ when click on a color .... change pageSettings.mainColor , pageSettings.mainColorPlatte
//~ when click on a color .... change pageSettings.mainColor , pageSettings.mainColorPlatte
//~ change the values of the variables of the in css 
let root = document.querySelector(":root") //html element
let rootCssValues = getComputedStyle(root) // return all the css attributes (css variables are css attributes)

function changeRootValuesThemes(choosenColor) {
    pageSettings.setThemeColorPlatte(choosenColor)
    Object.keys(pageSettings.themeColorPlatte).forEach(variable => {
        // console.log(variable)
        // console.log(pageSettings.themeColorPlatte[variable])
        root.style.setProperty(variable, pageSettings.themeColorPlatte[variable])
        // console.log(rootCssValues.getPropertyValue(variable))
    });

}

// setTimeout(() => {
//     changeRootValuesThemes('dark')
//     console.log(pageSettings.themeColor)
//     console.log(pageSettings.themeColorPlatte)
//     console.log(pageSettings)
// }, 1000);
// setTimeout(() => {
//     changeRootValuesThemes('light')
//     console.log(pageSettings.themeColor)
//     console.log(pageSettings.themeColorPlatte)
//     console.log(pageSettings)
// }, 10000);








// ! only the live the demo this functionality should be exisist

function changeRootValuesMainColor(choosenColor) {
    pageSettings.setMainColor(choosenColor)
    Object.keys(pageSettings.mainColorPlatte).forEach(variable => {
        // console.log(variable)
        // console.log(pageSettings.mainColorPlatte[variable])
        root.style.setProperty(variable, pageSettings.mainColorPlatte[variable])
        // console.log(rootCssValues.getPropertyValue(variable))
    });

}







//! paid version comment these
// ^ open switcher menu and clicking function

let switcherButton = document.querySelector(".switcher-button")
let menu = switcherButton.parentElement
switcherButton.addEventListener('click', togglemenu)

function togglemenu() {
    // console.log('testtttt')
    if (menu.classList.contains("open")) {
        menu.classList.remove('open')
    }
    else {
        menu.classList.add('open')
    }
}
let switcherButtons = document.querySelectorAll(".color-switcher-container .menu button")
// console.log(switcherButtons)
switcherButtons.forEach(button => {
    button.addEventListener('click', function () {
        let choosenColor = button.getAttribute("data-color")
        changeRootValuesMainColor(choosenColor)
        menu.classList.remove('open')

    })
})




//^ navbar transition
//^ go to top button
let goTop = document.querySelector("button.go-top")

goTop.addEventListener("click", function () {
    window.scrollTo(0, 0)
    // console.log(goTop)
})






//^ theme toggler
let themeButtons = document.querySelectorAll('.theme-toggler')
themeButtons.forEach(button => {
    button.addEventListener('click', function () {
        let choosenColor = button.getAttribute("data-theme")
        changeRootValuesThemes(choosenColor)
    })
})






//^ counter section
let countSection = document.querySelector(".counter")
// console.log(countSection)
let countsectionOffsetTop = countSection.getBoundingClientRect().top
// console.log(countsectionOffsetTop)
let counts = document.querySelectorAll("section.counter h1")
// console.log(counts)
let started = false

function countON(){
    if(!started){
        counts.forEach(element => {
            startCount(element)
        }); 
    }
    started = true
}
function startCount(ele){
    let goal = ele.dataset.number;
    // console.log(goal)
    let count = setInterval(function(){
        ele.textContent++
        if(ele.textContent === goal){
            clearInterval(count)
        }
    },(1000/goal))
}






function checkScroll() {
    if(window.scrollY >= countsectionOffsetTop - 300){
        countON()
    }
   
    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
        goTop.style.display = 'flex'
    }
    else {
        goTop.style.display = 'none'
    }
}
