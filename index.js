import Express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = Express();

app.use(cors());
app.options("*", cors());
app.use(bodyParser.json());
app.get("/", (req, res) => {
  return res.send("<h1>Ok Tested</h1>");
});
app.post("/api/blog-protect", (req, res) => {
  const enteredPassword = req.body.password;
  const correctPassword = "Dv3277426269@p";
  if (enteredPassword === correctPassword) {
    res.status(302).json({
      redirectUrl: "https://braininventoryblogs.com/wordpress",
      error: false,
      success: true,
    });
  } else {
    res
      .status(401)
      .json({ success: false, error: true, errorMessage: "Wrong password" });
  }
});

app.listen(8080, () => {
  console.log("Server is listening at port 8080");
});
