let http = require('http');
let server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to Chobe Topper home page')
    }

    else if (req.url === '/aboutme') {
        res.end('Topper CHobe hu me')
    }
    else {
        res.end(`<h1>Accha tum to galat jagah aa gaye ho</h1>
        <p> Nikal bc</p>
        <a href='/'>Ye le rasta</a>`)
    }
});

server.listen(5000);