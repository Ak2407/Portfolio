window.addEventListener("load", bindEvents);


function bindEvents()
{
    setTimeout(depreload, 000);

    //For the cursor effect using github library
    var typed = new Typed("#namaste", {
        strings : ["NAMASTE", "HOLA", "HEMLLO", "BONJOUR", "KONNICHIWA"],
        typeSpeed: 150,
        backSpeed: 150, 
        loop: true
    })

    
    VanillaTilt.init(document.querySelectorAll('.links'),{
        max: 5,
        speed:200
    });

    VanillaTilt.init(document.querySelector('.logo'),{
        max: 25,
        speed:400
    });
}
//function to hide the preload
function depreload()
{
    var loader = document.querySelector(".preloader");
    loader.style.display = 'none';
    document.getElementById('main-body').style.opacity = 1;


    
}
