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

 export const checkChildrenActive = (array, value) => {
    return array.some((child)=> child.props.text == value);
} 

 