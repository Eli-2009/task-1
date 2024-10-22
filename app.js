let btn = document.querySelectorAll('button')



btn.forEach(btn =>{
    btn.addEventListener('click', () =>{
        if (btn.style.color != 'rgb(139, 137, 137)') {
            btn.style.color = 'rgb(139, 137, 137)'
        }
        else{
            btn.style.color = 'black'
        }
    })
})