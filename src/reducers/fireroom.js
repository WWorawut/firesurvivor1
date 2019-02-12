
export default (state = false, { type, fireroom  }) => {
    switch (type) {
    case 'fireroom':
    return state = fireroom
    default:
    return state
    }
    }
    