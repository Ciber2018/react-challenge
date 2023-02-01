import {React} from 'react';
import ButtonCard from './ButtonCard';

const OperationMenu = () => (
    <>        
        <ButtonCard iconClass='tf-icons bx bx-dollar bx-md' text='Pagar Orden'/>
        <ButtonCard iconClass='tf-icons bx bx-check-square bx-md' text='Confirmar Orden'/>
        <ButtonCard iconClass='tf-icons bx bx-food-menu bx-md' text='Crear Recibo'/>
        <ButtonCard iconClass='tf-icons bx bx-x bx-md' customColor={{backgroundColor:'#ff6666',color:'white'}} text='Cancelar Orden'/>                        
    </>
)


export default OperationMenu;