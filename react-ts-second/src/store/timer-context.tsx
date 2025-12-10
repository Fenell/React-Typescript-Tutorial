import { createContext, useContext, useReducer, type ReactNode } from "react";

export interface Timer {
  name: string;
  duration: number;
}

interface TimerState {
  isRunning: boolean;
  timers: Timer[];
}

const initialState: TimerState = {
  isRunning: true,
  timers: [],
};

type TimersContextValue = TimerState & {
  addTimer: (timerData: Timer) => void;
  startTimer: () => void;
  stopTimer: () => void;
};

const TimerContext = createContext<TimersContextValue | null>(null);

export const useTimersContext = () => {
  const timersCtx = useContext(TimerContext);
  if (timersCtx === null) {
    throw new Error("TimersContext is null - that should not be the case!!");
  }

  return timersCtx;
};

interface TimerContexProviderProps {
  children: ReactNode;
}

interface AddTimerAction {
  type: "ADD_TIMERS";
  payload: Timer;
}
interface StartTimerAction {
  type: "START_TIMERS";
}
interface StopTimerAction {
  type: "STOP_TIMERS";
}

type Action = AddTimerAction | StartTimerAction | StopTimerAction;

// interface Action {
//   type: "ADD_TIMERS" | "START_TIMERS" | "STOP_TIMERS";
//   // payload?: Timer;
// }

const timersReducer = (state: TimerState, action: Action): TimerState => {
  if (action.type === "START_TIMERS") {
    return {
      ...state,
      isRunning: true,
    };
  }
  if (action.type === "STOP_TIMERS") {
    return {
      ...state,
      isRunning: false,
    };
  }
  if (action.type === "ADD_TIMERS") {
    return {
      ...state,
      timers: [
        ...state.timers,
        { name: action.payload.name, duration: action.payload.duration },
      ],
    };
  }

  return state;
};

const TimersContextProvider = ({ children }: TimerContexProviderProps) => {
  const [timersState, dispatch] = useReducer(timersReducer, initialState);
  const ctx: TimersContextValue = {
    timers: timersState.timers,
    isRunning: timersState.isRunning,
    addTimer(timerData) {
      dispatch({ type: "ADD_TIMERS", payload: timerData });
    },
    startTimer() {
      dispatch({ type: "START_TIMERS" });
    },
    stopTimer() {
      dispatch({ type: "STOP_TIMERS" });
    },
  };

  return <TimerContext.Provider value={ctx}>{children}</TimerContext.Provider>;
};

export default TimersContextProvider;
