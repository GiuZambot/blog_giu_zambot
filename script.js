function ola(){
  let name = document.getElementById("nomeInput").value;
  let nameold = localStorage.getItem('name');
 
  if(!name||name=="") {
    name = localStorage.getItem('name');
  } else {
    //senão seta
    localStorage.setItem('name', name);
  }
  respUser();
}

//a função podia estar junto com ola
function respUser() {
  let name = localStorage.getItem('name');
  let li = document.querySelector('li');
  li.textContent = 'Veja meus links, ' + name;
}


function muda (){
  let myHeading = document.getElementById("titulo");

  if (myHeading.textContent=="Título") {
    myHeading.textContent = "Hello world!";
    //console.log("Mudou");
  } else {
    myHeading.textContent = "Título";
    //console.log("Voltou");
  }

}

//setTimeout(muda, 3000); Faz uma vez só
//muda a cada 2000 ms
const mudando = setInterval(muda, 2000);


//insere a função para parar de mudar
document.getElementById("titulo").onclick = () => clearInterval(mudando);

// ou assim
// document.getElementById("titulo").onclick = function() {
//   console.log("Parando");
//   clearInterval(mudando);
// }

