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
  
    let number = 95934
    console.log(number)

   

