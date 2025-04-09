const express = require("express");
const app = express();
const port = 3000;

function checkTime(req, res, next) {
  const currentDate = new Date();
  const day = currentDate.getDay();
  const hour = currentDate.getHours();

  if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
    next();
  } else {
    res.send(`
      <html>
          <head>
              <style>
                  @keyframes fadeIn {
                      from {
                          opacity: 0;
                          transform: scale(0.9);
                      }
                      to {
                          opacity: 1;
                          transform: scale(1);
                      }
                  }

                  body {
                      font-family: 'Arial', sans-serif;
                      background: linear-gradient(135deg, #ff7e5f, #feb47b);
                      color: #fff;
                      text-align: center;
                      padding: 50px;
                      margin: 0;
                      height: 100vh;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                  }

                  .message {
                      background: rgba(0, 0, 0, 0.7);
                      padding: 30px;
                      border-radius: 10px;
                      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                      animation: fadeIn 1s ease-in-out;
                  }

                  .message h1 {
                      font-size: 2.5em;
                      margin-bottom: 10px;
                      color: #ffdd59;
                  }

                  .message p {
                      font-size: 1.2em;
                      margin: 0;
                  }

                  .message p span {
                      font-weight: bold;
                      color: #ffdd59;
                  }
              </style>
              <title>Access Restricted</title>
          </head>
          <body>
              <div class="message">
                  <h1>Access Restricted</h1>
                  <p>The website is only available during <span>working hours</span> (Monday to Friday, 9 AM to 5 PM).</p>
              </div>
          </body>
      </html>
    `);
  }
}

app.use(checkTime);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`
      <html>
          <head>
              <link rel="stylesheet" type="text/css" href="/style.css">
              <title>Home Page</title>
          </head>
          <body>
              <header>
                  <h1>Welcome to Our Website</h1>
              </header>
              <p>Explore our services and feel free to contact us for more information.</p>
              <nav>
                  <a href="/">Home</a> | <a href="/services">Our Services</a> | <a href="/contact">Contact Us</a>
              </nav>
          </body>
      </html>
  `);
});

app.get("/services", (req, res) => {
  res.send(`
      <html>
          <head>
              <link rel="stylesheet" type="text/css" href="/style.css">
              <title>Our Services</title>
          </head>
          <body>
              <header>
                  <h1>Our Services</h1>
              </header>
              <p>We offer a wide range of services to meet your needs, including:</p>
              <ul>
                  <li>Web Development</li>
                  <li>Mobile App Development</li>
                  <li>Digital Marketing</li>
              </ul>
              <nav>
                  <a href="/">Home</a> | <a href="/services">Our Services</a> | <a href="/contact">Contact Us</a>
              </nav>
          </body>
      </html>
  `);
});

app.get("/contact", (req, res) => {
  res.send(`
      <html>
          <head>
              <link rel="stylesheet" type="text/css" href="/style.css">
              <title>Contact Us</title>
          </head>
          <body>
              <header>
                  <h1>Contact Us</h1>
              </header>
              <p>Feel free to reach out to us via the following methods:</p>
              <ul>
                  <li>Email: contact@ourwebsite.com</li>
                  <li>Phone: +123 456 7890</li>
                  <li>Address: 123 Main Street, City, Country</li>
              </ul>
              <nav>
                  <a href="/">Home</a> | <a href="/services">Our Services</a> | <a href="/contact">Contact Us</a>
              </nav>
          </body>
      </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
