const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	purge: [
		'./src/**/*.html',
		'./src/**/*.njk',
		'./src/**/*.md',
		'./src/_data/colors.js',
		'./src/_data/structure.js',
	],
	experimental: {
		applyComplexClasses: true,
	},
	future: {
		removeDeprecatedGapUtilities: true,
	},
	theme: {
		extend: {
			opacity: (theme) => ({
				5: '.05',
				10: '.1',
				15: '.15',
				20: '.2',
			}),
			// created my own heights so can specify for Heros
			height: (theme) => ({
				'1/2': '50vh',
				'3/4': '75vh',
				'9/10': '90vh',
				'1/1': '100vh',
				'1/3': 'calc(100vh / 3)',
				'1/4': 'calc(100vh / 4)',
				'1/5': 'calc(100vh / 5)',
				96: '24rem',
				128: '32rem',
			}),
                        typography: (theme) => ({ 
                            DEFAULT: {
                                css: {
                                    img: {
                                        marginTop:  0,
                                         marginBottom:  0,                                       
                                    }, 
                                    "ul > li::before": false,
                                     "ul > li::before": {content: "", 
                                         paddingLeft:  0,},     
                                  "ul > li": {paddingLeft:  0,},  
                                    "ul > li::after": false,
                                    a: {
                                        textDecoration: `underline`,
                                        "&:hover": {
                                            color: theme('colors.blue.800'),
                                            textDecoration: `underline`,
                                        },
                                         "&:focus": {
                                            color: theme('colors.blue.400'),
                                            textDecoration: `underline`,
                                        },
                                    },
                                },
                            },
                             sm: {
                                css: {
                                    img: {
                                        marginTop:  0,
                                        marginBottom:  0,
                                    },
                                }},
                              lg: {
                                css: {
                                    img: {
                                        marginTop:  0,
                                        marginBottom:  0,
                                    },
                                }},                           
                               xl: {
                                css: {
                                    img: {
                                        marginTop:  0,
                                        marginBottom:  0,
                                    },
                                }},                               
                        }),
                }
        },
	variants: {},
	plugins: [require('@tailwindcss/forms'),
            require('@tailwindcss/typography'),
        ],

}
