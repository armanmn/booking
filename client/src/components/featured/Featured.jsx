import "./Featured.css";

export const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max500/215469846.jpg?k=8bb25a5543c8907e4a155e3f7db092393552bd0b19a4969cd3dccdc73ac1eb68&o=&hp=1" alt="" className="featuredImg" />
            <div className="featuredTitles">
               <h1>Dilidjan</h1>
               <h2>123 properties</h2> 
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max500/470655881.jpg?k=8a9e92a561aa467dd4a96453344de5a9e45130e49fafadf51285d7a83ae7a006&o=&hp=1" alt="" className="featuredImg" />
            <div className="featuredTitles">
               <h1>Yerevan</h1>
               <h2>123 properties</h2> 
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max500/120289586.jpg?k=9c035ceca9e081603d73d9461cb930615efcf98d43adb11d844acb37eeae306c&o=&hp=1" alt="" className="featuredImg" />
            <div className="featuredTitles">
               <h1>Yerevan</h1>
               <h2>123 properties</h2> 
            </div>
        </div>
    </div>
  )
}

export default Featured;
