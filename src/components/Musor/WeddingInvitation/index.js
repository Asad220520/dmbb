import React from "react";
import "./index.scss"; // Подключаем стили (можете использовать свои)

const WeddingInvitation = () => {
  return (
    <div className="invitation-container">
      <header className="invitation-header">
        <h1>Приглашаем вас на нашу свадьбу!</h1>
        <p>10 октября 2023 года</p>
      </header>
      <section className="invitation-content">
        <div className="invitation-info">
          <h2>Дата и время:</h2>
          <p>10 октября 2023 года в 14:00</p>
          <h2>Место:</h2>
          <p>Ресторан "Счастливые сердца"</p>
          <p>Адрес: ул. Первая, д. 123</p>
        </div>
        <div className="invitation-rsvp">
          <h2>Подтвердите свое присутствие:</h2>
          <button className="rsvp-button accept-button">Приму участие</button>
          <button className="rsvp-button decline-button">
            Сожалею, не смогу
          </button>
        </div>
      </section>
      <footer className="invitation-footer">
        <p>С любовью, Иван и Мария</p>
      </footer>
    </div>
  );
};

export default WeddingInvitation;
