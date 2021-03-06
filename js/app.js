share = document.querySelector(".btn__share")

share.onclick = function() {
    navigator.clipboard.writeText(window.location.href)
    alert("Copied website URL to clipboard.")
}

const sections = document.querySelectorAll("section[id]")

window.addEventListener("scroll", navHighlighter)

function navHighlighter() {
    let scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50

        sectionId = current.getAttribute("id")

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link")
        } else {
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link")
        }
    })
}