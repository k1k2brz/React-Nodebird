import { Form, Input, Button } from 'antd';
import { useCallback, useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useInput from '../hooks/useInput';
import { addPost } from '../reducers/post';

const PostForm = () => {
    const { imagePaths, addPostDone } = useSelector((state: any) => state.post);
    const dispatch = useDispatch()
    const imageInput = useRef(null);
    const [text, onChangeText, setText] = useInput('')

    useEffect(() => {
        if (addPostDone) {
            // onSubmit에서 초기화 하면 에러 났을 때 게시글 작성된게 전부 날아감
            setText('')
        }
    }, [addPostDone])

    const onSubmit = useCallback(() => {
        // dispatch자리에는 객체가 들어감
        dispatch(addPost(text))
    }, [])

    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
        // imageInput.current로 접근
    }, [imageInput.current])
    return (
        <Form style={{ margin: '10px 0 20px' }} encType='multipart/form-data' onFinish={onSubmit}>
            <Input.TextArea
                value={text}
                onChange={onChangeText}
                maxLength={140}
                placeholder="어떤 신기한 일이 있었나요?"
            />
            <div>
                <input type="file" multiple hidden ref={imageInput} />
                <Button onClick={onClickImageUpload}>이미지 업로드</Button>
                <Button type="primary" style={{ float: 'right' }} htmlType="submit">짹짹</Button>
            </div>
            <div>
                {imagePaths.map((v) => (
                    <div key={v} style={{ display: 'inline-block' }}>
                        <img src={v} style={{ width: '200px' }} alt={v} />
                        <div>
                            <Button>제거</Button>
                        </div>
                    </div>
                ))}
            </div>
        </Form>
    )
}

export default PostForm;