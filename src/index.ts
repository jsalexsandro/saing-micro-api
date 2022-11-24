import express from "express"
import cors    from "cors"
import Routes  from "./routes"

const app = express();
// app.use(express.json());
app.use(Routes)
app.use(cors())

const port = process.env.PORT || 4000;

app.listen(port, () => console.log('listening on port: ', port));