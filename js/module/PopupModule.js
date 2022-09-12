export default function PopupModule() {
    $(document).ready(function() {
        $(".play, .play-video").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });
    });
}