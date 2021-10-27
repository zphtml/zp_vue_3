<template>
    <a-layout-content
            class="ant-layout-content"
            :style="{
					marginTop: '1px',
					padding: '10px',
					background: '#fff',
					minHeight: '280px',
					overflow: 'auto'
				}"
    >
        <router-view class="app-content"></router-view>
    </a-layout-content>
</template>
