import axios from "axios";



const instans = axios.create({
    withCredentials:true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY" : "4a93d057-d084-4a69-a91d-384fa34f59d8"
    }
})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10)  {
        return instans.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })

    },
    follow(userId: number) {
        return  instans.post(`follow/${userId}`
        )
    },
    unfollow(userId: number) {
        return  instans.delete(`follow/${userId}`)

    },
    getProfile(userId:string) {
        return instans.get("profile" + userId)
    }

}

export const authAPI = {
    me () {
        return instans.get(`auth/me`  )
    }

}

// export const getUsers = (currentPage = 1, pageSize = 10) => {
//     return instans.get(`users?page=${currentPage}&count=${pageSize}`)
//         .then(response => {
//             return response.data;
//         })
//
// }
//
// export const getUsers2 = (currentPage = 1, pageSize = 10) => {
//     return instans.get(`follow?page=${currentPage}&count=${pageSize}`)
//         .then(response => {
//             return response.data;
//         })
//
// }