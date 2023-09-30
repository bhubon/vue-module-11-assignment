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

    const registerUser = (email, password) => {
        users.value.email = email
        users.value.password = password
        return "registered"

    };
    const loginUser = (email, pass) => {
        if (users.value.email == email && users.value.password == pass) {
            localStorage.setItem('token', 111)
            router.push('/');
        } else {
            return "failed"
        }
    }

    const logout = () => {
        localStorage.setItem('token', '')
        router.push('/login');
    }

    return { users, registerUser, loginUser, logout }
});

export { userStore }