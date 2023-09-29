import React, {useContext} from 'react'
import {observer} from 'mobx-react-lite';
import {StoreContext} from '../uitls';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagic, faCog} from '@fortawesome/free-solid-svg-icons'
import '../App.css';


export const FooterBar: React.FC = observer(() => {
  const store = useContext(StoreContext)
  return (
    <div className="footerStyle">
      <div className="footerButton" onClick={() => store.page = 'Magic Ate'} style={{color: store.page === 'Magic Ate' ? '#E8BA3A' : '#fff'}}>
        <FontAwesomeIcon icon={faMagic} style={{fontSize: '25px', marginRight: '5px'}}/>
        Magic Ate
      </div>
      <div className="footerButton" onClick={() => store.page = 'Settings'} style={{color: store.page === 'Settings' ? '#E8BA3A' : '#fff'}}>
        <FontAwesomeIcon icon={faCog} style={{fontSize: '25px', marginRight: '5px'}}/>
        Settings
      </div>
    </div>
  )
})