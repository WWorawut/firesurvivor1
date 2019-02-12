
export default (state = false, { type, timer }) => {
    switch (type) {
    case 'stopTimer':
    return state = timer
    default:
    return state
    }
    }
    