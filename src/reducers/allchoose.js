
export default (state = false, { type, enterroom  }) => {
    switch (type) {
    case 'enterroom':
    return state = enterroom
    default:
    return state
    }
    }
    