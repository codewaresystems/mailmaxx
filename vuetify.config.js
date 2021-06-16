import colors from 'vuetify/es5/util/colors'
export default{
	treeShake: true,
	theme: {
		dark : true,
		themes: {
			dark: {
				primary: colors.blue.darken2,
				accent: colors.grey.darken3,
				// secondary: "#04162b",
				secondary: "#000000",
				info: colors.teal.lighten1,
				warning: colors.amber.base,
				error: colors.deepOrange.accent4,
				success: colors.green.accent3,
				default : '#FFFFFF',
				navigation: '#1e1e1e',
				cream: "#fdf2cc"
			},

			light: {
				primary: colors.blue.darken2,
				// secondary: "#04162b",
				secondary: "#000000",
				accent: colors.grey.darken3,
				info: colors.teal.lighten1,
				warning: colors.amber.base,
				error: colors.deepOrange.accent4,
				success: colors.green.accent3,
				default: "#000000",
				navigation: '#FFFFFF',
				cream: "#fdf2cc"
			}
		}
	}
	
}