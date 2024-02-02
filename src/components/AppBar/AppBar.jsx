import { useEffect, useState } from 'react';
import Navigation from 'components/Navigation/Navigation';
import css from './AppBar.module.css';

function AppBar() {
  const [isScrolling, setIsScrolling] = useState(false);

  const onScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header
      className={`${css.header} ${css.sticky} ${css.stickyTop} ${
        isScrolling && css.isActive
      }`}
    >
      <Navigation />
    </header>
  );
}

export default AppBar;
