const signIn = document.querySelectorAll('.text-end button')


signIn.forEach(element => {
    element.addEventListener('click', () => {
        window.open('reg.html')
    })
});


