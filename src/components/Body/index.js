// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showLeftNavbar, showContent, showRightNavbar} = value
      console.log('left : ', showLeftNavbar)
      console.log('right : ', showRightNavbar)
      console.log('con : ', showContent)
      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="navbar-container">
              <h1 className="navbar-heading">Left Navbar Menu</h1>
              <div className="navbar-items-container">
                <p className="nav-item">Item 1</p>
                <p className="nav-item">Item 2</p>
                <p className="nav-item">Item 3</p>
                <p className="nav-item">Item 4</p>
              </div>
            </div>
          )}
          {showContent && (
            <div className="navbar-container content-container">
              <h1 className="navbar-heading">Content</h1>
              <div className="navbar-items-container">
                <p className="nav-item">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  to eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </p>
              </div>
            </div>
          )}
          {showRightNavbar && (
            <div className="navbar-container">
              <h1 className="navbar-heading">Right Navbar</h1>
              <div className="navbar-items-container">
                <p className="ad-container nav-item">Ad 1</p>
                <p className="ad-container nav-item">Ad 2</p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
