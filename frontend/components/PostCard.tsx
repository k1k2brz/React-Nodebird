import { EllipsisOutlined, HeartOutlined, HeartTwoTone, MessageOutlined, RetweetOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, List, Popover } from 'antd';
// import { Comment } from '@ant-design/compatible';
import { useSelector } from 'react-redux';
import PostImages from './PostImages';
import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import CommentForm from './CommentForm';

const PostCard = ({ post }) => {
    const [liked, setLiked] = useState<boolean>(false);
    const [commentFormOpened, setCommentFormOpened] = useState<boolean>(false);
    const onToggleLike = useCallback(() => {
        setLiked((prev) => !prev);
        // false는 true true는 false toggle 코드
    }, [])
    const onToggleComment = useCallback(() => {
        setCommentFormOpened((prev) => !prev)
    }, [])

    const id = useSelector((state: any) => state.user.me?.id)
    // state.user.me && state.user.me.id 를 옵셔널 체이닝으로 줄여서
    return (
        <div style={{ marginBottom: 20 }}>
            {/* cover, actions는 antd기능 */}
            {/* 배열 안에 jsx를 넣을 땐 key */}
            <Card
                cover={post.Images[0] && <PostImages images={post.Images} />}
                actions={[
                    <RetweetOutlined key="retweet" />,
                    liked
                        ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} />
                        : <HeartOutlined key="heart" onClick={onToggleLike} />,
                    <MessageOutlined key="message" onClick={onToggleComment} />,
                    <Popover
                        key="ellipsis"
                        content={(
                            <Button.Group>
                                {id && post.UserId === id
                                    ? (
                                        <>
                                            <Button>수정</Button>
                                            <Button type="danger">삭제</Button>
                                            {/* loading={removePostLoading} onClick={onRemovePost} */}
                                        </>
                                    )
                                    : <Button>신고</Button>}
                            </Button.Group>
                        )}
                    >
                        <EllipsisOutlined />
                    </Popover>,
                ]}
            // extra={<FollowButton post={post} />}
            >
                <Card.Meta
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={post.content}
                // <PostCardContent postData={post.content} />
                />
            </Card>
            {commentFormOpened && (
                <div>
                    {/* 게시글의 id를 commentForm이 받아야 하기 때문에 */}
                    <CommentForm post={post} />
                    <List
                        header={`${post.Comments.length}개의 댓글`}
                        itemLayout="horizontal"
                        dataSource={post.Comments}
                        renderItem={(item: any) => (
                            <li>
                                <Comment
                                    author={item.User.nickname}
                                    avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                                    content={item.content}
                                />
                            </li>
                        )}
                    />
                </div>
            )}
            {/* <CommentForm />
            <Comments /> */}
        </div >
    )
}

PostCard.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        User: PropTypes.object,
        UserId: PropTypes.number,
        content: PropTypes.string,
        createdAt: PropTypes.object,
        Comments: PropTypes.arrayOf(PropTypes.any),
        Images: PropTypes.arrayOf(PropTypes.any),
    }).isRequired,
};

export default PostCard;