<template>
    <div class="login-wrapper">
        <div class="login-wrapper-title">vue-h5-代码模版</div>
        <van-cell-group inset class="login-wrapper-content">
            <van-field v-model="loginForm.username" label="账号" placeholder="请输入账号" />
            <van-field v-model="loginForm.password" type="password" label="密码" placeholder="请输入密码" />
        </van-cell-group>
        <div class="login-wrapper-btn" @click="handleLogin">
            登 录
        </div>
        <div class="login-wrapper-forget">
            <p @click="handleForget">忘记密码？</p>
        </div>

    </div>
</template>
  
<script>
export default {
    name: 'Login',
    data() {
        return {
            loginForm: {
                username: "",
                password: "",
                code: ''
            }
        };
    },
    methods: {
        handleLogin() {
            if (!loginForm.value.username || !loginForm.value.password || loginForm.value.username !== 'admin') {
                this.$oast.fail('账号或密码错误');
                return;
            }
            this.$store.commit("token", "token");
            this.$router.push({ name: 'Index' })
        },

        handleForget() {
            this.$toast.success('账号:admin');
        }
    }
}
</script>
  
<style lang="scss" scoped>
.login-wrapper {
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);

    &-content {
        margin: 0 auto;
        text-align: center;
        width: 100%;
        max-width: 300px;
    }

    &-title {
        margin: 0 auto 57px;
        font-size: 18px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        text-align: center;
    }

    &-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 30px auto 0;
        width: 266px;
        height: 38px;
        font-size: 16px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        background: linear-gradient(90deg, #4685ff 0%, #1d57ff 100%);
        border-radius: 0.04rem;
        color: white;
    }

    &-forget {
        margin: 30px auto 0;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        text-align: center;
    }
}
</style>
  