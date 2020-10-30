import React from "react";
import { Jumbotron, Container, Form } from "reactstrap";
import "./home.css"

const Home = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid className="p-3">
          <h1 className="display-3">Welcome To carpooling website</h1>


          <p className="lead">
            This is a website for carpooling .



          </p>
          <br />


          <span className="principal-picture">
            <img src="/pictures/header-picture.gif" />
            </span>
          <p className="carpooling-informatin">Carpooling (also car-sharing, ride-sharing and lift-sharing) is the sharing of car journeys
          so that more than one person travels in a car,
                and prevents the need for others to have to drive to a location themselves.<br /><br />

                By having more people using one vehicle,<br />
                 carpooling reduces each person's travel costs such as: fuel costs,tolls,
                 and the stress of driving. <br />
                 Carpooling is also a more environmentally friendly and sustainable way to travel as sharing journeys reduces air pollution, carbon emissions, traffic congestion on the roads,
                  and the need for parking spaces.<br />
                   Authorities often encourage carpooling, especially during periods of high pollution or high fuel prices.<br />
                    Car sharing is a good way to use up the full seating capacity of a car,
                   which would otherwise remain unused if it were just the driver using the car.</p>

          <br />
          <br />


          <nav className="circle-condition">
            {/* <h1>Round Dots / Circles</h1> */}
            <span class="dot"><br /><p>1. Inscription</p><br />It's simple,
free and 100% secure</span>
            <span class="dot"><br /><p>2. Look for</p><br />Find carpools
everywhere in tunisia</span>
            <span class="dot"><br /><p>3. Carpool!</p><br />Save money</span>

          </nav>


          {/* <a href="" target="_blank">
            GithubLink
          </a> */}
        </Container>
      </Jumbotron>
    </div>
  );
};
export default Home;
