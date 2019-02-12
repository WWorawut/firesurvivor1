
export default (state = '', { type, user  }) => {
    switch (type) {
    case 'takeuser':
    return state = user
    default:
    return state
    }
}

