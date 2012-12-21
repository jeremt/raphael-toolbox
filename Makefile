
all: build minify

build:
	@ mkdir -p build
	@ cat raphael.js > build/raphael-toolbox.js
	@ cat lib/raphael.*.js >> build/raphael-toolbox.js
	@ echo "  \033[36mbuild -\033[m build/raphael-toolbox.js"

minify:
	@ command -v uglifyjs > /dev/null && \
	uglifyjs build/raphael-toolbox.js > build/raphael-toolbox.min.js && \
	echo "  \033[36mminify -\033[m build/raphael-toolbox.min.js" || \
	echo "  \033[31merror -\033[m uglifyjs not installed"

.PHONY: build minify