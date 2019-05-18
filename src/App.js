import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';

import {loadNasa} from './store/actions/index'
import {getAllNasaSelector, getPayloadLengthSelector} from './store/selectors'

const renderItem = (item, lengthPayload) => {
  return (
    <li key={item.flight_number}>
        <div>
        "flight_number": {item.flight_number},
        <br />
        "mission_name": {item.mission_name},
        <br />
        "payloads_count": {() => lengthPayload(1)}
        <hr />
      </div>
    </li>
  )
}

const App = ({items, loadNasa, lengthPayload}) => {
  useEffect(() => {
    loadNasa()
  }, [])
  return (
    <div className="App">
      {console.log('App', items)}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          NASA API TEST
        </p>
      </header>
      <main>
      <div className="card">
        <ul className="list-group list-group-flush">
          {items && items.map(item => renderItem(item, lengthPayload))}
        </ul>
      </div>
      </main>
    </div>
  );
}

export default connect((state, ownProps) => {
  return ({
      items: getAllNasaSelector(state),
      lengthPayload: getPayloadLengthSelector(state, ownProps)
  });
}, {
  loadNasa
})(App)
