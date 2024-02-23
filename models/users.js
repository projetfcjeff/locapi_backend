//Importer Mongoose dans le module - l'affecter à une variable pour appeler les méthodes nécessaires
const mongoose = require("mongoose");

//Exemple de définition d'un schéma sans sous document ni clé étrangère
const userSchema = new mongoose.Schema({
    nickname:String,
    name: String,
    latitude:Number,
    longitude:Number,

});

//Affectation des schémas au collections pour définir les modèles
//Si la collection et/ou la DB est vide lors de l'exécution du programme alors les collections / DB sont créées
const User = mongoose.model("users", userSchema);

//Export des modèles pour les rendre disponibles dans les autres modules du projet
module.exports = User;