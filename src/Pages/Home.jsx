import Layout from '../Layout/Layout'
import './Home.css'

const Home = () => {
  return (
    <Layout>
      <section className='home_section'>
        <div className='home_img_box'>
          <img src="/public/home.png" alt="Home Image" />
        </div>
      </section>
    </Layout>
  )
}

export default Home