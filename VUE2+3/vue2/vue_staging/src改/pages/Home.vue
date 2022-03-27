<template>
	<div>
		<h2>Home组件内容</h2>
		<ul class="nav nav-tabs">
			<li>
				<router-link replace="" class="list-group-item" active-class="active" to="/home/news">News</router-link>
			</li>
			<li>
				<router-link class="list-group-item" active-class="active" to="/home/messages">Message</router-link>
			</li>
		</ul>
		<!-- news组件最终显示在home组件里，想要news中输入框的输入保持就要news组件不被销毁 -->
		<!-- 缓存多个路由组件  值为组件名称 -->
		<!-- <keep-alive :include="['News','Messages']"> -->
				
		<!-- 缓存一个路由组件 -->
		<keep-alive include="News">
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
	export default {
		name:'Home',
	}
</script>