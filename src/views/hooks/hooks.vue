
<template>
    <div>
        <h2>x: {{x}}, y: {{y}}</h2>
    </div>
</template>

<script>
    import useMousePosition from '/@/hooks/useMousePosition'
    export default {
        setup() {
            const {x, y} = useMousePosition() // 这里就用了 hooks 函数, 从而提高了复用性
            return {
                x,
                y,
            }
        }
    }
</script>

<style lang="less">
    .dashboard-box {
        .ant-card-bordered {
            &:hover {
                box-shadow: rgba(@primary-color, 0.8) 0px 0px 2px 2px;
                // border-color: @primary-color;
            }
        }
    }
</style>
