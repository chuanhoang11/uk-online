export default function CountUpModule() {
    $(document).ready(function() {
        $(".tuto-content .number span").counterUp({
            delay: 5,
            time: 3000
        });
    });
}