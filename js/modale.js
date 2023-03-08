document.addEventListener("DOMContentLoaded", () => {
    console.log("ok");

    const btn = document.querySelector("header h1 a");
    const modale = document.querySelector(".modal-parent");
    const closed = document.querySelector(".btn-closed");
    const picture = document.querySelector("figure");
    const cross_closed = document.querySelector("figure .cross");

    console.log(modale);

    btn.addEventListener("click", () => {
        console.log(btn.tagName);
        modale.classList.add("appear-modal");
    });

    cross_closed.addEventListener("click", () => {
        modale.classList.remove("appear-modal");
    });

    /* pour fermer la fenêtre */
    closed.addEventListener("click", () => {
        modale.classList.remove("appear-modal");
    });

    /* fermer en dehors */
    modale.addEventListener("click", function () {
        this.classList.remove("appear-modal");
    });

    /* stopper la propagation de l'événement modale */
    picture.addEventListener("click", function (e) {
        e.stopPropagation();
    });
});