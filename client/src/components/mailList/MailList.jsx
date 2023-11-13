import './MailList.css'

const MailList = () => {
  return (
    <div className='mail'>
        <h1 className="mailTitle">Save Time, save money!</h1>
        <span className="mailDesc">Sign up and recive best sugestion for trip!</span>
        <div className="mailInputContainer">
            <input type='text' placeholder='Your Email' />
            <button>Subsribe</button>

        </div>
    </div>
  )
}

export default MailList
