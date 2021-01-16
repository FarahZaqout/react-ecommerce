import { setLogin, setCurrentUser } from '../../../redux';

const mapStateToProps = (state) => {
  const { loginInfo } = state;
  return {
    loginInfo,
  };
};

const mapDispatchToProps = {
  setLogin,
  setCurrentUser,
};

export { mapStateToProps, mapDispatchToProps };
