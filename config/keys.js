require("dotenv").config();

const user = process.env.MONGODB_USERNAME;
const pass = process.env.MONGODB_PASSWORD;

module.exports = {
  // mongoURIDev: "mongodb://localhost:27017/database name",
  // mongoURI: "mongodb+srv://<username>:<password>@cluster0-fqsei.mongodb.net/bet-app?retryWrites=true&w=majority", //Cluster uri
  // googleClientID: '',
  // googleClientSecret: '',
};
