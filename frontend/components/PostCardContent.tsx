import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const PostCardContent = ({ postData }) => { //첫 번째 게시글 #해시태그
    return (
        <div>
            {/* regexr.com */}
            {/* #다음 .+ 글자 전부 g - 여러개 [^] - 전부 \s - 공백*/}
            {/* 정규식 배열 전부 return */}
            {postData.split(/(#[^\s#]+)/g).map((v: string, i: number) => {
                // 해쉬태그 추출
                if (v.match(/(#[^\s#]+)/)) {
                    // 바뀔 일(리렌더링)이 없다면 i를 써도 된다.
                    return <Link href={`/hashtag/${v.slice(1)}`} key={i}><a>{v}</a></Link>
                }
                return v
            })}
        </div>
    )
}

PostCardContent.propTypes = { postData: PropTypes.string.isRequired };

export default PostCardContent;