<template>
    <a-layout class="ant-layout">
        <a-layout-header class="header-box">
            <div class="header-left">
                <Collapse @toggle="toggle"></Collapse>
                <Breadcrumb />
            </div>
            <div class="header-right">
                <a-popover class="item" title="未读消息" trigger="hover">
                    <template v-slot:content>
                        <div style="max-width: 200px">
                            <a-menu @click="clickMsg">
                                <a-menu-item v-for="m in msg" :key="m.id">
                                    {{ m.msg }}
                                </a-menu-item>
                            </a-menu>
                        </div>
                    </template>
                    <a-badge :count="msg.length" :overflow-count="99">
                        <BellOutlined class="icon" style="vertical-align: 2px" />
                    </a-badge>
                </a-popover>
                <div class="item">
                    <GithubOutlined class="icon" @click="openGithub" />
                </div>
                <a-dropdown class="item">
						<span
                        >{{ name }}<UserOutlined class="icon" style="margin-left: 2px"
                        /></span>
                    <template v-slot:overlay>
                        <a-menu>
                            <a-menu-item @click="logout"> 退出登录 </a-menu-item>
                        </a-menu>
                    </template>
                </a-dropdown>
            </div>
        </a-layout-header>
        <ant-content/>
    </a-layout>
    <a-modal title="消息" v-model:visible="visible" @ok="visible = false">
        <p>{{ msgText }}</p>
    </a-modal>
</template>
<script>
    import {ref } from 'vue'
    import { useRouter } from 'vue-router'
    import Collapse from './collapse.vue'
    import antContent from '../content/index.vue'
    import{ GithubOutlined, BellOutlined } from '@ant-design/icons-vue'
    import Breadcrumb from './breadcrumb.vue'

    import {useStore} from "vuex";
    export default {
        name: "index",
        components: {
            GithubOutlined,
            BellOutlined,
            Collapse,
            antContent,
            Breadcrumb
        },
        setup(_, { emit }) {
            const router = useRouter()
            const store = useStore();
            const visible = ref(false)
            const msgText = ref('')

            let collapsed = ref(false)
            const clickMsg = ({ key }) => {
                console.log(
                    'msg item：',
                    msg.value.filter((item) => item.id === key)[0].msg
                )
                msgText.value = msg.value.filter((item) => item.id === key)[0].msg
                visible.value = true
            }
            const name = ref(store.getters.name)
            const msg = ref([
                {
                    id: 1,
                    msg: '11111111111111'
                },
                {
                    id: 2,
                    msg: '2222222222222222222'
                }
            ])
            const toggle = ()=>{
                collapsed = !collapsed
                emit('toggle')
            }
            const openGithub = () => {
                window.open('')
            }
            const logout = () => {
                store.dispatch('user/logout').then(() => {
                    router.push({ name: 'Login' })
                })
            }
            return {
                collapsed,
                clickMsg,
                msg,
                openGithub,
                name,
                logout,
                toggle,
                visible,
                msgText
            }
        }
    }
</script>

<style lang="less" scoped>
    .header-box {
        background: #fff;
        padding: 0 20px 0 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .collapse-box {
            height: 64px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .header-left {
            display: flex;
            flex-direction: row;
            // justify-content: space-between;
            align-items: center;
        }
        .header-right {
            display: flex;
            flex-direction: row;
            align-items: center;
            .item {
                margin-left: 15px;
                cursor: pointer;
                &:hover {
                    color: #1890ff;
                }
                .icon {
                    font-size: 18px;
                    transition: color 0.3s;
                    cursor: pointer;
                    &:hover {
                        color: #1890ff;
                    }
                }
            }
        }
    }

</style>
