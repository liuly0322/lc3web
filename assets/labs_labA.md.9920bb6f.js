import{_ as e,o as a,c as l,d as i}from"./app.db811047.js";const _=JSON.parse('{"title":"Lab A","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u52D8\u8BEF","slug":"\u52D8\u8BEF"},{"level":2,"title":"handout","slug":"handout"},{"level":2,"title":"\u63D0\u4EA4\u8BF4\u660E","slug":"\u63D0\u4EA4\u8BF4\u660E"},{"level":2,"title":"DDL","slug":"ddl"},{"level":2,"title":"\u4E3A\u4EC0\u4E48\u4F60\u5E94\u8BE5\u5F00\u59CB\u5B66\u4E60 Linux","slug":"\u4E3A\u4EC0\u4E48\u4F60\u5E94\u8BE5\u5F00\u59CB\u5B66\u4E60-linux"},{"level":2,"title":"\u5982\u4F55\u4F7F\u7528/\u5B66\u4E60 Linux","slug":"\u5982\u4F55\u4F7F\u7528-\u5B66\u4E60-linux"},{"level":2,"title":"Makefile","slug":"makefile"}],"relativePath":"labs/labA.md","lastUpdated":1670081973000}'),t={name:"labs/labA.md"},s=i(`<h1 id="lab-a" tabindex="-1">Lab A <a class="header-anchor" href="#lab-a" aria-hidden="true">#</a></h1><h2 id="\u52D8\u8BEF" tabindex="-1">\u52D8\u8BEF <a class="header-anchor" href="#\u52D8\u8BEF" aria-hidden="true">#</a></h2><p>\u5B9E\u9A8C\u6587\u6863 pdf \u6700\u540E\u4E00\u9762\u7684\u6D4B\u8BD5\u6307\u4EE4\u6539\u4E3A\uFF1A</p><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">mkdir /test/actual</span></span>
<span class="line"><span style="color:#A6ACCD;">./assembler -f ./test/testcases/test1.asm -o ./test/actual/test1.bin</span></span>
<span class="line"><span style="color:#A6ACCD;">diff ./test/actual/test1.bin ./test/expected/test1.bin</span></span>
<span class="line"></span></code></pre></div><h2 id="handout" tabindex="-1">handout <a class="header-anchor" href="#handout" aria-hidden="true">#</a></h2><ul><li><a href="/pdf/LAB_A.pdf">PDF</a></li><li><a href="/LAB_A_Attachment.zip">\u6846\u67B6</a></li></ul><p><a href="/resource/cpp.html">\u53EF\u80FD\u9700\u8981\u7684 C++ \u77E5\u8BC6</a></p><ul><li>\u8981\u6C42\u5F97\u5230\u80FD\u6B63\u786E\u6267\u884C\u7684\u6C47\u7F16\u5668\uFF0C\u4E0D\u4E25\u683C\u8981\u6C42\u4F7F\u7528\u6846\u67B6\u4EE3\u7801/\u6846\u67B6\u63D0\u4F9B\u7684\u6784\u5EFA\u65B9\u5F0F\uFF0C\u4F46\u8981\u6C42\u4F7F\u7528 C/C++ \u8BED\u8A00\u5B8C\u6210\u3002</li></ul><h2 id="\u63D0\u4EA4\u8BF4\u660E" tabindex="-1">\u63D0\u4EA4\u8BF4\u660E <a class="header-anchor" href="#\u63D0\u4EA4\u8BF4\u660E" aria-hidden="true">#</a></h2><ul><li>\u5B9E\u9A8C\u9700\u8981\u68C0\u67E5\u4EE3\u7801\uFF0C\u5177\u4F53\u5F62\u5F0F\uFF08\u817E\u8BAF\u4F1A\u8BAE or \u7EBF\u4E0B\uFF09\u5F85\u5B9A</li><li>BB \u4E0A\u9700\u8981\u63D0\u4EA4 report (5% \u5206\u6570) <ul><li>\u6CA1\u6709\u683C\u5F0F\u8981\u6C42\uFF0C\u7B80\u7565\u8BF4\u660E\u5373\u53EF</li></ul></li></ul><h2 id="ddl" tabindex="-1">DDL <a class="header-anchor" href="#ddl" aria-hidden="true">#</a></h2><p>\u672A\u5B9A\uFF0C\u4E0D\u65E9\u4E8E 12 \u6708 28 \u65E5 23:30\u3002</p><h2 id="\u4E3A\u4EC0\u4E48\u4F60\u5E94\u8BE5\u5F00\u59CB\u5B66\u4E60-linux" tabindex="-1">\u4E3A\u4EC0\u4E48\u4F60\u5E94\u8BE5\u5F00\u59CB\u5B66\u4E60 Linux <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u4F60\u5E94\u8BE5\u5F00\u59CB\u5B66\u4E60-linux" aria-hidden="true">#</a></h2><p>\u56DE\u987E\u4E00\u4E0B\u6211\u4EEC\u5E38\u7528\u7684 Windows \u7CFB\u7EDF\uFF1A</p><ul><li>\u56FE\u5F62\u5316\u64CD\u4F5C\u4E3A\u4E3B</li><li>\u6CA1\u6709\u65B9\u4FBF\u7684\u81EA\u5E26\u7684\u300C\u5305\u7BA1\u7406\u300D</li></ul><p>\u5305\u7BA1\u7406\u662F\u4EC0\u4E48\uFF1F\u6211\u4EEC\u90FD\u77E5\u9053\uFF0C\u4E0D\u540C\u8F6F\u4EF6\u95F4\uFF0C\u5F88\u591A\u57FA\u7840\u7684\u4EE3\u7801\u662F\u53EF\u4EE5\u88AB\u590D\u7528\u7684\uFF1A\u4F8B\u5982\uFF0C\u6211\u5199\u4E00\u4E2A\u538B\u7F29\u8F6F\u4EF6\uFF0C\u548C\u6211\u5199\u4E00\u4E2A\u901A\u4FE1\u8F6F\u4EF6\uFF0C\u53EF\u80FD\u90FD\u9700\u8981\u52A0\u5BC6\u6A21\u5757\u3002\u6240\u4EE5\uFF0C\u6211\u4EEC\u5E0C\u671B\u6709\u4E00\u4E2A\u65B9\u4FBF\u7684\u529E\u6CD5\u6765\u83B7\u53D6\u300C\u52A0\u5BC6\u6A21\u5757\u300D\u7684\u4EE3\u7801\uFF0C\u8FD9\u6837\u6211\u76F4\u63A5 #include \u5C31\u53EF\u4EE5\u7EE7\u7EED\u4F7F\u7528\u4E86\u3002\u8FD9\u6837\u7684\u4EE3\u7801\u88AB\u79F0\u4E3A\u5E93\u4EE3\u7801\u3002\u6211\u4EEC\u5E38\u8BF4\u7684\u300C\u8C03\u5E93\u300D\uFF0C\u5C31\u662F\u6307\u4F7F\u7528\u522B\u7684\u5E93\u63D0\u4F9B\u7684\u63A5\u53E3\uFF0C\u6765\u5B9E\u73B0\u4E30\u5BCC\u7684\u81EA\u5B9A\u4E49\u529F\u80FD\u3002</p><p>\u5F53\u7136\uFF0C\u5B9E\u9645\u5206\u53D1\u7684\u4E0D\u4E00\u5B9A\u662F\u52A0\u5BC6\u6A21\u5757\u7684\u4EE3\u7801\uFF0C\u8FD8\u53EF\u80FD\u662F\u5DF2\u7ECF\u88AB\u7F16\u8BD1\u4E3A\u53EF\u94FE\u63A5\u6587\u4EF6\u7684\u9759\u6001/\u52A8\u6001\u4E8C\u8FDB\u5236\u5E93\u7B49\uFF0C\u4F46\u529F\u80FD\u662F\u7C7B\u4F3C\u7684\uFF0C\u90FD\u662F\u4E3A\u4E86\u5B9E\u73B0\u300C\u590D\u7528\u300D\u3002</p><p>\u6240\u4EE5\uFF0C\u6211\u4EEC\u9700\u8981\u4E00\u4E2A\u7C7B\u4F3C\u300C\u8F6F\u4EF6\u5E02\u573A\u300D\u7684\u7A0B\u5E8F\u6765\u4E0A\u4F20\uFF0C\u4E0B\u8F7D\u8FD9\u4E9B\u5E38\u7528\u7684\u5E93\uFF08\u5F53\u7136\u4E5F\u53EF\u4EE5\u76F4\u63A5\u4E0A\u4F20\uFF0C\u4E0B\u8F7D\u5E94\u7528\u7A0B\u5E8F\uFF09\u3002</p><p>\u8FD9\u6837\u7684\u7C7B\u4F3C\u300C\u8F6F\u4EF6\u5E02\u573A\u300D\u7684\u7A0B\u5E8F\u5C31\u79F0\u4E3A\u5305\u7BA1\u7406\u5668\u3002Linux \u7CFB\u7EDF\u4E00\u822C\u90FD\u81EA\u5E26\u5305\u7BA1\u7406\u5668\uFF0C\u6240\u4EE5\u8F6F\u4EF6\u5F00\u53D1\u7ECF\u5E38\u4F1A\u9700\u8981\u4F7F\u7528 Linux \u7CFB\u7EDF\uFF08Windows \u914D\u7F6E\u8D77\u6765\u53EF\u80FD\u4F1A\u66F4\u52A0\u9EBB\u70E6\uFF09\u3002</p><h2 id="\u5982\u4F55\u4F7F\u7528-\u5B66\u4E60-linux" tabindex="-1">\u5982\u4F55\u4F7F\u7528/\u5B66\u4E60 Linux <a class="header-anchor" href="#\u5982\u4F55\u4F7F\u7528-\u5B66\u4E60-linux" aria-hidden="true">#</a></h2><p>\u53EF\u4EE5\u5728\u81EA\u5DF1\u7684\u5B9E\u4F53\u673A\u4E0A\u5B89\u88C5 Linux\uFF08\u91C7\u7528\u53CC\u7CFB\u7EDF\u7B49\uFF09\uFF0C\u4E5F\u53EF\u4EE5\u91C7\u7528\u865A\u62DF\u673A\uFF08\u6A21\u62DF\u4E00\u4E2A Linux \u7CFB\u7EDF\uFF09\u3002</p><p>\u300C\u865A\u62DF\u673A\u300D\u80FD\u8BA9\u6211\u4EEC\u65B9\u4FBF\u7684\u7528\u4E0A Linux \u7CFB\u7EDF\uFF1A</p><ul><li>Windows \u4E0B\u5B89\u88C5\u865A\u62DF\u673A\uFF0C\u6709 WSL2 \u7B49\u9009\u62E9</li><li>\u91C7\u7528\u5728\u7EBF\u865A\u62DF\u673A\uFF0CVlab</li></ul><p>\u5177\u4F53\u5B66\u4E60\u4E0A\uFF0C\u53EF\u4EE5\u53C2\u8003 <a href="https://101.lug.ustc.edu.cn/" target="_blank" rel="noreferrer">\u6211\u6821 lug \u793E\u56E2\u7F16\u7BE1\u7684\u5165\u95E8\u6559\u7A0B</a>\u3002</p><h2 id="makefile" tabindex="-1">Makefile <a class="header-anchor" href="#makefile" aria-hidden="true">#</a></h2><p>\u4E3A\u4EC0\u4E48\u9700\u8981\u4F7F\u7528 Makefile\uFF1F\u53EF\u4EE5\u53C2\u8003<a href="https://www.zhaixue.cc/makefile/makefile-intro.html" target="_blank" rel="noreferrer">\u8FD9\u7BC7\u6587\u7AE0</a>\u3002\u53EF\u4EE5\u5728\u9605\u8BFB\u65F6\u601D\u8003\u4EE5\u4E0B\u95EE\u9898\uFF1A</p><ul><li>C/CPP \u4EE3\u7801\u662F\u5982\u4F55\u7F16\u8BD1\u5230\u7A0B\u5E8F\u7684\uFF1F</li><li>\u4E00\u4E2A C/CPP \u5DE5\u7A0B\u53EF\u80FD\u4F1A\u5305\u542B\u5F88\u591A\u6E90\u4EE3\u7801\u6587\u4EF6\uFF0C\u5982\u679C\u6BCF\u6B21\u90FD\u5B8C\u5168\u7F16\u8BD1\uFF0C\u4F1A\u8017\u8D39\u5927\u91CF\u7684\u65F6\u95F4\uFF0CMake \u662F\u5982\u4F55\u89E3\u51B3\u8FD9\u4E00\u95EE\u9898\u7684\uFF1F</li></ul>`,27),n=[s];function r(d,h,u,p,c,o){return a(),l("div",null,n)}const x=e(t,[["render",r]]);export{_ as __pageData,x as default};
