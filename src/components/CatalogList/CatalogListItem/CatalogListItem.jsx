import css from './CatalogListItem.module.css';

function CatalogListItem({
  year,
  make,
  model,
  rentalPrice,
  address,
  rentalCompany,
  type,
  id,
  functionalities,
  img,
}) {
  const city = address.split(' ')[3].slice(0, -1);
  const country = address.split(' ')[4];
  const editedType = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
  const feature = functionalities.reduce((acc, current) => {
    const accLength = acc
      .split(' ')
      .reduce((total, word) => total + word.length, 0);
    const currentLength = current
      .split(' ')
      .reduce((total, word) => total + word.length, 0);

    return accLength < currentLength ? acc : current;
  }, functionalities[0]);

  return (
    <div className={css.flexItem}>
      <div className={css.imageWrapper}>
        <img src={img} alt={model} />
      </div>
      <div className={css.labelWrapper}>
        <p>
          {make} <span className={css.model}>{model}</span>, {year}
        </p>
        <p>{rentalPrice}</p>
      </div>
      <ul className={css.characteristics}>
        <li>{city}</li>
        <li>{country}</li>
        <li>{rentalCompany}</li>
        <li>{editedType}</li>
        <li>{model}</li>
        <li>{id}</li>
        <li>{feature}</li>
      </ul>
      <button className={css.button}>Learn more</button>
    </div>
  );
}

export default CatalogListItem;
