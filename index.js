const server = require('./server');

const port = 5000;
const host = 'localhost';

server.listen(post, host, () => {
  console.log(`\n *** listening on ${host}:${port} *** \n`);
});
