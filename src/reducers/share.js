
export default (state = '', { type, share  }) => {
    switch (type) {
    case 'share':
    return state = share
    default:
    return state
    }
}