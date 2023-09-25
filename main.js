const menuBtn = document.querySelector('.menu-btn')
      const closeBtn = document.querySelector('.close')
      const navHead = document.querySelector('header')

     menuBtn.addEventListener('click', ()=>{
        if(navHead.classList.contains('deactive')){
            navHead.classList.remove('deactive')
            navHead.classList.add('active')
        }
     })

      closeBtn.addEventListener('click',()=>{
        if(navHead.classList.contains('active')){
            navHead.classList.remove('active')
            navHead.classList.add('deactive')
        }
      })

      const btns = document.querySelectorAll('.nav-btn')
      const videoSlides =document.querySelectorAll('.video-slides')
      const contents =document.querySelectorAll('.content')

      var sliderNav = function(manual){
        btns.forEach((btn)=>{
            btn.classList.remove('active')
        });
        videoSlides.forEach((slide)=>{
            slide.classList.remove('active')
        });
        contents.forEach((content)=>{
            content.classList.remove('active')
        });
        btns[manual].classList.add("active")
        videoSlides[manual].classList.add("active")
        contents[manual].classList.add("active")
      }

      btns.forEach((btn,i)=>{
        btn.addEventListener('click',()=>{
            sliderNav(i)
        })
      })



      
