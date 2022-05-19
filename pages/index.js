import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header>
          <h1>tinystudio<span>CS</span></h1>
          <nav>
              <a href='#'>home</a>
              <a href='#'>about</a>
              <a href='#'>porfolio</a>
              <a href='#'>contact</a>
          </nav>
        </header>

        {/* About us */}
        <section className='about'>
          <h2>about us</h2>
          <p>We create interactive web experiences and brands with you so that your customers can experience your transformation.</p>
        </section>

        {/* Portfolio Section */}
        <section className='portfolio'>
          <h2>Portfolio</h2>
          <p>coming soon.</p>
        </section>

        <footer>
        <h2>contact</h2>
          <form name="contact" method="POST" data-netlify="true">
            <div className='input-form'>
              <label>Your Name: <input type="text" name="name" /></label>
            </div>
            <div className='input-form'>
              <label>Your Email: <input type="email" name="email" /></label>
            </div>
            <div className='input-form'>
              <label>Message: <textarea name="message"></textarea></label>
            </div>
            <div>
              <button type="submit">Send</button>
            </div>
          </form>
        </footer>
      </main>
    </div>
  )
}
