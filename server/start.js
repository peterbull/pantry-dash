require("dotenv").config();
const app = require("./server");
const port = process.env.PORT || 5000;
const dbServer = process.env.DB_SERVER;

app.listen(port, () => {
  console.log(`Server running on http://${dbServer}:${port}`);
});
