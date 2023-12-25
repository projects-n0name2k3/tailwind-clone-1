import LocationIcon from "../components/Location";
import RatingFillIcon from "../components/RatingFill";
import RatingUnfill from "../components/RatingUnfill";
import Title from "./Title";
const HotelAndSpa = () => {
  return (
    <section className="w-full pb-[120px]">
      <div className="max-w-[1360px] m-auto">
        <Title title={"Hotels and Restaurants"} hasButton={true} />
        <div className="flex items-start gap-8 self-stretch">
          {Array(4)
            .fill(0)
            .map((index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-[10px] flex-[1_0_0]"
              >
                <img
                  src="https://s3-alpha-sig.figma.com/img/7422/dca4/402dc4e101b2b03744658ccf1a940bf8?Expires=1699833600&Signature=MnkDVo4S4HvWzMuneUTwnWErBYIga~YCljtiS8FEJ8KwPkDErNNUBgKujcp5LiSutwn1XYutZpdQc4qlju3VWVSq3uJJbR6ooew49jjgz~PCrslVauYjn~P1~mVX6AEsl7PXcYHkQaHkZVMQyfiY7duDLnJT~ue5X3ZWhC-KgF9q9Na4YepNMlUsG2WZtpl5wN4m3Rt2PLZmSunQohinth~w2mQJqqUcGk5C036yx1zepZtV9D3urP2cNQj0MWahTyZfsNXi2IVYMxiLrLW5g2jmOt5J2FLzxhcu3j2Yq6JaJtsmefpIVZvsvfIG4b6P2m1v8OwAFiXLx9O9DSSbOg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                  className="w-[316px] h-[380px] rounded-3xl object-cover bg-no-repeat"
                />
                <div className="flex flex-col items-start self-stretch gap-3">
                  <h2 className="text-theme-body text-base font-medium leading-tight">
                    Monastero Santa Rosa Hotel & Spa
                  </h2>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-1 flex-[1_0_0]">
                      <LocationIcon />
                      <span className="text-sm font-normal leading-normal text-theme-body-mute">
                        Salerno, Italy
                      </span>
                    </div>
                    <div className="flex items-start gap-[2px]">
                      <RatingFillIcon />
                      <RatingFillIcon />
                      <RatingFillIcon />
                      <RatingFillIcon />
                      <RatingUnfill />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HotelAndSpa;
