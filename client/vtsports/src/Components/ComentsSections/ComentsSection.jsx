import React from 'react';
import styles from './ComentsSection.module.css';

const ComentsSection = () => {
  const comments = [
    {
      id: 1,
      text: "Excelente calidad y muy cómodas para correr largas distancias. ¡Muy recomendadas!",
      author: "Juan Pérez",
    },
    {
      id: 2,
      text: "El diseño es muy atractivo y la durabilidad es impresionante. Definitivamente, una gran compra.",
      author: "Ana García",
    },
    {
      id: 3,
      text: "Muy buen producto, superó mis expectativas. Perfecto para entrenamientos diarios.",
      author: "Luis Martínez",
    },
  ];

  return (
    <div className={styles.commentsContainer}>
      {comments.map((comment) => (
        <div key={comment.id} className={styles.commentBox}>
          <p className={styles.commentText}>"{comment.text}"</p>
          <p className={styles.commentAuthor}>- {comment.author}</p>
        </div>
      ))}
    </div>
  );
};

export default ComentsSection;