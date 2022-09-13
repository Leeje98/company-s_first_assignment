import React from 'react';
// import { Link as ReactRouterDomLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 90%;
  margin: 200px auto 0;
  padding: 20px;
  @media screen and (min-width:1025px) {
      width: 400px;
    }
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 50px;
`

const InputBox = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box;
  /* border: 1px solid #333; */
`

const Name = styled.p`
  width: 100px;
  height: 40px;
  font-size: 18px;
  line-height: 40px;
  margin: 0;
  /* background-color: #ccc; */
`

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: calc(100% - 100px);
  height: 40px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #333;
  background: #fff;
  box-sizing: border-box;
`;

const CheckInput = styled.input`
  margin: 20px 10px 10px 10px;
  width: 20px;
  height: 20px;
  :checked {
    accent-color: #3f8aec;
  }
`

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const Button = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 49px;
  display: block;
  width: 49%;
  height: 49px;
  margin: 16px 0 7px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 0;
  background-color: #3f8aec;
  @media screen and (min-width:1025px) {
      width: 190px;
    }
  /* ${({ disabled }) =>
    disabled &&
    `
    background-color: #efefef;
  `} */
`;

const StyledLink = styled(Link)`
	width: 100%;
`;



export default function LoginPage() {
  return (
    <Container>
      <Title>제품 관리 시스템</Title>
      <InputBox>
        <Name>아이디</Name> 
        <Input id='id' name='id' placeholder='아이디를 입력해주세요' />
      </InputBox>
      
      <InputBox>
        <Name>비밀번호</Name> 
        <Input
        id='password'
        name='passoword'
        type='password'
        placeholder='비밀번호를 입력해주세요'
        />
      </InputBox>

      <CheckInput
        id='autoLogin'
        name='autoLogin'
        type='checkbox'
      />
      <label htmlFor="autoLogin">자동로그인</label>
      
      <ButtonBox>
        <Button>로그인</Button>
        {/* <Link to='/join' style={{ textDecoration: 'none', width: 'auto' }}><Button>회원가입</Button></Link> */}
        <StyledLink to='/join' style={{ textDecoration: 'none' }}><Button>회원가입</Button></StyledLink>
      </ButtonBox>
    
    </Container>
    // <div>안녕하세요</div>
  )
}
