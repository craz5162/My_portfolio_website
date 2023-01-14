import React from 'react';
import "./Abouts.css";
import logo from "../../img/arfat-3 (6).png"

const Abouts = () => {
      return (
            <section class="back1">
            <div class="container">
                  <div class="row align-item-center" id="about">
                        <div class="col-12 col-sm-12 col-md-12 col-lg-8 margin-1">
                              
                              <div class="heding">
                                    <h2 class="fw-bolder text-dark">MD ARIFUL ISLAM</h2>
                                    <h5 class="fw-bolder text-dark">Birthday : (05/12/2004)</h5>
                                    <h5 class="fw-bolder text-dark">Below is something about me</h5>
                              </div>
                              
                              <div class="para">
                                    <p> <span class="a">A</span>ssalamualaikum, how are you, I hope you are well. Alhamdulillah I am fine too. The website you can see is my portfolio website. This website will tell you what I can do. And how many years should I work? So let's get started. ..</p>
                                    <p>I live in Bangladesh. I have parents and a brother. And I am a front end developer.</p>
                                    <p>Things I learned are html , css , javascript , react….</p>
                                    <p>These are the things I can do. I can make website, I can make portfolio website, I can design blocks, I can work in mx word, phd to html, figma to html, xd to html, I can do all these things Alhamdulillah. ...</p>
                                    <p>You can hire me if you want. Inshallah, I will try to give something good. .....
                                    Thank you all, have a good look.</p>
                              </div>
                              
                        </div>
                        
                        <div class=" d-flex justify-content-center  align-item-center col-12 col-sm-12 col-md-12 my-auto mx-auto ps-5 col-lg-4 ">
                              <img src={logo} class=" about_img img-fluid rounded-circle mx-auto d-block border border-light arfat mb-5" alt=""/>
                        </div>
                  </div>
            </div>
      </section>
      );
};

export default Abouts;