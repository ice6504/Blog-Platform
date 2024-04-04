import PropTypes from "prop-types";

function Section(props) {
  const { title, icon } = props;
  return (
    <>
      <div className="border-b-[3px] rounded-l-lg border-primary">
        <h2 className="bg-primary py-2 rounded-t-md rounded-l-md w-fit p-2 text-xl font-medium text-white">
          <i className={icon}></i> {title}
        </h2>
      </div>
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Section;
