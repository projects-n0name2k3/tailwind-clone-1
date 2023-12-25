import CommentIcon from "./CommentIcon";
import DateIcon from "./DateIcon";
import Title from "./Title";
import UserIcon from "./UserIcon";

const Travel = () => {
  return (
    <section className="w-full pb-[120px]">
      <div className="max-w-[1360px] m-auto">
        <Title title={"Travel Tips and Advice"} hasButton={true} />
        <div className="flex items-start gap-8 self-stretch">
          {Array(2)
            .fill(0)
            .map((index) => (
              <div key={index} className="flex items-start flex-[1_0_0]">
                <img
                  src="https://s3-alpha-sig.figma.com/img/7422/dca4/402dc4e101b2b03744658ccf1a940bf8?Expires=1699833600&Signature=MnkDVo4S4HvWzMuneUTwnWErBYIga~YCljtiS8FEJ8KwPkDErNNUBgKujcp5LiSutwn1XYutZpdQc4qlju3VWVSq3uJJbR6ooew49jjgz~PCrslVauYjn~P1~mVX6AEsl7PXcYHkQaHkZVMQyfiY7duDLnJT~ue5X3ZWhC-KgF9q9Na4YepNMlUsG2WZtpl5wN4m3Rt2PLZmSunQohinth~w2mQJqqUcGk5C036yx1zepZtV9D3urP2cNQj0MWahTyZfsNXi2IVYMxiLrLW5g2jmOt5J2FLzxhcu3j2Yq6JaJtsmefpIVZvsvfIG4b6P2m1v8OwAFiXLx9O9DSSbOg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                  className="w-[316px] h-[380px] rounded-3xl object-cover bg-no-repeat"
                />
                <div className="flex flex-col items-start self-stretch pl-0 ml-8">
                  <div className="flex pb-0 flex-col items-start gap-4 flex-[1_0_0] self-stretch">
                    <h2 className="text-theme-body text-2xl font-semibold leading-normal w-[316px] h-[124px]">
                      East Village Ice Cream <br></br> Crawl
                    </h2>
                    <p className="text-base font-normal leading-normal text-theme-body-mute">
                      We will stop at five different world-class ice cream shops
                      on this 1.5 mile 1.5 hour tour. At each ice cream store
                      we'll explore the story behind the business and see what
                      makes the ice cream unique as you savor every…
                    </p>
                  </div>
                  <div className="flex w-[320px] items-start gap-6 ">
                    <div className="flex items-center gap-1">
                      <DateIcon />
                      <span className="text-sm font-normal leading-snug text-theme-body-mute">
                        Today
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <UserIcon />
                      <span className="text-sm font-normal leading-snug text-theme-body-mute">
                        Maria Philips
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CommentIcon />
                      <span className="text-sm font-normal leading-snug text-theme-body-mute">
                        2
                      </span>
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

export default Travel;
