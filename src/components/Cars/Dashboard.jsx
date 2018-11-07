import React from "react";
import Navigation from "../Common/NavigationBar";
import Card from "../Common/Card";
import { Button } from "../Common/Button";
import {getCars} from '../../redux/actions/carActionCreators/carCRUD'
import {connect} from 'react-redux';

class Cars extends React.Component {

  componentDidMount(){
    this.props.getCars()
  }
  render() {
    const { cars } = this.props
    console.log(cars, 'cars object')
    return (
      <div>
        <Navigation>
          <li className="nav-item active">
            <a className="nav-link" href="#!">
              Dashboard
              <span className="sr-only">(current)</span>
            </a>
          </li>
        </Navigation>
       
        <div className="row pb-3 pt-3 carinfo">
        <ul className="list-group">
          <Card
            cardBorder={"card border-none mx-3 p-1"}
            cardStyle={{border:"none"}}
            image={<img className="card-img-top" src="https://free.clipartof.com/855-Free-Clipart-Of-A-Male-Avatar.jpg" alt="default-someone"/>}
            cardColClass={"col-sm-2 d-none d-lg-block"}
            username={ `User: ${ localStorage.username ||  '<Root User>' }`}
          ></Card>
          </ul>
          {
            cars ? cars.map((car, index)=> (
          <Card
          index={index}  
          cardBorder={"card border-default mx-1"}
            cardColClass={"col-sm-3"}
            cardTitle={`${car.carName} - ${car.model}`}
            cardText={
              `Type: ${car.type} ${"\n"} Capacity: ${car.capacity}`
            }
          >
            <Button className={"btn btn-secondary "}> View Car Details </Button>
          </Card>
            
            ))
            :
            <div> Nothing here</div>
        }
        </div>
      </div>
    );
  }
}

function mapStatetoProps(state){
  console.log(state.cars, 'this is the state')
  return {
    cars: state.cars.carObject,
  }
}

export default connect(mapStatetoProps, {getCars})(Cars);
