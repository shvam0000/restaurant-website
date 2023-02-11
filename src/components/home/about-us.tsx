import Image from 'next/image';

import Fries from '../../utils/images/fries.jpeg';
import { Button } from '../shared';

const AboutUs = () => {
  return (
    <div className="h-screen">
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              About Us
            </h1>
            <p className="pb-10">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
              sit molestias sequi exercitationem illo quo eligendi, voluptatem
              excepturi id nulla quam voluptate mollitia labore recusandae dicta
              qui quasi incidunt eaque!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
              sit molestias sequi exercitationem illo quo eligendi, voluptatem
              excepturi id nulla quam voluptate mollitia labore recusandae dicta
              qui quasi incidunt eaque! Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Fugit sit molestias sequi exercitationem illo
              quo eligendi, voluptatem excepturi id nulla quam voluptate
              mollitia labore recusandae dicta qui quasi incidunt eaque! Lorem
              ipsum,
            </p>
            <div className="flex items-center mt-5">
              <figure className="pr-2">
                <Button type="secondary">
                  <span>About us</span>
                </Button>
              </figure>
              <figure className="pl-2">
                <Button type="primary">
                  <span>Join our team</span>
                </Button>
              </figure>
            </div>
          </div>
          <div className="w-full lg:w-8/12 flex justify-center ">
            <Image
              className="rounded-xl"
              src={Fries}
              alt="Fries"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
