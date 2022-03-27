<template>
	<div>
		<ul>
			<li v-for="m in messageList" :key="m.id">
				{{m.title}}
				<!-- 不借助```<router-link> ```实现路由跳转 -->
				<button @click="pushShow(m)">push查看</button>
				<button @click="replaceShow(m)">replace查看</button>
			
			</li>
		</ul>
		<hr>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name:'Messages',
		data() {
			return {
				messageList:[
					{id:'001',title:'消息001'},
					{id:'002',title:'消息002'},
					{id:'003',title:'消息003'}
				]
			}
		},
		methods: {
			pushShow(m){
				this.$router.push({
					name:'detail',
					query:{
						id:m.id,
						title:m.title
					}
				})
			},
			replaceShow(m){
				this.$router.replace({
					name:'detail',
					query:{
						id:m.id,
						title:m.title
					}
				})
			}
		},
	}
</script>