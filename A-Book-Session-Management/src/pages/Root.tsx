import { Outlet } from "react-router";
import MainHeader from "../components/Navigation/MainHeader";
import { SessionContextProvider } from "../store/session-context";

export default function Root() {
  return (
    <SessionContextProvider>
      {/* Todo: Add Header */}
      <MainHeader />
      <Outlet />
    </SessionContextProvider>
  );
}
