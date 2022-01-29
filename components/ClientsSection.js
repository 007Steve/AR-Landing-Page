import React from 'react'
import styles from '../styles/ClientsSection.module.css'
import { motion } from "framer-motion"
function ClientsSection() {
    return (
        <div className={styles.clientsSection}>
            <h2 className={styles.clientsSection__quote}>"Lorem ipsum dolor siquam aperiam esse officiis voluptatibus, vero repudiandae consequatur laborum, quis sequi, eligendi vel ipsum repellat. Assumenda provident minus corrupti, saepe adipisci accusamus."</h2>
            <div className={styles.clientsSection__info}>
                <motion.div
                    className={styles.clientsSection__circle}
                    animate={{ scale: 0.5 }}
                    transition={{ yoyo: Infinity, duration: 3 }}
                >  </motion.div>
                < img className={styles.clientsSection__photo} src="https://pbs.twimg.com/profile_images/1264317852234010625/16bEMDAl_400x400.jpg" alt="" />
                <h4 className={styles.clientsSection__name}>Stephen Plummer</h4>
                <h5 className={styles.clientsSection__nameTitle}> CEO</h5>
                <img className={styles.clientsSection__logo} src="https://i.pinimg.com/originals/20/60/2d/20602d43cc993811e5a6bd1886af4f33.png" alt="" />
            </div>
        </div>
    )
}

export default ClientsSection
