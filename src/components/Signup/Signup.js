import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { InputField } from '../InputField';
import { signInWithGoogle, auth } from '../../firebase';
import { mapStateToProps, mapDispatchToProps } from './utils';

const Signup = (props) => {
  const { loginInfo, setLogin } = props;

  const onChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...loginInfo, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log('error in sign-up', error);
    }
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
      <h2>Don&apos;t have an account ?</h2>
      <span>Sign-up with your email and password</span>
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
        <InputField
          type="password"
          name="confirmPassword"
          value={loginInfo.confirmPassword}
          label="Confirm password"
          onChange={onChange}
        />
        <input
          className="submit-button"
          onClick={onSubmit}
          type="submit"
          value="Sign-up"
        />
        <span className="form__inner-span">OR</span>
        <input
          className="submit-button google-button"
          onClick={googleAuth}
          type="submit"
          value="Sign-up with google"
        />
      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

Signup.propTypes = {
  setLogin: PropTypes.func.isRequired,
  loginInfo: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
    confirmPassword: PropTypes.string,
  }),
};

Signup.defaultProps = {
  loginInfo: PropTypes.shape({
    email: '',
    password: '',
    confirmPassword: '',
  }),
};
