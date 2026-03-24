// agent-swarm-test: GitHub integration smoke test
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 'ok', platform: 'github' }));
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
