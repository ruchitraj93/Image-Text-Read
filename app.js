const Tesseract = require('tesseract.js')
const fs = require('fs');

function main() {
  Tesseract.recognize(
    "./database101/1608850393.jpeg",
    'eng',
    { logger: m => console.log(m) }
  ).then(({ data: { text } }) => {
    fs.appendFileSync('./database101/database101.txt', text)
    insert2()
  })
}

// main()
function insert2() {
  Tesseract.recognize(
    "./database102/1608850454.jpeg",
    'eng',
    { logger: m => console.log(m) }
  ).then(({ data: { text } }) => {
    fs.appendFileSync('./database102/database102.txt', text)
    insert3()
  })
}
insert3()
function insert3() {
  Tesseract.recognize(
    "./database103/1608850479.jpeg",
    'eng',
    { logger: m => console.log(m) }
  ).then(({ data: { text } }) => {
    fs.appendFileSync('./database103/database103.txt', text)
    insert4()
  })
}

function insert4() {
  Tesseract.recognize(
    "./database104/1608850479.jpeg",
    'eng',
    { logger: m => console.log(m) }
  ).then(({ data: { text } }) => {
    fs.appendFileSync('./database104/database104.txt', text)
  })
}
