import { useParams } from "react-router-dom";

export default function TechDetail() {
  const { id } = useParams();

  // Normally this comes from API, for now hardcode:
  const items = [
    {
      id: 1,
      title: "React Tips & Patterns",
      image: "https://thumbs.dreamstime.com/b/react-js-inscription-against-laptop-code-background-learn-react-programming-language-computer-courses-training-react-js-202008646.jpg",
      price: "₹299",
      extra: "React uses a virtual DOM, supports hooks, and is widely used to build fast, interactive SPAs. Companies like Facebook and Instagram use React extensively.",
    },
    {
      id: 2,
      image: "https://d502jbuhuh9wk.cloudfront.net/courses/636a0431e4b00641d2596354/636a0431e4b00641d2596354_scaled_cover.jpg?v=3",
      title: "JavaScript Mastery",
      description: "Modern JS features, async patterns, and best practices you’ll actually use.",
      price: "₹249",
      extra: "Covers ES6+, promises, async/await, closures, and real-world project patterns for mastering JavaScript deeply."
    },
    {
      id: 3,
      image: "https://media.licdn.com/dms/image/v2/D5612AQFSkIcY0BIvAA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1733468258359?e=2147483647&v=beta&t=gAWREwZ4UJFezv0MAAM8kA75kN2GXoNPnCluJlKFtfA",
      title: "Node & APIs",
      description: "Design robust REST APIs with auth, validation, and clean architecture.",
      price: "₹349",
      extra: "Learn Express.js, JWT authentication, error handling, and best practices to build scalable backend services."
    },
    {
      id: 4,
      image: "https://www.risefuel.com/hubfs/UX-UI-1.jpeg",
      title: "UI Performance",
      description: "Measure, profile, and ship fast experiences across devices.",
      price: "₹199",
      extra: "Optimize Lighthouse scores, lazy-load assets, and implement code-splitting for lightning-fast UIs."
    },
    // Travel

    {
  id: 5,
  image: "https://travel.usnews.com/dims4/USNEWS/1497d28/2147483647/resize/600x400%5E%3E/crop/600x400/quality/85/format/webp/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FNew_Paris_pic_jw04ZlH.jpg",
  title: "Paris in 3 Days",
  description: "Museums, cafés, and hidden streets—your perfect short itinerary.",
  price: "₹499",
  extra: "Cover essentials like the Eiffel Tower, Louvre, and Montmartre, but also explore local cafés, hidden alleys, and take a sunset Seine cruise for a complete Parisian vibe."
},
    {
  id: 6,
  image: "https://t4.ftcdn.net/jpg/12/65/30/39/360_F_1265303968_GRk67y1DkR3ULXUNkfatMWssFBk5Zlrn.jpg",
  title: "Backpacking Himalayas",
  description: "Gear, trails, and safety tips for a breathtaking experience.",
  price: "₹399",
  extra: "Essential packing lists, acclimatization tips, and route guidance for treks like Manali–Leh and Annapurna. Focus on hydration, permits, and local culture for a safe adventure."
},
{
  id: 7,
  image: "https://img.traveltriangle.com/blog/wp-content/uploads/2023/03/Hidden-Places-In-Goa.jpg",
  title: "Goa Beach Guide",
  description: "The best beaches, food spots, and budget stays in Goa.",
  price: "₹299",
  extra: "North Goa for nightlife, South Goa for peace. Try Goan seafood, local shacks, flea markets, and hidden beaches like Butterfly and Cola for a mix of fun and relaxation."
},
{
  id: 8,
  image: "https://cdn.realestate.co.jp/app/uploads/2020/06/iStock-1152233837-1020x500.jpg",
  title: "Tokyo on a Budget",
  description: "Sushi, shrines, and savings—do Tokyo without burning cash.",
  price: "₹459",
  extra: "Stay in capsule hotels, use JR passes, explore free attractions like Senso-ji and Meiji Shrine, and eat at conveyor-belt sushi or 7-Eleven for affordable yet authentic meals."
},
{
  id: 9,
  image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1200&auto=format&fit=crop",
  title: "Healthy Habits",
  description: "Simple routines for better sleep, energy, and focus.",
  price: "₹199",
  extra: "Start mornings with hydration and light movement, follow consistent sleep schedules, and reduce screen time before bed. Small steps build strong, sustainable health routines."
},
{
  id: 10,
  image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop",
  title: "Minimalist Living",
  description: "Declutter your space and mind—live with intention.",
  price: "₹149",
  extra: "Adopt the ‘one in, one out’ rule, keep only items that spark joy, and prioritize experiences over possessions. Minimalism reduces stress and improves focus."
},
{
  id: 11,
  image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop",
  title: "Work-Life Balance",
  description: "Boundaries, breaks, and better planning for calmer days.",
  price: "₹179",
  extra: "Use time-blocking for focused work, schedule regular breaks, and disconnect digitally after work. Balance fosters productivity while maintaining mental well-being."
},
{
  id: 12,
  image: "https://merachfit.com/cdn/shop/articles/3-3.jpg?v=1704366966&width=2048",
  title: "Home Workouts",
  description: "Stay fit with quick routines—no equipment needed.",
  price: "₹129",
  extra: "Focus on bodyweight exercises like push-ups, squats, and planks. Follow 20-minute HIIT routines and mix yoga for flexibility. Great for busy lifestyles without gym access."
}
  ];

  const item = items.find(it => it.id === Number(id));

  if (!item) return <h2>Blog not found</h2>;

  return (  
    <section className="detail-page">
      <div className="wrapper">
        <h2>{item.title}</h2>
        <img src={item.image} alt={item.title} style={{ maxWidth: "500px" }} />
        <p><strong>Price:</strong> {item.price}</p>
        <p>{item.extra}</p>
      </div>
    </section>
  );
}
