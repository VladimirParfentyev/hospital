const { src, dest} =require( 'gulp');
const path = require('../config/path.js')

const babel = require('gulp-babel')
// const uglify =require('gulp-uglify')
const webpack =require('webpack-stream')

const js = ()=>{
    return src([path.js.src], {sourcemaps:true})
        .pipe(babel())
        .pipe(webpack({
            mode:'development'
        }))
        // .pipe(uglify())
        .pipe(dest(path.js.dest, {sourcemaps:true}))
}

module.exports = js;