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

const FieldCard = styled.div`
  width: 30%;
  min-width: 300px;
  height: 100%;
  min-height: 20rem;
  border-radius: 10px;
  box-shadow: 0 0 36px rgba(0, 0, 0, 0.1);
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 1rem;
`

const FieldInfo = styled.span`
  display: block;
  margin: 7px;
  color: ${props => props.color || "black"};
  font-size: ${props => props.fontSize || "1rem"};
`

export default () => (
  <ContentContainer title="Recruiting">
    <Container>
      <FieldCard>
        <FieldInfo fontSize="2rem">기획자</FieldInfo>
        <FieldInfo>구인하고 있지 않아요.</FieldInfo>
      </FieldCard>
      <FieldCard>
        <FieldInfo fontSize="2rem">개발자</FieldInfo>
        <FieldInfo>Android / IOS / Spring</FieldInfo>
      </FieldCard>
      <FieldCard>
        <FieldInfo fontSize="2rem">디자이너</FieldInfo>
        <FieldInfo>완전 완전 급구중이에요!</FieldInfo>
        <FieldInfo>Sketch / Figma / Adobe XD 등</FieldInfo>
        <FieldInfo>UI/UX 툴 사용 가능자</FieldInfo>
        <FieldInfo>Protopie 등</FieldInfo>
        <FieldInfo>프로토타이핑 툴 사용 가능자</FieldInfo>
        <FieldInfo>우리의 서비스를 아름답게 꾸며주세요</FieldInfo>
      </FieldCard>
    </Container>
  </ContentContainer>
)
