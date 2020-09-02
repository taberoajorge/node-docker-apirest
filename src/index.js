const app = require('./app')



async function main() {
    await app.listen(8000)
    console.log('server is runningon port: 8000');
}

main();