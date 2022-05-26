import React from 'react';
import Navbar from './navbar';
import style from 'styled-components';
import { ShoppingCart } from '@material-ui/icons';

const Container = style.div`
    background-color: #172254;
`
const Wrapper = style.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`
const Title = style.h1`
    font-size: 24pt;
    cursor: pointer;
    color: chocolate;
`
const Cart = style.span`
cursor: pointer;
color: chocolate;
&:hover {
    background-color: orange;
    padding: 5px;
    border-radius: 5px;
}
`
const HomePage = () => {
    return(
        <div>
            <Container>
                <Wrapper>
                    <Title>J&J's Breaks</Title>
                    <Cart>
                        <ShoppingCart/>
                    </Cart>
                </Wrapper>
                <Navbar/>
            </Container>
            <hr/>
        </div>
    )
}

export default HomePage;