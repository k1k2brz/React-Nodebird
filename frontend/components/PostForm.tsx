import { Form, Input, Button } from 'antd';
import { useCallback, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPost } from '../reducers/post';

const PostForm = () => {
    const { imagePaths } = useSelector((state: any) => state.post);
    const dispatch = useDispatch()
    const imageInput = useRef(null);
    const [text, setText] = useState<string>('')
    const onChangeText = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value)
    }, [])
    const onSubmit = useCallback(() => {
        // dispatch자리에는 객체가 들어감
        dispatch(addPost)
        setText('')
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