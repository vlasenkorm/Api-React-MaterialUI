/* eslint-disable no-undef */

const withCatch = (fn) => async (req, res, next) => {
    try  {
        await fn(req, res, next)
    } catch (e) {
        next(e)
    }
}

const checkToken = () => {
    return !!localStorage.getItem('token')
}

module.exports = { withCatch, checkToken }