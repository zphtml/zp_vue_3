
<template>
	<a-layout class="layout-container">
		<ant-sider :msg="collapsed" />
		<navigation @toggle="getToggle"/>
	</a-layout>

</template>
<script>
import {ref,defineComponent} from "vue";
import navigation from './header/index.vue'
import antSider from './sider/index.vue'
export default defineComponent ({
	components: {
		navigation,
		antSider,
	},
	setup() {
		const collapsed = ref(false)
		const getToggle = ()=>{
			collapsed.value = !collapsed.value;

		}
		return {
			getToggle,
			collapsed
		}
	}
})
</script>
<style lang="less" scoped>
.layout-container {
	display: flex;
	flex: auto;
	flex-direction: column;
	min-height: 0;
	background: #f0f2f5;
	flex-direction: row;
	height: 100%;
}
</style>
<style lang="less">
.header-right {
	.ant-badge-count {
		top: -5px;
	}
}
</style>
