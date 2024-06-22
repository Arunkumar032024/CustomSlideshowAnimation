$(document).ready(function(){
    const headings = ['Komodo', 'Kerala', 'Matterhorn', 'Cappadocia', 'Malgovik']
    const imagePath = ['./assets/images/img-1.jpg', './assets/images/img-2.jpg', './assets/images/img-3.jpg', './assets/images/img-4.jpg', './assets/images/img-5.jpg']
    let i = 0;
    setBgImage(i)
    $('.fa-arrow-left').click(function(){
        i++;
        i = i > 4 ? 0 : i;
        $('main img').attr("src",imagePath[i]);
        setBgImage(i)
        $('h1').text(headings[i]);
        setAnimation()
    })
    $('.fa-arrow-right').click(function(){
        i--;
        i = i < 0 ? imagePath.length - 1 : i;
        $('main img').attr("src",imagePath[i]);
        setBgImage(i)
        $('h1').text(headings[i]);
        setAnimation()
    })
    function setAnimation(){
        $('h1').fadeOut('fast')
        $('h1').slideDown(1500)
        $('p').fadeOut('fast')
        $('p').slideDown(1500)
        $('button').fadeOut('fast')
        $('button').slideDown(1500)
    }
    function setBgImage(index){
        $('.container').css({
            'background':`url(${imagePath[index]}`,
            'width': '100%',
            'min-height': '100vh',
            'background-size': 'cover',
            'background-repeat': 'no-repeat',
        });
    }
})