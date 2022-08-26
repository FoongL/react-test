import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h4> Welcome to my sites Home page</h4>
      <Link to='/faq'>to go to my FAQ Page</Link>
      <br/>
      <Link to='/about'>to go to my About Page</Link>
      <br/>
      <Link to='/contact'>to go to my Contact Page</Link>
    </div>
  )
}

export default Home