import styles from './Section.module.css'

const Section = (props) => {
    const style = {
        backgroundColor: props.bgcolor,
        color: props.color
    }
    const heading = props.heading
    const text = props.text

  return (
    <div style={style} className={styles.sectiondiv}>
    <h2 className={styles.sectionheading}>{heading}</h2>
    <p className={styles.sectiontext}>{text}</p><br/>
    </div>
  )
}

export default Section