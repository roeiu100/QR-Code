import React from "react";
import styled from "styled-components";
import "./style.css";
import QR from "./images/qr.png";
const FrontendMentor = () => {
  return (
    <>
      <Card>
        <Card2>
          <Card3>
            <img src={QR} alt="" />
            <br />
             <div>
              <p>
                Improve your front-end <br />
                skills by building projects
              </p>
              <p>
                Scan the Qr code to visit Front-end
                <br /> Mentor and take your coding skills to
                <br /> the next level!
              </p>
          </div>
          </Card3>
        </Card2>
      </Card>
    </>
  );
};
const Card = styled.div`
  width: auto;
  height: 1440px;
  background-color: var(--Light-gray);
  display: flex;
  justify-content: center;
`;
const Card2 = styled(Card)`
  margin-top: 10%;
  height: 400px;
  width: 250px;
  border-radius: 10px;
  background-color: var(--White);
`;
const Card3 = styled.div`
  border-radius: 10px;
  img {
    margin-top: 12px;
    border-radius: 10px;
    width: 90%;
  }
  p:nth-child(odd) {
    margin: 10px;
    font-weight: 700;
  }
  p:nth-child(even) {
    margin: 7px;
    color: var(--Grayish-blue);
    font-weight: 400;
    font-size: 12px;
  }
`;

export default FrontendMentor;
