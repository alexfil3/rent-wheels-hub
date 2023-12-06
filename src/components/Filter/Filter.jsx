function Filter() {
  return (
    <form>
      <label>
        Car brand
        <input type="text" />
      </label>
      <label>
        Price/ 1 hour
        <input type="text" />
      </label>
      <div>
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
