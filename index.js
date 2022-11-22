const signIn = document.querySelectorAll('.text-end button')

signIn.forEach(element => {
    element.addEventListener('click', () => {
        window.open('reg.html')
    })
});

const age = document.querySelector('.age')

function show(){
    age.classList.add('NO')
}

const close_btn = document.querySelector('.qwsa')

close_btn.addEventListener('click', ()=> {
    age.classList.add('NO')
   
})

setTimeout(show,2300)