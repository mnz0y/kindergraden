import React, { useRef } from 'react'
import { Container, Button, Form, ButtonGroup } from 'react-bootstrap'

const Login = () => {
    const id = useRef();
    const password = useRef();

    function pass() {
        const idIv = id.current.value;
        const passIv = password.current.value;
        const emailRegEx = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
        const reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        const num = passIv.search(/[0-9]/g);
        const eng = passIv.search(/[a-z]/ig);
        const spe = passIv.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

        if (!emailRegEx.test(idIv)) {
            alert('이메일을 다시 입력해 주세요');
            id.current.focus();
            return false
        } else {
            if (false === reg.test(passIv)) {
                alert('비밀번호는 8자 이상이어야 하며, 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다.');
                password.current.focus();
                return false
            } else if (passIv.search(/\s/) != -1) {
                alert('비밀번호는 공백 없이 입력해주세요.');
                password.current.focus();
                return false;
            } else if (/(\w)\1\1\1/.test(passIv)) {
                alert('같은 문자를 4번 이상 사용할 수 없습니다.');
                password.current.focus();
                return false;
            }
            else {
                alert('환영합니다😊')
            }
        }
    }

    return (
        <Container className='loginPage'>
            <h1>로그인</h1>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="아이디(이메일)를 입력해 주세요." ref={id} />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="비밀번호를 입력해 주세요" ref={password} />
            </Form.Group>
            <Button variant="dark" type="submit" onClick={() => { pass() }} >
                로그인
            </Button>

            <ButtonGroup aria-label="Basic example">
                <Button variant="outline-dark">비밀번호 찾기</Button>
                <Button variant="outline-dark">아이디 찾기</Button>
                <Button variant="outline-dark">회원가입</Button>
            </ButtonGroup>

        </Container>
    )
}

export default Login