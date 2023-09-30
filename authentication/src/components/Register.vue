<script setup>
import { userStore } from '../store/store.js';
const userManager = userStore();

import { ref } from 'vue'
let email = ref('');
let password = ref('');
let c_password = ref('');

let messages = ref([]);
let registered = ref(false);

function registerAUser() {
    messages.value = [];
    if (email.value == '') {
        messages.value.push('Please enter email address!');
    } else if (password.value == '' || c_password.value == '') {
        messages.value.push('Please enter password and confirm password!');
    } else if (password.value != c_password.value) {
        messages.value.push("Confirm password dosen't match");
    } else {
        let status = userManager.registerUser(email, password)

        if (status) {
            registered.value = true
            email.value = ''
            password.value = ''
            c_password.value = ''
        }
    }

}

</script>
<template>
    <div id="layoutAuthentication" class="bg-primary">
        <div id="layoutAuthentication_content">
            <main>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-7">
                            <div class="card shadow-lg border-0 rounded-lg mt-5">
                                <div class="card-header">
                                    <h3 class="text-center font-weight-light my-4">Create Account</h3>
                                </div>
                                <div class="card-body">
                                    <form>
                                        <div class="form-floating mb-3">
                                            <input class="form-control" id="inputEmail" type="email"
                                                placeholder="name@example.com" v-model="email" />
                                            <label for="inputEmail">Email address</label>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-md-6">
                                                <div class="form-floating mb-3 mb-md-0">
                                                    <input class="form-control" id="inputPassword" type="password"
                                                        placeholder="Create a password" v-model="password" />
                                                    <label for="inputPassword">Password</label>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-floating mb-3 mb-md-0">
                                                    <input class="form-control" id="inputPasswordConfirm" type="password"
                                                        placeholder="Confirm password" v-model="c_password" />
                                                    <label for="inputPasswordConfirm">Confirm Password</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-4 mb-0">
                                            <div class="d-grid"><a class="btn btn-primary btn-block" href="#"
                                                    @click.prevent="registerAUser()">Create Account</a></div>
                                        </div>
                                        <div class="mt-4">
                                            <p class="text-center" v-for="(message, index) in messages" :key="index">{{
                                                message }}</p>
                                            <p class="text-center" v-if="registered">Successfully registred. <router-link
                                                    to="/login">Please login!</router-link>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                                <div class="card-footer text-center py-3">
                                    <div class="small"><router-link to="/login">Have an account? Go to login</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        <div id="layoutAuthentication_footer">
            <footer class="py-4 bg-light mt-auto">
                <div class="container-fluid px-4">
                    <div class="d-flex align-items-center justify-content-between small">
                        <div class="text-muted">Copyright &copy; Your Website 2023</div>
                        <div>
                            <a href="#">Privacy Policy</a>
                            &middot;
                            <a href="#">Terms &amp; Conditions</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>

<style scoped></style>