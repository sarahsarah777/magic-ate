import React, {useContext} from 'react'
import {observer} from 'mobx-react-lite';
import {StoreContext} from '../uitls';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import '../App.css';

export const HeaderBar: React.FC = observer(() => {
  const store = useContext(StoreContext)
  return (
    <div className="headerStyle">
      <div style={{marginLeft: '15px'}}>{store.page}</div>
      <FontAwesomeIcon icon={faInfoCircle} className="infoButton" onClick={() => store.page = 'Info'} style={{color: store.page === 'Info' ? '#E8BA3A': '#fff'}}/>
    </div>
  )
}
)