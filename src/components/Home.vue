<template id="contact">
      <div>
        <h1>Home</h1>
        <p>This is the tutorial about Contact.</p>
        <Hello><span slot>你好</span></Hello>
        <Button>测试</Button>
      </div>
    </template>

<style scoped>

</style>
<script>
import { Button, Select } from 'element-ui';
import Hello from './Hello.vue';
export default({
	components:{
		Hello
	}
})
</script>
