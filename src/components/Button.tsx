import RightArrow from "./RightArrow";

interface OptionalProps {
  title: string;
  hasIcon?: boolean;
}

export const Button = ({ title, hasIcon = false }: OptionalProps) => {
  return (
    <button className="p-[10px] inline-flex justify-center items-center gap-1 rounded-xl text-primary bg-primary_muted">
      <span className="text-base font-normal leading-none">{title}</span>
      {hasIcon && <RightArrow />}
    </button>
  );
};
