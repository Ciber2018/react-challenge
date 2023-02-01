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

 
 export const openDropdown = (element) => {
    let ulElement = document.getElementsByClassName('menu-inner')[0];

    if (element.target.parentNode.parentNode.matches('.menu-item')) {
        if (element.target.parentNode.parentNode.matches('.open')) {
            element.target.parentNode.parentNode.style.overflow = 'hidden';
           
            element.target.parentNode.parentNode.classList.add('menu-item-animating','menu-item-closing');
            element.target.parentNode.parentNode.classList.remove('open');
            element.target.parentNode.style.overflow = '';   
            element.target.parentNode.parentNode.classList.remove('menu-item-animating','menu-item-closing');
            
            
        } else {            
            element.target.parentNode.parentNode.style.overflow = 'hidden';           
            element.target.parentNode.parentNode.classList.add('open','menu-item-animating');  
            element.target.parentNode.parentNode.classList.remove('menu-item-animating'); 
            
            
            for (let i = 0; i < ulElement.children.length; i++) {               
                if (ulElement.children[i].children[0].matches('.menu-toggle')) {                   
                    if (ulElement.children[i].children[0].id != element.target.parentNode.parentNode.children[0].id) {
                        ulElement.children[i].classList.remove('open');                
                    }                  
                }                        
            } 
                        
        }

    } else {
        if (element.target.parentNode.matches('.open')) {                   
            element.target.parentNode.classList.add('menu-item-animating','menu-item-closing');
            element.target.parentNode.classList.remove('open');   
            element.target.parentNode.style.overflow = '';   
            element.target.parentNode.classList.remove('menu-item-animating','menu-item-closing');  
            
        } else {
            element.target.parentNode.classList.add('open','menu-item-animating');                               
            element.target.parentNode.style.overflow = 'hidden';
            element.target.parentNode.classList.remove('menu-item-animating');

            for (let i = 0; i < ulElement.children.length; i++) {               
                if (ulElement.children[i].children[0].matches('.menu-toggle')) {                   
                    if (ulElement.children[i].children[0].id != element.target.parentNode.children[0].id) {
                        ulElement.children[i].classList.remove('open');                
                    }                  
                }                        
            }                        
        }
       
    }
 }

 export const openMenuDropdown = (e) =>{ 
  let menuButton = e.target.parentNode;  
  menuButton.classList.toggle('show');  
  menuButton.getAttribute("ariaexpanded") == 'false' ? menuButton.setAttribute("ariaexpanded", "true") : menuButton.setAttribute("ariaexpanded", "false");
  let dropdownMenu = menuButton.nextSibling;
  dropdownMenu.classList.toggle('show');
  dropdownMenu.classList.contains('show') ?
  dropdownMenu.setAttribute('style','position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate3d(0.5px, 27px, 0px);') :
  dropdownMenu.setAttribute('style',null);  

  let dropdownCardMenu = menuButton.parentNode.parentNode.nextSibling.querySelector('.dropdown');  
  dropdownCardMenu.querySelector('.dropdown-toggle').classList.remove('show');
  dropdownCardMenu.querySelector('.dropdown-menu-end').classList.remove('show');  
 }


 export const openMobileEndMenu = (e) =>{
   let mobileEndMenu = document.getElementsByClassName('offcanvas-end')[0];
   mobileEndMenu.classList.toggle('show');
   

   if (mobileEndMenu.classList.contains('show')) {
    mobileEndMenu.removeAttribute('aria-hidden');
    mobileEndMenu.setAttribute('style','visibility: visible;') 
    mobileEndMenu.setAttribute('aria-modal','true');
    mobileEndMenu.setAttribute('role','dialog');
    mobileEndMenu.insertAdjacentHTML("afterend", '<div class="offcanvas-backdrop fade show"></div>');
   } else {    
    document.getElementsByClassName('offcanvas-backdrop')[0].remove();
    mobileEndMenu.setAttribute('aria-hidden','true');
    mobileEndMenu.removeAttribute('aria-modal');
    mobileEndMenu.removeAttribute('role');    
   }
 }

 export const mobileEndMenuCloseButton = () => {
    let mobileEndMenu = document.getElementsByClassName('offcanvas-end')[0];
    mobileEndMenu.classList.remove('show');
    document.getElementsByClassName('offcanvas-backdrop')[0].remove();
    mobileEndMenu.setAttribute('aria-hidden','true');
    mobileEndMenu.removeAttribute('aria-modal');
    mobileEndMenu.removeAttribute('role');
 }

 export const openCardMenuDropdown = (e) =>{ 
    let menuButton = e.target;  
    
    menuButton.classList.toggle('show');  
    menuButton.getAttribute("ariaexpanded") == 'false' ? menuButton.setAttribute("ariaexpanded", "true") : menuButton.setAttribute("ariaexpanded", "false");
    let dropdownMenu = menuButton.nextSibling;
    dropdownMenu.classList.toggle('show');
    dropdownMenu.classList.contains('show') ?    
    dropdownMenu.setAttribute('style','position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate3d(-50.5px, 29.5px, 0px);') :
    dropdownMenu.setAttribute('style',null); 
    
    
   }

 