const { watch, series, task, dest, src } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");

// Scss task
task("scss", async () => {
	return src("./src/scss/style.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(autoprefixer("last 10 versions"))
		.pipe(dest("./dist/css"));
});

// Javascript task
// task("js", async () => {
// 	src(["./src/js/helpers.js", "./src/js/app.js"])
// 		.pipe(concat("app.js"))
// 		.pipe(uglify())
// 		.pipe(dest("./dist/js"))
// 		.pipe(notify("Javascript task is don"));
// });

task("watch", async () => {
	watch("./src/scss/*.scss", series("scss"));
});
