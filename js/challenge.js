//target the counter
document.addEventListener('DOMContentLoaded',()=>{
    setInterval(counter,1000)
})

//timer increment every second once the page has loaded.
function counter(){
let count = document.querySelector('#counter')
count.innerHTML++
}

//MAnually increament 
function  increment(){
    const addButton = document.getElementById('plus')
    addButton.addEventListener('click',()=>{
        let count = document.querySelector('#counter')
        count.innerHTML++
    })

}
increment()
//MAnually  decrement
function  decrement(){
    const subButton = document.getElementById('minus')
    subButton.addEventListener('click',()=>{
        let count = document.querySelector('#counter')
        count.innerHTML--
    })

}
decrement()

//like an individual number
function addLike(){
    const likeButton = document.getElementById('heart')
    likeButton.addEventListener('click',()=>{
        let count = document.querySelector('#counter')
       //alert(`${count.innerHTML} has been liked`)
    })

}
addLike()
function  pause(){
    const pauseButton = document.getElementById('pause')
    pauseButton.addEventListener('click',()=>{
        //alert('i have been paused')
        setTimeout(counter,50000)
    })

}
pause()

function handleForm(){
    let form = document.getElementById('comment-form')
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        let comment =document.getElementById('comment-input').value;
        console.log(comment)
        let newComment = document.createElement('h3')
        newComment.textContent=comment
        let div = document.querySelector('div')
        div.appendChild(newComment)


    })
}
handleForm()

