import React from "react";
import Navigation from "../Common/NavigationBar";
import Card from "../Common/Card";
import { Button } from "../Common/Button";

class Cars extends React.Component {
  render() {
    return (
      <div>
        <Navigation>
          <li class="nav-item active">
            <a class="nav-link" href="#!">
              Dashboard
              <span class="sr-only">(current)</span>
            </a>
          </li>
        </Navigation>
        <div class="row pb-3 pt-3 carinfo">
          <Card
            cardBorder={"card border-none mx-3 p-1"}
            cardStyle={{border:"none"}}
            image={<img class="card-img-top" src="https://free.clipartof.com/855-Free-Clipart-Of-A-Male-Avatar.jpg" alt="default-someone"/>}
            cardColClass={"col-sm-2 d-none d-lg-block"}
            username={"Username  "}
            email={"someone@email.com"}
          ></Card>
          <Card
            cardBorder={"card border-default mx-1"}
            cardColClass={"col-sm-3"}
            cardTitle={"Oober"}
            cardText={
              "With supporting text below as a natural lead-in to additional content"
            }
          >
            <Button className={"btn btn-info"}> View Car Details </Button>
          </Card>
          <Card
            cardBorder={"card border-default mx-1"}
            cardColClass={"col-sm-3"}
            cardTitle={"Oober"}
            cardText={
              "With supporting text below as a natural lead-in to additional content"
            }
          >
            <Button className={"btn btn-info"}> View Car Details </Button>
          </Card>
          <Card
            cardBorder={"card border-default mx-1"}
            cardColClass={"col-sm-3"}
            cardTitle={"Oober"}
            cardText={
              "With supporting text below as a natural lead-in to additional content"
            }
          >
            <Button className={"btn btn-info"}> View Car Details </Button>
          </Card>
        </div>
      </div>
    );
  }
}
export default Cars;
