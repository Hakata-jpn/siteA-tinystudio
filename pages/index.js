import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'

export default function Home() {



  return (
    
    <div> {/*CONTAINTER DIV*/}
      <Head>
        <title>TinyStudioCS | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='container'>
        {/* Header */}
        <header className='container puzzle-piece white'>
          <div className='headerGroup'>
            <div className='logoContainer'>
              <Image src="/logo1.svg" alt="tinystudiologo" width={200} height={200}  layout="responsive" />
            </div>
          <h1>tinystudio<span>CS</span></h1>
          </div>
        </header>
        <div className="circle-white"></div>
        {/* About us */}
        <section className='container puzzle-piece black about'>
          <h2>about us</h2>
            <p className='aboutdesc'>We create interactive web experiences and brands with you so that your customers can experience your transformation.</p>
        </section>
        <div className="circle-black"></div>
        {/* Portfolio Section */}
        <section className='container puzzle-piece white portfolio'>
          <h2>portfolio</h2>
          <p>coming soon.</p>
        </section>
        <div className="circle-white"></div>
        {/* Footer */}
        <footer className='container puzzle-piece black portfolio'>
        <h2>contact us</h2>
        <a><Image src="/twitter-Vector.svg" alt="twitter vector image" width="114px" height="114px" className="twitter"/></a>
        <a><Image src="/email-Vector.svg" alt="email vector image" width="95px" height="76px" className="email"/></a>
        </footer>
      </main>
    </div>
  )
}
