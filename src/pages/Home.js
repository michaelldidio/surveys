import { Link } from 'react-router-dom'

import banner from "../assets/banner.svg"
import features from "../assets/features.svg"

function Home() {
    return <div>
        <div className="section">
            <img src={banner} alt="banner" />
            <div className="content">
                <h1>Welcome to <br></br><span>WM Surveys!</span></h1>
                <p>WM Surveys allows you to create forms and view the responses. Surveys are essential to gain knowledge in various fields.</p>
                <Link to="/create" className="btn">Create a Survey</Link>
            </div>
        </div>
        <div className="section">
            <div className="content">
                <h1>Join us today and get started on creating <br></br>your surveys!</h1>
                <p>Your journey to gain knowledge on your users begins here.</p>
            </div>
            <img src={features} alt="features" />
        </div>
    </div>
}

export default Home