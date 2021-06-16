import Vue from 'vue'
import VueTelInput from 'vue-tel-input'

Vue.use(VueTelInput,{
	mode: "international",
	disabledFetchingCountry: false,
	disabled: false,
	disabledFormatting: false,
	placeholder: "Enter your phone number",
	required: true,
	enabledCountryCode: false,
	enabledFlags: true,
	autocomplete: "off",
	name: "telephone",
	maxLen: 25,
	inputClasses: "",
	inputOptions: {
		showDialCode: true
	},
	validCharactersOnly: true,
	inputClasses: ""
})