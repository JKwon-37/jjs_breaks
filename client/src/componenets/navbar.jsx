import React from 'react'
import style from 'styled-components';

const Container = style.div`
    height: 40px;
`
const Wrapper = style.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-around;
`
const Left = style.div`flex: 1;`
const Singles = style.span`
    font-size: 14pts;
    cursor: pointer;
    color: chocolate;
    &:hover {
        text-decoration: underline;
    }
`
const Center = style.div`flex:1;`
const Sealed = style.span`
    font-size: 14pts;
    cursor: pointer;
    color: chocolate;
    &:hover {
        text-decoration: underline;
    }
`
const Right = style.div`flex:1;`
const Preorder = style.span`
    font-size: 14pts;
    cursor: pointer;
    color: chocolate;
    &:hover {
        text-decoration: underline;
    }
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Singles>Singles</Singles>
            </Left>
            <Center>
                <Sealed>Sealed</Sealed>
            </Center>
            <Right>
                <Preorder>Preorder</Preorder>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar