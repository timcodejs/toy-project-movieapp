import React from "react";
import styled from 'styled-components';

const NavLayout = ({ children }) => {
    return(
        <>
            <NaviWrap>
                <div>
                    <h1>
                        <button><a href="/">TheMovies</a></button>
                    </h1>
                    <div>
                        <button><a href="/">Home</a></button>
                        <button><a href="/movies">Movies</a></button>
                    </div>
                </div>
            </NaviWrap>
            <div>{children}</div>
        </>
    )
}

export default NavLayout;

const NaviWrap = styled.div`
    position: relative;
    z-index: 100;
    max-width: 80rem;
    min-width: 18.75rem;
    width: 80%;
    height: 100px;
    margin: 0 auto;
    & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10%;
    }
    & h1 a {
        font-size: 20px;
        font-weight: bold;
    }
    & button {
        font-size: 20px;
        font-weight: bold;
        padding: 8px 16px;
    }
`;
