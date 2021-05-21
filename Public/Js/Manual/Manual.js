window.onload = () => {
    /* simplify the getElement statement====================================================== */
    const querySelector = (el) => document.querySelector(el);
    const querySelectorAll = (el) => document.querySelectorAll(el);

    

    /* control the opacity of the background with width resize================================ */
    window.addEventListener('resize', darkLayerAtResize, true);

    function darkLayerAtResize(){
        querySelectorAll('.dark-layer').forEach((value, key) => {
            let opacityThreshold = 0.6;
            let opacity = (1.0 - (window.innerWidth * 0.0006)) > opacityThreshold ? (1.0 - (window.innerWidth * 0.0006)) : opacityThreshold;
            value.style.setProperty('opacity', opacity);
            
        });
    }darkLayerAtResize();

    /* control the modal show=================================================== */
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
    
    /* close modal ========================================================================= */
    function closeModalControl(){
        querySelectorAll('.fa-window-close').forEach((value) => {
            value.addEventListener('click', function(){
                value.parentElement.parentElement.classList.toggle('c-modal-show');
               
            });
        });
    }closeModalControl();
    
    /* control the details box movement======================================================= */
    function controlDetail(){
        let lastOpenedHeight;
        let lastOpenedKey = 0;
        querySelectorAll('.c-detail-envelope > div').forEach((div, key) => {
            let nodes = div.childNodes;
            lastOpenedHeight = div
            div.style.setProperty('height', '14rem'); 
            
            nodes[1].addEventListener('click', async (event) => {
                console.log(lastOpenedHeight.childNodes[3]);
                        console.log(nodes[1].nextSibling.nextSibling);
               

                if(div.getBoundingClientRect().height === nodes[1].getBoundingClientRect().height){
                    if(key > lastOpenedKey){
                        
                        window.scroll(0, window.pageYOffset + nodes[1].parentElement.getBoundingClientRect().top - lastOpenedHeight.getBoundingClientRect().height + nodes[1].getBoundingClientRect().height);
                    }else{
                        console.log("current minor");
                        window.scroll(0, window.pageYOffset + nodes[1].parentElement.getBoundingClientRect().top);
                    }

                    lastOpenedHeight = nodes[1].parentElement;
                    lastOpenedKey = key;
                        
                    
                    
                    querySelectorAll('.c-detail-envelope > div').forEach((element, key) => {
                        element.style.setProperty('height', '14rem');
                    });

                    nodes[1].parentElement.style.setProperty("height", nodes[1].nextSibling.nextSibling.getBoundingClientRect().height + nodes[1].getBoundingClientRect().height +"px")
                    
                    div.addEventListener('transitioned', ()=>{
                        console.log("yes");
                    });
                }
            });
        });
        
    }controlDetail();
    
    /* control the scroll at the index menu */
    function indexMenuControl(){
        querySelectorAll('.indexOption').forEach((value, key) =>{
            value.addEventListener("click", function(){
               window.scrollTo(0, querySelectorAll(".section")[value.dataset.arrow || key].offsetTop);
            });
        });
    }indexMenuControl();

    /* hide or show arrow by the scroll position */
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

    /* define back to top arrow function */
    function backToTop(){
        window.scrollTo(0, 0)
        querySelector('.indexOption[data-arrowBack="0"]').addEventListener('click', (event)=>{
            window.scrollTo(0, 0);
        });
    }backToTop();
}




