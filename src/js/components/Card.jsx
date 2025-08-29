import React from "react";

function Card() {
  return (
    <div className="card-container">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="row p-0 row-cols-md-4 g-3">
            <div className="col ps-0">
              <div className="card text-center">
                <img src="https://placehold.co/500X325" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card text-center">
                <img src="https://placehold.co/500X325" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card text-center">
                <img src="https://placehold.co/500X325" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>

            <div className="col pe-0">
              <div className="card text-center">
                <img src="https://placehold.co/500X325" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>



          </div>
        </div>
      </div>

    </div>




  )
}

export default Card