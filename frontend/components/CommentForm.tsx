import { Button, Form, Input } from 'antd';
import React, { useCallback, useEffect } from 'react'
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_COMMENT_REQUEST } from '../reducers/post';

// 게시글 props로 받음
const CommentForm = ({ post }) => {
    const dispatch = useDispatch();
    // 내 아이디 가져옴
    const id = useSelector((state: any) => state.user.me?.id)
    const { addCommentDone, addCommentLoading } = useSelector((state: any) => state.post)
    const [commentText, onChangeCommentText, setCommentText] = useInput('')

    useEffect(() => {
        if (addCommentDone) {
            setCommentText('')
        }
    }, [addCommentDone])

    // commentText에 댓글 -> submit하면 content, postId, userId를 실어보냄
    const onSubmitComment = useCallback(() => {
        dispatch({
            // dispatch해서 ADD_COMMENT_REQUEST에 올려준다.
            type: ADD_COMMENT_REQUEST,
            data: { content: commentText, postId: post.id, userId: id },
        })
    }, [commentText, id])

    return (
        // ant design의 onSubmit = onFinish
        <Form onFinish={onSubmitComment}>
            <Form.Item style={{ position: 'relative', margin: 0 }}>
                <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4} />
                <Button
                    style={{ position: 'absolute', right: 0, bottom: -40, zIndex: 1 }}
                    type="primary"
                    htmlType='submit'
                    loading={addCommentLoading}
                >삐약</Button>
            </Form.Item>
        </Form>
    )
}

CommentForm.propTypes = {
    post: PropTypes.object.isRequired,
}

export default CommentForm;