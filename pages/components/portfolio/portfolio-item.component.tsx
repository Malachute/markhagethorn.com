import styles from '../../../assets/styles/home.module.css';

export default function PortfolioItem() {
  return (
    <div className={ styles.portfolio_item } id="safeport">
      <div className="thumbnail">
        <a href="https://www.safe-port.nl/" target="_blank" rel="noreferrer">
          <img
            src="/assets/images/safe-port.png"
            alt="safeport logo"
          />
        </a>
      </div>
      <div className="description">
        <a href="https://www.safe-port.nl/" target="_blank" rel="noreferrer">
          <h2>SafePort</h2>
        </a>
        <p>A simple one-page WordPress site for consulting services.</p>
      </div>
    </div>
  );
}
