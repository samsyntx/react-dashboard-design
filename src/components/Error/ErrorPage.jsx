import { BiArrowBack } from "react-icons/bi";
import FooterComp from "../FooterComp/FooterComp";
import {
  ErrorComContainer,
  ErrorCode,
  ErrorDetail,
  ErrorExplain,
  ReturnDashIconText,
  ReturnText,
} from "./ErrorStyled";

const ErrorPage = (props) => {
  const { code, title, detail } = props;

  return (
    <>
      <ErrorComContainer>
        <ErrorCode>{code}</ErrorCode>
        <ErrorDetail>{title}</ErrorDetail>
        <ErrorExplain>{detail}</ErrorExplain>
        <ReturnDashIconText to="/">
          <BiArrowBack size={20} />
          <ReturnText>Return to Dashboard</ReturnText>
        </ReturnDashIconText>
      </ErrorComContainer>
      <FooterComp />
    </>
  );
};

export default ErrorPage;
