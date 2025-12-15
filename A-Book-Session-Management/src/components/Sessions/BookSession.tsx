import { useEffect, useRef, type FormEvent } from "react";
import type { ModalHandle } from "../../UI/Modal";
import Modal from "../../UI/Modal";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import { useSessionContext, type Session } from "../../store/session-context";

type BookSessionProps = {
  session: Session;
  onDone: () => void;
};

const BookSession = ({ session, onDone }: BookSessionProps) => {
  const modal = useRef<ModalHandle>(null);
  const sessionCtx = useSessionContext();

  useEffect(() => {
    if (modal.current) {
      modal.current.open();
    }
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
    sessionCtx.bookSession(session);
    onDone();
  };

  return (
    <Modal ref={modal} onClose={onDone}>
      <h2>Book Session</h2>
      <form onSubmit={handleSubmit}>
        <Input id="name" name="name" label="Your name" />
        <Input id="email" name="email" label="Your email" />
        <p className="actions">
          <Button type="button" textOnly onClick={onDone}>
            Cancel
          </Button>
          <Button>Book Session</Button>
        </p>
      </form>
    </Modal>
  );
};

export default BookSession;
