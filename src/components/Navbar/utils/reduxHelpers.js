import { setCurrentUser } from '../../../redux';

const mapStateToProps = ({ currentUser }) => ({ currentUser });

const mapDispatchToProps = {
  setCurrentUser,
};

export { mapStateToProps, mapDispatchToProps };
