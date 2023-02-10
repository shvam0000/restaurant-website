import { MenuCardProps } from '@/utils/props/props';
import React from 'react';

const MenuCard: React.FC<MenuCardProps> = ({ logo, title, description }) => {
  return (
    <div className="border-2 border-gray-500 rounded-xl h-[400px] w-[300px] py-10">
      <div className="flex justify-center items-center">
        <div className="w-3/4">
          <div className="flex justify-center items-center">{logo}</div>
          <h1 className="text-xl font-medium flex justify-center mt-2">
            {title}
          </h1>
          <p className="text-md flex justify-center mt-2 text-gray-500">
            {description}
          </p>
          <h1 className="text-primary-orange text-xl font-medium pt-3 flex justify-center">
            Explore Menu
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
