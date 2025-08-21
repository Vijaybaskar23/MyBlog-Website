import Card from "../components/Card";
import { useLocation } from "react-router-dom";

export default function Travel() {
  const items = [
    {
      id:5,
      image: "https://travel.usnews.com/dims4/USNEWS/1497d28/2147483647/resize/600x400%5E%3E/crop/600x400/quality/85/format/webp/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FNew_Paris_pic_jw04ZlH.jpg",
      title: "Paris in 3 Days",
      description: "Museums, cafés, and hidden streets—your perfect short itinerary.",
      price: "₹499"
    },
    {
      id:6,
      image: "https://t4.ftcdn.net/jpg/12/65/30/39/360_F_1265303968_GRk67y1DkR3ULXUNkfatMWssFBk5Zlrn.jpg",
      title: "Backpacking Himalayas",
      description: "Gear, trails, and safety tips for a breathtaking experience.",
      price: "₹399"
    },
    {
      id:7,
      image: "https://img.traveltriangle.com/blog/wp-content/uploads/2023/03/Hidden-Places-In-Goa.jpg",
      title: "Goa Beach Guide",
      description: "The best beaches, food spots, and budget stays in Goa.",
      price: "₹299"
    },
    {
      id:8,
      image: "https://cdn.realestate.co.jp/app/uploads/2020/06/iStock-1152233837-1020x500.jpg",
      title: "Tokyo on a Budget",
      description: "Sushi, shrines, and savings—do Tokyo without burning cash.",
      price: "₹459"
    }
  ];

  const query = new URLSearchParams(useLocation().search).get("search")?.toLowerCase();
  const filtered = query
    ? items.filter(it =>
        it.title.toLowerCase().includes(query) ||
        it.description.toLowerCase().includes(query)
      )
    : items;

  return (
    <section className="page">
          <div className="wrapper">
            <h2 className="page-title">Travel Blogs</h2>
            <div className="card-grid">
              {filtered.length > 0
                ? filtered.map((it) => (
                    <Card key={it.id} {...it} />
                  ))
                : <p>No results found.</p>}
            </div>
          </div>
        </section>
  );
}
