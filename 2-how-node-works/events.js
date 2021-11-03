const EventEmmiter = require('events');
const http = require('http');

class Sales extends EventEmmiter {
  constructor() {
    super();
  }
}

const myEmmiter = new Sales();

// Observer pattern

myEmmiter.on('newSale', () => {
  console.log('There was a new sale!');
});

myEmmiter.on('newSale', () => {
  console.log('Customer name: John');
});

myEmmiter.on('newSale', (stock) => {
  console.log(`There are now ${stock} items left in stock`);
});

myEmmiter.emit('newSale', 9);

//////////////////////////////

const server = http.createServer();

server.on('request', (req, res) => {
  console.log('Request received');
  console.log(req.url);
  res.end('Request received');
});

server.on('request', (req, res) => {
  console.log('Another request :)');
});

server.on('close', () => {
  console.log('Server closed');
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Waiting for request...');
});
