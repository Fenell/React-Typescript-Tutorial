import { useEffect, useRef } from "react";
import { useSessionContext } from "../../store/session-context";
import type { ModalHandle } from "../../UI/Modal";
import Modal from "../../UI/Modal";
import UpcommingSession from "./UpcommingSession";

type UpcomingSessionsProps = {
  onClose: () => void; // onClose is accepted to "tell" the parent component that the UpcomingSessions component should be removed from the DOM
};

const UpcommingSessions = ({ onClose }: UpcomingSessionsProps) => {
  const sessionCtx = useSessionContext();
  const modal = useRef<ModalHandle>(null);

  useEffect(() => {
    if (modal.current) {
      modal.current.open();
    }
  }, []);

  const hasSession = sessionCtx.upcommingSessions.length > 0;

  const handleCancelSession = (id: string) => {
    sessionCtx.cancelSession(id);
  };

  return (
    <Modal ref={modal} onClose={onClose}>
      <h2>Upcomming Session</h2>
      {hasSession && (
        <ul>
          {sessionCtx.upcommingSessions.map((c) => (
            <li key={c.id}>
              <UpcommingSession
                session={c}
                onCancel={() => handleCancelSession(c.id)}
              />
            </li>
          ))}
        </ul>
      )}
    </Modal>
  );
};

export default UpcommingSessions;
