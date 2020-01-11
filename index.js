const server = require('./server');

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
  console.log(`\n *** listening on ${host}:${port} *** \n`);
});
