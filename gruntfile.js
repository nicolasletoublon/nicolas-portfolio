module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["app/assets/styles/"],
                },
                files: [{
                        expand: true,
                        cwd: 'app/assets/styles/less',
                        src: ['*.less'],
                        dest: 'app/assets/styles/css/',
                        ext: '.css'
                    }
                ]
            }
        },
        watch: {
            styles: {
                //files: ['../pres-common-container-fork/common/**'],
                files: ['app/assets/styles/less/*.less'], // which files to watch
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.registerTask('default', ['less', 'watch']);
};