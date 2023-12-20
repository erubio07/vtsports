import React from "react";
import styles from './Divisor.module.css';


const Divisor = () => {
    return (
        <div>
            <ul className={styles.divisor}>
                <li className={styles.item}>
                    <picture>
                        <img src="https://d28hi93gr697ol.cloudfront.net/5a1a70e1-6321-6944-ed93-67a485503504/modulos/01-620fec347e0a0-62f44b8d11f14.png" alt="" />
                    </picture>
                    <a href="">
                        <div className={styles.title}>Pagá con crédito y débito</div>
                        <div className={styles.subtitle}>ver metodos de pago</div>
                    </a>
                </li>
                <li className={styles.item}>
                    <picture>
                        <img src="https://d28hi93gr697ol.cloudfront.net/5a1a70e1-6321-6944-ed93-67a485503504/modulos/02-620fec3488c1e-62f44b8de2b3e.png" alt="" />
                    </picture>
                    <a href="">
                        <div className={styles.title}>Atención al cliente</div>
                        <div className={styles.subtitle}>ver más</div>
                    </a>
                </li>
                <li className={styles.item}>
                    <picture>
                        <img src="https://d28hi93gr697ol.cloudfront.net/5a1a70e1-6321-6944-ed93-67a485503504/modulos/03-620fec3490974-62f44b8e96fa7.png" alt="" />
                    </picture>
                    <a href="">
                        <div className={styles.title}>Envio a todo el pais</div>
                        <div className={styles.subtitle}>ver más</div>
                    </a>
                </li>
                <li className={styles.item}>
                    <picture>
                        <img src="https://d28hi93gr697ol.cloudfront.net/5a1a70e1-6321-6944-ed93-67a485503504/modulos/04-620fec3499e88-62f44b8f5cd12.png" alt="" />
                    </picture>
                    <a href="">
                        <div className={styles.title}>Contactanos</div>
                        <div className={styles.subtitle}>Comenzar</div>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Divisor;