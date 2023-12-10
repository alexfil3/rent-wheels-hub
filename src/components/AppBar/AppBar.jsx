import Navigation from 'components/Navigation/Navigation';
import css from './AppBar.module.css';

function AppBar() {
  console.log('APPbar');
  return (
    <header className={css.header}>
      <Navigation />
    </header>
  );
}

export default AppBar;
