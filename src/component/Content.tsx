import {CONTENT_INFO} from '../content/content'
import type { MenuName } from './menuName';
import Vedio from './Vedio';

const Content = ({menuName}:MenuName) => {
    return (
        <div className="content">
          {Object.keys(CONTENT_INFO).map((name) => {
            return <Vedio menuName={menuName} name={name}></Vedio>
          }
          )}
          <div className={`video-overlay video-overlay-${menuName}`}></div>
          <section className="text-description">
             <h1>{CONTENT_INFO[menuName].h1}</h1>
             <h2>{CONTENT_INFO[menuName].h2}</h2>
             <p>{CONTENT_INFO[menuName].p}</p>
             <a href="#">Explore</a>
          </section>
        </div>
    )
}

export default Content;