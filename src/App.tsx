import { Route } from "@solidjs/router";
import "./index.css";
import HomePage from "./pages/HomePage";
import ResumePage from "./pages/ResumePage";

export default function App() {
  return (
    <>
      <Route path="/" component={HomePage} />
      <Route path="/resume" component={ResumePage} />
    </>
  );
}
