import{d as je,r as q,b as $e,e as Ge,w as he,o as Z,c as J,f as E,g as j,v as Q,F as be,h as ye,u as Ze,t as ee,i as Ae,j as pe,k as Je,l as Be,m as He,n as Ce,p as Ee,q as ze,a as Ke}from"./app.11b9d33d.js";const _e={lab1:{testCode:"",ansCode:"",testCases:"",description:"\u522B\u6025\uFF0C\u7B49 lab1 \u51FA..."},\u81EA\u5B9A\u4E49:{testCode:"",ansCode:"",testCases:"",description:"\u81EA\u5B9A\u4E49\u6D4B\u8BD5\u6837\u4F8B"}},Ye=Object.keys(_e);function Fe(o){return _e[o]}const qe=function(){Array.prototype.includes||(Array.prototype.includes=function(n){var s=Object(this),i=parseInt(s.length)||0;if(i===0)return!1;var d=parseInt(arguments[1])||0,a;d>=0?a=d:(a=i+d,a<0&&(a=0));for(var h;a<i;){if(h=s[a],n===h||n!==n&&h!==h)return!0;a++}return!1}),String.prototype.includes||(String.prototype.includes=function(){return typeof arguments[1]=="number"?this.length<arguments[0].length+arguments[1].length?!1:this.substr(arguments[1],arguments[0].length)===arguments[0]:String.prototype.indexOf.apply(this,arguments)!==-1});var o=function(){function n(s,i){var d=[],a=!0,h=!1,p=void 0;try{for(var b=s[Symbol.iterator](),A;!(a=(A=b.next()).done)&&(d.push(A.value),!(i&&d.length===i));a=!0);}catch(c){h=!0,p=c}finally{try{!a&&b.return&&b.return()}finally{if(h)throw p}}return d}return function(s,i){if(Array.isArray(s))return s;if(Symbol.iterator in Object(s))return n(s,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=Object.assign||function(n){for(var s=1;s<arguments.length;s++){var i=arguments[s];for(var d in i)Object.prototype.hasOwnProperty.call(i,d)&&(n[d]=i[d])}return n};function e(n){if(Array.isArray(n)){for(var s=0,i=Array(n.length);s<n.length;s++)i[s]=n[s];return i}else return Array.from(n)}function t(n){return Array.isArray(n)?n:Array.from(n)}function u(n,s,i){return s in n?Object.defineProperty(n,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[s]=i,n}function l(n){var s=arguments.length<=1||arguments[1]===void 0?function(i){return i}:arguments[1];return function(){try{return{success:!0,result:n.apply(void 0,arguments)}}catch(i){return{success:!1,errorMessage:s(i.message)}}}}function f(n,s){return function(){try{return n.apply(void 0,arguments)}catch(i){throw new Error(s+": "+i.message)}}}var y=65536,g=16,m=65024,v={MEMORY_SIZE:y,WORD_BITS:g,MAX_STANDARD_MEMORY:m};function w(n){if(n=n.toLowerCase(),n.length===0)return NaN;var s=!1;switch(n[0]==="-"&&(n=n.slice(1),s=!0),n[0]){case"x":var i=n.slice(1);if(i.match(/[^0-9a-f]/))return NaN;var a=parseInt(i,16);return s?-a:a;case"b":var d=n.slice(1);if(d.match(/[^01]/))return NaN;var a=parseInt(d,2);return s?-a:a;default:if(n.match(/[^0-9]/))return NaN;var a=parseInt(n);return s?-a:a}}function R(n){var s=arguments.length<=1||arguments[1]===void 0?4:arguments[1],i=arguments.length<=2||arguments[2]===void 0?"x":arguments[2],d=n.toString(16).toUpperCase();return d.length<s&&(d=Array(s-d.length+1).join("0")+d),i+d}function x(n){return n=n%(1<<g)&(1<<g)-1,n&1<<g-1?n-(1<<g):n}function I(n){var s=x(n);return s<0?s+(1<<g):s}function ae(n,s){var i=n&1<<s-1;return x(i?n-(1<<s):n&(1<<s)-1)}function F(n){var s=n&4,i=n&2,d=n&1;return!!s+!!i+!!d!=1?null:s?-1:d?1:0}function ie(n){switch(F(n)){case null:return"Invalid";case-1:return"N";case 0:return"Z";case 1:return"P"}}var S={parseNumber:w,toHexString:R,toInt16:x,toUint16:I,signExtend16:ae,getConditionCode:F,formatConditionCode:ie};function Te(n){var s=l(function(){var i=Le(n),d=Ne(i),a=d.orig,h=d.begin,p=Me(i,a,h),b=p.symbolTable,A=Ve(i,b,a,h);return{orig:a,symbolTable:b,machineCode:A}})(n);return s.success?s.result:{error:[s.errorMessage]}}function N(n){var s=n.match(/^[Rr]([0-7])$/);if(s)return parseInt(s[1]);throw new Error("Invalid register specification: '"+n+"'")}function P(n){var s=new Error("Invalid numeric literal: '"+n+"'"),i=n.charAt(0);if(i!=="#"&&i.toLowerCase()!=="x"&&i.toLowerCase()!=="b")throw s;var d=i==="#",a=n.charAt(1)==="-",h=d?n.substring(a?2:1):a?i+n.substring(2):n,p=S.parseNumber(h);if(isNaN(p)||a&&p<0)throw s;return a?-p:p}function Ie(n){var s=function(C){throw new Error("while parsing the string "+n+": "+C)};n.length<2&&s("this string is way too short! You need at least two characters just for the quote marks.");var i='"';(n.charAt(0)!==i||n.charAt(n.length-1)!==i)&&s("the string needs to start and end with "+("double quotation marks (e.g.: "+i+"I'm a string"+i+")."));var d=new Array(n.length-2),a=void 0;for(a=1;a<n.length-1;a++){var h=n.charAt(a),p=function(C){return s("at index "+a+": "+C)};if(h==='"'&&p("unescaped double quote found before end of string"),h==="\\"){var b=n.charAt(++a),A={0:"\0",n:`
`,r:"\r",'"':'"',"\\":"\\"}[b];b===void 0&&p("unsupported escape character '"+b+"'"),d[a]=A}else d[a]=h}return(a>=n.length||n.charAt(a)!=='"')&&s("unterminated string literal! Did you accidentally backslash-escape the closing quote?"),d.join("")}function Le(n){return n.split(/\r?\n/).map(Se)}function Se(n,s){for(var i=n.trimLeft(),d=f(Ie,"on line "+(s+1)),a=0,h=1,p=2,b=a,A=[],c="",C=0;C<n.length;C++){var D=i.charAt(C),T=!!D.match(/\s/),B=D===",",U=D==='"';if(b===a){if(T||B)continue;b=U?p:h}if(D===";"&&b!==p)break;b===h?T||B?(A.push(c),b=a,c=""):c+=D:b===p&&(c+=D,D==="\\"?c+=i.charAt(++C):U&&c.length>1&&(A.push(d(c)),b=a,c=""))}return c.length>0&&(b===h?A.push(c):b===p&&A.push(d(c))),A}function Ne(n){var s=n.findIndex(function(b){return b.length>0});if(s===-1)throw new Error("Looks like your program's empty! You need at least an .ORIG directive and an .END directive.");var i=n[s],d=i.some(function(b){return b.toUpperCase()===".ORIG"});if(!d)throw new Error("The first non-empty, non-comment line of your program needs to have an .ORIG directive!");if(i[0].toUpperCase()!==".ORIG")throw new Error(".ORIG directive cannot have a label!");var a=i.length-1;if(a!==1)throw new Error("The .ORIG directive expects exactly one operand, "+("but it looks like you have "+a+"!"));var h=i[1],p=f(P,"while parsing .ORIG directive operand")(h);if(p!==S.toUint16(p))throw new Error(".ORIG operand ("+h+") is out of range! It should be between 0 and 0xFFFF, inclusive.");return{orig:p,begin:s+1}}function Oe(n){if(n.match(/[^A-Za-z0-9_]/))return!1;var s=l(P)(n);return!s.success}function ve(n,s){switch(n.toUpperCase()){case".FILL":return 1;case".BLKW":if(s<0)throw new Error("a .BLKW needs to have a non-negative length, "+("but I found "+s));return s;case".STRINGZ":return s.length+1;default:return 1}}function Me(n,s,i){var d={symbols:{},address:s,seenEndDirective:!1},a=function(c){var C=v.MEMORY_SIZE;if(c>C)throw new Error("currently at address "+S.toHexString(c)+", which is past the memory limit "+("of "+S.toHexString(C)))},h=function(c,C){var D=c.address+C;return a(D),r({},c,{address:D})},p={handleEnd:function(c){return r({},c,{seenEndDirective:!0})},handleLabel:function(c,C){a(c.address+1);var D=C[0],T=c.symbols[D];if(T!==void 0)throw new Error("label name "+D+" already exists; "+("it points to "+S.toHexString(T)));return r({},c,{symbols:r({},c.symbols,u({},D,c.address))})},handleDirective:function(c,C){if(c.seenEndDirective)return c;var D=t(C),T=D[0],B=D.slice(1),U=function(){var $=function(){if(B.length!==1)throw new Error("expected "+T+" directive to have exactly one operand, "+("but found "+B.length))};switch(T.toUpperCase()){case".BLKW":case".FILL":return $(),P(B[0]);case".STRINGZ":return $(),B[0];default:return null}}();return h(c,ve(T,U))},handleInstruction:function(c,C){return c.seenEndDirective?c:h(c,ve(C[0],null))}},b=xe(n,i,p,d);if(!b.seenEndDirective)throw new Error("no .END directive found!");return{symbolTable:b.symbols,programLength:b.address-s}}function Pe(n,s,i,d){var a=function(A){var c=-(1<<d-1),C=(1<<d-1)-1;if(!(c<=A&&A<=C))throw new Error("offset "+A+" is out of range; "+("it must fit into "+d+" bits, ")+("so it should be between "+c+" and "+C+", inclusive"));return A},h=l(P)(s);if(h.success)return a(h.result);if(!(s in i))throw new Error("the offset '"+s+"' is not a valid numeric literal, but I can't find it in the symbol table either; did you misspell a label name?");var p=i[s];return a(p-n)}function Ue(n){var s=n[0],i=n[1];switch(s.toUpperCase()){case".FILL":return[S.toUint16(P(i))];case".BLKW":return new Array(S.toUint16(P(i))).fill(0);case".STRINGZ":return i.split("").map(function(d){return d.charCodeAt(0)}).concat([0]);default:throw new Error("unrecognized directive: "+s)}}function ke(n,s,i){var d=n[0],a=d.toUpperCase(),h=n.slice(1),p=function(L){if(h.length!==L){var M=L===1?"operand":"operands";throw new Error("expected "+d+" instruction to have "+("exactly "+L+" "+M+", but found "+h.length))}},b=function(L,M,de){var se=-(1<<M-1),ge=(1<<M-1)-1;if(se<=L&&L<=ge)return S.toUint16(L)&(1<<M)-1;throw new Error(de+" is out of range: "+("expected value to fit in "+M+" bits ")+("(i.e., to be between "+se+" and "+ge+", inclusive), ")+("but found "+L))},A=function(L,M){var de="while parsing the offset for a "+d,se=f(Pe,de)(s,L,i,M);return S.toUint16(se)&(1<<M)-1},c={GETC:32,OUT:33,PUTS:34,IN:35,PUTSP:36,HALT:37},C=c[a];if(C!==void 0)return p(0),[61440|C];var D={ADD:1,AND:5,NOT:9,BR:0,BRP:0,BRZ:0,BRZP:0,BRN:0,BRNP:0,BRNZ:0,BRNZP:0,JMP:12,RET:12,JSR:4,JSRR:4,LD:2,LDI:10,LDR:6,LEA:14,RTI:8,ST:3,STI:11,STR:7,TRAP:15},T=D[a];if(T===void 0)throw new Error('unrecognized instruction "'+d+'"');var B=T<<12;if(a==="ADD"||a==="AND"){p(3);var U=h.slice(0,2).map(function(Y){return N(Y)}),$=o(U,2),H=$[0],ue=$[1],k=h[2],O=l(P)(k),re=O.success?32|b(O.result,5,"immediate field"):0|N(k);return[B|H<<9|ue<<6|re]}else if(T===0){p(1);var te=a==="BR"?[!0,!0,!0]:["N","Z","P"].map(function(Y){return a.substring(2).includes(Y)}),V=o(te,3),z=V[0],W=V[1],X=V[2],K=z<<2|W<<1|X<<0,G=A(h[0],9);return[B|K<<9|G]}else{if(a==="JMP")return p(1),[B|N(h[0])<<6];if(a==="RET")return p(0),[B|7<<6];if(a==="JSR")return p(1),[B|1<<11|A(h[0],11)];if(a==="JSRR")return p(1),[B|0<<11|N(h[0])<<6];if(["LD","LDI","LEA","ST","STI"].includes(a)){p(2);var oe=N(h[0]),G=A(h[1],9);return[B|oe<<9|G]}else if(a==="LDR"||a==="STR"){p(3);var me=N(h[0]),le=N(h[1]),G=A(h[2],6);return[B|me<<9|le<<6|G]}else if(a==="NOT"){p(2);var H=N(h[0]),ce=N(h[1]);return[B|H<<9|ce<<6|63]}else{if(a==="RTI")return p(0),[B];if(a==="TRAP"){p(1);var fe="while parsing the trap vector",ne=f(P,fe)(h[0]);if(!(0<=ne&&ne<=255))throw new Error("trap vector out of range: expected value to be an unsigned byte (i.e., between 0 and 255, inclusive), "+("but found "+ne));return[B|ne]}else throw new Error("internal error: unhandled instruction "+d)}}}function Ve(n,s,i,d){var a={machineCode:[],address:i,seenEndDirective:!1},h=function(c,C){return r({},c,{machineCode:c.machineCode.concat(C),address:c.address+C.length})},p={handleDirective:function(c,C){return c.seenEndDirective?c:h(c,Ue(C))},handleInstruction:function(c,C){if(c.seenEndDirective)return c;var D=c.address+1;return h(c,ke(C,D,s))},handleEnd:function(c){return r({},c,{seenEndDirective:!0})}},b=xe(n,d,p,a);if(!b.seenEndDirective)throw new Error("missing .END directive");return b.machineCode}function xe(n,s,i,d){var a=function(O){return O},h=i.handleLabel,p=h===void 0?a:h,b=i.handleDirective,A=b===void 0?a:b,c=i.handleInstruction,C=c===void 0?a:c,D=i.handleEnd,T=D===void 0?a:D,B="GETC OUT PUTS IN PUTSP HALT".split(" "),U=["ADD","AND","NOT","BR","BRP","BRZ","BRZP","BRN","BRNP","BRNZ","BRNZP","JMP","RET","JSR","JSRR","LD","LDI","LDR","LEA","RTI","ST","STI","STR","TRAP"],$=[".FILL",".BLKW",".STRINGZ"],H=[].concat(e(B),U,$),ue=n.slice(s);return ue.reduce(function(k,O,re){if(O.length===0)return k;var te="at line "+(re+s+1),V=function(le){var ce=arguments.length<=1||arguments[1]===void 0?k:arguments[1],fe=arguments.length<=2||arguments[2]===void 0?O:arguments[2];return f(le,te)(ce,fe,re)},z=O[0];if(z.toUpperCase()===".END")return V(T);var W=!H.includes(z.toUpperCase());if(W&&!Oe(z))throw new Error(te+": this line looks like a label, "+("but '"+z+"' is not a valid label name; ")+"you either misspelled an instruction or entered an invalid name for a label");var X=W?V(p):k,K=O.slice(W?1:0);if(K.length===0)return X;var G=K[0].toUpperCase(),oe=G.charAt(0)===".";return k.address+1,V(oe?A:C,X,K)},d)}return Te}(),De=function(){var o=function(t){return(t||"").split(`
`).map(function(u){return u.split(";")[0]}).join(`
`)},r=function(t){for(var u=t.split(`
`),l=0;l<u.length;l++){var f=u[l],y=f.match(/[^\s0-9A-Fa-f]/);if(!!y){var g=y[0],m="Invalid character '"+g+"' at line "+(l+1);return{error:m}}}var v=t.replace(/\s/g,""),w=!!v.match(/[^01]/),R=w?4:16;if(v.length%R!==0){var x=v.length===1?"character":"characters",I=w?"hexadecimal":"binary",m="Found a total of "+v.length+" "+x+", but expected to find a multiple of "+R+" for "+I+" data.";return{error:m}}return{type:w?"hex":"binary"}},e=function(t,u){var l=t.replace(/\s/g,""),f=u==="hex"?4:16,y=new Array(l.length/f);if(y.length===0){var g="Your raw data is empty! You need to at least have an origin (.ORIG) address.";return{error:g}}for(var m=0;m<y.length;m++){var v=f*m;y[m]=l.substr(v,f)}var w=u==="hex"?16:2,R=y.map(function(x){return parseInt(x,w)});return{orig:R[0],machineCode:R.slice(1)}};return function(t){var u=o(t),l=r(u);if(l.error)return l;var f=l.type;return e(u,f)}}();function Re(){var o=[],r=0;this.getLength=function(){return o.length-r},this.isEmpty=function(){return o.length==0},this.enqueue=function(e){o.push(e)},this.dequeue=function(){if(o.length!=0){var e=o[r];return 2*++r>=o.length&&(o=o.slice(r),r=0),e}},this.peek=function(){return 0<o.length?o[r]:void 0}}const we={TRAP_GETC:1024,TRAP_OUT:1072,TRAP_PUTS:1104,TRAP_IN:1184,TRAP_PUTSP:1248,TRAP_HALT:64880},We={32:1024,33:1072,34:1104,35:1184,36:1248,37:64880,1024:15879,1025:40964,1026:2046,1027:40963,1028:11779,1029:49600,1030:65024,1031:65026,1072:15882,1073:12808,1074:41477,1075:2046,1076:45060,1077:8708,1078:11780,1079:49600,1080:65028,1081:65030,1104:15894,1105:12306,1106:12818,1107:13330,1108:25088,1109:1029,1110:41993,1111:2046,1112:45576,1113:4129,1114:4089,1115:8200,1116:8712,1117:9224,1118:11784,1119:49600,1120:65028,1121:65030,1122:62461,1123:62462,1184:15878,1185:57350,1186:61474,1187:61472,1188:61473,1189:11777,1190:49600,1191:12289,1248:15911,1249:12322,1250:12834,1251:13346,1252:13858,1253:4640,1254:24640,1255:1030,1256:18445,1257:9240,1258:20482,1259:1026,1260:4705,1261:4088,1262:8212,1263:18438,1264:8211,1265:8723,1266:9235,1267:9747,1268:11795,1269:49600,1270:15878,1271:42503,1272:2049,1273:4092,1274:45059,1275:11777,1276:49600,1278:65030,1279:65028,1280:62461,1281:62462,1282:65280,64768:15934,64769:12348,64770:8199,64771:61473,64772:57350,64773:61474,64774:61477,64775:8246,64776:11830,64777:49600,64880:15886,64881:12812,64882:12298,64883:57356,64884:61474,64885:41519,64886:8239,64887:20544,64888:45100,64889:8195,64890:8707,64891:11779,64892:49600,64933:65534,64934:32767,65028:32768,65534:65535},_={parseNumber:function(o){if(o=o.toLowerCase(),o.length==0)return NaN;var r=!1;switch(o[0]==="-"&&(o=o.slice(1),r=!0),o[0]){case"x":var e=o.slice(1);if(e.match(/[^0-9a-f]/))return NaN;var u=parseInt(e,16);return r?-u:u;case"b":var t=o.slice(1);if(t.match(/[^01]/))return NaN;var u=parseInt(t,2);return r?-u:u;default:if(o.match(/[^0-9]/))return NaN;var u=parseInt(o);return r?-u:u}},toHexString:function(o,r){var e=o.toString(16).toUpperCase();return r=r||4,e.length<r&&(e=Array(r-e.length+1).join("0")+e),"x"+e},toInt16:function(o){return o=o%65536&65535,o&32768?o-65536:o},toUint16:function(o){var r=this.toInt16(o);return r<0?r+65536:r},signExtend16:function(o,r){var e=o>>r-1&1;if(e===1)for(var t=r;t<16;t++)o|=1<<t;else o&=(1<<r)-1;return this.toInt16(o)}};class Xe{constructor(){this.totalInstruction=0,this.memory=new Array(65536);for(var r=0;r<this.memory.length;r++){var e=We[r];this.memory[r]=e===void 0?0:e}this.listeners=[],this.addListener=function(l){this.listeners.push(l)},this.notifyListeners=function(l){for(var f=0;f<this.listeners.length;f++)this.listeners[f](l)},this.r=new Array(8),this.specialRegisters=["pc","ir","psr"],this.resetAllRegisters(),this.labelToAddress={},this.addressToLabel={};for(var t in we){var u=we[t];this.setLabel(u,t)}this.maxStandardMemory=65024,this.kbsr=65024,this.kbdr=65026,this.dsr=65028,this.ddr=65030,this.mcr=65534,this.ioLocations=[this.kbsr,this.kbdr,this.dsr,this.ddr],this.kbiv=384,this.div=385,this.kbpl=2,this.dpl=1,this.namedTrapVectors={32:"GETC",33:"OUT",34:"PUTS",35:"IN",36:"PUTSP",37:"HALT"},this.bufferedKeys=new Re,this.subroutineLevel=0}formatAddress(r){var e=this.addressToLabel[r];return e!==void 0?e:_.toHexString(r)}getConditionCode(){var r=(this.psr&4)!==0,e=(this.psr&2)!==0,t=(this.psr&1)!==0;if(r^e^t&&!(r&&e&&t))return r?-1:e?0:1}setConditionCode(r){r=_.toInt16(r);var e=r<0,t=r>0,u=!e&&!t,l=(e?4:0)|(u?2:0)|(t?1:0);this.setRegister("psr",this.psr&65528|l)}nextInstruction(){this.totalInstruction+=1,this.fetch();var r=this.decode(this.ir),e=this.evaluateAddress(this.pc,r),t=this.fetchOperands(e),u=this.execute(r,e,t);return this.storeResult(r,u),r}fetch(){this.ir=this.getMemory(this.pc),this.setRegister("pc",this.pc+1)}decode(r){for(var e={raw:r,strictValid:!0},t=Array(16),u=0;u<t.length;u++)t[u]=r>>u&1;e.opcode=r>>12&15;var l=r&63,f=r>>6&7,y=r&511,g=r>>9&7,m=r&2047;switch(e.opcode){case 1:case 5:e.opname=e.opcode===1?"ADD":"AND",e.dr=g,e.sr1=f,e.mode="none",t[5]===0?(e.arithmeticMode="reg",e.sr2=r&7,(t[4]!==0||t[3]!==0)&&(e.strictValid=!1)):(e.arithmeticMode="imm",e.imm=_.signExtend16(r&31,5));break;case 0:e.opname="BR",e.n=t[11]==1,e.z=t[10]==1,e.p=t[9]==1,e.mode="pcOffset",e.offset=_.signExtend16(y,9);break;case 12:e.opname=f===7?"RET":"JMP",e.mode="baseOffset",e.baseR=f,e.offset=0,(g!==0||l!==0)&&(e.strictValid=!1);break;case 4:t[11]===0?(e.opname="JSRR",e.mode="baseOffset",e.baseR=f,e.offset=0,(g!==0||l!==0)&&(e.strictValid=!1)):(e.opname="JSR",e.mode="pcOffset",e.offset=_.signExtend16(m,11));break;case 2:case 10:e.opname=e.opcode===2?"LD":"LDI",e.dr=g,e.mode="pcOffset",e.offset=_.signExtend16(y,9);break;case 6:e.opname="LDR",e.dr=g,e.mode="baseOffset",e.baseR=f,e.offset=_.signExtend16(l,6);break;case 14:e.opname="LEA",e.dr=g,e.mode="pcOffset",e.offset=_.signExtend16(y,9);break;case 9:e.opname="NOT",e.mode="none",e.dr=g,e.sr=f,l!==63&&(e.strictValid=!1);break;case 8:e.opname="RTI",e.mode="none",r&!0&&(e.strictValid=!1);break;case 3:case 11:e.opname=e.opcode===3?"ST":"STI",e.sr=g,e.mode="pcOffset",e.offset=_.signExtend16(y,9);break;case 7:e.opname="STR",e.sr=g,e.mode="baseOffset",e.baseR=f,e.offset=_.signExtend16(l,6);break;case 15:e.opname="TRAP",e.mode="trap",e.trapVector=r&255,(r&3840)!==0&&(e.strictValid=!1);break;default:e.opname="reserved",e.strictValid=!1;break}return e}evaluateAddress(r,e){return e.mode==="none"?null:e.mode==="pcOffset"?_.toUint16(r+e.offset):e.mode==="baseOffset"?_.toUint16(this.getRegister(e.baseR)+e.offset):e.mode==="trap"?e.trapVector:void 0}fetchOperands(r){return r==null?r:this.readMemory(r)}execute(r,e,t){switch(r.isIO=!1,r.opcode){case 1:case 5:var u=this.getRegister(r.sr1),l=r.arithmeticMode==="reg"?this.getRegister(r.sr2):r.imm;return r.opcode===1?u+l:u&l;case 0:var f=this.getConditionCode(),y=r.n&&f<0||r.z&&f===0||r.p&&f>0;return y&&this.setRegister("pc",e),null;case 12:return this.setRegister("pc",e),r.opname==="RET"&&this.subroutineLevel--,null;case 4:return this.setRegister(7,this.pc),this.setRegister("pc",e),this.subroutineLevel++,null;case 2:return this.ioLocations.indexOf(e)!==-1&&(r.isIO=!0),t;case 10:return this.ioLocations.indexOf(t)!==-1&&(r.isIO=!0),this.readMemory(t);case 6:return this.ioLocations.indexOf(e)!==-1&&(r.isIO=!0),t;case 14:return e;case 9:return _.toUint16(~this.getRegister(r.sr));case 8:if((this.psr&32768)!==0){var m={type:"exception",exception:"privilege"};this.notifyListeners(m),this.halt()}else{var g=this.r[6];this.setRegister("pc",this.readMemory(g)),this.setRegister("psr",this.readMemory(g+1)),this.setRegister(6,g+2)}return null;case 3:return this.ioLocations.indexOf(e)!==-1&&(r.isIO=!0),this.writeMemory(e,this.getRegister(r.sr)),null;case 11:return this.ioLocations.indexOf(t)!==-1&&(r.isIO=!0),this.writeMemory(t,this.getRegister(r.sr)),null;case 7:return this.ioLocations.indexOf(e)!==-1&&(r.isIO=!0),this.writeMemory(e,this.getRegister(r.sr)),null;case 15:return this.setRegister(7,this.pc),this.setRegister("pc",t),this.subroutineLevel++,null;case 13:var m={type:"exception",exception:"opcode"};return this.notifyListeners(m),this.halt(),null;default:return}}storeResult(r,e){switch(r.opcode){case 1:case 5:case 9:this.setRegister(r.dr,e),this.setConditionCode(e);break;case 0:case 12:case 4:return;case 2:case 10:case 6:case 14:this.setRegister(r.dr,e),this.setConditionCode(e);break;case 8:return;case 3:case 11:case 7:return}}instructionToString(r,e){var t=this.decode(e);if(!t.strictValid)return".FILL "+_.toHexString(t.raw);var u=function(I){return"R"+I};if(!t.strictValid)return".FILL "+_.toHexString(t.raw);var l=t.opname+" ",f=r+1,y=this.evaluateAddress(f,t);switch(t.opcode){case 1:case 5:var g=u(t.sr1),m=t.arithmeticMode=="reg"?u(t.sr2):"#"+t.imm,v=u(t.dr);return l+[v,g,m].join(", ");case 9:return l+[u(t.dr),u(t.sr)].join(", ");case 0:if((t.raw&3584)===0||t.offset===0)return"NOP";var w="BR";return t.n&&(w+="n"),t.z&&(w+="z"),t.p&&(w+="p"),w+" "+this.formatAddress(y);case 12:var R=t.baseR;return R===7?"RET":"JMP "+u(R);case 4:return t.mode==="pcOffset"?l+this.formatAddress(y):l+u(t.baseR);case 2:case 10:case 14:return l+[u(t.dr),this.formatAddress(y)].join(", ");case 6:return l+[u(t.dr),u(t.baseR),"#"+t.offset].join(", ");case 8:return t.opname;case 3:case 11:return l+[u(t.sr),this.formatAddress(y)].join(", ");case 7:return l+[u(t.sr),u(t.baseR),"#"+t.offset].join(", ");case 15:var x=this.namedTrapVectors[y];return x!==void 0?x:l+_.toHexString(y,2);default:return null}}instructionAddressToString(r){return this.instructionToString(r,this.getMemory(r))}setLabel(r,e){this.unsetLabelGivenAddress(r),this.unsetLabelGivenName(e),this.labelToAddress[e]=r,this.addressToLabel[r]=e;var t={type:"labelset",address:r,label:e};this.notifyListeners(t)}unsetLabelGivenAddress(r){var e=this.addressToLabel[r],t=e!==void 0;return t?(this.unsetLabel_internal_(r,e),!0):!1}unsetLabelGivenName(r){var e=this.labelToAddress[r],t=e!==void 0;return t?(this.unsetLabel_internal_(e,r),!0):!1}unsetLabel_internal_(r,e){delete this.addressToLabel[r],delete this.labelToAddress[e];var t={type:"labelunset",address:r,label:e};this.notifyListeners(t)}getMemory(r){return this.memory[r]}setMemory(r,e){var t={type:"memset",address:r,newValue:e};this.memory[r]=_.toUint16(e),this.notifyListeners(t)}readMemory(r){return r===this.kbdr&&this.setMemory(this.kbsr,this.getMemory(this.kbsr)&32767),this.getMemory(r)}writeMemory(r,e){r===this.ddr&&this.setMemory(this.dsr,this.getMemory(this.dsr)&32767),this.setMemory(r,e)}getRegister(r){if(!isNaN(r)&&r>=0&&r<this.r.length)return this.r[r];for(var e=0;e<this.specialRegisters.length;e++){var t=this.specialRegisters[e];if(t===r)return this[t]}}setRegister(r,e){e=_.toUint16(e);var t={type:"regset",register:void 0,newValue:e};if(!isNaN(r)&&r>=0&&r<this.r.length)return t.register=r,this.r[r]=e,this.notifyListeners(t),!0;for(var u=0;u<this.specialRegisters.length;u++){var l=this.specialRegisters[u];if(l===r)return t.register=l,this[l]=e,this.notifyListeners(t),!0}return!1}resetNumericRegisters(){for(var r=0;r<this.r.length;r++)this.r[r]=0}resetAllRegisters(){this.resetNumericRegisters(),this.pc=12288,this.ir=0,this.psr=32770}formatConditionCode(){var r=this.getConditionCode();return r===void 0?"Invalid":r>0?"P":r<0?"N":"Z"}sendKey(r){this.bufferedKeys.enqueue(r),this.notifyListeners({type:"bufferchange"})}clearBufferedKeys(){this.bufferedKeys=new Re,this.notifyListeners({type:"bufferchange"})}isRunning(){return(this.getMemory(this.mcr)&32768)!==0}halt(){this.setMemory(this.mcr,this.getMemory(this.mcr)&32767)}unhalt(){this.setMemory(this.mcr,this.getMemory(this.mcr)|32768)}loadAssembled(r){if(r.error)return!1;for(var e=r.orig,t=r.machineCode,u=r.symbolTable||{},l=0;l<t.length;l++)this.setMemory(e+l,t[l]);for(var f in u)this.setLabel(u[f],f);this.setRegister("pc",e)}interrupt(r,e){if(!(r<=(this.psr&1792)>>8)){var t=this.getRegister(6);t--,this.setMemory(t,this.psr),t--,this.setMemory(t,this.pc),this.psr&=30968,this.psr|=(r&7)<<8,this.setRegister("pc",e),this.setRegister(6,t)}}}class Qe{constructor(r,e,t,u,l){this.testcase=r,this.expectedAns=e,this.instructions=t,this.logs=u,this.actualAns=l,this.instructions=t,this.logs=u,this.testcase=r,this.expectedAns=e,this.actualAns=l}}function er(o,r,e,t,u,l){const f=u(o,t),y=[];o.pc=12288,o.psr=32770;let g;for(g=0;g<r;g++){let v;const w=o.decode(o.getMemory(o.pc));if(e){const R=o.instructionAddressToString(o.pc);y.push(`x${o.pc.toString(16)}\uFF1A${R}`),v=Array.from(o.r)}if(w.raw>=61440&&w.raw<=61695||w.raw===0)break;o.nextInstruction(),e&&o.r.forEach((R,x)=>{if(R!==v[x]){const I=y.pop();y.push(`${I}\uFF0CR${x} \u7531 ${v[x]} \u53D8\u4E3A ${R}`)}})}const m=l(o);return new Qe(t,f,g,y,m)}function rr(o,r,e,t,u,l){const f={logs:[]},y=new Xe,g=qe(o),m=De(o);if(!("error"in g))y.loadAssembled(g),f.state="assembly";else{if("error"in m)return{logs:["\u4EE3\u7801\u65E0\u6CD5\u88AB\u8BC6\u522B\u4E3A\u6B63\u786E\u7684\u673A\u5668\u7801\u6216\u8005\u6C47\u7F16\u4EE3\u7801",`\u673A\u5668\u7801\uFF1A${m.error}`,`\u6C47\u7F16\uFF1A${g.error}`]};if(m.orig!==12288){const F=De(`0011000000000000
${o}`);y.loadAssembled(F)}else y.loadAssembled(m);f.state="machine"}let v,w;try{v=Function("lc3","testcase",r)}catch{return{logs:["\u8BC4\u6D4B\u51FD\u6570\u7F16\u5199\u51FA\u73B0\u8BED\u6CD5\u9519\u8BEF"]}}try{w=Function("lc3",e)}catch{return{logs:["\u7B54\u6848\u51FD\u6570\u7F16\u5199\u51FA\u73B0\u8BED\u6CD5\u9519\u8BEF"]}}l&&(t=[t[0]]);const R=t.map(F=>er(y,u,l,F,v,w));R.forEach(F=>{F.instructions>=u?f.logs.push(`\u5F02\u5E38 ${F.testcase}, \u8D85\u51FA\u6700\u5927\u6307\u4EE4\u6570\uFF0C\u8BF7\u8C03\u6574\u8BBE\u7F6E\uFF0C\u6216\u8005\u53EF\u80FD\u53D1\u751F\u4E86\u6B7B\u5FAA\u73AF`):F.expectedAns===F.actualAns?f.logs.push(`\u901A\u8FC7 ${F.testcase}, \u6307\u4EE4\u6570: ${F.instructions}, \u8F93\u51FA: ${F.actualAns}`):f.logs.push(`\u5931\u8D25 ${F.testcase}, \u6307\u4EE4\u6570: ${F.instructions}, \u8F93\u51FA: ${F.actualAns}, \u9884\u671F: ${F.expectedAns}`),l&&f.logs.push(...F.logs)});const x=R.length,I=R.reduce((F,ie)=>F+ie.instructions,0);f.logs.push(`\u5E73\u5747\u6307\u4EE4\u6570: ${I/x}`);const ae=R.filter(F=>F.expectedAns===F.actualAns).length;return f.passes=`${ae} / ${x} \u4E2A\u901A\u8FC7\u6D4B\u8BD5\u7528\u4F8B`,f}const tr={class:"card"},nr={class:"form-item"},sr=E("span",{class:"label"},"\u5355\u6837\u4F8B\u6700\u5927\u6307\u4EE4\u6570",-1),ar={class:"form-item"},ir=E("span",{class:"label"},"\u9009\u62E9\u8BC4\u6D4B\u5B9E\u9A8C",-1),ur={style:{display:"flex"}},or=["id","value"],lr=["for"],cr={class:"card",style:{"margin-bottom":"2em"}},fr=E("span",{class:"label"},"\u5B9E\u9A8C\u8981\u6C42",-1),dr={class:"form-item"},hr=E("span",{class:"label"},"\u6D4B\u8BD5\u6837\u4F8B\uFF0C\u6837\u4F8B\u4E4B\u95F4\u4EE5\u9017\u53F7\u5206\u5272",-1),pr={class:"form-item"},vr=E("span",{class:"label"},"\u4EE3\u7801\u6587\u672C",-1),xr={class:"form-item"},mr=E("span",{class:"label"},"\u8BC4\u6D4B\u51FD\u6570",-1),gr={class:"form-item"},br=E("span",{class:"label"},"\u7B54\u6848\u51FD\u6570",-1),yr={class:"form-item"},Ar=E("span",{class:"label"},"\u542F\u7528\u8C03\u8BD5\u6A21\u5F0F\uFF08\u652F\u6301\u8FFD\u8E2A pc \u548C\u5BC4\u5B58\u5668\u53D8\u5316\uFF09",-1),Cr={style:{display:"flex","justify-content":"flex-end"}},Er=Be(" \u8BC4\u6D4B "),Fr={key:0,class:"card",style:{"margin-top":"2em"}},Dr={class:"label"},Rr=je({__name:"Judge",setup(o){const r=q(1e5),e=q("\u81EA\u5B9A\u4E49"),t=q(Fe(e.value)),u=q(""),l=q(!1),f=q({}),y=$e(()=>t.value.testCases.replace(/，/g,",").split(",").map(m=>m.trim()).filter(Boolean));Ge(()=>{var m;u.value=(m=window.localStorage.getItem("lc3code"))!=null?m:""}),he(u,m=>{window.localStorage.setItem("lc3code",m)}),he(e,m=>{t.value=Fe(m),f.value={}}),he(l,m=>{m&&Ce({message:"\u5F00\u542F\u8C03\u8BD5\u6A21\u5F0F\u540E\u4E3A\u4E86\u907F\u514D\u6DF7\u6DC6\uFF0C\u53EA\u663E\u793A\u7B2C\u4E00\u4E2A\u6837\u4F8B",type:"primary"})});const g=()=>{f.value={},![[!u.value,"\u5F85\u6D4B\u4EE3\u7801"],[!t.value.testCode,"\u8BC4\u6D4B\u51FD\u6570"],[!t.value.ansCode,"\u7B54\u6848\u51FD\u6570"],[!y.value.length,"\u6D4B\u8BD5\u6837\u4F8B"]].filter(v=>v[0]).map(v=>`\u7F3A\u5C11${v[1]}\uFF0C\u65E0\u6CD5\u8BC4\u6D4B`).map(v=>Ce({message:v,type:"danger"})).length&&(f.value=rr(u.value,t.value.testCode,t.value.ansCode,y.value,r.value,l.value))};return(m,v)=>{const w=Ee("f-switch"),R=Ee("f-button");return Z(),J("div",tr,[E("div",nr,[sr,j(E("input",{"onUpdate:modelValue":v[0]||(v[0]=x=>r.value=x),type:"number",style:{border:"0.5px solid",padding:"0.5em",margin:"4px"}},null,512),[[Q,r.value]])]),E("div",ar,[ir,E("div",ur,[(Z(!0),J(be,null,ye(Ze(Ye),x=>(Z(),J("div",{key:x,style:{margin:"4px"}},[j(E("input",{id:x,"onUpdate:modelValue":v[1]||(v[1]=I=>e.value=I),type:"radio",value:x},null,8,or),[[ze,e.value]]),E("label",{for:x},ee(x),9,lr)]))),128))])]),E("div",cr,[fr,E("div",null,ee(t.value.description),1)]),E("div",dr,[hr,j(E("input",{"onUpdate:modelValue":v[2]||(v[2]=x=>t.value.testCases=x),style:{border:"0.5px solid",padding:"0.5em",margin:"4px","box-sizing":"border-box",width:"100%"}},null,512),[[Q,t.value.testCases]])]),E("div",pr,[vr,j(E("textarea",{"onUpdate:modelValue":v[3]||(v[3]=x=>u.value=x),rows:"10",placeholder:"\u5728\u6B64\u8F93\u5165\u5F85\u8BC4\u6D4B\u7684\u6C47\u7F16\u4EE3\u7801\u6216\u8005\u673A\u5668\u7801",style:{border:"0.5px solid",margin:"4px"}},null,512),[[Q,u.value]])]),j(E("div",xr,[mr,j(E("textarea",{"onUpdate:modelValue":v[4]||(v[4]=x=>t.value.testCode=x),rows:"10",placeholder:"\u4E00\u4E2A js \u51FD\u6570\uFF0C\u63A5\u53D7\u5355\u4E2A\u6837\u4F8B\uFF08\u5B57\u7B26\u4E32\uFF09\u4F5C\u4E3A\u53C2\u6570\uFF0C\u521D\u59CB\u5316 lc3.r \u548C lc3.memory\uFF08\u5BC4\u5B58\u5668\u6570\u7EC4\u548C\u5185\u5B58\u6570\u7EC4\uFF09\uFF0C\u5E76\u8FD4\u56DE\u5BF9\u4E8E\u6BCF\u4E2A\u6837\u4F8B\u800C\u8A00\u9884\u671F\u7684\u8F93\u51FA",style:{border:"0.5px solid",margin:"4px"}},null,512),[[Q,t.value.testCode]])],512),[[Ae,e.value==="\u81EA\u5B9A\u4E49"]]),j(E("div",gr,[br,j(E("textarea",{"onUpdate:modelValue":v[5]||(v[5]=x=>t.value.ansCode=x),rows:"10",placeholder:"\u4E00\u4E2A js \u51FD\u6570\uFF0C\u8FD4\u56DE\u6D4B\u8BD5\u7ED3\u675F\u540E\u8BFB\u53D6 lc3 \u6A21\u62DF\u5668\u7684\u54EA\u4E2A\u53D8\u91CF\uFF08\u5982 lc3.r \u548C lc3.memory \u6570\u7EC4\u4E2D\u7684\u67D0\u4E00\u9879\uFF09\u7684\u503C\u4F5C\u4E3A\u7528\u6237\u7A0B\u5E8F\u8FD0\u884C\u7684\u8F93\u51FA\uFF08\u5373\u8BC4\u6D4B\u4F9D\u636E\uFF09",style:{border:"0.5px solid",margin:"4px"}},null,512),[[Q,t.value.ansCode]])],512),[[Ae,e.value==="\u81EA\u5B9A\u4E49"]]),E("div",yr,[Ar,pe(w,{modelValue:l.value,"onUpdate:modelValue":v[6]||(v[6]=x=>l.value=x)},null,8,["modelValue"])]),E("div",Cr,[pe(R,{type:"primary",onClick:v[7]||(v[7]=x=>g())},{default:Je(()=>[Er]),_:1})]),Object.keys(f.value).length?(Z(),J("div",Fr,[E("span",Dr,ee(f.value.state==="assembly"?"\u6C47\u7F16":f.value.state==="machine"?"\u673A\u5668\u7801":"")+"\u8BC4\u6D4B",1),Be(" "+ee(f.value.passes)+" ",1),E("ul",null,[(Z(!0),J(be,null,ye(f.value.logs,x=>(Z(),J("li",{key:x},ee(x),1))),128))])])):He("",!0)])}}});const wr=Ke("",14),Tr=JSON.parse('{"title":"lc3 \u6A21\u62DF\u8BC4\u6D4B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8BF4\u660E","slug":"\u8BF4\u660E"},{"level":2,"title":"\u81EA\u5B9A\u4E49\u8BC4\u6D4B\u529F\u80FD\u8BF4\u660E","slug":"\u81EA\u5B9A\u4E49\u8BC4\u6D4B\u529F\u80FD\u8BF4\u660E"},{"level":2,"title":"\u8BC4\u6D4B","slug":"\u8BC4\u6D4B"}],"relativePath":"judge.md","lastUpdated":1662373176000}'),Br={name:"judge.md"},Ir=Object.assign(Br,{setup(o){return(r,e)=>(Z(),J("div",null,[wr,pe(Rr)]))}});export{Tr as __pageData,Ir as default};
