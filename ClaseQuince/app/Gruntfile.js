module.exports = function(grunt) {
	
	grunt.initConfig({
		copy:{
			build:{
				files:[
					{
						src:'node_modules/bootstrap/dist/css/bootstrap.css',
						flatten: true,
						expand: true,
						dest:'public/css'
					},
					{
						src:'node_modules/jquery/dist/jquery.js',
						flatten: true,
						expand: true,
						dest:'public/js'
					}
					]
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-copy');
}