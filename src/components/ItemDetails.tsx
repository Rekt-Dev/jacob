import React from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';
interface ItemDetailsProps {
  // Add any props if needed
}

const ItemDetails: React.FC<ItemDetailsProps> = () => {
  const { index } = useParams<{ index: string }>();

  // Convert index to a number if it's defined and valid
  const itemIndex = index ? parseInt(index, 10) : -1; // Provide a default value if index is undefined

  // Now, you can use itemIndex to fetch the corresponding item data from your array

  return (
    <div className='justifyCenter '>
<Item />


    </div>
  );
};

export default ItemDetails;
