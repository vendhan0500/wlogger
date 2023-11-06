import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import './HomePage.css'
import axios from 'axios'
import setUser from '../../Context/Reducer'
import { connect } from 'react-redux'

function Homepage({ user }) {
  console.log(user)
  const [posts, setPosts] = useState([])
  const { search } = useLocation()

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('https://localhost:7148/Post' + search)
      setPosts(res.data)
    }
    fetchPosts()
  }, [search])

  return (
    <>
      <Header />
      <div className='home'>
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  user: state.user.user,
})

export default connect(mapStateToProps, { setUser })(Homepage)
