const logoPath = process.env.PUBLIC_URL + "/profile/";

export const Profile = (props) => {
  return (
    <div className="profile">
      <div className="photo-container">
        <img
          src={`${logoPath}Dhawal.png`}
          className="profile-photo"
          alt="Dhawal Profile"
        />
      </div>
      <div className="profile-summary">
        <div className="salutation">
          <h1>Hello, my name is</h1>
        </div>
        <div className="name">
          <h2>Dhawal Sant.</h2>
        </div>
        <div className="tag-line">
          <h3>I build things for the web.</h3>
        </div>
        <div className="description">
          <p>
            I am a lead front-end developer who specializes in building
            exceptional digital experiences.
          </p>
          <p>
            Currently I am front-end lead engineer at
            <a
              href="https://www.cognizant.com"
              target="_blank"
              rel="noreferrer"
            >
              &nbsp;Cognizant&nbsp;
            </a>
            focussed on making websites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
