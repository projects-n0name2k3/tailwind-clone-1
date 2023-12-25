import Title from "../components/Title";

const Popular = () => {
  return (
    <section className="w-full py-[120px]">
      <div className="max-w-[1360px] m-auto">
        <Title title="Popular Destinations" hasButton={false} />
        <div className="flex items-start gap-8 self-stretch">
          {Array(6)
            .fill(0)
            .map((index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-2 flex-[1_0_0]"
              >
                <img
                  src="https://s3-alpha-sig.figma.com/img/e973/9580/681c8790eab02f4698644dc32ff2dc13?Expires=1699833600&Signature=EUtjQRgI6XfXAaYaqoXcfhXgCsUoyS2~diJ1nvIZHNaJikvBDD4aFxNJYg8xL7cstjF6NuC3dIi5EohIfcNQ-ElYqyrldk80gdnYILazqIOol6OZCXbIKG8xxEAZjD0ayvmGiJo4Y9pyIRjJ8v0gGbAXf2yrRG4q~W9gj8oOaWONctpd6y87kgrQrTrYnm~Emkn-O8kkmzGEiLaVcRvvVc5fRj~e5qXSZU1wPVTuDHwXNA0~s3UHIb1Amm27KzxNsxF-aEweAsasewhXt5ekuDHsY52eppNSAvlZy~4eyODBtA1yVwBiH2WV1d4f9ciOz2d-AA2Q~0rsHoSsl6nDDg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                  className="w-[200px] h-[180px] rounded-3xl"
                />
                <div className="flex flex-col items-start self-stretch">
                  <h2 className="text-theme-body text-base font-medium leading-tight">
                    Big Sur
                  </h2>
                  <span className="text-theme-body-mute text-sm font-normal leading-snug">
                    California, USA
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;
