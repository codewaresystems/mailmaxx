<template>
	<v-list dense color="transparent" shaped>
		<v-list-item link v-for="(link, key) in links" :key="key" :to="{name: 'm-box', params:{box: link.to}}">
			<v-list-item-icon>
				<v-icon>{{link.icon}}</v-icon>
			</v-list-item-icon>
			<v-list-item-content>
				<v-list-item-title>{{link.name}}</v-list-item-title>
			</v-list-item-content>
			<v-chip small right>
				{{ (key + 3 / 3) * 9}}
			</v-chip>
		</v-list-item>
	</v-list>
</template>
<script>
	export default {
		data(){
			return{
				links: [
				{name: 'Inbox', icon: 'mdi-inbox', to : "inbox"},
				{name: 'Starred', icon: 'mdi-star', to : "starred"},
				{name: 'Sent', icon: 'mdi-send', to : "sent"},
				{name: 'Drafts', icon: 'mdi-file', to : "drafts"},
				{name: 'Spam', icon: 'mdi-alert-octagon', to : "spam"},
				{name: 'Trash', icon: 'mdi-delete', to : "trash"},
				{name: 'Scheduled', icon: 'mdi-send-clock', to : "sheduled"},
				],
			}
		}
	};
</script>
