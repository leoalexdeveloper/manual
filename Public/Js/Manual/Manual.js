window.onload = () => {
    const querySelector = (el) => document.querySelector(el);
    const querySelectorAll = (el) => document.querySelectorAll(el);

    
        window.addEventListener('resize', darkLayerAtResize, true);

    function darkLayerAtResize(){
        querySelectorAll('.dark-layer').forEach((value, key) => {
            let opacityThreshold = 0.6;
            let opacity = (1.0 - (window.innerWidth * 0.0006)) > opacityThreshold ? (1.0 - (window.innerWidth * 0.0006)) : opacityThreshold;
            value.style.setProperty('opacity', opacity);
            
        });
    }darkLayerAtResize();

    function modalControl(){
        querySelectorAll('.c-card').forEach((card) => {
            card.addEventListener('click', function(){
                querySelectorAll('.c-modal').forEach((modal) => {
                    if(card.dataset.model === modal.dataset.model){
                        modal.classList.add('c-modal-show');
                    }else{
                        modal.classList.remove('c-modal-show');
                    }
                });
            });
        });
    }modalControl();
    
    function closeModalControl(){
        querySelectorAll('.fa-window-close').forEach((value) => {
            value.addEventListener('click', function(){
                value.parentElement.parentElement.classList.toggle('c-modal-show');
               
            });
        });
    }closeModalControl();
    
    function openCloseDetail(){
        let lastTarget;
        let defaultSize;
        let defaultPSize = [];
        querySelectorAll('.c-detail > h3').forEach((value, key) => {
            defaultSize = value.parentElement.getBoundingClientRect().height;
            defaultPSize.push(value.parentElement.childNodes[3].getBoundingClientRect().height);
            
            value.addEventListener('click', function(event){
                
                querySelectorAll('.c-detail').forEach((el) => {
                    if(lastTarget !== value){
                        el.style.setProperty("height", defaultSize + "px");
                        //window.scroll(0, (defaultPSize[key] + defaultSize)*1.6);
                    }
                });
                
                if(lastTarget !== value.parentElement){
                    value.parentElement.style.setProperty("height", defaultPSize[key] + defaultSize + "px");
                    lastTarget = value.parentElement;
                    
                }

                if(value.parentElement.getBoundingClientRect().height === (defaultPSize[key] + defaultSize)){
                    value.parentElement.style.setProperty("height", defaultSize + "px");
                    lastTarget = '';
                }
            });

            window.addEventListener('resize', function(event){
                
                defaultPSize.length = 0;
                querySelectorAll('.c-detail').forEach((el) => {
                    defaultPSize.push(el.childNodes[3].getBoundingClientRect().height);
                });
                if(lastTarget){
                    lastTarget.style.setProperty("height", defaultPSize[key] + defaultSize + "px");    
                }
                
            });
        });
    }openCloseDetail();
    
    function indexMenuControl(){
        querySelectorAll('.indexOption').forEach((value, key) =>{
            value.addEventListener("click", function(){
               window.scrollTo(0, querySelectorAll(".section")[value.dataset.arrow || key].offsetTop);
            });
        });
    }indexMenuControl();

    window.addEventListener('scroll', hideArrows, true);
    
    function hideArrows(){
        if(window.scrollY > 0){
            querySelector('.indexOption[data-arrow="0"]').classList.add('hideArrow');
            querySelector('.indexOption[data-arrowBack="0"]').classList.remove('hideArrow');

        }else{
            querySelector('.indexOption[data-arrow="0"]').classList.remove('hideArrow');
            querySelector('.indexOption[data-arrowBack="0"]').classList.add('hideArrow');
        }
    }hideArrows();

    function backToTop(){
        querySelector('.indexOption[data-arrowBack="0"]').addEventListener('click', (event)=>{
            window.scrollTo(0, 0);
        });
    }backToTop();
}




