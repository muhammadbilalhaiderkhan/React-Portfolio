import { useEffect, useRef } from "react";

const testimonials = [
  { name: "Michael Smith", avatar: "https://randomuser.me/api/portraits/men/1.jpg", text: "Bilal Haider did an amazing job on my website! The design is clean and professional." },
  { name: "Lucas Johnson", avatar: "https://randomuser.me/api/portraits/men/2.jpg", text: "I loved working with Bilal Haider. He turned my ideas into a stunning web app." },
  { name: "Amelia Brown", avatar: "https://randomuser.me/api/portraits/women/3.jpg", text: "Bilal Haider delivered a fantastic UI/UX experience. Highly recommended!" },
  { name: "David Wilson", avatar: "https://randomuser.me/api/portraits/men/4.jpg", text: "Thanks to Bilal Haider, our website looks modern and works flawlessly." },
  { name: "Sofie Davis", avatar: "https://randomuser.me/api/portraits/women/5.jpg", text: "Bilal Haider is very professional. The website exceeded my expectations." },
  { name: "Nora Martinez", avatar: "https://randomuser.me/api/portraits/women/6.jpg", text: "Amazing work by Bilal Haider! Responsive, fast, and visually appealing." },
  { name: "Mark Anderson", avatar: "https://randomuser.me/api/portraits/men/7.jpg", text: "Bilal Haider's coding and design skills are top-notch. Great experience!" },
  { name: "Aiden Thomas", avatar: "https://randomuser.me/api/portraits/men/8.jpg", text: "I highly recommend Bilal Haider for web development projects. Exceptional work." },
  { name: "Lily Moore", avatar: "https://randomuser.me/api/portraits/women/9.jpg", text: "Bilal Haider transformed my ideas into a beautiful website. Fantastic!" },
  { name: "James Taylor", avatar: "https://randomuser.me/api/portraits/men/10.jpg", text: "Very impressed by Bilal Haider. Excellent communication and delivery." },
  { name: "Emma White", avatar: "https://randomuser.me/api/portraits/women/11.jpg", text: "Bilal Haider created a professional, user-friendly website for my business." },
  { name: "Noah Harris", avatar: "https://randomuser.me/api/portraits/men/12.jpg", text: "Working with Bilal Haider was seamless. Highly skilled and reliable." },
  { name: "Ava Martin", avatar: "https://randomuser.me/api/portraits/women/13.jpg", text: "Bilal Haider delivered a website that perfectly matched my vision." },
  { name: "Liam Jackson", avatar: "https://randomuser.me/api/portraits/men/14.jpg", text: "Professional, creative, and on time. Bilal Haider is excellent!" },
  { name: "Sophia Lee", avatar: "https://randomuser.me/api/portraits/women/15.jpg", text: "Thanks to Bilal Haider, my website looks fantastic and works perfectly." },
  { name: "Ethan Perez", avatar: "https://randomuser.me/api/portraits/men/16.jpg", text: "Bilal Haider exceeded my expectations. Clean design, smooth functionality." },
];

const TestimonialCard = ({ text, avatar, name }) => (
  <div className="flex-shrink-0 w-[340px] bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-sm">
    <p className="text-sm text-gray-300 mb-5 leading-relaxed line-clamp-4">{text}</p>
    <div className="flex items-center gap-3">
      <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover ring-2 ring-white/10" />
      <span className="text-sm font-medium text-gray-400">{name}</span>
    </div>
  </div>
);

const ScrollingRow = ({ testimonials, speed, reverse = false, rowKey }) => {
  const rowRef = useRef(null);
  const animationRef = useRef();

  useEffect(() => {
    const container = rowRef.current;
    if (!container) return;

    let position = reverse ? container.scrollWidth / 2 : 0;
    const maxScroll = container.scrollWidth / 2;

    const animate = () => {
      if (!container) return;

      position += reverse ? -speed : speed;

      if (reverse && position <= 0) position = maxScroll;
      else if (!reverse && position >= maxScroll) position = 0;

      container.scrollLeft = position;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [speed, reverse]);

  return (
    <div
      ref={rowRef}
      className="flex gap-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <div className="flex gap-6">
        {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
          <TestimonialCard key={`${rowKey}-${i}`} {...t} />
        ))}
      </div>
    </div>
  );
};

export default function Testimonials() {
  const row1Testimonials = testimonials.slice(0, 6);
  const row2Testimonials = testimonials.slice(6, 12);
  const row3Testimonials = testimonials.slice(10, 16);

  return (
    <section className="relative w-full bg-[#0b0b0b] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-5xl font-bold mb-4 text-white tracking-tight">
          What Clients Say
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">
          What people are saying about my work
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <ScrollingRow testimonials={row1Testimonials} speed={0.5} rowKey="row1" />
        <ScrollingRow testimonials={row2Testimonials} speed={0.7} reverse rowKey="row2" />
        <ScrollingRow testimonials={row3Testimonials} speed={0.6} rowKey="row3" />
      </div>

      {/* CTA Buttons at the bottom */}
      <div className="mt-16 text-center animate-fade-in-up">
        <p className="text-xl text-gray-400 mb-6 max-w-2xl mx-auto">
          Ready to elevate your project? Let's create something extraordinary together!
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="/contact"
            className="px-8 py-3 bg-white text-black font-bold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Hire Me
          </a>

        </div>
      </div>
    </section>
  );
}
