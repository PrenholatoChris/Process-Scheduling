import {runProcess, createProcess, removeProcess} from './basicFunctions.js'

var cpu = document.getElementById("cpu")
let method = 'fifo'

async function createQueue(qtd){
  for(let i=0; i<=qtd; i+=1){
    if(cpu.children.length>=11){
      await new Promise(r => setTimeout(r, 3000));
    }
    let time = createProcess()
    time = Math.random()*((time*10) -100)// + 500
    await new Promise(r => setTimeout(r, time));
  }
}

async function Algorithm(method){
  createQueue(20)
  if(method=="fifo"){
    while(cpu.children.length >= 1){
      await runProcess(0,100)
    }
  }

  else if(method == "sf"){
    while(cpu.children.length >= 1){
      let shortest = 101
      let index = 0

      for(let i=0;i < cpu.children.length; i+=1){
        let value = parseInt(cpu.children[i].children[0].style.width.replace("%",""))
        if( value < shortest){
          shortest = value 
          index = i
        }
      }
      await runProcess(index,100)
    }
  }
  else if(method =="rr"){
    while(cpu.children.length > 0){
      console.log(cpu.children.length)
      for(let i=0;i < cpu.children.length;i+=1){
        let retorno = await runProcess(i,20)
      }
    }

  }
}

var startBtn = document.getElementById("run").onclick = () => {
  Algorithm(method)
}

var plusBtn = document.getElementById("plus").onclick = ()=>{
  createProcess()
}

var minusBtn = document.getElementById("minus").onclick = () => {
  removeProcess()
}


const methods = document.getElementById("algorithms")
methods.onclick = (event) => {
  const list = event.path[1].children
  for(const elem of list){
    if(elem.className.includes("active")){
      elem.className = elem.className.replace(" active", "")
      break
    }
  }
  const btn = event.path[0]
  btn.className += " active"
  method = (btn.id)
  console.log(method)
}


