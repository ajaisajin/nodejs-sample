import app from "./app.js";

import connectDB from "./database/database.js";

const port = 3000;

// database
connectDB();

// start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
