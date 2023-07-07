import { useHistory } from 'react-router-dom';
import {
  CompleteAuthCon,
  CompAuthInsideCon,
  AuthMainHeading,
  AuthInputEle,
  DetailAuth,
  AuthLabelEle,
  AuthFormConCom,
  AuthWhiteConCom,
  FlexContainerLeft,
  FlexBottomSpaceBetween,
  LinkItemsAuth,
  SubmitButtonAuth,
} from "./AuthStyled";

const Forget = function () {
  const history = useHistory();

  const authButtonSubmit = event => {
    event.preventDefault()
    history.replace('/');
  }

  return (
    <CompleteAuthCon>
      <CompAuthInsideCon>
        <AuthMainHeading>Password Recovery</AuthMainHeading>
        <AuthWhiteConCom>
          <AuthFormConCom onClick={authButtonSubmit}>
            <DetailAuth>
              Enter your email address and we will send you a link to reset your
              password.
            </DetailAuth>
            <AuthLabelEle htmlFor="EMAIL">Email Address</AuthLabelEle>
            <AuthInputEle id="EMAIL" type="email" />

            <FlexBottomSpaceBetween>
              <LinkItemsAuth to="/login">Return to Login</LinkItemsAuth>
              <SubmitButtonAuth onClick={authButtonSubmit} type="submit">Reset Password</SubmitButtonAuth>
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

export default Forget;
