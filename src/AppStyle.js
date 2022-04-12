import styled from 'styled-components';


export const Header = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 250px;
    font-size: 2.5rem;
    color: rgb(21, 240, 172);

    img{
        margin-top: 15px;

    }

    p{
        margin-top: 0px;
        color: rgb(21, 240, 172);


        span{
            color: rgb(150,65,212);
        }
    }
   
`;

export const Button = styled.button`
    width: 250px;
    height: 60px;
    background-color: blue;
    border-radius: 45px;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    margin: 0 30px;
    background-color: rgb(150,65,212);
    border: none;
    box-shadow: -2px 2px 10px rgba(21, 240, 172, .3);

    &:hover{
        background-color: rgba(150,65,212,.8);
    }


`;