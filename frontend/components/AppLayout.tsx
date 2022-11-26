import PropTypes from "prop-types";
import styled from 'styled-components'
import Link from "next/link";
import { Input, Menu, Row, Col, MenuProps } from "antd";
import "antd/dist/antd.css";
// ant-design css불러오기
import { useSelector } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';
import { useState } from 'react';

// ant design을 styled component로
// styled component가 싫으면 useMemo(() => ({ css }), [])
// const SearchInput = styled(Input.Search)`
//     vertical-align: middle;
// `;

// gutter때문에 x축 스크롤바 생기는 현상 해겨
const Global = createGlobalStyle`
    .ant-row {
        margin-right: 0 !important;
        margin-left: 0 !important;
    }
    .ant-col:first-child {
        padding-left: 0 !important;
    }
    .ant-col:last-child {
        padding-right: 0 !important;
    }
`


type Props = {
    children: React.ReactNode;
};

const menuItems: MenuProps["items"] = [
    {
        label: <Link href="/"><a>노드버드</a></Link>,
        key: "home",
    },
    {
        label: <Link href="/profile"><a>프로필</a></Link>,
        key: "profile",
    },
    {
        label: <Input.Search enterButton style={{ verticalAlign: 'middle' }} />,
        key: "search",
    },
    {
        label: <Link href="/signup"><a>회원가입</a></Link>,
        key: "signup",
    },
]

const AppLayout: React.FC<Props> = ({ children }) => {
    const [current, setCurrent] = useState("home");
    // redux로 관리하기 때문에 필요 없어짐
    // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    // const isLoggedIn = useSelector((state: any) => state.user.isLoggedIn);
    const { me } = useSelector((state: any) => state.user);

    const onMenu: MenuProps["onClick"] = (e) => {
        setCurrent(e.key);
    };

    return (
        <div>
            <Global />
            <Menu onClick={onMenu} selectedKeys={[current]} items={menuItems} mode="horizontal" />
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {me ?
                        <UserProfile /> : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                {/* target _black를 할 땐 noreferrer noopener를 해줘야 보안 위협이 적어짐 */}
                <Col xs={24} md={6}>
                    {/* referrer 이전페이지 opener 누가 열였나 */}
                    <a href="https://github.com/k1k2brz" target="_blank" rel="noreferrer noopener">
                        Made by TaeIl
                    </a>
                </Col>
            </Row>
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;
