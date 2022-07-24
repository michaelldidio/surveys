function Footer() {
    return (
        <div className="footer container">
            <div>
                <a href="/" className="title mr-1">WM Surveys</a>
                <span>&copy; {new Date().getFullYear()}</span>
            </div>
            <div>
                <p className="title">Made with</p>
                <p className="li">React.js</p>
                <p className="li">Node.js</p>
                <p className="li">Firebase</p>
            </div>
        </div>
    )
}

export default Footer