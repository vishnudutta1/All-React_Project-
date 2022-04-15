import logo from './logo.svg';
import './App.css';

import Square from './components/Square';

function App() {
  return (
    <div className="App">
  <p className='Hading'>TIC TAC TOE</p>

    <div className='row-jc-center'>
      <Square className="Design-span"/>
      <Square className="Design-span"/>
      <Square className="Design-span"/>
     
    </div>

    <div className='row-jc-center'>
    <Square/>
    <Square/>
    <Square/>
    
    </div>

    <div className='row-jc-center'>
    <Square/>
    <Square/>
    <Square/>
    
    </div>


    </div>
  );
}

export default App;
