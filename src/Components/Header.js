import React from "react"
import styled from "styled-components"

const SHeader = styled.header`
  width: 100%;
  padding: 2rem 3rem;
`

const TeamName = styled.span`
  font-family: "Do Hyeon";
  font-size: 2rem;
`

export default () => (
  <SHeader>
    <TeamName>GROW</TeamName>
  </SHeader>
)
