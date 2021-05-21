function firstMsg() {
    console.log('Olá Mundo!')
}
firstMsg()

function myName() {
    console.log('Ana')
}
myName()

function personalData(name, age, musicgenre) {
    console.log(`Olá! Eu me chamo ${name}, tenho ${age} anos e gosto de ouvir ${musicgenre}.`)
}
personalData('Ana', '17', 'Indie')

function myData(movie, music, band) {
    console.log(`Amo o filme ${movie}`)
    console.log(`Gosto da música ${music} da banda ${band}`)
}
myData('Pulp Fiction', 'So Long Forever', 'Palace')

function resultNumber(num1, num2) {
    return num1 * num2
}
console.log(resultNumber(8, 8))