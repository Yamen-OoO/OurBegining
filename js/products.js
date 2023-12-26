let tringlesNumber = 30
for(let i =0 ;i<= tringlesNumber-1 ;i++){
    let tringle = document.createElement("div")
    if(i<15){
        tringle.classList.add("triangle1")
    }
    else{
        tringle.classList.add("triangle2")
    }
    tringle.classList.add("rellax")
    tringle.setAttribute('data-rellax-speed' , 5)

    tringle.style.left = Math.floor(Math.random() * 80) + "%"
    tringle.style.top = Math.floor(Math.random() * 90) + "%"
    document.body.appendChild(tringle)
    window.addEventListener('scroll', function() {
        var rotation = window.scrollY / 20; // Adjust the division factor to control the rotation speed
        tringle.style.transform = 'rotate(' + rotation  + 'deg)';
    })
}






// coming soon
anime.timeline({loop: true})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 5000
  });






  var textWrapper = document.querySelector('.ml3');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({ loop: true })
      .add({
          targets: '.ml3 .letter',
          opacity: [0, 1],
          easing: "easeInOutQuad",
          duration: 2250,
          delay: (el, i) => 550 * (i + 1)
      }).add({
          targets: '.ml3',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 4000
      });