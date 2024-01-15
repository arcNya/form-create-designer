/*!
 * form-create 可视化表单设计器
 * @form-create/designer v3.1.5
 * (c) 2021-2024 xaboy
 * Github https://github.com/xaboy/form-create-designer
 * Released under the MIT License.
 */
(function(){"use strict";try{if(typeof document!="undefined"){var o=document.createElement("style");o.appendChild(document.createTextNode('._fc-designer{cursor:default;height:100%;min-height:500px;overflow:hidden;position:relative}._fc-designer>.el-main{bottom:0;left:0;padding:0;position:absolute;right:0;top:0}._fc-m .form-create ._fc-l-item{background:#2e73ff;height:10px;overflow:hidden;transition:all .3s ease;width:100%}._fc-l,._fc-m,._fc-r{border-top:1px solid #ececec;box-sizing:border-box}._fc-l-group{padding:0 12px}._fc-l-title{font-size:14px;font-weight:600;margin:18px 0 5px}._fc-l-item{background:#fff;color:#000;cursor:pointer;display:inline-block;height:70px;line-height:1;min-width:70px;text-align:center;transition:all .2s ease;width:33.33%}._fc-l-item i{display:inline-block;font-size:21px}._fc-l-item ._fc-l-name{font-size:12px}._fc-l-item ._fc-l-icon{padding:10px 5px 12px}._fc-l-item:hover{background:#2e73ff;color:#fff}._fc-m-tools{align-items:center;border:1px solid #ececec;border-top:0;display:flex;height:40px;justify-content:flex-end}._fc-m-tools button.el-button{align-items:center;display:flex;padding:5px 14px}._fc-m-tools .fc-icon{font-size:14px;margin-right:2px}._fc-r .el-tabs__nav-wrap:after{background-color:#ececec;height:1px}._fc-r ._fc-r-tabs{border-bottom:1px solid #ececec;display:flex;padding:0}._fc-r ._fc-r-tab{box-sizing:border-box;color:#303133;display:inline-block;flex:1;font-size:14px;font-weight:600;height:40px;line-height:40px;list-style:none;position:relative;text-align:center}._fc-r ._fc-r-tab.active{border-bottom:2px solid #409eff;color:#409eff}.drag-box{min-height:60px;width:100%}._fc-m-drag{box-sizing:border-box;overflow:auto;padding:2px}._fc-m-drag,.draggable-drag{background:#fff;height:100%;position:relative}._fc-m-drag>form,._fc-m-drag>form>.el-row{height:100%}.drag-tool{word-wrap:break-word;box-sizing:border-box;display:flex;min-height:20px;outline:1px dashed #2e73ff;overflow:hidden;padding:2px;position:relative;word-break:break-all}.drag-tool .drag-tool{margin:5px}.drag-tool+.drag-tool{margin-top:5px}.drag-tool.active{outline:2px solid #2e73ff}.drag-tool.active>div>.drag-btn{display:flex}.drag-tool .drag-btn{display:none}.drag-r{bottom:2px;right:2px}.drag-l,.drag-r{position:absolute;z-index:2}.drag-l{left:0;top:0}.drag-btn{background-color:#2e73ff;color:#fff;cursor:pointer;float:left;height:18px;justify-content:center;line-height:20px;padding-bottom:1px;text-align:center;width:18px}.drag-btn+.drag-btn{margin-left:2px}.drag-btn-danger{background-color:#ff2e2e}.drag-btn i{font-size:13px}.drag-mask{bottom:0;left:0;position:absolute;right:0;top:0;z-index:1}.CodeMirror{color:#000;direction:ltr;font-family:monospace;height:300px}.CodeMirror-lines{padding:4px 0}.CodeMirror pre.CodeMirror-line,.CodeMirror pre.CodeMirror-line-like{padding:0 4px}.CodeMirror-gutter-filler,.CodeMirror-scrollbar-filler{background-color:#fff}.CodeMirror-gutters{background-color:#f7f7f7;border-right:1px solid #ddd;white-space:nowrap}.CodeMirror-linenumber{color:#999;min-width:20px;padding:0 3px 0 5px;text-align:right;white-space:nowrap}.CodeMirror-guttermarker{color:#000}.CodeMirror-guttermarker-subtle{color:#999}.CodeMirror-cursor{border-left:1px solid #000;border-right:none;width:0}.CodeMirror div.CodeMirror-secondarycursor{border-left:1px solid silver}.cm-fat-cursor .CodeMirror-cursor{background:#7e7;border:0!important;width:auto}.cm-fat-cursor div.CodeMirror-cursors{z-index:1}.cm-fat-cursor .CodeMirror-line::selection,.cm-fat-cursor .CodeMirror-line>span::selection,.cm-fat-cursor .CodeMirror-line>span>span::selection{background:transparent}.cm-fat-cursor .CodeMirror-line::-moz-selection,.cm-fat-cursor .CodeMirror-line>span::-moz-selection,.cm-fat-cursor .CodeMirror-line>span>span::-moz-selection{background:transparent}.cm-fat-cursor{caret-color:transparent}.cm-tab{display:inline-block;text-decoration:inherit}.CodeMirror-rulers{bottom:0;left:0;overflow:hidden;position:absolute;right:0;top:-50px}.CodeMirror-ruler{border-left:1px solid #ccc;bottom:0;position:absolute;top:0}.cm-s-default .cm-header{color:#00f}.cm-s-default .cm-quote{color:#090}.cm-negative{color:#d44}.cm-positive{color:#292}.cm-header,.cm-strong{font-weight:700}.cm-em{font-style:italic}.cm-link{text-decoration:underline}.cm-strikethrough{text-decoration:line-through}.cm-s-default .cm-keyword{color:#708}.cm-s-default .cm-atom{color:#219}.cm-s-default .cm-number{color:#164}.cm-s-default .cm-def{color:#00f}.cm-s-default .cm-variable-2{color:#05a}.cm-s-default .cm-type,.cm-s-default .cm-variable-3{color:#085}.cm-s-default .cm-comment{color:#a50}.cm-s-default .cm-string{color:#a11}.cm-s-default .cm-string-2{color:#f50}.cm-s-default .cm-meta,.cm-s-default .cm-qualifier{color:#555}.cm-s-default .cm-builtin{color:#30a}.cm-s-default .cm-bracket{color:#997}.cm-s-default .cm-tag{color:#170}.cm-s-default .cm-attribute{color:#00c}.cm-s-default .cm-hr{color:#999}.cm-s-default .cm-link{color:#00c}.cm-invalidchar,.cm-s-default .cm-error{color:red}.CodeMirror-composing{border-bottom:2px solid}div.CodeMirror span.CodeMirror-matchingbracket{color:#0b0}div.CodeMirror span.CodeMirror-nonmatchingbracket{color:#a22}.CodeMirror-matchingtag{background:rgba(255,150,0,.3)}.CodeMirror-activeline-background{background:#e8f2ff}.CodeMirror{background:#fff;overflow:hidden;position:relative}.CodeMirror-scroll{height:100%;margin-bottom:-50px;margin-right:-50px;outline:none;overflow:scroll!important;padding-bottom:50px;position:relative;z-index:0}.CodeMirror-sizer{border-right:50px solid transparent;position:relative}.CodeMirror-gutter-filler,.CodeMirror-hscrollbar,.CodeMirror-scrollbar-filler,.CodeMirror-vscrollbar{display:none;outline:none;position:absolute;z-index:5}.CodeMirror-vscrollbar{overflow-x:hidden;overflow-y:scroll;right:0;top:0}.CodeMirror-hscrollbar{bottom:0;left:0;overflow-x:scroll;overflow-y:hidden}.CodeMirror-scrollbar-filler{bottom:0;right:0}.CodeMirror-gutter-filler{bottom:0;left:0}.CodeMirror-gutters{left:0;min-height:100%;position:absolute;top:0;z-index:3}.CodeMirror-gutter{display:inline-block;height:100%;margin-bottom:-50px;vertical-align:top;white-space:normal}.CodeMirror-gutter-wrapper{background:none!important;border:none!important;position:absolute;z-index:4}.CodeMirror-gutter-background{bottom:0;position:absolute;top:0;z-index:4}.CodeMirror-gutter-elt{cursor:default;position:absolute;z-index:4}.CodeMirror-gutter-wrapper ::selection{background-color:transparent}.CodeMirror-gutter-wrapper ::-moz-selection{background-color:transparent}.CodeMirror-lines{cursor:text;min-height:1px}.CodeMirror pre.CodeMirror-line,.CodeMirror pre.CodeMirror-line-like{word-wrap:normal;-webkit-tap-highlight-color:transparent;background:transparent;border-radius:0;border-width:0;color:inherit;font-family:inherit;font-size:inherit;font-variant-ligatures:contextual;line-height:inherit;margin:0;overflow:visible;position:relative;white-space:pre;z-index:2}.CodeMirror-wrap pre.CodeMirror-line,.CodeMirror-wrap pre.CodeMirror-line-like{word-wrap:break-word;white-space:pre-wrap;word-break:normal}.CodeMirror-linebackground{bottom:0;left:0;position:absolute;right:0;top:0;z-index:0}.CodeMirror-linewidget{padding:.1px;position:relative;z-index:2}.CodeMirror-rtl pre{direction:rtl}.CodeMirror-code{outline:none}.CodeMirror-gutter,.CodeMirror-gutters,.CodeMirror-linenumber,.CodeMirror-scroll,.CodeMirror-sizer{box-sizing:content-box}.CodeMirror-measure{height:0;overflow:hidden;position:absolute;visibility:hidden;width:100%}.CodeMirror-cursor{pointer-events:none;position:absolute}.CodeMirror-measure pre{position:static}div.CodeMirror-cursors{position:relative;visibility:hidden;z-index:3}.CodeMirror-focused div.CodeMirror-cursors,div.CodeMirror-dragcursors{visibility:visible}.CodeMirror-selected{background:#d9d9d9}.CodeMirror-focused .CodeMirror-selected{background:#d7d4f0}.CodeMirror-crosshair{cursor:crosshair}.CodeMirror-line::selection,.CodeMirror-line>span::selection,.CodeMirror-line>span>span::selection{background:#d7d4f0}.CodeMirror-line::-moz-selection,.CodeMirror-line>span::-moz-selection,.CodeMirror-line>span>span::-moz-selection{background:#d7d4f0}.cm-searching{background-color:#ffa;background-color:#ff06}.cm-force-border{padding-right:.1px}@media print{.CodeMirror div.CodeMirror-cursors{visibility:hidden}}.cm-tab-wrap-hack:after{content:""}span.CodeMirror-selectedtext{background:none}._fc_struct{width:100%}._fc_struct .CodeMirror{height:450px}._fc_struct .CodeMirror-line{font-size:13px!important;line-height:16px!important}.CodeMirror-lint-tooltip{z-index:1!important}._fc_struct .el-dialog__body{padding:0 20px}._fc_err{color:red;float:left;text-align:left;width:65%}._fc_fetch .el-form-item__label{display:inline-block;float:left;padding-right:5px;text-align:right}._fc_fetch{background-color:#bfdaf7;padding:10px}._fc-validate .form-create .el-form-item{margin-bottom:22px!important}._fc-validate .append-msg{cursor:pointer}._fc-validate .el-input-group__append{padding:0 10px}._fc-required{align-items:center;display:flex}._fc-required .el-input{margin-left:15px}._fc-required .el-switch{height:28px}._fc_table_opt[data-v-0d635ce0]{width:100%}@font-face{font-family:fc-icon;src:url(data:font/woff;base64,d09GRgABAAAAABa8AAsAAAAAJQQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAARAAAAGA9hU5KY21hcAAAAYgAAAE2AAADaEcfEkJnbHlmAAACwAAAEPIAABsQkdIMXGhlYWQAABO0AAAALwAAADYmk54paGhlYQAAE+QAAAAgAAAAJAfgBARobXR4AAAUBAAAABIAAACIiGIAAGxvY2EAABQYAAAARgAAAEZ5NHJIbWF4cAAAFGAAAAAdAAAAIAE2ALZuYW1lAAAUgAAAAUAAAAJnEKM8sHBvc3QAABXAAAAA+QAAAWbrmcBBeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGFhZpzAwMrAwNTJdIaBgaEfQjO+ZjBi5ACKMrAyM2AFAWmuKQwHnhe8Lmdu+N/AwMB8hwFIMjCiKGICAH8ZDVB4nOXTR04DQRSE4X/IOefMniUnQBwIBMILWyZnkVkhjmNYcY+SzCGgxsUKjkBL30j9pA7qVwN0Au22Zh1QfFBQjndXi1a9nb5WvYMXz8cYcaVN29pVRTVd67n59ln5+gJtaUd7qqqum2YjtV+j8PoJpphhjnU22HRtgUWWWGaFVbp8n2566PWZ/QwwyBDDPnHUp48x7rWTXj3t9bPeYZ623LLo+nPS/xsD5ad4/Zmtlv0IvzDaDr812gm/OtoNvz/aC3cCVaK1TzXcHVSLMjeqhzuG9sO9QwfhLqLDKDOko3Bn0XGUt9ZJuNvoNNx3dBZOADoPZwFdhFOBLqPMrq7CSUHX4cygm3B60G04R+gunCh0H84WeginDD2G84aewslDz+EM0myE00jzLcp/6rMSFN+kJ4M/AAB4nHU5DZAU1Zn93pv+mZ7p7umZ/pnZ2fnfmWHZndlhemZaliwEEBZYFEEBo8huDkPiXuTk/Fkq3Gk0xxlSKKAclkbu8KTU8y6pilVRVAhRq6g7c1bInScpEkmRi4nlRanEu3Bc7Oa+1z2zsws60/O9733ve/1ef+/77WFYBj7kTvzfzDpmM/MV5s+ZexkGFfJcChVkpBmmpUNHMxYgvdPXjHqrqTZaC1Dd0FWNK+TypXa/VRpAeRkDNY2tXH0hBnoV81a91aAjHJ3vM3GXYZ1xfOFAZuCCKMvihQshWQ5d8HElpigijAxk3CiFJ+VIRD6ZqBRisUIlgT5qYwcOiJSPTjwgw+eAIsvKDKwzij8eTG9BsiajnYqm7PSweXQhnBXlzhroo8xAIkHv70Znr/QdWZfh+psEfA54wCeAKDHDXLoUQGSAUZgEw8SajRYIIoMMgEYKsapGMZDfQMZAc4zI7YRFzxmZT6BL/tTI4IE3jSwQs8aqAbdpZIDpR/SecEb/C/eMMXPgnsQX9vRNc3mOrSI4Bo4nnCf4lh1rldauzRiuoWwjAXSvkXGqOYvs583wJx9GUywQFTNMYhQNsOhX7jt4QWfhOXExZKjuZDiuQYsOhuOwPILnOk8eIiJThE59IWp4K3oqARphptGCNpWeI19FIwifHbquVrtuyL0a2kp53edjG6xXqmuqcL1iXR9TY+jU3BXrV8wFsNz45+V3GIOt/hUbVsyt98tz4y/QR/ae+2X8LZBllqnCut6CaURViy7FLkT1NNZknK/iRgsVgFgqW/U0guPEL7g/XrFjdHTHCjTPa53/SY+tHftcNvs5v0Hn9tdardr++RP2VRN49/Id+3Ys98BdacqzbtVIJjOyat2Ye7x4+9duL80f3z5uM4zo7WkH/iNjMoPMCLOYWcmsZW5gJpl7mAeoZHxx5GabhmWCEfGqN9CyVdhlrorKRXp4PtMIonqiw5fVC3qhWWjmzEK5wBdss8zbcFND13iOh9bHBlCTWo3dajbKYDm6VadoieLoHxWTGArq75s3r885WqjXCz/5CSVF8Bqvcd9KD2B0RDUTintGjSciqOSegd/o4vRipI7l1XVqfmwonXk/ogsSL4UklieiFsluyNREmfC8JNdsSZY5VlJt/Ecjcr8Sx/U+dxddCa8u1AeNiPM9byV0LwyRwd4XEpH1UTMRWaeaczb8Ifnss8nXa7XXp9avn+J4MD1ZChAS4EU9pYivr2NxQJV4fg/PxgSJ8CDugCfzbfgjZoAZY77E/LXnoUq+xwHJlajqgyTBSdV1DWTTkacvX+g2G9QoKCsMgtQa5SrVV1/8RbDRNpqnLHlOVzkeOiUzP4RKDbtFTU3XFAy0IVRFnJZBacTLiMSPhZVI6Fg4poWcUxQme9VQkgoe1/rm1d1RSelF63hN49/nUEAOBzD7fmaoknP3zButR0K6qSdZNsBLaloUd5lmYlmiEsAYFhcCtpBQ+F0cx2IZfSlihrXQObrAOSkaDyvz+s7SRc7la+534TZx8Q4RBB2EBQL1wva+eacu5mu1/Imwkjwh6rrofswipBwX95rLzZ4eKyDyQZ5g1hKIkgNBq7wQpCJmp+WsMBmQtQ3SpjYH8uh4rUZpplZTLSft8EBdOD8DJxTQg6EE1Y8ZRHXOllqtEs4DNBXnrGKaCs4r5uSjoqqKACKhaewpirj/ReF2VVPxh61Sd7bzQGeqqbjvw7BqKN9UdVU1FZSmra66J+lUNNzxI5Pec8WYimels6yTzam5or0QDlVBREGcXrAKcPLgXTLYJpaZzZrOQTOTMfGkcxBPugdPC6ZCBPJbglEhxPNbBRIxBLL+NP4wQzmBH0+amZZz8K2LMKQFA+55ghDmH+CNiEC2XvR0+pJLHiCY0Zh+kPTVIP58GQwY1A0Ujto5NXiuXLc9fYWRPO1rdMTOV1GD+j6ky7js+0LfM2Jm8qaN9WazvvGmtzvI5M3XjlWq1crYtS92kJtHp5Ytm3p4ahlafveoPW7b49vG7dZm3J1n3XjTv1HEmjXPQ9Ysn3poavnyqdEVU1db3kx7/M8220w7Tj0IzzTIXM8wRTAWnsuDqS1CAEC+i/BCZNUhVmRwGpkGp1DAw3OVjQyCBx0Czla5NIRLeThb+qwZOBFo6k3bMPFrUePxxyPVVEwluR2RMCcU48+tDvUnUnIoglc+F+9jhXB0R4qLauCvohgMKxBmi8qDQY4NnrqZ7WFvPsXzCLGPh/p4ohwnt8TFa64RZamaOLI9UjESGZJ6XO9RWC30eIrkDH1I2/50fEAlgWGMUICL/Kv89WBYZPt+EAq9VhRkwrEPR18MCYSM4xp9dM57/i/jDzz7KTAWs4BZBPH6smBgzjaoAqtaqgle32pSz0+h1UQAVPjx0D2HhzODgxnnZLpSSXtJynBIkkLOe9Ybu15trYEfykw+9dTk5K5d+INK2jlJufFwumLJonOSsuJhUd7hbkJHBnf/fn36m79fn3GP2ugF+1m7fWaT+CWmh4GHQHbbVEHmrQbYAFg0GAQcQYulPjbXpP6R+lrfoZbQoWukuHwNr8v8FCexYXyPIPAxdCIsOfvkuCyH8eGwzGFmwv1OGHro+gle1vl9JID38TrPohNy+Jln6MgPPdBDt8O3/dBvGB3k2M80mGXMevD7YLegOyA7maYeVQTSA33Ksb48wcugtkRzKg2AnBcFMu1o0HH3ECxnEwr8ZX3C92fkSE816ZxPVpJwYdk5H00mo6+iL9DG/dl9HDfCBoPsHyg491kA/zotlXTHSVZ74GaYwJ2sZNT5v2gSTziHk1HMRZPOIfTvLFvDAXYTFyDrgmySzkxzwh6B89AkJ+wV2F5W8EDHR9+AT3u+LAdZ0YLP8GdooWddSEblUotFLciKeJAJeBgyq5M1UinDOU4hXuoc934FOc4HA4rzrtcijFYFFS3ovhhUQvwltDIY0UT3pWBEFPA73blGynKOp2AuGxR12XlXYUXeTMJUFI0E3ZeDSOCjqIGWB5EaEd1XoB+M0LO+dJH8PdEg3mxkJpjboALZyfyV5w0LpfL0F7yH3TK9/CeDdMNzjSUIwaAQgFmG3QQm8JSmBe6xRb+gvP5U4OI5Os2bTah+UyW2r0DMKxD0bkEj1aFiX48RIYuCfDH/jXU3fmHL+iWVuIrjSwZW9Rd7NZFlRSTk/zZwZwpxvBjJjhBVi/UayWgthiR97sjYhmuuHd2eybP8fCVmZLJzHknOTabKva1UKQXXPvgB4bDfXOcTOcL16FkzGeM2b920Ye1UMiVHljXXzp3HBh5c0s8SntXDPaI5V1lpxZaKimY0okCFIMMF1drtaE5p9dACKdwTv3Xp6rU33xQ1td6YiUa03t5yKnlvjK6QGoGm3NvrE1OP+g0znXdva8fLuZ+uX6QAFNr3MjEvFTC4gkVqib6+hHOYQrzFeQJvPbQzmojulKJRCVlSFKsRgj+c5phI9A07T6Dvuqc8hhqwRsNSdGZ8VJkSeKYR2AVUllBXQlUJiS6kz90g2Q2cJt1TmeZzvG/Nvm1jZunOTU1rfOcu2tSqO5dOzopyNO49kchopCdj1GAnPdEo/nGHnTbVmmXN4vai5DHFNCKQgnwlGv6Y7v/jcJSZzlcn8Q9AklEmTSUYU3NqcXYcMOkudV+IsRn4STzlbMPPC5IkOBsE6aykSHD9NhyRpEgYP+ycwaWhsOAcoQx4k5YOg8Sco+FYLIxXdPFuPncDfh6sTGWSULkNedFIgx00YlZdg2QYct/cNFaYxnifC7A38W3ZrPNYNnsbvVSs+O3v2k17VMXPNxqXmEZPWO78HCsRltu69OV2Ttm6PBqWroyGJpg62KpGHbiXfoMfK2kzgiAezHWjoNv/8lFW44ggvMVH2TfBTcZEjD+knF4YtHOV1sww+P2TJ3kM7Kb4Mx6zkMeJIhYwbsfu3fg1wCQmBVFnPkQdBvEmjcgxu0wDNM11/VBDN9sqEU9aaoPWHcVZY41ZY+j82NjEhLZ69fj4iYO9c0rJg8kSLkRDB0XxYAhdfCxZLPU8liyVI+JjIlx4UWu4WHIPDwNEZ4u9jtNbLEEA6S06R2G7vCguLvdcSWzXpjTPjTB5yD6WQWV6C3jUu5n7mX8Ayesdc6ChjhY+0xbSqaYgOzO6BRQcFOt16FinSKJa7J9eo2XPwIvTU4H+GTgPuc3MPUwvr89gshrWG7IOx7VXkuHMSrRCnKLHt5c426boye+FHiS+h3kPC00Bg3MMfY8OuWsoZQaOKns7U0Kfgp2qSXSp16GvybU4HdtCx+L4+BRd/hFvqX7OnzEF+3I20RniPto/MmNvB2khq8njdFSXdvrNxCzi6TeSlHdoGsTf8MdJJ3ecxP/p2WoCzm8A8p6utU7bY4dSpLKiUiNXIN/Hj+bzzu35fLuNRtoIHu7p67P6+n7dUyg0CoUP/B4+3mo5v7STkoKkVusYJVl97vnZbTe//Sf8rmfLm5ivMn/JPEQrxJlVOGfY3dLbM3I252eO1nQF3i7WPbPXO6lk5wa5ZpfWKs3K3OBmV2RzbFdfvReS6BfoOUXXFfdGRSdGUmDRFE2e3N2sgL7t/lTR3fdNxTCUP6FMZlhACwwZzfFm/FQ23PdQXFdonxju2wJ7gc4F4H6dJmMLaG8B3t+l46ohb6GTt8jGnZR2FQUH4M4HYEA1DBUG3Kv5sEmZ/DXf8fAtYc19fXoGctoILPHxNBXELUzH4gxYtM0sZa4Dyd/G3EPfgbST8U5SXpjpSquI9d7UjqBcu7X0XBNB5GZnGJvvCTzJLkTdTqPVZWpexkVqWyA+um9He9QNZqFg4i1mAeed30DoRhUAW509eJvzCN7uqlZIVSQrFJGfpQAwlcjPdVDVfduC4isEfeUZi5oTHVfwS3EaxeI+LJjOKW+RWiJnazTGaj7cutX5F3Roq5JQ2pcUbmOHVF1SwkGl3TCza+0SSHERzSWmi+lugR2TEX2RuBDX01iXEZqZQcQKXXF1iuyZ+cCuIZosNGiy8LVbGsRyf+WnEYcfpdt9VFJj5FOqa2fvUMNPM2izePFO9KwqvkdnvCeq7lmaDSWiNI5f+oTcRVioh4pME/a/Bp6AvuvLK16h2DlzqBvbx9R5PR+7rF+2/WPOoMtH8NE1irk7Ll/36g2FOPpRPL/BTQhsmqohgH1BNsUJAgdg3yCnha4OadzgcJeI996qqrdWnP+I5/NxPFBxPqIDaIpCd3cX/7YdhI89c9h/Z+6Q+wnNWILwZCq4ALUMGRO533kanbedp/F+56vbcGkbYLf4/J+QJ0kA5AEZTdGoL0L0rwTVdy46pKScyRY6ptFxOB03gy6SIP4LqN7XsoElAXYtFF5YB8S5w+tDZPmdrLM/J+RJNojuCrBswN0jBu7myPPPE44jZ2Rdl8+Q9r5/QZ4iWdCreZ+lU17FOSvKtiMpGBhmtn9xsz1/vr35i7/sICs1aUesV5uSYzG5jZDsLA4PcSfk2I42Twfp5u73Qx4TB12pejUzfTuvcZ1EuQra7KXK/hsj/+0RT/Wabg8zq1cutRsjCxtXLVl1YNWSqxoLRxr20pVj/aP9/aPXU9CfrVQ+X6ngH2ZTVu2OzXfUGqlcLtXwUCuV/buBVRtXDgys3LhqYO3QkiG4mPb/B0fIz8kmr14tl6i7ohEBMjxQYs77fwnOSvFerhqet4IDBLR9tk36vxOgDXL6ECdfupHn2fsCocB9LC9sdGXuSZZ9kpcu3ShQcniafCiAvtXFA4c+lSUAN3Q3+uT/BzxDuncAAHicY2BkYGAA4qmuv3vi+W2+MnCzMIDAw51rxRD0/yUsjMwxQC4HAxNIFABBdgrdAHicY2BkYGBu+N/AEMOSxMDw/z8LIwNQBAUoAQB7ogTseJxjYWBgYKE1TiKsBgAzHgDrAAAAAAAAAKgA0gEUAU4BmAJSAwYDcgO8BCYEpgUABUoF2AZABwoHTAeqB+4IMAiECOYJxAoWCtALcgvSDEIMWgyeDOgNNA2IAAB4nGNgZGBgUGJYxcDFAAJMQMwFZv8H8xkAHWAB7QAAAHichZE9bsJAEIWfwZAElChKpDRpVikoEsn8lEipUKCnoAez5ke211ovSNQ5TY6QE+QI6Whzikh52EMDRbza2W/evpkdyQDusIeH8rvnLtnDJbOSK7jAo3CV+pOwT34WrqGJnnCd+qtwAy94E26yY8YOnn/FrIV3YQ+3+BCu4AafwlXqX8I++Vu4hgf8CNep/wo3MPGuhZtoeeHA6qnTczXbqVVo0sik7niO9WITT+2pPNE2X5lUdYPOURrpVNtjm3y76DkXqciaRA15q+PYqMyatQ5dsHQu67fbkehBaBIMYKExhWOcQ2GGHeMKIQxSREV0Z/mY7gU2iFlp/3VP6LbIqR9yhS4CdM5cI7rSwnk6TY4tX+tRdXQrbsuahDSUWs1JYrLiDzzcramE1AMsi6oMfbS5ohN/UMyQ/AHYk29XeJxtT8lSwzAMzStNnJay72uhnPVRjq1OPTiRx3Fa+HvsgSO6SE96y6iaVb+1rP6vDWY4whw1Gii0WGCJY6xwglOc4RwXuMQVrnGDW9zhHg94xBOe8YJXrPGGd2zwUbU0Tt1WYq9oK95yXP11ksDDkrS1ZHbOW0XjwSWzm1PSnaJuSkmGhtwQprTIFDafnXw1FLV1UueWWNEw9R1HRVPwom2m6dHobN7QGLThhox4iXVB2Ut7jmlOUQ4tWbd3tkhH9mxyQop6GLdlw9YlKRdfGHW+MNdkc2CeXZ9jbdYUZCR8K3J9kOKbX2kpRN47PtTUy56r6ge3iFdEAAAA) format("woff")}.fc-icon{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:fc-icon!important;font-size:16px;font-style:normal}.icon-group:before{content:"\\eb77"}.icon-add-child:before{content:"\\e789"}.icon-switch:before{content:"\\e77c"}.icon-tab:before{content:"\\e77b"}.icon-button:before{content:"\\e77e"}.icon-input:before{content:"\\e77f"}.icon-checkbox:before{content:"\\e780"}.icon-radio:before{content:"\\e781"}.icon-rate:before{content:"\\e782"}.icon-number:before{content:"\\e783"}.icon-upload:before{content:"\\e784"}.icon-cascader:before{content:"\\e785"}.icon-space:before{content:"\\e786"}.icon-color:before{content:"\\e787"}.icon-span:before{content:"\\e788"}.icon-alert:before{content:"\\e78a"}.icon-row:before{content:"\\e78b"}.icon-divider:before{content:"\\e78d"}.icon-select:before{content:"\\e78e"}.icon-transfer:before{content:"\\e78f"}.icon-editor:before{content:"\\e790"}.icon-slider:before{content:"\\e791"}.icon-tree:before{content:"\\e792"}.icon-date:before{content:"\\e793"}.icon-time:before{content:"\\e794"}.icon-delete:before{content:"\\e770"}.icon-copy:before{content:"\\e771"}.icon-import:before{content:"\\e773"}.icon-add:before{content:"\\e774"}.icon-preview:before{content:"\\e776"}.icon-move:before{content:"\\e777"}')),document.head.appendChild(o)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import { defineComponent as Pn, openBlock as tt, createElementBlock as Gt, createElementVNode as ft, markRaw as Zf, computed as ro, unref as qf, isRef as Pv, ref as Ji, resolveComponent as ut, TransitionGroup as Iv, h as ea, nextTick as Or, toRefs as Hl, getCurrentInstance as Lv, reactive as nl, provide as Sf, toRef as Qi, watch as rl, createBlock as Hn, normalizeStyle as Nv, withCtx as qe, createVNode as Je, Fragment as _f, renderList as ed, toDisplayString as on, normalizeClass as Ko, renderSlot as td, createTextVNode as Kn, createCommentVNode as vn, withDirectives as Wo, vShow as jo, inject as Ov, withModifiers as Fv, pushScopeId as Bv, popScopeId as Hv, mergeProps as Uv } from "vue";
import nd from "@form-create/element-ui";
function Ef({ t: c }) {
  return [
    {
      type: "radio",
      field: "labelPosition",
      value: "left",
      title: c("form.labelPosition"),
      options: [
        { value: "right", label: "right" },
        { value: "left", label: "left" },
        { value: "top", label: "top" }
      ]
    },
    {
      type: "radio",
      field: "size",
      value: "small",
      title: c("form.size"),
      options: [
        { value: "large", label: "large" },
        { value: "default", label: "default" },
        { value: "small", label: "small" }
      ]
    },
    {
      type: "input",
      field: "labelWidth",
      value: "125px",
      title: c("form.labelWidth")
    },
    {
      type: "switch",
      field: "hideRequiredAsterisk",
      value: !1,
      title: c("form.hideRequiredAsterisk")
    },
    {
      type: "switch",
      field: "showMessage",
      value: !0,
      title: c("form.showMessage")
    },
    {
      type: "switch",
      field: "inlineMessage",
      value: !1,
      title: c("form.inlineMessage")
    },
    {
      type: "switch",
      field: "formCreateSubmitBtn",
      value: !0,
      title: c("form.submitBtn")
    },
    {
      type: "switch",
      field: "formCreateResetBtn",
      value: !1,
      title: c("form.resetBtn")
    }
  ];
}
const mr = (c, y) => {
  const l = c.__vccOpts || c;
  for (const [o, t] of y)
    l[o] = t;
  return l;
}, zv = Pn({
  name: "IconRefresh"
}), Wv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  "data-v-029747aa": ""
}, jv = /* @__PURE__ */ ft("path", {
  fill: "currentColor",
  d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
}, null, -1), $v = [
  jv
];
function Yv(c, y, l, o, t, s) {
  return tt(), Gt("svg", Wv, $v);
}
const Vv = /* @__PURE__ */ mr(zv, [["render", Yv]]);
function Qv({ t: c }) {
  return [
    {
      type: "input",
      field: "field",
      value: "",
      title: c("form.field")
    },
    {
      type: "input",
      field: "title",
      value: "",
      title: c("form.title")
    },
    {
      type: "input",
      field: "info",
      value: "",
      title: c("form.info")
    },
    {
      type: "Struct",
      field: "_control",
      value: [],
      title: c("form.control"),
      props: {
        defaultValue: [],
        validate(y) {
          return Array.isArray(y) ? y.length ? !y.some(({ rule: l }) => !Array.isArray(l)) : !0 : !1;
        }
      }
    },
    {
      type: "col",
      props: {
        span: 24
      },
      children: [
        {
          type: "el-button",
          props: {
            type: "primary",
            size: "small"
          },
          inject: !0,
          on: {
            click({ $f: y }) {
              const l = y.activeRule;
              l && (l.__fc__.updateKey(), l.value = void 0, l.__fc__.$api.sync(l));
            }
          },
          native: !0,
          children: [{ type: "i", class: "fc-icon icon-delete" }, c("form.clear")]
        },
        {
          type: "el-button",
          props: {
            type: "success",
            size: "small",
            icon: Zf(Vv)
          },
          inject: !0,
          on: {
            click({ $f: y }) {
              const l = y.activeRule;
              l && (l.__fc__.updateKey(!0), l.__fc__.$api.sync(l));
            }
          },
          native: !0,
          children: [c("form.refresh")]
        }
      ]
    }
  ];
}
function bf() {
  return [
    {
      type: "validate",
      field: "validate",
      value: []
    }
  ];
}
function Gi(c, y, l) {
  c[y] = l;
}
const xt = {
  type(c, y) {
    return Object.prototype.toString.call(c) === "[object " + y + "]";
  },
  Undef(c) {
    return c == null;
  },
  Element(c) {
    return typeof c == "object" && c !== null && c.nodeType === 1 && !xt.Object(c);
  },
  trueArray(c) {
    return Array.isArray(c) && c.length > 0;
  },
  Function(c) {
    const y = this.getType(c);
    return y === "Function" || y === "AsyncFunction";
  },
  getType(c) {
    const y = Object.prototype.toString.call(c);
    return /^\[object (.*)\]$/.exec(y)[1];
  },
  empty(c) {
    return c == null || Array.isArray(c) && Array.isArray(c) && !c.length ? !0 : typeof c == "string" && !c;
  }
};
["Date", "Object", "String", "Boolean", "Array", "Number"].forEach((c) => {
  xt[c] = function(y) {
    return xt.type(y, c);
  };
});
function rd(c, y) {
  return {}.hasOwnProperty.call(c, y);
}
function id(c, y = {}, l) {
  let o = !1;
  for (let t in y)
    if (Object.prototype.hasOwnProperty.call(y, t)) {
      let s = y[t];
      if ((o = Array.isArray(s)) || xt.Object(s)) {
        let u = c[t] === void 0;
        if (o)
          o = !1, u && Gi(c, t, []);
        else if (s._clone && l !== void 0)
          if (l)
            s = s.getRule(), u && Gi(c, t, {});
          else {
            Gi(c, t, s._clone());
            continue;
          }
        else
          u && Gi(c, t, {});
        c[t] = id(c[t], s, l);
      } else
        Gi(c, t, s), xt.Undef(s) || (xt.Undef(s.__json) || (c[t].__json = s.__json), xt.Undef(s.__origin) || (c[t].__origin = s.__origin));
    }
  return l !== void 0 && Array.isArray(c) ? c.filter((t) => !t || !t.__ctrl) : c;
}
function vr(c) {
  return id({}, { value: c }).value;
}
function Gv(c) {
  const y = c.replace(/(-[a-z])/g, function(l) {
    return l.replace("-", "").toLocaleUpperCase();
  });
  return Ul(y);
}
function Ul(c) {
  return c.replace(c[0], c[0].toLowerCase());
}
let kv = 0;
function St() {
  return "F" + Math.random().toString(36).substr(3, 3) + Number(`${Date.now()}${++kv}`).toString(36);
}
function Kv(c, y, l) {
  return `[form-create ${c}]: ${y}` + (l ? `

rule: ` + JSON.stringify(l.getRule ? l.getRule() : l) : "");
}
function Xv(c, y) {
  console.error(Kv("err", c, y));
}
const Cf = "[[FORM-CREATE-PREFIX-", Tf = "-FORM-CREATE-SUFFIX]]", wf = "$FN:", Df = "$FNX:", $o = "function";
function Mf(c) {
  return new Function("return " + c)();
}
function Jv(c, y) {
  if (c && xt.String(c) && c.length > 4) {
    let l = c.trim(), o = !1;
    try {
      if (l.indexOf(Tf) > 0 && l.indexOf(Cf) === 0)
        l = l.replace(Tf, "").replace(Cf, ""), o = !0;
      else if (l.indexOf(wf) === 0)
        l = l.replace(wf, ""), o = !0;
      else {
        if (l.indexOf(Df) === 0)
          return l = Mf("function($inject){" + l.replace(Df, "") + "}"), l.__json = c, l.__inject = !0, l;
        !y && l.indexOf($o) === 0 && l !== $o && (o = !0);
      }
      if (!o)
        return c;
      const t = Mf(l.indexOf($o) === -1 && l.indexOf("(") !== 0 ? $o + " " + l : l);
      return t.__json = c, t;
    } catch (t) {
      Xv(`\u89E3\u6790\u5931\u8D25:${l}

err: ${t}`);
      return;
    }
  }
  return c;
}
const Zv = {
  name: "zh-cn",
  form: {
    field: "\u5B57\u6BB5 ID",
    title: "\u5B57\u6BB5\u540D\u79F0",
    info: "\u63D0\u793A\u4FE1\u606F",
    control: "\u8054\u52A8\u6570\u636E",
    clear: "\u6E05\u7A7A\u503C",
    refresh: "\u5237\u65B0",
    labelPosition: "\u6807\u7B7E\u4F4D\u7F6E",
    size: "\u8868\u5355\u5C3A\u5BF8",
    labelWidth: "\u6807\u7B7E\u5BBD\u5EA6",
    hideRequiredAsterisk: "\u9690\u85CF\u5FC5\u586B\u5B57\u6BB5\u7684\u6807\u7B7E\u65C1\u8FB9\u7684\u7EA2\u8272\u661F\u53F7",
    showMessage: "\u663E\u793A\u6821\u9A8C\u9519\u8BEF\u4FE1\u606F",
    inlineMessage: "\u4EE5\u884C\u5185\u5F62\u5F0F\u5C55\u793A\u6821\u9A8C\u4FE1\u606F",
    submitBtn: "\u662F\u5426\u663E\u793A\u8868\u5355\u63D0\u4EA4\u6309\u94AE",
    resetBtn: "\u662F\u5426\u663E\u793A\u8868\u5355\u91CD\u7F6E\u6309\u94AE",
    submit: "\u63D0\u4EA4",
    reset: "\u91CD\u7F6E"
  },
  validate: {
    type: "\u5B57\u6BB5\u7C7B\u578B",
    typePlaceholder: "\u8BF7\u9009\u62E9",
    trigger: "\u89E6\u53D1\u65B9\u5F0F",
    mode: "\u9A8C\u8BC1\u65B9\u5F0F",
    modes: {
      required: "\u5FC5\u586B",
      pattern: "\u6B63\u5219\u8868\u8FBE\u5F0F",
      min: "\u6700\u5C0F\u503C",
      max: "\u6700\u5927\u503C",
      len: "\u957F\u5EA6"
    },
    message: "\u9519\u8BEF\u4FE1\u606F",
    auto: "\u81EA\u52A8\u83B7\u53D6",
    autoRequired: "\u8BF7\u8F93\u5165{title}",
    autoMode: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684{title}",
    requiredPlaceholder: "\u8BF7\u8F93\u5165\u63D0\u793A\u8BED"
  },
  tableOptions: {
    handle: "\u64CD\u4F5C",
    add: "\u6DFB\u52A0"
  },
  struct: {
    title: "\u7F16\u8F91\u6570\u636E",
    submit: "\u786E \u5B9A",
    cancel: "\u53D6 \u6D88",
    error: "\u8F93\u5165\u5185\u5BB9\u683C\u5F0F\u6709\u8BEF"
  },
  fetch: {
    action: "\u63A5\u53E3",
    actionRequired: "\u8BF7\u6570\u636E\u63A5\u53E3",
    method: "\u8BF7\u6C42\u65B9\u5F0F",
    dataType: "\u63D0\u4EA4\u65B9\u5F0F",
    data: "\u9644\u5E26\u6570\u636E",
    headers: "header\u4FE1\u606F",
    parse: "\u89E3\u6790\u51FD\u6570",
    parseInfo: "\u89E3\u6790\u63A5\u53E3\u6570\u636E\uFF0C\u8FD4\u56DE\u7EC4\u4EF6\u6240\u9700\u7684\u6570\u636E\u7ED3\u6784",
    parseValidate: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u89E3\u6790\u51FD\u6570"
  },
  designer: {
    preview: "\u9884 \u89C8",
    clear: "\u6E05 \u7A7A",
    clearConfirm: "\u6E05\u7A7A",
    clearCancel: "\u53D6\u6D88",
    clearConfirmTitle: "\u6E05\u7A7A\u540E\u5C06\u4E0D\u80FD\u6062\u590D\uFF0C\u786E\u5B9A\u8981\u6E05\u7A7A\u5417\uFF1F",
    config: {
      component: "\u7EC4\u4EF6\u914D\u7F6E",
      form: "\u8868\u5355\u914D\u7F6E",
      rule: "\u57FA\u7840\u914D\u7F6E",
      props: "\u5C5E\u6027\u914D\u7F6E",
      validate: "\u9A8C\u8BC1\u914D\u7F6E"
    }
  },
  menu: {
    main: "\u8868\u5355\u7EC4\u4EF6",
    aide: "\u8F85\u52A9\u7EC4\u4EF6",
    layout: "\u5E03\u5C40\u7EC4\u4EF6"
  },
  props: {
    required: "\u662F\u5426\u5FC5\u586B",
    options: "\u9009\u9879\u6570\u636E",
    option: "\u9009\u9879",
    optionsType: {
      json: "JSON\u6570\u636E",
      fetch: "\u63A5\u53E3\u6570\u636E",
      struct: "\u9759\u6001\u6570\u636E"
    }
  },
  components: {
    group: {
      name: "\u5B50\u8868\u5355",
      props: {
        disabled: "\u662F\u5426\u7981\u7528",
        syncDisabled: "\u662F\u5426\u4E0E\u5B50\u8868\u5355\u5F3A\u5236\u540C\u6B65 disabled \u72B6\u6001",
        expand: "\u8BBE\u7F6E\u9ED8\u8BA4\u5C55\u5F00\u51E0\u9879",
        button: "\u662F\u5426\u663E\u793A\u64CD\u4F5C\u6309\u94AE",
        sortBtn: "\u662F\u5426\u663E\u793A\u6392\u5E8F\u6309\u94AE",
        min: "\u8BBE\u7F6E\u6700\u5C0F\u6DFB\u52A0\u51E0\u9879",
        max: "\u8BBE\u7F6E\u6700\u591A\u6DFB\u52A0\u51E0\u9879",
        mode: "\u7EC4\u4EF6\u7C7B\u578B",
        modeOpts: {
          subform: "\u5BF9\u8C61",
          group: "\u6570\u7EC4"
        }
      }
    },
    radio: {
      name: "\u5355\u9009\u6846",
      props: {
        disabled: "\u662F\u5426\u7981\u7528",
        type: "\u6309\u94AE\u5F62\u5F0F",
        textColor: "\u6309\u94AE\u5F62\u5F0F\u7684 Radio \u6FC0\u6D3B\u65F6\u7684\u6587\u672C\u989C\u8272",
        fill: "\u6309\u94AE\u5F62\u5F0F\u7684 Radio \u6FC0\u6D3B\u65F6\u7684\u586B\u5145\u8272\u548C\u8FB9\u6846\u8272"
      }
    },
    checkbox: {
      name: "\u591A\u9009\u6846",
      props: {
        type: "\u6309\u94AE\u7C7B\u578B",
        disabled: "\u662F\u5426\u7981\u7528",
        min: "\u53EF\u88AB\u52FE\u9009\u7684 checkbox \u7684\u6700\u5C0F\u6570\u91CF",
        max: "\u53EF\u88AB\u52FE\u9009\u7684 checkbox \u7684\u6700\u5927\u6570\u91CF",
        textColor: "\u6309\u94AE\u5F62\u5F0F\u7684 Checkbox \u6FC0\u6D3B\u65F6\u7684\u6587\u672C\u989C\u8272",
        fill: "\u6309\u94AE\u5F62\u5F0F\u7684 Checkbox \u6FC0\u6D3B\u65F6\u7684\u586B\u5145\u8272\u548C\u8FB9\u6846\u8272"
      }
    },
    input: {
      name: "\u8F93\u5165\u6846",
      props: {
        type: "\u7C7B\u578B",
        maxlength: "\u6700\u5927\u8F93\u5165\u957F\u5EA6",
        minlength: "\u6700\u5C0F\u8F93\u5165\u957F\u5EA6",
        showWordLimit: "\u662F\u5426\u663E\u793A\u8F93\u5165\u5B57\u6570\u7EDF\u8BA1",
        placeholder: "\u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C",
        clearable: "\u662F\u5426\u53EF\u6E05\u7A7A",
        showPassword: "\u662F\u5426\u663E\u793A\u5207\u6362\u5BC6\u7801\u56FE\u6807",
        disabled: "\u7981\u7528",
        prefixIcon: "\u8F93\u5165\u6846\u5934\u90E8\u56FE\u6807",
        suffixIcon: "\u8F93\u5165\u6846\u5C3E\u90E8\u56FE\u6807",
        rowInfo: '\u53EA\u5BF9 type="textarea" \u6709\u6548',
        rows: "\u8F93\u5165\u6846\u884C\u6570",
        autocomplete: "\u81EA\u52A8\u8865\u5168",
        readonly: "\u662F\u5426\u53EA\u8BFB",
        resize: "\u63A7\u5236\u662F\u5426\u80FD\u88AB\u7528\u6237\u7F29\u653E",
        autofocus: "\u81EA\u52A8\u83B7\u53D6\u7126\u70B9"
      }
    },
    inputNumber: {
      name: "\u8BA1\u6570\u5668",
      props: {
        min: "\u8BBE\u7F6E\u8BA1\u6570\u5668\u5141\u8BB8\u7684\u6700\u5C0F\u503C",
        max: "\u8BBE\u7F6E\u8BA1\u6570\u5668\u5141\u8BB8\u7684\u6700\u5927\u503C",
        step: "\u8BA1\u6570\u5668\u6B65\u957F",
        stepStrictly: "\u662F\u5426\u53EA\u80FD\u8F93\u5165 step \u7684\u500D\u6570",
        disabled: "\u662F\u5426\u7981\u7528\u8BA1\u6570\u5668",
        controls: "\u662F\u5426\u4F7F\u7528\u63A7\u5236\u6309\u94AE",
        controlsPosition: "\u63A7\u5236\u6309\u94AE\u4F4D\u7F6E",
        placeholder: "\u8F93\u5165\u6846\u9ED8\u8BA4 placeholder"
      }
    },
    select: {
      name: "\u9009\u62E9\u5668",
      props: {
        multiple: "\u662F\u5426\u591A\u9009",
        disabled: "\u662F\u5426\u7981\u7528",
        clearable: "\u662F\u5426\u53EF\u4EE5\u6E05\u7A7A\u9009\u9879",
        collapseTags: "\u591A\u9009\u65F6\u662F\u5426\u5C06\u9009\u4E2D\u503C\u6309\u6587\u5B57\u7684\u5F62\u5F0F\u5C55\u793A",
        multipleLimit: "\u591A\u9009\u65F6\u7528\u6237\u6700\u591A\u53EF\u4EE5\u9009\u62E9\u7684\u9879\u76EE\u6570\uFF0C\u4E3A 0 \u5219\u4E0D\u9650\u5236",
        autocomplete: "autocomplete \u5C5E\u6027",
        placeholder: "\u5360\u4F4D\u7B26",
        filterable: "\u662F\u5426\u53EF\u641C\u7D22",
        allowCreate: "\u662F\u5426\u5141\u8BB8\u7528\u6237\u521B\u5EFA\u65B0\u6761\u76EE",
        noMatchText: "\u641C\u7D22\u6761\u4EF6\u65E0\u5339\u914D\u65F6\u663E\u793A\u7684\u6587\u5B57",
        noDataText: "\u9009\u9879\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u6587\u5B57",
        reserveKeyword: "\u591A\u9009\u4E14\u53EF\u641C\u7D22\u65F6\uFF0C\u662F\u5426\u5728\u9009\u4E2D\u4E00\u4E2A\u9009\u9879\u540E\u4FDD\u7559\u5F53\u524D\u7684\u641C\u7D22\u5173\u952E\u8BCD",
        defaultFirstOption: "\u5728\u8F93\u5165\u6846\u6309\u4E0B\u56DE\u8F66\uFF0C\u9009\u62E9\u7B2C\u4E00\u4E2A\u5339\u914D\u9879",
        popperAppendToBody: "\u662F\u5426\u5C06\u5F39\u51FA\u6846\u63D2\u5165\u81F3 body \u5143\u7D20",
        automaticDropdown: "\u5BF9\u4E8E\u4E0D\u53EF\u641C\u7D22\u7684 Select\uFF0C\u662F\u5426\u5728\u8F93\u5165\u6846\u83B7\u5F97\u7126\u70B9\u540E\u81EA\u52A8\u5F39\u51FA\u9009\u9879\u83DC\u5355"
      }
    },
    switch: {
      name: "\u5F00\u5173",
      props: {
        disabled: "\u662F\u5426\u7981\u7528",
        width: "\u5BBD\u5EA6\uFF08px\uFF09",
        activeText: "switch \u6253\u5F00\u65F6\u7684\u6587\u5B57\u63CF\u8FF0",
        inactiveText: "switch \u5173\u95ED\u65F6\u7684\u6587\u5B57\u63CF\u8FF0",
        activeValue: "switch \u6253\u5F00\u65F6\u7684\u503C",
        inactiveValue: "switch \u5173\u95ED\u65F6\u7684\u503C",
        activeColor: "switch \u6253\u5F00\u65F6\u7684\u80CC\u666F\u8272",
        inactiveColor: "switch \u5173\u95ED\u65F6\u7684\u80CC\u666F\u8272"
      }
    },
    slider: {
      name: "\u6ED1\u5757",
      props: {
        min: "\u6700\u5C0F\u503C",
        max: "\u6700\u5927\u503C",
        disabled: "\u662F\u5426\u7981\u7528",
        step: "\u6B65\u957F",
        showInput: "\u662F\u5426\u663E\u793A\u8F93\u5165\u6846\uFF0C\u4EC5\u5728\u975E\u8303\u56F4\u9009\u62E9\u65F6\u6709\u6548",
        showInputControls: "\u5728\u663E\u793A\u8F93\u5165\u6846\u7684\u60C5\u51B5\u4E0B\uFF0C\u662F\u5426\u663E\u793A\u8F93\u5165\u6846\u7684\u63A7\u5236\u6309\u94AE",
        showStops: "\u662F\u5426\u663E\u793A\u95F4\u65AD\u70B9",
        range: "\u662F\u5426\u4E3A\u8303\u56F4\u9009\u62E9",
        vertical: "\u662F\u5426\u7AD6\u5411\u6A21\u5F0F",
        height: "Slider \u9AD8\u5EA6\uFF0C\u7AD6\u5411\u6A21\u5F0F\u65F6\u5FC5\u586B"
      }
    },
    timePicker: {
      name: "\u65F6\u95F4\u9009\u62E9\u5668",
      props: {
        pickerOptions: "\u5F53\u524D\u65F6\u95F4\u65E5\u671F\u9009\u62E9\u5668\u7279\u6709\u7684\u9009\u9879",
        readonly: "\u5B8C\u5168\u53EA\u8BFB",
        disabled: "\u7981\u7528",
        editable: "\u6587\u672C\u6846\u53EF\u8F93\u5165",
        clearable: "\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE",
        placeholder: "\u975E\u8303\u56F4\u9009\u62E9\u65F6\u7684\u5360\u4F4D\u5185\u5BB9",
        startPlaceholder: "\u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9",
        endPlaceholder: "\u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9",
        isRange: "\u662F\u5426\u4E3A\u65F6\u95F4\u8303\u56F4\u9009\u62E9",
        arrowControl: "\u662F\u5426\u4F7F\u7528\u7BAD\u5934\u8FDB\u884C\u65F6\u95F4\u9009\u62E9",
        align: "\u5BF9\u9F50\u65B9\u5F0F",
        prefixIcon: "\u81EA\u5B9A\u4E49\u5934\u90E8\u56FE\u6807\u7684\u7C7B\u540D",
        clearIcon: "\u81EA\u5B9A\u4E49\u6E05\u7A7A\u56FE\u6807\u7684\u7C7B\u540D"
      }
    },
    datePicker: {
      name: "\u65E5\u671F\u9009\u62E9\u5668",
      props: {
        pickerOptions: "\u5F53\u524D\u65F6\u95F4\u65E5\u671F\u9009\u62E9\u5668\u7279\u6709\u7684\u9009\u9879",
        readonly: "\u5B8C\u5168\u53EA\u8BFB",
        disabled: "\u7981\u7528",
        type: "\u663E\u793A\u7C7B\u578B",
        editable: "\u6587\u672C\u6846\u53EF\u8F93\u5165",
        clearable: "\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE",
        placeholder: "\u975E\u8303\u56F4\u9009\u62E9\u65F6\u7684\u5360\u4F4D\u5185\u5BB9",
        startPlaceholder: "\u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9",
        endPlaceholder: "\u8303\u56F4\u9009\u62E9\u65F6\u7ED3\u675F\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9",
        format: "\u663E\u793A\u5728\u8F93\u5165\u6846\u4E2D\u7684\u683C\u5F0F",
        align: "\u5BF9\u9F50\u65B9\u5F0F",
        rangeSeparator: "\u9009\u62E9\u8303\u56F4\u65F6\u7684\u5206\u9694\u7B26",
        unlinkPanels: "\u5728\u8303\u56F4\u9009\u62E9\u5668\u91CC\u53D6\u6D88\u4E24\u4E2A\u65E5\u671F\u9762\u677F\u4E4B\u95F4\u7684\u8054\u52A8",
        prefixIcon: "\u81EA\u5B9A\u4E49\u5934\u90E8\u56FE\u6807\u7684\u7C7B\u540D",
        clearIcon: "\u81EA\u5B9A\u4E49\u6E05\u7A7A\u56FE\u6807\u7684\u7C7B\u540D"
      }
    },
    rate: {
      name: "\u8BC4\u5206",
      props: {
        max: "\u6700\u5927\u5206\u503C",
        disabled: "\u662F\u5426\u4E3A\u53EA\u8BFB",
        allowHalf: "\u662F\u5426\u5141\u8BB8\u534A\u9009",
        voidColor: "\u672A\u9009\u4E2D icon \u7684\u989C\u8272",
        disabledVoidColor: "\u53EA\u8BFB\u65F6\u672A\u9009\u4E2D icon \u7684\u989C\u8272",
        voidIconClass: "\u672A\u9009\u4E2D icon \u7684\u7C7B\u540D",
        disabledVoidIconClass: "\u53EA\u8BFB\u65F6\u672A\u9009\u4E2D icon \u7684\u7C7B\u540D",
        showScore: "\u662F\u5426\u663E\u793A\u5F53\u524D\u5206\u6570\uFF0Cshow-score \u548C show-text \u4E0D\u80FD\u540C\u65F6\u4E3A\u771F",
        textColor: "\u8F85\u52A9\u6587\u5B57\u7684\u989C\u8272",
        scoreTemplate: "\u5206\u6570\u663E\u793A\u6A21\u677F"
      }
    },
    colorPicker: {
      name: "\u989C\u8272\u9009\u62E9\u5668",
      props: {
        disabled: "\u662F\u5426\u7981\u7528",
        showAlpha: "\u662F\u5426\u652F\u6301\u900F\u660E\u5EA6\u9009\u62E9",
        colorFormat: "\u989C\u8272\u7684\u683C\u5F0F"
      }
    },
    row: {
      name: "\u6805\u683C\u5E03\u5C40",
      props: {
        gutter: "\u6805\u683C\u95F4\u9694",
        type: "flex\u5E03\u5C40\u6A21\u5F0F",
        justify: "flex \u5E03\u5C40\u4E0B\u7684\u6C34\u5E73\u6392\u5217\u65B9\u5F0F",
        align: "flex \u5E03\u5C40\u4E0B\u7684\u5782\u76F4\u6392\u5217\u65B9\u5F0F"
      }
    },
    col: {
      name: "\u683C\u5B50",
      props: {
        span: "\u6805\u683C\u5360\u636E\u7684\u5217\u6570",
        offset: "\u6805\u683C\u5DE6\u4FA7\u7684\u95F4\u9694\u683C\u6570",
        push: "\u6805\u683C\u5411\u53F3\u79FB\u52A8\u683C\u6570",
        pull: "\u6805\u683C\u5411\u5DE6\u79FB\u52A8\u683C\u6570"
      }
    },
    tab: {
      name: "\u6807\u7B7E\u9875",
      props: {
        type: "\u98CE\u683C\u7C7B\u578B",
        closable: "\u6807\u7B7E\u662F\u5426\u53EF\u5173\u95ED",
        tabPosition: "\u9009\u9879\u5361\u6240\u5728\u4F4D\u7F6E",
        stretch: "\u6807\u7B7E\u7684\u5BBD\u5EA6\u662F\u5426\u81EA\u6491\u5F00"
      }
    },
    "tab-pane": {
      name: "\u6807\u7B7E\u9875",
      props: {
        label: "\u9009\u9879\u5361\u6807\u9898",
        disabled: "\u662F\u5426\u7981\u7528",
        name: "\u4E0E\u9009\u9879\u5361\u7ED1\u5B9A\u503C value \u5BF9\u5E94\u7684\u6807\u8BC6\u7B26\uFF0C\u8868\u793A\u9009\u9879\u5361\u522B\u540D",
        lazy: "\u6807\u7B7E\u662F\u5426\u5EF6\u8FDF\u6E32\u67D3"
      }
    },
    "el-divider": {
      name: "\u5206\u5272\u7EBF",
      props: {
        direction: "\u8BBE\u7F6E\u5206\u5272\u7EBF\u65B9\u5411",
        formCreateChild: "\u8BBE\u7F6E\u5206\u5272\u7EBF\u6587\u6848",
        contentPosition: "\u8BBE\u7F6E\u5206\u5272\u7EBF\u6587\u6848\u7684\u4F4D\u7F6E"
      }
    },
    cascader: {
      name: "\u7EA7\u8054\u9009\u62E9\u5668",
      props: {
        props: "\u914D\u7F6E\u9009\u9879",
        size: "\u5C3A\u5BF8",
        placeholder: "\u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C",
        disabled: "\u662F\u5426\u7981\u7528",
        clearable: "\u662F\u5426\u652F\u6301\u6E05\u7A7A\u9009\u9879",
        showAllLevels: "\u8F93\u5165\u6846\u4E2D\u662F\u5426\u663E\u793A\u9009\u4E2D\u503C\u7684\u5B8C\u6574\u8DEF\u5F84",
        collapseTags: "\u591A\u9009\u6A21\u5F0F\u4E0B\u662F\u5426\u6298\u53E0Tag",
        separator: "\u9009\u9879\u5206\u9694\u7B26"
      }
    },
    upload: {
      name: "\u4E0A\u4F20",
      props: {
        uploadType: "\u4E0A\u4F20\u7C7B\u578B",
        action: "\u4E0A\u4F20\u7684\u5730\u5740(\u5FC5\u586B)",
        headers: "\u8BBE\u7F6E\u4E0A\u4F20\u7684\u8BF7\u6C42\u5934\u90E8",
        multiple: "\u662F\u5426\u652F\u6301\u591A\u9009\u6587\u4EF6",
        data: "\u4E0A\u4F20\u65F6\u9644\u5E26\u7684\u989D\u5916\u53C2\u6570",
        name: "\u4E0A\u4F20\u7684\u6587\u4EF6\u5B57\u6BB5\u540D",
        withCredentials: "\u652F\u6301\u53D1\u9001 cookie \u51ED\u8BC1\u4FE1\u606F",
        accept: "\u63A5\u53D7\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B\uFF08thumbnail-mode \u6A21\u5F0F\u4E0B\u6B64\u53C2\u6570\u65E0\u6548\uFF09",
        autoUpload: "\u662F\u5426\u5728\u9009\u53D6\u6587\u4EF6\u540E\u7ACB\u5373\u8FDB\u884C\u4E0A\u4F20",
        disabled: "\u662F\u5426\u7981\u7528",
        limit: "\u6700\u5927\u5141\u8BB8\u4E0A\u4F20\u4E2A\u6570"
      }
    },
    "el-transfer": {
      name: "\u7A7F\u68AD\u6846",
      props: {
        data: "Transfer \u7684\u6570\u636E\u6E90",
        filterable: "\u662F\u5426\u53EF\u641C\u7D22",
        filterPlaceholder: "\u641C\u7D22\u6846\u5360\u4F4D\u7B26",
        targetOrder: "\u53F3\u4FA7\u5217\u8868\u5143\u7D20\u7684\u6392\u5E8F\u7B56\u7565",
        titles: "\u81EA\u5B9A\u4E49\u5217\u8868\u6807\u9898",
        buttonTexts: "\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u6848",
        format: "\u5217\u8868\u9876\u90E8\u52FE\u9009\u72B6\u6001\u6587\u6848",
        props: "\u6570\u636E\u6E90\u7684\u5B57\u6BB5\u522B\u540D",
        leftDefaultChecked: "\u521D\u59CB\u72B6\u6001\u4E0B\u5DE6\u4FA7\u5217\u8868\u7684\u5DF2\u52FE\u9009\u9879\u7684 key \u6570\u7EC4",
        rightDefaultChecked: "\u521D\u59CB\u72B6\u6001\u4E0B\u53F3\u4FA7\u5217\u8868\u7684\u5DF2\u52FE\u9009\u9879\u7684 key \u6570\u7EC4"
      }
    },
    tree: {
      name: "\u6811\u5F62\u63A7\u4EF6",
      props: {
        emptyText: "\u5185\u5BB9\u4E3A\u7A7A\u7684\u65F6\u5019\u5C55\u793A\u7684\u6587\u672C",
        props: "\u914D\u7F6E\u9009\u9879\uFF0C\u5177\u4F53\u770B\u4E0B\u8868",
        renderAfterExpand: "\u662F\u5426\u5728\u7B2C\u4E00\u6B21\u5C55\u5F00\u67D0\u4E2A\u6811\u8282\u70B9\u540E\u624D\u6E32\u67D3\u5176\u5B50\u8282\u70B9",
        defaultExpandAll: "\u662F\u5426\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u8282\u70B9",
        expandOnClickNode: "\u662F\u5426\u5728\u70B9\u51FB\u8282\u70B9\u7684\u65F6\u5019\u5C55\u5F00\u6216\u8005\u6536\u7F29\u8282\u70B9\uFF0C \u9ED8\u8BA4\u503C\u4E3A true\uFF0C\u5982\u679C\u4E3A false\uFF0C\u5219\u53EA\u6709\u70B9\u7BAD\u5934\u56FE\u6807\u7684\u65F6\u5019\u624D\u4F1A\u5C55\u5F00\u6216\u8005\u6536\u7F29\u8282\u70B9\u3002",
        checkOnClickNode: "\u662F\u5426\u5728\u70B9\u51FB\u8282\u70B9\u7684\u65F6\u5019\u9009\u4E2D\u8282\u70B9\uFF0C\u9ED8\u8BA4\u503C\u4E3A false\uFF0C\u5373\u53EA\u6709\u5728\u70B9\u51FB\u590D\u9009\u6846\u65F6\u624D\u4F1A\u9009\u4E2D\u8282\u70B9\u3002",
        autoExpandParent: "\u5C55\u5F00\u5B50\u8282\u70B9\u7684\u65F6\u5019\u662F\u5426\u81EA\u52A8\u5C55\u5F00\u7236\u8282\u70B9",
        checkStrictly: "\u5728\u663E\u793A\u590D\u9009\u6846\u7684\u60C5\u51B5\u4E0B\uFF0C\u662F\u5426\u4E25\u683C\u7684\u9075\u5FAA\u7236\u5B50\u4E0D\u4E92\u76F8\u5173\u8054\u7684\u505A\u6CD5\uFF0C\u9ED8\u8BA4\u4E3A false",
        accordion: "\u662F\u5426\u6BCF\u6B21\u53EA\u6253\u5F00\u4E00\u4E2A\u540C\u7EA7\u6811\u8282\u70B9\u5C55\u5F00",
        indent: "\u76F8\u90BB\u7EA7\u8282\u70B9\u95F4\u7684\u6C34\u5E73\u7F29\u8FDB\uFF0C\u5355\u4F4D\u4E3A\u50CF\u7D20",
        iconClass: "\u81EA\u5B9A\u4E49\u6811\u8282\u70B9\u7684\u56FE\u6807",
        nodeKey: "\u6BCF\u4E2A\u6811\u8282\u70B9\u7528\u6765\u4F5C\u4E3A\u552F\u4E00\u6807\u8BC6\u7684\u5C5E\u6027\uFF0C\u6574\u68F5\u6811\u5E94\u8BE5\u662F\u552F\u4E00\u7684"
      }
    },
    "el-alert": {
      name: "\u63D0\u793A",
      description: "description",
      props: {
        title: "\u6807\u9898",
        type: "\u4E3B\u9898",
        description: "\u8F85\u52A9\u6027\u6587\u5B57",
        closable: "\u662F\u5426\u53EF\u5173\u95ED",
        center: "\u6587\u5B57\u662F\u5426\u5C45\u4E2D",
        closeText: "\u5173\u95ED\u6309\u94AE\u81EA\u5B9A\u4E49\u6587\u672C",
        showIcon: "\u662F\u5426\u663E\u793A\u56FE\u6807",
        effect: "\u9009\u62E9\u63D0\u4F9B\u7684\u4E3B\u9898"
      }
    },
    span: {
      name: "\u6587\u5B57",
      props: {
        formCreateTitle: "\u6807\u9898",
        formCreateChild: "\u5185\u5BB9"
      }
    },
    div: {
      name: "\u95F4\u8DDD",
      props: {
        height: "\u9AD8\u5EA6"
      }
    },
    "el-button": {
      name: "\u6309\u94AE",
      props: {
        formCreateChild: "\u5185\u5BB9",
        size: "\u5C3A\u5BF8",
        type: "\u7C7B\u578B",
        plain: "\u662F\u5426\u6734\u7D20\u6309\u94AE",
        round: "\u662F\u5426\u5706\u89D2\u6309\u94AE",
        circle: "\u662F\u5426\u5706\u5F62\u6309\u94AE",
        loading: "\u662F\u5426\u52A0\u8F7D\u4E2D\u72B6\u6001",
        disabled: "\u662F\u5426\u7981\u7528\u72B6\u6001",
        icon: "\u56FE\u6807\u7C7B\u540D"
      }
    },
    "fc-editor": {
      name: "\u5BCC\u6587\u672C\u6846",
      props: {
        disabled: "\u662F\u5426\u7981\u7528"
      }
    }
  }
};
function kt() {
  return {
    type: "Required",
    field: "formCreate$required",
    title: "\u662F\u5426\u5FC5\u586B"
  };
}
function vi(c, y, l) {
  const o = [
    { label: c("props.optionsType.json"), value: 0 },
    { label: c("props.optionsType.fetch"), value: 1 }
  ], t = [
    {
      value: 0,
      rule: [
        {
          type: "Struct",
          field: "formCreate" + io(y).replace(".", ">"),
          props: { defaultValue: [] }
        }
      ]
    },
    {
      value: 1,
      rule: [
        {
          type: "Fetch",
          field: "formCreateEffect>fetch",
          props: {
            to: y
          }
        }
      ]
    }
  ];
  return l !== !1 && (o.splice(0, 0, { label: c("props.optionsType.struct"), value: 2 }), t.push({
    value: 2,
    rule: [
      {
        type: "TableOptions",
        field: "formCreate" + io(y).replace(".", ">"),
        props: { defaultValue: [] }
      }
    ]
  })), {
    type: "radio",
    title: c("props.options"),
    field: "_optionType",
    value: l !== !1 ? 2 : 0,
    options: o,
    props: {
      type: "button"
    },
    control: t
  };
}
function io(c) {
  return c.replace(c[0], c[0].toLocaleUpperCase());
}
const Zi = function(c) {
  const y = /object ([a-zA-Z]*)/.exec(Object.prototype.toString.call(c));
  return y && Rf[y[1].toLowerCase()] ? Rf[y[1].toLowerCase()](c) : c;
}, Rf = {
  object: function(c) {
    var y = [];
    for (var l in c)
      !rd(c, l) || y.push(
        Zi(l) + ": " + (c[l] != null ? Zi(c[l]) : "null")
      );
    return `{
 ` + y.join(`,
 `) + `
}`;
  },
  function: function(c) {
    c = "" + c;
    var y = /^ *([\w]+) *\(/.exec(c);
    return y && y[1] !== "function" ? "function " + c : c;
  },
  array: function(c) {
    for (var y = 0, l = []; y < c.length; y++)
      l[y] = c[y] != null ? Zi(c[y]) : "null";
    return "[" + l.join(", ") + "]";
  },
  string: function(c) {
    for (var y = c.split(""), l = 0; l < y.length; l++) {
      var o = y[l];
      o >= " " ? o === "\\" ? y[l] = "\\\\" : o === '"' && (y[l] = '\\"') : y[l] = o === `
` ? "\\n" : o === "\r" ? "\\r" : o === "	" ? "\\t" : o === "\b" ? "\\b" : o === "\f" ? "\\f" : (o = o.charCodeAt(), "\\u00" + (o > 15 ? 1 : 0) + o % 16);
    }
    return '"' + y.join("") + '"';
  }
}, od = function(c) {
  if (c && typeof c == "object") {
    for (let y in c)
      if (Object.prototype.hasOwnProperty.call(c, y)) {
        let l = c[y];
        (Array.isArray(l) || xt.Object(l)) && od(l), xt.String(l) && (c[y] = Jv(l));
      }
  }
  return c;
};
function qv(c, y, l) {
  y = (y || "").split(".");
  let o = 0, t = y.length;
  for (; c != null && o < t; )
    c = c[y[o++]];
  return o && o === t && c !== void 0 ? c : l;
}
const _v = (c) => (y, l) => ep(y, l, qf(c)), ep = (c, y, l) => qv(l, c, "").replace(
  /\{(\w+)\}/g,
  (o, t) => {
    var s;
    return `${(s = y == null ? void 0 : y[t]) != null ? s : `{${t}}`}`;
  }
), tp = (c) => {
  const y = ro(() => qf(c).name), l = ro(() => io(Gv(y.value || ""))), o = Pv(c) ? c : Ji(c);
  return {
    lang: y,
    name: l,
    locale: o,
    t: _v(c)
  };
}, zl = (c) => tp(ro(() => c.value || Zv)), et = (c, y, l) => l.map((o) => (o.field === "formCreate$required" ? o.title = c("props.required") || o.title : o.field && o.field !== "_optionType" && (o.title = c("components." + y + "." + o.field) || o.title), o)), np = "\u5355\u9009\u6846", il = "radio", Wl = {
  icon: "icon-radio",
  label: np,
  name: il,
  rule({ t: c }) {
    const y = c("props.option");
    return {
      type: il,
      field: St(),
      title: c("components.radio.name"),
      info: "",
      effect: {
        fetch: ""
      },
      $required: !1,
      props: {},
      options: [1, 2].map((l) => ({
        label: y + l,
        value: l
      }))
    };
  },
  props(c, { t: y }) {
    return et(y, il + ".props", [
      kt(),
      vi(y, "options"),
      { type: "switch", field: "disabled", title: "\u662F\u5426\u7981\u7528" },
      {
        type: "switch",
        field: "type",
        title: "\u6309\u94AE\u5F62\u5F0F",
        props: { activeValue: "button", inactiveValue: "default" }
      },
      { type: "input", field: "textColor", title: "\u6309\u94AE\u5F62\u5F0F\u7684 Radio \u6FC0\u6D3B\u65F6\u7684\u6587\u672C\u989C\u8272" },
      {
        type: "input",
        field: "fill",
        title: "\u6309\u94AE\u5F62\u5F0F\u7684 Radio \u6FC0\u6D3B\u65F6\u7684\u586B\u5145\u8272\u548C\u8FB9\u6846\u8272"
      }
    ]);
  }
}, rp = "\u591A\u9009\u6846", ol = "checkbox", jl = {
  icon: "icon-checkbox",
  label: rp,
  name: ol,
  rule({ t: c }) {
    const y = c("props.option");
    return {
      type: ol,
      field: St(),
      title: c("components.checkbox.name"),
      info: "",
      effect: {
        fetch: ""
      },
      $required: !1,
      props: {},
      options: [1, 2].map((l) => ({
        label: y + l,
        value: l
      }))
    };
  },
  props(c, { t: y }) {
    return et(y, ol + ".props", [
      kt(),
      vi(y, "options"),
      {
        type: "switch",
        field: "type",
        title: "\u6309\u94AE\u7C7B\u578B",
        props: { activeValue: "button", inactiveValue: "default" }
      },
      { type: "switch", field: "disabled", title: "\u662F\u5426\u7981\u7528" },
      {
        type: "inputNumber",
        field: "min",
        title: "\u53EF\u88AB\u52FE\u9009\u7684 checkbox \u7684\u6700\u5C0F\u6570\u91CF",
        props: { min: 0 }
      },
      { type: "inputNumber", field: "max", title: "\u53EF\u88AB\u52FE\u9009\u7684 checkbox \u7684\u6700\u5927\u6570\u91CF", props: { min: 0 } },
      {
        type: "input",
        field: "textColor",
        title: "\u6309\u94AE\u5F62\u5F0F\u7684 Checkbox \u6FC0\u6D3B\u65F6\u7684\u6587\u672C\u989C\u8272"
      },
      { type: "input", field: "fill", title: "\u6309\u94AE\u5F62\u5F0F\u7684 Checkbox \u6FC0\u6D3B\u65F6\u7684\u586B\u5145\u8272\u548C\u8FB9\u6846\u8272" }
    ]);
  }
}, ip = "\u8F93\u5165\u6846", al = "input", $l = {
  icon: "icon-input",
  label: ip,
  name: al,
  rule({ t: c }) {
    return {
      type: al,
      field: St(),
      title: c("components.input.name"),
      info: "",
      $required: !1,
      props: {}
    };
  },
  props(c, { t: y }) {
    return et(y, al + ".props", [kt(), {
      type: "select",
      field: "type",
      title: "\u7C7B\u578B",
      options: [{ label: "text", value: "text" }, {
        label: "textarea",
        value: "textarea"
      }, { label: "number", value: "number" }, { label: "password", value: "password" }]
    }, { type: "inputNumber", field: "maxlength", title: "\u6700\u5927\u8F93\u5165\u957F\u5EA6", props: { min: 0 } }, {
      type: "inputNumber",
      field: "minlength",
      title: "\u6700\u5C0F\u8F93\u5165\u957F\u5EA6",
      props: { min: 0 }
    }, { type: "switch", field: "showWordLimit", title: "\u662F\u5426\u663E\u793A\u8F93\u5165\u5B57\u6570\u7EDF\u8BA1" }, {
      type: "input",
      field: "placeholder",
      title: "\u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C"
    }, { type: "switch", field: "clearable", title: "\u662F\u5426\u53EF\u6E05\u7A7A" }, {
      type: "switch",
      field: "showPassword",
      title: "\u662F\u5426\u663E\u793A\u5207\u6362\u5BC6\u7801\u56FE\u6807"
    }, { type: "switch", field: "disabled", title: "\u7981\u7528" }, {
      type: "input",
      field: "prefixIcon",
      title: "\u8F93\u5165\u6846\u5934\u90E8\u56FE\u6807"
    }, { type: "input", field: "suffixIcon", title: "\u8F93\u5165\u6846\u5C3E\u90E8\u56FE\u6807" }, {
      type: "inputNumber",
      field: "rows",
      info: y("components.input.props.rowsInfo"),
      title: "\u8F93\u5165\u6846\u884C\u6570",
      props: { min: 0 }
    }, {
      type: "select",
      field: "autocomplete",
      title: "\u81EA\u52A8\u8865\u5168",
      options: [{ label: "on", value: "on" }, { label: "off", value: "off" }]
    }, { type: "switch", field: "readonly", title: "\u662F\u5426\u53EA\u8BFB" }, {
      type: "select",
      field: "resize",
      title: "\u63A7\u5236\u662F\u5426\u80FD\u88AB\u7528\u6237\u7F29\u653E",
      options: [{ label: "none", value: "none" }, { label: "both", value: "both" }, {
        label: "horizontal",
        value: "horizontal"
      }, { label: "vertical", value: "vertical" }]
    }, { type: "switch", field: "autofocus", title: "\u81EA\u52A8\u83B7\u53D6\u7126\u70B9" }]);
  }
}, op = "\u8BA1\u6570\u5668", ll = "inputNumber", Yl = {
  icon: "icon-number",
  label: op,
  name: ll,
  rule({ t: c }) {
    return {
      type: ll,
      field: St(),
      title: c("components.inputNumber.name"),
      info: "",
      $required: !1,
      props: {}
    };
  },
  props(c, { t: y }) {
    return et(y, ll + ".props", [kt(), {
      type: "inputNumber",
      field: "min",
      title: "\u8BBE\u7F6E\u8BA1\u6570\u5668\u5141\u8BB8\u7684\u6700\u5C0F\u503C"
    }, {
      type: "inputNumber",
      field: "max",
      title: "\u8BBE\u7F6E\u8BA1\u6570\u5668\u5141\u8BB8\u7684\u6700\u5927\u503C"
    }, { type: "inputNumber", field: "step", title: "\u8BA1\u6570\u5668\u6B65\u957F", props: { min: 0 } }, {
      type: "switch",
      field: "stepStrictly",
      title: "\u662F\u5426\u53EA\u80FD\u8F93\u5165 step \u7684\u500D\u6570"
    }, { type: "switch", field: "disabled", title: "\u662F\u5426\u7981\u7528\u8BA1\u6570\u5668" }, {
      type: "switch",
      field: "controls",
      title: "\u662F\u5426\u4F7F\u7528\u63A7\u5236\u6309\u94AE",
      value: !0
    }, {
      type: "select",
      field: "controlsPosition",
      title: "\u63A7\u5236\u6309\u94AE\u4F4D\u7F6E",
      options: [{ label: "default", value: "" }, { label: "right", value: "right" }]
    }, { type: "input", field: "placeholder", title: "\u8F93\u5165\u6846\u9ED8\u8BA4 placeholder" }]);
  }
}, ap = "\u9009\u62E9\u5668", sl = "select", Vl = {
  icon: "icon-select",
  label: ap,
  name: sl,
  rule({ t: c }) {
    const y = c("props.option");
    return {
      type: sl,
      field: St(),
      title: c("components.select.name"),
      info: "",
      effect: {
        fetch: ""
      },
      $required: !1,
      props: {},
      options: [1, 2].map((l) => ({
        label: y + l,
        value: l
      }))
    };
  },
  watch: {
    multiple({ rule: c }) {
      c.key = St();
    }
  },
  props(c, { t: y }) {
    return et(y, sl + ".props", [
      kt(),
      vi(y, "options"),
      { type: "switch", field: "multiple", title: "\u662F\u5426\u591A\u9009" },
      {
        type: "switch",
        field: "disabled",
        title: "\u662F\u5426\u7981\u7528"
      },
      { type: "switch", field: "clearable", title: "\u662F\u5426\u53EF\u4EE5\u6E05\u7A7A\u9009\u9879" },
      {
        type: "switch",
        field: "collapseTags",
        title: "\u591A\u9009\u65F6\u662F\u5426\u5C06\u9009\u4E2D\u503C\u6309\u6587\u5B57\u7684\u5F62\u5F0F\u5C55\u793A"
      },
      { type: "inputNumber", field: "multipleLimit", title: "\u591A\u9009\u65F6\u7528\u6237\u6700\u591A\u53EF\u4EE5\u9009\u62E9\u7684\u9879\u76EE\u6570\uFF0C\u4E3A 0 \u5219\u4E0D\u9650\u5236", props: { min: 0 } },
      {
        type: "input",
        field: "autocomplete",
        title: "autocomplete \u5C5E\u6027"
      },
      { type: "input", field: "placeholder", title: "\u5360\u4F4D\u7B26" },
      {
        type: "switch",
        field: "filterable",
        title: "\u662F\u5426\u53EF\u641C\u7D22"
      },
      { type: "switch", field: "allowCreate", title: "\u662F\u5426\u5141\u8BB8\u7528\u6237\u521B\u5EFA\u65B0\u6761\u76EE" },
      {
        type: "input",
        field: "noMatchText",
        title: "\u641C\u7D22\u6761\u4EF6\u65E0\u5339\u914D\u65F6\u663E\u793A\u7684\u6587\u5B57"
      },
      {
        type: "switch",
        field: "remote",
        title: "\u5176\u4E2D\u7684\u9009\u9879\u662F\u5426\u4ECE\u670D\u52A1\u5668\u8FDC\u7A0B\u52A0\u8F7D"
      },
      {
        type: "Struct",
        field: "remoteMethod",
        title: "\u81EA\u5B9A\u4E49\u8FDC\u7A0B\u641C\u7D22\u65B9\u6CD5"
      },
      { type: "input", field: "noDataText", title: "\u9009\u9879\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u6587\u5B57" },
      {
        type: "switch",
        field: "reserveKeyword",
        title: "\u591A\u9009\u4E14\u53EF\u641C\u7D22\u65F6\uFF0C\u662F\u5426\u5728\u9009\u4E2D\u4E00\u4E2A\u9009\u9879\u540E\u4FDD\u7559\u5F53\u524D\u7684\u641C\u7D22\u5173\u952E\u8BCD"
      },
      { type: "switch", field: "defaultFirstOption", title: "\u5728\u8F93\u5165\u6846\u6309\u4E0B\u56DE\u8F66\uFF0C\u9009\u62E9\u7B2C\u4E00\u4E2A\u5339\u914D\u9879" },
      {
        type: "switch",
        field: "popperAppendToBody",
        title: "\u662F\u5426\u5C06\u5F39\u51FA\u6846\u63D2\u5165\u81F3 body \u5143\u7D20",
        value: !0
      },
      { type: "switch", field: "automaticDropdown", title: "\u5BF9\u4E8E\u4E0D\u53EF\u641C\u7D22\u7684 Select\uFF0C\u662F\u5426\u5728\u8F93\u5165\u6846\u83B7\u5F97\u7126\u70B9\u540E\u81EA\u52A8\u5F39\u51FA\u9009\u9879\u83DC\u5355" }
    ]);
  }
}, lp = "\u5F00\u5173", ul = "switch", Ql = {
  icon: "icon-switch",
  label: lp,
  name: ul,
  rule({ t: c }) {
    return {
      type: ul,
      field: St(),
      title: c("components.switch.name"),
      info: "",
      $required: !1,
      props: {}
    };
  },
  props(c, { t: y }) {
    return et(y, ul + ".props", [kt(), {
      type: "switch",
      field: "disabled",
      title: "\u662F\u5426\u7981\u7528"
    }, {
      type: "inputNumber",
      field: "width",
      title: "\u5BBD\u5EA6\uFF08px\uFF09",
      props: { min: 0 }
    }, { type: "input", field: "activeText", title: "switch \u6253\u5F00\u65F6\u7684\u6587\u5B57\u63CF\u8FF0" }, {
      type: "input",
      field: "inactiveText",
      title: "switch \u5173\u95ED\u65F6\u7684\u6587\u5B57\u63CF\u8FF0"
    }, { type: "input", field: "activeValue", title: "switch \u6253\u5F00\u65F6\u7684\u503C" }, {
      type: "input",
      field: "inactiveValue",
      title: "switch \u5173\u95ED\u65F6\u7684\u503C"
    }, { type: "input", field: "activeColor", title: "switch \u6253\u5F00\u65F6\u7684\u80CC\u666F\u8272" }, {
      type: "input",
      field: "inactiveColor",
      title: "switch \u5173\u95ED\u65F6\u7684\u80CC\u666F\u8272"
    }]);
  }
}, sp = "\u6ED1\u5757", fl = "slider", Gl = {
  icon: "icon-slider",
  label: sp,
  name: fl,
  rule({ t: c }) {
    return {
      type: fl,
      field: St(),
      title: c("components.slider.name"),
      info: "",
      $required: !1,
      props: {}
    };
  },
  props(c, { t: y }) {
    return et(y, fl + ".props", [kt(), {
      type: "inputNumber",
      field: "min",
      title: "\u6700\u5C0F\u503C",
      props: { min: 0 }
    }, {
      type: "inputNumber",
      field: "max",
      title: "\u6700\u5927\u503C",
      props: { min: 0 }
    }, { type: "switch", field: "disabled", title: "\u662F\u5426\u7981\u7528" }, {
      type: "inputNumber",
      field: "step",
      title: "\u6B65\u957F",
      props: { min: 0 }
    }, { type: "switch", field: "showInput", title: "\u662F\u5426\u663E\u793A\u8F93\u5165\u6846\uFF0C\u4EC5\u5728\u975E\u8303\u56F4\u9009\u62E9\u65F6\u6709\u6548" }, {
      type: "switch",
      field: "showInputControls",
      title: "\u5728\u663E\u793A\u8F93\u5165\u6846\u7684\u60C5\u51B5\u4E0B\uFF0C\u662F\u5426\u663E\u793A\u8F93\u5165\u6846\u7684\u63A7\u5236\u6309\u94AE",
      value: !0
    }, { type: "switch", field: "showStops", title: "\u662F\u5426\u663E\u793A\u95F4\u65AD\u70B9" }, {
      type: "switch",
      field: "range",
      title: "\u662F\u5426\u4E3A\u8303\u56F4\u9009\u62E9"
    }, { type: "switch", field: "vertical", title: "\u662F\u5426\u7AD6\u5411\u6A21\u5F0F" }, {
      type: "input",
      field: "height",
      title: "Slider \u9AD8\u5EA6\uFF0C\u7AD6\u5411\u6A21\u5F0F\u65F6\u5FC5\u586B"
    }]);
  }
}, up = "\u65F6\u95F4\u9009\u62E9\u5668", dl = "timePicker", kl = {
  icon: "icon-time",
  label: up,
  name: dl,
  rule({ t: c }) {
    return {
      type: dl,
      field: St(),
      title: c("components.timePicker.name"),
      info: "",
      $required: !1,
      props: {}
    };
  },
  props(c, { t: y }) {
    return et(y, dl + ".props", [kt(), {
      type: "Struct",
      field: "pickerOptions",
      title: "\u5F53\u524D\u65F6\u95F4\u65E5\u671F\u9009\u62E9\u5668\u7279\u6709\u7684\u9009\u9879",
      props: { defaultValue: {} }
    }, { type: "switch", field: "readonly", title: "\u5B8C\u5168\u53EA\u8BFB" }, {
      type: "switch",
      field: "disabled",
      title: "\u7981\u7528"
    }, { type: "switch", field: "editable", title: "\u6587\u672C\u6846\u53EF\u8F93\u5165", value: !0 }, {
      type: "switch",
      field: "clearable",
      title: "\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE",
      value: !0
    }, { type: "input", field: "placeholder", title: "\u975E\u8303\u56F4\u9009\u62E9\u65F6\u7684\u5360\u4F4D\u5185\u5BB9" }, {
      type: "input",
      field: "startPlaceholder",
      title: "\u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9"
    }, { type: "input", field: "endPlaceholder", title: "\u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9" }, {
      type: "switch",
      field: "isRange",
      title: "\u662F\u5426\u4E3A\u65F6\u95F4\u8303\u56F4\u9009\u62E9"
    }, { type: "switch", field: "arrowControl", title: "\u662F\u5426\u4F7F\u7528\u7BAD\u5934\u8FDB\u884C\u65F6\u95F4\u9009\u62E9" }, {
      type: "select",
      field: "align",
      title: "\u5BF9\u9F50\u65B9\u5F0F",
      options: [{ label: "left", value: "left" }, { label: "center", value: "center" }, {
        label: "right",
        value: "right"
      }]
    }, { type: "input", field: "prefixIcon", title: "\u81EA\u5B9A\u4E49\u5934\u90E8\u56FE\u6807\u7684\u7C7B\u540D" }, {
      type: "input",
      field: "clearIcon",
      title: "\u81EA\u5B9A\u4E49\u6E05\u7A7A\u56FE\u6807\u7684\u7C7B\u540D"
    }]);
  }
}, fp = "\u65E5\u671F\u9009\u62E9\u5668", cl = "datePicker", Kl = {
  icon: "icon-date",
  label: fp,
  name: cl,
  rule({ t: c }) {
    return {
      type: cl,
      field: St(),
      title: c("components.datePicker.name"),
      info: "",
      $required: !1,
      props: {}
    };
  },
  props(c, { t: y }) {
    return et(y, cl + ".props", [kt(), {
      type: "Struct",
      field: "pickerOptions",
      title: "\u5F53\u524D\u65F6\u95F4\u65E5\u671F\u9009\u62E9\u5668\u7279\u6709\u7684\u9009\u9879",
      props: { defaultValue: {} }
    }, { type: "switch", field: "readonly", title: "\u5B8C\u5168\u53EA\u8BFB" }, {
      type: "switch",
      field: "disabled",
      title: "\u7981\u7528"
    }, {
      type: "select",
      field: "type",
      title: "\u663E\u793A\u7C7B\u578B",
      options: [{ label: "year", value: "year" }, { label: "month", value: "month" }, {
        label: "date",
        value: "date"
      }, { label: "dates", value: "dates" }, { label: "week", value: "week" }, {
        label: "datetime",
        value: "datetime"
      }, { label: "datetimerange", value: "datetimerange" }, {
        label: "daterange",
        value: "daterange"
      }, { label: "monthrange", value: "monthrange" }]
    }, { type: "switch", field: "editable", title: "\u6587\u672C\u6846\u53EF\u8F93\u5165", value: !0 }, {
      type: "switch",
      field: "clearable",
      title: "\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE",
      value: !0
    }, { type: "input", field: "placeholder", title: "\u975E\u8303\u56F4\u9009\u62E9\u65F6\u7684\u5360\u4F4D\u5185\u5BB9" }, {
      type: "input",
      field: "startPlaceholder",
      title: "\u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9"
    }, { type: "input", field: "endPlaceholder", title: "\u8303\u56F4\u9009\u62E9\u65F6\u7ED3\u675F\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9" }, {
      type: "input",
      field: "format",
      title: "\u663E\u793A\u5728\u8F93\u5165\u6846\u4E2D\u7684\u683C\u5F0F"
    }, {
      type: "select",
      field: "align",
      title: "\u5BF9\u9F50\u65B9\u5F0F",
      options: [{ label: "left", value: "left" }, { label: "center", value: "center" }, {
        label: "right",
        value: "right"
      }, { label: "left", value: "left" }]
    }, { type: "input", field: "rangeSeparator", title: "\u9009\u62E9\u8303\u56F4\u65F6\u7684\u5206\u9694\u7B26" }, {
      type: "switch",
      field: "unlinkPanels",
      title: "\u5728\u8303\u56F4\u9009\u62E9\u5668\u91CC\u53D6\u6D88\u4E24\u4E2A\u65E5\u671F\u9762\u677F\u4E4B\u95F4\u7684\u8054\u52A8"
    }, { type: "input", field: "prefixIcon", title: "\u81EA\u5B9A\u4E49\u5934\u90E8\u56FE\u6807\u7684\u7C7B\u540D" }, {
      type: "input",
      field: "clearIcon",
      title: "\u81EA\u5B9A\u4E49\u6E05\u7A7A\u56FE\u6807\u7684\u7C7B\u540D"
    }]);
  }
}, dp = "\u8BC4\u5206", vl = "rate", Xl = {
  icon: "icon-rate",
  label: dp,
  name: vl,
  rule({ t: c }) {
    return {
      type: vl,
      field: St(),
      title: c("components.rate.name"),
      info: "",
      $required: !1,
      props: {}
    };
  },
  props(c, { t: y }) {
    return et(y, vl + ".props", [
      kt(),
      { type: "inputNumber", field: "max", title: "\u6700\u5927\u5206\u503C", props: { min: 0 } },
      {
        type: "switch",
        field: "disabled",
        title: "\u662F\u5426\u4E3A\u53EA\u8BFB"
      },
      { type: "switch", field: "allowHalf", title: "\u662F\u5426\u5141\u8BB8\u534A\u9009" },
      {
        type: "input",
        field: "voidColor",
        title: "\u672A\u9009\u4E2D icon \u7684\u989C\u8272"
      },
      { type: "input", field: "disabledVoidColor", title: "\u53EA\u8BFB\u65F6\u672A\u9009\u4E2D icon \u7684\u989C\u8272" },
      {
        type: "input",
        field: "voidIconClass",
        title: "\u672A\u9009\u4E2D icon \u7684\u7C7B\u540D"
      },
      { type: "input", field: "disabledVoidIconClass", title: "\u53EA\u8BFB\u65F6\u672A\u9009\u4E2D icon \u7684\u7C7B\u540D" },
      {
        type: "switch",
        field: "showScore",
        title: "\u662F\u5426\u663E\u793A\u5F53\u524D\u5206\u6570\uFF0Cshow-score \u548C show-text \u4E0D\u80FD\u540C\u65F6\u4E3A\u771F"
      },
      { type: "input", field: "textColor", title: "\u8F85\u52A9\u6587\u5B57\u7684\u989C\u8272" },
      {
        type: "input",
        field: "scoreTemplate",
        title: "\u5206\u6570\u663E\u793A\u6A21\u677F"
      }
    ]);
  }
}, cp = "\u989C\u8272\u9009\u62E9\u5668", pl = "colorPicker", Jl = {
  icon: "icon-color",
  label: cp,
  name: pl,
  rule({ t: c }) {
    return {
      type: pl,
      field: St(),
      title: c("components.colorPicker.name"),
      info: "",
      $required: !1,
      props: {}
    };
  },
  props(c, { t: y }) {
    return et(y, pl + ".props", [kt(), {
      type: "switch",
      field: "disabled",
      title: "\u662F\u5426\u7981\u7528"
    }, {
      type: "switch",
      field: "showAlpha",
      title: "\u662F\u5426\u652F\u6301\u900F\u660E\u5EA6\u9009\u62E9"
    }, {
      type: "select",
      field: "colorFormat",
      title: "\u989C\u8272\u7684\u683C\u5F0F",
      options: [{ label: "hsl", value: "hsl" }, { label: "hsv", value: "hsv" }, {
        label: "hex",
        value: "hex"
      }, { label: "rgb", value: "rgb" }]
    }]);
  }
}, vp = "\u6805\u683C\u5E03\u5C40", Pf = "row", Zl = {
  icon: "icon-row",
  label: vp,
  name: Pf,
  mask: !1,
  rule() {
    return {
      type: "FcRow",
      props: {},
      children: []
    };
  },
  children: "col",
  childrenLen: 2,
  props(c, { t: y }) {
    return et(y, Pf + ".props", [{
      type: "inputNumber",
      field: "gutter",
      title: "\u6805\u683C\u95F4\u9694",
      props: { min: 0 }
    }, {
      type: "switch",
      field: "type",
      title: "flex\u5E03\u5C40\u6A21\u5F0F",
      props: { activeValue: "flex", inactiveValue: "default" }
    }, {
      type: "select",
      field: "justify",
      title: "flex \u5E03\u5C40\u4E0B\u7684\u6C34\u5E73\u6392\u5217\u65B9\u5F0F",
      options: [{ label: "start", value: "start" }, { label: "end", value: "end" }, {
        label: "center",
        value: "center"
      }, { label: "space-around", value: "space-around" }, { label: "space-between", value: "space-between" }]
    }, {
      type: "select",
      field: "align",
      title: "flex \u5E03\u5C40\u4E0B\u7684\u5782\u76F4\u6392\u5217\u65B9\u5F0F",
      options: [{ label: "top", value: "top" }, { label: "middle", value: "middle" }, {
        label: "bottom",
        value: "bottom"
      }]
    }]);
  }
}, hl = "col", If = {
  name: hl,
  label: "\u683C\u5B50",
  drag: !0,
  dragBtn: !1,
  inside: !0,
  mask: !1,
  rule() {
    return {
      type: hl,
      props: { span: 12 },
      children: []
    };
  },
  props(c, { t: y }) {
    return et(y, hl + ".props", [
      { type: "slider", field: "span", title: "\u6805\u683C\u5360\u636E\u7684\u5217\u6570", value: 12, props: { min: 0, max: 24 } },
      { type: "slider", field: "offset", title: "\u6805\u683C\u5DE6\u4FA7\u7684\u95F4\u9694\u683C\u6570", props: { min: 0, max: 24 } },
      { type: "slider", field: "push", title: "\u6805\u683C\u5411\u53F3\u79FB\u52A8\u683C\u6570", props: { min: 0, max: 24 } },
      { type: "slider", field: "pull", title: "\u6805\u683C\u5411\u5DE6\u79FB\u52A8\u683C\u6570", props: { min: 0, max: 24 } }
    ]);
  }
}, pp = "\u6807\u7B7E\u9875", Lf = "tab-pane", Nf = {
  label: pp,
  name: Lf,
  inside: !0,
  drag: !0,
  dragBtn: !1,
  mask: !1,
  rule({ t: c }) {
    return {
      type: "el-tab-pane",
      props: { label: c("components.el-transfer.name") },
      children: []
    };
  },
  props(c, { t: y }) {
    return et(y, Lf + ".props", [{ type: "input", field: "label", title: "\u9009\u9879\u5361\u6807\u9898" }, {
      type: "switch",
      field: "disabled",
      title: "\u662F\u5426\u7981\u7528"
    }, { type: "input", field: "name", title: "\u4E0E\u9009\u9879\u5361\u7ED1\u5B9A\u503C value \u5BF9\u5E94\u7684\u6807\u8BC6\u7B26\uFF0C\u8868\u793A\u9009\u9879\u5361\u522B\u540D" }, {
      type: "switch",
      field: "lazy",
      title: "\u6807\u7B7E\u662F\u5426\u5EF6\u8FDF\u6E32\u67D3"
    }]);
  }
}, hp = "\u5206\u5272\u7EBF", gl = "el-divider", ql = {
  icon: "icon-divider",
  label: hp,
  name: gl,
  rule() {
    return {
      type: gl,
      props: {},
      wrap: { show: !1 },
      native: !1,
      children: [""]
    };
  },
  props(c, { t: y }) {
    return et(y, gl + ".props", [{
      type: "select",
      field: "direction",
      title: "\u8BBE\u7F6E\u5206\u5272\u7EBF\u65B9\u5411",
      options: [{ label: "horizontal", value: "horizontal" }, { label: "vertical", value: "vertical" }]
    }, {
      type: "input",
      field: "formCreateChild",
      title: "\u8BBE\u7F6E\u5206\u5272\u7EBF\u6587\u6848"
    }, {
      type: "select",
      field: "contentPosition",
      title: "\u8BBE\u7F6E\u5206\u5272\u7EBF\u6587\u6848\u7684\u4F4D\u7F6E",
      options: [{ label: "left", value: "left" }, { label: "right", value: "right" }, {
        label: "center",
        value: "center"
      }]
    }]);
  }
}, gp = "\u7EA7\u8054\u9009\u62E9\u5668", Yo = "cascader", _l = {
  icon: "icon-cascader",
  label: gp,
  name: Yo,
  rule({ t: c }) {
    const y = c("props.option");
    return {
      type: Yo,
      field: St(),
      title: c("components.cascader.name"),
      info: "",
      effect: {
        fetch: ""
      },
      $required: !1,
      props: {
        options: [1, 2].map((l) => ({
          label: y + l,
          value: l,
          children: []
        }))
      }
    };
  },
  props(c, { t: y }) {
    return et(y, Yo + ".props", [
      kt(),
      vi(y, "props.options", !1),
      {
        type: "Object",
        field: "props",
        title: "\u914D\u7F6E\u9009\u9879",
        props: {
          rule: et(y, Yo + ".propsOpt", [{
            type: "select",
            field: "expandTrigger",
            title: "\u6B21\u7EA7\u83DC\u5355\u7684\u5C55\u5F00\u65B9\u5F0F",
            options: [{ label: "click", value: "click" }, { label: "hover", value: "hover" }]
          }, { type: "switch", field: "multiple", title: "\u662F\u5426\u591A\u9009" }, {
            type: "switch",
            field: "checkStrictly",
            title: "\u662F\u5426\u4E25\u683C\u7684\u9075\u5B88\u7236\u5B50\u8282\u70B9\u4E0D\u4E92\u76F8\u5173\u8054"
          }, {
            type: "switch",
            field: "emitPath",
            title: "\u5728\u9009\u4E2D\u8282\u70B9\u6539\u53D8\u65F6\uFF0C\u662F\u5426\u8FD4\u56DE\u7531\u8BE5\u8282\u70B9\u6240\u5728\u7684\u5404\u7EA7\u83DC\u5355\u7684\u503C\u6240\u7EC4\u6210\u7684\u6570\u7EC4\uFF0C\u82E5\u8BBE\u7F6E false\uFF0C\u5219\u53EA\u8FD4\u56DE\u8BE5\u8282\u70B9\u7684\u503C",
            value: !0
          }, { type: "input", field: "value", title: "\u6307\u5B9A\u9009\u9879\u7684\u503C\u4E3A\u9009\u9879\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C", value: "value" }, {
            type: "input",
            field: "label",
            title: "\u6307\u5B9A\u9009\u9879\u6807\u7B7E\u4E3A\u9009\u9879\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C",
            value: "label"
          }, { type: "input", field: "children", title: "\u6307\u5B9A\u9009\u9879\u7684\u5B50\u9009\u9879\u4E3A\u9009\u9879\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C", value: "children" }, {
            type: "input",
            field: "disabled",
            title: "\u6307\u5B9A\u9009\u9879\u7684\u7981\u7528\u4E3A\u9009\u9879\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C",
            value: "disabled"
          }, { type: "input", field: "leaf", title: "\u6307\u5B9A\u9009\u9879\u7684\u53F6\u5B50\u8282\u70B9\u7684\u6807\u5FD7\u4F4D\u4E3A\u9009\u9879\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C" }])
        }
      },
      {
        type: "select",
        field: "size",
        title: "\u5C3A\u5BF8",
        options: [{ label: "large", value: "large" }, { label: "default", value: "default" }, {
          label: "small",
          value: "small"
        }]
      },
      { type: "input", field: "placeholder", title: "\u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C" },
      {
        type: "switch",
        field: "disabled",
        title: "\u662F\u5426\u7981\u7528"
      },
      { type: "switch", field: "clearable", title: "\u662F\u5426\u652F\u6301\u6E05\u7A7A\u9009\u9879" },
      {
        type: "switch",
        field: "showAllLevels",
        title: "\u8F93\u5165\u6846\u4E2D\u662F\u5426\u663E\u793A\u9009\u4E2D\u503C\u7684\u5B8C\u6574\u8DEF\u5F84",
        value: !0
      },
      { type: "switch", field: "collapseTags", title: "\u591A\u9009\u6A21\u5F0F\u4E0B\u662F\u5426\u6298\u53E0Tag" },
      {
        type: "input",
        field: "separator",
        title: "\u9009\u9879\u5206\u9694\u7B26"
      }
    ]);
  }
}, mp = "\u4E0A\u4F20", ml = "upload", es = {
  icon: "icon-upload",
  label: mp,
  name: ml,
  rule({ t: c }) {
    return {
      type: ml,
      field: St(),
      title: c("components.upload.name"),
      info: "",
      $required: !1,
      props: {
        action: "",
        onSuccess(y, l) {
          l.url = y.data.url;
        }
      }
    };
  },
  props(c, { t: y }) {
    return et(y, ml + ".props", [kt(), {
      type: "select",
      field: "list-type",
      title: "\u4E0A\u4F20\u7C7B\u578B",
      value: "text",
      options: [{ label: "\u6587\u5B57", value: "text" }, {
        label: "\u56FE\u7247",
        value: "picture"
      }, {
        label: "\u5361\u7247",
        value: "picture-card"
      }]
    }, { type: "input", field: "action", title: "\u4E0A\u4F20\u7684\u5730\u5740(\u5FC5\u586B)" }, {
      type: "Struct",
      field: "headers",
      title: "\u8BBE\u7F6E\u4E0A\u4F20\u7684\u8BF7\u6C42\u5934\u90E8",
      props: { defaultValue: {} }
    }, { type: "switch", field: "multiple", title: "\u662F\u5426\u652F\u6301\u591A\u9009\u6587\u4EF6" }, {
      type: "Struct",
      field: "data",
      title: "\u4E0A\u4F20\u65F6\u9644\u5E26\u7684\u989D\u5916\u53C2\u6570",
      props: { defaultValue: {} }
    }, { type: "input", field: "name", title: "\u4E0A\u4F20\u7684\u6587\u4EF6\u5B57\u6BB5\u540D" }, {
      type: "switch",
      field: "withCredentials",
      title: "\u652F\u6301\u53D1\u9001 cookie \u51ED\u8BC1\u4FE1\u606F"
    }, { type: "input", field: "accept", title: "\u63A5\u53D7\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B\uFF08thumbnail-mode \u6A21\u5F0F\u4E0B\u6B64\u53C2\u6570\u65E0\u6548\uFF09" }, {
      type: "switch",
      field: "autoUpload",
      title: "\u662F\u5426\u5728\u9009\u53D6\u6587\u4EF6\u540E\u7ACB\u5373\u8FDB\u884C\u4E0A\u4F20",
      value: !0
    }, {
      type: "switch",
      field: "disabled",
      title: "\u662F\u5426\u7981\u7528"
    }, {
      type: "inputNumber",
      field: "limit",
      title: "\u6700\u5927\u5141\u8BB8\u4E0A\u4F20\u4E2A\u6570",
      props: { min: 0 }
    }]);
  }
}, yp = "\u7A7F\u68AD\u6846", yl = "el-transfer", Ap = () => {
  const c = [];
  for (let y = 1; y <= 15; y++)
    c.push({
      key: y,
      label: `\u5907\u9009\u9879 ${y}`,
      disabled: y % 4 === 0
    });
  return c;
}, ts = {
  icon: "icon-transfer",
  label: yp,
  name: yl,
  rule({ t: c }) {
    return {
      type: yl,
      field: St(),
      title: c("components.el-transfer.name"),
      info: "",
      $required: !1,
      props: {
        data: Ap()
      }
    };
  },
  props(c, { t: y }) {
    return et(y, yl + ".props", [{
      type: "Struct",
      field: "data",
      title: "Transfer \u7684\u6570\u636E\u6E90",
      props: { defaultValue: [] }
    }, { type: "switch", field: "filterable", title: "\u662F\u5426\u53EF\u641C\u7D22" }, {
      type: "input",
      field: "filterPlaceholder",
      title: "\u641C\u7D22\u6846\u5360\u4F4D\u7B26"
    }, {
      type: "select",
      field: "targetOrder",
      title: "\u53F3\u4FA7\u5217\u8868\u5143\u7D20\u7684\u6392\u5E8F\u7B56\u7565",
      info: "\u82E5\u4E3A original\uFF0C\u5219\u4FDD\u6301\u4E0E\u6570\u636E\u6E90\u76F8\u540C\u7684\u987A\u5E8F\uFF1B\u82E5\u4E3A push\uFF0C\u5219\u65B0\u52A0\u5165\u7684\u5143\u7D20\u6392\u5728\u6700\u540E\uFF1B\u82E5\u4E3A unshift\uFF0C\u5219\u65B0\u52A0\u5165\u7684\u5143\u7D20\u6392\u5728\u6700\u524D",
      options: [{ label: "original", value: "original" }, {
        label: "push",
        value: "push"
      }, { label: "unshift", value: "unshift" }]
    }, {
      type: "Struct",
      field: "titles",
      title: "\u81EA\u5B9A\u4E49\u5217\u8868\u6807\u9898",
      props: { defaultValue: [] }
    }, {
      type: "Struct",
      field: "buttonTexts",
      title: "\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u6848",
      props: { defaultValue: [] }
    }, {
      type: "Struct",
      field: "format",
      title: "\u5217\u8868\u9876\u90E8\u52FE\u9009\u72B6\u6001\u6587\u6848",
      props: { defaultValue: {} }
    }, {
      type: "Struct",
      field: "props",
      title: "\u6570\u636E\u6E90\u7684\u5B57\u6BB5\u522B\u540D",
      props: { defaultValue: {} }
    }, {
      type: "Struct",
      field: "leftDefaultChecked",
      title: "\u521D\u59CB\u72B6\u6001\u4E0B\u5DE6\u4FA7\u5217\u8868\u7684\u5DF2\u52FE\u9009\u9879\u7684 key \u6570\u7EC4",
      props: { defaultValue: [] }
    }, {
      type: "Struct",
      field: "rightDefaultChecked",
      title: "\u521D\u59CB\u72B6\u6001\u4E0B\u53F3\u4FA7\u5217\u8868\u7684\u5DF2\u52FE\u9009\u9879\u7684 key \u6570\u7EC4",
      props: { defaultValue: [] }
    }]);
  }
}, xp = "\u6811\u5F62\u63A7\u4EF6", Al = "tree", ns = {
  icon: "icon-tree",
  label: xp,
  name: Al,
  rule({ t: c }) {
    const y = c("props.option");
    return {
      type: Al,
      field: St(),
      title: c("components.tree.name"),
      info: "",
      effect: {
        fetch: ""
      },
      $required: !1,
      props: {
        props: {
          label: "label"
        },
        showCheckbox: !0,
        nodeKey: "id",
        data: [1, 2].map((l) => ({
          label: y + l,
          id: l,
          children: []
        }))
      }
    };
  },
  props(c, { t: y }) {
    return et(y, Al + ".props", [
      kt(),
      vi(y, "props.data", !1),
      { type: "input", field: "emptyText", title: "\u5185\u5BB9\u4E3A\u7A7A\u7684\u65F6\u5019\u5C55\u793A\u7684\u6587\u672C" },
      {
        type: "Struct",
        field: "props",
        title: "\u914D\u7F6E\u9009\u9879\uFF0C\u5177\u4F53\u770B\u4E0B\u8868",
        props: { defaultValue: {} }
      },
      { type: "switch", field: "renderAfterExpand", title: "\u662F\u5426\u5728\u7B2C\u4E00\u6B21\u5C55\u5F00\u67D0\u4E2A\u6811\u8282\u70B9\u540E\u624D\u6E32\u67D3\u5176\u5B50\u8282\u70B9", value: !0 },
      {
        type: "switch",
        field: "defaultExpandAll",
        title: "\u662F\u5426\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u8282\u70B9"
      },
      {
        type: "switch",
        field: "expandOnClickNode",
        title: "\u662F\u5426\u5728\u70B9\u51FB\u8282\u70B9\u7684\u65F6\u5019\u5C55\u5F00\u6216\u8005\u6536\u7F29\u8282\u70B9\uFF0C \u9ED8\u8BA4\u503C\u4E3A true\uFF0C\u5982\u679C\u4E3A false\uFF0C\u5219\u53EA\u6709\u70B9\u7BAD\u5934\u56FE\u6807\u7684\u65F6\u5019\u624D\u4F1A\u5C55\u5F00\u6216\u8005\u6536\u7F29\u8282\u70B9\u3002",
        value: !0
      },
      {
        type: "switch",
        field: "checkOnClickNode",
        title: "\u662F\u5426\u5728\u70B9\u51FB\u8282\u70B9\u7684\u65F6\u5019\u9009\u4E2D\u8282\u70B9\uFF0C\u9ED8\u8BA4\u503C\u4E3A false\uFF0C\u5373\u53EA\u6709\u5728\u70B9\u51FB\u590D\u9009\u6846\u65F6\u624D\u4F1A\u9009\u4E2D\u8282\u70B9\u3002"
      },
      { type: "switch", field: "autoExpandParent", title: "\u5C55\u5F00\u5B50\u8282\u70B9\u7684\u65F6\u5019\u662F\u5426\u81EA\u52A8\u5C55\u5F00\u7236\u8282\u70B9", value: !0 },
      {
        type: "switch",
        field: "checkStrictly",
        title: "\u5728\u663E\u793A\u590D\u9009\u6846\u7684\u60C5\u51B5\u4E0B\uFF0C\u662F\u5426\u4E25\u683C\u7684\u9075\u5FAA\u7236\u5B50\u4E0D\u4E92\u76F8\u5173\u8054\u7684\u505A\u6CD5\uFF0C\u9ED8\u8BA4\u4E3A false"
      },
      { type: "switch", field: "accordion", title: "\u662F\u5426\u6BCF\u6B21\u53EA\u6253\u5F00\u4E00\u4E2A\u540C\u7EA7\u6811\u8282\u70B9\u5C55\u5F00" },
      {
        type: "inputNumber",
        field: "indent",
        title: "\u76F8\u90BB\u7EA7\u8282\u70B9\u95F4\u7684\u6C34\u5E73\u7F29\u8FDB\uFF0C\u5355\u4F4D\u4E3A\u50CF\u7D20"
      },
      { type: "input", field: "iconClass", title: "\u81EA\u5B9A\u4E49\u6811\u8282\u70B9\u7684\u56FE\u6807" },
      {
        type: "input",
        field: "nodeKey",
        title: "\u6BCF\u4E2A\u6811\u8282\u70B9\u7528\u6765\u4F5C\u4E3A\u552F\u4E00\u6807\u8BC6\u7684\u5C5E\u6027\uFF0C\u6574\u68F5\u6811\u5E94\u8BE5\u662F\u552F\u4E00\u7684"
      }
    ]);
  }
}, Sp = "\u63D0\u793A", xl = "el-alert", rs = {
  icon: "icon-alert",
  label: Sp,
  name: xl,
  rule({ t: c }) {
    return {
      type: xl,
      props: {
        title: c("components.el-alert.name"),
        description: c("components.el-alert.description"),
        type: "success",
        effect: "dark"
      },
      children: []
    };
  },
  props(c, { t: y }) {
    return et(y, xl + ".props", [{ type: "input", field: "title", title: "\u6807\u9898" }, {
      type: "select",
      field: "type",
      title: "\u4E3B\u9898",
      options: [{ label: "success", value: "success" }, { label: "warning", value: "warning" }, {
        label: "info",
        value: "info"
      }, { label: "error", value: "error" }]
    }, { type: "input", field: "description", title: "\u8F85\u52A9\u6027\u6587\u5B57" }, {
      type: "switch",
      field: "closable",
      title: "\u662F\u5426\u53EF\u5173\u95ED",
      value: !0
    }, { type: "switch", field: "center", title: "\u6587\u5B57\u662F\u5426\u5C45\u4E2D", value: !0 }, {
      type: "input",
      field: "closeText",
      title: "\u5173\u95ED\u6309\u94AE\u81EA\u5B9A\u4E49\u6587\u672C"
    }, { type: "switch", field: "showIcon", title: "\u662F\u5426\u663E\u793A\u56FE\u6807" }, {
      type: "select",
      field: "effect",
      title: "\u9009\u62E9\u63D0\u4F9B\u7684\u4E3B\u9898",
      options: [{ label: "light", value: "light" }, { label: "dark", value: "dark" }]
    }]);
  }
}, Ep = "\u6587\u5B57", Sl = "span", is = {
  icon: "icon-span",
  label: Ep,
  name: Sl,
  rule({ t: c }) {
    return {
      type: Sl,
      title: c("components.span.name"),
      native: !1,
      children: [c("components.span.name")]
    };
  },
  props(c, { t: y }) {
    return et(y, Sl + ".props", [
      {
        type: "input",
        field: "formCreateTitle",
        title: "title"
      },
      {
        type: "input",
        field: "formCreateChild",
        title: "\u5185\u5BB9",
        props: {
          type: "textarea"
        }
      }
    ]);
  }
}, bp = "\u95F4\u8DDD", El = "div", os = {
  icon: "icon-space",
  label: bp,
  name: El,
  rule() {
    return {
      type: El,
      wrap: {
        show: !1
      },
      native: !1,
      style: {
        width: "100%",
        height: "20px"
      },
      children: []
    };
  },
  props(c, { t: y }) {
    return [
      {
        type: "object",
        field: "formCreateStyle",
        native: !0,
        props: {
          rule: et(y, El + ".props", [
            {
              type: "input",
              field: "height",
              title: "height"
            }
          ])
        }
      }
    ];
  }
}, Cp = "\u6807\u7B7E\u9875", Of = "tab", as = {
  icon: "icon-tab",
  label: Cp,
  name: Of,
  children: "tab-pane",
  mask: !1,
  rule() {
    return {
      type: "el-tabs",
      style: "width:100%;",
      children: []
    };
  },
  props(c, { t: y }) {
    return et(y, Of + ".props", [{
      type: "select",
      field: "type",
      title: "\u98CE\u683C\u7C7B\u578B",
      options: [{
        label: "card",
        value: "card"
      }, { label: "border-card", value: "border-card" }]
    }, { type: "switch", field: "closable", title: "\u6807\u7B7E\u662F\u5426\u53EF\u5173\u95ED" }, {
      type: "select",
      field: "tabPosition",
      title: "\u9009\u9879\u5361\u6240\u5728\u4F4D\u7F6E",
      options: [{ label: "top", value: "top" }, { label: "right", value: "right" }, {
        label: "left",
        value: "left"
      }]
    }, { type: "switch", field: "stretch", title: "\u6807\u7B7E\u7684\u5BBD\u5EA6\u662F\u5426\u81EA\u6491\u5F00" }]);
  }
}, Tp = "\u6309\u94AE", bl = "el-button", ls = {
  icon: "icon-button",
  label: Tp,
  name: bl,
  mask: !1,
  rule({ t: c }) {
    return {
      type: bl,
      props: {},
      children: [c("components.el-button.name")]
    };
  },
  props(c, { t: y }) {
    return et(y, bl + ".props", [{
      type: "input",
      field: "formCreateChild",
      title: "\u5185\u5BB9"
    }, {
      type: "select",
      field: "size",
      title: "\u5C3A\u5BF8",
      options: [{ label: "large", value: "large" }, { label: "default", value: "default" }, {
        label: "small",
        value: "small"
      }]
    }, {
      type: "select",
      field: "type",
      title: "\u7C7B\u578B",
      options: [{ label: "primary", value: "primary" }, {
        label: "success",
        value: "success"
      }, { label: "warning", value: "warning" }, { label: "danger", value: "danger" }, {
        label: "info",
        value: "info"
      }]
    }, { type: "switch", field: "plain", title: "\u662F\u5426\u6734\u7D20\u6309\u94AE" }, {
      type: "switch",
      field: "round",
      title: "\u662F\u5426\u5706\u89D2\u6309\u94AE"
    }, { type: "switch", field: "circle", title: "\u662F\u5426\u5706\u5F62\u6309\u94AE" }, {
      type: "switch",
      field: "loading",
      title: "\u662F\u5426\u52A0\u8F7D\u4E2D\u72B6\u6001"
    }, { type: "switch", field: "disabled", title: "\u662F\u5426\u7981\u7528\u72B6\u6001" }, {
      type: "input",
      field: "icon",
      title: "\u56FE\u6807\u7C7B\u540D"
    }]);
  }
}, wp = "\u5BCC\u6587\u672C\u6846", Cl = "fc-editor", ss = {
  icon: "icon-editor",
  label: wp,
  name: Cl,
  rule({ t: c }) {
    return {
      type: Cl,
      field: St(),
      title: c("components.fc-editor.name"),
      info: "",
      $required: !1,
      props: {}
    };
  },
  props(c, { t: y }) {
    return et(y, Cl + ".props", [kt(), {
      type: "switch",
      field: "disabled",
      title: "\u662F\u5426\u7981\u7528"
    }]);
  }
}, Dp = "\u5B50\u8868\u5355", Ff = "group", us = {
  icon: "icon-group",
  label: Dp,
  name: Ff,
  inside: !1,
  drag: !0,
  dragBtn: !0,
  mask: !1,
  loadRule(c) {
    c.children = c.props.rule || [], c.props || (c.props = {}), c.props.mode = ["fcSubForm", "object", "subForm"].indexOf(c.type) > -1 ? "subForm" : "group", c.type = "FcRow", delete c.props.rule;
  },
  parseRule(c) {
    c.props.rule = c.children, c.type = c.props.mode === "subForm" ? "subForm" : "group", delete c.children, delete c.props.mode;
  },
  rule({ t: c }) {
    return {
      type: "FcRow",
      field: St(),
      title: c("components.group.name"),
      info: "",
      $required: !1,
      props: {},
      children: []
    };
  },
  props(c, { t: y }) {
    return et(y, Ff + ".props", [
      kt(),
      {
        type: "switch",
        field: "disabled",
        title: "\u662F\u5426\u7981\u7528"
      },
      { type: "switch", field: "syncDisabled", title: "\u662F\u5426\u4E0E\u5B50\u8868\u5355\u5F3A\u5236\u540C\u6B65 disabled \u72B6\u6001", value: !0 },
      {
        type: "select",
        field: "mode",
        title: "\u7EC4\u4EF6\u7C7B\u578B",
        options: [{
          label: y("components.group.props.modeOpts.group"),
          value: "group"
        }, { label: y("components.group.props.modeOpts.subform"), value: "subForm" }],
        value: "group"
      },
      { type: "switch", field: "button", title: "\u662F\u5426\u663E\u793A\u64CD\u4F5C\u6309\u94AE", value: !0 },
      { type: "switch", field: "sortBtn", title: "\u662F\u5426\u663E\u793A\u6392\u5E8F\u6309\u94AE", value: !0 },
      { type: "inputNumber", field: "expand", title: "\u8BBE\u7F6E\u9ED8\u8BA4\u5C55\u5F00\u51E0\u9879" },
      { type: "inputNumber", field: "min", title: "\u8BBE\u7F6E\u6700\u5C0F\u6DFB\u52A0\u51E0\u9879" },
      { type: "inputNumber", field: "max", title: "\u8BBE\u7F6E\u6700\u591A\u6DFB\u52A0\u51E0\u9879" }
    ]);
  }
}, cr = {
  [Wl.name]: Wl,
  [jl.name]: jl,
  [$l.name]: $l,
  [Yl.name]: Yl,
  [Vl.name]: Vl,
  [Ql.name]: Ql,
  [Gl.name]: Gl,
  [kl.name]: kl,
  [Kl.name]: Kl,
  [Xl.name]: Xl,
  [Jl.name]: Jl,
  [Zl.name]: Zl,
  [If.name]: If,
  [as.name]: as,
  [Nf.name]: Nf,
  [ql.name]: ql,
  [_l.name]: _l,
  [es.name]: es,
  [ts.name]: ts,
  [ns.name]: ns,
  [rs.name]: rs,
  [is.name]: is,
  [os.name]: os,
  [ls.name]: ls,
  [ss.name]: ss,
  [us.name]: us
};
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Bf(c, y) {
  var l = Object.keys(c);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(c);
    y && (o = o.filter(function(t) {
      return Object.getOwnPropertyDescriptor(c, t).enumerable;
    })), l.push.apply(l, o);
  }
  return l;
}
function Wn(c) {
  for (var y = 1; y < arguments.length; y++) {
    var l = arguments[y] != null ? arguments[y] : {};
    y % 2 ? Bf(Object(l), !0).forEach(function(o) {
      Mp(c, o, l[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(l)) : Bf(Object(l)).forEach(function(o) {
      Object.defineProperty(c, o, Object.getOwnPropertyDescriptor(l, o));
    });
  }
  return c;
}
function Xo(c) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Xo = function(y) {
    return typeof y;
  } : Xo = function(y) {
    return y && typeof Symbol == "function" && y.constructor === Symbol && y !== Symbol.prototype ? "symbol" : typeof y;
  }, Xo(c);
}
function Mp(c, y, l) {
  return y in c ? Object.defineProperty(c, y, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : c[y] = l, c;
}
function Jn() {
  return Jn = Object.assign || function(c) {
    for (var y = 1; y < arguments.length; y++) {
      var l = arguments[y];
      for (var o in l)
        Object.prototype.hasOwnProperty.call(l, o) && (c[o] = l[o]);
    }
    return c;
  }, Jn.apply(this, arguments);
}
function Rp(c, y) {
  if (c == null)
    return {};
  var l = {}, o = Object.keys(c), t, s;
  for (s = 0; s < o.length; s++)
    t = o[s], !(y.indexOf(t) >= 0) && (l[t] = c[t]);
  return l;
}
function Pp(c, y) {
  if (c == null)
    return {};
  var l = Rp(c, y), o, t;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(c);
    for (t = 0; t < s.length; t++)
      o = s[t], !(y.indexOf(o) >= 0) && (!Object.prototype.propertyIsEnumerable.call(c, o) || (l[o] = c[o]));
  }
  return l;
}
var Ip = "1.14.0";
function Xn(c) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(c);
}
var Zn = Xn(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), oo = Xn(/Edge/i), Hf = Xn(/firefox/i), qi = Xn(/safari/i) && !Xn(/chrome/i) && !Xn(/android/i), ad = Xn(/iP(ad|od|hone)/i), Lp = Xn(/chrome/i) && Xn(/android/i), ld = {
  capture: !1,
  passive: !1
};
function ke(c, y, l) {
  c.addEventListener(y, l, !Zn && ld);
}
function Ye(c, y, l) {
  c.removeEventListener(y, l, !Zn && ld);
}
function ta(c, y) {
  if (!!y) {
    if (y[0] === ">" && (y = y.substring(1)), c)
      try {
        if (c.matches)
          return c.matches(y);
        if (c.msMatchesSelector)
          return c.msMatchesSelector(y);
        if (c.webkitMatchesSelector)
          return c.webkitMatchesSelector(y);
      } catch {
        return !1;
      }
    return !1;
  }
}
function Np(c) {
  return c.host && c !== document && c.host.nodeType ? c.host : c.parentNode;
}
function Un(c, y, l, o) {
  if (c) {
    l = l || document;
    do {
      if (y != null && (y[0] === ">" ? c.parentNode === l && ta(c, y) : ta(c, y)) || o && c === l)
        return c;
      if (c === l)
        break;
    } while (c = Np(c));
  }
  return null;
}
var Uf = /\s+/g;
function dn(c, y, l) {
  if (c && y)
    if (c.classList)
      c.classList[l ? "add" : "remove"](y);
    else {
      var o = (" " + c.className + " ").replace(Uf, " ").replace(" " + y + " ", " ");
      c.className = (o + (l ? " " + y : "")).replace(Uf, " ");
    }
}
function Le(c, y, l) {
  var o = c && c.style;
  if (o) {
    if (l === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? l = document.defaultView.getComputedStyle(c, "") : c.currentStyle && (l = c.currentStyle), y === void 0 ? l : l[y];
    !(y in o) && y.indexOf("webkit") === -1 && (y = "-webkit-" + y), o[y] = l + (typeof l == "string" ? "" : "px");
  }
}
function di(c, y) {
  var l = "";
  if (typeof c == "string")
    l = c;
  else
    do {
      var o = Le(c, "transform");
      o && o !== "none" && (l = o + " " + l);
    } while (!y && (c = c.parentNode));
  var t = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return t && new t(l);
}
function sd(c, y, l) {
  if (c) {
    var o = c.getElementsByTagName(y), t = 0, s = o.length;
    if (l)
      for (; t < s; t++)
        l(o[t], t);
    return o;
  }
  return [];
}
function zn() {
  var c = document.scrollingElement;
  return c || document.documentElement;
}
function It(c, y, l, o, t) {
  if (!(!c.getBoundingClientRect && c !== window)) {
    var s, u, d, f, g, C, x;
    if (c !== window && c.parentNode && c !== zn() ? (s = c.getBoundingClientRect(), u = s.top, d = s.left, f = s.bottom, g = s.right, C = s.height, x = s.width) : (u = 0, d = 0, f = window.innerHeight, g = window.innerWidth, C = window.innerHeight, x = window.innerWidth), (y || l) && c !== window && (t = t || c.parentNode, !Zn))
      do
        if (t && t.getBoundingClientRect && (Le(t, "transform") !== "none" || l && Le(t, "position") !== "static")) {
          var D = t.getBoundingClientRect();
          u -= D.top + parseInt(Le(t, "border-top-width")), d -= D.left + parseInt(Le(t, "border-left-width")), f = u + s.height, g = d + s.width;
          break;
        }
      while (t = t.parentNode);
    if (o && c !== window) {
      var b = di(t || c), h = b && b.a, A = b && b.d;
      b && (u /= A, d /= h, x /= h, C /= A, f = u + C, g = d + x);
    }
    return {
      top: u,
      left: d,
      bottom: f,
      right: g,
      width: x,
      height: C
    };
  }
}
function zf(c, y, l) {
  for (var o = gr(c, !0), t = It(c)[y]; o; ) {
    var s = It(o)[l], u = void 0;
    if (l === "top" || l === "left" ? u = t >= s : u = t <= s, !u)
      return o;
    if (o === zn())
      break;
    o = gr(o, !1);
  }
  return !1;
}
function ci(c, y, l, o) {
  for (var t = 0, s = 0, u = c.children; s < u.length; ) {
    if (u[s].style.display !== "none" && u[s] !== Ne.ghost && (o || u[s] !== Ne.dragged) && Un(u[s], l.draggable, c, !1)) {
      if (t === y)
        return u[s];
      t++;
    }
    s++;
  }
  return null;
}
function gs(c, y) {
  for (var l = c.lastElementChild; l && (l === Ne.ghost || Le(l, "display") === "none" || y && !ta(l, y)); )
    l = l.previousElementSibling;
  return l || null;
}
function mn(c, y) {
  var l = 0;
  if (!c || !c.parentNode)
    return -1;
  for (; c = c.previousElementSibling; )
    c.nodeName.toUpperCase() !== "TEMPLATE" && c !== Ne.clone && (!y || ta(c, y)) && l++;
  return l;
}
function Wf(c) {
  var y = 0, l = 0, o = zn();
  if (c)
    do {
      var t = di(c), s = t.a, u = t.d;
      y += c.scrollLeft * s, l += c.scrollTop * u;
    } while (c !== o && (c = c.parentNode));
  return [y, l];
}
function Op(c, y) {
  for (var l in c)
    if (!!c.hasOwnProperty(l)) {
      for (var o in y)
        if (y.hasOwnProperty(o) && y[o] === c[l][o])
          return Number(l);
    }
  return -1;
}
function gr(c, y) {
  if (!c || !c.getBoundingClientRect)
    return zn();
  var l = c, o = !1;
  do
    if (l.clientWidth < l.scrollWidth || l.clientHeight < l.scrollHeight) {
      var t = Le(l);
      if (l.clientWidth < l.scrollWidth && (t.overflowX == "auto" || t.overflowX == "scroll") || l.clientHeight < l.scrollHeight && (t.overflowY == "auto" || t.overflowY == "scroll")) {
        if (!l.getBoundingClientRect || l === document.body)
          return zn();
        if (o || y)
          return l;
        o = !0;
      }
    }
  while (l = l.parentNode);
  return zn();
}
function Fp(c, y) {
  if (c && y)
    for (var l in y)
      y.hasOwnProperty(l) && (c[l] = y[l]);
  return c;
}
function Tl(c, y) {
  return Math.round(c.top) === Math.round(y.top) && Math.round(c.left) === Math.round(y.left) && Math.round(c.height) === Math.round(y.height) && Math.round(c.width) === Math.round(y.width);
}
var _i;
function ud(c, y) {
  return function() {
    if (!_i) {
      var l = arguments, o = this;
      l.length === 1 ? c.call(o, l[0]) : c.apply(o, l), _i = setTimeout(function() {
        _i = void 0;
      }, y);
    }
  };
}
function Bp() {
  clearTimeout(_i), _i = void 0;
}
function fd(c, y, l) {
  c.scrollLeft += y, c.scrollTop += l;
}
function dd(c) {
  var y = window.Polymer, l = window.jQuery || window.Zepto;
  return y && y.dom ? y.dom(c).cloneNode(!0) : l ? l(c).clone(!0)[0] : c.cloneNode(!0);
}
var pn = "Sortable" + new Date().getTime();
function Hp() {
  var c = [], y;
  return {
    captureAnimationState: function() {
      if (c = [], !!this.options.animation) {
        var o = [].slice.call(this.el.children);
        o.forEach(function(t) {
          if (!(Le(t, "display") === "none" || t === Ne.ghost)) {
            c.push({
              target: t,
              rect: It(t)
            });
            var s = Wn({}, c[c.length - 1].rect);
            if (t.thisAnimationDuration) {
              var u = di(t, !0);
              u && (s.top -= u.f, s.left -= u.e);
            }
            t.fromRect = s;
          }
        });
      }
    },
    addAnimationState: function(o) {
      c.push(o);
    },
    removeAnimationState: function(o) {
      c.splice(Op(c, {
        target: o
      }), 1);
    },
    animateAll: function(o) {
      var t = this;
      if (!this.options.animation) {
        clearTimeout(y), typeof o == "function" && o();
        return;
      }
      var s = !1, u = 0;
      c.forEach(function(d) {
        var f = 0, g = d.target, C = g.fromRect, x = It(g), D = g.prevFromRect, b = g.prevToRect, h = d.rect, A = di(g, !0);
        A && (x.top -= A.f, x.left -= A.e), g.toRect = x, g.thisAnimationDuration && Tl(D, x) && !Tl(C, x) && (h.top - x.top) / (h.left - x.left) === (C.top - x.top) / (C.left - x.left) && (f = zp(h, D, b, t.options)), Tl(x, C) || (g.prevFromRect = C, g.prevToRect = x, f || (f = t.options.animation), t.animate(g, h, x, f)), f && (s = !0, u = Math.max(u, f), clearTimeout(g.animationResetTimer), g.animationResetTimer = setTimeout(function() {
          g.animationTime = 0, g.prevFromRect = null, g.fromRect = null, g.prevToRect = null, g.thisAnimationDuration = null;
        }, f), g.thisAnimationDuration = f);
      }), clearTimeout(y), s ? y = setTimeout(function() {
        typeof o == "function" && o();
      }, u) : typeof o == "function" && o(), c = [];
    },
    animate: function(o, t, s, u) {
      if (u) {
        Le(o, "transition", ""), Le(o, "transform", "");
        var d = di(this.el), f = d && d.a, g = d && d.d, C = (t.left - s.left) / (f || 1), x = (t.top - s.top) / (g || 1);
        o.animatingX = !!C, o.animatingY = !!x, Le(o, "transform", "translate3d(" + C + "px," + x + "px,0)"), this.forRepaintDummy = Up(o), Le(o, "transition", "transform " + u + "ms" + (this.options.easing ? " " + this.options.easing : "")), Le(o, "transform", "translate3d(0,0,0)"), typeof o.animated == "number" && clearTimeout(o.animated), o.animated = setTimeout(function() {
          Le(o, "transition", ""), Le(o, "transform", ""), o.animated = !1, o.animatingX = !1, o.animatingY = !1;
        }, u);
      }
    }
  };
}
function Up(c) {
  return c.offsetWidth;
}
function zp(c, y, l, o) {
  return Math.sqrt(Math.pow(y.top - c.top, 2) + Math.pow(y.left - c.left, 2)) / Math.sqrt(Math.pow(y.top - l.top, 2) + Math.pow(y.left - l.left, 2)) * o.animation;
}
var li = [], wl = {
  initializeByDefault: !0
}, ao = {
  mount: function(y) {
    for (var l in wl)
      wl.hasOwnProperty(l) && !(l in y) && (y[l] = wl[l]);
    li.forEach(function(o) {
      if (o.pluginName === y.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(y.pluginName, " more than once");
    }), li.push(y);
  },
  pluginEvent: function(y, l, o) {
    var t = this;
    this.eventCanceled = !1, o.cancel = function() {
      t.eventCanceled = !0;
    };
    var s = y + "Global";
    li.forEach(function(u) {
      !l[u.pluginName] || (l[u.pluginName][s] && l[u.pluginName][s](Wn({
        sortable: l
      }, o)), l.options[u.pluginName] && l[u.pluginName][y] && l[u.pluginName][y](Wn({
        sortable: l
      }, o)));
    });
  },
  initializePlugins: function(y, l, o, t) {
    li.forEach(function(d) {
      var f = d.pluginName;
      if (!(!y.options[f] && !d.initializeByDefault)) {
        var g = new d(y, l, y.options);
        g.sortable = y, g.options = y.options, y[f] = g, Jn(o, g.defaults);
      }
    });
    for (var s in y.options)
      if (!!y.options.hasOwnProperty(s)) {
        var u = this.modifyOption(y, s, y.options[s]);
        typeof u < "u" && (y.options[s] = u);
      }
  },
  getEventProperties: function(y, l) {
    var o = {};
    return li.forEach(function(t) {
      typeof t.eventProperties == "function" && Jn(o, t.eventProperties.call(l[t.pluginName], y));
    }), o;
  },
  modifyOption: function(y, l, o) {
    var t;
    return li.forEach(function(s) {
      !y[s.pluginName] || s.optionListeners && typeof s.optionListeners[l] == "function" && (t = s.optionListeners[l].call(y[s.pluginName], o));
    }), t;
  }
};
function Wp(c) {
  var y = c.sortable, l = c.rootEl, o = c.name, t = c.targetEl, s = c.cloneEl, u = c.toEl, d = c.fromEl, f = c.oldIndex, g = c.newIndex, C = c.oldDraggableIndex, x = c.newDraggableIndex, D = c.originalEvent, b = c.putSortable, h = c.extraEventProperties;
  if (y = y || l && l[pn], !!y) {
    var A, E = y.options, m = "on" + o.charAt(0).toUpperCase() + o.substr(1);
    window.CustomEvent && !Zn && !oo ? A = new CustomEvent(o, {
      bubbles: !0,
      cancelable: !0
    }) : (A = document.createEvent("Event"), A.initEvent(o, !0, !0)), A.to = u || l, A.from = d || l, A.item = t || l, A.clone = s, A.oldIndex = f, A.newIndex = g, A.oldDraggableIndex = C, A.newDraggableIndex = x, A.originalEvent = D, A.pullMode = b ? b.lastPutMode : void 0;
    var S = Wn(Wn({}, h), ao.getEventProperties(o, y));
    for (var w in S)
      A[w] = S[w];
    l && l.dispatchEvent(A), E[m] && E[m].call(y, A);
  }
}
var jp = ["evt"], sn = function(y, l) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, t = o.evt, s = Pp(o, jp);
  ao.pluginEvent.bind(Ne)(y, l, Wn({
    dragEl: Ae,
    parentEl: vt,
    ghostEl: He,
    rootEl: it,
    nextEl: Nr,
    lastDownEl: Jo,
    cloneEl: pt,
    cloneHidden: hr,
    dragStarted: ki,
    putSortable: Wt,
    activeSortable: Ne.active,
    originalEvent: t,
    oldIndex: fi,
    oldDraggableIndex: eo,
    newIndex: cn,
    newDraggableIndex: pr,
    hideGhostForTarget: hd,
    unhideGhostForTarget: gd,
    cloneNowHidden: function() {
      hr = !0;
    },
    cloneNowShown: function() {
      hr = !1;
    },
    dispatchSortableEvent: function(d) {
      rn({
        sortable: l,
        name: d,
        originalEvent: t
      });
    }
  }, s));
};
function rn(c) {
  Wp(Wn({
    putSortable: Wt,
    cloneEl: pt,
    targetEl: Ae,
    rootEl: it,
    oldIndex: fi,
    oldDraggableIndex: eo,
    newIndex: cn,
    newDraggableIndex: pr
  }, c));
}
var Ae, vt, He, it, Nr, Jo, pt, hr, fi, cn, eo, pr, Vo, Wt, ui = !1, na = !1, ra = [], Ir, Rn, Dl, Ml, jf, $f, ki, si, to, no = !1, Qo = !1, Zo, Qt, Rl = [], fs = !1, ia = [], aa = typeof document < "u", Go = ad, Yf = oo || Zn ? "cssFloat" : "float", $p = aa && !Lp && !ad && "draggable" in document.createElement("div"), cd = function() {
  if (!!aa) {
    if (Zn)
      return !1;
    var c = document.createElement("x");
    return c.style.cssText = "pointer-events:auto", c.style.pointerEvents === "auto";
  }
}(), vd = function(y, l) {
  var o = Le(y), t = parseInt(o.width) - parseInt(o.paddingLeft) - parseInt(o.paddingRight) - parseInt(o.borderLeftWidth) - parseInt(o.borderRightWidth), s = ci(y, 0, l), u = ci(y, 1, l), d = s && Le(s), f = u && Le(u), g = d && parseInt(d.marginLeft) + parseInt(d.marginRight) + It(s).width, C = f && parseInt(f.marginLeft) + parseInt(f.marginRight) + It(u).width;
  if (o.display === "flex")
    return o.flexDirection === "column" || o.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (o.display === "grid")
    return o.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (s && d.float && d.float !== "none") {
    var x = d.float === "left" ? "left" : "right";
    return u && (f.clear === "both" || f.clear === x) ? "vertical" : "horizontal";
  }
  return s && (d.display === "block" || d.display === "flex" || d.display === "table" || d.display === "grid" || g >= t && o[Yf] === "none" || u && o[Yf] === "none" && g + C > t) ? "vertical" : "horizontal";
}, Yp = function(y, l, o) {
  var t = o ? y.left : y.top, s = o ? y.right : y.bottom, u = o ? y.width : y.height, d = o ? l.left : l.top, f = o ? l.right : l.bottom, g = o ? l.width : l.height;
  return t === d || s === f || t + u / 2 === d + g / 2;
}, Vp = function(y, l) {
  var o;
  return ra.some(function(t) {
    var s = t[pn].options.emptyInsertThreshold;
    if (!(!s || gs(t))) {
      var u = It(t), d = y >= u.left - s && y <= u.right + s, f = l >= u.top - s && l <= u.bottom + s;
      if (d && f)
        return o = t;
    }
  }), o;
}, pd = function(y) {
  function l(s, u) {
    return function(d, f, g, C) {
      var x = d.options.group.name && f.options.group.name && d.options.group.name === f.options.group.name;
      if (s == null && (u || x))
        return !0;
      if (s == null || s === !1)
        return !1;
      if (u && s === "clone")
        return s;
      if (typeof s == "function")
        return l(s(d, f, g, C), u)(d, f, g, C);
      var D = (u ? d : f).options.group.name;
      return s === !0 || typeof s == "string" && s === D || s.join && s.indexOf(D) > -1;
    };
  }
  var o = {}, t = y.group;
  (!t || Xo(t) != "object") && (t = {
    name: t
  }), o.name = t.name, o.checkPull = l(t.pull, !0), o.checkPut = l(t.put), o.revertClone = t.revertClone, y.group = o;
}, hd = function() {
  !cd && He && Le(He, "display", "none");
}, gd = function() {
  !cd && He && Le(He, "display", "");
};
aa && document.addEventListener("click", function(c) {
  if (na)
    return c.preventDefault(), c.stopPropagation && c.stopPropagation(), c.stopImmediatePropagation && c.stopImmediatePropagation(), na = !1, !1;
}, !0);
var Lr = function(y) {
  if (Ae) {
    y = y.touches ? y.touches[0] : y;
    var l = Vp(y.clientX, y.clientY);
    if (l) {
      var o = {};
      for (var t in y)
        y.hasOwnProperty(t) && (o[t] = y[t]);
      o.target = o.rootEl = l, o.preventDefault = void 0, o.stopPropagation = void 0, l[pn]._onDragOver(o);
    }
  }
}, Qp = function(y) {
  Ae && Ae.parentNode[pn]._isOutsideThisEl(y.target);
};
function Ne(c, y) {
  if (!(c && c.nodeType && c.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(c));
  this.el = c, this.options = y = Jn({}, y), c[pn] = this;
  var l = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(c.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    invertSwap: !1,
    invertedSwapThreshold: null,
    removeCloneOnHide: !0,
    direction: function() {
      return vd(c, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(u, d) {
      u.setData("Text", d.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Ne.supportPointer !== !1 && "PointerEvent" in window && !qi,
    emptyInsertThreshold: 5
  };
  ao.initializePlugins(this, c, l);
  for (var o in l)
    !(o in y) && (y[o] = l[o]);
  pd(y);
  for (var t in this)
    t.charAt(0) === "_" && typeof this[t] == "function" && (this[t] = this[t].bind(this));
  this.nativeDraggable = y.forceFallback ? !1 : $p, this.nativeDraggable && (this.options.touchStartThreshold = 1), y.supportPointer ? ke(c, "pointerdown", this._onTapStart) : (ke(c, "mousedown", this._onTapStart), ke(c, "touchstart", this._onTapStart)), this.nativeDraggable && (ke(c, "dragover", this), ke(c, "dragenter", this)), ra.push(this.el), y.store && y.store.get && this.sort(y.store.get(this) || []), Jn(this, Hp());
}
Ne.prototype = {
  constructor: Ne,
  _isOutsideThisEl: function(y) {
    !this.el.contains(y) && y !== this.el && (si = null);
  },
  _getDirection: function(y, l) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, y, l, Ae) : this.options.direction;
  },
  _onTapStart: function(y) {
    if (!!y.cancelable) {
      var l = this, o = this.el, t = this.options, s = t.preventOnFilter, u = y.type, d = y.touches && y.touches[0] || y.pointerType && y.pointerType === "touch" && y, f = (d || y).target, g = y.target.shadowRoot && (y.path && y.path[0] || y.composedPath && y.composedPath()[0]) || f, C = t.filter;
      if (_p(o), !Ae && !(/mousedown|pointerdown/.test(u) && y.button !== 0 || t.disabled) && !g.isContentEditable && !(!this.nativeDraggable && qi && f && f.tagName.toUpperCase() === "SELECT") && (f = Un(f, t.draggable, o, !1), !(f && f.animated) && Jo !== f)) {
        if (fi = mn(f), eo = mn(f, t.draggable), typeof C == "function") {
          if (C.call(this, y, f, this)) {
            rn({
              sortable: l,
              rootEl: g,
              name: "filter",
              targetEl: f,
              toEl: o,
              fromEl: o
            }), sn("filter", l, {
              evt: y
            }), s && y.cancelable && y.preventDefault();
            return;
          }
        } else if (C && (C = C.split(",").some(function(x) {
          if (x = Un(g, x.trim(), o, !1), x)
            return rn({
              sortable: l,
              rootEl: x,
              name: "filter",
              targetEl: f,
              fromEl: o,
              toEl: o
            }), sn("filter", l, {
              evt: y
            }), !0;
        }), C)) {
          s && y.cancelable && y.preventDefault();
          return;
        }
        t.handle && !Un(g, t.handle, o, !1) || this._prepareDragStart(y, d, f);
      }
    }
  },
  _prepareDragStart: function(y, l, o) {
    var t = this, s = t.el, u = t.options, d = s.ownerDocument, f;
    if (o && !Ae && o.parentNode === s) {
      var g = It(o);
      if (it = s, Ae = o, vt = Ae.parentNode, Nr = Ae.nextSibling, Jo = o, Vo = u.group, Ne.dragged = Ae, Ir = {
        target: Ae,
        clientX: (l || y).clientX,
        clientY: (l || y).clientY
      }, jf = Ir.clientX - g.left, $f = Ir.clientY - g.top, this._lastX = (l || y).clientX, this._lastY = (l || y).clientY, Ae.style["will-change"] = "all", f = function() {
        if (sn("delayEnded", t, {
          evt: y
        }), Ne.eventCanceled) {
          t._onDrop();
          return;
        }
        t._disableDelayedDragEvents(), !Hf && t.nativeDraggable && (Ae.draggable = !0), t._triggerDragStart(y, l), rn({
          sortable: t,
          name: "choose",
          originalEvent: y
        }), dn(Ae, u.chosenClass, !0);
      }, u.ignore.split(",").forEach(function(C) {
        sd(Ae, C.trim(), Pl);
      }), ke(d, "dragover", Lr), ke(d, "mousemove", Lr), ke(d, "touchmove", Lr), ke(d, "mouseup", t._onDrop), ke(d, "touchend", t._onDrop), ke(d, "touchcancel", t._onDrop), Hf && this.nativeDraggable && (this.options.touchStartThreshold = 4, Ae.draggable = !0), sn("delayStart", this, {
        evt: y
      }), u.delay && (!u.delayOnTouchOnly || l) && (!this.nativeDraggable || !(oo || Zn))) {
        if (Ne.eventCanceled) {
          this._onDrop();
          return;
        }
        ke(d, "mouseup", t._disableDelayedDrag), ke(d, "touchend", t._disableDelayedDrag), ke(d, "touchcancel", t._disableDelayedDrag), ke(d, "mousemove", t._delayedDragTouchMoveHandler), ke(d, "touchmove", t._delayedDragTouchMoveHandler), u.supportPointer && ke(d, "pointermove", t._delayedDragTouchMoveHandler), t._dragStartTimer = setTimeout(f, u.delay);
      } else
        f();
    }
  },
  _delayedDragTouchMoveHandler: function(y) {
    var l = y.touches ? y.touches[0] : y;
    Math.max(Math.abs(l.clientX - this._lastX), Math.abs(l.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    Ae && Pl(Ae), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var y = this.el.ownerDocument;
    Ye(y, "mouseup", this._disableDelayedDrag), Ye(y, "touchend", this._disableDelayedDrag), Ye(y, "touchcancel", this._disableDelayedDrag), Ye(y, "mousemove", this._delayedDragTouchMoveHandler), Ye(y, "touchmove", this._delayedDragTouchMoveHandler), Ye(y, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(y, l) {
    l = l || y.pointerType == "touch" && y, !this.nativeDraggable || l ? this.options.supportPointer ? ke(document, "pointermove", this._onTouchMove) : l ? ke(document, "touchmove", this._onTouchMove) : ke(document, "mousemove", this._onTouchMove) : (ke(Ae, "dragend", this), ke(it, "dragstart", this._onDragStart));
    try {
      document.selection ? qo(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(y, l) {
    if (ui = !1, it && Ae) {
      sn("dragStarted", this, {
        evt: l
      }), this.nativeDraggable && ke(document, "dragover", Qp);
      var o = this.options;
      !y && dn(Ae, o.dragClass, !1), dn(Ae, o.ghostClass, !0), Ne.active = this, y && this._appendGhost(), rn({
        sortable: this,
        name: "start",
        originalEvent: l
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Rn) {
      this._lastX = Rn.clientX, this._lastY = Rn.clientY, hd();
      for (var y = document.elementFromPoint(Rn.clientX, Rn.clientY), l = y; y && y.shadowRoot && (y = y.shadowRoot.elementFromPoint(Rn.clientX, Rn.clientY), y !== l); )
        l = y;
      if (Ae.parentNode[pn]._isOutsideThisEl(y), l)
        do {
          if (l[pn]) {
            var o = void 0;
            if (o = l[pn]._onDragOver({
              clientX: Rn.clientX,
              clientY: Rn.clientY,
              target: y,
              rootEl: l
            }), o && !this.options.dragoverBubble)
              break;
          }
          y = l;
        } while (l = l.parentNode);
      gd();
    }
  },
  _onTouchMove: function(y) {
    if (Ir) {
      var l = this.options, o = l.fallbackTolerance, t = l.fallbackOffset, s = y.touches ? y.touches[0] : y, u = He && di(He, !0), d = He && u && u.a, f = He && u && u.d, g = Go && Qt && Wf(Qt), C = (s.clientX - Ir.clientX + t.x) / (d || 1) + (g ? g[0] - Rl[0] : 0) / (d || 1), x = (s.clientY - Ir.clientY + t.y) / (f || 1) + (g ? g[1] - Rl[1] : 0) / (f || 1);
      if (!Ne.active && !ui) {
        if (o && Math.max(Math.abs(s.clientX - this._lastX), Math.abs(s.clientY - this._lastY)) < o)
          return;
        this._onDragStart(y, !0);
      }
      if (He) {
        u ? (u.e += C - (Dl || 0), u.f += x - (Ml || 0)) : u = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: C,
          f: x
        };
        var D = "matrix(".concat(u.a, ",").concat(u.b, ",").concat(u.c, ",").concat(u.d, ",").concat(u.e, ",").concat(u.f, ")");
        Le(He, "webkitTransform", D), Le(He, "mozTransform", D), Le(He, "msTransform", D), Le(He, "transform", D), Dl = C, Ml = x, Rn = s;
      }
      y.cancelable && y.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!He) {
      var y = this.options.fallbackOnBody ? document.body : it, l = It(Ae, !0, Go, !0, y), o = this.options;
      if (Go) {
        for (Qt = y; Le(Qt, "position") === "static" && Le(Qt, "transform") === "none" && Qt !== document; )
          Qt = Qt.parentNode;
        Qt !== document.body && Qt !== document.documentElement ? (Qt === document && (Qt = zn()), l.top += Qt.scrollTop, l.left += Qt.scrollLeft) : Qt = zn(), Rl = Wf(Qt);
      }
      He = Ae.cloneNode(!0), dn(He, o.ghostClass, !1), dn(He, o.fallbackClass, !0), dn(He, o.dragClass, !0), Le(He, "transition", ""), Le(He, "transform", ""), Le(He, "box-sizing", "border-box"), Le(He, "margin", 0), Le(He, "top", l.top), Le(He, "left", l.left), Le(He, "width", l.width), Le(He, "height", l.height), Le(He, "opacity", "0.8"), Le(He, "position", Go ? "absolute" : "fixed"), Le(He, "zIndex", "100000"), Le(He, "pointerEvents", "none"), Ne.ghost = He, y.appendChild(He), Le(He, "transform-origin", jf / parseInt(He.style.width) * 100 + "% " + $f / parseInt(He.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(y, l) {
    var o = this, t = y.dataTransfer, s = o.options;
    if (sn("dragStart", this, {
      evt: y
    }), Ne.eventCanceled) {
      this._onDrop();
      return;
    }
    sn("setupClone", this), Ne.eventCanceled || (pt = dd(Ae), pt.draggable = !1, pt.style["will-change"] = "", this._hideClone(), dn(pt, this.options.chosenClass, !1), Ne.clone = pt), o.cloneId = qo(function() {
      sn("clone", o), !Ne.eventCanceled && (o.options.removeCloneOnHide || it.insertBefore(pt, Ae), o._hideClone(), rn({
        sortable: o,
        name: "clone"
      }));
    }), !l && dn(Ae, s.dragClass, !0), l ? (na = !0, o._loopId = setInterval(o._emulateDragOver, 50)) : (Ye(document, "mouseup", o._onDrop), Ye(document, "touchend", o._onDrop), Ye(document, "touchcancel", o._onDrop), t && (t.effectAllowed = "move", s.setData && s.setData.call(o, t, Ae)), ke(document, "drop", o), Le(Ae, "transform", "translateZ(0)")), ui = !0, o._dragStartId = qo(o._dragStarted.bind(o, l, y)), ke(document, "selectstart", o), ki = !0, qi && Le(document.body, "user-select", "none");
  },
  _onDragOver: function(y) {
    var l = this.el, o = y.target, t, s, u, d = this.options, f = d.group, g = Ne.active, C = Vo === f, x = d.sort, D = Wt || g, b, h = this, A = !1;
    if (fs)
      return;
    function E(K, q) {
      sn(K, h, Wn({
        evt: y,
        isOwner: C,
        axis: b ? "vertical" : "horizontal",
        revert: u,
        dragRect: t,
        targetRect: s,
        canSort: x,
        fromSortable: D,
        target: o,
        completed: S,
        onMove: function(_, le) {
          return ko(it, l, Ae, t, _, It(_), y, le);
        },
        changed: w
      }, q));
    }
    function m() {
      E("dragOverAnimationCapture"), h.captureAnimationState(), h !== D && D.captureAnimationState();
    }
    function S(K) {
      return E("dragOverCompleted", {
        insertion: K
      }), K && (C ? g._hideClone() : g._showClone(h), h !== D && (dn(Ae, Wt ? Wt.options.ghostClass : g.options.ghostClass, !1), dn(Ae, d.ghostClass, !0)), Wt !== h && h !== Ne.active ? Wt = h : h === Ne.active && Wt && (Wt = null), D === h && (h._ignoreWhileAnimating = o), h.animateAll(function() {
        E("dragOverAnimationComplete"), h._ignoreWhileAnimating = null;
      }), h !== D && (D.animateAll(), D._ignoreWhileAnimating = null)), (o === Ae && !Ae.animated || o === l && !o.animated) && (si = null), !d.dragoverBubble && !y.rootEl && o !== document && (Ae.parentNode[pn]._isOutsideThisEl(y.target), !K && Lr(y)), !d.dragoverBubble && y.stopPropagation && y.stopPropagation(), A = !0;
    }
    function w() {
      cn = mn(Ae), pr = mn(Ae, d.draggable), rn({
        sortable: h,
        name: "change",
        toEl: l,
        newIndex: cn,
        newDraggableIndex: pr,
        originalEvent: y
      });
    }
    if (y.preventDefault !== void 0 && y.cancelable && y.preventDefault(), o = Un(o, d.draggable, l, !0), E("dragOver"), Ne.eventCanceled)
      return A;
    if (Ae.contains(y.target) || o.animated && o.animatingX && o.animatingY || h._ignoreWhileAnimating === o)
      return S(!1);
    if (na = !1, g && !d.disabled && (C ? x || (u = vt !== it) : Wt === this || (this.lastPutMode = Vo.checkPull(this, g, Ae, y)) && f.checkPut(this, g, Ae, y))) {
      if (b = this._getDirection(y, o) === "vertical", t = It(Ae), E("dragOverValid"), Ne.eventCanceled)
        return A;
      if (u)
        return vt = it, m(), this._hideClone(), E("revert"), Ne.eventCanceled || (Nr ? it.insertBefore(Ae, Nr) : it.appendChild(Ae)), S(!0);
      var p = gs(l, d.draggable);
      if (!p || Xp(y, b, this) && !p.animated) {
        if (p === Ae)
          return S(!1);
        if (p && l === y.target && (o = p), o && (s = It(o)), ko(it, l, Ae, t, o, s, y, !!o) !== !1)
          return m(), l.appendChild(Ae), vt = l, w(), S(!0);
      } else if (p && Kp(y, b, this)) {
        var T = ci(l, 0, d, !0);
        if (T === Ae)
          return S(!1);
        if (o = T, s = It(o), ko(it, l, Ae, t, o, s, y, !1) !== !1)
          return m(), l.insertBefore(Ae, T), vt = l, w(), S(!0);
      } else if (o.parentNode === l) {
        s = It(o);
        var M = 0, N, U = Ae.parentNode !== l, F = !Yp(Ae.animated && Ae.toRect || t, o.animated && o.toRect || s, b), B = b ? "top" : "left", P = zf(o, "top", "top") || zf(Ae, "top", "top"), z = P ? P.scrollTop : void 0;
        si !== o && (N = s[B], no = !1, Qo = !F && d.invertSwap || U), M = Jp(y, o, s, b, F ? 1 : d.swapThreshold, d.invertedSwapThreshold == null ? d.swapThreshold : d.invertedSwapThreshold, Qo, si === o);
        var H;
        if (M !== 0) {
          var $ = mn(Ae);
          do
            $ -= M, H = vt.children[$];
          while (H && (Le(H, "display") === "none" || H === He));
        }
        if (M === 0 || H === o)
          return S(!1);
        si = o, to = M;
        var I = o.nextElementSibling, Y = !1;
        Y = M === 1;
        var Q = ko(it, l, Ae, t, o, s, y, Y);
        if (Q !== !1)
          return (Q === 1 || Q === -1) && (Y = Q === 1), fs = !0, setTimeout(kp, 30), m(), Y && !I ? l.appendChild(Ae) : o.parentNode.insertBefore(Ae, Y ? I : o), P && fd(P, 0, z - P.scrollTop), vt = Ae.parentNode, N !== void 0 && !Qo && (Zo = Math.abs(N - It(o)[B])), w(), S(!0);
      }
      if (l.contains(Ae))
        return S(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    Ye(document, "mousemove", this._onTouchMove), Ye(document, "touchmove", this._onTouchMove), Ye(document, "pointermove", this._onTouchMove), Ye(document, "dragover", Lr), Ye(document, "mousemove", Lr), Ye(document, "touchmove", Lr);
  },
  _offUpEvents: function() {
    var y = this.el.ownerDocument;
    Ye(y, "mouseup", this._onDrop), Ye(y, "touchend", this._onDrop), Ye(y, "pointerup", this._onDrop), Ye(y, "touchcancel", this._onDrop), Ye(document, "selectstart", this);
  },
  _onDrop: function(y) {
    var l = this.el, o = this.options;
    if (cn = mn(Ae), pr = mn(Ae, o.draggable), sn("drop", this, {
      evt: y
    }), vt = Ae && Ae.parentNode, cn = mn(Ae), pr = mn(Ae, o.draggable), Ne.eventCanceled) {
      this._nulling();
      return;
    }
    ui = !1, Qo = !1, no = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), ds(this.cloneId), ds(this._dragStartId), this.nativeDraggable && (Ye(document, "drop", this), Ye(l, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), qi && Le(document.body, "user-select", ""), Le(Ae, "transform", ""), y && (ki && (y.cancelable && y.preventDefault(), !o.dropBubble && y.stopPropagation()), He && He.parentNode && He.parentNode.removeChild(He), (it === vt || Wt && Wt.lastPutMode !== "clone") && pt && pt.parentNode && pt.parentNode.removeChild(pt), Ae && (this.nativeDraggable && Ye(Ae, "dragend", this), Pl(Ae), Ae.style["will-change"] = "", ki && !ui && dn(Ae, Wt ? Wt.options.ghostClass : this.options.ghostClass, !1), dn(Ae, this.options.chosenClass, !1), rn({
      sortable: this,
      name: "unchoose",
      toEl: vt,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: y
    }), it !== vt ? (cn >= 0 && (rn({
      rootEl: vt,
      name: "add",
      toEl: vt,
      fromEl: it,
      originalEvent: y
    }), rn({
      sortable: this,
      name: "remove",
      toEl: vt,
      originalEvent: y
    }), rn({
      rootEl: vt,
      name: "sort",
      toEl: vt,
      fromEl: it,
      originalEvent: y
    }), rn({
      sortable: this,
      name: "sort",
      toEl: vt,
      originalEvent: y
    })), Wt && Wt.save()) : cn !== fi && cn >= 0 && (rn({
      sortable: this,
      name: "update",
      toEl: vt,
      originalEvent: y
    }), rn({
      sortable: this,
      name: "sort",
      toEl: vt,
      originalEvent: y
    })), Ne.active && ((cn == null || cn === -1) && (cn = fi, pr = eo), rn({
      sortable: this,
      name: "end",
      toEl: vt,
      originalEvent: y
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    sn("nulling", this), it = Ae = vt = He = Nr = pt = Jo = hr = Ir = Rn = ki = cn = pr = fi = eo = si = to = Wt = Vo = Ne.dragged = Ne.ghost = Ne.clone = Ne.active = null, ia.forEach(function(y) {
      y.checked = !0;
    }), ia.length = Dl = Ml = 0;
  },
  handleEvent: function(y) {
    switch (y.type) {
      case "drop":
      case "dragend":
        this._onDrop(y);
        break;
      case "dragenter":
      case "dragover":
        Ae && (this._onDragOver(y), Gp(y));
        break;
      case "selectstart":
        y.preventDefault();
        break;
    }
  },
  toArray: function() {
    for (var y = [], l, o = this.el.children, t = 0, s = o.length, u = this.options; t < s; t++)
      l = o[t], Un(l, u.draggable, this.el, !1) && y.push(l.getAttribute(u.dataIdAttr) || qp(l));
    return y;
  },
  sort: function(y, l) {
    var o = {}, t = this.el;
    this.toArray().forEach(function(s, u) {
      var d = t.children[u];
      Un(d, this.options.draggable, t, !1) && (o[s] = d);
    }, this), l && this.captureAnimationState(), y.forEach(function(s) {
      o[s] && (t.removeChild(o[s]), t.appendChild(o[s]));
    }), l && this.animateAll();
  },
  save: function() {
    var y = this.options.store;
    y && y.set && y.set(this);
  },
  closest: function(y, l) {
    return Un(y, l || this.options.draggable, this.el, !1);
  },
  option: function(y, l) {
    var o = this.options;
    if (l === void 0)
      return o[y];
    var t = ao.modifyOption(this, y, l);
    typeof t < "u" ? o[y] = t : o[y] = l, y === "group" && pd(o);
  },
  destroy: function() {
    sn("destroy", this);
    var y = this.el;
    y[pn] = null, Ye(y, "mousedown", this._onTapStart), Ye(y, "touchstart", this._onTapStart), Ye(y, "pointerdown", this._onTapStart), this.nativeDraggable && (Ye(y, "dragover", this), Ye(y, "dragenter", this)), Array.prototype.forEach.call(y.querySelectorAll("[draggable]"), function(l) {
      l.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), ra.splice(ra.indexOf(this.el), 1), this.el = y = null;
  },
  _hideClone: function() {
    if (!hr) {
      if (sn("hideClone", this), Ne.eventCanceled)
        return;
      Le(pt, "display", "none"), this.options.removeCloneOnHide && pt.parentNode && pt.parentNode.removeChild(pt), hr = !0;
    }
  },
  _showClone: function(y) {
    if (y.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (hr) {
      if (sn("showClone", this), Ne.eventCanceled)
        return;
      Ae.parentNode == it && !this.options.group.revertClone ? it.insertBefore(pt, Ae) : Nr ? it.insertBefore(pt, Nr) : it.appendChild(pt), this.options.group.revertClone && this.animate(Ae, pt), Le(pt, "display", ""), hr = !1;
    }
  }
};
function Gp(c) {
  c.dataTransfer && (c.dataTransfer.dropEffect = "move"), c.cancelable && c.preventDefault();
}
function ko(c, y, l, o, t, s, u, d) {
  var f, g = c[pn], C = g.options.onMove, x;
  return window.CustomEvent && !Zn && !oo ? f = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (f = document.createEvent("Event"), f.initEvent("move", !0, !0)), f.to = y, f.from = c, f.dragged = l, f.draggedRect = o, f.related = t || y, f.relatedRect = s || It(y), f.willInsertAfter = d, f.originalEvent = u, c.dispatchEvent(f), C && (x = C.call(g, f, u)), x;
}
function Pl(c) {
  c.draggable = !1;
}
function kp() {
  fs = !1;
}
function Kp(c, y, l) {
  var o = It(ci(l.el, 0, l.options, !0)), t = 10;
  return y ? c.clientX < o.left - t || c.clientY < o.top && c.clientX < o.right : c.clientY < o.top - t || c.clientY < o.bottom && c.clientX < o.left;
}
function Xp(c, y, l) {
  var o = It(gs(l.el, l.options.draggable)), t = 10;
  return y ? c.clientX > o.right + t || c.clientX <= o.right && c.clientY > o.bottom && c.clientX >= o.left : c.clientX > o.right && c.clientY > o.top || c.clientX <= o.right && c.clientY > o.bottom + t;
}
function Jp(c, y, l, o, t, s, u, d) {
  var f = o ? c.clientY : c.clientX, g = o ? l.height : l.width, C = o ? l.top : l.left, x = o ? l.bottom : l.right, D = !1;
  if (!u) {
    if (d && Zo < g * t) {
      if (!no && (to === 1 ? f > C + g * s / 2 : f < x - g * s / 2) && (no = !0), no)
        D = !0;
      else if (to === 1 ? f < C + Zo : f > x - Zo)
        return -to;
    } else if (f > C + g * (1 - t) / 2 && f < x - g * (1 - t) / 2)
      return Zp(y);
  }
  return D = D || u, D && (f < C + g * s / 2 || f > x - g * s / 2) ? f > C + g / 2 ? 1 : -1 : 0;
}
function Zp(c) {
  return mn(Ae) < mn(c) ? 1 : -1;
}
function qp(c) {
  for (var y = c.tagName + c.className + c.src + c.href + c.textContent, l = y.length, o = 0; l--; )
    o += y.charCodeAt(l);
  return o.toString(36);
}
function _p(c) {
  ia.length = 0;
  for (var y = c.getElementsByTagName("input"), l = y.length; l--; ) {
    var o = y[l];
    o.checked && ia.push(o);
  }
}
function qo(c) {
  return setTimeout(c, 0);
}
function ds(c) {
  return clearTimeout(c);
}
aa && ke(document, "touchmove", function(c) {
  (Ne.active || ui) && c.cancelable && c.preventDefault();
});
Ne.utils = {
  on: ke,
  off: Ye,
  css: Le,
  find: sd,
  is: function(y, l) {
    return !!Un(y, l, y, !1);
  },
  extend: Fp,
  throttle: ud,
  closest: Un,
  toggleClass: dn,
  clone: dd,
  index: mn,
  nextTick: qo,
  cancelNextTick: ds,
  detectDirection: vd,
  getChild: ci
};
Ne.get = function(c) {
  return c[pn];
};
Ne.mount = function() {
  for (var c = arguments.length, y = new Array(c), l = 0; l < c; l++)
    y[l] = arguments[l];
  y[0].constructor === Array && (y = y[0]), y.forEach(function(o) {
    if (!o.prototype || !o.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(o));
    o.utils && (Ne.utils = Wn(Wn({}, Ne.utils), o.utils)), ao.mount(o);
  });
};
Ne.create = function(c, y) {
  return new Ne(c, y);
};
Ne.version = Ip;
var At = [], Ki, cs, vs = !1, Il, Ll, oa, Xi;
function eh() {
  function c() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var y in this)
      y.charAt(0) === "_" && typeof this[y] == "function" && (this[y] = this[y].bind(this));
  }
  return c.prototype = {
    dragStarted: function(l) {
      var o = l.originalEvent;
      this.sortable.nativeDraggable ? ke(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? ke(document, "pointermove", this._handleFallbackAutoScroll) : o.touches ? ke(document, "touchmove", this._handleFallbackAutoScroll) : ke(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(l) {
      var o = l.originalEvent;
      !this.options.dragOverBubble && !o.rootEl && this._handleAutoScroll(o);
    },
    drop: function() {
      this.sortable.nativeDraggable ? Ye(document, "dragover", this._handleAutoScroll) : (Ye(document, "pointermove", this._handleFallbackAutoScroll), Ye(document, "touchmove", this._handleFallbackAutoScroll), Ye(document, "mousemove", this._handleFallbackAutoScroll)), Vf(), _o(), Bp();
    },
    nulling: function() {
      oa = cs = Ki = vs = Xi = Il = Ll = null, At.length = 0;
    },
    _handleFallbackAutoScroll: function(l) {
      this._handleAutoScroll(l, !0);
    },
    _handleAutoScroll: function(l, o) {
      var t = this, s = (l.touches ? l.touches[0] : l).clientX, u = (l.touches ? l.touches[0] : l).clientY, d = document.elementFromPoint(s, u);
      if (oa = l, o || this.options.forceAutoScrollFallback || oo || Zn || qi) {
        Nl(l, this.options, d, o);
        var f = gr(d, !0);
        vs && (!Xi || s !== Il || u !== Ll) && (Xi && Vf(), Xi = setInterval(function() {
          var g = gr(document.elementFromPoint(s, u), !0);
          g !== f && (f = g, _o()), Nl(l, t.options, g, o);
        }, 10), Il = s, Ll = u);
      } else {
        if (!this.options.bubbleScroll || gr(d, !0) === zn()) {
          _o();
          return;
        }
        Nl(l, this.options, gr(d, !1), !1);
      }
    }
  }, Jn(c, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function _o() {
  At.forEach(function(c) {
    clearInterval(c.pid);
  }), At = [];
}
function Vf() {
  clearInterval(Xi);
}
var Nl = ud(function(c, y, l, o) {
  if (!!y.scroll) {
    var t = (c.touches ? c.touches[0] : c).clientX, s = (c.touches ? c.touches[0] : c).clientY, u = y.scrollSensitivity, d = y.scrollSpeed, f = zn(), g = !1, C;
    cs !== l && (cs = l, _o(), Ki = y.scroll, C = y.scrollFn, Ki === !0 && (Ki = gr(l, !0)));
    var x = 0, D = Ki;
    do {
      var b = D, h = It(b), A = h.top, E = h.bottom, m = h.left, S = h.right, w = h.width, p = h.height, T = void 0, M = void 0, N = b.scrollWidth, U = b.scrollHeight, F = Le(b), B = b.scrollLeft, P = b.scrollTop;
      b === f ? (T = w < N && (F.overflowX === "auto" || F.overflowX === "scroll" || F.overflowX === "visible"), M = p < U && (F.overflowY === "auto" || F.overflowY === "scroll" || F.overflowY === "visible")) : (T = w < N && (F.overflowX === "auto" || F.overflowX === "scroll"), M = p < U && (F.overflowY === "auto" || F.overflowY === "scroll"));
      var z = T && (Math.abs(S - t) <= u && B + w < N) - (Math.abs(m - t) <= u && !!B), H = M && (Math.abs(E - s) <= u && P + p < U) - (Math.abs(A - s) <= u && !!P);
      if (!At[x])
        for (var $ = 0; $ <= x; $++)
          At[$] || (At[$] = {});
      (At[x].vx != z || At[x].vy != H || At[x].el !== b) && (At[x].el = b, At[x].vx = z, At[x].vy = H, clearInterval(At[x].pid), (z != 0 || H != 0) && (g = !0, At[x].pid = setInterval(function() {
        o && this.layer === 0 && Ne.active._onTouchMove(oa);
        var I = At[this.layer].vy ? At[this.layer].vy * d : 0, Y = At[this.layer].vx ? At[this.layer].vx * d : 0;
        typeof C == "function" && C.call(Ne.dragged.parentNode[pn], Y, I, c, oa, At[this.layer].el) !== "continue" || fd(At[this.layer].el, Y, I);
      }.bind({
        layer: x
      }), 24))), x++;
    } while (y.bubbleScroll && D !== f && (D = gr(D, !1)));
    vs = g;
  }
}, 30), md = function(y) {
  var l = y.originalEvent, o = y.putSortable, t = y.dragEl, s = y.activeSortable, u = y.dispatchSortableEvent, d = y.hideGhostForTarget, f = y.unhideGhostForTarget;
  if (!!l) {
    var g = o || s;
    d();
    var C = l.changedTouches && l.changedTouches.length ? l.changedTouches[0] : l, x = document.elementFromPoint(C.clientX, C.clientY);
    f(), g && !g.el.contains(x) && (u("spill"), this.onSpill({
      dragEl: t,
      putSortable: o
    }));
  }
};
function ms() {
}
ms.prototype = {
  startIndex: null,
  dragStart: function(y) {
    var l = y.oldDraggableIndex;
    this.startIndex = l;
  },
  onSpill: function(y) {
    var l = y.dragEl, o = y.putSortable;
    this.sortable.captureAnimationState(), o && o.captureAnimationState();
    var t = ci(this.sortable.el, this.startIndex, this.options);
    t ? this.sortable.el.insertBefore(l, t) : this.sortable.el.appendChild(l), this.sortable.animateAll(), o && o.animateAll();
  },
  drop: md
};
Jn(ms, {
  pluginName: "revertOnSpill"
});
function ys() {
}
ys.prototype = {
  onSpill: function(y) {
    var l = y.dragEl, o = y.putSortable, t = o || this.sortable;
    t.captureAnimationState(), l.parentNode && l.parentNode.removeChild(l), t.animateAll();
  },
  drop: md
};
Jn(ys, {
  pluginName: "removeOnSpill"
});
Ne.mount(new eh());
Ne.mount(ys, ms);
function Ol(c) {
  c.parentElement !== null && c.parentElement.removeChild(c);
}
function Qf(c, y, l) {
  const o = l === 0 ? c.children[0] : c.children[l - 1].nextSibling;
  c.insertBefore(y, o);
}
function th() {
  return typeof window < "u" ? window.console : global.console;
}
const nh = th();
function rh(c) {
  const y = /* @__PURE__ */ Object.create(null);
  return function(o) {
    return y[o] || (y[o] = c(o));
  };
}
const ih = /-(\w)/g, oh = rh((c) => c.replace(ih, (y, l) => l.toUpperCase())), yd = ["Start", "Add", "Remove", "Update", "End"], Ad = ["Choose", "Unchoose", "Sort", "Filter", "Clone"], xd = ["Move"], ah = [xd, yd, Ad].flatMap((c) => c).map((c) => `on${c}`), ps = {
  manage: xd,
  manageAndEmit: yd,
  emit: Ad
};
function lh(c) {
  return ah.indexOf(c) !== -1;
}
const sh = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];
function uh(c) {
  return sh.includes(c);
}
function fh(c) {
  return ["transition-group", "TransitionGroup"].includes(c);
}
function Sd(c) {
  return ["id", "class", "role", "style"].includes(c) || c.startsWith("data-") || c.startsWith("aria-") || c.startsWith("on");
}
function Ed(c) {
  return c.reduce((y, [l, o]) => (y[l] = o, y), {});
}
function dh({ $attrs: c, componentData: y = {} }) {
  return {
    ...Ed(
      Object.entries(c).filter(([o, t]) => Sd(o))
    ),
    ...y
  };
}
function ch({ $attrs: c, callBackBuilder: y }) {
  const l = Ed(bd(c));
  Object.entries(y).forEach(([t, s]) => {
    ps[t].forEach((u) => {
      l[`on${u}`] = s(u);
    });
  });
  const o = `[data-draggable]${l.draggable || ""}`;
  return {
    ...l,
    draggable: o
  };
}
function bd(c) {
  return Object.entries(c).filter(([y, l]) => !Sd(y)).map(([y, l]) => [oh(y), l]).filter(([y, l]) => !lh(y));
}
const Gf = ({ el: c }) => c, vh = (c, y) => c.__draggable_context = y, kf = (c) => c.__draggable_context;
class ph {
  constructor({
    nodes: { header: y, default: l, footer: o },
    root: t,
    realList: s
  }) {
    this.defaultNodes = l, this.children = [...y, ...l, ...o], this.externalComponent = t.externalComponent, this.rootTransition = t.transition, this.tag = t.tag, this.realList = s;
  }
  get _isRootComponent() {
    return this.externalComponent || this.rootTransition;
  }
  render(y, l) {
    const { tag: o, children: t, _isRootComponent: s } = this;
    return y(o, l, s ? { default: () => t } : t);
  }
  updated() {
    const { defaultNodes: y, realList: l } = this;
    y.forEach((o, t) => {
      vh(Gf(o), {
        element: l[t],
        index: t
      });
    });
  }
  getUnderlyingVm(y) {
    return kf(y);
  }
  getVmIndexFromDomIndex(y, l) {
    const { defaultNodes: o } = this, { length: t } = o, s = l.children, u = s.item(y);
    if (u === null)
      return t;
    const d = kf(u);
    if (d)
      return d.index;
    if (t === 0)
      return 0;
    const f = Gf(o[0]), g = [...s].findIndex(
      (C) => C === f
    );
    return y < g ? 0 : t;
  }
}
function hh(c, y) {
  const l = c[y];
  return l ? l() : [];
}
function gh({ $slots: c, realList: y, getKey: l }) {
  const o = y || [], [t, s] = ["header", "footer"].map(
    (f) => hh(c, f)
  ), { item: u } = c;
  if (!u)
    throw new Error("draggable element must have an item slot");
  const d = o.flatMap(
    (f, g) => u({ element: f, index: g }).map((C) => (C.key = l(f), C.props = { ...C.props || {}, "data-draggable": !0 }, C))
  );
  if (d.length !== o.length)
    throw new Error("Item slot must have only one child");
  return {
    header: t,
    footer: s,
    default: d
  };
}
function mh(c) {
  const y = fh(c), l = !uh(c) && !y;
  return {
    transition: y,
    externalComponent: l,
    tag: l ? ut(c) : y ? Iv : c
  };
}
function yh({ $slots: c, tag: y, realList: l, getKey: o }) {
  const t = gh({ $slots: c, realList: l, getKey: o }), s = mh(y);
  return new ph({ nodes: t, root: s, realList: l });
}
function Cd(c, y) {
  Or(() => this.$emit(c.toLowerCase(), y));
}
function Td(c) {
  return (y, l) => {
    if (this.realList !== null)
      return this[`onDrag${c}`](y, l);
  };
}
function Ah(c) {
  const y = Td.call(this, c);
  return (l, o) => {
    y.call(this, l, o), Cd.call(this, c, l);
  };
}
let Fl = null;
const xh = {
  list: {
    type: Array,
    required: !1,
    default: null
  },
  modelValue: {
    type: Array,
    required: !1,
    default: null
  },
  itemKey: {
    type: [String, Function],
    required: !0
  },
  clone: {
    type: Function,
    default: (c) => c
  },
  tag: {
    type: String,
    default: "div"
  },
  move: {
    type: Function,
    default: null
  },
  componentData: {
    type: Object,
    required: !1,
    default: null
  }
}, Sh = [
  "update:modelValue",
  "change",
  ...[...ps.manageAndEmit, ...ps.emit].map((c) => c.toLowerCase())
], As = Pn({
  name: "draggable",
  inheritAttrs: !1,
  props: xh,
  emits: Sh,
  data() {
    return {
      error: !1
    };
  },
  render() {
    try {
      this.error = !1;
      const { $slots: c, $attrs: y, tag: l, componentData: o, realList: t, getKey: s } = this, u = yh({
        $slots: c,
        tag: l,
        realList: t,
        getKey: s
      });
      this.componentStructure = u;
      const d = dh({ $attrs: y, componentData: o });
      return u.render(ea, d);
    } catch (c) {
      return this.error = !0, ea("pre", { style: { color: "red" } }, c.stack);
    }
  },
  created() {
    this.list !== null && this.modelValue !== null && nh.error(
      "modelValue and list props are mutually exclusive! Please set one or another."
    );
  },
  mounted() {
    if (this.error)
      return;
    const { $attrs: c, $el: y, componentStructure: l } = this;
    l.updated();
    const o = ch({
      $attrs: c,
      callBackBuilder: {
        manageAndEmit: (s) => Ah.call(this, s),
        emit: (s) => Cd.bind(this, s),
        manage: (s) => Td.call(this, s)
      }
    }), t = y.nodeType === 1 ? y : y.parentElement;
    this._sortable = new Ne(t, o), this.targetDomElement = t, t.__draggable_component__ = this;
  },
  updated() {
    this.componentStructure.updated();
  },
  beforeUnmount() {
    this._sortable !== void 0 && this._sortable.destroy();
  },
  computed: {
    realList() {
      const { list: c } = this;
      return c || this.modelValue;
    },
    getKey() {
      const { itemKey: c } = this;
      return typeof c == "function" ? c : (y) => y[c];
    }
  },
  watch: {
    $attrs: {
      handler(c) {
        const { _sortable: y } = this;
        !y || bd(c).forEach(([l, o]) => {
          y.option(l, o);
        });
      },
      deep: !0
    }
  },
  methods: {
    getUnderlyingVm(c) {
      return this.componentStructure.getUnderlyingVm(c) || null;
    },
    getUnderlyingPotencialDraggableComponent(c) {
      return c.__draggable_component__;
    },
    emitChanges(c) {
      Or(() => this.$emit("change", c));
    },
    alterList(c) {
      if (this.list) {
        c(this.list);
        return;
      }
      const y = [...this.modelValue];
      c(y), this.$emit("update:modelValue", y);
    },
    spliceList() {
      const c = (y) => y.splice(...arguments);
      this.alterList(c);
    },
    updatePosition(c, y) {
      const l = (o) => o.splice(y, 0, o.splice(c, 1)[0]);
      this.alterList(l);
    },
    getRelatedContextFromMoveEvent({ to: c, related: y }) {
      const l = this.getUnderlyingPotencialDraggableComponent(c);
      if (!l)
        return { component: l };
      const o = l.realList, t = { list: o, component: l };
      return c !== y && o ? { ...l.getUnderlyingVm(y) || {}, ...t } : t;
    },
    getVmIndexFromDomIndex(c) {
      return this.componentStructure.getVmIndexFromDomIndex(
        c,
        this.targetDomElement
      );
    },
    onDragStart(c) {
      this.context = this.getUnderlyingVm(c.item), c.item._underlying_vm_ = this.clone(this.context.element), Fl = c.item;
    },
    onDragAdd(c) {
      const y = c.item._underlying_vm_;
      if (y === void 0)
        return;
      Ol(c.item);
      const l = this.getVmIndexFromDomIndex(c.newIndex);
      this.spliceList(l, 0, y);
      const o = { element: y, newIndex: l };
      this.emitChanges({ added: o });
    },
    onDragRemove(c) {
      if (Qf(this.$el, c.item, c.oldIndex), c.pullMode === "clone") {
        Ol(c.clone);
        return;
      }
      const { index: y, element: l } = this.context;
      this.spliceList(y, 1);
      const o = { element: l, oldIndex: y };
      this.emitChanges({ removed: o });
    },
    onDragUpdate(c) {
      Ol(c.item), Qf(c.from, c.item, c.oldIndex);
      const y = this.context.index, l = this.getVmIndexFromDomIndex(c.newIndex);
      this.updatePosition(y, l);
      const o = { element: this.context.element, oldIndex: y, newIndex: l };
      this.emitChanges({ moved: o });
    },
    computeFutureIndex(c, y) {
      if (!c.element)
        return 0;
      const l = [...y.to.children].filter(
        (u) => u.style.display !== "none"
      ), o = l.indexOf(y.related), t = c.component.getVmIndexFromDomIndex(
        o
      );
      return l.indexOf(Fl) !== -1 || !y.willInsertAfter ? t : t + 1;
    },
    onDragMove(c, y) {
      const { move: l, realList: o } = this;
      if (!l || !o)
        return !0;
      const t = this.getRelatedContextFromMoveEvent(c), s = this.computeFutureIndex(t, c), u = {
        ...this.context,
        futureIndex: s
      }, d = {
        ...c,
        relatedContext: t,
        draggedContext: u
      };
      return l(d, y);
    },
    onDragEnd() {
      Fl = null;
    }
  }
});
function Eh({ t: c }) {
  return [
    {
      name: "main",
      title: c("menu.main"),
      list: [
        $l,
        Yl,
        Wl,
        jl,
        Vl,
        Ql,
        kl,
        Kl,
        Gl,
        Xl,
        Jl,
        _l,
        es,
        ts,
        ns,
        ss,
        us
      ]
    },
    {
      name: "aide",
      title: c("menu.aide"),
      list: [
        rs,
        ls,
        is,
        ql
      ]
    },
    {
      name: "layout",
      title: c("menu.layout"),
      list: [
        Zl,
        as,
        os
      ]
    }
  ];
}
const xs = nd, Lt = nd.factory();
let wd = null, Kf = Ji(null);
function hs(...c) {
  return wd(...c);
}
const Dd = (c) => {
  Kf.value = c;
  const y = zl(Kf);
  return wd = y.t, y;
};
Dd();
const bh = Pn({
  name: "FcDesigner",
  components: {
    draggable: As,
    DragForm: Lt.$form(),
    ViewForm: xs.$form()
  },
  props: ["menu", "height", "config", "mask", "locale", "field"],
  setup(c) {
    const { menu: y, height: l, mask: o, locale: t, field: s } = Hl(c);
    console.log("setup-height: ", l), console.log("setup-field: ", s);
    const u = Lv(), d = nl({ active: null });
    Sf("fcx", d), Sf("designer", u);
    const f = Qi(c, "config", {}), g = Qi(f.value, "baseRule", null), C = Qi(f.value, "componentRule", {}), x = Qi(f.value, "validateRule", null), D = Qi(f.value, "formRule", null), b = ro(() => {
      const p = l.value;
      return p ? xt.Number(p) ? `${p}px` : p : "100%";
    });
    let h = hs;
    t.value && (h = zl(t).t);
    const A = (...p) => h(...p), E = (p, T, ...M) => {
      if (T) {
        if (xt.Function(T))
          return T(...M);
        if (T.rule) {
          let N = T.rule(...M);
          return T.append && (N = [...N, ...p(...M)]), N;
        }
      }
      return p(...M);
    }, m = nl({
      cacheProps: {},
      moveRule: null,
      addRule: null,
      added: null,
      activeTab: "form",
      activeRule: null,
      children: Ji([]),
      menuList: y.value || Eh({ t: A }),
      showBaseRule: !1,
      visible: {
        preview: !1
      },
      t: A,
      preview: {
        state: !1,
        rule: [],
        option: {}
      },
      dragForm: Ji({
        rule: [],
        api: {}
      }),
      form: {
        rule: E(Ef, D.value, { t: A }),
        api: {},
        option: {
          form: {
            labelPosition: "top",
            size: "small"
          },
          submitBtn: !1
        },
        value: {
          form: {
            inline: !1,
            hideRequiredAsterisk: !1,
            labelPosition: "right",
            size: "small",
            labelWidth: "125px",
            formCreateSubmitBtn: !0,
            formCreateResetBtn: !1
          },
          submitBtn: !1
        }
      },
      baseForm: {
        rule: E(s.value || Qv, g.value, { t: A }),
        api: {},
        value: {},
        options: {
          form: {
            labelPosition: "top",
            size: "small"
          },
          submitBtn: !1,
          mounted: (p) => {
            p.activeRule = m.activeRule, p.setValue(p.options.formData || {});
          }
        }
      },
      validateForm: {
        rule: E(bf, x.value, { t: A }),
        api: {},
        value: [],
        options: {
          form: {
            labelPosition: "top",
            size: "small"
          },
          submitBtn: !1,
          mounted: (p) => {
            p.activeRule = m.activeRule, p.setValue(p.options.formData || {});
          }
        }
      },
      propsForm: {
        rule: [],
        api: {},
        value: {},
        options: {
          form: {
            labelPosition: "top",
            size: "small"
          },
          submitBtn: !1,
          mounted: (p) => {
            p.activeRule = m.activeRule, p.setValue(p.options.formData || {});
          }
        }
      }
    });
    rl(() => m.preview.state, function(p) {
      p || Or(() => {
        m.preview.rule = m.preview.option = null;
      });
    });
    let S = null;
    rl(() => t.value, (p) => {
      h = p ? zl(t).t : hs;
      const T = m.form.api.formData && m.form.api.formData(), M = m.baseForm.api.formData && m.baseForm.api.formData(), N = m.validateForm.api.formData && m.validateForm.api.formData();
      m.validateForm.rule = E(bf, x.value, { t: A }), m.baseForm.rule = E(s, g.value, { t: A }), m.form.rule = E(Ef, D.value, { t: A }), m.cacheProps = {};
      const U = m.activeRule;
      let F = null;
      U && (F = m.propsForm.api.formData && m.propsForm.api.formData(), m.propsForm.rule = m.cacheProps[U._id] = E(U.config.config.props, C.value && C.value[U.config.config.name], U, {
        t: A,
        api: m.dragForm.api
      })), Or(() => {
        T && m.form.api.setValue(T), M && m.baseForm.api.setValue(M), N && m.validateForm.api.setValue(N), F && m.propsForm.api.setValue(F);
      });
    });
    const w = {
      unWatchActiveRule() {
        S && S(), S = null;
      },
      watchActiveRule() {
        w.unWatchActiveRule(), S = rl(() => m.activeRule, function(p) {
          p && w.updateRuleFormData();
        }, { deep: !0, flush: "post" });
      },
      makeChildren(p) {
        return nl({ children: p }).children;
      },
      addMenu(p) {
        if (!p.name || !p.list)
          return;
        let T = !0;
        m.menuList.forEach((M, N) => {
          M.name === p.name && (m.menuList[N] = p, T = !1);
        }), T && m.menuList.push(p);
      },
      removeMenu(p) {
        [...m.menuList].forEach((T, M) => {
          T.name === p && m.menuList.splice(M, 1);
        });
      },
      setMenuItem(p, T) {
        m.menuList.forEach((M) => {
          M.name === p && (M.list = T);
        });
      },
      appendMenuItem(p, T) {
        m.menuList.forEach((M) => {
          M.name === p && M.list.push(...Array.isArray(T) ? T : [T]);
        });
      },
      removeMenuItem(p) {
        m.menuList.forEach((T) => {
          let M;
          xt.String(p) ? [...T.list].forEach((N, U) => {
            N.name === p && T.list.splice(U, 1);
          }) : (M = T.list.indexOf(p)) > -1 && T.list.splice(M, 1);
        });
      },
      addComponent(p) {
        Array.isArray(p) ? p.forEach((T) => {
          cr[T.name] = T;
        }) : cr[p.name] = p;
      },
      getParent(p) {
        let T = p.__fc__.parent.rule;
        const M = T.config;
        return M && M.config.inside && (p = T, T = T.__fc__.parent.rule), { root: T, parent: p };
      },
      makeDrag(p, T, M, N) {
        return {
          type: "DragBox",
          wrap: {
            show: !1
          },
          col: {
            show: !1
          },
          inject: !0,
          props: {
            rule: {
              props: {
                tag: "el-col",
                group: p === !0 ? "default" : p,
                ghostClass: "ghost",
                animation: 150,
                handle: "._fc-drag-btn",
                emptyInsertThreshold: 0,
                direction: "vertical",
                itemKey: "type"
              }
            },
            tag: T
          },
          children: M,
          on: N
        };
      },
      clearDragRule() {
        w.setRule([]);
      },
      makeDragRule(p) {
        return w.makeChildren([w.makeDrag(!0, "draggable", p, {
          add: (T, M) => w.dragAdd(p, M),
          end: (T, M) => w.dragEnd(p, M),
          start: (T, M) => w.dragStart(p, M),
          unchoose: (T, M) => w.dragUnchoose(p, M)
        })]);
      },
      previewFc() {
        m.preview.state = !0, m.preview.rule = w.getRule(), m.preview.option = w.getOption();
      },
      getRule() {
        return w.parseRule(vr(m.dragForm.api.rule[0].children));
      },
      getJson() {
        return Lt.toJson(w.getRule());
      },
      getOption() {
        const p = vr(m.form.value);
        return p.submitBtn = p._submitBtn, p.resetBtn = p._resetBtn, typeof p.submitBtn == "object" ? p.submitBtn.show = p.form.formCreateSubmitBtn : p.submitBtn = {
          show: p.form.formCreateSubmitBtn,
          innerText: A("form.submit")
        }, typeof p.resetBtn == "object" ? p.resetBtn.show = p.form.formCreateResetBtn : p.resetBtn = {
          show: p.form.formCreateResetBtn,
          innerText: A("form.reset")
        }, delete p.form.formCreateSubmitBtn, delete p.form.formCreateResetBtn, delete p._submitBtn, delete p._resetBtn, p;
      },
      getOptions() {
        w.getOption();
      },
      setRule(p) {
        p || (p = []), m.children = Ji(w.loadRule(xt.String(p) ? Lt.parseJson(p) : vr(p))), w.clearActiveRule(), m.dragForm.rule = w.makeDragRule(w.makeChildren(m.children));
      },
      setBaseRuleConfig(p, T) {
        g.value = { rule: p, append: T }, m.baseForm.rule = E(s, g.value, { t: A });
      },
      setComponentRuleConfig(p, T, M) {
        C.value[p] = { rule: T, append: M }, m.cacheProps = {};
        const N = m.activeRule;
        if (N) {
          const U = m.propsForm.api.formData && m.propsForm.api.formData();
          m.propsForm.rule = m.cacheProps[N._id] = E(N.config.config.props, C.value && C.value[N.config.config.name], N, {
            t: A,
            api: m.dragForm.api
          }), Or(() => {
            U && m.propsForm.api.setValue(U);
          });
        }
      },
      setValidateRuleConfig(p, T) {
        x.value = { rule: p, append: T }, m.validateForm.rule = E(s, x.value, { t: A });
      },
      setFormRuleConfig(p, T) {
        D.value = { rule: p, append: T }, m.form.rule = E(s, D.value, { t: A });
      },
      clearActiveRule() {
        m.activeRule = null, m.activeTab = "form";
      },
      setOption(p) {
        let T = { ...p };
        T.form.formCreateSubmitBtn = typeof T.submitBtn == "object" ? T.submitBtn.show === void 0 ? !0 : !!T.submitBtn.show : !!T.submitBtn, T.form.formCreateResetBtn = typeof T.resetBtn == "object" ? !!T.resetBtn.show : !!T.resetBtn, T._resetBtn = T.resetBtn, T.resetBtn = !1, T._submitBtn = T.submitBtn, T.submitBtn = !1, m.form.value = T;
      },
      setOptions(p) {
        w.setOption(p);
      },
      loadRule(p) {
        const T = [];
        return p.forEach((M) => {
          if (xt.String(M))
            return T.push(M);
          const N = cr[M._fc_drag_tag] || cr[M.type];
          N && N.loadRule && N.loadRule(M);
          const U = M.children;
          if (M.children = [], M.control && (M._control = M.control, delete M.control), N) {
            if (M = w.makeRule(N, M), U) {
              let F = M.children[0].children;
              N.drag && (F = F[0].children), F.push(...w.loadRule(U));
            }
          } else
            U && (M.children = w.loadRule(U));
          T.push(M);
        }), T;
      },
      parseRule(p) {
        return [...p].reduce((T, M) => xt.String(M) ? (T.push(M), T) : M.type === "DragBox" ? (T.push(...w.parseRule(M.children)), T) : M.type === "DragTool" && (M = M.children[0], M.type === "DragBox") ? (T.push(...w.parseRule(M.children)), T) : (M && (M = { ...M }, M.children.length && (M.children = w.parseRule(M.children)), delete M._id, delete M.key, delete M.component, M.config && (M.config.config && M.config.config.parseRule && M.config.config.parseRule(M), delete M.config.config), M.effect && (delete M.effect._fc, delete M.effect._fc_tool), M._control && (M.control = M._control, delete M._control), Object.keys(M).filter((N) => Array.isArray(M[N]) && M[N].length === 0 || xt.Object(M[N]) && Object.keys(M[N]).length === 0).forEach((N) => {
          delete M[N];
        }), T.push(M)), T), []);
      },
      baseChange(p, T, M, N) {
        var U, F, B;
        m.activeRule && N[m.activeRule._id] === m.activeRule && (w.unWatchActiveRule(), m.activeRule[p] = T, w.watchActiveRule(), (B = (F = (U = m.activeRule.config.config) == null ? void 0 : U.watch) == null ? void 0 : F["$" + p]) == null || B.call(F, {
          field: p,
          value: T,
          api: N,
          rule: m.activeRule
        }));
      },
      propRemoveField(p, T, M) {
        var N, U, F;
        if (m.activeRule && M[m.activeRule._id] === m.activeRule) {
          w.unWatchActiveRule();
          const B = p;
          if (m.dragForm.api.sync(m.activeRule), p.indexOf("formCreate") === 0) {
            if (p = p.replace("formCreate", ""), !p)
              return;
            p = Ul(p), p.indexOf("effect") === 0 && p.indexOf(">") > -1 ? delete m.activeRule.effect[p.split(">")[1]] : p.indexOf("props") === 0 && p.indexOf(">") > -1 ? delete m.activeRule.props[p.split(">")[1]] : p.indexOf("attrs") === 0 && p.indexOf(">") > -1 ? delete m.activeRule.attrs[p.split(">")[1]] : p === "child" ? delete m.activeRule.children[0] : p && (m.activeRule[p] = void 0);
          } else
            delete m.activeRule.props[p];
          w.watchActiveRule(), (F = (U = (N = m.activeRule.config.config) == null ? void 0 : N.watch) == null ? void 0 : U[B]) == null || F.call(U, {
            field: B,
            value: void 0,
            api: M,
            rule: m.activeRule
          });
        }
      },
      propChange(p, T, M, N) {
        var U, F, B;
        if (m.activeRule && N[m.activeRule._id] === m.activeRule) {
          w.unWatchActiveRule();
          const P = p;
          if (p.indexOf("formCreate") === 0) {
            if (p = p.replace("formCreate", ""), !p)
              return;
            p = Ul(p), p.indexOf("effect") === 0 && p.indexOf(">") > -1 ? m.activeRule.effect[p.split(">")[1]] = T : p.indexOf("props") === 0 && p.indexOf(">") > -1 ? m.activeRule.props[p.split(">")[1]] = T : p.indexOf("attrs") === 0 && p.indexOf(">") > -1 ? m.activeRule.attrs[p.split(">")[1]] = T : p === "child" ? m.activeRule.children[0] = T : m.activeRule[p] = T;
          } else
            m.activeRule.props[p] = T;
          w.watchActiveRule(), (B = (F = (U = m.activeRule.config.config) == null ? void 0 : U.watch) == null ? void 0 : F[P]) == null || B.call(F, {
            field: P,
            value: T,
            api: N,
            rule: m.activeRule
          });
        }
      },
      validateChange(p) {
        !m.activeRule || m.validateForm.api[m.activeRule._id] !== m.activeRule || (m.activeRule.validate = p.validate || [], m.dragForm.api.refreshValidate(), m.dragForm.api.nextTick(() => {
          m.dragForm.api.clearValidateState(m.activeRule.__fc__.id);
        }));
      },
      toolActive(p) {
        w.unWatchActiveRule(), m.activeRule && (delete m.propsForm.api[m.activeRule._id], delete m.baseForm.api[m.activeRule._id], delete m.validateForm.api[m.activeRule._id], delete m.dragForm.api.activeRule), m.activeRule = p, m.dragForm.api.activeRule = p, Or(() => {
          m.activeTab = "props", Or(() => {
            m.propsForm.api[m.activeRule._id] = m.activeRule, m.baseForm.api[m.activeRule._id] = m.activeRule, m.validateForm.api[m.activeRule._id] = m.activeRule;
          });
        }), m.cacheProps[p._id] || (m.cacheProps[p._id] = E(p.config.config.props, C.value && C.value[p.config.config.name], p, {
          t: A,
          api: m.dragForm.api
        })), m.propsForm.rule = m.cacheProps[p._id], w.updateRuleFormData(), w.watchActiveRule();
      },
      updateRuleFormData() {
        const p = m.activeRule, T = { ...p.props, formCreateChild: vr(p.children[0]) };
        Object.keys(p).forEach((M) => {
          ["effect", "config", "payload", "id", "type"].indexOf(M) < 0 && (T["formCreate" + io(M)] = vr(p[M]));
        }), ["props", "effect", "attrs"].forEach((M) => {
          p[M] && Object.keys(p[M]).forEach((N) => {
            T["formCreate" + io(M) + ">" + N] = vr(p[M][N]);
          });
        }), m.propsForm.value = T, m.showBaseRule = rd(p, "field") && p.input !== !1 && (!f.value || f.value.showBaseForm !== !1), m.showBaseRule && (m.baseForm.value = {
          field: p.field,
          title: p.title || "",
          info: p.info,
          _control: p._control
        }, m.validateForm.value = { validate: p.validate ? [...p.validate] : [] }, m.dragForm.api.refreshValidate(), m.dragForm.api.nextTick(() => {
          m.dragForm.api.clearValidateState(p.__fc__.id);
        }));
      },
      dragStart(p) {
        m.moveRule = p, m.added = !1;
      },
      dragUnchoose(p, T) {
        m.addRule = {
          children: p,
          oldIndex: T.oldIndex
        };
      },
      dragAdd(p, T) {
        const M = T.newIndex, N = T.item._underlying_vm_;
        if (!N || N.__fc__) {
          if (m.addRule) {
            const U = m.addRule.children.splice(m.addRule.oldIndex, 1);
            p.splice(M, 0, U[0]);
          }
        } else {
          const U = w.makeRule(cr[N.name]);
          p.splice(M, 0, U);
        }
        m.added = !0;
      },
      dragEnd(p, { newIndex: T, oldIndex: M }) {
        if (!m.added && !(m.moveRule === p && T === M)) {
          const N = m.moveRule.splice(M, 1);
          p.splice(T, 0, N[0]);
        }
        m.moveRule = null, m.addRule = null, m.added = !1;
      },
      makeRule(p, T) {
        const M = T || p.rule({ t: A });
        M.config = { config: p }, p.component && (M.component = Zf(p.component)), M.effect || (M.effect = {}), M.effect._fc = !0, M._fc_drag_tag = p.name;
        let N;
        if (p.drag && M.children.push(N = w.makeDrag(p.drag, M.type, w.makeChildren([]), {
          end: (F, B) => w.dragEnd(F.self.children, B),
          add: (F, B) => w.dragAdd(F.self.children, B),
          start: (F, B) => w.dragStart(F.self.children, B),
          unchoose: (F, B) => w.dragUnchoose(F.self.children, B)
        })), p.children && !T)
          for (let F = 0; F < (p.childrenLen || 1); F++) {
            const B = w.makeRule(cr[p.children]);
            (N || M).children.push(B);
          }
        const U = o.value !== void 0 ? o.value !== !1 : p.mask !== !1;
        return p.inside ? (M.children = w.makeChildren([{
          type: "DragTool",
          props: {
            dragBtn: p.dragBtn !== !1,
            children: p.children,
            mask: U
          },
          effect: {
            _fc_tool: !0
          },
          inject: !0,
          on: {
            delete: ({ self: F }) => {
              const B = w.getParent(F).parent;
              B.__fc__.rm(), u.emit("delete", B), w.clearActiveRule();
            },
            create: ({ self: F }) => {
              const B = w.getParent(F);
              u.emit("create", B.parent), B.root.children.splice(B.root.children.indexOf(B.parent) + 1, 0, w.makeRule(B.parent.config.config));
            },
            addChild: ({ self: F }) => {
              const B = w.getParent(F), P = B.parent.config.config, z = cr[P.children];
              !z || (P.drag ? B.parent.children[0] : B.parent).children[0].children.push(w.makeRule(z));
            },
            copy: ({ self: F }) => {
              const B = w.getParent(F);
              u.emit("copy", B.parent), B.root.children.splice(B.root.children.indexOf(B.parent) + 1, 0, Lt.copyRule(B.parent));
            },
            active: ({ self: F }) => {
              const B = w.getParent(F);
              u.emit("active", B.parent), w.toolActive(B.parent);
            }
          },
          children: M.children
        }]), M) : {
          type: "DragTool",
          props: {
            dragBtn: p.dragBtn !== !1,
            children: p.children,
            mask: U
          },
          effect: {
            _fc_tool: !0
          },
          inject: !0,
          on: {
            delete: ({ self: F }) => {
              u.emit("delete", F.children[0]), F.__fc__.rm(), w.clearActiveRule();
            },
            create: ({ self: F }) => {
              u.emit("create", F.children[0]);
              const B = w.getParent(F);
              B.root.children.splice(B.root.children.indexOf(B.parent) + 1, 0, w.makeRule(F.children[0].config.config));
            },
            addChild: ({ self: F }) => {
              const B = F.children[0].config.config, P = cr[B.children];
              !P || (B.drag ? F.children[0] : F).children[0].children.push(w.makeRule(P));
            },
            copy: ({ self: F }) => {
              u.emit("copy", F.children[0]);
              const B = w.getParent(F);
              B.root.children.splice(B.root.children.indexOf(B.parent) + 1, 0, Lt.copyRule(B.parent));
            },
            active: ({ self: F }) => {
              u.emit("active", F.children[0]), w.toolActive(F.children[0]);
            }
          },
          children: w.makeChildren([M])
        };
      }
    };
    return m.dragForm.rule = w.makeDragRule(w.makeChildren(m.children)), {
      ...Hl(m),
      ...w,
      dragHeight: b,
      t: A
    };
  },
  created() {
    document.body.ondrop = (c) => {
      c.preventDefault(), c.stopPropagation();
    };
  }
}), Ch = { class: "_fc-l-title" }, Th = { class: "_fc-l-item" }, wh = { class: "_fc-l-icon" }, Dh = { class: "_fc-l-name" }, Mh = /* @__PURE__ */ ft("i", { class: "fc-icon icon-preview" }, null, -1), Rh = /* @__PURE__ */ ft("i", { class: "fc-icon icon-delete" }, null, -1), Ph = { class: "_fc-m-drag" };
function Ih(c, y, l, o, t, s) {
  const u = ut("draggable"), d = ut("el-aside"), f = ut("el-button"), g = ut("el-popconfirm"), C = ut("el-header"), x = ut("DragForm"), D = ut("ElMain"), b = ut("ElContainer"), h = ut("ElDivider"), A = ut("ElAside"), E = ut("ViewForm"), m = ut("ElDialog");
  return tt(), Hn(b, {
    class: "_fc-designer",
    style: Nv("height:" + c.dragHeight)
  }, {
    default: qe(() => [
      Je(D, null, {
        default: qe(() => [
          Je(b, { style: { height: "100%" } }, {
            default: qe(() => [
              Je(d, {
                class: "_fc-l",
                width: "266px"
              }, {
                default: qe(() => [
                  (tt(!0), Gt(_f, null, ed(c.menuList, (S, w) => (tt(), Gt("div", {
                    key: w,
                    class: "_fc-l-group"
                  }, [
                    ft("h4", Ch, on(S.title), 1),
                    Je(u, {
                      group: { name: "default", pull: "clone", put: !1 },
                      sort: !1,
                      itemKey: "name",
                      list: S.list
                    }, {
                      item: qe(({ element: p }) => [
                        ft("div", Th, [
                          ft("div", wh, [
                            ft("i", {
                              class: Ko(["fc-icon", p.icon || "icon-input"])
                            }, null, 2)
                          ]),
                          ft("span", Dh, on(c.t("components." + p.name + ".name") || p.label), 1)
                        ])
                      ]),
                      _: 2
                    }, 1032, ["list"])
                  ]))), 128))
                ]),
                _: 1
              }),
              Je(b, { class: "_fc-m" }, {
                default: qe(() => [
                  Je(C, {
                    class: "_fc-m-tools",
                    height: "45"
                  }, {
                    default: qe(() => [
                      td(c.$slots, "handle"),
                      Je(f, {
                        type: "primary",
                        plain: "",
                        round: "",
                        size: "small",
                        onClick: c.previewFc
                      }, {
                        default: qe(() => [
                          Mh,
                          Kn(" " + on(c.t("designer.preview")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      Je(g, {
                        title: c.t("designer.clearConfirmTitle"),
                        width: "200px",
                        "confirm-button-text": c.t("designer.clearConfirm"),
                        "cancel-button-text": c.t("designer.clearCancel"),
                        onConfirm: c.clearDragRule
                      }, {
                        reference: qe(() => [
                          Je(f, {
                            type: "danger",
                            plain: "",
                            round: "",
                            size: "small"
                          }, {
                            default: qe(() => [
                              Rh,
                              Kn(on(c.t("designer.clear")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["title", "confirm-button-text", "cancel-button-text", "onConfirm"])
                    ]),
                    _: 3
                  }),
                  Je(D, { style: { background: "#F5F5F5", padding: "20px" } }, {
                    default: qe(() => [
                      ft("div", Ph, [
                        Je(x, {
                          rule: c.dragForm.rule,
                          option: c.form.value,
                          api: c.dragForm.api,
                          "onUpdate:api": y[0] || (y[0] = (S) => c.dragForm.api = S)
                        }, null, 8, ["rule", "option", "api"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 3
              }),
              !c.config || c.config.showConfig !== !1 ? (tt(), Hn(A, {
                key: 0,
                class: "_fc-r",
                width: "320px"
              }, {
                default: qe(() => [
                  Je(b, { style: { height: "100%" } }, {
                    default: qe(() => [
                      Je(C, {
                        height: "40px",
                        class: "_fc-r-tabs"
                      }, {
                        default: qe(() => [
                          !!c.activeRule || c.config && c.config.showFormConfig === !1 ? (tt(), Gt("div", {
                            key: 0,
                            class: Ko(["_fc-r-tab", { active: c.activeTab === "props" }]),
                            onClick: y[1] || (y[1] = (S) => c.activeTab = "props")
                          }, on(c.t("designer.config.component")), 3)) : vn("", !0),
                          !c.config || c.config.showFormConfig !== !1 ? (tt(), Gt("div", {
                            key: 1,
                            class: Ko(["_fc-r-tab", { active: c.activeTab === "form" && !!c.activeRule }]),
                            onClick: y[2] || (y[2] = (S) => c.activeTab = "form")
                          }, on(c.t("designer.config.form")), 3)) : vn("", !0)
                        ]),
                        _: 1
                      }),
                      !c.config || c.config.showFormConfig !== !1 ? Wo((tt(), Hn(D, { key: 0 }, {
                        default: qe(() => [
                          Je(x, {
                            rule: c.form.rule,
                            option: c.form.option,
                            modelValue: c.form.value.form,
                            "onUpdate:modelValue": y[3] || (y[3] = (S) => c.form.value.form = S),
                            api: c.form.api,
                            "onUpdate:api": y[4] || (y[4] = (S) => c.form.api = S)
                          }, null, 8, ["rule", "option", "modelValue", "api"])
                        ]),
                        _: 1
                      }, 512)), [
                        [jo, c.activeTab === "form"]
                      ]) : vn("", !0),
                      Wo((tt(), Hn(D, {
                        style: { padding: "0 20px" },
                        key: c.activeRule ? c.activeRule._id : ""
                      }, {
                        default: qe(() => [
                          ft("div", null, [
                            c.showBaseRule ? (tt(), Hn(h, { key: 0 }, {
                              default: qe(() => [
                                Kn(on(c.t("designer.config.rule")), 1)
                              ]),
                              _: 1
                            })) : vn("", !0),
                            Wo(Je(x, {
                              api: c.baseForm.api,
                              "onUpdate:api": y[5] || (y[5] = (S) => c.baseForm.api = S),
                              rule: c.baseForm.rule,
                              option: c.baseForm.options,
                              modelValue: c.baseForm.value,
                              onChange: c.baseChange
                            }, null, 8, ["api", "rule", "option", "modelValue", "onChange"]), [
                              [jo, c.showBaseRule]
                            ]),
                            Je(h, null, {
                              default: qe(() => [
                                Kn(on(c.t("designer.config.props")), 1)
                              ]),
                              _: 1
                            }),
                            Je(x, {
                              api: c.propsForm.api,
                              "onUpdate:api": y[6] || (y[6] = (S) => c.propsForm.api = S),
                              rule: c.propsForm.rule,
                              option: c.propsForm.options,
                              modelValue: c.propsForm.value,
                              onChange: c.propChange,
                              onRemoveField: c.propRemoveField
                            }, null, 8, ["api", "rule", "option", "modelValue", "onChange", "onRemoveField"]),
                            c.showBaseRule ? (tt(), Hn(h, { key: 1 }, {
                              default: qe(() => [
                                Kn(on(c.t("designer.config.validate")), 1)
                              ]),
                              _: 1
                            })) : vn("", !0),
                            Wo(Je(x, {
                              api: c.validateForm.api,
                              "onUpdate:api": y[7] || (y[7] = (S) => c.validateForm.api = S),
                              rule: c.validateForm.rule,
                              option: c.validateForm.options,
                              modelValue: c.validateForm.value,
                              "onUpdate:modelValue": c.validateChange
                            }, null, 8, ["api", "rule", "option", "modelValue", "onUpdate:modelValue"]), [
                              [jo, c.showBaseRule]
                            ])
                          ])
                        ]),
                        _: 1
                      })), [
                        [jo, c.activeTab === "props"]
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : vn("", !0),
              Je(m, {
                modelValue: c.preview.state,
                "onUpdate:modelValue": y[8] || (y[8] = (S) => c.preview.state = S),
                width: "800px",
                "append-to-body": ""
              }, {
                default: qe(() => [
                  c.preview.state ? (tt(), Hn(E, {
                    key: 0,
                    rule: c.preview.rule,
                    option: c.preview.option
                  }, null, 8, ["rule", "option"])) : vn("", !0)
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            _: 3
          })
        ]),
        _: 3
      })
    ]),
    _: 3
  }, 8, ["style"]);
}
const yr = /* @__PURE__ */ mr(bh, [["render", Ih]]);
let Lh = 1;
const Nh = Pn({
  name: "DragTool",
  props: ["dragBtn", "children", "unique", "mask"],
  setup(c) {
    const { unique: y } = Hl(c), l = ro(() => y.value || Lh++), o = Ov("fcx");
    return {
      id: l,
      state: o
    };
  },
  methods: {
    active() {
      this.state.active !== this.id && (this.state.active = this.id, this.$emit("active"));
    }
  },
  beforeDestroy() {
    this.state = {};
  }
}), Oh = {
  key: 0,
  class: "drag-mask"
}, Fh = { class: "drag-l" }, Bh = {
  key: 0,
  class: "drag-btn _fc-drag-btn",
  style: { cursor: "move" }
}, Hh = /* @__PURE__ */ ft("i", { class: "fc-icon icon-move" }, null, -1), Uh = [
  Hh
], zh = { class: "drag-r" }, Wh = /* @__PURE__ */ ft("i", { class: "fc-icon icon-add" }, null, -1), jh = [
  Wh
], $h = /* @__PURE__ */ ft("i", { class: "fc-icon icon-copy" }, null, -1), Yh = [
  $h
], Vh = /* @__PURE__ */ ft("i", { class: "fc-icon icon-add-child" }, null, -1), Qh = [
  Vh
], Gh = /* @__PURE__ */ ft("i", { class: "fc-icon icon-delete" }, null, -1), kh = [
  Gh
];
function Kh(c, y, l, o, t, s) {
  return tt(), Gt("div", {
    class: Ko(["drag-tool", { active: c.state.active === c.id }]),
    onClick: y[4] || (y[4] = Fv((...u) => c.active && c.active(...u), ["stop"]))
  }, [
    c.mask ? (tt(), Gt("div", Oh)) : vn("", !0),
    ft("div", Fh, [
      c.state.active === c.id && c.dragBtn !== !1 ? (tt(), Gt("div", Bh, Uh)) : vn("", !0)
    ]),
    ft("div", zh, [
      ft("div", {
        class: "drag-btn",
        onClick: y[0] || (y[0] = (u) => c.$emit("create"))
      }, jh),
      ft("div", {
        class: "drag-btn",
        onClick: y[1] || (y[1] = (u) => c.$emit("copy"))
      }, Yh),
      c.children ? (tt(), Gt("div", {
        key: 0,
        class: "drag-btn",
        onClick: y[2] || (y[2] = (u) => c.$emit("addChild"))
      }, Qh)) : vn("", !0),
      ft("div", {
        class: "drag-btn drag-btn-danger",
        onClick: y[3] || (y[3] = (u) => c.$emit("delete"))
      }, kh)
    ]),
    td(c.$slots, "default")
  ], 2);
}
const Xh = /* @__PURE__ */ mr(Nh, [["render", Kh]]);
var Jh = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Bl = { exports: {} }, Xf;
function Md() {
  return Xf || (Xf = 1, function(c, y) {
    (function(l, o) {
      c.exports = o();
    })(Jh, function() {
      var l = navigator.userAgent, o = navigator.platform, t = /gecko\/\d/i.test(l), s = /MSIE \d/.test(l), u = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(l), d = /Edge\/(\d+)/.exec(l), f = s || u || d, g = f && (s ? document.documentMode || 6 : +(d || u)[1]), C = !d && /WebKit\//.test(l), x = C && /Qt\/\d+\.\d+/.test(l), D = !d && /Chrome\/(\d+)/.exec(l), b = D && +D[1], h = /Opera\//.test(l), A = /Apple Computer/.test(navigator.vendor), E = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(l), m = /PhantomJS/.test(l), S = A && (/Mobile\/\w+/.test(l) || navigator.maxTouchPoints > 2), w = /Android/.test(l), p = S || w || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(l), T = S || /Mac/.test(o), M = /\bCrOS\b/.test(l), N = /win/i.test(o), U = h && l.match(/Version\/(\d*\.\d*)/);
      U && (U = Number(U[1])), U && U >= 15 && (h = !1, C = !0);
      var F = T && (x || h && (U == null || U < 12.11)), B = t || f && g >= 9;
      function P(e) {
        return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*");
      }
      var z = function(e, n) {
        var i = e.className, r = P(n).exec(i);
        if (r) {
          var a = i.slice(r.index + r[0].length);
          e.className = i.slice(0, r.index) + (a ? r[1] + a : "");
        }
      };
      function H(e) {
        for (var n = e.childNodes.length; n > 0; --n)
          e.removeChild(e.firstChild);
        return e;
      }
      function $(e, n) {
        return H(e).appendChild(n);
      }
      function I(e, n, i, r) {
        var a = document.createElement(e);
        if (i && (a.className = i), r && (a.style.cssText = r), typeof n == "string")
          a.appendChild(document.createTextNode(n));
        else if (n)
          for (var v = 0; v < n.length; ++v)
            a.appendChild(n[v]);
        return a;
      }
      function Y(e, n, i, r) {
        var a = I(e, n, i, r);
        return a.setAttribute("role", "presentation"), a;
      }
      var Q;
      document.createRange ? Q = function(e, n, i, r) {
        var a = document.createRange();
        return a.setEnd(r || e, i), a.setStart(e, n), a;
      } : Q = function(e, n, i) {
        var r = document.body.createTextRange();
        try {
          r.moveToElementText(e.parentNode);
        } catch {
          return r;
        }
        return r.collapse(!0), r.moveEnd("character", i), r.moveStart("character", n), r;
      };
      function K(e, n) {
        if (n.nodeType == 3 && (n = n.parentNode), e.contains)
          return e.contains(n);
        do
          if (n.nodeType == 11 && (n = n.host), n == e)
            return !0;
        while (n = n.parentNode);
      }
      function q(e) {
        var n = e.ownerDocument || e, i;
        try {
          i = e.activeElement;
        } catch {
          i = n.body || null;
        }
        for (; i && i.shadowRoot && i.shadowRoot.activeElement; )
          i = i.shadowRoot.activeElement;
        return i;
      }
      function X(e, n) {
        var i = e.className;
        P(n).test(i) || (e.className += (i ? " " : "") + n);
      }
      function _(e, n) {
        for (var i = e.split(" "), r = 0; r < i.length; r++)
          i[r] && !P(i[r]).test(n) && (n += " " + i[r]);
        return n;
      }
      var le = function(e) {
        e.select();
      };
      S ? le = function(e) {
        e.selectionStart = 0, e.selectionEnd = e.value.length;
      } : f && (le = function(e) {
        try {
          e.select();
        } catch {
        }
      });
      function Se(e) {
        return e.display.wrapper.ownerDocument;
      }
      function ve(e) {
        return ce(e.display.wrapper);
      }
      function ce(e) {
        return e.getRootNode ? e.getRootNode() : e.ownerDocument;
      }
      function ae(e) {
        return Se(e).defaultView;
      }
      function re(e) {
        var n = Array.prototype.slice.call(arguments, 1);
        return function() {
          return e.apply(null, n);
        };
      }
      function se(e, n, i) {
        n || (n = {});
        for (var r in e)
          e.hasOwnProperty(r) && (i !== !1 || !n.hasOwnProperty(r)) && (n[r] = e[r]);
        return n;
      }
      function pe(e, n, i, r, a) {
        n == null && (n = e.search(/[^\s\u00a0]/), n == -1 && (n = e.length));
        for (var v = r || 0, R = a || 0; ; ) {
          var L = e.indexOf("	", v);
          if (L < 0 || L >= n)
            return R + (n - v);
          R += L - v, R += i - R % i, v = L + 1;
        }
      }
      var Pe = function() {
        this.id = null, this.f = null, this.time = 0, this.handler = re(this.onTimeout, this);
      };
      Pe.prototype.onTimeout = function(e) {
        e.id = 0, e.time <= +new Date() ? e.f() : setTimeout(e.handler, e.time - +new Date());
      }, Pe.prototype.set = function(e, n) {
        this.f = n;
        var i = +new Date() + e;
        (!this.id || i < this.time) && (clearTimeout(this.id), this.id = setTimeout(this.handler, e), this.time = i);
      };
      function be(e, n) {
        for (var i = 0; i < e.length; ++i)
          if (e[i] == n)
            return i;
        return -1;
      }
      var je = 50, Ft = { toString: function() {
        return "CodeMirror.Pass";
      } }, Nt = { scroll: !1 }, ot = { origin: "*mouse" }, Et = { origin: "+move" };
      function Bt(e, n, i) {
        for (var r = 0, a = 0; ; ) {
          var v = e.indexOf("	", r);
          v == -1 && (v = e.length);
          var R = v - r;
          if (v == e.length || a + R >= n)
            return r + Math.min(R, n - a);
          if (a += v - r, a += i - a % i, r = v + 1, a >= n)
            return r;
        }
      }
      var dt = [""];
      function Kt(e) {
        for (; dt.length <= e; )
          dt.push(Ue(dt) + " ");
        return dt[e];
      }
      function Ue(e) {
        return e[e.length - 1];
      }
      function Ht(e, n) {
        for (var i = [], r = 0; r < e.length; r++)
          i[r] = n(e[r], r);
        return i;
      }
      function Ar(e, n, i) {
        for (var r = 0, a = i(n); r < e.length && i(e[r]) <= a; )
          r++;
        e.splice(r, 0, n);
      }
      function yn() {
      }
      function hn(e, n) {
        var i;
        return Object.create ? i = Object.create(e) : (yn.prototype = e, i = new yn()), n && se(n, i), i;
      }
      var In = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
      function An(e) {
        return /\w/.test(e) || e > "\x80" && (e.toUpperCase() != e.toLowerCase() || In.test(e));
      }
      function jt(e, n) {
        return n ? n.source.indexOf("\\w") > -1 && An(e) ? !0 : n.test(e) : An(e);
      }
      function xn(e) {
        for (var n in e)
          if (e.hasOwnProperty(n) && e[n])
            return !1;
        return !0;
      }
      var bt = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
      function Ke(e) {
        return e.charCodeAt(0) >= 768 && bt.test(e);
      }
      function Xt(e, n, i) {
        for (; (i < 0 ? n > 0 : n < e.length) && Ke(e.charAt(n)); )
          n += i;
        return n;
      }
      function We(e, n, i) {
        for (var r = n > i ? -1 : 1; ; ) {
          if (n == i)
            return n;
          var a = (n + i) / 2, v = r < 0 ? Math.ceil(a) : Math.floor(a);
          if (v == n)
            return e(v) ? n : i;
          e(v) ? i = v : n = v + r;
        }
      }
      function Ce(e, n, i, r) {
        if (!e)
          return r(n, i, "ltr", 0);
        for (var a = !1, v = 0; v < e.length; ++v) {
          var R = e[v];
          (R.from < i && R.to > n || n == i && R.to == n) && (r(Math.max(R.from, n), Math.min(R.to, i), R.level == 1 ? "rtl" : "ltr", v), a = !0);
        }
        a || r(n, i, "ltr");
      }
      var me = null;
      function Oe(e, n, i) {
        var r;
        me = null;
        for (var a = 0; a < e.length; ++a) {
          var v = e[a];
          if (v.from < n && v.to > n)
            return a;
          v.to == n && (v.from != v.to && i == "before" ? r = a : me = a), v.from == n && (v.from != v.to && i != "before" ? r = a : me = a);
        }
        return r != null ? r : me;
      }
      var Ee = function() {
        var e = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN", n = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";
        function i(W) {
          return W <= 247 ? e.charAt(W) : 1424 <= W && W <= 1524 ? "R" : 1536 <= W && W <= 1785 ? n.charAt(W - 1536) : 1774 <= W && W <= 2220 ? "r" : 8192 <= W && W <= 8203 ? "w" : W == 8204 ? "b" : "L";
        }
        var r = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/, a = /[stwN]/, v = /[LRr]/, R = /[Lb1n]/, L = /[1n]/;
        function O(W, V, k) {
          this.level = W, this.from = V, this.to = k;
        }
        return function(W, V) {
          var k = V == "ltr" ? "L" : "R";
          if (W.length == 0 || V == "ltr" && !r.test(W))
            return !1;
          for (var Z = W.length, J = [], te = 0; te < Z; ++te)
            J.push(i(W.charCodeAt(te)));
          for (var ie = 0, de = k; ie < Z; ++ie) {
            var he = J[ie];
            he == "m" ? J[ie] = de : de = he;
          }
          for (var xe = 0, ge = k; xe < Z; ++xe) {
            var Te = J[xe];
            Te == "1" && ge == "r" ? J[xe] = "n" : v.test(Te) && (ge = Te, Te == "r" && (J[xe] = "R"));
          }
          for (var Re = 1, Me = J[0]; Re < Z - 1; ++Re) {
            var Be = J[Re];
            Be == "+" && Me == "1" && J[Re + 1] == "1" ? J[Re] = "1" : Be == "," && Me == J[Re + 1] && (Me == "1" || Me == "n") && (J[Re] = Me), Me = Be;
          }
          for (var _e = 0; _e < Z; ++_e) {
            var Mt = J[_e];
            if (Mt == ",")
              J[_e] = "N";
            else if (Mt == "%") {
              var rt = void 0;
              for (rt = _e + 1; rt < Z && J[rt] == "%"; ++rt)
                ;
              for (var ln = _e && J[_e - 1] == "!" || rt < Z && J[rt] == "1" ? "1" : "N", en = _e; en < rt; ++en)
                J[en] = ln;
              _e = rt - 1;
            }
          }
          for (var ht = 0, tn = k; ht < Z; ++ht) {
            var Ot = J[ht];
            tn == "L" && Ot == "1" ? J[ht] = "L" : v.test(Ot) && (tn = Ot);
          }
          for (var yt = 0; yt < Z; ++yt)
            if (a.test(J[yt])) {
              var gt = void 0;
              for (gt = yt + 1; gt < Z && a.test(J[gt]); ++gt)
                ;
              for (var st = (yt ? J[yt - 1] : k) == "L", nn = (gt < Z ? J[gt] : k) == "L", oi = st == nn ? st ? "L" : "R" : k, dr = yt; dr < gt; ++dr)
                J[dr] = oi;
              yt = gt - 1;
            }
          for (var zt = [], Bn, Rt = 0; Rt < Z; )
            if (R.test(J[Rt])) {
              var el = Rt;
              for (++Rt; Rt < Z && R.test(J[Rt]); ++Rt)
                ;
              zt.push(new O(0, el, Rt));
            } else {
              var kn = Rt, Rr = zt.length, Pr = V == "rtl" ? 1 : 0;
              for (++Rt; Rt < Z && J[Rt] != "L"; ++Rt)
                ;
              for (var Vt = kn; Vt < Rt; )
                if (L.test(J[Vt])) {
                  kn < Vt && (zt.splice(Rr, 0, new O(1, kn, Vt)), Rr += Pr);
                  var ai = Vt;
                  for (++Vt; Vt < Rt && L.test(J[Vt]); ++Vt)
                    ;
                  zt.splice(Rr, 0, new O(2, ai, Vt)), Rr += Pr, kn = Vt;
                } else
                  ++Vt;
              kn < Rt && zt.splice(Rr, 0, new O(1, kn, Rt));
            }
          return V == "ltr" && (zt[0].level == 1 && (Bn = W.match(/^\s+/)) && (zt[0].from = Bn[0].length, zt.unshift(new O(0, 0, Bn[0].length))), Ue(zt).level == 1 && (Bn = W.match(/\s+$/)) && (Ue(zt).to -= Bn[0].length, zt.push(new O(0, Z - Bn[0].length, Z)))), V == "rtl" ? zt.reverse() : zt;
        };
      }();
      function oe(e, n) {
        var i = e.order;
        return i == null && (i = e.order = Ee(e.text, n)), i;
      }
      var De = [], ue = function(e, n, i) {
        if (e.addEventListener)
          e.addEventListener(n, i, !1);
        else if (e.attachEvent)
          e.attachEvent("on" + n, i);
        else {
          var r = e._handlers || (e._handlers = {});
          r[n] = (r[n] || De).concat(i);
        }
      };
      function Ie(e, n) {
        return e._handlers && e._handlers[n] || De;
      }
      function ze(e, n, i) {
        if (e.removeEventListener)
          e.removeEventListener(n, i, !1);
        else if (e.detachEvent)
          e.detachEvent("on" + n, i);
        else {
          var r = e._handlers, a = r && r[n];
          if (a) {
            var v = be(a, i);
            v > -1 && (r[n] = a.slice(0, v).concat(a.slice(v + 1)));
          }
        }
      }
      function $e(e, n) {
        var i = Ie(e, n);
        if (!!i.length)
          for (var r = Array.prototype.slice.call(arguments, 2), a = 0; a < i.length; ++a)
            i[a].apply(null, r);
      }
      function Ge(e, n, i) {
        return typeof n == "string" && (n = { type: n, preventDefault: function() {
          this.defaultPrevented = !0;
        } }), $e(e, i || n.type, e, n), Jt(n) || n.codemirrorIgnore;
      }
      function at(e) {
        var n = e._handlers && e._handlers.cursorActivity;
        if (!!n)
          for (var i = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), r = 0; r < n.length; ++r)
            be(i, n[r]) == -1 && i.push(n[r]);
      }
      function Ze(e, n) {
        return Ie(e, n).length > 0;
      }
      function $t(e) {
        e.prototype.on = function(n, i) {
          ue(this, n, i);
        }, e.prototype.off = function(n, i) {
          ze(this, n, i);
        };
      }
      function mt(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1;
      }
      function qn(e) {
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0;
      }
      function Jt(e) {
        return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == !1;
      }
      function _n(e) {
        mt(e), qn(e);
      }
      function pi(e) {
        return e.target || e.srcElement;
      }
      function Sn(e) {
        var n = e.which;
        return n == null && (e.button & 1 ? n = 1 : e.button & 2 ? n = 3 : e.button & 4 && (n = 2)), T && e.ctrlKey && n == 1 && (n = 3), n;
      }
      var la = function() {
        if (f && g < 9)
          return !1;
        var e = I("div");
        return "draggable" in e || "dragDrop" in e;
      }(), Fr;
      function lo(e) {
        if (Fr == null) {
          var n = I("span", "\u200B");
          $(e, I("span", [n, document.createTextNode("x")])), e.firstChild.offsetHeight != 0 && (Fr = n.offsetWidth <= 1 && n.offsetHeight > 2 && !(f && g < 8));
        }
        var i = Fr ? I("span", "\u200B") : I("span", "\xA0", null, "display: inline-block; width: 1px; margin-right: -1px");
        return i.setAttribute("cm-text", ""), i;
      }
      var hi;
      function er(e) {
        if (hi != null)
          return hi;
        var n = $(e, document.createTextNode("A\u062EA")), i = Q(n, 0, 1).getBoundingClientRect(), r = Q(n, 1, 2).getBoundingClientRect();
        return H(e), !i || i.left == i.right ? !1 : hi = r.right - i.right < 3;
      }
      var gn = `

b`.split(/\n/).length != 3 ? function(e) {
        for (var n = 0, i = [], r = e.length; n <= r; ) {
          var a = e.indexOf(`
`, n);
          a == -1 && (a = e.length);
          var v = e.slice(n, e.charAt(a - 1) == "\r" ? a - 1 : a), R = v.indexOf("\r");
          R != -1 ? (i.push(v.slice(0, R)), n += R + 1) : (i.push(v), n = a + 1);
        }
        return i;
      } : function(e) {
        return e.split(/\r\n?|\n/);
      }, tr = window.getSelection ? function(e) {
        try {
          return e.selectionStart != e.selectionEnd;
        } catch {
          return !1;
        }
      } : function(e) {
        var n;
        try {
          n = e.ownerDocument.selection.createRange();
        } catch {
        }
        return !n || n.parentElement() != e ? !1 : n.compareEndPoints("StartToEnd", n) != 0;
      }, so = function() {
        var e = I("div");
        return "oncopy" in e ? !0 : (e.setAttribute("oncopy", "return;"), typeof e.oncopy == "function");
      }(), En = null;
      function sa(e) {
        if (En != null)
          return En;
        var n = $(e, I("span", "x")), i = n.getBoundingClientRect(), r = Q(n, 0, 1).getBoundingClientRect();
        return En = Math.abs(i.left - r.left) > 1;
      }
      var Br = {}, bn = {};
      function Cn(e, n) {
        arguments.length > 2 && (n.dependencies = Array.prototype.slice.call(arguments, 2)), Br[e] = n;
      }
      function xr(e, n) {
        bn[e] = n;
      }
      function Hr(e) {
        if (typeof e == "string" && bn.hasOwnProperty(e))
          e = bn[e];
        else if (e && typeof e.name == "string" && bn.hasOwnProperty(e.name)) {
          var n = bn[e.name];
          typeof n == "string" && (n = { name: n }), e = hn(n, e), e.name = n.name;
        } else {
          if (typeof e == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(e))
            return Hr("application/xml");
          if (typeof e == "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(e))
            return Hr("application/json");
        }
        return typeof e == "string" ? { name: e } : e || { name: "null" };
      }
      function Ur(e, n) {
        n = Hr(n);
        var i = Br[n.name];
        if (!i)
          return Ur(e, "text/plain");
        var r = i(e, n);
        if (nr.hasOwnProperty(n.name)) {
          var a = nr[n.name];
          for (var v in a)
            !a.hasOwnProperty(v) || (r.hasOwnProperty(v) && (r["_" + v] = r[v]), r[v] = a[v]);
        }
        if (r.name = n.name, n.helperType && (r.helperType = n.helperType), n.modeProps)
          for (var R in n.modeProps)
            r[R] = n.modeProps[R];
        return r;
      }
      var nr = {};
      function zr(e, n) {
        var i = nr.hasOwnProperty(e) ? nr[e] : nr[e] = {};
        se(n, i);
      }
      function Ln(e, n) {
        if (n === !0)
          return n;
        if (e.copyState)
          return e.copyState(n);
        var i = {};
        for (var r in n) {
          var a = n[r];
          a instanceof Array && (a = a.concat([])), i[r] = a;
        }
        return i;
      }
      function gi(e, n) {
        for (var i; e.innerMode && (i = e.innerMode(n), !(!i || i.mode == e)); )
          n = i.state, e = i.mode;
        return i || { mode: e, state: n };
      }
      function Wr(e, n, i) {
        return e.startState ? e.startState(n, i) : !0;
      }
      var lt = function(e, n, i) {
        this.pos = this.start = 0, this.string = e, this.tabSize = n || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0, this.lineOracle = i;
      };
      lt.prototype.eol = function() {
        return this.pos >= this.string.length;
      }, lt.prototype.sol = function() {
        return this.pos == this.lineStart;
      }, lt.prototype.peek = function() {
        return this.string.charAt(this.pos) || void 0;
      }, lt.prototype.next = function() {
        if (this.pos < this.string.length)
          return this.string.charAt(this.pos++);
      }, lt.prototype.eat = function(e) {
        var n = this.string.charAt(this.pos), i;
        if (typeof e == "string" ? i = n == e : i = n && (e.test ? e.test(n) : e(n)), i)
          return ++this.pos, n;
      }, lt.prototype.eatWhile = function(e) {
        for (var n = this.pos; this.eat(e); )
          ;
        return this.pos > n;
      }, lt.prototype.eatSpace = function() {
        for (var e = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos)); )
          ++this.pos;
        return this.pos > e;
      }, lt.prototype.skipToEnd = function() {
        this.pos = this.string.length;
      }, lt.prototype.skipTo = function(e) {
        var n = this.string.indexOf(e, this.pos);
        if (n > -1)
          return this.pos = n, !0;
      }, lt.prototype.backUp = function(e) {
        this.pos -= e;
      }, lt.prototype.column = function() {
        return this.lastColumnPos < this.start && (this.lastColumnValue = pe(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? pe(this.string, this.lineStart, this.tabSize) : 0);
      }, lt.prototype.indentation = function() {
        return pe(this.string, null, this.tabSize) - (this.lineStart ? pe(this.string, this.lineStart, this.tabSize) : 0);
      }, lt.prototype.match = function(e, n, i) {
        if (typeof e == "string") {
          var r = function(R) {
            return i ? R.toLowerCase() : R;
          }, a = this.string.substr(this.pos, e.length);
          if (r(a) == r(e))
            return n !== !1 && (this.pos += e.length), !0;
        } else {
          var v = this.string.slice(this.pos).match(e);
          return v && v.index > 0 ? null : (v && n !== !1 && (this.pos += v[0].length), v);
        }
      }, lt.prototype.current = function() {
        return this.string.slice(this.start, this.pos);
      }, lt.prototype.hideFirstChars = function(e, n) {
        this.lineStart += e;
        try {
          return n();
        } finally {
          this.lineStart -= e;
        }
      }, lt.prototype.lookAhead = function(e) {
        var n = this.lineOracle;
        return n && n.lookAhead(e);
      }, lt.prototype.baseToken = function() {
        var e = this.lineOracle;
        return e && e.baseToken(this.pos);
      };
      function we(e, n) {
        if (n -= e.first, n < 0 || n >= e.size)
          throw new Error("There is no line " + (n + e.first) + " in the document.");
        for (var i = e; !i.lines; )
          for (var r = 0; ; ++r) {
            var a = i.children[r], v = a.chunkSize();
            if (n < v) {
              i = a;
              break;
            }
            n -= v;
          }
        return i.lines[n];
      }
      function jn(e, n, i) {
        var r = [], a = n.line;
        return e.iter(n.line, i.line + 1, function(v) {
          var R = v.text;
          a == i.line && (R = R.slice(0, i.ch)), a == n.line && (R = R.slice(n.ch)), r.push(R), ++a;
        }), r;
      }
      function mi(e, n, i) {
        var r = [];
        return e.iter(n, i, function(a) {
          r.push(a.text);
        }), r;
      }
      function un(e, n) {
        var i = n - e.height;
        if (i)
          for (var r = e; r; r = r.parent)
            r.height += i;
      }
      function j(e) {
        if (e.parent == null)
          return null;
        for (var n = e.parent, i = be(n.lines, e), r = n.parent; r; n = r, r = r.parent)
          for (var a = 0; r.children[a] != n; ++a)
            i += r.children[a].chunkSize();
        return i + n.first;
      }
      function G(e, n) {
        var i = e.first;
        e:
          do {
            for (var r = 0; r < e.children.length; ++r) {
              var a = e.children[r], v = a.height;
              if (n < v) {
                e = a;
                continue e;
              }
              n -= v, i += a.chunkSize();
            }
            return i;
          } while (!e.lines);
        for (var R = 0; R < e.lines.length; ++R) {
          var L = e.lines[R], O = L.height;
          if (n < O)
            break;
          n -= O;
        }
        return i + R;
      }
      function ne(e, n) {
        return n >= e.first && n < e.first + e.size;
      }
      function fe(e, n) {
        return String(e.lineNumberFormatter(n + e.firstLineNumber));
      }
      function ee(e, n, i) {
        if (i === void 0 && (i = null), !(this instanceof ee))
          return new ee(e, n, i);
        this.line = e, this.ch = n, this.sticky = i;
      }
      function ye(e, n) {
        return e.line - n.line || e.ch - n.ch;
      }
      function Ve(e, n) {
        return e.sticky == n.sticky && ye(e, n) == 0;
      }
      function Ct(e) {
        return ee(e.line, e.ch);
      }
      function Zt(e, n) {
        return ye(e, n) < 0 ? n : e;
      }
      function jr(e, n) {
        return ye(e, n) < 0 ? e : n;
      }
      function Ss(e, n) {
        return Math.max(e.first, Math.min(n, e.first + e.size - 1));
      }
      function Fe(e, n) {
        if (n.line < e.first)
          return ee(e.first, 0);
        var i = e.first + e.size - 1;
        return n.line > i ? ee(i, we(e, i).text.length) : Id(n, we(e, n.line).text.length);
      }
      function Id(e, n) {
        var i = e.ch;
        return i == null || i > n ? ee(e.line, n) : i < 0 ? ee(e.line, 0) : e;
      }
      function Es(e, n) {
        for (var i = [], r = 0; r < n.length; r++)
          i[r] = Fe(e, n[r]);
        return i;
      }
      var uo = function(e, n) {
        this.state = e, this.lookAhead = n;
      }, Nn = function(e, n, i, r) {
        this.state = n, this.doc = e, this.line = i, this.maxLookAhead = r || 0, this.baseTokens = null, this.baseTokenPos = 1;
      };
      Nn.prototype.lookAhead = function(e) {
        var n = this.doc.getLine(this.line + e);
        return n != null && e > this.maxLookAhead && (this.maxLookAhead = e), n;
      }, Nn.prototype.baseToken = function(e) {
        if (!this.baseTokens)
          return null;
        for (; this.baseTokens[this.baseTokenPos] <= e; )
          this.baseTokenPos += 2;
        var n = this.baseTokens[this.baseTokenPos + 1];
        return {
          type: n && n.replace(/( |^)overlay .*/, ""),
          size: this.baseTokens[this.baseTokenPos] - e
        };
      }, Nn.prototype.nextLine = function() {
        this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
      }, Nn.fromSaved = function(e, n, i) {
        return n instanceof uo ? new Nn(e, Ln(e.mode, n.state), i, n.lookAhead) : new Nn(e, Ln(e.mode, n), i);
      }, Nn.prototype.save = function(e) {
        var n = e !== !1 ? Ln(this.doc.mode, this.state) : this.state;
        return this.maxLookAhead > 0 ? new uo(n, this.maxLookAhead) : n;
      };
      function bs(e, n, i, r) {
        var a = [e.state.modeGen], v = {};
        Rs(
          e,
          n.text,
          e.doc.mode,
          i,
          function(W, V) {
            return a.push(W, V);
          },
          v,
          r
        );
        for (var R = i.state, L = function(W) {
          i.baseTokens = a;
          var V = e.state.overlays[W], k = 1, Z = 0;
          i.state = !0, Rs(e, n.text, V.mode, i, function(J, te) {
            for (var ie = k; Z < J; ) {
              var de = a[k];
              de > J && a.splice(k, 1, J, a[k + 1], de), k += 2, Z = Math.min(J, de);
            }
            if (!!te)
              if (V.opaque)
                a.splice(ie, k - ie, J, "overlay " + te), k = ie + 2;
              else
                for (; ie < k; ie += 2) {
                  var he = a[ie + 1];
                  a[ie + 1] = (he ? he + " " : "") + "overlay " + te;
                }
          }, v), i.state = R, i.baseTokens = null, i.baseTokenPos = 1;
        }, O = 0; O < e.state.overlays.length; ++O)
          L(O);
        return { styles: a, classes: v.bgClass || v.textClass ? v : null };
      }
      function Cs(e, n, i) {
        if (!n.styles || n.styles[0] != e.state.modeGen) {
          var r = yi(e, j(n)), a = n.text.length > e.options.maxHighlightLength && Ln(e.doc.mode, r.state), v = bs(e, n, r);
          a && (r.state = a), n.stateAfter = r.save(!a), n.styles = v.styles, v.classes ? n.styleClasses = v.classes : n.styleClasses && (n.styleClasses = null), i === e.doc.highlightFrontier && (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier));
        }
        return n.styles;
      }
      function yi(e, n, i) {
        var r = e.doc, a = e.display;
        if (!r.mode.startState)
          return new Nn(r, !0, n);
        var v = Ld(e, n, i), R = v > r.first && we(r, v - 1).stateAfter, L = R ? Nn.fromSaved(r, R, v) : new Nn(r, Wr(r.mode), v);
        return r.iter(v, n, function(O) {
          ua(e, O.text, L);
          var W = L.line;
          O.stateAfter = W == n - 1 || W % 5 == 0 || W >= a.viewFrom && W < a.viewTo ? L.save() : null, L.nextLine();
        }), i && (r.modeFrontier = L.line), L;
      }
      function ua(e, n, i, r) {
        var a = e.doc.mode, v = new lt(n, e.options.tabSize, i);
        for (v.start = v.pos = r || 0, n == "" && Ts(a, i.state); !v.eol(); )
          fa(a, v, i.state), v.start = v.pos;
      }
      function Ts(e, n) {
        if (e.blankLine)
          return e.blankLine(n);
        if (!!e.innerMode) {
          var i = gi(e, n);
          if (i.mode.blankLine)
            return i.mode.blankLine(i.state);
        }
      }
      function fa(e, n, i, r) {
        for (var a = 0; a < 10; a++) {
          r && (r[0] = gi(e, i).mode);
          var v = e.token(n, i);
          if (n.pos > n.start)
            return v;
        }
        throw new Error("Mode " + e.name + " failed to advance stream.");
      }
      var ws = function(e, n, i) {
        this.start = e.start, this.end = e.pos, this.string = e.current(), this.type = n || null, this.state = i;
      };
      function Ds(e, n, i, r) {
        var a = e.doc, v = a.mode, R;
        n = Fe(a, n);
        var L = we(a, n.line), O = yi(e, n.line, i), W = new lt(L.text, e.options.tabSize, O), V;
        for (r && (V = []); (r || W.pos < n.ch) && !W.eol(); )
          W.start = W.pos, R = fa(v, W, O.state), r && V.push(new ws(W, R, Ln(a.mode, O.state)));
        return r ? V : new ws(W, R, O.state);
      }
      function Ms(e, n) {
        if (e)
          for (; ; ) {
            var i = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
            if (!i)
              break;
            e = e.slice(0, i.index) + e.slice(i.index + i[0].length);
            var r = i[1] ? "bgClass" : "textClass";
            n[r] == null ? n[r] = i[2] : new RegExp("(?:^|\\s)" + i[2] + "(?:$|\\s)").test(n[r]) || (n[r] += " " + i[2]);
          }
        return e;
      }
      function Rs(e, n, i, r, a, v, R) {
        var L = i.flattenSpans;
        L == null && (L = e.options.flattenSpans);
        var O = 0, W = null, V = new lt(n, e.options.tabSize, r), k, Z = e.options.addModeClass && [null];
        for (n == "" && Ms(Ts(i, r.state), v); !V.eol(); ) {
          if (V.pos > e.options.maxHighlightLength ? (L = !1, R && ua(e, n, r, V.pos), V.pos = n.length, k = null) : k = Ms(fa(i, V, r.state, Z), v), Z) {
            var J = Z[0].name;
            J && (k = "m-" + (k ? J + " " + k : J));
          }
          if (!L || W != k) {
            for (; O < V.start; )
              O = Math.min(V.start, O + 5e3), a(O, W);
            W = k;
          }
          V.start = V.pos;
        }
        for (; O < V.pos; ) {
          var te = Math.min(V.pos, O + 5e3);
          a(te, W), O = te;
        }
      }
      function Ld(e, n, i) {
        for (var r, a, v = e.doc, R = i ? -1 : n - (e.doc.mode.innerMode ? 1e3 : 100), L = n; L > R; --L) {
          if (L <= v.first)
            return v.first;
          var O = we(v, L - 1), W = O.stateAfter;
          if (W && (!i || L + (W instanceof uo ? W.lookAhead : 0) <= v.modeFrontier))
            return L;
          var V = pe(O.text, null, e.options.tabSize);
          (a == null || r > V) && (a = L - 1, r = V);
        }
        return a;
      }
      function Nd(e, n) {
        if (e.modeFrontier = Math.min(e.modeFrontier, n), !(e.highlightFrontier < n - 10)) {
          for (var i = e.first, r = n - 1; r > i; r--) {
            var a = we(e, r).stateAfter;
            if (a && (!(a instanceof uo) || r + a.lookAhead < n)) {
              i = r + 1;
              break;
            }
          }
          e.highlightFrontier = Math.min(e.highlightFrontier, i);
        }
      }
      var Ps = !1, $n = !1;
      function Od() {
        Ps = !0;
      }
      function Fd() {
        $n = !0;
      }
      function fo(e, n, i) {
        this.marker = e, this.from = n, this.to = i;
      }
      function Ai(e, n) {
        if (e)
          for (var i = 0; i < e.length; ++i) {
            var r = e[i];
            if (r.marker == n)
              return r;
          }
      }
      function Bd(e, n) {
        for (var i, r = 0; r < e.length; ++r)
          e[r] != n && (i || (i = [])).push(e[r]);
        return i;
      }
      function Hd(e, n, i) {
        var r = i && window.WeakSet && (i.markedSpans || (i.markedSpans = /* @__PURE__ */ new WeakSet()));
        r && e.markedSpans && r.has(e.markedSpans) ? e.markedSpans.push(n) : (e.markedSpans = e.markedSpans ? e.markedSpans.concat([n]) : [n], r && r.add(e.markedSpans)), n.marker.attachLine(e);
      }
      function Ud(e, n, i) {
        var r;
        if (e)
          for (var a = 0; a < e.length; ++a) {
            var v = e[a], R = v.marker, L = v.from == null || (R.inclusiveLeft ? v.from <= n : v.from < n);
            if (L || v.from == n && R.type == "bookmark" && (!i || !v.marker.insertLeft)) {
              var O = v.to == null || (R.inclusiveRight ? v.to >= n : v.to > n);
              (r || (r = [])).push(new fo(R, v.from, O ? null : v.to));
            }
          }
        return r;
      }
      function zd(e, n, i) {
        var r;
        if (e)
          for (var a = 0; a < e.length; ++a) {
            var v = e[a], R = v.marker, L = v.to == null || (R.inclusiveRight ? v.to >= n : v.to > n);
            if (L || v.from == n && R.type == "bookmark" && (!i || v.marker.insertLeft)) {
              var O = v.from == null || (R.inclusiveLeft ? v.from <= n : v.from < n);
              (r || (r = [])).push(new fo(
                R,
                O ? null : v.from - n,
                v.to == null ? null : v.to - n
              ));
            }
          }
        return r;
      }
      function da(e, n) {
        if (n.full)
          return null;
        var i = ne(e, n.from.line) && we(e, n.from.line).markedSpans, r = ne(e, n.to.line) && we(e, n.to.line).markedSpans;
        if (!i && !r)
          return null;
        var a = n.from.ch, v = n.to.ch, R = ye(n.from, n.to) == 0, L = Ud(i, a, R), O = zd(r, v, R), W = n.text.length == 1, V = Ue(n.text).length + (W ? a : 0);
        if (L)
          for (var k = 0; k < L.length; ++k) {
            var Z = L[k];
            if (Z.to == null) {
              var J = Ai(O, Z.marker);
              J ? W && (Z.to = J.to == null ? null : J.to + V) : Z.to = a;
            }
          }
        if (O)
          for (var te = 0; te < O.length; ++te) {
            var ie = O[te];
            if (ie.to != null && (ie.to += V), ie.from == null) {
              var de = Ai(L, ie.marker);
              de || (ie.from = V, W && (L || (L = [])).push(ie));
            } else
              ie.from += V, W && (L || (L = [])).push(ie);
          }
        L && (L = Is(L)), O && O != L && (O = Is(O));
        var he = [L];
        if (!W) {
          var xe = n.text.length - 2, ge;
          if (xe > 0 && L)
            for (var Te = 0; Te < L.length; ++Te)
              L[Te].to == null && (ge || (ge = [])).push(new fo(L[Te].marker, null, null));
          for (var Re = 0; Re < xe; ++Re)
            he.push(ge);
          he.push(O);
        }
        return he;
      }
      function Is(e) {
        for (var n = 0; n < e.length; ++n) {
          var i = e[n];
          i.from != null && i.from == i.to && i.marker.clearWhenEmpty !== !1 && e.splice(n--, 1);
        }
        return e.length ? e : null;
      }
      function Wd(e, n, i) {
        var r = null;
        if (e.iter(n.line, i.line + 1, function(J) {
          if (J.markedSpans)
            for (var te = 0; te < J.markedSpans.length; ++te) {
              var ie = J.markedSpans[te].marker;
              ie.readOnly && (!r || be(r, ie) == -1) && (r || (r = [])).push(ie);
            }
        }), !r)
          return null;
        for (var a = [{ from: n, to: i }], v = 0; v < r.length; ++v)
          for (var R = r[v], L = R.find(0), O = 0; O < a.length; ++O) {
            var W = a[O];
            if (!(ye(W.to, L.from) < 0 || ye(W.from, L.to) > 0)) {
              var V = [O, 1], k = ye(W.from, L.from), Z = ye(W.to, L.to);
              (k < 0 || !R.inclusiveLeft && !k) && V.push({ from: W.from, to: L.from }), (Z > 0 || !R.inclusiveRight && !Z) && V.push({ from: L.to, to: W.to }), a.splice.apply(a, V), O += V.length - 3;
            }
          }
        return a;
      }
      function Ls(e) {
        var n = e.markedSpans;
        if (!!n) {
          for (var i = 0; i < n.length; ++i)
            n[i].marker.detachLine(e);
          e.markedSpans = null;
        }
      }
      function Ns(e, n) {
        if (!!n) {
          for (var i = 0; i < n.length; ++i)
            n[i].marker.attachLine(e);
          e.markedSpans = n;
        }
      }
      function co(e) {
        return e.inclusiveLeft ? -1 : 0;
      }
      function vo(e) {
        return e.inclusiveRight ? 1 : 0;
      }
      function ca(e, n) {
        var i = e.lines.length - n.lines.length;
        if (i != 0)
          return i;
        var r = e.find(), a = n.find(), v = ye(r.from, a.from) || co(e) - co(n);
        if (v)
          return -v;
        var R = ye(r.to, a.to) || vo(e) - vo(n);
        return R || n.id - e.id;
      }
      function Os(e, n) {
        var i = $n && e.markedSpans, r;
        if (i)
          for (var a = void 0, v = 0; v < i.length; ++v)
            a = i[v], a.marker.collapsed && (n ? a.from : a.to) == null && (!r || ca(r, a.marker) < 0) && (r = a.marker);
        return r;
      }
      function Fs(e) {
        return Os(e, !0);
      }
      function po(e) {
        return Os(e, !1);
      }
      function jd(e, n) {
        var i = $n && e.markedSpans, r;
        if (i)
          for (var a = 0; a < i.length; ++a) {
            var v = i[a];
            v.marker.collapsed && (v.from == null || v.from < n) && (v.to == null || v.to > n) && (!r || ca(r, v.marker) < 0) && (r = v.marker);
          }
        return r;
      }
      function Bs(e, n, i, r, a) {
        var v = we(e, n), R = $n && v.markedSpans;
        if (R)
          for (var L = 0; L < R.length; ++L) {
            var O = R[L];
            if (!!O.marker.collapsed) {
              var W = O.marker.find(0), V = ye(W.from, i) || co(O.marker) - co(a), k = ye(W.to, r) || vo(O.marker) - vo(a);
              if (!(V >= 0 && k <= 0 || V <= 0 && k >= 0) && (V <= 0 && (O.marker.inclusiveRight && a.inclusiveLeft ? ye(W.to, i) >= 0 : ye(W.to, i) > 0) || V >= 0 && (O.marker.inclusiveRight && a.inclusiveLeft ? ye(W.from, r) <= 0 : ye(W.from, r) < 0)))
                return !0;
            }
          }
      }
      function Tn(e) {
        for (var n; n = Fs(e); )
          e = n.find(-1, !0).line;
        return e;
      }
      function $d(e) {
        for (var n; n = po(e); )
          e = n.find(1, !0).line;
        return e;
      }
      function Yd(e) {
        for (var n, i; n = po(e); )
          e = n.find(1, !0).line, (i || (i = [])).push(e);
        return i;
      }
      function va(e, n) {
        var i = we(e, n), r = Tn(i);
        return i == r ? n : j(r);
      }
      function Hs(e, n) {
        if (n > e.lastLine())
          return n;
        var i = we(e, n), r;
        if (!rr(e, i))
          return n;
        for (; r = po(i); )
          i = r.find(1, !0).line;
        return j(i) + 1;
      }
      function rr(e, n) {
        var i = $n && n.markedSpans;
        if (i) {
          for (var r = void 0, a = 0; a < i.length; ++a)
            if (r = i[a], !!r.marker.collapsed) {
              if (r.from == null)
                return !0;
              if (!r.marker.widgetNode && r.from == 0 && r.marker.inclusiveLeft && pa(e, n, r))
                return !0;
            }
        }
      }
      function pa(e, n, i) {
        if (i.to == null) {
          var r = i.marker.find(1, !0);
          return pa(e, r.line, Ai(r.line.markedSpans, i.marker));
        }
        if (i.marker.inclusiveRight && i.to == n.text.length)
          return !0;
        for (var a = void 0, v = 0; v < n.markedSpans.length; ++v)
          if (a = n.markedSpans[v], a.marker.collapsed && !a.marker.widgetNode && a.from == i.to && (a.to == null || a.to != i.from) && (a.marker.inclusiveLeft || i.marker.inclusiveRight) && pa(e, n, a))
            return !0;
      }
      function Yn(e) {
        e = Tn(e);
        for (var n = 0, i = e.parent, r = 0; r < i.lines.length; ++r) {
          var a = i.lines[r];
          if (a == e)
            break;
          n += a.height;
        }
        for (var v = i.parent; v; i = v, v = i.parent)
          for (var R = 0; R < v.children.length; ++R) {
            var L = v.children[R];
            if (L == i)
              break;
            n += L.height;
          }
        return n;
      }
      function ho(e) {
        if (e.height == 0)
          return 0;
        for (var n = e.text.length, i, r = e; i = Fs(r); ) {
          var a = i.find(0, !0);
          r = a.from.line, n += a.from.ch - a.to.ch;
        }
        for (r = e; i = po(r); ) {
          var v = i.find(0, !0);
          n -= r.text.length - v.from.ch, r = v.to.line, n += r.text.length - v.to.ch;
        }
        return n;
      }
      function ha(e) {
        var n = e.display, i = e.doc;
        n.maxLine = we(i, i.first), n.maxLineLength = ho(n.maxLine), n.maxLineChanged = !0, i.iter(function(r) {
          var a = ho(r);
          a > n.maxLineLength && (n.maxLineLength = a, n.maxLine = r);
        });
      }
      var $r = function(e, n, i) {
        this.text = e, Ns(this, n), this.height = i ? i(this) : 1;
      };
      $r.prototype.lineNo = function() {
        return j(this);
      }, $t($r);
      function Vd(e, n, i, r) {
        e.text = n, e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), e.order != null && (e.order = null), Ls(e), Ns(e, i);
        var a = r ? r(e) : 1;
        a != e.height && un(e, a);
      }
      function Qd(e) {
        e.parent = null, Ls(e);
      }
      var Gd = {}, kd = {};
      function Us(e, n) {
        if (!e || /^\s*$/.test(e))
          return null;
        var i = n.addModeClass ? kd : Gd;
        return i[e] || (i[e] = e.replace(/\S+/g, "cm-$&"));
      }
      function zs(e, n) {
        var i = Y("span", null, null, C ? "padding-right: .1px" : null), r = {
          pre: Y("pre", [i], "CodeMirror-line"),
          content: i,
          col: 0,
          pos: 0,
          cm: e,
          trailingSpace: !1,
          splitSpaces: e.getOption("lineWrapping")
        };
        n.measure = {};
        for (var a = 0; a <= (n.rest ? n.rest.length : 0); a++) {
          var v = a ? n.rest[a - 1] : n.line, R = void 0;
          r.pos = 0, r.addToken = Xd, er(e.display.measure) && (R = oe(v, e.doc.direction)) && (r.addToken = Zd(r.addToken, R)), r.map = [];
          var L = n != e.display.externalMeasured && j(v);
          qd(v, r, Cs(e, v, L)), v.styleClasses && (v.styleClasses.bgClass && (r.bgClass = _(v.styleClasses.bgClass, r.bgClass || "")), v.styleClasses.textClass && (r.textClass = _(v.styleClasses.textClass, r.textClass || ""))), r.map.length == 0 && r.map.push(0, 0, r.content.appendChild(lo(e.display.measure))), a == 0 ? (n.measure.map = r.map, n.measure.cache = {}) : ((n.measure.maps || (n.measure.maps = [])).push(r.map), (n.measure.caches || (n.measure.caches = [])).push({}));
        }
        if (C) {
          var O = r.content.lastChild;
          (/\bcm-tab\b/.test(O.className) || O.querySelector && O.querySelector(".cm-tab")) && (r.content.className = "cm-tab-wrap-hack");
        }
        return $e(e, "renderLine", e, n.line, r.pre), r.pre.className && (r.textClass = _(r.pre.className, r.textClass || "")), r;
      }
      function Kd(e) {
        var n = I("span", "\u2022", "cm-invalidchar");
        return n.title = "\\u" + e.charCodeAt(0).toString(16), n.setAttribute("aria-label", n.title), n;
      }
      function Xd(e, n, i, r, a, v, R) {
        if (!!n) {
          var L = e.splitSpaces ? Jd(n, e.trailingSpace) : n, O = e.cm.state.specialChars, W = !1, V;
          if (!O.test(n))
            e.col += n.length, V = document.createTextNode(L), e.map.push(e.pos, e.pos + n.length, V), f && g < 9 && (W = !0), e.pos += n.length;
          else {
            V = document.createDocumentFragment();
            for (var k = 0; ; ) {
              O.lastIndex = k;
              var Z = O.exec(n), J = Z ? Z.index - k : n.length - k;
              if (J) {
                var te = document.createTextNode(L.slice(k, k + J));
                f && g < 9 ? V.appendChild(I("span", [te])) : V.appendChild(te), e.map.push(e.pos, e.pos + J, te), e.col += J, e.pos += J;
              }
              if (!Z)
                break;
              k += J + 1;
              var ie = void 0;
              if (Z[0] == "	") {
                var de = e.cm.options.tabSize, he = de - e.col % de;
                ie = V.appendChild(I("span", Kt(he), "cm-tab")), ie.setAttribute("role", "presentation"), ie.setAttribute("cm-text", "	"), e.col += he;
              } else
                Z[0] == "\r" || Z[0] == `
` ? (ie = V.appendChild(I("span", Z[0] == "\r" ? "\u240D" : "\u2424", "cm-invalidchar")), ie.setAttribute("cm-text", Z[0]), e.col += 1) : (ie = e.cm.options.specialCharPlaceholder(Z[0]), ie.setAttribute("cm-text", Z[0]), f && g < 9 ? V.appendChild(I("span", [ie])) : V.appendChild(ie), e.col += 1);
              e.map.push(e.pos, e.pos + 1, ie), e.pos++;
            }
          }
          if (e.trailingSpace = L.charCodeAt(n.length - 1) == 32, i || r || a || W || v || R) {
            var xe = i || "";
            r && (xe += r), a && (xe += a);
            var ge = I("span", [V], xe, v);
            if (R)
              for (var Te in R)
                R.hasOwnProperty(Te) && Te != "style" && Te != "class" && ge.setAttribute(Te, R[Te]);
            return e.content.appendChild(ge);
          }
          e.content.appendChild(V);
        }
      }
      function Jd(e, n) {
        if (e.length > 1 && !/  /.test(e))
          return e;
        for (var i = n, r = "", a = 0; a < e.length; a++) {
          var v = e.charAt(a);
          v == " " && i && (a == e.length - 1 || e.charCodeAt(a + 1) == 32) && (v = "\xA0"), r += v, i = v == " ";
        }
        return r;
      }
      function Zd(e, n) {
        return function(i, r, a, v, R, L, O) {
          a = a ? a + " cm-force-border" : "cm-force-border";
          for (var W = i.pos, V = W + r.length; ; ) {
            for (var k = void 0, Z = 0; Z < n.length && (k = n[Z], !(k.to > W && k.from <= W)); Z++)
              ;
            if (k.to >= V)
              return e(i, r, a, v, R, L, O);
            e(i, r.slice(0, k.to - W), a, v, null, L, O), v = null, r = r.slice(k.to - W), W = k.to;
          }
        };
      }
      function Ws(e, n, i, r) {
        var a = !r && i.widgetNode;
        a && e.map.push(e.pos, e.pos + n, a), !r && e.cm.display.input.needsContentAttribute && (a || (a = e.content.appendChild(document.createElement("span"))), a.setAttribute("cm-marker", i.id)), a && (e.cm.display.input.setUneditable(a), e.content.appendChild(a)), e.pos += n, e.trailingSpace = !1;
      }
      function qd(e, n, i) {
        var r = e.markedSpans, a = e.text, v = 0;
        if (!r) {
          for (var R = 1; R < i.length; R += 2)
            n.addToken(n, a.slice(v, v = i[R]), Us(i[R + 1], n.cm.options));
          return;
        }
        for (var L = a.length, O = 0, W = 1, V = "", k, Z, J = 0, te, ie, de, he, xe; ; ) {
          if (J == O) {
            te = ie = de = Z = "", xe = null, he = null, J = 1 / 0;
            for (var ge = [], Te = void 0, Re = 0; Re < r.length; ++Re) {
              var Me = r[Re], Be = Me.marker;
              if (Be.type == "bookmark" && Me.from == O && Be.widgetNode)
                ge.push(Be);
              else if (Me.from <= O && (Me.to == null || Me.to > O || Be.collapsed && Me.to == O && Me.from == O)) {
                if (Me.to != null && Me.to != O && J > Me.to && (J = Me.to, ie = ""), Be.className && (te += " " + Be.className), Be.css && (Z = (Z ? Z + ";" : "") + Be.css), Be.startStyle && Me.from == O && (de += " " + Be.startStyle), Be.endStyle && Me.to == J && (Te || (Te = [])).push(Be.endStyle, Me.to), Be.title && ((xe || (xe = {})).title = Be.title), Be.attributes)
                  for (var _e in Be.attributes)
                    (xe || (xe = {}))[_e] = Be.attributes[_e];
                Be.collapsed && (!he || ca(he.marker, Be) < 0) && (he = Me);
              } else
                Me.from > O && J > Me.from && (J = Me.from);
            }
            if (Te)
              for (var Mt = 0; Mt < Te.length; Mt += 2)
                Te[Mt + 1] == J && (ie += " " + Te[Mt]);
            if (!he || he.from == O)
              for (var rt = 0; rt < ge.length; ++rt)
                Ws(n, 0, ge[rt]);
            if (he && (he.from || 0) == O) {
              if (Ws(
                n,
                (he.to == null ? L + 1 : he.to) - O,
                he.marker,
                he.from == null
              ), he.to == null)
                return;
              he.to == O && (he = !1);
            }
          }
          if (O >= L)
            break;
          for (var ln = Math.min(L, J); ; ) {
            if (V) {
              var en = O + V.length;
              if (!he) {
                var ht = en > ln ? V.slice(0, ln - O) : V;
                n.addToken(
                  n,
                  ht,
                  k ? k + te : te,
                  de,
                  O + ht.length == J ? ie : "",
                  Z,
                  xe
                );
              }
              if (en >= ln) {
                V = V.slice(ln - O), O = ln;
                break;
              }
              O = en, de = "";
            }
            V = a.slice(v, v = i[W++]), k = Us(i[W++], n.cm.options);
          }
        }
      }
      function js(e, n, i) {
        this.line = n, this.rest = Yd(n), this.size = this.rest ? j(Ue(this.rest)) - i + 1 : 1, this.node = this.text = null, this.hidden = rr(e, n);
      }
      function go(e, n, i) {
        for (var r = [], a, v = n; v < i; v = a) {
          var R = new js(e.doc, we(e.doc, v), v);
          a = v + R.size, r.push(R);
        }
        return r;
      }
      var Yr = null;
      function _d(e) {
        Yr ? Yr.ops.push(e) : e.ownsGroup = Yr = {
          ops: [e],
          delayedCallbacks: []
        };
      }
      function ec(e) {
        var n = e.delayedCallbacks, i = 0;
        do {
          for (; i < n.length; i++)
            n[i].call(null);
          for (var r = 0; r < e.ops.length; r++) {
            var a = e.ops[r];
            if (a.cursorActivityHandlers)
              for (; a.cursorActivityCalled < a.cursorActivityHandlers.length; )
                a.cursorActivityHandlers[a.cursorActivityCalled++].call(null, a.cm);
          }
        } while (i < n.length);
      }
      function tc(e, n) {
        var i = e.ownsGroup;
        if (!!i)
          try {
            ec(i);
          } finally {
            Yr = null, n(i);
          }
      }
      var xi = null;
      function Tt(e, n) {
        var i = Ie(e, n);
        if (!!i.length) {
          var r = Array.prototype.slice.call(arguments, 2), a;
          Yr ? a = Yr.delayedCallbacks : xi ? a = xi : (a = xi = [], setTimeout(nc, 0));
          for (var v = function(L) {
            a.push(function() {
              return i[L].apply(null, r);
            });
          }, R = 0; R < i.length; ++R)
            v(R);
        }
      }
      function nc() {
        var e = xi;
        xi = null;
        for (var n = 0; n < e.length; ++n)
          e[n]();
      }
      function $s(e, n, i, r) {
        for (var a = 0; a < n.changes.length; a++) {
          var v = n.changes[a];
          v == "text" ? ic(e, n) : v == "gutter" ? Vs(e, n, i, r) : v == "class" ? ga(e, n) : v == "widget" && oc(e, n, r);
        }
        n.changes = null;
      }
      function Si(e) {
        return e.node == e.text && (e.node = I("div", null, null, "position: relative"), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), f && g < 8 && (e.node.style.zIndex = 2)), e.node;
      }
      function rc(e, n) {
        var i = n.bgClass ? n.bgClass + " " + (n.line.bgClass || "") : n.line.bgClass;
        if (i && (i += " CodeMirror-linebackground"), n.background)
          i ? n.background.className = i : (n.background.parentNode.removeChild(n.background), n.background = null);
        else if (i) {
          var r = Si(n);
          n.background = r.insertBefore(I("div", null, i), r.firstChild), e.display.input.setUneditable(n.background);
        }
      }
      function Ys(e, n) {
        var i = e.display.externalMeasured;
        return i && i.line == n.line ? (e.display.externalMeasured = null, n.measure = i.measure, i.built) : zs(e, n);
      }
      function ic(e, n) {
        var i = n.text.className, r = Ys(e, n);
        n.text == n.node && (n.node = r.pre), n.text.parentNode.replaceChild(r.pre, n.text), n.text = r.pre, r.bgClass != n.bgClass || r.textClass != n.textClass ? (n.bgClass = r.bgClass, n.textClass = r.textClass, ga(e, n)) : i && (n.text.className = i);
      }
      function ga(e, n) {
        rc(e, n), n.line.wrapClass ? Si(n).className = n.line.wrapClass : n.node != n.text && (n.node.className = "");
        var i = n.textClass ? n.textClass + " " + (n.line.textClass || "") : n.line.textClass;
        n.text.className = i || "";
      }
      function Vs(e, n, i, r) {
        if (n.gutter && (n.node.removeChild(n.gutter), n.gutter = null), n.gutterBackground && (n.node.removeChild(n.gutterBackground), n.gutterBackground = null), n.line.gutterClass) {
          var a = Si(n);
          n.gutterBackground = I(
            "div",
            null,
            "CodeMirror-gutter-background " + n.line.gutterClass,
            "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px; width: " + r.gutterTotalWidth + "px"
          ), e.display.input.setUneditable(n.gutterBackground), a.insertBefore(n.gutterBackground, n.text);
        }
        var v = n.line.gutterMarkers;
        if (e.options.lineNumbers || v) {
          var R = Si(n), L = n.gutter = I("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px");
          if (L.setAttribute("aria-hidden", "true"), e.display.input.setUneditable(L), R.insertBefore(L, n.text), n.line.gutterClass && (L.className += " " + n.line.gutterClass), e.options.lineNumbers && (!v || !v["CodeMirror-linenumbers"]) && (n.lineNumber = L.appendChild(
            I(
              "div",
              fe(e.options, i),
              "CodeMirror-linenumber CodeMirror-gutter-elt",
              "left: " + r.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"
            )
          )), v)
            for (var O = 0; O < e.display.gutterSpecs.length; ++O) {
              var W = e.display.gutterSpecs[O].className, V = v.hasOwnProperty(W) && v[W];
              V && L.appendChild(I(
                "div",
                [V],
                "CodeMirror-gutter-elt",
                "left: " + r.gutterLeft[W] + "px; width: " + r.gutterWidth[W] + "px"
              ));
            }
        }
      }
      function oc(e, n, i) {
        n.alignable && (n.alignable = null);
        for (var r = P("CodeMirror-linewidget"), a = n.node.firstChild, v = void 0; a; a = v)
          v = a.nextSibling, r.test(a.className) && n.node.removeChild(a);
        Qs(e, n, i);
      }
      function ac(e, n, i, r) {
        var a = Ys(e, n);
        return n.text = n.node = a.pre, a.bgClass && (n.bgClass = a.bgClass), a.textClass && (n.textClass = a.textClass), ga(e, n), Vs(e, n, i, r), Qs(e, n, r), n.node;
      }
      function Qs(e, n, i) {
        if (Gs(e, n.line, n, i, !0), n.rest)
          for (var r = 0; r < n.rest.length; r++)
            Gs(e, n.rest[r], n, i, !1);
      }
      function Gs(e, n, i, r, a) {
        if (!!n.widgets)
          for (var v = Si(i), R = 0, L = n.widgets; R < L.length; ++R) {
            var O = L[R], W = I("div", [O.node], "CodeMirror-linewidget" + (O.className ? " " + O.className : ""));
            O.handleMouseEvents || W.setAttribute("cm-ignore-events", "true"), lc(O, W, i, r), e.display.input.setUneditable(W), a && O.above ? v.insertBefore(W, i.gutter || i.text) : v.appendChild(W), Tt(O, "redraw");
          }
      }
      function lc(e, n, i, r) {
        if (e.noHScroll) {
          (i.alignable || (i.alignable = [])).push(n);
          var a = r.wrapperWidth;
          n.style.left = r.fixedPos + "px", e.coverGutter || (a -= r.gutterTotalWidth, n.style.paddingLeft = r.gutterTotalWidth + "px"), n.style.width = a + "px";
        }
        e.coverGutter && (n.style.zIndex = 5, n.style.position = "relative", e.noHScroll || (n.style.marginLeft = -r.gutterTotalWidth + "px"));
      }
      function Ei(e) {
        if (e.height != null)
          return e.height;
        var n = e.doc.cm;
        if (!n)
          return 0;
        if (!K(document.body, e.node)) {
          var i = "position: relative;";
          e.coverGutter && (i += "margin-left: -" + n.display.gutters.offsetWidth + "px;"), e.noHScroll && (i += "width: " + n.display.wrapper.clientWidth + "px;"), $(n.display.measure, I("div", [e.node], null, i));
        }
        return e.height = e.node.parentNode.offsetHeight;
      }
      function Vn(e, n) {
        for (var i = pi(n); i != e.wrapper; i = i.parentNode)
          if (!i || i.nodeType == 1 && i.getAttribute("cm-ignore-events") == "true" || i.parentNode == e.sizer && i != e.mover)
            return !0;
      }
      function mo(e) {
        return e.lineSpace.offsetTop;
      }
      function ma(e) {
        return e.mover.offsetHeight - e.lineSpace.offsetHeight;
      }
      function ks(e) {
        if (e.cachedPaddingH)
          return e.cachedPaddingH;
        var n = $(e.measure, I("pre", "x", "CodeMirror-line-like")), i = window.getComputedStyle ? window.getComputedStyle(n) : n.currentStyle, r = { left: parseInt(i.paddingLeft), right: parseInt(i.paddingRight) };
        return !isNaN(r.left) && !isNaN(r.right) && (e.cachedPaddingH = r), r;
      }
      function On(e) {
        return je - e.display.nativeBarWidth;
      }
      function Sr(e) {
        return e.display.scroller.clientWidth - On(e) - e.display.barWidth;
      }
      function ya(e) {
        return e.display.scroller.clientHeight - On(e) - e.display.barHeight;
      }
      function sc(e, n, i) {
        var r = e.options.lineWrapping, a = r && Sr(e);
        if (!n.measure.heights || r && n.measure.width != a) {
          var v = n.measure.heights = [];
          if (r) {
            n.measure.width = a;
            for (var R = n.text.firstChild.getClientRects(), L = 0; L < R.length - 1; L++) {
              var O = R[L], W = R[L + 1];
              Math.abs(O.bottom - W.bottom) > 2 && v.push((O.bottom + W.top) / 2 - i.top);
            }
          }
          v.push(i.bottom - i.top);
        }
      }
      function Ks(e, n, i) {
        if (e.line == n)
          return { map: e.measure.map, cache: e.measure.cache };
        if (e.rest) {
          for (var r = 0; r < e.rest.length; r++)
            if (e.rest[r] == n)
              return { map: e.measure.maps[r], cache: e.measure.caches[r] };
          for (var a = 0; a < e.rest.length; a++)
            if (j(e.rest[a]) > i)
              return { map: e.measure.maps[a], cache: e.measure.caches[a], before: !0 };
        }
      }
      function uc(e, n) {
        n = Tn(n);
        var i = j(n), r = e.display.externalMeasured = new js(e.doc, n, i);
        r.lineN = i;
        var a = r.built = zs(e, r);
        return r.text = a.pre, $(e.display.lineMeasure, a.pre), r;
      }
      function Xs(e, n, i, r) {
        return Fn(e, Vr(e, n), i, r);
      }
      function Aa(e, n) {
        if (n >= e.display.viewFrom && n < e.display.viewTo)
          return e.display.view[Cr(e, n)];
        var i = e.display.externalMeasured;
        if (i && n >= i.lineN && n < i.lineN + i.size)
          return i;
      }
      function Vr(e, n) {
        var i = j(n), r = Aa(e, i);
        r && !r.text ? r = null : r && r.changes && ($s(e, r, i, Ca(e)), e.curOp.forceUpdate = !0), r || (r = uc(e, n));
        var a = Ks(r, n, i);
        return {
          line: n,
          view: r,
          rect: null,
          map: a.map,
          cache: a.cache,
          before: a.before,
          hasHeights: !1
        };
      }
      function Fn(e, n, i, r, a) {
        n.before && (i = -1);
        var v = i + (r || ""), R;
        return n.cache.hasOwnProperty(v) ? R = n.cache[v] : (n.rect || (n.rect = n.view.text.getBoundingClientRect()), n.hasHeights || (sc(e, n.view, n.rect), n.hasHeights = !0), R = dc(e, n, i, r), R.bogus || (n.cache[v] = R)), {
          left: R.left,
          right: R.right,
          top: a ? R.rtop : R.top,
          bottom: a ? R.rbottom : R.bottom
        };
      }
      var Js = { left: 0, right: 0, top: 0, bottom: 0 };
      function Zs(e, n, i) {
        for (var r, a, v, R, L, O, W = 0; W < e.length; W += 3)
          if (L = e[W], O = e[W + 1], n < L ? (a = 0, v = 1, R = "left") : n < O ? (a = n - L, v = a + 1) : (W == e.length - 3 || n == O && e[W + 3] > n) && (v = O - L, a = v - 1, n >= O && (R = "right")), a != null) {
            if (r = e[W + 2], L == O && i == (r.insertLeft ? "left" : "right") && (R = i), i == "left" && a == 0)
              for (; W && e[W - 2] == e[W - 3] && e[W - 1].insertLeft; )
                r = e[(W -= 3) + 2], R = "left";
            if (i == "right" && a == O - L)
              for (; W < e.length - 3 && e[W + 3] == e[W + 4] && !e[W + 5].insertLeft; )
                r = e[(W += 3) + 2], R = "right";
            break;
          }
        return { node: r, start: a, end: v, collapse: R, coverStart: L, coverEnd: O };
      }
      function fc(e, n) {
        var i = Js;
        if (n == "left")
          for (var r = 0; r < e.length && (i = e[r]).left == i.right; r++)
            ;
        else
          for (var a = e.length - 1; a >= 0 && (i = e[a]).left == i.right; a--)
            ;
        return i;
      }
      function dc(e, n, i, r) {
        var a = Zs(n.map, i, r), v = a.node, R = a.start, L = a.end, O = a.collapse, W;
        if (v.nodeType == 3) {
          for (var V = 0; V < 4; V++) {
            for (; R && Ke(n.line.text.charAt(a.coverStart + R)); )
              --R;
            for (; a.coverStart + L < a.coverEnd && Ke(n.line.text.charAt(a.coverStart + L)); )
              ++L;
            if (f && g < 9 && R == 0 && L == a.coverEnd - a.coverStart ? W = v.parentNode.getBoundingClientRect() : W = fc(Q(v, R, L).getClientRects(), r), W.left || W.right || R == 0)
              break;
            L = R, R = R - 1, O = "right";
          }
          f && g < 11 && (W = cc(e.display.measure, W));
        } else {
          R > 0 && (O = r = "right");
          var k;
          e.options.lineWrapping && (k = v.getClientRects()).length > 1 ? W = k[r == "right" ? k.length - 1 : 0] : W = v.getBoundingClientRect();
        }
        if (f && g < 9 && !R && (!W || !W.left && !W.right)) {
          var Z = v.parentNode.getClientRects()[0];
          Z ? W = { left: Z.left, right: Z.left + Gr(e.display), top: Z.top, bottom: Z.bottom } : W = Js;
        }
        for (var J = W.top - n.rect.top, te = W.bottom - n.rect.top, ie = (J + te) / 2, de = n.view.measure.heights, he = 0; he < de.length - 1 && !(ie < de[he]); he++)
          ;
        var xe = he ? de[he - 1] : 0, ge = de[he], Te = {
          left: (O == "right" ? W.right : W.left) - n.rect.left,
          right: (O == "left" ? W.left : W.right) - n.rect.left,
          top: xe,
          bottom: ge
        };
        return !W.left && !W.right && (Te.bogus = !0), e.options.singleCursorHeightPerLine || (Te.rtop = J, Te.rbottom = te), Te;
      }
      function cc(e, n) {
        if (!window.screen || screen.logicalXDPI == null || screen.logicalXDPI == screen.deviceXDPI || !sa(e))
          return n;
        var i = screen.logicalXDPI / screen.deviceXDPI, r = screen.logicalYDPI / screen.deviceYDPI;
        return {
          left: n.left * i,
          right: n.right * i,
          top: n.top * r,
          bottom: n.bottom * r
        };
      }
      function qs(e) {
        if (e.measure && (e.measure.cache = {}, e.measure.heights = null, e.rest))
          for (var n = 0; n < e.rest.length; n++)
            e.measure.caches[n] = {};
      }
      function _s(e) {
        e.display.externalMeasure = null, H(e.display.lineMeasure);
        for (var n = 0; n < e.display.view.length; n++)
          qs(e.display.view[n]);
      }
      function bi(e) {
        _s(e), e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null, e.options.lineWrapping || (e.display.maxLineChanged = !0), e.display.lineNumChars = null;
      }
      function eu(e) {
        return D && w ? -(e.body.getBoundingClientRect().left - parseInt(getComputedStyle(e.body).marginLeft)) : e.defaultView.pageXOffset || (e.documentElement || e.body).scrollLeft;
      }
      function tu(e) {
        return D && w ? -(e.body.getBoundingClientRect().top - parseInt(getComputedStyle(e.body).marginTop)) : e.defaultView.pageYOffset || (e.documentElement || e.body).scrollTop;
      }
      function xa(e) {
        var n = Tn(e), i = n.widgets, r = 0;
        if (i)
          for (var a = 0; a < i.length; ++a)
            i[a].above && (r += Ei(i[a]));
        return r;
      }
      function yo(e, n, i, r, a) {
        if (!a) {
          var v = xa(n);
          i.top += v, i.bottom += v;
        }
        if (r == "line")
          return i;
        r || (r = "local");
        var R = Yn(n);
        if (r == "local" ? R += mo(e.display) : R -= e.display.viewOffset, r == "page" || r == "window") {
          var L = e.display.lineSpace.getBoundingClientRect();
          R += L.top + (r == "window" ? 0 : tu(Se(e)));
          var O = L.left + (r == "window" ? 0 : eu(Se(e)));
          i.left += O, i.right += O;
        }
        return i.top += R, i.bottom += R, i;
      }
      function nu(e, n, i) {
        if (i == "div")
          return n;
        var r = n.left, a = n.top;
        if (i == "page")
          r -= eu(Se(e)), a -= tu(Se(e));
        else if (i == "local" || !i) {
          var v = e.display.sizer.getBoundingClientRect();
          r += v.left, a += v.top;
        }
        var R = e.display.lineSpace.getBoundingClientRect();
        return { left: r - R.left, top: a - R.top };
      }
      function Ao(e, n, i, r, a) {
        return r || (r = we(e.doc, n.line)), yo(e, r, Xs(e, r, n.ch, a), i);
      }
      function wn(e, n, i, r, a, v) {
        r = r || we(e.doc, n.line), a || (a = Vr(e, r));
        function R(te, ie) {
          var de = Fn(e, a, te, ie ? "right" : "left", v);
          return ie ? de.left = de.right : de.right = de.left, yo(e, r, de, i);
        }
        var L = oe(r, e.doc.direction), O = n.ch, W = n.sticky;
        if (O >= r.text.length ? (O = r.text.length, W = "before") : O <= 0 && (O = 0, W = "after"), !L)
          return R(W == "before" ? O - 1 : O, W == "before");
        function V(te, ie, de) {
          var he = L[ie], xe = he.level == 1;
          return R(de ? te - 1 : te, xe != de);
        }
        var k = Oe(L, O, W), Z = me, J = V(O, k, W == "before");
        return Z != null && (J.other = V(O, Z, W != "before")), J;
      }
      function ru(e, n) {
        var i = 0;
        n = Fe(e.doc, n), e.options.lineWrapping || (i = Gr(e.display) * n.ch);
        var r = we(e.doc, n.line), a = Yn(r) + mo(e.display);
        return { left: i, right: i, top: a, bottom: a + r.height };
      }
      function Sa(e, n, i, r, a) {
        var v = ee(e, n, i);
        return v.xRel = a, r && (v.outside = r), v;
      }
      function Ea(e, n, i) {
        var r = e.doc;
        if (i += e.display.viewOffset, i < 0)
          return Sa(r.first, 0, null, -1, -1);
        var a = G(r, i), v = r.first + r.size - 1;
        if (a > v)
          return Sa(r.first + r.size - 1, we(r, v).text.length, null, 1, 1);
        n < 0 && (n = 0);
        for (var R = we(r, a); ; ) {
          var L = vc(e, R, a, n, i), O = jd(R, L.ch + (L.xRel > 0 || L.outside > 0 ? 1 : 0));
          if (!O)
            return L;
          var W = O.find(1);
          if (W.line == a)
            return W;
          R = we(r, a = W.line);
        }
      }
      function iu(e, n, i, r) {
        r -= xa(n);
        var a = n.text.length, v = We(function(R) {
          return Fn(e, i, R - 1).bottom <= r;
        }, a, 0);
        return a = We(function(R) {
          return Fn(e, i, R).top > r;
        }, v, a), { begin: v, end: a };
      }
      function ou(e, n, i, r) {
        i || (i = Vr(e, n));
        var a = yo(e, n, Fn(e, i, r), "line").top;
        return iu(e, n, i, a);
      }
      function ba(e, n, i, r) {
        return e.bottom <= i ? !1 : e.top > i ? !0 : (r ? e.left : e.right) > n;
      }
      function vc(e, n, i, r, a) {
        a -= Yn(n);
        var v = Vr(e, n), R = xa(n), L = 0, O = n.text.length, W = !0, V = oe(n, e.doc.direction);
        if (V) {
          var k = (e.options.lineWrapping ? hc : pc)(e, n, i, v, V, r, a);
          W = k.level != 1, L = W ? k.from : k.to - 1, O = W ? k.to : k.from - 1;
        }
        var Z = null, J = null, te = We(function(Re) {
          var Me = Fn(e, v, Re);
          return Me.top += R, Me.bottom += R, ba(Me, r, a, !1) ? (Me.top <= a && Me.left <= r && (Z = Re, J = Me), !0) : !1;
        }, L, O), ie, de, he = !1;
        if (J) {
          var xe = r - J.left < J.right - r, ge = xe == W;
          te = Z + (ge ? 0 : 1), de = ge ? "after" : "before", ie = xe ? J.left : J.right;
        } else {
          !W && (te == O || te == L) && te++, de = te == 0 ? "after" : te == n.text.length ? "before" : Fn(e, v, te - (W ? 1 : 0)).bottom + R <= a == W ? "after" : "before";
          var Te = wn(e, ee(i, te, de), "line", n, v);
          ie = Te.left, he = a < Te.top ? -1 : a >= Te.bottom ? 1 : 0;
        }
        return te = Xt(n.text, te, 1), Sa(i, te, de, he, r - ie);
      }
      function pc(e, n, i, r, a, v, R) {
        var L = We(function(k) {
          var Z = a[k], J = Z.level != 1;
          return ba(wn(
            e,
            ee(i, J ? Z.to : Z.from, J ? "before" : "after"),
            "line",
            n,
            r
          ), v, R, !0);
        }, 0, a.length - 1), O = a[L];
        if (L > 0) {
          var W = O.level != 1, V = wn(
            e,
            ee(i, W ? O.from : O.to, W ? "after" : "before"),
            "line",
            n,
            r
          );
          ba(V, v, R, !0) && V.top > R && (O = a[L - 1]);
        }
        return O;
      }
      function hc(e, n, i, r, a, v, R) {
        var L = iu(e, n, r, R), O = L.begin, W = L.end;
        /\s/.test(n.text.charAt(W - 1)) && W--;
        for (var V = null, k = null, Z = 0; Z < a.length; Z++) {
          var J = a[Z];
          if (!(J.from >= W || J.to <= O)) {
            var te = J.level != 1, ie = Fn(e, r, te ? Math.min(W, J.to) - 1 : Math.max(O, J.from)).right, de = ie < v ? v - ie + 1e9 : ie - v;
            (!V || k > de) && (V = J, k = de);
          }
        }
        return V || (V = a[a.length - 1]), V.from < O && (V = { from: O, to: V.to, level: V.level }), V.to > W && (V = { from: V.from, to: W, level: V.level }), V;
      }
      var Er;
      function Qr(e) {
        if (e.cachedTextHeight != null)
          return e.cachedTextHeight;
        if (Er == null) {
          Er = I("pre", null, "CodeMirror-line-like");
          for (var n = 0; n < 49; ++n)
            Er.appendChild(document.createTextNode("x")), Er.appendChild(I("br"));
          Er.appendChild(document.createTextNode("x"));
        }
        $(e.measure, Er);
        var i = Er.offsetHeight / 50;
        return i > 3 && (e.cachedTextHeight = i), H(e.measure), i || 1;
      }
      function Gr(e) {
        if (e.cachedCharWidth != null)
          return e.cachedCharWidth;
        var n = I("span", "xxxxxxxxxx"), i = I("pre", [n], "CodeMirror-line-like");
        $(e.measure, i);
        var r = n.getBoundingClientRect(), a = (r.right - r.left) / 10;
        return a > 2 && (e.cachedCharWidth = a), a || 10;
      }
      function Ca(e) {
        for (var n = e.display, i = {}, r = {}, a = n.gutters.clientLeft, v = n.gutters.firstChild, R = 0; v; v = v.nextSibling, ++R) {
          var L = e.display.gutterSpecs[R].className;
          i[L] = v.offsetLeft + v.clientLeft + a, r[L] = v.clientWidth;
        }
        return {
          fixedPos: Ta(n),
          gutterTotalWidth: n.gutters.offsetWidth,
          gutterLeft: i,
          gutterWidth: r,
          wrapperWidth: n.wrapper.clientWidth
        };
      }
      function Ta(e) {
        return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left;
      }
      function au(e) {
        var n = Qr(e.display), i = e.options.lineWrapping, r = i && Math.max(5, e.display.scroller.clientWidth / Gr(e.display) - 3);
        return function(a) {
          if (rr(e.doc, a))
            return 0;
          var v = 0;
          if (a.widgets)
            for (var R = 0; R < a.widgets.length; R++)
              a.widgets[R].height && (v += a.widgets[R].height);
          return i ? v + (Math.ceil(a.text.length / r) || 1) * n : v + n;
        };
      }
      function wa(e) {
        var n = e.doc, i = au(e);
        n.iter(function(r) {
          var a = i(r);
          a != r.height && un(r, a);
        });
      }
      function br(e, n, i, r) {
        var a = e.display;
        if (!i && pi(n).getAttribute("cm-not-content") == "true")
          return null;
        var v, R, L = a.lineSpace.getBoundingClientRect();
        try {
          v = n.clientX - L.left, R = n.clientY - L.top;
        } catch {
          return null;
        }
        var O = Ea(e, v, R), W;
        if (r && O.xRel > 0 && (W = we(e.doc, O.line).text).length == O.ch) {
          var V = pe(W, W.length, e.options.tabSize) - W.length;
          O = ee(O.line, Math.max(0, Math.round((v - ks(e.display).left) / Gr(e.display)) - V));
        }
        return O;
      }
      function Cr(e, n) {
        if (n >= e.display.viewTo || (n -= e.display.viewFrom, n < 0))
          return null;
        for (var i = e.display.view, r = 0; r < i.length; r++)
          if (n -= i[r].size, n < 0)
            return r;
      }
      function qt(e, n, i, r) {
        n == null && (n = e.doc.first), i == null && (i = e.doc.first + e.doc.size), r || (r = 0);
        var a = e.display;
        if (r && i < a.viewTo && (a.updateLineNumbers == null || a.updateLineNumbers > n) && (a.updateLineNumbers = n), e.curOp.viewChanged = !0, n >= a.viewTo)
          $n && va(e.doc, n) < a.viewTo && or(e);
        else if (i <= a.viewFrom)
          $n && Hs(e.doc, i + r) > a.viewFrom ? or(e) : (a.viewFrom += r, a.viewTo += r);
        else if (n <= a.viewFrom && i >= a.viewTo)
          or(e);
        else if (n <= a.viewFrom) {
          var v = xo(e, i, i + r, 1);
          v ? (a.view = a.view.slice(v.index), a.viewFrom = v.lineN, a.viewTo += r) : or(e);
        } else if (i >= a.viewTo) {
          var R = xo(e, n, n, -1);
          R ? (a.view = a.view.slice(0, R.index), a.viewTo = R.lineN) : or(e);
        } else {
          var L = xo(e, n, n, -1), O = xo(e, i, i + r, 1);
          L && O ? (a.view = a.view.slice(0, L.index).concat(go(e, L.lineN, O.lineN)).concat(a.view.slice(O.index)), a.viewTo += r) : or(e);
        }
        var W = a.externalMeasured;
        W && (i < W.lineN ? W.lineN += r : n < W.lineN + W.size && (a.externalMeasured = null));
      }
      function ir(e, n, i) {
        e.curOp.viewChanged = !0;
        var r = e.display, a = e.display.externalMeasured;
        if (a && n >= a.lineN && n < a.lineN + a.size && (r.externalMeasured = null), !(n < r.viewFrom || n >= r.viewTo)) {
          var v = r.view[Cr(e, n)];
          if (v.node != null) {
            var R = v.changes || (v.changes = []);
            be(R, i) == -1 && R.push(i);
          }
        }
      }
      function or(e) {
        e.display.viewFrom = e.display.viewTo = e.doc.first, e.display.view = [], e.display.viewOffset = 0;
      }
      function xo(e, n, i, r) {
        var a = Cr(e, n), v, R = e.display.view;
        if (!$n || i == e.doc.first + e.doc.size)
          return { index: a, lineN: i };
        for (var L = e.display.viewFrom, O = 0; O < a; O++)
          L += R[O].size;
        if (L != n) {
          if (r > 0) {
            if (a == R.length - 1)
              return null;
            v = L + R[a].size - n, a++;
          } else
            v = L - n;
          n += v, i += v;
        }
        for (; va(e.doc, i) != i; ) {
          if (a == (r < 0 ? 0 : R.length - 1))
            return null;
          i += r * R[a - (r < 0 ? 1 : 0)].size, a += r;
        }
        return { index: a, lineN: i };
      }
      function gc(e, n, i) {
        var r = e.display, a = r.view;
        a.length == 0 || n >= r.viewTo || i <= r.viewFrom ? (r.view = go(e, n, i), r.viewFrom = n) : (r.viewFrom > n ? r.view = go(e, n, r.viewFrom).concat(r.view) : r.viewFrom < n && (r.view = r.view.slice(Cr(e, n))), r.viewFrom = n, r.viewTo < i ? r.view = r.view.concat(go(e, r.viewTo, i)) : r.viewTo > i && (r.view = r.view.slice(0, Cr(e, i)))), r.viewTo = i;
      }
      function lu(e) {
        for (var n = e.display.view, i = 0, r = 0; r < n.length; r++) {
          var a = n[r];
          !a.hidden && (!a.node || a.changes) && ++i;
        }
        return i;
      }
      function Ci(e) {
        e.display.input.showSelection(e.display.input.prepareSelection());
      }
      function su(e, n) {
        n === void 0 && (n = !0);
        var i = e.doc, r = {}, a = r.cursors = document.createDocumentFragment(), v = r.selection = document.createDocumentFragment(), R = e.options.$customCursor;
        R && (n = !0);
        for (var L = 0; L < i.sel.ranges.length; L++)
          if (!(!n && L == i.sel.primIndex)) {
            var O = i.sel.ranges[L];
            if (!(O.from().line >= e.display.viewTo || O.to().line < e.display.viewFrom)) {
              var W = O.empty();
              if (R) {
                var V = R(e, O);
                V && Da(e, V, a);
              } else
                (W || e.options.showCursorWhenSelecting) && Da(e, O.head, a);
              W || mc(e, O, v);
            }
          }
        return r;
      }
      function Da(e, n, i) {
        var r = wn(e, n, "div", null, null, !e.options.singleCursorHeightPerLine), a = i.appendChild(I("div", "\xA0", "CodeMirror-cursor"));
        if (a.style.left = r.left + "px", a.style.top = r.top + "px", a.style.height = Math.max(0, r.bottom - r.top) * e.options.cursorHeight + "px", /\bcm-fat-cursor\b/.test(e.getWrapperElement().className)) {
          var v = Ao(e, n, "div", null, null), R = v.right - v.left;
          a.style.width = (R > 0 ? R : e.defaultCharWidth()) + "px";
        }
        if (r.other) {
          var L = i.appendChild(I("div", "\xA0", "CodeMirror-cursor CodeMirror-secondarycursor"));
          L.style.display = "", L.style.left = r.other.left + "px", L.style.top = r.other.top + "px", L.style.height = (r.other.bottom - r.other.top) * 0.85 + "px";
        }
      }
      function So(e, n) {
        return e.top - n.top || e.left - n.left;
      }
      function mc(e, n, i) {
        var r = e.display, a = e.doc, v = document.createDocumentFragment(), R = ks(e.display), L = R.left, O = Math.max(r.sizerWidth, Sr(e) - r.sizer.offsetLeft) - R.right, W = a.direction == "ltr";
        function V(ge, Te, Re, Me) {
          Te < 0 && (Te = 0), Te = Math.round(Te), Me = Math.round(Me), v.appendChild(I("div", null, "CodeMirror-selected", "position: absolute; left: " + ge + `px;
                             top: ` + Te + "px; width: " + (Re == null ? O - ge : Re) + `px;
                             height: ` + (Me - Te) + "px"));
        }
        function k(ge, Te, Re) {
          var Me = we(a, ge), Be = Me.text.length, _e, Mt;
          function rt(ht, tn) {
            return Ao(e, ee(ge, ht), "div", Me, tn);
          }
          function ln(ht, tn, Ot) {
            var yt = ou(e, Me, null, ht), gt = tn == "ltr" == (Ot == "after") ? "left" : "right", st = Ot == "after" ? yt.begin : yt.end - (/\s/.test(Me.text.charAt(yt.end - 1)) ? 2 : 1);
            return rt(st, gt)[gt];
          }
          var en = oe(Me, a.direction);
          return Ce(en, Te || 0, Re == null ? Be : Re, function(ht, tn, Ot, yt) {
            var gt = Ot == "ltr", st = rt(ht, gt ? "left" : "right"), nn = rt(tn - 1, gt ? "right" : "left"), oi = Te == null && ht == 0, dr = Re == null && tn == Be, zt = yt == 0, Bn = !en || yt == en.length - 1;
            if (nn.top - st.top <= 3) {
              var Rt = (W ? oi : dr) && zt, el = (W ? dr : oi) && Bn, kn = Rt ? L : (gt ? st : nn).left, Rr = el ? O : (gt ? nn : st).right;
              V(kn, st.top, Rr - kn, st.bottom);
            } else {
              var Pr, Vt, ai, tl;
              gt ? (Pr = W && oi && zt ? L : st.left, Vt = W ? O : ln(ht, Ot, "before"), ai = W ? L : ln(tn, Ot, "after"), tl = W && dr && Bn ? O : nn.right) : (Pr = W ? ln(ht, Ot, "before") : L, Vt = !W && oi && zt ? O : st.right, ai = !W && dr && Bn ? L : nn.left, tl = W ? ln(tn, Ot, "after") : O), V(Pr, st.top, Vt - Pr, st.bottom), st.bottom < nn.top && V(L, st.bottom, null, nn.top), V(ai, nn.top, tl - ai, nn.bottom);
            }
            (!_e || So(st, _e) < 0) && (_e = st), So(nn, _e) < 0 && (_e = nn), (!Mt || So(st, Mt) < 0) && (Mt = st), So(nn, Mt) < 0 && (Mt = nn);
          }), { start: _e, end: Mt };
        }
        var Z = n.from(), J = n.to();
        if (Z.line == J.line)
          k(Z.line, Z.ch, J.ch);
        else {
          var te = we(a, Z.line), ie = we(a, J.line), de = Tn(te) == Tn(ie), he = k(Z.line, Z.ch, de ? te.text.length + 1 : null).end, xe = k(J.line, de ? 0 : null, J.ch).start;
          de && (he.top < xe.top - 2 ? (V(he.right, he.top, null, he.bottom), V(L, xe.top, xe.left, xe.bottom)) : V(he.right, he.top, xe.left - he.right, he.bottom)), he.bottom < xe.top && V(L, he.bottom, null, xe.top);
        }
        i.appendChild(v);
      }
      function Ma(e) {
        if (!!e.state.focused) {
          var n = e.display;
          clearInterval(n.blinker);
          var i = !0;
          n.cursorDiv.style.visibility = "", e.options.cursorBlinkRate > 0 ? n.blinker = setInterval(function() {
            e.hasFocus() || kr(e), n.cursorDiv.style.visibility = (i = !i) ? "" : "hidden";
          }, e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (n.cursorDiv.style.visibility = "hidden");
        }
      }
      function uu(e) {
        e.hasFocus() || (e.display.input.focus(), e.state.focused || Pa(e));
      }
      function Ra(e) {
        e.state.delayingBlurEvent = !0, setTimeout(function() {
          e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1, e.state.focused && kr(e));
        }, 100);
      }
      function Pa(e, n) {
        e.state.delayingBlurEvent && !e.state.draggingText && (e.state.delayingBlurEvent = !1), e.options.readOnly != "nocursor" && (e.state.focused || ($e(e, "focus", e, n), e.state.focused = !0, X(e.display.wrapper, "CodeMirror-focused"), !e.curOp && e.display.selForContextMenu != e.doc.sel && (e.display.input.reset(), C && setTimeout(function() {
          return e.display.input.reset(!0);
        }, 20)), e.display.input.receivedFocus()), Ma(e));
      }
      function kr(e, n) {
        e.state.delayingBlurEvent || (e.state.focused && ($e(e, "blur", e, n), e.state.focused = !1, z(e.display.wrapper, "CodeMirror-focused")), clearInterval(e.display.blinker), setTimeout(function() {
          e.state.focused || (e.display.shift = !1);
        }, 150));
      }
      function Eo(e) {
        for (var n = e.display, i = n.lineDiv.offsetTop, r = Math.max(0, n.scroller.getBoundingClientRect().top), a = n.lineDiv.getBoundingClientRect().top, v = 0, R = 0; R < n.view.length; R++) {
          var L = n.view[R], O = e.options.lineWrapping, W = void 0, V = 0;
          if (!L.hidden) {
            if (a += L.line.height, f && g < 8) {
              var k = L.node.offsetTop + L.node.offsetHeight;
              W = k - i, i = k;
            } else {
              var Z = L.node.getBoundingClientRect();
              W = Z.bottom - Z.top, !O && L.text.firstChild && (V = L.text.firstChild.getBoundingClientRect().right - Z.left - 1);
            }
            var J = L.line.height - W;
            if ((J > 5e-3 || J < -5e-3) && (a < r && (v -= J), un(L.line, W), fu(L.line), L.rest))
              for (var te = 0; te < L.rest.length; te++)
                fu(L.rest[te]);
            if (V > e.display.sizerWidth) {
              var ie = Math.ceil(V / Gr(e.display));
              ie > e.display.maxLineLength && (e.display.maxLineLength = ie, e.display.maxLine = L.line, e.display.maxLineChanged = !0);
            }
          }
        }
        Math.abs(v) > 2 && (n.scroller.scrollTop += v);
      }
      function fu(e) {
        if (e.widgets)
          for (var n = 0; n < e.widgets.length; ++n) {
            var i = e.widgets[n], r = i.node.parentNode;
            r && (i.height = r.offsetHeight);
          }
      }
      function bo(e, n, i) {
        var r = i && i.top != null ? Math.max(0, i.top) : e.scroller.scrollTop;
        r = Math.floor(r - mo(e));
        var a = i && i.bottom != null ? i.bottom : r + e.wrapper.clientHeight, v = G(n, r), R = G(n, a);
        if (i && i.ensure) {
          var L = i.ensure.from.line, O = i.ensure.to.line;
          L < v ? (v = L, R = G(n, Yn(we(n, L)) + e.wrapper.clientHeight)) : Math.min(O, n.lastLine()) >= R && (v = G(n, Yn(we(n, O)) - e.wrapper.clientHeight), R = O);
        }
        return { from: v, to: Math.max(R, v + 1) };
      }
      function yc(e, n) {
        if (!Ge(e, "scrollCursorIntoView")) {
          var i = e.display, r = i.sizer.getBoundingClientRect(), a = null, v = i.wrapper.ownerDocument;
          if (n.top + r.top < 0 ? a = !0 : n.bottom + r.top > (v.defaultView.innerHeight || v.documentElement.clientHeight) && (a = !1), a != null && !m) {
            var R = I("div", "\u200B", null, `position: absolute;
                         top: ` + (n.top - i.viewOffset - mo(e.display)) + `px;
                         height: ` + (n.bottom - n.top + On(e) + i.barHeight) + `px;
                         left: ` + n.left + "px; width: " + Math.max(2, n.right - n.left) + "px;");
            e.display.lineSpace.appendChild(R), R.scrollIntoView(a), e.display.lineSpace.removeChild(R);
          }
        }
      }
      function Ac(e, n, i, r) {
        r == null && (r = 0);
        var a;
        !e.options.lineWrapping && n == i && (i = n.sticky == "before" ? ee(n.line, n.ch + 1, "before") : n, n = n.ch ? ee(n.line, n.sticky == "before" ? n.ch - 1 : n.ch, "after") : n);
        for (var v = 0; v < 5; v++) {
          var R = !1, L = wn(e, n), O = !i || i == n ? L : wn(e, i);
          a = {
            left: Math.min(L.left, O.left),
            top: Math.min(L.top, O.top) - r,
            right: Math.max(L.left, O.left),
            bottom: Math.max(L.bottom, O.bottom) + r
          };
          var W = Ia(e, a), V = e.doc.scrollTop, k = e.doc.scrollLeft;
          if (W.scrollTop != null && (wi(e, W.scrollTop), Math.abs(e.doc.scrollTop - V) > 1 && (R = !0)), W.scrollLeft != null && (Tr(e, W.scrollLeft), Math.abs(e.doc.scrollLeft - k) > 1 && (R = !0)), !R)
            break;
        }
        return a;
      }
      function xc(e, n) {
        var i = Ia(e, n);
        i.scrollTop != null && wi(e, i.scrollTop), i.scrollLeft != null && Tr(e, i.scrollLeft);
      }
      function Ia(e, n) {
        var i = e.display, r = Qr(e.display);
        n.top < 0 && (n.top = 0);
        var a = e.curOp && e.curOp.scrollTop != null ? e.curOp.scrollTop : i.scroller.scrollTop, v = ya(e), R = {};
        n.bottom - n.top > v && (n.bottom = n.top + v);
        var L = e.doc.height + ma(i), O = n.top < r, W = n.bottom > L - r;
        if (n.top < a)
          R.scrollTop = O ? 0 : n.top;
        else if (n.bottom > a + v) {
          var V = Math.min(n.top, (W ? L : n.bottom) - v);
          V != a && (R.scrollTop = V);
        }
        var k = e.options.fixedGutter ? 0 : i.gutters.offsetWidth, Z = e.curOp && e.curOp.scrollLeft != null ? e.curOp.scrollLeft : i.scroller.scrollLeft - k, J = Sr(e) - i.gutters.offsetWidth, te = n.right - n.left > J;
        return te && (n.right = n.left + J), n.left < 10 ? R.scrollLeft = 0 : n.left < Z ? R.scrollLeft = Math.max(0, n.left + k - (te ? 0 : 10)) : n.right > J + Z - 3 && (R.scrollLeft = n.right + (te ? 0 : 10) - J), R;
      }
      function La(e, n) {
        n != null && (Co(e), e.curOp.scrollTop = (e.curOp.scrollTop == null ? e.doc.scrollTop : e.curOp.scrollTop) + n);
      }
      function Kr(e) {
        Co(e);
        var n = e.getCursor();
        e.curOp.scrollToPos = { from: n, to: n, margin: e.options.cursorScrollMargin };
      }
      function Ti(e, n, i) {
        (n != null || i != null) && Co(e), n != null && (e.curOp.scrollLeft = n), i != null && (e.curOp.scrollTop = i);
      }
      function Sc(e, n) {
        Co(e), e.curOp.scrollToPos = n;
      }
      function Co(e) {
        var n = e.curOp.scrollToPos;
        if (n) {
          e.curOp.scrollToPos = null;
          var i = ru(e, n.from), r = ru(e, n.to);
          du(e, i, r, n.margin);
        }
      }
      function du(e, n, i, r) {
        var a = Ia(e, {
          left: Math.min(n.left, i.left),
          top: Math.min(n.top, i.top) - r,
          right: Math.max(n.right, i.right),
          bottom: Math.max(n.bottom, i.bottom) + r
        });
        Ti(e, a.scrollLeft, a.scrollTop);
      }
      function wi(e, n) {
        Math.abs(e.doc.scrollTop - n) < 2 || (t || Oa(e, { top: n }), cu(e, n, !0), t && Oa(e), Ri(e, 100));
      }
      function cu(e, n, i) {
        n = Math.max(0, Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, n)), !(e.display.scroller.scrollTop == n && !i) && (e.doc.scrollTop = n, e.display.scrollbars.setScrollTop(n), e.display.scroller.scrollTop != n && (e.display.scroller.scrollTop = n));
      }
      function Tr(e, n, i, r) {
        n = Math.max(0, Math.min(n, e.display.scroller.scrollWidth - e.display.scroller.clientWidth)), !((i ? n == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - n) < 2) && !r) && (e.doc.scrollLeft = n, mu(e), e.display.scroller.scrollLeft != n && (e.display.scroller.scrollLeft = n), e.display.scrollbars.setScrollLeft(n));
      }
      function Di(e) {
        var n = e.display, i = n.gutters.offsetWidth, r = Math.round(e.doc.height + ma(e.display));
        return {
          clientHeight: n.scroller.clientHeight,
          viewHeight: n.wrapper.clientHeight,
          scrollWidth: n.scroller.scrollWidth,
          clientWidth: n.scroller.clientWidth,
          viewWidth: n.wrapper.clientWidth,
          barLeft: e.options.fixedGutter ? i : 0,
          docHeight: r,
          scrollHeight: r + On(e) + n.barHeight,
          nativeBarWidth: n.nativeBarWidth,
          gutterWidth: i
        };
      }
      var wr = function(e, n, i) {
        this.cm = i;
        var r = this.vert = I("div", [I("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"), a = this.horiz = I("div", [I("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
        r.tabIndex = a.tabIndex = -1, e(r), e(a), ue(r, "scroll", function() {
          r.clientHeight && n(r.scrollTop, "vertical");
        }), ue(a, "scroll", function() {
          a.clientWidth && n(a.scrollLeft, "horizontal");
        }), this.checkedZeroWidth = !1, f && g < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px");
      };
      wr.prototype.update = function(e) {
        var n = e.scrollWidth > e.clientWidth + 1, i = e.scrollHeight > e.clientHeight + 1, r = e.nativeBarWidth;
        if (i) {
          this.vert.style.display = "block", this.vert.style.bottom = n ? r + "px" : "0";
          var a = e.viewHeight - (n ? r : 0);
          this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + a) + "px";
        } else
          this.vert.scrollTop = 0, this.vert.style.display = "", this.vert.firstChild.style.height = "0";
        if (n) {
          this.horiz.style.display = "block", this.horiz.style.right = i ? r + "px" : "0", this.horiz.style.left = e.barLeft + "px";
          var v = e.viewWidth - e.barLeft - (i ? r : 0);
          this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + v) + "px";
        } else
          this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";
        return !this.checkedZeroWidth && e.clientHeight > 0 && (r == 0 && this.zeroWidthHack(), this.checkedZeroWidth = !0), { right: i ? r : 0, bottom: n ? r : 0 };
      }, wr.prototype.setScrollLeft = function(e) {
        this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz");
      }, wr.prototype.setScrollTop = function(e) {
        this.vert.scrollTop != e && (this.vert.scrollTop = e), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert");
      }, wr.prototype.zeroWidthHack = function() {
        var e = T && !E ? "12px" : "18px";
        this.horiz.style.height = this.vert.style.width = e, this.horiz.style.visibility = this.vert.style.visibility = "hidden", this.disableHoriz = new Pe(), this.disableVert = new Pe();
      }, wr.prototype.enableZeroWidthBar = function(e, n, i) {
        e.style.visibility = "";
        function r() {
          var a = e.getBoundingClientRect(), v = i == "vert" ? document.elementFromPoint(a.right - 1, (a.top + a.bottom) / 2) : document.elementFromPoint((a.right + a.left) / 2, a.bottom - 1);
          v != e ? e.style.visibility = "hidden" : n.set(1e3, r);
        }
        n.set(1e3, r);
      }, wr.prototype.clear = function() {
        var e = this.horiz.parentNode;
        e.removeChild(this.horiz), e.removeChild(this.vert);
      };
      var Mi = function() {
      };
      Mi.prototype.update = function() {
        return { bottom: 0, right: 0 };
      }, Mi.prototype.setScrollLeft = function() {
      }, Mi.prototype.setScrollTop = function() {
      }, Mi.prototype.clear = function() {
      };
      function Xr(e, n) {
        n || (n = Di(e));
        var i = e.display.barWidth, r = e.display.barHeight;
        vu(e, n);
        for (var a = 0; a < 4 && i != e.display.barWidth || r != e.display.barHeight; a++)
          i != e.display.barWidth && e.options.lineWrapping && Eo(e), vu(e, Di(e)), i = e.display.barWidth, r = e.display.barHeight;
      }
      function vu(e, n) {
        var i = e.display, r = i.scrollbars.update(n);
        i.sizer.style.paddingRight = (i.barWidth = r.right) + "px", i.sizer.style.paddingBottom = (i.barHeight = r.bottom) + "px", i.heightForcer.style.borderBottom = r.bottom + "px solid transparent", r.right && r.bottom ? (i.scrollbarFiller.style.display = "block", i.scrollbarFiller.style.height = r.bottom + "px", i.scrollbarFiller.style.width = r.right + "px") : i.scrollbarFiller.style.display = "", r.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (i.gutterFiller.style.display = "block", i.gutterFiller.style.height = r.bottom + "px", i.gutterFiller.style.width = n.gutterWidth + "px") : i.gutterFiller.style.display = "";
      }
      var pu = { native: wr, null: Mi };
      function hu(e) {
        e.display.scrollbars && (e.display.scrollbars.clear(), e.display.scrollbars.addClass && z(e.display.wrapper, e.display.scrollbars.addClass)), e.display.scrollbars = new pu[e.options.scrollbarStyle](function(n) {
          e.display.wrapper.insertBefore(n, e.display.scrollbarFiller), ue(n, "mousedown", function() {
            e.state.focused && setTimeout(function() {
              return e.display.input.focus();
            }, 0);
          }), n.setAttribute("cm-not-content", "true");
        }, function(n, i) {
          i == "horizontal" ? Tr(e, n) : wi(e, n);
        }, e), e.display.scrollbars.addClass && X(e.display.wrapper, e.display.scrollbars.addClass);
      }
      var Ec = 0;
      function Dr(e) {
        e.curOp = {
          cm: e,
          viewChanged: !1,
          startHeight: e.doc.height,
          forceUpdate: !1,
          updateInput: 0,
          typing: !1,
          changeObjs: null,
          cursorActivityHandlers: null,
          cursorActivityCalled: 0,
          selectionChanged: !1,
          updateMaxLine: !1,
          scrollLeft: null,
          scrollTop: null,
          scrollToPos: null,
          focus: !1,
          id: ++Ec,
          markArrays: null
        }, _d(e.curOp);
      }
      function Mr(e) {
        var n = e.curOp;
        n && tc(n, function(i) {
          for (var r = 0; r < i.ops.length; r++)
            i.ops[r].cm.curOp = null;
          bc(i);
        });
      }
      function bc(e) {
        for (var n = e.ops, i = 0; i < n.length; i++)
          Cc(n[i]);
        for (var r = 0; r < n.length; r++)
          Tc(n[r]);
        for (var a = 0; a < n.length; a++)
          wc(n[a]);
        for (var v = 0; v < n.length; v++)
          Dc(n[v]);
        for (var R = 0; R < n.length; R++)
          Mc(n[R]);
      }
      function Cc(e) {
        var n = e.cm, i = n.display;
        Pc(n), e.updateMaxLine && ha(n), e.mustUpdate = e.viewChanged || e.forceUpdate || e.scrollTop != null || e.scrollToPos && (e.scrollToPos.from.line < i.viewFrom || e.scrollToPos.to.line >= i.viewTo) || i.maxLineChanged && n.options.lineWrapping, e.update = e.mustUpdate && new To(n, e.mustUpdate && { top: e.scrollTop, ensure: e.scrollToPos }, e.forceUpdate);
      }
      function Tc(e) {
        e.updatedDisplay = e.mustUpdate && Na(e.cm, e.update);
      }
      function wc(e) {
        var n = e.cm, i = n.display;
        e.updatedDisplay && Eo(n), e.barMeasure = Di(n), i.maxLineChanged && !n.options.lineWrapping && (e.adjustWidthTo = Xs(n, i.maxLine, i.maxLine.text.length).left + 3, n.display.sizerWidth = e.adjustWidthTo, e.barMeasure.scrollWidth = Math.max(i.scroller.clientWidth, i.sizer.offsetLeft + e.adjustWidthTo + On(n) + n.display.barWidth), e.maxScrollLeft = Math.max(0, i.sizer.offsetLeft + e.adjustWidthTo - Sr(n))), (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = i.input.prepareSelection());
      }
      function Dc(e) {
        var n = e.cm;
        e.adjustWidthTo != null && (n.display.sizer.style.minWidth = e.adjustWidthTo + "px", e.maxScrollLeft < n.doc.scrollLeft && Tr(n, Math.min(n.display.scroller.scrollLeft, e.maxScrollLeft), !0), n.display.maxLineChanged = !1);
        var i = e.focus && e.focus == q(ve(n));
        e.preparedSelection && n.display.input.showSelection(e.preparedSelection, i), (e.updatedDisplay || e.startHeight != n.doc.height) && Xr(n, e.barMeasure), e.updatedDisplay && Ba(n, e.barMeasure), e.selectionChanged && Ma(n), n.state.focused && e.updateInput && n.display.input.reset(e.typing), i && uu(e.cm);
      }
      function Mc(e) {
        var n = e.cm, i = n.display, r = n.doc;
        if (e.updatedDisplay && gu(n, e.update), i.wheelStartX != null && (e.scrollTop != null || e.scrollLeft != null || e.scrollToPos) && (i.wheelStartX = i.wheelStartY = null), e.scrollTop != null && cu(n, e.scrollTop, e.forceScroll), e.scrollLeft != null && Tr(n, e.scrollLeft, !0, !0), e.scrollToPos) {
          var a = Ac(
            n,
            Fe(r, e.scrollToPos.from),
            Fe(r, e.scrollToPos.to),
            e.scrollToPos.margin
          );
          yc(n, a);
        }
        var v = e.maybeHiddenMarkers, R = e.maybeUnhiddenMarkers;
        if (v)
          for (var L = 0; L < v.length; ++L)
            v[L].lines.length || $e(v[L], "hide");
        if (R)
          for (var O = 0; O < R.length; ++O)
            R[O].lines.length && $e(R[O], "unhide");
        i.wrapper.offsetHeight && (r.scrollTop = n.display.scroller.scrollTop), e.changeObjs && $e(n, "changes", n, e.changeObjs), e.update && e.update.finish();
      }
      function an(e, n) {
        if (e.curOp)
          return n();
        Dr(e);
        try {
          return n();
        } finally {
          Mr(e);
        }
      }
      function wt(e, n) {
        return function() {
          if (e.curOp)
            return n.apply(e, arguments);
          Dr(e);
          try {
            return n.apply(e, arguments);
          } finally {
            Mr(e);
          }
        };
      }
      function Yt(e) {
        return function() {
          if (this.curOp)
            return e.apply(this, arguments);
          Dr(this);
          try {
            return e.apply(this, arguments);
          } finally {
            Mr(this);
          }
        };
      }
      function Dt(e) {
        return function() {
          var n = this.cm;
          if (!n || n.curOp)
            return e.apply(this, arguments);
          Dr(n);
          try {
            return e.apply(this, arguments);
          } finally {
            Mr(n);
          }
        };
      }
      function Ri(e, n) {
        e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(n, re(Rc, e));
      }
      function Rc(e) {
        var n = e.doc;
        if (!(n.highlightFrontier >= e.display.viewTo)) {
          var i = +new Date() + e.options.workTime, r = yi(e, n.highlightFrontier), a = [];
          n.iter(r.line, Math.min(n.first + n.size, e.display.viewTo + 500), function(v) {
            if (r.line >= e.display.viewFrom) {
              var R = v.styles, L = v.text.length > e.options.maxHighlightLength ? Ln(n.mode, r.state) : null, O = bs(e, v, r, !0);
              L && (r.state = L), v.styles = O.styles;
              var W = v.styleClasses, V = O.classes;
              V ? v.styleClasses = V : W && (v.styleClasses = null);
              for (var k = !R || R.length != v.styles.length || W != V && (!W || !V || W.bgClass != V.bgClass || W.textClass != V.textClass), Z = 0; !k && Z < R.length; ++Z)
                k = R[Z] != v.styles[Z];
              k && a.push(r.line), v.stateAfter = r.save(), r.nextLine();
            } else
              v.text.length <= e.options.maxHighlightLength && ua(e, v.text, r), v.stateAfter = r.line % 5 == 0 ? r.save() : null, r.nextLine();
            if (+new Date() > i)
              return Ri(e, e.options.workDelay), !0;
          }), n.highlightFrontier = r.line, n.modeFrontier = Math.max(n.modeFrontier, r.line), a.length && an(e, function() {
            for (var v = 0; v < a.length; v++)
              ir(e, a[v], "text");
          });
        }
      }
      var To = function(e, n, i) {
        var r = e.display;
        this.viewport = n, this.visible = bo(r, e.doc, n), this.editorIsHidden = !r.wrapper.offsetWidth, this.wrapperHeight = r.wrapper.clientHeight, this.wrapperWidth = r.wrapper.clientWidth, this.oldDisplayWidth = Sr(e), this.force = i, this.dims = Ca(e), this.events = [];
      };
      To.prototype.signal = function(e, n) {
        Ze(e, n) && this.events.push(arguments);
      }, To.prototype.finish = function() {
        for (var e = 0; e < this.events.length; e++)
          $e.apply(null, this.events[e]);
      };
      function Pc(e) {
        var n = e.display;
        !n.scrollbarsClipped && n.scroller.offsetWidth && (n.nativeBarWidth = n.scroller.offsetWidth - n.scroller.clientWidth, n.heightForcer.style.height = On(e) + "px", n.sizer.style.marginBottom = -n.nativeBarWidth + "px", n.sizer.style.borderRightWidth = On(e) + "px", n.scrollbarsClipped = !0);
      }
      function Ic(e) {
        if (e.hasFocus())
          return null;
        var n = q(ve(e));
        if (!n || !K(e.display.lineDiv, n))
          return null;
        var i = { activeElt: n };
        if (window.getSelection) {
          var r = ae(e).getSelection();
          r.anchorNode && r.extend && K(e.display.lineDiv, r.anchorNode) && (i.anchorNode = r.anchorNode, i.anchorOffset = r.anchorOffset, i.focusNode = r.focusNode, i.focusOffset = r.focusOffset);
        }
        return i;
      }
      function Lc(e) {
        if (!(!e || !e.activeElt || e.activeElt == q(ce(e.activeElt))) && (e.activeElt.focus(), !/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName) && e.anchorNode && K(document.body, e.anchorNode) && K(document.body, e.focusNode))) {
          var n = e.activeElt.ownerDocument, i = n.defaultView.getSelection(), r = n.createRange();
          r.setEnd(e.anchorNode, e.anchorOffset), r.collapse(!1), i.removeAllRanges(), i.addRange(r), i.extend(e.focusNode, e.focusOffset);
        }
      }
      function Na(e, n) {
        var i = e.display, r = e.doc;
        if (n.editorIsHidden)
          return or(e), !1;
        if (!n.force && n.visible.from >= i.viewFrom && n.visible.to <= i.viewTo && (i.updateLineNumbers == null || i.updateLineNumbers >= i.viewTo) && i.renderedView == i.view && lu(e) == 0)
          return !1;
        yu(e) && (or(e), n.dims = Ca(e));
        var a = r.first + r.size, v = Math.max(n.visible.from - e.options.viewportMargin, r.first), R = Math.min(a, n.visible.to + e.options.viewportMargin);
        i.viewFrom < v && v - i.viewFrom < 20 && (v = Math.max(r.first, i.viewFrom)), i.viewTo > R && i.viewTo - R < 20 && (R = Math.min(a, i.viewTo)), $n && (v = va(e.doc, v), R = Hs(e.doc, R));
        var L = v != i.viewFrom || R != i.viewTo || i.lastWrapHeight != n.wrapperHeight || i.lastWrapWidth != n.wrapperWidth;
        gc(e, v, R), i.viewOffset = Yn(we(e.doc, i.viewFrom)), e.display.mover.style.top = i.viewOffset + "px";
        var O = lu(e);
        if (!L && O == 0 && !n.force && i.renderedView == i.view && (i.updateLineNumbers == null || i.updateLineNumbers >= i.viewTo))
          return !1;
        var W = Ic(e);
        return O > 4 && (i.lineDiv.style.display = "none"), Nc(e, i.updateLineNumbers, n.dims), O > 4 && (i.lineDiv.style.display = ""), i.renderedView = i.view, Lc(W), H(i.cursorDiv), H(i.selectionDiv), i.gutters.style.height = i.sizer.style.minHeight = 0, L && (i.lastWrapHeight = n.wrapperHeight, i.lastWrapWidth = n.wrapperWidth, Ri(e, 400)), i.updateLineNumbers = null, !0;
      }
      function gu(e, n) {
        for (var i = n.viewport, r = !0; ; r = !1) {
          if (!r || !e.options.lineWrapping || n.oldDisplayWidth == Sr(e)) {
            if (i && i.top != null && (i = { top: Math.min(e.doc.height + ma(e.display) - ya(e), i.top) }), n.visible = bo(e.display, e.doc, i), n.visible.from >= e.display.viewFrom && n.visible.to <= e.display.viewTo)
              break;
          } else
            r && (n.visible = bo(e.display, e.doc, i));
          if (!Na(e, n))
            break;
          Eo(e);
          var a = Di(e);
          Ci(e), Xr(e, a), Ba(e, a), n.force = !1;
        }
        n.signal(e, "update", e), (e.display.viewFrom != e.display.reportedViewFrom || e.display.viewTo != e.display.reportedViewTo) && (n.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo);
      }
      function Oa(e, n) {
        var i = new To(e, n);
        if (Na(e, i)) {
          Eo(e), gu(e, i);
          var r = Di(e);
          Ci(e), Xr(e, r), Ba(e, r), i.finish();
        }
      }
      function Nc(e, n, i) {
        var r = e.display, a = e.options.lineNumbers, v = r.lineDiv, R = v.firstChild;
        function L(te) {
          var ie = te.nextSibling;
          return C && T && e.display.currentWheelTarget == te ? te.style.display = "none" : te.parentNode.removeChild(te), ie;
        }
        for (var O = r.view, W = r.viewFrom, V = 0; V < O.length; V++) {
          var k = O[V];
          if (!k.hidden)
            if (!k.node || k.node.parentNode != v) {
              var Z = ac(e, k, W, i);
              v.insertBefore(Z, R);
            } else {
              for (; R != k.node; )
                R = L(R);
              var J = a && n != null && n <= W && k.lineNumber;
              k.changes && (be(k.changes, "gutter") > -1 && (J = !1), $s(e, k, W, i)), J && (H(k.lineNumber), k.lineNumber.appendChild(document.createTextNode(fe(e.options, W)))), R = k.node.nextSibling;
            }
          W += k.size;
        }
        for (; R; )
          R = L(R);
      }
      function Fa(e) {
        var n = e.gutters.offsetWidth;
        e.sizer.style.marginLeft = n + "px", Tt(e, "gutterChanged", e);
      }
      function Ba(e, n) {
        e.display.sizer.style.minHeight = n.docHeight + "px", e.display.heightForcer.style.top = n.docHeight + "px", e.display.gutters.style.height = n.docHeight + e.display.barHeight + On(e) + "px";
      }
      function mu(e) {
        var n = e.display, i = n.view;
        if (!(!n.alignWidgets && (!n.gutters.firstChild || !e.options.fixedGutter))) {
          for (var r = Ta(n) - n.scroller.scrollLeft + e.doc.scrollLeft, a = n.gutters.offsetWidth, v = r + "px", R = 0; R < i.length; R++)
            if (!i[R].hidden) {
              e.options.fixedGutter && (i[R].gutter && (i[R].gutter.style.left = v), i[R].gutterBackground && (i[R].gutterBackground.style.left = v));
              var L = i[R].alignable;
              if (L)
                for (var O = 0; O < L.length; O++)
                  L[O].style.left = v;
            }
          e.options.fixedGutter && (n.gutters.style.left = r + a + "px");
        }
      }
      function yu(e) {
        if (!e.options.lineNumbers)
          return !1;
        var n = e.doc, i = fe(e.options, n.first + n.size - 1), r = e.display;
        if (i.length != r.lineNumChars) {
          var a = r.measure.appendChild(I(
            "div",
            [I("div", i)],
            "CodeMirror-linenumber CodeMirror-gutter-elt"
          )), v = a.firstChild.offsetWidth, R = a.offsetWidth - v;
          return r.lineGutter.style.width = "", r.lineNumInnerWidth = Math.max(v, r.lineGutter.offsetWidth - R) + 1, r.lineNumWidth = r.lineNumInnerWidth + R, r.lineNumChars = r.lineNumInnerWidth ? i.length : -1, r.lineGutter.style.width = r.lineNumWidth + "px", Fa(e.display), !0;
        }
        return !1;
      }
      function Ha(e, n) {
        for (var i = [], r = !1, a = 0; a < e.length; a++) {
          var v = e[a], R = null;
          if (typeof v != "string" && (R = v.style, v = v.className), v == "CodeMirror-linenumbers")
            if (n)
              r = !0;
            else
              continue;
          i.push({ className: v, style: R });
        }
        return n && !r && i.push({ className: "CodeMirror-linenumbers", style: null }), i;
      }
      function Au(e) {
        var n = e.gutters, i = e.gutterSpecs;
        H(n), e.lineGutter = null;
        for (var r = 0; r < i.length; ++r) {
          var a = i[r], v = a.className, R = a.style, L = n.appendChild(I("div", null, "CodeMirror-gutter " + v));
          R && (L.style.cssText = R), v == "CodeMirror-linenumbers" && (e.lineGutter = L, L.style.width = (e.lineNumWidth || 1) + "px");
        }
        n.style.display = i.length ? "" : "none", Fa(e);
      }
      function Pi(e) {
        Au(e.display), qt(e), mu(e);
      }
      function Oc(e, n, i, r) {
        var a = this;
        this.input = i, a.scrollbarFiller = I("div", null, "CodeMirror-scrollbar-filler"), a.scrollbarFiller.setAttribute("cm-not-content", "true"), a.gutterFiller = I("div", null, "CodeMirror-gutter-filler"), a.gutterFiller.setAttribute("cm-not-content", "true"), a.lineDiv = Y("div", null, "CodeMirror-code"), a.selectionDiv = I("div", null, null, "position: relative; z-index: 1"), a.cursorDiv = I("div", null, "CodeMirror-cursors"), a.measure = I("div", null, "CodeMirror-measure"), a.lineMeasure = I("div", null, "CodeMirror-measure"), a.lineSpace = Y(
          "div",
          [a.measure, a.lineMeasure, a.selectionDiv, a.cursorDiv, a.lineDiv],
          null,
          "position: relative; outline: none"
        );
        var v = Y("div", [a.lineSpace], "CodeMirror-lines");
        a.mover = I("div", [v], null, "position: relative"), a.sizer = I("div", [a.mover], "CodeMirror-sizer"), a.sizerWidth = null, a.heightForcer = I("div", null, null, "position: absolute; height: " + je + "px; width: 1px;"), a.gutters = I("div", null, "CodeMirror-gutters"), a.lineGutter = null, a.scroller = I("div", [a.sizer, a.heightForcer, a.gutters], "CodeMirror-scroll"), a.scroller.setAttribute("tabIndex", "-1"), a.wrapper = I("div", [a.scrollbarFiller, a.gutterFiller, a.scroller], "CodeMirror"), D && b >= 105 && (a.wrapper.style.clipPath = "inset(0px)"), a.wrapper.setAttribute("translate", "no"), f && g < 8 && (a.gutters.style.zIndex = -1, a.scroller.style.paddingRight = 0), !C && !(t && p) && (a.scroller.draggable = !0), e && (e.appendChild ? e.appendChild(a.wrapper) : e(a.wrapper)), a.viewFrom = a.viewTo = n.first, a.reportedViewFrom = a.reportedViewTo = n.first, a.view = [], a.renderedView = null, a.externalMeasured = null, a.viewOffset = 0, a.lastWrapHeight = a.lastWrapWidth = 0, a.updateLineNumbers = null, a.nativeBarWidth = a.barHeight = a.barWidth = 0, a.scrollbarsClipped = !1, a.lineNumWidth = a.lineNumInnerWidth = a.lineNumChars = null, a.alignWidgets = !1, a.cachedCharWidth = a.cachedTextHeight = a.cachedPaddingH = null, a.maxLine = null, a.maxLineLength = 0, a.maxLineChanged = !1, a.wheelDX = a.wheelDY = a.wheelStartX = a.wheelStartY = null, a.shift = !1, a.selForContextMenu = null, a.activeTouch = null, a.gutterSpecs = Ha(r.gutters, r.lineNumbers), Au(a), i.init(a);
      }
      var wo = 0, Qn = null;
      f ? Qn = -0.53 : t ? Qn = 15 : D ? Qn = -0.7 : A && (Qn = -1 / 3);
      function xu(e) {
        var n = e.wheelDeltaX, i = e.wheelDeltaY;
        return n == null && e.detail && e.axis == e.HORIZONTAL_AXIS && (n = e.detail), i == null && e.detail && e.axis == e.VERTICAL_AXIS ? i = e.detail : i == null && (i = e.wheelDelta), { x: n, y: i };
      }
      function Fc(e) {
        var n = xu(e);
        return n.x *= Qn, n.y *= Qn, n;
      }
      function Su(e, n) {
        D && b == 102 && (e.display.chromeScrollHack == null ? e.display.sizer.style.pointerEvents = "none" : clearTimeout(e.display.chromeScrollHack), e.display.chromeScrollHack = setTimeout(function() {
          e.display.chromeScrollHack = null, e.display.sizer.style.pointerEvents = "";
        }, 100));
        var i = xu(n), r = i.x, a = i.y, v = Qn;
        n.deltaMode === 0 && (r = n.deltaX, a = n.deltaY, v = 1);
        var R = e.display, L = R.scroller, O = L.scrollWidth > L.clientWidth, W = L.scrollHeight > L.clientHeight;
        if (!!(r && O || a && W)) {
          if (a && T && C) {
            e:
              for (var V = n.target, k = R.view; V != L; V = V.parentNode)
                for (var Z = 0; Z < k.length; Z++)
                  if (k[Z].node == V) {
                    e.display.currentWheelTarget = V;
                    break e;
                  }
          }
          if (r && !t && !h && v != null) {
            a && W && wi(e, Math.max(0, L.scrollTop + a * v)), Tr(e, Math.max(0, L.scrollLeft + r * v)), (!a || a && W) && mt(n), R.wheelStartX = null;
            return;
          }
          if (a && v != null) {
            var J = a * v, te = e.doc.scrollTop, ie = te + R.wrapper.clientHeight;
            J < 0 ? te = Math.max(0, te + J - 50) : ie = Math.min(e.doc.height, ie + J + 50), Oa(e, { top: te, bottom: ie });
          }
          wo < 20 && n.deltaMode !== 0 && (R.wheelStartX == null ? (R.wheelStartX = L.scrollLeft, R.wheelStartY = L.scrollTop, R.wheelDX = r, R.wheelDY = a, setTimeout(function() {
            if (R.wheelStartX != null) {
              var de = L.scrollLeft - R.wheelStartX, he = L.scrollTop - R.wheelStartY, xe = he && R.wheelDY && he / R.wheelDY || de && R.wheelDX && de / R.wheelDX;
              R.wheelStartX = R.wheelStartY = null, xe && (Qn = (Qn * wo + xe) / (wo + 1), ++wo);
            }
          }, 200)) : (R.wheelDX += r, R.wheelDY += a));
        }
      }
      var fn = function(e, n) {
        this.ranges = e, this.primIndex = n;
      };
      fn.prototype.primary = function() {
        return this.ranges[this.primIndex];
      }, fn.prototype.equals = function(e) {
        if (e == this)
          return !0;
        if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length)
          return !1;
        for (var n = 0; n < this.ranges.length; n++) {
          var i = this.ranges[n], r = e.ranges[n];
          if (!Ve(i.anchor, r.anchor) || !Ve(i.head, r.head))
            return !1;
        }
        return !0;
      }, fn.prototype.deepCopy = function() {
        for (var e = [], n = 0; n < this.ranges.length; n++)
          e[n] = new Qe(Ct(this.ranges[n].anchor), Ct(this.ranges[n].head));
        return new fn(e, this.primIndex);
      }, fn.prototype.somethingSelected = function() {
        for (var e = 0; e < this.ranges.length; e++)
          if (!this.ranges[e].empty())
            return !0;
        return !1;
      }, fn.prototype.contains = function(e, n) {
        n || (n = e);
        for (var i = 0; i < this.ranges.length; i++) {
          var r = this.ranges[i];
          if (ye(n, r.from()) >= 0 && ye(e, r.to()) <= 0)
            return i;
        }
        return -1;
      };
      var Qe = function(e, n) {
        this.anchor = e, this.head = n;
      };
      Qe.prototype.from = function() {
        return jr(this.anchor, this.head);
      }, Qe.prototype.to = function() {
        return Zt(this.anchor, this.head);
      }, Qe.prototype.empty = function() {
        return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
      };
      function Dn(e, n, i) {
        var r = e && e.options.selectionsMayTouch, a = n[i];
        n.sort(function(Z, J) {
          return ye(Z.from(), J.from());
        }), i = be(n, a);
        for (var v = 1; v < n.length; v++) {
          var R = n[v], L = n[v - 1], O = ye(L.to(), R.from());
          if (r && !R.empty() ? O > 0 : O >= 0) {
            var W = jr(L.from(), R.from()), V = Zt(L.to(), R.to()), k = L.empty() ? R.from() == R.head : L.from() == L.head;
            v <= i && --i, n.splice(--v, 2, new Qe(k ? V : W, k ? W : V));
          }
        }
        return new fn(n, i);
      }
      function ar(e, n) {
        return new fn([new Qe(e, n || e)], 0);
      }
      function lr(e) {
        return e.text ? ee(
          e.from.line + e.text.length - 1,
          Ue(e.text).length + (e.text.length == 1 ? e.from.ch : 0)
        ) : e.to;
      }
      function Eu(e, n) {
        if (ye(e, n.from) < 0)
          return e;
        if (ye(e, n.to) <= 0)
          return lr(n);
        var i = e.line + n.text.length - (n.to.line - n.from.line) - 1, r = e.ch;
        return e.line == n.to.line && (r += lr(n).ch - n.to.ch), ee(i, r);
      }
      function Ua(e, n) {
        for (var i = [], r = 0; r < e.sel.ranges.length; r++) {
          var a = e.sel.ranges[r];
          i.push(new Qe(
            Eu(a.anchor, n),
            Eu(a.head, n)
          ));
        }
        return Dn(e.cm, i, e.sel.primIndex);
      }
      function bu(e, n, i) {
        return e.line == n.line ? ee(i.line, e.ch - n.ch + i.ch) : ee(i.line + (e.line - n.line), e.ch);
      }
      function Bc(e, n, i) {
        for (var r = [], a = ee(e.first, 0), v = a, R = 0; R < n.length; R++) {
          var L = n[R], O = bu(L.from, a, v), W = bu(lr(L), a, v);
          if (a = L.to, v = W, i == "around") {
            var V = e.sel.ranges[R], k = ye(V.head, V.anchor) < 0;
            r[R] = new Qe(k ? W : O, k ? O : W);
          } else
            r[R] = new Qe(O, O);
        }
        return new fn(r, e.sel.primIndex);
      }
      function za(e) {
        e.doc.mode = Ur(e.options, e.doc.modeOption), Ii(e);
      }
      function Ii(e) {
        e.doc.iter(function(n) {
          n.stateAfter && (n.stateAfter = null), n.styles && (n.styles = null);
        }), e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first, Ri(e, 100), e.state.modeGen++, e.curOp && qt(e);
      }
      function Cu(e, n) {
        return n.from.ch == 0 && n.to.ch == 0 && Ue(n.text) == "" && (!e.cm || e.cm.options.wholeLineUpdateBefore);
      }
      function Wa(e, n, i, r) {
        function a(xe) {
          return i ? i[xe] : null;
        }
        function v(xe, ge, Te) {
          Vd(xe, ge, Te, r), Tt(xe, "change", xe, n);
        }
        function R(xe, ge) {
          for (var Te = [], Re = xe; Re < ge; ++Re)
            Te.push(new $r(W[Re], a(Re), r));
          return Te;
        }
        var L = n.from, O = n.to, W = n.text, V = we(e, L.line), k = we(e, O.line), Z = Ue(W), J = a(W.length - 1), te = O.line - L.line;
        if (n.full)
          e.insert(0, R(0, W.length)), e.remove(W.length, e.size - W.length);
        else if (Cu(e, n)) {
          var ie = R(0, W.length - 1);
          v(k, k.text, J), te && e.remove(L.line, te), ie.length && e.insert(L.line, ie);
        } else if (V == k)
          if (W.length == 1)
            v(V, V.text.slice(0, L.ch) + Z + V.text.slice(O.ch), J);
          else {
            var de = R(1, W.length - 1);
            de.push(new $r(Z + V.text.slice(O.ch), J, r)), v(V, V.text.slice(0, L.ch) + W[0], a(0)), e.insert(L.line + 1, de);
          }
        else if (W.length == 1)
          v(V, V.text.slice(0, L.ch) + W[0] + k.text.slice(O.ch), a(0)), e.remove(L.line + 1, te);
        else {
          v(V, V.text.slice(0, L.ch) + W[0], a(0)), v(k, Z + k.text.slice(O.ch), J);
          var he = R(1, W.length - 1);
          te > 1 && e.remove(L.line + 1, te - 1), e.insert(L.line + 1, he);
        }
        Tt(e, "change", e, n);
      }
      function sr(e, n, i) {
        function r(a, v, R) {
          if (a.linked)
            for (var L = 0; L < a.linked.length; ++L) {
              var O = a.linked[L];
              if (O.doc != v) {
                var W = R && O.sharedHist;
                i && !W || (n(O.doc, W), r(O.doc, a, W));
              }
            }
        }
        r(e, null, !0);
      }
      function Tu(e, n) {
        if (n.cm)
          throw new Error("This document is already in use.");
        e.doc = n, n.cm = e, wa(e), za(e), wu(e), e.options.direction = n.direction, e.options.lineWrapping || ha(e), e.options.mode = n.modeOption, qt(e);
      }
      function wu(e) {
        (e.doc.direction == "rtl" ? X : z)(e.display.lineDiv, "CodeMirror-rtl");
      }
      function Hc(e) {
        an(e, function() {
          wu(e), qt(e);
        });
      }
      function Do(e) {
        this.done = [], this.undone = [], this.undoDepth = e ? e.undoDepth : 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e ? e.maxGeneration : 1;
      }
      function ja(e, n) {
        var i = { from: Ct(n.from), to: lr(n), text: jn(e, n.from, n.to) };
        return Ru(e, i, n.from.line, n.to.line + 1), sr(e, function(r) {
          return Ru(r, i, n.from.line, n.to.line + 1);
        }, !0), i;
      }
      function Du(e) {
        for (; e.length; ) {
          var n = Ue(e);
          if (n.ranges)
            e.pop();
          else
            break;
        }
      }
      function Uc(e, n) {
        if (n)
          return Du(e.done), Ue(e.done);
        if (e.done.length && !Ue(e.done).ranges)
          return Ue(e.done);
        if (e.done.length > 1 && !e.done[e.done.length - 2].ranges)
          return e.done.pop(), Ue(e.done);
      }
      function Mu(e, n, i, r) {
        var a = e.history;
        a.undone.length = 0;
        var v = +new Date(), R, L;
        if ((a.lastOp == r || a.lastOrigin == n.origin && n.origin && (n.origin.charAt(0) == "+" && a.lastModTime > v - (e.cm ? e.cm.options.historyEventDelay : 500) || n.origin.charAt(0) == "*")) && (R = Uc(a, a.lastOp == r)))
          L = Ue(R.changes), ye(n.from, n.to) == 0 && ye(n.from, L.to) == 0 ? L.to = lr(n) : R.changes.push(ja(e, n));
        else {
          var O = Ue(a.done);
          for ((!O || !O.ranges) && Mo(e.sel, a.done), R = {
            changes: [ja(e, n)],
            generation: a.generation
          }, a.done.push(R); a.done.length > a.undoDepth; )
            a.done.shift(), a.done[0].ranges || a.done.shift();
        }
        a.done.push(i), a.generation = ++a.maxGeneration, a.lastModTime = a.lastSelTime = v, a.lastOp = a.lastSelOp = r, a.lastOrigin = a.lastSelOrigin = n.origin, L || $e(e, "historyAdded");
      }
      function zc(e, n, i, r) {
        var a = n.charAt(0);
        return a == "*" || a == "+" && i.ranges.length == r.ranges.length && i.somethingSelected() == r.somethingSelected() && new Date() - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500);
      }
      function Wc(e, n, i, r) {
        var a = e.history, v = r && r.origin;
        i == a.lastSelOp || v && a.lastSelOrigin == v && (a.lastModTime == a.lastSelTime && a.lastOrigin == v || zc(e, v, Ue(a.done), n)) ? a.done[a.done.length - 1] = n : Mo(n, a.done), a.lastSelTime = +new Date(), a.lastSelOrigin = v, a.lastSelOp = i, r && r.clearRedo !== !1 && Du(a.undone);
      }
      function Mo(e, n) {
        var i = Ue(n);
        i && i.ranges && i.equals(e) || n.push(e);
      }
      function Ru(e, n, i, r) {
        var a = n["spans_" + e.id], v = 0;
        e.iter(Math.max(e.first, i), Math.min(e.first + e.size, r), function(R) {
          R.markedSpans && ((a || (a = n["spans_" + e.id] = {}))[v] = R.markedSpans), ++v;
        });
      }
      function jc(e) {
        if (!e)
          return null;
        for (var n, i = 0; i < e.length; ++i)
          e[i].marker.explicitlyCleared ? n || (n = e.slice(0, i)) : n && n.push(e[i]);
        return n ? n.length ? n : null : e;
      }
      function $c(e, n) {
        var i = n["spans_" + e.id];
        if (!i)
          return null;
        for (var r = [], a = 0; a < n.text.length; ++a)
          r.push(jc(i[a]));
        return r;
      }
      function Pu(e, n) {
        var i = $c(e, n), r = da(e, n);
        if (!i)
          return r;
        if (!r)
          return i;
        for (var a = 0; a < i.length; ++a) {
          var v = i[a], R = r[a];
          if (v && R) {
            e:
              for (var L = 0; L < R.length; ++L) {
                for (var O = R[L], W = 0; W < v.length; ++W)
                  if (v[W].marker == O.marker)
                    continue e;
                v.push(O);
              }
          } else
            R && (i[a] = R);
        }
        return i;
      }
      function Jr(e, n, i) {
        for (var r = [], a = 0; a < e.length; ++a) {
          var v = e[a];
          if (v.ranges) {
            r.push(i ? fn.prototype.deepCopy.call(v) : v);
            continue;
          }
          var R = v.changes, L = [];
          r.push({ changes: L });
          for (var O = 0; O < R.length; ++O) {
            var W = R[O], V = void 0;
            if (L.push({ from: W.from, to: W.to, text: W.text }), n)
              for (var k in W)
                (V = k.match(/^spans_(\d+)$/)) && be(n, Number(V[1])) > -1 && (Ue(L)[k] = W[k], delete W[k]);
          }
        }
        return r;
      }
      function $a(e, n, i, r) {
        if (r) {
          var a = e.anchor;
          if (i) {
            var v = ye(n, a) < 0;
            v != ye(i, a) < 0 ? (a = n, n = i) : v != ye(n, i) < 0 && (n = i);
          }
          return new Qe(a, n);
        } else
          return new Qe(i || n, n);
      }
      function Ro(e, n, i, r, a) {
        a == null && (a = e.cm && (e.cm.display.shift || e.extend)), Ut(e, new fn([$a(e.sel.primary(), n, i, a)], 0), r);
      }
      function Iu(e, n, i) {
        for (var r = [], a = e.cm && (e.cm.display.shift || e.extend), v = 0; v < e.sel.ranges.length; v++)
          r[v] = $a(e.sel.ranges[v], n[v], null, a);
        var R = Dn(e.cm, r, e.sel.primIndex);
        Ut(e, R, i);
      }
      function Ya(e, n, i, r) {
        var a = e.sel.ranges.slice(0);
        a[n] = i, Ut(e, Dn(e.cm, a, e.sel.primIndex), r);
      }
      function Lu(e, n, i, r) {
        Ut(e, ar(n, i), r);
      }
      function Yc(e, n, i) {
        var r = {
          ranges: n.ranges,
          update: function(a) {
            this.ranges = [];
            for (var v = 0; v < a.length; v++)
              this.ranges[v] = new Qe(
                Fe(e, a[v].anchor),
                Fe(e, a[v].head)
              );
          },
          origin: i && i.origin
        };
        return $e(e, "beforeSelectionChange", e, r), e.cm && $e(e.cm, "beforeSelectionChange", e.cm, r), r.ranges != n.ranges ? Dn(e.cm, r.ranges, r.ranges.length - 1) : n;
      }
      function Nu(e, n, i) {
        var r = e.history.done, a = Ue(r);
        a && a.ranges ? (r[r.length - 1] = n, Po(e, n, i)) : Ut(e, n, i);
      }
      function Ut(e, n, i) {
        Po(e, n, i), Wc(e, e.sel, e.cm ? e.cm.curOp.id : NaN, i);
      }
      function Po(e, n, i) {
        (Ze(e, "beforeSelectionChange") || e.cm && Ze(e.cm, "beforeSelectionChange")) && (n = Yc(e, n, i));
        var r = i && i.bias || (ye(n.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
        Ou(e, Bu(e, n, r, !0)), !(i && i.scroll === !1) && e.cm && e.cm.getOption("readOnly") != "nocursor" && Kr(e.cm);
      }
      function Ou(e, n) {
        n.equals(e.sel) || (e.sel = n, e.cm && (e.cm.curOp.updateInput = 1, e.cm.curOp.selectionChanged = !0, at(e.cm)), Tt(e, "cursorActivity", e));
      }
      function Fu(e) {
        Ou(e, Bu(e, e.sel, null, !1));
      }
      function Bu(e, n, i, r) {
        for (var a, v = 0; v < n.ranges.length; v++) {
          var R = n.ranges[v], L = n.ranges.length == e.sel.ranges.length && e.sel.ranges[v], O = Io(e, R.anchor, L && L.anchor, i, r), W = R.head == R.anchor ? O : Io(e, R.head, L && L.head, i, r);
          (a || O != R.anchor || W != R.head) && (a || (a = n.ranges.slice(0, v)), a[v] = new Qe(O, W));
        }
        return a ? Dn(e.cm, a, n.primIndex) : n;
      }
      function Zr(e, n, i, r, a) {
        var v = we(e, n.line);
        if (v.markedSpans)
          for (var R = 0; R < v.markedSpans.length; ++R) {
            var L = v.markedSpans[R], O = L.marker, W = "selectLeft" in O ? !O.selectLeft : O.inclusiveLeft, V = "selectRight" in O ? !O.selectRight : O.inclusiveRight;
            if ((L.from == null || (W ? L.from <= n.ch : L.from < n.ch)) && (L.to == null || (V ? L.to >= n.ch : L.to > n.ch))) {
              if (a && ($e(O, "beforeCursorEnter"), O.explicitlyCleared))
                if (v.markedSpans) {
                  --R;
                  continue;
                } else
                  break;
              if (!O.atomic)
                continue;
              if (i) {
                var k = O.find(r < 0 ? 1 : -1), Z = void 0;
                if ((r < 0 ? V : W) && (k = Hu(e, k, -r, k && k.line == n.line ? v : null)), k && k.line == n.line && (Z = ye(k, i)) && (r < 0 ? Z < 0 : Z > 0))
                  return Zr(e, k, n, r, a);
              }
              var J = O.find(r < 0 ? -1 : 1);
              return (r < 0 ? W : V) && (J = Hu(e, J, r, J.line == n.line ? v : null)), J ? Zr(e, J, n, r, a) : null;
            }
          }
        return n;
      }
      function Io(e, n, i, r, a) {
        var v = r || 1, R = Zr(e, n, i, v, a) || !a && Zr(e, n, i, v, !0) || Zr(e, n, i, -v, a) || !a && Zr(e, n, i, -v, !0);
        return R || (e.cantEdit = !0, ee(e.first, 0));
      }
      function Hu(e, n, i, r) {
        return i < 0 && n.ch == 0 ? n.line > e.first ? Fe(e, ee(n.line - 1)) : null : i > 0 && n.ch == (r || we(e, n.line)).text.length ? n.line < e.first + e.size - 1 ? ee(n.line + 1, 0) : null : new ee(n.line, n.ch + i);
      }
      function Uu(e) {
        e.setSelection(ee(e.firstLine(), 0), ee(e.lastLine()), Nt);
      }
      function zu(e, n, i) {
        var r = {
          canceled: !1,
          from: n.from,
          to: n.to,
          text: n.text,
          origin: n.origin,
          cancel: function() {
            return r.canceled = !0;
          }
        };
        return i && (r.update = function(a, v, R, L) {
          a && (r.from = Fe(e, a)), v && (r.to = Fe(e, v)), R && (r.text = R), L !== void 0 && (r.origin = L);
        }), $e(e, "beforeChange", e, r), e.cm && $e(e.cm, "beforeChange", e.cm, r), r.canceled ? (e.cm && (e.cm.curOp.updateInput = 2), null) : { from: r.from, to: r.to, text: r.text, origin: r.origin };
      }
      function qr(e, n, i) {
        if (e.cm) {
          if (!e.cm.curOp)
            return wt(e.cm, qr)(e, n, i);
          if (e.cm.state.suppressEdits)
            return;
        }
        if (!((Ze(e, "beforeChange") || e.cm && Ze(e.cm, "beforeChange")) && (n = zu(e, n, !0), !n))) {
          var r = Ps && !i && Wd(e, n.from, n.to);
          if (r)
            for (var a = r.length - 1; a >= 0; --a)
              Wu(e, { from: r[a].from, to: r[a].to, text: a ? [""] : n.text, origin: n.origin });
          else
            Wu(e, n);
        }
      }
      function Wu(e, n) {
        if (!(n.text.length == 1 && n.text[0] == "" && ye(n.from, n.to) == 0)) {
          var i = Ua(e, n);
          Mu(e, n, i, e.cm ? e.cm.curOp.id : NaN), Li(e, n, i, da(e, n));
          var r = [];
          sr(e, function(a, v) {
            !v && be(r, a.history) == -1 && (Vu(a.history, n), r.push(a.history)), Li(a, n, null, da(a, n));
          });
        }
      }
      function Lo(e, n, i) {
        var r = e.cm && e.cm.state.suppressEdits;
        if (!(r && !i)) {
          for (var a = e.history, v, R = e.sel, L = n == "undo" ? a.done : a.undone, O = n == "undo" ? a.undone : a.done, W = 0; W < L.length && (v = L[W], !(i ? v.ranges && !v.equals(e.sel) : !v.ranges)); W++)
            ;
          if (W != L.length) {
            for (a.lastOrigin = a.lastSelOrigin = null; ; )
              if (v = L.pop(), v.ranges) {
                if (Mo(v, O), i && !v.equals(e.sel)) {
                  Ut(e, v, { clearRedo: !1 });
                  return;
                }
                R = v;
              } else if (r) {
                L.push(v);
                return;
              } else
                break;
            var V = [];
            Mo(R, O), O.push({ changes: V, generation: a.generation }), a.generation = v.generation || ++a.maxGeneration;
            for (var k = Ze(e, "beforeChange") || e.cm && Ze(e.cm, "beforeChange"), Z = function(ie) {
              var de = v.changes[ie];
              if (de.origin = n, k && !zu(e, de, !1))
                return L.length = 0, {};
              V.push(ja(e, de));
              var he = ie ? Ua(e, de) : Ue(L);
              Li(e, de, he, Pu(e, de)), !ie && e.cm && e.cm.scrollIntoView({ from: de.from, to: lr(de) });
              var xe = [];
              sr(e, function(ge, Te) {
                !Te && be(xe, ge.history) == -1 && (Vu(ge.history, de), xe.push(ge.history)), Li(ge, de, null, Pu(ge, de));
              });
            }, J = v.changes.length - 1; J >= 0; --J) {
              var te = Z(J);
              if (te)
                return te.v;
            }
          }
        }
      }
      function ju(e, n) {
        if (n != 0 && (e.first += n, e.sel = new fn(Ht(e.sel.ranges, function(a) {
          return new Qe(
            ee(a.anchor.line + n, a.anchor.ch),
            ee(a.head.line + n, a.head.ch)
          );
        }), e.sel.primIndex), e.cm)) {
          qt(e.cm, e.first, e.first - n, n);
          for (var i = e.cm.display, r = i.viewFrom; r < i.viewTo; r++)
            ir(e.cm, r, "gutter");
        }
      }
      function Li(e, n, i, r) {
        if (e.cm && !e.cm.curOp)
          return wt(e.cm, Li)(e, n, i, r);
        if (n.to.line < e.first) {
          ju(e, n.text.length - 1 - (n.to.line - n.from.line));
          return;
        }
        if (!(n.from.line > e.lastLine())) {
          if (n.from.line < e.first) {
            var a = n.text.length - 1 - (e.first - n.from.line);
            ju(e, a), n = {
              from: ee(e.first, 0),
              to: ee(n.to.line + a, n.to.ch),
              text: [Ue(n.text)],
              origin: n.origin
            };
          }
          var v = e.lastLine();
          n.to.line > v && (n = {
            from: n.from,
            to: ee(v, we(e, v).text.length),
            text: [n.text[0]],
            origin: n.origin
          }), n.removed = jn(e, n.from, n.to), i || (i = Ua(e, n)), e.cm ? Vc(e.cm, n, r) : Wa(e, n, r), Po(e, i, Nt), e.cantEdit && Io(e, ee(e.firstLine(), 0)) && (e.cantEdit = !1);
        }
      }
      function Vc(e, n, i) {
        var r = e.doc, a = e.display, v = n.from, R = n.to, L = !1, O = v.line;
        e.options.lineWrapping || (O = j(Tn(we(r, v.line))), r.iter(O, R.line + 1, function(J) {
          if (J == a.maxLine)
            return L = !0, !0;
        })), r.sel.contains(n.from, n.to) > -1 && at(e), Wa(r, n, i, au(e)), e.options.lineWrapping || (r.iter(O, v.line + n.text.length, function(J) {
          var te = ho(J);
          te > a.maxLineLength && (a.maxLine = J, a.maxLineLength = te, a.maxLineChanged = !0, L = !1);
        }), L && (e.curOp.updateMaxLine = !0)), Nd(r, v.line), Ri(e, 400);
        var W = n.text.length - (R.line - v.line) - 1;
        n.full ? qt(e) : v.line == R.line && n.text.length == 1 && !Cu(e.doc, n) ? ir(e, v.line, "text") : qt(e, v.line, R.line + 1, W);
        var V = Ze(e, "changes"), k = Ze(e, "change");
        if (k || V) {
          var Z = {
            from: v,
            to: R,
            text: n.text,
            removed: n.removed,
            origin: n.origin
          };
          k && Tt(e, "change", e, Z), V && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(Z);
        }
        e.display.selForContextMenu = null;
      }
      function _r(e, n, i, r, a) {
        var v;
        r || (r = i), ye(r, i) < 0 && (v = [r, i], i = v[0], r = v[1]), typeof n == "string" && (n = e.splitLines(n)), qr(e, { from: i, to: r, text: n, origin: a });
      }
      function $u(e, n, i, r) {
        i < e.line ? e.line += r : n < e.line && (e.line = n, e.ch = 0);
      }
      function Yu(e, n, i, r) {
        for (var a = 0; a < e.length; ++a) {
          var v = e[a], R = !0;
          if (v.ranges) {
            v.copied || (v = e[a] = v.deepCopy(), v.copied = !0);
            for (var L = 0; L < v.ranges.length; L++)
              $u(v.ranges[L].anchor, n, i, r), $u(v.ranges[L].head, n, i, r);
            continue;
          }
          for (var O = 0; O < v.changes.length; ++O) {
            var W = v.changes[O];
            if (i < W.from.line)
              W.from = ee(W.from.line + r, W.from.ch), W.to = ee(W.to.line + r, W.to.ch);
            else if (n <= W.to.line) {
              R = !1;
              break;
            }
          }
          R || (e.splice(0, a + 1), a = 0);
        }
      }
      function Vu(e, n) {
        var i = n.from.line, r = n.to.line, a = n.text.length - (r - i) - 1;
        Yu(e.done, i, r, a), Yu(e.undone, i, r, a);
      }
      function Ni(e, n, i, r) {
        var a = n, v = n;
        return typeof n == "number" ? v = we(e, Ss(e, n)) : a = j(n), a == null ? null : (r(v, a) && e.cm && ir(e.cm, a, i), v);
      }
      function Oi(e) {
        this.lines = e, this.parent = null;
        for (var n = 0, i = 0; i < e.length; ++i)
          e[i].parent = this, n += e[i].height;
        this.height = n;
      }
      Oi.prototype = {
        chunkSize: function() {
          return this.lines.length;
        },
        removeInner: function(e, n) {
          for (var i = e, r = e + n; i < r; ++i) {
            var a = this.lines[i];
            this.height -= a.height, Qd(a), Tt(a, "delete");
          }
          this.lines.splice(e, n);
        },
        collapse: function(e) {
          e.push.apply(e, this.lines);
        },
        insertInner: function(e, n, i) {
          this.height += i, this.lines = this.lines.slice(0, e).concat(n).concat(this.lines.slice(e));
          for (var r = 0; r < n.length; ++r)
            n[r].parent = this;
        },
        iterN: function(e, n, i) {
          for (var r = e + n; e < r; ++e)
            if (i(this.lines[e]))
              return !0;
        }
      };
      function Fi(e) {
        this.children = e;
        for (var n = 0, i = 0, r = 0; r < e.length; ++r) {
          var a = e[r];
          n += a.chunkSize(), i += a.height, a.parent = this;
        }
        this.size = n, this.height = i, this.parent = null;
      }
      Fi.prototype = {
        chunkSize: function() {
          return this.size;
        },
        removeInner: function(e, n) {
          this.size -= n;
          for (var i = 0; i < this.children.length; ++i) {
            var r = this.children[i], a = r.chunkSize();
            if (e < a) {
              var v = Math.min(n, a - e), R = r.height;
              if (r.removeInner(e, v), this.height -= R - r.height, a == v && (this.children.splice(i--, 1), r.parent = null), (n -= v) == 0)
                break;
              e = 0;
            } else
              e -= a;
          }
          if (this.size - n < 25 && (this.children.length > 1 || !(this.children[0] instanceof Oi))) {
            var L = [];
            this.collapse(L), this.children = [new Oi(L)], this.children[0].parent = this;
          }
        },
        collapse: function(e) {
          for (var n = 0; n < this.children.length; ++n)
            this.children[n].collapse(e);
        },
        insertInner: function(e, n, i) {
          this.size += n.length, this.height += i;
          for (var r = 0; r < this.children.length; ++r) {
            var a = this.children[r], v = a.chunkSize();
            if (e <= v) {
              if (a.insertInner(e, n, i), a.lines && a.lines.length > 50) {
                for (var R = a.lines.length % 25 + 25, L = R; L < a.lines.length; ) {
                  var O = new Oi(a.lines.slice(L, L += 25));
                  a.height -= O.height, this.children.splice(++r, 0, O), O.parent = this;
                }
                a.lines = a.lines.slice(0, R), this.maybeSpill();
              }
              break;
            }
            e -= v;
          }
        },
        maybeSpill: function() {
          if (!(this.children.length <= 10)) {
            var e = this;
            do {
              var n = e.children.splice(e.children.length - 5, 5), i = new Fi(n);
              if (e.parent) {
                e.size -= i.size, e.height -= i.height;
                var a = be(e.parent.children, e);
                e.parent.children.splice(a + 1, 0, i);
              } else {
                var r = new Fi(e.children);
                r.parent = e, e.children = [r, i], e = r;
              }
              i.parent = e.parent;
            } while (e.children.length > 10);
            e.parent.maybeSpill();
          }
        },
        iterN: function(e, n, i) {
          for (var r = 0; r < this.children.length; ++r) {
            var a = this.children[r], v = a.chunkSize();
            if (e < v) {
              var R = Math.min(n, v - e);
              if (a.iterN(e, R, i))
                return !0;
              if ((n -= R) == 0)
                break;
              e = 0;
            } else
              e -= v;
          }
        }
      };
      var Bi = function(e, n, i) {
        if (i)
          for (var r in i)
            i.hasOwnProperty(r) && (this[r] = i[r]);
        this.doc = e, this.node = n;
      };
      Bi.prototype.clear = function() {
        var e = this.doc.cm, n = this.line.widgets, i = this.line, r = j(i);
        if (!(r == null || !n)) {
          for (var a = 0; a < n.length; ++a)
            n[a] == this && n.splice(a--, 1);
          n.length || (i.widgets = null);
          var v = Ei(this);
          un(i, Math.max(0, i.height - v)), e && (an(e, function() {
            Qu(e, i, -v), ir(e, r, "widget");
          }), Tt(e, "lineWidgetCleared", e, this, r));
        }
      }, Bi.prototype.changed = function() {
        var e = this, n = this.height, i = this.doc.cm, r = this.line;
        this.height = null;
        var a = Ei(this) - n;
        !a || (rr(this.doc, r) || un(r, r.height + a), i && an(i, function() {
          i.curOp.forceUpdate = !0, Qu(i, r, a), Tt(i, "lineWidgetChanged", i, e, j(r));
        }));
      }, $t(Bi);
      function Qu(e, n, i) {
        Yn(n) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && La(e, i);
      }
      function Qc(e, n, i, r) {
        var a = new Bi(e, i, r), v = e.cm;
        return v && a.noHScroll && (v.display.alignWidgets = !0), Ni(e, n, "widget", function(R) {
          var L = R.widgets || (R.widgets = []);
          if (a.insertAt == null ? L.push(a) : L.splice(Math.min(L.length, Math.max(0, a.insertAt)), 0, a), a.line = R, v && !rr(e, R)) {
            var O = Yn(R) < e.scrollTop;
            un(R, R.height + Ei(a)), O && La(v, a.height), v.curOp.forceUpdate = !0;
          }
          return !0;
        }), v && Tt(v, "lineWidgetAdded", v, a, typeof n == "number" ? n : j(n)), a;
      }
      var Gu = 0, ur = function(e, n) {
        this.lines = [], this.type = n, this.doc = e, this.id = ++Gu;
      };
      ur.prototype.clear = function() {
        if (!this.explicitlyCleared) {
          var e = this.doc.cm, n = e && !e.curOp;
          if (n && Dr(e), Ze(this, "clear")) {
            var i = this.find();
            i && Tt(this, "clear", i.from, i.to);
          }
          for (var r = null, a = null, v = 0; v < this.lines.length; ++v) {
            var R = this.lines[v], L = Ai(R.markedSpans, this);
            e && !this.collapsed ? ir(e, j(R), "text") : e && (L.to != null && (a = j(R)), L.from != null && (r = j(R))), R.markedSpans = Bd(R.markedSpans, L), L.from == null && this.collapsed && !rr(this.doc, R) && e && un(R, Qr(e.display));
          }
          if (e && this.collapsed && !e.options.lineWrapping)
            for (var O = 0; O < this.lines.length; ++O) {
              var W = Tn(this.lines[O]), V = ho(W);
              V > e.display.maxLineLength && (e.display.maxLine = W, e.display.maxLineLength = V, e.display.maxLineChanged = !0);
            }
          r != null && e && this.collapsed && qt(e, r, a + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, e && Fu(e.doc)), e && Tt(e, "markerCleared", e, this, r, a), n && Mr(e), this.parent && this.parent.clear();
        }
      }, ur.prototype.find = function(e, n) {
        e == null && this.type == "bookmark" && (e = 1);
        for (var i, r, a = 0; a < this.lines.length; ++a) {
          var v = this.lines[a], R = Ai(v.markedSpans, this);
          if (R.from != null && (i = ee(n ? v : j(v), R.from), e == -1))
            return i;
          if (R.to != null && (r = ee(n ? v : j(v), R.to), e == 1))
            return r;
        }
        return i && { from: i, to: r };
      }, ur.prototype.changed = function() {
        var e = this, n = this.find(-1, !0), i = this, r = this.doc.cm;
        !n || !r || an(r, function() {
          var a = n.line, v = j(n.line), R = Aa(r, v);
          if (R && (qs(R), r.curOp.selectionChanged = r.curOp.forceUpdate = !0), r.curOp.updateMaxLine = !0, !rr(i.doc, a) && i.height != null) {
            var L = i.height;
            i.height = null;
            var O = Ei(i) - L;
            O && un(a, a.height + O);
          }
          Tt(r, "markerChanged", r, e);
        });
      }, ur.prototype.attachLine = function(e) {
        if (!this.lines.length && this.doc.cm) {
          var n = this.doc.cm.curOp;
          (!n.maybeHiddenMarkers || be(n.maybeHiddenMarkers, this) == -1) && (n.maybeUnhiddenMarkers || (n.maybeUnhiddenMarkers = [])).push(this);
        }
        this.lines.push(e);
      }, ur.prototype.detachLine = function(e) {
        if (this.lines.splice(be(this.lines, e), 1), !this.lines.length && this.doc.cm) {
          var n = this.doc.cm.curOp;
          (n.maybeHiddenMarkers || (n.maybeHiddenMarkers = [])).push(this);
        }
      }, $t(ur);
      function ei(e, n, i, r, a) {
        if (r && r.shared)
          return Gc(e, n, i, r, a);
        if (e.cm && !e.cm.curOp)
          return wt(e.cm, ei)(e, n, i, r, a);
        var v = new ur(e, a), R = ye(n, i);
        if (r && se(r, v, !1), R > 0 || R == 0 && v.clearWhenEmpty !== !1)
          return v;
        if (v.replacedWith && (v.collapsed = !0, v.widgetNode = Y("span", [v.replacedWith], "CodeMirror-widget"), r.handleMouseEvents || v.widgetNode.setAttribute("cm-ignore-events", "true"), r.insertLeft && (v.widgetNode.insertLeft = !0)), v.collapsed) {
          if (Bs(e, n.line, n, i, v) || n.line != i.line && Bs(e, i.line, n, i, v))
            throw new Error("Inserting collapsed marker partially overlapping an existing one");
          Fd();
        }
        v.addToHistory && Mu(e, { from: n, to: i, origin: "markText" }, e.sel, NaN);
        var L = n.line, O = e.cm, W;
        if (e.iter(L, i.line + 1, function(k) {
          O && v.collapsed && !O.options.lineWrapping && Tn(k) == O.display.maxLine && (W = !0), v.collapsed && L != n.line && un(k, 0), Hd(k, new fo(
            v,
            L == n.line ? n.ch : null,
            L == i.line ? i.ch : null
          ), e.cm && e.cm.curOp), ++L;
        }), v.collapsed && e.iter(n.line, i.line + 1, function(k) {
          rr(e, k) && un(k, 0);
        }), v.clearOnEnter && ue(v, "beforeCursorEnter", function() {
          return v.clear();
        }), v.readOnly && (Od(), (e.history.done.length || e.history.undone.length) && e.clearHistory()), v.collapsed && (v.id = ++Gu, v.atomic = !0), O) {
          if (W && (O.curOp.updateMaxLine = !0), v.collapsed)
            qt(O, n.line, i.line + 1);
          else if (v.className || v.startStyle || v.endStyle || v.css || v.attributes || v.title)
            for (var V = n.line; V <= i.line; V++)
              ir(O, V, "text");
          v.atomic && Fu(O.doc), Tt(O, "markerAdded", O, v);
        }
        return v;
      }
      var Hi = function(e, n) {
        this.markers = e, this.primary = n;
        for (var i = 0; i < e.length; ++i)
          e[i].parent = this;
      };
      Hi.prototype.clear = function() {
        if (!this.explicitlyCleared) {
          this.explicitlyCleared = !0;
          for (var e = 0; e < this.markers.length; ++e)
            this.markers[e].clear();
          Tt(this, "clear");
        }
      }, Hi.prototype.find = function(e, n) {
        return this.primary.find(e, n);
      }, $t(Hi);
      function Gc(e, n, i, r, a) {
        r = se(r), r.shared = !1;
        var v = [ei(e, n, i, r, a)], R = v[0], L = r.widgetNode;
        return sr(e, function(O) {
          L && (r.widgetNode = L.cloneNode(!0)), v.push(ei(O, Fe(O, n), Fe(O, i), r, a));
          for (var W = 0; W < O.linked.length; ++W)
            if (O.linked[W].isParent)
              return;
          R = Ue(v);
        }), new Hi(v, R);
      }
      function ku(e) {
        return e.findMarks(ee(e.first, 0), e.clipPos(ee(e.lastLine())), function(n) {
          return n.parent;
        });
      }
      function kc(e, n) {
        for (var i = 0; i < n.length; i++) {
          var r = n[i], a = r.find(), v = e.clipPos(a.from), R = e.clipPos(a.to);
          if (ye(v, R)) {
            var L = ei(e, v, R, r.primary, r.primary.type);
            r.markers.push(L), L.parent = r;
          }
        }
      }
      function Kc(e) {
        for (var n = function(r) {
          var a = e[r], v = [a.primary.doc];
          sr(a.primary.doc, function(O) {
            return v.push(O);
          });
          for (var R = 0; R < a.markers.length; R++) {
            var L = a.markers[R];
            be(v, L.doc) == -1 && (L.parent = null, a.markers.splice(R--, 1));
          }
        }, i = 0; i < e.length; i++)
          n(i);
      }
      var Xc = 0, _t = function(e, n, i, r, a) {
        if (!(this instanceof _t))
          return new _t(e, n, i, r, a);
        i == null && (i = 0), Fi.call(this, [new Oi([new $r("", null)])]), this.first = i, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.modeFrontier = this.highlightFrontier = i;
        var v = ee(i, 0);
        this.sel = ar(v), this.history = new Do(null), this.id = ++Xc, this.modeOption = n, this.lineSep = r, this.direction = a == "rtl" ? "rtl" : "ltr", this.extend = !1, typeof e == "string" && (e = this.splitLines(e)), Wa(this, { from: v, to: v, text: e }), Ut(this, ar(v), Nt);
      };
      _t.prototype = hn(Fi.prototype, {
        constructor: _t,
        iter: function(e, n, i) {
          i ? this.iterN(e - this.first, n - e, i) : this.iterN(this.first, this.first + this.size, e);
        },
        insert: function(e, n) {
          for (var i = 0, r = 0; r < n.length; ++r)
            i += n[r].height;
          this.insertInner(e - this.first, n, i);
        },
        remove: function(e, n) {
          this.removeInner(e - this.first, n);
        },
        getValue: function(e) {
          var n = mi(this, this.first, this.first + this.size);
          return e === !1 ? n : n.join(e || this.lineSeparator());
        },
        setValue: Dt(function(e) {
          var n = ee(this.first, 0), i = this.first + this.size - 1;
          qr(this, {
            from: n,
            to: ee(i, we(this, i).text.length),
            text: this.splitLines(e),
            origin: "setValue",
            full: !0
          }, !0), this.cm && Ti(this.cm, 0, 0), Ut(this, ar(n), Nt);
        }),
        replaceRange: function(e, n, i, r) {
          n = Fe(this, n), i = i ? Fe(this, i) : n, _r(this, e, n, i, r);
        },
        getRange: function(e, n, i) {
          var r = jn(this, Fe(this, e), Fe(this, n));
          return i === !1 ? r : i === "" ? r.join("") : r.join(i || this.lineSeparator());
        },
        getLine: function(e) {
          var n = this.getLineHandle(e);
          return n && n.text;
        },
        getLineHandle: function(e) {
          if (ne(this, e))
            return we(this, e);
        },
        getLineNumber: function(e) {
          return j(e);
        },
        getLineHandleVisualStart: function(e) {
          return typeof e == "number" && (e = we(this, e)), Tn(e);
        },
        lineCount: function() {
          return this.size;
        },
        firstLine: function() {
          return this.first;
        },
        lastLine: function() {
          return this.first + this.size - 1;
        },
        clipPos: function(e) {
          return Fe(this, e);
        },
        getCursor: function(e) {
          var n = this.sel.primary(), i;
          return e == null || e == "head" ? i = n.head : e == "anchor" ? i = n.anchor : e == "end" || e == "to" || e === !1 ? i = n.to() : i = n.from(), i;
        },
        listSelections: function() {
          return this.sel.ranges;
        },
        somethingSelected: function() {
          return this.sel.somethingSelected();
        },
        setCursor: Dt(function(e, n, i) {
          Lu(this, Fe(this, typeof e == "number" ? ee(e, n || 0) : e), null, i);
        }),
        setSelection: Dt(function(e, n, i) {
          Lu(this, Fe(this, e), Fe(this, n || e), i);
        }),
        extendSelection: Dt(function(e, n, i) {
          Ro(this, Fe(this, e), n && Fe(this, n), i);
        }),
        extendSelections: Dt(function(e, n) {
          Iu(this, Es(this, e), n);
        }),
        extendSelectionsBy: Dt(function(e, n) {
          var i = Ht(this.sel.ranges, e);
          Iu(this, Es(this, i), n);
        }),
        setSelections: Dt(function(e, n, i) {
          if (!!e.length) {
            for (var r = [], a = 0; a < e.length; a++)
              r[a] = new Qe(
                Fe(this, e[a].anchor),
                Fe(this, e[a].head || e[a].anchor)
              );
            n == null && (n = Math.min(e.length - 1, this.sel.primIndex)), Ut(this, Dn(this.cm, r, n), i);
          }
        }),
        addSelection: Dt(function(e, n, i) {
          var r = this.sel.ranges.slice(0);
          r.push(new Qe(Fe(this, e), Fe(this, n || e))), Ut(this, Dn(this.cm, r, r.length - 1), i);
        }),
        getSelection: function(e) {
          for (var n = this.sel.ranges, i, r = 0; r < n.length; r++) {
            var a = jn(this, n[r].from(), n[r].to());
            i = i ? i.concat(a) : a;
          }
          return e === !1 ? i : i.join(e || this.lineSeparator());
        },
        getSelections: function(e) {
          for (var n = [], i = this.sel.ranges, r = 0; r < i.length; r++) {
            var a = jn(this, i[r].from(), i[r].to());
            e !== !1 && (a = a.join(e || this.lineSeparator())), n[r] = a;
          }
          return n;
        },
        replaceSelection: function(e, n, i) {
          for (var r = [], a = 0; a < this.sel.ranges.length; a++)
            r[a] = e;
          this.replaceSelections(r, n, i || "+input");
        },
        replaceSelections: Dt(function(e, n, i) {
          for (var r = [], a = this.sel, v = 0; v < a.ranges.length; v++) {
            var R = a.ranges[v];
            r[v] = { from: R.from(), to: R.to(), text: this.splitLines(e[v]), origin: i };
          }
          for (var L = n && n != "end" && Bc(this, r, n), O = r.length - 1; O >= 0; O--)
            qr(this, r[O]);
          L ? Nu(this, L) : this.cm && Kr(this.cm);
        }),
        undo: Dt(function() {
          Lo(this, "undo");
        }),
        redo: Dt(function() {
          Lo(this, "redo");
        }),
        undoSelection: Dt(function() {
          Lo(this, "undo", !0);
        }),
        redoSelection: Dt(function() {
          Lo(this, "redo", !0);
        }),
        setExtending: function(e) {
          this.extend = e;
        },
        getExtending: function() {
          return this.extend;
        },
        historySize: function() {
          for (var e = this.history, n = 0, i = 0, r = 0; r < e.done.length; r++)
            e.done[r].ranges || ++n;
          for (var a = 0; a < e.undone.length; a++)
            e.undone[a].ranges || ++i;
          return { undo: n, redo: i };
        },
        clearHistory: function() {
          var e = this;
          this.history = new Do(this.history), sr(this, function(n) {
            return n.history = e.history;
          }, !0);
        },
        markClean: function() {
          this.cleanGeneration = this.changeGeneration(!0);
        },
        changeGeneration: function(e) {
          return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation;
        },
        isClean: function(e) {
          return this.history.generation == (e || this.cleanGeneration);
        },
        getHistory: function() {
          return {
            done: Jr(this.history.done),
            undone: Jr(this.history.undone)
          };
        },
        setHistory: function(e) {
          var n = this.history = new Do(this.history);
          n.done = Jr(e.done.slice(0), null, !0), n.undone = Jr(e.undone.slice(0), null, !0);
        },
        setGutterMarker: Dt(function(e, n, i) {
          return Ni(this, e, "gutter", function(r) {
            var a = r.gutterMarkers || (r.gutterMarkers = {});
            return a[n] = i, !i && xn(a) && (r.gutterMarkers = null), !0;
          });
        }),
        clearGutter: Dt(function(e) {
          var n = this;
          this.iter(function(i) {
            i.gutterMarkers && i.gutterMarkers[e] && Ni(n, i, "gutter", function() {
              return i.gutterMarkers[e] = null, xn(i.gutterMarkers) && (i.gutterMarkers = null), !0;
            });
          });
        }),
        lineInfo: function(e) {
          var n;
          if (typeof e == "number") {
            if (!ne(this, e) || (n = e, e = we(this, e), !e))
              return null;
          } else if (n = j(e), n == null)
            return null;
          return {
            line: n,
            handle: e,
            text: e.text,
            gutterMarkers: e.gutterMarkers,
            textClass: e.textClass,
            bgClass: e.bgClass,
            wrapClass: e.wrapClass,
            widgets: e.widgets
          };
        },
        addLineClass: Dt(function(e, n, i) {
          return Ni(this, e, n == "gutter" ? "gutter" : "class", function(r) {
            var a = n == "text" ? "textClass" : n == "background" ? "bgClass" : n == "gutter" ? "gutterClass" : "wrapClass";
            if (!r[a])
              r[a] = i;
            else {
              if (P(i).test(r[a]))
                return !1;
              r[a] += " " + i;
            }
            return !0;
          });
        }),
        removeLineClass: Dt(function(e, n, i) {
          return Ni(this, e, n == "gutter" ? "gutter" : "class", function(r) {
            var a = n == "text" ? "textClass" : n == "background" ? "bgClass" : n == "gutter" ? "gutterClass" : "wrapClass", v = r[a];
            if (v)
              if (i == null)
                r[a] = null;
              else {
                var R = v.match(P(i));
                if (!R)
                  return !1;
                var L = R.index + R[0].length;
                r[a] = v.slice(0, R.index) + (!R.index || L == v.length ? "" : " ") + v.slice(L) || null;
              }
            else
              return !1;
            return !0;
          });
        }),
        addLineWidget: Dt(function(e, n, i) {
          return Qc(this, e, n, i);
        }),
        removeLineWidget: function(e) {
          e.clear();
        },
        markText: function(e, n, i) {
          return ei(this, Fe(this, e), Fe(this, n), i, i && i.type || "range");
        },
        setBookmark: function(e, n) {
          var i = {
            replacedWith: n && (n.nodeType == null ? n.widget : n),
            insertLeft: n && n.insertLeft,
            clearWhenEmpty: !1,
            shared: n && n.shared,
            handleMouseEvents: n && n.handleMouseEvents
          };
          return e = Fe(this, e), ei(this, e, e, i, "bookmark");
        },
        findMarksAt: function(e) {
          e = Fe(this, e);
          var n = [], i = we(this, e.line).markedSpans;
          if (i)
            for (var r = 0; r < i.length; ++r) {
              var a = i[r];
              (a.from == null || a.from <= e.ch) && (a.to == null || a.to >= e.ch) && n.push(a.marker.parent || a.marker);
            }
          return n;
        },
        findMarks: function(e, n, i) {
          e = Fe(this, e), n = Fe(this, n);
          var r = [], a = e.line;
          return this.iter(e.line, n.line + 1, function(v) {
            var R = v.markedSpans;
            if (R)
              for (var L = 0; L < R.length; L++) {
                var O = R[L];
                !(O.to != null && a == e.line && e.ch >= O.to || O.from == null && a != e.line || O.from != null && a == n.line && O.from >= n.ch) && (!i || i(O.marker)) && r.push(O.marker.parent || O.marker);
              }
            ++a;
          }), r;
        },
        getAllMarks: function() {
          var e = [];
          return this.iter(function(n) {
            var i = n.markedSpans;
            if (i)
              for (var r = 0; r < i.length; ++r)
                i[r].from != null && e.push(i[r].marker);
          }), e;
        },
        posFromIndex: function(e) {
          var n, i = this.first, r = this.lineSeparator().length;
          return this.iter(function(a) {
            var v = a.text.length + r;
            if (v > e)
              return n = e, !0;
            e -= v, ++i;
          }), Fe(this, ee(i, n));
        },
        indexFromPos: function(e) {
          e = Fe(this, e);
          var n = e.ch;
          if (e.line < this.first || e.ch < 0)
            return 0;
          var i = this.lineSeparator().length;
          return this.iter(this.first, e.line, function(r) {
            n += r.text.length + i;
          }), n;
        },
        copy: function(e) {
          var n = new _t(
            mi(this, this.first, this.first + this.size),
            this.modeOption,
            this.first,
            this.lineSep,
            this.direction
          );
          return n.scrollTop = this.scrollTop, n.scrollLeft = this.scrollLeft, n.sel = this.sel, n.extend = !1, e && (n.history.undoDepth = this.history.undoDepth, n.setHistory(this.getHistory())), n;
        },
        linkedDoc: function(e) {
          e || (e = {});
          var n = this.first, i = this.first + this.size;
          e.from != null && e.from > n && (n = e.from), e.to != null && e.to < i && (i = e.to);
          var r = new _t(mi(this, n, i), e.mode || this.modeOption, n, this.lineSep, this.direction);
          return e.sharedHist && (r.history = this.history), (this.linked || (this.linked = [])).push({ doc: r, sharedHist: e.sharedHist }), r.linked = [{ doc: this, isParent: !0, sharedHist: e.sharedHist }], kc(r, ku(this)), r;
        },
        unlinkDoc: function(e) {
          if (e instanceof nt && (e = e.doc), this.linked)
            for (var n = 0; n < this.linked.length; ++n) {
              var i = this.linked[n];
              if (i.doc == e) {
                this.linked.splice(n, 1), e.unlinkDoc(this), Kc(ku(this));
                break;
              }
            }
          if (e.history == this.history) {
            var r = [e.id];
            sr(e, function(a) {
              return r.push(a.id);
            }, !0), e.history = new Do(null), e.history.done = Jr(this.history.done, r), e.history.undone = Jr(this.history.undone, r);
          }
        },
        iterLinkedDocs: function(e) {
          sr(this, e);
        },
        getMode: function() {
          return this.mode;
        },
        getEditor: function() {
          return this.cm;
        },
        splitLines: function(e) {
          return this.lineSep ? e.split(this.lineSep) : gn(e);
        },
        lineSeparator: function() {
          return this.lineSep || `
`;
        },
        setDirection: Dt(function(e) {
          e != "rtl" && (e = "ltr"), e != this.direction && (this.direction = e, this.iter(function(n) {
            return n.order = null;
          }), this.cm && Hc(this.cm));
        })
      }), _t.prototype.eachLine = _t.prototype.iter;
      var Ku = 0;
      function Jc(e) {
        var n = this;
        if (Xu(n), !(Ge(n, e) || Vn(n.display, e))) {
          mt(e), f && (Ku = +new Date());
          var i = br(n, e, !0), r = e.dataTransfer.files;
          if (!(!i || n.isReadOnly()))
            if (r && r.length && window.FileReader && window.File)
              for (var a = r.length, v = Array(a), R = 0, L = function() {
                ++R == a && wt(n, function() {
                  i = Fe(n.doc, i);
                  var J = {
                    from: i,
                    to: i,
                    text: n.doc.splitLines(
                      v.filter(function(te) {
                        return te != null;
                      }).join(n.doc.lineSeparator())
                    ),
                    origin: "paste"
                  };
                  qr(n.doc, J), Nu(n.doc, ar(Fe(n.doc, i), Fe(n.doc, lr(J))));
                })();
              }, O = function(J, te) {
                if (n.options.allowDropFileTypes && be(n.options.allowDropFileTypes, J.type) == -1) {
                  L();
                  return;
                }
                var ie = new FileReader();
                ie.onerror = function() {
                  return L();
                }, ie.onload = function() {
                  var de = ie.result;
                  if (/[\x00-\x08\x0e-\x1f]{2}/.test(de)) {
                    L();
                    return;
                  }
                  v[te] = de, L();
                }, ie.readAsText(J);
              }, W = 0; W < r.length; W++)
                O(r[W], W);
            else {
              if (n.state.draggingText && n.doc.sel.contains(i) > -1) {
                n.state.draggingText(e), setTimeout(function() {
                  return n.display.input.focus();
                }, 20);
                return;
              }
              try {
                var V = e.dataTransfer.getData("Text");
                if (V) {
                  var k;
                  if (n.state.draggingText && !n.state.draggingText.copy && (k = n.listSelections()), Po(n.doc, ar(i, i)), k)
                    for (var Z = 0; Z < k.length; ++Z)
                      _r(n.doc, "", k[Z].anchor, k[Z].head, "drag");
                  n.replaceSelection(V, "around", "paste"), n.display.input.focus();
                }
              } catch {
              }
            }
        }
      }
      function Zc(e, n) {
        if (f && (!e.state.draggingText || +new Date() - Ku < 100)) {
          _n(n);
          return;
        }
        if (!(Ge(e, n) || Vn(e.display, n)) && (n.dataTransfer.setData("Text", e.getSelection()), n.dataTransfer.effectAllowed = "copyMove", n.dataTransfer.setDragImage && !A)) {
          var i = I("img", null, null, "position: fixed; left: 0; top: 0;");
          i.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", h && (i.width = i.height = 1, e.display.wrapper.appendChild(i), i._top = i.offsetTop), n.dataTransfer.setDragImage(i, 0, 0), h && i.parentNode.removeChild(i);
        }
      }
      function qc(e, n) {
        var i = br(e, n);
        if (!!i) {
          var r = document.createDocumentFragment();
          Da(e, i, r), e.display.dragCursor || (e.display.dragCursor = I("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)), $(e.display.dragCursor, r);
        }
      }
      function Xu(e) {
        e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), e.display.dragCursor = null);
      }
      function Ju(e) {
        if (!!document.getElementsByClassName) {
          for (var n = document.getElementsByClassName("CodeMirror"), i = [], r = 0; r < n.length; r++) {
            var a = n[r].CodeMirror;
            a && i.push(a);
          }
          i.length && i[0].operation(function() {
            for (var v = 0; v < i.length; v++)
              e(i[v]);
          });
        }
      }
      var Zu = !1;
      function _c() {
        Zu || (ev(), Zu = !0);
      }
      function ev() {
        var e;
        ue(window, "resize", function() {
          e == null && (e = setTimeout(function() {
            e = null, Ju(tv);
          }, 100));
        }), ue(window, "blur", function() {
          return Ju(kr);
        });
      }
      function tv(e) {
        var n = e.display;
        n.cachedCharWidth = n.cachedTextHeight = n.cachedPaddingH = null, n.scrollbarsClipped = !1, e.setSize();
      }
      for (var fr = {
        3: "Pause",
        8: "Backspace",
        9: "Tab",
        13: "Enter",
        16: "Shift",
        17: "Ctrl",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Esc",
        32: "Space",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "Left",
        38: "Up",
        39: "Right",
        40: "Down",
        44: "PrintScrn",
        45: "Insert",
        46: "Delete",
        59: ";",
        61: "=",
        91: "Mod",
        92: "Mod",
        93: "Mod",
        106: "*",
        107: "=",
        109: "-",
        110: ".",
        111: "/",
        145: "ScrollLock",
        173: "-",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'",
        224: "Mod",
        63232: "Up",
        63233: "Down",
        63234: "Left",
        63235: "Right",
        63272: "Delete",
        63273: "Home",
        63275: "End",
        63276: "PageUp",
        63277: "PageDown",
        63302: "Insert"
      }, Ui = 0; Ui < 10; Ui++)
        fr[Ui + 48] = fr[Ui + 96] = String(Ui);
      for (var No = 65; No <= 90; No++)
        fr[No] = String.fromCharCode(No);
      for (var zi = 1; zi <= 12; zi++)
        fr[zi + 111] = fr[zi + 63235] = "F" + zi;
      var Gn = {};
      Gn.basic = {
        Left: "goCharLeft",
        Right: "goCharRight",
        Up: "goLineUp",
        Down: "goLineDown",
        End: "goLineEnd",
        Home: "goLineStartSmart",
        PageUp: "goPageUp",
        PageDown: "goPageDown",
        Delete: "delCharAfter",
        Backspace: "delCharBefore",
        "Shift-Backspace": "delCharBefore",
        Tab: "defaultTab",
        "Shift-Tab": "indentAuto",
        Enter: "newlineAndIndent",
        Insert: "toggleOverwrite",
        Esc: "singleSelection"
      }, Gn.pcDefault = {
        "Ctrl-A": "selectAll",
        "Ctrl-D": "deleteLine",
        "Ctrl-Z": "undo",
        "Shift-Ctrl-Z": "redo",
        "Ctrl-Y": "redo",
        "Ctrl-Home": "goDocStart",
        "Ctrl-End": "goDocEnd",
        "Ctrl-Up": "goLineUp",
        "Ctrl-Down": "goLineDown",
        "Ctrl-Left": "goGroupLeft",
        "Ctrl-Right": "goGroupRight",
        "Alt-Left": "goLineStart",
        "Alt-Right": "goLineEnd",
        "Ctrl-Backspace": "delGroupBefore",
        "Ctrl-Delete": "delGroupAfter",
        "Ctrl-S": "save",
        "Ctrl-F": "find",
        "Ctrl-G": "findNext",
        "Shift-Ctrl-G": "findPrev",
        "Shift-Ctrl-F": "replace",
        "Shift-Ctrl-R": "replaceAll",
        "Ctrl-[": "indentLess",
        "Ctrl-]": "indentMore",
        "Ctrl-U": "undoSelection",
        "Shift-Ctrl-U": "redoSelection",
        "Alt-U": "redoSelection",
        fallthrough: "basic"
      }, Gn.emacsy = {
        "Ctrl-F": "goCharRight",
        "Ctrl-B": "goCharLeft",
        "Ctrl-P": "goLineUp",
        "Ctrl-N": "goLineDown",
        "Ctrl-A": "goLineStart",
        "Ctrl-E": "goLineEnd",
        "Ctrl-V": "goPageDown",
        "Shift-Ctrl-V": "goPageUp",
        "Ctrl-D": "delCharAfter",
        "Ctrl-H": "delCharBefore",
        "Alt-Backspace": "delWordBefore",
        "Ctrl-K": "killLine",
        "Ctrl-T": "transposeChars",
        "Ctrl-O": "openLine"
      }, Gn.macDefault = {
        "Cmd-A": "selectAll",
        "Cmd-D": "deleteLine",
        "Cmd-Z": "undo",
        "Shift-Cmd-Z": "redo",
        "Cmd-Y": "redo",
        "Cmd-Home": "goDocStart",
        "Cmd-Up": "goDocStart",
        "Cmd-End": "goDocEnd",
        "Cmd-Down": "goDocEnd",
        "Alt-Left": "goGroupLeft",
        "Alt-Right": "goGroupRight",
        "Cmd-Left": "goLineLeft",
        "Cmd-Right": "goLineRight",
        "Alt-Backspace": "delGroupBefore",
        "Ctrl-Alt-Backspace": "delGroupAfter",
        "Alt-Delete": "delGroupAfter",
        "Cmd-S": "save",
        "Cmd-F": "find",
        "Cmd-G": "findNext",
        "Shift-Cmd-G": "findPrev",
        "Cmd-Alt-F": "replace",
        "Shift-Cmd-Alt-F": "replaceAll",
        "Cmd-[": "indentLess",
        "Cmd-]": "indentMore",
        "Cmd-Backspace": "delWrappedLineLeft",
        "Cmd-Delete": "delWrappedLineRight",
        "Cmd-U": "undoSelection",
        "Shift-Cmd-U": "redoSelection",
        "Ctrl-Up": "goDocStart",
        "Ctrl-Down": "goDocEnd",
        fallthrough: ["basic", "emacsy"]
      }, Gn.default = T ? Gn.macDefault : Gn.pcDefault;
      function nv(e) {
        var n = e.split(/-(?!$)/);
        e = n[n.length - 1];
        for (var i, r, a, v, R = 0; R < n.length - 1; R++) {
          var L = n[R];
          if (/^(cmd|meta|m)$/i.test(L))
            v = !0;
          else if (/^a(lt)?$/i.test(L))
            i = !0;
          else if (/^(c|ctrl|control)$/i.test(L))
            r = !0;
          else if (/^s(hift)?$/i.test(L))
            a = !0;
          else
            throw new Error("Unrecognized modifier name: " + L);
        }
        return i && (e = "Alt-" + e), r && (e = "Ctrl-" + e), v && (e = "Cmd-" + e), a && (e = "Shift-" + e), e;
      }
      function rv(e) {
        var n = {};
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var r = e[i];
            if (/^(name|fallthrough|(de|at)tach)$/.test(i))
              continue;
            if (r == "...") {
              delete e[i];
              continue;
            }
            for (var a = Ht(i.split(" "), nv), v = 0; v < a.length; v++) {
              var R = void 0, L = void 0;
              v == a.length - 1 ? (L = a.join(" "), R = r) : (L = a.slice(0, v + 1).join(" "), R = "...");
              var O = n[L];
              if (!O)
                n[L] = R;
              else if (O != R)
                throw new Error("Inconsistent bindings for " + L);
            }
            delete e[i];
          }
        for (var W in n)
          e[W] = n[W];
        return e;
      }
      function ti(e, n, i, r) {
        n = Oo(n);
        var a = n.call ? n.call(e, r) : n[e];
        if (a === !1)
          return "nothing";
        if (a === "...")
          return "multi";
        if (a != null && i(a))
          return "handled";
        if (n.fallthrough) {
          if (Object.prototype.toString.call(n.fallthrough) != "[object Array]")
            return ti(e, n.fallthrough, i, r);
          for (var v = 0; v < n.fallthrough.length; v++) {
            var R = ti(e, n.fallthrough[v], i, r);
            if (R)
              return R;
          }
        }
      }
      function qu(e) {
        var n = typeof e == "string" ? e : fr[e.keyCode];
        return n == "Ctrl" || n == "Alt" || n == "Shift" || n == "Mod";
      }
      function _u(e, n, i) {
        var r = e;
        return n.altKey && r != "Alt" && (e = "Alt-" + e), (F ? n.metaKey : n.ctrlKey) && r != "Ctrl" && (e = "Ctrl-" + e), (F ? n.ctrlKey : n.metaKey) && r != "Mod" && (e = "Cmd-" + e), !i && n.shiftKey && r != "Shift" && (e = "Shift-" + e), e;
      }
      function ef(e, n) {
        if (h && e.keyCode == 34 && e.char)
          return !1;
        var i = fr[e.keyCode];
        return i == null || e.altGraphKey ? !1 : (e.keyCode == 3 && e.code && (i = e.code), _u(i, e, n));
      }
      function Oo(e) {
        return typeof e == "string" ? Gn[e] : e;
      }
      function ni(e, n) {
        for (var i = e.doc.sel.ranges, r = [], a = 0; a < i.length; a++) {
          for (var v = n(i[a]); r.length && ye(v.from, Ue(r).to) <= 0; ) {
            var R = r.pop();
            if (ye(R.from, v.from) < 0) {
              v.from = R.from;
              break;
            }
          }
          r.push(v);
        }
        an(e, function() {
          for (var L = r.length - 1; L >= 0; L--)
            _r(e.doc, "", r[L].from, r[L].to, "+delete");
          Kr(e);
        });
      }
      function Va(e, n, i) {
        var r = Xt(e.text, n + i, i);
        return r < 0 || r > e.text.length ? null : r;
      }
      function Qa(e, n, i) {
        var r = Va(e, n.ch, i);
        return r == null ? null : new ee(n.line, r, i < 0 ? "after" : "before");
      }
      function Ga(e, n, i, r, a) {
        if (e) {
          n.doc.direction == "rtl" && (a = -a);
          var v = oe(i, n.doc.direction);
          if (v) {
            var R = a < 0 ? Ue(v) : v[0], L = a < 0 == (R.level == 1), O = L ? "after" : "before", W;
            if (R.level > 0 || n.doc.direction == "rtl") {
              var V = Vr(n, i);
              W = a < 0 ? i.text.length - 1 : 0;
              var k = Fn(n, V, W).top;
              W = We(function(Z) {
                return Fn(n, V, Z).top == k;
              }, a < 0 == (R.level == 1) ? R.from : R.to - 1, W), O == "before" && (W = Va(i, W, 1));
            } else
              W = a < 0 ? R.to : R.from;
            return new ee(r, W, O);
          }
        }
        return new ee(r, a < 0 ? i.text.length : 0, a < 0 ? "before" : "after");
      }
      function iv(e, n, i, r) {
        var a = oe(n, e.doc.direction);
        if (!a)
          return Qa(n, i, r);
        i.ch >= n.text.length ? (i.ch = n.text.length, i.sticky = "before") : i.ch <= 0 && (i.ch = 0, i.sticky = "after");
        var v = Oe(a, i.ch, i.sticky), R = a[v];
        if (e.doc.direction == "ltr" && R.level % 2 == 0 && (r > 0 ? R.to > i.ch : R.from < i.ch))
          return Qa(n, i, r);
        var L = function(he, xe) {
          return Va(n, he instanceof ee ? he.ch : he, xe);
        }, O, W = function(he) {
          return e.options.lineWrapping ? (O = O || Vr(e, n), ou(e, n, O, he)) : { begin: 0, end: n.text.length };
        }, V = W(i.sticky == "before" ? L(i, -1) : i.ch);
        if (e.doc.direction == "rtl" || R.level == 1) {
          var k = R.level == 1 == r < 0, Z = L(i, k ? 1 : -1);
          if (Z != null && (k ? Z <= R.to && Z <= V.end : Z >= R.from && Z >= V.begin)) {
            var J = k ? "before" : "after";
            return new ee(i.line, Z, J);
          }
        }
        var te = function(he, xe, ge) {
          for (var Te = function(_e, Mt) {
            return Mt ? new ee(i.line, L(_e, 1), "before") : new ee(i.line, _e, "after");
          }; he >= 0 && he < a.length; he += xe) {
            var Re = a[he], Me = xe > 0 == (Re.level != 1), Be = Me ? ge.begin : L(ge.end, -1);
            if (Re.from <= Be && Be < Re.to || (Be = Me ? Re.from : L(Re.to, -1), ge.begin <= Be && Be < ge.end))
              return Te(Be, Me);
          }
        }, ie = te(v + r, r, V);
        if (ie)
          return ie;
        var de = r > 0 ? V.end : L(V.begin, -1);
        return de != null && !(r > 0 && de == n.text.length) && (ie = te(r > 0 ? 0 : a.length - 1, r, W(de)), ie) ? ie : null;
      }
      var Wi = {
        selectAll: Uu,
        singleSelection: function(e) {
          return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), Nt);
        },
        killLine: function(e) {
          return ni(e, function(n) {
            if (n.empty()) {
              var i = we(e.doc, n.head.line).text.length;
              return n.head.ch == i && n.head.line < e.lastLine() ? { from: n.head, to: ee(n.head.line + 1, 0) } : { from: n.head, to: ee(n.head.line, i) };
            } else
              return { from: n.from(), to: n.to() };
          });
        },
        deleteLine: function(e) {
          return ni(e, function(n) {
            return {
              from: ee(n.from().line, 0),
              to: Fe(e.doc, ee(n.to().line + 1, 0))
            };
          });
        },
        delLineLeft: function(e) {
          return ni(e, function(n) {
            return {
              from: ee(n.from().line, 0),
              to: n.from()
            };
          });
        },
        delWrappedLineLeft: function(e) {
          return ni(e, function(n) {
            var i = e.charCoords(n.head, "div").top + 5, r = e.coordsChar({ left: 0, top: i }, "div");
            return { from: r, to: n.from() };
          });
        },
        delWrappedLineRight: function(e) {
          return ni(e, function(n) {
            var i = e.charCoords(n.head, "div").top + 5, r = e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: i }, "div");
            return { from: n.from(), to: r };
          });
        },
        undo: function(e) {
          return e.undo();
        },
        redo: function(e) {
          return e.redo();
        },
        undoSelection: function(e) {
          return e.undoSelection();
        },
        redoSelection: function(e) {
          return e.redoSelection();
        },
        goDocStart: function(e) {
          return e.extendSelection(ee(e.firstLine(), 0));
        },
        goDocEnd: function(e) {
          return e.extendSelection(ee(e.lastLine()));
        },
        goLineStart: function(e) {
          return e.extendSelectionsBy(
            function(n) {
              return tf(e, n.head.line);
            },
            { origin: "+move", bias: 1 }
          );
        },
        goLineStartSmart: function(e) {
          return e.extendSelectionsBy(
            function(n) {
              return nf(e, n.head);
            },
            { origin: "+move", bias: 1 }
          );
        },
        goLineEnd: function(e) {
          return e.extendSelectionsBy(
            function(n) {
              return ov(e, n.head.line);
            },
            { origin: "+move", bias: -1 }
          );
        },
        goLineRight: function(e) {
          return e.extendSelectionsBy(function(n) {
            var i = e.cursorCoords(n.head, "div").top + 5;
            return e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: i }, "div");
          }, Et);
        },
        goLineLeft: function(e) {
          return e.extendSelectionsBy(function(n) {
            var i = e.cursorCoords(n.head, "div").top + 5;
            return e.coordsChar({ left: 0, top: i }, "div");
          }, Et);
        },
        goLineLeftSmart: function(e) {
          return e.extendSelectionsBy(function(n) {
            var i = e.cursorCoords(n.head, "div").top + 5, r = e.coordsChar({ left: 0, top: i }, "div");
            return r.ch < e.getLine(r.line).search(/\S/) ? nf(e, n.head) : r;
          }, Et);
        },
        goLineUp: function(e) {
          return e.moveV(-1, "line");
        },
        goLineDown: function(e) {
          return e.moveV(1, "line");
        },
        goPageUp: function(e) {
          return e.moveV(-1, "page");
        },
        goPageDown: function(e) {
          return e.moveV(1, "page");
        },
        goCharLeft: function(e) {
          return e.moveH(-1, "char");
        },
        goCharRight: function(e) {
          return e.moveH(1, "char");
        },
        goColumnLeft: function(e) {
          return e.moveH(-1, "column");
        },
        goColumnRight: function(e) {
          return e.moveH(1, "column");
        },
        goWordLeft: function(e) {
          return e.moveH(-1, "word");
        },
        goGroupRight: function(e) {
          return e.moveH(1, "group");
        },
        goGroupLeft: function(e) {
          return e.moveH(-1, "group");
        },
        goWordRight: function(e) {
          return e.moveH(1, "word");
        },
        delCharBefore: function(e) {
          return e.deleteH(-1, "codepoint");
        },
        delCharAfter: function(e) {
          return e.deleteH(1, "char");
        },
        delWordBefore: function(e) {
          return e.deleteH(-1, "word");
        },
        delWordAfter: function(e) {
          return e.deleteH(1, "word");
        },
        delGroupBefore: function(e) {
          return e.deleteH(-1, "group");
        },
        delGroupAfter: function(e) {
          return e.deleteH(1, "group");
        },
        indentAuto: function(e) {
          return e.indentSelection("smart");
        },
        indentMore: function(e) {
          return e.indentSelection("add");
        },
        indentLess: function(e) {
          return e.indentSelection("subtract");
        },
        insertTab: function(e) {
          return e.replaceSelection("	");
        },
        insertSoftTab: function(e) {
          for (var n = [], i = e.listSelections(), r = e.options.tabSize, a = 0; a < i.length; a++) {
            var v = i[a].from(), R = pe(e.getLine(v.line), v.ch, r);
            n.push(Kt(r - R % r));
          }
          e.replaceSelections(n);
        },
        defaultTab: function(e) {
          e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab");
        },
        transposeChars: function(e) {
          return an(e, function() {
            for (var n = e.listSelections(), i = [], r = 0; r < n.length; r++)
              if (!!n[r].empty()) {
                var a = n[r].head, v = we(e.doc, a.line).text;
                if (v) {
                  if (a.ch == v.length && (a = new ee(a.line, a.ch - 1)), a.ch > 0)
                    a = new ee(a.line, a.ch + 1), e.replaceRange(
                      v.charAt(a.ch - 1) + v.charAt(a.ch - 2),
                      ee(a.line, a.ch - 2),
                      a,
                      "+transpose"
                    );
                  else if (a.line > e.doc.first) {
                    var R = we(e.doc, a.line - 1).text;
                    R && (a = new ee(a.line, 1), e.replaceRange(
                      v.charAt(0) + e.doc.lineSeparator() + R.charAt(R.length - 1),
                      ee(a.line - 1, R.length - 1),
                      a,
                      "+transpose"
                    ));
                  }
                }
                i.push(new Qe(a, a));
              }
            e.setSelections(i);
          });
        },
        newlineAndIndent: function(e) {
          return an(e, function() {
            for (var n = e.listSelections(), i = n.length - 1; i >= 0; i--)
              e.replaceRange(e.doc.lineSeparator(), n[i].anchor, n[i].head, "+input");
            n = e.listSelections();
            for (var r = 0; r < n.length; r++)
              e.indentLine(n[r].from().line, null, !0);
            Kr(e);
          });
        },
        openLine: function(e) {
          return e.replaceSelection(`
`, "start");
        },
        toggleOverwrite: function(e) {
          return e.toggleOverwrite();
        }
      };
      function tf(e, n) {
        var i = we(e.doc, n), r = Tn(i);
        return r != i && (n = j(r)), Ga(!0, e, r, n, 1);
      }
      function ov(e, n) {
        var i = we(e.doc, n), r = $d(i);
        return r != i && (n = j(r)), Ga(!0, e, i, n, -1);
      }
      function nf(e, n) {
        var i = tf(e, n.line), r = we(e.doc, i.line), a = oe(r, e.doc.direction);
        if (!a || a[0].level == 0) {
          var v = Math.max(i.ch, r.text.search(/\S/)), R = n.line == i.line && n.ch <= v && n.ch;
          return ee(i.line, R ? 0 : v, i.sticky);
        }
        return i;
      }
      function Fo(e, n, i) {
        if (typeof n == "string" && (n = Wi[n], !n))
          return !1;
        e.display.input.ensurePolled();
        var r = e.display.shift, a = !1;
        try {
          e.isReadOnly() && (e.state.suppressEdits = !0), i && (e.display.shift = !1), a = n(e) != Ft;
        } finally {
          e.display.shift = r, e.state.suppressEdits = !1;
        }
        return a;
      }
      function av(e, n, i) {
        for (var r = 0; r < e.state.keyMaps.length; r++) {
          var a = ti(n, e.state.keyMaps[r], i, e);
          if (a)
            return a;
        }
        return e.options.extraKeys && ti(n, e.options.extraKeys, i, e) || ti(n, e.options.keyMap, i, e);
      }
      var lv = new Pe();
      function ji(e, n, i, r) {
        var a = e.state.keySeq;
        if (a) {
          if (qu(n))
            return "handled";
          if (/\'$/.test(n) ? e.state.keySeq = null : lv.set(50, function() {
            e.state.keySeq == a && (e.state.keySeq = null, e.display.input.reset());
          }), rf(e, a + " " + n, i, r))
            return !0;
        }
        return rf(e, n, i, r);
      }
      function rf(e, n, i, r) {
        var a = av(e, n, r);
        return a == "multi" && (e.state.keySeq = n), a == "handled" && Tt(e, "keyHandled", e, n, i), (a == "handled" || a == "multi") && (mt(i), Ma(e)), !!a;
      }
      function of(e, n) {
        var i = ef(n, !0);
        return i ? n.shiftKey && !e.state.keySeq ? ji(e, "Shift-" + i, n, function(r) {
          return Fo(e, r, !0);
        }) || ji(e, i, n, function(r) {
          if (typeof r == "string" ? /^go[A-Z]/.test(r) : r.motion)
            return Fo(e, r);
        }) : ji(e, i, n, function(r) {
          return Fo(e, r);
        }) : !1;
      }
      function sv(e, n, i) {
        return ji(e, "'" + i + "'", n, function(r) {
          return Fo(e, r, !0);
        });
      }
      var ka = null;
      function af(e) {
        var n = this;
        if (!(e.target && e.target != n.display.input.getField()) && (n.curOp.focus = q(ve(n)), !Ge(n, e))) {
          f && g < 11 && e.keyCode == 27 && (e.returnValue = !1);
          var i = e.keyCode;
          n.display.shift = i == 16 || e.shiftKey;
          var r = of(n, e);
          h && (ka = r ? i : null, !r && i == 88 && !so && (T ? e.metaKey : e.ctrlKey) && n.replaceSelection("", null, "cut")), t && !T && !r && i == 46 && e.shiftKey && !e.ctrlKey && document.execCommand && document.execCommand("cut"), i == 18 && !/\bCodeMirror-crosshair\b/.test(n.display.lineDiv.className) && uv(n);
        }
      }
      function uv(e) {
        var n = e.display.lineDiv;
        X(n, "CodeMirror-crosshair");
        function i(r) {
          (r.keyCode == 18 || !r.altKey) && (z(n, "CodeMirror-crosshair"), ze(document, "keyup", i), ze(document, "mouseover", i));
        }
        ue(document, "keyup", i), ue(document, "mouseover", i);
      }
      function lf(e) {
        e.keyCode == 16 && (this.doc.sel.shift = !1), Ge(this, e);
      }
      function sf(e) {
        var n = this;
        if (!(e.target && e.target != n.display.input.getField()) && !(Vn(n.display, e) || Ge(n, e) || e.ctrlKey && !e.altKey || T && e.metaKey)) {
          var i = e.keyCode, r = e.charCode;
          if (h && i == ka) {
            ka = null, mt(e);
            return;
          }
          if (!(h && (!e.which || e.which < 10) && of(n, e))) {
            var a = String.fromCharCode(r == null ? i : r);
            a != "\b" && (sv(n, e, a) || n.display.input.onKeyPress(e));
          }
        }
      }
      var fv = 400, Ka = function(e, n, i) {
        this.time = e, this.pos = n, this.button = i;
      };
      Ka.prototype.compare = function(e, n, i) {
        return this.time + fv > e && ye(n, this.pos) == 0 && i == this.button;
      };
      var $i, Yi;
      function dv(e, n) {
        var i = +new Date();
        return Yi && Yi.compare(i, e, n) ? ($i = Yi = null, "triple") : $i && $i.compare(i, e, n) ? (Yi = new Ka(i, e, n), $i = null, "double") : ($i = new Ka(i, e, n), Yi = null, "single");
      }
      function uf(e) {
        var n = this, i = n.display;
        if (!(Ge(n, e) || i.activeTouch && i.input.supportsTouch())) {
          if (i.input.ensurePolled(), i.shift = e.shiftKey, Vn(i, e)) {
            C || (i.scroller.draggable = !1, setTimeout(function() {
              return i.scroller.draggable = !0;
            }, 100));
            return;
          }
          if (!Xa(n, e)) {
            var r = br(n, e), a = Sn(e), v = r ? dv(r, a) : "single";
            ae(n).focus(), a == 1 && n.state.selectingText && n.state.selectingText(e), !(r && cv(n, a, r, v, e)) && (a == 1 ? r ? pv(n, r, v, e) : pi(e) == i.scroller && mt(e) : a == 2 ? (r && Ro(n.doc, r), setTimeout(function() {
              return i.input.focus();
            }, 20)) : a == 3 && (B ? n.display.input.onContextMenu(e) : Ra(n)));
          }
        }
      }
      function cv(e, n, i, r, a) {
        var v = "Click";
        return r == "double" ? v = "Double" + v : r == "triple" && (v = "Triple" + v), v = (n == 1 ? "Left" : n == 2 ? "Middle" : "Right") + v, ji(e, _u(v, a), a, function(R) {
          if (typeof R == "string" && (R = Wi[R]), !R)
            return !1;
          var L = !1;
          try {
            e.isReadOnly() && (e.state.suppressEdits = !0), L = R(e, i) != Ft;
          } finally {
            e.state.suppressEdits = !1;
          }
          return L;
        });
      }
      function vv(e, n, i) {
        var r = e.getOption("configureMouse"), a = r ? r(e, n, i) : {};
        if (a.unit == null) {
          var v = M ? i.shiftKey && i.metaKey : i.altKey;
          a.unit = v ? "rectangle" : n == "single" ? "char" : n == "double" ? "word" : "line";
        }
        return (a.extend == null || e.doc.extend) && (a.extend = e.doc.extend || i.shiftKey), a.addNew == null && (a.addNew = T ? i.metaKey : i.ctrlKey), a.moveOnDrag == null && (a.moveOnDrag = !(T ? i.altKey : i.ctrlKey)), a;
      }
      function pv(e, n, i, r) {
        f ? setTimeout(re(uu, e), 0) : e.curOp.focus = q(ve(e));
        var a = vv(e, i, r), v = e.doc.sel, R;
        e.options.dragDrop && la && !e.isReadOnly() && i == "single" && (R = v.contains(n)) > -1 && (ye((R = v.ranges[R]).from(), n) < 0 || n.xRel > 0) && (ye(R.to(), n) > 0 || n.xRel < 0) ? hv(e, r, n, a) : gv(e, r, n, a);
      }
      function hv(e, n, i, r) {
        var a = e.display, v = !1, R = wt(e, function(W) {
          C && (a.scroller.draggable = !1), e.state.draggingText = !1, e.state.delayingBlurEvent && (e.hasFocus() ? e.state.delayingBlurEvent = !1 : Ra(e)), ze(a.wrapper.ownerDocument, "mouseup", R), ze(a.wrapper.ownerDocument, "mousemove", L), ze(a.scroller, "dragstart", O), ze(a.scroller, "drop", R), v || (mt(W), r.addNew || Ro(e.doc, i, null, null, r.extend), C && !A || f && g == 9 ? setTimeout(function() {
            a.wrapper.ownerDocument.body.focus({ preventScroll: !0 }), a.input.focus();
          }, 20) : a.input.focus());
        }), L = function(W) {
          v = v || Math.abs(n.clientX - W.clientX) + Math.abs(n.clientY - W.clientY) >= 10;
        }, O = function() {
          return v = !0;
        };
        C && (a.scroller.draggable = !0), e.state.draggingText = R, R.copy = !r.moveOnDrag, ue(a.wrapper.ownerDocument, "mouseup", R), ue(a.wrapper.ownerDocument, "mousemove", L), ue(a.scroller, "dragstart", O), ue(a.scroller, "drop", R), e.state.delayingBlurEvent = !0, setTimeout(function() {
          return a.input.focus();
        }, 20), a.scroller.dragDrop && a.scroller.dragDrop();
      }
      function ff(e, n, i) {
        if (i == "char")
          return new Qe(n, n);
        if (i == "word")
          return e.findWordAt(n);
        if (i == "line")
          return new Qe(ee(n.line, 0), Fe(e.doc, ee(n.line + 1, 0)));
        var r = i(e, n);
        return new Qe(r.from, r.to);
      }
      function gv(e, n, i, r) {
        f && Ra(e);
        var a = e.display, v = e.doc;
        mt(n);
        var R, L, O = v.sel, W = O.ranges;
        if (r.addNew && !r.extend ? (L = v.sel.contains(i), L > -1 ? R = W[L] : R = new Qe(i, i)) : (R = v.sel.primary(), L = v.sel.primIndex), r.unit == "rectangle")
          r.addNew || (R = new Qe(i, i)), i = br(e, n, !0, !0), L = -1;
        else {
          var V = ff(e, i, r.unit);
          r.extend ? R = $a(R, V.anchor, V.head, r.extend) : R = V;
        }
        r.addNew ? L == -1 ? (L = W.length, Ut(
          v,
          Dn(e, W.concat([R]), L),
          { scroll: !1, origin: "*mouse" }
        )) : W.length > 1 && W[L].empty() && r.unit == "char" && !r.extend ? (Ut(
          v,
          Dn(e, W.slice(0, L).concat(W.slice(L + 1)), 0),
          { scroll: !1, origin: "*mouse" }
        ), O = v.sel) : Ya(v, L, R, ot) : (L = 0, Ut(v, new fn([R], 0), ot), O = v.sel);
        var k = i;
        function Z(ge) {
          if (ye(k, ge) != 0)
            if (k = ge, r.unit == "rectangle") {
              for (var Te = [], Re = e.options.tabSize, Me = pe(we(v, i.line).text, i.ch, Re), Be = pe(we(v, ge.line).text, ge.ch, Re), _e = Math.min(Me, Be), Mt = Math.max(Me, Be), rt = Math.min(i.line, ge.line), ln = Math.min(e.lastLine(), Math.max(i.line, ge.line)); rt <= ln; rt++) {
                var en = we(v, rt).text, ht = Bt(en, _e, Re);
                _e == Mt ? Te.push(new Qe(ee(rt, ht), ee(rt, ht))) : en.length > ht && Te.push(new Qe(ee(rt, ht), ee(rt, Bt(en, Mt, Re))));
              }
              Te.length || Te.push(new Qe(i, i)), Ut(
                v,
                Dn(e, O.ranges.slice(0, L).concat(Te), L),
                { origin: "*mouse", scroll: !1 }
              ), e.scrollIntoView(ge);
            } else {
              var tn = R, Ot = ff(e, ge, r.unit), yt = tn.anchor, gt;
              ye(Ot.anchor, yt) > 0 ? (gt = Ot.head, yt = jr(tn.from(), Ot.anchor)) : (gt = Ot.anchor, yt = Zt(tn.to(), Ot.head));
              var st = O.ranges.slice(0);
              st[L] = mv(e, new Qe(Fe(v, yt), gt)), Ut(v, Dn(e, st, L), ot);
            }
        }
        var J = a.wrapper.getBoundingClientRect(), te = 0;
        function ie(ge) {
          var Te = ++te, Re = br(e, ge, !0, r.unit == "rectangle");
          if (!!Re)
            if (ye(Re, k) != 0) {
              e.curOp.focus = q(ve(e)), Z(Re);
              var Me = bo(a, v);
              (Re.line >= Me.to || Re.line < Me.from) && setTimeout(wt(e, function() {
                te == Te && ie(ge);
              }), 150);
            } else {
              var Be = ge.clientY < J.top ? -20 : ge.clientY > J.bottom ? 20 : 0;
              Be && setTimeout(wt(e, function() {
                te == Te && (a.scroller.scrollTop += Be, ie(ge));
              }), 50);
            }
        }
        function de(ge) {
          e.state.selectingText = !1, te = 1 / 0, ge && (mt(ge), a.input.focus()), ze(a.wrapper.ownerDocument, "mousemove", he), ze(a.wrapper.ownerDocument, "mouseup", xe), v.history.lastSelOrigin = null;
        }
        var he = wt(e, function(ge) {
          ge.buttons === 0 || !Sn(ge) ? de(ge) : ie(ge);
        }), xe = wt(e, de);
        e.state.selectingText = xe, ue(a.wrapper.ownerDocument, "mousemove", he), ue(a.wrapper.ownerDocument, "mouseup", xe);
      }
      function mv(e, n) {
        var i = n.anchor, r = n.head, a = we(e.doc, i.line);
        if (ye(i, r) == 0 && i.sticky == r.sticky)
          return n;
        var v = oe(a);
        if (!v)
          return n;
        var R = Oe(v, i.ch, i.sticky), L = v[R];
        if (L.from != i.ch && L.to != i.ch)
          return n;
        var O = R + (L.from == i.ch == (L.level != 1) ? 0 : 1);
        if (O == 0 || O == v.length)
          return n;
        var W;
        if (r.line != i.line)
          W = (r.line - i.line) * (e.doc.direction == "ltr" ? 1 : -1) > 0;
        else {
          var V = Oe(v, r.ch, r.sticky), k = V - R || (r.ch - i.ch) * (L.level == 1 ? -1 : 1);
          V == O - 1 || V == O ? W = k < 0 : W = k > 0;
        }
        var Z = v[O + (W ? -1 : 0)], J = W == (Z.level == 1), te = J ? Z.from : Z.to, ie = J ? "after" : "before";
        return i.ch == te && i.sticky == ie ? n : new Qe(new ee(i.line, te, ie), r);
      }
      function df(e, n, i, r) {
        var a, v;
        if (n.touches)
          a = n.touches[0].clientX, v = n.touches[0].clientY;
        else
          try {
            a = n.clientX, v = n.clientY;
          } catch {
            return !1;
          }
        if (a >= Math.floor(e.display.gutters.getBoundingClientRect().right))
          return !1;
        r && mt(n);
        var R = e.display, L = R.lineDiv.getBoundingClientRect();
        if (v > L.bottom || !Ze(e, i))
          return Jt(n);
        v -= L.top - R.viewOffset;
        for (var O = 0; O < e.display.gutterSpecs.length; ++O) {
          var W = R.gutters.childNodes[O];
          if (W && W.getBoundingClientRect().right >= a) {
            var V = G(e.doc, v), k = e.display.gutterSpecs[O];
            return $e(e, i, e, V, k.className, n), Jt(n);
          }
        }
      }
      function Xa(e, n) {
        return df(e, n, "gutterClick", !0);
      }
      function cf(e, n) {
        Vn(e.display, n) || yv(e, n) || Ge(e, n, "contextmenu") || B || e.display.input.onContextMenu(n);
      }
      function yv(e, n) {
        return Ze(e, "gutterContextMenu") ? df(e, n, "gutterContextMenu", !1) : !1;
      }
      function vf(e) {
        e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), bi(e);
      }
      var ri = { toString: function() {
        return "CodeMirror.Init";
      } }, pf = {}, Bo = {};
      function Av(e) {
        var n = e.optionHandlers;
        function i(r, a, v, R) {
          e.defaults[r] = a, v && (n[r] = R ? function(L, O, W) {
            W != ri && v(L, O, W);
          } : v);
        }
        e.defineOption = i, e.Init = ri, i("value", "", function(r, a) {
          return r.setValue(a);
        }, !0), i("mode", null, function(r, a) {
          r.doc.modeOption = a, za(r);
        }, !0), i("indentUnit", 2, za, !0), i("indentWithTabs", !1), i("smartIndent", !0), i("tabSize", 4, function(r) {
          Ii(r), bi(r), qt(r);
        }, !0), i("lineSeparator", null, function(r, a) {
          if (r.doc.lineSep = a, !!a) {
            var v = [], R = r.doc.first;
            r.doc.iter(function(O) {
              for (var W = 0; ; ) {
                var V = O.text.indexOf(a, W);
                if (V == -1)
                  break;
                W = V + a.length, v.push(ee(R, V));
              }
              R++;
            });
            for (var L = v.length - 1; L >= 0; L--)
              _r(r.doc, a, v[L], ee(v[L].line, v[L].ch + a.length));
          }
        }), i("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g, function(r, a, v) {
          r.state.specialChars = new RegExp(a.source + (a.test("	") ? "" : "|	"), "g"), v != ri && r.refresh();
        }), i("specialCharPlaceholder", Kd, function(r) {
          return r.refresh();
        }, !0), i("electricChars", !0), i("inputStyle", p ? "contenteditable" : "textarea", function() {
          throw new Error("inputStyle can not (yet) be changed in a running editor");
        }, !0), i("spellcheck", !1, function(r, a) {
          return r.getInputField().spellcheck = a;
        }, !0), i("autocorrect", !1, function(r, a) {
          return r.getInputField().autocorrect = a;
        }, !0), i("autocapitalize", !1, function(r, a) {
          return r.getInputField().autocapitalize = a;
        }, !0), i("rtlMoveVisually", !N), i("wholeLineUpdateBefore", !0), i("theme", "default", function(r) {
          vf(r), Pi(r);
        }, !0), i("keyMap", "default", function(r, a, v) {
          var R = Oo(a), L = v != ri && Oo(v);
          L && L.detach && L.detach(r, R), R.attach && R.attach(r, L || null);
        }), i("extraKeys", null), i("configureMouse", null), i("lineWrapping", !1, Sv, !0), i("gutters", [], function(r, a) {
          r.display.gutterSpecs = Ha(a, r.options.lineNumbers), Pi(r);
        }, !0), i("fixedGutter", !0, function(r, a) {
          r.display.gutters.style.left = a ? Ta(r.display) + "px" : "0", r.refresh();
        }, !0), i("coverGutterNextToScrollbar", !1, function(r) {
          return Xr(r);
        }, !0), i("scrollbarStyle", "native", function(r) {
          hu(r), Xr(r), r.display.scrollbars.setScrollTop(r.doc.scrollTop), r.display.scrollbars.setScrollLeft(r.doc.scrollLeft);
        }, !0), i("lineNumbers", !1, function(r, a) {
          r.display.gutterSpecs = Ha(r.options.gutters, a), Pi(r);
        }, !0), i("firstLineNumber", 1, Pi, !0), i("lineNumberFormatter", function(r) {
          return r;
        }, Pi, !0), i("showCursorWhenSelecting", !1, Ci, !0), i("resetSelectionOnContextMenu", !0), i("lineWiseCopyCut", !0), i("pasteLinesPerSelection", !0), i("selectionsMayTouch", !1), i("readOnly", !1, function(r, a) {
          a == "nocursor" && (kr(r), r.display.input.blur()), r.display.input.readOnlyChanged(a);
        }), i("screenReaderLabel", null, function(r, a) {
          a = a === "" ? null : a, r.display.input.screenReaderLabelChanged(a);
        }), i("disableInput", !1, function(r, a) {
          a || r.display.input.reset();
        }, !0), i("dragDrop", !0, xv), i("allowDropFileTypes", null), i("cursorBlinkRate", 530), i("cursorScrollMargin", 0), i("cursorHeight", 1, Ci, !0), i("singleCursorHeightPerLine", !0, Ci, !0), i("workTime", 100), i("workDelay", 100), i("flattenSpans", !0, Ii, !0), i("addModeClass", !1, Ii, !0), i("pollInterval", 100), i("undoDepth", 200, function(r, a) {
          return r.doc.history.undoDepth = a;
        }), i("historyEventDelay", 1250), i("viewportMargin", 10, function(r) {
          return r.refresh();
        }, !0), i("maxHighlightLength", 1e4, Ii, !0), i("moveInputWithCursor", !0, function(r, a) {
          a || r.display.input.resetPosition();
        }), i("tabindex", null, function(r, a) {
          return r.display.input.getField().tabIndex = a || "";
        }), i("autofocus", null), i("direction", "ltr", function(r, a) {
          return r.doc.setDirection(a);
        }, !0), i("phrases", null);
      }
      function xv(e, n, i) {
        var r = i && i != ri;
        if (!n != !r) {
          var a = e.display.dragFunctions, v = n ? ue : ze;
          v(e.display.scroller, "dragstart", a.start), v(e.display.scroller, "dragenter", a.enter), v(e.display.scroller, "dragover", a.over), v(e.display.scroller, "dragleave", a.leave), v(e.display.scroller, "drop", a.drop);
        }
      }
      function Sv(e) {
        e.options.lineWrapping ? (X(e.display.wrapper, "CodeMirror-wrap"), e.display.sizer.style.minWidth = "", e.display.sizerWidth = null) : (z(e.display.wrapper, "CodeMirror-wrap"), ha(e)), wa(e), qt(e), bi(e), setTimeout(function() {
          return Xr(e);
        }, 100);
      }
      function nt(e, n) {
        var i = this;
        if (!(this instanceof nt))
          return new nt(e, n);
        this.options = n = n ? se(n) : {}, se(pf, n, !1);
        var r = n.value;
        typeof r == "string" ? r = new _t(r, n.mode, null, n.lineSeparator, n.direction) : n.mode && (r.modeOption = n.mode), this.doc = r;
        var a = new nt.inputStyles[n.inputStyle](this), v = this.display = new Oc(e, r, a, n);
        v.wrapper.CodeMirror = this, vf(this), n.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), hu(this), this.state = {
          keyMaps: [],
          overlays: [],
          modeGen: 0,
          overwrite: !1,
          delayingBlurEvent: !1,
          focused: !1,
          suppressEdits: !1,
          pasteIncoming: -1,
          cutIncoming: -1,
          selectingText: !1,
          draggingText: !1,
          highlight: new Pe(),
          keySeq: null,
          specialChars: null
        }, n.autofocus && !p && v.input.focus(), f && g < 11 && setTimeout(function() {
          return i.display.input.reset(!0);
        }, 20), Ev(this), _c(), Dr(this), this.curOp.forceUpdate = !0, Tu(this, r), n.autofocus && !p || this.hasFocus() ? setTimeout(function() {
          i.hasFocus() && !i.state.focused && Pa(i);
        }, 20) : kr(this);
        for (var R in Bo)
          Bo.hasOwnProperty(R) && Bo[R](this, n[R], ri);
        yu(this), n.finishInit && n.finishInit(this);
        for (var L = 0; L < Ja.length; ++L)
          Ja[L](this);
        Mr(this), C && n.lineWrapping && getComputedStyle(v.lineDiv).textRendering == "optimizelegibility" && (v.lineDiv.style.textRendering = "auto");
      }
      nt.defaults = pf, nt.optionHandlers = Bo;
      function Ev(e) {
        var n = e.display;
        ue(n.scroller, "mousedown", wt(e, uf)), f && g < 11 ? ue(n.scroller, "dblclick", wt(e, function(O) {
          if (!Ge(e, O)) {
            var W = br(e, O);
            if (!(!W || Xa(e, O) || Vn(e.display, O))) {
              mt(O);
              var V = e.findWordAt(W);
              Ro(e.doc, V.anchor, V.head);
            }
          }
        })) : ue(n.scroller, "dblclick", function(O) {
          return Ge(e, O) || mt(O);
        }), ue(n.scroller, "contextmenu", function(O) {
          return cf(e, O);
        }), ue(n.input.getField(), "contextmenu", function(O) {
          n.scroller.contains(O.target) || cf(e, O);
        });
        var i, r = { end: 0 };
        function a() {
          n.activeTouch && (i = setTimeout(function() {
            return n.activeTouch = null;
          }, 1e3), r = n.activeTouch, r.end = +new Date());
        }
        function v(O) {
          if (O.touches.length != 1)
            return !1;
          var W = O.touches[0];
          return W.radiusX <= 1 && W.radiusY <= 1;
        }
        function R(O, W) {
          if (W.left == null)
            return !0;
          var V = W.left - O.left, k = W.top - O.top;
          return V * V + k * k > 20 * 20;
        }
        ue(n.scroller, "touchstart", function(O) {
          if (!Ge(e, O) && !v(O) && !Xa(e, O)) {
            n.input.ensurePolled(), clearTimeout(i);
            var W = +new Date();
            n.activeTouch = {
              start: W,
              moved: !1,
              prev: W - r.end <= 300 ? r : null
            }, O.touches.length == 1 && (n.activeTouch.left = O.touches[0].pageX, n.activeTouch.top = O.touches[0].pageY);
          }
        }), ue(n.scroller, "touchmove", function() {
          n.activeTouch && (n.activeTouch.moved = !0);
        }), ue(n.scroller, "touchend", function(O) {
          var W = n.activeTouch;
          if (W && !Vn(n, O) && W.left != null && !W.moved && new Date() - W.start < 300) {
            var V = e.coordsChar(n.activeTouch, "page"), k;
            !W.prev || R(W, W.prev) ? k = new Qe(V, V) : !W.prev.prev || R(W, W.prev.prev) ? k = e.findWordAt(V) : k = new Qe(ee(V.line, 0), Fe(e.doc, ee(V.line + 1, 0))), e.setSelection(k.anchor, k.head), e.focus(), mt(O);
          }
          a();
        }), ue(n.scroller, "touchcancel", a), ue(n.scroller, "scroll", function() {
          n.scroller.clientHeight && (wi(e, n.scroller.scrollTop), Tr(e, n.scroller.scrollLeft, !0), $e(e, "scroll", e));
        }), ue(n.scroller, "mousewheel", function(O) {
          return Su(e, O);
        }), ue(n.scroller, "DOMMouseScroll", function(O) {
          return Su(e, O);
        }), ue(n.wrapper, "scroll", function() {
          return n.wrapper.scrollTop = n.wrapper.scrollLeft = 0;
        }), n.dragFunctions = {
          enter: function(O) {
            Ge(e, O) || _n(O);
          },
          over: function(O) {
            Ge(e, O) || (qc(e, O), _n(O));
          },
          start: function(O) {
            return Zc(e, O);
          },
          drop: wt(e, Jc),
          leave: function(O) {
            Ge(e, O) || Xu(e);
          }
        };
        var L = n.input.getField();
        ue(L, "keyup", function(O) {
          return lf.call(e, O);
        }), ue(L, "keydown", wt(e, af)), ue(L, "keypress", wt(e, sf)), ue(L, "focus", function(O) {
          return Pa(e, O);
        }), ue(L, "blur", function(O) {
          return kr(e, O);
        });
      }
      var Ja = [];
      nt.defineInitHook = function(e) {
        return Ja.push(e);
      };
      function Vi(e, n, i, r) {
        var a = e.doc, v;
        i == null && (i = "add"), i == "smart" && (a.mode.indent ? v = yi(e, n).state : i = "prev");
        var R = e.options.tabSize, L = we(a, n), O = pe(L.text, null, R);
        L.stateAfter && (L.stateAfter = null);
        var W = L.text.match(/^\s*/)[0], V;
        if (!r && !/\S/.test(L.text))
          V = 0, i = "not";
        else if (i == "smart" && (V = a.mode.indent(v, L.text.slice(W.length), L.text), V == Ft || V > 150)) {
          if (!r)
            return;
          i = "prev";
        }
        i == "prev" ? n > a.first ? V = pe(we(a, n - 1).text, null, R) : V = 0 : i == "add" ? V = O + e.options.indentUnit : i == "subtract" ? V = O - e.options.indentUnit : typeof i == "number" && (V = O + i), V = Math.max(0, V);
        var k = "", Z = 0;
        if (e.options.indentWithTabs)
          for (var J = Math.floor(V / R); J; --J)
            Z += R, k += "	";
        if (Z < V && (k += Kt(V - Z)), k != W)
          return _r(a, k, ee(n, 0), ee(n, W.length), "+input"), L.stateAfter = null, !0;
        for (var te = 0; te < a.sel.ranges.length; te++) {
          var ie = a.sel.ranges[te];
          if (ie.head.line == n && ie.head.ch < W.length) {
            var de = ee(n, W.length);
            Ya(a, te, new Qe(de, de));
            break;
          }
        }
      }
      var Mn = null;
      function Ho(e) {
        Mn = e;
      }
      function Za(e, n, i, r, a) {
        var v = e.doc;
        e.display.shift = !1, r || (r = v.sel);
        var R = +new Date() - 200, L = a == "paste" || e.state.pasteIncoming > R, O = gn(n), W = null;
        if (L && r.ranges.length > 1)
          if (Mn && Mn.text.join(`
`) == n) {
            if (r.ranges.length % Mn.text.length == 0) {
              W = [];
              for (var V = 0; V < Mn.text.length; V++)
                W.push(v.splitLines(Mn.text[V]));
            }
          } else
            O.length == r.ranges.length && e.options.pasteLinesPerSelection && (W = Ht(O, function(he) {
              return [he];
            }));
        for (var k = e.curOp.updateInput, Z = r.ranges.length - 1; Z >= 0; Z--) {
          var J = r.ranges[Z], te = J.from(), ie = J.to();
          J.empty() && (i && i > 0 ? te = ee(te.line, te.ch - i) : e.state.overwrite && !L ? ie = ee(ie.line, Math.min(we(v, ie.line).text.length, ie.ch + Ue(O).length)) : L && Mn && Mn.lineWise && Mn.text.join(`
`) == O.join(`
`) && (te = ie = ee(te.line, 0)));
          var de = {
            from: te,
            to: ie,
            text: W ? W[Z % W.length] : O,
            origin: a || (L ? "paste" : e.state.cutIncoming > R ? "cut" : "+input")
          };
          qr(e.doc, de), Tt(e, "inputRead", e, de);
        }
        n && !L && gf(e, n), Kr(e), e.curOp.updateInput < 2 && (e.curOp.updateInput = k), e.curOp.typing = !0, e.state.pasteIncoming = e.state.cutIncoming = -1;
      }
      function hf(e, n) {
        var i = e.clipboardData && e.clipboardData.getData("Text");
        if (i)
          return e.preventDefault(), !n.isReadOnly() && !n.options.disableInput && n.hasFocus() && an(n, function() {
            return Za(n, i, 0, null, "paste");
          }), !0;
      }
      function gf(e, n) {
        if (!(!e.options.electricChars || !e.options.smartIndent))
          for (var i = e.doc.sel, r = i.ranges.length - 1; r >= 0; r--) {
            var a = i.ranges[r];
            if (!(a.head.ch > 100 || r && i.ranges[r - 1].head.line == a.head.line)) {
              var v = e.getModeAt(a.head), R = !1;
              if (v.electricChars) {
                for (var L = 0; L < v.electricChars.length; L++)
                  if (n.indexOf(v.electricChars.charAt(L)) > -1) {
                    R = Vi(e, a.head.line, "smart");
                    break;
                  }
              } else
                v.electricInput && v.electricInput.test(we(e.doc, a.head.line).text.slice(0, a.head.ch)) && (R = Vi(e, a.head.line, "smart"));
              R && Tt(e, "electricInput", e, a.head.line);
            }
          }
      }
      function mf(e) {
        for (var n = [], i = [], r = 0; r < e.doc.sel.ranges.length; r++) {
          var a = e.doc.sel.ranges[r].head.line, v = { anchor: ee(a, 0), head: ee(a + 1, 0) };
          i.push(v), n.push(e.getRange(v.anchor, v.head));
        }
        return { text: n, ranges: i };
      }
      function qa(e, n, i, r) {
        e.setAttribute("autocorrect", i ? "on" : "off"), e.setAttribute("autocapitalize", r ? "on" : "off"), e.setAttribute("spellcheck", !!n);
      }
      function yf() {
        var e = I("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none"), n = I("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
        return C ? e.style.width = "1000px" : e.setAttribute("wrap", "off"), S && (e.style.border = "1px solid black"), n;
      }
      function bv(e) {
        var n = e.optionHandlers, i = e.helpers = {};
        e.prototype = {
          constructor: e,
          focus: function() {
            ae(this).focus(), this.display.input.focus();
          },
          setOption: function(r, a) {
            var v = this.options, R = v[r];
            v[r] == a && r != "mode" || (v[r] = a, n.hasOwnProperty(r) && wt(this, n[r])(this, a, R), $e(this, "optionChange", this, r));
          },
          getOption: function(r) {
            return this.options[r];
          },
          getDoc: function() {
            return this.doc;
          },
          addKeyMap: function(r, a) {
            this.state.keyMaps[a ? "push" : "unshift"](Oo(r));
          },
          removeKeyMap: function(r) {
            for (var a = this.state.keyMaps, v = 0; v < a.length; ++v)
              if (a[v] == r || a[v].name == r)
                return a.splice(v, 1), !0;
          },
          addOverlay: Yt(function(r, a) {
            var v = r.token ? r : e.getMode(this.options, r);
            if (v.startState)
              throw new Error("Overlays may not be stateful.");
            Ar(
              this.state.overlays,
              {
                mode: v,
                modeSpec: r,
                opaque: a && a.opaque,
                priority: a && a.priority || 0
              },
              function(R) {
                return R.priority;
              }
            ), this.state.modeGen++, qt(this);
          }),
          removeOverlay: Yt(function(r) {
            for (var a = this.state.overlays, v = 0; v < a.length; ++v) {
              var R = a[v].modeSpec;
              if (R == r || typeof r == "string" && R.name == r) {
                a.splice(v, 1), this.state.modeGen++, qt(this);
                return;
              }
            }
          }),
          indentLine: Yt(function(r, a, v) {
            typeof a != "string" && typeof a != "number" && (a == null ? a = this.options.smartIndent ? "smart" : "prev" : a = a ? "add" : "subtract"), ne(this.doc, r) && Vi(this, r, a, v);
          }),
          indentSelection: Yt(function(r) {
            for (var a = this.doc.sel.ranges, v = -1, R = 0; R < a.length; R++) {
              var L = a[R];
              if (L.empty())
                L.head.line > v && (Vi(this, L.head.line, r, !0), v = L.head.line, R == this.doc.sel.primIndex && Kr(this));
              else {
                var O = L.from(), W = L.to(), V = Math.max(v, O.line);
                v = Math.min(this.lastLine(), W.line - (W.ch ? 0 : 1)) + 1;
                for (var k = V; k < v; ++k)
                  Vi(this, k, r);
                var Z = this.doc.sel.ranges;
                O.ch == 0 && a.length == Z.length && Z[R].from().ch > 0 && Ya(this.doc, R, new Qe(O, Z[R].to()), Nt);
              }
            }
          }),
          getTokenAt: function(r, a) {
            return Ds(this, r, a);
          },
          getLineTokens: function(r, a) {
            return Ds(this, ee(r), a, !0);
          },
          getTokenTypeAt: function(r) {
            r = Fe(this.doc, r);
            var a = Cs(this, we(this.doc, r.line)), v = 0, R = (a.length - 1) / 2, L = r.ch, O;
            if (L == 0)
              O = a[2];
            else
              for (; ; ) {
                var W = v + R >> 1;
                if ((W ? a[W * 2 - 1] : 0) >= L)
                  R = W;
                else if (a[W * 2 + 1] < L)
                  v = W + 1;
                else {
                  O = a[W * 2 + 2];
                  break;
                }
              }
            var V = O ? O.indexOf("overlay ") : -1;
            return V < 0 ? O : V == 0 ? null : O.slice(0, V - 1);
          },
          getModeAt: function(r) {
            var a = this.doc.mode;
            return a.innerMode ? e.innerMode(a, this.getTokenAt(r).state).mode : a;
          },
          getHelper: function(r, a) {
            return this.getHelpers(r, a)[0];
          },
          getHelpers: function(r, a) {
            var v = [];
            if (!i.hasOwnProperty(a))
              return v;
            var R = i[a], L = this.getModeAt(r);
            if (typeof L[a] == "string")
              R[L[a]] && v.push(R[L[a]]);
            else if (L[a])
              for (var O = 0; O < L[a].length; O++) {
                var W = R[L[a][O]];
                W && v.push(W);
              }
            else
              L.helperType && R[L.helperType] ? v.push(R[L.helperType]) : R[L.name] && v.push(R[L.name]);
            for (var V = 0; V < R._global.length; V++) {
              var k = R._global[V];
              k.pred(L, this) && be(v, k.val) == -1 && v.push(k.val);
            }
            return v;
          },
          getStateAfter: function(r, a) {
            var v = this.doc;
            return r = Ss(v, r == null ? v.first + v.size - 1 : r), yi(this, r + 1, a).state;
          },
          cursorCoords: function(r, a) {
            var v, R = this.doc.sel.primary();
            return r == null ? v = R.head : typeof r == "object" ? v = Fe(this.doc, r) : v = r ? R.from() : R.to(), wn(this, v, a || "page");
          },
          charCoords: function(r, a) {
            return Ao(this, Fe(this.doc, r), a || "page");
          },
          coordsChar: function(r, a) {
            return r = nu(this, r, a || "page"), Ea(this, r.left, r.top);
          },
          lineAtHeight: function(r, a) {
            return r = nu(this, { top: r, left: 0 }, a || "page").top, G(this.doc, r + this.display.viewOffset);
          },
          heightAtLine: function(r, a, v) {
            var R = !1, L;
            if (typeof r == "number") {
              var O = this.doc.first + this.doc.size - 1;
              r < this.doc.first ? r = this.doc.first : r > O && (r = O, R = !0), L = we(this.doc, r);
            } else
              L = r;
            return yo(this, L, { top: 0, left: 0 }, a || "page", v || R).top + (R ? this.doc.height - Yn(L) : 0);
          },
          defaultTextHeight: function() {
            return Qr(this.display);
          },
          defaultCharWidth: function() {
            return Gr(this.display);
          },
          getViewport: function() {
            return { from: this.display.viewFrom, to: this.display.viewTo };
          },
          addWidget: function(r, a, v, R, L) {
            var O = this.display;
            r = wn(this, Fe(this.doc, r));
            var W = r.bottom, V = r.left;
            if (a.style.position = "absolute", a.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(a), O.sizer.appendChild(a), R == "over")
              W = r.top;
            else if (R == "above" || R == "near") {
              var k = Math.max(O.wrapper.clientHeight, this.doc.height), Z = Math.max(O.sizer.clientWidth, O.lineSpace.clientWidth);
              (R == "above" || r.bottom + a.offsetHeight > k) && r.top > a.offsetHeight ? W = r.top - a.offsetHeight : r.bottom + a.offsetHeight <= k && (W = r.bottom), V + a.offsetWidth > Z && (V = Z - a.offsetWidth);
            }
            a.style.top = W + "px", a.style.left = a.style.right = "", L == "right" ? (V = O.sizer.clientWidth - a.offsetWidth, a.style.right = "0px") : (L == "left" ? V = 0 : L == "middle" && (V = (O.sizer.clientWidth - a.offsetWidth) / 2), a.style.left = V + "px"), v && xc(this, { left: V, top: W, right: V + a.offsetWidth, bottom: W + a.offsetHeight });
          },
          triggerOnKeyDown: Yt(af),
          triggerOnKeyPress: Yt(sf),
          triggerOnKeyUp: lf,
          triggerOnMouseDown: Yt(uf),
          execCommand: function(r) {
            if (Wi.hasOwnProperty(r))
              return Wi[r].call(null, this);
          },
          triggerElectric: Yt(function(r) {
            gf(this, r);
          }),
          findPosH: function(r, a, v, R) {
            var L = 1;
            a < 0 && (L = -1, a = -a);
            for (var O = Fe(this.doc, r), W = 0; W < a && (O = _a(this.doc, O, L, v, R), !O.hitSide); ++W)
              ;
            return O;
          },
          moveH: Yt(function(r, a) {
            var v = this;
            this.extendSelectionsBy(function(R) {
              return v.display.shift || v.doc.extend || R.empty() ? _a(v.doc, R.head, r, a, v.options.rtlMoveVisually) : r < 0 ? R.from() : R.to();
            }, Et);
          }),
          deleteH: Yt(function(r, a) {
            var v = this.doc.sel, R = this.doc;
            v.somethingSelected() ? R.replaceSelection("", null, "+delete") : ni(this, function(L) {
              var O = _a(R, L.head, r, a, !1);
              return r < 0 ? { from: O, to: L.head } : { from: L.head, to: O };
            });
          }),
          findPosV: function(r, a, v, R) {
            var L = 1, O = R;
            a < 0 && (L = -1, a = -a);
            for (var W = Fe(this.doc, r), V = 0; V < a; ++V) {
              var k = wn(this, W, "div");
              if (O == null ? O = k.left : k.left = O, W = Af(this, k, L, v), W.hitSide)
                break;
            }
            return W;
          },
          moveV: Yt(function(r, a) {
            var v = this, R = this.doc, L = [], O = !this.display.shift && !R.extend && R.sel.somethingSelected();
            if (R.extendSelectionsBy(function(V) {
              if (O)
                return r < 0 ? V.from() : V.to();
              var k = wn(v, V.head, "div");
              V.goalColumn != null && (k.left = V.goalColumn), L.push(k.left);
              var Z = Af(v, k, r, a);
              return a == "page" && V == R.sel.primary() && La(v, Ao(v, Z, "div").top - k.top), Z;
            }, Et), L.length)
              for (var W = 0; W < R.sel.ranges.length; W++)
                R.sel.ranges[W].goalColumn = L[W];
          }),
          findWordAt: function(r) {
            var a = this.doc, v = we(a, r.line).text, R = r.ch, L = r.ch;
            if (v) {
              var O = this.getHelper(r, "wordChars");
              (r.sticky == "before" || L == v.length) && R ? --R : ++L;
              for (var W = v.charAt(R), V = jt(W, O) ? function(k) {
                return jt(k, O);
              } : /\s/.test(W) ? function(k) {
                return /\s/.test(k);
              } : function(k) {
                return !/\s/.test(k) && !jt(k);
              }; R > 0 && V(v.charAt(R - 1)); )
                --R;
              for (; L < v.length && V(v.charAt(L)); )
                ++L;
            }
            return new Qe(ee(r.line, R), ee(r.line, L));
          },
          toggleOverwrite: function(r) {
            r != null && r == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? X(this.display.cursorDiv, "CodeMirror-overwrite") : z(this.display.cursorDiv, "CodeMirror-overwrite"), $e(this, "overwriteToggle", this, this.state.overwrite));
          },
          hasFocus: function() {
            return this.display.input.getField() == q(ve(this));
          },
          isReadOnly: function() {
            return !!(this.options.readOnly || this.doc.cantEdit);
          },
          scrollTo: Yt(function(r, a) {
            Ti(this, r, a);
          }),
          getScrollInfo: function() {
            var r = this.display.scroller;
            return {
              left: r.scrollLeft,
              top: r.scrollTop,
              height: r.scrollHeight - On(this) - this.display.barHeight,
              width: r.scrollWidth - On(this) - this.display.barWidth,
              clientHeight: ya(this),
              clientWidth: Sr(this)
            };
          },
          scrollIntoView: Yt(function(r, a) {
            r == null ? (r = { from: this.doc.sel.primary().head, to: null }, a == null && (a = this.options.cursorScrollMargin)) : typeof r == "number" ? r = { from: ee(r, 0), to: null } : r.from == null && (r = { from: r, to: null }), r.to || (r.to = r.from), r.margin = a || 0, r.from.line != null ? Sc(this, r) : du(this, r.from, r.to, r.margin);
          }),
          setSize: Yt(function(r, a) {
            var v = this, R = function(O) {
              return typeof O == "number" || /^\d+$/.test(String(O)) ? O + "px" : O;
            };
            r != null && (this.display.wrapper.style.width = R(r)), a != null && (this.display.wrapper.style.height = R(a)), this.options.lineWrapping && _s(this);
            var L = this.display.viewFrom;
            this.doc.iter(L, this.display.viewTo, function(O) {
              if (O.widgets) {
                for (var W = 0; W < O.widgets.length; W++)
                  if (O.widgets[W].noHScroll) {
                    ir(v, L, "widget");
                    break;
                  }
              }
              ++L;
            }), this.curOp.forceUpdate = !0, $e(this, "refresh", this);
          }),
          operation: function(r) {
            return an(this, r);
          },
          startOperation: function() {
            return Dr(this);
          },
          endOperation: function() {
            return Mr(this);
          },
          refresh: Yt(function() {
            var r = this.display.cachedTextHeight;
            qt(this), this.curOp.forceUpdate = !0, bi(this), Ti(this, this.doc.scrollLeft, this.doc.scrollTop), Fa(this.display), (r == null || Math.abs(r - Qr(this.display)) > 0.5 || this.options.lineWrapping) && wa(this), $e(this, "refresh", this);
          }),
          swapDoc: Yt(function(r) {
            var a = this.doc;
            return a.cm = null, this.state.selectingText && this.state.selectingText(), Tu(this, r), bi(this), this.display.input.reset(), Ti(this, r.scrollLeft, r.scrollTop), this.curOp.forceScroll = !0, Tt(this, "swapDoc", this, a), a;
          }),
          phrase: function(r) {
            var a = this.options.phrases;
            return a && Object.prototype.hasOwnProperty.call(a, r) ? a[r] : r;
          },
          getInputField: function() {
            return this.display.input.getField();
          },
          getWrapperElement: function() {
            return this.display.wrapper;
          },
          getScrollerElement: function() {
            return this.display.scroller;
          },
          getGutterElement: function() {
            return this.display.gutters;
          }
        }, $t(e), e.registerHelper = function(r, a, v) {
          i.hasOwnProperty(r) || (i[r] = e[r] = { _global: [] }), i[r][a] = v;
        }, e.registerGlobalHelper = function(r, a, v, R) {
          e.registerHelper(r, a, R), i[r]._global.push({ pred: v, val: R });
        };
      }
      function _a(e, n, i, r, a) {
        var v = n, R = i, L = we(e, n.line), O = a && e.direction == "rtl" ? -i : i;
        function W() {
          var xe = n.line + O;
          return xe < e.first || xe >= e.first + e.size ? !1 : (n = new ee(xe, n.ch, n.sticky), L = we(e, xe));
        }
        function V(xe) {
          var ge;
          if (r == "codepoint") {
            var Te = L.text.charCodeAt(n.ch + (i > 0 ? 0 : -1));
            if (isNaN(Te))
              ge = null;
            else {
              var Re = i > 0 ? Te >= 55296 && Te < 56320 : Te >= 56320 && Te < 57343;
              ge = new ee(n.line, Math.max(0, Math.min(L.text.length, n.ch + i * (Re ? 2 : 1))), -i);
            }
          } else
            a ? ge = iv(e.cm, L, n, i) : ge = Qa(L, n, i);
          if (ge == null)
            if (!xe && W())
              n = Ga(a, e.cm, L, n.line, O);
            else
              return !1;
          else
            n = ge;
          return !0;
        }
        if (r == "char" || r == "codepoint")
          V();
        else if (r == "column")
          V(!0);
        else if (r == "word" || r == "group")
          for (var k = null, Z = r == "group", J = e.cm && e.cm.getHelper(n, "wordChars"), te = !0; !(i < 0 && !V(!te)); te = !1) {
            var ie = L.text.charAt(n.ch) || `
`, de = jt(ie, J) ? "w" : Z && ie == `
` ? "n" : !Z || /\s/.test(ie) ? null : "p";
            if (Z && !te && !de && (de = "s"), k && k != de) {
              i < 0 && (i = 1, V(), n.sticky = "after");
              break;
            }
            if (de && (k = de), i > 0 && !V(!te))
              break;
          }
        var he = Io(e, n, v, R, !0);
        return Ve(v, he) && (he.hitSide = !0), he;
      }
      function Af(e, n, i, r) {
        var a = e.doc, v = n.left, R;
        if (r == "page") {
          var L = Math.min(e.display.wrapper.clientHeight, ae(e).innerHeight || a(e).documentElement.clientHeight), O = Math.max(L - 0.5 * Qr(e.display), 3);
          R = (i > 0 ? n.bottom : n.top) + i * O;
        } else
          r == "line" && (R = i > 0 ? n.bottom + 3 : n.top - 3);
        for (var W; W = Ea(e, v, R), !!W.outside; ) {
          if (i < 0 ? R <= 0 : R >= a.height) {
            W.hitSide = !0;
            break;
          }
          R += i * 5;
        }
        return W;
      }
      var Xe = function(e) {
        this.cm = e, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new Pe(), this.composing = null, this.gracePeriod = !1, this.readDOMTimeout = null;
      };
      Xe.prototype.init = function(e) {
        var n = this, i = this, r = i.cm, a = i.div = e.lineDiv;
        a.contentEditable = !0, qa(a, r.options.spellcheck, r.options.autocorrect, r.options.autocapitalize);
        function v(L) {
          for (var O = L.target; O; O = O.parentNode) {
            if (O == a)
              return !0;
            if (/\bCodeMirror-(?:line)?widget\b/.test(O.className))
              break;
          }
          return !1;
        }
        ue(a, "paste", function(L) {
          !v(L) || Ge(r, L) || hf(L, r) || g <= 11 && setTimeout(wt(r, function() {
            return n.updateFromDOM();
          }), 20);
        }), ue(a, "compositionstart", function(L) {
          n.composing = { data: L.data, done: !1 };
        }), ue(a, "compositionupdate", function(L) {
          n.composing || (n.composing = { data: L.data, done: !1 });
        }), ue(a, "compositionend", function(L) {
          n.composing && (L.data != n.composing.data && n.readFromDOMSoon(), n.composing.done = !0);
        }), ue(a, "touchstart", function() {
          return i.forceCompositionEnd();
        }), ue(a, "input", function() {
          n.composing || n.readFromDOMSoon();
        });
        function R(L) {
          if (!(!v(L) || Ge(r, L))) {
            if (r.somethingSelected())
              Ho({ lineWise: !1, text: r.getSelections() }), L.type == "cut" && r.replaceSelection("", null, "cut");
            else if (r.options.lineWiseCopyCut) {
              var O = mf(r);
              Ho({ lineWise: !0, text: O.text }), L.type == "cut" && r.operation(function() {
                r.setSelections(O.ranges, 0, Nt), r.replaceSelection("", null, "cut");
              });
            } else
              return;
            if (L.clipboardData) {
              L.clipboardData.clearData();
              var W = Mn.text.join(`
`);
              if (L.clipboardData.setData("Text", W), L.clipboardData.getData("Text") == W) {
                L.preventDefault();
                return;
              }
            }
            var V = yf(), k = V.firstChild;
            qa(k), r.display.lineSpace.insertBefore(V, r.display.lineSpace.firstChild), k.value = Mn.text.join(`
`);
            var Z = q(ce(a));
            le(k), setTimeout(function() {
              r.display.lineSpace.removeChild(V), Z.focus(), Z == a && i.showPrimarySelection();
            }, 50);
          }
        }
        ue(a, "copy", R), ue(a, "cut", R);
      }, Xe.prototype.screenReaderLabelChanged = function(e) {
        e ? this.div.setAttribute("aria-label", e) : this.div.removeAttribute("aria-label");
      }, Xe.prototype.prepareSelection = function() {
        var e = su(this.cm, !1);
        return e.focus = q(ce(this.div)) == this.div, e;
      }, Xe.prototype.showSelection = function(e, n) {
        !e || !this.cm.display.view.length || ((e.focus || n) && this.showPrimarySelection(), this.showMultipleSelections(e));
      }, Xe.prototype.getSelection = function() {
        return this.cm.display.wrapper.ownerDocument.getSelection();
      }, Xe.prototype.showPrimarySelection = function() {
        var e = this.getSelection(), n = this.cm, i = n.doc.sel.primary(), r = i.from(), a = i.to();
        if (n.display.viewTo == n.display.viewFrom || r.line >= n.display.viewTo || a.line < n.display.viewFrom) {
          e.removeAllRanges();
          return;
        }
        var v = Uo(n, e.anchorNode, e.anchorOffset), R = Uo(n, e.focusNode, e.focusOffset);
        if (!(v && !v.bad && R && !R.bad && ye(jr(v, R), r) == 0 && ye(Zt(v, R), a) == 0)) {
          var L = n.display.view, O = r.line >= n.display.viewFrom && xf(n, r) || { node: L[0].measure.map[2], offset: 0 }, W = a.line < n.display.viewTo && xf(n, a);
          if (!W) {
            var V = L[L.length - 1].measure, k = V.maps ? V.maps[V.maps.length - 1] : V.map;
            W = { node: k[k.length - 1], offset: k[k.length - 2] - k[k.length - 3] };
          }
          if (!O || !W) {
            e.removeAllRanges();
            return;
          }
          var Z = e.rangeCount && e.getRangeAt(0), J;
          try {
            J = Q(O.node, O.offset, W.offset, W.node);
          } catch {
          }
          J && (!t && n.state.focused ? (e.collapse(O.node, O.offset), J.collapsed || (e.removeAllRanges(), e.addRange(J))) : (e.removeAllRanges(), e.addRange(J)), Z && e.anchorNode == null ? e.addRange(Z) : t && this.startGracePeriod()), this.rememberSelection();
        }
      }, Xe.prototype.startGracePeriod = function() {
        var e = this;
        clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout(function() {
          e.gracePeriod = !1, e.selectionChanged() && e.cm.operation(function() {
            return e.cm.curOp.selectionChanged = !0;
          });
        }, 20);
      }, Xe.prototype.showMultipleSelections = function(e) {
        $(this.cm.display.cursorDiv, e.cursors), $(this.cm.display.selectionDiv, e.selection);
      }, Xe.prototype.rememberSelection = function() {
        var e = this.getSelection();
        this.lastAnchorNode = e.anchorNode, this.lastAnchorOffset = e.anchorOffset, this.lastFocusNode = e.focusNode, this.lastFocusOffset = e.focusOffset;
      }, Xe.prototype.selectionInEditor = function() {
        var e = this.getSelection();
        if (!e.rangeCount)
          return !1;
        var n = e.getRangeAt(0).commonAncestorContainer;
        return K(this.div, n);
      }, Xe.prototype.focus = function() {
        this.cm.options.readOnly != "nocursor" && ((!this.selectionInEditor() || q(ce(this.div)) != this.div) && this.showSelection(this.prepareSelection(), !0), this.div.focus());
      }, Xe.prototype.blur = function() {
        this.div.blur();
      }, Xe.prototype.getField = function() {
        return this.div;
      }, Xe.prototype.supportsTouch = function() {
        return !0;
      }, Xe.prototype.receivedFocus = function() {
        var e = this, n = this;
        this.selectionInEditor() ? setTimeout(function() {
          return e.pollSelection();
        }, 20) : an(this.cm, function() {
          return n.cm.curOp.selectionChanged = !0;
        });
        function i() {
          n.cm.state.focused && (n.pollSelection(), n.polling.set(n.cm.options.pollInterval, i));
        }
        this.polling.set(this.cm.options.pollInterval, i);
      }, Xe.prototype.selectionChanged = function() {
        var e = this.getSelection();
        return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset;
      }, Xe.prototype.pollSelection = function() {
        if (!(this.readDOMTimeout != null || this.gracePeriod || !this.selectionChanged())) {
          var e = this.getSelection(), n = this.cm;
          if (w && D && this.cm.display.gutterSpecs.length && Cv(e.anchorNode)) {
            this.cm.triggerOnKeyDown({ type: "keydown", keyCode: 8, preventDefault: Math.abs }), this.blur(), this.focus();
            return;
          }
          if (!this.composing) {
            this.rememberSelection();
            var i = Uo(n, e.anchorNode, e.anchorOffset), r = Uo(n, e.focusNode, e.focusOffset);
            i && r && an(n, function() {
              Ut(n.doc, ar(i, r), Nt), (i.bad || r.bad) && (n.curOp.selectionChanged = !0);
            });
          }
        }
      }, Xe.prototype.pollContent = function() {
        this.readDOMTimeout != null && (clearTimeout(this.readDOMTimeout), this.readDOMTimeout = null);
        var e = this.cm, n = e.display, i = e.doc.sel.primary(), r = i.from(), a = i.to();
        if (r.ch == 0 && r.line > e.firstLine() && (r = ee(r.line - 1, we(e.doc, r.line - 1).length)), a.ch == we(e.doc, a.line).text.length && a.line < e.lastLine() && (a = ee(a.line + 1, 0)), r.line < n.viewFrom || a.line > n.viewTo - 1)
          return !1;
        var v, R, L;
        r.line == n.viewFrom || (v = Cr(e, r.line)) == 0 ? (R = j(n.view[0].line), L = n.view[0].node) : (R = j(n.view[v].line), L = n.view[v - 1].node.nextSibling);
        var O = Cr(e, a.line), W, V;
        if (O == n.view.length - 1 ? (W = n.viewTo - 1, V = n.lineDiv.lastChild) : (W = j(n.view[O + 1].line) - 1, V = n.view[O + 1].node.previousSibling), !L)
          return !1;
        for (var k = e.doc.splitLines(Tv(e, L, V, R, W)), Z = jn(e.doc, ee(R, 0), ee(W, we(e.doc, W).text.length)); k.length > 1 && Z.length > 1; )
          if (Ue(k) == Ue(Z))
            k.pop(), Z.pop(), W--;
          else if (k[0] == Z[0])
            k.shift(), Z.shift(), R++;
          else
            break;
        for (var J = 0, te = 0, ie = k[0], de = Z[0], he = Math.min(ie.length, de.length); J < he && ie.charCodeAt(J) == de.charCodeAt(J); )
          ++J;
        for (var xe = Ue(k), ge = Ue(Z), Te = Math.min(
          xe.length - (k.length == 1 ? J : 0),
          ge.length - (Z.length == 1 ? J : 0)
        ); te < Te && xe.charCodeAt(xe.length - te - 1) == ge.charCodeAt(ge.length - te - 1); )
          ++te;
        if (k.length == 1 && Z.length == 1 && R == r.line)
          for (; J && J > r.ch && xe.charCodeAt(xe.length - te - 1) == ge.charCodeAt(ge.length - te - 1); )
            J--, te++;
        k[k.length - 1] = xe.slice(0, xe.length - te).replace(/^\u200b+/, ""), k[0] = k[0].slice(J).replace(/\u200b+$/, "");
        var Re = ee(R, J), Me = ee(W, Z.length ? Ue(Z).length - te : 0);
        if (k.length > 1 || k[0] || ye(Re, Me))
          return _r(e.doc, k, Re, Me, "+input"), !0;
      }, Xe.prototype.ensurePolled = function() {
        this.forceCompositionEnd();
      }, Xe.prototype.reset = function() {
        this.forceCompositionEnd();
      }, Xe.prototype.forceCompositionEnd = function() {
        !this.composing || (clearTimeout(this.readDOMTimeout), this.composing = null, this.updateFromDOM(), this.div.blur(), this.div.focus());
      }, Xe.prototype.readFromDOMSoon = function() {
        var e = this;
        this.readDOMTimeout == null && (this.readDOMTimeout = setTimeout(function() {
          if (e.readDOMTimeout = null, e.composing)
            if (e.composing.done)
              e.composing = null;
            else
              return;
          e.updateFromDOM();
        }, 80));
      }, Xe.prototype.updateFromDOM = function() {
        var e = this;
        (this.cm.isReadOnly() || !this.pollContent()) && an(this.cm, function() {
          return qt(e.cm);
        });
      }, Xe.prototype.setUneditable = function(e) {
        e.contentEditable = "false";
      }, Xe.prototype.onKeyPress = function(e) {
        e.charCode == 0 || this.composing || (e.preventDefault(), this.cm.isReadOnly() || wt(this.cm, Za)(this.cm, String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode), 0));
      }, Xe.prototype.readOnlyChanged = function(e) {
        this.div.contentEditable = String(e != "nocursor");
      }, Xe.prototype.onContextMenu = function() {
      }, Xe.prototype.resetPosition = function() {
      }, Xe.prototype.needsContentAttribute = !0;
      function xf(e, n) {
        var i = Aa(e, n.line);
        if (!i || i.hidden)
          return null;
        var r = we(e.doc, n.line), a = Ks(i, r, n.line), v = oe(r, e.doc.direction), R = "left";
        if (v) {
          var L = Oe(v, n.ch);
          R = L % 2 ? "right" : "left";
        }
        var O = Zs(a.map, n.ch, R);
        return O.offset = O.collapse == "right" ? O.end : O.start, O;
      }
      function Cv(e) {
        for (var n = e; n; n = n.parentNode)
          if (/CodeMirror-gutter-wrapper/.test(n.className))
            return !0;
        return !1;
      }
      function ii(e, n) {
        return n && (e.bad = !0), e;
      }
      function Tv(e, n, i, r, a) {
        var v = "", R = !1, L = e.doc.lineSeparator(), O = !1;
        function W(J) {
          return function(te) {
            return te.id == J;
          };
        }
        function V() {
          R && (v += L, O && (v += L), R = O = !1);
        }
        function k(J) {
          J && (V(), v += J);
        }
        function Z(J) {
          if (J.nodeType == 1) {
            var te = J.getAttribute("cm-text");
            if (te) {
              k(te);
              return;
            }
            var ie = J.getAttribute("cm-marker"), de;
            if (ie) {
              var he = e.findMarks(ee(r, 0), ee(a + 1, 0), W(+ie));
              he.length && (de = he[0].find(0)) && k(jn(e.doc, de.from, de.to).join(L));
              return;
            }
            if (J.getAttribute("contenteditable") == "false")
              return;
            var xe = /^(pre|div|p|li|table|br)$/i.test(J.nodeName);
            if (!/^br$/i.test(J.nodeName) && J.textContent.length == 0)
              return;
            xe && V();
            for (var ge = 0; ge < J.childNodes.length; ge++)
              Z(J.childNodes[ge]);
            /^(pre|p)$/i.test(J.nodeName) && (O = !0), xe && (R = !0);
          } else
            J.nodeType == 3 && k(J.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));
        }
        for (; Z(n), n != i; )
          n = n.nextSibling, O = !1;
        return v;
      }
      function Uo(e, n, i) {
        var r;
        if (n == e.display.lineDiv) {
          if (r = e.display.lineDiv.childNodes[i], !r)
            return ii(e.clipPos(ee(e.display.viewTo - 1)), !0);
          n = null, i = 0;
        } else
          for (r = n; ; r = r.parentNode) {
            if (!r || r == e.display.lineDiv)
              return null;
            if (r.parentNode && r.parentNode == e.display.lineDiv)
              break;
          }
        for (var a = 0; a < e.display.view.length; a++) {
          var v = e.display.view[a];
          if (v.node == r)
            return wv(v, n, i);
        }
      }
      function wv(e, n, i) {
        var r = e.text.firstChild, a = !1;
        if (!n || !K(r, n))
          return ii(ee(j(e.line), 0), !0);
        if (n == r && (a = !0, n = r.childNodes[i], i = 0, !n)) {
          var v = e.rest ? Ue(e.rest) : e.line;
          return ii(ee(j(v), v.text.length), a);
        }
        var R = n.nodeType == 3 ? n : null, L = n;
        for (!R && n.childNodes.length == 1 && n.firstChild.nodeType == 3 && (R = n.firstChild, i && (i = R.nodeValue.length)); L.parentNode != r; )
          L = L.parentNode;
        var O = e.measure, W = O.maps;
        function V(de, he, xe) {
          for (var ge = -1; ge < (W ? W.length : 0); ge++)
            for (var Te = ge < 0 ? O.map : W[ge], Re = 0; Re < Te.length; Re += 3) {
              var Me = Te[Re + 2];
              if (Me == de || Me == he) {
                var Be = j(ge < 0 ? e.line : e.rest[ge]), _e = Te[Re] + xe;
                return (xe < 0 || Me != de) && (_e = Te[Re + (xe ? 1 : 0)]), ee(Be, _e);
              }
            }
        }
        var k = V(R, L, i);
        if (k)
          return ii(k, a);
        for (var Z = L.nextSibling, J = R ? R.nodeValue.length - i : 0; Z; Z = Z.nextSibling) {
          if (k = V(Z, Z.firstChild, 0), k)
            return ii(ee(k.line, k.ch - J), a);
          J += Z.textContent.length;
        }
        for (var te = L.previousSibling, ie = i; te; te = te.previousSibling) {
          if (k = V(te, te.firstChild, -1), k)
            return ii(ee(k.line, k.ch + ie), a);
          ie += te.textContent.length;
        }
      }
      var ct = function(e) {
        this.cm = e, this.prevInput = "", this.pollingFast = !1, this.polling = new Pe(), this.hasSelection = !1, this.composing = null, this.resetting = !1;
      };
      ct.prototype.init = function(e) {
        var n = this, i = this, r = this.cm;
        this.createField(e);
        var a = this.textarea;
        e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild), S && (a.style.width = "0px"), ue(a, "input", function() {
          f && g >= 9 && n.hasSelection && (n.hasSelection = null), i.poll();
        }), ue(a, "paste", function(R) {
          Ge(r, R) || hf(R, r) || (r.state.pasteIncoming = +new Date(), i.fastPoll());
        });
        function v(R) {
          if (!Ge(r, R)) {
            if (r.somethingSelected())
              Ho({ lineWise: !1, text: r.getSelections() });
            else if (r.options.lineWiseCopyCut) {
              var L = mf(r);
              Ho({ lineWise: !0, text: L.text }), R.type == "cut" ? r.setSelections(L.ranges, null, Nt) : (i.prevInput = "", a.value = L.text.join(`
`), le(a));
            } else
              return;
            R.type == "cut" && (r.state.cutIncoming = +new Date());
          }
        }
        ue(a, "cut", v), ue(a, "copy", v), ue(e.scroller, "paste", function(R) {
          if (!(Vn(e, R) || Ge(r, R))) {
            if (!a.dispatchEvent) {
              r.state.pasteIncoming = +new Date(), i.focus();
              return;
            }
            var L = new Event("paste");
            L.clipboardData = R.clipboardData, a.dispatchEvent(L);
          }
        }), ue(e.lineSpace, "selectstart", function(R) {
          Vn(e, R) || mt(R);
        }), ue(a, "compositionstart", function() {
          var R = r.getCursor("from");
          i.composing && i.composing.range.clear(), i.composing = {
            start: R,
            range: r.markText(R, r.getCursor("to"), { className: "CodeMirror-composing" })
          };
        }), ue(a, "compositionend", function() {
          i.composing && (i.poll(), i.composing.range.clear(), i.composing = null);
        });
      }, ct.prototype.createField = function(e) {
        this.wrapper = yf(), this.textarea = this.wrapper.firstChild;
        var n = this.cm.options;
        qa(this.textarea, n.spellcheck, n.autocorrect, n.autocapitalize);
      }, ct.prototype.screenReaderLabelChanged = function(e) {
        e ? this.textarea.setAttribute("aria-label", e) : this.textarea.removeAttribute("aria-label");
      }, ct.prototype.prepareSelection = function() {
        var e = this.cm, n = e.display, i = e.doc, r = su(e);
        if (e.options.moveInputWithCursor) {
          var a = wn(e, i.sel.primary().head, "div"), v = n.wrapper.getBoundingClientRect(), R = n.lineDiv.getBoundingClientRect();
          r.teTop = Math.max(0, Math.min(
            n.wrapper.clientHeight - 10,
            a.top + R.top - v.top
          )), r.teLeft = Math.max(0, Math.min(
            n.wrapper.clientWidth - 10,
            a.left + R.left - v.left
          ));
        }
        return r;
      }, ct.prototype.showSelection = function(e) {
        var n = this.cm, i = n.display;
        $(i.cursorDiv, e.cursors), $(i.selectionDiv, e.selection), e.teTop != null && (this.wrapper.style.top = e.teTop + "px", this.wrapper.style.left = e.teLeft + "px");
      }, ct.prototype.reset = function(e) {
        if (!(this.contextMenuPending || this.composing && e)) {
          var n = this.cm;
          if (this.resetting = !0, n.somethingSelected()) {
            this.prevInput = "";
            var i = n.getSelection();
            this.textarea.value = i, n.state.focused && le(this.textarea), f && g >= 9 && (this.hasSelection = i);
          } else
            e || (this.prevInput = this.textarea.value = "", f && g >= 9 && (this.hasSelection = null));
          this.resetting = !1;
        }
      }, ct.prototype.getField = function() {
        return this.textarea;
      }, ct.prototype.supportsTouch = function() {
        return !1;
      }, ct.prototype.focus = function() {
        if (this.cm.options.readOnly != "nocursor" && (!p || q(ce(this.textarea)) != this.textarea))
          try {
            this.textarea.focus();
          } catch {
          }
      }, ct.prototype.blur = function() {
        this.textarea.blur();
      }, ct.prototype.resetPosition = function() {
        this.wrapper.style.top = this.wrapper.style.left = 0;
      }, ct.prototype.receivedFocus = function() {
        this.slowPoll();
      }, ct.prototype.slowPoll = function() {
        var e = this;
        this.pollingFast || this.polling.set(this.cm.options.pollInterval, function() {
          e.poll(), e.cm.state.focused && e.slowPoll();
        });
      }, ct.prototype.fastPoll = function() {
        var e = !1, n = this;
        n.pollingFast = !0;
        function i() {
          var r = n.poll();
          !r && !e ? (e = !0, n.polling.set(60, i)) : (n.pollingFast = !1, n.slowPoll());
        }
        n.polling.set(20, i);
      }, ct.prototype.poll = function() {
        var e = this, n = this.cm, i = this.textarea, r = this.prevInput;
        if (this.contextMenuPending || this.resetting || !n.state.focused || tr(i) && !r && !this.composing || n.isReadOnly() || n.options.disableInput || n.state.keySeq)
          return !1;
        var a = i.value;
        if (a == r && !n.somethingSelected())
          return !1;
        if (f && g >= 9 && this.hasSelection === a || T && /[\uf700-\uf7ff]/.test(a))
          return n.display.input.reset(), !1;
        if (n.doc.sel == n.display.selForContextMenu) {
          var v = a.charCodeAt(0);
          if (v == 8203 && !r && (r = "\u200B"), v == 8666)
            return this.reset(), this.cm.execCommand("undo");
        }
        for (var R = 0, L = Math.min(r.length, a.length); R < L && r.charCodeAt(R) == a.charCodeAt(R); )
          ++R;
        return an(n, function() {
          Za(
            n,
            a.slice(R),
            r.length - R,
            null,
            e.composing ? "*compose" : null
          ), a.length > 1e3 || a.indexOf(`
`) > -1 ? i.value = e.prevInput = "" : e.prevInput = a, e.composing && (e.composing.range.clear(), e.composing.range = n.markText(
            e.composing.start,
            n.getCursor("to"),
            { className: "CodeMirror-composing" }
          ));
        }), !0;
      }, ct.prototype.ensurePolled = function() {
        this.pollingFast && this.poll() && (this.pollingFast = !1);
      }, ct.prototype.onKeyPress = function() {
        f && g >= 9 && (this.hasSelection = null), this.fastPoll();
      }, ct.prototype.onContextMenu = function(e) {
        var n = this, i = n.cm, r = i.display, a = n.textarea;
        n.contextMenuPending && n.contextMenuPending();
        var v = br(i, e), R = r.scroller.scrollTop;
        if (!v || h)
          return;
        var L = i.options.resetSelectionOnContextMenu;
        L && i.doc.sel.contains(v) == -1 && wt(i, Ut)(i.doc, ar(v), Nt);
        var O = a.style.cssText, W = n.wrapper.style.cssText, V = n.wrapper.offsetParent.getBoundingClientRect();
        n.wrapper.style.cssText = "position: static", a.style.cssText = `position: absolute; width: 30px; height: 30px;
      top: ` + (e.clientY - V.top - 5) + "px; left: " + (e.clientX - V.left - 5) + `px;
      z-index: 1000; background: ` + (f ? "rgba(255, 255, 255, .05)" : "transparent") + `;
      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);`;
        var k;
        C && (k = a.ownerDocument.defaultView.scrollY), r.input.focus(), C && a.ownerDocument.defaultView.scrollTo(null, k), r.input.reset(), i.somethingSelected() || (a.value = n.prevInput = " "), n.contextMenuPending = J, r.selForContextMenu = i.doc.sel, clearTimeout(r.detectingSelectAll);
        function Z() {
          if (a.selectionStart != null) {
            var ie = i.somethingSelected(), de = "\u200B" + (ie ? a.value : "");
            a.value = "\u21DA", a.value = de, n.prevInput = ie ? "" : "\u200B", a.selectionStart = 1, a.selectionEnd = de.length, r.selForContextMenu = i.doc.sel;
          }
        }
        function J() {
          if (n.contextMenuPending == J && (n.contextMenuPending = !1, n.wrapper.style.cssText = W, a.style.cssText = O, f && g < 9 && r.scrollbars.setScrollTop(r.scroller.scrollTop = R), a.selectionStart != null)) {
            (!f || f && g < 9) && Z();
            var ie = 0, de = function() {
              r.selForContextMenu == i.doc.sel && a.selectionStart == 0 && a.selectionEnd > 0 && n.prevInput == "\u200B" ? wt(i, Uu)(i) : ie++ < 10 ? r.detectingSelectAll = setTimeout(de, 500) : (r.selForContextMenu = null, r.input.reset());
            };
            r.detectingSelectAll = setTimeout(de, 200);
          }
        }
        if (f && g >= 9 && Z(), B) {
          _n(e);
          var te = function() {
            ze(window, "mouseup", te), setTimeout(J, 20);
          };
          ue(window, "mouseup", te);
        } else
          setTimeout(J, 50);
      }, ct.prototype.readOnlyChanged = function(e) {
        e || this.reset(), this.textarea.disabled = e == "nocursor", this.textarea.readOnly = !!e;
      }, ct.prototype.setUneditable = function() {
      }, ct.prototype.needsContentAttribute = !1;
      function Dv(e, n) {
        if (n = n ? se(n) : {}, n.value = e.value, !n.tabindex && e.tabIndex && (n.tabindex = e.tabIndex), !n.placeholder && e.placeholder && (n.placeholder = e.placeholder), n.autofocus == null) {
          var i = q(ce(e));
          n.autofocus = i == e || e.getAttribute("autofocus") != null && i == document.body;
        }
        function r() {
          e.value = L.getValue();
        }
        var a;
        if (e.form && (ue(e.form, "submit", r), !n.leaveSubmitMethodAlone)) {
          var v = e.form;
          a = v.submit;
          try {
            var R = v.submit = function() {
              r(), v.submit = a, v.submit(), v.submit = R;
            };
          } catch {
          }
        }
        n.finishInit = function(O) {
          O.save = r, O.getTextArea = function() {
            return e;
          }, O.toTextArea = function() {
            O.toTextArea = isNaN, r(), e.parentNode.removeChild(O.getWrapperElement()), e.style.display = "", e.form && (ze(e.form, "submit", r), !n.leaveSubmitMethodAlone && typeof e.form.submit == "function" && (e.form.submit = a));
          };
        }, e.style.display = "none";
        var L = nt(
          function(O) {
            return e.parentNode.insertBefore(O, e.nextSibling);
          },
          n
        );
        return L;
      }
      function Mv(e) {
        e.off = ze, e.on = ue, e.wheelEventPixels = Fc, e.Doc = _t, e.splitLines = gn, e.countColumn = pe, e.findColumn = Bt, e.isWordChar = An, e.Pass = Ft, e.signal = $e, e.Line = $r, e.changeEnd = lr, e.scrollbarModel = pu, e.Pos = ee, e.cmpPos = ye, e.modes = Br, e.mimeModes = bn, e.resolveMode = Hr, e.getMode = Ur, e.modeExtensions = nr, e.extendMode = zr, e.copyState = Ln, e.startState = Wr, e.innerMode = gi, e.commands = Wi, e.keyMap = Gn, e.keyName = ef, e.isModifierKey = qu, e.lookupKey = ti, e.normalizeKeyMap = rv, e.StringStream = lt, e.SharedTextMarker = Hi, e.TextMarker = ur, e.LineWidget = Bi, e.e_preventDefault = mt, e.e_stopPropagation = qn, e.e_stop = _n, e.addClass = X, e.contains = K, e.rmClass = z, e.keyNames = fr;
      }
      Av(nt), bv(nt);
      var Rv = "iter insert remove copy getEditor constructor".split(" ");
      for (var zo in _t.prototype)
        _t.prototype.hasOwnProperty(zo) && be(Rv, zo) < 0 && (nt.prototype[zo] = function(e) {
          return function() {
            return e.apply(this.doc, arguments);
          };
        }(_t.prototype[zo]));
      return $t(_t), nt.inputStyles = { textarea: ct, contenteditable: Xe }, nt.defineMode = function(e) {
        !nt.defaults.mode && e != "null" && (nt.defaults.mode = e), Cn.apply(this, arguments);
      }, nt.defineMIME = xr, nt.defineMode("null", function() {
        return { token: function(e) {
          return e.skipToEnd();
        } };
      }), nt.defineMIME("text/plain", "null"), nt.defineExtension = function(e, n) {
        nt.prototype[e] = n;
      }, nt.defineDocExtension = function(e, n) {
        _t.prototype[e] = n;
      }, nt.fromTextArea = Dv, Mv(nt), nt.version = "5.65.16", nt;
    });
  }(Bl)), Bl.exports;
}
var Zh = Md();
(function(c, y) {
  (function(l) {
    l(Md());
  })(function(l) {
    l.defineMode("javascript", function(o, t) {
      var s = o.indentUnit, u = t.statementIndent, d = t.jsonld, f = t.json || d, g = t.trackScope !== !1, C = t.typescript, x = t.wordCharacters || /[\w$\xa1-\uffff]/, D = function() {
        function j(Ct) {
          return { type: Ct, style: "keyword" };
        }
        var G = j("keyword a"), ne = j("keyword b"), fe = j("keyword c"), ee = j("keyword d"), ye = j("operator"), Ve = { type: "atom", style: "atom" };
        return {
          if: j("if"),
          while: G,
          with: G,
          else: ne,
          do: ne,
          try: ne,
          finally: ne,
          return: ee,
          break: ee,
          continue: ee,
          new: j("new"),
          delete: fe,
          void: fe,
          throw: fe,
          debugger: j("debugger"),
          var: j("var"),
          const: j("var"),
          let: j("var"),
          function: j("function"),
          catch: j("catch"),
          for: j("for"),
          switch: j("switch"),
          case: j("case"),
          default: j("default"),
          in: ye,
          typeof: ye,
          instanceof: ye,
          true: Ve,
          false: Ve,
          null: Ve,
          undefined: Ve,
          NaN: Ve,
          Infinity: Ve,
          this: j("this"),
          class: j("class"),
          super: j("atom"),
          yield: fe,
          export: j("export"),
          import: j("import"),
          extends: fe,
          await: fe
        };
      }(), b = /[+\-*&%=<>!?|~^@]/, h = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
      function A(j) {
        for (var G = !1, ne, fe = !1; (ne = j.next()) != null; ) {
          if (!G) {
            if (ne == "/" && !fe)
              return;
            ne == "[" ? fe = !0 : fe && ne == "]" && (fe = !1);
          }
          G = !G && ne == "\\";
        }
      }
      var E, m;
      function S(j, G, ne) {
        return E = j, m = ne, G;
      }
      function w(j, G) {
        var ne = j.next();
        if (ne == '"' || ne == "'")
          return G.tokenize = p(ne), G.tokenize(j, G);
        if (ne == "." && j.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))
          return S("number", "number");
        if (ne == "." && j.match(".."))
          return S("spread", "meta");
        if (/[\[\]{}\(\),;\:\.]/.test(ne))
          return S(ne);
        if (ne == "=" && j.eat(">"))
          return S("=>", "operator");
        if (ne == "0" && j.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))
          return S("number", "number");
        if (/\d/.test(ne))
          return j.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/), S("number", "number");
        if (ne == "/")
          return j.eat("*") ? (G.tokenize = T, T(j, G)) : j.eat("/") ? (j.skipToEnd(), S("comment", "comment")) : un(j, G, 1) ? (A(j), j.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/), S("regexp", "string-2")) : (j.eat("="), S("operator", "operator", j.current()));
        if (ne == "`")
          return G.tokenize = M, M(j, G);
        if (ne == "#" && j.peek() == "!")
          return j.skipToEnd(), S("meta", "meta");
        if (ne == "#" && j.eatWhile(x))
          return S("variable", "property");
        if (ne == "<" && j.match("!--") || ne == "-" && j.match("->") && !/\S/.test(j.string.slice(0, j.start)))
          return j.skipToEnd(), S("comment", "comment");
        if (b.test(ne))
          return (ne != ">" || !G.lexical || G.lexical.type != ">") && (j.eat("=") ? (ne == "!" || ne == "=") && j.eat("=") : /[<>*+\-|&?]/.test(ne) && (j.eat(ne), ne == ">" && j.eat(ne))), ne == "?" && j.eat(".") ? S(".") : S("operator", "operator", j.current());
        if (x.test(ne)) {
          j.eatWhile(x);
          var fe = j.current();
          if (G.lastType != ".") {
            if (D.propertyIsEnumerable(fe)) {
              var ee = D[fe];
              return S(ee.type, ee.style, fe);
            }
            if (fe == "async" && j.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, !1))
              return S("async", "keyword", fe);
          }
          return S("variable", "variable", fe);
        }
      }
      function p(j) {
        return function(G, ne) {
          var fe = !1, ee;
          if (d && G.peek() == "@" && G.match(h))
            return ne.tokenize = w, S("jsonld-keyword", "meta");
          for (; (ee = G.next()) != null && !(ee == j && !fe); )
            fe = !fe && ee == "\\";
          return fe || (ne.tokenize = w), S("string", "string");
        };
      }
      function T(j, G) {
        for (var ne = !1, fe; fe = j.next(); ) {
          if (fe == "/" && ne) {
            G.tokenize = w;
            break;
          }
          ne = fe == "*";
        }
        return S("comment", "comment");
      }
      function M(j, G) {
        for (var ne = !1, fe; (fe = j.next()) != null; ) {
          if (!ne && (fe == "`" || fe == "$" && j.eat("{"))) {
            G.tokenize = w;
            break;
          }
          ne = !ne && fe == "\\";
        }
        return S("quasi", "string-2", j.current());
      }
      var N = "([{}])";
      function U(j, G) {
        G.fatArrowAt && (G.fatArrowAt = null);
        var ne = j.string.indexOf("=>", j.start);
        if (!(ne < 0)) {
          if (C) {
            var fe = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(j.string.slice(j.start, ne));
            fe && (ne = fe.index);
          }
          for (var ee = 0, ye = !1, Ve = ne - 1; Ve >= 0; --Ve) {
            var Ct = j.string.charAt(Ve), Zt = N.indexOf(Ct);
            if (Zt >= 0 && Zt < 3) {
              if (!ee) {
                ++Ve;
                break;
              }
              if (--ee == 0) {
                Ct == "(" && (ye = !0);
                break;
              }
            } else if (Zt >= 3 && Zt < 6)
              ++ee;
            else if (x.test(Ct))
              ye = !0;
            else if (/["'\/`]/.test(Ct))
              for (; ; --Ve) {
                if (Ve == 0)
                  return;
                var jr = j.string.charAt(Ve - 1);
                if (jr == Ct && j.string.charAt(Ve - 2) != "\\") {
                  Ve--;
                  break;
                }
              }
            else if (ye && !ee) {
              ++Ve;
              break;
            }
          }
          ye && !ee && (G.fatArrowAt = Ve);
        }
      }
      var F = {
        atom: !0,
        number: !0,
        variable: !0,
        string: !0,
        regexp: !0,
        this: !0,
        import: !0,
        "jsonld-keyword": !0
      };
      function B(j, G, ne, fe, ee, ye) {
        this.indented = j, this.column = G, this.type = ne, this.prev = ee, this.info = ye, fe != null && (this.align = fe);
      }
      function P(j, G) {
        if (!g)
          return !1;
        for (var ne = j.localVars; ne; ne = ne.next)
          if (ne.name == G)
            return !0;
        for (var fe = j.context; fe; fe = fe.prev)
          for (var ne = fe.vars; ne; ne = ne.next)
            if (ne.name == G)
              return !0;
      }
      function z(j, G, ne, fe, ee) {
        var ye = j.cc;
        for (H.state = j, H.stream = ee, H.marked = null, H.cc = ye, H.style = G, j.lexical.hasOwnProperty("align") || (j.lexical.align = !0); ; ) {
          var Ve = ye.length ? ye.pop() : f ? be : pe;
          if (Ve(ne, fe)) {
            for (; ye.length && ye[ye.length - 1].lex; )
              ye.pop()();
            return H.marked ? H.marked : ne == "variable" && P(j, fe) ? "variable-2" : G;
          }
        }
      }
      var H = { state: null, column: null, marked: null, cc: null };
      function $() {
        for (var j = arguments.length - 1; j >= 0; j--)
          H.cc.push(arguments[j]);
      }
      function I() {
        return $.apply(null, arguments), !0;
      }
      function Y(j, G) {
        for (var ne = G; ne; ne = ne.next)
          if (ne.name == j)
            return !0;
        return !1;
      }
      function Q(j) {
        var G = H.state;
        if (H.marked = "def", !!g) {
          if (G.context) {
            if (G.lexical.info == "var" && G.context && G.context.block) {
              var ne = K(j, G.context);
              if (ne != null) {
                G.context = ne;
                return;
              }
            } else if (!Y(j, G.localVars)) {
              G.localVars = new _(j, G.localVars);
              return;
            }
          }
          t.globalVars && !Y(j, G.globalVars) && (G.globalVars = new _(j, G.globalVars));
        }
      }
      function K(j, G) {
        if (G)
          if (G.block) {
            var ne = K(j, G.prev);
            return ne ? ne == G.prev ? G : new X(ne, G.vars, !0) : null;
          } else
            return Y(j, G.vars) ? G : new X(G.prev, new _(j, G.vars), !1);
        else
          return null;
      }
      function q(j) {
        return j == "public" || j == "private" || j == "protected" || j == "abstract" || j == "readonly";
      }
      function X(j, G, ne) {
        this.prev = j, this.vars = G, this.block = ne;
      }
      function _(j, G) {
        this.name = j, this.next = G;
      }
      var le = new _("this", new _("arguments", null));
      function Se() {
        H.state.context = new X(H.state.context, H.state.localVars, !1), H.state.localVars = le;
      }
      function ve() {
        H.state.context = new X(H.state.context, H.state.localVars, !0), H.state.localVars = null;
      }
      Se.lex = ve.lex = !0;
      function ce() {
        H.state.localVars = H.state.context.vars, H.state.context = H.state.context.prev;
      }
      ce.lex = !0;
      function ae(j, G) {
        var ne = function() {
          var fe = H.state, ee = fe.indented;
          if (fe.lexical.type == "stat")
            ee = fe.lexical.indented;
          else
            for (var ye = fe.lexical; ye && ye.type == ")" && ye.align; ye = ye.prev)
              ee = ye.indented;
          fe.lexical = new B(ee, H.stream.column(), j, null, fe.lexical, G);
        };
        return ne.lex = !0, ne;
      }
      function re() {
        var j = H.state;
        j.lexical.prev && (j.lexical.type == ")" && (j.indented = j.lexical.indented), j.lexical = j.lexical.prev);
      }
      re.lex = !0;
      function se(j) {
        function G(ne) {
          return ne == j ? I() : j == ";" || ne == "}" || ne == ")" || ne == "]" ? $() : I(G);
        }
        return G;
      }
      function pe(j, G) {
        return j == "var" ? I(ae("vardef", G), qn, se(";"), re) : j == "keyword a" ? I(ae("form"), Ft, pe, re) : j == "keyword b" ? I(ae("form"), pe, re) : j == "keyword d" ? H.stream.match(/^\s*$/, !1) ? I() : I(ae("stat"), ot, se(";"), re) : j == "debugger" ? I(se(";")) : j == "{" ? I(ae("}"), ve, We, re, ce) : j == ";" ? I() : j == "if" ? (H.state.lexical.info == "else" && H.state.cc[H.state.cc.length - 1] == re && H.state.cc.pop()(), I(ae("form"), Ft, pe, re, Fr)) : j == "function" ? I(gn) : j == "for" ? I(ae("form"), ve, lo, pe, ce, re) : j == "class" || C && G == "interface" ? (H.marked = "keyword", I(ae("form", j == "class" ? j : G), Br, re)) : j == "variable" ? C && G == "declare" ? (H.marked = "keyword", I(pe)) : C && (G == "module" || G == "enum" || G == "type") && H.stream.match(/^\s*\w/, !1) ? (H.marked = "keyword", G == "enum" ? I(we) : G == "type" ? I(so, se("operator"), oe, se(";")) : I(ae("form"), Jt, se("{"), ae("}"), We, re, re)) : C && G == "namespace" ? (H.marked = "keyword", I(ae("form"), be, pe, re)) : C && G == "abstract" ? (H.marked = "keyword", I(pe)) : I(ae("stat"), In) : j == "switch" ? I(
          ae("form"),
          Ft,
          se("{"),
          ae("}", "switch"),
          ve,
          We,
          re,
          re,
          ce
        ) : j == "case" ? I(be, se(":")) : j == "default" ? I(se(":")) : j == "catch" ? I(ae("form"), Se, Pe, pe, re, ce) : j == "export" ? I(ae("stat"), Hr, re) : j == "import" ? I(ae("stat"), nr, re) : j == "async" ? I(pe) : G == "@" ? I(be, pe) : $(ae("stat"), be, se(";"), re);
      }
      function Pe(j) {
        if (j == "(")
          return I(En, se(")"));
      }
      function be(j, G) {
        return Nt(j, G, !1);
      }
      function je(j, G) {
        return Nt(j, G, !0);
      }
      function Ft(j) {
        return j != "(" ? $() : I(ae(")"), ot, se(")"), re);
      }
      function Nt(j, G, ne) {
        if (H.state.fatArrowAt == H.stream.start) {
          var fe = ne ? Ht : Ue;
          if (j == "(")
            return I(Se, ae(")"), Ke(En, ")"), re, se("=>"), fe, ce);
          if (j == "variable")
            return $(Se, Jt, se("=>"), fe, ce);
        }
        var ee = ne ? Bt : Et;
        return F.hasOwnProperty(j) ? I(ee) : j == "function" ? I(gn, ee) : j == "class" || C && G == "interface" ? (H.marked = "keyword", I(ae("form"), sa, re)) : j == "keyword c" || j == "async" ? I(ne ? je : be) : j == "(" ? I(ae(")"), ot, se(")"), re, ee) : j == "operator" || j == "spread" ? I(ne ? je : be) : j == "[" ? I(ae("]"), lt, re, ee) : j == "{" ? Xt(jt, "}", null, ee) : j == "quasi" ? $(dt, ee) : j == "new" ? I(Ar(ne)) : I();
      }
      function ot(j) {
        return j.match(/[;\}\)\],]/) ? $() : $(be);
      }
      function Et(j, G) {
        return j == "," ? I(ot) : Bt(j, G, !1);
      }
      function Bt(j, G, ne) {
        var fe = ne == !1 ? Et : Bt, ee = ne == !1 ? be : je;
        if (j == "=>")
          return I(Se, ne ? Ht : Ue, ce);
        if (j == "operator")
          return /\+\+|--/.test(G) || C && G == "!" ? I(fe) : C && G == "<" && H.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, !1) ? I(ae(">"), Ke(oe, ">"), re, fe) : G == "?" ? I(be, se(":"), ee) : I(ee);
        if (j == "quasi")
          return $(dt, fe);
        if (j != ";") {
          if (j == "(")
            return Xt(je, ")", "call", fe);
          if (j == ".")
            return I(An, fe);
          if (j == "[")
            return I(ae("]"), ot, se("]"), re, fe);
          if (C && G == "as")
            return H.marked = "keyword", I(oe, fe);
          if (j == "regexp")
            return H.state.lastType = H.marked = "operator", H.stream.backUp(H.stream.pos - H.stream.start - 1), I(ee);
        }
      }
      function dt(j, G) {
        return j != "quasi" ? $() : G.slice(G.length - 2) != "${" ? I(dt) : I(ot, Kt);
      }
      function Kt(j) {
        if (j == "}")
          return H.marked = "string-2", H.state.tokenize = M, I(dt);
      }
      function Ue(j) {
        return U(H.stream, H.state), $(j == "{" ? pe : be);
      }
      function Ht(j) {
        return U(H.stream, H.state), $(j == "{" ? pe : je);
      }
      function Ar(j) {
        return function(G) {
          return G == "." ? I(j ? hn : yn) : G == "variable" && C ? I(Ze, j ? Bt : Et) : $(j ? je : be);
        };
      }
      function yn(j, G) {
        if (G == "target")
          return H.marked = "keyword", I(Et);
      }
      function hn(j, G) {
        if (G == "target")
          return H.marked = "keyword", I(Bt);
      }
      function In(j) {
        return j == ":" ? I(re, pe) : $(Et, se(";"), re);
      }
      function An(j) {
        if (j == "variable")
          return H.marked = "property", I();
      }
      function jt(j, G) {
        if (j == "async")
          return H.marked = "property", I(jt);
        if (j == "variable" || H.style == "keyword") {
          if (H.marked = "property", G == "get" || G == "set")
            return I(xn);
          var ne;
          return C && H.state.fatArrowAt == H.stream.start && (ne = H.stream.match(/^\s*:\s*/, !1)) && (H.state.fatArrowAt = H.stream.pos + ne[0].length), I(bt);
        } else {
          if (j == "number" || j == "string")
            return H.marked = d ? "property" : H.style + " property", I(bt);
          if (j == "jsonld-keyword")
            return I(bt);
          if (C && q(G))
            return H.marked = "keyword", I(jt);
          if (j == "[")
            return I(be, Ce, se("]"), bt);
          if (j == "spread")
            return I(je, bt);
          if (G == "*")
            return H.marked = "keyword", I(jt);
          if (j == ":")
            return $(bt);
        }
      }
      function xn(j) {
        return j != "variable" ? $(bt) : (H.marked = "property", I(gn));
      }
      function bt(j) {
        if (j == ":")
          return I(je);
        if (j == "(")
          return $(gn);
      }
      function Ke(j, G, ne) {
        function fe(ee, ye) {
          if (ne ? ne.indexOf(ee) > -1 : ee == ",") {
            var Ve = H.state.lexical;
            return Ve.info == "call" && (Ve.pos = (Ve.pos || 0) + 1), I(function(Ct, Zt) {
              return Ct == G || Zt == G ? $() : $(j);
            }, fe);
          }
          return ee == G || ye == G ? I() : ne && ne.indexOf(";") > -1 ? $(j) : I(se(G));
        }
        return function(ee, ye) {
          return ee == G || ye == G ? I() : $(j, fe);
        };
      }
      function Xt(j, G, ne) {
        for (var fe = 3; fe < arguments.length; fe++)
          H.cc.push(arguments[fe]);
        return I(ae(G, ne), Ke(j, G), re);
      }
      function We(j) {
        return j == "}" ? I() : $(pe, We);
      }
      function Ce(j, G) {
        if (C) {
          if (j == ":")
            return I(oe);
          if (G == "?")
            return I(Ce);
        }
      }
      function me(j, G) {
        if (C && (j == ":" || G == "in"))
          return I(oe);
      }
      function Oe(j) {
        if (C && j == ":")
          return H.stream.match(/^\s*\w+\s+is\b/, !1) ? I(be, Ee, oe) : I(oe);
      }
      function Ee(j, G) {
        if (G == "is")
          return H.marked = "keyword", I();
      }
      function oe(j, G) {
        if (G == "keyof" || G == "typeof" || G == "infer" || G == "readonly")
          return H.marked = "keyword", I(G == "typeof" ? je : oe);
        if (j == "variable" || G == "void")
          return H.marked = "type", I(at);
        if (G == "|" || G == "&")
          return I(oe);
        if (j == "string" || j == "number" || j == "atom")
          return I(at);
        if (j == "[")
          return I(ae("]"), Ke(oe, "]", ","), re, at);
        if (j == "{")
          return I(ae("}"), ue, re, at);
        if (j == "(")
          return I(Ke(Ge, ")"), De, at);
        if (j == "<")
          return I(Ke(oe, ">"), oe);
        if (j == "quasi")
          return $(ze, at);
      }
      function De(j) {
        if (j == "=>")
          return I(oe);
      }
      function ue(j) {
        return j.match(/[\}\)\]]/) ? I() : j == "," || j == ";" ? I(ue) : $(Ie, ue);
      }
      function Ie(j, G) {
        if (j == "variable" || H.style == "keyword")
          return H.marked = "property", I(Ie);
        if (G == "?" || j == "number" || j == "string")
          return I(Ie);
        if (j == ":")
          return I(oe);
        if (j == "[")
          return I(se("variable"), me, se("]"), Ie);
        if (j == "(")
          return $(tr, Ie);
        if (!j.match(/[;\}\)\],]/))
          return I();
      }
      function ze(j, G) {
        return j != "quasi" ? $() : G.slice(G.length - 2) != "${" ? I(ze) : I(oe, $e);
      }
      function $e(j) {
        if (j == "}")
          return H.marked = "string-2", H.state.tokenize = M, I(ze);
      }
      function Ge(j, G) {
        return j == "variable" && H.stream.match(/^\s*[?:]/, !1) || G == "?" ? I(Ge) : j == ":" ? I(oe) : j == "spread" ? I(Ge) : $(oe);
      }
      function at(j, G) {
        if (G == "<")
          return I(ae(">"), Ke(oe, ">"), re, at);
        if (G == "|" || j == "." || G == "&")
          return I(oe);
        if (j == "[")
          return I(oe, se("]"), at);
        if (G == "extends" || G == "implements")
          return H.marked = "keyword", I(oe);
        if (G == "?")
          return I(oe, se(":"), oe);
      }
      function Ze(j, G) {
        if (G == "<")
          return I(ae(">"), Ke(oe, ">"), re, at);
      }
      function $t() {
        return $(oe, mt);
      }
      function mt(j, G) {
        if (G == "=")
          return I(oe);
      }
      function qn(j, G) {
        return G == "enum" ? (H.marked = "keyword", I(we)) : $(Jt, Ce, Sn, la);
      }
      function Jt(j, G) {
        if (C && q(G))
          return H.marked = "keyword", I(Jt);
        if (j == "variable")
          return Q(G), I();
        if (j == "spread")
          return I(Jt);
        if (j == "[")
          return Xt(pi, "]");
        if (j == "{")
          return Xt(_n, "}");
      }
      function _n(j, G) {
        return j == "variable" && !H.stream.match(/^\s*:/, !1) ? (Q(G), I(Sn)) : (j == "variable" && (H.marked = "property"), j == "spread" ? I(Jt) : j == "}" ? $() : j == "[" ? I(be, se("]"), se(":"), _n) : I(se(":"), Jt, Sn));
      }
      function pi() {
        return $(Jt, Sn);
      }
      function Sn(j, G) {
        if (G == "=")
          return I(je);
      }
      function la(j) {
        if (j == ",")
          return I(qn);
      }
      function Fr(j, G) {
        if (j == "keyword b" && G == "else")
          return I(ae("form", "else"), pe, re);
      }
      function lo(j, G) {
        if (G == "await")
          return I(lo);
        if (j == "(")
          return I(ae(")"), hi, re);
      }
      function hi(j) {
        return j == "var" ? I(qn, er) : j == "variable" ? I(er) : $(er);
      }
      function er(j, G) {
        return j == ")" ? I() : j == ";" ? I(er) : G == "in" || G == "of" ? (H.marked = "keyword", I(be, er)) : $(be, er);
      }
      function gn(j, G) {
        if (G == "*")
          return H.marked = "keyword", I(gn);
        if (j == "variable")
          return Q(G), I(gn);
        if (j == "(")
          return I(Se, ae(")"), Ke(En, ")"), re, Oe, pe, ce);
        if (C && G == "<")
          return I(ae(">"), Ke($t, ">"), re, gn);
      }
      function tr(j, G) {
        if (G == "*")
          return H.marked = "keyword", I(tr);
        if (j == "variable")
          return Q(G), I(tr);
        if (j == "(")
          return I(Se, ae(")"), Ke(En, ")"), re, Oe, ce);
        if (C && G == "<")
          return I(ae(">"), Ke($t, ">"), re, tr);
      }
      function so(j, G) {
        if (j == "keyword" || j == "variable")
          return H.marked = "type", I(so);
        if (G == "<")
          return I(ae(">"), Ke($t, ">"), re);
      }
      function En(j, G) {
        return G == "@" && I(be, En), j == "spread" ? I(En) : C && q(G) ? (H.marked = "keyword", I(En)) : C && j == "this" ? I(Ce, Sn) : $(Jt, Ce, Sn);
      }
      function sa(j, G) {
        return j == "variable" ? Br(j, G) : bn(j, G);
      }
      function Br(j, G) {
        if (j == "variable")
          return Q(G), I(bn);
      }
      function bn(j, G) {
        if (G == "<")
          return I(ae(">"), Ke($t, ">"), re, bn);
        if (G == "extends" || G == "implements" || C && j == ",")
          return G == "implements" && (H.marked = "keyword"), I(C ? oe : be, bn);
        if (j == "{")
          return I(ae("}"), Cn, re);
      }
      function Cn(j, G) {
        if (j == "async" || j == "variable" && (G == "static" || G == "get" || G == "set" || C && q(G)) && H.stream.match(/^\s+#?[\w$\xa1-\uffff]/, !1))
          return H.marked = "keyword", I(Cn);
        if (j == "variable" || H.style == "keyword")
          return H.marked = "property", I(xr, Cn);
        if (j == "number" || j == "string")
          return I(xr, Cn);
        if (j == "[")
          return I(be, Ce, se("]"), xr, Cn);
        if (G == "*")
          return H.marked = "keyword", I(Cn);
        if (C && j == "(")
          return $(tr, Cn);
        if (j == ";" || j == ",")
          return I(Cn);
        if (j == "}")
          return I();
        if (G == "@")
          return I(be, Cn);
      }
      function xr(j, G) {
        if (G == "!" || G == "?")
          return I(xr);
        if (j == ":")
          return I(oe, Sn);
        if (G == "=")
          return I(je);
        var ne = H.state.lexical.prev, fe = ne && ne.info == "interface";
        return $(fe ? tr : gn);
      }
      function Hr(j, G) {
        return G == "*" ? (H.marked = "keyword", I(Wr, se(";"))) : G == "default" ? (H.marked = "keyword", I(be, se(";"))) : j == "{" ? I(Ke(Ur, "}"), Wr, se(";")) : $(pe);
      }
      function Ur(j, G) {
        if (G == "as")
          return H.marked = "keyword", I(se("variable"));
        if (j == "variable")
          return $(je, Ur);
      }
      function nr(j) {
        return j == "string" ? I() : j == "(" ? $(be) : j == "." ? $(Et) : $(zr, Ln, Wr);
      }
      function zr(j, G) {
        return j == "{" ? Xt(zr, "}") : (j == "variable" && Q(G), G == "*" && (H.marked = "keyword"), I(gi));
      }
      function Ln(j) {
        if (j == ",")
          return I(zr, Ln);
      }
      function gi(j, G) {
        if (G == "as")
          return H.marked = "keyword", I(zr);
      }
      function Wr(j, G) {
        if (G == "from")
          return H.marked = "keyword", I(be);
      }
      function lt(j) {
        return j == "]" ? I() : $(Ke(je, "]"));
      }
      function we() {
        return $(ae("form"), Jt, se("{"), ae("}"), Ke(jn, "}"), re, re);
      }
      function jn() {
        return $(Jt, Sn);
      }
      function mi(j, G) {
        return j.lastType == "operator" || j.lastType == "," || b.test(G.charAt(0)) || /[,.]/.test(G.charAt(0));
      }
      function un(j, G, ne) {
        return G.tokenize == w && /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(G.lastType) || G.lastType == "quasi" && /\{\s*$/.test(j.string.slice(0, j.pos - (ne || 0)));
      }
      return {
        startState: function(j) {
          var G = {
            tokenize: w,
            lastType: "sof",
            cc: [],
            lexical: new B((j || 0) - s, 0, "block", !1),
            localVars: t.localVars,
            context: t.localVars && new X(null, null, !1),
            indented: j || 0
          };
          return t.globalVars && typeof t.globalVars == "object" && (G.globalVars = t.globalVars), G;
        },
        token: function(j, G) {
          if (j.sol() && (G.lexical.hasOwnProperty("align") || (G.lexical.align = !1), G.indented = j.indentation(), U(j, G)), G.tokenize != T && j.eatSpace())
            return null;
          var ne = G.tokenize(j, G);
          return E == "comment" ? ne : (G.lastType = E == "operator" && (m == "++" || m == "--") ? "incdec" : E, z(G, ne, E, m, j));
        },
        indent: function(j, G) {
          if (j.tokenize == T || j.tokenize == M)
            return l.Pass;
          if (j.tokenize != w)
            return 0;
          var ne = G && G.charAt(0), fe = j.lexical, ee;
          if (!/^\s*else\b/.test(G))
            for (var ye = j.cc.length - 1; ye >= 0; --ye) {
              var Ve = j.cc[ye];
              if (Ve == re)
                fe = fe.prev;
              else if (Ve != Fr && Ve != ce)
                break;
            }
          for (; (fe.type == "stat" || fe.type == "form") && (ne == "}" || (ee = j.cc[j.cc.length - 1]) && (ee == Et || ee == Bt) && !/^[,\.=+\-*:?[\(]/.test(G)); )
            fe = fe.prev;
          u && fe.type == ")" && fe.prev.type == "stat" && (fe = fe.prev);
          var Ct = fe.type, Zt = ne == Ct;
          return Ct == "vardef" ? fe.indented + (j.lastType == "operator" || j.lastType == "," ? fe.info.length + 1 : 0) : Ct == "form" && ne == "{" ? fe.indented : Ct == "form" ? fe.indented + s : Ct == "stat" ? fe.indented + (mi(j, G) ? u || s : 0) : fe.info == "switch" && !Zt && t.doubleIndentSwitch != !1 ? fe.indented + (/^(?:case|default)\b/.test(G) ? s : 2 * s) : fe.align ? fe.column + (Zt ? 0 : 1) : fe.indented + (Zt ? 0 : s);
        },
        electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
        blockCommentStart: f ? null : "/*",
        blockCommentEnd: f ? null : "*/",
        blockCommentContinue: f ? null : " * ",
        lineComment: f ? null : "//",
        fold: "brace",
        closeBrackets: "()[]{}''\"\"``",
        helperType: f ? "json" : "javascript",
        jsonldMode: d,
        jsonMode: f,
        expressionAllowed: un,
        skipExpression: function(j) {
          z(j, "atom", "atom", "true", new l.StringStream("", 2, null));
        }
      };
    }), l.registerHelper("wordChars", "javascript", /[\w$]/), l.defineMIME("text/javascript", "javascript"), l.defineMIME("text/ecmascript", "javascript"), l.defineMIME("application/javascript", "javascript"), l.defineMIME("application/x-javascript", "javascript"), l.defineMIME("application/ecmascript", "javascript"), l.defineMIME("application/json", { name: "javascript", json: !0 }), l.defineMIME("application/x-json", { name: "javascript", json: !0 }), l.defineMIME("application/manifest+json", { name: "javascript", json: !0 }), l.defineMIME("application/ld+json", { name: "javascript", jsonld: !0 }), l.defineMIME("text/typescript", { name: "javascript", typescript: !0 }), l.defineMIME("application/typescript", { name: "javascript", typescript: !0 });
  });
})();
const qh = Pn({
  name: "Struct",
  props: {
    modelValue: [Object, Array, Function],
    title: String,
    defaultValue: {
      require: !1
    },
    validate: Function
  },
  inject: ["designer"],
  data() {
    return {
      editor: null,
      visible: !1,
      err: !1,
      oldVal: null,
      t: this.designer.setupState.t
    };
  },
  watch: {
    modelValue() {
      this.load();
    },
    visible(c) {
      c ? this.load() : this.err = !1;
    }
  },
  methods: {
    load() {
      const c = Zi(od(this.modelValue ? vr(this.modelValue) : this.defaultValue));
      this.oldVal = c, this.$nextTick(() => {
        this.editor = Zh(this.$refs.editor, {
          lineNumbers: !0,
          mode: "javascript",
          gutters: ["CodeMirror-lint-markers"],
          lint: !0,
          line: !0,
          tabSize: 2,
          lineWrapping: !0,
          value: c || ""
        });
      });
    },
    onOk() {
      const c = this.editor.getValue();
      let y;
      try {
        y = new Function("return " + c)();
      } catch (l) {
        this.err = ` (${l})`;
        return;
      }
      if (this.validate && this.validate(y) === !1) {
        this.err = !0;
        return;
      }
      this.visible = !1, Zi(y) !== this.oldVal && this.$emit("update:modelValue", y);
    }
  }
}), _h = { class: "_fc_struct" }, eg = {
  key: 0,
  ref: "editor"
}, tg = { class: "dialog-footer" }, ng = {
  key: 0,
  class: "_fc_err"
};
function rg(c, y, l, o, t, s) {
  const u = ut("ElButton"), d = ut("ElDialog");
  return tt(), Gt("div", _h, [
    Je(u, {
      onClick: y[0] || (y[0] = (f) => c.visible = !0),
      style: { width: "100%" }
    }, {
      default: qe(() => [
        Kn(on(c.title || c.t("struct.title")), 1)
      ]),
      _: 1
    }),
    Je(d, {
      title: c.title || c.t("struct.title"),
      modelValue: c.visible,
      "onUpdate:modelValue": y[2] || (y[2] = (f) => c.visible = f),
      "close-on-click-modal": !1,
      "append-to-body": ""
    }, {
      footer: qe(() => [
        ft("span", tg, [
          c.err ? (tt(), Gt("span", ng, on(c.t("struct.error")) + on(c.err !== !0 ? c.err : ""), 1)) : vn("", !0),
          Je(u, {
            onClick: y[1] || (y[1] = (f) => c.visible = !1),
            size: "small"
          }, {
            default: qe(() => [
              Kn(on(c.t("struct.cancel")), 1)
            ]),
            _: 1
          }),
          Je(u, {
            type: "primary",
            onClick: c.onOk,
            size: "small"
          }, {
            default: qe(() => [
              Kn(on(c.t("struct.submit")), 1)
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ]),
      default: qe(() => [
        c.visible ? (tt(), Gt("div", eg, null, 512)) : vn("", !0)
      ]),
      _: 1
    }, 8, ["title", "modelValue"])
  ]);
}
const ig = /* @__PURE__ */ mr(qh, [["render", rg]]);
function og(c, y) {
  var l = null;
  return function(...o) {
    l !== null && clearTimeout(l), l = setTimeout(() => c.call(this, ...o), y);
  };
}
const ag = Pn({
  name: "Fetch",
  props: {
    modelValue: [Object, String],
    to: String
  },
  components: {
    DragForm: Lt.$form()
  },
  inject: ["designer"],
  computed: {
    formValue() {
      const c = this.modelValue;
      return c ? xt.String(c) ? {
        action: c
      } : c : {};
    }
  },
  data() {
    const c = this.designer.setupState.t;
    return {
      api: {},
      fetch: {},
      t: c,
      option: {
        form: {
          labelPosition: "right",
          size: "small",
          labelWidth: "90px"
        },
        submitBtn: !1
      },
      rule: [
        {
          type: "input",
          field: "action",
          title: c("fetch.action") + ": ",
          validate: [{ required: !0, message: c("fetch.actionRequired") }]
        },
        {
          type: "select",
          field: "method",
          title: c("fetch.method") + ": ",
          value: "GET",
          options: [
            { label: "GET", value: "GET" },
            { label: "POST", value: "POST" }
          ],
          control: [
            {
              value: "POST",
              rule: [
                {
                  type: "select",
                  field: "dataType",
                  title: c("fetch.dataType") + ": ",
                  value: "FormData",
                  options: [
                    { label: "FormData", value: "FormData" },
                    { label: "JSON", value: "JSON" }
                  ]
                }
              ]
            }
          ]
        },
        {
          type: "Struct",
          field: "data",
          title: c("fetch.data") + ": ",
          value: {},
          props: {
            defaultValue: {}
          }
        },
        {
          type: "Struct",
          field: "headers",
          title: c("fetch.headers") + ": ",
          value: {},
          props: {
            defaultValue: {}
          }
        },
        {
          type: "Struct",
          field: "parse",
          title: c("fetch.parse") + ": ",
          info: c("fetch.parseInfo"),
          value: null,
          props: {
            defaultValue: function(l) {
              return l;
            }
          }
        }
      ]
    };
  },
  methods: {
    parseFn(c) {
      return new Function("return " + c)();
    },
    _input() {
      this.api.submit((c) => {
        c.to = this.to || "options", this.$emit("update:modelValue", c);
      });
    },
    input: og(function() {
      this._input();
    }, 1e3)
  },
  mounted() {
    this._input();
  }
}), lg = { class: "_fc_fetch" };
function sg(c, y, l, o, t, s) {
  const u = ut("DragForm");
  return tt(), Gt("div", lg, [
    Je(u, {
      api: c.api,
      "onUpdate:api": y[0] || (y[0] = (d) => c.api = d),
      modelValue: c.formValue,
      rule: c.rule,
      option: c.option,
      onChange: c.input
    }, null, 8, ["api", "modelValue", "rule", "option", "onChange"])
  ]);
}
const ug = /* @__PURE__ */ mr(ag, [["render", sg]]);
const fg = Pn({
  name: "Validate",
  inject: ["designer"],
  props: {
    modelValue: Array
  },
  components: {
    DragForm: Lt.$form()
  },
  watch: {
    modelValue(c) {
      this.formValue = this.parseValue(c);
    }
  },
  data() {
    const c = this.designer.setupState.t;
    return {
      formValue: {},
      t: c,
      option: {
        form: {
          labelPosition: "top",
          size: "small",
          labelWidth: "90px"
        },
        submitBtn: !1,
        appendValue: !0,
        formData: this.parseValue(this.modelValue)
      },
      rule: [
        {
          type: "select",
          field: "type",
          value: "",
          title: c("validate.type"),
          options: [
            { value: "", label: c("validate.typePlaceholder") },
            { value: "string", label: "String" },
            { value: "array", label: "Array" },
            { value: "number", label: "Number" },
            { value: "integer", label: "Integer" },
            { value: "float", label: "Float" },
            { value: "object", label: "Object" },
            { value: "date", label: "Date" },
            { value: "url", label: "url" },
            { value: "hex", label: "hex" },
            { value: "email", label: "email" }
          ],
          control: [
            {
              handle: (y) => !!y,
              rule: [
                {
                  type: "group",
                  field: "validate",
                  props: {
                    expand: 1,
                    sortBtn: !1,
                    rule: [
                      {
                        type: "select",
                        title: c("validate.trigger"),
                        field: "trigger",
                        value: "change",
                        options: [
                          { label: "change", value: "change" },
                          { label: "submit", value: "submit" },
                          { label: "blur", value: "blur" }
                        ]
                      },
                      {
                        type: "hidden",
                        field: "validator",
                        value: void 0
                      },
                      {
                        type: "select",
                        title: c("validate.mode"),
                        field: "mode",
                        options: [
                          { value: "required", label: c("validate.modes.required") },
                          { value: "pattern", label: c("validate.modes.pattern") },
                          { value: "min", label: c("validate.modes.min") },
                          { value: "max", label: c("validate.modes.max") },
                          { value: "len", label: c("validate.modes.len") }
                        ],
                        value: "required",
                        control: [
                          {
                            value: "required",
                            rule: [
                              {
                                type: "hidden",
                                field: "required",
                                value: !0
                              }
                            ]
                          },
                          {
                            value: "pattern",
                            rule: [
                              {
                                type: "input",
                                field: "pattern",
                                title: c("validate.modes.pattern")
                              }
                            ]
                          },
                          {
                            value: "min",
                            rule: [
                              {
                                type: "inputNumber",
                                field: "min",
                                title: c("validate.modes.min")
                              }
                            ]
                          },
                          {
                            value: "max",
                            rule: [
                              {
                                type: "inputNumber",
                                field: "max",
                                title: c("validate.modes.max")
                              }
                            ]
                          },
                          {
                            value: "len",
                            rule: [
                              {
                                type: "inputNumber",
                                field: "len",
                                title: c("validate.modes.len")
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: "input",
                        title: c("validate.message"),
                        field: "message",
                        value: "",
                        children: [
                          {
                            type: "span",
                            slot: "append",
                            inject: !0,
                            class: "append-msg",
                            on: {
                              click: (y) => {
                                const l = this.designer.setupState.activeRule.title;
                                this.designer.setupState.activeRule && y.api.setValue("message", c(y.api.form.mode !== "required" ? "validate.autoMode" : "validate.autoRequired", { title: l }));
                              }
                            },
                            children: [c("validate.auto")]
                          }
                        ]
                      }
                    ]
                  },
                  value: []
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    onInput: function(c) {
      let y = [];
      const { validate: l, type: o } = vr(c);
      o && (!l || !l.length) || (o && (l.forEach((t) => {
        t.type = o;
      }), y = [...l]), this.$emit("update:modelValue", y));
    },
    parseValue(c) {
      let y = {
        validate: c ? [...c] : [],
        type: c.length ? c[0].type || "string" : void 0
      };
      return y.validate.forEach((l) => {
        l.mode || Object.keys(l).forEach((o) => {
          ["message", "type", "trigger", "mode"].indexOf(o) < 0 && (l.mode = o);
        });
      }), y;
    }
  }
});
function dg(c, y, l, o, t, s) {
  const u = ut("DragForm");
  return tt(), Hn(u, {
    class: "_fc-validate",
    rule: c.rule,
    option: c.option,
    modelValue: c.formValue,
    "onUpdate:modelValue": c.onInput
  }, null, 8, ["rule", "option", "modelValue", "onUpdate:modelValue"]);
}
const cg = /* @__PURE__ */ mr(fg, [["render", dg]]), vg = Pn({
  name: "DragBox",
  props: ["rule", "tag", "formCreateInject"],
  render(c) {
    const y = { ...c.$props.rule.props, ...c.$attrs };
    let l = y.tag + "-drag drag-box";
    Object.keys(c.$slots).length || (l += " " + y.tag + "-holder"), y.class = l, y.modelValue = [...this.$props.formCreateInject.children];
    const o = {};
    return c.$slots.default && c.$slots.default().forEach((s) => {
      s.key && (o[s.key] = s);
    }), ea(As, y, {
      item: ({ element: t }) => {
        var s;
        return (s = t == null ? void 0 : t.__fc__) != null && s.key ? ea("div", {}, o[t.__fc__.key + "fc"]) : void 0;
      }
    });
  }
});
const pg = Pn({
  name: "Required",
  props: {
    modelValue: {}
  },
  inject: ["designer"],
  watch: {
    required() {
      this.update();
    },
    requiredMsg() {
      this.update();
    },
    modelValue(c) {
      const y = xt.String(c);
      this.required = c === void 0 ? !1 : y ? !0 : !!c, this.requiredMsg = y ? c : "";
    }
  },
  data() {
    const c = xt.String(this.modelValue);
    return {
      t: this.designer.setupState.t,
      required: this.modelValue === void 0 ? !1 : c ? !0 : !!this.modelValue,
      requiredMsg: c ? this.modelValue : ""
    };
  },
  methods: {
    update() {
      let c;
      this.required === !1 ? c = !1 : c = this.requiredMsg || !0, this.$emit("update:modelValue", c);
    }
  }
}), hg = { class: "_fc-required" };
function gg(c, y, l, o, t, s) {
  const u = ut("ElSwitch"), d = ut("ElInput");
  return tt(), Gt("div", hg, [
    Je(u, {
      modelValue: c.required,
      "onUpdate:modelValue": y[0] || (y[0] = (f) => c.required = f)
    }, null, 8, ["modelValue"]),
    c.required ? (tt(), Hn(d, {
      key: 0,
      modelValue: c.requiredMsg,
      "onUpdate:modelValue": y[1] || (y[1] = (f) => c.requiredMsg = f),
      placeholder: c.t("validate.requiredPlaceholder")
    }, null, 8, ["modelValue", "placeholder"])) : vn("", !0)
  ]);
}
const mg = /* @__PURE__ */ mr(pg, [["render", gg]]);
const yg = Pn({
  name: "TableOptions",
  inheritAttrs: !1,
  props: {
    modelValue: [Object, Array, String]
  },
  inject: ["designer"],
  data() {
    return {
      column: [{ label: "label", key: "label" }, { label: "value", key: "value" }],
      t: this.designer.setupState.t
    };
  },
  created() {
    Array.isArray(this.modelValue) || this.$emit("input", []);
  },
  methods: {
    onInput(c) {
      c.label !== void 0 && c.value !== void 0 && this.input();
    },
    input() {
      this.$emit("update:modelValue", this.modelValue);
    },
    add() {
      this.modelValue.push(this.column.reduce((c, y) => (c[y.key] = "", c), {}));
    },
    del(c) {
      this.modelValue.splice(c, 1), this.input(this.modelValue);
    }
  }
}), Ag = (c) => (Bv("data-v-0d635ce0"), c = c(), Hv(), c), xg = { class: "_fc_table_opt" }, Sg = ["onClick"], Eg = /* @__PURE__ */ Ag(() => /* @__PURE__ */ ft("i", { class: "fc-icon icon-add" }, null, -1));
function bg(c, y, l, o, t, s) {
  const u = ut("el-input"), d = ut("el-table-column"), f = ut("el-table"), g = ut("el-button");
  return tt(), Gt("div", xg, [
    Je(f, {
      data: c.modelValue,
      border: "",
      size: "small",
      style: { width: "100%" }
    }, {
      default: qe(() => [
        (tt(!0), Gt(_f, null, ed(c.column, (C, x) => (tt(), Hn(d, {
          key: C.label + x,
          label: C.label
        }, {
          default: qe((D) => [
            Je(u, {
              size: "small",
              modelValue: D.row[C.key] || "",
              "onUpdate:modelValue": (b) => (D.row[C.key] = b, c.onInput(D.row))
            }, null, 8, ["modelValue", "onUpdate:modelValue"])
          ]),
          _: 2
        }, 1032, ["label"]))), 128)),
        Je(d, {
          "min-width": "50",
          align: "center",
          fixed: "right",
          label: c.t("tableOptions.handle")
        }, {
          default: qe((C) => [
            ft("i", {
              class: "fc-icon icon-delete",
              onClick: (x) => c.del(C.$index)
            }, null, 8, Sg)
          ]),
          _: 1
        }, 8, ["label"])
      ]),
      _: 1
    }, 8, ["data"]),
    Je(g, {
      link: "",
      type: "primary",
      onClick: c.add
    }, {
      default: qe(() => [
        Eg,
        Kn(" " + on(c.t("tableOptions.add")), 1)
      ]),
      _: 1
    }, 8, ["onClick"])
  ]);
}
const Cg = /* @__PURE__ */ mr(yg, [["render", bg], ["__scopeId", "data-v-0d635ce0"]]);
/*!
 * @form-create/component-wangeditor v3.1.20
 * (c) 2018-2023 xaboy
 * Github https://github.com/xaboy/form-create with wangeditor
 * Released under the MIT License.
 */
function Jf(c, y) {
  var l = Object.keys(c);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(c);
    y && (o = o.filter(function(t) {
      return Object.getOwnPropertyDescriptor(c, t).enumerable;
    })), l.push.apply(l, o);
  }
  return l;
}
function Tg(c) {
  for (var y = 1; y < arguments.length; y++) {
    var l = arguments[y] != null ? arguments[y] : {};
    y % 2 ? Jf(Object(l), !0).forEach(function(o) {
      wg(c, o, l[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(l)) : Jf(Object(l)).forEach(function(o) {
      Object.defineProperty(c, o, Object.getOwnPropertyDescriptor(l, o));
    });
  }
  return c;
}
function Pt(c) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Pt = function(y) {
    return typeof y;
  } : Pt = function(y) {
    return y && typeof Symbol == "function" && y.constructor === Symbol && y !== Symbol.prototype ? "symbol" : typeof y;
  }, Pt(c);
}
function wg(c, y, l) {
  return y in c ? Object.defineProperty(c, y, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : c[y] = l, c;
}
function Dg(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var Rd = { exports: {} };
(function(c, y) {
  (function(o, t) {
    c.exports = t();
  })(window, function() {
    return function(l) {
      var o = {};
      function t(s) {
        if (o[s])
          return o[s].exports;
        var u = o[s] = { i: s, l: !1, exports: {} };
        return l[s].call(u.exports, u, u.exports, t), u.l = !0, u.exports;
      }
      return t.m = l, t.c = o, t.d = function(s, u, d) {
        t.o(s, u) || Object.defineProperty(s, u, { enumerable: !0, get: d });
      }, t.r = function(s) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s, "__esModule", { value: !0 });
      }, t.t = function(s, u) {
        if (u & 1 && (s = t(s)), u & 8 || u & 4 && Pt(s) === "object" && s && s.__esModule)
          return s;
        var d = /* @__PURE__ */ Object.create(null);
        if (t.r(d), Object.defineProperty(d, "default", { enumerable: !0, value: s }), u & 2 && typeof s != "string")
          for (var f in s)
            t.d(d, f, function(g) {
              return s[g];
            }.bind(null, f));
        return d;
      }, t.n = function(s) {
        var u = s && s.__esModule ? function() {
          return s.default;
        } : function() {
          return s;
        };
        return t.d(u, "a", u), u;
      }, t.o = function(s, u) {
        return Object.prototype.hasOwnProperty.call(s, u);
      }, t.p = "", t(t.s = 141);
    }([function(l, o) {
      function t(s) {
        return s && s.__esModule ? s : { default: s };
      }
      l.exports = t;
    }, function(l, o, t) {
      l.exports = t(142);
    }, function(l, o, t) {
      t.r(o), t.d(o, "__extends", function() {
        return u;
      }), t.d(o, "__assign", function() {
        return d;
      }), t.d(o, "__rest", function() {
        return f;
      }), t.d(o, "__decorate", function() {
        return g;
      }), t.d(o, "__param", function() {
        return C;
      }), t.d(o, "__metadata", function() {
        return x;
      }), t.d(o, "__awaiter", function() {
        return D;
      }), t.d(o, "__generator", function() {
        return b;
      }), t.d(o, "__createBinding", function() {
        return h;
      }), t.d(o, "__exportStar", function() {
        return A;
      }), t.d(o, "__values", function() {
        return E;
      }), t.d(o, "__read", function() {
        return m;
      }), t.d(o, "__spread", function() {
        return S;
      }), t.d(o, "__spreadArrays", function() {
        return w;
      }), t.d(o, "__spreadArray", function() {
        return p;
      }), t.d(o, "__await", function() {
        return T;
      }), t.d(o, "__asyncGenerator", function() {
        return M;
      }), t.d(o, "__asyncDelegator", function() {
        return N;
      }), t.d(o, "__asyncValues", function() {
        return U;
      }), t.d(o, "__makeTemplateObject", function() {
        return F;
      }), t.d(o, "__importStar", function() {
        return P;
      }), t.d(o, "__importDefault", function() {
        return z;
      }), t.d(o, "__classPrivateFieldGet", function() {
        return H;
      }), t.d(o, "__classPrivateFieldSet", function() {
        return $;
      });
      /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
      
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
      
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */
      var s = function(Y, Q) {
        return s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(K, q) {
          K.__proto__ = q;
        } || function(K, q) {
          for (var X in q)
            Object.prototype.hasOwnProperty.call(q, X) && (K[X] = q[X]);
        }, s(Y, Q);
      };
      function u(I, Y) {
        if (typeof Y != "function" && Y !== null)
          throw new TypeError("Class extends value " + String(Y) + " is not a constructor or null");
        s(I, Y);
        function Q() {
          this.constructor = I;
        }
        I.prototype = Y === null ? Object.create(Y) : (Q.prototype = Y.prototype, new Q());
      }
      var d = function() {
        return d = Object.assign || function(Q) {
          for (var K, q = 1, X = arguments.length; q < X; q++) {
            K = arguments[q];
            for (var _ in K)
              Object.prototype.hasOwnProperty.call(K, _) && (Q[_] = K[_]);
          }
          return Q;
        }, d.apply(this, arguments);
      };
      function f(I, Y) {
        var Q = {};
        for (var K in I)
          Object.prototype.hasOwnProperty.call(I, K) && Y.indexOf(K) < 0 && (Q[K] = I[K]);
        if (I != null && typeof Object.getOwnPropertySymbols == "function")
          for (var q = 0, K = Object.getOwnPropertySymbols(I); q < K.length; q++)
            Y.indexOf(K[q]) < 0 && Object.prototype.propertyIsEnumerable.call(I, K[q]) && (Q[K[q]] = I[K[q]]);
        return Q;
      }
      function g(I, Y, Q, K) {
        var q = arguments.length, X = q < 3 ? Y : K === null ? K = Object.getOwnPropertyDescriptor(Y, Q) : K, _;
        if ((typeof Reflect > "u" ? "undefined" : Pt(Reflect)) === "object" && typeof Reflect.decorate == "function")
          X = Reflect.decorate(I, Y, Q, K);
        else
          for (var le = I.length - 1; le >= 0; le--)
            (_ = I[le]) && (X = (q < 3 ? _(X) : q > 3 ? _(Y, Q, X) : _(Y, Q)) || X);
        return q > 3 && X && Object.defineProperty(Y, Q, X), X;
      }
      function C(I, Y) {
        return function(Q, K) {
          Y(Q, K, I);
        };
      }
      function x(I, Y) {
        if ((typeof Reflect > "u" ? "undefined" : Pt(Reflect)) === "object" && typeof Reflect.metadata == "function")
          return Reflect.metadata(I, Y);
      }
      function D(I, Y, Q, K) {
        function q(X) {
          return X instanceof Q ? X : new Q(function(_) {
            _(X);
          });
        }
        return new (Q || (Q = Promise))(function(X, _) {
          function le(ce) {
            try {
              ve(K.next(ce));
            } catch (ae) {
              _(ae);
            }
          }
          function Se(ce) {
            try {
              ve(K.throw(ce));
            } catch (ae) {
              _(ae);
            }
          }
          function ve(ce) {
            ce.done ? X(ce.value) : q(ce.value).then(le, Se);
          }
          ve((K = K.apply(I, Y || [])).next());
        });
      }
      function b(I, Y) {
        var Q = { label: 0, sent: function() {
          if (X[0] & 1)
            throw X[1];
          return X[1];
        }, trys: [], ops: [] }, K, q, X, _;
        return _ = { next: le(0), throw: le(1), return: le(2) }, typeof Symbol == "function" && (_[Symbol.iterator] = function() {
          return this;
        }), _;
        function le(ve) {
          return function(ce) {
            return Se([ve, ce]);
          };
        }
        function Se(ve) {
          if (K)
            throw new TypeError("Generator is already executing.");
          for (; Q; )
            try {
              if (K = 1, q && (X = ve[0] & 2 ? q.return : ve[0] ? q.throw || ((X = q.return) && X.call(q), 0) : q.next) && !(X = X.call(q, ve[1])).done)
                return X;
              switch (q = 0, X && (ve = [ve[0] & 2, X.value]), ve[0]) {
                case 0:
                case 1:
                  X = ve;
                  break;
                case 4:
                  return Q.label++, { value: ve[1], done: !1 };
                case 5:
                  Q.label++, q = ve[1], ve = [0];
                  continue;
                case 7:
                  ve = Q.ops.pop(), Q.trys.pop();
                  continue;
                default:
                  if (X = Q.trys, !(X = X.length > 0 && X[X.length - 1]) && (ve[0] === 6 || ve[0] === 2)) {
                    Q = 0;
                    continue;
                  }
                  if (ve[0] === 3 && (!X || ve[1] > X[0] && ve[1] < X[3])) {
                    Q.label = ve[1];
                    break;
                  }
                  if (ve[0] === 6 && Q.label < X[1]) {
                    Q.label = X[1], X = ve;
                    break;
                  }
                  if (X && Q.label < X[2]) {
                    Q.label = X[2], Q.ops.push(ve);
                    break;
                  }
                  X[2] && Q.ops.pop(), Q.trys.pop();
                  continue;
              }
              ve = Y.call(I, Q);
            } catch (ce) {
              ve = [6, ce], q = 0;
            } finally {
              K = X = 0;
            }
          if (ve[0] & 5)
            throw ve[1];
          return { value: ve[0] ? ve[1] : void 0, done: !0 };
        }
      }
      var h = Object.create ? function(I, Y, Q, K) {
        K === void 0 && (K = Q), Object.defineProperty(I, K, { enumerable: !0, get: function() {
          return Y[Q];
        } });
      } : function(I, Y, Q, K) {
        K === void 0 && (K = Q), I[K] = Y[Q];
      };
      function A(I, Y) {
        for (var Q in I)
          Q !== "default" && !Object.prototype.hasOwnProperty.call(Y, Q) && h(Y, I, Q);
      }
      function E(I) {
        var Y = typeof Symbol == "function" && Symbol.iterator, Q = Y && I[Y], K = 0;
        if (Q)
          return Q.call(I);
        if (I && typeof I.length == "number")
          return { next: function() {
            return I && K >= I.length && (I = void 0), { value: I && I[K++], done: !I };
          } };
        throw new TypeError(Y ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }
      function m(I, Y) {
        var Q = typeof Symbol == "function" && I[Symbol.iterator];
        if (!Q)
          return I;
        var K = Q.call(I), q, X = [], _;
        try {
          for (; (Y === void 0 || Y-- > 0) && !(q = K.next()).done; )
            X.push(q.value);
        } catch (le) {
          _ = { error: le };
        } finally {
          try {
            q && !q.done && (Q = K.return) && Q.call(K);
          } finally {
            if (_)
              throw _.error;
          }
        }
        return X;
      }
      function S() {
        for (var I = [], Y = 0; Y < arguments.length; Y++)
          I = I.concat(m(arguments[Y]));
        return I;
      }
      function w() {
        for (var I = 0, Y = 0, Q = arguments.length; Y < Q; Y++)
          I += arguments[Y].length;
        for (var K = Array(I), q = 0, Y = 0; Y < Q; Y++)
          for (var X = arguments[Y], _ = 0, le = X.length; _ < le; _++, q++)
            K[q] = X[_];
        return K;
      }
      function p(I, Y) {
        for (var Q = 0, K = Y.length, q = I.length; Q < K; Q++, q++)
          I[q] = Y[Q];
        return I;
      }
      function T(I) {
        return this instanceof T ? (this.v = I, this) : new T(I);
      }
      function M(I, Y, Q) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var K = Q.apply(I, Y || []), q, X = [];
        return q = {}, _("next"), _("throw"), _("return"), q[Symbol.asyncIterator] = function() {
          return this;
        }, q;
        function _(re) {
          K[re] && (q[re] = function(se) {
            return new Promise(function(pe, Pe) {
              X.push([re, se, pe, Pe]) > 1 || le(re, se);
            });
          });
        }
        function le(re, se) {
          try {
            Se(K[re](se));
          } catch (pe) {
            ae(X[0][3], pe);
          }
        }
        function Se(re) {
          re.value instanceof T ? Promise.resolve(re.value.v).then(ve, ce) : ae(X[0][2], re);
        }
        function ve(re) {
          le("next", re);
        }
        function ce(re) {
          le("throw", re);
        }
        function ae(re, se) {
          re(se), X.shift(), X.length && le(X[0][0], X[0][1]);
        }
      }
      function N(I) {
        var Y, Q;
        return Y = {}, K("next"), K("throw", function(q) {
          throw q;
        }), K("return"), Y[Symbol.iterator] = function() {
          return this;
        }, Y;
        function K(q, X) {
          Y[q] = I[q] ? function(_) {
            return (Q = !Q) ? { value: T(I[q](_)), done: q === "return" } : X ? X(_) : _;
          } : X;
        }
      }
      function U(I) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var Y = I[Symbol.asyncIterator], Q;
        return Y ? Y.call(I) : (I = typeof E == "function" ? E(I) : I[Symbol.iterator](), Q = {}, K("next"), K("throw"), K("return"), Q[Symbol.asyncIterator] = function() {
          return this;
        }, Q);
        function K(X) {
          Q[X] = I[X] && function(_) {
            return new Promise(function(le, Se) {
              _ = I[X](_), q(le, Se, _.done, _.value);
            });
          };
        }
        function q(X, _, le, Se) {
          Promise.resolve(Se).then(function(ve) {
            X({ value: ve, done: le });
          }, _);
        }
      }
      function F(I, Y) {
        return Object.defineProperty ? Object.defineProperty(I, "raw", { value: Y }) : I.raw = Y, I;
      }
      var B = Object.create ? function(I, Y) {
        Object.defineProperty(I, "default", { enumerable: !0, value: Y });
      } : function(I, Y) {
        I.default = Y;
      };
      function P(I) {
        if (I && I.__esModule)
          return I;
        var Y = {};
        if (I != null)
          for (var Q in I)
            Q !== "default" && Object.prototype.hasOwnProperty.call(I, Q) && h(Y, I, Q);
        return B(Y, I), Y;
      }
      function z(I) {
        return I && I.__esModule ? I : { default: I };
      }
      function H(I, Y) {
        if (!Y.has(I))
          throw new TypeError("attempted to get private field on non-instance");
        return Y.get(I);
      }
      function $(I, Y, Q) {
        if (!Y.has(I))
          throw new TypeError("attempted to set private field on non-instance");
        return Y.set(I, Q), Q;
      }
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(89)), f = s(t(4)), g = s(t(26)), C = s(t(17)), x = s(t(120)), D = s(t(27)), b = s(t(91)), h = s(t(70)), A = s(t(44)), E = s(t(57));
      (0, u.default)(o, "__esModule", { value: !0 }), o.DomElement = void 0;
      var m = t(2), S = t(6), w = [];
      function p(B) {
        var P = document.createElement("div");
        P.innerHTML = B;
        var z = P.children;
        return S.toArray(z);
      }
      function T(B) {
        return B ? B instanceof HTMLCollection || B instanceof NodeList : !1;
      }
      function M(B) {
        var P = document.querySelectorAll(B);
        return S.toArray(P);
      }
      function N(B) {
        var P = [], z = [];
        return (0, d.default)(B) ? P = B : P = B.split(";"), (0, f.default)(P).call(P, function(H) {
          var $, I = (0, g.default)($ = H.split(":")).call($, function(Y) {
            return (0, C.default)(Y).call(Y);
          });
          I.length === 2 && z.push(I[0] + ":" + I[1]);
        }), z;
      }
      var U = function() {
        function B(P) {
          if (this.elems = [], this.length = this.elems.length, this.dataSource = new x.default(), !!P) {
            if (P instanceof B)
              return P;
            var z = [], H = P instanceof Node ? P.nodeType : -1;
            if (this.selector = P, H === 1 || H === 9)
              z = [P];
            else if (T(P))
              z = S.toArray(P);
            else if (P instanceof Array)
              z = P;
            else if (typeof P == "string") {
              var $, I = (0, C.default)($ = P.replace(`/
/mg`, "")).call($);
              (0, D.default)(I).call(I, "<") === 0 ? z = p(I) : z = M(I);
            }
            var Y = z.length;
            if (!Y)
              return this;
            for (var Q = 0; Q < Y; Q++)
              this.elems.push(z[Q]);
            this.length = Y;
          }
        }
        return (0, u.default)(B.prototype, "id", {
          get: function() {
            return this.elems[0].id;
          },
          enumerable: !1,
          configurable: !0
        }), B.prototype.forEach = function(P) {
          for (var z = 0; z < this.length; z++) {
            var H = this.elems[z], $ = P.call(H, H, z);
            if ($ === !1)
              break;
          }
          return this;
        }, B.prototype.clone = function(P) {
          var z;
          P === void 0 && (P = !1);
          var H = [];
          return (0, f.default)(z = this.elems).call(z, function($) {
            H.push($.cloneNode(!!P));
          }), F(H);
        }, B.prototype.get = function(P) {
          P === void 0 && (P = 0);
          var z = this.length;
          return P >= z && (P = P % z), F(this.elems[P]);
        }, B.prototype.first = function() {
          return this.get(0);
        }, B.prototype.last = function() {
          var P = this.length;
          return this.get(P - 1);
        }, B.prototype.on = function(P, z, H) {
          var $;
          return P ? (typeof z == "function" && (H = z, z = ""), (0, f.default)($ = this).call($, function(I) {
            if (!z) {
              I.addEventListener(P, H);
              return;
            }
            var Y = function(K) {
              var q = K.target;
              q.matches(z) && H.call(q, K);
            };
            I.addEventListener(P, Y), w.push({ elem: I, selector: z, fn: H, agentFn: Y });
          })) : this;
        }, B.prototype.off = function(P, z, H) {
          var $;
          return P ? (typeof z == "function" && (H = z, z = ""), (0, f.default)($ = this).call($, function(I) {
            if (z) {
              for (var Y = -1, Q = 0; Q < w.length; Q++) {
                var K = w[Q];
                if (K.selector === z && K.fn === H && K.elem === I) {
                  Y = Q;
                  break;
                }
              }
              if (Y !== -1) {
                var q = (0, b.default)(w).call(w, Y, 1)[0].agentFn;
                I.removeEventListener(P, q);
              }
            } else
              I.removeEventListener(P, H);
          })) : this;
        }, B.prototype.attr = function(P, z) {
          var H;
          return z == null ? this.elems[0].getAttribute(P) || "" : (0, f.default)(H = this).call(H, function($) {
            $.setAttribute(P, z);
          });
        }, B.prototype.removeAttr = function(P) {
          var z;
          (0, f.default)(z = this).call(z, function(H) {
            H.removeAttribute(P);
          });
        }, B.prototype.addClass = function(P) {
          var z;
          return P ? (0, f.default)(z = this).call(z, function(H) {
            if (H.className) {
              var $ = H.className.split(/\s/);
              $ = (0, h.default)($).call($, function(I) {
                return !!(0, C.default)(I).call(I);
              }), (0, D.default)($).call($, P) < 0 && $.push(P), H.className = $.join(" ");
            } else
              H.className = P;
          }) : this;
        }, B.prototype.removeClass = function(P) {
          var z;
          return P ? (0, f.default)(z = this).call(z, function(H) {
            if (!!H.className) {
              var $ = H.className.split(/\s/);
              $ = (0, h.default)($).call($, function(I) {
                return I = (0, C.default)(I).call(I), !(!I || I === P);
              }), H.className = $.join(" ");
            }
          }) : this;
        }, B.prototype.hasClass = function(P) {
          if (!P)
            return !1;
          var z = this.elems[0];
          if (!z.className)
            return !1;
          var H = z.className.split(/\s/);
          return (0, A.default)(H).call(H, P);
        }, B.prototype.css = function(P, z) {
          var H, $;
          return z == "" ? $ = "" : $ = P + ":" + z + ";", (0, f.default)(H = this).call(H, function(I) {
            var Y, Q = (0, C.default)(Y = I.getAttribute("style") || "").call(Y);
            if (Q) {
              var K = N(Q);
              K = (0, g.default)(K).call(K, function(q) {
                return (0, D.default)(q).call(q, P) === 0 ? $ : q;
              }), $ != "" && (0, D.default)(K).call(K, $) < 0 && K.push($), $ == "" && (K = N(K)), I.setAttribute("style", K.join("; "));
            } else
              I.setAttribute("style", $);
          });
        }, B.prototype.getBoundingClientRect = function() {
          var P = this.elems[0];
          return P.getBoundingClientRect();
        }, B.prototype.show = function() {
          return this.css("display", "block");
        }, B.prototype.hide = function() {
          return this.css("display", "none");
        }, B.prototype.children = function() {
          var P = this.elems[0];
          return P ? F(P.children) : null;
        }, B.prototype.childNodes = function() {
          var P = this.elems[0];
          return P ? F(P.childNodes) : null;
        }, B.prototype.replaceChildAll = function(P) {
          for (var z = this.getNode(), H = this.elems[0]; H.hasChildNodes(); )
            z.firstChild && H.removeChild(z.firstChild);
          this.append(P);
        }, B.prototype.append = function(P) {
          var z;
          return (0, f.default)(z = this).call(z, function(H) {
            (0, f.default)(P).call(P, function($) {
              H.appendChild($);
            });
          });
        }, B.prototype.remove = function() {
          var P;
          return (0, f.default)(P = this).call(P, function(z) {
            if (z.remove)
              z.remove();
            else {
              var H = z.parentElement;
              H && H.removeChild(z);
            }
          });
        }, B.prototype.isContain = function(P) {
          var z = this.elems[0], H = P.elems[0];
          return z.contains(H);
        }, B.prototype.getNodeName = function() {
          var P = this.elems[0];
          return P.nodeName;
        }, B.prototype.getNode = function(P) {
          P === void 0 && (P = 0);
          var z;
          return z = this.elems[P], z;
        }, B.prototype.find = function(P) {
          var z = this.elems[0];
          return F(z.querySelectorAll(P));
        }, B.prototype.text = function(P) {
          if (P) {
            var H;
            return (0, f.default)(H = this).call(H, function($) {
              $.innerHTML = P;
            });
          } else {
            var z = this.elems[0];
            return z.innerHTML.replace(/<[^>]+>/g, function() {
              return "";
            });
          }
        }, B.prototype.html = function(P) {
          var z = this.elems[0];
          return P ? (z.innerHTML = P, this) : z.innerHTML;
        }, B.prototype.val = function() {
          var P, z = this.elems[0];
          return (0, C.default)(P = z.value).call(P);
        }, B.prototype.focus = function() {
          var P;
          return (0, f.default)(P = this).call(P, function(z) {
            z.focus();
          });
        }, B.prototype.prev = function() {
          var P = this.elems[0];
          return F(P.previousElementSibling);
        }, B.prototype.next = function() {
          var P = this.elems[0];
          return F(P.nextElementSibling);
        }, B.prototype.getNextSibling = function() {
          var P = this.elems[0];
          return F(P.nextSibling);
        }, B.prototype.parent = function() {
          var P = this.elems[0];
          return F(P.parentElement);
        }, B.prototype.parentUntil = function(P, z) {
          var H = z || this.elems[0];
          if (H.nodeName === "BODY")
            return null;
          var $ = H.parentElement;
          return $ === null ? null : $.matches(P) ? F($) : this.parentUntil(P, $);
        }, B.prototype.parentUntilEditor = function(P, z, H) {
          var $ = H || this.elems[0];
          if (F($).equal(z.$textContainerElem) || F($).equal(z.$toolbarElem))
            return null;
          var I = $.parentElement;
          return I === null ? null : I.matches(P) ? F(I) : this.parentUntilEditor(P, z, I);
        }, B.prototype.equal = function(P) {
          return P instanceof B ? this.elems[0] === P.elems[0] : P instanceof HTMLElement ? this.elems[0] === P : !1;
        }, B.prototype.insertBefore = function(P) {
          var z, H = F(P), $ = H.elems[0];
          return $ ? (0, f.default)(z = this).call(z, function(I) {
            var Y = $.parentNode;
            Y == null || Y.insertBefore(I, $);
          }) : this;
        }, B.prototype.insertAfter = function(P) {
          var z, H = F(P), $ = H.elems[0], I = $ && $.nextSibling;
          return $ ? (0, f.default)(z = this).call(z, function(Y) {
            var Q = $.parentNode;
            I ? Q.insertBefore(Y, I) : Q.appendChild(Y);
          }) : this;
        }, B.prototype.data = function(P, z) {
          if (z != null)
            this.dataSource.set(P, z);
          else
            return this.dataSource.get(P);
        }, B.prototype.getNodeTop = function(P) {
          if (this.length < 1)
            return this;
          var z = this.parent();
          return P.$textElem.equal(this) || P.$textElem.equal(z) ? this : (z.prior = this, z.getNodeTop(P));
        }, B.prototype.getOffsetData = function() {
          var P = this.elems[0];
          return { top: P.offsetTop, left: P.offsetLeft, width: P.offsetWidth, height: P.offsetHeight, parent: P.offsetParent };
        }, B.prototype.scrollTop = function(P) {
          var z = this.elems[0];
          z.scrollTo({ top: P });
        }, B;
      }();
      o.DomElement = U;
      function F() {
        for (var B = [], P = 0; P < arguments.length; P++)
          B[P] = arguments[P];
        return new ((0, E.default)(U).apply(U, m.__spreadArrays([void 0], B)))();
      }
      o.default = F;
    }, function(l, o, t) {
      l.exports = t(180);
    }, function(l, o, t) {
      var s = t(8), u = t(71).f, d = t(100), f = t(9), g = t(39), C = t(19), x = t(16), D = function(h) {
        var A = function(m, S, w) {
          if (this instanceof h) {
            switch (arguments.length) {
              case 0:
                return new h();
              case 1:
                return new h(m);
              case 2:
                return new h(m, S);
            }
            return new h(m, S, w);
          }
          return h.apply(this, arguments);
        };
        return A.prototype = h.prototype, A;
      };
      l.exports = function(b, h) {
        var A = b.target, E = b.global, m = b.stat, S = b.proto, w = E ? s : m ? s[A] : (s[A] || {}).prototype, p = E ? f : f[A] || (f[A] = {}), T = p.prototype, M, N, U, F, B, P, z, H, $;
        for (F in h)
          M = d(E ? F : A + (m ? "." : "#") + F, b.forced), N = !M && w && x(w, F), P = p[F], N && (b.noTargetGet ? ($ = u(w, F), z = $ && $.value) : z = w[F]), B = N && z ? z : h[F], !(N && Pt(P) === Pt(B)) && (b.bind && N ? H = g(B, s) : b.wrap && N ? H = D(B) : S && typeof B == "function" ? H = g(Function.call, B) : H = B, (b.sham || B && B.sham || P && P.sham) && C(H, "sham", !0), p[F] = H, S && (U = A + "Prototype", x(f, U) || C(f, U, {}), f[U][F] = B, b.real && T && !T[F] && C(T, F, B)));
      };
    }, function(l, o, t) {
      var s = t(0), u = s(t(92)), d = s(t(1)), f = s(t(256)), g = s(t(45)), C = s(t(46)), x = s(t(89)), D = s(t(26));
      (0, d.default)(o, "__esModule", { value: !0 }), o.hexToRgb = o.getRandomCode = o.toArray = o.deepClone = o.isFunction = o.debounce = o.throttle = o.arrForEach = o.forEach = o.replaceSpecialSymbol = o.replaceHtmlSymbol = o.getRandom = o.UA = void 0;
      var b = t(2), h = function() {
        function P() {
          this._ua = navigator.userAgent;
          var z = this._ua.match(/(Edge?)\/(\d+)/);
          this.isOldEdge = !!(z && z[1] == "Edge" && (0, f.default)(z[2]) < 19), this.isFirefox = !!(/Firefox\/\d+/.test(this._ua) && !/Seamonkey\/\d+/.test(this._ua));
        }
        return P.prototype.isIE = function() {
          return "ActiveXObject" in window;
        }, P.prototype.isWebkit = function() {
          return /webkit/i.test(this._ua);
        }, P;
      }();
      o.UA = new h();
      function A(P) {
        var z;
        return P === void 0 && (P = ""), P + (0, g.default)(z = Math.random().toString()).call(z, 2);
      }
      o.getRandom = A;
      function E(P) {
        return P.replace(/</gm, "&lt;").replace(/>/gm, "&gt;").replace(/"/gm, "&quot;").replace(/(\r\n|\r|\n)/g, "<br/>");
      }
      o.replaceHtmlSymbol = E;
      function m(P) {
        return P.replace(/&lt;/gm, "<").replace(/&gt;/gm, ">").replace(/&quot;/gm, '"');
      }
      o.replaceSpecialSymbol = m;
      function S(P, z) {
        for (var H in P)
          if (Object.prototype.hasOwnProperty.call(P, H)) {
            var $ = z(H, P[H]);
            if ($ === !1)
              break;
          }
      }
      o.forEach = S;
      function w(P, z) {
        var H, $, I, Y = P.length || 0;
        for (H = 0; H < Y && ($ = P[H], I = z.call(P, $, H), I !== !1); H++)
          ;
      }
      o.arrForEach = w;
      function p(P, z) {
        z === void 0 && (z = 200);
        var H = !1;
        return function() {
          for (var $ = this, I = [], Y = 0; Y < arguments.length; Y++)
            I[Y] = arguments[Y];
          H || (H = !0, (0, C.default)(function() {
            H = !1, P.call.apply(P, b.__spreadArrays([$], I));
          }, z));
        };
      }
      o.throttle = p;
      function T(P, z) {
        z === void 0 && (z = 200);
        var H = 0;
        return function() {
          for (var $ = this, I = [], Y = 0; Y < arguments.length; Y++)
            I[Y] = arguments[Y];
          H && window.clearTimeout(H), H = (0, C.default)(function() {
            H = 0, P.call.apply(P, b.__spreadArrays([$], I));
          }, z);
        };
      }
      o.debounce = T;
      function M(P) {
        return typeof P == "function";
      }
      o.isFunction = M;
      function N(P) {
        if ((0, u.default)(P) !== "object" || typeof P == "function" || P === null)
          return P;
        var z;
        (0, x.default)(P) && (z = []), (0, x.default)(P) || (z = {});
        for (var H in P)
          Object.prototype.hasOwnProperty.call(P, H) && (z[H] = N(P[H]));
        return z;
      }
      o.deepClone = N;
      function U(P) {
        return (0, g.default)(Array.prototype).call(P);
      }
      o.toArray = U;
      function F() {
        var P;
        return (0, g.default)(P = Math.random().toString(36)).call(P, -5);
      }
      o.getRandomCode = F;
      function B(P) {
        var z = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(P);
        if (z == null)
          return null;
        var H = (0, D.default)(z).call(z, function(Q) {
          return (0, f.default)(Q, 16);
        }), $ = H[1], I = H[2], Y = H[3];
        return "rgb(" + $ + ", " + I + ", " + Y + ")";
      }
      o.hexToRgb = B;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.EMPTY_P_REGEX = o.EMPTY_P_LAST_REGEX = o.EMPTY_P = o.urlRegex = o.EMPTY_FN = void 0;
      function d() {
      }
      o.EMPTY_FN = d, o.urlRegex = /^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&amp;:/~+#]*[\w\-@?^=%&amp;/~+#])?/, o.EMPTY_P = '<p data-we-empty-p=""><br></p>', o.EMPTY_P_LAST_REGEX = /<p data-we-empty-p=""><br\/?><\/p>$/gim, o.EMPTY_P_REGEX = /<p data-we-empty-p="">/gim;
    }, function(l, o, t) {
      (function(s) {
        var u = function(f) {
          return f && f.Math == Math && f;
        };
        l.exports = u((typeof globalThis > "u" ? "undefined" : Pt(globalThis)) == "object" && globalThis) || u((typeof window > "u" ? "undefined" : Pt(window)) == "object" && window) || u((typeof self > "u" ? "undefined" : Pt(self)) == "object" && self) || u(Pt(s) == "object" && s) || Function("return this")();
      }).call(this, t(145));
    }, function(l, o) {
      l.exports = {};
    }, function(l, o, t) {
      var s = t(8), u = t(74), d = t(16), f = t(64), g = t(76), C = t(105), x = u("wks"), D = s.Symbol, b = C ? D : D && D.withoutSetter || f;
      l.exports = function(h) {
        return d(x, h) || (g && d(D, h) ? x[h] = D[h] : x[h] = b("Symbol." + h)), x[h];
      };
    }, function(l, o) {
      l.exports = function(t) {
        try {
          return !!t();
        } catch {
          return !0;
        }
      };
    }, function(l, o, t) {
      var s = t(9), u = t(16), d = t(93), f = t(18).f;
      l.exports = function(g) {
        var C = s.Symbol || (s.Symbol = {});
        u(C, g) || f(C, g, { value: d.f(g) });
      };
    }, function(l, o) {
      l.exports = function(t) {
        return Pt(t) === "object" ? t !== null : typeof t == "function";
      };
    }, function(l, o, t) {
      var s = t(11);
      l.exports = !s(function() {
        return Object.defineProperty({}, 1, { get: function() {
          return 7;
        } })[1] != 7;
      });
    }, function(l, o, t) {
      var s = t(9);
      l.exports = function(u) {
        return s[u + "Prototype"];
      };
    }, function(l, o) {
      var t = {}.hasOwnProperty;
      l.exports = function(s, u) {
        return t.call(s, u);
      };
    }, function(l, o, t) {
      l.exports = t(192);
    }, function(l, o, t) {
      var s = t(14), u = t(99), d = t(25), f = t(60), g = Object.defineProperty;
      o.f = s ? g : function(x, D, b) {
        if (d(x), D = f(D, !0), d(b), u)
          try {
            return g(x, D, b);
          } catch {
          }
        if ("get" in b || "set" in b)
          throw TypeError("Accessors not supported");
        return "value" in b && (x[D] = b.value), x;
      };
    }, function(l, o, t) {
      var s = t(14), u = t(18), d = t(48);
      l.exports = s ? function(f, g, C) {
        return u.f(f, g, d(1, C));
      } : function(f, g, C) {
        return f[g] = C, f;
      };
    }, function(l, o, t) {
      var s = function() {
        var w;
        return function() {
          return typeof w > "u" && (w = Boolean(window && document && document.all && !window.atob)), w;
        };
      }(), u = function() {
        var w = {};
        return function(T) {
          if (typeof w[T] > "u") {
            var M = document.querySelector(T);
            if (window.HTMLIFrameElement && M instanceof window.HTMLIFrameElement)
              try {
                M = M.contentDocument.head;
              } catch {
                M = null;
              }
            w[T] = M;
          }
          return w[T];
        };
      }(), d = [];
      function f(S) {
        for (var w = -1, p = 0; p < d.length; p++)
          if (d[p].identifier === S) {
            w = p;
            break;
          }
        return w;
      }
      function g(S, w) {
        for (var p = {}, T = [], M = 0; M < S.length; M++) {
          var N = S[M], U = w.base ? N[0] + w.base : N[0], F = p[U] || 0, B = "".concat(U, " ").concat(F);
          p[U] = F + 1;
          var P = f(B), z = { css: N[1], media: N[2], sourceMap: N[3] };
          P !== -1 ? (d[P].references++, d[P].updater(z)) : d.push({ identifier: B, updater: m(z, w), references: 1 }), T.push(B);
        }
        return T;
      }
      function C(S) {
        var w = document.createElement("style"), p = S.attributes || {};
        if (typeof p.nonce > "u") {
          var T = t.nc;
          T && (p.nonce = T);
        }
        if (Object.keys(p).forEach(function(N) {
          w.setAttribute(N, p[N]);
        }), typeof S.insert == "function")
          S.insert(w);
        else {
          var M = u(S.insert || "head");
          if (!M)
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          M.appendChild(w);
        }
        return w;
      }
      function x(S) {
        if (S.parentNode === null)
          return !1;
        S.parentNode.removeChild(S);
      }
      var D = function() {
        var w = [];
        return function(T, M) {
          return w[T] = M, w.filter(Boolean).join(`
`);
        };
      }();
      function b(S, w, p, T) {
        var M = p ? "" : T.media ? "@media ".concat(T.media, " {").concat(T.css, "}") : T.css;
        if (S.styleSheet)
          S.styleSheet.cssText = D(w, M);
        else {
          var N = document.createTextNode(M), U = S.childNodes;
          U[w] && S.removeChild(U[w]), U.length ? S.insertBefore(N, U[w]) : S.appendChild(N);
        }
      }
      function h(S, w, p) {
        var T = p.css, M = p.media, N = p.sourceMap;
        if (M ? S.setAttribute("media", M) : S.removeAttribute("media"), N && typeof btoa < "u" && (T += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(N)))), " */")), S.styleSheet)
          S.styleSheet.cssText = T;
        else {
          for (; S.firstChild; )
            S.removeChild(S.firstChild);
          S.appendChild(document.createTextNode(T));
        }
      }
      var A = null, E = 0;
      function m(S, w) {
        var p, T, M;
        if (w.singleton) {
          var N = E++;
          p = A || (A = C(w)), T = b.bind(null, p, N, !1), M = b.bind(null, p, N, !0);
        } else
          p = C(w), T = h.bind(null, p, w), M = function() {
            x(p);
          };
        return T(S), function(F) {
          if (F) {
            if (F.css === S.css && F.media === S.media && F.sourceMap === S.sourceMap)
              return;
            T(S = F);
          } else
            M();
        };
      }
      l.exports = function(S, w) {
        w = w || {}, !w.singleton && typeof w.singleton != "boolean" && (w.singleton = s()), S = S || [];
        var p = g(S, w);
        return function(M) {
          if (M = M || [], Object.prototype.toString.call(M) === "[object Array]") {
            for (var N = 0; N < p.length; N++) {
              var U = p[N], F = f(U);
              d[F].references--;
            }
            for (var B = g(M, w), P = 0; P < p.length; P++) {
              var z = p[P], H = f(z);
              d[H].references === 0 && (d[H].updater(), d.splice(H, 1));
            }
            p = B;
          }
        };
      };
    }, function(l, o, t) {
      l.exports = function(d) {
        var f = [];
        return f.toString = function() {
          return this.map(function(C) {
            var x = s(C, d);
            return C[2] ? "@media ".concat(C[2], " {").concat(x, "}") : x;
          }).join("");
        }, f.i = function(g, C, x) {
          typeof g == "string" && (g = [[null, g, ""]]);
          var D = {};
          if (x)
            for (var b = 0; b < this.length; b++) {
              var h = this[b][0];
              h != null && (D[h] = !0);
            }
          for (var A = 0; A < g.length; A++) {
            var E = [].concat(g[A]);
            x && D[E[0]] || (C && (E[2] ? E[2] = "".concat(C, " and ").concat(E[2]) : E[2] = C), f.push(E));
          }
        }, f;
      };
      function s(d, f) {
        var g = d[1] || "", C = d[3];
        if (!C)
          return g;
        if (f && typeof btoa == "function") {
          var x = u(C), D = C.sources.map(function(b) {
            return "/*# sourceURL=".concat(C.sourceRoot || "").concat(b, " */");
          });
          return [g].concat(D).concat([x]).join(`
`);
        }
        return [g].join(`
`);
      }
      function u(d) {
        var f = btoa(unescape(encodeURIComponent(JSON.stringify(d)))), g = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(f);
        return "/*# ".concat(g, " */");
      }
    }, function(l, o, t) {
      var s = t(14), u = t(11), d = t(16), f = Object.defineProperty, g = {}, C = function(D) {
        throw D;
      };
      l.exports = function(x, D) {
        if (d(g, x))
          return g[x];
        D || (D = {});
        var b = [][x], h = d(D, "ACCESSORS") ? D.ACCESSORS : !1, A = d(D, 0) ? D[0] : C, E = d(D, 1) ? D[1] : void 0;
        return g[x] = !!b && !u(function() {
          if (h && !s)
            return !0;
          var m = { length: -1 };
          h ? f(m, 1, { enumerable: !0, get: C }) : m[1] = 1, b.call(m, A, E);
        });
      };
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(95)), g = function(C) {
        d.__extends(x, C);
        function x(D, b) {
          return C.call(this, D, b) || this;
        }
        return x;
      }(f.default);
      o.default = g;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4)), f = s(t(46));
      (0, u.default)(o, "__esModule", { value: !0 });
      var g = t(2), C = g.__importDefault(t(3)), x = g.__importDefault(t(95)), D = g.__importDefault(t(133)), b = function(h) {
        g.__extends(A, h);
        function A(E, m, S) {
          var w = h.call(this, E, m) || this;
          S.title = m.i18next.t("menus.dropListMenu." + S.title);
          var p = m.config.lang === "zh-CN" ? "" : "w-e-drop-list-tl";
          if (p !== "" && S.type === "list") {
            var T;
            (0, d.default)(T = S.list).call(T, function(N) {
              var U = N.$elem, F = C.default(U.children());
              if (F.length > 0) {
                var B = F == null ? void 0 : F.getNodeName();
                B && B === "I" && U.addClass(p);
              }
            });
          }
          var M = new D.default(w, S);
          return w.dropList = M, E.on("click", function() {
            var N;
            m.selection.getRange() != null && (E.css("z-index", m.zIndex.get("menu")), (0, d.default)(N = m.txt.eventHooks.dropListMenuHoverEvents).call(N, function(U) {
              return U();
            }), M.show());
          }).on("mouseleave", function() {
            E.css("z-index", "auto"), M.hideTimeoutId = (0, f.default)(function() {
              M.hide();
            });
          }), w;
        }
        return A;
      }(x.default);
      o.default = b;
    }, function(l, o, t) {
      var s = t(13);
      l.exports = function(u) {
        if (!s(u))
          throw TypeError(String(u) + " is not an object");
        return u;
      };
    }, function(l, o, t) {
      l.exports = t(188);
    }, function(l, o, t) {
      l.exports = t(201);
    }, function(l, o, t) {
      var s = t(72), u = t(49);
      l.exports = function(d) {
        return s(u(d));
      };
    }, function(l, o, t) {
      var s = t(49);
      l.exports = function(u) {
        return Object(s(u));
      };
    }, function(l, o, t) {
      var s = t(39), u = t(72), d = t(29), f = t(34), g = t(88), C = [].push, x = function(b) {
        var h = b == 1, A = b == 2, E = b == 3, m = b == 4, S = b == 6, w = b == 5 || S;
        return function(p, T, M, N) {
          for (var U = d(p), F = u(U), B = s(T, M, 3), P = f(F.length), z = 0, H = N || g, $ = h ? H(p, P) : A ? H(p, 0) : void 0, I, Y; P > z; z++)
            if ((w || z in F) && (I = F[z], Y = B(I, z, U), b)) {
              if (h)
                $[z] = Y;
              else if (Y)
                switch (b) {
                  case 3:
                    return !0;
                  case 5:
                    return I;
                  case 6:
                    return z;
                  case 2:
                    C.call($, I);
                }
              else if (m)
                return !1;
            }
          return S ? -1 : E || m ? m : $;
        };
      };
      l.exports = {
        forEach: x(0),
        map: x(1),
        filter: x(2),
        some: x(3),
        every: x(4),
        find: x(5),
        findIndex: x(6)
      };
    }, function(l, o, t) {
      l.exports = t(283);
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4)), f = s(t(31)), g = s(t(131));
      (0, u.default)(o, "__esModule", { value: !0 });
      var C = t(2), x = C.__importDefault(t(3)), D = t(7), b = function() {
        function h(A, E) {
          this.menu = A, this.conf = E, this.$container = x.default('<div class="w-e-panel-container"></div>');
          var m = A.editor;
          m.txt.eventHooks.clickEvents.push(h.hideCurAllPanels), m.txt.eventHooks.toolbarClickEvents.push(h.hideCurAllPanels), m.txt.eventHooks.dropListMenuHoverEvents.push(h.hideCurAllPanels);
        }
        return h.prototype.create = function() {
          var A = this, E = this.menu;
          if (!h.createdMenus.has(E)) {
            var m = this.conf, S = this.$container, w = m.width || 300, p = E.editor.$toolbarElem.getBoundingClientRect(), T = E.$elem.getBoundingClientRect(), M = p.height + p.top - T.top, N = (p.width - w) / 2 + p.left - T.left, U = 300;
            Math.abs(N) > U && (T.left < document.documentElement.clientWidth / 2 ? N = -T.width / 2 : N = -w + T.width / 2), S.css("width", w + "px").css("margin-top", M + "px").css("margin-left", N + "px").css("z-index", E.editor.zIndex.get("panel"));
            var F = x.default('<i class="w-e-icon-close w-e-panel-close"></i>');
            S.append(F), F.on("click", function() {
              A.remove();
            });
            var B = x.default('<ul class="w-e-panel-tab-title"></ul>'), P = x.default('<div class="w-e-panel-tab-content"></div>');
            S.append(B).append(P);
            var z = m.height;
            z && P.css("height", z + "px").css("overflow-y", "auto");
            var H = m.tabs || [], $ = [], I = [];
            (0, d.default)(H).call(H, function(Q, K) {
              if (!!Q) {
                var q = Q.title || "", X = Q.tpl || "", _ = x.default('<li class="w-e-item">' + q + "</li>");
                B.append(_);
                var le = x.default(X);
                P.append(le), $.push(_), I.push(le), K === 0 ? (_.data("active", !0), _.addClass("w-e-active")) : le.hide(), _.on("click", function() {
                  _.data("active") || ((0, d.default)($).call($, function(Se) {
                    Se.data("active", !1), Se.removeClass("w-e-active");
                  }), (0, d.default)(I).call(I, function(Se) {
                    Se.hide();
                  }), _.data("active", !0), _.addClass("w-e-active"), le.show());
                });
              }
            }), S.on("click", function(Q) {
              Q.stopPropagation();
            }), E.$elem.append(S), (0, d.default)(H).call(H, function(Q, K) {
              if (!!Q) {
                var q = Q.events || [];
                (0, d.default)(q).call(q, function(X) {
                  var _, le = X.selector, Se = X.type, ve = X.fn || D.EMPTY_FN, ce = I[K], ae = (_ = X.bindEnter) !== null && _ !== void 0 ? _ : !1, re = function(pe) {
                    return C.__awaiter(A, void 0, void 0, function() {
                      var Pe;
                      return C.__generator(this, function(be) {
                        switch (be.label) {
                          case 0:
                            return pe.stopPropagation(), [
                              4,
                              ve(pe)
                            ];
                          case 1:
                            return Pe = be.sent(), Pe && this.remove(), [2];
                        }
                      });
                    });
                  };
                  (0, f.default)(ce).call(ce, le).on(Se, re), ae && Se === "click" && ce.on("keyup", function(se) {
                    se.keyCode == 13 && re(se);
                  });
                });
              }
            });
            var Y = (0, f.default)(S).call(S, "input[type=text],textarea");
            Y.length && Y.get(0).focus(), h.hideCurAllPanels(), E.setPanel(this), h.createdMenus.add(E);
          }
        }, h.prototype.remove = function() {
          var A = this.menu, E = this.$container;
          E && E.remove(), h.createdMenus.delete(A);
        }, h.hideCurAllPanels = function() {
          var A;
          h.createdMenus.size !== 0 && (0, d.default)(A = h.createdMenus).call(A, function(E) {
            var m = E.panel;
            m && m.remove();
          });
        }, h.createdMenus = new g.default(), h;
      }();
      o.default = b;
    }, function(l, o) {
      var t = {}.toString;
      l.exports = function(s) {
        return t.call(s).slice(8, -1);
      };
    }, function(l, o, t) {
      var s = t(62), u = Math.min;
      l.exports = function(d) {
        return d > 0 ? u(s(d), 9007199254740991) : 0;
      };
    }, function(l, o, t) {
      var s = t(9), u = t(8), d = function(g) {
        return typeof g == "function" ? g : void 0;
      };
      l.exports = function(f, g) {
        return arguments.length < 2 ? d(s[f]) || d(u[f]) : s[f] && s[f][g] || u[f] && u[f][g];
      };
    }, function(l, o, t) {
      var s = t(81), u = t(18).f, d = t(19), f = t(16), g = t(170), C = t(10), x = C("toStringTag");
      l.exports = function(D, b, h, A) {
        if (D) {
          var E = h ? D : D.prototype;
          f(E, x) || u(E, x, { configurable: !0, value: b }), A && !s && d(E, "toString", g);
        }
      };
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(95)), g = function(C) {
        d.__extends(x, C);
        function x(D, b) {
          return C.call(this, D, b) || this;
        }
        return x.prototype.setPanel = function(D) {
          this.panel = D;
        }, x;
      }(f.default);
      o.default = g;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4)), f = s(t(57));
      (0, u.default)(o, "__esModule", { value: !0 });
      var g = t(2), C = g.__importDefault(t(3)), x = function() {
        function D(b, h, A) {
          this.editor = b, this.$targetElem = h, this.conf = A, this._show = !1, this._isInsertTextContainer = !1;
          var E = C.default("<div></div>");
          E.addClass("w-e-tooltip"), this.$container = E;
        }
        return D.prototype.getPositionData = function() {
          var b = this.$container, h = 0, A = 0, E = 20, m = document.documentElement.scrollTop, S = this.$targetElem.getBoundingClientRect(), w = this.editor.$textElem.getBoundingClientRect(), p = this.$targetElem.getOffsetData(), T = C.default(p.parent), M = this.editor.$textElem.elems[0].scrollTop;
          if (this._isInsertTextContainer = T.equal(this.editor.$textContainerElem), this._isInsertTextContainer) {
            var N = T.getBoundingClientRect().height, U = p.top, F = p.left, B = p.height, P = U - M;
            P > E + 5 ? (h = P - E - 15, b.addClass("w-e-tooltip-up")) : P + B + E < N ? (h = P + B + 10, b.addClass("w-e-tooltip-down")) : (h = (P > 0 ? P : 0) + E + 10, b.addClass("w-e-tooltip-down")), F < 0 ? A = 0 : A = F;
          } else
            S.top < E || S.top - w.top < E ? (h = S.bottom + m + 5, b.addClass("w-e-tooltip-down")) : (h = S.top + m - E - 15, b.addClass("w-e-tooltip-up")), S.left < 0 ? A = 0 : A = S.left;
          return { top: h, left: A };
        }, D.prototype.appendMenus = function() {
          var b = this, h = this.conf, A = this.editor, E = this.$targetElem, m = this.$container;
          (0, d.default)(h).call(h, function(S, w) {
            var p = S.$elem, T = C.default("<div></div>");
            T.addClass("w-e-tooltip-item-wrapper "), T.append(p), m.append(T), p.on("click", function(M) {
              M.preventDefault();
              var N = S.onClick(A, E);
              N && b.remove();
            });
          });
        }, D.prototype.create = function() {
          var b, h, A = this.editor, E = this.$container;
          this.appendMenus();
          var m = this.getPositionData(), S = m.top, w = m.left;
          E.css("top", S + "px"), E.css("left", w + "px"), E.css("z-index", A.zIndex.get("tooltip")), this._isInsertTextContainer ? this.editor.$textContainerElem.append(E) : C.default("body").append(E), this._show = !0, A.beforeDestroy((0, f.default)(b = this.remove).call(b, this)), A.txt.eventHooks.onBlurEvents.push((0, f.default)(h = this.remove).call(h, this));
        }, D.prototype.remove = function() {
          this.$container.remove(), this._show = !1;
        }, (0, u.default)(D.prototype, "isShow", {
          get: function() {
            return this._show;
          },
          enumerable: !1,
          configurable: !0
        }), D;
      }();
      o.default = x;
    }, function(l, o, t) {
      var s = t(40);
      l.exports = function(u, d, f) {
        if (s(u), d === void 0)
          return u;
        switch (f) {
          case 0:
            return function() {
              return u.call(d);
            };
          case 1:
            return function(g) {
              return u.call(d, g);
            };
          case 2:
            return function(g, C) {
              return u.call(d, g, C);
            };
          case 3:
            return function(g, C, x) {
              return u.call(d, g, C, x);
            };
        }
        return function() {
          return u.apply(d, arguments);
        };
      };
    }, function(l, o) {
      l.exports = function(t) {
        if (typeof t != "function")
          throw TypeError(String(t) + " is not a function");
        return t;
      };
    }, function(l, o, t) {
      var s = t(165), u = t(8), d = t(13), f = t(19), g = t(16), C = t(63), x = t(51), D = u.WeakMap, b, h, A, E = function(U) {
        return A(U) ? h(U) : b(U, {});
      }, m = function(U) {
        return function(F) {
          var B;
          if (!d(F) || (B = h(F)).type !== U)
            throw TypeError("Incompatible receiver, " + U + " required");
          return B;
        };
      };
      if (s) {
        var S = new D(), w = S.get, p = S.has, T = S.set;
        b = function(U, F) {
          return T.call(S, U, F), F;
        }, h = function(U) {
          return w.call(S, U) || {};
        }, A = function(U) {
          return p.call(S, U);
        };
      } else {
        var M = C("state");
        x[M] = !0, b = function(U, F) {
          return f(U, M, F), F;
        }, h = function(U) {
          return g(U, M) ? U[M] : {};
        }, A = function(U) {
          return g(U, M);
        };
      }
      l.exports = { set: b, get: h, has: A, enforce: E, getterFor: m };
    }, function(l, o) {
      l.exports = !0;
    }, function(l, o) {
      l.exports = {};
    }, function(l, o, t) {
      l.exports = t(213);
    }, function(l, o, t) {
      l.exports = t(261);
    }, function(l, o, t) {
      l.exports = t(265);
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 }), o.createElementFragment = o.createDocumentFragment = o.createElement = o.insertBefore = o.getEndPoint = o.getStartPoint = o.updateRange = o.filterSelectionNodes = void 0;
      var f = t(2), g = t(137), C = f.__importDefault(t(3));
      function x(w) {
        var p = [];
        return (0, d.default)(w).call(w, function(T) {
          var M = T.getNodeName();
          if (M !== g.ListType.OrderedList && M !== g.ListType.UnorderedList)
            p.push(T);
          else if (T.prior)
            p.push(T.prior);
          else {
            var N = T.children();
            N == null || (0, d.default)(N).call(N, function(U) {
              p.push(C.default(U));
            });
          }
        }), p;
      }
      o.filterSelectionNodes = x;
      function D(w, p, T) {
        var M = w.selection, N = document.createRange();
        p.length > 1 ? (N.setStart(p.elems[0], 0), N.setEnd(p.elems[p.length - 1], p.elems[p.length - 1].childNodes.length)) : N.selectNodeContents(p.elems[0]), T && N.collapse(!1), M.saveRange(N), M.restoreSelection();
      }
      o.updateRange = D;
      function b(w) {
        var p;
        return w.prior ? w.prior : C.default((p = w.children()) === null || p === void 0 ? void 0 : p.elems[0]);
      }
      o.getStartPoint = b;
      function h(w) {
        var p;
        return w.prior ? w.prior : C.default((p = w.children()) === null || p === void 0 ? void 0 : p.last().elems[0]);
      }
      o.getEndPoint = h;
      function A(w, p, T) {
        T === void 0 && (T = null), w.parent().elems[0].insertBefore(p, T);
      }
      o.insertBefore = A;
      function E(w) {
        return document.createElement(w);
      }
      o.createElement = E;
      function m() {
        return document.createDocumentFragment();
      }
      o.createDocumentFragment = m;
      function S(w, p, T) {
        return T === void 0 && (T = "li"), (0, d.default)(w).call(w, function(M) {
          var N = E(T);
          N.innerHTML = M.html(), p.appendChild(N), M.remove();
        }), p;
      }
      o.createElementFragment = S;
    }, function(l, o) {
      l.exports = function(t, s) {
        return { enumerable: !(t & 1), configurable: !(t & 2), writable: !(t & 4), value: s };
      };
    }, function(l, o) {
      l.exports = function(t) {
        if (t == null)
          throw TypeError("Can't call method on " + t);
        return t;
      };
    }, function(l, o, t) {
      var s = t(164).charAt, u = t(41), d = t(75), f = "String Iterator", g = u.set, C = u.getterFor(f);
      d(String, "String", function(x) {
        g(this, { type: f, string: String(x), index: 0 });
      }, function() {
        var D = C(this), b = D.string, h = D.index, A;
        return h >= b.length ? { value: void 0, done: !0 } : (A = s(b, h), D.index += A.length, { value: A, done: !1 });
      });
    }, function(l, o) {
      l.exports = {};
    }, function(l, o, t) {
      var s = t(106), u = t(80);
      l.exports = Object.keys || function(f) {
        return s(f, u);
      };
    }, function(l, o, t) {
      var s = t(19);
      l.exports = function(u, d, f, g) {
        g && g.enumerable ? u[d] = f : s(u, d, f);
      };
    }, function(l, o, t) {
      t(173);
      var s = t(174), u = t(8), d = t(65), f = t(19), g = t(43), C = t(10), x = C("toStringTag");
      for (var D in s) {
        var b = u[D], h = b && b.prototype;
        h && d(h) !== x && f(h, x, D), g[D] = g.Array;
      }
    }, function(l, o, t) {
      var s = t(33);
      l.exports = Array.isArray || function(d) {
        return s(d) == "Array";
      };
    }, function(l, o, t) {
      var s = t(11), u = t(10), d = t(86), f = u("species");
      l.exports = function(g) {
        return d >= 51 || !s(function() {
          var C = [], x = C.constructor = {};
          return x[f] = function() {
            return { foo: 1 };
          }, C[g](Boolean).foo !== 1;
        });
      };
    }, function(l, o, t) {
      l.exports = t(222);
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.ListHandle = void 0;
      var d = t(2), f = d.__importDefault(t(373)), g = function() {
        function C(x) {
          this.options = x, this.selectionRangeElem = new f.default();
        }
        return C;
      }();
      o.ListHandle = g;
    }, function(l, o, t) {
      var s = {}.propertyIsEnumerable, u = Object.getOwnPropertyDescriptor, d = u && !s.call({ 1: 2 }, 1);
      o.f = d ? function(g) {
        var C = u(this, g);
        return !!C && C.enumerable;
      } : s;
    }, function(l, o, t) {
      var s = t(13);
      l.exports = function(u, d) {
        if (!s(u))
          return u;
        var f, g;
        if (d && typeof (f = u.toString) == "function" && !s(g = f.call(u)) || typeof (f = u.valueOf) == "function" && !s(g = f.call(u)) || !d && typeof (f = u.toString) == "function" && !s(g = f.call(u)))
          return g;
        throw TypeError("Can't convert object to primitive value");
      };
    }, function(l, o) {
    }, function(l, o) {
      var t = Math.ceil, s = Math.floor;
      l.exports = function(u) {
        return isNaN(u = +u) ? 0 : (u > 0 ? s : t)(u);
      };
    }, function(l, o, t) {
      var s = t(74), u = t(64), d = s("keys");
      l.exports = function(f) {
        return d[f] || (d[f] = u(f));
      };
    }, function(l, o) {
      var t = 0, s = Math.random();
      l.exports = function(u) {
        return "Symbol(" + String(u === void 0 ? "" : u) + ")_" + (++t + s).toString(36);
      };
    }, function(l, o, t) {
      var s = t(81), u = t(33), d = t(10), f = d("toStringTag"), g = u(function() {
        return arguments;
      }()) == "Arguments", C = function(D, b) {
        try {
          return D[b];
        } catch {
        }
      };
      l.exports = s ? u : function(x) {
        var D, b, h;
        return x === void 0 ? "Undefined" : x === null ? "Null" : typeof (b = C(D = Object(x), f)) == "string" ? b : g ? u(D) : (h = u(D)) == "Object" && typeof D.callee == "function" ? "Arguments" : h;
      };
    }, function(l, o, t) {
      var s = t(25), u = t(111), d = t(34), f = t(39), g = t(112), C = t(113), x = function(h, A) {
        this.stopped = h, this.result = A;
      }, D = l.exports = function(b, h, A, E, m) {
        var S = f(h, A, E ? 2 : 1), w, p, T, M, N, U, F;
        if (m)
          w = b;
        else {
          if (p = g(b), typeof p != "function")
            throw TypeError("Target is not iterable");
          if (u(p)) {
            for (T = 0, M = d(b.length); M > T; T++)
              if (N = E ? S(s(F = b[T])[0], F[1]) : S(b[T]), N && N instanceof x)
                return N;
            return new x(!1);
          }
          w = p.call(b);
        }
        for (U = w.next; !(F = U.call(w)).done; )
          if (N = C(w, S, F.value, E), Pt(N) == "object" && N && N instanceof x)
            return N;
        return new x(!1);
      };
      D.stop = function(b) {
        return new x(!0, b);
      };
    }, function(l, o, t) {
      var s = t(11);
      l.exports = function(u, d) {
        var f = [][u];
        return !!f && s(function() {
          f.call(null, d || function() {
            throw 1;
          }, 1);
        });
      };
    }, function(l, o) {
      l.exports = `	
\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF`;
    }, function(l, o, t) {
      var s = t(60), u = t(18), d = t(48);
      l.exports = function(f, g, C) {
        var x = s(g);
        x in f ? u.f(f, x, d(0, C)) : f[x] = C;
      };
    }, function(l, o, t) {
      l.exports = t(209);
    }, function(l, o, t) {
      var s = t(14), u = t(59), d = t(48), f = t(28), g = t(60), C = t(16), x = t(99), D = Object.getOwnPropertyDescriptor;
      o.f = s ? D : function(h, A) {
        if (h = f(h), A = g(A, !0), x)
          try {
            return D(h, A);
          } catch {
          }
        if (C(h, A))
          return d(!u.f.call(h, A), h[A]);
      };
    }, function(l, o, t) {
      var s = t(11), u = t(33), d = "".split;
      l.exports = s(function() {
        return !Object("z").propertyIsEnumerable(0);
      }) ? function(f) {
        return u(f) == "String" ? d.call(f, "") : Object(f);
      } : Object;
    }, function(l, o, t) {
      var s = t(8), u = t(13), d = s.document, f = u(d) && u(d.createElement);
      l.exports = function(g) {
        return f ? d.createElement(g) : {};
      };
    }, function(l, o, t) {
      var s = t(42), u = t(102);
      (l.exports = function(d, f) {
        return u[d] || (u[d] = f !== void 0 ? f : {});
      })("versions", []).push({ version: "3.6.4", mode: s ? "pure" : "global", copyright: "\xA9 2020 Denis Pushkarev (zloirock.ru)" });
    }, function(l, o, t) {
      var s = t(5), u = t(167), d = t(104), f = t(171), g = t(36), C = t(19), x = t(53), D = t(10), b = t(42), h = t(43), A = t(103), E = A.IteratorPrototype, m = A.BUGGY_SAFARI_ITERATORS, S = D("iterator"), w = "keys", p = "values", T = "entries", M = function() {
        return this;
      };
      l.exports = function(N, U, F, B, P, z, H) {
        u(F, U, B);
        var $ = function(ce) {
          if (ce === P && q)
            return q;
          if (!m && ce in Q)
            return Q[ce];
          switch (ce) {
            case w:
              return function() {
                return new F(this, ce);
              };
            case p:
              return function() {
                return new F(this, ce);
              };
            case T:
              return function() {
                return new F(this, ce);
              };
          }
          return function() {
            return new F(this);
          };
        }, I = U + " Iterator", Y = !1, Q = N.prototype, K = Q[S] || Q["@@iterator"] || P && Q[P], q = !m && K || $(P), X = U == "Array" && Q.entries || K, _, le, Se;
        if (X && (_ = d(X.call(new N())), E !== Object.prototype && _.next && (!b && d(_) !== E && (f ? f(_, E) : typeof _[S] != "function" && C(_, S, M)), g(_, I, !0, !0), b && (h[I] = M))), P == p && K && K.name !== p && (Y = !0, q = function() {
          return K.call(this);
        }), (!b || H) && Q[S] !== q && C(Q, S, q), h[U] = q, P)
          if (le = { values: $(p), keys: z ? q : $(w), entries: $(T) }, H)
            for (Se in le)
              (m || Y || !(Se in Q)) && x(Q, Se, le[Se]);
          else
            s({ target: U, proto: !0, forced: m || Y }, le);
        return le;
      };
    }, function(l, o, t) {
      var s = t(11);
      l.exports = !!Object.getOwnPropertySymbols && !s(function() {
        return !String(Symbol());
      });
    }, function(l, o, t) {
      var s = t(25), u = t(169), d = t(80), f = t(51), g = t(107), C = t(73), x = t(63), D = ">", b = "<", h = "prototype", A = "script", E = x("IE_PROTO"), m = function() {
      }, S = function(U) {
        return b + A + D + U + b + "/" + A + D;
      }, w = function(U) {
        U.write(S("")), U.close();
        var F = U.parentWindow.Object;
        return U = null, F;
      }, p = function() {
        var U = C("iframe"), F = "java" + A + ":", B;
        return U.style.display = "none", g.appendChild(U), U.src = String(F), B = U.contentWindow.document, B.open(), B.write(S("document.F=Object")), B.close(), B.F;
      }, T, M = function() {
        try {
          T = document.domain && new ActiveXObject("htmlfile");
        } catch {
        }
        M = T ? w(T) : p();
        for (var U = d.length; U--; )
          delete M[h][d[U]];
        return M();
      };
      f[E] = !0, l.exports = Object.create || function(U, F) {
        var B;
        return U !== null ? (m[h] = s(U), B = new m(), m[h] = null, B[E] = U) : B = M(), F === void 0 ? B : u(B, F);
      };
    }, function(l, o, t) {
      var s = t(28), u = t(34), d = t(79), f = function(C) {
        return function(x, D, b) {
          var h = s(x), A = u(h.length), E = d(b, A), m;
          if (C && D != D) {
            for (; A > E; )
              if (m = h[E++], m != m)
                return !0;
          } else
            for (; A > E; E++)
              if ((C || E in h) && h[E] === D)
                return C || E || 0;
          return !C && -1;
        };
      };
      l.exports = {
        includes: f(!0),
        indexOf: f(!1)
      };
    }, function(l, o, t) {
      var s = t(62), u = Math.max, d = Math.min;
      l.exports = function(f, g) {
        var C = s(f);
        return C < 0 ? u(C + g, 0) : d(C, g);
      };
    }, function(l, o) {
      l.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
    }, function(l, o, t) {
      var s = t(10), u = s("toStringTag"), d = {};
      d[u] = "z", l.exports = String(d) === "[object z]";
    }, function(l, o) {
      l.exports = function() {
      };
    }, function(l, o) {
      l.exports = function(t, s, u) {
        if (!(t instanceof s))
          throw TypeError("Incorrect " + (u ? u + " " : "") + "invocation");
        return t;
      };
    }, function(l, o, t) {
      var s = t(35);
      l.exports = s("navigator", "userAgent") || "";
    }, function(l, o, t) {
      var s = t(40), u = function(f) {
        var g, C;
        this.promise = new f(function(x, D) {
          if (g !== void 0 || C !== void 0)
            throw TypeError("Bad Promise constructor");
          g = x, C = D;
        }), this.resolve = s(g), this.reject = s(C);
      };
      l.exports.f = function(d) {
        return new u(d);
      };
    }, function(l, o, t) {
      var s = t(8), u = t(84), d = s.process, f = d && d.versions, g = f && f.v8, C, x;
      g ? (C = g.split("."), x = C[0] + C[1]) : u && (C = u.match(/Edge\/(\d+)/), (!C || C[1] >= 74) && (C = u.match(/Chrome\/(\d+)/), C && (x = C[1]))), l.exports = x && +x;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), g = f.__importDefault(t(3)), C = t(6), x = f.__importDefault(t(267)), D = f.__importDefault(t(280)), b = f.__importDefault(t(281)), h = f.__importDefault(t(282)), A = f.__importDefault(t(301)), E = f.__importStar(t(416)), m = f.__importDefault(t(417)), S = f.__importDefault(t(418)), w = f.__importDefault(t(419)), p = f.__importStar(t(420)), T = f.__importDefault(t(423)), M = f.__importDefault(t(424)), N = f.__importDefault(t(425)), U = f.__importDefault(t(427)), F = f.__importDefault(t(437)), B = f.__importDefault(t(440)), P = f.__importStar(t(441)), z = f.__importDefault(t(23)), H = f.__importDefault(t(133)), $ = f.__importDefault(t(24)), I = f.__importDefault(t(32)), Y = f.__importDefault(t(37)), Q = f.__importDefault(t(38)), K = 1, q = function() {
        function X(_, le) {
          this.pluginsFunctionList = {}, this.beforeDestroyHooks = [], this.id = "wangEditor-" + K++, this.toolbarSelector = _, this.textSelector = le, E.selectorValidator(this), this.config = C.deepClone(x.default), this.$toolbarElem = g.default("<div></div>"), this.$textContainerElem = g.default("<div></div>"), this.$textElem = g.default("<div></div>"), this.toolbarElemId = "", this.textElemId = "", this.isFocus = !1, this.isComposing = !1, this.isCompatibleMode = !1, this.selection = new D.default(this), this.cmd = new b.default(this), this.txt = new h.default(this), this.menus = new A.default(this), this.zIndex = new M.default(), this.change = new N.default(this), this.history = new U.default(this), this.onSelectionChange = new B.default(this);
          var Se = F.default(this), ve = Se.disable, ce = Se.enable;
          this.disable = ve, this.enable = ce, this.isEnable = !0;
        }
        return X.prototype.initSelection = function(_) {
          m.default(this, _);
        }, X.prototype.create = function() {
          this.zIndex.init(this), this.isCompatibleMode = this.config.compatibleMode(), this.isCompatibleMode || (this.config.onchangeTimeout = 30), w.default(this), E.default(this), this.txt.init(), this.menus.init(), p.default(this), this.initSelection(!0), S.default(this), this.change.observe(), this.history.observe(), P.default(this);
        }, X.prototype.beforeDestroy = function(_) {
          return this.beforeDestroyHooks.push(_), this;
        }, X.prototype.destroy = function() {
          var _, le = this;
          (0, d.default)(_ = this.beforeDestroyHooks).call(_, function(Se) {
            return Se.call(le);
          }), this.$toolbarElem.remove(), this.$textContainerElem.remove();
        }, X.prototype.fullScreen = function() {
          p.setFullScreen(this);
        }, X.prototype.unFullScreen = function() {
          p.setUnFullScreen(this);
        }, X.prototype.scrollToHead = function(_) {
          T.default(this, _);
        }, X.registerMenu = function(_, le) {
          !le || typeof le != "function" || (X.globalCustomMenuConstructorList[_] = le);
        }, X.prototype.registerPlugin = function(_, le) {
          P.registerPlugin(_, le, this.pluginsFunctionList);
        }, X.registerPlugin = function(_, le) {
          P.registerPlugin(_, le, X.globalPluginsFunctionList);
        }, X.$ = g.default, X.BtnMenu = z.default, X.DropList = H.default, X.DropListMenu = $.default, X.Panel = I.default, X.PanelMenu = Y.default, X.Tooltip = Q.default, X.globalCustomMenuConstructorList = {}, X.globalPluginsFunctionList = {}, X;
      }();
      o.default = q;
    }, function(l, o, t) {
      var s = t(13), u = t(55), d = t(10), f = d("species");
      l.exports = function(g, C) {
        var x;
        return u(g) && (x = g.constructor, typeof x == "function" && (x === Array || u(x.prototype)) ? x = void 0 : s(x) && (x = x[f], x === null && (x = void 0))), new (x === void 0 ? Array : x)(C === 0 ? 0 : C);
      };
    }, function(l, o, t) {
      l.exports = t(185);
    }, function(l, o, t) {
      var s = t(49), u = t(68), d = "[" + u + "]", f = RegExp("^" + d + d + "*"), g = RegExp(d + d + "*$"), C = function(D) {
        return function(b) {
          var h = String(s(b));
          return D & 1 && (h = h.replace(f, "")), D & 2 && (h = h.replace(g, "")), h;
        };
      };
      l.exports = {
        start: C(1),
        end: C(2),
        trim: C(3)
      };
    }, function(l, o, t) {
      l.exports = t(205);
    }, function(l, o, t) {
      var s = t(227), u = t(230);
      function d(f) {
        return typeof u == "function" && typeof s == "symbol" ? l.exports = d = function(C) {
          return typeof C;
        } : l.exports = d = function(C) {
          return C && typeof u == "function" && C.constructor === u && C !== u.prototype ? "symbol" : typeof C;
        }, d(f);
      }
      l.exports = d;
    }, function(l, o, t) {
      var s = t(10);
      o.f = s;
    }, function(l, o, t) {
      l.exports = t(306);
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), g = f.__importDefault(t(32)), C = function() {
        function x(D, b) {
          var h = this;
          this.$elem = D, this.editor = b, this._active = !1, D.on("click", function(A) {
            var E;
            g.default.hideCurAllPanels(), (0, d.default)(E = b.txt.eventHooks.menuClickEvents).call(E, function(m) {
              return m();
            }), A.stopPropagation(), b.selection.getRange() != null && h.clickHandler(A);
          });
        }
        return x.prototype.clickHandler = function(D) {
        }, x.prototype.active = function() {
          this._active = !0, this.$elem.addClass("w-e-active");
        }, x.prototype.unActive = function() {
          this._active = !1, this.$elem.removeClass("w-e-active");
        }, (0, u.default)(x.prototype, "isActive", {
          get: function() {
            return this._active;
          },
          enumerable: !1,
          configurable: !0
        }), x;
      }();
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(57)), f = s(t(4)), g = s(t(27));
      (0, u.default)(o, "__esModule", { value: !0 });
      var C = t(2), x = t(6), D = C.__importDefault(t(135)), b = C.__importDefault(t(136)), h = function() {
        function A(E) {
          this.editor = E;
        }
        return A.prototype.insertImg = function(E, m, S) {
          var w = this.editor, p = w.config, T = "validate.", M = function(P, z) {
            return z === void 0 && (z = T), w.i18next.t(z + P);
          }, N = m ? 'alt="' + m + '" ' : "", U = S ? 'data-href="' + encodeURIComponent(S) + '" ' : "";
          w.cmd.do("insertHTML", '<img src="' + E + '" ' + N + U + 'style="max-width:100%;" contenteditable="false"/>'), p.linkImgCallback(E, m, S);
          var F = document.createElement("img");
          F.onload = function() {
            F = null;
          }, F.onerror = function() {
            p.customAlert(M("\u63D2\u5165\u56FE\u7247\u9519\u8BEF"), "error", "wangEditor: " + M("\u63D2\u5165\u56FE\u7247\u9519\u8BEF") + "\uFF0C" + M("\u56FE\u7247\u94FE\u63A5") + ' "' + E + '"\uFF0C' + M("\u4E0B\u8F7D\u94FE\u63A5\u5931\u8D25")), F = null;
          }, F.onabort = function() {
            return F = null;
          }, F.src = E;
        }, A.prototype.uploadImg = function(E) {
          var m = this;
          if (!!E.length) {
            var S = this.editor, w = S.config, p = "validate.", T = function(re) {
              return S.i18next.t(p + re);
            }, M = w.uploadImgServer, N = w.uploadImgShowBase64, U = w.uploadImgMaxSize, F = U / 1024 / 1024, B = w.uploadImgMaxLength, P = w.uploadFileName, z = w.uploadImgParams, H = w.uploadImgParamsWithUrl, $ = w.uploadImgHeaders, I = w.uploadImgHooks, Y = w.uploadImgTimeout, Q = w.withCredentials, K = w.customUploadImg;
            if (!(!K && !M && !N)) {
              var q = [], X = [];
              if (x.arrForEach(E, function(ae) {
                if (!!ae) {
                  var re = ae.name || ae.type.replace("/", "."), se = ae.size;
                  if (!(!re || !se)) {
                    var pe = S.config.uploadImgAccept.join("|"), Pe = ".(" + pe + ")$", be = new RegExp(Pe, "i");
                    if (be.test(re) === !1) {
                      X.push("\u3010" + re + "\u3011" + T("\u4E0D\u662F\u56FE\u7247"));
                      return;
                    }
                    if (U < se) {
                      X.push("\u3010" + re + "\u3011" + T("\u5927\u4E8E") + " " + F + "M");
                      return;
                    }
                    q.push(ae);
                  }
                }
              }), X.length) {
                w.customAlert(T("\u56FE\u7247\u9A8C\u8BC1\u672A\u901A\u8FC7") + `: 
` + X.join(`
`), "warning");
                return;
              }
              if (q.length === 0) {
                w.customAlert(T("\u4F20\u5165\u7684\u6587\u4EF6\u4E0D\u5408\u6CD5"), "warning");
                return;
              }
              if (q.length > B) {
                w.customAlert(T("\u4E00\u6B21\u6700\u591A\u4E0A\u4F20") + B + T("\u5F20\u56FE\u7247"), "warning");
                return;
              }
              if (K && typeof K == "function") {
                var _;
                K(q, (0, d.default)(_ = this.insertImg).call(_, this));
                return;
              }
              var le = new FormData();
              if ((0, f.default)(q).call(q, function(ae, re) {
                var se = P || ae.name;
                q.length > 1 && (se = se + (re + 1)), le.append(se, ae);
              }), M) {
                var Se = M.split("#");
                M = Se[0];
                var ve = Se[1] || "";
                (0, f.default)(x).call(x, z, function(ae, re) {
                  H && ((0, g.default)(M).call(M, "?") > 0 ? M += "&" : M += "?", M = M + ae + "=" + re), le.append(ae, re);
                }), ve && (M += "#" + ve);
                var ce = D.default(M, { timeout: Y, formData: le, headers: $, withCredentials: !!Q, beforeSend: function(re) {
                  if (I.before)
                    return I.before(re, S, q);
                }, onTimeout: function(re) {
                  w.customAlert(T("\u4E0A\u4F20\u56FE\u7247\u8D85\u65F6"), "error"), I.timeout && I.timeout(re, S);
                }, onProgress: function(re, se) {
                  var pe = new b.default(S);
                  se.lengthComputable && (re = se.loaded / se.total, pe.show(re));
                }, onError: function(re) {
                  w.customAlert(T("\u4E0A\u4F20\u56FE\u7247\u9519\u8BEF"), "error", T("\u4E0A\u4F20\u56FE\u7247\u9519\u8BEF") + "\uFF0C" + T("\u670D\u52A1\u5668\u8FD4\u56DE\u72B6\u6001") + ": " + re.status), I.error && I.error(re, S);
                }, onFail: function(re, se) {
                  w.customAlert(T("\u4E0A\u4F20\u56FE\u7247\u5931\u8D25"), "error", T("\u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF") + ("\uFF0C" + T("\u8FD4\u56DE\u7ED3\u679C") + ": ") + se), I.fail && I.fail(re, S, se);
                }, onSuccess: function(re, se) {
                  if (I.customInsert) {
                    var pe;
                    I.customInsert((0, d.default)(pe = m.insertImg).call(pe, m), se, S);
                    return;
                  }
                  if (se.errno != "0") {
                    w.customAlert(T("\u4E0A\u4F20\u56FE\u7247\u5931\u8D25"), "error", T("\u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF") + "\uFF0C" + T("\u8FD4\u56DE\u7ED3\u679C") + " errno=" + se.errno), I.fail && I.fail(re, S, se);
                    return;
                  }
                  var Pe = se.data;
                  (0, f.default)(Pe).call(Pe, function(be) {
                    typeof be == "string" ? m.insertImg(be) : m.insertImg(be.url, be.alt, be.href);
                  }), I.success && I.success(re, S, se);
                } });
                typeof ce == "string" && w.customAlert(ce, "error");
                return;
              }
              N && x.arrForEach(E, function(ae) {
                var re = m, se = new FileReader();
                se.readAsDataURL(ae), se.onload = function() {
                  if (!!this.result) {
                    var pe = this.result.toString();
                    re.insertImg(pe, pe);
                  }
                };
              });
            }
          }
        }, A;
      }();
      o.default = h;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(410)), f = s(t(4)), g = s(t(45));
      (0, u.default)(o, "__esModule", { value: !0 }), o.dealTextNode = o.isAllTodo = o.isTodo = o.getCursorNextNode = void 0;
      function C(A) {
        return A.length ? A.attr("class") === "w-e-todo" : !1;
      }
      o.isTodo = C;
      function x(A) {
        var E = A.selection.getSelectionRangeTopNodes();
        if (E.length !== 0)
          return (0, d.default)(E).call(E, function(m) {
            return C(m);
          });
      }
      o.isAllTodo = x;
      function D(A, E, m) {
        var S;
        if (!!A.hasChildNodes()) {
          var w = A.cloneNode(), p = !1;
          E.nodeValue === "" && (p = !0);
          var T = [];
          return (0, f.default)(S = A.childNodes).call(S, function(M) {
            if (!b(M, E) && p && (w.appendChild(M.cloneNode(!0)), M.nodeName !== "BR" && T.push(M)), b(M, E)) {
              if (M.nodeType === 1) {
                var N = D(M, E, m);
                N && N.textContent !== "" && (w == null || w.appendChild(N));
              }
              if (M.nodeType === 3 && E.isEqualNode(M)) {
                var U = h(M, m);
                w.textContent = U;
              }
              p = !0;
            }
          }), (0, f.default)(T).call(T, function(M) {
            var N = M;
            N.remove();
          }), w;
        }
      }
      o.getCursorNextNode = D;
      function b(A, E) {
        return A.nodeType === 3 ? A.nodeValue === E.nodeValue : A.contains(E);
      }
      function h(A, E, m) {
        m === void 0 && (m = !0);
        var S = A.nodeValue, w = S == null ? void 0 : (0, g.default)(S).call(S, 0, E);
        if (S = S == null ? void 0 : (0, g.default)(S).call(S, E), !m) {
          var p = S;
          S = w, w = p;
        }
        return A.nodeValue = w, S;
      }
      o.dealTextNode = h;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(430), f = function() {
        function g(C) {
          this.maxSize = C, this.isRe = !1, this.data = new d.CeilStack(C), this.revokeData = new d.CeilStack(C);
        }
        return (0, u.default)(g.prototype, "size", {
          get: function() {
            return [this.data.size, this.revokeData.size];
          },
          enumerable: !1,
          configurable: !0
        }), g.prototype.resetMaxSize = function(C) {
          this.data.resetMax(C), this.revokeData.resetMax(C);
        }, g.prototype.save = function(C) {
          return this.isRe && (this.revokeData.clear(), this.isRe = !1), this.data.instack(C), this;
        }, g.prototype.revoke = function(C) {
          !this.isRe && (this.isRe = !0);
          var x = this.data.outstack();
          return x ? (this.revokeData.instack(x), C(x), !0) : !1;
        }, g.prototype.restore = function(C) {
          !this.isRe && (this.isRe = !0);
          var x = this.revokeData.outstack();
          return x ? (this.data.instack(x), C(x), !0) : !1;
        }, g;
      }();
      o.default = f;
    }, function(l, o, t) {
      var s = t(14), u = t(11), d = t(73);
      l.exports = !s && !u(function() {
        return Object.defineProperty(d("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }, function(l, o, t) {
      var s = t(11), u = /#|\.prototype\./, d = function(b, h) {
        var A = g[f(b)];
        return A == x ? !0 : A == C ? !1 : typeof h == "function" ? s(h) : !!h;
      }, f = d.normalize = function(D) {
        return String(D).replace(u, ".").toLowerCase();
      }, g = d.data = {}, C = d.NATIVE = "N", x = d.POLYFILL = "P";
      l.exports = d;
    }, function(l, o, t) {
      var s = t(102), u = Function.toString;
      typeof s.inspectSource != "function" && (s.inspectSource = function(d) {
        return u.call(d);
      }), l.exports = s.inspectSource;
    }, function(l, o, t) {
      var s = t(8), u = t(166), d = "__core-js_shared__", f = s[d] || u(d, {});
      l.exports = f;
    }, function(l, o, t) {
      var s = t(104), u = t(19), d = t(16), f = t(10), g = t(42), C = f("iterator"), x = !1, D = function() {
        return this;
      }, b, h, A;
      [].keys && (A = [].keys(), "next" in A ? (h = s(s(A)), h !== Object.prototype && (b = h)) : x = !0), b == null && (b = {}), !g && !d(b, C) && u(b, C, D), l.exports = { IteratorPrototype: b, BUGGY_SAFARI_ITERATORS: x };
    }, function(l, o, t) {
      var s = t(16), u = t(29), d = t(63), f = t(168), g = d("IE_PROTO"), C = Object.prototype;
      l.exports = f ? Object.getPrototypeOf : function(x) {
        return x = u(x), s(x, g) ? x[g] : typeof x.constructor == "function" && x instanceof x.constructor ? x.constructor.prototype : x instanceof Object ? C : null;
      };
    }, function(l, o, t) {
      var s = t(76);
      l.exports = s && !Symbol.sham && Pt(Symbol.iterator) == "symbol";
    }, function(l, o, t) {
      var s = t(16), u = t(28), d = t(78).indexOf, f = t(51);
      l.exports = function(g, C) {
        var x = u(g), D = 0, b = [], h;
        for (h in x)
          !s(f, h) && s(x, h) && b.push(h);
        for (; C.length > D; )
          s(x, h = C[D++]) && (~d(b, h) || b.push(h));
        return b;
      };
    }, function(l, o, t) {
      var s = t(35);
      l.exports = s("document", "documentElement");
    }, function(l, o, t) {
      var s = t(8);
      l.exports = s.Promise;
    }, function(l, o, t) {
      var s = t(53);
      l.exports = function(u, d, f) {
        for (var g in d)
          f && f.unsafe && u[g] ? u[g] = d[g] : s(u, g, d[g], f);
        return u;
      };
    }, function(l, o, t) {
      var s = t(35), u = t(18), d = t(10), f = t(14), g = d("species");
      l.exports = function(C) {
        var x = s(C), D = u.f;
        f && x && !x[g] && D(x, g, { configurable: !0, get: function() {
          return this;
        } });
      };
    }, function(l, o, t) {
      var s = t(10), u = t(43), d = s("iterator"), f = Array.prototype;
      l.exports = function(g) {
        return g !== void 0 && (u.Array === g || f[d] === g);
      };
    }, function(l, o, t) {
      var s = t(65), u = t(43), d = t(10), f = d("iterator");
      l.exports = function(g) {
        if (g != null)
          return g[f] || g["@@iterator"] || u[s(g)];
      };
    }, function(l, o, t) {
      var s = t(25);
      l.exports = function(u, d, f, g) {
        try {
          return g ? d(s(f)[0], f[1]) : d(f);
        } catch (x) {
          var C = u.return;
          throw C !== void 0 && s(C.call(u)), x;
        }
      };
    }, function(l, o, t) {
      var s = t(10), u = s("iterator"), d = !1;
      try {
        var f = 0, g = { next: function() {
          return { done: !!f++ };
        }, return: function() {
          d = !0;
        } };
        g[u] = function() {
          return this;
        }, Array.from(g, function() {
          throw 2;
        });
      } catch {
      }
      l.exports = function(C, x) {
        if (!x && !d)
          return !1;
        var D = !1;
        try {
          var b = {};
          b[u] = function() {
            return { next: function() {
              return { done: D = !0 };
            } };
          }, C(b);
        } catch {
        }
        return D;
      };
    }, function(l, o, t) {
      var s = t(25), u = t(40), d = t(10), f = d("species");
      l.exports = function(g, C) {
        var x = s(g).constructor, D;
        return x === void 0 || (D = s(x)[f]) == null ? C : u(D);
      };
    }, function(l, o, t) {
      var s = t(8), u = t(11), d = t(33), f = t(39), g = t(107), C = t(73), x = t(117), D = s.location, b = s.setImmediate, h = s.clearImmediate, A = s.process, E = s.MessageChannel, m = s.Dispatch, S = 0, w = {}, p = "onreadystatechange", T, M, N, U = function(H) {
        if (w.hasOwnProperty(H)) {
          var $ = w[H];
          delete w[H], $();
        }
      }, F = function(H) {
        return function() {
          U(H);
        };
      }, B = function(H) {
        U(H.data);
      }, P = function(H) {
        s.postMessage(H + "", D.protocol + "//" + D.host);
      };
      (!b || !h) && (b = function(H) {
        for (var $ = [], I = 1; arguments.length > I; )
          $.push(arguments[I++]);
        return w[++S] = function() {
          (typeof H == "function" ? H : Function(H)).apply(void 0, $);
        }, T(S), S;
      }, h = function(H) {
        delete w[H];
      }, d(A) == "process" ? T = function(H) {
        A.nextTick(F(H));
      } : m && m.now ? T = function(H) {
        m.now(F(H));
      } : E && !x ? (M = new E(), N = M.port2, M.port1.onmessage = B, T = f(N.postMessage, N, 1)) : s.addEventListener && typeof postMessage == "function" && !s.importScripts && !u(P) && D.protocol !== "file:" ? (T = P, s.addEventListener("message", B, !1)) : p in C("script") ? T = function(H) {
        g.appendChild(C("script"))[p] = function() {
          g.removeChild(this), U(H);
        };
      } : T = function(H) {
        setTimeout(F(H), 0);
      }), l.exports = { set: b, clear: h };
    }, function(l, o, t) {
      var s = t(84);
      l.exports = /(iphone|ipod|ipad).*applewebkit/i.test(s);
    }, function(l, o, t) {
      var s = t(25), u = t(13), d = t(85);
      l.exports = function(f, g) {
        if (s(f), u(g) && g.constructor === f)
          return g;
        var C = d.f(f), x = C.resolve;
        return x(g), C.promise;
      };
    }, function(l, o) {
      l.exports = function(t) {
        try {
          return { error: !1, value: t() };
        } catch (s) {
          return { error: !0, value: s };
        }
      };
    }, function(l, o, t) {
      l.exports = t(197);
    }, function(l, o, t) {
      var s = t(5), u = t(8), d = t(122), f = t(11), g = t(19), C = t(66), x = t(83), D = t(13), b = t(36), h = t(18).f, A = t(30).forEach, E = t(14), m = t(41), S = m.set, w = m.getterFor;
      l.exports = function(p, T, M) {
        var N = p.indexOf("Map") !== -1, U = p.indexOf("Weak") !== -1, F = N ? "set" : "add", B = u[p], P = B && B.prototype, z = {}, H;
        if (!E || typeof B != "function" || !(U || P.forEach && !f(function() {
          new B().entries().next();
        })))
          H = M.getConstructor(T, p, N, F), d.REQUIRED = !0;
        else {
          H = T(function(I, Y) {
            S(x(I, H, p), { type: p, collection: new B() }), Y != null && C(Y, I[F], I, N);
          });
          var $ = w(p);
          A(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], function(I) {
            var Y = I == "add" || I == "set";
            I in P && !(U && I == "clear") && g(H.prototype, I, function(Q, K) {
              var q = $(this).collection;
              if (!Y && U && !D(Q))
                return I == "get" ? void 0 : !1;
              var X = q[I](Q === 0 ? 0 : Q, K);
              return Y ? this : X;
            });
          }), U || h(H.prototype, "size", { configurable: !0, get: function() {
            return $(this).collection.size;
          } });
        }
        return b(H, p, !1, !0), z[p] = H, s({ global: !0, forced: !0 }, z), U || M.setStrong(H, p, N), H;
      };
    }, function(l, o, t) {
      var s = t(51), u = t(13), d = t(16), f = t(18).f, g = t(64), C = t(200), x = g("meta"), D = 0, b = Object.isExtensible || function() {
        return !0;
      }, h = function(p) {
        f(p, x, { value: {
          objectID: "O" + ++D,
          weakData: {}
        } });
      }, A = function(p, T) {
        if (!u(p))
          return Pt(p) == "symbol" ? p : (typeof p == "string" ? "S" : "P") + p;
        if (!d(p, x)) {
          if (!b(p))
            return "F";
          if (!T)
            return "E";
          h(p);
        }
        return p[x].objectID;
      }, E = function(p, T) {
        if (!d(p, x)) {
          if (!b(p))
            return !0;
          if (!T)
            return !1;
          h(p);
        }
        return p[x].weakData;
      }, m = function(p) {
        return C && S.REQUIRED && b(p) && !d(p, x) && h(p), p;
      }, S = l.exports = { REQUIRED: !1, fastKey: A, getWeakData: E, onFreeze: m };
      s[x] = !0;
    }, function(l, o, t) {
      var s = t(18).f, u = t(77), d = t(109), f = t(39), g = t(83), C = t(66), x = t(75), D = t(110), b = t(14), h = t(122).fastKey, A = t(41), E = A.set, m = A.getterFor;
      l.exports = { getConstructor: function(w, p, T, M) {
        var N = w(function(P, z) {
          g(P, N, p), E(P, { type: p, index: u(null), first: void 0, last: void 0, size: 0 }), b || (P.size = 0), z != null && C(z, P[M], P, T);
        }), U = m(p), F = function(z, H, $) {
          var I = U(z), Y = B(z, H), Q, K;
          return Y ? Y.value = $ : (I.last = Y = { index: K = h(H, !0), key: H, value: $, previous: Q = I.last, next: void 0, removed: !1 }, I.first || (I.first = Y), Q && (Q.next = Y), b ? I.size++ : z.size++, K !== "F" && (I.index[K] = Y)), z;
        }, B = function(z, H) {
          var $ = U(z), I = h(H), Y;
          if (I !== "F")
            return $.index[I];
          for (Y = $.first; Y; Y = Y.next)
            if (Y.key == H)
              return Y;
        };
        return d(N.prototype, {
          clear: function() {
            for (var z = this, H = U(z), $ = H.index, I = H.first; I; )
              I.removed = !0, I.previous && (I.previous = I.previous.next = void 0), delete $[I.index], I = I.next;
            H.first = H.last = void 0, b ? H.size = 0 : z.size = 0;
          },
          delete: function(z) {
            var H = this, $ = U(H), I = B(H, z);
            if (I) {
              var Y = I.next, Q = I.previous;
              delete $.index[I.index], I.removed = !0, Q && (Q.next = Y), Y && (Y.previous = Q), $.first == I && ($.first = Y), $.last == I && ($.last = Q), b ? $.size-- : H.size--;
            }
            return !!I;
          },
          forEach: function(z) {
            for (var H = U(this), $ = f(z, arguments.length > 1 ? arguments[1] : void 0, 3), I; I = I ? I.next : H.first; )
              for ($(I.value, I.key, this); I && I.removed; )
                I = I.previous;
          },
          has: function(z) {
            return !!B(this, z);
          }
        }), d(N.prototype, T ? {
          get: function(z) {
            var H = B(this, z);
            return H && H.value;
          },
          set: function(z, H) {
            return F(this, z === 0 ? 0 : z, H);
          }
        } : {
          add: function(z) {
            return F(this, z = z === 0 ? 0 : z, z);
          }
        }), b && s(N.prototype, "size", { get: function() {
          return U(this).size;
        } }), N;
      }, setStrong: function(w, p, T) {
        var M = p + " Iterator", N = m(p), U = m(M);
        x(w, p, function(F, B) {
          E(this, { type: M, target: F, state: N(F), kind: B, last: void 0 });
        }, function() {
          for (var F = U(this), B = F.kind, P = F.last; P && P.removed; )
            P = P.previous;
          return !F.target || !(F.last = P = P ? P.next : F.state.first) ? (F.target = void 0, { value: void 0, done: !0 }) : B == "keys" ? { value: P.key, done: !1 } : B == "values" ? { value: P.value, done: !1 } : { value: [P.key, P.value], done: !1 };
        }, T ? "entries" : "values", !T, !0), D(p);
      } };
    }, function(l, o, t) {
      var s = t(12);
      s("iterator");
    }, function(l, o, t) {
      var s = t(106), u = t(80), d = u.concat("length", "prototype");
      o.f = Object.getOwnPropertyNames || function(g) {
        return s(g, d);
      };
    }, function(l, o) {
      o.f = Object.getOwnPropertySymbols;
    }, function(l, o, t) {
      l.exports = t(268);
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.default = { zIndex: 1e4 };
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.default = { focus: !0, height: 300, placeholder: "\u8BF7\u8F93\u5165\u6B63\u6587", zIndexFullScreen: 10002, showFullScreen: !0 };
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 }), o.getPasteImgs = o.getPasteHtml = o.getPasteText = void 0;
      var f = t(2), g = t(6), C = f.__importDefault(t(292));
      function x(h) {
        var A = h.clipboardData, E = "";
        return A == null ? E = window.clipboardData && window.clipboardData.getData("text") : E = A.getData("text/plain"), g.replaceHtmlSymbol(E);
      }
      o.getPasteText = x;
      function D(h, A, E) {
        A === void 0 && (A = !0), E === void 0 && (E = !1);
        var m = h.clipboardData, S = "";
        if (m && (S = m.getData("text/html")), !S) {
          var w = x(h);
          if (!w)
            return "";
          S = "<p>" + w + "</p>";
        }
        return S = S.replace(/<(\d)/gm, function(p, T) {
          return "&lt;" + T;
        }), S = S.replace(/<(\/?meta.*?)>/gim, ""), S = C.default(S, A, E), S;
      }
      o.getPasteHtml = D;
      function b(h) {
        var A, E = [], m = x(h);
        if (m)
          return E;
        var S = (A = h.clipboardData) === null || A === void 0 ? void 0 : A.items;
        return S && (0, d.default)(g).call(g, S, function(w, p) {
          var T = p.type;
          /image/i.test(T) && E.push(p.getAsFile());
        }), E;
      }
      o.getPasteImgs = b;
    }, function(l, o, t) {
      l.exports = t(294);
    }, function(l, o, t) {
      l.exports = t(310);
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4)), f = s(t(46));
      (0, u.default)(o, "__esModule", { value: !0 });
      var g = t(2), C = g.__importDefault(t(3)), x = t(7), D = function() {
        function b(h, A) {
          var E = this;
          this.hideTimeoutId = 0, this.menu = h, this.conf = A;
          var m = C.default('<div class="w-e-droplist"></div>'), S = C.default("<p>" + A.title + "</p>");
          S.addClass("w-e-dp-title"), m.append(S);
          var w = A.list || [], p = A.type || "list", T = A.clickHandler || x.EMPTY_FN, M = C.default('<ul class="' + (p === "list" ? "w-e-list" : "w-e-block") + '"></ul>');
          (0, d.default)(w).call(w, function(N) {
            var U = N.$elem, F = N.value, B = C.default('<li class="w-e-item"></li>');
            U && (B.append(U), M.append(B), B.on("click", function(P) {
              T(F), P.stopPropagation(), E.hideTimeoutId = (0, f.default)(function() {
                E.hide();
              });
            }));
          }), m.append(M), m.on("mouseleave", function() {
            E.hideTimeoutId = (0, f.default)(function() {
              E.hide();
            });
          }), this.$container = m, this.rendered = !1, this._show = !1;
        }
        return b.prototype.show = function() {
          this.hideTimeoutId && clearTimeout(this.hideTimeoutId);
          var h = this.menu, A = h.$elem, E = this.$container;
          if (!this._show) {
            if (this.rendered)
              E.show();
            else {
              var m = A.getBoundingClientRect().height || 0, S = this.conf.width || 100;
              E.css("margin-top", m + "px").css("width", S + "px"), A.append(E), this.rendered = !0;
            }
            this._show = !0;
          }
        }, b.prototype.hide = function() {
          var h = this.$container;
          !this._show || (h.hide(), this._show = !1);
        }, (0, u.default)(b.prototype, "isShow", { get: function() {
          return this._show;
        }, enumerable: !1, configurable: !0 }), b;
      }();
      o.default = D;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      function d(f) {
        var g = f.selection.getSelectionContainerElem();
        return g != null && g.length ? g.getNodeName() === "A" : !1;
      }
      o.default = d;
    }, function(l, o, t) {
      var s = t(0), u = s(t(92)), d = s(t(1)), f = s(t(4));
      (0, d.default)(o, "__esModule", { value: !0 });
      var g = t(6);
      function C(x, D) {
        var b = new XMLHttpRequest();
        if (b.open("POST", x), b.timeout = D.timeout || 10 * 1e3, b.ontimeout = function() {
          console.error("wangEditor - \u8BF7\u6C42\u8D85\u65F6"), D.onTimeout && D.onTimeout(b);
        }, b.upload && (b.upload.onprogress = function(A) {
          var E = A.loaded / A.total;
          D.onProgress && D.onProgress(E, A);
        }), D.headers && (0, f.default)(g).call(g, D.headers, function(A, E) {
          b.setRequestHeader(A, E);
        }), b.withCredentials = !!D.withCredentials, D.beforeSend) {
          var h = D.beforeSend(b);
          if (h && (0, u.default)(h) === "object" && h.prevent)
            return h.msg;
        }
        return b.onreadystatechange = function() {
          if (b.readyState === 4) {
            var A = b.status;
            if (!(A < 200) && !(A >= 300 && A < 400)) {
              if (A >= 400) {
                console.error("wangEditor - XHR \u62A5\u9519\uFF0C\u72B6\u6001\u7801 " + A), D.onError && D.onError(b);
                return;
              }
              var E = b.responseText, m;
              if ((0, u.default)(E) !== "object")
                try {
                  m = JSON.parse(E);
                } catch {
                  console.error("wangEditor - \u8FD4\u56DE\u7ED3\u679C\u4E0D\u662F JSON \u683C\u5F0F", E), D.onFail && D.onFail(b, E);
                  return;
                }
              else
                m = E;
              D.onSuccess(b, m);
            }
          }
        }, b.send(D.formData || null), b;
      }
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(342)), f = s(t(46));
      (0, u.default)(o, "__esModule", { value: !0 });
      var g = t(2), C = g.__importDefault(t(3)), x = function() {
        function D(b) {
          this.editor = b, this.$textContainer = b.$textContainerElem, this.$bar = C.default('<div class="w-e-progress"></div>'), this.isShow = !1, this.time = 0, this.timeoutId = 0;
        }
        return D.prototype.show = function(b) {
          var h = this;
          if (!this.isShow) {
            this.isShow = !0;
            var A = this.$bar, E = this.$textContainer;
            E.append(A), (0, d.default)() - this.time > 100 && b <= 1 && (A.css("width", b * 100 + "%"), this.time = (0, d.default)());
            var m = this.timeoutId;
            m && clearTimeout(m), this.timeoutId = (0, f.default)(function() {
              h.hide();
            }, 500);
          }
        }, D.prototype.hide = function() {
          var b = this.$bar;
          b.remove(), this.isShow = !1, this.time = 0, this.timeoutId = 0;
        }, D;
      }();
      o.default = x;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.ListType = void 0;
      var d = t(2), f = d.__importDefault(t(3)), g = d.__importDefault(t(24)), C = t(47), x = d.__importStar(t(371)), D;
      (function(h) {
        h.OrderedList = "OL", h.UnorderedList = "UL";
      })(D = o.ListType || (o.ListType = {}));
      var b = function(h) {
        d.__extends(A, h);
        function A(E) {
          var m = this, S = f.default(`<div class="w-e-menu" data-title="\u5E8F\u5217">
                <i class="w-e-icon-list2"></i>
            </div>`), w = { width: 130, title: "\u5E8F\u5217", type: "list", list: [{ $elem: f.default(`
                        <p>
                            <i class="w-e-icon-list2 w-e-drop-list-item"></i>
                            ` + E.i18next.t("menus.dropListMenu.list.\u65E0\u5E8F\u5217\u8868") + `
                        <p>`), value: D.UnorderedList }, { $elem: f.default(`<p>
                            <i class="w-e-icon-list-numbered w-e-drop-list-item"></i>
                            ` + E.i18next.t("menus.dropListMenu.list.\u6709\u5E8F\u5217\u8868") + `
                        <p>`), value: D.OrderedList }], clickHandler: function(T) {
            m.command(T);
          } };
          return m = h.call(this, S, E, w) || this, m;
        }
        return A.prototype.command = function(E) {
          var m = this.editor, S = m.selection.getSelectionContainerElem();
          S !== void 0 && (this.handleSelectionRangeNodes(E), this.tryChangeActive());
        }, A.prototype.validator = function(E, m, S) {
          return !(!E.length || !m.length || S.equal(E) || S.equal(m));
        }, A.prototype.handleSelectionRangeNodes = function(E) {
          var m = this.editor, S = m.selection, w = E.toLowerCase(), p = S.getSelectionContainerElem(), T = S.getSelectionStartElem().getNodeTop(m), M = S.getSelectionEndElem().getNodeTop(m);
          if (!!this.validator(T, M, m.$textElem)) {
            var N = S.getRange(), U = N == null ? void 0 : N.collapsed;
            m.$textElem.equal(p) || (p = p.getNodeTop(m));
            var F = { editor: m, listType: E, listTarget: w, $selectionElem: p, $startElem: T, $endElem: M }, B;
            this.isOrderElem(p) ? B = x.ClassType.Wrap : this.isOrderElem(T) && this.isOrderElem(M) ? B = x.ClassType.Join : this.isOrderElem(T) ? B = x.ClassType.StartJoin : this.isOrderElem(M) ? B = x.ClassType.EndJoin : B = x.ClassType.Other;
            var P = new x.default(x.createListHandle(B, F, N));
            C.updateRange(m, P.getSelectionRangeElem(), !!U);
          }
        }, A.prototype.isOrderElem = function(E) {
          var m = E.getNodeName();
          return m === D.OrderedList || m === D.UnorderedList;
        }, A.prototype.tryChangeActive = function() {
        }, A;
      }(g.default);
      o.default = b;
    }, function(l, o, t) {
      l.exports = t(395);
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      function d(f) {
        var g = f.selection.getSelectionContainerElem();
        return g != null && g.length ? !!(g.getNodeName() == "CODE" || g.getNodeName() == "PRE" || g.parent().getNodeName() == "CODE" || g.parent().getNodeName() == "PRE" || /hljs/.test(g.parent().attr("class"))) : !1;
      }
      o.default = d;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(31));
      (0, u.default)(o, "__esModule", { value: !0 }), o.todo = void 0;
      var f = t(2), g = f.__importDefault(t(3)), C = function() {
        function D(b) {
          var h;
          this.template = '<ul class="w-e-todo"><li><span contenteditable="false"><input type="checkbox"></span></li></ul>', this.checked = !1, this.$todo = g.default(this.template), this.$child = (h = b == null ? void 0 : b.childNodes()) === null || h === void 0 ? void 0 : h.clone(!0);
        }
        return D.prototype.init = function() {
          var b = this.$child, h = this.getInputContainer();
          b && b.insertAfter(h);
        }, D.prototype.getInput = function() {
          var b = this.$todo, h = (0, d.default)(b).call(b, "input");
          return h;
        }, D.prototype.getInputContainer = function() {
          var b = this.getInput().parent();
          return b;
        }, D.prototype.getTodo = function() {
          return this.$todo;
        }, D;
      }();
      o.todo = C;
      function x(D) {
        var b = new C(D);
        return b.init(), b;
      }
      o.default = x;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2);
      t(146), t(148), t(152), t(154), t(156), t(158), t(160);
      var f = d.__importDefault(t(87));
      d.__exportStar(t(442), o);
      try {
      } catch {
        throw new Error("\u8BF7\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u4E0B\u8FD0\u884C");
      }
      o.default = f.default;
    }, function(l, o, t) {
      var s = t(143);
      l.exports = s;
    }, function(l, o, t) {
      t(144);
      var s = t(9), u = s.Object, d = l.exports = function(g, C, x) {
        return u.defineProperty(g, C, x);
      };
      u.defineProperty.sham && (d.sham = !0);
    }, function(l, o, t) {
      var s = t(5), u = t(14), d = t(18);
      s({ target: "Object", stat: !0, forced: !u, sham: !u }, { defineProperty: d.f });
    }, function(l, o) {
      var t;
      t = function() {
        return this;
      }();
      try {
        t = t || new Function("return this")();
      } catch {
        (typeof window > "u" ? "undefined" : Pt(window)) === "object" && (t = window);
      }
      l.exports = t;
    }, function(l, o, t) {
      var s = t(20), u = t(147);
      u = u.__esModule ? u.default : u, typeof u == "string" && (u = [[l.i, u, ""]]);
      var d = {};
      d.insert = "head", d.singleton = !1, s(u, d), l.exports = u.locals || {};
    }, function(l, o, t) {
      var s = t(21);
      o = s(!1), o.push([l.i, `.w-e-toolbar,
.w-e-text-container,
.w-e-menu-panel {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: #fff;
  /*\u8868\u60C5\u83DC\u5355\u6837\u5F0F*/
  /*\u5206\u5272\u7EBF\u6837\u5F0F*/
}
.w-e-toolbar h1,
.w-e-text-container h1,
.w-e-menu-panel h1 {
  font-size: 32px !important;
}
.w-e-toolbar h2,
.w-e-text-container h2,
.w-e-menu-panel h2 {
  font-size: 24px !important;
}
.w-e-toolbar h3,
.w-e-text-container h3,
.w-e-menu-panel h3 {
  font-size: 18.72px !important;
}
.w-e-toolbar h4,
.w-e-text-container h4,
.w-e-menu-panel h4 {
  font-size: 16px !important;
}
.w-e-toolbar h5,
.w-e-text-container h5,
.w-e-menu-panel h5 {
  font-size: 13.28px !important;
}
.w-e-toolbar p,
.w-e-text-container p,
.w-e-menu-panel p {
  font-size: 16px !important;
}
.w-e-toolbar .eleImg,
.w-e-text-container .eleImg,
.w-e-menu-panel .eleImg {
  cursor: pointer;
  display: inline-block;
  font-size: 18px;
  padding: 0 3px;
}
.w-e-toolbar *,
.w-e-text-container *,
.w-e-menu-panel * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.w-e-toolbar hr,
.w-e-text-container hr,
.w-e-menu-panel hr {
  cursor: pointer;
  display: block;
  height: 0px;
  border: 0;
  border-top: 3px solid #ccc;
  margin: 20px 0;
}
.w-e-clear-fix:after {
  content: "";
  display: table;
  clear: both;
}
.w-e-drop-list-item {
  position: relative;
  top: 1px;
  padding-right: 7px;
  color: #333 !important;
}
.w-e-drop-list-tl {
  padding-left: 10px;
  text-align: left;
}
`, ""]), l.exports = o;
    }, function(l, o, t) {
      var s = t(20), u = t(149);
      u = u.__esModule ? u.default : u, typeof u == "string" && (u = [[l.i, u, ""]]);
      var d = {};
      d.insert = "head", d.singleton = !1, s(u, d), l.exports = u.locals || {};
    }, function(l, o, t) {
      var s = t(21), u = t(150), d = t(151);
      o = s(!1);
      var f = u(d);
      o.push([l.i, `@font-face {
  font-family: 'w-e-icon';
  src: url(` + f + `) format('truetype');
  font-weight: normal;
  font-style: normal;
}
[class^="w-e-icon-"],
[class*=" w-e-icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'w-e-icon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.w-e-icon-close:before {
  content: "\\f00d";
}
.w-e-icon-upload2:before {
  content: "\\e9c6";
}
.w-e-icon-trash-o:before {
  content: "\\f014";
}
.w-e-icon-header:before {
  content: "\\f1dc";
}
.w-e-icon-pencil2:before {
  content: "\\e906";
}
.w-e-icon-paint-brush:before {
  content: "\\f1fc";
}
.w-e-icon-image:before {
  content: "\\e90d";
}
.w-e-icon-play:before {
  content: "\\e912";
}
.w-e-icon-location:before {
  content: "\\e947";
}
.w-e-icon-undo:before {
  content: "\\e965";
}
.w-e-icon-redo:before {
  content: "\\e966";
}
.w-e-icon-quotes-left:before {
  content: "\\e977";
}
.w-e-icon-list-numbered:before {
  content: "\\e9b9";
}
.w-e-icon-list2:before {
  content: "\\e9bb";
}
.w-e-icon-link:before {
  content: "\\e9cb";
}
.w-e-icon-happy:before {
  content: "\\e9df";
}
.w-e-icon-bold:before {
  content: "\\ea62";
}
.w-e-icon-underline:before {
  content: "\\ea63";
}
.w-e-icon-italic:before {
  content: "\\ea64";
}
.w-e-icon-strikethrough:before {
  content: "\\ea65";
}
.w-e-icon-table2:before {
  content: "\\ea71";
}
.w-e-icon-paragraph-left:before {
  content: "\\ea77";
}
.w-e-icon-paragraph-center:before {
  content: "\\ea78";
}
.w-e-icon-paragraph-right:before {
  content: "\\ea79";
}
.w-e-icon-paragraph-justify:before {
  content: "\\ea7a";
}
.w-e-icon-terminal:before {
  content: "\\f120";
}
.w-e-icon-page-break:before {
  content: "\\ea68";
}
.w-e-icon-cancel-circle:before {
  content: "\\ea0d";
}
.w-e-icon-font:before {
  content: "\\ea5c";
}
.w-e-icon-text-heigh:before {
  content: "\\ea5f";
}
.w-e-icon-paint-format:before {
  content: "\\e90c";
}
.w-e-icon-indent-increase:before {
  content: "\\ea7b";
}
.w-e-icon-indent-decrease:before {
  content: "\\ea7c";
}
.w-e-icon-row-height:before {
  content: "\\e9be";
}
.w-e-icon-fullscreen_exit:before {
  content: "\\e900";
}
.w-e-icon-fullscreen:before {
  content: "\\e901";
}
.w-e-icon-split-line:before {
  content: "\\ea0b";
}
.w-e-icon-checkbox-checked:before {
  content: "\\ea52";
}
`, ""]), l.exports = o;
    }, function(l, o, t) {
      l.exports = function(s, u) {
        return u || (u = {}), s = s && s.__esModule ? s.default : s, typeof s != "string" ? s : (/^['"].*['"]$/.test(s) && (s = s.slice(1, -1)), u.hash && (s += u.hash), /["'() \t\n]/.test(s) || u.needQuotes ? '"'.concat(s.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : s);
      };
    }, function(l, o, t) {
      t.r(o), o.default = "data:font/woff;base64,d09GRgABAAAAABskAAsAAAAAGtgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIPFWNtYXAAAAFoAAABHAAAARz2mfAgZ2FzcAAAAoQAAAAIAAAACAAAABBnbHlmAAACjAAAFXwAABV8IH7+mGhlYWQAABgIAAAANgAAADYb6gumaGhlYQAAGEAAAAAkAAAAJAkjBWlobXR4AAAYZAAAAKQAAACkmYcEbmxvY2EAABkIAAAAVAAAAFReAmKYbWF4cAAAGVwAAAAgAAAAIAA0ALZuYW1lAAAZfAAAAYYAAAGGmUoJ+3Bvc3QAABsEAAAAIAAAACAAAwAAAAMD7wGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA8fwDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEAQAAAAA8ACAABAAcAAEAIOkB6QbpDekS6UfpZul36bnpu+m+6cbpy+nf6gvqDepS6lzqX+pl6nHqfPAN8BTxIPHc8fz//f//AAAAAAAg6QDpBukM6RLpR+ll6Xfpuem76b7pxunL6d/qC+oN6lLqXOpf6mLqcep38A3wFPEg8dzx/P/9//8AAf/jFwQXABb7FvcWwxamFpYWVRZUFlIWSxZHFjQWCRYIFcQVuxW5FbcVrBWnEBcQEQ8GDksOLAADAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAAEAEEAAQO/A38ABQALABEAFwAAATMVIREzAxEhFSMVATUzESE1ETUhESM1Av/A/sJ+fgE+wP4Cfv7CAT5+Ar9+AT78ggE+fsACvsD+wn7+An7+wsAAAAAABABBAAEDvwN/AAUACwARABcAAAEhESM1IxM1MxEhNQERIRUjFREVMxUhEQKBAT5+wMB+/sL9wAE+wMD+wgN//sLA/X7A/sJ+AcIBPn7A/v7AfgE+AAAAAAIAAP/ABAADwAAEABMAAAE3AScBAy4BJxM3ASMBAyUBNQEHAYCAAcBA/kCfFzsyY4ABgMD+gMACgAGA/oBOAUBAAcBA/kD+nTI7FwERTgGA/oD9gMABgMD+gIAAAgAA/8AEAAOAACkALQAAAREjNTQmIyEiBh0BFBYzITI2PQEzESEVIyIGFREUFjsBMjY1ETQmKwE1ASE1IQQAwCYa/UAaJiYaAsAaJoD9wCANExMNgA0TEw0gAUD9QALAAYABgEAaJiYawBomJhpA/wCAEw3+wA0TEw0BQA0TQAGAQAAABAAAAAAEAAOAABAAIQAtADQAAAE4ATEROAExITgBMRE4ATEhNSEiBhURFBYzITI2NRE0JiMHFAYjIiY1NDYzMhYTITUTATM3A8D8gAOA/IAaJiYaA4AaJiYagDgoKDg4KCg4QP0A4AEAQOADQP0AAwBAJhr9ABomJhoDABom4Cg4OCgoODj9uIABgP7AwAAAAgAAAEAEAANAADgAPAAAASYnLgEnJiMiBw4BBwYHBgcOAQcGFRQXHgEXFhcWFx4BFxYzMjc+ATc2NzY3PgE3NjU0Jy4BJyYnARENAQPVNjg5djw9Pz89PHY5ODYLBwgLAwMDAwsIBws2ODl2PD0/Pz08djk4NgsHCAsDAwMDCwgHC/2rAUD+wAMgCAYGCAICAgIIBgYIKSoqWS0uLy8uLVkqKikIBgYIAgICAggGBggpKipZLS4vLy4tWSoqKf3gAYDAwAAAAAACAMD/wANAA8AAGwAnAAABIgcOAQcGFRQXHgEXFjEwNz4BNzY1NCcuAScmAyImNTQ2MzIWFRQGAgBCOzpXGRkyMngyMjIyeDIyGRlXOjtCUHBwUFBwcAPAGRlXOjtCeH19zEFBQUHMfX14Qjs6VxkZ/gBwUFBwcFBQcAAAAQAAAAAEAAOAACsAAAEiBw4BBwYHJxEhJz4BMzIXHgEXFhUUBw4BBwYHFzY3PgE3NjU0Jy4BJyYjAgA1MjJcKSkjlgGAkDWLUFBFRmkeHgkJIhgYHlUoICAtDAwoKIteXWoDgAoLJxscI5b+gJA0PB4eaUZFUCsoKUkgIRpgIysrYjY2OWpdXosoKAABAAAAAAQAA4AAKgAAExQXHgEXFhc3JicuAScmNTQ3PgE3NjMyFhcHIREHJicuAScmIyIHDgEHBgAMDC0gIChVHhgYIgkJHh5pRkVQUIs1kAGAliMpKVwyMjVqXV6LKCgBgDk2NmIrKyNgGiEgSSkoK1BFRmkeHjw0kAGAliMcGycLCigoi15dAAAAAAIAAABABAEDAAAmAE0AABMyFx4BFxYVFAcOAQcGIyInLgEnJjUnNDc+ATc2MxUiBgcOAQc+ASEyFx4BFxYVFAcOAQcGIyInLgEnJjUnNDc+ATc2MxUiBgcOAQc+AeEuKSk9ERISET0pKS4uKSk9ERIBIyN6UlFdQHUtCRAHCBICSS4pKT0REhIRPSkpLi4pKT0REgEjI3pSUV1AdS0JEAcIEgIAEhE9KSkuLikpPRESEhE9KSkuIF1RUnojI4AwLggTCgIBEhE9KSkuLikpPRESEhE9KSkuIF1RUnojI4AwLggTCgIBAAAGAED/wAQAA8AAAwAHAAsAEQAdACkAACUhFSERIRUhESEVIScRIzUjNRMVMxUjNTc1IzUzFRURIzUzNSM1MzUjNQGAAoD9gAKA/YACgP2AwEBAQIDAgIDAwICAgICAgAIAgAIAgMD/AMBA/fIyQJI8MkCS7v7AQEBAQEAABgAA/8AEAAPAAAMABwALABcAIwAvAAABIRUhESEVIREhFSEBNDYzMhYVFAYjIiYRNDYzMhYVFAYjIiYRNDYzMhYVFAYjIiYBgAKA/YACgP2AAoD9gP6ASzU1S0s1NUtLNTVLSzU1S0s1NUtLNTVLA4CA/wCA/wCAA0A1S0s1NUtL/rU1S0s1NUtL/rU1S0s1NUtLAAUAAABABWADAAADAAcACwAOABEAABMhFSEVIRUhFSEVIQEXNzUnBwADgPyAA4D8gAOA/IAD4MDAwMADAMBAwEDAAUDAwEDAwAAAAAADAAAAAAQAA6AAAwANABQAADchFSElFSE1EyEVITUhJQkBIxEjEQAEAPwABAD8AIABAAEAAQD9YAEgASDggEBAwEBAAQCAgMABIP7g/wABAAAAAAACAB7/zAPiA7QAMwBkAAABIiYnJicmNDc2PwE+ATMyFhcWFxYUBwYPAQYiJyY0PwE2NCcuASMiBg8BBhQXFhQHDgEjAyImJyYnJjQ3Nj8BNjIXFhQPAQYUFx4BMzI2PwE2NCcmNDc2MhcWFxYUBwYPAQ4BIwG4ChMIIxISEhIjwCNZMTFZIyMSEhISI1gPLA8PD1gpKRQzHBwzFMApKQ8PCBMKuDFZIyMSEhISI1gPLA8PD1gpKRQzHBwzFMApKQ8PDysQIxISEhIjwCNZMQFECAckLS1eLS0kwCIlJSIkLS1eLS0kVxAQDysPWCl0KRQVFRTAKXQpDysQBwj+iCUiJC0tXi0tJFcQEA8rD1gpdCkUFRUUwCl0KQ8rEA8PJC0tXi0tJMAiJQAAAAAFAAD/wAQAA8AAGwA3AFMAXwBrAAAFMjc+ATc2NTQnLgEnJiMiBw4BBwYVFBceARcWEzIXHgEXFhUUBw4BBwYjIicuAScmNTQ3PgE3NhMyNz4BNzY3BgcOAQcGIyInLgEnJicWFx4BFxYnNDYzMhYVFAYjIiYlNDYzMhYVFAYjIiYCAGpdXosoKCgoi15dampdXosoKCgoi15dalZMTHEgISEgcUxMVlZMTHEgISEgcUxMVisrKlEmJiMFHBtWODc/Pzc4VhscBSMmJlEqK9UlGxslJRsbJQGAJRsbJSUbGyVAKCiLXl1qal1eiygoKCiLXl1qal1eiygoA6AhIHFMTFZWTExxICEhIHFMTFZWTExxICH+CQYGFRAQFEM6OlYYGRkYVjo6QxQQEBUGBvcoODgoKDg4KCg4OCgoODgAAAEAAAFABAACQAAPAAATFRQWMyEyNj0BNCYjISIGABMNA8ANExMN/EANEwIgwA0TEw3ADRMTAAAAAwAA/8AEAAPAABsANwBDAAABIgcOAQcGFRQXHgEXFjMyNz4BNzY1NCcuAScmAyInLgEnJjU0Nz4BNzYzMhceARcWFRQHDgEHBhMHJwcXBxc3FzcnNwIAal1eiygoKCiLXl1qal1eiygoKCiLXl1qVkxMcSAhISBxTExWVkxMcSAhISBxTExKoKBgoKBgoKBgoKADwCgoi15dampdXosoKCgoi15dampdXosoKPxgISBxTExWVkxMcSAhISBxTExWVkxMcSAhAqCgoGCgoGCgoGCgoAACAAD/wAQAA8AADwAVAAABISIGFREUFjMhMjY1ETQmASc3FwEXA4D9ADVLSzUDADVLS/4L7VqTATNaA8BLNf0ANUtLNQMANUv85e5akgEyWgAAAAABAGX/wAObA8AAKQAAASImIyIHDgEHBhUUFjMuATU0NjcwBwYCBwYHFSETMzcjNx4BMzI2Nw4BAyBEaEZxU1RtGhtJSAYNZUoQEEs8PFkBPWzGLNc0LVUmLlAYHT0DsBAeHWE+P0FNOwsmN5lvA31+/sWPkCMZAgCA9gkPN2sJBwAAAAACAAAAAAQAA4AACQAXAAAlMwcnMxEjNxcjJREnIxEzFSE1MxEjBxEDgICgoICAoKCA/wBAwID+gIDAQMDAwAIAwMDA/wCA/UBAQALAgAEAAAMAwAAAA0ADgAAWAB8AKAAAAT4BNTQnLgEnJiMhESEyNz4BNzY1NCYBMzIWFRQGKwETIxEzMhYVFAYCxBwgFBRGLi81/sABgDUvLkYUFET+hGUqPDwpZp+fnyw+PgHbIlQvNS8uRhQU/IAUFEYuLzVGdAFGSzU1S/6AAQBLNTVLAAAAAAIAwAAAA0ADgAAfACMAAAEzERQHDgEHBiMiJy4BJyY1ETMRFBYXHgEzMjY3PgE1ASEVIQLAgBkZVzo7QkI7OlcZGYAbGBxJKChJHBgb/gACgP2AA4D+YDw0NU4WFxcWTjU0PAGg/mAeOBcYGxsYFzge/qCAAAAAAAEAgAAAA4ADgAALAAABFSMBMxUhNTMBIzUDgID+wID+QIABQIADgED9AEBAAwBAAAEAAAAABAADgAA9AAABFSMeARUUBgcOASMiJicuATUzFBYzMjY1NCYjITUhLgEnLgE1NDY3PgEzMhYXHgEVIzQmIyIGFRQWMzIWFwQA6xUWNTAscT4+cSwwNYByTk5yck7+AAEsAgQBMDU1MCxxPj5xLDA1gHJOTnJyTjtuKwHAQB1BIjViJCEkJCEkYjU0TEw0NExAAQMBJGI1NWIkISQkISRiNTRMTDQ0TCEfAAAACgAAAAAEAAOAAAMABwALAA8AEwAXABsAHwAjACcAABMRIREBNSEVHQEhNQEVITUjFSE1ESEVISUhFSERNSEVASEVISE1IRUABAD9gAEA/wABAP8AQP8AAQD/AAKAAQD/AAEA/IABAP8AAoABAAOA/IADgP3AwMBAwMACAMDAwMD/AMDAwAEAwMD+wMDAwAAABQAAAAAEAAOAAAMABwALAA8AEwAAEyEVIRUhFSERIRUhESEVIREhFSEABAD8AAKA/YACgP2ABAD8AAQA/AADgIBAgP8AgAFAgP8AgAAAAAAFAAAAAAQAA4AAAwAHAAsADwATAAATIRUhFyEVIREhFSEDIRUhESEVIQAEAPwAwAKA/YACgP2AwAQA/AAEAPwAA4CAQID/AIABQID/AIAAAAUAAAAABAADgAADAAcACwAPABMAABMhFSEFIRUhESEVIQEhFSERIRUhAAQA/AABgAKA/YACgP2A/oAEAPwABAD8AAOAgECA/wCAAUCA/wCAAAAAAAUAAAAABAADgAADAAcACwAPABMAABMhFSEVIRUhFSEVIRUhFSEVIRUhAAQA/AAEAPwABAD8AAQA/AAEAPwAA4CAQIBAgECAQIAAAAAGAAAAAAQAA4AAAwAHAAsADwATABYAABMhFSEFIRUhFSEVIRUhFSEFIRUhGQEFAAQA/AABgAKA/YACgP2AAoD9gP6ABAD8AAEAA4CAQIBAgECAQIABAAGAwAAAAAYAAAAABAADgAADAAcACwAPABMAFgAAEyEVIQUhFSEVIRUhFSEVIQUhFSEBESUABAD8AAGAAoD9gAKA/YACgP2A/oAEAPwAAQD/AAOAgECAQIBAgECAAoD+gMAAAQA/AD8C5gLmACwAACUUDwEGIyIvAQcGIyIvASY1ND8BJyY1ND8BNjMyHwE3NjMyHwEWFRQPARcWFQLmEE4QFxcQqKgQFxYQThAQqKgQEE4QFhcQqKgQFxcQThAQqKgQwxYQThAQqKgQEE4QFhcQqKgQFxcQThAQqKgQEE4QFxcQqKgQFwAAAAYAAAAAAyUDbgAUACgAPABNAFUAggAAAREUBwYrASInJjURNDc2OwEyFxYVMxEUBwYrASInJjURNDc2OwEyFxYXERQHBisBIicmNRE0NzY7ATIXFhMRIREUFxYXFjMhMjc2NzY1ASEnJicjBgcFFRQHBisBERQHBiMhIicmNREjIicmPQE0NzY7ATc2NzY7ATIXFh8BMzIXFhUBJQYFCCQIBQYGBQgkCAUGkgUFCCUIBQUFBQglCAUFkgUFCCUIBQUFBQglCAUFSf4ABAQFBAIB2wIEBAQE/oABABsEBrUGBAH3BgUINxobJv4lJhsbNwgFBQUFCLEoCBcWF7cXFhYJKLAIBQYCEv63CAUFBQUIAUkIBQYGBQj+twgFBQUFCAFJCAUGBgUI/rcIBQUFBQgBSQgFBgYF/lsCHf3jDQsKBQUFBQoLDQJmQwUCAgVVJAgGBf3jMCIjISIvAiAFBggkCAUFYBUPDw8PFWAFBQgAAgAHAEkDtwKvABoALgAACQEGIyIvASY1ND8BJyY1ND8BNjMyFwEWFRQHARUUBwYjISInJj0BNDc2MyEyFxYBTv72BgcIBR0GBuHhBgYdBQgHBgEKBgYCaQUFCP3bCAUFBQUIAiUIBQUBhf72BgYcBggHBuDhBgcHBh0FBf71BQgHBv77JQgFBQUFCCUIBQUFBQAAAAEAIwAAA90DbgCzAAAlIicmIyIHBiMiJyY1NDc2NzY3Njc2PQE0JyYjISIHBh0BFBcWFxYzFhcWFRQHBiMiJyYjIgcGIyInJjU0NzY3Njc2NzY9ARE0NTQ1NCc0JyYnJicmJyYnJiMiJyY1NDc2MzIXFjMyNzYzMhcWFRQHBiMGBwYHBh0BFBcWMyEyNzY9ATQnJicmJyY1NDc2MzIXFjMyNzYzMhcWFRQHBgciBwYHBhURFBcWFxYXMhcWFRQHBiMDwRkzMhoZMjMZDQgHCQoNDBEQChIBBxX+fhYHARUJEhMODgwLBwcOGzU1GhgxMRgNBwcJCQsMEA8JEgECAQIDBAQFCBIRDQ0KCwcHDho1NRoYMDEYDgcHCQoMDRAQCBQBBw8BkA4HARQKFxcPDgcHDhkzMhkZMTEZDgcHCgoNDRARCBQUCRERDg0KCwcHDgACAgICDAsPEQkJAQEDAwUMROAMBQMDBQzUUQ0GAQIBCAgSDwwNAgICAgwMDhEICQECAwMFDUUhAdACDQ0ICA4OCgoLCwcHAwYBAQgIEg8MDQICAgINDA8RCAgBAgEGDFC2DAcBAQcMtlAMBgEBBgcWDwwNAgICAg0MDxEICAEBAgYNT/3mRAwGAgIBCQgRDwwNAAACAAD/twP/A7cAEwA5AAABMhcWFRQHAgcGIyInJjU0NwE2MwEWFxYfARYHBiMiJyYnJicmNRYXFhcWFxYzMjc2NzY3Njc2NzY3A5soHh4avkw3RUg0NDUBbSEp/fgXJicvAQJMTHtHNjYhIRARBBMUEBASEQkXCA8SExUVHR0eHikDtxsaKCQz/plGNDU0SUkwAUsf/bErHx8NKHpNTBobLi86OkQDDw4LCwoKFiUbGhERCgsEBAIAAQAAAAAAAIWwaoFfDzz1AAsEAAAAAADbteOZAAAAANu145kAAP+3BWADwAAAAAgAAgAAAAAAAAABAAADwP/AAAAFgAAA//8FYAABAAAAAAAAAAAAAAAAAAAAKQQAAAAAAAAAAAAAAAIAAAAEAABBBAAAQQQAAAAEAAAABAAAAAQAAAAEAADABAAAAAQAAAAEAAAABAAAQAQAAAAFgAAABAAAAAQAAB4EAAAABAAAAAQAAAAEAAAABAAAZQQAAAAEAADABAAAwAQAAIAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAMlAD8DJQAAA74ABwQAACMD/wAAAAAAAAAKABQAHgBKAHYApADmAS4BkgHQAhYCXALQAw4DWAN+A6gEPgTeBPoFZAWOBdAF+AY6BnYGjgbmBy4HVgd+B6gHzgf8CCoIbgkmCXAKYgq+AAEAAAApALQACgAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAHAAAAAQAAAAAAAgAHAGAAAQAAAAAAAwAHADYAAQAAAAAABAAHAHUAAQAAAAAABQALABUAAQAAAAAABgAHAEsAAQAAAAAACgAaAIoAAwABBAkAAQAOAAcAAwABBAkAAgAOAGcAAwABBAkAAwAOAD0AAwABBAkABAAOAHwAAwABBAkABQAWACAAAwABBAkABgAOAFIAAwABBAkACgA0AKRpY29tb29uAGkAYwBvAG0AbwBvAG5WZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBpY29tb29uAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG5SZWd1bGFyAFIAZQBnAHUAbABhAHJpY29tb29uAGkAYwBvAG0AbwBvAG5Gb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
    }, function(l, o, t) {
      var s = t(20), u = t(153);
      u = u.__esModule ? u.default : u, typeof u == "string" && (u = [[l.i, u, ""]]);
      var d = {};
      d.insert = "head", d.singleton = !1, s(u, d), l.exports = u.locals || {};
    }, function(l, o, t) {
      var s = t(21);
      o = s(!1), o.push([l.i, `.w-e-toolbar {
  display: flex;
  padding: 0 6px;
  flex-wrap: wrap;
  position: relative;
  /* \u5355\u4E2A\u83DC\u5355 */
}
.w-e-toolbar .w-e-menu {
  position: relative;
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
}
.w-e-toolbar .w-e-menu i {
  color: #999;
}
.w-e-toolbar .w-e-menu:hover {
  background-color: #F6F6F6;
}
.w-e-toolbar .w-e-menu:hover i {
  color: #333;
}
.w-e-toolbar .w-e-active i {
  color: #1e88e5;
}
.w-e-toolbar .w-e-active:hover i {
  color: #1e88e5;
}
.w-e-menu-tooltip {
  position: absolute;
  display: flex;
  color: #f1f1f1;
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 4px 5px 6px;
  justify-content: center;
  align-items: center;
}
.w-e-menu-tooltip-up::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0.73);
}
.w-e-menu-tooltip-down::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0.73);
}
.w-e-menu-tooltip-item-wrapper {
  font-size: 14px;
  margin: 0 5px;
}
`, ""]), l.exports = o;
    }, function(l, o, t) {
      var s = t(20), u = t(155);
      u = u.__esModule ? u.default : u, typeof u == "string" && (u = [[l.i, u, ""]]);
      var d = {};
      d.insert = "head", d.singleton = !1, s(u, d), l.exports = u.locals || {};
    }, function(l, o, t) {
      var s = t(21);
      o = s(!1), o.push([l.i, `.w-e-text-container {
  position: relative;
  height: 100%;
}
.w-e-text-container .w-e-progress {
  position: absolute;
  background-color: #1e88e5;
  top: 0;
  left: 0;
  height: 1px;
}
.w-e-text-container .placeholder {
  color: #D4D4D4;
  position: absolute;
  font-size: 11pt;
  line-height: 22px;
  left: 10px;
  top: 10px;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  z-index: -1;
}
.w-e-text {
  padding: 0 10px;
  overflow-y: auto;
}
.w-e-text p,
.w-e-text h1,
.w-e-text h2,
.w-e-text h3,
.w-e-text h4,
.w-e-text h5,
.w-e-text table,
.w-e-text pre {
  margin: 10px 0;
  line-height: 1.5;
}
.w-e-text ul,
.w-e-text ol {
  margin: 10px 0 10px 20px;
}
.w-e-text blockquote {
  display: block;
  border-left: 8px solid #d0e5f2;
  padding: 5px 10px;
  margin: 10px 0;
  line-height: 1.4;
  font-size: 100%;
  background-color: #f1f1f1;
}
.w-e-text code {
  display: inline-block;
  background-color: #f1f1f1;
  border-radius: 3px;
  padding: 3px 5px;
  margin: 0 3px;
}
.w-e-text pre code {
  display: block;
}
.w-e-text table {
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
}
.w-e-text table td,
.w-e-text table th {
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  padding: 3px 5px;
  min-height: 30px;
  height: 30px;
}
.w-e-text table th {
  border-bottom: 2px solid #ccc;
  text-align: center;
  background-color: #f1f1f1;
}
.w-e-text:focus {
  outline: none;
}
.w-e-text img {
  cursor: pointer;
}
.w-e-text img:hover {
  box-shadow: 0 0 5px #333;
}
.w-e-text .w-e-todo {
  margin: 0 0 0 20px;
}
.w-e-text .w-e-todo li {
  list-style: none;
  font-size: 1em;
}
.w-e-text .w-e-todo li span:nth-child(1) {
  position: relative;
  left: -18px;
}
.w-e-text .w-e-todo li span:nth-child(1) input {
  position: absolute;
  margin-right: 3px;
}
.w-e-text .w-e-todo li span:nth-child(1) input[type=checkbox] {
  top: 50%;
  margin-top: -6px;
}
.w-e-tooltip {
  position: absolute;
  display: flex;
  color: #f1f1f1;
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 4px 5px 6px;
  justify-content: center;
  align-items: center;
}
.w-e-tooltip-up::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0.73);
}
.w-e-tooltip-down::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0.73);
}
.w-e-tooltip-item-wrapper {
  cursor: pointer;
  font-size: 14px;
  margin: 0 5px;
}
.w-e-tooltip-item-wrapper:hover {
  color: #ccc;
  text-decoration: underline;
}
`, ""]), l.exports = o;
    }, function(l, o, t) {
      var s = t(20), u = t(157);
      u = u.__esModule ? u.default : u, typeof u == "string" && (u = [[l.i, u, ""]]);
      var d = {};
      d.insert = "head", d.singleton = !1, s(u, d), l.exports = u.locals || {};
    }, function(l, o, t) {
      var s = t(21);
      o = s(!1), o.push([l.i, `.w-e-menu .w-e-panel-container {
  position: absolute;
  top: 0;
  left: 50%;
  border: 1px solid #ccc;
  border-top: 0;
  box-shadow: 1px 1px 2px #ccc;
  color: #333;
  background-color: #fff;
  text-align: left;
  /* \u4E3A emotion panel \u5B9A\u5236\u7684\u6837\u5F0F */
  /* \u4E0A\u4F20\u56FE\u7247\u3001\u4E0A\u4F20\u89C6\u9891\u7684 panel \u5B9A\u5236\u6837\u5F0F */
}
.w-e-menu .w-e-panel-container .w-e-panel-close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 5px;
  margin: 2px 5px 0 0;
  cursor: pointer;
  color: #999;
}
.w-e-menu .w-e-panel-container .w-e-panel-close:hover {
  color: #333;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-title {
  list-style: none;
  display: flex;
  font-size: 14px;
  margin: 2px 10px 0 10px;
  border-bottom: 1px solid #f1f1f1;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-title .w-e-item {
  padding: 3px 5px;
  color: #999;
  cursor: pointer;
  margin: 0 3px;
  position: relative;
  top: 1px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-title .w-e-active {
  color: #333;
  border-bottom: 1px solid #333;
  cursor: default;
  font-weight: 700;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content {
  padding: 10px 15px 10px 15px;
  font-size: 16px;
  /* \u8F93\u5165\u6846\u7684\u6837\u5F0F */
  /* \u6309\u94AE\u7684\u6837\u5F0F */
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input:focus,
.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea:focus,
.w-e-menu .w-e-panel-container .w-e-panel-tab-content button:focus {
  outline: none;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea {
  width: 100%;
  border: 1px solid #ccc;
  padding: 5px;
  margin-top: 10px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea:focus {
  border-color: #1e88e5;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text] {
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  height: 20px;
  color: #333;
  text-align: left;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text].small {
  width: 30px;
  text-align: center;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text].block {
  display: block;
  width: 100%;
  margin: 10px 0;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text]:focus {
  border-bottom: 2px solid #1e88e5;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button {
  font-size: 14px;
  color: #1e88e5;
  border: none;
  padding: 5px 10px;
  background-color: #fff;
  cursor: pointer;
  border-radius: 3px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.left {
  float: left;
  margin-right: 10px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.right {
  float: right;
  margin-left: 10px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.gray {
  color: #999;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.red {
  color: #c24f4a;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button:hover {
  background-color: #f1f1f1;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container:after {
  content: "";
  display: table;
  clear: both;
}
.w-e-menu .w-e-panel-container .w-e-emoticon-container .w-e-item {
  cursor: pointer;
  font-size: 18px;
  padding: 0 3px;
  display: inline-block;
}
.w-e-menu .w-e-panel-container .w-e-up-img-container,
.w-e-menu .w-e-panel-container .w-e-up-video-container {
  text-align: center;
}
.w-e-menu .w-e-panel-container .w-e-up-img-container .w-e-up-btn,
.w-e-menu .w-e-panel-container .w-e-up-video-container .w-e-up-btn {
  display: inline-block;
  color: #999;
  cursor: pointer;
  font-size: 60px;
  line-height: 1;
}
.w-e-menu .w-e-panel-container .w-e-up-img-container .w-e-up-btn:hover,
.w-e-menu .w-e-panel-container .w-e-up-video-container .w-e-up-btn:hover {
  color: #333;
}
`, ""]), l.exports = o;
    }, function(l, o, t) {
      var s = t(20), u = t(159);
      u = u.__esModule ? u.default : u, typeof u == "string" && (u = [[l.i, u, ""]]);
      var d = {};
      d.insert = "head", d.singleton = !1, s(u, d), l.exports = u.locals || {};
    }, function(l, o, t) {
      var s = t(21);
      o = s(!1), o.push([l.i, `.w-e-toolbar .w-e-droplist {
  position: absolute;
  left: 0;
  top: 0;
  background-color: #fff;
  border: 1px solid #f1f1f1;
  border-right-color: #ccc;
  border-bottom-color: #ccc;
}
.w-e-toolbar .w-e-droplist .w-e-dp-title {
  text-align: center;
  color: #999;
  line-height: 2;
  border-bottom: 1px solid #f1f1f1;
  font-size: 13px;
}
.w-e-toolbar .w-e-droplist ul.w-e-list {
  list-style: none;
  line-height: 1;
}
.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item {
  color: #333;
  padding: 5px 0;
}
.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item:hover {
  background-color: #f1f1f1;
}
.w-e-toolbar .w-e-droplist ul.w-e-block {
  list-style: none;
  text-align: left;
  padding: 5px;
}
.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item {
  display: inline-block;
  padding: 3px 5px;
}
.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item:hover {
  background-color: #f1f1f1;
}
`, ""]), l.exports = o;
    }, function(l, o, t) {
      var s = t(0), u = s(t(161));
      Element.prototype.matches || (Element.prototype.matches = function(d) {
        var f = this.ownerDocument.querySelectorAll(d), g = f.length;
        for (g; g >= 0 && f.item(g) !== this; g--)
          ;
        return g > -1;
      }), u.default || (window.Promise = u.default);
    }, function(l, o, t) {
      l.exports = t(162);
    }, function(l, o, t) {
      var s = t(163);
      l.exports = s;
    }, function(l, o, t) {
      t(61), t(50), t(54), t(175), t(178), t(179);
      var s = t(9);
      l.exports = s.Promise;
    }, function(l, o, t) {
      var s = t(62), u = t(49), d = function(g) {
        return function(C, x) {
          var D = String(u(C)), b = s(x), h = D.length, A, E;
          return b < 0 || b >= h ? g ? "" : void 0 : (A = D.charCodeAt(b), A < 55296 || A > 56319 || b + 1 === h || (E = D.charCodeAt(b + 1)) < 56320 || E > 57343 ? g ? D.charAt(b) : A : g ? D.slice(b, b + 2) : (A - 55296 << 10) + (E - 56320) + 65536);
        };
      };
      l.exports = {
        codeAt: d(!1),
        charAt: d(!0)
      };
    }, function(l, o, t) {
      var s = t(8), u = t(101), d = s.WeakMap;
      l.exports = typeof d == "function" && /native code/.test(u(d));
    }, function(l, o, t) {
      var s = t(8), u = t(19);
      l.exports = function(d, f) {
        try {
          u(s, d, f);
        } catch {
          s[d] = f;
        }
        return f;
      };
    }, function(l, o, t) {
      var s = t(103).IteratorPrototype, u = t(77), d = t(48), f = t(36), g = t(43), C = function() {
        return this;
      };
      l.exports = function(x, D, b) {
        var h = D + " Iterator";
        return x.prototype = u(s, { next: d(1, b) }), f(x, h, !1, !0), g[h] = C, x;
      };
    }, function(l, o, t) {
      var s = t(11);
      l.exports = !s(function() {
        function u() {
        }
        return u.prototype.constructor = null, Object.getPrototypeOf(new u()) !== u.prototype;
      });
    }, function(l, o, t) {
      var s = t(14), u = t(18), d = t(25), f = t(52);
      l.exports = s ? Object.defineProperties : function(C, x) {
        d(C);
        for (var D = f(x), b = D.length, h = 0, A; b > h; )
          u.f(C, A = D[h++], x[A]);
        return C;
      };
    }, function(l, o, t) {
      var s = t(81), u = t(65);
      l.exports = s ? {}.toString : function() {
        return "[object " + u(this) + "]";
      };
    }, function(l, o, t) {
      var s = t(25), u = t(172);
      l.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
        var d = !1, f = {}, g;
        try {
          g = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set, g.call(f, []), d = f instanceof Array;
        } catch {
        }
        return function(x, D) {
          return s(x), u(D), d ? g.call(x, D) : x.__proto__ = D, x;
        };
      }() : void 0);
    }, function(l, o, t) {
      var s = t(13);
      l.exports = function(u) {
        if (!s(u) && u !== null)
          throw TypeError("Can't set " + String(u) + " as a prototype");
        return u;
      };
    }, function(l, o, t) {
      var s = t(28), u = t(82), d = t(43), f = t(41), g = t(75), C = "Array Iterator", x = f.set, D = f.getterFor(C);
      l.exports = g(Array, "Array", function(b, h) {
        x(this, {
          type: C,
          target: s(b),
          index: 0,
          kind: h
        });
      }, function() {
        var b = D(this), h = b.target, A = b.kind, E = b.index++;
        return !h || E >= h.length ? (b.target = void 0, { value: void 0, done: !0 }) : A == "keys" ? { value: E, done: !1 } : A == "values" ? { value: h[E], done: !1 } : { value: [E, h[E]], done: !1 };
      }, "values"), d.Arguments = d.Array, u("keys"), u("values"), u("entries");
    }, function(l, o) {
      l.exports = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 };
    }, function(l, o, t) {
      var s = t(5), u = t(42), d = t(8), f = t(35), g = t(108), C = t(53), x = t(109), D = t(36), b = t(110), h = t(13), A = t(40), E = t(83), m = t(33), S = t(101), w = t(66), p = t(114), T = t(115), M = t(116).set, N = t(176), U = t(118), F = t(177), B = t(85), P = t(119), z = t(41), H = t(100), $ = t(10), I = t(86), Y = $("species"), Q = "Promise", K = z.get, q = z.set, X = z.getterFor(Q), _ = g, le = d.TypeError, Se = d.document, ve = d.process, ce = f("fetch"), ae = B.f, re = ae, se = m(ve) == "process", pe = !!(Se && Se.createEvent && d.dispatchEvent), Pe = "unhandledrejection", be = "rejectionhandled", je = 0, Ft = 1, Nt = 2, ot = 1, Et = 2, Bt, dt, Kt, Ue, Ht = H(Q, function() {
        var We = S(_) !== String(_);
        if (!We && (I === 66 || !se && typeof PromiseRejectionEvent != "function") || u && !_.prototype.finally)
          return !0;
        if (I >= 51 && /native code/.test(_))
          return !1;
        var Ce = _.resolve(1), me = function(oe) {
          oe(function() {
          }, function() {
          });
        }, Oe = Ce.constructor = {};
        return Oe[Y] = me, !(Ce.then(function() {
        }) instanceof me);
      }), Ar = Ht || !p(function(We) {
        _.all(We).catch(function() {
        });
      }), yn = function(Ce) {
        var me;
        return h(Ce) && typeof (me = Ce.then) == "function" ? me : !1;
      }, hn = function(Ce, me, Oe) {
        if (!me.notified) {
          me.notified = !0;
          var Ee = me.reactions;
          N(function() {
            for (var oe = me.value, De = me.state == Ft, ue = 0; Ee.length > ue; ) {
              var Ie = Ee[ue++], ze = De ? Ie.ok : Ie.fail, $e = Ie.resolve, Ge = Ie.reject, at = Ie.domain, Ze, $t, mt;
              try {
                ze ? (De || (me.rejection === Et && xn(Ce, me), me.rejection = ot), ze === !0 ? Ze = oe : (at && at.enter(), Ze = ze(oe), at && (at.exit(), mt = !0)), Ze === Ie.promise ? Ge(le("Promise-chain cycle")) : ($t = yn(Ze)) ? $t.call(Ze, $e, Ge) : $e(Ze)) : Ge(oe);
              } catch (qn) {
                at && !mt && at.exit(), Ge(qn);
              }
            }
            me.reactions = [], me.notified = !1, Oe && !me.rejection && An(Ce, me);
          });
        }
      }, In = function(Ce, me, Oe) {
        var Ee, oe;
        pe ? (Ee = Se.createEvent("Event"), Ee.promise = me, Ee.reason = Oe, Ee.initEvent(Ce, !1, !0), d.dispatchEvent(Ee)) : Ee = { promise: me, reason: Oe }, (oe = d["on" + Ce]) ? oe(Ee) : Ce === Pe && F("Unhandled promise rejection", Oe);
      }, An = function(Ce, me) {
        M.call(d, function() {
          var Oe = me.value, Ee = jt(me), oe;
          if (Ee && (oe = P(function() {
            se ? ve.emit("unhandledRejection", Oe, Ce) : In(Pe, Ce, Oe);
          }), me.rejection = se || jt(me) ? Et : ot, oe.error))
            throw oe.value;
        });
      }, jt = function(Ce) {
        return Ce.rejection !== ot && !Ce.parent;
      }, xn = function(Ce, me) {
        M.call(d, function() {
          se ? ve.emit("rejectionHandled", Ce) : In(be, Ce, me.value);
        });
      }, bt = function(Ce, me, Oe, Ee) {
        return function(oe) {
          Ce(me, Oe, oe, Ee);
        };
      }, Ke = function(Ce, me, Oe, Ee) {
        me.done || (me.done = !0, Ee && (me = Ee), me.value = Oe, me.state = Nt, hn(Ce, me, !0));
      }, Xt = function We(Ce, me, Oe, Ee) {
        if (!me.done) {
          me.done = !0, Ee && (me = Ee);
          try {
            if (Ce === Oe)
              throw le("Promise can't be resolved itself");
            var oe = yn(Oe);
            oe ? N(function() {
              var De = { done: !1 };
              try {
                oe.call(Oe, bt(We, Ce, De, me), bt(Ke, Ce, De, me));
              } catch (ue) {
                Ke(Ce, De, ue, me);
              }
            }) : (me.value = Oe, me.state = Ft, hn(Ce, me, !1));
          } catch (De) {
            Ke(Ce, { done: !1 }, De, me);
          }
        }
      };
      Ht && (_ = function(Ce) {
        E(this, _, Q), A(Ce), Bt.call(this);
        var me = K(this);
        try {
          Ce(bt(Xt, this, me), bt(Ke, this, me));
        } catch (Oe) {
          Ke(this, me, Oe);
        }
      }, Bt = function(Ce) {
        q(this, { type: Q, done: !1, notified: !1, parent: !1, reactions: [], rejection: !1, state: je, value: void 0 });
      }, Bt.prototype = x(_.prototype, {
        then: function(Ce, me) {
          var Oe = X(this), Ee = ae(T(this, _));
          return Ee.ok = typeof Ce == "function" ? Ce : !0, Ee.fail = typeof me == "function" && me, Ee.domain = se ? ve.domain : void 0, Oe.parent = !0, Oe.reactions.push(Ee), Oe.state != je && hn(this, Oe, !1), Ee.promise;
        },
        catch: function(Ce) {
          return this.then(void 0, Ce);
        }
      }), dt = function() {
        var Ce = new Bt(), me = K(Ce);
        this.promise = Ce, this.resolve = bt(Xt, Ce, me), this.reject = bt(Ke, Ce, me);
      }, B.f = ae = function(Ce) {
        return Ce === _ || Ce === Kt ? new dt(Ce) : re(Ce);
      }, !u && typeof g == "function" && (Ue = g.prototype.then, C(g.prototype, "then", function(Ce, me) {
        var Oe = this;
        return new _(function(Ee, oe) {
          Ue.call(Oe, Ee, oe);
        }).then(Ce, me);
      }, { unsafe: !0 }), typeof ce == "function" && s({ global: !0, enumerable: !0, forced: !0 }, {
        fetch: function(Ce) {
          return U(_, ce.apply(d, arguments));
        }
      }))), s({ global: !0, wrap: !0, forced: Ht }, { Promise: _ }), D(_, Q, !1, !0), b(Q), Kt = f(Q), s({ target: Q, stat: !0, forced: Ht }, {
        reject: function(Ce) {
          var me = ae(this);
          return me.reject.call(void 0, Ce), me.promise;
        }
      }), s({ target: Q, stat: !0, forced: u || Ht }, {
        resolve: function(Ce) {
          return U(u && this === Kt ? _ : this, Ce);
        }
      }), s({ target: Q, stat: !0, forced: Ar }, {
        all: function(Ce) {
          var me = this, Oe = ae(me), Ee = Oe.resolve, oe = Oe.reject, De = P(function() {
            var ue = A(me.resolve), Ie = [], ze = 0, $e = 1;
            w(Ce, function(Ge) {
              var at = ze++, Ze = !1;
              Ie.push(void 0), $e++, ue.call(me, Ge).then(function($t) {
                Ze || (Ze = !0, Ie[at] = $t, --$e || Ee(Ie));
              }, oe);
            }), --$e || Ee(Ie);
          });
          return De.error && oe(De.value), Oe.promise;
        },
        race: function(Ce) {
          var me = this, Oe = ae(me), Ee = Oe.reject, oe = P(function() {
            var De = A(me.resolve);
            w(Ce, function(ue) {
              De.call(me, ue).then(Oe.resolve, Ee);
            });
          });
          return oe.error && Ee(oe.value), Oe.promise;
        }
      });
    }, function(l, o, t) {
      var s = t(8), u = t(71).f, d = t(33), f = t(116).set, g = t(117), C = s.MutationObserver || s.WebKitMutationObserver, x = s.process, D = s.Promise, b = d(x) == "process", h = u(s, "queueMicrotask"), A = h && h.value, E, m, S, w, p, T, M, N;
      A || (E = function() {
        var F, B;
        for (b && (F = x.domain) && F.exit(); m; ) {
          B = m.fn, m = m.next;
          try {
            B();
          } catch (P) {
            throw m ? w() : S = void 0, P;
          }
        }
        S = void 0, F && F.enter();
      }, b ? w = function() {
        x.nextTick(E);
      } : C && !g ? (p = !0, T = document.createTextNode(""), new C(E).observe(T, { characterData: !0 }), w = function() {
        T.data = p = !p;
      }) : D && D.resolve ? (M = D.resolve(void 0), N = M.then, w = function() {
        N.call(M, E);
      }) : w = function() {
        f.call(s, E);
      }), l.exports = A || function(U) {
        var F = { fn: U, next: void 0 };
        S && (S.next = F), m || (m = F, w()), S = F;
      };
    }, function(l, o, t) {
      var s = t(8);
      l.exports = function(u, d) {
        var f = s.console;
        f && f.error && (arguments.length === 1 ? f.error(u) : f.error(u, d));
      };
    }, function(l, o, t) {
      var s = t(5), u = t(40), d = t(85), f = t(119), g = t(66);
      s({ target: "Promise", stat: !0 }, { allSettled: function(x) {
        var D = this, b = d.f(D), h = b.resolve, A = b.reject, E = f(function() {
          var m = u(D.resolve), S = [], w = 0, p = 1;
          g(x, function(T) {
            var M = w++, N = !1;
            S.push(void 0), p++, m.call(D, T).then(function(U) {
              N || (N = !0, S[M] = { status: "fulfilled", value: U }, --p || h(S));
            }, function(U) {
              N || (N = !0, S[M] = { status: "rejected", reason: U }, --p || h(S));
            });
          }), --p || h(S);
        });
        return E.error && A(E.value), b.promise;
      } });
    }, function(l, o, t) {
      var s = t(5), u = t(42), d = t(108), f = t(11), g = t(35), C = t(115), x = t(118), D = t(53), b = !!d && f(function() {
        d.prototype.finally.call({ then: function() {
        } }, function() {
        });
      });
      s({ target: "Promise", proto: !0, real: !0, forced: b }, { finally: function(A) {
        var E = C(this, g("Promise")), m = typeof A == "function";
        return this.then(m ? function(S) {
          return x(E, A()).then(function() {
            return S;
          });
        } : A, m ? function(S) {
          return x(E, A()).then(function() {
            throw S;
          });
        } : A);
      } }), !u && typeof d == "function" && !d.prototype.finally && D(d.prototype, "finally", g("Promise").prototype.finally);
    }, function(l, o, t) {
      t(54);
      var s = t(181), u = t(65), d = Array.prototype, f = { DOMTokenList: !0, NodeList: !0 };
      l.exports = function(g) {
        var C = g.forEach;
        return g === d || g instanceof Array && C === d.forEach || f.hasOwnProperty(u(g)) ? s : C;
      };
    }, function(l, o, t) {
      var s = t(182);
      l.exports = s;
    }, function(l, o, t) {
      t(183);
      var s = t(15);
      l.exports = s("Array").forEach;
    }, function(l, o, t) {
      var s = t(5), u = t(184);
      s({ target: "Array", proto: !0, forced: [].forEach != u }, { forEach: u });
    }, function(l, o, t) {
      var s = t(30).forEach, u = t(67), d = t(22), f = u("forEach"), g = d("forEach");
      l.exports = !f || !g ? function(x) {
        return s(this, x, arguments.length > 1 ? arguments[1] : void 0);
      } : [].forEach;
    }, function(l, o, t) {
      var s = t(186);
      l.exports = s;
    }, function(l, o, t) {
      t(187);
      var s = t(9);
      l.exports = s.Array.isArray;
    }, function(l, o, t) {
      var s = t(5), u = t(55);
      s({ target: "Array", stat: !0 }, { isArray: u });
    }, function(l, o, t) {
      var s = t(189);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(190), u = Array.prototype;
      l.exports = function(d) {
        var f = d.map;
        return d === u || d instanceof Array && f === u.map ? s : f;
      };
    }, function(l, o, t) {
      t(191);
      var s = t(15);
      l.exports = s("Array").map;
    }, function(l, o, t) {
      var s = t(5), u = t(30).map, d = t(56), f = t(22), g = d("map"), C = f("map");
      s({ target: "Array", proto: !0, forced: !g || !C }, { map: function(D) {
        return u(this, D, arguments.length > 1 ? arguments[1] : void 0);
      } });
    }, function(l, o, t) {
      var s = t(193);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(194), u = String.prototype;
      l.exports = function(d) {
        var f = d.trim;
        return typeof d == "string" || d === u || d instanceof String && f === u.trim ? s : f;
      };
    }, function(l, o, t) {
      t(195);
      var s = t(15);
      l.exports = s("String").trim;
    }, function(l, o, t) {
      var s = t(5), u = t(90).trim, d = t(196);
      s({ target: "String", proto: !0, forced: d("trim") }, { trim: function() {
        return u(this);
      } });
    }, function(l, o, t) {
      var s = t(11), u = t(68), d = "\u200B\x85\u180E";
      l.exports = function(f) {
        return s(function() {
          return !!u[f]() || d[f]() != d || u[f].name !== f;
        });
      };
    }, function(l, o, t) {
      var s = t(198);
      l.exports = s;
    }, function(l, o, t) {
      t(199), t(61), t(50), t(54);
      var s = t(9);
      l.exports = s.Map;
    }, function(l, o, t) {
      var s = t(121), u = t(123);
      l.exports = s("Map", function(d) {
        return function() {
          return d(this, arguments.length ? arguments[0] : void 0);
        };
      }, u);
    }, function(l, o, t) {
      var s = t(11);
      l.exports = !s(function() {
        return Object.isExtensible(Object.preventExtensions({}));
      });
    }, function(l, o, t) {
      var s = t(202);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(203), u = Array.prototype;
      l.exports = function(d) {
        var f = d.indexOf;
        return d === u || d instanceof Array && f === u.indexOf ? s : f;
      };
    }, function(l, o, t) {
      t(204);
      var s = t(15);
      l.exports = s("Array").indexOf;
    }, function(l, o, t) {
      var s = t(5), u = t(78).indexOf, d = t(67), f = t(22), g = [].indexOf, C = !!g && 1 / [1].indexOf(1, -0) < 0, x = d("indexOf"), D = f("indexOf", { ACCESSORS: !0, 1: 0 });
      s({ target: "Array", proto: !0, forced: C || !x || !D }, { indexOf: function(h) {
        return C ? g.apply(this, arguments) || 0 : u(this, h, arguments.length > 1 ? arguments[1] : void 0);
      } });
    }, function(l, o, t) {
      var s = t(206);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(207), u = Array.prototype;
      l.exports = function(d) {
        var f = d.splice;
        return d === u || d instanceof Array && f === u.splice ? s : f;
      };
    }, function(l, o, t) {
      t(208);
      var s = t(15);
      l.exports = s("Array").splice;
    }, function(l, o, t) {
      var s = t(5), u = t(79), d = t(62), f = t(34), g = t(29), C = t(88), x = t(69), D = t(56), b = t(22), h = D("splice"), A = b("splice", { ACCESSORS: !0, 0: 0, 1: 2 }), E = Math.max, m = Math.min, S = 9007199254740991, w = "Maximum allowed length exceeded";
      s({ target: "Array", proto: !0, forced: !h || !A }, { splice: function(T, M) {
        var N = g(this), U = f(N.length), F = u(T, U), B = arguments.length, P, z, H, $, I, Y;
        if (B === 0 ? P = z = 0 : B === 1 ? (P = 0, z = U - F) : (P = B - 2, z = m(E(d(M), 0), U - F)), U + P - z > S)
          throw TypeError(w);
        for (H = C(N, z), $ = 0; $ < z; $++)
          I = F + $, I in N && x(H, $, N[I]);
        if (H.length = z, P < z) {
          for ($ = F; $ < U - z; $++)
            I = $ + z, Y = $ + P, I in N ? N[Y] = N[I] : delete N[Y];
          for ($ = U; $ > U - z + P; $--)
            delete N[$ - 1];
        } else if (P > z)
          for ($ = U - z; $ > F; $--)
            I = $ + z - 1, Y = $ + P - 1, I in N ? N[Y] = N[I] : delete N[Y];
        for ($ = 0; $ < P; $++)
          N[$ + F] = arguments[$ + 2];
        return N.length = U - z + P, H;
      } });
    }, function(l, o, t) {
      var s = t(210);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(211), u = Array.prototype;
      l.exports = function(d) {
        var f = d.filter;
        return d === u || d instanceof Array && f === u.filter ? s : f;
      };
    }, function(l, o, t) {
      t(212);
      var s = t(15);
      l.exports = s("Array").filter;
    }, function(l, o, t) {
      var s = t(5), u = t(30).filter, d = t(56), f = t(22), g = d("filter"), C = f("filter");
      s({ target: "Array", proto: !0, forced: !g || !C }, { filter: function(D) {
        return u(this, D, arguments.length > 1 ? arguments[1] : void 0);
      } });
    }, function(l, o, t) {
      var s = t(214);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(215), u = t(217), d = Array.prototype, f = String.prototype;
      l.exports = function(g) {
        var C = g.includes;
        return g === d || g instanceof Array && C === d.includes ? s : typeof g == "string" || g === f || g instanceof String && C === f.includes ? u : C;
      };
    }, function(l, o, t) {
      t(216);
      var s = t(15);
      l.exports = s("Array").includes;
    }, function(l, o, t) {
      var s = t(5), u = t(78).includes, d = t(82), f = t(22), g = f("indexOf", { ACCESSORS: !0, 1: 0 });
      s({ target: "Array", proto: !0, forced: !g }, { includes: function(x) {
        return u(this, x, arguments.length > 1 ? arguments[1] : void 0);
      } }), d("includes");
    }, function(l, o, t) {
      t(218);
      var s = t(15);
      l.exports = s("String").includes;
    }, function(l, o, t) {
      var s = t(5), u = t(219), d = t(49), f = t(221);
      s({ target: "String", proto: !0, forced: !f("includes") }, { includes: function(C) {
        return !!~String(d(this)).indexOf(u(C), arguments.length > 1 ? arguments[1] : void 0);
      } });
    }, function(l, o, t) {
      var s = t(220);
      l.exports = function(u) {
        if (s(u))
          throw TypeError("The method doesn't accept regular expressions");
        return u;
      };
    }, function(l, o, t) {
      var s = t(13), u = t(33), d = t(10), f = d("match");
      l.exports = function(g) {
        var C;
        return s(g) && ((C = g[f]) !== void 0 ? !!C : u(g) == "RegExp");
      };
    }, function(l, o, t) {
      var s = t(10), u = s("match");
      l.exports = function(d) {
        var f = /./;
        try {
          "/./"[d](f);
        } catch {
          try {
            return f[u] = !1, "/./"[d](f);
          } catch {
          }
        }
        return !1;
      };
    }, function(l, o, t) {
      var s = t(223);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(224), u = Function.prototype;
      l.exports = function(d) {
        var f = d.bind;
        return d === u || d instanceof Function && f === u.bind ? s : f;
      };
    }, function(l, o, t) {
      t(225);
      var s = t(15);
      l.exports = s("Function").bind;
    }, function(l, o, t) {
      var s = t(5), u = t(226);
      s({ target: "Function", proto: !0 }, { bind: u });
    }, function(l, o, t) {
      var s = t(40), u = t(13), d = [].slice, f = {}, g = function(x, D, b) {
        if (!(D in f)) {
          for (var h = [], A = 0; A < D; A++)
            h[A] = "a[" + A + "]";
          f[D] = Function("C,a", "return new C(" + h.join(",") + ")");
        }
        return f[D](x, b);
      };
      l.exports = Function.bind || function(x) {
        var D = s(this), b = d.call(arguments, 1), h = function() {
          var E = b.concat(d.call(arguments));
          return this instanceof h ? g(D, E.length, E) : D.apply(x, E);
        };
        return u(D.prototype) && (h.prototype = D.prototype), h;
      };
    }, function(l, o, t) {
      l.exports = t(228);
    }, function(l, o, t) {
      var s = t(229);
      l.exports = s;
    }, function(l, o, t) {
      t(124), t(50), t(54);
      var s = t(93);
      l.exports = s.f("iterator");
    }, function(l, o, t) {
      l.exports = t(231);
    }, function(l, o, t) {
      var s = t(232);
      t(251), t(252), t(253), t(254), t(255), l.exports = s;
    }, function(l, o, t) {
      t(233), t(61), t(234), t(236), t(237), t(238), t(239), t(124), t(240), t(241), t(242), t(243), t(244), t(245), t(246), t(247), t(248), t(249), t(250);
      var s = t(9);
      l.exports = s.Symbol;
    }, function(l, o, t) {
      var s = t(5), u = t(11), d = t(55), f = t(13), g = t(29), C = t(34), x = t(69), D = t(88), b = t(56), h = t(10), A = t(86), E = h("isConcatSpreadable"), m = 9007199254740991, S = "Maximum allowed index exceeded", w = A >= 51 || !u(function() {
        var N = [];
        return N[E] = !1, N.concat()[0] !== N;
      }), p = b("concat"), T = function(U) {
        if (!f(U))
          return !1;
        var F = U[E];
        return F !== void 0 ? !!F : d(U);
      }, M = !w || !p;
      s({ target: "Array", proto: !0, forced: M }, { concat: function(U) {
        var F = g(this), B = D(F, 0), P = 0, z, H, $, I, Y;
        for (z = -1, $ = arguments.length; z < $; z++)
          if (Y = z === -1 ? F : arguments[z], T(Y)) {
            if (I = C(Y.length), P + I > m)
              throw TypeError(S);
            for (H = 0; H < I; H++, P++)
              H in Y && x(B, P, Y[H]);
          } else {
            if (P >= m)
              throw TypeError(S);
            x(B, P++, Y);
          }
        return B.length = P, B;
      } });
    }, function(l, o, t) {
      var s = t(5), u = t(8), d = t(35), f = t(42), g = t(14), C = t(76), x = t(105), D = t(11), b = t(16), h = t(55), A = t(13), E = t(25), m = t(29), S = t(28), w = t(60), p = t(48), T = t(77), M = t(52), N = t(125), U = t(235), F = t(126), B = t(71), P = t(18), z = t(59), H = t(19), $ = t(53), I = t(74), Y = t(63), Q = t(51), K = t(64), q = t(10), X = t(93), _ = t(12), le = t(36), Se = t(41), ve = t(30).forEach, ce = Y("hidden"), ae = "Symbol", re = "prototype", se = q("toPrimitive"), pe = Se.set, Pe = Se.getterFor(ae), be = Object[re], je = u.Symbol, Ft = d("JSON", "stringify"), Nt = B.f, ot = P.f, Et = U.f, Bt = z.f, dt = I("symbols"), Kt = I("op-symbols"), Ue = I("string-to-symbol-registry"), Ht = I("symbol-to-string-registry"), Ar = I("wks"), yn = u.QObject, hn = !yn || !yn[re] || !yn[re].findChild, In = g && D(function() {
        return T(ot({}, "a", { get: function() {
          return ot(this, "a", { value: 7 }).a;
        } })).a != 7;
      }) ? function(Ee, oe, De) {
        var ue = Nt(be, oe);
        ue && delete be[oe], ot(Ee, oe, De), ue && Ee !== be && ot(be, oe, ue);
      } : ot, An = function(oe, De) {
        var ue = dt[oe] = T(je[re]);
        return pe(ue, { type: ae, tag: oe, description: De }), g || (ue.description = De), ue;
      }, jt = x ? function(Ee) {
        return Pt(Ee) == "symbol";
      } : function(Ee) {
        return Object(Ee) instanceof je;
      }, xn = function(oe, De, ue) {
        oe === be && xn(Kt, De, ue), E(oe);
        var Ie = w(De, !0);
        return E(ue), b(dt, Ie) ? (ue.enumerable ? (b(oe, ce) && oe[ce][Ie] && (oe[ce][Ie] = !1), ue = T(ue, { enumerable: p(0, !1) })) : (b(oe, ce) || ot(oe, ce, p(1, {})), oe[ce][Ie] = !0), In(oe, Ie, ue)) : ot(oe, Ie, ue);
      }, bt = function(oe, De) {
        E(oe);
        var ue = S(De), Ie = M(ue).concat(me(ue));
        return ve(Ie, function(ze) {
          (!g || Xt.call(ue, ze)) && xn(oe, ze, ue[ze]);
        }), oe;
      }, Ke = function(oe, De) {
        return De === void 0 ? T(oe) : bt(T(oe), De);
      }, Xt = function(oe) {
        var De = w(oe, !0), ue = Bt.call(this, De);
        return this === be && b(dt, De) && !b(Kt, De) ? !1 : ue || !b(this, De) || !b(dt, De) || b(this, ce) && this[ce][De] ? ue : !0;
      }, We = function(oe, De) {
        var ue = S(oe), Ie = w(De, !0);
        if (!(ue === be && b(dt, Ie) && !b(Kt, Ie))) {
          var ze = Nt(ue, Ie);
          return ze && b(dt, Ie) && !(b(ue, ce) && ue[ce][Ie]) && (ze.enumerable = !0), ze;
        }
      }, Ce = function(oe) {
        var De = Et(S(oe)), ue = [];
        return ve(De, function(Ie) {
          !b(dt, Ie) && !b(Q, Ie) && ue.push(Ie);
        }), ue;
      }, me = function(oe) {
        var De = oe === be, ue = Et(De ? Kt : S(oe)), Ie = [];
        return ve(ue, function(ze) {
          b(dt, ze) && (!De || b(be, ze)) && Ie.push(dt[ze]);
        }), Ie;
      };
      if (C || (je = function() {
        if (this instanceof je)
          throw TypeError("Symbol is not a constructor");
        var oe = !arguments.length || arguments[0] === void 0 ? void 0 : String(arguments[0]), De = K(oe), ue = function Ie(ze) {
          this === be && Ie.call(Kt, ze), b(this, ce) && b(this[ce], De) && (this[ce][De] = !1), In(this, De, p(1, ze));
        };
        return g && hn && In(be, De, { configurable: !0, set: ue }), An(De, oe);
      }, $(je[re], "toString", function() {
        return Pe(this).tag;
      }), $(je, "withoutSetter", function(Ee) {
        return An(K(Ee), Ee);
      }), z.f = Xt, P.f = xn, B.f = We, N.f = U.f = Ce, F.f = me, X.f = function(Ee) {
        return An(q(Ee), Ee);
      }, g && (ot(je[re], "description", { configurable: !0, get: function() {
        return Pe(this).description;
      } }), f || $(be, "propertyIsEnumerable", Xt, { unsafe: !0 }))), s({ global: !0, wrap: !0, forced: !C, sham: !C }, { Symbol: je }), ve(M(Ar), function(Ee) {
        _(Ee);
      }), s({ target: ae, stat: !0, forced: !C }, {
        for: function(oe) {
          var De = String(oe);
          if (b(Ue, De))
            return Ue[De];
          var ue = je(De);
          return Ue[De] = ue, Ht[ue] = De, ue;
        },
        keyFor: function(oe) {
          if (!jt(oe))
            throw TypeError(oe + " is not a symbol");
          if (b(Ht, oe))
            return Ht[oe];
        },
        useSetter: function() {
          hn = !0;
        },
        useSimple: function() {
          hn = !1;
        }
      }), s({ target: "Object", stat: !0, forced: !C, sham: !g }, {
        create: Ke,
        defineProperty: xn,
        defineProperties: bt,
        getOwnPropertyDescriptor: We
      }), s({ target: "Object", stat: !0, forced: !C }, {
        getOwnPropertyNames: Ce,
        getOwnPropertySymbols: me
      }), s({ target: "Object", stat: !0, forced: D(function() {
        F.f(1);
      }) }, { getOwnPropertySymbols: function(oe) {
        return F.f(m(oe));
      } }), Ft) {
        var Oe = !C || D(function() {
          var Ee = je();
          return Ft([Ee]) != "[null]" || Ft({ a: Ee }) != "{}" || Ft(Object(Ee)) != "{}";
        });
        s({ target: "JSON", stat: !0, forced: Oe }, {
          stringify: function(oe, De, ue) {
            for (var Ie = [oe], ze = 1, $e; arguments.length > ze; )
              Ie.push(arguments[ze++]);
            if ($e = De, !(!A(De) && oe === void 0 || jt(oe)))
              return h(De) || (De = function(at, Ze) {
                if (typeof $e == "function" && (Ze = $e.call(this, at, Ze)), !jt(Ze))
                  return Ze;
              }), Ie[1] = De, Ft.apply(null, Ie);
          }
        });
      }
      je[re][se] || H(je[re], se, je[re].valueOf), le(je, ae), Q[ce] = !0;
    }, function(l, o, t) {
      var s = t(28), u = t(125).f, d = {}.toString, f = (typeof window > "u" ? "undefined" : Pt(window)) == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], g = function(x) {
        try {
          return u(x);
        } catch {
          return f.slice();
        }
      };
      l.exports.f = function(x) {
        return f && d.call(x) == "[object Window]" ? g(x) : u(s(x));
      };
    }, function(l, o, t) {
      var s = t(12);
      s("asyncIterator");
    }, function(l, o) {
    }, function(l, o, t) {
      var s = t(12);
      s("hasInstance");
    }, function(l, o, t) {
      var s = t(12);
      s("isConcatSpreadable");
    }, function(l, o, t) {
      var s = t(12);
      s("match");
    }, function(l, o, t) {
      var s = t(12);
      s("matchAll");
    }, function(l, o, t) {
      var s = t(12);
      s("replace");
    }, function(l, o, t) {
      var s = t(12);
      s("search");
    }, function(l, o, t) {
      var s = t(12);
      s("species");
    }, function(l, o, t) {
      var s = t(12);
      s("split");
    }, function(l, o, t) {
      var s = t(12);
      s("toPrimitive");
    }, function(l, o, t) {
      var s = t(12);
      s("toStringTag");
    }, function(l, o, t) {
      var s = t(12);
      s("unscopables");
    }, function(l, o, t) {
      var s = t(36);
      s(Math, "Math", !0);
    }, function(l, o, t) {
      var s = t(8), u = t(36);
      u(s.JSON, "JSON", !0);
    }, function(l, o, t) {
      var s = t(12);
      s("asyncDispose");
    }, function(l, o, t) {
      var s = t(12);
      s("dispose");
    }, function(l, o, t) {
      var s = t(12);
      s("observable");
    }, function(l, o, t) {
      var s = t(12);
      s("patternMatch");
    }, function(l, o, t) {
      var s = t(12);
      s("replaceAll");
    }, function(l, o, t) {
      l.exports = t(257);
    }, function(l, o, t) {
      var s = t(258);
      l.exports = s;
    }, function(l, o, t) {
      t(259);
      var s = t(9);
      l.exports = s.parseInt;
    }, function(l, o, t) {
      var s = t(5), u = t(260);
      s({ global: !0, forced: parseInt != u }, { parseInt: u });
    }, function(l, o, t) {
      var s = t(8), u = t(90).trim, d = t(68), f = s.parseInt, g = /^[+-]?0[Xx]/, C = f(d + "08") !== 8 || f(d + "0x16") !== 22;
      l.exports = C ? function(D, b) {
        var h = u(String(D));
        return f(h, b >>> 0 || (g.test(h) ? 16 : 10));
      } : f;
    }, function(l, o, t) {
      var s = t(262);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(263), u = Array.prototype;
      l.exports = function(d) {
        var f = d.slice;
        return d === u || d instanceof Array && f === u.slice ? s : f;
      };
    }, function(l, o, t) {
      t(264);
      var s = t(15);
      l.exports = s("Array").slice;
    }, function(l, o, t) {
      var s = t(5), u = t(13), d = t(55), f = t(79), g = t(34), C = t(28), x = t(69), D = t(10), b = t(56), h = t(22), A = b("slice"), E = h("slice", { ACCESSORS: !0, 0: 0, 1: 2 }), m = D("species"), S = [].slice, w = Math.max;
      s({ target: "Array", proto: !0, forced: !A || !E }, { slice: function(T, M) {
        var N = C(this), U = g(N.length), F = f(T, U), B = f(M === void 0 ? U : M, U), P, z, H;
        if (d(N) && (P = N.constructor, typeof P == "function" && (P === Array || d(P.prototype)) ? P = void 0 : u(P) && (P = P[m], P === null && (P = void 0)), P === Array || P === void 0))
          return S.call(N, F, B);
        for (z = new (P === void 0 ? Array : P)(w(B - F, 0)), H = 0; F < B; F++, H++)
          F in N && x(z, H, N[F]);
        return z.length = H, z;
      } });
    }, function(l, o, t) {
      t(266);
      var s = t(9);
      l.exports = s.setTimeout;
    }, function(l, o, t) {
      var s = t(5), u = t(8), d = t(84), f = [].slice, g = /MSIE .\./.test(d), C = function(D) {
        return function(b, h) {
          var A = arguments.length > 2, E = A ? f.call(arguments, 2) : void 0;
          return D(A ? function() {
            (typeof b == "function" ? b : Function(b)).apply(this, E);
          } : b, h);
        };
      };
      s({ global: !0, bind: !0, forced: g }, {
        setTimeout: C(u.setTimeout),
        setInterval: C(u.setInterval)
      });
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(127));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), g = f.__importDefault(t(272)), C = f.__importDefault(t(273)), x = f.__importDefault(t(128)), D = f.__importDefault(t(274)), b = f.__importDefault(t(275)), h = f.__importDefault(t(276)), A = f.__importDefault(t(129)), E = f.__importDefault(t(277)), m = f.__importDefault(t(278)), S = f.__importDefault(t(279)), w = (0, d.default)(
        {},
        g.default,
        C.default,
        x.default,
        b.default,
        D.default,
        h.default,
        A.default,
        E.default,
        m.default,
        S.default,
        { linkCheck: function(T, M) {
          return !0;
        } }
      );
      o.default = w;
    }, function(l, o, t) {
      var s = t(269);
      l.exports = s;
    }, function(l, o, t) {
      t(270);
      var s = t(9);
      l.exports = s.Object.assign;
    }, function(l, o, t) {
      var s = t(5), u = t(271);
      s({ target: "Object", stat: !0, forced: Object.assign !== u }, { assign: u });
    }, function(l, o, t) {
      var s = t(14), u = t(11), d = t(52), f = t(126), g = t(59), C = t(29), x = t(72), D = Object.assign, b = Object.defineProperty;
      l.exports = !D || u(function() {
        if (s && D({ b: 1 }, D(b({}, "a", { enumerable: !0, get: function() {
          b(this, "b", { value: 3, enumerable: !1 });
        } }), { b: 2 })).b !== 1)
          return !0;
        var h = {}, A = {}, E = Symbol(), m = "abcdefghijklmnopqrst";
        return h[E] = 7, m.split("").forEach(function(S) {
          A[S] = S;
        }), D({}, h)[E] != 7 || d(D({}, A)).join("") != m;
      }) ? function(A, E) {
        for (var m = C(A), S = arguments.length, w = 1, p = f.f, T = g.f; S > w; )
          for (var M = x(arguments[w++]), N = p ? d(M).concat(p(M)) : d(M), U = N.length, F = 0, B; U > F; )
            B = N[F++], (!s || T.call(M, B)) && (m[B] = M[B]);
        return m;
      } : D;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.default = {
        menus: [
          "head",
          "bold",
          "fontSize",
          "fontName",
          "italic",
          "underline",
          "strikeThrough",
          "indent",
          "lineHeight",
          "foreColor",
          "backColor",
          "link",
          "list",
          "todo",
          "justify",
          "quote",
          "emoticon",
          "image",
          "video",
          "table",
          "code",
          "splitLine",
          "undo",
          "redo"
        ],
        fontNames: ["\u9ED1\u4F53", "\u4EFF\u5B8B", "\u6977\u4F53", "\u6807\u6977\u4F53", "\u534E\u6587\u4EFF\u5B8B", "\u534E\u6587\u6977\u4F53", "\u5B8B\u4F53", "\u5FAE\u8F6F\u96C5\u9ED1", "Arial", "Tahoma", "Verdana", "Times New Roman", "Courier New"],
        fontSizes: { "x-small": { name: "10px", value: "1" }, small: { name: "13px", value: "2" }, normal: { name: "16px", value: "3" }, large: { name: "18px", value: "4" }, "x-large": { name: "24px", value: "5" }, "xx-large": { name: "32px", value: "6" }, "xxx-large": { name: "48px", value: "7" } },
        colors: ["#000000", "#ffffff", "#eeece0", "#1c487f", "#4d80bf", "#c24f4a", "#8baa4a", "#7b5ba1", "#46acc8", "#f9963b"],
        languageType: ["Bash", "C", "C#", "C++", "CSS", "Java", "JavaScript", "JSON", "TypeScript", "Plain text", "Html", "XML", "SQL", "Go", "Kotlin", "Lua", "Markdown", "PHP", "Python", "Shell Session", "Ruby"],
        languageTab: "\u3000\u3000\u3000\u3000",
        emotions: [{
          title: "\u8868\u60C5",
          type: "emoji",
          content: "\u{1F600} \u{1F603} \u{1F604} \u{1F601} \u{1F606} \u{1F605} \u{1F602} \u{1F923} \u{1F60A} \u{1F607} \u{1F642} \u{1F643} \u{1F609} \u{1F60C} \u{1F60D} \u{1F618} \u{1F617} \u{1F619} \u{1F61A} \u{1F60B} \u{1F61B} \u{1F61D} \u{1F61C} \u{1F913} \u{1F60E} \u{1F60F} \u{1F612} \u{1F61E} \u{1F614} \u{1F61F} \u{1F615} \u{1F641} \u{1F623} \u{1F616} \u{1F62B} \u{1F629} \u{1F622} \u{1F62D} \u{1F624} \u{1F620} \u{1F621} \u{1F633} \u{1F631} \u{1F628} \u{1F917} \u{1F914} \u{1F636} \u{1F611} \u{1F62C} \u{1F644} \u{1F62F} \u{1F634} \u{1F637} \u{1F911} \u{1F608} \u{1F921} \u{1F4A9} \u{1F47B} \u{1F480} \u{1F440} \u{1F463}".split(/\s/)
        }, {
          title: "\u624B\u52BF",
          type: "emoji",
          content: "\u{1F450} \u{1F64C} \u{1F44F} \u{1F91D} \u{1F44D} \u{1F44E} \u{1F44A} \u270A \u{1F91B} \u{1F91C} \u{1F91E} \u270C\uFE0F \u{1F918} \u{1F44C} \u{1F448} \u{1F449} \u{1F446} \u{1F447} \u261D\uFE0F \u270B \u{1F91A} \u{1F590} \u{1F596} \u{1F44B} \u{1F919} \u{1F4AA} \u{1F595} \u270D\uFE0F \u{1F64F}".split(/\s/)
        }],
        lineHeights: ["1", "1.15", "1.6", "2", "2.5", "3"],
        undoLimit: 20,
        indentation: "2em",
        showMenuTooltips: !0,
        menuTooltipPosition: "up"
      };
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(7);
      function f(g, C, x) {
        window.alert(g), x && console.error("wangEditor: " + x);
      }
      o.default = { onchangeTimeout: 200, onchange: null, onfocus: d.EMPTY_FN, onblur: d.EMPTY_FN, onCatalogChange: null, customAlert: f };
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.default = {
        pasteFilterStyle: !0,
        pasteIgnoreImg: !1,
        pasteTextHandle: function(f) {
          return f;
        }
      };
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.default = { styleWithCSS: !1 };
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(7);
      o.default = {
        linkImgCheck: function(g, C, x) {
          return !0;
        },
        showLinkImg: !0,
        showLinkImgAlt: !0,
        showLinkImgHref: !0,
        linkImgCallback: d.EMPTY_FN,
        uploadImgAccept: ["jpg", "jpeg", "png", "gif", "bmp"],
        uploadImgServer: "",
        uploadImgShowBase64: !1,
        uploadImgMaxSize: 5 * 1024 * 1024,
        uploadImgMaxLength: 100,
        uploadFileName: "",
        uploadImgParams: {},
        uploadImgParamsWithUrl: !1,
        uploadImgHeaders: {},
        uploadImgHooks: {},
        uploadImgTimeout: 10 * 1e3,
        withCredentials: !1,
        customUploadImg: null,
        uploadImgFromMedia: null
      };
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.default = { lang: "zh-CN", languages: { "zh-CN": { wangEditor: { \u91CD\u7F6E: "\u91CD\u7F6E", \u63D2\u5165: "\u63D2\u5165", \u9ED8\u8BA4: "\u9ED8\u8BA4", \u521B\u5EFA: "\u521B\u5EFA", \u4FEE\u6539: "\u4FEE\u6539", \u5982: "\u5982", \u8BF7\u8F93\u5165\u6B63\u6587: "\u8BF7\u8F93\u5165\u6B63\u6587", menus: { title: { \u6807\u9898: "\u6807\u9898", \u52A0\u7C97: "\u52A0\u7C97", \u5B57\u53F7: "\u5B57\u53F7", \u5B57\u4F53: "\u5B57\u4F53", \u659C\u4F53: "\u659C\u4F53", \u4E0B\u5212\u7EBF: "\u4E0B\u5212\u7EBF", \u5220\u9664\u7EBF: "\u5220\u9664\u7EBF", \u7F29\u8FDB: "\u7F29\u8FDB", \u884C\u9AD8: "\u884C\u9AD8", \u6587\u5B57\u989C\u8272: "\u6587\u5B57\u989C\u8272", \u80CC\u666F\u8272: "\u80CC\u666F\u8272", \u94FE\u63A5: "\u94FE\u63A5", \u5E8F\u5217: "\u5E8F\u5217", \u5BF9\u9F50: "\u5BF9\u9F50", \u5F15\u7528: "\u5F15\u7528", \u8868\u60C5: "\u8868\u60C5", \u56FE\u7247: "\u56FE\u7247", \u89C6\u9891: "\u89C6\u9891", \u8868\u683C: "\u8868\u683C", \u4EE3\u7801: "\u4EE3\u7801", \u5206\u5272\u7EBF: "\u5206\u5272\u7EBF", \u6062\u590D: "\u6062\u590D", \u64A4\u9500: "\u64A4\u9500", \u5168\u5C4F: "\u5168\u5C4F", \u53D6\u6D88\u5168\u5C4F: "\u53D6\u6D88\u5168\u5C4F", \u5F85\u529E\u4E8B\u9879: "\u5F85\u529E\u4E8B\u9879" }, dropListMenu: { \u8BBE\u7F6E\u6807\u9898: "\u8BBE\u7F6E\u6807\u9898", \u80CC\u666F\u989C\u8272: "\u80CC\u666F\u989C\u8272", \u6587\u5B57\u989C\u8272: "\u6587\u5B57\u989C\u8272", \u8BBE\u7F6E\u5B57\u53F7: "\u8BBE\u7F6E\u5B57\u53F7", \u8BBE\u7F6E\u5B57\u4F53: "\u8BBE\u7F6E\u5B57\u4F53", \u8BBE\u7F6E\u7F29\u8FDB: "\u8BBE\u7F6E\u7F29\u8FDB", \u5BF9\u9F50\u65B9\u5F0F: "\u5BF9\u9F50\u65B9\u5F0F", \u8BBE\u7F6E\u884C\u9AD8: "\u8BBE\u7F6E\u884C\u9AD8", \u5E8F\u5217: "\u5E8F\u5217", head: { \u6B63\u6587: "\u6B63\u6587" }, indent: { \u589E\u52A0\u7F29\u8FDB: "\u589E\u52A0\u7F29\u8FDB", \u51CF\u5C11\u7F29\u8FDB: "\u51CF\u5C11\u7F29\u8FDB" }, justify: { \u9760\u5DE6: "\u9760\u5DE6", \u5C45\u4E2D: "\u5C45\u4E2D", \u9760\u53F3: "\u9760\u53F3", \u4E24\u7AEF: "\u4E24\u7AEF" }, list: { \u65E0\u5E8F\u5217\u8868: "\u65E0\u5E8F\u5217\u8868", \u6709\u5E8F\u5217\u8868: "\u6709\u5E8F\u5217\u8868" } }, panelMenus: { emoticon: { \u9ED8\u8BA4: "\u9ED8\u8BA4", \u65B0\u6D6A: "\u65B0\u6D6A", emoji: "emoji", \u624B\u52BF: "\u624B\u52BF" }, image: { \u4E0A\u4F20\u56FE\u7247: "\u4E0A\u4F20\u56FE\u7247", \u7F51\u7EDC\u56FE\u7247: "\u7F51\u7EDC\u56FE\u7247", \u56FE\u7247\u5730\u5740: "\u56FE\u7247\u5730\u5740", \u56FE\u7247\u6587\u5B57\u8BF4\u660E: "\u56FE\u7247\u6587\u5B57\u8BF4\u660E", \u8DF3\u8F6C\u94FE\u63A5: "\u8DF3\u8F6C\u94FE\u63A5" }, link: { \u94FE\u63A5: "\u94FE\u63A5", \u94FE\u63A5\u6587\u5B57: "\u94FE\u63A5\u6587\u5B57", \u53D6\u6D88\u94FE\u63A5: "\u53D6\u6D88\u94FE\u63A5", \u67E5\u770B\u94FE\u63A5: "\u67E5\u770B\u94FE\u63A5" }, video: { \u63D2\u5165\u89C6\u9891: "\u63D2\u5165\u89C6\u9891", \u4E0A\u4F20\u89C6\u9891: "\u4E0A\u4F20\u89C6\u9891" }, table: { \u884C: "\u884C", \u5217: "\u5217", \u7684: "\u7684", \u8868\u683C: "\u8868\u683C", \u6DFB\u52A0\u884C: "\u6DFB\u52A0\u884C", \u5220\u9664\u884C: "\u5220\u9664\u884C", \u6DFB\u52A0\u5217: "\u6DFB\u52A0\u5217", \u5220\u9664\u5217: "\u5220\u9664\u5217", \u8BBE\u7F6E\u8868\u5934: "\u8BBE\u7F6E\u8868\u5934", \u53D6\u6D88\u8868\u5934: "\u53D6\u6D88\u8868\u5934", \u63D2\u5165\u8868\u683C: "\u63D2\u5165\u8868\u683C", \u5220\u9664\u8868\u683C: "\u5220\u9664\u8868\u683C" }, code: { \u5220\u9664\u4EE3\u7801: "\u5220\u9664\u4EE3\u7801", \u4FEE\u6539\u4EE3\u7801: "\u4FEE\u6539\u4EE3\u7801", \u63D2\u5165\u4EE3\u7801: "\u63D2\u5165\u4EE3\u7801" } } }, validate: { \u5F20\u56FE\u7247: "\u5F20\u56FE\u7247", \u5927\u4E8E: "\u5927\u4E8E", \u56FE\u7247\u94FE\u63A5: "\u56FE\u7247\u94FE\u63A5", \u4E0D\u662F\u56FE\u7247: "\u4E0D\u662F\u56FE\u7247", \u8FD4\u56DE\u7ED3\u679C: "\u8FD4\u56DE\u7ED3\u679C", \u4E0A\u4F20\u56FE\u7247\u8D85\u65F6: "\u4E0A\u4F20\u56FE\u7247\u8D85\u65F6", \u4E0A\u4F20\u56FE\u7247\u9519\u8BEF: "\u4E0A\u4F20\u56FE\u7247\u9519\u8BEF", \u4E0A\u4F20\u56FE\u7247\u5931\u8D25: "\u4E0A\u4F20\u56FE\u7247\u5931\u8D25", \u63D2\u5165\u56FE\u7247\u9519\u8BEF: "\u63D2\u5165\u56FE\u7247\u9519\u8BEF", \u4E00\u6B21\u6700\u591A\u4E0A\u4F20: "\u4E00\u6B21\u6700\u591A\u4E0A\u4F20", \u4E0B\u8F7D\u94FE\u63A5\u5931\u8D25: "\u4E0B\u8F7D\u94FE\u63A5\u5931\u8D25", \u56FE\u7247\u9A8C\u8BC1\u672A\u901A\u8FC7: "\u56FE\u7247\u9A8C\u8BC1\u672A\u901A\u8FC7", \u670D\u52A1\u5668\u8FD4\u56DE\u72B6\u6001: "\u670D\u52A1\u5668\u8FD4\u56DE\u72B6\u6001", \u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF: "\u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF", \u8BF7\u66FF\u6362\u4E3A\u652F\u6301\u7684\u56FE\u7247\u7C7B\u578B: "\u8BF7\u66FF\u6362\u4E3A\u652F\u6301\u7684\u56FE\u7247\u7C7B\u578B", \u60A8\u63D2\u5165\u7684\u7F51\u7EDC\u56FE\u7247\u65E0\u6CD5\u8BC6\u522B: "\u60A8\u63D2\u5165\u7684\u7F51\u7EDC\u56FE\u7247\u65E0\u6CD5\u8BC6\u522B", \u60A8\u521A\u624D\u63D2\u5165\u7684\u56FE\u7247\u94FE\u63A5\u672A\u901A\u8FC7\u7F16\u8F91\u5668\u6821\u9A8C: "\u60A8\u521A\u624D\u63D2\u5165\u7684\u56FE\u7247\u94FE\u63A5\u672A\u901A\u8FC7\u7F16\u8F91\u5668\u6821\u9A8C", \u63D2\u5165\u89C6\u9891\u9519\u8BEF: "\u63D2\u5165\u89C6\u9891\u9519\u8BEF", \u89C6\u9891\u94FE\u63A5: "\u89C6\u9891\u94FE\u63A5", \u4E0D\u662F\u89C6\u9891: "\u4E0D\u662F\u89C6\u9891", \u89C6\u9891\u9A8C\u8BC1\u672A\u901A\u8FC7: "\u89C6\u9891\u9A8C\u8BC1\u672A\u901A\u8FC7", \u4E2A\u89C6\u9891: "\u4E2A\u89C6\u9891", \u4E0A\u4F20\u89C6\u9891\u8D85\u65F6: "\u4E0A\u4F20\u89C6\u9891\u8D85\u65F6", \u4E0A\u4F20\u89C6\u9891\u9519\u8BEF: "\u4E0A\u4F20\u89C6\u9891\u9519\u8BEF", \u4E0A\u4F20\u89C6\u9891\u5931\u8D25: "\u4E0A\u4F20\u89C6\u9891\u5931\u8D25", \u4E0A\u4F20\u89C6\u9891\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF: "\u4E0A\u4F20\u89C6\u9891\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF" } } }, en: { wangEditor: { \u91CD\u7F6E: "reset", \u63D2\u5165: "insert", \u9ED8\u8BA4: "default", \u521B\u5EFA: "create", \u4FEE\u6539: "edit", \u5982: "like", \u8BF7\u8F93\u5165\u6B63\u6587: "please enter the text", menus: { title: { \u6807\u9898: "head", \u52A0\u7C97: "bold", \u5B57\u53F7: "font size", \u5B57\u4F53: "font family", \u659C\u4F53: "italic", \u4E0B\u5212\u7EBF: "underline", \u5220\u9664\u7EBF: "strikethrough", \u7F29\u8FDB: "indent", \u884C\u9AD8: "line heihgt", \u6587\u5B57\u989C\u8272: "font color", \u80CC\u666F\u8272: "background", \u94FE\u63A5: "link", \u5E8F\u5217: "numbered list", \u5BF9\u9F50: "align", \u5F15\u7528: "quote", \u8868\u60C5: "emoticons", \u56FE\u7247: "image", \u89C6\u9891: "media", \u8868\u683C: "table", \u4EE3\u7801: "code", \u5206\u5272\u7EBF: "split line", \u6062\u590D: "undo", \u64A4\u9500: "redo", \u5168\u5C4F: "fullscreen", \u53D6\u6D88\u5168\u5C4F: "cancel fullscreen", \u5F85\u529E\u4E8B\u9879: "todo" }, dropListMenu: { \u8BBE\u7F6E\u6807\u9898: "title", \u80CC\u666F\u989C\u8272: "background", \u6587\u5B57\u989C\u8272: "font color", \u8BBE\u7F6E\u5B57\u53F7: "font size", \u8BBE\u7F6E\u5B57\u4F53: "font family", \u8BBE\u7F6E\u7F29\u8FDB: "indent", \u5BF9\u9F50\u65B9\u5F0F: "align", \u8BBE\u7F6E\u884C\u9AD8: "line heihgt", \u5E8F\u5217: "list", head: { \u6B63\u6587: "text" }, indent: { \u589E\u52A0\u7F29\u8FDB: "indent", \u51CF\u5C11\u7F29\u8FDB: "outdent" }, justify: { \u9760\u5DE6: "left", \u5C45\u4E2D: "center", \u9760\u53F3: "right", \u4E24\u7AEF: "justify" }, list: { \u65E0\u5E8F\u5217\u8868: "unordered", \u6709\u5E8F\u5217\u8868: "ordered" } }, panelMenus: { emoticon: { \u8868\u60C5: "emoji", \u624B\u52BF: "gesture" }, image: { \u4E0A\u4F20\u56FE\u7247: "upload image", \u7F51\u7EDC\u56FE\u7247: "network image", \u56FE\u7247\u5730\u5740: "image link", \u56FE\u7247\u6587\u5B57\u8BF4\u660E: "image alt", \u8DF3\u8F6C\u94FE\u63A5: "hyperlink" }, link: { \u94FE\u63A5: "link", \u94FE\u63A5\u6587\u5B57: "link text", \u53D6\u6D88\u94FE\u63A5: "unlink", \u67E5\u770B\u94FE\u63A5: "view links" }, video: { \u63D2\u5165\u89C6\u9891: "insert video", \u4E0A\u4F20\u89C6\u9891: "upload local video" }, table: { \u884C: "rows", \u5217: "columns", \u7684: " ", \u8868\u683C: "table", \u6DFB\u52A0\u884C: "insert row", \u5220\u9664\u884C: "delete row", \u6DFB\u52A0\u5217: "insert column", \u5220\u9664\u5217: "delete column", \u8BBE\u7F6E\u8868\u5934: "set header", \u53D6\u6D88\u8868\u5934: "cancel header", \u63D2\u5165\u8868\u683C: "insert table", \u5220\u9664\u8868\u683C: "delete table" }, code: { \u5220\u9664\u4EE3\u7801: "delete code", \u4FEE\u6539\u4EE3\u7801: "edit code", \u63D2\u5165\u4EE3\u7801: "insert code" } } }, validate: { \u5F20\u56FE\u7247: "images", \u5927\u4E8E: "greater than", \u56FE\u7247\u94FE\u63A5: "image link", \u4E0D\u662F\u56FE\u7247: "is not image", \u8FD4\u56DE\u7ED3\u679C: "return results", \u4E0A\u4F20\u56FE\u7247\u8D85\u65F6: "upload image timeout", \u4E0A\u4F20\u56FE\u7247\u9519\u8BEF: "upload image error", \u4E0A\u4F20\u56FE\u7247\u5931\u8D25: "upload image failed", \u63D2\u5165\u56FE\u7247\u9519\u8BEF: "insert image error", \u4E00\u6B21\u6700\u591A\u4E0A\u4F20: "once most at upload", \u4E0B\u8F7D\u94FE\u63A5\u5931\u8D25: "download link failed", \u56FE\u7247\u9A8C\u8BC1\u672A\u901A\u8FC7: "image validate failed", \u670D\u52A1\u5668\u8FD4\u56DE\u72B6\u6001: "server return status", \u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF: "upload image return results error", \u8BF7\u66FF\u6362\u4E3A\u652F\u6301\u7684\u56FE\u7247\u7C7B\u578B: "please replace with a supported image type", \u60A8\u63D2\u5165\u7684\u7F51\u7EDC\u56FE\u7247\u65E0\u6CD5\u8BC6\u522B: "the network picture you inserted is not recognized", \u60A8\u521A\u624D\u63D2\u5165\u7684\u56FE\u7247\u94FE\u63A5\u672A\u901A\u8FC7\u7F16\u8F91\u5668\u6821\u9A8C: "the image link you just inserted did not pass the editor verification", \u63D2\u5165\u89C6\u9891\u9519\u8BEF: "insert video error", \u89C6\u9891\u94FE\u63A5: "video link", \u4E0D\u662F\u89C6\u9891: "is not video", \u89C6\u9891\u9A8C\u8BC1\u672A\u901A\u8FC7: "video validate failed", \u4E2A\u89C6\u9891: "videos", \u4E0A\u4F20\u89C6\u9891\u8D85\u65F6: "upload video timeout", \u4E0A\u4F20\u89C6\u9891\u9519\u8BEF: "upload video error", \u4E0A\u4F20\u89C6\u9891\u5931\u8D25: "upload video failed", \u4E0A\u4F20\u89C6\u9891\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF: "upload video return results error" } } } } };
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(6);
      function f() {
        return !!(d.UA.isIE() || d.UA.isOldEdge);
      }
      o.default = { compatibleMode: f, historyMaxSize: 30 };
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(7);
      o.default = {
        onlineVideoCheck: function(g) {
          return !0;
        },
        onlineVideoCallback: d.EMPTY_FN,
        showLinkVideo: !0,
        uploadVideoAccept: ["mp4"],
        uploadVideoServer: "",
        uploadVideoMaxSize: 1 * 1024 * 1024 * 1024,
        uploadVideoName: "",
        uploadVideoParams: {},
        uploadVideoParamsWithUrl: !1,
        uploadVideoHeaders: {},
        uploadVideoHooks: {},
        uploadVideoTimeout: 1e3 * 60 * 60 * 2,
        withVideoCredentials: !1,
        customUploadVideo: null,
        customInsertVideo: null
      };
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(17));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), g = f.__importDefault(t(3)), C = t(6), x = t(7), D = function() {
        function b(h) {
          this._currentRange = null, this.editor = h;
        }
        return b.prototype.getRange = function() {
          return this._currentRange;
        }, b.prototype.saveRange = function(h) {
          if (h) {
            this._currentRange = h;
            return;
          }
          var A = window.getSelection();
          if (A.rangeCount !== 0) {
            var E = A.getRangeAt(0), m = this.getSelectionContainerElem(E);
            if (!!(m != null && m.length) && !(m.attr("contenteditable") === "false" || m.parentUntil("[contenteditable=false]"))) {
              var S = this.editor, w = S.$textElem;
              if (w.isContain(m)) {
                if (w.elems[0] === m.elems[0]) {
                  var p;
                  if ((0, d.default)(p = w.html()).call(p) === x.EMPTY_P) {
                    var T = w.children(), M = T == null ? void 0 : T.last();
                    S.selection.createRangeByElem(M, !0, !0), S.selection.restoreSelection();
                  }
                }
                this._currentRange = E;
              }
            }
          }
        }, b.prototype.collapseRange = function(h) {
          h === void 0 && (h = !1);
          var A = this._currentRange;
          A && A.collapse(h);
        }, b.prototype.getSelectionText = function() {
          var h = this._currentRange;
          return h ? h.toString() : "";
        }, b.prototype.getSelectionContainerElem = function(h) {
          var A;
          A = h || this._currentRange;
          var E;
          if (A)
            return E = A.commonAncestorContainer, g.default(E.nodeType === 1 ? E : E.parentNode);
        }, b.prototype.getSelectionStartElem = function(h) {
          var A;
          A = h || this._currentRange;
          var E;
          if (A)
            return E = A.startContainer, g.default(E.nodeType === 1 ? E : E.parentNode);
        }, b.prototype.getSelectionEndElem = function(h) {
          var A;
          A = h || this._currentRange;
          var E;
          if (A)
            return E = A.endContainer, g.default(E.nodeType === 1 ? E : E.parentNode);
        }, b.prototype.isSelectionEmpty = function() {
          var h = this._currentRange;
          return !!(h && h.startContainer && h.startContainer === h.endContainer && h.startOffset === h.endOffset);
        }, b.prototype.restoreSelection = function() {
          var h = window.getSelection(), A = this._currentRange;
          h && A && (h.removeAllRanges(), h.addRange(A));
        }, b.prototype.createEmptyRange = function() {
          var h = this.editor, A = this.getRange(), E;
          if (!!A && !!this.isSelectionEmpty())
            try {
              C.UA.isWebkit() ? (h.cmd.do("insertHTML", "&#8203;"), A.setEnd(A.endContainer, A.endOffset + 1), this.saveRange(A)) : (E = g.default("<strong>&#8203;</strong>"), h.cmd.do("insertElem", E), this.createRangeByElem(E, !0));
            } catch {
            }
        }, b.prototype.createRangeByElems = function(h, A) {
          var E = window.getSelection ? window.getSelection() : document.getSelection();
          E == null || E.removeAllRanges();
          var m = document.createRange();
          m.setStart(h, 0), m.setEnd(A, A.childNodes.length || 1), this.saveRange(m), this.restoreSelection();
        }, b.prototype.createRangeByElem = function(h, A, E) {
          if (!!h.length) {
            var m = h.elems[0], S = document.createRange();
            E ? S.selectNodeContents(m) : S.selectNode(m), A != null && (S.collapse(A), A || (this.saveRange(S), this.editor.selection.moveCursor(m))), this.saveRange(S);
          }
        }, b.prototype.getSelectionRangeTopNodes = function() {
          var h, A, E, m = (h = this.getSelectionStartElem()) === null || h === void 0 ? void 0 : h.getNodeTop(this.editor), S = (A = this.getSelectionEndElem()) === null || A === void 0 ? void 0 : A.getNodeTop(this.editor);
          return E = this.recordSelectionNodes(g.default(m), g.default(S)), E;
        }, b.prototype.moveCursor = function(h, A) {
          var E, m = this.getRange(), S = h.nodeType === 3 ? (E = h.nodeValue) === null || E === void 0 ? void 0 : E.length : h.childNodes.length;
          (C.UA.isFirefox || C.UA.isIE()) && S !== 0 && (h.nodeType === 3 || h.childNodes[S - 1].nodeName === "BR") && (S = S - 1);
          var w = A != null ? A : S;
          !m || h && (m.setStart(h, w), m.setEnd(h, w), this.restoreSelection());
        }, b.prototype.getCursorPos = function() {
          var h = window.getSelection();
          return h == null ? void 0 : h.anchorOffset;
        }, b.prototype.clearWindowSelectionRange = function() {
          var h = window.getSelection();
          h && h.removeAllRanges();
        }, b.prototype.recordSelectionNodes = function(h, A) {
          var E = [], m = !0;
          try {
            for (var S = h, w = this.editor.$textElem; m; ) {
              var p = S == null ? void 0 : S.getNodeTop(this.editor);
              p.getNodeName() === "BODY" && (m = !1), p.length > 0 && (E.push(g.default(S)), (A == null ? void 0 : A.equal(p)) || w.equal(p) ? m = !1 : S = p.getNextSibling());
            }
          } catch {
            m = !1;
          }
          return E;
        }, b.prototype.setRangeToElem = function(h) {
          var A = this.getRange();
          A == null || A.setStart(h, 0), A == null || A.setEnd(h, 0);
        }, b;
      }();
      o.default = D;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(3)), g = function() {
        function C(x) {
          this.editor = x;
        }
        return C.prototype.do = function(x, D) {
          var b = this.editor;
          b.config.styleWithCSS && document.execCommand("styleWithCSS", !1, "true");
          var h = b.selection;
          if (!!h.getRange()) {
            switch (h.restoreSelection(), x) {
              case "insertHTML":
                this.insertHTML(D);
                break;
              case "insertElem":
                this.insertElem(D);
                break;
              default:
                this.execCommand(x, D);
                break;
            }
            b.menus.changeActive(), h.saveRange(), h.restoreSelection();
          }
        }, C.prototype.insertHTML = function(x) {
          var D = this.editor, b = D.selection.getRange();
          if (b != null) {
            if (this.queryCommandSupported("insertHTML"))
              this.execCommand("insertHTML", x);
            else if (b.insertNode) {
              if (b.deleteContents(), f.default(x).elems.length > 0)
                b.insertNode(f.default(x).elems[0]);
              else {
                var h = document.createElement("p");
                h.appendChild(document.createTextNode(x)), b.insertNode(h);
              }
              D.selection.collapseRange();
            }
          }
        }, C.prototype.insertElem = function(x) {
          var D = this.editor, b = D.selection.getRange();
          b != null && b.insertNode && (b.deleteContents(), b.insertNode(x.elems[0]));
        }, C.prototype.execCommand = function(x, D) {
          document.execCommand(x, !1, D);
        }, C.prototype.queryCommandValue = function(x) {
          return document.queryCommandValue(x);
        }, C.prototype.queryCommandState = function(x) {
          return document.queryCommandState(x);
        }, C.prototype.queryCommandSupported = function(x) {
          return document.queryCommandSupported(x);
        }, C;
      }();
      o.default = g;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(31)), f = s(t(4)), g = s(t(17)), C = s(t(27)), x = s(t(46));
      (0, u.default)(o, "__esModule", { value: !0 });
      var D = t(2), b = D.__importDefault(t(3)), h = D.__importDefault(t(287)), A = t(6), E = D.__importDefault(t(299)), m = D.__importDefault(t(300)), S = t(7), w = function() {
        function p(T) {
          this.editor = T, this.eventHooks = { onBlurEvents: [], changeEvents: [], dropEvents: [], clickEvents: [], keydownEvents: [], keyupEvents: [], tabUpEvents: [], tabDownEvents: [], enterUpEvents: [], enterDownEvents: [], deleteUpEvents: [], deleteDownEvents: [], pasteEvents: [], linkClickEvents: [], codeClickEvents: [], textScrollEvents: [], toolbarClickEvents: [], imgClickEvents: [], imgDragBarMouseDownEvents: [], tableClickEvents: [], menuClickEvents: [], dropListMenuHoverEvents: [], splitLineEvents: [], videoClickEvents: [] };
        }
        return p.prototype.init = function() {
          this._saveRange(), this._bindEventHooks(), h.default(this);
        }, p.prototype.togglePlaceholder = function() {
          var T, M = this.html(), N = (0, d.default)(T = this.editor.$textContainerElem).call(T, ".placeholder");
          N.hide(), !this.editor.isComposing && (!M || M === " ") && N.show();
        }, p.prototype.clear = function() {
          this.html(S.EMPTY_P);
        }, p.prototype.html = function(T) {
          var M = this.editor, N = M.$textElem;
          if (T == null) {
            var U = N.html();
            U = U.replace(/\u200b/gm, ""), U = U.replace(/<p><\/p>/gim, ""), U = U.replace(S.EMPTY_P_LAST_REGEX, ""), U = U.replace(S.EMPTY_P_REGEX, "<p>");
            var F = U.match(/<(img|br|hr|input)[^>]*>/gi);
            return F !== null && (0, f.default)(F).call(F, function(B) {
              B.match(/\/>/) || (U = U.replace(B, B.substring(0, B.length - 1) + "/>"));
            }), U;
          }
          T = (0, g.default)(T).call(T), T === "" && (T = S.EMPTY_P), (0, C.default)(T).call(T, "<") !== 0 && (T = "<p>" + T + "</p>"), N.html(T), M.initSelection();
        }, p.prototype.setJSON = function(T) {
          var M = m.default(T).children(), N = this.editor, U = N.$textElem;
          !M || U.replaceChildAll(M);
        }, p.prototype.getJSON = function() {
          var T = this.editor, M = T.$textElem;
          return E.default(M);
        }, p.prototype.text = function(T) {
          var M = this.editor, N = M.$textElem;
          if (T == null) {
            var U = N.text();
            return U = U.replace(/\u200b/gm, ""), U;
          }
          N.text("<p>" + T + "</p>"), M.initSelection();
        }, p.prototype.append = function(T) {
          var M = this.editor;
          (0, C.default)(T).call(T, "<") !== 0 && (T = "<p>" + T + "</p>"), this.html(this.html() + T), M.initSelection();
        }, p.prototype._saveRange = function() {
          var T = this.editor, M = T.$textElem, N = b.default(document);
          function U() {
            T.selection.saveRange(), T.menus.changeActive();
          }
          M.on("keyup", U);
          function F() {
            U(), M.off("click", F);
          }
          M.on("click", F);
          function B() {
            U(), N.off("mouseup", B);
          }
          function P() {
            N.on("mouseup", B), M.off("mouseleave", P);
          }
          M.on("mousedown", function() {
            M.on("mouseleave", P);
          }), M.on("mouseup", function(z) {
            M.off("mouseleave", P), (0, x.default)(function() {
              var H = T.selection, $ = H.getRange();
              $ !== null && U();
            }, 0);
          });
        }, p.prototype._bindEventHooks = function() {
          var T = this.editor, M = T.$textElem, N = this.eventHooks;
          M.on("click", function(F) {
            var B = N.clickEvents;
            (0, f.default)(B).call(B, function(P) {
              return P(F);
            });
          }), M.on("keyup", function(F) {
            if (F.keyCode === 13) {
              var B = N.enterUpEvents;
              (0, f.default)(B).call(B, function(P) {
                return P(F);
              });
            }
          }), M.on("keyup", function(F) {
            var B = N.keyupEvents;
            (0, f.default)(B).call(B, function(P) {
              return P(F);
            });
          }), M.on("keydown", function(F) {
            var B = N.keydownEvents;
            (0, f.default)(B).call(B, function(P) {
              return P(F);
            });
          }), M.on("keyup", function(F) {
            if (!(F.keyCode !== 8 && F.keyCode !== 46)) {
              var B = N.deleteUpEvents;
              (0, f.default)(B).call(B, function(P) {
                return P(F);
              });
            }
          }), M.on("keydown", function(F) {
            if (!(F.keyCode !== 8 && F.keyCode !== 46)) {
              var B = N.deleteDownEvents;
              (0, f.default)(B).call(B, function(P) {
                return P(F);
              });
            }
          }), M.on("paste", function(F) {
            if (!A.UA.isIE()) {
              F.preventDefault();
              var B = N.pasteEvents;
              (0, f.default)(B).call(B, function(P) {
                return P(F);
              });
            }
          }), M.on("keydown", function(F) {
            (T.isFocus || T.isCompatibleMode) && (F.ctrlKey || F.metaKey) && F.keyCode === 90 && (F.preventDefault(), F.shiftKey ? T.history.restore() : T.history.revoke());
          }), M.on("keyup", function(F) {
            if (F.keyCode === 9) {
              F.preventDefault();
              var B = N.tabUpEvents;
              (0, f.default)(B).call(B, function(P) {
                return P(F);
              });
            }
          }), M.on("keydown", function(F) {
            if (F.keyCode === 9) {
              F.preventDefault();
              var B = N.tabDownEvents;
              (0, f.default)(B).call(B, function(P) {
                return P(F);
              });
            }
          }), M.on(
            "scroll",
            A.throttle(function(F) {
              var B = N.textScrollEvents;
              (0, f.default)(B).call(B, function(P) {
                return P(F);
              });
            }, 100)
          );
          function U(F) {
            F.preventDefault();
          }
          b.default(document).on("dragleave", U).on("drop", U).on("dragenter", U).on("dragover", U), T.beforeDestroy(function() {
            b.default(document).off("dragleave", U).off("drop", U).off("dragenter", U).off("dragover", U);
          }), M.on("drop", function(F) {
            F.preventDefault();
            var B = N.dropEvents;
            (0, f.default)(B).call(B, function(P) {
              return P(F);
            });
          }), M.on("click", function(F) {
            var B = null, P = F.target, z = b.default(P);
            if (z.getNodeName() === "A")
              B = z;
            else {
              var H = z.parentUntil("a");
              H != null && (B = H);
            }
            if (!!B) {
              var $ = N.linkClickEvents;
              (0, f.default)($).call($, function(I) {
                return I(B);
              });
            }
          }), M.on("click", function(F) {
            var B = null, P = F.target, z = b.default(P);
            if (z.getNodeName() === "IMG" && !z.elems[0].getAttribute("data-emoji") && (F.stopPropagation(), B = z), !!B) {
              var H = N.imgClickEvents;
              (0, f.default)(H).call(H, function($) {
                return $(B);
              });
            }
          }), M.on("click", function(F) {
            var B = null, P = F.target, z = b.default(P);
            if (z.getNodeName() === "PRE")
              B = z;
            else {
              var H = z.parentUntil("pre");
              H !== null && (B = H);
            }
            if (!!B) {
              var $ = N.codeClickEvents;
              (0, f.default)($).call($, function(I) {
                return I(B);
              });
            }
          }), M.on("click", function(F) {
            var B = null, P = F.target, z = b.default(P);
            if (z.getNodeName() === "HR" && (B = z), !!B) {
              T.selection.createRangeByElem(B), T.selection.restoreSelection();
              var H = N.splitLineEvents;
              (0, f.default)(H).call(H, function($) {
                return $(B);
              });
            }
          }), T.$toolbarElem.on("click", function(F) {
            var B = N.toolbarClickEvents;
            (0, f.default)(B).call(B, function(P) {
              return P(F);
            });
          }), T.$textContainerElem.on("mousedown", function(F) {
            var B = F.target, P = b.default(B);
            if (P.hasClass("w-e-img-drag-rb")) {
              var z = N.imgDragBarMouseDownEvents;
              (0, f.default)(z).call(z, function(H) {
                return H();
              });
            }
          }), M.on("click", function(F) {
            var B = null, P = F.target;
            if (B = b.default(P).parentUntilEditor("TABLE", T, P), !!B) {
              var z = N.tableClickEvents;
              (0, f.default)(z).call(z, function(H) {
                return H(B, F);
              });
            }
          }), M.on("keydown", function(F) {
            if (F.keyCode === 13) {
              var B = N.enterDownEvents;
              (0, f.default)(B).call(B, function(P) {
                return P(F);
              });
            }
          }), M.on("click", function(F) {
            var B = null, P = F.target, z = b.default(P);
            if (z.getNodeName() === "VIDEO" && (F.stopPropagation(), B = z), !!B) {
              var H = N.videoClickEvents;
              (0, f.default)(H).call(H, function($) {
                return $(B);
              });
            }
          });
        }, p;
      }();
      o.default = w;
    }, function(l, o, t) {
      var s = t(284);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(285), u = Array.prototype;
      l.exports = function(d) {
        var f = d.find;
        return d === u || d instanceof Array && f === u.find ? s : f;
      };
    }, function(l, o, t) {
      t(286);
      var s = t(15);
      l.exports = s("Array").find;
    }, function(l, o, t) {
      var s = t(5), u = t(30).find, d = t(82), f = t(22), g = "find", C = !0, x = f(g);
      g in [] && Array(1)[g](function() {
        C = !1;
      }), s({ target: "Array", proto: !0, forced: C || !x }, { find: function(b) {
        return u(this, b, arguments.length > 1 ? arguments[1] : void 0);
      } }), d(g);
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(288)), g = d.__importStar(t(289)), C = d.__importDefault(t(290)), x = d.__importDefault(t(291)), D = d.__importDefault(t(298));
      function b(h) {
        var A = h.editor, E = h.eventHooks;
        f.default(A, E.enterUpEvents, E.enterDownEvents), g.default(A, E.deleteUpEvents, E.deleteDownEvents), g.cutToKeepP(A, E.keyupEvents), C.default(A, E.tabDownEvents), x.default(A, E.pasteEvents), D.default(A, E.imgClickEvents);
      }
      o.default = b;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(27));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), g = t(7), C = f.__importDefault(t(3));
      function x(D, b, h) {
        function A(S) {
          var w, p = C.default(g.EMPTY_P);
          if (p.insertBefore(S), (0, d.default)(w = S.html()).call(w, "<img") >= 0) {
            p.remove();
            return;
          }
          D.selection.createRangeByElem(p, !0, !0), D.selection.restoreSelection(), S.remove();
        }
        function E() {
          var S = D.$textElem, w = D.selection.getSelectionContainerElem(), p = w.parent();
          if (p.html() === "<code><br></code>") {
            A(p);
            return;
          }
          if (w.getNodeName() === "FONT" && w.text() === "" && w.attr("face") === "monospace") {
            A(p);
            return;
          }
          if (!!p.equal(S)) {
            var T = w.getNodeName();
            T === "P" && w.attr("data-we-empty-p") === null || w.text() || A(w);
          }
        }
        b.push(E);
        function m(S) {
          var w;
          D.selection.saveRange((w = getSelection()) === null || w === void 0 ? void 0 : w.getRangeAt(0));
          var p = D.selection.getSelectionContainerElem();
          p.id === D.textElemId && (S.preventDefault(), D.cmd.do("insertHTML", "<p><br></p>"));
        }
        h.push(m);
      }
      o.default = x;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(17)), f = s(t(44));
      (0, u.default)(o, "__esModule", { value: !0 }), o.cutToKeepP = void 0;
      var g = t(2), C = t(7), x = g.__importDefault(t(3));
      function D(h, A, E) {
        function m() {
          var w = h.$textElem, p = h.$textElem.html(), T = h.$textElem.text(), M = (0, d.default)(p).call(p), N = ["<p><br></p>", "<br>", '<p data-we-empty-p=""></p>', C.EMPTY_P];
          /^\s*$/.test(T) && (!M || (0, f.default)(N).call(N, M)) && (w.html(C.EMPTY_P), h.selection.createRangeByElem(w, !1, !0), h.selection.restoreSelection(), h.selection.moveCursor(w.getNode(), 0));
        }
        A.push(m);
        function S(w) {
          var p, T = h.$textElem, M = (0, d.default)(p = T.html().toLowerCase()).call(p);
          if (M === C.EMPTY_P) {
            w.preventDefault();
            return;
          }
        }
        E.push(S);
      }
      function b(h, A) {
        function E(m) {
          var S;
          if (m.keyCode === 88) {
            var w = h.$textElem, p = (0, d.default)(S = w.html().toLowerCase()).call(S);
            if (!p || p === "<br>") {
              var T = x.default(C.EMPTY_P);
              w.html(" "), w.append(T), h.selection.createRangeByElem(T, !1, !0), h.selection.restoreSelection(), h.selection.moveCursor(T.getNode(), 0);
            }
          }
        }
        A.push(E);
      }
      o.cutToKeepP = b, o.default = D;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      function d(f, g) {
        function C() {
          if (!!f.cmd.queryCommandSupported("insertHTML")) {
            var x = f.selection.getSelectionContainerElem();
            if (!!x) {
              var D = x.parent(), b = x.getNodeName(), h = D.getNodeName();
              b == "CODE" || h === "CODE" || h === "PRE" || /hljs/.test(h) ? f.cmd.do("insertHTML", f.config.languageTab) : f.cmd.do("insertHTML", "&nbsp;&nbsp;&nbsp;&nbsp;");
            }
          }
        }
        g.push(C);
      }
      o.default = d;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(17));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(130), g = t(6), C = t(7);
      function x(E) {
        var m, S = (0, d.default)(m = E.replace(/<div>/gim, "<p>").replace(/<\/div>/gim, "</p>")).call(m), w = document.createElement("div");
        return w.innerHTML = S, w.innerHTML.replace(/<p><\/p>/gim, "");
      }
      function D(E) {
        var m = E.replace(/<br>|<br\/>/gm, `
`).replace(/<[^>]+>/gm, "");
        return m;
      }
      function b(E) {
        var m;
        if (E === "")
          return !1;
        var S = document.createElement("div");
        return S.innerHTML = E, ((m = S.firstChild) === null || m === void 0 ? void 0 : m.nodeName) === "P";
      }
      function h(E) {
        if (!(E != null && E.length))
          return !1;
        var m = E.elems[0];
        return m.nodeName === "P" && m.innerHTML === "<br>";
      }
      function A(E, m) {
        function S(w) {
          var p = E.config, T = p.pasteFilterStyle, M = p.pasteIgnoreImg, N = p.pasteTextHandle, U = f.getPasteHtml(w, T, M), F = f.getPasteText(w);
          F = F.replace(/\n/gm, "<br>");
          var B = E.selection.getSelectionContainerElem();
          if (!!B) {
            var P = B == null ? void 0 : B.getNodeName(), z = B == null ? void 0 : B.getNodeTop(E), H = "";
            if (z.elems[0] && (H = z == null ? void 0 : z.getNodeName()), P === "CODE" || H === "PRE") {
              N && g.isFunction(N) && (F = "" + (N(F) || "")), E.cmd.do("insertHTML", D(F));
              return;
            }
            if (C.urlRegex.test(F) && T) {
              N && g.isFunction(N) && (F = "" + (N(F) || ""));
              var $ = C.urlRegex.exec(F)[0], I = F.replace(C.urlRegex, "");
              return E.cmd.do("insertHTML", '<a href="' + $ + '" target="_blank">' + $ + "</a>" + I);
            }
            if (!!U)
              try {
                N && g.isFunction(N) && (U = "" + (N(U) || ""));
                var Y = /[\.\#\@]?\w+[ ]+\{[^}]*\}/.test(U);
                if (Y && T)
                  E.cmd.do("insertHTML", "" + x(F));
                else {
                  var Q = x(U);
                  if (b(Q)) {
                    var K = E.$textElem;
                    if (E.cmd.do("insertHTML", Q), K.equal(B)) {
                      E.selection.createEmptyRange();
                      return;
                    }
                    h(z) && z.remove();
                  } else {
                    var q = /^<img [^>]*src=['"]([^'"]+)[^>]*>$/g;
                    q.test(Q) || E.cmd.do("insertHTML", Q);
                  }
                }
              } catch {
                N && g.isFunction(N) && (F = "" + (N(F) || "")), E.cmd.do("insertHTML", "" + x(F));
              }
          }
        }
        m.push(S);
      }
      o.default = A;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(17)), f = s(t(4)), g = s(t(44));
      (0, u.default)(o, "__esModule", { value: !0 });
      var C = t(2), x = t(293), D = C.__importDefault(t(297));
      function b(S) {
        var w = /<span>.*?<\/span>/gi, p = /<span>(.*?)<\/span>/;
        return S.replace(w, function(T) {
          var M = T.match(p);
          return M == null ? "" : M[1];
        });
      }
      function h(S, w) {
        var p;
        return S = (0, d.default)(p = S.toLowerCase()).call(p), !!(x.IGNORE_TAGS.has(S) || w && S === "img");
      }
      function A(S, w) {
        var p = "";
        p = "<" + S;
        var T = [];
        (0, f.default)(w).call(w, function(N) {
          T.push(N.name + '="' + N.value + '"');
        }), T.length > 0 && (p = p + " " + T.join(" "));
        var M = x.EMPTY_TAGS.has(S);
        return p = p + (M ? "/" : "") + ">", p;
      }
      function E(S) {
        return "</" + S + ">";
      }
      function m(S, w, p) {
        w === void 0 && (w = !0), p === void 0 && (p = !1);
        var T = [], M = "";
        function N(P) {
          P = (0, d.default)(P).call(P), P && (x.EMPTY_TAGS.has(P) || (M = P));
        }
        function U() {
          M = "";
        }
        var F = new D.default();
        F.parse(S, { startElement: function(z, H) {
          if (N(z), !h(z, p)) {
            var $ = x.NECESSARY_ATTRS.get(z) || [], I = [];
            (0, f.default)(H).call(H, function(Q) {
              var K = Q.name;
              if (K === "style") {
                w || I.push(Q);
                return;
              }
              (0, g.default)($).call($, K) !== !1 && I.push(Q);
            });
            var Y = A(z, I);
            T.push(Y);
          }
        }, characters: function(z) {
          !z || h(M, p) || T.push(z);
        }, endElement: function(z) {
          if (!h(z, p)) {
            var H = E(z);
            T.push(H), U();
          }
        }, comment: function(z) {
          N(z);
        } });
        var B = T.join("");
        return B = b(B), B;
      }
      o.default = m;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(131)), f = s(t(120));
      (0, u.default)(o, "__esModule", { value: !0 }), o.TOP_LEVEL_TAGS = o.EMPTY_TAGS = o.NECESSARY_ATTRS = o.IGNORE_TAGS = void 0, o.IGNORE_TAGS = new d.default(["doctype", "!doctype", "html", "head", "meta", "body", "script", "style", "link", "frame", "iframe", "title", "svg", "center", "o:p"]), o.NECESSARY_ATTRS = new f.default([["img", ["src", "alt"]], ["a", ["href", "target"]], ["td", ["colspan", "rowspan"]], ["th", ["colspan", "rowspan"]]]), o.EMPTY_TAGS = new d.default(["area", "base", "basefont", "br", "col", "hr", "img", "input", "isindex", "embed"]), o.TOP_LEVEL_TAGS = new d.default(["h1", "h2", "h3", "h4", "h5", "p", "ul", "ol", "table", "blockquote", "pre", "hr", "form"]);
    }, function(l, o, t) {
      var s = t(295);
      l.exports = s;
    }, function(l, o, t) {
      t(296), t(61), t(50), t(54);
      var s = t(9);
      l.exports = s.Set;
    }, function(l, o, t) {
      var s = t(121), u = t(123);
      l.exports = s("Set", function(d) {
        return function() {
          return d(this, arguments.length ? arguments[0] : void 0);
        };
      }, u);
    }, function(l, o) {
      function t() {
      }
      t.prototype = {
        handler: null,
        startTagRe: /^<([^>\s\/]+)((\s+[^=>\s]+(\s*=\s*((\"[^"]*\")|(\'[^']*\')|[^>\s]+))?)*)\s*\/?\s*>/m,
        endTagRe: /^<\/([^>\s]+)[^>]*>/m,
        attrRe: /([^=\s]+)(\s*=\s*((\"([^"]*)\")|(\'([^']*)\')|[^>\s]+))?/gm,
        parse: function(u, d) {
          d && (this.contentHandler = d);
          for (var f, g, C, x = !1, D = this; u.length > 0; )
            u.substring(0, 4) == "<!--" ? (C = u.indexOf("-->"), C != -1 ? (this.contentHandler.comment(u.substring(4, C)), u = u.substring(C + 3), x = !1) : x = !0) : u.substring(0, 2) == "</" ? this.endTagRe.test(u) ? (f = RegExp.lastMatch, g = RegExp.rightContext, f.replace(this.endTagRe, function() {
              return D.parseEndTag.apply(D, arguments);
            }), u = g, x = !1) : x = !0 : u.charAt(0) == "<" && (this.startTagRe.test(u) ? (f = RegExp.lastMatch, g = RegExp.rightContext, f.replace(this.startTagRe, function() {
              return D.parseStartTag.apply(D, arguments);
            }), u = g, x = !1) : x = !0), x && (C = u.indexOf("<"), C == -1 ? (this.contentHandler.characters(u), u = "") : (this.contentHandler.characters(u.substring(0, C)), u = u.substring(C))), x = !0;
        },
        parseStartTag: function(u, d, f) {
          var g = this.parseAttributes(d, f);
          this.contentHandler.startElement(d, g);
        },
        parseEndTag: function(u, d) {
          this.contentHandler.endElement(d);
        },
        parseAttributes: function(u, d) {
          var f = this, g = [];
          return d.replace(this.attrRe, function(C, x, D, b, h, A, E, m) {
            g.push(f.parseAttribute(u, C, x, D, b, h, A, E, m));
          }), g;
        },
        parseAttribute: function(u, d, f) {
          var g = "";
          arguments[7] ? g = arguments[8] : arguments[5] ? g = arguments[6] : arguments[3] && (g = arguments[4]);
          var C = !g && !arguments[3];
          return { name: f, value: C ? null : g };
        }
      }, l.exports = t;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      function d(f, g) {
        function C(x) {
          f.selection.createRangeByElem(x), f.selection.restoreSelection();
        }
        g.push(C);
      }
      o.default = d;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), g = t(6), C = f.__importDefault(t(3));
      function x(D) {
        var b = [], h = D.childNodes() || [];
        return (0, d.default)(h).call(h, function(A) {
          var E, m = A.nodeType;
          if (m === 3 && (E = A.textContent || "", E = g.replaceHtmlSymbol(E)), m === 1) {
            E = {}, E = E, E.tag = A.nodeName.toLowerCase();
            for (var S = [], w = A.attributes, p = w.length || 0, T = 0; T < p; T++) {
              var M = w[T];
              S.push({ name: M.name, value: M.value });
            }
            E.attrs = S, E.children = x(C.default(A));
          }
          E && b.push(E);
        }), b;
      }
      o.default = x;
    }, function(l, o, t) {
      var s = t(0), u = s(t(92)), d = s(t(1)), f = s(t(4));
      (0, d.default)(o, "__esModule", { value: !0 });
      var g = t(2), C = g.__importDefault(t(3));
      function x(D, b) {
        b === void 0 && (b = document.createElement("div"));
        var h = b;
        return (0, f.default)(D).call(D, function(A) {
          var E;
          if (typeof A == "string" && (E = document.createTextNode(A)), (0, u.default)(A) === "object") {
            var m;
            E = document.createElement(A.tag), (0, f.default)(m = A.attrs).call(m, function(S) {
              C.default(E).attr(S.name, S.value);
            }), A.children && A.children.length > 0 && x(A.children, E.getRootNode());
          }
          E && h.appendChild(E);
        }), C.default(h);
      }
      o.default = x;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(89)), f = s(t(70)), g = s(t(44)), C = s(t(302)), x = s(t(4)), D = s(t(94)), b = s(t(132)), h = s(t(46)), A = s(t(57));
      (0, u.default)(o, "__esModule", { value: !0 });
      var E = t(2), m = E.__importDefault(t(87)), S = E.__importDefault(t(314)), w = E.__importDefault(t(3)), p = function() {
        function T(M) {
          this.editor = M, this.menuList = [], this.constructorList = S.default;
        }
        return T.prototype.extend = function(M, N) {
          !N || typeof N != "function" || (this.constructorList[M] = N);
        }, T.prototype.init = function() {
          var M, N, U = this, F = this.editor.config, B = F.excludeMenus;
          (0, d.default)(B) === !1 && (B = []), F.menus = (0, f.default)(M = F.menus).call(M, function(K) {
            return (0, g.default)(B).call(B, K) === !1;
          });
          var P = (0, C.default)(m.default.globalCustomMenuConstructorList);
          P = (0, f.default)(P).call(P, function(K) {
            return (0, g.default)(B).call(B, K);
          }), (0, x.default)(P).call(P, function(K) {
            delete m.default.globalCustomMenuConstructorList[K];
          }), (0, x.default)(N = F.menus).call(N, function(K) {
            var q = U.constructorList[K];
            U._initMenuList(K, q);
          });
          for (var z = 0, H = (0, D.default)(m.default.globalCustomMenuConstructorList); z < H.length; z++) {
            var $ = H[z], I = $[0], Y = $[1], Q = Y;
            this._initMenuList(I, Q);
          }
          this._addToToolbar(), F.showMenuTooltips && this._bindMenuTooltips();
        }, T.prototype._initMenuList = function(M, N) {
          var U;
          if (!(N == null || typeof N != "function"))
            if ((0, b.default)(U = this.menuList).call(U, function(B) {
              return B.key === M;
            }))
              console.warn("\u83DC\u5355\u540D\u79F0\u91CD\u590D:" + M);
            else {
              var F = new N(this.editor);
              F.key = M, this.menuList.push(F);
            }
        }, T.prototype._bindMenuTooltips = function() {
          var M = this.editor, N = M.$toolbarElem, U = M.config, F = U.menuTooltipPosition, B = w.default('<div class="w-e-menu-tooltip w-e-menu-tooltip-' + F + `">
            <div class="w-e-menu-tooltip-item-wrapper">
              <div></div>
            </div>
          </div>`);
          B.css("visibility", "hidden"), N.append(B), B.css("z-index", M.zIndex.get("tooltip"));
          var P = 0;
          function z() {
            P && clearTimeout(P);
          }
          function H() {
            z(), B.css("visibility", "hidden");
          }
          N.on("mouseover", function($) {
            var I = $.target, Y = w.default(I), Q, K;
            if (Y.isContain(N)) {
              H();
              return;
            }
            if (Y.parentUntil(".w-e-droplist") != null)
              H();
            else if (Y.attr("data-title"))
              Q = Y.attr("data-title"), K = Y;
            else {
              var q = Y.parentUntil(".w-e-menu");
              q != null && (Q = q.attr("data-title"), K = q);
            }
            if (Q && K) {
              z();
              var X = K.getOffsetData();
              B.text(M.i18next.t("menus.title." + Q));
              var _ = B.getOffsetData(), le = X.left + X.width / 2 - _.width / 2;
              B.css("left", le + "px"), F === "up" ? B.css("top", X.top - _.height - 8 + "px") : F === "down" && B.css("top", X.top + X.height + 8 + "px"), P = (0, h.default)(function() {
                B.css("visibility", "visible");
              }, 200);
            } else
              H();
          }).on("mouseleave", function() {
            H();
          });
        }, T.prototype._addToToolbar = function() {
          var M, N = this.editor, U = N.$toolbarElem;
          (0, x.default)(M = this.menuList).call(M, function(F) {
            var B = F.$elem;
            B && U.append(B);
          });
        }, T.prototype.menuFind = function(M) {
          for (var N = this.menuList, U = 0, F = N.length; U < F; U++)
            if (N[U].key === M)
              return N[U];
          return N[0];
        }, T.prototype.changeActive = function() {
          var M;
          (0, x.default)(M = this.menuList).call(M, function(N) {
            var U;
            (0, h.default)((0, A.default)(U = N.tryChangeActive).call(U, N), 100);
          });
        }, T;
      }();
      o.default = p;
    }, function(l, o, t) {
      l.exports = t(303);
    }, function(l, o, t) {
      var s = t(304);
      l.exports = s;
    }, function(l, o, t) {
      t(305);
      var s = t(9);
      l.exports = s.Object.keys;
    }, function(l, o, t) {
      var s = t(5), u = t(29), d = t(52), f = t(11), g = f(function() {
        d(1);
      });
      s({ target: "Object", stat: !0, forced: g }, { keys: function(x) {
        return d(u(x));
      } });
    }, function(l, o, t) {
      var s = t(307);
      l.exports = s;
    }, function(l, o, t) {
      t(308);
      var s = t(9);
      l.exports = s.Object.entries;
    }, function(l, o, t) {
      var s = t(5), u = t(309).entries;
      s({ target: "Object", stat: !0 }, { entries: function(f) {
        return u(f);
      } });
    }, function(l, o, t) {
      var s = t(14), u = t(52), d = t(28), f = t(59).f, g = function(x) {
        return function(D) {
          for (var b = d(D), h = u(b), A = h.length, E = 0, m = [], S; A > E; )
            S = h[E++], (!s || f.call(b, S)) && m.push(x ? [S, b[S]] : b[S]);
          return m;
        };
      };
      l.exports = {
        entries: g(!0),
        values: g(!1)
      };
    }, function(l, o, t) {
      var s = t(311);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(312), u = Array.prototype;
      l.exports = function(d) {
        var f = d.some;
        return d === u || d instanceof Array && f === u.some ? s : f;
      };
    }, function(l, o, t) {
      t(313);
      var s = t(15);
      l.exports = s("Array").some;
    }, function(l, o, t) {
      var s = t(5), u = t(30).some, d = t(67), f = t(22), g = d("some"), C = f("some");
      s({ target: "Array", proto: !0, forced: !g || !C }, { some: function(D) {
        return u(this, D, arguments.length > 1 ? arguments[1] : void 0);
      } });
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(315)), g = d.__importDefault(t(316)), C = d.__importDefault(t(321)), x = d.__importDefault(t(326)), D = d.__importDefault(t(327)), b = d.__importDefault(t(328)), h = d.__importDefault(t(329)), A = d.__importDefault(t(331)), E = d.__importDefault(t(333)), m = d.__importDefault(t(334)), S = d.__importDefault(t(337)), w = d.__importDefault(t(338)), p = d.__importDefault(t(339)), T = d.__importDefault(t(350)), M = d.__importDefault(t(365)), N = d.__importDefault(t(369)), U = d.__importDefault(t(137)), F = d.__importDefault(t(378)), B = d.__importDefault(t(380)), P = d.__importDefault(t(381)), z = d.__importDefault(t(382)), H = d.__importDefault(t(401)), $ = d.__importDefault(t(406)), I = d.__importDefault(t(409));
      o.default = { bold: f.default, head: g.default, italic: x.default, link: C.default, underline: D.default, strikeThrough: b.default, fontName: h.default, fontSize: A.default, justify: E.default, quote: m.default, backColor: S.default, foreColor: w.default, video: p.default, image: T.default, indent: M.default, emoticon: N.default, list: U.default, lineHeight: F.default, undo: B.default, redo: P.default, table: z.default, code: H.default, splitLine: $.default, todo: I.default };
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(23)), g = d.__importDefault(t(3)), C = function(x) {
        d.__extends(D, x);
        function D(b) {
          var h = this, A = g.default(`<div class="w-e-menu" data-title="\u52A0\u7C97">
                <i class="w-e-icon-bold"></i>
            </div>`);
          return h = x.call(this, A, b) || this, h;
        }
        return D.prototype.clickHandler = function() {
          var b = this.editor, h = b.selection.isSelectionEmpty();
          h && b.selection.createEmptyRange(), b.cmd.do("bold"), h && (b.selection.collapseRange(), b.selection.restoreSelection());
        }, D.prototype.tryChangeActive = function() {
          var b = this.editor;
          b.cmd.queryCommandState("bold") ? this.active() : this.unActive();
        }, D;
      }(f.default);
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(27)), f = s(t(31)), g = s(t(4)), C = s(t(317)), x = s(t(44));
      (0, u.default)(o, "__esModule", { value: !0 });
      var D = t(2), b = D.__importDefault(t(24)), h = D.__importDefault(t(3)), A = t(6), E = t(7), m = function(S) {
        D.__extends(w, S);
        function w(p) {
          var T = this, M = h.default('<div class="w-e-menu" data-title="\u6807\u9898"><i class="w-e-icon-header"></i></div>'), N = { width: 100, title: "\u8BBE\u7F6E\u6807\u9898", type: "list", list: [{ $elem: h.default("<h1>H1</h1>"), value: "<h1>" }, { $elem: h.default("<h2>H2</h2>"), value: "<h2>" }, { $elem: h.default("<h3>H3</h3>"), value: "<h3>" }, { $elem: h.default("<h4>H4</h4>"), value: "<h4>" }, { $elem: h.default("<h5>H5</h5>"), value: "<h5>" }, { $elem: h.default("<p>" + p.i18next.t("menus.dropListMenu.head.\u6B63\u6587") + "</p>"), value: "<p>" }], clickHandler: function(B) {
            T.command(B);
          } };
          T = S.call(this, M, p, N) || this;
          var U = p.config.onCatalogChange;
          return U && (T.oldCatalogs = [], T.addListenerCatalog(), T.getCatalogs()), T;
        }
        return w.prototype.command = function(p) {
          var T = this.editor, M = T.selection.getSelectionContainerElem();
          if (M && T.$textElem.equal(M))
            this.setMultilineHead(p);
          else {
            var N;
            if ((0, d.default)(N = ["OL", "UL", "LI", "TABLE", "TH", "TR", "CODE", "HR"]).call(N, h.default(M).getNodeName()) > -1)
              return;
            T.cmd.do("formatBlock", p);
          }
          p !== "<p>" && this.addUidForSelectionElem();
        }, w.prototype.addUidForSelectionElem = function() {
          var p = this.editor, T = p.selection.getSelectionContainerElem(), M = A.getRandomCode();
          h.default(T).attr("id", M);
        }, w.prototype.addListenerCatalog = function() {
          var p = this, T = this.editor;
          T.txt.eventHooks.changeEvents.push(function() {
            p.getCatalogs();
          });
        }, w.prototype.getCatalogs = function() {
          var p = this.editor, T = this.editor.$textElem, M = p.config.onCatalogChange, N = (0, f.default)(T).call(T, "h1,h2,h3,h4,h5"), U = [];
          (0, g.default)(N).call(N, function(F, B) {
            var P = h.default(F), z = P.attr("id"), H = P.getNodeName(), $ = P.text();
            z || (z = A.getRandomCode(), P.attr("id", z)), $ && U.push({ tag: H, id: z, text: $ });
          }), (0, C.default)(this.oldCatalogs) !== (0, C.default)(U) && (this.oldCatalogs = U, M && M(U));
        }, w.prototype.setMultilineHead = function(p) {
          var T = this, M, N, U = this.editor, F = U.selection, B = (M = F.getSelectionContainerElem()) === null || M === void 0 ? void 0 : M.elems[0], P = ["IMG", "VIDEO", "TABLE", "TH", "TR", "UL", "OL", "PRE", "HR", "BLOCKQUOTE"], z = h.default(F.getSelectionStartElem()), H = h.default(F.getSelectionEndElem());
          H.elems[0].outerHTML === h.default(E.EMPTY_P).elems[0].outerHTML && !H.elems[0].nextSibling && (H = H.prev());
          var $ = [];
          $.push(z.getNodeTop(U));
          var I = [], Y = (N = F.getRange()) === null || N === void 0 ? void 0 : N.commonAncestorContainer.childNodes;
          Y == null || (0, g.default)(Y).call(Y, function(q, X) {
            q === $[0].getNode() && I.push(X), q === H.getNodeTop(U).getNode() && I.push(X);
          });
          for (var Q = 0; $[Q].getNode() !== H.getNodeTop(U).getNode(); ) {
            if (!$[Q].elems[0])
              return;
            var K = h.default($[Q].next().getNode());
            $.push(K), Q++;
          }
          $ == null || (0, g.default)($).call($, function(q, X) {
            if (!T.hasTag(q, P)) {
              var _ = h.default(p), le = q.parent().getNode();
              _.html("" + q.html()), le.insertBefore(_.getNode(), q.getNode()), q.remove();
            }
          }), F.createRangeByElems(B.children[I[0]], B.children[I[1]]);
        }, w.prototype.hasTag = function(p, T) {
          var M = this, N;
          if (!p)
            return !1;
          if ((0, x.default)(T).call(T, p == null ? void 0 : p.getNodeName()))
            return !0;
          var U = !1;
          return (N = p.children()) === null || N === void 0 || (0, g.default)(N).call(N, function(F) {
            U = M.hasTag(h.default(F), T);
          }), U;
        }, w.prototype.tryChangeActive = function() {
          var p = this.editor, T = /^h/i, M = p.cmd.queryCommandValue("formatBlock");
          T.test(M) ? this.active() : this.unActive();
        }, w;
      }(b.default);
      o.default = m;
    }, function(l, o, t) {
      l.exports = t(318);
    }, function(l, o, t) {
      var s = t(319);
      l.exports = s;
    }, function(l, o, t) {
      t(320);
      var s = t(9);
      s.JSON || (s.JSON = { stringify: JSON.stringify }), l.exports = function(d, f, g) {
        return s.JSON.stringify.apply(null, arguments);
      };
    }, function(l, o, t) {
      var s = t(5), u = t(35), d = t(11), f = u("JSON", "stringify"), g = /[\uD800-\uDFFF]/g, C = /^[\uD800-\uDBFF]$/, x = /^[\uDC00-\uDFFF]$/, D = function(A, E, m) {
        var S = m.charAt(E - 1), w = m.charAt(E + 1);
        return C.test(A) && !x.test(w) || x.test(A) && !C.test(S) ? "\\u" + A.charCodeAt(0).toString(16) : A;
      }, b = d(function() {
        return f("\uDF06\uD834") !== '"\\udf06\\ud834"' || f("\uDEAD") !== '"\\udead"';
      });
      f && s({ target: "JSON", stat: !0, forced: b }, {
        stringify: function(A, E, m) {
          var S = f.apply(null, arguments);
          return typeof S == "string" ? S.replace(g, D) : S;
        }
      });
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(17));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), g = f.__importDefault(t(37)), C = f.__importDefault(t(3)), x = f.__importDefault(t(322)), D = f.__importDefault(t(134)), b = f.__importDefault(t(32)), h = f.__importDefault(t(324)), A = t(7), E = function(m) {
        f.__extends(S, m);
        function S(w) {
          var p = this, T = C.default('<div class="w-e-menu" data-title="\u94FE\u63A5"><i class="w-e-icon-link"></i></div>');
          return p = m.call(this, T, w) || this, h.default(w), p;
        }
        return S.prototype.clickHandler = function() {
          var w = this.editor, p, T = w.selection.getSelectionContainerElem(), M = w.$textElem, N = M.html(), U = (0, d.default)(N).call(N);
          if (U === A.EMPTY_P) {
            var F = M.children();
            w.selection.createRangeByElem(F, !0, !0), T = w.selection.getSelectionContainerElem();
          }
          if (!(T && w.$textElem.equal(T)))
            if (this.isActive) {
              if (p = w.selection.getSelectionContainerElem(), !p)
                return;
              this.createPanel(p.text(), p.attr("href"));
            } else
              w.selection.isSelectionEmpty() ? this.createPanel("", "") : this.createPanel(w.selection.getSelectionText(), "");
        }, S.prototype.createPanel = function(w, p) {
          var T = x.default(this.editor, w, p), M = new b.default(this, T);
          M.create();
        }, S.prototype.tryChangeActive = function() {
          var w = this.editor;
          D.default(w) ? this.active() : this.unActive();
        }, S;
      }(g.default);
      o.default = E;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(17));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), g = t(6), C = f.__importDefault(t(3)), x = f.__importDefault(t(134)), D = t(323);
      function b(h, A, E) {
        var m = g.getRandom("input-link"), S = g.getRandom("input-text"), w = g.getRandom("btn-ok"), p = g.getRandom("btn-del"), T = x.default(h) ? "inline-block" : "none", M;
        function N() {
          if (!!x.default(h)) {
            var z = h.selection.getSelectionContainerElem();
            !z || (h.selection.createRangeByElem(z), h.selection.restoreSelection(), M = z);
          }
        }
        function U(z, H) {
          var $ = new RegExp(/(<\/*ul>)|(<\/*li>)|(<\/*ol>)/g);
          z = z.replace($, ""), x.default(h) && N(), h.cmd.do("insertHTML", '<a href="' + H + '" target="_blank">' + z + "</a>");
        }
        function F() {
          if (!!x.default(h)) {
            N();
            var z = M.text();
            h.cmd.do("insertHTML", "<span>" + z + "</span>");
          }
        }
        function B(z, H) {
          var $ = h.config.linkCheck(z, H);
          if ($ !== void 0) {
            if ($ === !0)
              return !0;
            h.config.customAlert($, "warning");
          }
          return !1;
        }
        var P = {
          width: 300,
          height: 0,
          tabs: [{
            title: h.i18next.t("menus.panelMenus.link.\u94FE\u63A5"),
            tpl: `<div>
                        <input
                            id="` + S + `"
                            type="text"
                            class="block"
                            value="` + A + `"
                            placeholder="` + h.i18next.t("menus.panelMenus.link.\u94FE\u63A5\u6587\u5B57") + `"/>
                        </td>
                        <input
                            id="` + m + `"
                            type="text"
                            class="block"
                            value="` + E + `"
                            placeholder="` + h.i18next.t("\u5982") + ` https://..."/>
                        </td>
                        <div class="w-e-button-container">
                            <button type="button" id="` + w + `" class="right">
                                ` + h.i18next.t("\u63D2\u5165") + `
                            </button>
                            <button type="button" id="` + p + '" class="gray right" style="display:' + T + `">
                                ` + h.i18next.t("menus.panelMenus.link.\u53D6\u6D88\u94FE\u63A5") + `
                            </button>
                        </div>
                    </div>`,
            events: [
              { selector: "#" + w, type: "click", fn: function() {
                var H, $, I, Y;
                h.selection.restoreSelection();
                var Q = h.selection.getSelectionRangeTopNodes()[0].getNode(), K = window.getSelection(), q = C.default("#" + m), X = C.default("#" + S), _ = (0, d.default)(H = q.val()).call(H), le = (0, d.default)($ = X.val()).call($), Se = "";
                K && !(K != null && K.isCollapsed) && (Se = (I = D.insertHtml(K, Q)) === null || I === void 0 ? void 0 : (0, d.default)(I).call(I));
                var ve = Se == null ? void 0 : Se.replace(/<.*?>/g, ""), ce = (Y = ve == null ? void 0 : ve.length) !== null && Y !== void 0 ? Y : 0;
                if (ce <= le.length) {
                  var ae = le.substring(0, ce), re = le.substring(ce);
                  ve === ae && (le = Se + re);
                }
                if (!!_ && (le || (le = _), !!B(le, _)))
                  return U(le, _), !0;
              }, bindEnter: !0 },
              { selector: "#" + p, type: "click", fn: function() {
                return F(), !0;
              } }
            ]
          }]
        };
        return P;
      }
      o.default = b;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 }), o.insertHtml = o.createPartHtml = o.makeHtmlString = o.getTopNode = void 0;
      function f(h, A) {
        var E = h, m = h;
        do {
          if (E.textContent === A)
            break;
          m = E, E.parentNode && (E = E == null ? void 0 : E.parentNode);
        } while ((E == null ? void 0 : E.nodeName) !== "P");
        return m;
      }
      o.getTopNode = f;
      function g(h, A) {
        var E = h.nodeName, m = "";
        if (h.nodeType === 3 || /^(h|H)[1-6]$/.test(E))
          return A;
        if (h.nodeType === 1) {
          var S = h.getAttribute("style"), w = h.getAttribute("face"), p = h.getAttribute("color");
          S && (m = m + (' style="' + S + '"')), w && (m = m + (' face="' + w + '"')), p && (m = m + (' color="' + p + '"'));
        }
        return E = E.toLowerCase(), "<" + E + m + ">" + A + "</" + E + ">";
      }
      o.makeHtmlString = g;
      function C(h, A, E, m) {
        var S, w = (S = A.textContent) === null || S === void 0 ? void 0 : S.substring(E, m), p = A, T = "";
        do
          T = g(p, w != null ? w : ""), w = T, p = p == null ? void 0 : p.parentElement;
        while (p && p.textContent !== h);
        return T;
      }
      o.createPartHtml = C;
      function x(h, A) {
        var E, m, S, w, p, T = h.anchorNode, M = h.focusNode, N = h.anchorOffset, U = h.focusOffset, F = (E = A.textContent) !== null && E !== void 0 ? E : "", B = D(A), P = "", z = "", H = "", $ = "", I = T, Y = M, Q = T;
        if (T != null && T.isEqualNode(M != null ? M : null)) {
          var K = C(F, T, N, U);
          return K = b(B, K), K;
        }
        for (T && (z = C(F, T, N != null ? N : 0)), M && ($ = C(F, M, 0, U)), T && (I = f(T, F)), M && (Y = f(M, F)), Q = (m = I == null ? void 0 : I.nextSibling) !== null && m !== void 0 ? m : T; !(Q != null && Q.isEqualNode(Y != null ? Y : null)); ) {
          var q = Q == null ? void 0 : Q.nodeName;
          if (q === "#text")
            H = H + (Q == null ? void 0 : Q.textContent);
          else {
            var X = (w = (S = Q == null ? void 0 : Q.firstChild) === null || S === void 0 ? void 0 : S.parentElement) === null || w === void 0 ? void 0 : w.innerHTML;
            Q && (H = H + g(Q, X != null ? X : ""));
          }
          var _ = (p = Q == null ? void 0 : Q.nextSibling) !== null && p !== void 0 ? p : Q;
          if (_ === Q)
            break;
          Q = _;
        }
        return P = "" + z + H + $, P = b(B, P), P;
      }
      o.insertHtml = x;
      function D(h) {
        for (var A, E = (A = h.textContent) !== null && A !== void 0 ? A : "", m = []; (h == null ? void 0 : h.textContent) === E; )
          h.nodeName !== "P" && h.nodeName !== "TABLE" && m.push(h), h = h.childNodes[0];
        return m;
      }
      function b(h, A) {
        return (0, d.default)(h).call(h, function(E) {
          A = g(E, A);
        }), A;
      }
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(325));
      function g(C) {
        f.default(C);
      }
      o.default = g;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(3)), g = d.__importDefault(t(38));
      function C(D) {
        var b;
        function h(E) {
          var m = [{ $elem: f.default("<span>" + D.i18next.t("menus.panelMenus.link.\u67E5\u770B\u94FE\u63A5") + "</span>"), onClick: function(w, p) {
            var T = p.attr("href");
            return window.open(T, "_target"), !0;
          } }, { $elem: f.default("<span>" + D.i18next.t("menus.panelMenus.link.\u53D6\u6D88\u94FE\u63A5") + "</span>"), onClick: function(w, p) {
            var T, M;
            w.selection.createRangeByElem(p), w.selection.restoreSelection();
            var N = p.childNodes();
            if ((N == null ? void 0 : N.getNodeName()) === "IMG") {
              var U = (M = (T = w.selection.getSelectionContainerElem()) === null || T === void 0 ? void 0 : T.children()) === null || M === void 0 ? void 0 : M.elems[0].children[0];
              w.cmd.do("insertHTML", `<img 
                                src=` + (U == null ? void 0 : U.getAttribute("src")) + ` 
                                style=` + (U == null ? void 0 : U.getAttribute("style")) + ">");
            } else {
              var F = p.text();
              w.cmd.do("insertHTML", "<span>" + F + "</span>");
            }
            return !0;
          } }];
          b = new g.default(D, E, m), b.create();
        }
        function A() {
          b && (b.remove(), b = null);
        }
        return { showLinkTooltip: h, hideLinkTooltip: A };
      }
      function x(D) {
        var b = C(D), h = b.showLinkTooltip, A = b.hideLinkTooltip;
        D.txt.eventHooks.linkClickEvents.push(h), D.txt.eventHooks.clickEvents.push(A), D.txt.eventHooks.keyupEvents.push(A), D.txt.eventHooks.toolbarClickEvents.push(A), D.txt.eventHooks.menuClickEvents.push(A), D.txt.eventHooks.textScrollEvents.push(A);
      }
      o.default = x;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(23)), g = d.__importDefault(t(3)), C = function(x) {
        d.__extends(D, x);
        function D(b) {
          var h = this, A = g.default(`<div class="w-e-menu" data-title="\u659C\u4F53">
                <i class="w-e-icon-italic"></i>
            </div>`);
          return h = x.call(this, A, b) || this, h;
        }
        return D.prototype.clickHandler = function() {
          var b = this.editor, h = b.selection.isSelectionEmpty();
          h && b.selection.createEmptyRange(), b.cmd.do("italic"), h && (b.selection.collapseRange(), b.selection.restoreSelection());
        }, D.prototype.tryChangeActive = function() {
          var b = this.editor;
          b.cmd.queryCommandState("italic") ? this.active() : this.unActive();
        }, D;
      }(f.default);
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(23)), g = d.__importDefault(t(3)), C = function(x) {
        d.__extends(D, x);
        function D(b) {
          var h = this, A = g.default(`<div class="w-e-menu" data-title="\u4E0B\u5212\u7EBF">
                <i class="w-e-icon-underline"></i>
            </div>`);
          return h = x.call(this, A, b) || this, h;
        }
        return D.prototype.clickHandler = function() {
          var b = this.editor, h = b.selection.isSelectionEmpty();
          h && b.selection.createEmptyRange(), b.cmd.do("underline"), h && (b.selection.collapseRange(), b.selection.restoreSelection());
        }, D.prototype.tryChangeActive = function() {
          var b = this.editor;
          b.cmd.queryCommandState("underline") ? this.active() : this.unActive();
        }, D;
      }(f.default);
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(23)), g = d.__importDefault(t(3)), C = function(x) {
        d.__extends(D, x);
        function D(b) {
          var h = this, A = g.default(`<div class="w-e-menu" data-title="\u5220\u9664\u7EBF">
                <i class="w-e-icon-strikethrough"></i>
            </div>`);
          return h = x.call(this, A, b) || this, h;
        }
        return D.prototype.clickHandler = function() {
          var b = this.editor, h = b.selection.isSelectionEmpty();
          h && b.selection.createEmptyRange(), b.cmd.do("strikeThrough"), h && (b.selection.collapseRange(), b.selection.restoreSelection());
        }, D.prototype.tryChangeActive = function() {
          var b = this.editor;
          b.cmd.queryCommandState("strikeThrough") ? this.active() : this.unActive();
        }, D;
      }(f.default);
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(24)), g = d.__importDefault(t(3)), C = d.__importDefault(t(330)), x = function(D) {
        d.__extends(b, D);
        function b(h) {
          var A = this, E = g.default(`<div class="w-e-menu" data-title="\u5B57\u4F53">
                <i class="w-e-icon-font"></i>
            </div>`), m = new C.default(h.config.fontNames), S = { width: 100, title: "\u8BBE\u7F6E\u5B57\u4F53", type: "list", list: m.getItemList(), clickHandler: function(p) {
            A.command(p);
          } };
          return A = D.call(this, E, h, S) || this, A;
        }
        return b.prototype.command = function(h) {
          var A, E = this.editor, m = E.selection.isSelectionEmpty(), S = (A = E.selection.getSelectionContainerElem()) === null || A === void 0 ? void 0 : A.elems[0];
          if (S != null) {
            var w = (S == null ? void 0 : S.nodeName.toLowerCase()) !== "p", p = (S == null ? void 0 : S.getAttribute("face")) === h;
            if (m) {
              if (w && !p) {
                var T = E.selection.getSelectionRangeTopNodes();
                E.selection.createRangeByElem(T[0]), E.selection.moveCursor(T[0].elems[0]);
              }
              E.selection.setRangeToElem(S), E.selection.createEmptyRange();
            }
            E.cmd.do("fontName", h), m && (E.selection.collapseRange(), E.selection.restoreSelection());
          }
        }, b.prototype.tryChangeActive = function() {
        }, b;
      }(f.default);
      o.default = x;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), g = f.__importDefault(t(3)), C = function() {
        function x(D) {
          var b = this;
          this.itemList = [], (0, d.default)(D).call(D, function(h) {
            var A = typeof h == "string" ? h : h.value, E = typeof h == "string" ? h : h.name;
            b.itemList.push({ $elem: g.default(`<p style="font-family:'` + A + `'">` + E + "</p>"), value: E });
          });
        }
        return x.prototype.getItemList = function() {
          return this.itemList;
        }, x;
      }();
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(24)), g = d.__importDefault(t(3)), C = d.__importDefault(t(332)), x = function(D) {
        d.__extends(b, D);
        function b(h) {
          var A = this, E = g.default(`<div class="w-e-menu" data-title="\u5B57\u53F7">
                <i class="w-e-icon-text-heigh"></i>
            </div>`), m = new C.default(h.config.fontSizes), S = { width: 160, title: "\u8BBE\u7F6E\u5B57\u53F7", type: "list", list: m.getItemList(), clickHandler: function(p) {
            A.command(p);
          } };
          return A = D.call(this, E, h, S) || this, A;
        }
        return b.prototype.command = function(h) {
          var A, E = this.editor, m = E.selection.isSelectionEmpty(), S = (A = E.selection.getSelectionContainerElem()) === null || A === void 0 ? void 0 : A.elems[0];
          S != null && (E.cmd.do("fontSize", h), m && (E.selection.collapseRange(), E.selection.restoreSelection()));
        }, b.prototype.tryChangeActive = function() {
        }, b;
      }(f.default);
      o.default = x;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(3)), g = function() {
        function C(x) {
          this.itemList = [];
          for (var D in x) {
            var b = x[D];
            this.itemList.push({ $elem: f.default('<p style="font-size:' + D + '">' + b.name + "</p>"), value: b.value });
          }
        }
        return C.prototype.getItemList = function() {
          return this.itemList;
        }, C;
      }();
      o.default = g;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4)), f = s(t(27));
      (0, u.default)(o, "__esModule", { value: !0 });
      var g = t(2), C = g.__importDefault(t(24)), x = g.__importDefault(t(3)), D = ["LI"], b = ["UL", "BLOCKQUOTE"], h = function(A) {
        g.__extends(E, A);
        function E(m) {
          var S = this, w = x.default('<div class="w-e-menu" data-title="\u5BF9\u9F50"><i class="w-e-icon-paragraph-left"></i></div>'), p = { width: 100, title: "\u5BF9\u9F50\u65B9\u5F0F", type: "list", list: [{ $elem: x.default(`<p>
                            <i class="w-e-icon-paragraph-left w-e-drop-list-item"></i>
                            ` + m.i18next.t("menus.dropListMenu.justify.\u9760\u5DE6") + `
                        </p>`), value: "left" }, { $elem: x.default(`<p>
                            <i class="w-e-icon-paragraph-center w-e-drop-list-item"></i>
                            ` + m.i18next.t("menus.dropListMenu.justify.\u5C45\u4E2D") + `
                        </p>`), value: "center" }, { $elem: x.default(`<p>
                            <i class="w-e-icon-paragraph-right w-e-drop-list-item"></i>
                            ` + m.i18next.t("menus.dropListMenu.justify.\u9760\u53F3") + `
                        </p>`), value: "right" }, { $elem: x.default(`<p>
                            <i class="w-e-icon-paragraph-justify w-e-drop-list-item"></i>
                            ` + m.i18next.t("menus.dropListMenu.justify.\u4E24\u7AEF") + `
                        </p>`), value: "justify" }], clickHandler: function(M) {
            S.command(M);
          } };
          return S = A.call(this, w, m, p) || this, S;
        }
        return E.prototype.command = function(m) {
          var S = this.editor, w = S.selection, p = w.getSelectionContainerElem();
          w.saveRange();
          var T = S.selection.getSelectionRangeTopNodes();
          if (p != null && p.length)
            if (this.isSpecialNode(p, T[0]) || this.isSpecialTopNode(T[0])) {
              var M = this.getSpecialNodeUntilTop(p, T[0]);
              if (M == null)
                return;
              x.default(M).css("text-align", m);
            } else
              (0, d.default)(T).call(T, function(N) {
                N.css("text-align", m);
              });
          w.restoreSelection();
        }, E.prototype.getSpecialNodeUntilTop = function(m, S) {
          for (var w = m.elems[0], p = S.elems[0]; w != null; ) {
            if ((0, f.default)(D).call(D, w == null ? void 0 : w.nodeName) !== -1 || w.parentNode === p)
              return w;
            w = w.parentNode;
          }
          return w;
        }, E.prototype.isSpecialNode = function(m, S) {
          var w = this.getSpecialNodeUntilTop(m, S);
          return w == null ? !1 : (0, f.default)(D).call(D, w.nodeName) !== -1;
        }, E.prototype.isSpecialTopNode = function(m) {
          var S;
          return m == null ? !1 : (0, f.default)(b).call(b, (S = m.elems[0]) === null || S === void 0 ? void 0 : S.nodeName) !== -1;
        }, E.prototype.tryChangeActive = function() {
        }, E;
      }(C.default);
      o.default = h;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), g = f.__importDefault(t(3)), C = f.__importDefault(t(23)), x = f.__importDefault(t(335)), D = f.__importDefault(t(336)), b = t(7), h = function(A) {
        f.__extends(E, A);
        function E(m) {
          var S = this, w = g.default(`<div class="w-e-menu" data-title="\u5F15\u7528">
                <i class="w-e-icon-quotes-left"></i>
            </div>`);
          return S = A.call(this, w, m) || this, x.default(m), S;
        }
        return E.prototype.clickHandler = function() {
          var m, S, w = this.editor, p = w.selection.isSelectionEmpty(), T = w.selection.getSelectionRangeTopNodes(), M = T[T.length - 1], N = this.getTopNodeName();
          if (N === "BLOCKQUOTE") {
            var U = g.default(M.childNodes()), F = U.length, B = M;
            (0, d.default)(U).call(U, function($) {
              var I = g.default($);
              I.insertAfter(B), B = I;
            }), M.remove(), w.selection.moveCursor(U.elems[F - 1]), this.tryChangeActive();
          } else {
            var P = D.default(T);
            if (w.$textElem.equal(M)) {
              var z = (m = w.selection.getSelectionContainerElem()) === null || m === void 0 ? void 0 : m.elems[0];
              w.selection.createRangeByElems(z.children[0], z.children[0]), T = w.selection.getSelectionRangeTopNodes(), P = D.default(T), M.append(P);
            } else
              P.insertAfter(M);
            this.delSelectNode(T);
            var H = (S = P.childNodes()) === null || S === void 0 ? void 0 : S.last().getNode();
            if (H == null)
              return;
            H.textContent ? w.selection.moveCursor(H) : w.selection.moveCursor(H, 0), this.tryChangeActive(), g.default(b.EMPTY_P).insertAfter(P);
            return;
          }
          p && (w.selection.collapseRange(), w.selection.restoreSelection());
        }, E.prototype.tryChangeActive = function() {
          var m, S = this.editor, w = (m = S.selection.getSelectionRangeTopNodes()[0]) === null || m === void 0 ? void 0 : m.getNodeName();
          w === "BLOCKQUOTE" ? this.active() : this.unActive();
        }, E.prototype.getTopNodeName = function() {
          var m = this.editor, S = m.selection.getSelectionRangeTopNodes()[0], w = S == null ? void 0 : S.getNodeName();
          return w;
        }, E.prototype.delSelectNode = function(m) {
          (0, d.default)(m).call(m, function(S) {
            S.remove();
          });
        }, E;
      }(C.default);
      o.default = h;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = t(7), g = d.__importDefault(t(3));
      function C(x) {
        function D(b) {
          var h, A = x.selection.getSelectionContainerElem(), E = x.selection.getSelectionRangeTopNodes()[0];
          if ((E == null ? void 0 : E.getNodeName()) === "BLOCKQUOTE") {
            if (A.getNodeName() === "BLOCKQUOTE") {
              var m = (h = A.childNodes()) === null || h === void 0 ? void 0 : h.getNode();
              x.selection.moveCursor(m);
            }
            if (A.text() === "") {
              b.preventDefault(), A.remove();
              var S = g.default(f.EMPTY_P);
              S.insertAfter(E), x.selection.moveCursor(S.getNode(), 0);
            }
            E.text() === "" && E.remove();
          }
        }
        x.txt.eventHooks.enterDownEvents.push(D);
      }
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), g = f.__importDefault(t(3));
      function C(x) {
        var D = g.default("<blockquote></blockquote>");
        return (0, d.default)(x).call(x, function(b) {
          D.append(b.clone(!0));
        }), D;
      }
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(26));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), g = f.__importDefault(t(24)), C = f.__importDefault(t(3)), x = t(6), D = function(b) {
        f.__extends(h, b);
        function h(A) {
          var E, m = this, S = C.default(`<div class="w-e-menu" data-title="\u80CC\u666F\u8272">
                <i class="w-e-icon-paint-brush"></i>
            </div>`), w = {
            width: 120,
            title: "\u80CC\u666F\u989C\u8272",
            type: "inline-block",
            list: (0, d.default)(E = A.config.colors).call(E, function(p) {
              return { $elem: C.default('<i style="color:' + p + ';" class="w-e-icon-paint-brush"></i>'), value: p };
            }),
            clickHandler: function(T) {
              m.command(T);
            }
          };
          return m = b.call(this, S, A, w) || this, m;
        }
        return h.prototype.command = function(A) {
          var E, m = this.editor, S = m.selection.isSelectionEmpty(), w = (E = m.selection.getSelectionContainerElem()) === null || E === void 0 ? void 0 : E.elems[0];
          if (w != null) {
            var p = (w == null ? void 0 : w.nodeName.toLowerCase()) !== "p", T = w == null ? void 0 : w.style.backgroundColor, M = x.hexToRgb(A) === T;
            if (S) {
              if (p && !M) {
                var N = m.selection.getSelectionRangeTopNodes();
                m.selection.createRangeByElem(N[0]), m.selection.moveCursor(N[0].elems[0]);
              }
              m.selection.createEmptyRange();
            }
            m.cmd.do("backColor", A), S && (m.selection.collapseRange(), m.selection.restoreSelection());
          }
        }, h.prototype.tryChangeActive = function() {
        }, h;
      }(g.default);
      o.default = D;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(26));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), g = f.__importDefault(t(24)), C = f.__importDefault(t(3)), x = function(D) {
        f.__extends(b, D);
        function b(h) {
          var A, E = this, m = C.default(`<div class="w-e-menu" data-title="\u6587\u5B57\u989C\u8272">
                <i class="w-e-icon-pencil2"></i>
            </div>`), S = {
            width: 120,
            title: "\u6587\u5B57\u989C\u8272",
            type: "inline-block",
            list: (0, d.default)(A = h.config.colors).call(A, function(w) {
              return { $elem: C.default('<i style="color:' + w + ';" class="w-e-icon-pencil2"></i>'), value: w };
            }),
            clickHandler: function(p) {
              E.command(p);
            }
          };
          return E = D.call(this, m, h, S) || this, E;
        }
        return b.prototype.command = function(h) {
          var A, E = this.editor, m = E.selection.isSelectionEmpty(), S = (A = E.selection.getSelectionContainerElem()) === null || A === void 0 ? void 0 : A.elems[0];
          if (S != null) {
            var w = E.selection.getSelectionText();
            if (S.nodeName === "A" && S.textContent === w) {
              var p = C.default("<span>&#8203;</span>").getNode();
              S.appendChild(p);
            }
            E.cmd.do("foreColor", h), m && (E.selection.collapseRange(), E.selection.restoreSelection());
          }
        }, b.prototype.tryChangeActive = function() {
        }, b;
      }(g.default);
      o.default = x;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(3)), g = d.__importDefault(t(32)), C = d.__importDefault(t(37)), x = d.__importDefault(t(340)), D = d.__importDefault(t(346)), b = function(h) {
        d.__extends(A, h);
        function A(E) {
          var m = this, S = f.default(`<div class="w-e-menu" data-title="\u89C6\u9891">
                <i class="w-e-icon-play"></i>
            </div>`);
          return m = h.call(this, S, E) || this, D.default(E), m;
        }
        return A.prototype.clickHandler = function() {
          this.createPanel("");
        }, A.prototype.createPanel = function(E) {
          var m = x.default(this.editor, E), S = new g.default(this, m);
          S.create();
        }, A.prototype.tryChangeActive = function() {
        }, A;
      }(C.default);
      o.default = b;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(17));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), g = t(6), C = f.__importDefault(t(3)), x = f.__importDefault(t(341)), D = t(7);
      function b(h, A) {
        var E = h.config, m = new x.default(h), S = g.getRandom("input-iframe"), w = g.getRandom("btn-ok"), p = g.getRandom("input-upload"), T = g.getRandom("btn-local-ok");
        function M(B) {
          h.cmd.do("insertHTML", B + D.EMPTY_P), h.config.onlineVideoCallback(B);
        }
        function N(B) {
          var P = h.config.onlineVideoCheck(B);
          return P === !0 ? !0 : (typeof P == "string" && h.config.customAlert(P, "error"), !1);
        }
        var U = [{
          title: h.i18next.t("menus.panelMenus.video.\u4E0A\u4F20\u89C6\u9891"),
          tpl: `<div class="w-e-up-video-container">
                    <div id="` + T + `" class="w-e-up-btn">
                        <i class="w-e-icon-upload2"></i>
                    </div>
                    <div style="display:none;">
                        <input id="` + p + `" type="file" accept="video/*"/>
                    </div>
                 </div>`,
          events: [
            { selector: "#" + T, type: "click", fn: function() {
              var P = C.default("#" + p), z = P.elems[0];
              if (z)
                z.click();
              else
                return !0;
            } },
            { selector: "#" + p, type: "change", fn: function() {
              var P = C.default("#" + p), z = P.elems[0];
              if (!z)
                return !0;
              var H = z.files;
              return H.length && m.uploadVideo(H), !0;
            } }
          ]
        }, {
          title: h.i18next.t("menus.panelMenus.video.\u63D2\u5165\u89C6\u9891"),
          tpl: `<div>
                    <input 
                        id="` + S + `" 
                        type="text" 
                        class="block" 
                        placeholder="` + h.i18next.t("\u5982") + `\uFF1A<iframe src=... ></iframe>"/>
                    </td>
                    <div class="w-e-button-container">
                        <button type="button" id="` + w + `" class="right">
                            ` + h.i18next.t("\u63D2\u5165") + `
                        </button>
                    </div>
                </div>`,
          events: [
            { selector: "#" + w, type: "click", fn: function() {
              var P, z = C.default("#" + S), H = (0, d.default)(P = z.val()).call(P);
              if (!!H && !!N(H))
                return M(H), !0;
            }, bindEnter: !0 }
          ]
        }], F = {
          width: 300,
          height: 0,
          tabs: []
        };
        return window.FileReader && (E.uploadVideoServer || E.customUploadVideo) && F.tabs.push(U[0]), E.showLinkVideo && F.tabs.push(U[1]), F;
      }
      o.default = b;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(132)), f = s(t(57)), g = s(t(4)), C = s(t(27));
      (0, u.default)(o, "__esModule", { value: !0 });
      var x = t(2), D = t(6), b = x.__importDefault(t(135)), h = x.__importDefault(t(136)), A = t(7), E = t(6), m = function() {
        function S(w) {
          this.editor = w;
        }
        return S.prototype.uploadVideo = function(w) {
          var p = this;
          if (!!w.length) {
            var T = this.editor, M = T.config, N = "validate.", U = function(pe) {
              return T.i18next.t(N + pe);
            }, F = M.uploadVideoServer, B = M.uploadVideoMaxSize, P = B / 1024, z = M.uploadVideoName, H = M.uploadVideoParams, $ = M.uploadVideoParamsWithUrl, I = M.uploadVideoHeaders, Y = M.uploadVideoHooks, Q = M.uploadVideoTimeout, K = M.withVideoCredentials, q = M.customUploadVideo, X = M.uploadVideoAccept, _ = [], le = [];
            if (D.arrForEach(w, function(se) {
              var pe = se.name, Pe = se.size / 1024 / 1024;
              if (!(!pe || !Pe)) {
                if (!(X instanceof Array)) {
                  le.push("\u3010" + X + "\u3011" + U("uploadVideoAccept \u4E0D\u662FArray"));
                  return;
                }
                if (!(0, d.default)(X).call(X, function(be) {
                  return be === pe.split(".")[pe.split(".").length - 1];
                })) {
                  le.push("\u3010" + pe + "\u3011" + U("\u4E0D\u662F\u89C6\u9891"));
                  return;
                }
                if (P < Pe) {
                  le.push("\u3010" + pe + "\u3011" + U("\u5927\u4E8E") + " " + P + "M");
                  return;
                }
                _.push(se);
              }
            }), le.length) {
              M.customAlert(U("\u89C6\u9891\u9A8C\u8BC1\u672A\u901A\u8FC7") + `: 
` + le.join(`
`), "warning");
              return;
            }
            if (_.length === 0) {
              M.customAlert(U("\u4F20\u5165\u7684\u6587\u4EF6\u4E0D\u5408\u6CD5"), "warning");
              return;
            }
            if (q && typeof q == "function") {
              var Se;
              q(_, (0, f.default)(Se = this.insertVideo).call(Se, this));
              return;
            }
            var ve = new FormData();
            if ((0, g.default)(_).call(_, function(se, pe) {
              var Pe = z || se.name;
              _.length > 1 && (Pe = Pe + (pe + 1)), ve.append(Pe, se);
            }), F) {
              var ce = F.split("#");
              F = ce[0];
              var ae = ce[1] || "";
              (0, g.default)(D).call(D, H, function(se, pe) {
                $ && ((0, C.default)(F).call(F, "?") > 0 ? F += "&" : F += "?", F = F + se + "=" + pe), ve.append(se, pe);
              }), ae && (F += "#" + ae);
              var re = b.default(F, { timeout: Q, formData: ve, headers: I, withCredentials: !!K, beforeSend: function(pe) {
                if (Y.before)
                  return Y.before(pe, T, _);
              }, onTimeout: function(pe) {
                M.customAlert(U("\u4E0A\u4F20\u89C6\u9891\u8D85\u65F6"), "error"), Y.timeout && Y.timeout(pe, T);
              }, onProgress: function(pe, Pe) {
                var be = new h.default(T);
                Pe.lengthComputable && (pe = Pe.loaded / Pe.total, be.show(pe));
              }, onError: function(pe) {
                M.customAlert(U("\u4E0A\u4F20\u89C6\u9891\u9519\u8BEF"), "error", U("\u4E0A\u4F20\u89C6\u9891\u9519\u8BEF") + "\uFF0C" + U("\u670D\u52A1\u5668\u8FD4\u56DE\u72B6\u6001") + ": " + pe.status), Y.error && Y.error(pe, T);
              }, onFail: function(pe, Pe) {
                M.customAlert(U("\u4E0A\u4F20\u89C6\u9891\u5931\u8D25"), "error", U("\u4E0A\u4F20\u89C6\u9891\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF") + ("\uFF0C" + U("\u8FD4\u56DE\u7ED3\u679C") + ": ") + Pe), Y.fail && Y.fail(pe, T, Pe);
              }, onSuccess: function(pe, Pe) {
                if (Y.customInsert) {
                  var be;
                  Y.customInsert((0, f.default)(be = p.insertVideo).call(be, p), Pe, T);
                  return;
                }
                if (Pe.errno != "0") {
                  M.customAlert(U("\u4E0A\u4F20\u89C6\u9891\u5931\u8D25"), "error", U("\u4E0A\u4F20\u89C6\u9891\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF") + "\uFF0C" + U("\u8FD4\u56DE\u7ED3\u679C") + " errno=" + Pe.errno), Y.fail && Y.fail(pe, T, Pe);
                  return;
                }
                var je = Pe.data;
                p.insertVideo(je.url), Y.success && Y.success(pe, T, Pe);
              } });
              typeof re == "string" && M.customAlert(re, "error");
            }
          }
        }, S.prototype.insertVideo = function(w) {
          var p = this.editor, T = p.config, M = "validate.", N = function(B, P) {
            return P === void 0 && (P = M), p.i18next.t(P + B);
          };
          if (!T.customInsertVideo)
            E.UA.isFirefox ? p.cmd.do("insertHTML", '<p data-we-video-p="true"><video src="' + w + '" controls="controls" style="max-width:100%"></video></p><p>&#8203</p>') : p.cmd.do("insertHTML", '<video src="' + w + '" controls="controls" style="max-width:100%"></video>' + A.EMPTY_P);
          else {
            T.customInsertVideo(w);
            return;
          }
          var U = document.createElement("video");
          U.onload = function() {
            U = null;
          }, U.onerror = function() {
            T.customAlert(N("\u63D2\u5165\u89C6\u9891\u9519\u8BEF"), "error", "wangEditor: " + N("\u63D2\u5165\u89C6\u9891\u9519\u8BEF") + "\uFF0C" + N("\u89C6\u9891\u94FE\u63A5") + ' "' + w + '"\uFF0C' + N("\u4E0B\u8F7D\u94FE\u63A5\u5931\u8D25")), U = null;
          }, U.onabort = function() {
            return U = null;
          }, U.src = w;
        }, S;
      }();
      o.default = m;
    }, function(l, o, t) {
      l.exports = t(343);
    }, function(l, o, t) {
      var s = t(344);
      l.exports = s;
    }, function(l, o, t) {
      t(345);
      var s = t(9);
      l.exports = s.Date.now;
    }, function(l, o, t) {
      var s = t(5);
      s({ target: "Date", stat: !0 }, { now: function() {
        return new Date().getTime();
      } });
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(347)), g = d.__importDefault(t(349));
      function C(x) {
        f.default(x), g.default(x);
      }
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.createShowHideFn = void 0;
      var d = t(2), f = d.__importDefault(t(3)), g = d.__importDefault(t(38)), C = d.__importDefault(t(348));
      function x(b) {
        var h, A = function(w, p) {
          return p === void 0 && (p = ""), b.i18next.t(p + w);
        };
        function E(S) {
          var w = [{ $elem: f.default("<span class='w-e-icon-trash-o'></span>"), onClick: function(T, M) {
            return M.remove(), !0;
          } }, { $elem: f.default("<span>100%</span>"), onClick: function(T, M) {
            return M.attr("width", "100%"), M.removeAttr("height"), !0;
          } }, { $elem: f.default("<span>50%</span>"), onClick: function(T, M) {
            return M.attr("width", "50%"), M.removeAttr("height"), !0;
          } }, { $elem: f.default("<span>30%</span>"), onClick: function(T, M) {
            return M.attr("width", "30%"), M.removeAttr("height"), !0;
          } }, { $elem: f.default("<span>" + A("\u91CD\u7F6E") + "</span>"), onClick: function(T, M) {
            return M.removeAttr("width"), M.removeAttr("height"), !0;
          } }, { $elem: f.default("<span>" + A("menus.justify.\u9760\u5DE6") + "</span>"), onClick: function(T, M) {
            return C.default(M, "left"), !0;
          } }, { $elem: f.default("<span>" + A("menus.justify.\u5C45\u4E2D") + "</span>"), onClick: function(T, M) {
            return C.default(M, "center"), !0;
          } }, { $elem: f.default("<span>" + A("menus.justify.\u9760\u53F3") + "</span>"), onClick: function(T, M) {
            return C.default(M, "right"), !0;
          } }];
          h = new g.default(b, S, w), h.create();
        }
        function m() {
          h && (h.remove(), h = null);
        }
        return { showVideoTooltip: E, hideVideoTooltip: m };
      }
      o.createShowHideFn = x;
      function D(b) {
        var h = x(b), A = h.showVideoTooltip, E = h.hideVideoTooltip;
        b.txt.eventHooks.videoClickEvents.push(A), b.txt.eventHooks.clickEvents.push(E), b.txt.eventHooks.keyupEvents.push(E), b.txt.eventHooks.toolbarClickEvents.push(E), b.txt.eventHooks.menuClickEvents.push(E), b.txt.eventHooks.textScrollEvents.push(E), b.txt.eventHooks.changeEvents.push(E);
      }
      o.default = D;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(44));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), g = f.__importDefault(t(3));
      function C(D, b) {
        var h = ["P"], A = x(D, h);
        A && g.default(A).css("text-align", b);
      }
      o.default = C;
      function x(D, b) {
        for (var h, A = D.elems[0]; A != null; ) {
          if ((0, d.default)(b).call(b, A == null ? void 0 : A.nodeName))
            return A;
          if (((h = A == null ? void 0 : A.parentNode) === null || h === void 0 ? void 0 : h.nodeName) === "BODY")
            return null;
          A = A.parentNode;
        }
        return A;
      }
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(6);
      function f(g) {
        if (!!d.UA.isFirefox) {
          var C = g.txt, x = g.selection, D = C.eventHooks.keydownEvents;
          D.push(function(b) {
            var h = x.getSelectionContainerElem();
            if (h) {
              var A = h.getNodeTop(g), E = A.length && A.prev().length ? A.prev() : null;
              E && E.attr("data-we-video-p") && x.getCursorPos() === 0 && b.keyCode === 8 && E.remove();
            }
          });
        }
      }
      o.default = f;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(26));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), g = t(7), C = f.__importDefault(t(3)), x = f.__importDefault(t(32)), D = f.__importDefault(t(37)), b = f.__importDefault(t(351)), h = f.__importDefault(t(364)), A = function(E) {
        f.__extends(m, E);
        function m(S) {
          var w = this, p = C.default('<div class="w-e-menu" data-title="\u56FE\u7247"><i class="w-e-icon-image"></i></div>'), T = h.default(S);
          if (T.onlyUploadConf) {
            var M;
            p = T.onlyUploadConf.$elem, (0, d.default)(M = T.onlyUploadConf.events).call(M, function(N) {
              var U = N.type, F = N.fn || g.EMPTY_FN;
              p.on(U, function(B) {
                B.stopPropagation(), F(B);
              });
            });
          }
          return w = E.call(this, p, S) || this, w.imgPanelConfig = T, b.default(S), w;
        }
        return m.prototype.clickHandler = function() {
          this.imgPanelConfig.onlyUploadConf || this.createPanel();
        }, m.prototype.createPanel = function() {
          var S = this.imgPanelConfig, w = new x.default(this, S);
          this.setPanel(w), w.create();
        }, m.prototype.tryChangeActive = function() {
        }, m;
      }(D.default);
      o.default = A;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(352)), g = d.__importDefault(t(353)), C = d.__importDefault(t(354)), x = d.__importDefault(t(362)), D = d.__importDefault(t(363));
      function b(h) {
        f.default(h), g.default(h), C.default(h), x.default(h), D.default(h);
      }
      o.default = b;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = t(130), g = d.__importDefault(t(96));
      function C(h, A) {
        var E = h.config, m = E.pasteFilterStyle, S = E.pasteIgnoreImg, w = f.getPasteHtml(A, m, S);
        if (w)
          return !0;
        var p = f.getPasteText(A);
        return !!p;
      }
      function x(h, A) {
        for (var E, m = ((E = A.clipboardData) === null || E === void 0 ? void 0 : E.types) || [], S = 0; S < m.length; S++) {
          var w = m[S];
          if (w === "Files")
            return !0;
        }
        return !1;
      }
      function D(h, A) {
        if (!(!x(A, h) && C(A, h))) {
          var E = f.getPasteImgs(h);
          if (!!E.length) {
            var m = new g.default(A);
            m.uploadImg(E);
          }
        }
      }
      function b(h) {
        h.txt.eventHooks.pasteEvents.unshift(function(A) {
          D(A, h);
        });
      }
      o.default = b;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(96));
      function g(C) {
        function x(D) {
          var b = D.dataTransfer && D.dataTransfer.files;
          if (!(!b || !b.length)) {
            var h = new f.default(C);
            h.uploadImg(b);
          }
        }
        C.txt.eventHooks.dropEvents.push(x);
      }
      o.default = g;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(31)), f = s(t(355));
      (0, u.default)(o, "__esModule", { value: !0 }), o.createShowHideFn = void 0;
      var g = t(2), C = g.__importDefault(t(3));
      t(360);
      var x = t(6);
      function D(m, S, w, p, T) {
        m.attr("style", "width:" + S + "px; height:" + w + "px; left:" + p + "px; top:" + T + "px;");
      }
      function b(m, S) {
        var w = C.default(`<div class="w-e-img-drag-mask">
            <div class="w-e-img-drag-show-size"></div>
            <div class="w-e-img-drag-rb"></div>
         </div>`);
        return w.hide(), S.append(w), w;
      }
      function h(m, S, w) {
        var p = m.getBoundingClientRect(), T = w.getBoundingClientRect(), M = T.width.toFixed(2), N = T.height.toFixed(2);
        (0, d.default)(S).call(S, ".w-e-img-drag-show-size").text(M + "px * " + N + "px"), D(S, (0, f.default)(M), (0, f.default)(N), T.left - p.left, T.top - p.top), S.show();
      }
      function A(m) {
        var S = m.$textContainerElem, w, p = b(m, S);
        function T(U, F) {
          U.on("click", function(B) {
            B.stopPropagation();
          }), U.on("mousedown", ".w-e-img-drag-rb", function(B) {
            if (B.preventDefault(), !w)
              return;
            var P = B.clientX, z = B.clientY, H = F.getBoundingClientRect(), $ = w.getBoundingClientRect(), I = $.width, Y = $.height, Q = $.left - H.left, K = $.top - H.top, q = I / Y, X = I, _ = Y, le = C.default(document);
            function Se() {
              le.off("mousemove", ve), le.off("mouseup", ce);
            }
            function ve(ae) {
              ae.stopPropagation(), ae.preventDefault(), X = I + (ae.clientX - P), _ = Y + (ae.clientY - z), X / _ != q && (_ = X / q), X = (0, f.default)(X.toFixed(2)), _ = (0, f.default)(_.toFixed(2)), (0, d.default)(U).call(U, ".w-e-img-drag-show-size").text(X.toFixed(2).replace(".00", "") + "px * " + _.toFixed(2).replace(".00", "") + "px"), D(U, X, _, Q, K);
            }
            le.on("mousemove", ve);
            function ce() {
              w.attr("width", X + ""), w.attr("height", _ + "");
              var ae = w.getBoundingClientRect();
              D(U, X, _, ae.left - H.left, ae.top - H.top), Se();
            }
            le.on("mouseup", ce), le.on("mouseleave", Se);
          });
        }
        function M(U) {
          if (x.UA.isIE())
            return !1;
          U && (w = U, h(S, p, w));
        }
        function N() {
          (0, d.default)(S).call(S, ".w-e-img-drag-mask").hide();
        }
        return T(p, S), C.default(document).on("click", N), m.beforeDestroy(function() {
          C.default(document).off("click", N);
        }), { showDrag: M, hideDrag: N };
      }
      o.createShowHideFn = A;
      function E(m) {
        var S = A(m), w = S.showDrag, p = S.hideDrag;
        m.txt.eventHooks.imgClickEvents.push(w), m.txt.eventHooks.textScrollEvents.push(p), m.txt.eventHooks.keyupEvents.push(p), m.txt.eventHooks.toolbarClickEvents.push(p), m.txt.eventHooks.menuClickEvents.push(p), m.txt.eventHooks.changeEvents.push(p);
      }
      o.default = E;
    }, function(l, o, t) {
      l.exports = t(356);
    }, function(l, o, t) {
      var s = t(357);
      l.exports = s;
    }, function(l, o, t) {
      t(358);
      var s = t(9);
      l.exports = s.parseFloat;
    }, function(l, o, t) {
      var s = t(5), u = t(359);
      s({ global: !0, forced: parseFloat != u }, { parseFloat: u });
    }, function(l, o, t) {
      var s = t(8), u = t(90).trim, d = t(68), f = s.parseFloat, g = 1 / f(d + "-0") !== -1 / 0;
      l.exports = g ? function(x) {
        var D = u(String(x)), b = f(D);
        return b === 0 && D.charAt(0) == "-" ? -0 : b;
      } : f;
    }, function(l, o, t) {
      var s = t(20), u = t(361);
      u = u.__esModule ? u.default : u, typeof u == "string" && (u = [[l.i, u, ""]]);
      var d = {};
      d.insert = "head", d.singleton = !1, s(u, d), l.exports = u.locals || {};
    }, function(l, o, t) {
      var s = t(21);
      o = s(!1), o.push([l.i, `.w-e-text-container {
  overflow: hidden;
}
.w-e-img-drag-mask {
  position: absolute;
  z-index: 1;
  border: 1px dashed #ccc;
  box-sizing: border-box;
}
.w-e-img-drag-mask .w-e-img-drag-rb {
  position: absolute;
  right: -5px;
  bottom: -5px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #ccc;
  cursor: se-resize;
}
.w-e-img-drag-mask .w-e-img-drag-show-size {
  min-width: 110px;
  height: 22px;
  line-height: 22px;
  font-size: 14px;
  color: #999;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #999;
  color: #fff;
  border-radius: 2px;
  padding: 0 5px;
}
`, ""]), l.exports = o;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.createShowHideFn = void 0;
      var d = t(2), f = d.__importDefault(t(3)), g = d.__importDefault(t(38));
      function C(D) {
        var b, h = function(S, w) {
          return w === void 0 && (w = ""), D.i18next.t(w + S);
        };
        function A(m) {
          var S = [{ $elem: f.default("<span class='w-e-icon-trash-o'></span>"), onClick: function(p, T) {
            return p.selection.createRangeByElem(T), p.selection.restoreSelection(), p.cmd.do("delete"), !0;
          } }, { $elem: f.default("<span>30%</span>"), onClick: function(p, T) {
            return T.attr("width", "30%"), T.removeAttr("height"), !0;
          } }, { $elem: f.default("<span>50%</span>"), onClick: function(p, T) {
            return T.attr("width", "50%"), T.removeAttr("height"), !0;
          } }, { $elem: f.default("<span>100%</span>"), onClick: function(p, T) {
            return T.attr("width", "100%"), T.removeAttr("height"), !0;
          } }];
          S.push({ $elem: f.default("<span>" + h("\u91CD\u7F6E") + "</span>"), onClick: function(p, T) {
            return T.removeAttr("width"), T.removeAttr("height"), !0;
          } }), m.attr("data-href") && S.push({ $elem: f.default("<span>" + h("\u67E5\u770B\u94FE\u63A5") + "</span>"), onClick: function(p, T) {
            var M = T.attr("data-href");
            return M && (M = decodeURIComponent(M), window.open(M, "_target")), !0;
          } }), b = new g.default(D, m, S), b.create();
        }
        function E() {
          b && (b.remove(), b = null);
        }
        return { showImgTooltip: A, hideImgTooltip: E };
      }
      o.createShowHideFn = C;
      function x(D) {
        var b = C(D), h = b.showImgTooltip, A = b.hideImgTooltip;
        D.txt.eventHooks.imgClickEvents.push(h), D.txt.eventHooks.clickEvents.push(A), D.txt.eventHooks.keyupEvents.push(A), D.txt.eventHooks.toolbarClickEvents.push(A), D.txt.eventHooks.menuClickEvents.push(A), D.txt.eventHooks.textScrollEvents.push(A), D.txt.eventHooks.imgDragBarMouseDownEvents.push(A), D.txt.eventHooks.changeEvents.push(A);
      }
      o.default = x;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      function d(f) {
        var g = f.txt, C = f.selection, x = g.eventHooks.keydownEvents;
        x.push(function(D) {
          var b = C.getSelectionContainerElem(), h = C.getRange();
          if (!(!h || !b || D.keyCode !== 8 || !C.isSelectionEmpty())) {
            var A = h.startContainer, E = h.startOffset, m = null;
            if (E === 0)
              for (; A !== b.elems[0] && b.elems[0].contains(A) && A.parentNode && !m; ) {
                if (A.previousSibling) {
                  m = A.previousSibling;
                  break;
                }
                A = A.parentNode;
              }
            else
              A.nodeType !== 3 && (m = A.childNodes[E - 1]);
            if (!!m) {
              for (var S = m; S.childNodes.length; )
                S = S.childNodes[S.childNodes.length - 1];
              S instanceof HTMLElement && S.tagName === "IMG" && (S.remove(), D.preventDefault());
            }
          }
        });
      }
      o.default = d;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(26)), f = s(t(17));
      (0, u.default)(o, "__esModule", { value: !0 });
      var g = t(2), C = g.__importDefault(t(3)), x = t(6), D = g.__importDefault(t(96));
      function b(h) {
        var A, E = h.config, m = new D.default(h), S = x.getRandom("up-trigger-id"), w = x.getRandom("up-file-id"), p = x.getRandom("input-link-url"), T = x.getRandom("input-link-url-alt"), M = x.getRandom("input-link-url-href"), N = x.getRandom("btn-link"), U = "menus.panelMenus.image.", F = function(q, X) {
          return X === void 0 && (X = U), h.i18next.t(X + q);
        };
        function B(K, q, X) {
          var _ = E.linkImgCheck(K);
          return _ === !0 ? !0 : (typeof _ == "string" && E.customAlert(_, "error"), !1);
        }
        var P = E.uploadImgMaxLength === 1 ? "" : 'multiple="multiple"', z = (0, d.default)(A = E.uploadImgAccept).call(A, function(K) {
          return "image/" + K;
        }).join(","), H = function(q, X, _) {
          return '<div class="' + q + '" data-title="' + _ + `">
            <div id="` + S + `" class="w-e-up-btn">
                <i class="` + X + `"></i>
            </div>
            <div style="display:none;">
                <input id="` + w + '" type="file" ' + P + ' accept="' + z + `"/>
            </div>
        </div>`;
        }, $ = [
          { selector: "#" + S, type: "click", fn: function() {
            var q = E.uploadImgFromMedia;
            if (q && typeof q == "function")
              return q(), !0;
            var X = C.default("#" + w), _ = X.elems[0];
            if (_)
              _.click();
            else
              return !0;
          } },
          { selector: "#" + w, type: "change", fn: function() {
            var q = C.default("#" + w), X = q.elems[0];
            if (!X)
              return !0;
            var _ = X.files;
            return _ != null && _.length && m.uploadImg(_), X && (X.value = ""), !0;
          } }
        ], I = [`<input
            id="` + p + `"
            type="text"
            class="block"
            placeholder="` + F("\u56FE\u7247\u5730\u5740") + '"/>'];
        E.showLinkImgAlt && I.push(`
        <input
            id="` + T + `"
            type="text"
            class="block"
            placeholder="` + F("\u56FE\u7247\u6587\u5B57\u8BF4\u660E") + '"/>'), E.showLinkImgHref && I.push(`
        <input
            id="` + M + `"
            type="text"
            class="block"
            placeholder="` + F("\u8DF3\u8F6C\u94FE\u63A5") + '"/>');
        var Y = [
          {
            title: F("\u4E0A\u4F20\u56FE\u7247"),
            tpl: H("w-e-up-img-container", "w-e-icon-upload2", ""),
            events: $
          },
          { title: F("\u7F51\u7EDC\u56FE\u7247"), tpl: `<div>
                    ` + I.join("") + `
                    <div class="w-e-button-container">
                        <button type="button" id="` + N + '" class="right">' + F("\u63D2\u5165", "") + `</button>
                    </div>
                </div>`, events: [{ selector: "#" + N, type: "click", fn: function() {
            var q, X = C.default("#" + p), _ = (0, f.default)(q = X.val()).call(q);
            if (!!_) {
              var le;
              if (E.showLinkImgAlt) {
                var Se;
                le = (0, f.default)(Se = C.default("#" + T).val()).call(Se);
              }
              var ve;
              if (E.showLinkImgHref) {
                var ce;
                ve = (0, f.default)(ce = C.default("#" + M).val()).call(ce);
              }
              if (!!B(_))
                return m.insertImg(_, le, ve), !0;
            }
          }, bindEnter: !0 }] }
        ], Q = { width: 300, height: 0, tabs: [], onlyUploadConf: { $elem: C.default(H("w-e-menu", "w-e-icon-image", "\u56FE\u7247")), events: $ } };
        return window.FileReader && (E.uploadImgShowBase64 || E.uploadImgServer || E.customUploadImg || E.uploadImgFromMedia) && Q.tabs.push(Y[0]), E.showLinkImg && (Q.tabs.push(Y[1]), Q.onlyUploadConf = void 0), Q;
      }
      o.default = b;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), g = f.__importDefault(t(3)), C = f.__importDefault(t(24)), x = f.__importDefault(t(366)), D = function(b) {
        f.__extends(h, b);
        function h(A) {
          var E = this, m = g.default(`<div class="w-e-menu" data-title="\u7F29\u8FDB">
                <i class="w-e-icon-indent-increase"></i>
            </div>`), S = { width: 130, title: "\u8BBE\u7F6E\u7F29\u8FDB", type: "list", list: [{ $elem: g.default(`<p>
                            <i class="w-e-icon-indent-increase w-e-drop-list-item"></i>
                            ` + A.i18next.t("menus.dropListMenu.indent.\u589E\u52A0\u7F29\u8FDB") + `
                        <p>`), value: "increase" }, { $elem: g.default(`<p>
                            <i class="w-e-icon-indent-decrease w-e-drop-list-item"></i>
                            ` + A.i18next.t("menus.dropListMenu.indent.\u51CF\u5C11\u7F29\u8FDB") + `
                        <p>`), value: "decrease" }], clickHandler: function(p) {
            E.command(p);
          } };
          return E = b.call(this, m, A, S) || this, E;
        }
        return h.prototype.command = function(A) {
          var E = this.editor, m = E.selection.getSelectionContainerElem();
          if (m && E.$textElem.equal(m)) {
            var S = E.selection.getSelectionRangeTopNodes();
            S.length > 0 && (0, d.default)(S).call(S, function(w) {
              x.default(g.default(w), A, E);
            });
          } else
            m && m.length > 0 && (0, d.default)(m).call(m, function(w) {
              x.default(g.default(w), A, E);
            });
          E.selection.restoreSelection(), this.tryChangeActive();
        }, h.prototype.tryChangeActive = function() {
          var A = this.editor, E = A.selection.getSelectionStartElem(), m = g.default(E).getNodeTop(A);
          m.length <= 0 || (m.elems[0].style.paddingLeft != "" ? this.active() : this.unActive());
        }, h;
      }(C.default);
      o.default = D;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(45)), f = s(t(17));
      (0, u.default)(o, "__esModule", { value: !0 });
      var g = t(2), C = g.__importDefault(t(367)), x = g.__importDefault(t(368)), D = /^(\d+)(\w+)$/, b = /^(\d+)%$/;
      function h(E) {
        var m = E.config.indentation;
        if (typeof m == "string") {
          if (D.test(m)) {
            var S, w = (0, d.default)(S = (0, f.default)(m).call(m).match(D)).call(S, 1, 3), p = w[0], T = w[1];
            return { value: Number(p), unit: T };
          } else if (b.test(m))
            return { value: Number((0, f.default)(m).call(m).match(b)[1]), unit: "%" };
        } else if (m.value !== void 0 && m.unit)
          return m;
        return { value: 2, unit: "em" };
      }
      function A(E, m, S) {
        var w = E.getNodeTop(S), p = /^(P|H[0-9]*)$/;
        p.test(w.getNodeName()) && (m === "increase" ? C.default(w, h(S)) : m === "decrease" && x.default(w, h(S)));
      }
      o.default = A;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(45));
      (0, u.default)(o, "__esModule", { value: !0 });
      function f(g, C) {
        var x = g.elems[0];
        if (x.style.paddingLeft === "")
          g.css("padding-left", C.value + C.unit);
        else {
          var D = x.style.paddingLeft, b = (0, d.default)(D).call(D, 0, D.length - C.unit.length), h = Number(b) + C.value;
          g.css("padding-left", "" + h + C.unit);
        }
      }
      o.default = f;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(45));
      (0, u.default)(o, "__esModule", { value: !0 });
      function f(g, C) {
        var x = g.elems[0];
        if (x.style.paddingLeft !== "") {
          var D = x.style.paddingLeft, b = (0, d.default)(D).call(D, 0, D.length - C.unit.length), h = Number(b) - C.value;
          h > 0 ? g.css("padding-left", "" + h + C.unit) : g.css("padding-left", "");
        }
      }
      o.default = f;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(3)), g = d.__importDefault(t(37)), C = d.__importDefault(t(32)), x = d.__importDefault(t(370)), D = function(b) {
        d.__extends(h, b);
        function h(A) {
          var E = this, m = f.default(`<div class="w-e-menu" data-title="\u8868\u60C5">
                <i class="w-e-icon-happy"></i>
            </div>`);
          return E = b.call(this, m, A) || this, E;
        }
        return h.prototype.createPanel = function() {
          var A = x.default(this.editor), E = new C.default(this, A);
          E.create();
        }, h.prototype.clickHandler = function() {
          this.createPanel();
        }, h.prototype.tryChangeActive = function() {
        }, h;
      }(g.default);
      o.default = D;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(26)), f = s(t(70)), g = s(t(17));
      (0, u.default)(o, "__esModule", { value: !0 });
      var C = t(2), x = C.__importDefault(t(3));
      function D(b) {
        var h = b.config.emotions;
        function A(S) {
          var w = [];
          if (S.type == "image") {
            var p;
            w = (0, d.default)(p = S.content).call(p, function(M) {
              return typeof M == "string" ? "" : '<span  title="' + M.alt + `">
                    <img class="eleImg" data-emoji="` + M.alt + '" style src="' + M.src + '" alt="[' + M.alt + `]">
                </span>`;
            }), w = (0, f.default)(w).call(w, function(M) {
              return M !== "";
            });
          } else {
            var T;
            w = (0, d.default)(T = S.content).call(T, function(M) {
              return '<span class="eleImg" title="' + M + '">' + M + "</span>";
            });
          }
          return w.join("").replace(/&nbsp;/g, "");
        }
        var E = (0, d.default)(h).call(h, function(S) {
          return {
            title: b.i18next.t("menus.panelMenus.emoticon." + S.title),
            tpl: "<div>" + A(S) + "</div>",
            events: [{ selector: ".eleImg", type: "click", fn: function(p) {
              var T = x.default(p.target), M = T.getNodeName(), N;
              if (M === "IMG") {
                var U;
                N = (0, g.default)(U = T.parent().html()).call(U);
              } else
                N = "<span>" + T.html() + "</span>";
              return b.cmd.do("insertHTML", N), !0;
            } }]
          };
        }), m = { width: 300, height: 230, tabs: E };
        return m;
      }
      o.default = D;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.createListHandle = o.ClassType = void 0;
      var d = t(2), f = d.__importDefault(t(3)), g = d.__importDefault(t(372)), C = d.__importDefault(t(374)), x = d.__importDefault(t(375)), D = d.__importDefault(t(376)), b = d.__importDefault(t(377)), h;
      (function(S) {
        S.Wrap = "WrapListHandle", S.Join = "JoinListHandle", S.StartJoin = "StartJoinListHandle", S.EndJoin = "EndJoinListHandle", S.Other = "OtherListHandle";
      })(h = o.ClassType || (o.ClassType = {}));
      var A = { WrapListHandle: g.default, JoinListHandle: C.default, StartJoinListHandle: x.default, EndJoinListHandle: D.default, OtherListHandle: b.default };
      function E(S, w, p) {
        if (S === h.Other && p === void 0)
          throw new Error("other \u7C7B\u9700\u8981\u4F20\u5165 range");
        return S !== h.Other ? new A[S](w) : new A[S](w, p);
      }
      o.createListHandle = E;
      var m = function() {
        function S(w) {
          this.handle = w, this.handle.exec();
        }
        return S.prototype.getSelectionRangeElem = function() {
          return f.default(this.handle.selectionRangeElem.get());
        }, S;
      }();
      o.default = m;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), g = f.__importDefault(t(3)), C = t(58), x = t(47), D = function(b) {
        f.__extends(h, b);
        function h(A) {
          return b.call(this, A) || this;
        }
        return h.prototype.exec = function() {
          var A = this.options, E = A.listType, m = A.listTarget, S = A.$selectionElem, w = A.$startElem, p = A.$endElem, T, M = [], N = S == null ? void 0 : S.getNodeName(), U = w.prior, F = p.prior;
          if (!w.prior && !p.prior || !(U != null && U.prev().length) && !(F != null && F.next().length)) {
            var B;
            (0, d.default)(B = S == null ? void 0 : S.children()).call(B, function(Q) {
              M.push(g.default(Q));
            }), N === E ? T = x.createElementFragment(
              M,
              x.createDocumentFragment(),
              "p"
            ) : (T = x.createElement(m), (0, d.default)(M).call(M, function(Q) {
              T.appendChild(Q.elems[0]);
            })), this.selectionRangeElem.set(T), x.insertBefore(S, T, S.elems[0]), S.remove();
          } else {
            for (var P = U; P.length; )
              M.push(P), F != null && F.equal(P) ? P = g.default(void 0) : P = P.next();
            var z = U.prev(), H = F.next();
            if (N === E ? T = x.createElementFragment(
              M,
              x.createDocumentFragment(),
              "p"
            ) : (T = x.createElement(m), (0, d.default)(M).call(M, function(Q) {
              T.append(Q.elems[0]);
            })), z.length && H.length) {
              for (var $ = []; H.length; )
                $.push(H), H = H.next();
              var I = x.createElement(N);
              (0, d.default)($).call($, function(Q) {
                I.append(Q.elems[0]);
              }), g.default(I).insertAfter(S), this.selectionRangeElem.set(T);
              var Y = S.next();
              Y.length ? x.insertBefore(S, T, Y.elems[0]) : S.parent().elems[0].append(T);
            } else if (!z.length)
              this.selectionRangeElem.set(T), x.insertBefore(S, T, S.elems[0]);
            else {
              this.selectionRangeElem.set(T);
              var Y = S.next();
              Y.length ? x.insertBefore(S, T, Y.elems[0]) : S.parent().elems[0].append(T);
            }
          }
        }, h;
      }(C.ListHandle);
      o.default = D;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = function() {
        function g() {
          this._element = null;
        }
        return g.prototype.set = function(C) {
          if (C instanceof DocumentFragment) {
            var x, D = [];
            (0, d.default)(x = C.childNodes).call(x, function(b) {
              D.push(b);
            }), C = D;
          }
          this._element = C;
        }, g.prototype.get = function() {
          return this._element;
        }, g.prototype.clear = function() {
          this._element = null;
        }, g;
      }();
      o.default = f;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), g = f.__importDefault(t(3)), C = t(58), x = t(47), D = function(b) {
        f.__extends(h, b);
        function h(A) {
          return b.call(this, A) || this;
        }
        return h.prototype.exec = function() {
          var A, E, m, S, w, p, T, M = this.options, N = M.editor, U = M.listType, F = M.listTarget, B = M.$startElem, P = M.$endElem, z, H = N.selection.getSelectionRangeTopNodes(), $ = B == null ? void 0 : B.getNodeName(), I = P == null ? void 0 : P.getNodeName();
          if ($ === I)
            if (H.length > 2)
              if (H.shift(), H.pop(), z = x.createElementFragment(
                x.filterSelectionNodes(H),
                x.createDocumentFragment()
              ), $ === U)
                (A = P.children()) === null || A === void 0 || (0, d.default)(A).call(A, function(ae) {
                  z.append(ae);
                }), P.remove(), this.selectionRangeElem.set(z), B.elems[0].append(z);
              else {
                for (var Y = document.createDocumentFragment(), Q = document.createDocumentFragment(), K = x.getStartPoint(B); K.length; ) {
                  var q = K.elems[0];
                  K = K.next(), Y.append(q);
                }
                for (var X = x.getEndPoint(P), _ = []; X.length; )
                  _.unshift(X.elems[0]), X = X.prev();
                (0, d.default)(_).call(_, function(ae) {
                  Q.append(ae);
                });
                var le = x.createElement(F);
                le.append(Y), le.append(z), le.append(Q), z = le, this.selectionRangeElem.set(z), g.default(le).insertAfter(B), !(!((E = B.children()) === null || E === void 0) && E.length) && B.remove(), !(!((m = P.children()) === null || m === void 0) && m.length) && P.remove();
              }
            else {
              H.length = 0;
              for (var K = x.getStartPoint(B); K.length; )
                H.push(K), K = K.next();
              for (var X = x.getEndPoint(P), _ = []; X.length; )
                _.unshift(X), X = X.prev();
              H.push.apply(H, _), $ === U ? (z = x.createElementFragment(H, x.createDocumentFragment(), "p"), this.selectionRangeElem.set(z), x.insertBefore(B, z, P.elems[0])) : (z = x.createElement(F), (0, d.default)(H).call(H, function(pe) {
                z.append(pe.elems[0]);
              }), this.selectionRangeElem.set(z), g.default(z).insertAfter(B)), !(!((S = B.children()) === null || S === void 0) && S.length) && P.remove(), !(!((w = P.children()) === null || w === void 0) && w.length) && P.remove();
            }
          else {
            for (var Se = [], X = x.getEndPoint(P); X.length; )
              Se.unshift(X), X = X.prev();
            for (var ve = [], K = x.getStartPoint(B); K.length; )
              ve.push(K), K = K.next();
            if (z = x.createDocumentFragment(), H.shift(), H.pop(), (0, d.default)(ve).call(ve, function(se) {
              return z.append(se.elems[0]);
            }), z = x.createElementFragment(
              x.filterSelectionNodes(H),
              z
            ), (0, d.default)(Se).call(Se, function(se) {
              return z.append(se.elems[0]);
            }), this.selectionRangeElem.set(z), $ === U)
              B.elems[0].append(z), !(!((p = P.children()) === null || p === void 0) && p.length) && P.remove();
            else if (!((T = P.children()) === null || T === void 0) && T.length) {
              var ce = P.children();
              x.insertBefore(ce, z, ce.elems[0]);
            } else
              P.elems[0].append(z);
          }
        }, h;
      }(C.ListHandle);
      o.default = D;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), g = f.__importDefault(t(3)), C = t(58), x = t(47), D = function(b) {
        f.__extends(h, b);
        function h(A) {
          return b.call(this, A) || this;
        }
        return h.prototype.exec = function() {
          var A, E = this.options, m = E.editor, S = E.listType, w = E.listTarget, p = E.$startElem, T, M = m.selection.getSelectionRangeTopNodes(), N = p == null ? void 0 : p.getNodeName();
          M.shift();
          for (var U = [], F = x.getStartPoint(p); F.length; )
            U.push(F), F = F.next();
          N === S ? (T = x.createDocumentFragment(), (0, d.default)(U).call(U, function(B) {
            return T.append(B.elems[0]);
          }), T = x.createElementFragment(
            x.filterSelectionNodes(M),
            T
          ), this.selectionRangeElem.set(T), p.elems[0].append(T)) : (T = x.createElement(w), (0, d.default)(U).call(U, function(B) {
            return T.append(B.elems[0]);
          }), T = x.createElementFragment(
            x.filterSelectionNodes(M),
            T
          ), this.selectionRangeElem.set(T), g.default(T).insertAfter(p), !(!((A = p.children()) === null || A === void 0) && A.length) && p.remove());
        }, h;
      }(C.ListHandle);
      o.default = D;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), g = f.__importDefault(t(3)), C = t(58), x = t(47), D = function(b) {
        f.__extends(h, b);
        function h(A) {
          return b.call(this, A) || this;
        }
        return h.prototype.exec = function() {
          var A, E, m = this.options, S = m.editor, w = m.listType, p = m.listTarget, T = m.$endElem, M, N = S.selection.getSelectionRangeTopNodes(), U = T == null ? void 0 : T.getNodeName();
          N.pop();
          for (var F = [], B = x.getEndPoint(T); B.length; )
            F.unshift(B), B = B.prev();
          if (U === w)
            if (M = x.createElementFragment(
              x.filterSelectionNodes(N),
              x.createDocumentFragment()
            ), (0, d.default)(F).call(F, function(H) {
              return M.append(H.elems[0]);
            }), this.selectionRangeElem.set(M), !((A = T.children()) === null || A === void 0) && A.length) {
              var P = T.children();
              x.insertBefore(P, M, P.elems[0]);
            } else
              T.elems[0].append(M);
          else {
            var z = x.filterSelectionNodes(N);
            z.push.apply(z, F), M = x.createElementFragment(
              z,
              x.createElement(p)
            ), this.selectionRangeElem.set(M), g.default(M).insertBefore(T), !(!((E = T.children()) === null || E === void 0) && E.length) && T.remove();
          }
        }, h;
      }(C.ListHandle);
      o.default = D;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = t(58), g = t(47), C = function(x) {
        d.__extends(D, x);
        function D(b, h) {
          var A = x.call(this, b) || this;
          return A.range = h, A;
        }
        return D.prototype.exec = function() {
          var b = this.options, h = b.editor, A = b.listTarget, E = h.selection.getSelectionRangeTopNodes(), m = g.createElementFragment(
            g.filterSelectionNodes(E),
            g.createElement(A)
          );
          this.selectionRangeElem.set(m), this.range.insertNode(m);
        }, D;
      }(f.ListHandle);
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4)), f = s(t(27));
      (0, u.default)(o, "__esModule", { value: !0 });
      var g = t(2), C = g.__importDefault(t(24)), x = g.__importDefault(t(3)), D = g.__importDefault(t(379)), b = t(6), h = function(A) {
        g.__extends(E, A);
        function E(m) {
          var S = this, w = x.default(`<div class="w-e-menu" data-title="\u884C\u9AD8">
                    <i class="w-e-icon-row-height"></i>
                </div>`), p = new D.default(m, m.config.lineHeights), T = { width: 100, title: "\u8BBE\u7F6E\u884C\u9AD8", type: "list", list: p.getItemList(), clickHandler: function(N) {
            m.selection.saveRange(), S.command(N);
          } };
          return S = A.call(this, w, m, T) || this, S;
        }
        return E.prototype.command = function(m) {
          var S = this, w, p = window.getSelection ? window.getSelection() : document.getSelection(), T = ["P"], M = this.editor, N = "";
          M.selection.restoreSelection();
          var U = x.default(M.selection.getSelectionContainerElem());
          if (!!(U != null && U.length)) {
            var F = x.default(M.selection.getSelectionContainerElem()), B = x.default(M.selection.getSelectionStartElem()).elems[0], P = "", z = [], H = "";
            if (U && M.$textElem.equal(U)) {
              var $ = b.UA.isIE(), I = [], Y = [], Q = [], K = x.default(M.selection.getSelectionStartElem()), q = x.default(M.selection.getSelectionEndElem()), X = (w = M.selection.getRange()) === null || w === void 0 ? void 0 : w.commonAncestorContainer.childNodes;
              Y.push(this.getDom(K.elems[0])), X == null || (0, d.default)(X).call(X, function(ce, ae) {
                ce === S.getDom(K.elems[0]) && I.push(ae), ce === S.getDom(q.elems[0]) && I.push(ae);
              });
              var _ = 0, le = void 0;
              for (Q.push(this.getDom(K.elems[0])); Y[_] !== this.getDom(q.elems[0]); )
                le = x.default(Y[_].nextElementSibling).elems[0], (0, f.default)(T).call(T, x.default(le).getNodeName()) !== -1 && Q.push(le), Y.push(le), _++;
              if (x.default(Y[0]).getNodeName() !== "P") {
                _ = 0;
                for (var Se = 0; Se < Y.length; Se++)
                  if (x.default(Y[Se]).getNodeName() === "P") {
                    _ = Se;
                    break;
                  }
                if (_ === 0)
                  return;
                for (var ve = 0; ve !== _; )
                  Y.shift(), ve++;
              }
              this.setRange(Y[0], Y[Y.length - 1]), (0, d.default)(Y).call(Y, function(ce) {
                P = ce.getAttribute("style"), z = P ? P.split(";") : [], H = S.styleProcessing(z), x.default(ce).getNodeName() === "P" && m && (H += m ? "line-height:" + m + ";" : ""), $ ? x.default(ce).css("line-height", m) : N += "<" + x.default(ce).getNodeName().toLowerCase() + ' style="' + H + '">' + ce.innerHTML + "</" + x.default(ce).getNodeName().toLowerCase() + ">";
              }), N && this.action(N, M), B = F.elems[0], this.setRange(B.children[I[0]], B.children[I[1]]);
              return;
            }
            if (B = this.getDom(B), (0, f.default)(T).call(T, x.default(B).getNodeName()) !== -1) {
              if (P = B.getAttribute("style"), z = P ? P.split(";") : [], p == null || p.selectAllChildren(B), M.selection.saveRange(), !m) {
                P && (H = this.styleProcessing(z), H === "" ? N = "<" + x.default(B).getNodeName().toLowerCase() + ">" + B.innerHTML + "</" + x.default(B).getNodeName().toLowerCase() + ">" : N = "<" + x.default(B).getNodeName().toLowerCase() + ' style="' + H + '">' + B.innerHTML + "</" + x.default(B).getNodeName().toLowerCase() + ">", this.action(N, M));
                return;
              }
              P ? H = this.styleProcessing(z) + ("line-height:" + m + ";") : H = "line-height:" + m + ";", N = "<" + x.default(B).getNodeName().toLowerCase() + ' style="' + H + '">' + B.innerHTML + "</" + x.default(B).getNodeName().toLowerCase() + ">", x.default(B).getNodeName() === "BLOCKQUOTE" || b.UA.isIE() ? x.default(B).css("line-height", m) : this.action(N, M);
            }
          }
        }, E.prototype.getDom = function(m) {
          var S = x.default(m).elems[0];
          if (!S.parentNode)
            return S;
          function w(p, T) {
            var M = x.default(p.parentNode);
            return T.$textElem.equal(M) ? p : w(M.elems[0], T);
          }
          return S = w(S, this.editor), S;
        }, E.prototype.action = function(m, S) {
          S.cmd.do("insertHTML", m);
        }, E.prototype.styleProcessing = function(m) {
          var S = "";
          return (0, d.default)(m).call(m, function(w) {
            w !== "" && (0, f.default)(w).call(w, "line-height") === -1 && (S = S + w + ";");
          }), S;
        }, E.prototype.setRange = function(m, S) {
          var w = this.editor, p = window.getSelection ? window.getSelection() : document.getSelection();
          p == null || p.removeAllRanges();
          var T = document.createRange(), M = m, N = S;
          T.setStart(M, 0), T.setEnd(N, 1), p == null || p.addRange(T), w.selection.saveRange(), p == null || p.removeAllRanges(), w.selection.restoreSelection();
        }, E.prototype.tryChangeActive = function() {
          var m = this.editor, S = m.selection.getSelectionContainerElem();
          if (!(S && m.$textElem.equal(S))) {
            var w = x.default(m.selection.getSelectionStartElem());
            if (w.length !== 0) {
              w = this.getDom(w.elems[0]);
              var p = w.getAttribute("style") ? w.getAttribute("style") : "";
              p && (0, f.default)(p).call(p, "line-height") !== -1 ? this.active() : this.unActive();
            }
          }
        }, E;
      }(C.default);
      o.default = h;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), g = f.__importDefault(t(3)), C = function() {
        function x(D, b) {
          var h = this;
          this.itemList = [{ $elem: g.default("<span>" + D.i18next.t("\u9ED8\u8BA4") + "</span>"), value: "" }], (0, d.default)(b).call(b, function(A) {
            h.itemList.push({ $elem: g.default("<span>" + A + "</span>"), value: A });
          });
        }
        return x.prototype.getItemList = function() {
          return this.itemList;
        }, x;
      }();
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(3)), g = d.__importDefault(t(23)), C = function(x) {
        d.__extends(D, x);
        function D(b) {
          var h = this, A = f.default(`<div class="w-e-menu" data-title="\u64A4\u9500">
                <i class="w-e-icon-undo"></i>
            </div>`);
          return h = x.call(this, A, b) || this, h;
        }
        return D.prototype.clickHandler = function() {
          var b = this.editor;
          b.history.revoke();
          var h = b.$textElem.children();
          if (!!(h != null && h.length)) {
            var A = h.last();
            b.selection.createRangeByElem(A, !1, !0), b.selection.restoreSelection();
          }
        }, D.prototype.tryChangeActive = function() {
          this.editor.isCompatibleMode || (this.editor.history.size[0] ? this.active() : this.unActive());
        }, D;
      }(g.default);
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(3)), g = d.__importDefault(t(23)), C = function(x) {
        d.__extends(D, x);
        function D(b) {
          var h = this, A = f.default(`<div class="w-e-menu" data-title="\u6062\u590D">
                <i class="w-e-icon-redo"></i>
            </div>`);
          return h = x.call(this, A, b) || this, h;
        }
        return D.prototype.clickHandler = function() {
          var b = this.editor;
          b.history.restore();
          var h = b.$textElem.children();
          if (!!(h != null && h.length)) {
            var A = h.last();
            b.selection.createRangeByElem(A, !1, !0), b.selection.restoreSelection();
          }
        }, D.prototype.tryChangeActive = function() {
          this.editor.isCompatibleMode || (this.editor.history.size[1] ? this.active() : this.unActive());
        }, D;
      }(g.default);
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(37)), g = d.__importDefault(t(3)), C = d.__importDefault(t(383)), x = d.__importDefault(t(32)), D = d.__importDefault(t(392)), b = function(h) {
        d.__extends(A, h);
        function A(E) {
          var m = this, S = g.default('<div class="w-e-menu" data-title="\u8868\u683C"><i class="w-e-icon-table2"></i></div>');
          return m = h.call(this, S, E) || this, D.default(E), m;
        }
        return A.prototype.clickHandler = function() {
          this.createPanel();
        }, A.prototype.createPanel = function() {
          var E = C.default(this.editor), m = new x.default(this, E);
          m.create();
        }, A.prototype.tryChangeActive = function() {
        }, A;
      }(f.default);
      o.default = b;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(384));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), g = t(6), C = f.__importDefault(t(3));
      t(389);
      var x = f.__importDefault(t(391));
      function D(h) {
        return h > 0 && (0, d.default)(h);
      }
      function b(h) {
        var A = new x.default(h), E = g.getRandom("w-col-id"), m = g.getRandom("w-row-id"), S = g.getRandom("btn-link"), w = "menus.panelMenus.table.", p = function(U) {
          return h.i18next.t(U);
        }, T = [{ title: p(w + "\u63D2\u5165\u8868\u683C"), tpl: `<div>
                    <div class="w-e-table">
                        <span>` + p("\u521B\u5EFA") + `</span>
                        <input id="` + m + `"  type="text" class="w-e-table-input" value="5"/></td>
                        <span>` + p(w + "\u884C") + `</span>
                        <input id="` + E + `" type="text" class="w-e-table-input" value="5"/></td>
                        <span>` + (p(w + "\u5217") + p(w + "\u7684") + p(w + "\u8868\u683C")) + `</span>
                    </div>
                    <div class="w-e-button-container">
                        <button type="button" id="` + S + '" class="right">' + p("\u63D2\u5165") + `</button>
                    </div>
                </div>`, events: [{ selector: "#" + S, type: "click", fn: function() {
          var U = Number(C.default("#" + E).val()), F = Number(C.default("#" + m).val());
          return D(F) && D(U) ? (A.createAction(F, U), !0) : (h.config.customAlert("\u8868\u683C\u884C\u5217\u8BF7\u8F93\u5165\u6B63\u6574\u6570", "warning"), !1);
        }, bindEnter: !0 }] }], M = { width: 330, height: 0, tabs: [] };
        return M.tabs.push(T[0]), M;
      }
      o.default = b;
    }, function(l, o, t) {
      l.exports = t(385);
    }, function(l, o, t) {
      var s = t(386);
      l.exports = s;
    }, function(l, o, t) {
      t(387);
      var s = t(9);
      l.exports = s.Number.isInteger;
    }, function(l, o, t) {
      var s = t(5), u = t(388);
      s({ target: "Number", stat: !0 }, { isInteger: u });
    }, function(l, o, t) {
      var s = t(13), u = Math.floor;
      l.exports = function(f) {
        return !s(f) && isFinite(f) && u(f) === f;
      };
    }, function(l, o, t) {
      var s = t(20), u = t(390);
      u = u.__esModule ? u.default : u, typeof u == "string" && (u = [[l.i, u, ""]]);
      var d = {};
      d.insert = "head", d.singleton = !1, s(u, d), l.exports = u.locals || {};
    }, function(l, o, t) {
      var s = t(21);
      o = s(!1), o.push([l.i, `.w-e-table {
  display: flex;
}
.w-e-table .w-e-table-input {
  width: 40px;
  text-align: center!important;
  margin: 0 5px;
}
`, ""]), l.exports = o;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = t(7), g = d.__importDefault(t(3)), C = function() {
        function x(D) {
          this.editor = D;
        }
        return x.prototype.createAction = function(D, b) {
          var h = this.editor, A = g.default(h.selection.getSelectionContainerElem()), E = g.default(A.elems[0]).parentUntilEditor("UL", h), m = g.default(A.elems[0]).parentUntilEditor("OL", h);
          if (!(E || m)) {
            var S = this.createTableHtml(D, b);
            h.cmd.do("insertHTML", S);
          }
        }, x.prototype.createTableHtml = function(D, b) {
          for (var h = "", A = "", E = 0; E < D; E++) {
            A = "";
            for (var m = 0; m < b; m++)
              E === 0 ? A = A + "<th></th>" : A = A + "<td></td>";
            h = h + "<tr>" + A + "</tr>";
          }
          var S = '<table border="0" width="100%" cellpadding="0" cellspacing="0"><tbody>' + h + ("</tbody></table>" + f.EMPTY_P);
          return S;
        }, x;
      }();
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(393)), g = t(400);
      function C(x) {
        f.default(x), g.bindEventKeyboardEvent(x), g.bindClickEvent(x);
      }
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(3)), g = d.__importDefault(t(38)), C = d.__importDefault(t(394)), x = d.__importDefault(t(399)), D = t(7);
      function b(m) {
        var S;
        function w(T) {
          var M = new x.default(m), N = "menus.panelMenus.table.", U = function(P, z) {
            return z === void 0 && (z = N), m.i18next.t(z + P);
          }, F = [{
            $elem: f.default("<span>" + U("\u5220\u9664\u8868\u683C") + "</span>"),
            onClick: function(P, z) {
              return P.selection.createRangeByElem(z), P.selection.restoreSelection(), P.cmd.do("insertHTML", D.EMPTY_P), !0;
            }
          }, { $elem: f.default("<span>" + U("\u6DFB\u52A0\u884C") + "</span>"), onClick: function(P, z) {
            var H = h(P);
            if (H)
              return !0;
            var $ = f.default(P.selection.getSelectionStartElem()), I = M.getRowNode($.elems[0]);
            if (!I)
              return !0;
            var Y = Number(M.getCurrentRowIndex(z.elems[0], I)), Q = M.getTableHtml(z.elems[0]), K = M.getTableHtml(C.default.ProcessingRow(f.default(Q), Y).elems[0]);
            return K = E(z, K), P.selection.createRangeByElem(z), P.selection.restoreSelection(), P.cmd.do("insertHTML", K), !0;
          } }, { $elem: f.default("<span>" + U("\u5220\u9664\u884C") + "</span>"), onClick: function(P, z) {
            var H = h(P);
            if (H)
              return !0;
            var $ = f.default(P.selection.getSelectionStartElem()), I = M.getRowNode($.elems[0]);
            if (!I)
              return !0;
            var Y = Number(M.getCurrentRowIndex(z.elems[0], I)), Q = M.getTableHtml(z.elems[0]), K = C.default.DeleteRow(f.default(Q), Y).elems[0].children[0].children.length, q = "";
            return P.selection.createRangeByElem(z), P.selection.restoreSelection(), K === 0 ? q = D.EMPTY_P : q = M.getTableHtml(C.default.DeleteRow(f.default(Q), Y).elems[0]), q = E(z, q), P.cmd.do("insertHTML", q), !0;
          } }, { $elem: f.default("<span>" + U("\u6DFB\u52A0\u5217") + "</span>"), onClick: function(P, z) {
            var H = h(P);
            if (H)
              return !0;
            var $ = f.default(P.selection.getSelectionStartElem()), I = M.getCurrentColIndex($.elems[0]), Y = M.getTableHtml(z.elems[0]), Q = M.getTableHtml(C.default.ProcessingCol(f.default(Y), I).elems[0]);
            return Q = E(z, Q), P.selection.createRangeByElem(z), P.selection.restoreSelection(), P.cmd.do("insertHTML", Q), !0;
          } }, { $elem: f.default("<span>" + U("\u5220\u9664\u5217") + "</span>"), onClick: function(P, z) {
            var H = h(P);
            if (H)
              return !0;
            var $ = f.default(P.selection.getSelectionStartElem()), I = M.getCurrentColIndex($.elems[0]), Y = M.getTableHtml(z.elems[0]), Q = C.default.DeleteCol(f.default(Y), I), K = Q.elems[0].children[0].children[0].children.length, q = "";
            return P.selection.createRangeByElem(z), P.selection.restoreSelection(), K === 0 ? q = D.EMPTY_P : q = M.getTableHtml(Q.elems[0]), q = E(z, q), P.cmd.do("insertHTML", q), !0;
          } }, { $elem: f.default("<span>" + U("\u8BBE\u7F6E\u8868\u5934") + "</span>"), onClick: function(P, z) {
            var H = h(P);
            if (H)
              return !0;
            var $ = f.default(P.selection.getSelectionStartElem()), I = M.getRowNode($.elems[0]);
            if (!I)
              return !0;
            var Y = Number(M.getCurrentRowIndex(z.elems[0], I));
            Y !== 0 && (Y = 0);
            var Q = M.getTableHtml(z.elems[0]), K = M.getTableHtml(C.default.setTheHeader(f.default(Q), Y, "th").elems[0]);
            return K = E(z, K), P.selection.createRangeByElem(z), P.selection.restoreSelection(), P.cmd.do("insertHTML", K), !0;
          } }, { $elem: f.default("<span>" + U("\u53D6\u6D88\u8868\u5934") + "</span>"), onClick: function(P, z) {
            var H = f.default(P.selection.getSelectionStartElem()), $ = M.getRowNode(H.elems[0]);
            if (!$)
              return !0;
            var I = Number(M.getCurrentRowIndex(z.elems[0], $));
            I !== 0 && (I = 0);
            var Y = M.getTableHtml(z.elems[0]), Q = M.getTableHtml(C.default.setTheHeader(f.default(Y), I, "td").elems[0]);
            return Q = E(z, Q), P.selection.createRangeByElem(z), P.selection.restoreSelection(), P.cmd.do("insertHTML", Q), !0;
          } }];
          S = new g.default(m, T, F), S.create();
        }
        function p() {
          S && (S.remove(), S = null);
        }
        return { showTableTooltip: w, hideTableTooltip: p };
      }
      function h(m) {
        var S = m.selection.getSelectionStartElem(), w = m.selection.getSelectionEndElem();
        return (S == null ? void 0 : S.elems[0]) !== (w == null ? void 0 : w.elems[0]);
      }
      function A(m) {
        var S = b(m), w = S.showTableTooltip, p = S.hideTableTooltip;
        m.txt.eventHooks.tableClickEvents.push(w), m.txt.eventHooks.clickEvents.push(p), m.txt.eventHooks.keyupEvents.push(p), m.txt.eventHooks.toolbarClickEvents.push(p), m.txt.eventHooks.menuClickEvents.push(p), m.txt.eventHooks.textScrollEvents.push(p);
      }
      o.default = A;
      function E(m, S) {
        var w = m.elems[0].nextSibling;
        return (!w || w.innerHTML === "<br>") && (S += "" + D.EMPTY_P), S;
      }
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(45)), f = s(t(91)), g = s(t(4)), C = s(t(138));
      (0, u.default)(o, "__esModule", { value: !0 });
      var x = t(2), D = x.__importDefault(t(3));
      function b(p, T) {
        for (var M = w(p), N = (0, d.default)(Array.prototype).apply(M.children), U = N[0].children.length, F = document.createElement("tr"), B = 0; B < U; B++) {
          var P = document.createElement("td");
          F.appendChild(P);
        }
        return (0, f.default)(N).call(N, T + 1, 0, F), S(M, N), D.default(M.parentNode);
      }
      function h(p, T) {
        for (var M = w(p), N = (0, d.default)(Array.prototype).apply(M.children), U = function(P) {
          var z, H = [];
          for ((0, g.default)(z = (0, C.default)(N[P].children)).call(z, function(Y) {
            H.push(Y);
          }); N[P].children.length !== 0; )
            N[P].removeChild(N[P].children[0]);
          var $ = D.default(H[0]).getNodeName() !== "TH" ? document.createElement("td") : document.createElement("th");
          (0, f.default)(H).call(H, T + 1, 0, $);
          for (var I = 0; I < H.length; I++)
            N[P].appendChild(H[I]);
        }, F = 0; F < N.length; F++)
          U(F);
        return S(M, N), D.default(M.parentNode);
      }
      function A(p, T) {
        var M = w(p), N = (0, d.default)(Array.prototype).apply(M.children);
        return (0, f.default)(N).call(N, T, 1), S(M, N), D.default(M.parentNode);
      }
      function E(p, T) {
        for (var M = w(p), N = (0, d.default)(Array.prototype).apply(M.children), U = function(P) {
          var z, H = [];
          for ((0, g.default)(z = (0, C.default)(N[P].children)).call(z, function(I) {
            H.push(I);
          }); N[P].children.length !== 0; )
            N[P].removeChild(N[P].children[0]);
          (0, f.default)(H).call(H, T, 1);
          for (var $ = 0; $ < H.length; $++)
            N[P].appendChild(H[$]);
        }, F = 0; F < N.length; F++)
          U(F);
        return S(M, N), D.default(M.parentNode);
      }
      function m(p, T, M) {
        for (var N = w(p), U = (0, d.default)(Array.prototype).apply(N.children), F = U[T].children, B = document.createElement("tr"), P = function($) {
          var I, Y = document.createElement(M), Q = F[$];
          (0, g.default)(I = (0, C.default)(Q.childNodes)).call(I, function(K) {
            Y.appendChild(K);
          }), B.appendChild(Y);
        }, z = 0; z < F.length; z++)
          P(z);
        return (0, f.default)(U).call(U, T, 1, B), S(N, U), D.default(N.parentNode);
      }
      function S(p, T) {
        for (; p.children.length !== 0; )
          p.removeChild(p.children[0]);
        for (var M = 0; M < T.length; M++)
          p.appendChild(T[M]);
      }
      function w(p) {
        var T = p.elems[0].children[0];
        return T.nodeName === "COLGROUP" && (T = p.elems[0].children[p.elems[0].children.length - 1]), T;
      }
      o.default = { ProcessingRow: b, ProcessingCol: h, DeleteRow: A, DeleteCol: E, setTheHeader: m };
    }, function(l, o, t) {
      var s = t(396);
      l.exports = s;
    }, function(l, o, t) {
      t(50), t(397);
      var s = t(9);
      l.exports = s.Array.from;
    }, function(l, o, t) {
      var s = t(5), u = t(398), d = t(114), f = !d(function(g) {
        Array.from(g);
      });
      s({ target: "Array", stat: !0, forced: f }, { from: u });
    }, function(l, o, t) {
      var s = t(39), u = t(29), d = t(113), f = t(111), g = t(34), C = t(69), x = t(112);
      l.exports = function(b) {
        var h = u(b), A = typeof this == "function" ? this : Array, E = arguments.length, m = E > 1 ? arguments[1] : void 0, S = m !== void 0, w = x(h), p = 0, T, M, N, U, F, B;
        if (S && (m = s(m, E > 2 ? arguments[2] : void 0, 2)), w != null && !(A == Array && f(w)))
          for (U = w.call(h), F = U.next, M = new A(); !(N = F.call(U)).done; p++)
            B = S ? d(U, m, [N.value, p], !0) : N.value, C(M, p, B);
        else
          for (T = g(h.length), M = new A(T); T > p; p++)
            B = S ? m(h[p], p) : h[p], C(M, p, B);
        return M.length = p, M;
      };
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4)), f = s(t(138));
      (0, u.default)(o, "__esModule", { value: !0 });
      var g = t(2), C = g.__importDefault(t(3)), x = function() {
        function D(b) {
          this.editor = b;
        }
        return D.prototype.getRowNode = function(b) {
          var h, A = C.default(b).elems[0];
          return A.parentNode && (A = (h = C.default(A).parentUntil("TR", A)) === null || h === void 0 ? void 0 : h.elems[0]), A;
        }, D.prototype.getCurrentRowIndex = function(b, h) {
          var A, E = 0, m = b.children[0];
          return m.nodeName === "COLGROUP" && (m = b.children[b.children.length - 1]), (0, d.default)(A = (0, f.default)(m.children)).call(A, function(S, w) {
            S === h && (E = w);
          }), E;
        }, D.prototype.getCurrentColIndex = function(b) {
          var h, A, E = 0, m = C.default(b).getNodeName() === "TD" || C.default(b).getNodeName() === "TH" ? b : (A = C.default(b).parentUntil("TD", b)) === null || A === void 0 ? void 0 : A.elems[0], S = C.default(m).parent();
          return (0, d.default)(h = (0, f.default)(S.elems[0].children)).call(h, function(w, p) {
            w === m && (E = p);
          }), E;
        }, D.prototype.getTableHtml = function(b) {
          var h = '<table border="0" width="100%" cellpadding="0" cellspacing="0">' + C.default(b).html() + "</table>";
          return h;
        }, D;
      }();
      o.default = x;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.bindEventKeyboardEvent = o.bindClickEvent = void 0;
      var d = t(2), f = d.__importDefault(t(3));
      function g(D) {
        if (!D.length)
          return !1;
        var b = D.elems[0];
        return b.nodeName === "P" && b.innerHTML === "<br>";
      }
      function C(D) {
        function b(h, A) {
          if (A.detail >= 3) {
            var E = window.getSelection();
            if (E) {
              var m = E.focusNode, S = E.anchorNode, w = f.default(S == null ? void 0 : S.parentElement);
              if (!h.isContain(f.default(m))) {
                var p = w.elems[0].tagName === "TD" ? w : w.parentUntilEditor("td", D);
                if (p) {
                  var T = D.selection.getRange();
                  T == null || T.setEnd(p.elems[0], p.elems[0].childNodes.length), D.selection.restoreSelection();
                }
              }
            }
          }
        }
        D.txt.eventHooks.tableClickEvents.push(b);
      }
      o.bindClickEvent = C;
      function x(D) {
        var b = D.txt, h = D.selection, A = b.eventHooks.keydownEvents;
        A.push(function(E) {
          D.selection.saveRange();
          var m = h.getSelectionContainerElem();
          if (m) {
            var S = m.getNodeTop(D), w = S.length && S.prev().length ? S.prev() : null;
            if (w && w.getNodeName() === "TABLE" && h.isSelectionEmpty() && h.getCursorPos() === 0 && E.keyCode === 8) {
              var p = S.next(), T = !!p.length;
              T && g(S) && (S.remove(), D.selection.setRangeToElem(p.elems[0])), E.preventDefault();
            }
          }
        });
      }
      o.bindEventKeyboardEvent = x;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(26));
      (0, u.default)(o, "__esModule", { value: !0 }), o.formatCodeHtml = void 0;
      var f = t(2), g = f.__importDefault(t(37)), C = f.__importDefault(t(3)), x = t(6), D = f.__importDefault(t(402)), b = f.__importDefault(t(139)), h = f.__importDefault(t(32)), A = f.__importDefault(t(403));
      function E(S, w) {
        if (!w)
          return w;
        return w = T(w), w = p(w), w = x.replaceSpecialSymbol(w), w;
        function p(M) {
          var N = M.match(/<pre[\s|\S]+?\/pre>/g);
          return N === null || (0, d.default)(N).call(N, function(U) {
            M = M.replace(U, U.replace(/<\/code><code>/g, `
`).replace(/<br>/g, ""));
          }), M;
        }
        function T(M) {
          var N, U = M.match(/<span\sclass="hljs[\s|\S]+?\/span>/gm);
          if (!U || !U.length)
            return M;
          for (var F = (0, d.default)(N = x.deepClone(U)).call(N, function(P) {
            return P = P.replace(/<span\sclass="hljs[^>]+>/, ""), P.replace(/<\/span>/, "");
          }), B = 0; B < U.length; B++)
            M = M.replace(U[B], F[B]);
          return T(M);
        }
      }
      o.formatCodeHtml = E;
      var m = function(S) {
        f.__extends(w, S);
        function w(p) {
          var T = this, M = C.default('<div class="w-e-menu" data-title="\u4EE3\u7801"><i class="w-e-icon-terminal"></i></div>');
          return T = S.call(this, M, p) || this, A.default(p), T;
        }
        return w.prototype.insertLineCode = function(p) {
          var T = this.editor, M = C.default("<code>" + p + "</code>");
          T.cmd.do("insertElem", M), T.selection.createRangeByElem(M, !1), T.selection.restoreSelection();
        }, w.prototype.clickHandler = function() {
          var p = this.editor, T = p.selection.getSelectionText();
          this.isActive || (p.selection.isSelectionEmpty() ? this.createPanel("", "") : this.insertLineCode(T));
        }, w.prototype.createPanel = function(p, T) {
          var M = D.default(this.editor, p, T), N = new h.default(this, M);
          N.create();
        }, w.prototype.tryChangeActive = function() {
          var p = this.editor;
          b.default(p) ? this.active() : this.unActive();
        }, w;
      }(g.default);
      o.default = m;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(26));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), g = t(6), C = f.__importDefault(t(3)), x = f.__importDefault(t(139)), D = t(7);
      function b(h, A, E) {
        var m, S = g.getRandom("input-iframe"), w = g.getRandom("select"), p = g.getRandom("btn-ok");
        function T(F) {
          var B, P = x.default(h);
          P && M();
          var z = (B = h.selection.getSelectionStartElem()) === null || B === void 0 ? void 0 : B.elems[0].innerHTML;
          z && h.cmd.do("insertHTML", D.EMPTY_P), h.cmd.do("insertHTML", F);
          var H = h.selection.getSelectionStartElem(), $ = H == null ? void 0 : H.getNodeTop(h);
          ($ == null ? void 0 : $.getNextSibling().elems.length) === 0 && C.default(D.EMPTY_P).insertAfter($);
        }
        function M() {
          if (!!x.default(h)) {
            var F = h.selection.getSelectionStartElem(), B = F == null ? void 0 : F.getNodeTop(h);
            !B || (h.selection.createRangeByElem(B), h.selection.restoreSelection());
          }
        }
        var N = function(B) {
          return h.i18next.t(B);
        }, U = {
          width: 500,
          height: 0,
          tabs: [{
            title: N("menus.panelMenus.code.\u63D2\u5165\u4EE3\u7801"),
            tpl: `<div>
                        <select name="" id="` + w + `">
                            ` + (0, d.default)(m = h.config.languageType).call(m, function(F) {
              return "<option " + (E == F ? "selected" : "") + ' value ="' + F + '">' + F + "</option>";
            }) + `
                        </select>
                        <textarea id="` + S + '" type="text" class="wang-code-textarea" placeholder="" style="height: 160px">' + A.replace(/&quot;/g, '"') + `</textarea>
                        <div class="w-e-button-container">
                            <button type="button" id="` + p + '" class="right">' + (x.default(h) ? N("\u4FEE\u6539") : N("\u63D2\u5165")) + `</button>
                        </div>
                    </div>`,
            events: [
              { selector: "#" + p, type: "click", fn: function() {
                var B, P, z = document.getElementById(S), H = C.default("#" + w), $ = H.val(), I = z.value;
                if (h.highlight ? B = h.highlight.highlightAuto(I).value : B = "<xmp>" + I + "</xmp>", !!I)
                  return x.default(h) ? !1 : (P = '<pre><code class="' + $ + '">' + B + "</code></pre>", T(P), !0);
              } }
            ]
          }]
        };
        return U;
      }
      o.default = b;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(404)), g = d.__importDefault(t(405));
      function C(x) {
        f.default(x), g.default(x);
      }
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.createShowHideFn = void 0;
      var d = t(2), f = d.__importDefault(t(3)), g = d.__importDefault(t(38));
      function C(D) {
        var b;
        function h(E) {
          var m = "menus.panelMenus.code.", S = function(T, M) {
            return M === void 0 && (M = m), D.i18next.t(M + T);
          }, w = [{ $elem: f.default("<span>" + S("\u5220\u9664\u4EE3\u7801") + "</span>"), onClick: function(T, M) {
            return M.remove(), !0;
          } }];
          b = new g.default(D, E, w), b.create();
        }
        function A() {
          b && (b.remove(), b = null);
        }
        return { showCodeTooltip: h, hideCodeTooltip: A };
      }
      o.createShowHideFn = C;
      function x(D) {
        var b = C(D), h = b.showCodeTooltip, A = b.hideCodeTooltip;
        D.txt.eventHooks.codeClickEvents.push(h), D.txt.eventHooks.clickEvents.push(A), D.txt.eventHooks.toolbarClickEvents.push(A), D.txt.eventHooks.menuClickEvents.push(A), D.txt.eventHooks.textScrollEvents.push(A);
      }
      o.default = x;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = t(7), g = d.__importDefault(t(3));
      function C(x) {
        var D = x.$textElem, b = x.selection, h = x.txt, A = h.eventHooks.keydownEvents;
        A.push(function(E) {
          var m;
          if (E.keyCode === 40) {
            var S = b.getSelectionContainerElem(), w = (m = D.children()) === null || m === void 0 ? void 0 : m.last();
            if ((S == null ? void 0 : S.elems[0].tagName) === "XMP" && (w == null ? void 0 : w.elems[0].tagName) === "PRE") {
              var p = g.default(f.EMPTY_P);
              D.append(p);
            }
          }
        }), A.push(function(E) {
          x.selection.saveRange();
          var m = b.getSelectionContainerElem();
          if (m) {
            var S = m.getNodeTop(x), w = S == null ? void 0 : S.prev(), p = S == null ? void 0 : S.getNextSibling();
            if (w.length && (w == null ? void 0 : w.getNodeName()) === "PRE" && p.length === 0 && b.getCursorPos() === 0 && E.keyCode === 8) {
              var T = g.default(f.EMPTY_P);
              D.append(T);
            }
          }
        });
      }
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(23)), g = d.__importDefault(t(3)), C = d.__importDefault(t(407)), x = t(6), D = t(7), b = function(h) {
        d.__extends(A, h);
        function A(E) {
          var m = this, S = g.default('<div class="w-e-menu" data-title="\u5206\u5272\u7EBF"><i class="w-e-icon-split-line"></i></div>');
          return m = h.call(this, S, E) || this, C.default(E), m;
        }
        return A.prototype.clickHandler = function() {
          var E = this.editor, m = E.selection.getRange(), S = E.selection.getSelectionContainerElem();
          if (!!(S != null && S.length)) {
            var w = g.default(S.elems[0]), p = w.parentUntil("TABLE", S.elems[0]), T = w.children();
            w.getNodeName() !== "CODE" && (p && g.default(p.elems[0]).getNodeName() === "TABLE" || T && T.length !== 0 && g.default(T.elems[0]).getNodeName() === "IMG" && !(m != null && m.collapsed) || this.createSplitLine());
          }
        }, A.prototype.createSplitLine = function() {
          var E = "<hr/>" + D.EMPTY_P;
          x.UA.isFirefox && (E = "<hr/><p></p>"), this.editor.cmd.do("insertHTML", E);
        }, A.prototype.tryChangeActive = function() {
        }, A;
      }(f.default);
      o.default = b;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(408));
      function g(C) {
        f.default(C);
      }
      o.default = g;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(3)), g = d.__importDefault(t(38));
      function C(D) {
        var b;
        function h(E) {
          var m = [{ $elem: f.default("<span>" + D.i18next.t("menus.panelMenus.\u5220\u9664") + "</span>"), onClick: function(w, p) {
            return w.selection.createRangeByElem(p), w.selection.restoreSelection(), w.cmd.do("delete"), !0;
          } }];
          b = new g.default(D, E, m), b.create();
        }
        function A() {
          b && (b.remove(), b = null);
        }
        return { showSplitLineTooltip: h, hideSplitLineTooltip: A };
      }
      function x(D) {
        var b = C(D), h = b.showSplitLineTooltip, A = b.hideSplitLineTooltip;
        D.txt.eventHooks.splitLineEvents.push(h), D.txt.eventHooks.clickEvents.push(A), D.txt.eventHooks.keyupEvents.push(A), D.txt.eventHooks.toolbarClickEvents.push(A), D.txt.eventHooks.menuClickEvents.push(A), D.txt.eventHooks.textScrollEvents.push(A);
      }
      o.default = x;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), g = f.__importDefault(t(3)), C = f.__importDefault(t(23)), x = t(97), D = f.__importDefault(t(415)), b = f.__importDefault(t(140)), h = function(A) {
        f.__extends(E, A);
        function E(m) {
          var S = this, w = g.default(`<div class="w-e-menu" data-title="\u5F85\u529E\u4E8B\u9879">
                    <i class="w-e-icon-checkbox-checked"></i>
                </div>`);
          return S = A.call(this, w, m) || this, D.default(m), S;
        }
        return E.prototype.clickHandler = function() {
          var m = this.editor;
          x.isAllTodo(m) ? (this.cancelTodo(), this.tryChangeActive()) : this.setTodo();
        }, E.prototype.tryChangeActive = function() {
          x.isAllTodo(this.editor) ? this.active() : this.unActive();
        }, E.prototype.setTodo = function() {
          var m = this.editor, S = m.selection.getSelectionRangeTopNodes();
          (0, d.default)(S).call(S, function(w) {
            var p, T = w == null ? void 0 : w.getNodeName();
            if (T === "P") {
              var M = b.default(w), N = M.getTodo(), U = (p = N.children()) === null || p === void 0 ? void 0 : p.getNode();
              N.insertAfter(w), m.selection.moveCursor(U), w.remove();
            }
          }), this.tryChangeActive();
        }, E.prototype.cancelTodo = function() {
          var m = this.editor, S = m.selection.getSelectionRangeTopNodes();
          (0, d.default)(S).call(S, function(w) {
            var p, T, M, N = (T = (p = w.childNodes()) === null || p === void 0 ? void 0 : p.childNodes()) === null || T === void 0 ? void 0 : T.clone(!0), U = g.default("<p></p>");
            U.append(N), U.insertAfter(w), (M = U.childNodes()) === null || M === void 0 || M.get(0).remove(), m.selection.moveCursor(U.getNode()), w.remove();
          });
        }, E;
      }(C.default);
      o.default = h;
    }, function(l, o, t) {
      l.exports = t(411);
    }, function(l, o, t) {
      var s = t(412);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(413), u = Array.prototype;
      l.exports = function(d) {
        var f = d.every;
        return d === u || d instanceof Array && f === u.every ? s : f;
      };
    }, function(l, o, t) {
      t(414);
      var s = t(15);
      l.exports = s("Array").every;
    }, function(l, o, t) {
      var s = t(5), u = t(30).every, d = t(67), f = t(22), g = d("every"), C = f("every");
      s({ target: "Array", proto: !0, forced: !g || !C }, { every: function(D) {
        return u(this, D, arguments.length > 1 ? arguments[1] : void 0);
      } });
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), g = f.__importDefault(t(3)), C = t(97), x = f.__importDefault(t(140)), D = t(97), b = t(7);
      function h(A) {
        function E(p) {
          var T, M;
          if (C.isAllTodo(A)) {
            p.preventDefault();
            var N = A.selection, U = N.getSelectionRangeTopNodes()[0], F = (T = U.childNodes()) === null || T === void 0 ? void 0 : T.get(0), B = (M = window.getSelection()) === null || M === void 0 ? void 0 : M.anchorNode, P = N.getRange();
            if (!(P != null && P.collapsed)) {
              var z = P == null ? void 0 : P.commonAncestorContainer.childNodes, H = P == null ? void 0 : P.startContainer, $ = P == null ? void 0 : P.endContainer, I = P == null ? void 0 : P.startOffset, Y = P == null ? void 0 : P.endOffset, Q = 0, K = 0, q = [];
              z == null || (0, d.default)(z).call(z, function(pe, Pe) {
                pe.contains(H) && (Q = Pe), pe.contains($) && (K = Pe);
              }), K - Q > 1 && (z == null || (0, d.default)(z).call(z, function(pe, Pe) {
                Pe <= Q || Pe >= K || q.push(pe);
              }), (0, d.default)(q).call(q, function(pe) {
                pe.remove();
              })), D.dealTextNode(H, I), D.dealTextNode($, Y, !1), A.selection.moveCursor($, 0);
            }
            if (U.text() === "") {
              var X = g.default(b.EMPTY_P);
              X.insertAfter(U), N.moveCursor(X.getNode()), U.remove();
              return;
            }
            var _ = N.getCursorPos(), le = C.getCursorNextNode(F == null ? void 0 : F.getNode(), B, _), Se = x.default(g.default(le)), ve = Se.getInputContainer(), ce = ve.parent().getNode(), ae = Se.getTodo(), re = ve.getNode().nextSibling;
            if ((F == null ? void 0 : F.text()) === "" && (F == null || F.append(g.default("<br>"))), ae.insertAfter(U), !re || (re == null ? void 0 : re.textContent) === "") {
              if ((re == null ? void 0 : re.nodeName) !== "BR") {
                var se = g.default("<br>");
                se.insertAfter(ve);
              }
              N.moveCursor(ce, 1);
            } else
              N.moveCursor(ce);
          }
        }
        function m(p) {
          var T, M;
          if (C.isAllTodo(A)) {
            var N = A.selection, U = N.getSelectionRangeTopNodes()[0], F = (T = U.childNodes()) === null || T === void 0 ? void 0 : T.getNode(), B = g.default("<p></p>"), P = B.getNode(), z = (M = window.getSelection()) === null || M === void 0 ? void 0 : M.anchorNode, H = N.getCursorPos(), $ = z.previousSibling;
            if (U.text() === "") {
              p.preventDefault();
              var I = g.default(b.EMPTY_P);
              I.insertAfter(U), U.remove(), N.moveCursor(I.getNode(), 0);
              return;
            }
            if (($ == null ? void 0 : $.nodeName) === "SPAN" && $.childNodes[0].nodeName === "INPUT" && H === 0) {
              var Y;
              p.preventDefault(), F == null || (0, d.default)(Y = F.childNodes).call(Y, function(Q, K) {
                K !== 0 && P.appendChild(Q.cloneNode(!0));
              }), B.insertAfter(U), U.remove();
            }
          }
        }
        function S() {
          var p = A.selection, T = p.getSelectionRangeTopNodes()[0];
          T && D.isTodo(T) && T.text() === "" && (g.default(b.EMPTY_P).insertAfter(T), T.remove());
        }
        function w(p) {
          p && p.target instanceof HTMLInputElement && p.target.type === "checkbox" && (p.target.checked ? p.target.setAttribute("checked", "true") : p.target.removeAttribute("checked"));
        }
        A.txt.eventHooks.enterDownEvents.push(E), A.txt.eventHooks.deleteUpEvents.push(S), A.txt.eventHooks.deleteDownEvents.push(m), A.txt.eventHooks.clickEvents.push(w);
      }
      o.default = h;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.selectorValidator = void 0;
      var d = t(2), f = d.__importDefault(t(3)), g = t(6), C = t(7), x = d.__importDefault(t(129)), D = { border: "1px solid #c9d8db", toolbarBgColor: "#FFF", toolbarBottomBorder: "1px solid #EEE" };
      function b(A) {
        var E = A.toolbarSelector, m = f.default(E), S = A.textSelector, w = A.config, p = w.height, T = A.i18next, M = f.default("<div></div>"), N = f.default("<div></div>"), U, F, B = null;
        S == null ? (F = m.children(), m.append(M).append(N), M.css("background-color", D.toolbarBgColor).css("border", D.border).css("border-bottom", D.toolbarBottomBorder), N.css("border", D.border).css("border-top", "none").css("height", p + "px")) : (m.append(M), B = f.default(S).children(), f.default(S).append(N), F = N.children()), U = f.default("<div></div>"), U.attr("contenteditable", "true").css("width", "100%").css("height", "100%");
        var P, z = A.config.placeholder;
        z !== x.default.placeholder ? P = f.default("<div>" + z + "</div>") : P = f.default("<div>" + T.t(z) + "</div>"), P.addClass("placeholder"), F && F.length ? (U.append(F), P.hide()) : U.append(f.default(C.EMPTY_P)), B && B.length && (U.append(B), P.hide()), N.append(U), N.append(P), M.addClass("w-e-toolbar").css("z-index", A.zIndex.get("toolbar")), N.addClass("w-e-text-container"), N.css("z-index", A.zIndex.get()), U.addClass("w-e-text");
        var H = g.getRandom("toolbar-elem");
        M.attr("id", H);
        var $ = g.getRandom("text-elem");
        U.attr("id", $);
        var I = N.getBoundingClientRect().height, Y = U.getBoundingClientRect().height;
        I !== Y && U.css("min-height", I + "px"), A.$toolbarElem = M, A.$textContainerElem = N, A.$textElem = U, A.toolbarElemId = H, A.textElemId = $;
      }
      o.default = b;
      function h(A) {
        var E = "data-we-id", m = /^wangEditor-\d+$/, S = A.textSelector, w = A.toolbarSelector, p = { bar: f.default("<div></div>"), text: f.default("<div></div>") };
        if (w == null)
          throw new Error("\u9519\u8BEF\uFF1A\u521D\u59CB\u5316\u7F16\u8F91\u5668\u65F6\u5019\u672A\u4F20\u5165\u4EFB\u4F55\u53C2\u6570\uFF0C\u8BF7\u67E5\u9605\u6587\u6863");
        if (p.bar = f.default(w), !p.bar.elems.length)
          throw new Error("\u65E0\u6548\u7684\u8282\u70B9\u9009\u62E9\u5668\uFF1A" + w);
        if (m.test(p.bar.attr(E)))
          throw new Error("\u521D\u59CB\u5316\u8282\u70B9\u5DF2\u5B58\u5728\u7F16\u8F91\u5668\u5B9E\u4F8B\uFF0C\u65E0\u6CD5\u91CD\u590D\u521B\u5EFA\u7F16\u8F91\u5668");
        if (S) {
          if (p.text = f.default(S), !p.text.elems.length)
            throw new Error("\u65E0\u6548\u7684\u8282\u70B9\u9009\u62E9\u5668\uFF1A" + S);
          if (m.test(p.text.attr(E)))
            throw new Error("\u521D\u59CB\u5316\u8282\u70B9\u5DF2\u5B58\u5728\u7F16\u8F91\u5668\u5B9E\u4F8B\uFF0C\u65E0\u6CD5\u91CD\u590D\u521B\u5EFA\u7F16\u8F91\u5668");
        }
        p.bar.attr(E, A.id), p.text.attr(E, A.id), A.beforeDestroy(function() {
          p.bar.removeAttr(E), p.text.removeAttr(E);
        });
      }
      o.selectorValidator = h;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(3)), g = t(7);
      function C(x, D) {
        var b = x.$textElem, h = b.children();
        if (!h || !h.length) {
          b.append(f.default(g.EMPTY_P)), C(x);
          return;
        }
        var A = h.last();
        if (D) {
          var E = A.html().toLowerCase(), m = A.getNodeName();
          if (E !== "<br>" && E !== "<br/>" || m !== "P") {
            b.append(f.default(g.EMPTY_P)), C(x);
            return;
          }
        }
        x.selection.createRangeByElem(A, !1, !0), x.config.focus ? x.selection.restoreSelection() : x.selection.clearWindowSelectionRange();
      }
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), g = f.__importDefault(t(3));
      function C(E) {
        x(E), D(E), b(E);
      }
      function x(E) {
        E.txt.eventHooks.changeEvents.push(function() {
          var m = E.config.onchange;
          if (m) {
            var S = E.txt.html() || "";
            E.isFocus = !0, m(S);
          }
          E.txt.togglePlaceholder();
        });
      }
      function D(E) {
        E.isFocus = !1;
        function m(S) {
          var w = S.target, p = g.default(w), T = E.$textElem, M = E.$toolbarElem, N = T.isContain(p), U = M.isContain(p), F = M.elems[0] == S.target;
          if (N)
            E.isFocus || A(E), E.isFocus = !0;
          else {
            if (U && !F || !E.isFocus)
              return;
            h(E), E.isFocus = !1;
          }
        }
        document.activeElement === E.$textElem.elems[0] && E.config.focus && (A(E), E.isFocus = !0), g.default(document).on("click", m), E.beforeDestroy(function() {
          g.default(document).off("click", m);
        });
      }
      function b(E) {
        E.$textElem.on("compositionstart", function() {
          E.isComposing = !0, E.txt.togglePlaceholder();
        }).on("compositionend", function() {
          E.isComposing = !1, E.txt.togglePlaceholder();
        });
      }
      function h(E) {
        var m, S = E.config, w = S.onblur, p = E.txt.html() || "";
        (0, d.default)(m = E.txt.eventHooks.onBlurEvents).call(m, function(T) {
          return T();
        }), w(p);
      }
      function A(E) {
        var m = E.config, S = m.onfocus, w = E.txt.html() || "";
        S(w);
      }
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      function d(f) {
        var g = f.config, C = g.lang, x = g.languages;
        if (f.i18next != null) {
          try {
            f.i18next.init({ ns: "wangEditor", lng: C, defaultNS: "wangEditor", resources: x });
          } catch (D) {
            throw new Error("i18next:" + D);
          }
          return;
        }
        f.i18next = { t: function(b) {
          var h = b.split(".");
          return h[h.length - 1];
        } };
      }
      o.default = d;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(31));
      (0, u.default)(o, "__esModule", { value: !0 }), o.setUnFullScreen = o.setFullScreen = void 0;
      var f = t(2), g = f.__importDefault(t(3));
      t(421);
      var C = "w-e-icon-fullscreen", x = "w-e-icon-fullscreen_exit", D = "w-e-full-screen-editor";
      o.setFullScreen = function(h) {
        var A = g.default(h.toolbarSelector), E = h.$textContainerElem, m = h.$toolbarElem, S = (0, d.default)(m).call(m, "i." + C), w = h.config;
        S.removeClass(C), S.addClass(x), A.addClass(D), A.css("z-index", w.zIndexFullScreen);
        var p = m.getBoundingClientRect();
        E.css("height", "calc(100% - " + p.height + "px)");
      }, o.setUnFullScreen = function(h) {
        var A = g.default(h.toolbarSelector), E = h.$textContainerElem, m = h.$toolbarElem, S = (0, d.default)(m).call(m, "i." + x), w = h.config;
        S.removeClass(x), S.addClass(C), A.removeClass(D), A.css("z-index", "auto"), E.css("height", w.height + "px");
      };
      var b = function(A) {
        if (!A.textSelector && !!A.config.showFullScreen) {
          var E = A.$toolbarElem, m = g.default(`<div class="w-e-menu" data-title="\u5168\u5C4F">
            <i class="` + C + `"></i>
        </div>`);
          m.on("click", function(S) {
            var w, p = (0, d.default)(w = g.default(S.currentTarget)).call(w, "i");
            p.hasClass(C) ? (m.attr("data-title", "\u53D6\u6D88\u5168\u5C4F"), o.setFullScreen(A)) : (m.attr("data-title", "\u5168\u5C4F"), o.setUnFullScreen(A));
          }), E.append(m);
        }
      };
      o.default = b;
    }, function(l, o, t) {
      var s = t(20), u = t(422);
      u = u.__esModule ? u.default : u, typeof u == "string" && (u = [[l.i, u, ""]]);
      var d = {};
      d.insert = "head", d.singleton = !1, s(u, d), l.exports = u.locals || {};
    }, function(l, o, t) {
      var s = t(21);
      o = s(!1), o.push([l.i, `.w-e-full-screen-editor {
  position: fixed;
  width: 100%!important;
  height: 100%!important;
  left: 0;
  top: 0;
}
`, ""]), l.exports = o;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(31));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = function(C, x) {
        var D, b = C.isEnable ? C.$textElem : (0, d.default)(D = C.$textContainerElem).call(D, ".w-e-content-mantle"), h = (0, d.default)(b).call(b, "[id='" + x + "']"), A = h.getOffsetData().top;
        b.scrollTop(A);
      };
      o.default = f;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(128)), g = { menu: 2, panel: 2, toolbar: 1, tooltip: 1, textContainer: 1 }, C = function() {
        function x() {
          this.tier = g, this.baseZIndex = f.default.zIndex;
        }
        return x.prototype.get = function(D) {
          return D && this.tier[D] ? this.baseZIndex + this.tier[D] : this.baseZIndex;
        }, x.prototype.init = function(D) {
          this.baseZIndex == f.default.zIndex && (this.baseZIndex = D.config.zIndex);
        }, x;
      }();
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(70)), f = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var g = t(2), C = g.__importDefault(t(426)), x = t(6), D = t(7);
      function b(A, E) {
        return (0, d.default)(A).call(A, function(m) {
          var S = m.type, w = m.target, p = m.attributeName;
          return S != "attributes" || S == "attributes" && (p == "contenteditable" || w != E);
        });
      }
      var h = function(A) {
        g.__extends(E, A);
        function E(m) {
          var S = A.call(this, function(w, p) {
            var T;
            if (w = b(w, p.target), (T = S.data).push.apply(T, w), m.isCompatibleMode)
              S.asyncSave();
            else if (!m.isComposing)
              return S.asyncSave();
          }) || this;
          return S.editor = m, S.data = [], S.asyncSave = D.EMPTY_FN, S;
        }
        return E.prototype.save = function() {
          this.data.length && (this.editor.history.save(this.data), this.data.length = 0, this.emit());
        }, E.prototype.emit = function() {
          var m;
          (0, f.default)(m = this.editor.txt.eventHooks.changeEvents).call(m, function(S) {
            return S();
          });
        }, E.prototype.observe = function() {
          var m = this;
          A.prototype.observe.call(this, this.editor.$textElem.elems[0]);
          var S = this.editor.config.onchangeTimeout;
          this.asyncSave = x.debounce(function() {
            m.save();
          }, S), this.editor.isCompatibleMode || this.editor.$textElem.on("compositionend", function() {
            m.asyncSave();
          });
        }, E;
      }(C.default);
      o.default = h;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = function() {
        function f(g, C) {
          var x = this;
          this.options = { subtree: !0, childList: !0, attributes: !0, attributeOldValue: !0, characterData: !0, characterDataOldValue: !0 }, this.callback = function(D) {
            g(D, x);
          }, this.observer = new MutationObserver(this.callback), C && (this.options = C);
        }
        return (0, u.default)(f.prototype, "target", { get: function() {
          return this.node;
        }, enumerable: !1, configurable: !0 }), f.prototype.observe = function(g) {
          this.node instanceof Node || (this.node = g, this.connect());
        }, f.prototype.connect = function() {
          if (this.node)
            return this.observer.observe(this.node, this.options), this;
          throw new Error("\u8FD8\u672A\u521D\u59CB\u5316\u7ED1\u5B9A\uFF0C\u8BF7\u60A8\u5148\u7ED1\u5B9A\u6709\u6548\u7684 Node \u8282\u70B9");
        }, f.prototype.disconnect = function() {
          var g = this.observer.takeRecords();
          g.length && this.callback(g), this.observer.disconnect();
        }, f;
      }();
      o.default = d;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(428)), g = d.__importDefault(t(435)), C = d.__importDefault(t(436)), x = function() {
        function D(b) {
          this.editor = b, this.content = new f.default(b), this.scroll = new g.default(b), this.range = new C.default(b);
        }
        return (0, u.default)(D.prototype, "size", {
          get: function() {
            return this.scroll.size;
          },
          enumerable: !1,
          configurable: !0
        }), D.prototype.observe = function() {
          this.content.observe(), this.scroll.observe(), !this.editor.isCompatibleMode && this.range.observe();
        }, D.prototype.save = function(b) {
          b.length && (this.content.save(b), this.scroll.save(), !this.editor.isCompatibleMode && this.range.save());
        }, D.prototype.revoke = function() {
          this.editor.change.disconnect();
          var b = this.content.revoke();
          b && (this.scroll.revoke(), this.editor.isCompatibleMode || (this.range.revoke(), this.editor.$textElem.focus())), this.editor.change.connect(), b && this.editor.change.emit();
        }, D.prototype.restore = function() {
          this.editor.change.disconnect();
          var b = this.content.restore();
          b && (this.scroll.restore(), this.editor.isCompatibleMode || (this.range.restore(), this.editor.$textElem.focus())), this.editor.change.connect(), b && this.editor.change.emit();
        }, D;
      }();
      o.default = x;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(429)), g = d.__importDefault(t(433)), C = function() {
        function x(D) {
          this.editor = D;
        }
        return x.prototype.observe = function() {
          this.editor.isCompatibleMode ? this.cache = new g.default(this.editor) : this.cache = new f.default(this.editor), this.cache.observe();
        }, x.prototype.save = function(D) {
          this.editor.isCompatibleMode ? this.cache.save() : this.cache.compile(D);
        }, x.prototype.revoke = function() {
          var D;
          return (D = this.cache) === null || D === void 0 ? void 0 : D.revoke();
        }, x.prototype.restore = function() {
          var D;
          return (D = this.cache) === null || D === void 0 ? void 0 : D.restore();
        }, x;
      }();
      o.default = C;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(98)), g = d.__importDefault(t(431)), C = t(432), x = function(D) {
        d.__extends(b, D);
        function b(h) {
          var A = D.call(this, h.config.historyMaxSize) || this;
          return A.editor = h, A;
        }
        return b.prototype.observe = function() {
          this.resetMaxSize(this.editor.config.historyMaxSize);
        }, b.prototype.compile = function(h) {
          return this.save(g.default(h)), this;
        }, b.prototype.revoke = function() {
          return D.prototype.revoke.call(this, function(h) {
            C.revoke(h);
          });
        }, b.prototype.restore = function() {
          return D.prototype.restore.call(this, function(h) {
            C.restore(h);
          });
        }, b;
      }(f.default);
      o.default = x;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.CeilStack = void 0;
      var d = function() {
        function f(g) {
          g === void 0 && (g = 0), this.data = [], this.max = 0, this.reset = !1, g = Math.abs(g), g && (this.max = g);
        }
        return f.prototype.resetMax = function(g) {
          g = Math.abs(g), !this.reset && !isNaN(g) && (this.max = g, this.reset = !0);
        }, (0, u.default)(f.prototype, "size", {
          get: function() {
            return this.data.length;
          },
          enumerable: !1,
          configurable: !0
        }), f.prototype.instack = function(g) {
          return this.data.unshift(g), this.max && this.size > this.max && (this.data.length = this.max), this;
        }, f.prototype.outstack = function() {
          return this.data.shift();
        }, f.prototype.clear = function() {
          return this.data.length = 0, this;
        }, f;
      }();
      o.CeilStack = d;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4)), f = s(t(27));
      (0, u.default)(o, "__esModule", { value: !0 }), o.compliePosition = o.complieNodes = o.compileValue = o.compileType = void 0;
      var g = t(6);
      function C(m) {
        switch (m) {
          case "childList":
            return "node";
          case "attributes":
            return "attr";
          default:
            return "text";
        }
      }
      o.compileType = C;
      function x(m) {
        switch (m.type) {
          case "attributes":
            return m.target.getAttribute(m.attributeName) || "";
          case "characterData":
            return m.target.textContent;
          default:
            return "";
        }
      }
      o.compileValue = x;
      function D(m) {
        var S = {};
        return m.addedNodes.length && (S.add = g.toArray(m.addedNodes)), m.removedNodes.length && (S.remove = g.toArray(m.removedNodes)), S;
      }
      o.complieNodes = D;
      function b(m) {
        var S;
        return m.previousSibling ? S = { type: "before", target: m.previousSibling } : m.nextSibling ? S = { type: "after", target: m.nextSibling } : S = { type: "parent", target: m.target }, S;
      }
      o.compliePosition = b;
      var h = ["UL", "OL", "H1", "H2", "H3", "H4", "H5", "H6"];
      function A(m) {
        var S = [], w = !1, p = [];
        return (0, d.default)(m).call(m, function(T, M) {
          var N = { type: C(T.type), target: T.target, attr: T.attributeName || "", value: x(T) || "", oldValue: T.oldValue || "", nodes: D(T), position: b(T) };
          if (S.push(N), !!g.UA.isFirefox) {
            if (w && T.addedNodes.length && T.addedNodes[0].nodeType == 1) {
              var U = T.addedNodes[0], F = { type: "node", target: U, attr: "", value: "", oldValue: "", nodes: { add: [w] }, position: { type: "parent", target: U } };
              (0, f.default)(h).call(h, U.nodeName) != -1 ? (F.nodes.add = g.toArray(U.childNodes), S.push(F)) : w.nodeType == 3 ? (E(U, p) && (F.nodes.add = g.toArray(U.childNodes)), S.push(F)) : (0, f.default)(h).call(h, T.target.nodeName) == -1 && E(U, p) && (F.nodes.add = g.toArray(U.childNodes), S.push(F));
            }
            N.type == "node" && T.removedNodes.length == 1 ? (w = T.removedNodes[0], p.push(w)) : (w = !1, p.length = 0);
          }
        }), S;
      }
      o.default = A;
      function E(m, S) {
        for (var w = 0, p = S.length - 1; p > 0 && m.contains(S[p]); p--)
          w++;
        return w;
      }
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(4)), f = s(t(94));
      (0, u.default)(o, "__esModule", { value: !0 }), o.restore = o.revoke = void 0;
      function g(p, T) {
        var M = p.position.target;
        switch (p.position.type) {
          case "before":
            M.nextSibling ? (M = M.nextSibling, (0, d.default)(T).call(T, function(N) {
              p.target.insertBefore(N, M);
            })) : (0, d.default)(T).call(T, function(N) {
              p.target.appendChild(N);
            });
            break;
          case "after":
            (0, d.default)(T).call(T, function(N) {
              p.target.insertBefore(N, M);
            });
            break;
          default:
            (0, d.default)(T).call(T, function(N) {
              M.appendChild(N);
            });
            break;
        }
      }
      function C(p) {
        for (var T = 0, M = (0, f.default)(p.nodes); T < M.length; T++) {
          var N = M[T], U = N[0], F = N[1];
          switch (U) {
            case "add":
              (0, d.default)(F).call(F, function(B) {
                p.target.removeChild(B);
              });
              break;
            default: {
              g(p, F);
              break;
            }
          }
        }
      }
      function x(p) {
        var T = p.target;
        p.oldValue == null ? T.removeAttribute(p.attr) : T.setAttribute(p.attr, p.oldValue);
      }
      function D(p) {
        p.target.textContent = p.oldValue;
      }
      var b = { node: C, text: D, attr: x };
      function h(p) {
        for (var T = p.length - 1; T > -1; T--) {
          var M = p[T];
          b[M.type](M);
        }
      }
      o.revoke = h;
      function A(p) {
        for (var T = 0, M = (0, f.default)(p.nodes); T < M.length; T++) {
          var N = M[T], U = N[0], F = N[1];
          switch (U) {
            case "add": {
              g(p, F);
              break;
            }
            default: {
              (0, d.default)(F).call(F, function(B) {
                B.parentNode.removeChild(B);
              });
              break;
            }
          }
        }
      }
      function E(p) {
        p.target.textContent = p.value;
      }
      function m(p) {
        p.target.setAttribute(p.attr, p.value);
      }
      var S = { node: A, text: E, attr: m };
      function w(p) {
        for (var T = 0, M = p; T < M.length; T++) {
          var N = M[T];
          S[N.type](N);
        }
      }
      o.restore = w;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(434), f = function() {
        function g(C) {
          this.editor = C, this.data = new d.TailChain();
        }
        return g.prototype.observe = function() {
          this.data.resetMax(this.editor.config.historyMaxSize), this.data.insertLast(this.editor.$textElem.html());
        }, g.prototype.save = function() {
          return this.data.insertLast(this.editor.$textElem.html()), this;
        }, g.prototype.revoke = function() {
          var C = this.data.prev();
          return C ? (this.editor.$textElem.html(C), !0) : !1;
        }, g.prototype.restore = function() {
          var C = this.data.next();
          return C ? (this.editor.$textElem.html(C), !0) : !1;
        }, g;
      }();
      o.default = f;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(91));
      (0, u.default)(o, "__esModule", { value: !0 }), o.TailChain = void 0;
      var f = function() {
        function g() {
          this.data = [], this.max = 0, this.point = 0, this.isRe = !1;
        }
        return g.prototype.resetMax = function(C) {
          C = Math.abs(C), C && (this.max = C);
        }, (0, u.default)(g.prototype, "size", {
          get: function() {
            return this.data.length;
          },
          enumerable: !1,
          configurable: !0
        }), g.prototype.insertLast = function(C) {
          if (this.isRe) {
            var x;
            (0, d.default)(x = this.data).call(x, this.point + 1), this.isRe = !1;
          }
          for (this.data.push(C); this.max && this.size > this.max; )
            this.data.shift();
          return this.point = this.size - 1, this;
        }, g.prototype.current = function() {
          return this.data[this.point];
        }, g.prototype.prev = function() {
          if (!this.isRe && (this.isRe = !0), this.point--, this.point < 0) {
            this.point = 0;
            return;
          }
          return this.current();
        }, g.prototype.next = function() {
          if (!this.isRe && (this.isRe = !0), this.point++, this.point >= this.size) {
            this.point = this.size - 1;
            return;
          }
          return this.current();
        }, g;
      }();
      o.TailChain = f;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(98)), g = function(C) {
        d.__extends(x, C);
        function x(D) {
          var b = C.call(this, D.config.historyMaxSize) || this;
          return b.editor = D, b.last = 0, b.target = D.$textElem.elems[0], b;
        }
        return x.prototype.observe = function() {
          var D = this;
          this.target = this.editor.$textElem.elems[0], this.editor.$textElem.on("scroll", function() {
            D.last = D.target.scrollTop;
          }), this.resetMaxSize(this.editor.config.historyMaxSize);
        }, x.prototype.save = function() {
          return C.prototype.save.call(this, [this.last, this.target.scrollTop]), this;
        }, x.prototype.revoke = function() {
          var D = this;
          return C.prototype.revoke.call(this, function(b) {
            D.target.scrollTop = b[0];
          });
        }, x.prototype.restore = function() {
          var D = this;
          return C.prototype.restore.call(this, function(b) {
            D.target.scrollTop = b[1];
          });
        }, x;
      }(f.default);
      o.default = g;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), f = d.__importDefault(t(98)), g = d.__importDefault(t(3)), C = t(6);
      function x(b) {
        return { start: [b.startContainer, b.startOffset], end: [b.endContainer, b.endOffset], root: b.commonAncestorContainer, collapsed: b.collapsed };
      }
      var D = function(b) {
        d.__extends(h, b);
        function h(A) {
          var E = b.call(this, A.config.historyMaxSize) || this;
          return E.editor = A, E.lastRange = x(document.createRange()), E.root = A.$textElem.elems[0], E.updateLastRange = C.debounce(function() {
            E.lastRange = x(E.rangeHandle);
          }, A.config.onchangeTimeout), E;
        }
        return (0, u.default)(h.prototype, "rangeHandle", {
          get: function() {
            var E = document.getSelection();
            return E && E.rangeCount ? E.getRangeAt(0) : document.createRange();
          },
          enumerable: !1,
          configurable: !0
        }), h.prototype.observe = function() {
          var A = this;
          this.root = this.editor.$textElem.elems[0], this.resetMaxSize(this.editor.config.historyMaxSize);
          function E() {
            var S = A.rangeHandle;
            (A.root === S.commonAncestorContainer || A.root.contains(S.commonAncestorContainer)) && (A.editor.isComposing || A.updateLastRange());
          }
          function m(S) {
            (S.key == "Backspace" || S.key == "Delete") && A.updateLastRange();
          }
          g.default(document).on("selectionchange", E), this.editor.beforeDestroy(function() {
            g.default(document).off("selectionchange", E);
          }), A.editor.$textElem.on("keydown", m);
        }, h.prototype.save = function() {
          var A = x(this.rangeHandle);
          return b.prototype.save.call(this, [this.lastRange, A]), this.lastRange = A, this;
        }, h.prototype.set = function(A) {
          try {
            if (A) {
              var E = this.rangeHandle;
              return E.setStart.apply(E, A.start), E.setEnd.apply(E, A.end), this.editor.menus.changeActive(), !0;
            }
          } catch {
            return !1;
          }
          return !1;
        }, h.prototype.revoke = function() {
          var A = this;
          return b.prototype.revoke.call(this, function(E) {
            A.set(E[0]);
          });
        }, h.prototype.restore = function() {
          var A = this;
          return b.prototype.restore.call(this, function(E) {
            A.set(E[1]);
          });
        }, h;
      }(f.default);
      o.default = D;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(31));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), g = f.__importDefault(t(3));
      t(438);
      function C(x) {
        var D = !1, b, h;
        x.txt.eventHooks.changeEvents.push(function() {
          D && (0, d.default)(b).call(b, ".w-e-content-preview").html(x.$textElem.html());
        });
        function A() {
          if (!D) {
            x.$textElem.hide();
            var m = x.zIndex.get("textContainer"), S = x.txt.html();
            b = g.default('<div class="w-e-content-mantle" style="z-index:' + m + `">
                <div class="w-e-content-preview w-e-text">` + S + `</div>
            </div>`), x.$textContainerElem.append(b);
            var w = x.zIndex.get("menu");
            h = g.default('<div class="w-e-menue-mantle" style="z-index:' + w + '"></div>'), x.$toolbarElem.append(h), D = !0, x.isEnable = !1;
          }
        }
        function E() {
          !D || (b.remove(), h.remove(), x.$textElem.show(), D = !1, x.isEnable = !0);
        }
        return { disable: A, enable: E };
      }
      o.default = C;
    }, function(l, o, t) {
      var s = t(20), u = t(439);
      u = u.__esModule ? u.default : u, typeof u == "string" && (u = [[l.i, u, ""]]);
      var d = {};
      d.insert = "head", d.singleton = !1, s(u, d), l.exports = u.locals || {};
    }, function(l, o, t) {
      var s = t(21);
      o = s(!1), o.push([l.i, `.w-e-content-mantle {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.w-e-content-mantle .w-e-content-preview {
  width: 100%;
  min-height: 100%;
  padding: 0 10px;
  line-height: 1.5;
}
.w-e-content-mantle .w-e-content-preview img {
  cursor: default;
}
.w-e-content-mantle .w-e-content-preview img:hover {
  box-shadow: none;
}
.w-e-menue-mantle {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
`, ""]), l.exports = o;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = function() {
        function f(g) {
          var C = this;
          this.editor = g;
          var x = function() {
            var b = document.activeElement;
            b === g.$textElem.elems[0] && C.emit();
          };
          window.document.addEventListener("selectionchange", x), this.editor.beforeDestroy(function() {
            window.document.removeEventListener("selectionchange", x);
          });
        }
        return f.prototype.emit = function() {
          var g, C = this.editor.config.onSelectionChange;
          if (C) {
            var x = this.editor.selection;
            x.saveRange(), x.isSelectionEmpty() || C({
              text: x.getSelectionText(),
              html: (g = x.getSelectionContainerElem()) === null || g === void 0 ? void 0 : g.elems[0].innerHTML,
              selection: x
            });
          }
        }, f;
      }();
      o.default = d;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), d = s(t(127)), f = s(t(94)), g = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 }), o.registerPlugin = void 0;
      var C = t(2), x = C.__importDefault(t(87)), D = t(6);
      function b(A, E, m) {
        if (!A)
          throw new TypeError("name is not define");
        if (!E)
          throw new TypeError("options is not define");
        if (!E.intention)
          throw new TypeError("options.intention is not define");
        if (E.intention && typeof E.intention != "function")
          throw new TypeError("options.intention is not function");
        m[A] && console.warn("plugin " + A + " \u5DF2\u5B58\u5728\uFF0C\u5DF2\u8986\u76D6\u3002"), m[A] = E;
      }
      o.registerPlugin = b;
      function h(A) {
        var E = (0, d.default)({}, D.deepClone(x.default.globalPluginsFunctionList), D.deepClone(A.pluginsFunctionList)), m = (0, f.default)(E);
        (0, g.default)(m).call(m, function(S) {
          var w = S[0], p = S[1];
          console.info("plugin " + w + " initializing");
          var T = p.intention, M = p.config;
          T(A, M), console.info("plugin " + w + " initialization complete");
        });
      }
      o.default = h;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
    }]).default;
  });
})(Rd);
var Mg = /* @__PURE__ */ Dg(Rd.exports), Rg = "fcEditor", Pg = 1, Ig = Object.assign || function(c) {
  for (var y, l = 1; l < arguments.length; l++)
    for (var o in y = arguments[l], y)
      Object.prototype.hasOwnProperty.call(y, o) && (c[o] = y[o]);
  return c;
}, Lg = Pn({
  name: Rg,
  props: {
    modelValue: String,
    init: Function,
    disabled: Boolean,
    config: Object
  },
  inheritAttrs: !1,
  emits: ["update:modelValue"],
  data: function() {
    return {
      editor: {},
      uni: Pg++
    };
  },
  watch: {
    disabled: function() {
      this.enable();
    },
    modelValue: function(y) {
      y !== this.editor.txt.html() && this.editor.txt.html(y);
    }
  },
  methods: {
    enable: function() {
      this.disabled ? this.editor.disable() : this.editor.enable();
    },
    result: function() {
      this.$emit("update:modelValue", this.editor.txt.html());
    }
  },
  mounted: function() {
    var y = this;
    this.$nextTick(function() {
      y.editor = new Mg("#editor".concat(y.uni)), y.editor.config.zIndex = 2, y.editor.config.force = !1, y.config && Ig(y.editor.config, y.config), y.init && y.init(y.editor), y.editor.create(), y.enable(), y.editor.txt.html(y.modelValue);
    });
  },
  render: function() {
    var y = Tg({}, this.$attrs);
    return delete y.id, Je("div", Uv(y, {
      onInput: this.result,
      id: "editor".concat(this.uni),
      style: "line-height: normal;"
    }), null);
  },
  beforeDestroy: function() {
    this.editor && this.editor.destroy(), this.editor = null;
  }
});
const Pd = (c, y) => {
  Lt.component(c, y), xs.component(c, y);
};
Lt.component("draggable", As);
Lt.component("DragTool", Xh);
Lt.component("DragBox", vg);
Lt.component("Validate", cg);
Lt.component("Struct", ig);
Lt.component("Fetch", ug);
Lt.component("Required", mg);
Lt.component("TableOptions", Cg);
Pd("FcEditor", Lg);
Lt.register("_fc", {
  load(c, y) {
    y._id = St();
  }
});
Lt.register("_fc_tool", {
  load(c, y) {
    y.props.unique = St();
  }
});
const Ng = function(c) {
  c.component("FcDesigner", yr);
};
yr.install = Ng;
yr.makeOptionsRule = vi;
yr.formCreate = xs;
yr.designerForm = Lt;
yr.component = Pd;
yr.useLocale = Dd;
yr.t = hs;
export {
  yr as default,
  Lt as designerForm,
  xs as formCreate,
  Ng as install
};
