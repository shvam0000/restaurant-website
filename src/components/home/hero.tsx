import { Button } from '../shared';
import Image from 'next/image';
import Burger from '../../utils/images/burger-main.jpeg';

const Hero = () => {
  return (
    <div>
      <div className="flex ml-20 justify-center items-center">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold mb-2">The best place to</h1>
          <h1 className="text-5xl font-bold mt-2 text-primary-orange">
            ear burgers in LA.
          </h1>

          <p className="text-xl mt-8 pr-5 text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
            maiores beatae aut nemo cupiditate non quam pariatur voluptatum ex
            delectus?
          </p>

          <div className="pt-10 flex justify-start items-center">
            <figure className="mr-2">
              <Button type="primary">
                <span>Reserve</span>
              </Button>
            </figure>
            <figure className="pl-2">
              <Button type="secondary">
                <span>Order online</span>
              </Button>
            </figure>
          </div>
        </div>
        <div className="bg-primary-orange h-screen w-1/2 relative">
          <figure>
            <Image
              className="rounded-xl absolute top-1/2 left-1/2 transform -translate-x-full -translate-y-1/2"
              src={Burger}
              alt="Burger"
              width={350}
              height={350}
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Hero;
