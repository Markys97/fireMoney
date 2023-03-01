let slideRanges = document.querySelectorAll('.formulation__range-slider.slider-range');

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
})

let getMoneyRowElt= document.querySelector('.get-money__row')
let getMoneyRowEltHeiht=parseFloat(getComputedStyle(getMoneyRowElt).height)


let elt= document.querySelector('.get-money__item')
let eltHeigt= parseFloat(getComputedStyle(elt).height)

let styleElt= document.createElement('style')
document.head.append(styleElt)
let cssText

if(screen.width <768){
     cssText=`.get-money__row::after{height:${(0)+(eltHeigt-3)}px}`// getMoneyRowEltHeiht*3/4
    styleElt.innerText= cssText
}


let getMoneyIcons= document.querySelectorAll('.get-money__icon')

getMoneyIcons.forEach((getMoneyIcon,index,arr)=> {
    let lastIndex = arr.length-1
    getMoneyIcon.addEventListener('click',function(e){
       arr.forEach(elt=> elt.closest('.get-money__item').classList.remove('active'))
      for(let i=0; i<=index; i++){
        arr[i].closest('.get-money__item').classList.add('active')
      }

      if(screen.width <768){
        if(index===0){
            cssText=`.get-money__row::after{height:${(0)+(eltHeigt-3)}px}`
            styleElt.innerText= cssText
            return false
        }
    
          if(index==lastIndex){
            cssText=`.get-money__row::after{height:${(100)}%`
            styleElt.innerText= cssText
            return false
        }
    
        cssText=`.get-money__row::after{height:${(getMoneyRowEltHeiht*(index)/4)+(eltHeigt-3)}px}`
        styleElt.innerText= cssText
      
      }

      if(screen.width>= 768){

      }
     
    })
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
