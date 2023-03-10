import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

import "./App.css";

function App() {
  const [peoples, setPeoples] = useState([]);
  const [search, setSearch] = useState("");

  const urlApi = "https://swapi.dev/api/people";

  useEffect(() => {
    fetch(urlApi)
      .then((response) => response.json())
      .then((data) => setPeoples(data.results));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const filteredData = () => (
    !search
    ? peoples
    : peoples
        .filter((items) => items.name.toLowerCase)
        .includes(search.toLowerCase)
  )
    

  return (
    <div className="App">
      <header>
        <Form className="d-flex" onSubmit={handleSubmit}>
          <Form.Control
            onChange={handleChange}
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </header>

      <main>
        {filteredData().map((people,id) => {
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Body key={id}>
                <Card.Title>{people.name}</Card.Title>
                <Card.Text>
                  <p>{people.height}</p>
                  <p>{people.hair_color}</p>
                  <p>{people.skin_color} </p>
                  <p>{people.eye_color} </p>
                  <p>{people.birth_year} </p>
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </main>
    </div>
  );
}

export default App;
