import { useCallback } from 'react'
import PropTypes from 'prop-types';
import { Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST } from '../reducers/user';

const FollowButton = ({ post }) => {
    const dispatch = useDispatch();
    const { me, followLoading, unfollowLoading } = useSelector((state: any) => state.user);
    // post 작성자의 아이디라면
    const isFollowing = me?.Followings.find((v) => v.id === post.User.id)
    const onClickButton = useCallback(() => {
        if (isFollowing) {
            dispatch({
                type: UNFOLLOW_REQUEST,
                data: post.User.id,
            });
        } else {
            dispatch({
                type: FOLLOW_REQUEST,
                data: post.User.id,
            })
        }
    }, [isFollowing])

    // 내가 쓴 글 팔로잉 안보이게
    // return을 hooks보다 위에 쓰면 에러남
    if (post.User.id === me.id) {
        return null;
    }

    return <Button loading={followLoading || unfollowLoading} onClick={onClickButton}>
        {isFollowing ? '언팔로우' : '팔로우'}
    </Button>
};

FollowButton.propTypes = {
    post: PropTypes.object.isRequired,
}

export default FollowButton;