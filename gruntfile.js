module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["assets/styles/"]
                },
                files: [{
                        expand: true,
                        cwd: 'assets/styles/less',
                        src: ['*.less'],
                        dest: 'assets/styles/css/',
                        ext: '.css'
                    }
                ]
            }
        },
        watch: {
            styles: {
                files: ['assets/styles/less/*.less'],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.registerTask('default', ['less', 'watch']);
};