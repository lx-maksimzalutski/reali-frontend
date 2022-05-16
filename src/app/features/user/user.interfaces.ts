export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
}

export interface UserInput {
  name: string;
  username: string;
  email: string;
  address: Address;
}

export interface Address {
  street: string;
  city: string;
}
