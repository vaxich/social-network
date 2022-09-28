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
        console.warn('старый метод. испоьльзуйте profileAPI')
        return profileAPI.getProfile(userId)
    }

}

export const profileAPI = {

    getProfile(userId:string) {
        return instans.get("profile/" + userId)
    },
    getStatus(userId:string) {
        return instans.get("profile/status/" + userId)
    },
    updateStatus(status:string){
        return instans.put("profile/status/", {status})
    }

}

export const authAPI = {
    me () {
        return instans.get(`auth/me`  )
    }

}
