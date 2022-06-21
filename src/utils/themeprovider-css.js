// eslint-disable-next-line import/no-extraneous-dependencies
const sass = require('sass');
const fs = require('fs');

try {
  const platformCSS = sass.renderSync({
    data: `@import 'src/scss/platform.scss';`,
  });
  const themeproviderCSS = sass.renderSync({
    data: `@import 'src/scss/fonts.scss'; .onex-themeprovider { ${platformCSS.css} }`,
  });
  if (themeproviderCSS.css) {
    fs.writeFile(
      `src/components/ThemeProvider/platform.css`,
      themeproviderCSS.css
        .toString()
        .replaceAll(/ body {/g, ' {')
        .replaceAll(/.onex-themeprovider :root {/g, ':root {'),
      (err) => {
        if (err) {
          console.error(err);
        }
        // file written successfully
      },
    );
    console.info(`CSS generated for ThemeProvider`);
  } else {
    console.error(`No CSS for ThemeProvider`);
  }
} catch (err) {
  console.error(`Something broke for ThemeProvider CSS`, err);
}