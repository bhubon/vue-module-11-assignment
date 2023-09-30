import { defineStore } from "pinia";
import { ref, reactive, computed } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import { useRouter } from 'vue-router';

const userStore = defineStore('userStore', () => {
    const router = useRouter();
    const isAuthenticated = localStorage.getItem('token')
    const users = ref({
        email: '',
        password: ''
    });
    localStorage.setItem('users', JSON.stringify(users.value))

    const registerUser = (email, password) => {
        users.value.email = email
        users.value.password = password
        return "registered"

    };
    const loginUser = (email, pass) => {
        if (users.value.email == email && users.value.password == pass) {
            localStorage.setItem('token',true)
            router.push('/');
        } else {
            return "failed"
        }
    }

    const logout = ()=>{
        localStorage.setItem('token',false)
    }

    return { users, registerUser, loginUser }
});

export { userStore }