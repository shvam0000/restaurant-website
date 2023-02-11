import Image from 'next/image';
import { Button } from '../shared';
import Social1 from '../../utils/images/social1.jpeg';
import Social2 from '../../utils/images/social2.jpeg';
import Social3 from '../../utils/images/social3.jpeg';
import Social4 from '../../utils/images/social4.jpeg';
import Social5 from '../../utils/images/social5.jpeg';
import Social6 from '../../utils/images/social6.jpeg';

const Social = () => {
  return (
    <div className="px-20 py-5">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Follow us on Instagram</h1>
        <figure>
          <Button type="primary">
            <span>Follow us</span>
          </Button>
        </figure>
      </div>
      <div className="flex py-5">
        <figure className="w-1/3 px-4">
          <Image className="rounded-xl" src={Social1} alt="social1" />
        </figure>
        <figure className="w-1/3 px-4">
          <Image className="rounded-xl" src={Social2} alt="social2" />
        </figure>
        <div className="w-1/3 px-4 grid grid-cols-2 gap-14 items-center">
          <figure>
            <Image
              className="rounded-xl"
              src={Social3}
              alt="social3"
              width={220}
              height={220}
            />
          </figure>
          <figure>
            <Image
              className="rounded-xl"
              src={Social4}
              alt="social4"
              width={220}
              height={220}
            />
          </figure>
          <figure>
            <Image
              className="rounded-xl"
              src={Social5}
              alt="social5"
              width={220}
              height={220}
            />
          </figure>
          <figure>
            <Image
              className="rounded-xl"
              src={Social6}
              alt="social6"
              width={220}
              height={220}
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Social;
