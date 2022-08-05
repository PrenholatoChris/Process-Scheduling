export function changeAlgorithmInfo(method){
  let titleInfo = document.getElementById("offcanvasInfoTitle")
  let textInfo = document.getElementById("offcanvasInfoText")
  

  if(method=="fifo"){
    titleInfo.innerHTML= 'First In First Out';

    textInfo.innerHTML = `O método FIFO(First in First out), funciona de modo que os 
      processo que entram primeiro vão ser os primeiros a sair, como uma fila.
      <br><br><h4>Legenda</h4>
      Números Laranjas = <span class="text-warning">Prioridade</span><br>
      `
              
  }
  else if(method == "sf"){
    titleInfo.innerHTML= 'Shortest First';

    textInfo.innerHTML = `O método Shortest First, funciona de modo que sempre pega o menor
    processo da fila e o executa até que ele saia da fila.
    <br><br><h4>Legenda</h4>
    Números Laranjas = <span class="text-warning">Prioridade</span><br>`
  }
  else if(method == "str"){
    titleInfo.innerHTML= 'Shortest Time Remaining';

    textInfo.innerHTML = `O método Shortest First Remaining, funciona de modo que sempre pega o menor
    processo da fila e o executa até que haja outro processo que tenha o seu tempo menor que o que está
    em execução, então o processador realiza a troca de processo.
    <br><br><h4>Legenda</h4>
    Números Laranjas = <span class="text-warning">Prioridade</span><br>`
  }
  else if(method == "rr"){
    titleInfo.innerHTML= 'Round Robin';
    
    textInfo.innerHTML = `O método Round Robin, funciona de modo que atribui a cada processo um quantun
    e vai rodadando de formar circular aos processos que estão na fila, sempre executando no tempo maximo
    que seu quantum permite.
    <br><br><h4>Legenda</h4>
    Números Laranjas = <span class="text-warning">Prioridade</span><br>`
  }
  else if(method == "pr"){
    titleInfo.innerHTML= 'Priority';
    textInfo.innerHTML = `O Algortimo de Preempção por Prioridade ocorre quando o SO interrompe um processo
    em execução para que outro de maior prioridade seja executado.
    <br><br><h4>Legenda</h4>
    Números Laranjas = <span class="text-warning">Prioridade</span><br>`
  }
  else if(method == "sg"){
    titleInfo.innerHTML= 'Scalation Guaranteed';
    textInfo.innerHTML = `O método de Escalonamento Garantido consiste em garantir, a todos os seus processos, 
    a mesma quantidade de tempo de execução dentro da CPU.
    <br><br><h4>Legenda</h4>
    Números Laranjas = <span class="text-warning">Prioridade</span><br>`
  }
  else if(method == "ff"){
    titleInfo.innerHTML= 'Fair fraction';
    textInfo.innerHTML = `Este método de Escalonamento trata os usuários de forma justa, não havendo sobreposição 
    de processos entre eles.
    <br><br><h4>Legenda</h4>
    Números Laranjas = <span class="text-warning">Prioridade</span><br>
    Barra Vermelha = <span class="text-warning"><font style="color:#DA0037;">User 1</font></span><br>
    Barra Roxa = <span class="text-warning"><font color="darkmagenta">User 2</font></span><br>`
  }
  else if(method == "lt"){
    titleInfo.innerHTML= 'Lotery';
    textInfo.innerHTML = `No método de Escalonamento por Loteria os processos recebem uma quantidade de bilhetes
    proporcional a sua prioridade, sendo sorteados para entrarem na CPU e fazerem uso de seus recursos.
    <br><br><h4>Legenda</h4>
    Números Azuis   = <span class="text-primary">Bilhetes</span><br>
    Números Laranjas = <span class="text-warning">Prioridade</span><br>`
  }
}