import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//images
import toplogo from "../images/main/toplogo.svg";
import deleteIcon from "../images/delete.svg";
import linkDeco from "../images/linkDeco.svg";
//fonts
import { PyeongChang_Peace } from "../components/Text";

const SideBar = (props) =>{
    const isLogin = localStorage.getItem("token");

    // 사이드바 안보이게 하는 함수
    const DeleteSideBar = () =>{
        props.setSideBar(false);
    }
    return (
        <BarWrapper  onClick={DeleteSideBar}>
        <DeleteBtn src={deleteIcon} onClick={DeleteSideBar}/>
        <TopLogo src={toplogo}/>
        <LinkWrapper> 
            <PyeongChang_Peace>
                <img src={linkDeco}/>
                {<Link to="/notice">공지사항</Link>}
            </PyeongChang_Peace>
            <PyeongChang_Peace style={{marginRight:"32px"}}>
                <img src={linkDeco}/>
                <Link to="/trashbin">쓰레기통 위치</Link>
            </PyeongChang_Peace>
            <PyeongChang_Peace style={{marginRight:"16px"}}>
                <img src={linkDeco}/>
                {isLogin ? 
                <Link to="/mypage">마이페이지</Link> :
                <Link to="/login">마이페이지</Link>
                 }
            </PyeongChang_Peace>
            <PyeongChang_Peace>
                <img src={linkDeco}/>
                <Link to="/makers">만든이들</Link>
            </PyeongChang_Peace>
        </LinkWrapper>
        <Footer>
            Copyright ⓒ Likelion Ewha 10th. All Rights Reserved.
        </Footer>
        </BarWrapper>
    )
}

export default SideBar;

const BarWrapper = styled.div`
    width: 302px;
    height: 812px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10;
    top: 0;
    left: 0;

    background-color: #F5F5F5;
    border-radius: 0 20px 20px 20px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    
    animation: LeftToRight 0.8s;
    @keyframes LeftToRight {
        0% {
            transform: translate3d(-100%, 0, 0);
        }
        to {
            transform: translateZ(0);
        }
    }
`
const DeleteBtn = styled.img`
    position: absolute;
    margin: 76px 0 0 213px;

    cursor: pointer;
`
const TopLogo = styled.img`
    width: 138px;
    height: 33px;
    margin-top: 99px;
`
const LinkWrapper = styled.div`
    width: 165px;
    height: 280px;
    margin-top: 40px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-content: space-between;

    p{
        width: 100px;
        height: 50px;
        display: flex;
        align-items: center;

        font-size: 15px;
        font-weight: 700;
        text-align: center;
    }
    a{
        position: absolute;
        z-index: 2;
        margin-left: 20px;
        color: #004628;
        text-decoration: none;
    }
    a:hover {
        color: #FBB03B;
    }
    img {
        position: absolute;
        z-index: 1;
        width: 39.87px;
        height: 35.31px;
    }

`

const Footer = styled.div`
    vertical-align: baseline;
    margin-top: 308px;
    font-weight: 300;
    font-size: 8px;
    color: #A5A5A5;
`

