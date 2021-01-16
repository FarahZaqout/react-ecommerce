import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { InputField } from '../InputField';

import { mapStateToProps, mapDispatchToProps } from './utils';
import { signInWithGoogle, auth } from '../../firebase';

const Login = (props) => {
  const { setLogin, loginInfo } = props;

  const onChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...loginInfo, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    const { user } = await auth.signInWithEmailAndPassword(email, password);
    setLogin({
      user: user.displayName,
      email: user.email,
      profilePicture: user.photoURL,
    });
  };

  const googleAuth = async (e) => {
    e.preventDefault();
    const { user } = await signInWithGoogle();
    setLogin({
      user: user.displayName,
      email: user.email,
      profilePicture: user.photoURL,
    });
  };

  return (
    <div className="login">
      <h2>Already have an account ?</h2>
      <span>Login with your email and password</span>
      <form>
        <InputField
          type="email"
          name="email"
          value={loginInfo.email}
          label="Email"
          onChange={onChange}
        />
        <InputField
          type="password"
          name="password"
          value={loginInfo.password}
          label="Password"
          onChange={onChange}
        />
        <input
          className="submit-button"
          onClick={onSubmit}
          type="submit"
          value="Login"
        />
        <span className="form__inner-span">OR</span>
        <input
          className="submit-button google-button"
          onClick={googleAuth}
          type="submit"
          value="Login with google"
        />
      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.propTypes = {
  setLogin: PropTypes.func.isRequired,
  loginInfo: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }),
};

Login.defaultProps = {
  loginInfo: PropTypes.shape({
    email: '',
    password: '',
  }),
};
