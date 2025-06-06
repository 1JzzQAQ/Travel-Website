import type { MenuName } from "./menuName";

interface VedioProps extends MenuName {
    name: string;
}
const Vedio = ({menuName,name}:VedioProps)=>{
    return <video key={name} className={menuName === name ? 'active' : ''} src={`/assets/videos/${name}.mp4`} autoPlay muted loop></video>;
}

export default Vedio;