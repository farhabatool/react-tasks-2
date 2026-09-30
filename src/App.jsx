import { useState } from "react";

function ProductCard({ title, price, category }) {
  return (
    <div className="product-card">
      <h2>{title}</h2>
      <p>Price: ${price}</p>
      <p>Category: {category}</p>
    </div>
  );
}

function LikeButton() {
  const [likes, setLikes] = useState(0);

  function handleLike() {
    setLikes(likes + 1);
  }

  return (
    <div className="like-section">
      <h2>Like Button</h2>
      <button onClick={handleLike}>
        Like ❤️ {likes}
      </button>
    </div>
  );
}

function App() {
  const students = [
    { id: 1, name: "Ali", score: 75 },
    { id: 2, name: "Sara", score: 45 },
    { id: 3, name: "Ahmed", score: 60 },
    { id: 4, name: "Ayesha", score: 35 }
  ];

  return (
    <div className="app">
      <h1>React Tasks</h1>

      <h2>Task 1: Products</h2>

      <ProductCard
        title="Laptop"
        price="800"
        category="Electronics"
      />

      <ProductCard
        title="Headphones"
        price="100"
        category="Accessories"
      />

      <h2>Task 2: Like Button</h2>

      <LikeButton />

      <h2>Task 3: Students</h2>

      <div className="students">
        {students.map((student) => (
          <div className="student-card" key={student.id}>
            <h3>{student.name}</h3>

            <p>Score: {student.score}</p>

            {student.score >= 50 ? (
              <p className="pass">Pass</p>
            ) : (
              <p className="fail">Fail</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;