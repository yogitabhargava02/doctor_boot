import React from 'react';
import './Home.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HomeImage from '../assets/images/HomeImage.png';
import FooterImage from '../assets/images/FooterImage.jpg';
import SectionTwo from '../assets/images/SectionTwo.png';

const Home = () => {
  return (
    <div className="page-content">
     <div className="top-bar bg-skyrgb(6, 173, 239) text-black d-flex justify-content-between align-items-center p-2">
  <div className="top-bar-left d-flex align-items-center ml">
    <i className="fa fa-clock mr-2"></i>
    <p className="mb-0">We are open 24/7</p>
    <span className="separator">|</span>
    <p className="mb-0">mail.bisnes@gmail.com</p>
  </div>
  <div className="top-bar-icons"> {/* Added ml-2 for left margin */}
    <a href="#"><i className="fa fa-twitter text-black "></i></a>
    <a href="#"><i className="fa fa-linkedin text-black"></i></a>
    <a href="#"><i className="fa fa-facebook text-black"></i></a>
    <a href="#"><i className="fa fa-instagram text-black"></i></a>
  </div>
</div>


     
      <div className="container-bg">
        <div className="container">
          <div className="row align-items-start">
            <div className="col text-left">
              <div className="mb-4 ml-4">
                <p className="text-justify">Lorem In enim qui ullamco dolore veniam mollit.</p>
                <h1>We Are Consulting For Your Business Finances</h1>
              </div>
              <p className="text-justify">
                LoremTempor eiusmod aute culpa voluptate. Et occaecat fugiat moqui ex nostrud tempor non ad fugiat
                ametoccaecat esse consequat. Labore deserunt veniam minim esse ut aliquip proident labore. Qui
                exercitation elit et isi culpa laborum magna do non reprehenderit qui aute occaecat aliquip.
              </p>
              <button className="btn btn-primary">Start Now</button>
            </div>
            <div className="col">
              <img src={HomeImage} alt="Description of the image" />
            </div>
          </div>
        </div>
      </div>

     
      <div className="container sectiontwo">
        <div className="container">
          <div className="row align-items-start">
            <div className="col">
              <h2>We Have Many Years Experience in Consulting Business</h2>
              <p>
                LoremCommodo mprehenderit Lorem Ipsum tempor excepteur consequat fugiat ullamco ipsum ut. Consequat irure
                eiusmod sunt irure sint elit dolore cillum labore ullamco proident occaecat occaecat. Dolor qui nostrud id
                officia in laboris exercitation aliqua veniam fugiat occaecat id irure. Non ea nulla commodo officia aute
                exercitation sunt eiusmod tempor cupidatat nisi excepteur. Exercitation irure cupidatat minim est qui duis.
                Nulla ad sit elit mollit consequat ad ut ipsum do elit officia nisi laborum. Minim ex fugiat ut id
                exercitation pariatur consectetur qui magna incididunt enim commodo minim..
              </p>
              <button className="btn btn-primary">Know More</button>
            </div>
            <div className="col">
              <img src={SectionTwo} alt="sectionTwo" />
            </div>
          </div>
        </div>
      </div>



    
    
   

<div className="container logos">
  <div className="row">
    <div className="col">
      <i className="fas fa-random fa-2x"></i>
      <p>Construction</p>
    </div>
    <div className="col">
      <i className="fas fa-random fa-2x"></i>
      <p>Dummy Logo</p>
    </div>
    <div className="col">
    <i className="fas fa-random fa-2x"></i>
      <p>Random Logo</p>
    </div>
    <div className="col">
    <i className="fas fa-random fa-2x"></i>
      <p>Random Brand </p>
    </div>
  </div>
</div>


    

<div className="services-section">
  <div className="container-bg">
  
  <h2 className='serviceheading'>Our Services</h2>
  <div className="text-center"> {/* Center align the paragraph */}
     <h6 style={{color:'grey'}}>LoremDolore qui sunt est irure occaecat labore incididunt aute ad. Aliquip cupidatat ea laboris eiusmod consequat ad nulla aliqua est. Mollit dolore officia in id anim eu duis. Lorem incididunt est nulla et eiusmod adipisicing adipisicing ullamco eiusmod. Fugiat nulla officia ex elit consequat nisi officia.</h6>
    </div>
  
    <div className="row align-items-start">
            <div className="col-md-4">
              <div className="rservice-box">
                {/* Use relevant service icon */}
                <i className="fas fa-chart-line fa-2x" style={{color: 'rgb(6, 173, 239)'}}></i>
                <h2>Financial Consulting</h2>
              
                <h6 style={{color:'grey'}}>Providing expert financial consulting for businesses. {/* ... */}</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box">
              
                <i className="fas fa-envelope-open-text fa-2x" style={{color: 'rgb(6, 173, 239)'}}></i>
                <h2>Contact Marketing</h2>
              
                <h6 style={{color:'grey'}}>Helping businesses conduct efficient operations. {/* ... */}</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="rservice-box">
              
                <i className="fas fa-lightbulb fa-2x" style={{color: 'rgb(6, 173, 239)'}}></i>
                <h2>Financial Advice</h2>
              
                <h6 style={{color:'grey'}}>Lud pariatur veniam ullamco duis ad culpa. {/* ... */}</h6>
              </div>
            </div>
          </div>
          <button className="btn btn-primary">All services</button>
        </div>
      </div>









      <div className="footer-section" style={{ backgroundImage: `url(${FooterImage})` }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
         <h1 >Subscribe to our Newsletter for more updates</h1>
         <p>Lorem Excepteur sint in quis ipsum aute amet aliqua ex ex et mollit. Occaecat cillum nulla duis reprehenderit mollit culpa commodo. Esse irure exercitation esse excepteur fugiat.</p>
            </div>
            <div className="col-md-6">
            <input type="text" placeholder='Enter Your Mail' style={{color: 'white'}}/>
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
