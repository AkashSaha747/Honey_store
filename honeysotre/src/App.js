import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Allroutes from './Routes/Allroutes'
import AppcontextProvider from './ContextProvider/AppcontextProvider';
function App() {

  return (
<>
<AppcontextProvider>

  <Navbar/>
  
  <Allroutes/>
</AppcontextProvider>
</>
  );
}

export default App;
