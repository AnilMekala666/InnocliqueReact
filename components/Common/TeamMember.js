import React from "react";

const TeamMember = () => {
  return (
    <>
      <div className="team-area pt-100 pb-75">
        <div className="container">
          <div className="section-title section-style-two">
            <div className="section-bg-text">TEAM</div>
            <span>TEAM MEMBER</span>
            <h2>Our Expert IT Consultants</h2>
            <p>
              We are leading technology solutions providing company all over the
              world doing over 40 years lorem ipsum dolor sit amet.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="single-team-card">
                <div className="team-image" data-tilt>
                  <img src="/images/team/team-1.png" alt="image" />

                  <ul className="team-social">
                    <li>
                      <a
                        href="https://www.facebook.com/Innoclique-Cognitive-Technologies-Pvt-Ltd-358022938247087/?modal=admin_todo_tour"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-facebook-fill"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.linkedin.com/in/nkprofile"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-linkedin-fill"></i>
                      </a>
                    </li>

                  </ul>
                </div>
                <div className="team-content">
                  <h3 className="text-dark">Naga Krishna Changalasetti</h3>
                  <span>CEO</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-team-card">
                <div className="team-image" data-tilt>
                  <img src="/images/team/team-2.png" alt="image" />

                  <ul className="team-social">
                    <li>
                      <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-facebook-fill"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.linkedin.com/in/rambabu-gandla-27137569"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-linkedin-fill"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3 className="text-dark">Rambabu Gandla</h3>
                  <span>COO</span>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMember;
