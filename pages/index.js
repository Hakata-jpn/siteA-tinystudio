import Head from 'next/head'
import Section from 'components/Section.js'
import Header from 'components/Header.js'
import Footer from 'components/Footer.js'
import Image from 'next/image'

export default function Home() {



  return (
    
    <div> {/*CONTAINTER DIV*/}
      <Head>
        <title>TinyStudioCS | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* About us */}
      <Section bgcolor="black" heading="about us" text="We create interactive web experiences and brands with you so that your customers can experience your transformation."/>

      {/* Portfolio Section */}
      <Section bgcolor="white" heading="portfolio" text="Coming soon."/>
      
      {/* Footer */}
      <Footer bgcolor="black" heading="contact us" text="">
      <a><Image src="/twitter-Vector.svg" alt="twitter vector image" width="114px" height="114px" className="twitter"/></a>
      <a><Image src="/email-Vector.svg" alt="email vector image" width="95px" height="76px" className="email"/></a>
      </Footer>
    </div>
  )
}
