import Express from "express";
import router from "./routes/index.js";
import { errorHandler } from "./helpers/index.js";

const app = Express();
const port = process.env.PORT || 5000;

app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));
app.use(errorHandler);

app.use("/", router);

app.listen(port, () => {
  console.log(`Server listening on ${port}!\nAcess http://localhost:${port}`);
});
