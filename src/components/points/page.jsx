import Article from "./components/article";
import "./points.css";

const articlesAvailables = [
  {
    id: 1,
    name: "backpack",
    image: "/backpack.jpg",
    price: 20000,
    priceInPoints: 4000,
  },
  {
    id: 2,
    name: "thermos",
    image: "/thermos.jpg",
    price: 22000,
    priceInPoints: 2800,
  },
  {
    id: 3,
    name: "jacket",
    image: "/jacket.jpg",
    price: 40000,
    priceInPoints: 5000,
  },
  {
    id: 1,
    name: "backpack",
    image: "/backpack.jpg",
    price: 20000,
    priceInPoints: 4000,
  },
  {
    id: 2,
    name: "thermos",
    image: "/thermos.jpg",
    price: 22000,
    priceInPoints: 2800,
  },
  {
    id: 3,
    name: "jacket",
    image: "/jacket.jpg",
    price: 40000,
    priceInPoints: 5000,
  },
];

const Points = () => {
  return (
    <main className="points">
      <h1>Points</h1>
      <aside>
        {articlesAvailables.map((article) => (
          <Article {...article} key={article.id} />
        ))}
      </aside>
    </main>
  );
};

export default Points;
