import React, {useContext} from 'react'
import {observer} from 'mobx-react-lite'
import {StoreContext} from '../uitls'
import rating0 from '../yelp_logo/regular_0.png';
import rating1 from '../yelp_logo/regular_1.png';
import rating15 from '../yelp_logo/regular_1.5.png';
import rating2 from '../yelp_logo/regular_2.png';
import rating25 from '../yelp_logo/regular_2.5.png';
import rating3 from '../yelp_logo/regular_3.png';
import rating35 from '../yelp_logo/regular_3.5.png';
import rating4 from '../yelp_logo/regular_4.png';
import rating45 from '../yelp_logo/regular_4.5.png';
import rating5 from '../yelp_logo/regular_5.png';
import yelp from '../yelp_logo/yelp_logo.png';

export const InfoScreen: React.FC = observer(() => {
	const store = useContext(StoreContext)

	return (
		<div style={{fontSize: '16px'}}>
      {store.displayItem ? 
        <>
            <div style={{
              display: 'flex', 
              flexDirection: 'row', 
              alignItems: 'center', 
              justifyContent: 'center', 
			  fontSize: '16px',
              backgroundColor: 'rgba(0,0,0,0)',
            }}>
              {store.displayItem.rating === 0 && <img
                style={{width: '102px', height: '18px'}}
				alt='0'
                src={rating0}
              />}
              {store.displayItem.rating === 1 && <img
                style={{width: '102px', height: '18px'}}
				alt='1'
                src={rating1}
              />}
              {store.displayItem.rating === 1.5 && <img
                style={{width: '102px', height: '18px'}}
				alt='1.5'
                src={rating15}
              />}
              {store.displayItem.rating === 2 && <img
                style={{width: '102px', height: '18px'}}
				alt='2'
                src={rating2}
              />}
              {store.displayItem.rating === 2.5 && <img
                style={{width: '102px', height: '18px'}}
				alt='2.5'
                src={rating25}
              />}
              {store.displayItem.rating === 3 && <img
                style={{width: '102px', height: '18px'}}
				alt='3'
                src={rating3}
              />}
              {store.displayItem.rating === 3.5 && <img
                style={{width: '102px', height: '18px'}}
				alt='3.5'
                src={rating35}
              />}
              {store.displayItem.rating === 4 && <img
                style={{width: '102px', height: '18px'}}
				alt='4'
                src={rating4}
              />}
              {store.displayItem.rating === 4.5 && <img
                style={{width: '102px', height: '18px'}}
				alt='4.5'
                src={rating45}
              />}
              {store.displayItem.rating === 5 && <img
                style={{width: '102px', height: '18px'}}
				alt='5'
                src={rating5}
              />}
              <div style={{color: '#fff', marginLeft: 10}}>{store.displayItem.review_count} Reviews</div>
            </div>
          <div style={{color: '#fff', marginTop: 15, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            {store.displayItem.price ? store.displayItem.price + ' • ' : ''}
			{store.displayItem.categories.map((p, i) => (<div style={{color: '#fff'}} key={`categories${i}`}>{p.title}
			{(store.displayItem && i !== store.displayItem.categories?.length - 1) ? ', ' : ''}
			 </div>))}
          </div>
          <div style={{color: '#fff', marginTop: 10}}>{store.displayItem.location.display_address.join(', ')}</div>
          <div style={{color: '#fff', marginTop: 10, marginBottom: 15}}>{store.displayItem.display_phone}</div>
			<img
				onClick={() => window.open(store.displayItem ? store.displayItem.url : 'https://www.yelp.com/','_blank')}
				alt='yelp'
            	style={{width: '100px', height: '36px'}}
            	src={yelp}
            />
        </>
        : 
        <div style={{fontSize: '16px'}}>
          <div style={{color: '#fff', marginTop: 10, textAlign: 'center'}}>Shake or tap the Magic Ate to reveal your next food destination!</div>
          <div style={{color: '#fff', marginTop: 10, textAlign: 'center'}}>Visit the Info icon for more restaurant details.</div>
          <div style={{color: '#fff', marginTop: 10, textAlign: 'center'}}>In the Settings tab, you can apply filters to specify your preferences.</div>
        </div>  
      }
    </div>
	)
}
)
