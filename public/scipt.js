const menu = document.querySelector('#menu');
const drip = document.querySelector('#drip');

drip.addEventListener('click', () => {
    if(menu.classList.contains('hidden')) 
    {
        menu.classList.remove('hidden');
    } else{
        menu.classList.add('hidden');
    }
});

