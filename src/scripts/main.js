import { runProcess, createProcess, removeProcess} from './basicFunctions.js'
import { start, pause, updateCount } from './clock.js'
import { changeAlgorithmInfo } from './algorithmInfo.js'

var cpu = document.getElementById("cpu")
var method = 'fifo'
var time = 20
var count = 0 

async function createQueue(method){


  createProcess(method)
  while(cpu.children.length >= 1){
    if(cpu.children.length>=11){
      await new Promise(r => setTimeout(r, 2000));
    }
    let timeToProcess = createProcess(method)
    timeToProcess = Math.random()*((timeToProcess * time) -400) + 400// + 500
    await new Promise(r => setTimeout(r, timeToProcess));
  }
}

async function Algorithm(method){
  createQueue(method)
  if(method=="fifo"){
    while(cpu.children.length >= 1){
      if(await runProcess(0,100,time)){
        updateCount(++count)
      }
    }
  }

  else if(method == "sf"){
    while(cpu.children.length >= 1){
      let shortest = 101
      let index = 0

      for(let i=0;i < cpu.children.length; i+=1){
        let value = parseInt(document.getElementsByClassName("progress")[i].style.width.replace("%",""))
        if( value < shortest){
          shortest = value 
          index = i
        }
      }
      if(await runProcess(index,100,time)){
        updateCount(++count)
      }
    }
  }
  else if(method=="str"){
    while(cpu.children.length >= 1){
      let shortest = 101
      let index = 0

      for(let i=0;i < cpu.children.length; i+=1){
        let value = parseInt(document.getElementsByClassName("progress")[i].children[0].attributes[3].textContent)
        if( value < shortest){
          shortest = value 
          index = i
        }
      }
      if(await runProcess(index,10,time)){
        updateCount(++count)
      }
    }

  }

  else if(method =="rr"){
    while(cpu.children.length > 0){
      for(let i=0;i < cpu.children.length;i+=1){
        if(await runProcess(i,20,time)){
          i-=1
          updateCount(++count)
        }
      }
    }
  }
  
  else if(method == "pr"){
    while(cpu.children.length > 0){
      let prioritys = document.getElementsByClassName("priority")
      let priority = 20
      let index = 0
      for (let i = 0; i < cpu.children.length; i++) {
        let processPriority = parseInt(prioritys[i].textContent)
        if(processPriority < priority){
          priority = processPriority
          index = i
        }
      }
      if(await runProcess(index,100,time)){
        updateCount(++count)
      }
    }
  }
  else if(method == "sg"){
    while(cpu.children.length > 1){
      for(let i = 0; i<cpu.children.length;i++){
      let scalation = Math.floor(100/cpu.children.length)
        await runProcess(i,scalation,time)
      }
    }
  }
  else if(method == "ff"){
    while(cpu.children.length > 1){
      for (let i = 0; i < cpu.children.length; i++) {
        let process = document.getElementsByClassName("progress-bar")[i]
        if(process.style.cssText.includes("darkmagenta")){
          await runProcess(i,100,time)
          break
        }
      }

      for (let i = 0; i < cpu.children.length; i++) {
        let process = document.getElementsByClassName("progress-bar")[i]
        if(!process.style.cssText.includes("darkmagenta")){
          await runProcess(i,100,time)
          break
        }
      }
    }
  }



  else if(method == "lt"){
    while(cpu.children.length > 1){
      let arrayDeBilhetes = []
      for(let i = 0; i < cpu.children.length; i++){
        let qtdBilhete = (document.getElementsByClassName("bilhete")[i].textContent)
        for(let j = 0; j < parseInt(qtdBilhete) ; j++){
          arrayDeBilhetes.push(i)    
        }
      }
      
      let sorted = arrayDeBilhetes[Math.floor(Math.random()*arrayDeBilhetes.length)];
      await runProcess(sorted,100,time)
      updateCount(++count)
    }
  }
}



var startBtn = document.getElementById("run").onclick = () => {
  document.getElementById("run").disabled = true
  document.getElementById("pause").disabled = false
  start()
  Algorithm(method)

}

function resetCPU(){
  document.getElementById("run").disabled = false
  cpu.innerHTML = ""
  count = 0
  updateCount(count)
  pause()
}

var pauseBtn = document.getElementById("pause").onclick = ()=>{resetCPU()}

var plusBtn = document.getElementById("plus").onclick = ()=>{
  time -= 5
  let id = document.getElementById("time")
  id.innerHTML = `Time: ${time}`
}

var minusBtn = document.getElementById("minus").onclick = () => {
  time += 5
  let id = document.getElementById("time")
  id.innerHTML = `Time: ${time}`
}

changeAlgorithmInfo(method)

const methods = document.getElementById("algorithms")
methods.onclick = (event) => {
  resetCPU()
  const list = document.getElementById("algorithms").children
  for(const elem of list){
    if(elem.className.includes("active")){
      elem.className = elem.className.replace(" active", "")
      break
    }
  }
  const btn = event.target
  btn.className += " active"
  method = (btn.id)
  changeAlgorithmInfo(method)
}