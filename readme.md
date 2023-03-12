# 🚀 Structure formulaire style by Militello Giuseppe 2023
> Cours sur les formulaires
```html
<header>
    <h1>
     Formulaire d'inscription
    </h1>
</header>
```
# Installer Babel
```cmd
    # Cours Javascript - 2023
    ## Installation de Babel
    cmd
    vérifier la version npm
    puis npm init
    npm install --save-dev babel-cli babel-preset-env

    Ajouter dans le fichier jSon la ligne de code qui suit : "build": "babel --no-babelrc src -w -d js --preset=env"
    Cibler le répertoire "SRC" et commande :npm run build

    Nota bene : pour installer le CLI faire d'abord npm init pour le package.json
    > Afficher la page : [index](https://giusmili.github.io/cours_js_SIO_23/)

    ## Exemple de création d'Objet en JS
```
## object
```js
User = {
    constructor(nom, prenom){
        this.nom = nom;
        this.prenom = prenom
    },
    getterF(){
        console.log(`${this.nom} : ${this.prenom}`)
    }
}

const new_user = Object.create(User);
 new_user.constructor("Gius","Mili")
 new_user.getterF()
 ```
 Le constructeur de l'objet prend en charge les valeurs et la méthode les affiches

 Pour les expression régulières ci-dessous des exemples de code :

 ```js
   const expr = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/; /*expression régulière mail*/
   const regex = '[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}';/* regex phone */

		let mail, numero;
		mail = prompt("Ajouter votre mail","")
        numero = "+33 06 82 24 33 00"

        //deux méthod pour tester le format mail
        expr.test(mail) ? alert("adresse valide") : alert("adresse invalide")
		mail.match(expr) ? alert("adresse valide") : alert("adresse invalide")

        //Ici on teste le format de numéro à 10 chiffre
        numero.match(regex) ? console.log("numéro valide") : console.log("numéro invalide")
 ```