import app from "./src/app.js";
import { connectDB } from "./src/config/db.js";

import config from "./src/config/config.js";

const { PORT } = config;


const startServer = async () => {
  await connectDB(); 

  app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
    console.log(
      `API documentation available at http://localhost:${PORT}/api-docs`
    );
  });
};

startServer();
