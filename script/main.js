let slideRanges = document.querySelectorAll('.formulation__range-slider.slider-range');

slideRanges.forEach(slideRange=>{
    

    noUiSlider.create(slideRange, {
        start: [0],
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