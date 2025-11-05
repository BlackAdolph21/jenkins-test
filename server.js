const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.end("Hello from Jenkins CI/CD pipeline!");
});

app.listen(3000, '0.0.0.0', () => {
  console.log("Server running on port 3000");
});
