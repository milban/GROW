import React from "react"
import styled from "styled-components"
import ContentContainer from "./ContentContainer"

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  padding: 0rem 2rem;
`

const ContactWay = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`

export default () => (
  <ContentContainer title="Contact Us">
    <Container>
      <ContactWay>Email: wnsgur6311@gmail.com</ContactWay>
    </Container>
  </ContentContainer>
)
