// // URL lib not allowed on codewars problem
// const { URLSearchParams, URL } = require('url')
// const stripUrlParams = (url, params) => {
//     const parsed = new URL('http://' + url)
//     const usp = new URLSearchParams(parsed.searchParams)
//     if (params !== undefined)
//         for (let p of params)
//             usp.delete(p)
//     const newParams = new URLSearchParams()
//     for (let e of usp.entries())
//         if (!newParams.has(e[0]))
//             newParams.set(e[0], e[1])
//     return `${parsed.host}${newParams.toString().length > 0 ? '?' : ''}${newParams.toString()}`
// }

const stripUrlParams = (url, paramsToStrip=[]) => {
    let [ baseUrl, queryString ] = url.split('?')
    if (queryString === undefined) return baseUrl
    const params = [...queryString
        .split('&')
        .map( p => p.split('='))
        .filter( p => !paramsToStrip.includes(p[0]) )
        .reduce( (acc, cur) => acc.has(cur[0]) ? acc : acc.set(cur[0], cur[1]), new Map())
        .entries()]
    return `${baseUrl}?${params.map(e=>e.join('=')).join('&')}`
}

console.log(stripUrlParams('www.codewars.com?a=1&b=2&a=2')) // returns 'www.codewars.com?a=1&b=2'
console.log(stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b'])) // returns 'www.codewars.com?a=1'
console.log(stripUrlParams('www.codewars.com', ['b'])) // returns 'www.codewars.com'