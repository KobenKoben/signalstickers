(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{"./node_modules/refractor/lang/tap.js":function(a,n,e){"use strict";function s(a){a.languages.tap={fail:/not ok[^#{\n\r]*/,pass:/ok[^#{\n\r]*/,pragma:/pragma [+-][a-z]+/,bailout:/bail out!.*/i,version:/TAP version \d+/i,plan:/\d+\.\.\d+(?: +#.*)?/,subtest:{pattern:/# Subtest(?:: .*)?/,greedy:!0},punctuation:/[{}]/,directive:/#.*/,yamlish:{pattern:/(^[^\S\r\n]*)---(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?[^\S\r\n]*\.\.\.$/m,lookbehind:!0,inside:a.languages.yaml,alias:"language-yaml"}}}a.exports=s,s.displayName="tap",s.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_tap-e7d3ba604954a8c3e85b.js.map