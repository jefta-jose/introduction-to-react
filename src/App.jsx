import './App.css';
import Logo from './assets/Components/Tittle';
import Main from './assets/Components/Main';

function App() {
  return (
    <>
      <div className='body'>
        <div>
          <img src='./images/logo.svg' />
        </div>
        <div className='main-container'>
          <div className='main'>
            <Main />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
