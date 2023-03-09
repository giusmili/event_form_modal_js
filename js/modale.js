document.addEventListener("DOMContentLoaded", () => {

    //objet modale
    user_modale = {
        btn: document.querySelector("header h1 a"),
        modale: document.querySelector(".modal-parent"),
        closed: document.querySelector(".btn-closed"),
        picture: document.querySelector("figure"),
        cross_closed: document.querySelector("figure .cross"),
        open_function() {
            this.modale.classList.add("appear-modal");
        },
        cross_function() {
            this.modale.classList.remove("appear-modal");
        }

    };

    //event

    user_modale.btn.addEventListener("click", () => {

        user_modale.open_function();
    });

    user_modale.cross_closed.addEventListener("click", () => {
        user_modale.cross_function();
    });

    user_modale.closed.addEventListener("click", () => {
        user_modale.cross_function();
    });

    user_modale.modale.addEventListener("click", () => {
        user_modale.cross_function();
    });
    user_modale.picture.addEventListener("click", e => {
        e.stopPropagation();
    });
});