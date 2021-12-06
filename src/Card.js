import { useState } from "react";

// Card Component
const Card = ({ item, show, handleClick }) => {
  const { image, name, price, info, id } = item;
  const [hide, setHide] = useState(true);

  return (
    <div className='trips'>
      <img src={image} alt={name} />
      <div className='description'>
        <div className='flex'>
          <h2>{name}</h2>
          <p>{price}</p>
        </div>
        <div>
          {hide ? (
            <p className='truncate text'>{info}</p>
          ) : (
            <p className='text'>{info}</p>
          )}
          {!hide ? (
            <button className='btn' onClick={() => setHide(!hide)}>
              Show Less
            </button>
          ) : (
            <button className='btn' onClick={() => setHide(!hide)}>
              Show More
            </button>
          )}
        </div>
      </div>
      <button className='delete' onClick={() => handleClick(id)}>
        Not Interested
      </button>
    </div>
  );
};

export default Card;
