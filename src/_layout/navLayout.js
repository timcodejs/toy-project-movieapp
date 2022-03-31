import React from "react";
import styled from 'styled-components';

const NavLayout = ({ children }) => {
    return(
        <>
            <NaviWrap>
                <h1>
                    <button><a href="/">TheMovies</a></button>
                </h1>
                <div>
                    <NaviButton><a href="/">Home</a></NaviButton>
                    <NaviButton><a href="/movies">Movies</a></NaviButton>
                </div>
            </NaviWrap>
            <div>{children}</div>
        </>
    )
}

export default NavLayout;

const NaviWrap = styled.div`
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    h1 a {
        font-size: 20px;
        font-weight: bold;
    }
    
`;

const NaviButton = styled.button`
    font-size: 20px;
    font-weight: bold;
    padding: 8px 16px;
`;