import MissionFeeds from "./pages/MissionFeeds.component";
import LangSwitcher from "./components/LangSwitcher/LangSwitcher.component";
import './App.less';

function App() {
  return (
    <div>
      <LangSwitcher />
      <MissionFeeds />
    </div>
  );
}

export default App;
