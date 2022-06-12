import Head from 'next/head'
import Section from 'components/Section.js'
import Header from 'components/Header.js'
import Footer from 'components/Footer.js'
import Image from 'next/image'
import Circle from 'components/Circle.js'
export default function Home() {



  return (
    
    <div> {/*CONTAINTER DIV*/}
      <Head>
        <title>TinyStudioCS | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      <Circle bgcolor="white"/>
      {/* About us */}
      <Section bgcolor="#222" color="white" heading="about us" text="We create interactive web experiences and brands with you so that your customers can experience your transformation."/>
      <Circle bgcolor="#222"/>
      {/* Portfolio Section */}
      <Section bgcolor="white" heading="portfolio" text="Coming soon."/>
      <Circle bgcolor="white"/>
      {/* Footer */}
      <Footer bgcolor="#222" color="white" heading="contact us"/>
    </div>
  )
}
