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
