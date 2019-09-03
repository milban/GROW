import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import reset from "styled-reset"
import Header from "./Header"
import EntryScreen from "./EntryScreen"
import Team from "./Team"
import Recruiting from "./Recruiting"
import Contact from "./Contact"

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Do+Hyeon|Noto+Sans+KR&display=swap&subset=korean');
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Noto Sans KR', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1rem;
    max-width: 1200px;
    margin: 0 auto;
    height: 100vh;
  }
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  padding-bottom: 10rem;
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header></Header>
        <EntryScreen></EntryScreen>
        <Team></Team>
        <Recruiting></Recruiting>
        <Contact></Contact>
      </Container>
    </>
  )
}

export default App
