import css from "./Filter.module.css";

function Filter() {
  return (
    <form className={css.filter}>
      <label>
        Car brand
        <input type="text" />
      </label>
      <label>
        Price/ 1 hour
        <input type="text" />
      </label>
      <div className={css.mileageWrapper}>
        <label>
          Сar mileage / km
          <input type="text" />
        </label>
        <input type="text" />
      </div>
      <button type="submit">Search</button>
    </form>
  );
}

export default Filter;
