let botao = document.getElementsByClassName("escolha")[0];
let texto = document.createElement("p");
const selectP = document.getElementById('selected');
const imagemPato = document.getElementById('patin');
const carrinhoJS = document.getElementById('carrinho');
let contador = 0;

setInterval(() => {
    document.getElementById("lista").textContent = "Pratos selecionados: " + contador;
  }, 1);

botao.addEventListener("click", function(){
    if(imagemPato.src.length == 31){
        selectP.textContent = "Selecione um item válido.";
    }
    else{
        selectP.textContent = "Feito! O prato foi selecionado.";
        contador = contador + 1;
        console.log(contador)
    }
    document.getElementById('selected').style.visibility = "visible";
})

async function generarcachorro(){
    try{
        const response = await fetch('https://foodish-api.com/api/');
        const data = await response.json();
        const imagemURL = data.image;
    
        imagemPato.src = imagemURL;
        document.getElementById('selected').style.visibility = "hidden";

    
        
        

    } catch (error){
        console.error('Erro: ', error);
    }
}

document.getElementById("sobre").addEventListener("click", function() {
    if (carrinhoJS.style.visibility === "hidden") {
        carrinhoJS.style.visibility = "visible";
      } else {
        carrinhoJS.style.visibility = "hidden";
      }
  });
  













