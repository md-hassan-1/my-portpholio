const styleSwitcherToggale = document.querySelector(".style-switcher-toggaler");
    styleSwitcherToggale.addEventListener("click",() =>{
        document.querySelector(".style-switcher").classList.toggle("open")

    })

    window.addEventListener("scroll", ()=>{
        if(  document.querySelector(".style-switcher").classList.contains("open")){
            document.querySelector(".style-switcher").classList.remove("open")
        }

    })

    //  ---------------color theme -----------

    let altranateStyle = document.querySelectorAll(".alternate-style")
      function setActiveStyle(color){

        altranateStyle.forEach((style) =>{
            if(color === style.getAttribute("title")){
                style.removeAttribute("disabled")

            
            }
            else{
                style.setAttribute("disabled","true")
        }

        } )
    }


    // == theme light ans dark mode ===
  
  let daynight = document.querySelector(".day-night")

  daynight.addEventListener('click',function(){
    daynight.querySelector('i').classList.toggle("fa-sun")
    daynight.querySelector('i').classList.toggle("fa-moon")
    document.body.classList.toggle('dark')

  })
  

  window.addEventListener('load', ()=>{
    if(document.body.classList.contains('dark'))
    daynight.querySelector("i").classList.add('fa-sun')
else{
    daynight.querySelector("i").classList.add('fa-moon')
}


  })

   

