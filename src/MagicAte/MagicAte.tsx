import React from 'react'
import {observer} from 'mobx-react-lite';
import {HeaderBar} from './HeaderBar';
import {MainScreen} from './MainScreen';
import {FooterBar} from './FooterBar';

export const MagicAte: React.FC = observer(() => {
  return (
    <>
      <HeaderBar/>
      <MainScreen/>
      <FooterBar/>
    </>
  )
})