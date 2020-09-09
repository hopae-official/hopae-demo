import React from "react";
import styled from "styled-components";
import i18next from "i18next";

import isMobile from "../../utils/isMobile";

class Debug extends React.Component {

  state = {
    language: i18next.language || "",
    liteqr: false,
    universalLinks: false
  }

  render() {
    const { liteqr, universalLinks } = this.state;
    return (<Main>
        <h1>Gartner Video</h1>
    </Main>);
  }
}

const Main = styled.main`
  padding: 20px;
  h1 {
    font-weight: 600;
    font-size: 1.25rem;
    margin: 10px 0;
  }
  label {
    font-weight: 600;
    margin-right: 10px;
  }
`;

export default Debug;
