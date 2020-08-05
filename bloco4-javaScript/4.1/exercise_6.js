    let pecaXadrez = "TORRE";
    let pecaLow = pecaXadrez.toLowerCase();

    let bispo = "bispo";
    let torre = "torre";
    let cavalo = "cavalo";
    let peao = "peao";
    let rei = "rei";
    let rainha = "rainha";

    if(pecaLow == bispo){
        console.log("1");
    }else if(pecaLow == torre){
        console.log("2");
    }else if(pecaLow == cavalo){
        console.log("3");
    } else if(pecaLow == peao){
        console.log("4")
    } else if(pecaLow == rei){
        console.log("5");
    }else if(pecaLow == rainha){
        console.log("6");
    } else{
        console.log("Peça não encontrada!");
    }
