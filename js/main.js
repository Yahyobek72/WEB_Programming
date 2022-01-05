$(document).ready(function () {
    $('#icon').click(function(){
        $('ul').toggleClass('show');
    })   
    
    $('#logreg').click(function(){
        $('.register').toggleClass('reg_anim');
    })  
    
    $('#otp').click(function(){
        $('.register').removeClass('reg_anim')
    })

   
}); 


window.addEventListener('scroll', function () {
    let body = document.querySelector('body');
    let contentPosition = Math.abs(body.getBoundingClientRect().top);
    // let titles = document.querySelector('.titles');
    console.log(contentPosition);
    // if (contentPosition == 2) {
    //     titles.classList.add('titles_scrol')
    // }
    // // else{
    // //     titles.classList.remove('titles_scrol')
    // //}
    let contacts = document.querySelector('.contacts')

    if (contentPosition > 140){
        contacts.classList.add('contacts_scroll')
    }
    else{
        contacts.classList.remove('contacts_scroll')
    }

    let servic_1 = document.querySelector('.servic_1')
    let servic_2 = document.querySelector('.servic_2')
    if (contentPosition > 547){
        servic_1.classList.add('servic_1_scroll')
        servic_2.classList.add('servic_2_scroll')
    }
    else{
        servic_1.classList.remove('servic_1_scroll')
        servic_2.classList.remove('servic_2_scroll')
    }

    let office_title = document.querySelector('.office_title')

    if(contentPosition > 909){
        office_title.classList.add('office_title_scroll')
    }
    else{
        office_title.classList.remove('office_title_scroll')
    }

    let room_1 = document.querySelector('.room_1')

    if (contentPosition > 1082){
        room_1.classList.add('room_1_scroll')
    }
    else{
        room_1.classList.remove('room_1_scroll')
    }

    let room_2 = document.querySelector('.room_2')

    if (contentPosition > 1390){
        room_2.classList.add('room_2_scroll')
    }
    else{
        room_2.classList.remove('room_2_scroll')
    }

    let room_3 = document.querySelector('.room_3')

    if (contentPosition > 1764){
        room_3.classList.add('room_3_scroll')
    }
    else{
        room_3.classList.remove('room_3_scroll')
    }
});