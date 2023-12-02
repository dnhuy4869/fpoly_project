export interface IHocSinh {
    id: number;
    ten: string;
    toan: number;
    van: number;
};

export const expHocSinh: IHocSinh[] = [
    {
        id: 1,
        ten: "Hứa Đi Anh",
        toan: 8,
        van: 6
    },
    {
        id: 2,
        ten: "Đào Kho Báu",
        toan: 9,
        van: 7
    },
    {
        id: 3,
        ten: "Đào Được Vàng",
        toan: 7,
        van: 9.5
    },
]

export const layHS = (index:number):IHocSinh => {
    return expHocSinh[index];
}

