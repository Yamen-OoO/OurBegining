// the paid version (the customer own version , we only change the values of the root to the choosen color by him and keep the theme functionality working)
import ColorsPlatte from './library.min.js'


// window.addEventListener('load',function(){
//     this.scrollTo(0,0)
// })

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

const smallDevices = window.matchMedia("(max-width: 578px)"); // true or false , depending on the screen width
window.onload = function () {
    if (smallDevices.matches) { //if true 
        nav.classList.add('maincolor-background-3')

    }
}
let nav = document.querySelector("nav")
window.onscroll = function () {
    checkScroll()
}






//^ theme toggler
let themeButtons = document.querySelectorAll('nav .theme-toggler')
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
let startedCounts = false

function countON() {
    if (!startedCounts) {
        counts.forEach(element => {
            startCount(element)
        });
    }
    startedCounts = true
}
function startCount(ele) {
    let goal = ele.dataset.number;
    // console.log(goal)
    let count = setInterval(function () {
        ele.textContent++
        if (ele.textContent === goal) {
            clearInterval(count)
        }
    }, (1000 / goal))
}






function checkScroll() {
    if (window.scrollY >= countsectionOffsetTop - 500) {
        countON()
    }
    if (window.scrollY >= skillsSectionTop - 300) {
        startProgress()
    }
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        // nav.classList.add('maincolor-background-3')
        nav.style.padding = "5px 0"
    }
    else {
        if (!smallDevices.matches) {
            // nav.classList.remove('maincolor-background-3')
            nav.style.padding = "0"

        }
    }
    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
        goTop.style.display = 'flex'
    }
    else {
        goTop.style.display = 'none'
    }
}






// // ^ circluar Progress

let values = [
    {
        progressValue: 0,
        progressEndValue: 60
    },
    {
        progressValue: 0,
        progressEndValue: 70
    },
    {
        progressValue: 0,
        progressEndValue: 100
    },
    {
        progressValue: 0,
        progressEndValue: 40
    },
    {
        progressValue: 0,
        progressEndValue: 90
    },
    {
        progressValue: 0,
        progressEndValue: 80
    },
    {
        progressValue: 0,
        progressEndValue: 70
    },
    {
        progressValue: 0,
        progressEndValue: 70
    },
    {
        progressValue: 0,
        progressEndValue: 90
    }
]


function fetchMainColor() {
    let rootStyles = getComputedStyle(document.documentElement);
    return rootStyles.getPropertyValue('--text_3').trim();
}


let ProgressBars = document.querySelectorAll(".circular-progress")
// console.log(ProgressBars)
let progressBarsValuesContainers = document.querySelectorAll(".value-container")

let speed = 20



let skillsSection = document.querySelector(".skills")
let skillsSectionTop = skillsSection.getBoundingClientRect().top
let startedProgress = false

function startProgress() {
    if (!startedProgress) {
        for (let i = 0; i <= 7; i++) {
            let progress = setInterval(() => {
                values[i].progressValue++
                progressBarsValuesContainers[i].textContent = `${values[i].progressValue} %`
                ProgressBars[i].style.background = `conic-gradient(
                    var(--text_2) ${values[i].progressValue * 3.6}deg,
                    #ccc ${values[i].progressValue * 3.6}deg
                )`
                if (values[i].progressValue === values[i].progressEndValue) clearInterval(progress)
            }, speed)
        }
    }
    startedProgress = true
}






