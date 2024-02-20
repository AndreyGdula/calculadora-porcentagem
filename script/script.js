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
    let select = document.querySelector("select#select-d").value
    let valorD = Number(document.querySelector("input#valor-d").value)
    let cemD = Number(document.querySelector("input#cem-d").value)
    let resInputD = document.querySelector("input#type-d")

    if (select == "aumentar") {
        var resultadoD = ((valorD * (cemD + 100)) / 100).toFixed(2)
    } else {
        var resultadoD = ((valorD * (100 - cemD)) / 100).toFixed(2)
    }
    resInputD.value = resultadoD.toString()
}

function typeE() {
    let selectE = document.querySelector("select#select-e").value
    let cemE = Number(document.querySelector("input#cem-e").value)
    let valorE = Number(document.querySelector("input#valor-e").value)
    let resInputE = document.querySelector("input#type-e")

    if (selectE == "aumentar") {
        var resultadoE = ((valorE * 100) / (cemE + 100)).toFixed(2)
    } else {
        var resultadoE = ((valorE * 100) / (100 - cemE)).toFixed(2)
    }
    resInputE.value = resultadoE.toString()
}