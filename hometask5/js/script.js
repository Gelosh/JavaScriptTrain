let btn = document.getElementsByClassName('menu-item'),
    btnMenu = document.querySelector('.menu'),
    answer = prompt("Как вы относитесь к технике Apple?", "Супер"),
    libtn = document.createElement('li'),
    titleM = document.getElementById('title'),
    adv = document.getElementsByClassName('adv'),
    ansWrite = document.getElementById('prompt'),
    header = document.querySelectorAll('.column');
    


btnMenu.insertBefore(btn[2], btn[1]);
btnMenu.appendChild(libtn);
libtn.className = 'menu-item';
libtn.textContent = 'Пятый пункт';
document.body.style.backgroundImage = "url('img/apple_true.jpg')";
titleM.textContent = 'Мы продаем только подлинную технику Apple';
// console.log(adv);
header[1].removeChild(adv[0]);
ansWrite.textContent = answer;




