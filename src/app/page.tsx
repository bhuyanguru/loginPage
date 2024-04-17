"use client";
import styled from 'styled-components';

const wrapper = styled.section`
height:100vh;
width:100vw;
background-color:blue;
display:flex;
flex-direction:coloumn;
`;


export default function Home() {
  return (
    <div>
      <div className="imgDiv">Img</div>
      <div className="formDiv">Form</div>
    </div>
  );
}
