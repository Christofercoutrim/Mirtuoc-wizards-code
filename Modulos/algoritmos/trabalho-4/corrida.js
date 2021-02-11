const listC = [criarC(true),criarC(true),criarC(true)]
const pistas = [createP(10,7)]

function criarC(numeroCarros){
    if(numeroCarros===false)
    return'esse carro não existe'
    else
    return {motor:100, pneu:100, freio:100}
}
function createP(numeroCurvas,numeroRetas){
    return {curvas:numeroCurvas, retas:numeroRetas}
}
function tunarCarro(carro,pecaNova,potenciaPecaNova){
    if(pecaNova===3){
        if(potenciaPecaNova>carro.pneu)
            return carro.pneu=potenciaPecaNova
            else
            return console.log(`Essa peça é inferior a que já esta no carro, não é possivel coloca-la`)
    }if(pecaNova===2){
        if(potenciaPecaNova>carro.freio)
            return carro.freio=potenciaPecaNova
            else
            return console.log(`Essa peça é inferior a que já está no carro, não é possivel coloca-la`)
    }if(pecaNova===1){
        if(potenciaPecaNova>carro.motor)
            return carro.motor=potenciaPecaNova
            else
            return console.log(`Essa peça é inferior a que já está no carro, não é possivel coloca-la`)
    }if(pecaNova>3||pecaNova<1)
        return console.log(`tipo de peça não existe`)
}
function condicoesMotor(carro,pista){
    if((carro.motor-pista.retas*8)-pista.curvas*2*8>=1)
    return true
    else 
    return false
}
function condicoesFreio(carro,pista){
    if((carro.freio-pista.retas*16)-pista.curvas*2*16>=1)
    return true
    else
    return false
}
function condicoesPneu(carro,pista){
    if((carro.pneu-pista.retas*24)-pista.curvas*2*24>=1)
    return true
    else
    return false
}
function correr(carro,pista){
    if(condicoesMotor(carro,pista)===true){
        if(condicoesFreio(carro,pista)===true){
            if(condicoesPneu(carro,pista)===true){
                return true
            }
        }
    }
}
function realizarCorrida(listaDeCarros,pista){
   if(correr(listaDeCarros[0],pista[0])){
       console.log(`O carro 1 completou a corrida`)
   }else console.log(`O carro 1 não completou a corrida`)
    if(correr(listaDeCarros[1],pista[0])){
        console.log(`O carro 2 completou a corrida`)
    }else console.log(`O carro 2 não completou a corrida`)
    if(correr(listaDeCarros[2],pista[0])){
        console.log(`O carro 3 completou a corrida`)
    }else console.log(`O carro 3 não completou a corrida`)
}
console.log(tunarCarro(listC[0],3,30000))
tunarCarro(listC[0],1,30000)
tunarCarro(listC[0],2,30000)
realizarCorrida(listC,pistas)
console.log(correr(listC[0],pistas[0]))