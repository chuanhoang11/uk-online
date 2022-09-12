export default function TeacherPopModule() {
    $('.popup-modal').magnificPopup({
        type: 'inline',
        preloader: false,
        removalDelay: 100,
        mainClass: 'my-mfp-zoom-in',
        modal: false,

        fixedBgPos: true,
        fixedContentPos: true,
    });

    $(document).on('click', '.closePop', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
}