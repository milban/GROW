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
  font-weight: 600;
`

const TeamInfo = styled.span`
  display: block;
  margin: 10px;
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
  &:hover {
    transform: scale(1.05);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px,
      rgba(0, 0, 0, 0.024) 0px -6px 16px -6px;
    transition: all 0.2s ease-in-out;
  }
`

const MemberProfile = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 80px;
  background-image: url(${props => props.profileImg});
  background-position: center center;
  background-size: cover;
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
        <TeamInfo>사용자에게 더 나은 삶을 제공하고 싶은 열정 가득한 팀입니다.</TeamInfo>
        <TeamInfo>실력도 가파르게 급상승 중이에요!</TeamInfo>
        <TeamInfo>항상 밝고 긍정적인 분위기에서 즐겁게 일하고 있습니다!</TeamInfo>
      </TeamDescription>
      <MemberWrapper>
        <MemberCard>
          <MemberProfile profileImg={MyungJunProfile} />
          <MemberInfo>채명준 / Android</MemberInfo>
          <MemberInfo color="grey" fontSize="10px">
            경희대학교 / 휴학중
          </MemberInfo>
          <MemberInfo>loop(운동, 밥, 코딩)</MemberInfo>
        </MemberCard>
        <MemberCard>
          <MemberProfile profileImg={GyuTaeProfile} />
          <MemberInfo>이규태 / BE (Spring)</MemberInfo>
          <MemberInfo color="grey" fontSize="10px">
            경희대학교 / 휴학중
          </MemberInfo>
          <MemberInfo>먹는게 좋습니다.</MemberInfo>
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
