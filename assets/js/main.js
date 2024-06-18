const leftContainer = document.querySelector('main .left');
const h1 = leftContainer.querySelector('h1')

const rightContainer = document.querySelector('main .right');
const leftArrow = rightContainer.querySelector('.fa-arrow-left')
const images = rightContainer.querySelectorAll('img');
const rightArrow = rightContainer.querySelector('.fa-arrow-right')

const btnContainer = document.querySelector('main .buttons');
// const img = rightContainer.querySelector('img');
const bgImagePath = ['../images/img-bg-1.jpg', '../images/img-bg-2.jpg', '../images/img-bg-3.jpg', '../images/img-bg-4.jpg', '../images/img-bg-5.jpg']
let currIndex = 0;

function currentImage(){
    Array.from(images).forEach((img, i)=>{
        if(img.className === 'current-image'){
            currIndex = i
        }
    })        
}
leftArrow.addEventListener('click', () => {
    currentImage()
    console.log(currIndex)
    if(currIndex === 0){
        images[currIndex].classList.remove('current-image');
        images[images.length - 1].classList.add('current-image');
        document.querySelector('.container').style.backgroundImage = url(`${bgImagePath[images.length - 1]}`)
        console.log(bgImagePath[images.length - 1])
    }else{
        images[currIndex].classList.remove('current-image');
        images[currIndex - 1].classList.add('current-image');
        document.querySelector('.container').style.backgroundImage = `url('${bgImagePath[currIndex - 1]}')`
    }
})
rightArrow.addEventListener('click', () => {
    currentImage()
    console.log(currIndex)
    if(currIndex === images.length -1){
        images[currIndex].classList.remove('current-image');
        images[0].classList.add('current-image');
        document.querySelector('.container').style.backgroundImage = `url(${bgImagePath[0]})`
    }else{
        images[currIndex].classList.remove('current-image');
        images[currIndex + 1].classList.add('current-image');
        document.querySelector('.container').style.backgroundImage = `url(${bgImagePath[currIndex + 1]})`
    }
})


