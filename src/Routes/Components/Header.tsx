import { motion, useAnimation, useMotionValueEvent, useScroll } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LandingPage from "./LandingPage";

const Nav = styled(motion.div)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    padding: 20px 60px;
    color: white;
    z-Index: 99
`
const Logo = styled(motion.span)`
    font-size: 30px;
`

const Search = styled.div`
    display: flex;
    svg {
        height: 30px
    }
`;
const Input = styled(motion.input)`
    width: 300px;
    border-radius: 5px;
    border: none;
    margin-left: 5px;
`
const navVariants = {
    top: {
        backgroundColor: "rgba(37, 204, 247,1.0)"
    },
    scroll: {
        backgroundColor: "rgba(27, 156, 252,1.0)"
    }
}


function Header() {
    const navAnimation = useAnimation();
    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY, "change", (cur) => {
        if(cur > 20) {
            navAnimation.start("scroll");
        } else {
            navAnimation.start("top");
        }
    })
    return (
        <Nav 
            variants={navVariants}
            animate={navAnimation}
            initial="top"
        >
            <Logo
                whileHover={{ scale: 1.1 }}
            >
                <Link to="/">동네 맛집</Link>
            </Logo>
            <Search>
                <LandingPage />
            </Search>
            로그인
            회원가입
        </Nav>
    )
}

export default Header;