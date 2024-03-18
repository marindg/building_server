export interface getUserDTO {
  idclerk: string;
}

export interface deleteUserDTO {
  idclerk: string;
}

export interface getUsersDTO {}

export interface updateActiveUserDTO {
  idclerk: string;
  active: boolean;
}

export interface createUserDTO {
  name: string;
  avatarUrl: string;
  email: string;
  role: string;
  agencyId: string | null;
  idclerk: string;
}
