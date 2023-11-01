const operations = {
    sum: '+',
    substract: '-',
    multiplay: '*',
    division: '/'
}

function  calculate({prev, current, operation}) {
    let result = null

    switch (operation) {
        case operations.sum:
            result = sum(prev, current)
            break
        case operations.substract:
            result = substract(prev, current)
            break
        case operations.multiplay:
            result = multiplay(prev, current)
            break
        case operations.division:
            result = division(prev, current)
            break
        default:
            break
    }

    return result
}