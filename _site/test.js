
var liste = [1,2,3,4,2000]
var i = 3

var gateau = {
  "name": "Gâteau au pain raci",
  "ingredients": ["pain","oeufs","lait","raisins secs","copeaux de chocolat","pomme"],
  "cuisson": "45 minutes"
}

var i = 0
i++
// lengt=6 donc
//

gateau.ingredients.forEach(function disMoiTout (tata, index) {
  console.log("Dis moi tout:", tata, index)
})




/*
function disMoiTout (tata) {
  console.log("Dis moi tout:", tata)
}

for (i=0; i < gateau.ingredients.length; i++) {
  disMoiTout(gateau.ingredients[i])

}


console.log("Contenu de la liste :",liste)
console.log("Taille la liste :", liste.length)
console.log("Un élément de la liste: ", liste[i])
console.log("Contenu du gâteau ", gateau)
console.log("Nombre d'ingredients", gateau.ingredients.length)
console.log("Affiche le temps de cuission:", gateau.cuisson)
console.log("Affiche le 2e ingredients:", gateau.ingredients[1])
console.log("Affiche le dernier ingrédient:", gateau.ingredients[i])
*/
