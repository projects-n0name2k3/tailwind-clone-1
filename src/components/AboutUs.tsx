import { Button } from "./Button";

const AboutUs = () => {
  return (
    <section className="w-full pb-[120px]">
      <div className="max-w-[1128px] mx-auto flex items-center gap-8">
        <div className="flex flex-col items-start gap-8 flex-[1_0_0]">
          <h2 className="text-theme-body text-[32px] font-semibold leading-normal">
            About Us
          </h2>
          <p className="text-[#5B5B5B] text-base font-normal leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            a sapien justo. Nulla facilisis tristique imperdiet. Nullam a
            placerat odio. Sed in ex augue. Aliquam porta consectetur lorem sit
            amet ultrices. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos.
          </p>
          <Button title="Read More" hasIcon={true} />
        </div>
        <img
          src="https://s3-alpha-sig.figma.com/img/8a71/9b84/c15031a2fbb7d81b80d52cfd9cab41aa?Expires=1699833600&Signature=c0BkUjEIB~Gv6TeCtHJvMjMROH7sqxqX0FCqGPGNEAUTGD3RvWIDEjCAdHB2AZd0~jkTN-E7TiwrgncieBSgpOghoIEl8dNCS5Yq2qxlSOgMVrJ~Q62DgPPnAPE1G6xp0ij5qxdtebYgC2GYbYC-5xJBI~XCHfbI1ka-V0ghnL1VROVJ4hCXm~dpfwLOl3UZ0S7-JIGK4~h8sviYURS3tYto9-tGXlY4AgI~p0zqbjfJNhlNmAZzNzx7MofSOePsPlUJXP3w3ypSRty-6ROX9XNdOyKyUW3woqzIRLlDOj1VV~Z2f-2rf4ho1-NykALlh7PIK-z64JW85Uel7N~e1A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
          className="w-[556px] h-[488px] rounded-xl object-cover"
        />
      </div>
    </section>
  );
};

export default AboutUs;
