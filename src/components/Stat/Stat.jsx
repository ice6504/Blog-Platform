import PropTypes from "prop-types";

function Stat(props) {
  const { data } = props;
  return (
    <div className="stat text-center">
      <div className="stat-title">{data.title}</div>
      <div className="stat-value">{data.total}</div>
      <div className="stat-desc">16 มกราคม - 1 เมษายน</div>
    </div>
  );
}

Stat.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Stat;
