<template>
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
        <Logo :collapsed="collapsed" />
        <a-menu
                mode="inline"
                theme="dark"
                v-model:openKeys="openKeys"
                v-model:selectedKeys="selectedKeys"
        >
            <template v-for="item in routes">
                <!-- 单个菜单 -->
                <a-menu-item
                        v-if="!item.children || item.children.length === 0"
                        :key="item.name"
                >
                    <component :is="item.meta.icon" />
                    <span>{{ item.meta.title }}</span>
                </a-menu-item>
                <!-- 不显示父级菜单的一组子菜单 -->
                <template v-else-if="!item.name && item.children.length > 0">
                    <a-menu-item v-for="e in item.children" :key="e.name">
                        <component :is="e.meta.icon" />
                        <span>{{ e.meta.title }}</span>
                    </a-menu-item>
                </template>
                <SubMenu v-else :key="item.name" :route="item" />
            </template>
        </a-menu>
    </a-layout-sider>
</template>

<script>
    import {computed, ref, watch,defineComponent} from "vue";
    import { useRouter, useRoute } from 'vue-router'
    import { useStore } from 'vuex'
    import Logo from './logo.vue'
    import SubMenu from './subMenu.vue'
    export default defineComponent ({
        name: "index",
        props:{
            msg:String
        },
        components:{
            Logo,
            SubMenu
        },
        setup(props){
            const router = useRouter();
            const store = useStore();
            // 获取权限路由
            const routes = computed(
                () => store.getters.permission_routes.filter((item) => !item.hidden) || []
            )
            const collapsed = ref(props.msg);
            const route = useRoute()
            const openKeys = ref([route.matched[0].name || ''])
            const selectedKeys = ref([route.name])
            // 选中跳转
            watch(selectedKeys, (val) => {
                router.push({ name: val[0] })
            })
            return {
                collapsed,
                openKeys,
                selectedKeys,
                routes

            }
        }
    })
</script>

<style scoped>

</style>
