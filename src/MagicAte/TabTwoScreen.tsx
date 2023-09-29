import {Input} from 'antd'
import {observer} from 'mobx-react-lite'
import React, {useContext} from 'react'
import {StoreContext} from '../uitls'
import {SearchOutlined, EnvironmentOutlined} from '@ant-design/icons';
import '../App.css';


export const TabTwoScreen: React.FC = observer(() => {
  const store = useContext(StoreContext)

  return (
    <div className='alignLeft'>
      <div className='inputTitle'><SearchOutlined style={{marginRight: '10px'}}/>Term</div>
      <Input className='inputStyle' placeholder='Search Term...' onChange={(e) => store.term = e.target.value}/>
      <div className='inputTitle' style={{marginTop: '30px'}}><EnvironmentOutlined style={{marginRight: '10px'}}/>Location</div>
      <Input className='inputStyle' placeholder='Search Location...' onChange={(e) => store.location = e.target.value}/>
    </div>
  )
})