import "./App.css";
import AppRouters from "./components/router";
import DashboardContent from "./components/dashboard/Dashboard";
function App() {
  return (
    <div>
      <DashboardContent />
      <AppRouters></AppRouters>
    </div>
  );
}

export default App;
