export async function runProcess(index, percentToProcess, time) {
  let bar = document.getElementsByClassName("progress-bar")[index]
  let ariaValueNow = bar.attributes[3]
  const percent = parseInt(ariaValueNow.textContent)
  const percentMax = parseInt(bar.attributes[5].textContent)

  var value = 0
  if(percent > percentToProcess){
    value = percent-percentToProcess
  }

  bar.style.backgroundColor = `cadetblue`
  for (let i = percent; i >= value; i-= 1){
    bar.style.width = `${parseInt((i/percentMax)*100)}%`
    bar.innerHTML = `<span>${parseInt((i/percentMax)*100)}%</span>` 
    await new Promise(r => setTimeout(r, time));
  }
  ariaValueNow.textContent = `${value}`

  bar.style.backgroundColor = `var(--main-progress)`

  if(bar.style.width == '0%' && document.getElementById("cpu").children.length > 0){
    cpu.children[index].remove()
    return true
  }
  return false
}

export function createProcess(method){

  


  const max = Math.floor(Math.random() * (100-20) ) + 20
  const priority = (parseInt(Math.random()*(19-(-20))) -20)

  const priorityHTML = document.createElement('span')
  priorityHTML.innerHTML = priority
  priorityHTML.className = "col-1 text-warning priority" 
  cpu.appendChild(priorityHTML)

  const bilhete = document.createElement('span')
  bilhete.className = "col-1 text-info bilhete invisible" 
  bilhete.innerHTML = "1"
  if(method == "lt"){
    bilhete.className = "col-1 text-info bilhete" 
    if(priority < -15){
      bilhete.innerHTML = 8
    }
    else if(priority < -10){
      bilhete.innerHTML = 7
    }
    else if(priority < -5){
      bilhete.innerHTML = 6
    }
    else if(priority < 0){
      bilhete.innerHTML = 5
    }
    else if(priority < 5){
      bilhete.innerHTML = 4
    }
    else if(priority < 10){
      bilhete.innerHTML = 3
    }
    else if(priority  < 15){
      bilhete.innerHTML = 2
    }
    else{
      bilhete.innerHTML = 1
    }
  }
  else if(method == "ff"){
    priorityHTML.className = "col-1 text-warning priority" 
  }

  

  const Bar = document.createElement('div')
  Bar.className = "col"
  Bar.innerHTML = `<div class="progress"><div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" 
  aria-label="Animated striped example" aria-valuenow="${max}" aria-valuemin="0" aria-valuemax="${max}" style="width: 
  ${100}%"><span>${100}%</span></div></div>`
  Bar.children[0].style.width = `${max}%`

  
  if(method == "ff" && Math.floor(Math.random()*2) == 0){
    Bar.children[0].children[0].style.backgroundColor = `darkmagenta`
  } 
  


  const GroupDiv = document.createElement('div')
  GroupDiv.className = "row aligm-items-center w-100"
  GroupDiv.id = "group-div"
  GroupDiv.appendChild(priorityHTML)
  GroupDiv.appendChild(Bar)
  GroupDiv.appendChild(bilhete)

  
  cpu.appendChild(GroupDiv)
  return max
}

export function removeProcess(){
  const last = cpu.children.length-1
  cpu.children[last].remove()
}