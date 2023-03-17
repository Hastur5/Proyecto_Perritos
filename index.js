import express from "express";
import morgan from "morgan";
import { sequelize } from "./src/database/database.js";
import perroRoutes from "./src/routes/perro.routes.js";

async function main() {
  try {
    await sequelize.sync({ force: false }); // Se conecta a la base y si no la encuentra, la crea. Si se cambia a True, borra la tabla y crea todo de nuevo.
    await sequelize.authenticate();
    console.log("Conexión exitosa :)");
  } catch (e) {
    console.log(e);
  }

  const app = express();
  // Settings
  app.listen(3000);
  // Middelwares
  app.use(morgan("dev"));
  app.use(express.urlencoded({ extended: false }));
  // Routes
  app.use(perroRoutes);

  app.use(express.json());
  console.log("Server listening on port 3000");

  // 404 handler
  app.use((req, res, next) => {
    res.status(404).send("404 Not Found");
  });
}

main();
