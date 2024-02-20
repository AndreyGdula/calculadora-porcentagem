function typeA() {
    let cemA = Number(document.querySelector("input#cem-a").value)
    let valorA = Number(document.querySelector("input#valor-a").value)
    let resInputA = document.querySelector("input#type-a")

    let resultadoA = ((cemA * valorA) / 100).toFixed(2)
    resInputA.value = resultadoA.toString()
} 

function typeB() {
    let valor1B = Number(document.querySelector("input#valor1-b").value)
    let valor2B = Number(document.querySelector("input#valor2-b").value)
    let resInputB = document.querySelector("input#type-b")

    let resultadoB = ((valor1B * 100) / valor2B).toFixed(2)
    resInputB.value = resultadoB.toString() + "%"
}

function typeC() {
    let valor1C = Number(document.querySelector("input#valor1-c").value)
    let valor2C = Number(document.querySelector("input#valor2-c").value)
    let resInputC = document.querySelector("input#type-c")

    let resultadoC = (((valor2C * 100) / valor1C) - 100).toFixed(2)
    if (valor1C > valor2C) {
        resInputC.value = "-" + resultadoC.toString() + "%"
    } else if (valor1C < valor2C) {
        resInputC.value = "+" + resultadoC.toString() + "%"
    } else {
        resInputC.value = "não houve mudança"
    }
}

function typeD() {
    let valorD = Number(document.querySelector("input#valor-d").value)
    let cemD = Number(document.querySelector("input#cem-d").value)
    let resInputD = document.querySelector("input#type-d")

    let resultadoD = ((valorD * (cemD + 100)) / 100).toFixed(2)
    resInputD.value = resultadoD.toString()
}

function typeE() {
    let valorE = Number(document.querySelector("input#valor-e").value)
    let cemE = Number(document.querySelector("input#cem-e").value)
    let resInputE = document.querySelector("input#type-e")

    let resultadoE = ((valorE * cemE) / 100).toFixed(2)
    resInputE.value = resultadoE.toString()
}

function typeF() {
    let cemF = Number(document.querySelector("input#cem-f").value)
    let valorF = Number(document.querySelector("input#valor-f").value)
    let resInputF = document.querySelector("input#type-f")

    let resultadoF = ((valorF * 100) / (cemF + 100)).toFixed(2)
    resInputF.value = resultadoF.toString()
}

function typeG() {
    let cemG = Number(document.querySelector("input#cem-g").value)
    let valorG = Number(document.querySelector("input#valor-g").value)
    let resInputG = document.querySelector("input#type-g")

    let resultadoG = ((valorG * 100) / (100 - cemG)).toFixed(2)
    resInputG.value = resultadoG.toString()
}