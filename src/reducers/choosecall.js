
export default (state = false, { type, choosecall  }) => {
    switch (type) {
    case 'choosecall':
    return state = choosecall
    default:
    return state
    }
    }
    