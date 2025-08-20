import { useParams ,Link} from "react-router-dom";

export default function TechDetail() {
  const { id } = useParams();


  // Normally this comes from API, for now hardcode:
  const items = [
    {
      id: 1,
      title: "React Tips & Patterns",
      image: "https://thumbs.dreamstime.com/b/react-js-inscription-against-laptop-code-background-learn-react-programming-language-computer-courses-training-react-js-202008646.jpg",
      price: "₹299",
      extra: "React is a powerful library that uses a virtual DOM for fast updates and rendering. It allows developers to break UI into reusable components, making projects easier to maintain. Hooks like useState and useEffect simplify state and lifecycle management.\n\nReact’s ecosystem includes tools like React Router, Redux, and Next.js, which enhance functionality for routing, state management, and server-side rendering.\n\n• Write reusable UI components.\n• Use hooks for clean state management.\n• Improve SEO with Next.js and server-side rendering."
,
    },
    {
      id: 2,
      image: "https://d502jbuhuh9wk.cloudfront.net/courses/636a0431e4b00641d2596354/636a0431e4b00641d2596354_scaled_cover.jpg?v=3",
      title: "JavaScript Mastery",
      description: "Modern JS features, async patterns, and best practices you’ll actually use.",
      price: "₹249",
      extra: "JavaScript ES6+ introduces modern syntax like arrow functions, template literals, and promises. These features make code more readable and easier to maintain while supporting asynchronous programming.\n\nAsync/await helps handle API calls seamlessly, and modules allow for clean code organization. Mastering these features makes your applications faster and scalable.\n\n• Use let/const instead of var.\n• Learn async/await for API requests.\n• Break large projects into modules for maintainability."

    },
    {
      id: 3,
      image: "https://media.licdn.com/dms/image/v2/D5612AQFSkIcY0BIvAA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1733468258359?e=2147483647&v=beta&t=gAWREwZ4UJFezv0MAAM8kA75kN2GXoNPnCluJlKFtfA",
      title: "Node & APIs",
      description: "Design robust REST APIs with auth, validation, and clean architecture.",
      price: "₹349",
      extra: "CSS Flexbox and Grid provide modern layout systems for creating responsive designs. Flexbox is ideal for one-dimensional layouts, while Grid handles complex two-dimensional structures with precision.\n\nMedia queries allow developers to adapt designs across devices, ensuring websites are mobile-friendly and accessible to all users.\n\n• Use Flexbox for navigation bars.\n• Apply CSS Grid for complex page layouts.\n• Combine with media queries for full responsiveness."

    },
    {
      id: 4,
      image: "https://www.risefuel.com/hubfs/UX-UI-1.jpeg",
      title: "UI Performance",
      description: "Measure, profile, and ship fast experiences across devices.",
      price: "₹199",
      extra: "UI performance determines how smooth and fast an application feels to users. Lazy-loading images, minimizing bundle size, and caching static files reduce page load time significantly.\n\nOptimizing for performance not only improves user satisfaction but also boosts SEO rankings, as search engines prioritize faster sites.\n\n• Optimize images with modern formats (WebP/AVIF).\n• Split JavaScript bundles with code-splitting.\n• Monitor with Lighthouse and Web Vitals."

    },
    // Travel

    {
  id: 5,
  image: "https://travel.usnews.com/dims4/USNEWS/1497d28/2147483647/resize/600x400%5E%3E/crop/600x400/quality/85/format/webp/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FNew_Paris_pic_jw04ZlH.jpg",
  title: "Paris in 3 Days",
  description: "Museums, cafés, and hidden streets—your perfect short itinerary.",
  price: "₹499",
  extra: "Paris is a dream destination with art, history, and food around every corner. In just 3 days, you can experience iconic landmarks like the Eiffel Tower, the Louvre, and Montmartre.\n\nBeyond the classics, Paris offers cozy cafés, hidden alleys, and breathtaking sunset views along the Seine. A short trip can still feel magical if planned smartly.\n\n• Day 1: Explore Louvre, Notre Dame, and Seine cruise.\n• Day 2: Visit Eiffel Tower, Arc de Triomphe, and Champs-Élysées.\n• Day 3: Montmartre, Sacré-Cœur, and local street cafés."

},
    {
  id: 6,
  image: "https://t4.ftcdn.net/jpg/12/65/30/39/360_F_1265303968_GRk67y1DkR3ULXUNkfatMWssFBk5Zlrn.jpg",
  title: "Backpacking Himalayas",
  description: "Gear, trails, and safety tips for a breathtaking experience.",
  price: "₹399",
  extra: "The Himalayas offer one of the most thrilling backpacking experiences in the world. Treks range from beginner-friendly routes to challenging expeditions across high-altitude passes.\n\nProper gear, acclimatization, and planning are essential to enjoy the breathtaking views safely. The journey rewards you with unique cultural experiences and unforgettable landscapes.\n\n• Carry lightweight and waterproof gear.\n• Stay hydrated and acclimatize slowly.\n• Respect local customs and natural surroundings."

},
{
  id: 7,
  image: "https://img.traveltriangle.com/blog/wp-content/uploads/2023/03/Hidden-Places-In-Goa.jpg",
  title: "Goa Beach Guide",
  description: "The best beaches, food spots, and budget stays in Goa.",
  price: "₹299",
  extra: "Goa is famous for its sun-kissed beaches, vibrant nightlife, and Portuguese heritage. Beyond the popular spots, Goa hides serene backwaters, spice plantations, and offbeat beaches.\n\nTravelers can enjoy budget-friendly hostels, beach shacks, and authentic Goan cuisine while exploring the lively culture.\n\n• Visit Baga, Anjuna, and Palolem beaches.\n• Try water sports like parasailing and scuba diving.\n• Enjoy seafood thalis and beachside cafés."

},
{
  id: 8,
  image: "https://cdn.realestate.co.jp/app/uploads/2020/06/iStock-1152233837-1020x500.jpg",
  title: "Tokyo on a Budget",
  description: "Sushi, shrines, and savings—do Tokyo without burning cash.",
  price: "₹459",
  extra: "Tokyo blends modern innovation with ancient traditions, offering travelers unique cultural experiences. Despite its reputation for being expensive, Tokyo can be explored on a budget with careful planning.\n\nStreet food stalls, capsule hotels, and free-entry shrines make it accessible without overspending. Public transport ensures smooth city exploration.\n\n• Visit Senso-ji Temple and Meiji Shrine.\n• Explore Tsukiji Market for budget sushi.\n• Use JR Pass and metro day passes to save money."

},
{
  id: 9,
  image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1200&auto=format&fit=crop",
  title: "Healthy Habits",
  description: "Simple routines for better sleep, energy, and focus.",
  price: "₹199",
  extra: "Healthy habits build the foundation for long-term well-being. Good sleep, regular exercise, and mindful eating improve energy and focus.\n\nSimple daily routines like hydration, stretching, and journaling create lasting positive changes for body and mind.\n\n• Drink 8 glasses of water daily.\n• Aim for 7–8 hours of quality sleep.\n• Practice mindfulness or meditation for 10 minutes."

},
{
  id: 10,
  image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop",
  title: "Minimalist Living",
  description: "Declutter your space and mind—live with intention.",
  price: "₹149",
  extra: "Minimalist living focuses on owning less but living more intentionally. By decluttering your space, you gain clarity and reduce stress.\n\nThis lifestyle also emphasizes sustainability and financial freedom, as fewer purchases mean less waste and mindful spending.\n\n• Declutter one room at a time.\n• Donate items you don’t use in 6 months.\n• Prioritize quality over quantity."

},
{
  id: 11,
  image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop",
  title: "Work-Life Balance",
  description: "Boundaries, breaks, and better planning for calmer days.",
  price: "₹179",
  extra: "Work-life balance is crucial in today’s fast-paced world. Setting boundaries helps reduce burnout and allows you to recharge.\n\nEffective time management ensures productivity without sacrificing personal happiness or family time.\n\n• Schedule daily breaks to refresh your mind.\n• Avoid working beyond office hours.\n• Use planners or apps to manage tasks effectively."

},
{
  id: 12,
  image: "https://merachfit.com/cdn/shop/articles/3-3.jpg?v=1704366966&width=2048",
  title: "Home Workouts",
  description: "Stay fit with quick routines—no equipment needed.",
  price: "₹129",
  extra: "Home workouts make fitness accessible without expensive equipment. Simple routines using body weight can be just as effective as gym sessions.\n\nConsistency is key, and short daily workouts improve strength, flexibility, and overall health.\n\n• Try push-ups, squats, and planks.\n• Use resistance bands for variety.\n• Set small fitness goals and track progress."

}
  ];

  const item = items.find((it) => it.id === Number(id));
  if (!item) return <h2 className="text-center mt-5">Item not found</h2>;

 return (
    <section className="detail-page">
      <div style={{ display: "flex", minHeight: "80vh" }}>
        
        {/* Left Column (Image) */}
        <div style={{ flex: "1", padding: "20px" }}>
          <img 
            src={item.image} 
            alt={item.title} 
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }}
          />
        </div>

        {/* Right Column (Content) */}
        <div style={{ flex: "1", padding: "20px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h2>{item.title}</h2>
          <p><strong>Price:</strong> {item.price}</p>
          <p>{item.extra}</p>

          <Link to="/" style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "10px 20px",
            background: "#007bff",
            color: "#fff",
            borderRadius: "5px",
            textDecoration: "none",
            width: "fit-content"
          }}>
            ← Back to Home
          </Link>
        </div>

      </div>
    </section>
  );
}
