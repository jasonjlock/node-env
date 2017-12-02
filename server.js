const http = require('http')

const port = 3000
const server = http.createServer((req, res) => res.end('Node.js is running...'))
server.listen(port, err => {
    if (err) return console.log('An error occured.')

    console.log(`Server is listening on port ${port}`)
});
