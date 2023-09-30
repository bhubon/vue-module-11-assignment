import { defineStore } from "pinia";
import { ref, reactive, computed } from 'vue'

const userStore = defineStore('userStore', () => {

    const users = ref([]);
    localStorage.setItem('users', JSON.stringify(users.value))

    const registerUser = (email, passwowrd) => {
        let user = {
            email: email,
            passwowrd: passwowrd
        }
        let register_user = users.value.push(user)
        if (register_user) {
            return "registered"
        }

    };
    const loginUser = (user) => {

    }

    return { users, registerUser, loginUser }
});

export { userStore }