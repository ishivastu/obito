import dbConnect from "./src/db/database.ts";

import app from "./src/app.ts";

const PORT = process.env.PORT;

dbConnect().then(() => {
  app.listen(PORT, () => {
    console.log("Server started.....");
  });
});
