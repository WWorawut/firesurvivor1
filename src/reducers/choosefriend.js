

export default (state = false, { type, choosefriend  }) => {
    switch (type) {
    case 'choosefriend':
    return state = choosefriend
    default:
    return state
    }
    }
    