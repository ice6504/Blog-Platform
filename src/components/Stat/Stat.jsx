import PropTypes from "prop-types";

function Stat(props) {
  const { data } = props;
  return (
    <div className="stat text-center">
      <div className="stat-title text-secondary/75">{data.title}</div>
      <div className="stat-value text-primary">{data.total.toLocaleString()}</div>
      <div className="stat-desc">16 มกราคม - 1 เมษายน</div>
    </div>
  );
}

Stat.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Stat;
