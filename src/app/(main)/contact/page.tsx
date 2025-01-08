import Banner from "@/components/Banner";

export default function ContactPage() {
  return (
    <section className="">
      <Banner
        heading="Contact US"
        path={"/contact"}
        bgImageSrc="/buildings/photodune-3979102-superb-backyard-m-1024x754.jpg"
      />
      <div className="cmn_pad">
        <div className="bg-bgcolor text-textcolor">
          <h1 className="dark:text-textcolor">Contact US P A G E</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            placeat quas reprehenderit quo mollitia alias ea, repellendus
            laboriosam vero? Non exercitationem assumenda sunt atque inventore
            rem voluptatum hic eum minus quibusdam, nisi asperiores quo odit,
            totam necessitatibus. Quisquam doloremque ullam numquam eos,
            corrupti fugiat tenetur doloribus quaerat laboriosam, hic dolores!
          </p>
        </div>
      </div>
    </section>
  );
}
