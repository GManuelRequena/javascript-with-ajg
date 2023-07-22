import PropTypes from "prop-types";

const CompanyView = ({ title, company }) => {
  const { name: nameCompany, fiscalNumber } = company;
  return (
    <>
      <h3>{title}</h3>
      <ul className="list-group">
        <li className="list-group-item">Name: {nameCompany}</li>
        <li className="list-group-item">Fiscal Number: {fiscalNumber}</li>
      </ul>
    </>
  );
};

CompanyView.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.object.isRequired,
};

export default CompanyView;
