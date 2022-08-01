export function changeAlgorithmInfo(method){
  let titleInfo = document.getElementById("offcanvasInfoTitle")
  let textInfo = document.getElementById("offcanvasInfoText")
  console.log(method)
  

  if(method=="fifo"){
    titleInfo.textContent= 'First In First Out';

    textInfo.textContent = `O metodo FIFO(First in First out), funciona de modo que os 
      processo que entram primeiro vão ser os primeiros a sair, como uma fila`
  }
  else if(method == "sf"){
    titleInfo.textContent= 'Shortest First';

    textInfo.textContent = `O metodo Shortest First, funciona de modo que sempre pega o menor
    processo da fila e o executa até que ele saia da fila`
  }
  else if(method == "str"){
    titleInfo.textContent= 'Shortest Time Remaining';

    textInfo.textContent = `O metodo Shortest First Remaining, funciona de modo que sempre pega o menor
    processo da fila e o executa até que haja outro processo que tenha o seu tempo menor que o que está
    em execução, então o processador realiza a troca de processo`
  }
  else if(method == "rr"){
    titleInfo.textContent= 'Round Robin';
    
    textInfo.textContent = `O metodo Round Robin, funciona de modo que atribui a cada processo um quantun
    e vai rodadando de formar circular aos processos que estão na fila, sempre executando no tempo maximo
    que seu quantum permite`
  }
  else if(method == "pr"){
    titleInfo.textContent= 'Shortest Time Remaining';
    textInfo.textContent = ``
  }
  else if(method == "sg"){
    titleInfo.textContent= 'Shortest Time Remaining';
    textInfo.textContent = ``
  }
  else if(method == "ff"){
    titleInfo.textContent= 'Fair fraction';
    textInfo.textContent = ``
  }
  else if(method == "lt"){
    titleInfo.textContent= 'Lotery';
    textInfo.textContent = ``
  }
}