import PropTypes from 'prop-types';

const LoadMore = ({ onClick }) => {
  return <button onClick={onClick}>LOAD MORE</button>;
};

export default LoadMore;

LoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};
