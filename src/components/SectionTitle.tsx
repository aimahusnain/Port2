const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="section-titel">
      <h6 className="theme-after dark-color">{subTitle}</h6>
      <div className="st-title">
        <h2 className="theme-after dark-color">{title}</h2>
      </div>
    </div>
  );
};
export default SectionTitle;
