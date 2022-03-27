<template>
	<div id="app">
		<img width=200 src="./assets/logo.png">
		<h1>{{ 'My nice title' | translate }}</h1>
		<p>{{ $t('content', {'type': 'nice'}) }}</p>
		<select v-model="selectedLanguage">
			<option v-for="lang in languages" :value="lang">{{lang.long}}</option>
		</select>
		{{selectedLanguage}}
		<!--<router-view></router-view>-->
	</div>
</template>

<script>
	import {mapState} from 'vuex';
	import Vue from 'vue';

	export default {
    name: 'app',
		computed: mapState(['languages']),
		created() {
			// console.log('created', this.$store.state.curLanguage);
			Vue.i18n.set(this.$store.state.curLanguage.short);
		},
		data() {
			return {
				selectedLanguage: this.$store.state.curLanguage,
			}
		},
		watch: {
			'selectedLanguage': function(newLang) {
				// console.log('new lang selected', newLang);
				Vue.i18n.set(newLang.short);
				this.$store.commit('setLanguage', newLang.short);
			}
		}
  }
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>