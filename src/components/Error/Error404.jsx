import { BiArrowBack } from "react-icons/bi";
import FooterComp from "../FooterComp/FooterComp";
import {
  ErrorComContainer,
  ErrorExplain,
  ReturnDashIconText,
  ReturnText,
  Error404Img,
} from "./ErrorStyled";

const Error404 = () => {
  return (
    <>
      <ErrorComContainer>
        <Error404Img src="https://startbootstrap.github.io/startbootstrap-sb-admin/assets/img/error-404-monochrome.svg" />
        <ErrorExplain>
          This requested URL was not found on this server.
        </ErrorExplain>
        <ReturnDashIconText to="/">
          <BiArrowBack size={20} />
          <ReturnText>Return to Dashboard</ReturnText>
        </ReturnDashIconText>
      </ErrorComContainer>
      <FooterComp />
    </>
  );
};

export default Error404;
