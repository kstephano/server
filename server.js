const http = require("http");
const cats = ['Snowball', 'Snowball 2', 'Jazz'];
const dogs = ['Fenton', 'Bork', 'Woof'];
const unicorns = ['Pegasus', 'Charlie', 'Horse'];

const requestListener = (req, res) => {
    let body;
    let statusCode;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Methods", "GET, DELETE");
    
    switch(req.url) {
        case '/':
            body = { message: "Welcome to the home page" };
            break;
        case '/cats':
            body = { cats: cats }
            break;
        case '/dogs':
            body = { dogs: dogs }
            break;
        case '/unicorns':
            body = { unicorns: unicorns }
            break;
        default: 
            statusCode = 404;
            body = { error: `Route ${req.url} does not exist.`};
            break;
    }
    res.statusCode = statusCode || 200;
    body = body && JSON.stringify(body);
    res.end(body);
}

const server = http.createServer(requestListener);

const startServer = (port, host) => 
    server.listen(port, host, () => 
        console.log(`Visit http://${host}:${port} for good stuff`));

const closeServer = cb => server.close(cb);

module.exports = { startServer, closeServer }