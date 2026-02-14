import dbConnect from "./src/db/database.ts";

import app from "./src/app.ts";

const PORT = process.env.PORT || 3000;

dbConnect().then(() => {
  app.listen(PORT, () => {
    console.log("Server started.....");
  });
});
