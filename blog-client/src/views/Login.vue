<template>

    <div class="max-w-md max-auto w-full">
        <form class="mt-8 space-y-6" v-on:submit.prevent="attemptLogin">
            <div class="rounded-md shadow-sm space-y-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700" for="email">
                        Email
                    </label>
                    <div class="mt-1">
                        <input
                            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            id="email" type="email" placeholder="abc@example.com" v-model="form.email">
                        <p class="mt-2 text-sm text-red-600" v-if="errors.email">{{errors.email[0]}}</p>
                    </div>
                </div>
                <div>

                    <label class="block text-sm font-medium text-gray-700" for="password">
                        Password
                    </label>
                    <div class="mt-1">
                        <input
                            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            id="password" type="password" placeholder="******************" v-model="form.password">
                        <p class="mt-2 text-sm text-red-600" v-if="errors.password">{{errors.password[0]}}</p>
                    </div>
                </div>
                <div class="flex items-center justify-between">
                    <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        Sign In
                    </button>

                </div>
            </div>
        </form>
    </div>
</template>

<script>
import {useStore} from 'vuex';
import {reactive,ref} from 'vue';

export default {

    setup() {
        const store = useStore()
        const errors=ref([])
        const form = reactive({
            email: '',
            password: ''
        })
        const attemptLogin = () => {
            store.dispatch('login', form).catch((e)=>{
               if(e.response.status===422){
                   errors.value=e.response.data.errors
               }
            })
        }
        return {
            attemptLogin,
            form,
            errors
        }
    }
}
</script>
