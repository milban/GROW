import React from "react"
import styled from "styled-components"
import CoworkingIllust from "../assets/11809.jpg"

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const Slogan = styled.div`
  width: 50%;
  min-width: 375px;
  height: 100%;
  min-height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Do Hyeon";
  font-size: 2rem;
`

const Text = styled.div``

const Illust = styled.div`
  background-image: url(${CoworkingIllust});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 50%;
  min-width: 375px;
  height: 40rem;
  min-height: 10rem;
`

export default () => (
  <Container>
    <Slogan>
      <Text>For your better life</Text>
      <Text>Grow with us</Text>
      <Text>우리의 서비스로 더 나은 삶을</Text>
    </Slogan>
    <Illust></Illust>
  </Container>
)
