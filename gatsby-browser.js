/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
require("prism-themes/themes/prism-atom-dark.css");
require("prismjs/plugins/line-numbers/prism-line-numbers.css");

exports.onInitialClientRender = () => {
  require("typeface-nunito");
};