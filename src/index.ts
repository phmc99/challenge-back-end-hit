import express from 'express';
import cors from "cors";
import AppDataSource from "./data-source";
import { errorHandler } from './middlewares/express-error';
import { initializeRoutes } from './routes';

const app = express();
app.use(cors())
app.use(express.json())

initializeRoutes(app)

app.use(errorHandler);

const init = async () => {
  const PORT = process.env.PORT || 3000;
  const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;

  await AppDataSource.initialize();
  app.listen(PORT, () => {
    console.log(`App is running on ${BASE_URL}`);
  });
}

init();