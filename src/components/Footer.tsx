import ArrowWhiteIcon from "./ArrowWhiteIcon";
import FBIcon from "./FBIcon";
import LetterIcon from "./LetterIcon";
import Logo from "./logo";

const ListItem = [
  {
    title: "About",
    listItems: ["About Us", "Features", "News", "Menu"],
  },
  {
    title: "Company",
    listItems: ["Why 2rism", "Partner With Us", "FAQ", "Blog"],
  },
  {
    title: "Support",
    listItems: ["Account", "Support Center", "Feedback", "Contact Us"],
  },
];

const Footer = () => {
  return (
    <footer className="w-full py-[120px] bg-[#F9F9F9]">
      <div className="max-w-[1376px] mx-auto flex flex-col items-start gap-[10px]">
        <div className="flex items-start gap-16 self-stretch">
          <div className="flex flex-col items-start gap-8 w-[354px]">
            <Logo />
            <p className="text-sm font-normal leading-normal text-theme-body-mute">
              We always make our customers happy by providing as many choises as
              possible
            </p>
            <div className="flex items-start gap-8">
              {Array(3)
                .fill(0)
                .map((index) => {
                  return <FBIcon key={index} />;
                })}
            </div>
          </div>
          <div className="flex items-start justify-between gap-16 flex-[1_0_0]">
            {ListItem.map((item, index) => (
              <div key={index} className="flex flex-col gap-5 items-start">
                <h2 className="text-lg font-medium leading-normal text-theme-body">
                  {item.title}
                </h2>
                <ul className="flex flex-col items-start gap-3 text-theme-body-mute text-sm leading-normal font-normal">
                  {item.listItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-5 items-start">
            <h2 className="text-lg font-medium leading-normal text-theme-body">
              Subscribe on our destination review
              <br />
              newsletters
            </h2>
            <div className="flex gap-4 items-center justify-between">
              <div className="flex items-center p-4 gap-4 bg-white rounded-xl w-[300px] h-[72px]">
                <LetterIcon />
                <div className="flex flex-col justify-center items-start self-stretch ">
                  <span className="text-sm font-normal leading-normal text-theme-body-mute">
                    Your Email
                  </span>
                  <span className="text-base font-medium leading-normal text-theme-body">
                    johndoe@gmail.com
                  </span>
                </div>
              </div>
              <button className="bg-primary rounded-xl">
                <ArrowWhiteIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
