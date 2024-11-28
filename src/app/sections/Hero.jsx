import Image from "next/image";
import { arrowRight } from "../assets/icons";
import Button from "../component/Button";
import { statistics } from "../constant";
import { bigShoe_1 } from "../assets/images";

const Hero = () => {
  return (
    <section
      id="Home"
      className="w-full p-2 flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:px-10 xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-[#8a5aff]">
          Our popular product
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The new Arrival
          </span>
          <br />
          <span className="text-[#8a5aff] inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconUrl={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen xl:w-3/5 max-xl:py-40">
        <Image
          src={bigShoe_1}
          alt="Nike Shoes"
          width={610}
          height={500}
          className="object-contain relative z-10 bg-hero bg-cover bg-center"
        />
        <div className="inline-flex w-px bg-violet">
          <p className="horiz font-thin text-2xl tracking-wider">
            JUST <span className="text-[#8a5aff]">DO</span> IT.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
