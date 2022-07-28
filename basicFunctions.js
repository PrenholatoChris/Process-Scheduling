export async function runProcess(index, timeProcessing) {
  let now = cpu.children[index].children[0]
  const percent = parseInt(now.style.width.replace("%",""))
  
  now.style.backgroundColor = `white`

  var value = 0
  if(percent > timeProcessing){
    value = percent-timeProcessing
  }
  
  for (let i = percent; i >= value; i-=1){
    now.style.width = `${i}%`
    await new Promise(r => setTimeout(r, 10));
  }

  now.style.backgroundColor = `var(--main-progress)`

  if(now.style.width == '0%'){
    cpu.children[index].remove()
  }
  return true
}

export function createProcess(){
  const max = Math.floor(Math.random() * (100-10) ) + 10
  const Bar = document.createElement('div')
  Bar.className = "progress"
  Bar.innerHTML = `<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="${max}" style="width: ${max}%"></div>`
  cpu.appendChild(Bar)
  return max
}

export function removeProcess(){
  const last = cpu.children.length-1
  cpu.children[last].remove()
}