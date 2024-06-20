$(document).ready(function(){
    const headings = ['Komodo', 'Kerala', 'Matterhorn', 'Cappadocia', 'Malgovik']
    const imagePath = ['./assets/images/img-1.jpg', './assets/images/img-2.jpg', './assets/images/img-3.jpg', './assets/images/img-4.jpg', './assets/images/img-5.jpg']
    let i = 0;
    $('.fa-arrow-left').click(function(){
        $('main img').attr("src",imagePath[i]);
        $('.container').css('background',`url(${imagePath[i]}`);
        $('h1').text(headings[i]);
        // $('h1').css('')
        i++;
        i = i > 4 ? 0 : i;
    })
    $('.fa-arrow-right').click(function(){
        i = i < 0 ? imagePath.length - 1 : i;
        $('main img').attr("src",imagePath[i]);
        $('.container').css('background',`url(${imagePath[i]}`);
        $('h1').text(headings[i]);
        i--;
    })
})