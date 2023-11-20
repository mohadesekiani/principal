import { IUser } from "src/app/core/model/interface/user.interface";
import { UserDataService } from "./user-data.service"
import * as fakData from './mock-data/index'

describe('SUT: UserDataService', () => {
    let sut: UserDataService;
    beforeEach(() => {
        sut = new UserDataService();
    })
    it('should be create', () => {
        expect(sut).toBeTruthy()
    });

    it('should be returned all data user', () => {
        // arrange
        let actual: IUser[] = []

        // act
        sut.getAllUserData().subscribe((res) => {
            actual = res;
        })

        // assert
        expect(actual).toEqual(fakData.users)
    });

    it('should be deleted the data with the desired userId ', () => {
        // arrange
        let actual: IUser[] = []

        // act
        sut.deleteUserData('315768d5').subscribe((res) => {
            actual = res;
        })

        // assert
        expect(actual).toEqual([{ id: 'a096aae1', firstName: 'm2', lastName: 'k2', email: 'm2@gmail.com' }])
    });

    it('should be added new user to the list of users ', () => {
        // arrange
        let actual: IUser[] = []
        const newUser = {
            id: 'a096aae2',
            firstName: 'm3',
            lastName: 'k3',
            email: 'm3@gmail.com'
        }

        // act
        sut.addedUserData(newUser).subscribe((res) => {
            actual = res
        })

        // assert
        expect(actual).toEqual([
            { id: '315768d5', firstName: 'm1', lastName: 'k1', email: 'm1@gmail.com' },
            { id: 'a096aae1', firstName: 'm2', lastName: 'k2', email: 'm2@gmail.com' },
            { id: 'a096aae2', firstName: 'm3', lastName: 'k3', email: 'm3@gmail.com' }
        ]);
    });

    it('should be updated user information', () => {
        // arrange
        let actual: IUser[] = []
        const updateUser: IUser = { id: '315768d5', firstName: 'mo2', lastName: 'ki2', email: 'm1@gmail.com' }

        // act
        sut.editUserData('315768d5', updateUser).subscribe((res) => {
            actual = res;
        })

        // assert
        expect(actual).toEqual([
            { id: '315768d5', firstName: 'mo2', lastName: 'ki2', email: 'm1@gmail.com' },
            { id: 'a096aae1', firstName: 'm2', lastName: 'k2', email: 'm2@gmail.com' }])
    });

    it(`should be find the desired user according to the ID and return the user's data`, () => {
        // arrange
        let actual: IUser[] = []

        // act
        sut.getByID('a096aae1').subscribe((res) => {
            actual = res;
        })

        // assert
        expect(actual).toEqual([{ id: 'a096aae1', firstName: 'm2', lastName: 'k2', email: 'm2@gmail.com' }])
    });

})