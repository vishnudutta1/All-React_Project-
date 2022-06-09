import logo from './logo.svg';
import './App.css';
import NoteInput from './components/NoteInput';
import Header from './components/Header';
import Content from './components/Content';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Header/>
      <NoteInput/>
      <Content/>
     <Search/>
  
    </div>
  );
}

export default App;
