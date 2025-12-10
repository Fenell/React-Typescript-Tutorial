import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";
import { useState } from "react";
import NewGoal from "./components/NewGoal";
import CourseGoalList from "./components/CourseGoalList";

function App() {
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: "Learn TS",
      description: "Learn TS from the ground up",
    },
    {
      id: 2,
      title: "Practice TS",
      description: "Practice working with TS",
    },
  ]);

  const handleDeleteGoal = (id: number) => {
    setGoals((prev) => prev.filter((c) => c.id !== id));
  };

  const handleAddGoal = (text: string, summary: string) => {
    setGoals((prev) =>
      prev.concat({ id: Math.random(), title: text, description: summary })
    );
  };

  return (
    <>
      <main>
        <Header image={{ src: goalsImg, alt: "A list of goals" }}>
          <h1>Your Course Goals</h1>
        </Header>
        <NewGoal onAdd={handleAddGoal} />
        <CourseGoalList goals={goals} onDelete={handleDeleteGoal} />
      </main>
    </>
  );
}

export default App;
