import { useHistory } from 'react-router-dom';
import {
  CompleteAuthCon,
  CompAuthInsideCon,
  AuthMainHeading,
  AuthInputEle,
  AuthLabelEle,
  AuthFormConCom,
  AuthWhiteConCom,
  FlexContainerLeft,
  FlexBottomSpaceBetween,
  LinkItemsAuth,
  SubmitButtonAuth,
} from "./AuthStyled";

const Login = function () {
  const history = useHistory();

  const authButtonSubmit = event => {
    event.preventDefault()
    history.replace('/');
  }

  return (
    <CompleteAuthCon>
      <CompAuthInsideCon>
        <AuthMainHeading>Login</AuthMainHeading>
        <AuthWhiteConCom>
          <AuthFormConCom onClick={authButtonSubmit}>
            <AuthLabelEle htmlFor="EMAIL">Email Address</AuthLabelEle>
            <AuthInputEle id="EMAIL" type="email" />
            <AuthLabelEle htmlFor="PASSWORD">Password</AuthLabelEle>
            <AuthInputEle id="PASSWORD" type="password" />
            <FlexContainerLeft>
              <AuthInputEle id="REMEMBER" type="checkbox" />
              <AuthLabelEle htmlFor="REMEMBER">Remember Password</AuthLabelEle>
            </FlexContainerLeft>
            <FlexBottomSpaceBetween>
              <LinkItemsAuth to="/forget-password">
                Forget Password?
              </LinkItemsAuth>
              <SubmitButtonAuth onClick={authButtonSubmit} type="submit">Login</SubmitButtonAuth>
            </FlexBottomSpaceBetween>
          </AuthFormConCom>
        </AuthWhiteConCom>
        <FlexContainerLeft>
          <LinkItemsAuth to="/register">
            Need an Account? Sign up!
          </LinkItemsAuth>
        </FlexContainerLeft>
      </CompAuthInsideCon>
    </CompleteAuthCon>
  );
};

export default Login;
