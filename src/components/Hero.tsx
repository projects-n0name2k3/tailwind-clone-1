import CTA from "./CTA";
import Header from "./Header";

const Hero = () => {
  return (
    <>
      <section className="bg-main bg-no-repeat bg-cover w-full h-[822px] rounded-b-[54px] ">
        <div className="max-w-[1360px] m-auto h-full pt-8 pb-32 flex flex-col items-center">
          <Header />
          {/* cta */}
          <CTA />
          {/* row */}
          <div className="max-w-[1148px] flex p-2 items-center rounded-xl h-[72px] bg-white">
            <div className="min-w-[223px] h-full p-4 flex item-center gap-4 flex-shrink-0 ">
              <img src="./src/assets/location.svg" alt="" />
              <div className="flex flex-col justify-center items-start self-stretch">
                <span className="text-sm leading-5 text-body-mute">
                  Location
                </span>
                <span className=" text-base leading-6 text-body font-medium">
                  Explore nearby destinations
                </span>
              </div>
            </div>
            <div className="min-w-[223px] h-full p-4 flex item-center gap-4 flex-shrink-0 ">
              <img src="./src/assets/location.svg" alt="" />
              <div className="flex flex-col justify-center items-start self-stretch">
                <span className="text-sm leading-5 text-body-mute">Guests</span>
                <span className=" text-base leading-6 text-body font-medium">
                  1 guest
                </span>
              </div>
            </div>
            <div className="min-w-[223px] h-full p-4 flex item-center gap-4 flex-shrink-0 ">
              <img src="./src/assets/location.svg" alt="" />
              <div className="flex flex-col justify-center items-start self-stretch">
                <span className="text-sm leading-5 text-body-mute">
                  Activity
                </span>
                <span className=" text-base leading-6 text-body font-medium">
                  All Activities
                </span>
              </div>
            </div>
            <div className="min-w-[223px] h-full p-4 flex item-center gap-4 flex-shrink-0 ">
              <img src="./src/assets/location.svg" alt="" />
              <div className="flex flex-col justify-center items-start self-stretch">
                <span className="text-sm leading-5 text-body-mute">When</span>
                <span className=" text-base leading-6 text-body font-medium">
                  Choose a Date
                </span>
              </div>
            </div>
            <button className="p-[18px] flex gap-2 items-center justify-center rounded-xl bg-primary">
              <img src="./src/assets/group.svg" alt="" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
