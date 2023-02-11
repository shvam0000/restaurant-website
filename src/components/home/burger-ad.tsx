import { Button } from '../shared';
import BigBurger from '../../utils/images/bigburger.jpeg';
import Image from 'next/image';

const BurderAd = () => {
  return (
    <div className="h-screen">
      <div className="flex">
        <div className="w-1/2 pt-60 bg-primary-orange px-20">
          <h1 className="text-primary-white text-4xl font-bold py-10">
            Taste the most delicious burger in Los Angeles, CA
          </h1>
          <p className="text-md font-medium pb-10 text-primary-white">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam
            diam vitae velit bibendum elementum. Order online
          </p>
          <div className="flex items-center">
            <figure className="pr-2">
              <Button type="secondary">
                <span>Order online</span>
              </Button>
            </figure>
            <figure className="pr-2">
              <Button type="primary">
                <span>Resreve</span>
              </Button>
            </figure>
          </div>
        </div>
        <div className="w-1/2">
          <Image src={BigBurger} alt="Big burger" width={620} height={500} />
        </div>
      </div>
    </div>
  );
};

export default BurderAd;
