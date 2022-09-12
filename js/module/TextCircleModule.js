export default function TextCircleModule() {
    const textCircle = document.querySelector(".circle-play-text");
    if (textCircle) {
        textCircle.innerHTML = textCircle.innerText
            .split("")
            .map(
                (char, i) =>
                `<span style="transform: rotate(${i * 5}deg)">${char}</span>`
            )
            .join("");
    }
}