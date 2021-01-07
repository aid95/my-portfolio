import React from "react";
import styled from "styled-components";

import styles from "@/styles/SnowStyle.module.scss";

const Container = styled.div`
  position: relative;
  overflow: hidden;
`;

const SnowFilter: React.FC = ({ children }) => {
  return (
    <Container>
      {children}
      <div className={styles.snow}></div>
    </Container>
  );
};

export default SnowFilter;