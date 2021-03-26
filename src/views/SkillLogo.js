const logoPath = process.env.PUBLIC_URL + "/logos/";

export const SkillLogo = (props) => {
  const { item } = props;
  const { logo, altText, label } = item;

  return (
    <div className="skill-container">
      <div className="logo-container">
        <img src={`${logoPath}${logo}`} className="skill-logo" alt={altText} />
      </div>
      <p className="skill-name">{label}</p>
    </div>
  );
};

export default SkillLogo;
