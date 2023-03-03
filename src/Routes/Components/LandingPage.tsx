import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export interface propsType {
    searchKeyword: string
}

const LandingPage = (): JSX.Element => {
    const navigate = useNavigate();
    // 입력 폼 변화 감지하여 입력 값 관리
    const [Value, setValue] = useState("");

    // 입력 폼 변화 감지하여 입력 값을 state에 담아주는 함수
    const keywordChange = (e: { preventDefault: () => void; target: { value: string }; }) => {
        e.preventDefault();
        setValue(e.target.value);
    }

    // 제출한 검색어 state에 담아주는 함수
    const submitKeyword = (e: { preventDefault: () => void; }) => {
        console.log("검색");
        e.preventDefault();
        navigate(`/search?keyword=${Value}`);
    }

    // 검색어를 입력하지 않고 검색 버튼을 눌렀을 경우
    const valueChecker = () => {
        if (Value === "") {
            alert("검색어를 입력해주세요.")
        }
    }

    return (
        <>
            <form className="search-form" onSubmit={submitKeyword} style={{display:"flex"}}>
                <motion.svg
                    onClick={valueChecker}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                    ></path>
                </motion.svg>
                <input 
                style={{
                    borderRadius:"5px",
                    border:"none",
                    marginLeft:"5px",
                    width:"300px"
                }}
                type="text" 
                name="place" 
                onChange={keywordChange} 
                placeholder="검색어를 입력해주세요. (ex: 강남 맛집)" 
                required 
                />
            </form>
        </>
    )
}

export default LandingPage