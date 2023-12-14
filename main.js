let rating = null
function handleSubmit(event){
    event.preventDefault();
    const box1 = document.getElementById('box_1')
    const box2 = document.getElementById('box_2')
    const output = document.getElementById('selected')

    if(rating !== null){
        box1.classList.toggle('hide_display')
        box2.classList.toggle('hide_display')
        output.innerHTML = `You selected ${rating} out of 5`
    }
}

function setCurrent(value){
    rating = value
}

