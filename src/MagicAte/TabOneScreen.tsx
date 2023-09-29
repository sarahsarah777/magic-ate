import { observer } from 'mobx-react-lite'
import React, { useContext, useState} from 'react'
import {StoreContext} from '../uitls'
import FadeIn from 'react-fade-in';

export const TabOneScreen: React.FC = observer(() => {
  const store = useContext(StoreContext)
  const [text, setText] = useState('Click or Shake');
  const [update, setUpdate] = useState(0);

  const magicAte = (): void => {
    var xhttp = new XMLHttpRequest();

    const getRandomIndex = (x: number): number => {
      let newIndex = Math.floor(Math.random() * x)
      if (newIndex === store.previousIndex) {
        getRandomIndex(x)
      } else if (typeof newIndex === 'number') {
        return newIndex
      }
      return 0
    }

    xhttp.onreadystatechange = () => {
      setText('')
      setUpdate(update+1)
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        const yelpOptions = JSON.parse(xhttp.responseText)
        const randomIndex = getRandomIndex(yelpOptions.businesses.length)

        store.previousIndex  = randomIndex
        store.displayItem = yelpOptions.businesses[randomIndex]

        setText(yelpOptions.businesses[randomIndex].name)
      }
    };
    xhttp.open('GET', `https://magicate.app/backend/proxy.php?location=${store.location}&term=${store.term}`, true);
    xhttp.send();
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateRows: '100vh',
      gridTemplateColumns: '100vw',
    }}>
      <div style={{
        textAlign: 'center',
        justifySelf: 'center',
        alignSelf: 'center',
      }}>
        <FadeIn transitionDuration={1500} key={update}>  
          <div onClick={() =>  magicAte()} style={{
            position: 'absolute',
            zIndex: 1,
            width: 0,
            height: 0,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'transparent',
            borderStyle: 'solid',
            borderTopWidth: 0,
            borderRightWidth: 150,
            borderBottomWidth: 250,
            borderLeftWidth: 150,
            borderTopColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: '#395FE7',
            borderLeftColor: 'transparent',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}>
            <div style={{
              display: 'flex', 
              flexDirection: 'row', 
              alignItems: 'center', 
              justifyContent: 'center', 
              zIndex: 2, 
              marginTop: 330, 
              height: 100, 
              width: 160, 
              backgroundColor: 'rgba(0,0,0,0)',
            }}>
              <div style={{
                position: 'relative', 
                zIndex: 2, 
                width: 160, 
                textAlign: 'center', 
                color: '#ffffff', 
                fontSize: 22,
                fontFamily: 'aAreaKilometer50',
              }}>
                {text}
              </div>
            </div>
        </div>
      </FadeIn>
    </div>
  </div>
  )
})