export default function TabModule() {
    let tab = document.querySelectorAll(".tabJS");
    if (tab) {
        tab.forEach((t) => {
            let tBtn = t.querySelectorAll(".tabBtn");
            let tPanel = t.querySelectorAll(".tabPanel");
            let tPanelPro = t.querySelectorAll(".tabPanelPro");
            console.log(tPanelPro);
            // for tab
            if (tBtn.length !== 0 && tPanel.length === tBtn.length) {
                tBtn[0].classList.add("active");
                tPanel[0].classList.add("open");
                if (tPanelPro[0]) {
                    tPanelPro[0].classList.add("open");
                }

                for (let i = 0; i < tBtn.length; i++) {
                    tBtn[i].addEventListener("click", showPanel);

                    function showPanel(e) {
                        e.preventDefault();
                        for (let a = 0; a < tBtn.length; a++) {
                            tBtn[a].classList.remove("active");
                            tPanel[a].classList.remove("open");
                            if (tPanelPro[a]) {
                                tPanelPro[a].classList.remove("open");
                            }
                        }
                        tBtn[i].classList.add("active");
                        tPanel[i].classList.add("open");
                        if (tPanelPro[i]) {
                            tPanelPro[i].classList.add("open");
                        }
                    }
                }
            }
        });
    }
}