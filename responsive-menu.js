const responsiveMenu = () => {

    // Get elements from DOM
    const menuButton = document.querySelector('#menu-button')
    const menu = document.querySelector('#responsive-menu')
    const siteHeader = document.querySelector('.site-header')

    // Toggle function
    const toggleVisibility = () => {
        menu.classList.toggle('responsive-menu--open')
        siteHeader.classList.toggle('site-header--inverted')
    }

    

    // Interaction
    menuButton.addEventListener('click', toggleVisibility)
}

responsiveMenu()  