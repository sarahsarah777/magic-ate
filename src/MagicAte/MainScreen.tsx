import React, { useContext } from 'react'
import { StoreContext } from '../uitls';
import {InfoScreen} from './InfoScreen';
import {TabOneScreen} from './TabOneScreen';
import {TabTwoScreen} from './TabTwoScreen';
import '../App.css';
import { observer } from 'mobx-react-lite';

export const MainScreen: React.FC = observer(() => {
  const store = useContext(StoreContext)
  return (
    <>
      {store.page === 'Info' && <InfoScreen/>}
      {store.page === 'Magic Ate' && <TabOneScreen/>}
      {store.page === 'Settings' && <TabTwoScreen/>}
    </>
  )
}
)