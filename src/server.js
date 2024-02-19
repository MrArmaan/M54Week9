require("dotenv").config();
require(dotenv).config();

const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
