import SessionItem from "./SessionItem";

type SessionListProps = {
  sessions: {
    id: string;
    title: string;
    summary: string;
    image: string;
  }[];
};

const SessionList = ({ sessions }: SessionListProps) => {
  return (
    <ul id="sessions-list">
      {sessions.map((session) => (
        <li id={session.id}>
          <SessionItem {...session} />
        </li>
      ))}
    </ul>
  );
};

export default SessionList;
