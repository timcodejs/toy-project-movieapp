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
                    <p>{item.title}</p>
                    <p><img src={item.poster} alt="영화 포스터" /></p>
                </div>
            ))}
        </HomeMoviesWrap>
    )
}

export default HomeMain;

const HomeMoviesWrap = styled.div`
    padding: 0 10%;
    img {
        width: 200px;
    }
`;