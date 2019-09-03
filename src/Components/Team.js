import React from "react"
import styled from "styled-components"
import ContentContainer from "./ContentContainer"
import MyungJunProfile from "../assets/MyungJunProfile.jpeg"
import GyuTaeProfile from "../assets/GyuTaeProfile.jpeg"
import JunHyeockProfile from "../assets/JunHyeockProfile.png"

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const TeamDescription = styled.div`
  width: 100%;
  padding: 0rem 2rem;
  display: flex;
  flex-direction: column;
`

const MemberWrapper = styled.div`
  width: 100%;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MemberProfile = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 30px;
  background-image: url(${props => props.profileImg});
  background-position: center center;
  background-size: cover;
  border: 1px solid black;
  margin-bottom: 10px;
`

const MemberInfo = styled.span`
  display: block;
  margin: 5px;
  color: ${props => props.color || "black"};
  font-size: ${props => props.fontSize || "1rem"};
`

export default () => (
  <ContentContainer title="Team">
    <Container>
      <TeamDescription>
        <span>팀 소개 들어갈 예정</span>
      </TeamDescription>
      <MemberWrapper>
        <MemberCard>
          <MemberProfile profileImg={MyungJunProfile} />
          <MemberInfo>채명준 / Android</MemberInfo>
          <MemberInfo color="grey" fontSize="10px">
            경희대학교 / 휴학중
          </MemberInfo>
          <MemberInfo>세상에서 제일 잘 앉아있습니다.</MemberInfo>
        </MemberCard>
        <MemberCard>
          <MemberProfile profileImg={GyuTaeProfile} />
          <MemberInfo>이규태 / BE (Spring)</MemberInfo>
          <MemberInfo color="grey" fontSize="10px">
            경희대학교 / 휴학중
          </MemberInfo>
          <MemberInfo>운동 관련 서비스를 만들지만 먹는게 더 좋습니다.</MemberInfo>
        </MemberCard>
        <MemberCard>
          <MemberProfile profileImg={JunHyeockProfile} />
          <MemberInfo>박준혁 / Web FE (React)</MemberInfo>
          <MemberInfo color="grey" fontSize="10px">
            경희대학교 / 재학중
          </MemberInfo>
          <MemberInfo>서프라이즈!!!</MemberInfo>
        </MemberCard>
      </MemberWrapper>
    </Container>
  </ContentContainer>
)
