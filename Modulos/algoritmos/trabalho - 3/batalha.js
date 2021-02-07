const naruto={name:'NARUTO',vida:600,damage:110}
const sasuke={name:'SASUKE',vida:620,damage:100}
const sakura={name:'SAKURA',vida:300,damage:50}
const kakashi={name:'KAKASHI',vida:700,damage:210}
const Gai={name:'GAI',vida:720,damage:200}
const itachi={name:'ITACHI',vida:700,damage:150}

function battle(ninja1,ninja2){
    ninja1.vida-ninja2.ataque
    ninja2.vida-ninja1.ataque
    if(itachi === ninja1 || itachi === ninja2){
        console.log(`${itachi.name} VENCEU`)
    }
    else if(ninja1.vida>ninja2.vida){
        console.log(`${ninja1.name} VENCEU`)}
else(console.log(`${ninja2.name} VENCEU`))
    }
    battle(naruto,sasuke)
    battle(itachi,kakashi)