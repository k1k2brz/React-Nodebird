import { StopOutlined } from '@ant-design/icons';
import { List, Button, Card } from 'antd'
import React from 'react';

// interface propTypes = {
//     header: any,
//     data
// }

const FollowList = ({ header, data }) => {
    return (
        <List
            style={{ marginBottom: 20 }}
            grid={{ gutter: 4, xs: 2, md: 3 }}
            size="small"
            header={<div>{header}</div>}
            loadMore={<div style={{ textAlign: 'center', margin: '10px 0' }}><Button>더 보기</Button></div>}
            bordered
            dataSource={data}
            renderItem={(item: any) => (
                <List.Item style={{ marginTop: 20 }}>
                    <Card actions={[<StopOutlined key="stop" />]}>
                        <Card.Meta description={item.nickname} />
                    </Card>
                </List.Item>
            )}
        />
    )
}

export default FollowList;