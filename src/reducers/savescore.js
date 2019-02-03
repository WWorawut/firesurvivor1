
export default (state = 0, { type, score }) => {
    switch (type) {
    case 'savescore':
    return state + score
    default:
    return state
    }
    }
    