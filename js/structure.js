const board = []
const boardHeight = 4
const boardWidth = 4
const boardArea = boardHeight * boardWidth
const debug = false
var playe = 'circle'
var insOfvic = 0
//Instancia de Vitoria
//Circulo 
var insCirc1 = 0
var insCirc2 = 0
var insCirc3 = 0
var insCirc4 = 0
var insCirc5 = 0
var insCirc6 = 0
var insCirc7 = 0
var insCirc8 = 0
//X
var insX1 = 0
var insX2 = 0
var insX3 = 0
var insX4 = 0
var insX5 = 0
var insX6 = 0
var insX7 = 0
var insX8 = 0

function start(){
    createStructure()
    renderBoard()
}
function createStructure(){
    for (let i = 1; i <= boardArea; i++){
        board[i] = 0
    }
}
function renderBoard(){
    html = '<table cellpadding=0 cellspacing=0>'
    for (let row = 1; row < boardHeight; row++){
        html += '<tr>'
        for (let column = 1; column < boardWidth; column++){
            let cellIndex = column + (boardWidth * row)
            if(debug == true){
                html += '<td>'
                html += cellIndex
                html += '</td>'
            }else{
                html += `<td id="${cellIndex}" onclick="change(${cellIndex}); tradeturn()">`
                html += '</td>'
            }
        }
        html += '</tr>'
    }
    html += '</table>'
    document.querySelector('#board').innerHTML = html
}
function change(index){
    let backChange = document.getElementById(`${index}`)
    if (playe == 'circle'){
        backChange.classList.add('circle')
        entryData(index, 'circle')
    }else{
        backChange.classList.add('x')
        entryData(index, 'x')
    }
}
function tradeturn(){
    scanner()
    let turn = document.getElementById('turn')
    if(playe == 'circle'){
        turn.src = '/img/x.png'
        playe = 'x'
    }else{
        turn.src = '/img/o.png'
        playe = 'circle'
    }
}
function scanner(){
        if (insCirc1 == 18 || insX1 == 18){
            alert('Você ganhou')
        }else if(insCirc2 == 30 || insX2 == 30){
            alert('Você ganhou')
        }else if(insCirc3 == 42 || insX3 == 42){
            alert('Você ganhou')
        }else if(insCirc4 == 30 || insX4 == 30){
            alert('Você ganhou')
        }else if(insCirc5 == 30 || insX5 == 30){
            alert('Você ganhou')
        }else if(insCirc6 == 27 || insX6 == 27){
            alert('Você ganhou')
        }else if(insCirc7 == 30 || insX7 == 30){
            alert('Você ganhou')
        }else if(insCirc8 == 33 || insX8 == 33){
            alert('Você ganhou')
        }
}
function entryData(pos, type){
    switch (pos) {
        case 5:
            if (type == 'circle'){
                insCirc1 += pos
                insCirc4 += pos
                insCirc6 += pos        
            }else if(type == 'x'){
                insX1 += pos
                insX4 += pos
                insX6 += pos
            }
            break;
        case 6:
            if (type == 'circle'){
                insCirc1 += pos
                insCirc7 += pos
            }else if(type == 'x'){
                insX1 += pos
                insX7 += pos
            }
            break;
        case 7:
            if (type == 'circle'){
                insCirc1 += pos
                insCirc5 += pos
                insCirc8 += pos 
            }else if(type == 'x'){
                insX1 += pos
                insX5 += pos
                insX8 += pos 
            }
            break;
        case 9:
            if (type == 'circle'){
                insCirc2 += pos
                insCirc6 += pos 
            }else if(type == 'x'){
                insX2 += pos
                insX6 += pos 
            }
            break;
        case 10:
            if (type == 'circle'){
                insCirc2 += pos
                insCirc4 += pos
                insCirc5 += pos 
            }else if(type == 'x'){
                insX2 += pos
                insX4 += pos
                insX5 += pos 
            }
            break;
        case 11:
            if (type == 'circle'){
                insCirc2 += pos
                insCirc8 += pos
            }else if(type == 'x'){
                insX2 += pos
                insX8 += pos
            }
            break;
        case 13:
            if (type == 'circle'){
                insCirc3 += pos
                insCirc5 += pos
                insCirc6 += pos 
            }else if(type == 'x'){
                insX3 += pos
                insX5 += pos
                insX6 += pos 
            }
            break;
        case 14:
            if (type == 'circle'){
                insCirc3 += pos
                insCirc7 += pos
            }else if(type == 'x'){
                insX3 += pos
                insX7 += pos
            }
            break;
        case 15:
            if (type == 'circle'){
                insCirc3 += pos
                insCirc4 += pos
                insCirc8 += pos 
            }else if(type == 'x'){
                insX3 += pos
                insX4 += pos
                insX8 += pos 
            }
            break;
    }
}
start()