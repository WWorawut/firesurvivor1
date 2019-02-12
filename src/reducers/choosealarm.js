

export default (state = false, { type, choosealarm  }) => {
    switch (type) {
    case 'choosealarm':
    return state = choosealarm
    default:
    return state
    }
    }
    