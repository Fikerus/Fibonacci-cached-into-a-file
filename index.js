const cache = [0,1]
// The line above changes every time the program is run,
// but only if the number you called the program with is
// greater or equal to the length of the cache array.


function fib(n) {
    if (n < 2)
        return n
    if (cache[n])
        return cache[n]
    const result = fib(n - 2) + fib(n - 1)
    cache[n] = result
    return result
}

const args = process.argv.slice(2)

if (args.length !== 1) {
    console.log(`Usage: node index.js [number]`)
    process.exit(1)
}

const n = +args[0]

console.log(fib(n))





const fs = require('fs')

const path = process.cwd()
const filepath = path + '/index.js'

const file = fs.readFileSync(filepath).toString()

const lines = file.split('\n')

let previous = lines[0].match(/\[.*\]/)[0]
previous = previous.slice(1, previous.length - 1)

const current = cache.toString()

if (previous.length < current.length) {
    const content = lines.slice(1)
    content.unshift(`const cache = [${current}]`)
    fs.writeFileSync(filepath, content.join('\n'))
}