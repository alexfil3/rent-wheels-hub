import css from './Footer.module.css';

function Footer() {
  return (
    <footer className={css.footerWrapper}>
      Developed by
      <a
        className={css.link}
        target="_blank"
        href="https://github.com/alexfil3"
        rel="noopener noreferrer"
      >
        Alex Filimonov
      </a>
    </footer>
  );
}

export default Footer;
