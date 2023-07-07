import { useHistory } from 'react-router-dom';
import {
  CompleteAuthCon,
  CompAuthInsideCon,
  AuthMainHeading,
  AuthInputEle,
  AuthLabelEle,
  RegisterFlexCon,
  RegisterInputWrap,
  AuthFormConCom,
  AuthWhiteConCom,
  FlexContainerLeft,
  LinkItemsAuth,
  SubmitButtonAuth,
} from "./AuthStyled";

const Register = function () {
  const history = useHistory();

  const authButtonSubmit = event => {
    event.preventDefault()
    history.replace('/');
  }

  return (
    <CompleteAuthCon>
      <CompAuthInsideCon register={"true"}>
        <AuthMainHeading>Create Account</AuthMainHeading>
        <AuthWhiteConCom>
          <AuthFormConCom onClick={authButtonSubmit}>
            <RegisterFlexCon>
              <RegisterInputWrap>
                <AuthLabelEle htmlFor="FIRSTNAME">First Name</AuthLabelEle>
                <AuthInputEle id="FIRSTNAME" type="text" />
              </RegisterInputWrap>
              <RegisterInputWrap>
                <AuthLabelEle htmlFor="LASTNAME">Last Name</AuthLabelEle>
                <AuthInputEle id="LASTNAME" type="text" />
              </RegisterInputWrap>
            </RegisterFlexCon>
            <AuthLabelEle htmlFor="EMAIL">Email</AuthLabelEle>
            <AuthInputEle id="EMAIL" type="email" />
            <RegisterFlexCon>
              <RegisterInputWrap>
                <AuthLabelEle htmlFor="PASSWORD">Password</AuthLabelEle>
                <AuthInputEle id="PASSWORD" type="password" />
              </RegisterInputWrap>
              <RegisterInputWrap>
                <AuthLabelEle htmlFor="confirmPassword">Confirm Password</AuthLabelEle>
                <AuthInputEle id="confirmPassword" type="password" />
              </RegisterInputWrap>
            </RegisterFlexCon>
            <SubmitButtonAuth onClick={authButtonSubmit} type="submit">Create Account</SubmitButtonAuth>
          </AuthFormConCom>
        </AuthWhiteConCom>
        <FlexContainerLeft>
          <LinkItemsAuth to="/login">
            Already have an account? Login
          </LinkItemsAuth>
        </FlexContainerLeft>
      </CompAuthInsideCon>
    </CompleteAuthCon>
  );
};

export default Register;
