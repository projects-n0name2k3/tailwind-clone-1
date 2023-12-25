const CTA = () => {
  return (
    <div className="w-full h-[540px] flex flex-col justify-center items-center gap-8 flex-[1_0_0] self-stretch">
      <h1 className="text-5xl leading-tight font-semibold text-white">
        Discover the most engaging places
      </h1>
      <button className="p-6 flex gap-2 items-center justify-center rounded-xl bg-primary">
        <img src="./src/assets/group.svg" alt="" />
        <span className="text-lg leading-none text-white font-semibold ">
          Discover on 3D Globe
        </span>
      </button>
    </div>
  );
};

export default CTA;
