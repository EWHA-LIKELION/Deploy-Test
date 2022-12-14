import styled, { css } from "styled-components";
import { useState, useEffect } from "react";

import { PyeongChang_Peace, Pretendard } from "../Text";
import Footer from "../Footer/Footer";
import { boothData } from "../../_mock/boothData";
import { useNavigate } from "react-router-dom";

import Logout from "./Logout";
import Navbar from "./Navbar";

import greenheart from "../../images/greenheart.svg";
import likebooth from "../../images/mypage/likebooth.svg";
import userbg from "../../images/mypage/userbg.svg";
import edit1 from "../../images/mypage/edit1.png";
import edit2 from "../../images/mypage/edit2.png";

const MyManager = () => {
  const [booths, setBooths] = useState(boothData);
  const [likebooths, setLikebooths] = useState(4);

  const navigate = useNavigate();

  const goEditbooth = () => {
    navigate("/editbooth");
  };
  const goEditMenu = () => {
    navigate("/editmenu");
  };

  return (
    <Wrapper>
      <Navbar />
      <Userbox>
        <p className="nickname">
          <Pretendard>어쩌구 닉네임</Pretendard>
        </p>
        <p className="user">
          <Pretendard>likelion</Pretendard>
        </p>
        <p className="manager">
          <Pretendard>부스이름관리자</Pretendard>
        </p>
      </Userbox>
      <EditBooth>
        <img src={edit1} onClick={goEditbooth}></img>
        <img src={edit2} onClick={goEditMenu}></img>
      </EditBooth>
      <BoothBox>
        <Titlebox>
          <Likebooth src={likebooth} />
          <PyeongChang_Peace
            color="var(--green3)"
            weight="300"
            size="16px"
            style={{ display: "flex" }}
          >
            좋아요한 부스 ({likebooths})
          </PyeongChang_Peace>
        </Titlebox>

        {booths.map(b => {
          if (b.is_liked === true) {
            return (
              <Booth key={b.id}>
                <BoothImg />
                <BootInfo>
                  <p className="num">{b.num}</p>
                  <p className="name">{b.name}</p>
                  <p className="info">{b.info}</p>
                </BootInfo>
                <Heart src={greenheart} />
              </Booth>
            );
          } else {
            return;
          }
        })}
      </BoothBox>
      <Logout />
      <Footer />
    </Wrapper>
  );
};

export default MyManager;

const Heart = styled.img`
  position: absolute;
  top: 16px;
  right: 14px;
`;

const BoothImg = styled.div`
  background-color: #f6f6f6;
  margin-right: 12px;
  width: 89px;
  height: 90px;
  border-radius: 10px 0 0 10px;
  border: none;
`;

const BootInfo = styled.div`
  width: 176px;

  padding: 12px 0 12px 0;
  .num {
    font-size: 10px;
    font-style: "Pretendard-Regular";
    font-weight: 400;
    color: var(--orange);
  }

  .name {
    font-size: 15px;
    font-style: "Pretendard-Regular";
    font-weight: 700;
    color: var(--green3);
  }

  .info {
    letter-spacing: -2px;
    font-size: 11px;
    font-style: "Pretendard-Regular";
    font-weight: 400;
    line-height: 16px;
    color: var(--black);
  }
`;

const Booth = styled.div`
  margin-top: 16px;
  position: relative;
  display: flex;
  width: 335px;
  height: 90px;
  border-radius: 10px;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.075);
`;

const BoothBox = styled.div`
  margin: 0 auto 50px auto;
  width: 335px;
  height: 100%;

  display: flex;
  flex-direction: column;

  padding-top: 26px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const Likebooth = styled.img`
  width: 17px;
  height: 28px;
  margin-right: 7px;
  margin-bottom: 7px;
`;
const Titlebox = styled.div`
  border-bottom: 1px solid var(--gray);
  display: flex;
  margin-top: 22px;
`;

const Userbox = styled.div`
  background-image: url(${userbg});
  width: 268px;
  height: 82px;
  margin: 33px auto;
  .nickname {
    margin: 23px auto 2px;
    color: #686868;
    font-weight: 700;
    font-size: 30px;
    width: fit-content;
  }
  .user {
    font-weight: 500;
    font-size: 14px;
    color: var(--green1);
    width: fit-content;
    margin: 0 auto 2px;
  }
  .manager {
    width: fit-content;
    margin: 4px auto 2px;
    font-weight: 500;
    font-size: 14px;
    color: var(--orange);
  }
`;
const EditBooth = styled.div`
  width: fit-content;
  margin: 0 auto;
  img {
    display: block;
    margin-top: 12px;
  }
  img:active {
    box-shadow: inset 0px 2px 6px #bbc4c0;
    border-radius: 8px;
    cursor: pointer;
  }
`;
