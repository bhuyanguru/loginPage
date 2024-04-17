"use client";
import styled from 'styled-components';

const Title = styled.nav`
display:flex;
background-color:grey;
height: 5rem;
width : 100vw;
align-items:center;
justify-content:flex-end;

`;

const StyledBtn = styled.button`
 font-size:medium;
 margin:2em;
 font-weight:bold;
 padding: 1rem;
 margin-right:4rem;
`;



export default function Nav() {
    return (
    <>
        <Title>
         <div className='nav'>
            <StyledBtn> LOGIN</StyledBtn>
            <StyledBtn> SIGNUP</StyledBtn>
         </div>
        </Title>
    </> 
    );
  }
  