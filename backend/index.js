const router = require("./router");
const app = require("./config");
const PORT = process.env.PORT || 5000;
app.use("/api", router);
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
