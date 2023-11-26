

export class formUserConst {
    static get SomeFormUser() {
        return {
            id: '',
            lastName: 'm4',
            firstName: 'k4',
            email: 'm4@gmail.com',
            description: 'test for description',
            name: 'm4 k4'
        }

    }
    static get FormUserWithParams() {
        return {
            id: '123', lastName: 'm3', firstName: 'k3', email: 'john.doe@example.com', description: 'test for description', name: 'm3 k3'
        }

    }
    static get SomeInvalidFormUser() {
        return {
            id: '',
            lastName: null,
            firstName: null,
            email: 'm4@gmail.com',
            description: null,
            name: null
        }

    }
    static get defaultFormUser() {
        return {
            id: null,
            lastName: null,
            firstName: null,
            email: null,
            description: null,
            name: null
        }

    }
}