export const SALON = {
  name: "Opera Prime salon",
  tagline: "Every visit, an experience.",
  phoneDisplay: "+91 98268 12345",
  phoneRaw: "919826812345",
  phoneTel: "+919826812345",
  address: "Raj Bhawan Road Chowk, Moti Bagh, Civil Lines, Raipur, Chhattisgarh 492001",
  hoursShort: "Mon–Sat 10:30 AM – 8:00 PM",
  hoursLong: "Monday to Saturday · 10:30 AM – 8:00 PM · Sunday by appointment",
  rating: "4.7",
  reviews: "1,900+",
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
  mapsEmbed:
    "https://www.google.com/maps?q=Raj+Bhawan+Road+Chowk,+Moti+Bagh,+Civil+Lines,+Raipur,+Chhattisgarh+492001&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Opera+Prime+Salon+Raj+Bhawan+Road+Chowk+Moti+Bagh+Civil+Lines+Raipur",
};

export const HERO_IMAGE =
  "https://images.pexels.com/photos/7195803/pexels-photo-7195803.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=1800";

export const TEAM = [
  {
    name: "Ishita Vaswani",
    role: "Creative Director",
    specialty: "Bridal & editorial styling",
    photo:
      "https://images.pexels.com/photos/29096366/pexels-photo-29096366.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700",
  },
  {
    name: "Rohan Khatri",
    role: "Senior Hair Artist",
    specialty: "Precision cuts & colour",
    photo:
      "https://images.unsplash.com/photo-1633381521050-26bb467d9d5a?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=700",
  },
  {
    name: "Priya Menon",
    role: "Skin Therapist",
    specialty: "Advanced facials & peels",
    photo:
      "https://images.pexels.com/photos/28743778/pexels-photo-28743778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700",
  },
  {
    name: "Amaan Sheikh",
    role: "Brow & Lash Specialist",
    specialty: "Threading & extensions",
    photo:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=700",
  },
];

export const GALLERY = [
  "https://images.unsplash.com/photo-1560869713-7d0a29430803?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1200",
  "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=900",
  "https://images.unsplash.com/photo-1734111719430-fe4a3973f8af?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=900",
  "https://images.pexels.com/photos/13068380/pexels-photo-13068380.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  "https://images.pexels.com/photos/9146381/pexels-photo-9146381.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  "https://images.pexels.com/photos/20046793/pexels-photo-20046793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
];

export const TESTIMONIALS = [
  {
    name: "Aarohi S.",
    quote:
      "The bridal package was worth every rupee. The team started prepping my skin six weeks out — I glowed on the day.",
  },
  {
    name: "Vikram R.",
    quote:
      "Best haircut I've had in Raipur. Rohan actually listens. Two visits in and I'm a member now.",
  },
  {
    name: "Meher K.",
    quote:
      "Lash extensions look natural and lasted five weeks. The studio feels like a boutique, not a salon.",
  },
  {
    name: "Zara P.",
    quote:
      "Their signature gold facial pulled my skin back from a rough month. Booking again next week.",
  },
];

export const FAQS = [
  {
    q: "How do I book an appointment?",
    a: "Use the booking form on this page, WhatsApp us, or call. We confirm every slot within an hour during working hours.",
  },
  {
    q: "What are your hours?",
    a: "Monday to Saturday, 10:30 AM to 8:00 PM. Sundays run by appointment only for bridal and members.",
  },
  {
    q: "Do you offer bridal packages?",
    a: "Yes. Our Bridal Radiance Package covers skin prep over six weeks, a hair trial and full day-of styling.",
  },
  {
    q: "Is there parking nearby?",
    a: "Free street parking is available along Raj Bhawan Road. Valet is offered for bridal appointments on request.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Reschedule up to 4 hours before your slot. Same-day cancellations after that are charged 20% of the service.",
  },
];

export function whatsappLink(message) {
  const encoded = encodeURIComponent(message || "Hi Opera Prime, I'd like to book an appointment.");
  return `https://wa.me/${SALON.phoneRaw}?text=${encoded}`;
}
