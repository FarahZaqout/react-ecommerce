import { setLogin } from '../../../redux';

const mapStateToProps = (state) => {
  const { loginInfo } = state;
  return {
    loginInfo,
  };
};

const mapDispatchToProps = {
  setLogin,
};

export { mapStateToProps, mapDispatchToProps };
