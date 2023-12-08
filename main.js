const heroi = {
    nome: "Yuno",
    vitorias: 140,
    derrotas: 9
}

function calculaSaldoVitorias(numVitorias, numDerrotas){
    return numVitorias - numDerrotas;
}

function mostraRank(ranking){
    if(ranking < 10)
        return "Ferro";
    
    if(ranking > 10 && ranking <=20)
        return "Bronze";
    
    if(ranking > 20 && ranking <= 50)
        return "Prata";
    
    if(ranking > 50 && ranking <= 80)
        return "Ouro";
    
    if(ranking > 80 && ranking <=90)
        return "Diamante";
    
    if(ranking > 90 && ranking <= 100)
        return "Lendário";
    
    if(ranking > 100)
        return "Imortal";
}

saldoVitorias = calculaSaldoVitorias(heroi.vitorias, heroi.derrotas);

console.log(`O herói ${heroi.nome} tem saldo de ${saldoVitorias} vitórias e está no nível ${mostraRank(saldoVitorias)}.`);