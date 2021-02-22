const btn = document.getElementById('button')
const toast = document.getElementById('toasts')


const message = [
    'message 1',
    'message 2',
    'message 3',
    'message 4',
    'message 5',

]

function createMessage()  {
    let div = document.createElement('div')
    div.classList.add('toast')
    toast.appendChild(div)
    div.innerText =  getRandomMessage()

    setTimeout(() => {
        div.remove()
    }, 5000)
}


function getRandomMessage() {
    return message[Math.floor(Math.random()*message.length)]
}

btn.addEventListener('click', () => createMessage())