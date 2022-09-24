import WrappedListComponent from './Components/Test';
import './App.css';

var items = [
  {
    text:'Sample Text'
  },
  {
    text:'Sample Text'
  },
  {
    text:'Sample Text'
  },
  {
    text:'Sample Text'
  },
  {
    text:'Sample Text'
  },
]

function App() {
  return (
    <WrappedListComponent items={items}/>
  );
}

export default App;
