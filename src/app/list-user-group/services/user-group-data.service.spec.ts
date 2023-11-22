import { IUserGroup } from "src/app/core/model/interface/user-group.interface";
import { UserGroupDataService } from "./user-group-data.service"
import * as fakData from './mock-data/index'

describe('SUT:UserGroupDataService', () => {
    let sut: UserGroupDataService
    beforeEach(() => {
        sut = new UserGroupDataService();
    })

    it('should be create', () => {
        // assert
        expect(sut).toBeTruthy()
    });

    it('should be returned all data userGroup', () => {
        // arrange
        let actual: IUserGroup[] = []

        // act
        sut.getAllData().subscribe((res) => {
            actual = res;
        })

        // assert
        expect(actual).toEqual(fakData.userGroups)
    });

    it('should be deleted the data with the desired userGroupId ', () => {
        // arrange
        let actual: IUserGroup[] = []

        // act
        sut.deleteData('userGroup_26_t').subscribe((res) => {
            actual = res;
        })

        // assert
        expect(actual).toEqual([{ id: 'userGroup_23_k', description: 'test for description', name: 'm1 k1' }])
    });

    it('should be added new userGroup to the list of userGroups', () => {
        // arrange
        let actual: IUserGroup[] = []
        const newUserGroup = {
            id: 'userGroup_29_l', description: 'test for description', name: 'm3 k3'
        }

        // act
        sut.addedData(newUserGroup).subscribe((res) => {
            actual = res
        })

        // assert
        expect(actual).toEqual([
            { id: 'userGroup_23_k', description: 'test for description', name: 'm1 k1' },
            { id: 'userGroup_26_t', description: 'test for description', name: 'm2 k2' },
            { id: 'userGroup_29_l', description: 'test for description', name: 'm3 k3' }
        ]);
    });

    it('should be updated userGroup information', () => {
        // arrange
        let actual: IUserGroup[] = []
        const updateUserGroup: IUserGroup = { id: 'userGroup_23_k', description: 'test for description', name: 'mo2 ki2' }

        // act
        sut.editData('userGroup_23_k', updateUserGroup).subscribe((res) => {
            actual = res;
        })

        // assert
        expect(actual).toEqual([
            { id: 'userGroup_23_k', description: 'test for description', name: 'mo2 ki2' },
            { id: 'userGroup_26_t', description: 'test for description', name: 'm2 k2' }])
    });

    it(`should be find the desired userGroup according to the ID and return the userGroup's data`, () => {
        // arrange
        let actual!: IUserGroup

        // act
        sut.getByID('userGroup_26_t').subscribe((res) => {
            actual = res;
        })

        // assert
        expect(actual).toEqual({id:'userGroup_26_t',description: 'test for description', name: 'm2 k2' })
    });
})