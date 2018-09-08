import styled from 'styled-components'



export const Image = styled.img`
    width:100%;
`;

export const HeroImage = styled.div`
    height:100vh;
    background-image:url('${require('../../assets/top.jpg')}');
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;

    display:flex;
    justify-content:start;
    flex-direction:column;
    align-content:start;

    text-align:left;
    font-size:2rem;
    color:#fff;
    padding-left:30px;
    h1{
        margin-bottom:10px;
        margin-top:20px;
    }
    h2{
        margin-top:20px;

    }
`;