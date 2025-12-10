import type { ReactNode } from "react";
import CourseGoals, { type Goal } from "./CourseGoals";
import InfoBox from "./InfoBox";

interface CourseGoalListProps {
  goals: Goal[];
  onDelete: (id: number) => void;
}

const CourseGoalList = ({ goals, onDelete }: CourseGoalListProps) => {
  let warningBox: ReactNode;
  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }

  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">You have no course yet. Start adding some!</InfoBox>
    );
  }
  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoals title={goal.title}>
              <p>{goal.description}</p>
              <button onClick={() => onDelete(goal.id)}>Delete</button>
            </CourseGoals>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseGoalList;
