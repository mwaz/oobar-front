import React from 'react'

const Card = (props) => {
    return(
        <div className={props.cardColClass} key={props.index}>
            <div className={props.cardBorder} style={props.cardStyle}>
                {props.image}
              <div className="card-body">
                <h5 className="card-title">{props.cardTitle}</h5>
                <p className="card-text">
                 {props.username}
                 {props.email}
                 {props.cardText}
                </p>
                {props.children}
              </div>
            </div>
          </div>
    )
}

export default Card 
