export const showAsideMenu = () => {
    let html = document.getElementsByTagName('html');        
    html[0].classList.add('layout-transitioning','layout-menu-expanded');        
    setTimeout(()=>{
        html[0].classList.remove('layout-transitioning');
    },2000);
    
} 

export const closeAsideMenu = () =>{
    let html = document.getElementsByTagName('html');        
    html[0].classList.add('layout-transitioning'); 
    html[0].classList.remove('layout-menu-expanded');       
    setTimeout(()=>{
        html[0].classList.remove('layout-transitioning');
    },1800);
 }

 export const menuItemOver = (element) =>{
    element.target.style.backgroundColor = '#f2f2f2';
 }

 export const menuItemOut = (element) =>{
    element.target.style.backgroundColor = '#ffffff';
 }

 export const menuActive = (element) =>{    
    let selected = element.target.matches('.menu-link') ? element.target : element.target.parentNode;    
    let ulElement = document.getElementsByClassName('menu-inner')[0].querySelectorAll('.menu-item');        
        
    for (let i = 0; i < ulElement.length; i++) {
      
        if (ulElement[i].querySelector('.menu-link').id !== selected.id) {
            ulElement[i].classList.remove('active');            
            let selectedSubmenu = selected.parentNode.parentNode.matches('.menu-sub') ? selected.parentNode.parentNode.parentNode : selected.parentNode;           
            if (ulElement[i].querySelector('.menu-link').id != selectedSubmenu.querySelector('.menu-link').id) {
                ulElement[i].classList.remove('open');
            }         
            
        }else{
            ulElement[i].classList.add('active');
            if (ulElement[i].parentNode.classList.contains('menu-sub')) {
                ulElement[i].parentNode.parentNode.classList.add('active');
            }
        }       
               
    }
   
 }

 