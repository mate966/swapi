// import { gql } from '@apollo/client';
// import { client } from './api';

// export interface LoginResponse {
//     loginUser: {
//         token: string;
//         user: {
//             id: string;
//             email: string;
//         };
//     };
// }

// export interface User {
//     id: string;
//     email: string;
// }

// const LOGIN = gql`
//     mutation LoginUser($email: String!, $password: String!) {
//         loginUser(email: $email, password: $password) {
//             token
//             user {
//                 id
//                 email
//             }
//         }
//     }
// `;

// export const authService = {
//     login: async (email: string, password: string) => {
//         const { data } = await client.mutate<LoginResponse>({
//             mutation: LOGIN,
//             variables: { email, password },
//         });
//         if (data?.loginUser.token) {
//             localStorage.setItem('token', data.loginUser.token);
//             client.setLink(client.link);
//         }
//         return data?.loginUser;
//     },

//     logout: () => {
//         localStorage.removeItem('token');
//         client.setLink(client.link);
//     },

//     getToken: () => {
//         return localStorage.getItem('token');
//     },

//     isAuthenticated: () => {
//         return !!localStorage.getItem('token');
//     },
// };

export const authService = {
    getToken: (): string | null => {
        return localStorage.getItem('token');
    },
    setToken: (token: string): void => {
        localStorage.setItem('token', token);
    },
    removeToken: (): void => {
        localStorage.removeItem('token');
    },
};
