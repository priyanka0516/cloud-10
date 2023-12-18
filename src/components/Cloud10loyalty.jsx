import React from 'react';
export default function Cloud10Loyalty() {
        const openGitHubPage = () => {
    window.open('https://github.com/Cloud10-Loyality/cloud10Loyality');
  };
  return (
      <>
        <div className='mobile-home-banner'>
            <div className='container'>
            <div className='row'>
            <div className="col-md-7 d-flex flex-column justify-content-center">
                <div className='mobile-banner-left'>
                <h3 className='top-text-banner'>Cloud10 LMS <strong className='brand-name'>The Ultimate Loyalty Partner</strong></h3>
                <h4 className='my-3'>Cloud10 LMS (Loyalty Management System) is a blockchain based platform to elevate Your Loyalty Experience with Seamless Integration and Rewards Management.</h4>
                </div>
            </div>
            <div className="col-md-5 d-flex justify-content-center">    
                <img src={require('./../images/lms-ban.png')} alt="mainbanner" id="animated"/>
            </div>
            </div>
            </div>
        </div>
        <div className='lms-about'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-5 col-md-12 col-sm-12'>
                        <img src={require('./../images/Difficult-to-identify-loyal-customers-1-1-1-1-1024x513.png')} alt="mainbanner" id="animated"/>
                    </div>  
                    <div className='col-lg-7 col-md-12 col-sm-12'>
                        <div className='right-lms'>
                            <h3>About <span className="content-text">Cloud10 LMS</span></h3>
                            <p><b>Cloud10 LMS (Loyalty Management System) is a  blockchain based platform</b> that helps businesses to integrate, implement and manage their loyalty programs. It provides a centralized platform for tracking customer interactions, managing rewards and incentives, and analyzing customer behavior and preferences. The system is designed as a pluggable module for Channels or Booking Engines of the hospitality domain.</p>
                         <button onClick={openGitHubPage} id="gitbutton">Read More</button>
                          </div>
                    </div>  
                </div>  
            </div>
          </div>
        <div className='lms-features'>
            <div className='container'>
                <div className='row'>
                    <h2 className='wrapper-heading'>Features</h2>
                    <p style={{textAlign:'center'}}>This loyalty management system includes features such as:</p>
                </div>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-6 col-xs-12'>
                        <div className='srv-bx1'>
                            <div className="imgbx sv2"><span className='number-text'>01.</span></div>
                                <div className='lms-text'>
                                    <h4>Customer Backend:</h4>
                                    <p>A decentralized customer backend on the Cardano blockchain can provide a secure and transparent way to store customer information, including their purchase history, loyalty program status. Transaction records can be stored on the blockchain to maintain an immutable history of each customer's purchases, enabling retailers to provide personalized offers and recommendations based on their purchase history. The use of smart contracts on the Cardano blockchain can enable retailers to implement loyalty programs that can automatically reward customers based on their purchases and other predetermined criteria. With Cardano's high level of security, customers can be assured that their personal data is protected and cannot be tampered with or hacked. Overall, a decentralized customer backend on the Cardano blockchain can offer numerous benefits for retailers and customers, including increased transparency, security, and personalized experiences.</p>
                                </div>
                            </div>
                             <div className='srv-bx1'>
                              <div className="imgbx sv2"><span className='number-text'>02.</span> </div>
                              <div className='lms-text'>
                            <h4> Rewards management:</h4>
                            <p>A module for managing rewards and incentives, such as points, discounts, free products, or exclusive offers.
                            </p>
                            </div>
                          </div>
                                 <div className='srv-bx1'>
                              <div className="imgbx sv2"><span className='number-text'>03.</span> </div>
                              <div className='lms-text'>
                            <h4>Customer Engagement:</h4>
                            <p>Tools for engaging customers, such as targeted messaging, personalized recommendations, and social media integrations.
                            </p>
                            </div>
                          </div>
                            <div className='srv-bx1'>
                              <div className="imgbx sv2"><span className='number-text'>04.</span> </div>
                              <div className='lms-text'>
                            <h4>Analytics and reporting:</h4>
                            <p>A dashboard that provides insights into customer behavior, program performance, and ROI.</p>
                            </div>
                          </div>
                            <div className='srv-bx1'>
                              <div className="imgbx sv2"><span className='number-text'>05.</span> </div>
                              <div className='lms-text'>
                            <h4>Administration and security:</h4>
                            <p>Tools for managing program rules, settings, and access levels, as well as ensuring compliance with data protection regulations.</p>
                            </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}
