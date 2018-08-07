import React from "react";
import PropTypes from "prop-types";
import classNames from "class-names";
import { numberFormatter } from "biplane-uikit";
import style from "./style.css";

const st = classNames.bind(style);

const BotCard = ({ image, title, username, installs, description }) => (
  <div className={st("bot-card")}>
    <div className={st("bot-card__header")}>
      <div className={st("bot-card__image-container", !image && "bot-card__image-container_empty")}>
        {image && <img src={image} alt={username} />}
      </div>
      <div className={st('bot-card__names')}>
        <span className={st("bot-card__title")}>{title}</span>
        <span className={st("bot-card__username")}>
          {username} | {numberFormatter(installs)} installs
        </span>
      </div>
    </div>
    {description}
  </div>
);

BotCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  username: PropTypes.string,
  installs: PropTypes.number,
  description: PropTypes.string
};

export default BotCard;
