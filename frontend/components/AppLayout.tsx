// import PropTypes from "prop-types";
import styled from 'styled-components'
import Link from "next/link";
import { Input, Menu, Row, Col } from "antd";
import "antd/dist/reset.css";
// ant-design css불러오기
import { useSelector } from 'react-redux';

import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';

// ant design을 styled component로
// styled component가 싫으면 useMemo(() => ({ css }), [])
// const SearchInput = styled(Input.Search)`
//     vertical-align: middle;
// `;

type Props = {
    children: React.ReactNode;
};

const AppLayout: React.FC<Props> = ({ children }) => {
    // redux로 관리하기 때문에 필요 없어짐
    // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const isLoggedIn = useSelector((state: any) => state.user.isLoggedIn);

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/">
                        <a>노드버드</a>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile">
                        <a>프로필</a>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup">
                        <a>회원가입</a>
                    </Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn ?
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

// AppLayout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default AppLayout;
