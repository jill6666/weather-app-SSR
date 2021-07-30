import '@babel/polyfill';
import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import WeatherApp from "./client/components/WeatherApp";

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  const content = renderToString(<WeatherApp />);

  const html = `
    <html>
      <head>
        <title> weather-app-SSR 用SSR改寫天氣APP </title>
        <link rel="icon" href="https://img.icons8.com/material-outlined/24/000000/sun--v2.png" type="image/png">
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;

  res.send(html);
});


var port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("listening on port " + port );
});
