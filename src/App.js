import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import ContentFooter from './components/ContentFooter';
import NoteList from './components/NoteList';

function App() {

  return (
    <div className='App-header'>
      <div className='row '>
      </div>
      <div className='row'>
        <div className="col-5 ms-4">
          <header className="App" style={{ position: 'fixed' }}>
            <Header />
            <div style={{ height: 220, width: 500, backgroundColor: '#fff', borderRadius: '10px' }}>
              <Search />
            </div>
            <div>
              <ContentFooter />
            </div>
          </header >
        </div >
        <div className='col-6 mt-4'>
          <NoteList />
        </div>
      </div>
    </div>
  );
}

export default App;
