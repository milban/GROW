import React from "react"
import styled from "styled-components"
import Title from "./Title"

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 1rem 0;
`

const Contents = styled.div`
  width: 100%;
  height: calc(100% - 3rem);
`

export default ({ title, children }) => (
  <Container>
    <Title text={title}></Title>
    <Contents>{children}</Contents>
  </Container>
)
