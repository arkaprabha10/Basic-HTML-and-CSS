var arr = ['is a good boy','is a wannabe model','is a real good football player','is completely useless']

const data = document.querySelector('.name');
const para = document.querySelector('.OutputStory')
const guessSubmit = document.querySelector('.guessSubmit')
function Generate()
{
    let random = Math.floor(Math.random() * arr.length);
    let temp_name = data.value
    let color = '#'+Math.floor(Math.random()*16777215).toString(16);
    if(temp_name!='')
    {
        let str = temp_name + " "+ arr[random]
    para.textContent = str
    // para.css('text-decoration-color','#'+Math.floor(Math.random()*16777215).toString(16));
    // para.style.TextDecorationColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = 'green';
    console.log(random, arr[random]);  
    }
    else
    {
        alert('Value not entered');
        document.body.style.backgroundColor = 'red';
    }
}

guessSubmit.addEventListener('click', Generate);
