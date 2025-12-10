import type { PropsWithChildren } from "react";

export type Goal = {
  id: number;
  title: string;
  description: string;
};

type CourseGoalProps = PropsWithChildren<{
  title: string;
}>;

const CourseGoals = ({ title, children }: CourseGoalProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
    </article>
  );
};

export default CourseGoals;
