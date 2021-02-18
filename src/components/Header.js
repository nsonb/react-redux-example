import {Link} from 'react-router-dom'
import GoogleAuth from '../GoogleAuth'

const Header = () => {
    return (
        <div style={{display:'flex'}}>
            <Link to='/'>Streamer</Link>
            <div style={{marginLeft: 'auto', display: 'flex'}}>
                <Link to='/'>All streams</Link>
                <GoogleAuth/>
            </div>
        </div>
    )
}

export default Header