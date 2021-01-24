import React, {useState} from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Forecast from './components/Forecast';
import { Row, Container, Col } from "reactstrap";

function App() {

  const [selectedValue, setSelectedValue] = useState(null);

   // handle selection
  const handleSelected = value => {
    setSelectedValue(value);
  }

  return (
    <div className="App">
      <header>
        <Container>
          <div className="HeaderApp"><h1>Weather App</h1></div>
          <Row className="SearchApp">
            <Col xs={{size: 6, offset: 3}}>
              <SearchBar 
                handleSelected={handleSelected}
              />
            </Col>
          </Row>
         {selectedValue !== null && <Row>
            <Col xs={{size: 12, offset: 1}}>
              <Forecast 
                selectedValue={selectedValue}
              />
            </Col>
         </Row>}
        </Container>
      </header>
    </div>
  );
}

export default App;
