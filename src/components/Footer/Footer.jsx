import icon from '../../images/svg-sprite.svg';
import css from './Footer.module.css';

function Footer() {
  return (
    <footer className={css.footerWrapper}>
      <div className={css.social}>
        <h3 className={css.title}>Social media</h3>
        <ul className={css.list}>
          <li>
            <a
              target="_blank"
              href="https://github.com/alexfil3"
              rel="noopener noreferrer"
            >
              <svg className={css.svg} width="30px" height="30px">
                <use href={`${icon}#icon-mercedes`} />
              </svg>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://t.me/alexfilimonov02"
              rel="noopener noreferrer"
            >
              <svg className={css.svg} width="30px" height="30px">
                <use href={`${icon}#icon-mercedes`} />
              </svg>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/alex-filimonov2002"
              rel="noopener noreferrer"
            >
              <svg className={css.svg} width="30px" height="30px">
                <use href={`${icon}#icon-mercedes`} />
              </svg>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="mailto:alex.filimonov2002@gmail.com"
              rel="noopener noreferrer"
            >
              <svg className={css.svg} width="30px" height="30px">
                <use href={`${icon}#icon-mercedes`} />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <p>Copyright &copy; 2023-2024 Alex Filimonov</p>
      {/* <a
        className={css.link}
        target="_blank"
        href="https://github.com/alexfil3"
        rel="noopener noreferrer"
      ></a> */}
    </footer>
  );
}

export default Footer;
