import PropTypes from 'prop-types';

const Modal = () => <div>Modal</div>;

Modal.propTypes = {
  title: PropTypes.string,
  contents: PropTypes.array,
};

Modal.defaultProps = {
  title: '',
  contents: [''],
};

export default Modal;
