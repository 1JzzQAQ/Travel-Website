import { CONTENT_INFO } from "../content/content";
import MenuButton from "./SideMenu-button";
import type { SetMenuName } from './menuName';


const SideMenu = ({setMenuName}:SetMenuName) => {
    return (
    <section className="aside-menu">
        {Object.keys(CONTENT_INFO).map(menuName=>{
            return <MenuButton key={menuName} menuName={menuName} setMenuName={setMenuName} />
        })}
    </section>
    );
    }

export default SideMenu;