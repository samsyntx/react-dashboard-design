import {
  FooterComCon,
  CopyrightFooter,
  LinkTextFooterDiv,
  LinkFooter,
} from "./FooterStyled";

const FooterComp = function () {
  return (
    <FooterComCon>
      <CopyrightFooter>Copyright © React Admin by Shubham 2023</CopyrightFooter>
      <LinkTextFooterDiv>
        <LinkFooter to='#'>Privacy Policy</LinkFooter> : {" "}
         <LinkFooter to='#'>Terms & Conditions</LinkFooter>
      </LinkTextFooterDiv>
    </FooterComCon>
  );
};

export default FooterComp;
