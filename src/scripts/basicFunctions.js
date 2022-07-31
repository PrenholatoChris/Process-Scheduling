export async function runProcess(index, percentToProcess, speed) {
  let bar = document.getElementsByClassName("progress")[index]
  let ariaValueNow = bar.children[0].attributes[3]
  const percent = parseInt(ariaValueNow.textContent)
  const percentMax = parseInt(bar.children[0].attributes[5].textContent)
  console.log(percentMax)

  // const percent = parseInt(bar.style.width.replace("%",""))
  
  var value = 0
  if(percent > percentToProcess){
    value = percent-percentToProcess
  }
  
  let percentBar = bar.children[0]
  percentBar.style.backgroundColor = `cadetblue`
  for (let i = percent; i >= value; i-=1){
    ariaValueNow.textContent = i
    percentBar.style.width = `${(i/percentMax)*100}%`
    percentBar.innerHTML = `<span>${i}%</span>` 
    await new Promise(r => setTimeout(r, speed));
  }

  percentBar.style.backgroundColor = `var(--main-progress)`

  if(percentBar.style.width == '0%' && document.getElementById("cpu").children.length > 0){
    cpu.children[index].remove()
    return true
  }
  return false
}

export function createProcess(){
  const max = Math.floor(Math.random() * (100-20) ) + 20
  const priority = (parseInt(Math.random()*(19-(-20))) -20)

  const priorityHTML = document.createElement('span')
  priorityHTML.innerHTML = priority
  priorityHTML.className = "col-1" 
  cpu.appendChild(priorityHTML)

  const Bar = document.createElement('div')
  Bar.className = "col"
  Bar.innerHTML = `<div class="progress"><div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" 
  aria-label="Animated striped example" aria-valuenow="${max}" aria-valuemin="0" aria-valuemax="${max}" style="width: 
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