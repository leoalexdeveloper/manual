
function loading(){
    let loadingAnimation = document.createElement('div');
    loadingAnimation.classList.add('loading-animation');
    loadingAnimation.innerHTML = "<i class='fas fa-microphone-alt'></i>Loading";
    document.body.append(loadingAnimation);

    document.body.style.overflow="hidden";

    document.addEventListener('DOMContentLoaded', () => {
    
            document.body.style.overflow="auto";  
                
            setTimeout(async() => {
                
                document.querySelector('.loading-animation').style.opacity = "0";
                setTimeout(async() => {
                    document.querySelectorAll('.c-manual__section').forEach((el) => {
                        el.style.opacity="1";
                    });
                    document.querySelector('.loading-animation').remove();
                }, 100);
            }, 3000);
       
    })    
}loading();

        
