const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve the page with iframe to the real game
app.get('/', (req, res) => {
  res.send(`
    <!doctype html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>PokeRogue via Render</title>
      <style>
        html, body, iframe { margin:0; padding:0; width:100%; height:100%; border:0; }
        iframe { display:block; }
      </style>
    </head>
    <body>
      <iframe src="https://playpokerogue.com/" frameborder="0" allowfullscreen></iframe>
    </body>
    </html>
  `);
});

app.listen(PORT, () => console.log(`Render server running on port ${PORT}`));
