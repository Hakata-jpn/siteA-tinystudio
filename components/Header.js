import Image from 'next/image'
import styles from './Header.module.css'

const Header = () => {
  return (
      <div className={styles.sectiondiv}>
        <div className={styles.logo}>
          <Image src="/logo1.svg" alt="tinystudio logo" width={200} height={200}  layout="responsive" />
        <h1 className={styles.logotext}>tinystudio<span>CS</span></h1><br/>
        </div>
      </div>
  )
}

export default Header
