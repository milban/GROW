import React from "react"
import styled from "styled-components"
import ContentContainer from "./ContentContainer"

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

export default () => (
  <ContentContainer title="Contact Us">
    <Container></Container>
  </ContentContainer>
)
