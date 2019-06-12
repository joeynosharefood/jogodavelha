const board = []
const boardHeight = 4
const boardWidth = 4
const boardArea = boardHeight * boardWidth
const debug = false
var playe = 'circle'
empate = 0
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
    boardGen()
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
                html += `<td id="${cellIndex}" class ="pixel-${cellIndex}"onclick="change(${cellIndex}); tradeturn()">`
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
        empate += 1
        backChange.classList.add('circle')
        entryData(index, 'circle')
    }else{
        empate += 1
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
            winner(1)
        }else if(insCirc2 == 30 || insX2 == 30){
            winner(2)
        }else if(insCirc3 == 42 || insX3 == 42){
            winner(3)
        }else if(insCirc4 == 30 || insX4 == 30){
            winner(4)
        }else if(insCirc5 == 30 || insX5 == 30){
            winner(5)
        }else if(insCirc6 == 27 || insX6 == 27){
            winner(6)
        }else if(insCirc7 == 30 || insX7 == 30){
            winner(7)
        }else if(insCirc8 == 33 || insX8 == 33){
            winner(8)
        }else if(empate == 9){
            draw()
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
                insCirc7 += pos
            }else if(type == 'x'){
                insX2 += pos
                insX4 += pos
                insX5 += pos 
                insX7 += pos 
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
function resetVar(){
    //Circulo 
    insCirc1 = 0
    insCirc2 = 0
    insCirc3 = 0
    insCirc4 = 0
    insCirc5 = 0
    insCirc6 = 0
    insCirc7 = 0
    insCirc8 = 0
    //X
    insX1 = 0
    insX2 = 0
    insX3 = 0
    insX4 = 0
    insX5 = 0
    insX6 = 0
    insX7 = 0
    insX8 = 0
    //Turn
    playe = 'circle'
}
function winner(condition){
    let win = document.getElementById('winner')
    win.src = `../img/${condition}.png`
}
function reset(){
    empate = 0
    let win1 = document.getElementById('winner')
    win1.src = ""
    resetVar()
    start()
}
function draw(){
    empate = 0
    alert('Empate')
    let win1 = document.getElementById('winner')
    win1.src = ""
    resetVar()
    start()
}
start()