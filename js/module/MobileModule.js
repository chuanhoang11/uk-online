export default function MobileModule() {
    const burgerBtn = document.getElementById("hamburger");

    const mobile = document.querySelector(".mobile");
    const mobileOverLay = document.querySelector(".mobile-overlay");
    const body = document.getElementsByTagName("body")[0];
    const header = document.querySelector(".header");
    const mobileClose = document.querySelector(".mobile-close");

    let isOpen = false;
    if (burgerBtn) {
        burgerBtn.addEventListener("click", () => {
            isOpen = !isOpen;
            if (isOpen) {
                burgerBtn.classList.add("active");
                mobile.classList.add("open");
                mobileOverLay.classList.add("open");
                body.style.overflowY = "hidden";
            } else {
                burgerBtn.classList.remove("active");
                mobile.classList.remove("open");
                mobileOverLay.classList.remove("open");
                body.style.overflowY = "scroll";
            }
        });
    }
    if (mobileClose) {
        mobileClose.addEventListener("click", function() {
            isOpen = false;
            burgerBtn.classList.remove("active");
            mobile.classList.remove("open");
            mobileOverLay.classList.remove("open");
            body.style.overflowY = "scroll";
        });
    }
    if (mobileOverLay) {
        mobileOverLay.addEventListener("click", function() {
            isOpen = false;
            burgerBtn.classList.remove("active");
            mobile.classList.remove("open");
            mobileOverLay.classList.remove("open");
            header.classList.remove("sticky");
            body.style.overflowY = "scroll";
        });
    }
    const menuNavs = document.querySelectorAll(".header .menu-nav");
    if (menuNavs) {
        menuNavs.forEach((item) => {
            const menuLinks = item.querySelectorAll(".menu-item.dropdown");
            menuLinks.forEach((item) => {
                const aEl = item.querySelectorAll("a")[0];
                const contentOld = aEl.innerHTML;
                const contentNew = `${contentOld} <i class="fas fa-angle-down"></i>`;
                aEl.innerHTML = contentNew;
            });
        });
    }

    const arrowIcon = document.querySelectorAll(
        ".mobile-nav .menu-list .menu-item a i"
    );
    if (arrowIcon) {
        arrowIcon.forEach((item) => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                const menu =
                    item.parentElement.parentElement.querySelectorAll(".menu-list")[0];
                $(menu).slideToggle();
                $(item.parentElement.parentElement).toggleClass("active");
            });
        });
    }
}