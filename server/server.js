import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";
import router from "./router/route.js";

/* Import connection file */
import connect from "./database/conn.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
config();

connect()

/* routes */
app.use("/api", router);

app.get("/", (req, res) => {
  try {
    res.json("Get Request");
  } catch (error) {
    res.json(error);
  }
});

connect().then(() => {
  try{
    app.listen(PORT, () => {
      console.log(`server connected to http://localhost:${PORT}`);
    });
  } catch(error){
    console.log("Cannot connect to the server")
  }
}).catch(error => {
  console.log("Imvalid Database Connection")
})


