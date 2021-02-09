const dadosDaPessoa = {nome:'Bernadete',peso:57,altura:1.79}

const imc = dadosDaPessoa.peso/(dadosDaPessoa.altura*dadosDaPessoa.altura)

if (imc<29.9){
    console.log(`${dadosDaPessoa.nome}, você não está acima do peso`)
}else(console.log(`${dadosDaPessoa.nome}, você está acima do peso`))