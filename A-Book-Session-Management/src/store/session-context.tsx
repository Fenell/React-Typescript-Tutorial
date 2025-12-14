import { createContext, useContext, useReducer, type ReactNode } from "react";

export type Session = {
  id: string;
  title: string;
  summary: string;
  description: string;
  date: string;
  image: string;
  duration: number;
};

type SessionState = {
  upcommingSessions: Session[];
};

interface BookSessionAction {
  type: "BOOK_SESSSION";
  session: Session;
}

interface CancelSessionAction {
  type: "CANCEL_SESSION";
  sessionId: string;
}

type SessionAction = BookSessionAction | CancelSessionAction;

type SessionContextValue = SessionState & {
  bookSession: (session: Session) => void;
  cancelSession: (sessionId: string) => void;
};

const sessionReducer = (
  state: SessionState,
  action: SessionAction
): SessionState => {
  if (action.type === "BOOK_SESSSION") {
    if (state.upcommingSessions.some((c) => c.id == action.session.id)) {
      return state;
    }
    return {
      upcommingSessions: state.upcommingSessions.concat(action.session),
    };
  }

  if (action.type === "CANCEL_SESSION") {
    return {
      upcommingSessions: state.upcommingSessions.filter(
        (c) => c.id !== action.sessionId
      ),
    };
  }

  return state;
};

// const initialState: SessionState = { upcommingSessions: [] };

export const SessionContext = createContext<SessionContextValue | null>(null);

export const useSessionContext = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error(
      "useSessionsContext must be used within a SessionsContextProvider"
    );
  }

  return context;
};

export const SessionContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [sessionState, dispatch] = useReducer(sessionReducer, {
    upcommingSessions: [],
  });

  const bookSession = (session: Session) => {
    dispatch({ type: "BOOK_SESSSION", session });
  };

  const cancelSession = (sessionId: string) => {
    dispatch({ type: "CANCEL_SESSION", sessionId });
  };

  const ctx: SessionContextValue = {
    upcommingSessions: sessionState.upcommingSessions,
    bookSession,
    cancelSession,
  };

  return (
    <SessionContext.Provider value={ctx}>{children}</SessionContext.Provider>
  );
};
