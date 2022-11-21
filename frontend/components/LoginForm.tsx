import styled from 'styled-components';
import { Form, Input, Button } from 'antd'
import { useCallback, useState } from 'react';
import Link from 'next/link'
import useInput from '../hooks/useInput';
import { useDispatch } from 'react-redux';
import { loginAction } from '../reducers/user';

// div 태그가 됨
const ButtonWrapper = styled.div`
    margin-top: 10px;
`

const FormWrapper = styled(Form)`
    padding: 10px;
`

const LoginForm = () => {
    const dispatch = useDispatch();
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');

    //컴포넌트에 props로 받아진 함수는 useCallback을 사용해야 최적화가 된다.
    // const onChangeId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    //     setId(e.target.value)
    // }, [])

    // const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    //     setPassword(e.target.value)
    // }, [])

    const onSubmitForm = useCallback(() => {
        console.log(id, password)
        // reducers 안꺼를 가져옴
        dispatch(loginAction({ id, password }));
    }, [id, password])

    return (
        <>
            <FormWrapper onFinish={onSubmitForm}>
                <div>
                    <label htmlFor='user-id'>아이디</label>
                    <br />
                    <Input name="user-id" value={id} onChange={onChangeId} required />
                </div>
                <div>
                    <label htmlFor='user-password'>비밀번호</label>
                    <br />
                    <Input name="user-password" type="password" value={password} onChange={onChangePassword} />
                </div>
                <ButtonWrapper>
                    <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                    {/* link에 href넣고 button에는 안넣는게 좋다 */}
                    <Link href="/signup"><a><Button>회원가입</Button></a></Link>
                </ButtonWrapper>
            </FormWrapper>
        </>
    );
}

export default LoginForm;