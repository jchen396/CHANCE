import styled from "styled-components"
import {mobile} from "../responsive"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255, 0.5),
        rgba(255,255,255, 0.5)), 
        url("https://img.freepik.com/free-photo/blonde-woman-with-perfect-wavy-hairstyle-pink-party-dress-posing-hight-heels_273443-1636.jpg?t=st=1652075764~exp=1652076364~hmac=0a3c22f02d415d4dade3189d4bd8cb5dd709f0b4f3d1d92202d3166cd5027017&w=996") 
        center
        no-repeat;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
`;
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color:white;
    ${mobile({width:"75%"})}
`;
const Title = styled.div`
    font-size: 24px;
    font-weight:300;
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;
const Button = styled.button`
    width: 40%;
    border:none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
            <Input placeholder="name"/>
            <Input placeholder="last name"/>
            <Input placeholder="email"/>
            <Input placeholder="password"/>
            <Input placeholder="confirmed password"/>
            <Agreement>
                By creating an account, I consent to the processing of my personal
                data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
    
    )
}

export default Register