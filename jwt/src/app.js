import express from "express";
import morgan from "morgan";

import usuariosRoutes from "./routes/users.rutas.js";
import indexRoutes from "./routes/index.rutas.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/", indexRoutes);
app.use("/api", usuariosRoutes);

app.use((req, res, next) => {
res.status(404).json({
    message: "Endpoint no encontrado",
});
});

export default app;