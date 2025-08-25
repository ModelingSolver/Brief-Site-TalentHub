import Express from "express"; // PAS BON : { Express }
import router from "./routes";
import { fileURLToPath } from "node:url";
import path from "node:path";


// Initialisation du serveur Express
const app = Express();

// Déclaration du port de Express (3000)
const PORT = 3001;

//@ts-ignore
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));


app.use(Express.static(path.join(__dirname, "public")));

app.use(Express.urlencoded({ extended: true }));


// On lie le router à l'application Express
app.use("/", router);

app.use((req, res) => {
  res.status(404).send("Page non trouvée");
});
// Démarrer le serveur Express
app.listen(PORT, () => {
  console.log(`Le serveur a démarré sur le port ${PORT}`);
});
