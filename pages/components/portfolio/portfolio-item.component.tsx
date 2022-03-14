import React from 'react';
import styles from '../../../public/styles/home.module.css';

function PortfolioItem(props: PortfolioItem) {
    const { name, description, href, imageName } = props;

    return (
      <div className="portfolio-item" id={name.toLowerCase()}>
        <div className="portfolio-item__image">
          {href ? (
            <a href={href} target="_blank" rel="noreferrer">
              <img src={`/assets/images/${imageName}`} alt={`${name} logo`} />
            </a>
          ) : (
            <img src={`/assets/images/${imageName}`} alt={`${name} logo`} />
          )}
        </div>
        <div className="portfolio-item__description">
          <a href={href} target="_blank" rel="noreferrer">
            <h2>{name}</h2>
          </a>
          <p>{description}</p>
        </div>
      </div>
    );
}

interface PortfolioItem {
  name: string;
  description: string;
  imageName: string;
  href?: string;
}

export default PortfolioItem;