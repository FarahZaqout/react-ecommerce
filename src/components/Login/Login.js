import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { InputField } from '../InputField';

import { mapStateToProps, mapDispatchToProps } from './utils';
import { signInWithGoogle, auth } from '../../firebase';
import { customModal } from '../Modals';

const Login = (props) => {
  const { loginInfo, setLogin, setCurrentUser } = props;

  const onChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...loginInfo, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { name } = e.target;
    try {
      const { email, password } = loginInfo;
      let userInfo;
      if (name === 'submitButton') {
        const { user } = await auth.signInWithEmailAndPassword(email, password);
        userInfo = user;
      } else {
        const { user } = await signInWithGoogle();
        userInfo = user;
      }
      setCurrentUser({
        user: userInfo.displayName,
        profilePicture: userInfo.photoURL,
      });
      customModal({
        title: 'You are now logged in!',
        icon: 'success',
      });
    } catch (error) {
      if (error.code !== 'auth/popup-closed-by-user') {
        customModal({
          title: 'Something went wrong! Try again.',
          icon: 'warning',
        });
      }
    }
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
          name="submitButton"
          value="Login"
        />
        <span className="form__inner-span">OR</span>
        <input
          className="submit-button google-button"
          onClick={onSubmit}
          type="submit"
          name="googleButton"
          value="Login with google"
        />
      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.propTypes = {
  setCurrentUser: PropTypes.func.isRequired,
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
