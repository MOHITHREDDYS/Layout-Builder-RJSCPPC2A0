// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
        showContent,
        showRightNavbar,
        showLeftNavbar,
      } = value

      const onClickingRightNavbarCheckbox = event => {
        onToggleShowRightNavbar(event.target.checked)
      }

      const onClickingLeftNavbarCheckbox = event => {
        onToggleShowLeftNavbar(event.target.checked)
      }

      const onClickingContentCheckbox = event => {
        onToggleShowContent(event.target.checked)
      }
      console.log('cc : ', showContent)
      return (
        <div className="configuration-main-container">
          <div className="configuration-container">
            <h1 className="configuration-heading">Layout</h1>
            <ul className="checkbox-list-container">
              <li className="configuration-item">
                <input
                  type="checkbox"
                  id="content"
                  checked={showContent}
                  onChange={onClickingContentCheckbox}
                />
                <label htmlFor="content">Content</label>
              </li>
              <li className="configuration-item">
                <input
                  type="checkbox"
                  id="left"
                  checked={showLeftNavbar}
                  onChange={onClickingLeftNavbarCheckbox}
                />
                <label htmlFor="left">Left Navbar</label>
              </li>
              <li className="configuration-item">
                <input
                  type="checkbox"
                  id="right"
                  checked={showRightNavbar}
                  onChange={onClickingRightNavbarCheckbox}
                />
                <label htmlFor="right">Right Navbar</label>
              </li>
            </ul>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
