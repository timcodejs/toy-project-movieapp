import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const HomeMain = () => {
    const movieState = useSelector((state) => state.movie);

    return(
        <HomeMoviesWrap>
            <h1>HomeMain</h1>
            {movieState.map((item, index) => (
                <div key={index}>
                    <div>
                        <p><img src={item.poster} alt="영화 포스터" /></p>
                        <p>{item.title}</p>
                    </div>
                </div>
            ))}
        </HomeMoviesWrap>
    )
}

export default HomeMain;

const HomeMoviesWrap = styled.div`
    padding: 0 10%;
    text-align: center;
    img {
        width: 200px;
        height: 300px;
    }

    & > div {
        display: inline-block;
        margin: 15px;
        font-size: 16px;
        font-weight: 600;
    }
`;