function MyCar(cor, velocidadeMaxima) {
    // Função criada com o nome carro e esses são os atributos da função
    this.Cor = cor;
    this.VelocidadeMaxima = velocidadeMaxima;
    this.VelocidadeAtual = 0;
    //this é próprio objeto, pela ele dentro dele mesmo 
}

MyCar.prototype.Acelerar = function () {
    //O nome da função que eu criei o método que eu criei. 
    if (this.VelocidadeAtual < this.VelocidadeMaxima) {
        //Se a velocidade atual for menos que a velocidade máxima
        this.VelocidadeAtual++;
        //Aumenta um número 
    }
}

MyCar.prototype.Frear = function () {
    //O nome da função frear 
    if (this.VelocidadeAtual > 0) {
        //Se ela velocidade atual for maior que 0
        this.VelocidadeAtual--;
        //Diminuir um número 
    }
}

let meuCarro = new MyCar("Preta", 10);
let meuFusca = new MyCar("Vermelha", 5);
// O nome dos carros e características deles igualada na função. cor e velocidadeMaxima

var minhaFerrari = {
    //Criar uma variável Ferrari 
    Cor: "Amerela",
    //Cor da Ferrari 
    VelocidadeMaxima: 300,
    VelocidadeAtual: 0,
    //Velocidade máxima e atual do carro. 

    Acelerar: function () {
        //Função acelerar 
        if (this.VelocidadeAtual < this.VelocidadeMaxima) {
            //Se essa velocidade atual for menor que a velocidade máxima
            this.VelocidadeAtual++;
            //Somar uma a mais 
        }
    }
}
//o var minhaFerrari é lido um arquivo Jason por estar entre chaves.


document.getElementById("Acelerar").addEventListener("click", () => {
    //Com o Id acelerar no HTML pelo evento click
    meuCarro.Acelerar();
    //O botão acelerar 
    console.log("MeuCarro: " + meuCarro.VelocidadeAtual);
    //informar no meu Consolelog o meu carro: e o número da velocidade atual até onde a velocidade máxima é permitida.

    meuFusca.Acelerar();
    console.log("MeuFusca: " + meuFusca.VelocidadeAtual);

    minhaFerrari.Acelerar();
    console.log("MinhaFerrari: " + minhaFerrari.VelocidadeAtual);

});

