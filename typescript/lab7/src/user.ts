interface IUser {
    hoten: string;
    username: string,
    password: string,
    tuoi: number
};

export let admin: IUser = {
    hoten: 'Tèo',
    username: "teo",
    password: '123',
    tuoi: 24,
};

export const dangnhap = () => { console.log('Hàm đăng nhập') }
export const thoat = () => { console.log('Hàm thoát') }

export class User implements IUser {
    constructor(
        public hoten: string, public username: string, public password: string, public tuoi: number
    ) {
        this.hoten = hoten;
        this.username = username;
        this.password = password;
        this.tuoi = tuoi;
    }
}