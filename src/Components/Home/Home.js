import React from 'react';
import "./Home.css";
import logo3 from "../../img/arfat-3 (8).jpg"


const Home = () => {
      return (
            <div>

                  <section className="banner-container container-fluid">
                        <div className="row vh-100" id="home">
                              <div className="col-md-9 banner-column m-auto rounded-3">
                                                <img
                                                      className="home_img img-fluid rounded-circle m-auto d-block mt-5"
                                                      src={logo3}
                                                      alt=""
                                                />
                                                <div>
                                          <h1 className="text-center fw-bolder ms-5 mt-2 me-5 text-light">HI IAM ARIFUL ISLAM</h1>
                                          <p className="text-center fs-4 fw-bold mb-5 text-light">( I am a front end developer )</p>
                                    </div>
                              </div>
                        </div>
                  </section>
            </div>
      );
};

export default Home;