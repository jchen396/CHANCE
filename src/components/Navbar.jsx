import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch } from "react-redux";
import { logoutStart } from "../redux/userRedux";
import { logoutProduct } from "../redux/cartRedux";

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
`;
const Left = styled.div`
    flex: 3;
    display: flex;
    align-items: center;
`;
const Language = styled.span`
    font-style: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
    border: solid lightgray 0.5px;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
    &:focus {
        outline: none;
    }
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "24px" })}
    a:link {
        text-decoration: none;
    }
`;
const Right = styled.div`
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: "2", justifyContent: "center" })}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
`;
const MenuItem = styled.div`
    font-style: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
    &:hover {
        opacity: 0.8;
    }
`;

const Navbar = () => {
    const quantity = useSelector((state) => state.cart.quantity);
    const user = useSelector((state) => state.user.currentUser);
    const dispatch = useDispatch();
    console.log(user);

    const handleLogOut = () => {
        dispatch(logoutStart());
        dispatch(logoutProduct());
    };
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Link
                        to="/"
                        style={{
                            textDecoration: "none",
                            color: "black",
                            display: "flex ",
                            justifyContent: "center",
                            justifySelf: "center",
                            alignSelf: "center",
                        }}
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Clover_symbol.svg/1024px-Clover_symbol.svg.png"
                            alt="clover"
                            style={{ height: "40px", width: "40px" }}
                        />
                        <Logo>CHANCE</Logo>
                    </Link>
                </Center>
                {user ? (
                    <Right>
                        {" "}
                        <h3>{user.username}</h3>
                        <MenuItem onClick={handleLogOut}>LOG OUT</MenuItem>
                        <Link to="/cart">
                            <MenuItem>
                                <Badge badgeContent={quantity} color="primary">
                                    <ShoppingCartOutlined />
                                </Badge>
                            </MenuItem>
                        </Link>{" "}
                    </Right>
                ) : (
                    <Right>
                        <Link
                            to="/register"
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            <MenuItem>REGISTER</MenuItem>
                        </Link>
                        <Link
                            to="/login"
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            <MenuItem>SIGN IN</MenuItem>
                        </Link>
                        <Link to="/cart">
                            <MenuItem>
                                <Badge badgeContent={quantity} color="primary">
                                    <ShoppingCartOutlined />
                                </Badge>
                            </MenuItem>
                        </Link>
                    </Right>
                )}
            </Wrapper>
        </Container>
    );
};

export default Navbar;
