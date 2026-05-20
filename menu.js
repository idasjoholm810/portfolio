const headerScroll = () => {
     
    // Get elements from DOM
    const siteHeader = document.querySelector('.site-header')

    let prevScrollPosition = window.scrollY

    // Function Toggle Visibility
    const toggleVisibility = () => {

        const currentScrollPosition = window.scrollY
        
        if ( currentScrollPosition > prevScrollPosition ) {
            siteHeader.classList.add('site-header--hidden')
        }  else {
        siteHeader.classList.remove('site-header--hidden')
        }

        prevScrollPosition = currentScrollPosition
    }

    // Interaction
    window.addEventListener('scroll', toggleVisibility)
}

headerScroll()


// const header = document.querySelector('.site-header');

// let lastScrollY = window.scrollY;

// window.addEventListener('scroll', () => {
//   const currentScrollY = window.scrollY;

//   if (currentScrollY > lastScrollY && currentScrollY > 100) {
//     // Scrollar NER → göm header
//     header.classList.add('hide');
//   } else {
//     // Scrollar UPP → visa header
//     header.classList.remove('hide');
//   }

//   lastScrollY = currentScrollY;
// });
