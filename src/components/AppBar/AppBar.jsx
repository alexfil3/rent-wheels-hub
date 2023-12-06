import Navigation from "components/Navigation/Navigation";
import css from "./AppBar.module.css";

function AppBar() {
  return (
    <header className={css.header}>
      <Navigation />
    </header>
  );
}

export default AppBar;
