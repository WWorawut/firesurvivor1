
export default (state = true, { type, sound }) => {
    switch (type) {
    case 'closeSound':
    return state = sound
    default:
    return state
    }
    }
    