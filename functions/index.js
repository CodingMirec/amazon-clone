const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Hdfv3CvqKP3FC1OIEiIPt1WONhpJcPhgsNQSEmdP7IxnO0KlRuA1LMEoDpRcqbXR1jgFO5XeOADCN1BdsA9wHmf00RvZFHxQY"
);

//API

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => res.status(200).send("hello world"));

//Listen Command
exports.api = functions.https.onRequest(app);
