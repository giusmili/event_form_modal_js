document.addEventListener("DOMContentLoaded", e => {
    console.log(e.target);

    /* méthode de séléction des éléments formulaire */

    let input_all = document.getElementsByTagName("input");
    let validate = document.querySelector('input[type="submit"]');
    let check = document.getElementsByName("conditions");
    /* 
      let champsid = document.getElementById("user-name")
      let champsClass = document.getElementsByClassName("warning")[0]
      champsAll = document.querySelectorAll("input")
      window.location.assign("https://developer.mozilla.org/en-US/docs/Web/API/Location/reload")
     */

    const stock = [];
    /* gestionnaire d'événemment */
    validate.addEventListener("click", e => {
        e.preventDefault();
        for (let index = 0; index < input_all.length; index++) {
            /* on fait le trie de 2 input et on teste les autres */
            input_all[index].value !== "Envoyer" && input_all[index].value !== "yes" ? console.log(input_all[index]) : false;
        }

        if (input_all[0].value && input_all[1].value && input_all[2].value && input_all[3].value && input_all[4].value) {
            stock.push(input_all[0].value, input_all[1].value, input_all[2].value, input_all[3].value, input_all[4].value);
            console.table(stock);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
            });
        }
        if (check[0].checked) {
            Swal.fire('Good job!', 'You clicked the button!', 'success');
            console.log(check[0].checked);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
            });
            console.log(check[0].checked);
        }
    });
});