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
    function openCloseDetail(){

        let lastTarget; /* store the last item selected */
        let defaultSize;    /* store the default height of elements */
        let defaultPSize;   /* store p element height */

        querySelectorAll('.c-detail > h3').forEach((value, key) => {
            defaultSize = value.getBoundingClientRect().height;
            
            value.addEventListener('click', function(event){
                
                defaultPSize = this.nextSibling.nextSibling.getBoundingClientRect().height;
                
                /* close all open details box */
                querySelectorAll('.c-detail').forEach((el) => {
                    if(lastTarget !== value){
                        el.style.setProperty("height", defaultSize + "px");
                       
                    }
                });
                /* compare the last element with the current, wether different open the box*/
                if(lastTarget !== value.parentElement){
                    value.parentElement.style.setProperty("height", defaultPSize + defaultSize + "px");

                    /* its imprtant get the size of the detail container to resize them */
                    lastTarget = value.parentElement;

                    /* compensate the open movement with the scroll to try centralize the information at the screen */
                    if(event.clientY < window.innerHeight / 2){
                        window.scrollTo(0, window.scrollY - this.getBoundingClientRect().height);
                    }else if(event.clientY > window.innerHeight / 2){
                        window.scrollTo(0, window.scrollY + this.getBoundingClientRect().height );
                    } 
                }
                /* close the last box opened if click again on it*/
                if(value.parentElement.getBoundingClientRect().height === (defaultPSize + defaultSize)){
                    value.parentElement.style.setProperty("height", defaultSize + "px");
                    lastTarget = '';
                }
                /* compensate the size of the detail box at the resize window */
                window.addEventListener('resize', function(event){

                    /* get the height of the first p element after h3*/
                    defaultPSize = value.nextSibling.nextSibling.getBoundingClientRect().height;

                    /* if lastTarget exists, at the width window resize this compensate the change of teh box */
                    if(lastTarget){
                        console.log(defaultPSize[3]);
                        lastTarget.style.setProperty("height", defaultPSize + defaultSize + "px");    
                    }
                });
            });
        });
    }openCloseDetail();
    
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
        querySelector('.indexOption[data-arrowBack="0"]').addEventListener('click', (event)=>{
            window.scrollTo(0, 0);
        });
    }backToTop();
}




