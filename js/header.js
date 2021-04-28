// change the width of the header image when we hit a certain threshold

const headerTag = document.querySelector("header")

const toggleHeader = function() {
  const pixels = window.pageYOffset

  if (pixels > 80) {
    headerTag.classList.add("scrolled")
  } else {
    headerTag.classList.remove("scrolled")
  }
}

toggleHeader()

document.addEventListener("scroll", function() {
  toggleHeader()
})

