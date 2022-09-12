export default function ToggleModule() {
    $(document).ready(function () {
        const contentBtns = document.querySelectorAll('.toggleContactBtn')

        if (contentBtns.length > 0) {
            $(".toggleContactBtn.active").next(".toggleContactContent").stop().slideToggle();
    
            $(".toggleContactBtn").click(function (e) {
                e.preventDefault();
    
                if (!$(this).closest('.contact-info-item').find('.toggleContactContent').is(':visible')) {
                    $('.toggleContactContent').slideUp()
                    $(".toggleContactBtn").removeClass('active')
                }
                
                $(this).toggleClass("active");
                $(this).next(".toggleContactContent").stop().slideToggle();
            })
        }

        // cau hoi thuong gap
        const faqBtns = document.querySelectorAll('.faqBtn')
        
        if (faqBtns.length > 0) {
            $(".faqBtn.active").find(".faqContent").stop().slideToggle();
    
            $(".faqBtn").click(function (e) {
                e.preventDefault();
    
                if (!$(this).find('.faqContent').is(':visible')) {
                    $('.faqContent').slideUp()
                    $(".faqBtn").removeClass('active')
                }
                
                $(this).toggleClass("active");
                $(this).find(".faqContent").stop().slideToggle();
            })
        }

    })
}