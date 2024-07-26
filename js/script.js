document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelector('.loader-container').classList.add('hidden');
        document.querySelector('.card').classList.remove('hidden');
        getJoke();
    }, 3000);
    
    document.getElementById('new-joke-btn').addEventListener('click', () => {
        getJoke();
    });
});

function getJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('header').innerHTML = '<img src="assets/chucknorris_logo_coloured_small.png" alt="" />';
            document.getElementById('title').innerHTML = 'Chuck Norris Says ...';
            document.getElementById('excerpt').innerHTML =  `"<i>${data.value}</i>"`;
            
            document.querySelectorAll('.animated-bg').forEach(bg => bg.classList.remove('animated-bg'));
            document.querySelectorAll('.animated-bg-text').forEach(bg => bg.classList.remove('animated-bg-text'));
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
        });
}