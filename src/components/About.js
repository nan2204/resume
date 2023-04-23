import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               {/* <img className="profile-pic"  src="images/profilepic.jpeg" alt="" /> */}

            </div>

            <div className="nine columns main-col">

               <h2>NETRA </h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="">

                  <div className="">

                  <h2>CONTACT DETAILS : 9345833432 <br></br>
                      SCHOOL          : Stanes anglo Indian Higher Secondary School <br></br>
                      UNIVERSITY      : Sri Krishna College of Engineering and Technology</h2>
                  <p className="address">
       						
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.website}</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}