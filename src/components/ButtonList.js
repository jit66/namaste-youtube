import React from 'react'
import Button from './Button'

const listItems = ["All","Live","Gaming","Gifts","Cricket","Cooking","Soccer",
"Songs","PUBG","Arijit","Dance","Kabaddi","Art","Magic"]

const ButtonList = () => {
  return (
    <div className="flex">
      {listItems.map((item) => 
        <Button key={item} name={item} />
      )}
    </div>
  );
};

export default ButtonList