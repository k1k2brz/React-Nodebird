import { Form, Input, Button } from 'antd';
import { useCallback, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useInput from '../hooks/useInput';
import { ADD_POST_REQUEST, REMOVE_IMAGE, UPLOAD_IMAGES_REQUEST } from '../reducers/post';

const PostForm = () => {
    const { imagePaths, addPostDone } = useSelector((state: any) => state.post);
    const dispatch = useDispatch()
    const imageInput = useRef<any>();
    const [text, onChangeText, setText] = useInput('')

    useEffect(() => {
        if (addPostDone) {
            // onSubmit에서 초기화 하면 에러 났을 때 게시글 작성된게 전부 날아감
            setText('')
        }
    }, [addPostDone])

    const onSubmit = useCallback(() => {
        // 게시글 없음
        if (!text || !text.trim()) {
            return alert('게시글을 작성하세요.');
        }
        const formData = new FormData();
        imagePaths.forEach((p: string) => {
            // req.body.image가 됨
            formData.append('image', p);
        })
        // req.body.content가 됨
        formData.append('content', text);
        // dispatch자리에는 객체가 들어감
        return dispatch({
            type: ADD_POST_REQUEST,
            data: formData,
        });
    }, [text, imagePaths])

    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
        // imageInput.current로 접근
    }, [imageInput.current])

    const onChangeImages = useCallback((e) => {
        console.log('images', e.target.files);
        // FormData()를 사용하면 multipart형식으로 서버로 보냄
        const imageFormData = new FormData();
        // forEach 메서드가 이벤트에 없기 때문에 [].의 forEach메서드를 빌려쓰는 방식으로 작성
        [].forEach.call(e.target.files, (f) => {
            // key(라우터의 upload값과 일치해야함), 값
            imageFormData.append('image', f);
        });
        dispatch({
            type: UPLOAD_IMAGES_REQUEST,
            data: imageFormData,
        })
    }, [])

    const onRemoveImage = useCallback((index: number) => () => {
        dispatch({
            type: REMOVE_IMAGE,
            data: index,
        })
    }, [])

    return (
        <Form style={{ margin: '10px 0 20px' }} encType='multipart/form-data' onFinish={onSubmit}>
            <Input.TextArea
                value={text}
                onChange={onChangeText}
                maxLength={140}
                placeholder="어떤 신기한 일이 있었나요?"
            />
            <div>
                <input type="file" name="image" multiple hidden ref={imageInput} onChange={onChangeImages} />
                {/* 2개 이상일시 fills */}
                {/* <input type="file" name="image2" multiple hidden ref={imageInput} /> */}
                <Button onClick={onClickImageUpload}>이미지 업로드</Button>
                <Button type="primary" style={{ float: 'right' }} htmlType="submit">짹짹</Button>
            </div>
            <div>
                {/* map안에 콜백함수를 넣고싶으면 고차함수를 사용해야한다. */}
                {imagePaths.map((v: string, i: number) => (
                    <div key={v} style={{ display: 'inline-block' }}>
                        {/* 3060으로 보내면 엑박 404 */}
                        <img src={`http://localhost:3065/${v}`} style={{ width: '200px' }} alt={v} />
                        <div>
                            <Button onClick={onRemoveImage(i)}>제거</Button>
                        </div>
                    </div>
                ))}
            </div>
        </Form>
    )
}

export default PostForm;