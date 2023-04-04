




const scrollNav = document.querySelectorAll('[data-scrollto]') // select all scrollNav element
// scroll nav function on click
scrollNav.forEach(item => {
    item.addEventListener('click', (e)=> {
        e.preventDefault() // prevent a tag to change url

        // scroll function
        let currentData = item.getAttribute('data-scrollto')
        let currentSection = document.getElementById(currentData)
        if(currentSection) {
            window.scrollTo(0, currentSection.offsetTop - 63)
        }

        // toggle active
        scrollNav.forEach(item => {
            item.classList.remove('active')
        })
        item.classList.add('active')
    })
})
// detect scroll position on scrolling
window.onscroll = ()=> {
    const allSection = document.querySelectorAll('section')
    let scrollY = window.scrollY

    allSection.forEach(section => {
        let sectionHeight = section.offsetHeight
        let sectionTop = section.offsetTop - 200
        let sectionId = section.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`[data-scrollto="${sectionId}"]`).classList.add('active')
        }else {
            document.querySelector(`[data-scrollto="${sectionId}"]`).classList.remove('active')

        }
    })
}