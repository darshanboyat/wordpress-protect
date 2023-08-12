import Express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = Express();

app.use(cors());
app.options("*", cors());
app.use(bodyParser.json());
app.post("/api/blog-protect", (req, res) => {
  const enteredPassword = req.body.password;
  const correctPassword = "Dv3277426269@p";
  if (enteredPassword === correctPassword) {
    res.redirect(302, "https://braininventoryblogs.com/wordpress");
  } else {
    res.status(401).json({ error: "Wrong password" });
  }
});

app.listen(8080, () => {
  console.log("Server is listening at port 8080");
});
