import React from 'react'
import { sendEmail } from '../../api/requests'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = { submitted: '' }
  }

  async handleSubmit (event) {
    event.preventDefault()
    try {
      const res = (await sendEmail(event.target)).data
      this.setState({ submitted: JSON.stringify(res) })
    } catch (e) {
      this.setState({ submitted: e.toString() })
    }
    event.target.reset()
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
          SUBJECT:
          <input name="subject" type="text" required/>
          </label>
          <br /><br />
          <label>
          HTML:
          <textarea name="html" required></textarea>
          </label>
          <br /><br />
          <label>
          TEXT (alternate text that will only be displayed if html is not supported):
          <textarea name="text" required></textarea>
          </label>
          <br /><br />
          <label>
          AUTHKEY
          <input name="auth" type="text" required/>
          </label>
          <br /><br />
          <label>
          TO (upload txt file):
          <input name="to" type="file" accept="text/plain" required/>
          </label>
          <br /><br />
          <input type="submit" value="SEND"/>
        </form>
        <p>{this.state.submitted}</p>
      </div>
    )
  }
}

export default Home
