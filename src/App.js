import LocalStateComponent from './components/LocalStateComponent';
import ReduxReactAdvancedComponent from './components/ReduxReactAdvancedComponent';
import ReduxStateComponent from './components/ReduxStateComponent';

function App() {
  return (
    <div className='App'>
      <LocalStateComponent />
      <hr />
      <ReduxStateComponent />
      <hr />
      <ReduxReactAdvancedComponent />
    </div>
  );
}

export default App;
