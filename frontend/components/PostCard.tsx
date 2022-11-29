import { EllipsisOutlined, HeartOutlined, HeartTwoTone, MessageOutlined, RetweetOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, List, Popover, Comment } from 'antd';
// import { Comment } from '@ant-design/compatible';
import { useDispatch, useSelector } from 'react-redux';
import PostImages from './PostImages';
import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';
import {
    LIKE_POST_REQUEST, REMOVE_POST_REQUEST, UNLIKE_POST_REQUEST,
    RETWEET_REQUEST
} from '../reducers/post';
import FollowButton from './FollowButton';

const PostCard = ({ post }) => {
    const dispatch = useDispatch();
    const { removePostLoading } = useSelector((state: any) => state.post);
    // const [liked, setLiked] = useState<boolean>(false);
    const [commentFormOpened, setCommentFormOpened] = useState<boolean>(false);
    // state.user.me && state.user.me.id 를 옵셔널 체이닝으로 줄여서
    const id = useSelector((state: any) => state.user.me?.id)

    const onLike = useCallback(() => {
        if (!id) {
            return alert('로그인이 필요합니다.')
        }
        return dispatch({
            type: LIKE_POST_REQUEST,
            data: post.id,
        })
    }, [id])
    const onUnLike = useCallback(() => {
        if (!id) {
            return alert('로그인이 필요합니다.')
        }
        return dispatch({
            type: UNLIKE_POST_REQUEST,
            data: post.id,
        })
    }, [id])
    const onToggleComment = useCallback(() => {
        if (!id) {
            return alert('로그인이 필요합니다.')
        }
        setCommentFormOpened((prev) => !prev)
    }, [id])

    const onRemovePost = useCallback(() => {
        if (!id) {
            return alert('로그인이 필요합니다.')
        }
        return dispatch({
            type: REMOVE_POST_REQUEST,
            data: post.id,
        })
    }, [id])

    const onRetweet = useCallback(() => {
        if (!id) {
            return alert('로그인이 필요합니다.')
        }
        return dispatch({
            type: RETWEET_REQUEST,
            data: post.id,
        })
    }, [id])

    // 게시글 좋아요 누른 사람중에 내가 있는지
    const liked = post.Likers.find((v) => v.id === id);

    return (
        <div style={{ marginBottom: 20 }}>
            {/* cover, actions는 antd기능 */}
            {/* 배열 안에 jsx를 넣을 땐 key */}
            <Card
                cover={post.Images[0] && <PostImages images={post.Images} />}
                actions={[
                    <RetweetOutlined key="retweet" onClick={onRetweet} />,
                    liked
                        ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onUnLike} />
                        : <HeartOutlined key="heart" onClick={onLike} />,
                    <MessageOutlined key="message" onClick={onToggleComment} />,
                    <Popover
                        key="ellipsis"
                        content={(
                            <Button.Group>
                                {id && post.UserId === id
                                    ? (
                                        <>
                                            <Button>수정</Button>
                                            <Button type="danger"
                                                loading={removePostLoading}
                                                onClick={onRemovePost}>삭제</Button>
                                        </>
                                    )
                                    : <Button>신고</Button>}
                            </Button.Group>
                        )}
                    >
                        <EllipsisOutlined />
                    </Popover>,
                ]}
                // 누가 리트윗 했는지
                title={post.RetweetId ? `${post.User.nickname}님이 리트윗하셨습니다.` : null}
                extra={id && <FollowButton post={post} />}
            >
                {post.RetweetId && post.Retweet ? (<Card
                    cover={post.Retweet.Images[0] && <PostImages images={post.Retweet.Images} />}
                >
                    <Card.Meta
                        avatar={<Avatar>{post.Retweet.User.nickname[0]}</Avatar>}
                        title={post.Retweet.User.nickname}
                        description={<PostCardContent postData={post.Retweet.content} />}
                    />
                </Card>) : (
                    <Card.Meta
                        avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                        title={post.User.nickname}
                        description={<PostCardContent postData={post.content} />}
                    />
                )}
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
        </div >
    )
}

PostCard.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        User: PropTypes.object,
        UserId: PropTypes.number,
        content: PropTypes.string,
        createdAt: PropTypes.string,
        Comments: PropTypes.arrayOf(PropTypes.any),
        Images: PropTypes.arrayOf(PropTypes.any),
        Likers: PropTypes.arrayOf(PropTypes.object),
        RetweetId: PropTypes.number,
        Retweet: PropTypes.objectOf(PropTypes.any),
    }).isRequired,
};

export default PostCard;