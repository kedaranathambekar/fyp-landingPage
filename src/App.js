import React from "react";
import "./App.css";

function App() {
	return (
<div className="background">
      <header className="logo">
        <h1 className="myStyle ">Attendaces Management Using Face-Recognition</h1>
      
      </header>


      <section className="text-big">
        <h2 className="space">Project Overview</h2>
        <p className="space">For my final year project I am doing face attendances the purpose of this idea in techonology wise we are growing exterm high finding new things
          which make life easier. The importances of this face recognition system which will takes minial time to recoginize the face and caputre and take that 
          as a record in attendances database. The system will actomatically scan the face and have the accurate employee report at the end of the each day . As per in the health wise it will safe , clean  and hygiene.
          This whole project works like if an employee selected to the team will been asked his/her photo which we will storing them in the database. Onces the person coming to office he/she need to stand infornt of the
          camera it will recoginize them and caputre the face store in the record sheet with date and time.
        </p>
      </section>

      <section className="text-small"> 
       <h1> Profile </h1>
        <img src={require('./images/photo.jpg')} alt="Image 1" />
        <p>Kedaranath Ambekar</p>
        <p>B.Sc(Hons) Applied computing Yr4</p>
        <p className="space">20091631</p>
        <p className="left"> Academic Title :FaceGuard: Revolutionizing Attendance with Cutting-Edge Face Recognition Technology</p>
        <p className="left">Commercial Title : Face Attendaces System</p>
      </section>

      <section className="rightnav">
        
        <p>GitHub: <a href="https://github.com/kedaranathambekar/fyp-face-attendances">Face Attendaces.git</a></p>
        <p>Poster : </p>
        <p>Demo Video: </p>
      </section>

      <footer className="text-footer">
        <p>Thank you for checking out my final year landing page which I used React.js for this website</p>
      </footer>
    </div>
  );
};

export default App;

