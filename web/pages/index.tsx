import Head from 'next/head'
import Image from 'next/image'
import Top from '../components/page/Top'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Top />
    </div>
  )
}
