let slideRanges = document.querySelectorAll('.formulation__range-slider.slider-range');
let sliderMoney = document.querySelector('.input-range__slide--money')
let sliderDuration = document.querySelector('.input-range__slide--duration')

slideRanges.forEach(slideRange=>{
   

    noUiSlider.create(slideRange, {
        start: [20],
        connect: 'lower',
        tooltips:true,
        range: {
            'min': parseInt(slideRange.dataset.min),
            'max': parseInt(slideRange.dataset.max)
        },
        format:{
            to:function(value){
                if(slideRange.dataset.day!==undefined){
                    return `${parseInt(value)} дней`
                }else{
                    return `${parseInt(value)} ₽`
                }
            },
            from: function (value) {
              return value
            }
        }
    });
    slideRange.noUiSlider.on('slide',function(value){
        parseInt(slideRange.dataset.max)
        if(parseInt(slideRange.dataset.max)=== parseInt(value)){
           slideRange.querySelector('.noUi-tooltip').classList.add('prevent-end')
        }else{
            slideRange.querySelector('.noUi-tooltip').classList.remove('prevent-end')
        }
    })
})

// ranges header-fixed
noUiSlider.create(sliderMoney, {
    start: [20000],
    connect: 'lower',
    range: {
        'min': 0,
        'max': 45000
    },
   
});
// sliderMoney.noUiSlider.get()
sliderMoney.closest('.input-range').querySelector('.input-range__data-number').innerText=parseInt(sliderMoney.noUiSlider.get())

noUiSlider.create(sliderDuration, {
    start: [10],
    connect: 'lower',
    range: {
        'min': 1,
        'max': 20
    },
   
});
sliderDuration.closest('.input-range').querySelector('.input-range__data-number').innerText=parseInt(sliderDuration.noUiSlider.get())

// set value of money
sliderMoney.noUiSlider.on('slide',function(value){
    console.log(value)
    sliderMoney.closest('.input-range').querySelector('.input-range__data-number').innerText=parseInt(value)
})
// set value of time
sliderDuration.noUiSlider.on('slide',function(value){
    console.log(value)
    sliderDuration.closest('.input-range').querySelector('.input-range__data-number').innerText=parseInt(value)
})






// open/close answer faq
let faqItems= [...document.querySelectorAll('.item-faq')];

faqItems.forEach((faqItem,index,arr)=>{
    faqItem.querySelector('.item-faq__icon').addEventListener('click',function(e){
         faqItem.classList.toggle('active')
        let answer=this.closest('.item-faq').querySelector('.item-faq__answer')
        console.log(answer.clientHeight)
    })
})


// handler header-fixed view
let headerFixed= document.querySelector('.header-fixed')

let headerFixed_height=parseFloat(getComputedStyle(headerFixed).height);
headerFixed.style.top=`-${headerFixed_height}px`
window.addEventListener('scroll',function(e){
    
    if(this.scrollY>headerFixed_height ){
        headerFixed.classList.add('active')
    }else{
        headerFixed.classList.remove('active')
    }

    console.log(this.scrollY,headerFixed_height)
})


// handler step get money
let style= document.createElement('style');
let getMoneyRow =  document.querySelector('.get-money__row')
let getMoneyItems= document.querySelectorAll('.get-money__item')
let getMoneyItemActivePosition= null;

const pxToPercent=(value,total)=>{
    return (value*100)/total
}
const setStepDesktop=(position,arrLenght)=>{
    let getMoneyRow_width= parseFloat(getComputedStyle(getMoneyRow).width)
    let getMoneyRow_height= parseFloat(getComputedStyle(getMoneyRow).height)

    let value=getMoneyRow_width*(position*2-1)/8;
    let total= getMoneyRow_width
    let finalValue= pxToPercent(value,total)
    let cssText
    if(screen.width>= 768){
        if(position === arrLenght){
            let cssText= `.get-money__row::after{width:${100}%}`
            style.innerHTML=cssText
            document.head.append(style)
    
            return
        }
         cssText= `.get-money__row::after{width:${finalValue}%}`
    }else{
        if(position === arrLenght){
            let cssText= `.get-money__row::after{height:${100}%}`
            style.innerHTML=cssText
            document.head.append(style)
    
            return
        }
         cssText= `.get-money__row::after{height:${finalValue}%}`
    }
    style.innerHTML=cssText
    document.head.append(style)
}
// get index active item
getMoneyItems.forEach((item,index,arr)=>{
     if(item.classList.contains('active')){
        getMoneyItemActivePosition=index+1
     }
     item.querySelector('.get-money__icon').addEventListener('click',function(e){
        getMoneyItemActivePosition=index+1
        arr.forEach(elt=>{
            elt.classList.remove('active')
          
        })
        for(let i=0;i<=index;i++){
            arr[i].classList.add('active')
        }
        setStepDesktop(getMoneyItemActivePosition,getMoneyItems.length)

    })
})
window.addEventListener('resize',function(e){
    setStepDesktop(getMoneyItemActivePosition,getMoneyItems.length)

})

//set first step
setStepDesktop(getMoneyItemActivePosition,getMoneyItems.length)


// menu moile open/close

let burgerBtn= document.querySelector('.header__burger');
let containerMenu= document.querySelector('.header__center');
let closeMenuBtn= document.querySelector('.menu__close-btn');

const openMenu = ()=>{
    containerMenu.classList.add('open');
    document.body.classList.add('off')
}
const closeMenuMobile = ()=>{
    containerMenu.classList.remove('open');
    document.body.classList.remove('off')
}

burgerBtn.addEventListener('click',function(e){
    openMenu()
})
closeMenuBtn.addEventListener('click',function(e){
    closeMenuMobile()
})

window.addEventListener('resize',function(e){
    if(this.window.screen.width >=768){
        closeMenuMobile()
    }
})


let menuItems= [...document.querySelectorAll('.menu__item')];
menuItems.forEach(menuItem=>{
    menuItem.addEventListener('click',function(e){
        closeMenuMobile()
       
    })
})







