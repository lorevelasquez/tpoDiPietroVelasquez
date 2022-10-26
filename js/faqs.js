let question = document.querySelectorAll('.question');
let btnDropdown = document.querySelectorAll('.question .more')
let answer = document.querySelectorAll('.answer');
let parrafo = document.querySelectorAll('.answer p');

for ( let i = 0; i < btnDropdown.length; i ++ ) {

    let altoParrafo = parrafo[i].clientHeight;
    let switchh = 0;

    btnDropdown[i].addEventListener('click', () => {
        console.log('click')
        if ( switchh == 0 ) {
            answer[i].style.height = `${altoParrafo}px`;
            question[i].style.marginBottom = '10px';
            btnDropdown[i].innerHTML = '<i>-</i>';
            switchh ++;
        }

        else if ( switchh == 1 ) {
            answer[i].style.height = `0`;
            question[i].style.marginBottom = '0';
            btnDropdown[i].innerHTML = '<i>+</i>';
            switchh --;
        }

    })

}