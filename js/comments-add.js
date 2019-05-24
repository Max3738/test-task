
let main = document.querySelector('.main');

let footer__button = document.querySelector('.footer__button');

footer__button.addEventListener('click',addCommentHandler);




var date = new Date();
let d = date.getDate();
let m = date.getMonth();
let y = date.getFullYear();
let m_by_letters ='';

m_array =["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"];

m_array.forEach(e => {
    if(e == m_array[m]){
     m_by_letters = e;
    }
});




function addCommentHandler(){ 
    if(footer__textarea.value !=''){
    let footer__textarea =document.querySelector('.footer__textarea');
    main.insertAdjacentHTML('beforeend', `
<section class="comment-top">
<span class="comment-top__name name">Вы</span>
<span class="comment-top__date date">${d} ${m_by_letters} ${y}</span>
</section>
<section class="comment-wrap">
        <p class="comment-wrap__text">
             ${footer__textarea.value}
         </p>
</section>
`);
footer__textarea.value ='';
}
};

function KeyPress(e) {
    var com_obj = window.event? event : e
    if (com_obj.keyCode == 13 && com_obj.ctrlKey) addCommentHandler();
}

document.onkeydown = KeyPress;
