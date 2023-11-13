import './SearchItem.css';

const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/164435364.webp?k=176b1a698216cfad5cb7d7ba38d148be98a5e539b0d8f4e22c115ff19e7bd8ef&o=" alt="" className="sImg" />
        <div className="sDesc">
            <h1 className="sTitle">inLobby Hotel</h1>
            <span className="sDistance">120m from center</span>
            <span className="sSubTitle">Luxury room with Relax procedure :) </span>
            <span className="isFeatures">Luxory room - 2 bathroom - 50㎡ - 1 full bad </span>
            <span className="sCancelOp">Free cancelation</span>
            <span className="sCancelOpSubtitle">
                You can canel later, so lock in this great price today!
            </span>
        </div>
        <div className="sDetails">
            <div className="sRating">
                <span>Exellent</span>
                <button>9.3</button>
            </div>
            <div className="sDetailTexts">
                <span className='sPrice'>$345</span>
                <span className='sTaxOp'>Includes taxes and fees</span>
                <button className='sCheckButton'>See availibility</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem