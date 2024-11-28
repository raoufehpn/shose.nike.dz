import React from 'react';
interface ShoeCardProps {
  imgURL: {
    bigShoe: any;
    thumbnail: string;
  };
  changeBigShoeImg: (img: any) => void;
  bigShoeImg: any;
}


const ShoeCard = ( imgURL: any , changeBigShoeImg: Function , bigShoeImg: any  ) => {
  const handleClick = () => {
 //   Check if the clicked shoe image is different from the current big shoe image
     if (bigShoeImg !== imgURL.bigShoe) {
   //   If different, update the big shoe image
     changeBigShoeImg(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`rounded-xl border-2 ${
        bigShoeImg === imgURL.bigShoe ? 'border-[#8a5aff]' : 'border-transparent'
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick} 
    >
      <div>
        <img src={imgURL.thumbnail} alt="shoe collection" width={127} height={103} className=''/>
      </div>
    </div>
  );
};

export default ShoeCard;
