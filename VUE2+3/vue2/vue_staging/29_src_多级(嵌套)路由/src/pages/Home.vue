<template>
	<div>
		<h2>Home组件内容</h2>
		<ul class="nav nav-tabs">
			<li>
				<router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
			</li>
			<li>
				<router-link class="list-group-item" active-class="active" to="/home/messages">Message</router-link>
			</li>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name:'Home',
	}
</script>