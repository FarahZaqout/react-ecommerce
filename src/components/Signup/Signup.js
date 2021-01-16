import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { InputField } from '../InputField';
import { signInWithGoogle, auth } from '../../firebase';
import { customModal } from '../Modals';
import {
  mapStateToProps,
  mapDispatchToProps,
  signupUserExperience,
} from './utils';

const Signup = (props) => {
  const { loginInfo, setLogin, setCurrentUser } = props;
  const history = useHistory();
  const onChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...loginInfo, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password,
      );
      setCurrentUser({
        user: user.displayName,
        profilePicture: user.photoURL,
      });
      customModal({
        title: 'You are now logged in!',
        icon: 'success',
      });
    } catch (error) {
      customModal({
        title: 'Something went wrong! Try again.',
        icon: 'warning',
      });
    }
  };

  const googleAuth = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInWithGoogle();
      signupUserExperience(user, history, setCurrentUser);
    } catch (error) {
      customModal({
        title: 'Something went wrong! Try again.',
        icon: 'warning',
      });
    }
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
  setCurrentUser: PropTypes.func.isRequired,
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
