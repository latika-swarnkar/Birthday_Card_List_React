// /import './App.css';
import List from './List'
import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment, useState } from 'react'
import data from './data'
import "./App.css"
function App() {
  const [people, setPeople] = useState(data)
  return (
    <Fragment>
      <div className='container bg-light text-dark m-5 rounded border border-warning listcss'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button type="button" className='btn btn-danger btncustom' onClick={() => setPeople([])}>Clear</button>
      </div>
      {/* <br /><br /><br /> */}
    </Fragment>
  );
}

export default App;
