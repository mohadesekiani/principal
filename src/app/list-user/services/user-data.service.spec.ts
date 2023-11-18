import { UserDataService } from "./user-data.service"


describe('SUT: UserDataService',()=>{
    let sut:UserDataService;
    beforeEach(()=>{
        sut = new UserDataService();
    })
    it('should be create', () => {
        expect(sut).toBeTruthy()
    });
    
})