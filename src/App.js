
import './App.css';
import { ApplicationContextProvider } from './Context';
import { AppRoutes } from './Routes/App-routes';

function App() {
  return (
    <div className="App">
    <ApplicationContextProvider>
     <AppRoutes/>
    </ApplicationContextProvider>
    </div>
  );
}

export default App;
