import React from "react";

function Card({ cardInfo }) {
  return (
    <div className="card-container">
      <div className="col ps-0">
        <div className="card text-center">
          <img src={cardInfo.img} alt="" />
          <div className="card-body">
            <div className="">
              <h5 className="card-title">{cardInfo.title} </h5>
              <p className="card-text"> {cardInfo.description} </p>
            </div>

            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card