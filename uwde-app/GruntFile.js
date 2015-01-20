module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');
 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        typescript: {
            base: {
                src: ['ts/**/*.ts'],
                dest: 'public/javascripts',
                options: {
                    module: 'amd',
                    target: 'es5',
                    references: [
                      "typings/**/*.d.ts"
                    ]
                }
            }
        },
        watch: {
            files: 'ts/**/*.ts',
            tasks: ['typescript']
        }
    });
 
    grunt.registerTask('default', ['watch']);
}
