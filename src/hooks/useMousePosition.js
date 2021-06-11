import {onBeforeUnmount, onMounted, ref} from 'vue'
export default function () {
    const x = ref(-1) ; // x 绑定为响应式数据
    const y = ref(-1);
    const clickHandler=(event)=>{
        x.value = event.pageX
        y.value = event.pageY
    }
    const clickHandlker = ()=>{
        x.value = 100
        y.value = 100
    }
    onMounted(()=>{
        window.addEventListener('click', clickHandlker)
    })
    onBeforeUnmount(()=>{
        window.addEventListener('click', clickHandler)
    })
    return {
        x,
        y
    }
}
