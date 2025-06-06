import type { MenuNameProps } from './menuName';

const MenuButton = ({menuName,setMenuName}:MenuNameProps)=>{
    return (
        <button onClick={()=>{
        setMenuName(menuName)
       }}>{menuName}</button>
    )
}

export default MenuButton;