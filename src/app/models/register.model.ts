export interface RegisterRq {
    firtsName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface RegisterRs {
    auth: boolean;
    token: string;
}