import { useTimersContext } from "../store/timer-context";
import Timer from "./Timer";

export default function Timers() {
  const { timers } = useTimersContext();
  return (
    <ul>
      {timers.map((c) => (
        <li key={c.name}>
          <Timer {...c} />
        </li>
      ))}
    </ul>
  );
}
