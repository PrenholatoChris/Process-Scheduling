export async function runProcess(index, timeProcessing, speed) {
  let bar = document.getElementsByClassName("progress")[index]
  let percentBar = bar.children[0]
  const percent = parseInt(percentBar.style.width.replace("%",""))
  
  percentBar.style.backgroundColor = `cadetblue`

  var value = 0
  if(percent > timeProcessing){
    value = percent-timeProcessing
  }
  
  for (let i = percent; i >= value; i-=1){
    
    percentBar.style.width = `${i}%`
    percentBar.innerHTML = `<span>${i}%</span>` 
    await new Promise(r => setTimeout(r, speed));
  }

  percentBar.style.backgroundColor = `var(--main-progress)`

  if(percentBar.style.width == '0%'){
    cpu.children[index].remove()
    return true
  }
  return false
}

export function createProcess(){
  const max = Math.floor(Math.random() * (100-20) ) + 20
  const priority = (parseInt(Math.random()*(20+20)) -20)

  const priorityHTML = document.createElement('span')
  priorityHTML.innerHTML = priority
  priorityHTML.className = "col-1" 
  cpu.appendChild(priorityHTML)

  const Bar = document.createElement('div')
  Bar.className = "col"
  Bar.innerHTML = `<div class="progress"><div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" 
  aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="${100}" style="width: 
  ${100}%"><span>${100}%</span></div></div>`
  Bar.children[0].style.width = `${max}%`

  const GroupDiv = document.createElement('div')
  GroupDiv.className = "row aligm-items-center w-100"
  GroupDiv.id = "group-div"
  GroupDiv.appendChild(priorityHTML)
  GroupDiv.appendChild(Bar)

  cpu.appendChild(GroupDiv)
  return max
}

export function removeProcess(){
  const last = cpu.children.length-1
  cpu.children[last].remove()
}