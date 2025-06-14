import React from 'react'
import './center.css'
import { useGlobalData } from '../../Layout';
import { LazyLoadImage } from 'react-lazy-load-image-component';
function Center() {

const {Projects} = useGlobalData();

  return (
    <div className='Centermaindiv'>
      <h2 className='centertitle'>Tech for progress. Code for people.</h2>

{
    [...Projects].sort((a, b) => a.no - b.no).map(
            (data) => {
              return data.DetailHeading ? <div className='showcase' >
       <LazyLoadImage onClick={data.RedirectUrl ? () => window.open(data.RedirectUrl):undefined} className='centerimage' src={data.Imageurl} alt="" />
     <h2 className='showcasetitle'>{data.DetailHeading}</h2>
     <p className='showcasesubtitle'>{data.Projectdescription}</p>
     </div> : null
            }
          )
}



    </div>
  )
}

export default Center
