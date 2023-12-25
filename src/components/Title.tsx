import RightArrow from "./RightArrow";

interface OptionalProps {
  title: string;
  hasButton: boolean;
}

const Title = ({ title, hasButton = false }: OptionalProps) => {
  return (
    <div className="flex items-start justify-between">
      <h1 className=" text-theme-body text-[32px] leading-normal font-semibold pb-16">
        {title}
      </h1>
      {hasButton ? (
        <button className="p-[10px] inline-flex justify-center items-center gap-1 rounded-xl text-primary bg-primary_muted">
          <span className="text-base font-normal leading-none">View all</span>
          <RightArrow />
        </button>
      ) : null}
    </div>
  );
};

export default Title;
