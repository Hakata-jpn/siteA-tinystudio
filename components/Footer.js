import styles from './Footer.module.css'
import Image from 'next/image'

const Footer = (props) => {
    const style = {
        backgroundColor: props.bgcolor,
        color: props.color
    }
    const heading = props.heading
    const text = props.text

  return (
    <div style={style} className={styles.sectiondiv}>
      <h2 className={styles.sectionheading}>{heading}</h2>
      <a href="https://twitter.com/tinystudioCS" target="_blank"><Image src="/twitter-Vector.svg" alt="twitter vector image" width="49px" height="49px" className="twitter"/></a><br/>
      <a href="mailto:tinystudioCS@gmail.com" target="_blank"><Image src="/email-Vector.svg" alt="email vector image" width="49px" height="49px" className="email"/></a>
    </div>
  )
}

export default Footer