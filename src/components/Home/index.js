// Write your code here
// Write your code here
import {Component} from 'react'
import Login from './component/Login'
import Logout from './component/Logout'
import Message from './component/Message'

class Home extends Component {
  state = {value: 'Login', content: 'Please Login'}
  changePage = () => {
    this.setState(prevState => ({
      value: prevState.value === 'Login' ? <Logout /> : <Login />,
      content:
        prevState.content === 'Please Login' ? (
          <Message contentType={prevState.content} />
        ) : (
          <Message contentType={prevState.content} />
        ),
    }))
  }

  render() {
    const {value, content} = this.state
    return (
      <div>
        <div>
          <h1>{content}</h1>
          <div>
            <button type="button" onClick={this.changePage}>
              {value}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
