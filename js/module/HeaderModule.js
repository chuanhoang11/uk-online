export default function HeaderModule() {
    const header = document.querySelector('.header')
    const mobile = document.querySelector('.mobile')
    const mobileOverlay = document.querySelector('.mobile-overlay')
    const search = document.querySelector('.search-mona')

    if (header && mobile && mobileOverlay) {
        window.addEventListener("scroll", function() {
            if (window.scrollY > 0) {
                header.classList.add('sticky')
                mobile.classList.add('sticky')
                mobileOverlay.classList.add('sticky')
                search.classList.add('sticky')

            } else {
                header.classList.remove('sticky')
                mobile.classList.remove('sticky')
                mobileOverlay.classList.remove('sticky')
                search.classList.remove('sticky')
            }
        })
    }
    $(document).ready(function() {
        if (header && mobile && mobileOverlay) {
            window.addEventListener("scroll", function() {
                if (window.scrollY > 0) {
                    header.classList.add('sticky')
                    mobile.classList.add('sticky')
                    mobileOverlay.classList.add('sticky')
                    search.classList.add('sticky')

                } else {
                    header.classList.remove('sticky')
                    mobile.classList.remove('sticky')
                    mobileOverlay.classList.remove('sticky')
                    search.classList.remove('sticky')
                }
            })
        }
    });
}