const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Personal Profile</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          max-width: 600px;
          margin: 50px auto;
          padding: 20px;
          background-color: #f0f0f0;
          border-radius: 8px;
        }
        .container {
          background-color: white;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 {
          color: #333;
        }
        .info {
          margin: 15px 0;
          font-size: 18px;
        }
        .quote {
          font-style: italic;
          color: #666;
          border-left: 4px solid #007bff;
          padding-left: 15px;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Welcome!</h1>
        <div class="info">
          <strong>Name:</strong> Nash Ivan A. Tenorio
        </div>
        <div class="info">
          <strong>Class Section:</strong> BA 4102
        </div>
        <div class="quote">
          "Laziness is nothing more than the habit of resting before you get tired. - Jules Renard"
        </div>
      </div>
    </body>
    </html>
  `;
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
