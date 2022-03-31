function divisao (x, y) {
    if (x == 0 || y == 0) {
       console.log("Não se pode dividir por zero")
    } else {
        console.log(x / y)
    }
}

module.exports = divisao;