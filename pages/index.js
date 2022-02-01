import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Pagination from './pagination'
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className={styles.container}>
      <Pagination/>
    </div>
  )
}
