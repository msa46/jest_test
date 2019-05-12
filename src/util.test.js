jest.mock('./http')

const {loadTitle} = require('./util')

test ('should print an upercase tezt', () => {
    loadTitle().then(title => {
        expect(title).toBe("DELECTUS AUT AUTEM")
    })
})