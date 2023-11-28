import { IItem } from "src/app/core/model/interface/user.interface";
import { UserDataService } from "./user-data.service"
import * as fakData from './mock-data/index'

describe('SUT: UserDataService', () => {
    let sut: UserDataService;
    beforeEach(() => {
        sut = new UserDataService();
    })
    it('should be create', () => {
        // assert
        expect(sut).toBeTruthy()
    });

    it('should be returned all data user', () => {
        // arrange
        let actual: IItem[] = []

        // act
        sut.getAllData().subscribe((res) => {
            actual = res;
        })

        // assert
        expect(actual).toEqual(fakData.users)
    });

    it('should be deleted the data with the desired userId ', () => {
        // arrange
        let actual: IItem[] = []

        // act
        sut.deleteData('315768d5').subscribe((res) => {
            actual = res;
        })

        // assert
        expect(actual).toEqual([
            { id: 'a096aae1', type: "user", firstName: 'm2', lastName: 'k2', email: 'm2@gmail.com', description: 'test for description', name: 'm2 k2' },
            { id: 'userGroup_23_k', type: "user_group", description: 'test for description', name: 'm10 k1', firstName: null, lastName: null, email: null },
            { id: 'userGroup_26_t', type: "user_group", description: 'test for description', name: 'm20 k2', firstName: null, lastName: null, email: null },])
    });

    it('should be added new user to the list of users', () => {
        // arrange
        let actual: IItem[] = []
        const newUser = {
            id: 'a096aae2', type: "user", firstName: 'm3', lastName: 'k3', email: 'm3@gmail.com', description: 'test for description', name: 'm3 k3'
        }

        // act
        sut.addedData(newUser).subscribe((res) => {
            actual = res
        })

        // assert
        expect(actual).toEqual([
            { id: '315768d5', firstName: 'm1', type: "user", lastName: 'k1', email: 'm1@gmail.com', description: 'test for description', name: 'm1 k1' },
            { id: 'a096aae1', firstName: 'm2', type: "user", lastName: 'k2', email: 'm2@gmail.com', description: 'test for description', name: 'm2 k2' },
            { id: 'userGroup_23_k', type: "user_group", description: 'test for description', name: 'm10 k1', firstName: null, lastName: null, email: null },
            { id: 'userGroup_26_t', type: "user_group", description: 'test for description', name: 'm20 k2', firstName: null, lastName: null, email: null },
            { id: 'a096aae2', firstName: 'm3', type: "user", lastName: 'k3', email: 'm3@gmail.com', description: 'test for description', name: 'm3 k3' }
        ]);
    });

    it('should be updated user information', () => {
        // arrange
        let actual: IItem[] = []
        const updateUser: IItem = { id: '315768d5', type: "user", firstName: 'mo2', lastName: 'ki2', email: 'm1@gmail.com', description: 'test for description', name: 'mo2 ki2' }

        // act
        sut.editData('315768d5', updateUser).subscribe((res) => {
            actual = res;
        })

        // assert
        expect(actual).toEqual([
            { id: '315768d5', firstName: 'mo2', lastName: 'ki2', type: "user", email: 'm1@gmail.com', description: 'test for description', name: 'mo2 ki2' },
            { id: 'a096aae1', firstName: 'm2', lastName: 'k2', type: "user", email: 'm2@gmail.com', description: 'test for description', name: 'm2 k2' },
            { id: 'userGroup_23_k', type: "user_group", description: 'test for description', name: 'm10 k1', firstName: null, lastName: null, email: null },
            { id: 'userGroup_26_t', type: "user_group", description: 'test for description', name: 'm20 k2', firstName: null, lastName: null, email: null },])
    });

    it(`should be find the desired user according to the ID and return the user's data`, () => {
        // arrange
        let actual!: IItem

        // act
        sut.getByID('a096aae1').subscribe((res) => {
            actual = res;
        })

        // assert
        expect(actual).toEqual({ id: 'a096aae1', firstName: 'm2', lastName: 'k2', type: "user", email: 'm2@gmail.com', description: 'test for description', name: 'm2 k2' })
    });

})