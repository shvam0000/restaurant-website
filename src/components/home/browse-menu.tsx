import MenuCard from './menu-card';
import { MenuCard1, MenuCard2, MenuCard3, MenuCard4 } from '@/utils/icons';
import { Button } from '../shared';

const cardData = [
  {
    logo: <MenuCard1 />,
    title: 'Breakfast',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam',
  },
  {
    logo: <MenuCard2 />,
    title: 'Main Dishes',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam',
  },
  {
    logo: <MenuCard3 />,
    title: 'Drinks',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam',
  },
  {
    logo: <MenuCard4 />,
    title: 'Desserts',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam',
  },
];

const BrowseMenu = () => {
  return (
    <div className="my-10 ">
      <div>
        <h1 className="font-bold text-2xl flex justify-center">
          Order from your favourite app today!
        </h1>
      </div>
      <div className="flex mx-20 my-10 justify-center items-center text-left">
        {cardData.map((data) => (
          <MenuCard
            key={data.title}
            title={data.title}
            logo={data.logo}
            description={data.description}
          />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <figure className="px-2">
          <Button type="primary">
            <span>Order online</span>
          </Button>
        </figure>
        <figure className="px-2">
          <Button type="secondary">
            <span>Book a table</span>
          </Button>
        </figure>
      </div>
    </div>
  );
};

export default BrowseMenu;
