import styles from './Circle.module.css'

const Circle = (props) => {
  return (
    <div style = {{backgroundColor: props.bgcolor}} className={styles.sectioncircle}></div>
  )
}

export default Circle
