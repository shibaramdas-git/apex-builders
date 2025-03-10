import TestimonialSingle from "./TestimonialSingle";
import TestimonialMulti from "./TestimonialMulti";
import Clients1 from "./Clients1";
import Clients2 from "./Clients2";
import ThirdPartyTestimonial from "./ThirdPartyTestimonial";

export default function TestimonialSection(props: any) {
  const { showTestimonial, showClients, testimonial, clients } = props;
  // console.log(props);
  return (
    <section className="py-12">
      {/* Render Testimonials */}
      {showTestimonial && testimonial?.testimonials?.length > 0 && (
        <div className="container mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center pb-8">
            {testimonial.heading}
          </h2>
          {testimonial.design === "design1" ? (
            <TestimonialMulti data={testimonial.testimonials} />
          ) : testimonial.design === "design2" ? (
            <TestimonialSingle data={testimonial.testimonials} />
          ) : (
            <ThirdPartyTestimonial />
          )}
        </div>
      )}

      {/* Render Clients */}
      {showClients && clients?.clientImages?.length > 0 && (
        <div className="container mt-10">
          <h2 className="text-2xl font-bold mb-8 text-text-black text-center">
            {clients.heading}
          </h2>
          {clients.design === "design1" ? (
            <Clients1 clients={clients.clientImages} />
          ) : (
            <Clients2 clients={clients.clientImages} />
          )}
        </div>
      )}
    </section>
  );
}

const data = {
  showTestimonial: true,
  testimonials: {
    heading: "Testimonials",
    design: "design1",
    testimonials: [
      {
        id: "1",
        name: "John Doe",
        message: "Excellent service, highly recommended!",
        avatar: "https://placehold.co/150x150",
        rating: 3,
        position: "CEO, ABC Corp",
      },
      {
        id: "2",
        name: "Jane Smith",
        message: "Very professional and great support.",
        avatar: "https://picsum.photos/seed/person1/400/400",
        rating: 4,
        position: "Marketing Manager, XYZ Ltd",
      },
      {
        id: "3",
        name: "Alice Johnson",
        message: "Quality work delivered on time!",
        avatar: "https://placehold.co/150x150",
        rating: 5,
        position: "Product Manager, MNO Inc",
      },
      {
        id: "4",
        name: "Jane Akshad",
        message:
          "Quisquam error voluptate fugiat consequuntur nisi, unde vero. Sunt animi aliquid saepe rerum placeat at, quibusdam soluta temporibus nulla fugiat.",
        avatar: "https://picsum.photos/seed/person3/400/400",
        rating: 2,
        position: "CTO, DEF Group",
      },
      {
        id: "5",
        name: "Alice Krion",
        message:
          "Quality work delivered on time! Quisquam error voluptate fugiat consequuntur nisi, unde vero. Sunt animi aliquid saepe rerum placeat at, quibusdam soluta temporibus nulla fugiat.",
        avatar: "https://placehold.co/150x150",
        rating: 1,
        position: "CTO, DEF Group",
      },
    ],
  },
  showClients: false,
  clients: {
    heading: "Our Clients",
    design: "design2",
    clients: [
      { id: 1, src: "https://placehold.co/10x100", alt: "Client 1" },
      { id: 2, src: "https://placehold.co/20x100", alt: "Client 2" },
      { id: 3, src: "https://placehold.co/30x100", alt: "Client 3" },
      { id: 4, src: "https://placehold.co/40x100", alt: "Client 4" },
      { id: 5, src: "https://placehold.co/50x100", alt: "Client 5" },
      { id: 6, src: "https://placehold.co/60x100", alt: "Client 6" },
      { id: 7, src: "https://placehold.co/70x100", alt: "Client 7" },
      { id: 8, src: "https://placehold.co/80x100", alt: "Client 8" },
      { id: 9, src: "https://placehold.co/90x100", alt: "Client 9" },
      { id: 10, src: "https://placehold.co/100x100", alt: "Client 10" },
    ],
  },
};
