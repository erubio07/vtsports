import React from "react";
import styles from "./Footer.module.css";

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
            <a href="https://www.facebook.com/vtsports" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"
              />
            </a>
            <a href="https://www.instagram.com/vtsports" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
              />
            </a>
          </div>
        </div>
        <div className={styles.creator}>
          <p>Creado por Ezequiel Rubio</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
