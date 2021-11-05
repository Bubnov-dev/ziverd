$(document).ready(function () {
    maxHeight = 0;
    $(".projects-screen .tab-item__title").each(function (){
        if($(this).outerHeight() > maxHeight)
            maxHeight = $(this).outerHeight();
    })
    

    $(".projects-screen .tab-item__title").each(function (){
        $(this).css("height", maxHeight+"px")
    })


    maxHeight = 0;
    $(".light-projects-screen .tab-item__title").each(function (){
        if($(this).outerHeight() > maxHeight)
            maxHeight = $(this).outerHeight();
    })

    $(".light-projects-screen .tab-item__title").each(function (){
        $(this).css("height", maxHeight+"px")
    })

    const $prevArrowImg = `<svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.545444 9.82854L7.78681 17.0496C8.24745 17.5092 8.9943 17.5092 9.45471 17.0496C9.91516 16.5904 9.91516 15.8457 9.45471 15.3865L3.04722 8.99701L9.45452 2.6077C9.91498 2.14834 9.91498 1.40367 9.45452 0.944496C8.99407 0.485135 8.24726 0.485135 7.78662 0.944496L0.545258 8.16567C0.315031 8.39537 0.200048 8.6961 0.200048 8.99697C0.200048 9.298 0.315254 9.59895 0.545444 9.82854Z" fill="#989898"/>
    </svg>`
    const $nextArrowImg = `<svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.45456 9.82854L2.21319 17.0496C1.75255 17.5092 1.0057 17.5092 0.54529 17.0496C0.0848382 16.5904 0.0848382 15.8457 0.54529 15.3865L6.95278 8.99701L0.545477 2.6077C0.0850245 2.14834 0.0850245 1.40367 0.545477 0.944496C1.00593 0.485135 1.75274 0.485135 2.21338 0.944496L9.45474 8.16567C9.68497 8.39537 9.79995 8.6961 9.79995 8.99697C9.79995 9.298 9.68475 9.59895 9.45456 9.82854Z" fill="#989898"/>
    </svg>`
    const prevArrowBtn = `<button type="button" class="slick-prev">${$prevArrowImg}</button>`
    const nextArrowBtn = `<button type="button" class="slick-next">${$nextArrowImg}</button>`

    if (document.documentElement.clientWidth <= 568){
        $(".slider-grid").slick({
            slidesToShow: 1,
            arrows: true,
            dots: false,
            centerPadding: '20px',
            prevArrow: prevArrowBtn,
            nextArrow: nextArrowBtn,
            
        })
    }

    if (document.documentElement.clientWidth <= 360){
        $(".assortment-screen__grid").slick({
            slidesToShow: 1,
            arrows: true,
            dots: false,
            centerPadding: '20px',
            prevArrow: prevArrowBtn,
            nextArrow: nextArrowBtn,
            
        })
    }

    
})