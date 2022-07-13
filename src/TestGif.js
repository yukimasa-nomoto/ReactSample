import React from 'react'
 // import Swiper JS
 import Swiper from 'swiper';
 // import Swiper styles
 import 'swiper/css';
function mockApi(){
    return new Promise(ok => {
        setTimeout(() => ok([
            { id: '10dU7AN7xsi1I4' },
            { id: 'tBxyh2hbwMiqc' },
            { id: 'ICOgUNjpvO0PC' },
            { id: '33OrjzUFwkwEg' },
            { id: 'MCfhrrNN1goH6' },
            { id: 'rwCX06Y5XpbLG' }
        ]),1000)
    })
}

function useFetchGifs(){
  const[gifs , setGifs] = React.useState([])

  React.useEffect(() =>{
    (async() => {
      const response = await mockApi()
      setGifs(response)
    })()
  },[])

  return gifs
}

function useSlider(id , gifs){
  const[slider , setSlider] = React.useState(null)
    
  React.useEffect(() => {
    const instance = new Swiper(id,{
      spaceBetween: 10,
      slidesPerView: 2,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }    
    })

    setSlider(instance)
  },[id])

  React.useEffect(() => {
    if(gifs.length > 0) {
      slider.update()

      console.log('update')
    }
  },[gifs])

  return slider
}

function TestGif(){
    const gifs = useFetchGifs();
    const slider = useSlider('#slider', gifs);


    return(
      <div id="slider" className='swiper-container'>
        <div className='swiper-wrapper'>
          {gifs.map(gif => (
            <img
              key={gif.id}
              className='swiper-slide'
              src={`https://media.giphy.com/media/${gif.id}/giphy.gif`}
              alt=""
            />
          ))}
        </div>
        <div className='swiper-button-prev'></div>
        <div className='swiper-button-next'></div>
      </div>
    )
}

export default TestGif