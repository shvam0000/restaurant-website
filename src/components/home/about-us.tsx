import Image from 'next/image';
import React from 'react';
import Fries from '../../utils/images/fries.jpeg';
import { Button } from '../shared';

const AboutUs = () => {
  return (
    <div className="h-screen">
      <div className="flex">
        <div className="w-1/2">
          <figure className="ml-20 mt-10">
            <Image
              className="rounded-xl"
              src={Fries}
              alt="Fries"
              width={450}
              height={400}
            />
          </figure>
        </div>
        <div className="w-1/2 mx-28 mt-20">
          <h1 className="font-bold text-2xl pb-4">About us</h1>
          <p className="pb-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit sit
            molestias sequi exercitationem illo quo eligendi, voluptatem
            excepturi id nulla quam voluptate mollitia labore recusandae dicta
            qui quasi incidunt eaque!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit sit
            molestias sequi exercitationem illo quo eligendi, voluptatem
            excepturi id nulla quam voluptate mollitia labore recusandae dicta
            qui quasi incidunt eaque! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Fugit sit molestias sequi exercitationem illo quo
            eligendi, voluptatem excepturi id nulla quam voluptate mollitia
            labore recusandae dicta qui quasi incidunt eaque! Lorem ipsum,
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
      </div>
    </div>
  );
};

export default AboutUs;
