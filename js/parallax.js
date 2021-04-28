const sections = document.querySelectorAll("section")
const bodyTag = document.querySelector("body")

const addMovement = function () {
  const topViewport = window.pageYOffset
  const midViewport = topViewport + (window.innerHeight / 2)
  
  sections.forEach ((section, index) => {
    const topSection = section.offsetTop
    const midSection = topSection + (section.offsetHeight / 2)
    const distanceToSection = midViewport - midSection
    
    const image = section.querySelector("img")
    const content = section.querySelector("div")

    let rotation = distanceToSection / 100
    let contentDist = -1 * (distanceToSection / 2)

    if (index % 2 == 1) {
      rotation = rotation * -1
    }

    image.style.transform = `rotate(${rotation}deg)`

    content.style.top = `${contentDist}px`
    content.style.transform = `rotate(${-1 * rotation}deg)`

    if (distanceToSection > -100) {
      const dataBackground = section.getAttribute("data-background")


      bodyTag.style.backgroundColor = dataBackground
    }

  })
}

addMovement()

document.addEventListener("scroll", function() {
  addMovement()
})

window.addEventListener("resize", function() {
  addMovement()
})