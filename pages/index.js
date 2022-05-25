import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'

export default function Home() {



  return (
    
    <div> {/*CONTAINTER DIV*/}
      <Head>
        <title>TinyStudioCR | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='container'>
        <header className='container puzzle-piece white'>
          <div className='headerGroup'>
            <div className='logoContainer'>
              <Image src="/logo1.svg" alt="tinystudiologo" width={200} height={200}  layout="responsive" />
            </div>
          <h1>tinystudio<span>CS</span></h1>
          </div>
        </header>

        {/* About us */}
        <section className='container puzzle-piece black about'>
          <h2>about us</h2>
          <p>We create interactive web experiences and brands with you so that your customers can experience your transformation.</p>
        </section>

        {/* Portfolio Section */}
        <section className='container puzzle-piece white portfolio'>
          <h2>portfolio</h2>
          <p>coming soon.</p>
        </section>

        <footer className='container puzzle-piece black portfolio'>
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
