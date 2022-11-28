import styled from 'styled-components';
import { Form, Input, Button } from 'antd'
import { useCallback, useEffect } from 'react';
import Link from 'next/link'
import useInput from '../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequestAction } from '../reducers/user';

// div 태그가 됨
const ButtonWrapper = styled.div`
    margin-top: 10px;
`

const FormWrapper = styled(Form)`
    padding: 10px;
`

const LoginForm = () => {
    const dispatch = useDispatch();
    const { logInLoading, logInError } = useSelector((state: any) => state.user);
    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');

    // 로그인 실패 이유 알 수 있게
    useEffect(() => {
        if (logInError) {
            alert(logInError);
        }
    }, [logInError]);

    //컴포넌트에 props로 받아진 함수는 useCallback을 사용해야 최적화가 된다.
    // const onChangeId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    //     setId(e.target.value)
    // }, [])

    // const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    //     setPassword(e.target.value)
    // }, [])

    const onSubmitForm = useCallback(() => {
        console.log(email, password)
        // reducers 안꺼를 가져옴
        dispatch(loginRequestAction({ email, password }));
    }, [email, password])

    return (
        <>
            <FormWrapper onFinish={onSubmitForm}>
                <div>
                    <label htmlFor='user-email'>이메일</label>
                    <br />
                    <Input name="user-email" value={email} onChange={onChangeEmail} required />
                </div>
                <div>
                    <label htmlFor='user-password'>비밀번호</label>
                    <br />
                    <Input name="user-password" type="password" value={password} onChange={onChangePassword} />
                </div>
                <ButtonWrapper>
                    <Button type="primary" htmlType="submit" loading={logInLoading}>로그인</Button>
                    {/* link에 href넣고 button에는 안넣는게 좋다 */}
                    <Link href="/signup"><a><Button>회원가입</Button></a></Link>
                </ButtonWrapper>
            </FormWrapper>
        </>
    );
}

export default LoginForm;