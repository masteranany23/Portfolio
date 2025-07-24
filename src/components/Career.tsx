import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech ECE</h4>
                <h5>NIT DELHI</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Joining NIT Delhi in the ECE branch was a dream come true—exciting campus life, brilliant faculty, and hands-on learning in cutting-edge tech made the journey truly enriching.

            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Volunteer </h4>
                <h5> UPVISION </h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Joining the technical club UpVision was an inspiring experience—collaborating with passionate peers, working on real-world tech projects, and growing both technically and personally through every challenge and opportunity.

            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Co- Founder</h4>
                <h5>Solvexx</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              As a co-founder of Solvexx, I am dedicated to driving innovation and excellence in our projects. Our focus on leveraging cutting-edge technology to solve real-world problems has been both challenging and rewarding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
