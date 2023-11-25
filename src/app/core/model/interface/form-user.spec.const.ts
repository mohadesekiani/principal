

export class formUserConst {
    static get SomeValidFormUser() {
        return {
            id: '',
            lastName: 'm4',
            firstName: 'k4',
            email: 'm4@gmail.com',
            description: 'test for description',
            name: 'm4 k4'
        }

    }
    static get SomeInvalidFormUser() {
        return {
            id: null,
            lastName: null,
            firstName: null,
            email: 'm4@gmail.com',
            description: null,
            name:null
        }

    }
    static get defaultFormUser() {
        return {
            id: null,
            lastName: null,
            firstName: null,
            email: null,
            description: null,
            name:null
        }

    }
}