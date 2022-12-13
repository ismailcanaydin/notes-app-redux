import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import ContentFooter from './components/ContentFooter';
import NoteList from './components/NoteList';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Header />

        <div style={{ display: 'flex' }}>

          <div style={{ height: 300, width: 600, backgroundColor: '#fff', borderRadius: '10px' }}>
            <Search />

            <div>
              <ContentFooter />
            </div>

          </div>

          <NoteList />
        </div>
      </header >
    </div >
  );
}

export default App;
