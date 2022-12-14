import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import TitleBar from "../../components/TitleBar";
import axios from "axios";

// import font
import {
  PyeongChang_Peace,
  PyeongChang,
  NanumSquare,
  Pretendard,
} from "../../components/Text";

const EditBoothPage = () => {
  const getInfo = async () => {
    const response = await axios.get(`http://43.200.53.202/booths/${id}`);
    console.log(response.data);
    console.log(response.data.data.name);
    console.log(response.data.data.notice);
    console.log(response.data.data.description);
  };

  const editInfo = async () => {
    const response = await axios
      .patch(`http://43.200.53.202/booths/${id}`, {
        name: name,
        notice: notice,
        description: description,
      })
      .then(console.log(response.data.json))
      .catch(console.log("실패"));
  };

  const [name, setName] = useState("기존 이름");
  const [notice, setNotice] = useState("기존 공지사항");
  const [description, setDescription] = useState("기존 소개");

  var id = 1;

  const handleName = e => {
    setName(e.target.value);
    // console.log(name);
  };

  const handleNotice = e => {
    setNotice(e.target.value);
    // console.log(notice);
  };

  const handleDescription = e => {
    setDescription(e.target.value);
    // console.log(description);
  };

  const onSubmit = () => {
    editInfo();
  };
  return (
    <>
      <TitleBar>
        <span style={{ color: "var(--green1)" }}>내 </span>
        <span style={{ color: "var(--green2)" }}>부스 </span>
        <span style={{ color: "var(--green3)" }}>정보수정</span>
      </TitleBar>
      <ContentWrapper>
        <BoxWrapper>
          <Pretendard weight="500" size="16px">
            <Title>부스 이름</Title>
          </Pretendard>
          <Input
            type="text"
            value={name}
            onChange={handleName}
            placeholder="부스 이름"
            style={{ fontFamily: "Pretendard-Regular", height: "45px" }}
          />
        </BoxWrapper>
        <BoxWrapper>
          <Pretendard weight="500" size="16px">
            <Title>공지사항</Title>
          </Pretendard>
          <TextArea
            type="text"
            value={notice}
            onChange={handleNotice}
            placeholder="공지사항"
            style={{ fontFamily: "Pretendard-Regular" }}
          />
        </BoxWrapper>
        <BoxWrapper>
          <Pretendard weight="500" size="16px">
            <Title>부스 소개</Title>
          </Pretendard>
          <TextArea
            type="text"
            value={description}
            onChange={handleDescription}
            placeholder="부스 소개"
            style={{ fontFamily: "Pretendard-Regular", color: "var(--black)" }}
          />
        </BoxWrapper>
      </ContentWrapper>
      <Pretendard weight="600" size="18x">
        <ButtonWrapper>
          <Button className="Cancel">취소</Button>
          <Button className="Approve">완료</Button>
        </ButtonWrapper>
      </Pretendard>
      <Footer />
    </>
  );
};

export default EditBoothPage;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  margin: 0 30px 0 30px;
`;

const BoxWrapper = styled.div`
  border: none;
  width: 100%;
  padding: 12px 0 12px 0;
`;

const Title = styled.div`
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  border-radius: 8px;
  background-color: var(--gray0);
  padding: 10px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  resize: none;
  outline: none;
  border: none;
  border-radius: 8px;
  background-color: var(--gray0);
  padding: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 20px 20px 30px;

  .Cancel {
    font-family: "Pretendard-Regular";
    color: "var(--green3)";
  }

  .Approve {
    font-family: "Pretendard-Regular";
    color: var(--white);
    background: linear-gradient(90deg, #004628 0%, #107047 100%);
  }
`;

const Button = styled.button`
  width: 56px;
  height: 28px;
  border: none;
  border-radius: 6px;
  margin: 10px;
`;
