import styles from './Section.module.css'

const Section = (props) => {
    const style = {
        backgroundColor: props.bgcolor
    }
    const heading = props.heading
    const text = props.text

  return (
    <div style={style} className={styles.section-div}>
    <h2 className={styles.section-heading}>{heading}</h2>
    <p className={styles.section-text}>{text}</p>
    <div style={style} className={styles.section-circle}></div>
    </div>
  )
}

export default Section