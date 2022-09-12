export default function WaveModule() {
    const waveItems = document.querySelectorAll(".wave-item");
    if (waveItems) {
        waveItems.forEach((item) => {
            const color = item.parentElement.parentElement
                .querySelector(".wave-color")
                .getAttribute("data-color");
            let amplitude = 50;
            if (window.innerWidth < 900) {
                amplitude = 25;
            }
            if (window.innerWidth < 768) {
                amplitude = 15;
            }
            var myWave = $(item).wavify({
                height: 30,
                bones: 3,
                amplitude: 100,
                color: color,
                speed: 0.1
            });
        });
    }
}