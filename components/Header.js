import Section from './Section.js'

const Header = () => {
  return (
    <div>
      <Section bgcolor="white" heading="" text = "">
        <div className='logoContainer'>
          <Image src="/logo1.svg" alt="tinystudio logo" width={200} height={200}  layout="responsive" />
          <h1>tinystudio<span>CS</span></h1>
        </div>
      </Section>
    </div>
  )
}

export default Header
