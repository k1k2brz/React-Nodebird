import React from 'react';
import PropTypes from 'prop-types';
import { StopOutlined } from '@ant-design/icons';
import { List, Button, Card } from 'antd'
import { useDispatch } from 'react-redux';
import { REMOVE_FOLLOWER_REQUEST, UNFOLLOW_REQUEST } from '../reducers/user';

const FollowList = ({ header, data, onClickMore, loading }) => {
    const dispatch = useDispatch();
    // 반복문 안에 함수 들어갈 때 고차함수를 사용하면 onCancel(item.id)안에 item.id를 여기로 보낼 수 있다.
    const onCancel: any = (id) => () => {
        if (header === "팔로잉") {
            dispatch({
                type: UNFOLLOW_REQUEST,
                data: id,
            })
        }
        dispatch({
            type: REMOVE_FOLLOWER_REQUEST,
            data: id,
        })
    }
    return (
        <List
            style={{ marginBottom: 20 }}
            grid={{ gutter: 4, xs: 2, md: 3 }}
            size="small"
            header={<div>{header}</div>}
            loadMore={<div style={{ textAlign: 'center', margin: '10px 0' }}>
                <Button onClick={onClickMore} loading={loading}>더 보기</Button>
            </div>}
            bordered
            dataSource={data}
            renderItem={(item: any) => (
                <List.Item style={{ marginTop: 20 }}>
                    <Card actions={[<StopOutlined key="stop" onClick={onCancel(item.id)} />]}>
                        <Card.Meta description={item.nickname} />
                    </Card>
                </List.Item>
            )}
        />
    )
}

FollowList.propTypes = {
    header: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    onClickMore: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default FollowList;