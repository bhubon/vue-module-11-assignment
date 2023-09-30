<script setup>
import { ref } from 'vue'
import { userStore } from '../store/store.js';
const userManager = userStore();

let email = ref('')
let password = ref('')

let messages = ref([]);

function loginControl() {
    messages.value = [];
    if (email.value == '') {
        messages.value.push('Please enter email address!');
    } else if (password.value == '') {
        messages.value.push('Please enter password');
    } else {
        // let status = userManager.registerUser(email, password)

        // if (status) {
        //     registered.value = true
        //     email.value = ''
        //     password.value = ''
        //     c_password.value = ''
        // }
    }
}

</script>
<template>
    <div id="layoutAuthentication" class="bg-primary">
        <div id="layoutAuthentication_content">
            <main>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-5">
                            <div class="card shadow-lg border-0 rounded-lg mt-5">
                                <div class="card-header">
                                    <h3 class="text-center font-weight-light my-4">Login</h3>
                                </div>
                                <div class="card-body">
                                    <form>
                                        <div class="form-floating mb-3">
                                            <input class="form-control" id="inputEmail" type="email"
                                                placeholder="name@example.com" v-model="email" />
                                            <label for="inputEmail">Email address</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input class="form-control" id="inputPassword" type="password"
                                                placeholder="Password" v-model="password" />
                                            <label for="inputPassword">Password</label>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-center mt-4 mb-0">
                                            <a class="btn btn-primary" href="#" @click.prevent="loginControl()">Login</a>
                                        </div>
                                        <div class="mt-4">
                                            <p class="text-center" v-for="(message, index) in messages" :key="index">{{
                                                message }}</p>
                                        </div>
                                    </form>
                                </div>
                                <div class="card-footer text-center py-3">
                                    <div class="small"><router-link to="/register">Need an account? Sign up!</router-link>
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