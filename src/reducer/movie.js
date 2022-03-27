// state 기본 값 
const initialState = [
    {
        id: 1,
        title: "어바웃 타임",
        poster: "/images/abouttime.jpg"
    },
    {
        id: 2,
        title: "다크나이트",
        poster: "/images/darknight.jpg"
    }
];

// 액션 타입명
// 사용 이유 : 오타를 막기 위해 정의
export const INSERT_MOVIE = "INSERT_MOVIE";

// 타입명에 의한 상태 관리 로직 정의
const movie = (state = initialState, action) => {
    switch(action.type) {
        case INSERT_MOVIE:
            console.log(action);
            return state.concat(
                { 
                    id: action.data.id, 
                    title: action.data.title, 
                    poster: action.data.poster 
                }
            );
        default:
            return state;
    }
}

export default movie;