// C:\Parkiando\parkiandofrontend\src\components\Comment\Comment.js
import React, { useState } from 'react';
import '../../assets/css/CommentBox.css';
import { FaStar } from 'react-icons/fa';
import logo from '../../assets/img/logoPK.jpg';

const CommentBox = () => {
  const [selectedParking, setSelectedParking] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    console.log('Comentario enviado:', { selectedParking, rating, comment });
  };

  return (
    <div className="background">
      <div className="comment-box-container">
        <div className="header">
          <img src={logo} alt="Parkiando Logo" className="logo" />
          <h2 className="title">Caja de Comentarios</h2>
        </div>
        
        <h1 className="titleN2">Parqueaderos</h1>
        <div className="favorite-parking">
          {['Parqueadero el Tiempo', 'Parqueadero Los Héroes', 'Parqueadero Santa Fe', 'Parqueadero Museo Nacional', 'Parqueadero La Candelaria'].map((parking) => (
            <div
              key={parking}
              className={`parking ${selectedParking === parking ? 'selected' : ''}`}
              onClick={() => setSelectedParking(parking)}
            >
              <p>{parking}</p>
            </div>
          ))}
        </div>

        <div className="star-container">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              className={`star-button ${star <= rating ? 'selected' : ''}`}
              onClick={() => handleStarClick(star)}
              disabled={!selectedParking}
            >
              <FaStar />
            </button>
          ))}
        </div>
        <textarea
          className="textarea"
          disabled={!selectedParking || rating === 0}
          placeholder="Escribe tu comentario aquí..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          className="submit-button"
          disabled={!selectedParking || rating === 0 || comment === ''}
          onClick={handleSubmit}
        >
          Enviar
        </button>
        {submitted && <p className="confirmation-message">Tu comentario ha sido enviado correctamente</p>}
      </div>
    </div>
  );
};

export default CommentBox;
