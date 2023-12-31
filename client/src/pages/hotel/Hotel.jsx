import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import './Hotel.css'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { useState } from 'react'

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/477724967.jpg?k=8953b91dfb6a5d4cfbedf69e8f370347e11c6bfb364784bead88dd04e76dc553&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/480738095.jpg?k=0f72e6ca29c5f3e4f704f5b471a1b81a6251d2e9cd7256859cf2ddb7e4b9b1fd&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/480731389.jpg?k=df42fdf7bc66073030ed562c865333a445fae84e43c17cde7e6c7c6d25cffd42&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/480731411.jpg?k=daddc922c35aebbc9399d083651f753faa9afc247aed2bf36e96acf2f2b30e91&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/480731411.jpg?k=daddc922c35aebbc9399d083651f753faa9afc247aed2bf36e96acf2f2b30e91&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/480731419.jpg?k=891f49f96bd93f85145ac136041f045b90598155ba93a114a3daec965676cddd&o=&hp=1"
    }
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  }

  const handleMove = (direction) => {
    let newSlideNumber;

    if( direction ==="l" ) {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1;
    }

    setSlideNumber(newSlideNumber);
  }

  return (
    <div>
      <Navbar />
      <Header type="list"/>
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>(setOpen(false))}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>handleMove("l")}/>
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className='sliderImg'/>
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>handleMove("r")}/>
          
          </div>}
        <div className="hotelWrapper">
          <button className='bookNow'>Reserve or Book now!</button>
          <h1 className="hotelTitle">inLOBBY Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Arami St 3, Yerevan</span>
          </div>
          <span className='hotelDistance'>
            Clean Excellent location - 120m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a now and get free transfer as a bonus!
          </span>
          <div className="hotelImages">
            {photos.map((photo, i)=>(
              <div className="hotelImageWrapper">
                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className='hotelImg'/>
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Yerevan</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam corrupti odit dolorem quos provident inventore perspiciatis officiis, aperiam nobis fuga impedit natus quod iste in placeat quae facere magni nemo!
                Iste omnis, fugiat quo architecto illum perferendis sint atque maiores, quas cumque debitis rerum neque laboriosam, aliquid quam id perspiciatis rem aspernatur culpa facere? Autem fugiat optio sit nemo cum.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Yerevan, this property has an excelent location scope of 9.3!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
      
    </div>
  )
}

export default Hotel