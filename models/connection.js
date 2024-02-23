const mongoose = require("mongoose");

//utilisation des variables d'environnement
const connectionString = process.env.CONNEXION_STRING;

//Connection à la base de données qui renvoie un message de confirmation
mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Database connected"))
  .catch(error => console.error(error));

//------------------------------------------------
//Lancer la connexion dans app.js avant les routes
