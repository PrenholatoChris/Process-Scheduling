import {runProcess, createProcess, removeProcess} from './basicFunctions.js'

var cpu = document.getElementById("cpu")
var method = 'fifo'
var speed = 20

async function createQueue(qtd){
  createProcess()
  for(let i=0; i<=qtd; i+=1){
    // if(cpu.children.length>=11){
    //   await new Promise(r => setTimeout(r, 3000));
    // }
    let time = createProcess()
    time = Math.random()*((time*speed)-400) + 400// + 500
    await new Promise(r => setTimeout(r, time));
  }
}

async function Algorithm(method){
  createQueue(20)
  if(method=="fifo"){
    while(cpu.children.length >= 1){
      await runProcess(0,100,speed)
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
      await runProcess(index,100,speed)
    }
  }
  else if(method =="rr"){
    while(cpu.children.length > 0){
      for(let i=0;i < cpu.children.length;i+=1){
        if(await runProcess(i,20,speed)){
          i-=1
        }
      }
    }

  }
}

var startBtn = document.getElementById("run").onclick = () => {
  Algorithm(method)
}

var plusBtn = document.getElementById("plus").onclick = ()=>{
  speed -= 2
  let id = document.getElementById("speed")
  console.log(id)
  id.innerHTML = `Speed: ${speed}`
}

var minusBtn = document.getElementById("minus").onclick = () => {
  speed += 2
  let id = document.getElementById("speed")
  id.innerHTML = `Speed: ${speed}`
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
}


