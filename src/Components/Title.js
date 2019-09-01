import React from "react"
import styled from "styled-components"

const Container = styled.div`
  padding-left: 2rem;
  width: 100%;
  margin-bottom: 1rem;
`

const Text = styled.span`
  font-family: "Do Hyeon";
  font-size: 2rem;
`

export default ({ text }) => (
  <Container>
    <Text>{text}</Text>
  </Container>
)
