import React from 'react'
import Layout from '../components/Layout'

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <h1>Hmm...</h1>
        <p>
          Bu konuyla ilgili henüz bir not yazmadım. Bana bunun için yardım etmek
          ister misin?
        </p>
      </Layout>
    )
  }
}

export default NotFoundPage
