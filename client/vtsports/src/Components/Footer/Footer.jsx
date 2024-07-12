import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div>
          <img
            className={styles.logo}
            src="https://res.cloudinary.com/dytke2vlw/image/upload/v1701527722/vtsport/yb2owexc1s5bfmrqpd0c.png"
            alt="vtSports"
          />
        </div>
        <div className={styles.contact}>
          <p>Contacto: contacto@vtsports.com</p>
          <div className={styles["social-icons"]}>
            
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"
              />
          
            
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
              />
            
          </div>
        </div>
        <div className={styles.creator}>
          <Link 
          to={"https://api.whatsapp.com/send?phone=543516237423"}
          target="_blank"
          >
          <p>Creado por Ezequiel Rubio</p>
          </Link>
          <p>v 1.0.0</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
