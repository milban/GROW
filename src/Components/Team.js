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

const MemberCard = styled.div`
  width: 30%;
  min-width: 300px;
  height: 100%;
  min-height: 20rem;
  border-radius: 10px;
  box-shadow: 0 0 36px rgba(0, 0, 0, 0.1);
  margin: 1rem auto;
`

export default () => (
  <ContentContainer title="Team">
    <Container>
      <MemberCard></MemberCard>
      <MemberCard></MemberCard>
      <MemberCard></MemberCard>
    </Container>
  </ContentContainer>
)
