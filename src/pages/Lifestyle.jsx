import Card from "../components/Card";

export default function Lifestyle() {
  const items = [
    {
      id:9,
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1200&auto=format&fit=crop",
      title: "Healthy Habits",
      description: "Simple routines for better sleep, energy, and focus.",
      price: "₹199"
    },
    {
      id:10,
      image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop",
      title: "Minimalist Living",
      description: "Declutter your space and mind—live with intention.",
      price: "₹149"
    },
    {
      id:11,
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop",
      title: "Work-Life Balance",
      description: "Boundaries, breaks, and better planning for calmer days.",
      price: "₹179"
    },
    {
      id:12,
      image: "https://merachfit.com/cdn/shop/articles/3-3.jpg?v=1704366966&width=2048",
      title: "Home Workouts",
      description: "Stay fit with quick routines—no equipment needed.",
      price: "₹129"
    }
  ];

  return (
    <section className="page">
      <div className="wrapper">
        <h2 className="page-title">Lifestyle Blogs</h2>
        <div className="card-grid">
          {items.map((it, i) => <Card key={i} {...it} />)}
        </div>
      </div>
    </section>
  );
}
