(function(){var e=Object.defineProperty,t=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},n=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};let r=null;function i(){return r||(r=(async()=>{try{let e=globalThis.navigator?.gpu;if(!e)return{available:!1,shaderF16:!1};let t=await e.requestAdapter();return t?{available:!0,shaderF16:!!t.features?.has(`shader-f16`)}:{available:!1,shaderF16:!1}}catch{return{available:!1,shaderF16:!1}}})(),r)}async function a(){return(await i()).available}async function o(e=`auto`){return e===`webgpu`||e===`wasm`?e:await a()?`webgpu`:`wasm`}let s=Promise.resolve();function c(e){let t=s.then(e,e);return s=t.then(()=>void 0,()=>void 0),t}var l=/* @__PURE__ */ n({DEFAULT_DETECTION_OPTIONS:()=>hi,DEFAULT_IMAGE_CLASSIFICATION_OPTIONS:()=>_i,DEFAULT_PADDLE_OPTIONS:()=>xi,DEFAULT_PROCESS_RECOGNITION_OPTIONS:()=>bi,DEFAULT_RECOGNITION_OPTIONS:()=>gi,DEFAULT_RECOGNITION_ORDERING_OPTIONS:()=>yi,DEFAULT_TEXTLINE_ORIENTATION_OPTIONS:()=>vi,DetectionService:()=>ea,FORMULA_RECOGNITION_PRESETS:()=>Ei,FormulaRecognitionService:()=>Di,IMAGE_CLASSIFICATION_PRESETS:()=>Mi,Image:()=>Si,ImageClassificationService:()=>Ni,MODEL_PRESETS:()=>Sa,OBJECT_DETECTION_PRESETS:()=>Hi,ObjectDetectionService:()=>Ui,PaddleOcrService:()=>Ca,PaddleStructureService:()=>ka,RecognitionService:()=>la,TABLE_STRUCTURE_RECOGNITION_PRESETS:()=>Ki,TEXT_DETECTION_PRESETS:()=>Xi,TEXT_IMAGE_UNWARPING_PRESETS:()=>ta,TEXT_RECOGNITION_PRESETS:()=>ca,TableRecognitionV2Service:()=>ja,TableStructureRecognitionService:()=>qi,TextImageUnwarpingService:()=>na,calculateFormulaCropBox:()=>le,calculateTableStructureResizeParams:()=>Et,createFormulaRecognitionInputFeeds:()=>ce,createFormulaTokenizerVocabulary:()=>C,createTableStructureHtmlDocument:()=>ut,createTableStructureInputFeeds:()=>Tt,createTextImageUnwarpingInputFeeds:()=>Yn,getFormulaRecognitionPreset:()=>ge,getFormulaRecognitionPresetOptions:()=>_e,getImageClassificationPreset:()=>ve,getImageClassificationPresetOptions:()=>ye,getModelPreset:()=>ir,getModelPresetOptions:()=>ar,getObjectDetectionPreset:()=>Je,getObjectDetectionPresetOptions:()=>Ye,getTableStructureRecognitionPreset:()=>At,getTableStructureRecognitionPresetOptions:()=>jt,getTextDetectionPreset:()=>Mt,getTextDetectionPresetOptions:()=>Nt,getTextImageUnwarpingPreset:()=>Qn,getTextImageUnwarpingPresetOptions:()=>$n,getTextRecognitionPreset:()=>tr,getTextRecognitionPresetOptions:()=>nr,inferModelPreset:()=>or,matchTableStructureToOcr:()=>lt,normalizeInputToRgb:()=>x,postprocessFormulaRecognition:()=>S,postprocessObjectDetection:()=>Se,postprocessTableStructure:()=>tt,postprocessTextImageUnwarping:()=>Gn,preprocessFormulaRecognition:()=>se,preprocessTableStructure:()=>wt,preprocessTextImageUnwarping:()=>Jn,recoverTableHtmlFromCells:()=>Jr});function u(e){"@babel/helpers - typeof";return u=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},u(e)}function d(e,t){if(u(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(u(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function f(e){var t=d(e,`string`);return u(t)==`symbol`?t:t+``}function p(e,t,n){return(t=f(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){return Math.hypot(e.x-t.x,e.y-t.y)}function h(e,t){let n=[],r=[];for(let i=0;i<4;i++){let a=e[i],o=t[i];n.push([a.x,a.y,1,0,0,0,-a.x*o.x,-a.y*o.x]),r.push(o.x),n.push([0,0,0,a.x,a.y,1,-a.x*o.y,-a.y*o.y]),r.push(o.y)}let i=g(n,r);return[i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7],1]}function g(e,t){let n=t.length,r=e.map((e,n)=>[...e,t[n]]);for(let e=0;e<n;e++){let t=e;for(let i=e+1;i<n;i++)Math.abs(r[i][e])>Math.abs(r[t][e])&&(t=i);if(Math.abs(r[t][e])<2**-52)throw Error(`Cannot calculate perspective transform from degenerate points`);t!==e&&([r[e],r[t]]=[r[t],r[e]]);let i=r[e][e];for(let t=e;t<=n;t++)r[e][t]/=i;for(let t=0;t<n;t++){if(t===e)continue;let i=r[t][e];for(let a=e;a<=n;a++)r[t][a]-=i*r[e][a]}}return r.map(e=>e[n])}function _(e,t,n){let r=e[6]*t+e[7]*n+e[8];return Math.abs(r)<2**-52?{x:0,y:0}:{x:(e[0]*t+e[1]*n+e[2])/r,y:(e[3]*t+e[4]*n+e[5])/r}}function v(e){let t=-.75,n=e+1,r=1-e,i=((t*n-5*t)*n+8*t)*n-4*t,a=(1.25*e-2.25)*e*e+1,o=(1.25*r-2.25)*r*r+1;return[i,a,o,1-i-a-o]}function y(e,t,n){return Math.max(t,Math.min(n,e))}function b(e,t,n){return Math.max(t,Math.min(n,e))}function x(e){if(!Number.isInteger(e.width)||e.width<=0)throw Error(`Invalid input width: ${e.width}. Expected a positive integer.`);if(!Number.isInteger(e.height)||e.height<=0)throw Error(`Invalid input height: ${e.height}. Expected a positive integer.`);let t=e.width*e.height,n=e.data.length/t;if(!Number.isInteger(n)||n<1||n>4)throw Error(`Invalid input data length ${e.data.length} for image size ${e.width}x${e.height}. Expected 1, 2, 3, or 4 channels.`);if(n===3)return new Si(e.width,e.height,3,e.data);let r=new Uint8Array(t*3);for(let i=0;i<t;i++){let t=i*n,a=i*3;if(n===1||n===2){let n=e.data[t];r[a]=n,r[a+1]=n,r[a+2]=n}else r[a]=e.data[t],r[a+1]=e.data[t+1],r[a+2]=e.data[t+2]}return new Si(e.width,e.height,3,r)}function S(e,t){let n=ie(t.tokenizerVocabulary),r=D(w(e,n.length),n.length),i=te(t.maxSequenceLength&&r.length>t.maxSequenceLength?r.slice(0,t.maxSequenceLength):r,n,t.specialTokenIds);return{formula:i.formula,tokenIds:i.tokenIds,tokens:i.tokens}}function C(e){if(!oe(e))throw Error(`Formula tokenizer JSON must be an object.`);let t=e.model;if(!oe(t)||!oe(t.vocab))throw Error(`Formula tokenizer JSON must contain model.vocab.`);let n=[];for(let[e,r]of Object.entries(t.vocab)){if(!Number.isInteger(r)||r<0)throw Error(`Invalid formula tokenizer id for token '${e}': ${String(r)}.`);n[r]=e}return ie(n).slice()}function w(e,t){let n=Object.entries(e).filter(([,e])=>ee(e,t));if(n.length===0)throw Error(`Formula recognition output tensor with token ids or logits not found. Available outputs: ${Object.keys(e).join(`, `)}`);return(n.find(([e])=>/^(word_pred|sequences?|tokens?|logits?|output0?)$/i.test(e))??n[0])[1]}function ee(e,t){return T(e)||E(e,t)}function T(e){return e.dims.length!==1&&(e.dims.length!==2||e.dims[0]!==1)?!1:ae(e.data)}function E(e,t){return e.data instanceof Float32Array?e.dims.length===2?e.dims[1]===t:e.dims.length===3&&e.dims[0]===1&&e.dims[2]===t:!1}function D(e,t){if(T(e))return Array.from(e.data,e=>re(e));if(!E(e,t))throw Error(`Unsupported formula recognition output shape [${e.dims.join(`,`)}].`);let n=e.data,r=e.dims.length===2?e.dims[0]:e.dims[1],i=[];for(let e=0;e<r;e+=1){let r=e*t;i.push(ne(n,r,t))}return i}function te(e,t,n=Ci){let r=/* @__PURE__ */ new Set([n.bos,n.pad,n.unk,...n.additional??[]]),i=[],a=[];for(let o of e){if(o===n.eos)break;if(r.has(o))continue;let e=t[o];if(e===void 0)throw Error(`Formula token id ${o} is outside tokenizer vocabulary.`);i.push(o),a.push(e)}return{formula:O(a),tokenIds:i,tokens:a}}function O(e){let t=[];for(let n of e.join(``)){let e=wi.get(n);if(e===void 0)for(let e of new TextEncoder().encode(n))t.push(e);else t.push(e)}return new TextDecoder(`utf-8`,{fatal:!1}).decode(new Uint8Array(t))}function k(){let e=[];for(let t=33;t<=126;t+=1)e.push(t);for(let t=161;t<=172;t+=1)e.push(t);for(let t=174;t<=255;t+=1)e.push(t);let t=e.slice(),n=0;for(let r=0;r<=255;r+=1)e.includes(r)||(e.push(r),t.push(256+n),n+=1);return new Map(t.map((t,n)=>[String.fromCodePoint(t),e[n]]))}function ne(e,t,n){let r=0,i=e[t];for(let a=1;a<n;a+=1){let n=e[t+a];n>i&&(i=n,r=a)}return r}function re(e){let t=typeof e==`bigint`?Number(e):e;if(!Number.isInteger(t)||t<0)throw Error(`Invalid formula token id: ${String(e)}.`);return t}function ie(e){if(!Array.isArray(e)||e.length===0)throw Error(`Formula recognition tokenizerVocabulary is required.`);for(let[t,n]of e.entries())if(typeof n!=`string`)throw Error(`Invalid formula tokenizer token at id ${t}.`);return e}function ae(e){return e instanceof Int8Array||e instanceof Uint8Array||e instanceof Int16Array||e instanceof Uint16Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof BigInt64Array||e instanceof BigUint64Array}function oe(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function se(e,t){fe(t);let n=le(e,t),r=n.x===0&&n.y===0&&n.width===e.width&&n.height===e.height?e:e.crop(n),i=ue(r,t),a=r.resize({width:i.width,height:i.height}),o=de(a,t),s=a.resize({width:o.width,height:o.height}),c=Math.floor((t.imageWidth-s.width)/2),l=Math.floor((t.imageHeight-s.height)/2),u=t.imageWidth-s.width-c,d=t.imageHeight-s.height-l,f=s.padding({left:c,top:l,right:u,bottom:d,color:[t.imagePaddingValue,t.imagePaddingValue,t.imagePaddingValue]}),p=Math.ceil(f.width/16)*16,m=Math.ceil(f.height/16)*16,h=new Float32Array(p*m);h.fill(t.latexPaddingValue);for(let e=0;e<f.height;e++)for(let n=0;n<f.width;n++){let r=(e*f.width+n)*f.channels,i=me(f.data[r],f.data[r+1],f.data[r+2]);h[e*p+n]=(i/255-t.grayscaleMean)/t.grayscaleStdDeviation}return{image:{data:h,dims:[1,1,m,p]},resizeParams:{srcWidth:e.width,srcHeight:e.height,croppedX:n.x,croppedY:n.y,croppedWidth:n.width,croppedHeight:n.height,resizedWidth:s.width,resizedHeight:s.height,imagePaddedWidth:f.width,imagePaddedHeight:f.height,tensorPaddedWidth:p,tensorPaddedHeight:m,paddingLeft:c,paddingTop:l,paddingRight:u,paddingBottom:d}}}function ce(e,t,n,r={}){return{[t.inputNames?.[0]??r.inputName??`x`]:new e.Tensor(`float32`,n.image.data,n.image.dims)}}function le(e,t){let n=t.cropMarginThreshold,r=t.cropMarginMaxAspectRatio;if(!Number.isFinite(n)||!Number.isFinite(r))throw Error(`Formula crop-margin options require finite cropMarginThreshold and cropMarginMaxAspectRatio.`);let i=255,a=0,o=new Uint8Array(e.width*e.height);for(let t=0;t<o.length;t++){let n=t*e.channels,r=me(e.data[n],e.data[n+1],e.data[n+2]);o[t]=r,i=Math.min(i,r),a=Math.max(a,r)}if(a===i)return pe(e);let s=e.width,c=e.height,l=-1,u=-1;for(let t=0;t<e.height;t++)for(let r=0;r<e.width;r++)(o[t*e.width+r]-i)/(a-i)*255<n&&(s=Math.min(s,r),c=Math.min(c,t),l=Math.max(l,r),u=Math.max(u,t));if(l<s||u<c)return pe(e);let d=l-s+1,f=u-c+1;return d===0||f===0||Math.max(d,f)/Math.min(d,f)>r?pe(e):{x:s,y:c,width:d,height:f}}function ue(e,t){let n=Math.min(t.imageHeight,t.imageWidth);return e.width<=e.height?{width:n,height:Math.max(1,Math.floor(n*e.height/e.width))}:{width:Math.max(1,Math.floor(n*e.width/e.height)),height:n}}function de(e,t){let n=t.imageWidth,r=t.imageHeight,i=Math.min(n/e.width,r/e.height),a=Math.max(1,Math.floor(e.width*i)),o=Math.max(1,Math.floor(e.height*i));if(a>n||o>r)throw Error(`Invalid formula resize result: ${a}x${o} exceeds padded size ${n}x${r}.`);return{width:a,height:o}}function fe(e){if(!Number.isInteger(e.imageWidth)||e.imageWidth<=0)throw Error(`Invalid formula recognition imageWidth: ${e.imageWidth}. Expected a positive integer.`);if(!Number.isInteger(e.imageHeight)||e.imageHeight<=0)throw Error(`Invalid formula recognition imageHeight: ${e.imageHeight}. Expected a positive integer.`);if(e.inputChannels!==1)throw Error(`Unsupported formula recognition inputChannels: ${e.inputChannels}. Expected 1.`);if(!Number.isFinite(e.grayscaleMean)||!Number.isFinite(e.grayscaleStdDeviation)||e.grayscaleStdDeviation===0)throw Error(`Formula recognition grayscale normalization requires finite mean and non-zero std deviation.`);if(!Number.isFinite(e.imagePaddingValue))throw Error(`Formula recognition imagePaddingValue must be finite.`);if(!Number.isFinite(e.latexPaddingValue))throw Error(`Formula recognition latexPaddingValue must be finite.`)}function pe(e){return{x:0,y:0,width:e.width,height:e.height}}function me(e=0,t=0,n=0){return Math.round(e*.299+t*.587+n*.114)}function he(e,t){return{...Ti,imageHeight:e,imageWidth:e,maxSequenceLength:t}}function ge(e){let t=Ei[e];if(!t)throw Error(`Unsupported formula recognition preset: ${e}`);return t}function _e(e){if(!e)return{};let t=ge(e).options;return{...t,preprocessPipeline:t.preprocessPipeline?[...t.preprocessPipeline]:void 0,specialTokenIds:t.specialTokenIds?{...t.specialTokenIds}:void 0}}function ve(e){let t=Mi[e];if(!t)throw Error(`Unsupported image classification preset: ${e}`);return t}function ye(e){if(!e)return{};let t=ve(e).options;return{...t,labels:t.labels?[...t.labels]:void 0}}function A(e,t){return{[e.inputNames?.[0]??`x`]:t}}function be(e,t){let n=e.inputMetadata?.[0]?.shape?.[t];if(!(typeof n!=`number`||n<=0||!Number.isFinite(n)))return n}function xe(e){return{channels:be(e,1),height:be(e,2),width:be(e,3)}}function Se(e,t={}){let n=Ce(e),r=Te(n);Ee(n,r);let i=De(e,r.length/6,n),a=[];for(let e=0;e<i;e+=1){let n=e*6,i=Ne(r,n,t.outputLayout??Pe(r,n));if(i.classId<0||i.score<Le(t,i.classId))continue;if(i.coordinate.some(e=>!Number.isFinite(e)))throw Error(`Object detection output row at offset ${n} contains non-finite coordinates.`);let o={...i,label:t.labels?.[i.classId]??String(i.classId)};a.push(Re(o,t))}let o=Ve(a,t);return t.layoutNms?Ue(o,Pi):o}function Ce(e){let t=Object.entries(e).filter(([,e])=>we(e));if(t.length===0)throw Error(`Object detection output tensor with shape [N,6] or [1,N,6] not found. Available outputs: ${Object.keys(e).join(`, `)}`);return(t.find(([e])=>/^(bbox|boxes|dets?|output0?)$/i.test(e))??t[0])[1]}function we(e){let{dims:t}=e;return t.length===2&&t[1]===6||t.length===3&&t[0]===1&&t[2]===6}function Te(e){if(!(e.data instanceof Float32Array))throw Error(`Object detection output tensor must contain Float32Array data.`);return e.data}function Ee(e,t){if(!e.dims.every(e=>Number.isInteger(e)&&e>0))throw Error(`Object detection output shape [${e.dims.join(`,`)}] must contain positive integer dimensions.`);if(t.length%6!=0)throw Error(`Object detection output shape [${e.dims.join(`,`)}] does not match data length ${t.length}.`);let n=e.dims.reduce((e,t)=>e*t,1);if(t.length!==n)throw Error(`Object detection output shape [${e.dims.join(`,`)}] expects ${n} values but got ${t.length}.`)}function De(e,t,n){let r=e.bbox_num??e.boxes_num??Oe(e,n);if(!r)return t;let i=Me(r);if(!Number.isInteger(i)||i<0||i>t)throw Error(`Invalid object detection bbox_num: ${i}. Expected an integer between 0 and ${t}.`);return i}function Oe(e,t){let n=Object.values(e).filter(e=>e!==t&&ke(e)&&je(e.data)&&Ae(e));if(n.length===1)return n[0]}function ke(e){return e.dims.reduce((e,t)=>e*t,1)===1}function Ae(e){if(!ArrayBuffer.isView(e.data)||e.data instanceof DataView)return!1;let t=e.dims.reduce((e,t)=>e*t,1);return e.data.length===t}function je(e){return e instanceof Int8Array||e instanceof Uint8Array||e instanceof Int16Array||e instanceof Uint16Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof BigInt64Array||e instanceof BigUint64Array}function Me(e){let{data:t}=e;if(!ke(e)||!Ae(e))throw Error(`Object detection bbox_num shape [${e.dims.join(`,`)}] must contain exactly one value.`);if(!je(t))throw Error(`Object detection bbox_num tensor must contain integer data.`);if(!ArrayBuffer.isView(t)||t instanceof DataView)return;let n=t;if(n.length<1)return;let r=n[0];return typeof r==`bigint`?Number(r):r}function Ne(e,t,n){let r=n===`class-score-xyxy`?t:t+1,i=n===`class-score-xyxy`?t+1:t,a=e[r],o=e[i];if(!Number.isInteger(a))throw Error(`Object detection class id at offset ${r} must be an integer. Received ${a}.`);if(!Number.isFinite(o))throw Error(`Object detection score at offset ${i} must be finite. Received ${o}.`);return{classId:a,score:o,coordinate:[e[t+2],e[t+3],e[t+4],e[t+5]]}}function Pe(e,t){let n=e[t],r=e[t+1],i=Fe(n),a=Fe(r),o=Ie(n),s=Ie(r);if(i&&s)return`class-score-xyxy`;if(o&&a)return`score-class-xyxy`;throw Error(`Unable to infer object detection output layout from row prefix [${n}, ${r}]. Set outputLayout explicitly.`)}function Fe(e){return Number.isInteger(e)&&e>=0}function Ie(e){return Number.isFinite(e)&&e>=0&&e<=1}function Le(e,t){return typeof e.threshold==`number`?e.threshold:Array.isArray(e.threshold)||e.threshold?e.threshold[t]??0:0}function Re(e,t){let n=ze(t.layoutUnclipRatio,e.classId);if(!n)return e;let[r,i]=n,[a,o,s,c]=e.coordinate,l=(a+s)/2,u=(o+c)/2,d=(s-a)*r,f=(c-o)*i;return{...e,coordinate:[l-d/2,u-f/2,l+d/2,u+f/2]}}function ze(e,t){if(e===void 0)return;if(typeof e==`number`)return Be(e,`layoutUnclipRatio`),[e,e];if(Array.isArray(e)){if(e.length!==2)throw Error(`layoutUnclipRatio tuple must contain width and height ratios.`);return Be(e[0],`layoutUnclipRatio[0]`),Be(e[1],`layoutUnclipRatio[1]`),[e[0],e[1]]}let n=e[t];if(n){if(!Array.isArray(n)||n.length!==2)throw Error(`layoutUnclipRatio for class ${t} must be a [width,height] tuple.`);return Be(n[0],`layoutUnclipRatio[${t}][0]`),Be(n[1],`layoutUnclipRatio[${t}][1]`),[n[0],n[1]]}}function Be(e,t){if(!Number.isFinite(e)||e<=0)throw Error(`Invalid ${t}: ${e}. Expected a positive finite number.`)}function Ve(e,t){if(!t.layoutMergeBboxesMode)return e;let n=[];for(let r of e){let e=He(t.layoutMergeBboxesMode,r.classId);if(e===`union`){n.push(r);continue}let i=!0;for(let t=n.length-1;t>=0;t--){let a=n[t];if(a.classId!==r.classId||!We(a.coordinate,r.coordinate))continue;let o=qe(a.coordinate),s=qe(r.coordinate);e===`large`?s>o?n.splice(t,1):i=!1:e===`small`&&(s<o?n.splice(t,1):i=!1)}i&&n.push(r)}return n}function He(e,t){let n=typeof e==`string`?e:e[t];if(n===void 0)return`union`;if(n!==`large`&&n!==`small`&&n!==`union`)throw Error(`Unsupported layoutMergeBboxesMode: ${String(n)}.`);return n}function Ue(e,t){let n=[],r=/* @__PURE__ */ new Map;for(let t of e){let e=r.get(t.classId)??[];e.push(t),r.set(t.classId,e)}for(let e of r.values()){let r=[...e].sort((e,t)=>t.score-e.score);for(;r.length;){let e=r.shift();n.push(e);for(let n=r.length-1;n>=0;n--)Ge(e.coordinate,r[n].coordinate)>t&&r.splice(n,1)}}return n.sort((e,t)=>t.score-e.score)}function We(e,t){return Ke(e,t)>0}function Ge(e,t){let n=Ke(e,t);if(n<=0)return 0;let r=qe(e)+qe(t)-n;return r>0?n/r:0}function Ke(e,t){let n=Math.max(Math.min(e[0],e[2]),Math.min(t[0],t[2])),r=Math.max(Math.min(e[1],e[3]),Math.min(t[1],t[3])),i=Math.min(Math.max(e[0],e[2]),Math.max(t[0],t[2])),a=Math.min(Math.max(e[1],e[3]),Math.max(t[1],t[3]));return Math.max(0,i-n)*Math.max(0,a-r)}function qe(e){return Math.abs(e[2]-e[0])*Math.abs(e[3]-e[1])}function Je(e){let t=Hi[e];if(!t)throw Error(`Unsupported object detection preset: ${e}`);return t}function Ye(e){if(!e)return{};let t=Je(e).options;return{...t,labels:t.labels?[...t.labels]:void 0,requiredInputNames:t.requiredInputNames?[...t.requiredInputNames]:void 0}}function Xe(e,t){$e(t);let n=Qe(e,t);return{image:{data:e.resize({width:n.dstWidth,height:n.dstHeight}).tensor({mean_values:t.mean,norm_values:t.stdDeviation,channel_order:t.channelOrder}),dims:[1,3,n.dstHeight,n.dstWidth]},imShape:{data:new Float32Array([n.dstHeight,n.dstWidth]),dims:[1,2]},scaleFactor:{data:new Float32Array([n.scaleHeight,n.scaleWidth]),dims:[1,2]},resizeParams:n}}function Ze(e,t,n,r){let i=t.inputNames??r??[`image`,`im_shape`,`scale_factor`],a={image:n.image,im_shape:n.imShape,scale_factor:n.scaleFactor},o=r??i.filter(et),s={};if(o.length===0)throw Error(`Object detection session does not expose supported input tensors. Available input names: ${i.join(`, `)}`);for(let t of o){if(!i.includes(t))throw Error(`Object detection input tensor '${t}' not found. Available input names: ${i.join(`, `)}`);let n=a[t];s[t]=new e.Tensor(`float32`,n.data,n.dims)}return s}function Qe(e,t){let{imageHeight:n,imageWidth:r}=t;j(n,r);let i=r,a=n;return{srcWidth:e.width,srcHeight:e.height,dstWidth:i,dstHeight:a,scaleWidth:i/e.width,scaleHeight:a/e.height}}function $e(e){if(j(e.imageHeight,e.imageWidth),e.channelOrder!==`rgb`&&e.channelOrder!==`bgr`)throw Error(`Unsupported object detection channelOrder: ${e.channelOrder}. Expected "rgb" or "bgr".`)}function j(e,t){if(!Number.isInteger(t)||(t??0)<=0)throw Error(`Invalid object detection imageWidth: ${t}. Expected a positive integer.`);if(!Number.isInteger(e)||(e??0)<=0)throw Error(`Invalid object detection imageHeight: ${e}. Expected a positive integer.`)}function et(e){return e===`image`||e===`im_shape`||e===`scale_factor`}function tt(e,t,n){let r=nt(n),i=rt(e,`structure_probs`,r.length),a=rt(e,`loc_preds`,n.locRegNum),o=at(i,`structure_probs`),s=at(a,`loc_preds`),[c,l,u]=ot(i,o,`structure_probs`),[,d,f]=ot(a,s,`loc_preds`);if(st(t),c!==1)throw Error(`Unsupported table structure batch size ${c}. Expected batch size 1.`);if(d!==l)throw Error(`Table structure loc_preds sequence length ${d} does not match structure_probs length ${l}.`);if(u!==r.length)throw Error(`Table structure class count ${u} does not match dictionary size ${r.length}.`);if(n.locRegNum!==void 0&&f!==n.locRegNum)throw Error(`Table structure loc_preds width ${f} does not match locRegNum ${n.locRegNum}.`);if(f%2!=0)throw Error(`Invalid table structure locRegNum: ${f}. Expected an even number.`);return ct(o,s,r,{sequenceLength:l,classCount:u,locRegNum:f,shape:t.data,ignoreBboxes:n.ignoreBboxes})}function nt(e){let t=e.structureDictionary;if(!t?.length)throw Error(`Table structure structureDictionary is required for TableLabelDecode.`);let n=[...t];if(e.mergeNoSpanStructure){n.includes(`<td></td>`)||n.push(`<td></td>`);let e=n.indexOf(`<td>`);e!==-1&&n.splice(e,1)}return[`sos`,...n,`eos`]}function rt(e,t,n){let r=e[t];if(r&&it(r,n))return r;let i=Object.values(e).filter(e=>it(e,n));if(i.length===1)return i[0];throw Error(`Table structure output tensor '${t}' not found. Available keys: ${Object.keys(e).join(`, `)}`)}function it(e,t){return e.data instanceof Float32Array&&e.dims.length===3&&e.dims[0]===1&&e.dims[1]>0&&e.dims[2]>0&&(t===void 0||e.dims[2]===t)}function at(e,t){if(!(e.data instanceof Float32Array))throw Error(`Table structure ${t} tensor must contain Float32Array data.`);return e.data}function ot(e,t,n){let[r,i,a]=e.dims;if(e.dims.length!==3||r<=0||i<=0||a<=0)throw Error(`Unsupported table structure ${n} shape [${e.dims.join(`,`)}]. Expected [1,T,C].`);if(t.length!==r*i*a)throw Error(`Table structure ${n} shape [${e.dims.join(`,`)}] does not match data length ${t.length}.`);return[r,i,a]}function st(e){if(!(e.data instanceof Float32Array)||e.dims.length!==2||e.dims[1]!==6)throw Error(`Unsupported table structure shape tensor [${e.dims.join(`,`)}]. Expected [1,6].`);if(e.data.length!==6)throw Error(`Table structure shape tensor [${e.dims.join(`,`)}] does not match data length ${e.data.length}.`)}function ct(e,t,n,r){let i=n.length-1,a=[],o=[],s=[],c=/* @__PURE__ */ new Set([`<td>`,`<td`,`<td></td>`]);for(let l=0;l<r.sequenceLength;l++){let{classIndex:u,score:d}=dt(e,l*r.classCount,r.classCount);if(l>0&&u===i)break;if(u===0||u===i)continue;let f=n[u];c.has(f)&&!r.ignoreBboxes&&o.push(ft(t,l*r.locRegNum,r.locRegNum,r.shape)),a.push(f),s.push(d)}return{bbox:o,structure:a,html:a.join(``),fullHtml:ut(a),structureScore:s.length?s.reduce((e,t)=>e+t,0)/s.length:0}}function lt(e,t,n={}){let r=e.bbox.map((e,t)=>vt(e,t)),i=pt(r,n.filterOcrAboveTable?mt(t,r):t.map((e,t)=>({result:e,index:t}))),a=r.map((e,n)=>gt(i[n]??[],t)),o=ht(e.structure,a);return{html:o,fullHtml:ut(o),matches:r.map((e,t)=>({cellIndex:t,ocrIndices:i[t]??[],text:a[t]?.text??``,box:e})),cellTexts:a.map(e=>e.text)}}function ut(e){return`<html><body><table>${Array.isArray(e)?e.join(``):e}</table></body></html>`}function dt(e,t,n){let r=0,i=e[t];for(let a=1;a<n;a++){let n=e[t+a];n>i&&(r=a,i=n)}return{classIndex:r,score:i}}function ft(e,t,n,r){let[,,i,a,o,s]=r,c=[];for(let r=0;r<n;r++){let n=e[t+r];c.push(r%2==0?n*s/a:n*o/i)}return c}function pt(e,t){let n=e.map(()=>[]);if(!e.length)return n;for(let{result:r,index:i}of t){let t=yt(r.box,i),a=0,o=1/0,s=1/0;for(let n=0;n<e.length;n++){let r=e[n],i=1-St(t,r),c=xt(t,r);(i<o||i===o&&c<s)&&(a=n,o=i,s=c)}n[a].push(i)}return n}function mt(e,t){if(!t.length)return[];let n=Math.min(...t.map(e=>e[1]));return e.map((e,t)=>({result:e,index:t})).filter(({result:e,index:t})=>yt(e.box,t)[3]>=n)}function ht(e,t){let n=[],r=0;for(let i of e)if(i.includes(`</td>`)){let e=t[r]?.html??``;i===`<td></td>`?n.push(`<td>`,e,`</td>`):n.push(e,i),r++}else n.push(i);return n.join(``)}function gt(e,t){let n=e.length>1,r=n&&(t[e[0]]?.text??``).includes(`<b>`),i=[];for(let r=0;r<e.length;r++){let a=t[e[r]]?.text??``;if(n){if(a=_t(a),!a)continue;r!==e.length-1&&!a.endsWith(` `)&&(a=`${a} `)}i.push(a)}let a=i.map(e=>Ct(e)).join(``);return{text:i.join(``),html:r?`<b>${a}</b>`:a}}function _t(e){let t=e;return t.startsWith(` `)&&(t=t.slice(1)),t.includes(`<b>`)&&(t=t.slice(3)),t.includes(`</b>`)&&(t=t.slice(0,-4)),t}function vt(e,t){return bt(e,`table cell ${t}`)}function yt(e,t){if(Array.isArray(e))return bt(e,`OCR box ${t}`);let{x:n,y:r,width:i,height:a}=e;if(!Number.isFinite(n)||!Number.isFinite(r)||!Number.isFinite(i)||!Number.isFinite(a)||i<0||a<0)throw Error(`Invalid OCR box ${t}. Expected finite x/y/width/height.`);return[n,r,n+i,r+a]}function bt(e,t){if(e.length!==4&&e.length!==8)throw Error(`Invalid ${t} coordinate length ${e.length}. Expected 4 or 8.`);if(e.some(e=>!Number.isFinite(e)))throw Error(`Invalid ${t} coordinates. Expected finite numbers.`);if(e.length===4){let[t,n,r,i]=e;return[Math.min(t,r),Math.min(n,i),Math.max(t,r),Math.max(n,i)]}let n=[e[0],e[2],e[4],e[6]],r=[e[1],e[3],e[5],e[7]];return[Math.min(...n),Math.min(...r),Math.max(...n),Math.max(...r)]}function xt(e,t){let[n,r,i,a]=e,[o,s,c,l]=t,u=Math.abs(o-n)+Math.abs(s-r)+Math.abs(c-i)+Math.abs(l-a),d=Math.abs(o-n)+Math.abs(s-r),f=Math.abs(c-i)+Math.abs(l-a);return u+Math.min(d,f)}function St(e,t){let n=Math.max(0,e[2]-e[0])*Math.max(0,e[3]-e[1]),r=Math.max(0,t[2]-t[0])*Math.max(0,t[3]-t[1]),i=Math.max(e[0],t[0]),a=Math.max(e[1],t[1]),o=Math.min(e[2],t[2]),s=Math.min(e[3],t[3]),c=Math.max(0,o-i)*Math.max(0,s-a),l=n+r-c;return l>0?c/l:0}function Ct(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#x27;`)}function wt(e,t){Ot(t);let n=Et(e,t);return{image:{data:Dt(e.resize({width:n.resizedWidth,height:n.resizedHeight}).tensor({mean_values:t.mean,norm_values:t.stdDeviation,channel_order:t.channelOrder}),n),dims:[1,3,n.paddedHeight,n.paddedWidth]},shape:{data:new Float32Array([n.srcHeight,n.srcWidth,n.ratioHeight,n.ratioWidth,n.paddedHeight,n.paddedWidth]),dims:[1,6]},resizeParams:n}}function Tt(e,t,n){return{[t.inputNames?.[0]??`x`]:new e.Tensor(`float32`,n.image.data,n.image.dims)}}function Et(e,t){let{imageHeight:n,imageWidth:r,maxSideLength:i}=t;kt(n,r,i);let a=i/Math.max(e.width,e.height),o=Math.floor(e.width*a),s=Math.floor(e.height*a);if(o<=0||s<=0)throw Error(`Invalid table structure resize result: ${o}x${s}. Source image is too narrow for maxSideLength ${i}.`);if(o>r||s>n)throw Error(`Invalid table structure resize result: ${o}x${s} exceeds padded size ${r}x${n}.`);return{srcWidth:e.width,srcHeight:e.height,resizedWidth:o,resizedHeight:s,paddedWidth:r,paddedHeight:n,ratioWidth:a,ratioHeight:a}}function Dt(e,t){let{resizedWidth:n,resizedHeight:r,paddedWidth:i,paddedHeight:a}=t,o=new Float32Array(3*i*a);for(let t=0;t<3;t++){let s=t*n*r,c=t*i*a;for(let t=0;t<r;t++){let r=s+t*n,a=c+t*i;o.set(e.subarray(r,r+n),a)}}return o}function Ot(e){if(kt(e.imageHeight,e.imageWidth,e.maxSideLength),e.channelOrder!==`rgb`&&e.channelOrder!==`bgr`)throw Error(`Unsupported table structure channelOrder: ${e.channelOrder}. Expected "rgb" or "bgr".`)}function kt(e,t,n){if(!Number.isInteger(t)||(t??0)<=0)throw Error(`Invalid table structure imageWidth: ${t}. Expected a positive integer.`);if(!Number.isInteger(e)||(e??0)<=0)throw Error(`Invalid table structure imageHeight: ${e}. Expected a positive integer.`);if(!Number.isInteger(n)||(n??0)<=0)throw Error(`Invalid table structure maxSideLength: ${n}. Expected a positive integer.`)}function At(e){let t=Ki[e];if(!t)throw Error(`Unsupported table structure recognition preset: ${e}`);return t}function jt(e){if(!e)return{};let t=At(e).options;return{...t,structureDictionary:t.structureDictionary?[...t.structureDictionary]:void 0}}function Mt(e){let t=Xi[e];if(!t)throw Error(`Unsupported text detection preset: ${e}`);return t}function Nt(e){return e?{...Mt(e).options}:{}}function Pt(e,t){let n=Ht(e);if(n.length<3||!Number.isFinite(t)||Math.abs(t)<.5)return n;let r=Xt(n);if(Math.abs(r)<=Zi)return[];let i=r<0?-t:t,a=Math.abs(i);if(a<=Zi)return n;let o=Rt(n),s=a*Qi,c=Math.min(Math.PI/Math.acos(1-s/a),a*Math.PI),l=Math.sin(2*Math.PI/c)*(i<0?-1:1),u=Math.cos(2*Math.PI/c),d=c/(2*Math.PI),f=[];for(let e=0,t=n.length-1;e<n.length;t=e,e++)Ft(n,o,e,t,i,l,u,d,f);return Wt(Ut(f))}function Ft(e,t,n,r,i,a,o,s,c){if(qt(e[n],e[r]))return;let l=Yt(t[n],t[r]),u=Jt(t[n],t[r]);l=Math.max(-1,Math.min(1,l)),Math.abs(i)<=Zi?Vt(c,e[n]):u>-.999&&l*i<0?Vt(c,It(e,t,n,r,i)):Lt(e,t,n,r,Math.atan2(l,u),i,a,o,s,c)}function It(e,t,n,r,i){let a=(n+1)%e.length;return Kt(Bt(e[r],t[r],i),Bt(e[n],t[r],i),Bt(e[n],t[n],i),Bt(e[a],t[n],i))??Bt(e[n],t[n],i)}function Lt(e,t,n,r,i,a,o,s,c,l){let u=e[n],d={x:t[r].x*a,y:t[r].y*a};Vt(l,{x:u.x+d.x,y:u.y+d.y});let f=Math.ceil(c*Math.abs(i));for(let e=1;e<f;e++)d={x:d.x*s-o*d.y,y:d.x*o+d.y*s},Vt(l,{x:u.x+d.x,y:u.y+d.y});Vt(l,Bt(u,t[n],a))}function Rt(e){return e.map((t,n)=>zt(t,e[(n+1)%e.length]))}function zt(e,t){let n=t.x-e.x,r=t.y-e.y,i=Math.hypot(n,r);return i<=Zi?{x:0,y:0}:{x:r/i,y:-n/i}}function Bt(e,t,n){return{x:e.x+t.x*n,y:e.y+t.y*n}}function Vt(e,t){e.push({x:Math.round(t.x),y:Math.round(t.y)})}function Ht(e){let t=e.slice(),n=t[0],r=t[t.length-1];return n&&r&&qt(n,r)&&t.pop(),t}function Ut(e){let t=[];for(let n of e){let e=t[t.length-1];e&&qt(e,n)||t.push(n)}let n=t[0],r=t[t.length-1];return n&&r&&qt(n,r)&&t.pop(),t}function Wt(e){if(e.length<3)return e;let t=[];for(let n=0;n<e.length;n++){let r=e[(n+e.length-1)%e.length],i=e[n],a=e[(n+1)%e.length];Gt(i,r,a)||t.push(i)}return t}function Gt(e,t,n){let r=(n.x-t.x)*(e.y-t.y)-(n.y-t.y)*(e.x-t.x);return Math.abs(r)>1e-9?!1:e.x>=Math.min(t.x,n.x)&&e.x<=Math.max(t.x,n.x)&&e.y>=Math.min(t.y,n.y)&&e.y<=Math.max(t.y,n.y)}function Kt(e,t,n,r){let i=t.x-e.x,a=t.y-e.y,o=r.x-n.x,s=r.y-n.y,c=i*s-a*o;if(Math.abs(c)<Zi)return null;let l=((n.x-e.x)*s-(n.y-e.y)*o)/c;return{x:e.x+l*i,y:e.y+l*a}}function qt(e,t){return e.x===t.x&&e.y===t.y}function Jt(e,t){return e.x*t.x+e.y*t.y}function Yt(e,t){return e.y*t.x-t.y*e.x}function Xt(e){let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];t+=r.x*i.y-i.x*r.y}return t/2}function Zt(e,t,n,r){let i=new Uint8Array(t*n),a=[],o=(e,n)=>n*t+e;for(let s=0;s<n;s++)for(let c=0;c<t;c++){let l=o(c,s);if(!e[l]||i[l])continue;let u=[{x:c,y:s}],d=[],f=[],p=0;for(i[l]=1;p<u.length;){let r=u[p];p++,d.push(r),an(e,t,n,r.x,r.y)&&f.push(r);for(let[a,s]of[[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[1,-1],[-1,1],[1,1]]){let c=r.x+a,l=r.y+s;if(c<0||c>=t||l<0||l>=n)continue;let d=o(c,l);e[d]&&!i[d]&&(i[d]=1,u.push({x:c,y:l}))}}if(d.length>=r.minimumAreaThreshold&&f.length>=3){let r=on(d,e,t,n);for(let e of r)a.push({area:Math.abs(mn(e)),points:e,pixels:d})}}return a}function Qt(e,t,n){if(t<0||!Number.isFinite(t))throw Error(`Epsilon must be a finite non-negative number`);if(e.length<=2)return[...e];let r=n?tn(e):[...e];return r.length<=2?r:n?$t(r,t):en(r,t)}function $t(e,t){let n=nn(e,e[0]);if(n<=0)return[...e];let r=en(e.slice(0,n+1),t),i=en([...e.slice(n),e[0]],t),a=rn([...r,...i.slice(1,-1)]);return a.length>=3?a:[...e]}function en(e,t){let n=new Uint8Array(e.length);n[0]=1,n[e.length-1]=1;let r=[[0,e.length-1]],i=t*t;for(;r.length;){let[t,a]=r.pop(),o=0,s=-1;for(let n=t+1;n<a;n++){let r=fn(e[n],e[t],e[a]);r>o&&(o=r,s=n)}s>=0&&o>i&&(n[s]=1,r.push([t,s],[s,a]))}let a=[];for(let t=0;t<e.length;t++)n[t]&&a.push(e[t]);return a}function tn(e){let t=[...e],n=t[0],r=t[t.length-1];return n&&r&&n.x===r.x&&n.y===r.y&&t.pop(),t}function nn(e,t){let n=0,r=-1/0;for(let i=1;i<e.length;i++){let a=pn(e[i],t);a>r&&(r=a,n=i)}return n}function rn(e){let t=[];for(let n of e){let e=t[t.length-1];e&&e.x===n.x&&e.y===n.y||t.push(n)}return t}function an(e,t,n,r,i){for(let[a,o]of[[-1,0],[1,0],[0,-1],[0,1]]){let s=r+a,c=i+o;if(s<0||s>=t||c<0||c>=n||!e[c*t+s])return!0}return!1}function on(e,t,n,r){let i=/* @__PURE__ */ new Map;for(let a of e)sn(i,a,t,n,r);let a=/* @__PURE__ */ new Set,o=[];for(let e of i.values())for(let t of e){if(a.has(t.id))continue;let e=ln(t,i,a);e.length>=3&&o.push(e)}return o.length>0?o:[e]}function sn(e,t,n,r,i){let{x:a,y:o}=t;un(n,r,i,a,o-1)||cn(e,{x:a,y:o},{x:a+1,y:o}),un(n,r,i,a+1,o)||cn(e,{x:a+1,y:o},{x:a+1,y:o+1}),un(n,r,i,a,o+1)||cn(e,{x:a+1,y:o+1},{x:a,y:o+1}),un(n,r,i,a-1,o)||cn(e,{x:a,y:o+1},{x:a,y:o})}function cn(e,t,n){let r={start:t,end:n,id:`${dn(t)}>${dn(n)}`},i=e.get(dn(t))??[];i.push(r),e.set(dn(t),i)}function ln(e,t,n){let r=[],i=e,a=dn(e.start);for(;i&&!n.has(i.id)&&(n.add(i.id),r.push(i.start),i=t.get(dn(i.end))?.filter(e=>!n.has(e.id))?.[0],!(i&&dn(i.start)===a&&r.length>1)););return r}function un(e,t,n,r,i){return r>=0&&r<t&&i>=0&&i<n&&!!e[i*t+r]}function dn(e){return`${e.x},${e.y}`}function fn(e,t,n){let r=n.x-t.x,i=n.y-t.y,a=r*r+i*i;if(a<=2**-52)return pn(e,t);let o=Math.max(0,Math.min(1,((e.x-t.x)*r+(e.y-t.y)*i)/a));return pn(e,{x:t.x+o*r,y:t.y+o*i})}function pn(e,t){let n=e.x-t.x,r=e.y-t.y;return n*n+r*r}function mn(e){let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];t+=r.x*i.y-i.x*r.y}return t/2}function hn(e,t,n){gn(n.scoreMode),_n(n.boxType),vn(n.dilationKernelSize);let{dstWidth:r,dstHeight:i}=t.resizeParams,a=Cn(e,r,i),o=new Si(r,i,1,wn(a,n.textPixelThreshold)),s=Zt((n.dilationKernelSize>0?o.dilate({norm:`LInf`,k:n.dilationKernelSize}):o).data,r,i,{minimumAreaThreshold:n.minimumAreaThreshold}),c=[];for(let e of s.slice(0,n.maxCandidates)){let r=n.boxType===`poly`?bn(e,a,t,n):yn(e,a,t,n);r&&c.push(r)}return c}function gn(e){if(e!==`fast`&&e!==`slow`)throw Error(`Unsupported DB scoreMode: ${String(e)}. Expected "fast" or "slow".`)}function _n(e){if(e!==`quad`&&e!==`poly`)throw Error(`Unsupported DB boxType: ${String(e)}. Expected "quad" or "poly".`)}function vn(e){if(!(Number.isInteger(e)&&e>=0))throw Error(`Invalid DB dilationKernelSize: ${String(e)}. Expected a non-negative integer.`)}function yn(e,t,n,r){let{dstWidth:i,dstHeight:a}=n.resizeParams,o=Tn(e.points);if(!o||o.shortSide<$i||Sn(t,i,a,r.scoreMode===`slow`?e.points:o.points)<r.boxScoreThreshold)return null;let s=Tn(On(o.points,r.unclipRatio));return!s||s.shortSide<5?null:Mn(jn(kn(s.points,n.resizeParams)),n.resizeParams.srcWidth,n.resizeParams.srcHeight)}function bn(e,t,n,r){let{dstWidth:i,dstHeight:a}=n.resizeParams,o=xn(e.points);if(o.length<4||Sn(t,i,a,o)<r.boxScoreThreshold)return null;let s=On(o,r.unclipRatio),c=Tn(s);return!c||c.shortSide<5?null:Pn(An(s,n.resizeParams),n.resizeParams.srcWidth,n.resizeParams.srcHeight)}function xn(e){return Qt(e,.002*Bn(e),!0)}function Sn(e,t,n,r){let i=Math.max(0,Math.floor(Math.min(...r.map(e=>e.x)))),a=Math.min(t-1,Math.ceil(Math.max(...r.map(e=>e.x)))),o=Math.max(0,Math.floor(Math.min(...r.map(e=>e.y)))),s=Math.min(n-1,Math.ceil(Math.max(...r.map(e=>e.y)))),c=r.map(e=>({x:Math.trunc(e.x-i),y:Math.trunc(e.y-o)})),l=0,u=0;for(let n=o;n<=s;n++)for(let r=i;r<=a;r++)Ln({x:r-i,y:n-o},c)&&(l+=e[n*t+r],u++);return u>0?l/u:0}function Cn(e,t,n){let r=t*n;if(e.length<r||e.length%r!==0)throw Error(`Invalid DB output length: got ${e.length} values for ${t}x${n} score maps; expected one or more complete channels of ${r} values.`);return e.slice(0,r)}function wn(e,t){let n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e[r]>t?255:0;return n}function Tn(e){if(e.length<3)return null;let t=En(e);if(t.length<3)return null;let n=null,r=1/0,i=0;for(let e=0;e<t.length;e++){let a=t[e],o=t[(e+1)%t.length],s=Math.atan2(o.y-a.y,o.x-a.x),c=Math.cos(-s),l=Math.sin(-s),u=1/0,d=-1/0,f=1/0,p=-1/0;for(let e of t){let t=e.x*c-e.y*l,n=e.x*l+e.y*c;u=Math.min(u,t),d=Math.max(d,t),f=Math.min(f,n),p=Math.max(p,n)}let m=d-u,h=p-f,g=m*h;g>=r||(n=jn([{x:u,y:f},{x:d,y:f},{x:d,y:p},{x:u,y:p}].map(e=>Dn(e,s))),r=g,i=Math.min(m,h))}return n?{points:n,shortSide:i}:null}function En(e){let t=[...e].sort((e,t)=>e.x===t.x?e.y-t.y:e.x-t.x).filter((e,t,n)=>t===0||e.x!==n[t-1].x||e.y!==n[t-1].y);if(t.length<=1)return t;let n=[];for(let e of t){for(;n.length>=2&&In(n[n.length-2],n[n.length-1],e)<=0;)n.pop();n.push(e)}let r=[];for(let e=t.length-1;e>=0;e--){let n=t[e];for(;r.length>=2&&In(r[r.length-2],r[r.length-1],n)<=0;)r.pop();r.push(n)}return n.pop(),r.pop(),n.concat(r)}function Dn(e,t){let n=Math.cos(t),r=Math.sin(t);return{x:e.x*n-e.y*r,y:e.x*r+e.y*n}}function On(e,t){let n=Math.abs(zn(e)),r=Bn(e);return n<=0||r<=0?e:Pt(e,n*t/r)}function kn(e,t){return e.map(e=>({x:e.x/t.scaleWidth,y:e.y/t.scaleHeight}))}function An(e,t){return e.map(e=>({x:e.x/t.scaleWidth,y:e.y/t.scaleHeight}))}function jn(e){if(e.length!==4)throw Error(`Expected exactly four points, got ${e.length}.`);let[t,n,r,i]=[...e].sort((e,t)=>e.x-t.x),a=n.y>t.y?t:n,o=n.y>t.y?n:t;return[a,i.y>r.y?r:i,i.y>r.y?i:r,o]}function Mn(e,t,n){let r=e.map(e=>Fn(e,t,n));if(!Nn(r))return null;let i=Math.floor(Math.min(...r.map(e=>e.x))),a=Math.ceil(Math.max(...r.map(e=>e.x))),o=Math.floor(Math.min(...r.map(e=>e.y))),s=Math.ceil(Math.max(...r.map(e=>e.y))),c=Math.min(t-i,a-i),l=Math.min(n-o,s-o);return c<=0||l<=0?null:{x:i,y:o,width:c,height:l,points:r}}function Nn(e){let t=Math.trunc(Math.hypot(e[0].x-e[1].x,e[0].y-e[1].y)),n=Math.trunc(Math.hypot(e[0].x-e[3].x,e[0].y-e[3].y));return t>$i&&n>$i}function Pn(e,t,n){let r=e.map(e=>Fn(e,t,n)),i=Math.floor(Math.min(...r.map(e=>e.x))),a=Math.ceil(Math.max(...r.map(e=>e.x))),o=Math.floor(Math.min(...r.map(e=>e.y))),s=Math.ceil(Math.max(...r.map(e=>e.y))),c=Math.min(t-i,a-i),l=Math.min(n-o,s-o);return c<=0||l<=0?null:{x:i,y:o,width:c,height:l,polygon:r}}function Fn(e,t,n){let r=Math.max(0,t-1),i=Math.max(0,n-1);return{x:Math.max(0,Math.min(r,Math.round(e.x))),y:Math.max(0,Math.min(i,Math.round(e.y)))}}function In(e,t,n){return(t.x-e.x)*(n.y-e.y)-(t.y-e.y)*(n.x-e.x)}function Ln(e,t){let n=!1;for(let r=0,i=t.length-1;r<t.length;i=r++){let a=t[r],o=t[i];if(Rn(e,o,a))return!0;a.y>e.y!=o.y>e.y&&e.x<(o.x-a.x)*(e.y-a.y)/(o.y-a.y)+a.x&&(n=!n)}return n}function Rn(e,t,n){let r=In(t,n,e);return Math.abs(r)>1e-6?!1:e.x>=Math.min(t.x,n.x)-1e-6&&e.x<=Math.max(t.x,n.x)+1e-6&&e.y>=Math.min(t.y,n.y)-1e-6&&e.y<=Math.max(t.y,n.y)+1e-6}function zn(e){let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];t+=r.x*i.y-i.x*r.y}return t/2}function Bn(e){let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];t+=Math.hypot(r.x-i.x,r.y-i.y)}return t}function Vn(e,t){let n=Hn(e,t);return{tensor:(e.width===n.resizeSourceWidth&&e.height===n.resizeSourceHeight?e:e.padding({right:n.resizeSourceWidth-e.width,bottom:n.resizeSourceHeight-e.height,color:[0,0,0]})).resize({width:n.dstWidth,height:n.dstHeight}).tensor({mean_values:t.mean,norm_values:t.stdDeviation,channel_order:t.channelOrder}),resizeParams:n}}function Hn(e,t){let{width:n,height:r}=e,i=n+r<64?Math.max(32,n):n,a=n+r<64?Math.max(32,r):r,o=t.inputShape;if(o){let[,e,t]=o;if(!Number.isInteger(t)||t<=0)throw Error(`Invalid detection inputShape width: ${t}. Expected a positive integer.`);if(!Number.isInteger(e)||e<=0)throw Error(`Invalid detection inputShape height: ${e}. Expected a positive integer.`);return{srcHeight:r,srcWidth:n,resizeSourceHeight:a,resizeSourceWidth:i,dstHeight:e,dstWidth:t,scaleWidth:t/i,scaleHeight:e/a}}let s=t.maxSideLength,c=t.limitType,l=t.maxSideLimit,u=Math.min(i,a),d=Math.max(i,a),f=1;if(c===`max`)f=d>s?s/d:1;else if(c===`min`)f=u<s?s/u:1;else if(c===`resize_long`)f=s/d;else throw Error(`Unsupported detection resize limitType: ${c}`);let p=Math.round(i*f),m=Math.round(a*f),h=Math.max(p,m);if(h>l){let e=l/h;p=Math.round(p*e),m=Math.round(m*e)}return p%32!=0&&(p=Math.max(Math.round(p/32)*32,32)),m%32!=0&&(m=Math.max(Math.round(m/32)*32,32)),{srcHeight:r,srcWidth:n,resizeSourceHeight:a,resizeSourceWidth:i,dstHeight:m,dstWidth:p,scaleWidth:p/i,scaleHeight:m/a}}function Un(e){if(!(e.data instanceof Float32Array))throw Error(`Detection output tensor must contain Float32Array data.`);return e.data}function Wn(e,t,n){let[r,i,a,o]=e.dims;if(e.dims.length!==4||r!==1||!Number.isInteger(i)||i<1||a!==n.dstHeight||o!==n.dstWidth)throw Error(`Detection output tensor shape [${e.dims.join(`,`)}] must be DB maps in [1,C,${n.dstHeight},${n.dstWidth}] layout.`);let s=r*i*a*o;if(t.length!==s)throw Error(`Detection output tensor shape [${e.dims.join(`,`)}] does not match data length ${t.length}.`)}function Gn(e,t){let n=Kn(e),[r,i,a,o]=n.dims;if(r!==1)throw Error(`Unsupported text image unwarping batch size: ${r}. Expected 1.`);if(i!==3)throw Error(`Unsupported text image unwarping output channels: ${i}. Expected 3.`);if(!Number.isInteger(o)||o<=0||!Number.isInteger(a)||a<=0)throw Error(`Invalid text image unwarping output size: ${o}x${a}. Expected positive integer dimensions.`);if(!Number.isFinite(t.outputScale))throw Error(`Invalid text image unwarping outputScale: ${t.outputScale}. Expected a finite number.`);if(t.outputChannelOrder!==`rgb`&&t.outputChannelOrder!==`bgr`)throw Error(`Unsupported text image unwarping outputChannelOrder: ${t.outputChannelOrder}. Expected "rgb" or "bgr".`);let s=new Uint8Array(o*a*3),c=n.data;for(let e=0;e<a;e++)for(let n=0;n<o;n++){let r=e*o+n,i=r*3;for(let e=0;e<3;e++){let n=c[(t.outputChannelOrder===`bgr`?2-e:e)*o*a+r];s[i+e]=qn(n*t.outputScale)}}return{doctrImage:{width:o,height:a,data:s}}}function Kn(e){let t=Object.values(e).filter(e=>e.data instanceof Float32Array&&e.dims.length===4&&e.dims.every(e=>Number.isInteger(e)&&e>0));if(t.length!==1)throw Error(`Expected exactly one 4D Float32 text image unwarping output tensor, got ${t.length}.`);return t[0]}function qn(e){return Number.isFinite(e)?Math.max(0,Math.min(255,Math.round(e))):0}function Jn(e,t){return Xn(t),{image:{data:e.tensor({mean_values:t.mean,norm_values:t.stdDeviation,channel_order:t.channelOrder}),dims:[1,3,e.height,e.width]},resizeParams:{srcWidth:e.width,srcHeight:e.height,tensorWidth:e.width,tensorHeight:e.height}}}function Yn(e,t,n,r={}){return{[t.inputNames?.[0]??r.inputName??`img`]:new e.Tensor(`float32`,n.image.data,n.image.dims)}}function Xn(e){if(e.channelOrder!==`rgb`&&e.channelOrder!==`bgr`)throw Error(`Unsupported text image unwarping channelOrder: ${e.channelOrder}. Expected "rgb" or "bgr".`);Zn(e.mean,`mean`),Zn(e.stdDeviation,`stdDeviation`)}function Zn(e,t){if(!Array.isArray(e)||e.length!==3||e.some(e=>!Number.isFinite(e)))throw Error(`Invalid text image unwarping ${t}: ${String(e)}. Expected three finite numbers.`)}function Qn(e){let t=ta[e];if(!t)throw Error(`Unsupported text image unwarping preset: ${e}`);return t}function $n(e){if(!e)return{};let t=Qn(e).options;return{...t,mean:t.mean?[...t.mean]:void 0,stdDeviation:t.stdDeviation?[...t.stdDeviation]:void 0,preprocessPipeline:t.preprocessPipeline?[...t.preprocessPipeline]:void 0,dynamicInputShape:t.dynamicInputShape?{min:[...t.dynamicInputShape.min],opt:[...t.dynamicInputShape.opt],max:[...t.dynamicInputShape.max]}:void 0}}function er(e,t){return{name:e,module:`text_recognition`,architecture:`CTC`,inputName:`x`,preprocessPipeline:ia,postprocessName:`CTCLabelDecode`,dictionary:t,options:ra}}function tr(e){let t=ca[e];if(!t)throw Error(`Unsupported text recognition preset: ${e}`);return t}function nr(e){return e?{...tr(e).options}:{}}function rr(e){let t=[],n=``;for(let r of e)/[a-zA-Z0-9 :*./%+-]/.test(r)?n+=r:(n&&t.push(n),t.push(r),n=``);return n&&t.push(n),t.reverse().join(``)}function ir(e){let t=Sa[e];if(!t)throw Error(`Unsupported PaddleOCR model preset: ${e}`);return t}function ar(e){if(!e)return{detection:{},recognition:{}};let t=ir(e);return{detection:{...t.detection},recognition:{...t.recognition}}}function or(e){let t=cr(e),n=t.map(e=>ur(e));return n.some(e=>e.includes(`ppocrv6tiny`))?dr(`PP-OCRv6_tiny`,`high`,t):n.some(e=>e.includes(`ppocrv6small`))?dr(`PP-OCRv6_small`,`high`,t):n.some(e=>e.includes(`ppocrv6medium`))?dr(`PP-OCRv6_medium`,`high`,t):n.some(e=>e.includes(`ppocrv6`))?dr(`PP-OCRv6`,`medium`,t):n.some(e=>e.includes(`ppocrv5server`))?dr(`PP-OCRv5_server`,`high`,t):n.some(e=>e.includes(`ppocrv5mobile`))?dr(`PP-OCRv5_mobile`,`high`,t):n.some(e=>e.includes(`ppocrv5`))?dr(`PP-OCRv5`,`medium`,t):sr(e)}function sr(e){let t=/* @__PURE__ */ new Set,n=e.recognitionOutputClasses??lr(e.recognitionOutputShape);if(n===_a&&t.add(`recognitionOutputClasses:${_a}`),e.dictionaryLength===va&&t.add(`dictionaryLength:${va}`),t.size>0)return dr(`PP-OCRv6_tiny`,`high`,Array.from(t));if(n===ha&&t.add(`recognitionOutputClasses:${ha}`),e.dictionaryLength===ga&&t.add(`dictionaryLength:${ga}`),t.size>0)return dr(`PP-OCRv6_small`,`medium`,Array.from(t));if(n===pa&&t.add(`recognitionOutputClasses:${pa}`),e.dictionaryLength===ma&&t.add(`dictionaryLength:${ma}`),t.size>0)return dr(`PP-OCRv5`,`medium`,Array.from(t))}function cr(e){return[e.modelName,e.fileName,e.detectionModelFileName,e.recognitionModelFileName,e.dictionaryName,e.dictionaryFileName].filter(e=>!!e)}function lr(e){if(e)for(let t=e.length-1;t>=0;--t){let n=e[t];if(typeof n==`number`&&Number.isFinite(n)&&n>0)return n}}function ur(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,``)}function dr(e,t,n){return{name:e,confidence:t,signals:[...n]}}async function fr(e,t,n){let{modelBuffer:r,preset:i=n,...a}=t;if(!r)throw Error(`${i} modelBuffer is required.`);return new Ni(e,await e.InferenceSession.create(r),{...ye(i),...a})}async function pr(e,t,n){let{modelBuffer:r,preset:i=n,...a}=t;if(!r)throw Error(`${i} modelBuffer is required.`);return new na(e,await e.InferenceSession.create(r),{...$n(i),...a})}async function mr(e,t,n){let{modelBuffer:r,preset:i=n,...a}=t;if(!r)throw Error(`${i} modelBuffer is required.`);return new Ui(e,await e.InferenceSession.create(r),{...Ye(i),...a})}async function hr(e,t,n){let{modelBuffer:r,preset:i=n,...a}=t;if(!r)throw Error(`${i} modelBuffer is required.`);return new qi(e,await e.InferenceSession.create(r),{...jt(i),...a})}async function gr(e,t,n){let{modelBuffer:r,preset:i=n,...a}=t;if(!r)throw Error(`${i} modelBuffer is required.`);return new Di(e,await e.InferenceSession.create(r),{..._e(i),...a})}async function _r(e,t,n){let{modelBuffer:r,preset:i=n,...a}=t;if(!r)throw Error(`${i} modelBuffer is required.`);return new ea(e,await e.InferenceSession.create(r),{...Nt(i),...a})}async function vr(e,t,n){let{modelBuffer:r,preset:i=n,...a}=t;if(!r)throw Error(`${i} modelBuffer is required.`);return new la(e,await e.InferenceSession.create(r),{...nr(i),...a})}function yr(e,t){return{...e,...t,documentOrientation:{...e.documentOrientation,...t.documentOrientation},textImageUnwarping:{...e.textImageUnwarping,...t.textImageUnwarping},regionDetection:{...e.regionDetection,...t.regionDetection},layout:{...e.layout,...t.layout},readingOrder:{...e.readingOrder,...t.readingOrder},ocr:{...e.ocr,...t.ocr},table:{...e.table,...t.table,ocr:t.table?.ocr?{...e.table?.ocr,...t.table.ocr}:e.table?.ocr},formula:{...e.formula,...t.formula},seal:{...e.seal,...t.seal},markdown:{...e.markdown,...t.markdown}}}function br(e){return e?.enabled!==!1}function xr(e){return e?.stripStyleTokens!==!1}function Sr(e){let t=e.match(/(?:^|[^0-9])(90|180|270)(?:[^0-9]|$)/);return t?Number(t[1]):0}function Cr(e,t){return t===90?e.rotateCounterClockwise():t===180?e.rotate180():t===270?e.rotateClockwise():e}function wr(e,t){return{type:t,label:t,score:0,bbox:[0,0,e.width,e.height]}}function Tr(e){return e.map((e,t)=>({...e,blockOrder:t}))}function Er(e,t){let n=e.length;if(n===0)return[];if(n===1)return[{...e[0],layout:`single`}];let r=[...e].sort((e,t)=>e.bbox[1]-t.bbox[1]||e.bbox[0]-t.bbox[0]).map(e=>({...e})),i=[],a=[],o=[],s=0;for(;s<n;){let e=r[s];if(s===n-1){e.bbox[1]>r[s-1].bbox[3]&&e.bbox[0]<t/2&&e.bbox[2]>t/2?i.push(...a,...o,{...e,layout:`single`}):e.bbox[2]>t/2?(o.push({...e,layout:`double`}),i.push(...a,...o)):e.bbox[0]<t/2&&(a.push({...e,layout:`double`}),i.push(...a,...o)),a=[],o=[];break}e.bbox[0]<t/4&&e.bbox[2]<3*t/4?(a.push({...e,layout:`double`}),s+=1):e.bbox[0]>t/4&&e.bbox[2]>t/2?(o.push({...e,layout:`double`}),s+=1):(i.push(...a,...o,{...e,layout:`single`}),a=[],o=[],s+=1)}return a.length&&i.push(...a),o.length&&i.push(...o),i}function Dr(e,t){let n=kr(e.coordinate,t);return n?{type:Or(e.label),label:e.label,score:e.score,bbox:n}:null}function Or(e){let t=e.toLowerCase().replace(/[\s-]+/g,`_`);return t===`equation`?`formula`:t}function kr(e,t){let n=Math.max(0,Math.min(t.width,Math.floor(e[0]))),r=Math.max(0,Math.min(t.height,Math.floor(e[1]))),i=Math.max(0,Math.min(t.width,Math.ceil(e[2]))),a=Math.max(0,Math.min(t.height,Math.ceil(e[3])));return i<=n||a<=r?null:[n,r,i,a]}function Ar(e,t){let[n,r,i,a]=t;return e.crop({x:n,y:r,width:i-n,height:a-r})}function jr(e,t,n){return{type:e.type,label:e.label,score:e.score,bbox:e.bbox,layout:e.layout,blockOrder:e.blockOrder,image:n?Mr(t):void 0}}function Mr(e){return{width:e.width,height:e.height,data:e.data}}function Nr(e,t){let n=new Set((t??[]).map(e=>e.toLowerCase())),r=[];for(let t of e){let e=t.type.toLowerCase(),i=t.label.toLowerCase();if(n.has(e)||n.has(i)||e===`header`||e===`footer`)continue;let a=Pr(t,e);a&&r.push(a)}return r.join(`

`).replace(/\n{3,}/g,`

`)}function Pr(e,t){if(t===`title`){let t=Fr(e.ocr);return t?`# ${t}`:void 0}return t===`table`?e.table?.matched?.fullHtml??e.table?.structure?.fullHtml??e.table?.matched?.html??e.table?.structure?.html:t===`formula`||t===`equation`?e.formula?.formula?`$$${e.formula.formula}$$`:void 0:t===`seal`?Fr(e.seal?.recognition):t===`text`?e.ocr?.length?Ir(Lr(e,e.ocr)):void 0:Fr(e.ocr)}function Fr(e){return e?.map(e=>e.text).filter(Boolean).join(` `).trim()||void 0}function Ir(e){let t=e;for(let e of[`*`,"`",`~`,`$`])t=t.replaceAll(e,`\\${e}`);return t}function Lr(e,t){return Rr(e,t)?zr(t):M(e,t)}function Rr(e,t){let n=t[0];if(!n)return!1;let r=Br(n.box),i=r[0].x,a=Math.abs(r[2].y-r[0].y);return i-0>a&&e.bbox[2]>e.bbox[0]}function zr(e){let t=``,n,r=!0;for(let i=0;i<e.length;i++){let a=e[i],o=Br(a.box),s=o[0].x,c=Math.abs(o[2].y-o[0].y);i===0?(t+=a.text,n=s):(r?n!==void 0&&Math.abs(n-s)<c?(t+=`\n\n${a.text}`,r=!0):(t+=a.text,r=!1):n!==void 0&&Math.abs(n-s)<c?(t+=a.text,r=!1):(t+=`\n\n${a.text}`,r=!0),n=s)}return t}function M(e,t){let n=``,r=!0,i=e.bbox[2]-e.bbox[0];for(let e of t){let t=Br(e.box),a=t[2].x-t[0].x>=i-Math.abs(t[2].y-t[0].y);n+=r?`\n\n${e.text}`:e.text,r=!a}return n}function Br(e){let t=e.polygon??e.points;return t?.length>=4?[t[0],t[1],t[2],t[3]]:[{x:e.x,y:e.y},{x:e.x+e.width,y:e.y},{x:e.x+e.width,y:e.y+e.height},{x:e.x,y:e.y+e.height}]}function Vr(e,t){return t?e.map(e=>({...e,text:N(e.text)})):e}function N(e){let t=e;for(let e of Oa)t=t.replaceAll(e,``);return t}function Hr(e,t){return e.filter(e=>P(t,Ur(e.box)))}function P(e,t){return!(e[0]>t[2]||e[2]<t[0]||e[1]>t[3]||e[3]<t[1])}function Ur(e){let t=e.polygon??e.points;return t?.length?Wr(t):[e.x,e.y,e.x+e.width,e.y+e.height]}function Wr(e){return[Math.min(...e.map(e=>e.x)),Math.min(...e.map(e=>e.y)),Math.max(...e.map(e=>e.x)),Math.max(...e.map(e=>e.y))]}function Gr(e,t){let[n,r]=t;return{...e,box:Kr(e.box,n,r)}}function Kr(e,t,n){return{...e,x:e.x-t,y:e.y-n,points:e.points?.map(e=>qr(e,t,n)),polygon:e.polygon?.map(e=>qr(e,t,n))}}function qr(e,t,n){return{x:e.x-t,y:e.y-n}}function Jr(e,t=[]){let n=e.map(e=>Yr(e.coordinate)).filter(e=>!!e);if(!n.length){let e=`<tbody></tbody>`;return{html:e,fullHtml:ut(e),cells:[]}}let r=Xr(n.flatMap(e=>[e[0],e[2]])),i=Xr(n.flatMap(e=>[e[1],e[3]])),a=n.map(e=>$r(e,r,i,t)).sort((e,t)=>e.rowStart-t.rowStart||e.columnStart-t.columnStart),o=oi(a,i.length-1);return{html:o,fullHtml:ut(o),cells:a.map(e=>({box:e.box,row:e.rowStart,column:e.columnStart,rowspan:e.rowEnd-e.rowStart,colspan:e.columnEnd-e.columnStart,text:e.text}))}}function Yr(e){let t=Math.min(e[0],e[2]),n=Math.min(e[1],e[3]),r=Math.max(e[0],e[2]),i=Math.max(e[1],e[3]);return r<=t||i<=n?null:[t,n,r,i]}function Xr(e){let t=e.filter(Number.isFinite).sort((e,t)=>e-t);if(!t.length)return[];let n=Zr(t),r=[];for(let e of t){let t=r[r.length-1];!t||Math.abs(Qr(t)-e)>n?r.push([e]):t.push(e)}return r.map(Qr)}function Zr(e){let t=[];for(let n=1;n<e.length;n++){let r=e[n]-e[n-1];r>1&&t.push(r)}return t.length?(t.sort((e,t)=>e-t),Math.max(4,t[Math.floor(t.length/2)]*.25)):4}function Qr(e){return e.reduce((e,t)=>e+t,0)/e.length}function $r(e,t,n,r){let i=ei(t,e[0]),a=Math.max(i+1,ei(t,e[2])),o=ei(n,e[1]);return{box:e,rowStart:o,rowEnd:Math.max(o+1,ei(n,e[3])),columnStart:i,columnEnd:a,text:ti(e,r)}}function ei(e,t){let n=0,r=1/0;for(let i=0;i<e.length;i++){let a=Math.abs(e[i]-t);a<r&&(r=a,n=i)}return n}function ti(e,t){return t.filter(t=>ni(t,e)).sort((e,t)=>ri(e.box)-ri(t.box)||ii(e.box)-ii(t.box)).map(e=>e.text).join(` `).trim()}function ni(e,t){let[n,r,i,a]=ai(e.box),o=(n+i)/2,s=(r+a)/2;return o>=t[0]&&o<=t[2]&&s>=t[1]&&s<=t[3]}function ri(e){return ai(e)[1]}function ii(e){return ai(e)[0]}function ai(e){if(Array.isArray(e)){if(e.length===4)return[Math.min(e[0],e[2]),Math.min(e[1],e[3]),Math.max(e[0],e[2]),Math.max(e[1],e[3])];if(e.length===8){let t=[e[0],e[2],e[4],e[6]],n=[e[1],e[3],e[5],e[7]];return[Math.min(...t),Math.min(...n),Math.max(...t),Math.max(...n)]}}let t=e.polygon??e.points;return t?.length?[Math.min(...t.map(e=>e.x)),Math.min(...t.map(e=>e.y)),Math.max(...t.map(e=>e.x)),Math.max(...t.map(e=>e.y))]:[e.x,e.y,e.x+e.width,e.y+e.height]}function oi(e,t){let n=[];for(let r=0;r<t;r++){let t=e.filter(e=>e.rowStart===r);t.length&&n.push(`<tr>${t.map(si).join(``)}</tr>`)}return`<tbody>${n.join(``)}</tbody>`}function si(e){let t=e.rowEnd-e.rowStart,n=e.columnEnd-e.columnStart;return`<td${[t>1?` rowspan="${t}"`:``,n>1?` colspan="${n}"`:``].join(``)}>${ci(e.text)}</td>`}function ci(e){return e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`)}async function li(e,t,n){let{modelBuffer:r,preset:i=n,...a}=t;if(!r)throw Error(`${i} modelBuffer is required.`);return new Ni(e,await e.InferenceSession.create(r),{...ye(i),...a})}async function ui(e,t,n){let{modelBuffer:r,preset:i=n,...a}=t;if(!r)throw Error(`${i} modelBuffer is required.`);return new qi(e,await e.InferenceSession.create(r),{...jt(i),...a})}async function di(e,t,n){let{modelBuffer:r,preset:i=n,...a}=t;if(!r)throw Error(`${i} modelBuffer is required.`);return new Ui(e,await e.InferenceSession.create(r),{...Ye(i),...a})}function fi(e,t){return{...e,...t,tableClassification:{...e.tableClassification,...t.tableClassification},ocr:{...e.ocr,...t.ocr}}}function pi(e){return(e?.label.toLowerCase())?.includes(`wireless`)?`wireless`:`wired`}function mi(e){let t=e.tableType===`wired`?e.options.useWiredTableCellsTransToHtml:e.options.useWirelessTableCellsTransToHtml,n=e.tableType===`wired`?e.options.useE2eWiredTableRecModel:e.options.useE2eWirelessTableRecModel;return t&&e.cellHtml?e.cellHtml.fullHtml:n&&e.matched?e.matched.fullHtml:n&&e.structure?e.structure.fullHtml:e.matched?e.matched.fullHtml:e.structure?.bbox.length||!e.cellHtml?e.structure?.fullHtml:e.cellHtml.fullHtml}var hi,gi,_i,vi,yi,bi,xi,Si,Ci,wi,Ti,Ei,Di,Oi,ki,Ai,ji,Mi,Ni,Pi,Fi,Ii,Li,Ri,zi,Bi,Vi,Hi,Ui,Wi,Gi,Ki,qi,Ji,Yi,Xi,Zi,Qi,$i,ea,ta,na,ra,ia,aa,oa,sa,ca,la,ua,da,fa,pa,ma,ha,ga,_a,va,ya,ba,xa,Sa,Ca,wa,Ta,Ea,Da,Oa,ka,Aa,ja,Ma=t((()=>{hi={padding:0,mean:[123.675,116.28,103.53],stdDeviation:[1/.229/255,1/.224/255,1/.225/255],channelOrder:`rgb`,maxSideLength:960,limitType:`max`,maxSideLimit:4e3,textPixelThreshold:.3,boxScoreThreshold:.6,scoreMode:`fast`,unclipRatio:1.5,maxCandidates:1e3,minimumAreaThreshold:20,paddingBoxVertical:.4,paddingBoxHorizontal:.6,dilationKernelSize:0,boxType:`quad`},gi={mean:[127.5,127.5,127.5],stdDeviation:[1/127.5,1/127.5,1/127.5],channelOrder:`rgb`,outputSelectionStrategy:`first`,imageHeight:48,imageWidth:320,charactersDictionary:[],reverseText:!1},_i={mean:[123.675,116.28,103.53],stdDeviation:[1/.229/255,1/.224/255,1/.225/255],channelOrder:`bgr`,resizeMode:`stretch`,resizeShort:256,imageHeight:224,imageWidth:224,labels:[],topK:1},vi={..._i,imageHeight:80,imageWidth:160,labels:[`0_degree`,`180_degree`],topK:1,threshold:.9,enabled:!0},yi={sortByReadingOrder:!0,sameLinePixelThreshold:10},bi={recognitionScoreThreshold:.5,lineMergeThresholdRatio:.5},xi={detection:hi,recognition:gi},Si=class e{constructor(e,t,n,r){if(p(this,`width`,void 0),p(this,`height`,void 0),p(this,`data`,void 0),p(this,`depth`,void 0),p(this,`channels`,void 0),this.width=e,this.height=t,this.channels=n,this.depth=8,r)this.data=r;else{let n=e*t*4;this.data=new Uint8Array(n)}}crop(t){let{x:n,y:r,width:i,height:a}=t;if(n<0||r<0||n+i>this.width||r+a>this.height)throw Error(`Crop area is out of bounds`);let o=new Uint8Array(i*a*this.channels);for(let e=0;e<a;e++)for(let t=0;t<i;t++){let a=((r+e)*this.width+(n+t))*this.channels,s=(e*i+t)*this.channels;o.set(this.data.subarray(a,a+this.channels),s)}return new e(i,a,this.channels,o)}cropRotated(t){let n=Math.max(Math.floor(m(t[0],t[1])),Math.floor(m(t[2],t[3])),1),r=Math.max(Math.floor(m(t[0],t[3])),Math.floor(m(t[1],t[2])),1),i=new Uint8Array(n*r*this.channels),a=h([{x:0,y:0},{x:n,y:0},{x:n,y:r},{x:0,y:r}],t);for(let e=0;e<r;e++)for(let t=0;t<n;t++){let r=_(a,t,e);this.sampleCubicPixel(r.x,r.y,i,(e*n+t)*this.channels)}let o=new e(n,r,this.channels,i);return r/n>=1.5?o.rotateCounterClockwise():o}rotate180(){let t=new Uint8Array(this.width*this.height*this.channels);for(let e=0;e<this.height;e++)for(let n=0;n<this.width;n++){let r=(e*this.width+n)*this.channels,i=this.width-1-n,a=((this.height-1-e)*this.width+i)*this.channels;t.set(this.data.subarray(r,r+this.channels),a)}return new e(this.width,this.height,this.channels,t)}rotateClockwise(){let t=new Uint8Array(this.width*this.height*this.channels),n=this.height,r=this.width;for(let e=0;e<r;e++)for(let r=0;r<n;r++){let i=e,a=((this.height-1-r)*this.width+i)*this.channels,o=(e*n+r)*this.channels;t.set(this.data.subarray(a,a+this.channels),o)}return new e(n,r,this.channels,t)}resize(e){let{width:t,height:n}=e;if(t===void 0&&n===void 0)throw Error(`At least one of width or height must be specified`);if(t===void 0&&(t=Math.round(this.width*((n??this.height)/this.height))),n===void 0&&(n=Math.round(this.height*(t/this.width))),!Number.isInteger(t)||t<=0)throw Error(`Invalid resize width: ${t}. Expected a positive integer.`);if(!Number.isInteger(n)||n<=0)throw Error(`Invalid resize height: ${n}. Expected a positive integer.`);return e.filter===`triangle`?this.resizeTriangle(t,n):this.resizeBilinear(t,n)}resizeBilinear(t,n){let r=this.width,i=this.height,a=this.channels,o=this.data,s=new Uint8Array(t*n*a),c=r/t,l=i/n,u=(e,t,n)=>Math.max(t,Math.min(n,e));for(let e=0;e<n;e++){let n=(e+.5)*l-.5,d=Math.floor(n),f=n-d;d<0?(d=0,f=0):d>=i-1&&(d=i-1,f=0);let p=u(d+1,0,i-1);for(let n=0;n<t;n++){let i=(n+.5)*c-.5,l=Math.floor(i),m=i-l;l<0?(l=0,m=0):l>=r-1&&(l=r-1,m=0);let h=u(l+1,0,r-1),g=(e*t+n)*a,_=(d*r+l)*a,v=(d*r+h)*a,y=(p*r+l)*a,b=(p*r+h)*a;for(let e=0;e<a;e++){let t=o[_+e]*(1-m)+o[v+e]*m,n=o[y+e]*(1-m)+o[b+e]*m;s[g+e]=Math.round(u(t*(1-f)+n*f,0,255))}}}return new e(t,n,a,s)}resizeTriangle(t,n){let r=this.width,i=this.height,a=this.channels,o=this.data;function s(e){return e=Math.abs(e),e<1?1-e:0}function c(e,t,n){return Math.max(t,Math.min(n,e))}let l=new Float32Array(r*n*a),u=i/n,d=u<1?1:u,f=1*d;for(let e=0;e<n;e++){let t=(e+.5)*u-.5,n=Math.max(0,Math.floor(t-f)),c=Math.min(i,Math.ceil(t+f)),p=[],m=0;for(let e=n;e<c;e++){let n=s((e-t)/d);p.push(n),m+=n}for(let e=0;e<p.length;e++)p[e]/=m;for(let t=0;t<r;t++)for(let i=0;i<a;i++){let s=0;for(let e=0;e<p.length;e++){let c=((n+e)*r+t)*a+i;s+=o[c]*p[e]}l[(e*r+t)*a+i]=s}}let p=new Uint8Array(t*n*a),m=r/t,h=m<1?1:m,g=1*h;for(let e=0;e<t;e++){let i=(e+.5)*m-.5,o=Math.max(0,Math.floor(i-g)),u=Math.min(r,Math.ceil(i+g)),d=[],f=0;for(let e=o;e<u;e++){let t=s((e-i)/h);d.push(t),f+=t}for(let e=0;e<d.length;e++)d[e]/=f;for(let i=0;i<n;i++)for(let n=0;n<a;n++){let s=0;for(let e=0;e<d.length;e++){let t=(i*r+(o+e))*a+n;s+=l[t]*d[e]}p[(i*t+e)*a+n]=Math.round(c(s,0,255))}}return new e(t,n,a,p)}padding(t){let{padding:n,vertical:r,horizontal:i,top:a,bottom:o,left:s,right:c,color:l}=t;if(typeof n==`number`?a=o=s=c=n:(typeof r==`number`&&(a=o=r),typeof i==`number`&&(s=c=i)),a??=0,o??=0,s??=0,c??=0,l??=Array(this.channels).fill(0),l.length<this.channels)throw Error(`Color length ${l.length} does not match image channels ${this.channels}`);let u=this.width+s+c,d=this.height+a+o,f=new Uint8Array(u*d*this.channels);for(let e=0;e<d;e++)for(let t=0;t<u;t++){let n=(e*u+t)*this.channels;f.set(l.slice(0,this.channels),n)}for(let e=0;e<this.height;e++)for(let t=0;t<this.width;t++){let n=(e*this.width+t)*this.channels,r=((e+a)*u+(t+s))*this.channels;f.set(this.data.subarray(n,n+this.channels),r)}return new e(u,d,this.channels,f)}tensor(e){let t=e.mean_values,n=e.norm_values,r=e.channel_order??`rgb`,i=this.width,a=this.height,o=this.data,s=new Float32Array(i*a*3);for(let e=0;e<a;e++)for(let c=0;c<i;c++){let l=(e*i+c)*this.channels,u=e*i+c;for(let e=0;e<3;e++){let c=o[l+(r===`bgr`?3-e-1:e)]*n[e]-t[e]*n[e];s[e*a*i+u]=c}}return s}threshold(t){let n=t.threshold??128,r=this.width,i=this.height,a=new Uint8Array(r*i);for(let e=0;e<r*i;e++)a[e]=this.data[e*this.channels]>n?255:0;return new e(r,i,1,a)}dilate(t={}){let{norm:n=`LInf`,k:r=1}=t;if(n!==`LInf`)throw Error(`Only LInf norm is supported`);if(this.channels!==1)throw Error(`Dilate only supports single channel (grayscale) images`);if(!Number.isInteger(r)||r<0)throw Error(`Invalid dilation kernel size: ${r}. Expected a non-negative integer.`);if(r<=1)return new e(this.width,this.height,this.channels,new Uint8Array(this.data));let i=this.width,a=this.height,o=this.data,s=new Uint8Array(i*a),c=Math.floor(r/2);for(let e=0;e<a;e++)for(let t=0;t<i;t++){let n=0;for(let s=0;s<r&&n===0;s++){let l=e+s-c;if(!(l<0||l>=a))for(let e=0;e<r;e++){let r=t+e-c;if(!(r<0||r>=i)&&o[l*i+r]>0){n=255;break}}}s[e*i+t]=n}return new e(i,a,1,s)}contours(e={}){let t=e.minArea??1,n=this.width,r=this.height,i=new Uint8Array(n*r);for(let e=0;e<n*r;e++)i[e]=+(this.data[e]>0);let a=new Uint8Array(n*r),o=[],s=(e,t)=>t*n+e;for(let e=0;e<r;e++)for(let c=0;c<n;c++)if(i[s(c,e)]&&!a[s(c,e)]){let l=c,u=e,d=c,f=e,p=0,m=[[c,e]],h=0;for(a[s(c,e)]=1;h<m.length;){let[e,t]=m[h];h++,p++,l=Math.min(l,e),u=Math.min(u,t),d=Math.max(d,e),f=Math.max(f,t);for(let[o,c]of[[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[1,-1],[-1,1],[1,1]]){let l=e+o,u=t+c;l>=0&&l<n&&u>=0&&u<r&&i[s(l,u)]&&!a[s(l,u)]&&(a[s(l,u)]=1,m.push([l,u]))}}p>=t&&o.push({x:l,y:u,width:d-l+1,height:f-u+1})}return o}rect(e){let{x:t,y:n,width:r,height:i,color:a=[],lineWidth:o=1}=e;if(a.length||a.push(...Array(this.channels).fill(255)),this.channels!==a.length)throw Error(`Color length ${a.length} does not match image channels ${this.channels}`);for(let e=0;e<o;e++)for(let o=0;o<r;o++){let r=n+e,s=t+o;if(r>=0&&r<this.height&&s>=0&&s<this.width){let e=(r*this.width+s)*this.channels;this.data.set(a,e)}let c=n+i-1-e;if(c>=0&&c<this.height&&s>=0&&s<this.width){let e=(c*this.width+s)*this.channels;this.data.set(a,e)}}for(let e=0;e<o;e++)for(let o=0;o<i;o++){let i=t+e,s=n+o;if(i>=0&&i<this.width&&s>=0&&s<this.height){let e=(s*this.width+i)*this.channels;this.data.set(a,e)}let c=t+r-1-e;if(c>=0&&c<this.width&&s>=0&&s<this.height){let e=(s*this.width+c)*this.channels;this.data.set(a,e)}}}rotateCounterClockwise(){let t=new Uint8Array(this.width*this.height*this.channels),n=this.height,r=this.width;for(let e=0;e<r;e++)for(let r=0;r<n;r++){let i=this.width-1-e,a=(r*this.width+i)*this.channels,o=(e*n+r)*this.channels;t.set(this.data.subarray(a,a+this.channels),o)}return new e(n,r,this.channels,t)}sampleCubicPixel(e,t,n,r){let i=Math.floor(e),a=Math.floor(t),o=v(e-i),s=v(t-a);for(let e=0;e<this.channels;e++){let t=0;for(let n=0;n<4;n++){let r=b(a+n-1,0,this.height-1);for(let a=0;a<4;a++){let c=b(i+a-1,0,this.width-1),l=this.data[(r*this.width+c)*this.channels+e];t+=l*o[a]*s[n]}}n[r+e]=Math.round(y(t,0,255))}}},Ci={bos:0,pad:1,eos:2,unk:3},wi=k(),Ti={inputChannels:1,grayscaleMean:.7931,grayscaleStdDeviation:.1738,cropMarginThreshold:200,cropMarginMaxAspectRatio:200,imagePaddingValue:0,latexPaddingValue:1,inputName:`x`,maxSequenceLength:2560,preprocessPipeline:[`UniMERNetImgDecode`,`UniMERNetTestTransform`,`LatexImageFormat`,`UniMERNetLabelEncode`],decoderName:`UniMERNetDecode`,tokenizerType:`NougatTokenizer`,tokenizerPath:`ppocr/utils/dict/unimernet_tokenizer`,specialTokenIds:{bos:0,pad:1,eos:2,unk:3}},Ei={"PP-FormulaNet-S":{name:`PP-FormulaNet-S`,module:`formula_recognition`,architecture:`PP-FormulaNet`,options:he(384,1024)},"PP-FormulaNet-L":{name:`PP-FormulaNet-L`,module:`formula_recognition`,architecture:`PP-FormulaNet`,options:he(768,1024)},"PP-FormulaNet_plus-S":{name:`PP-FormulaNet_plus-S`,module:`formula_recognition`,architecture:`PP-FormulaNet`,options:he(384,1024)},"PP-FormulaNet_plus-M":{name:`PP-FormulaNet_plus-M`,module:`formula_recognition`,architecture:`PP-FormulaNet`,options:he(384,2560)},"PP-FormulaNet_plus-L":{name:`PP-FormulaNet_plus-L`,module:`formula_recognition`,architecture:`PP-FormulaNet`,options:he(768,2560)}},Di=class{constructor(e,t,n={}){p(this,`options`,void 0),p(this,`session`,void 0),p(this,`ortModule`,void 0),this.session=t,this.ortModule=e,this.options={...n}}async runRaw(e,t={}){let n=this.resolveRuntimeOptions(t),r=se(x(e),n),i=await this.session.run(ce(this.ortModule,this.session,r,n));if(Object.keys(i).length===0)throw Error(`Formula recognition session returned no output tensors.`);return{outputs:i,resizeParams:r.resizeParams}}async run(e,t={}){let n=this.resolveRuntimeOptions(t),r=se(x(e),n),i=await this.session.run(ce(this.ortModule,this.session,r,n));if(Object.keys(i).length===0)throw Error(`Formula recognition session returned no output tensors.`);return S(i,n)}resolveRuntimeOptions(e){let t={...this.options,...e};return{imageHeight:this.requirePositiveInteger(t.imageHeight,`imageHeight`),imageWidth:this.requirePositiveInteger(t.imageWidth,`imageWidth`),inputChannels:this.requireInputChannels(t.inputChannels),grayscaleMean:this.requireFiniteNumber(t.grayscaleMean,`grayscaleMean`),grayscaleStdDeviation:this.requireNonZeroFiniteNumber(t.grayscaleStdDeviation,`grayscaleStdDeviation`),cropMarginThreshold:this.requireFiniteNumber(t.cropMarginThreshold,`cropMarginThreshold`),cropMarginMaxAspectRatio:this.requirePositiveNumber(t.cropMarginMaxAspectRatio,`cropMarginMaxAspectRatio`),imagePaddingValue:this.requireFiniteNumber(t.imagePaddingValue,`imagePaddingValue`),latexPaddingValue:this.requireFiniteNumber(t.latexPaddingValue,`latexPaddingValue`),inputName:t.inputName,maxSequenceLength:t.maxSequenceLength,preprocessPipeline:t.preprocessPipeline,decoderName:t.decoderName,tokenizerType:t.tokenizerType,tokenizerPath:t.tokenizerPath,tokenizerVocabulary:t.tokenizerVocabulary,specialTokenIds:t.specialTokenIds}}requirePositiveInteger(e,t){if(!Number.isInteger(e)||e<=0)throw Error(`Invalid formula recognition ${t}: ${e}. Expected a positive integer.`);return e}requireInputChannels(e){if(e!==1)throw Error(`Unsupported formula recognition inputChannels: ${e}. Expected 1.`);return e}requireFiniteNumber(e,t){if(!Number.isFinite(e))throw Error(`Invalid formula recognition ${t}: ${e}. Expected a finite number.`);return e}requireNonZeroFiniteNumber(e,t){let n=this.requireFiniteNumber(e,t);if(n===0)throw Error(`Invalid formula recognition ${t}: ${e}. Expected a non-zero finite number.`);return n}requirePositiveNumber(e,t){let n=this.requireFiniteNumber(e,t);if(n<=0)throw Error(`Invalid formula recognition ${t}: ${e}. Expected a positive finite number.`);return n}},Oi=[`0_degree`,`180_degree`],ki={mean:[123.675,116.28,103.53],stdDeviation:[1/.229/255,1/.224/255,1/.225/255],channelOrder:`bgr`},Ai={imageHeight:224,imageWidth:224,resizeMode:`resize-short-crop`,resizeShort:256,...ki},ji={imageHeight:80,imageWidth:160,resizeMode:`stretch`,...ki,labels:Oi,topK:1},Mi={"PP-LCNet_x1_0_doc_ori":{name:`PP-LCNet_x1_0_doc_ori`,module:`doc_image_orientation_classification`,options:{...Ai,labels:[`0`,`90`,`180`,`270`],topK:1}},"PP-LCNet_x0_25_textline_ori":{name:`PP-LCNet_x0_25_textline_ori`,module:`textline_orientation_classification`,options:ji},"PP-LCNet_x1_0_textline_ori":{name:`PP-LCNet_x1_0_textline_ori`,module:`textline_orientation_classification`,options:ji},"PP-LCNet_x1_0_table_cls":{name:`PP-LCNet_x1_0_table_cls`,module:`table_classification`,options:{...Ai,labels:[`wired_table`,`wireless_table`],topK:5}}},Ni=class{constructor(e,t,n={}){p(this,`options`,void 0),p(this,`session`,void 0),p(this,`ortModule`,void 0),this.session=t,this.ortModule=e,this.options={...n}}async run(e,t={}){let n=this.resolveRuntimeOptions(t);this.validateRuntimeOptions(n);let r=this.preprocessImage(x(e),n).tensor({mean_values:n.mean,norm_values:n.stdDeviation,channel_order:n.channelOrder}),i=new this.ortModule.Tensor(`float32`,r,[1,3,n.imageHeight,n.imageWidth]),a=await this.runInference(i),o=this.extractScores(a),s=Math.min(n.topK,o.length);return Array.from(o,(e,t)=>({classId:t,score:e})).sort((e,t)=>t.score-e.score).slice(0,s).map(e=>({...e,label:n.labels[e.classId]??String(e.classId)}))}resolveRuntimeOptions(e={}){let t=this.resolveFixedInputShape();return{..._i,...t,...this.options,...e}}resolveFixedInputShape(){let e=xe(this.session);return!e.height||!e.width?{}:{imageHeight:e.height,imageWidth:e.width}}preprocessImage(e,t){if(t.resizeMode===`stretch`)return e.resize({width:t.imageWidth,height:t.imageHeight});if(t.resizeMode===`resize-short-crop`)return this.resizeShortAndCenterCrop(e,t);let n=Math.min(Math.ceil(t.imageHeight*(e.width/e.height)),t.imageWidth),r=e.resize({width:n,height:t.imageHeight});return n===t.imageWidth?r:r.padding({right:t.imageWidth-n,color:[0,0,0]})}resizeShortAndCenterCrop(e,t){let n=t.resizeShort/Math.min(e.width,e.height),r=Math.round(e.width*n),i=Math.round(e.height*n),a=e.resize({width:r,height:i});if(a.width<t.imageWidth||a.height<t.imageHeight)throw Error(`Invalid classification resizeShort: ${t.resizeShort}. Resized image ${a.width}x${a.height} is smaller than crop ${t.imageWidth}x${t.imageHeight}.`);return a.crop({x:Math.floor((a.width-t.imageWidth)/2),y:Math.floor((a.height-t.imageHeight)/2),width:t.imageWidth,height:t.imageHeight})}validateRuntimeOptions(e){if(!Number.isInteger(e.imageWidth)||e.imageWidth<=0)throw Error(`Invalid classification imageWidth: ${e.imageWidth}. Expected a positive integer.`);if(!Number.isInteger(e.imageHeight)||e.imageHeight<=0)throw Error(`Invalid classification imageHeight: ${e.imageHeight}. Expected a positive integer.`);if(!Number.isInteger(e.topK)||e.topK<=0)throw Error(`Invalid classification topK: ${e.topK}. Expected a positive integer.`);if(e.resizeMode!==`stretch`&&e.resizeMode!==`pad`&&e.resizeMode!==`resize-short-crop`)throw Error(`Unsupported classification resizeMode: ${e.resizeMode}. Expected "stretch", "pad", or "resize-short-crop".`);if(!Number.isInteger(e.resizeShort)||e.resizeShort<=0)throw Error(`Invalid classification resizeShort: ${e.resizeShort}. Expected a positive integer.`)}async runInference(e){let t=await this.session.run(A(this.session,e)),n=this.session.outputNames[0]??Object.keys(t)[0],r=n?t[n]:void 0;if(!r)throw Error(`Classification output tensor '${n??`<none>`}' not found. Available keys: ${Object.keys(t).join(`, `)}`);return r}extractScores(e){let{data:t,dims:n}=e;if(!(t instanceof Float32Array))throw Error(`Classification output tensor must contain Float32Array data.`);if(n.length===1){if(t.length!==n[0])throw Error(`Classification output shape [${n.join(`,`)}] does not match data length ${t.length}.`);return t}if(n.length===2&&(n[0]===1||n[0]===-1)&&n[1]>0){if(t.length!==n[1])throw Error(`Classification output shape [${n.join(`,`)}] does not match data length ${t.length}.`);return t}throw Error(`Unsupported classification output shape [${n.join(`,`)}]. Expected [C] or [1,C].`)}},Pi=.5,Fi={mean:[0,0,0],stdDeviation:[1/255,1/255,1/255],channelOrder:`bgr`,threshold:.5,outputLayout:`class-score-xyxy`},Ii=[`image`,`im_shape`,`scale_factor`],Li=[`image`,`scale_factor`],Ri=[`paragraph_title`,`image`,`text`,`number`,`abstract`,`content`,`figure_title`,`formula`,`table`,`reference`,`doc_title`,`footnote`,`header`,`algorithm`,`footer`,`seal`,`chart`,`formula_number`,`aside_text`,`reference_content`],zi=[`paragraph_title`,`image`,`text`,`number`,`abstract`,`content`,`figure_title`,`formula`,`table`,`table_title`,`reference`,`doc_title`,`footnote`,`header`,`algorithm`,`footer`,`seal`,`chart_title`,`chart`,`formula_number`,`header_image`,`footer_image`,`aside_text`],Bi=[`cell`],Vi=[`Region`],Hi={"PP-DocLayout_plus-L":{name:`PP-DocLayout_plus-L`,module:`layout_detection`,architecture:`DETR`,requiredInputNames:Ii,options:{...Fi,requiredInputNames:Ii,imageHeight:800,imageWidth:800,labels:Ri}},"PP-DocLayout-L":{name:`PP-DocLayout-L`,module:`layout_detection`,architecture:`DETR`,requiredInputNames:Ii,options:{...Fi,requiredInputNames:Ii,imageHeight:640,imageWidth:640,labels:zi}},"PP-DocLayout-M":{name:`PP-DocLayout-M`,module:`layout_detection`,architecture:`GFL`,requiredInputNames:Li,options:{...Fi,requiredInputNames:Li,imageHeight:640,imageWidth:640,mean:[123.675,116.28,103.53],stdDeviation:[1/.229/255,1/.224/255,1/.225/255],labels:zi}},"PP-DocLayout-S":{name:`PP-DocLayout-S`,module:`layout_detection`,architecture:`GFL`,requiredInputNames:Li,options:{...Fi,requiredInputNames:Li,imageHeight:480,imageWidth:480,mean:[123.675,116.28,103.53],stdDeviation:[1/.229/255,1/.224/255,1/.225/255],labels:zi}},"PP-DocBlockLayout":{name:`PP-DocBlockLayout`,module:`layout_detection`,architecture:`DETR`,requiredInputNames:Ii,options:{...Fi,requiredInputNames:Ii,imageHeight:640,imageWidth:640,labels:Vi}},"RT-DETR-L_wired_table_cell_det":{name:`RT-DETR-L_wired_table_cell_det`,module:`table_cells_detection`,architecture:`DETR`,requiredInputNames:Ii,options:{...Fi,requiredInputNames:Ii,imageHeight:640,imageWidth:640,labels:Bi}},"RT-DETR-L_wireless_table_cell_det":{name:`RT-DETR-L_wireless_table_cell_det`,module:`table_cells_detection`,architecture:`DETR`,requiredInputNames:Ii,options:{...Fi,requiredInputNames:Ii,imageHeight:640,imageWidth:640,labels:Bi}}},Ui=class{constructor(e,t,n={}){p(this,`options`,void 0),p(this,`session`,void 0),p(this,`ortModule`,void 0),this.session=t,this.ortModule=e,this.options={...n}}async runRaw(e,t={}){let n=this.resolveRuntimeOptions(t);return this.runRawWithRuntimeOptions(e,n)}async run(e,t={}){let n=this.resolveRuntimeOptions(t);return Se((await this.runRawWithRuntimeOptions(e,n)).outputs,n)}async runRawWithRuntimeOptions(e,t){let n=Xe(x(e),t),r=await this.session.run(Ze(this.ortModule,this.session,n,t.requiredInputNames));if(Object.keys(r).length===0)throw Error(`Object detection session returned no output tensors.`);return{outputs:r,resizeParams:n.resizeParams}}resolveRuntimeOptions(e){let t={...this.options,...e};return{imageHeight:this.requirePositiveInteger(t.imageHeight,`imageHeight`),imageWidth:this.requirePositiveInteger(t.imageWidth,`imageWidth`),mean:this.requireTriple(t.mean,`mean`),stdDeviation:this.requireTriple(t.stdDeviation,`stdDeviation`),channelOrder:this.requireChannelOrder(t.channelOrder),labels:t.labels,threshold:t.threshold,outputLayout:t.outputLayout,layoutNms:t.layoutNms,layoutUnclipRatio:t.layoutUnclipRatio,layoutMergeBboxesMode:t.layoutMergeBboxesMode,requiredInputNames:this.resolveRequiredInputNames(t.requiredInputNames)}}requirePositiveInteger(e,t){if(!Number.isInteger(e)||e<=0)throw Error(`Invalid object detection ${t}: ${e}. Expected a positive integer.`);return e}requireTriple(e,t){if(!Array.isArray(e)||e.length!==3||e.some(e=>!Number.isFinite(e)))throw Error(`Invalid object detection ${t}: ${String(e)}. Expected three finite numbers.`);return[e[0],e[1],e[2]]}requireChannelOrder(e){if(e!==`rgb`&&e!==`bgr`)throw Error(`Unsupported object detection channelOrder: ${e}. Expected "rgb" or "bgr".`);return e}resolveRequiredInputNames(e){if(e!==void 0){if(!Array.isArray(e)||e.length===0)throw Error(`Invalid object detection requiredInputNames: ${String(e)}. Expected a non-empty array.`);for(let t of e)if(t!==`image`&&t!==`im_shape`&&t!==`scale_factor`)throw Error(`Unsupported object detection input name: ${String(t)}.`);return[...e]}}},Wi={imageHeight:488,imageWidth:488,maxSideLength:488,mean:[123.675,116.28,103.53],stdDeviation:[1/.229/255,1/.224/255,1/.225/255],channelOrder:`bgr`,maxTextLength:500,locRegNum:8,mergeNoSpanStructure:!0,replaceEmptyCellToken:!1,learnEmptyBox:!1,structureDictionary:/* @__PURE__ */ `<thead>.</thead>.<tbody>.</tbody>.<tr>.</tr>.<td>.<td.>.</td>. colspan="2". colspan="3". colspan="4". colspan="5". colspan="6". colspan="7". colspan="8". colspan="9". colspan="10". colspan="11". colspan="12". colspan="13". colspan="14". colspan="15". colspan="16". colspan="17". colspan="18". colspan="19". colspan="20". rowspan="2". rowspan="3". rowspan="4". rowspan="5". rowspan="6". rowspan="7". rowspan="8". rowspan="9". rowspan="10". rowspan="11". rowspan="12". rowspan="13". rowspan="14". rowspan="15". rowspan="16". rowspan="17". rowspan="18". rowspan="19". rowspan="20"`.split(`.`)},Gi={...Wi,imageHeight:512,imageWidth:512,maxSideLength:512,ignoreBboxes:!0},Ki={SLANet:{name:`SLANet`,module:`table_structure_recognition`,architecture:`SLANet`,options:Wi},SLANeXt_wired:{name:`SLANeXt_wired`,module:`table_structure_recognition`,architecture:`SLANeXt`,options:Gi},SLANeXt_wireless:{name:`SLANeXt_wireless`,module:`table_structure_recognition`,architecture:`SLANeXt`,options:Gi}},qi=class{constructor(e,t,n={}){p(this,`options`,void 0),p(this,`session`,void 0),p(this,`ortModule`,void 0),this.session=t,this.ortModule=e,this.options={...n}}async runRaw(e,t={}){let n=this.resolveRuntimeOptions(t);return this.runRawWithRuntimeOptions(e,n)}async run(e,t={}){let n=this.resolveRuntimeOptions(t),r=await this.runRawWithRuntimeOptions(e,n);return tt(r.outputs,r.shape,n)}async runRawWithRuntimeOptions(e,t){let n=wt(x(e),t),r=await this.session.run(Tt(this.ortModule,this.session,n));if(Object.keys(r).length===0)throw Error(`Table structure recognition session returned no output tensors.`);return{outputs:r,resizeParams:n.resizeParams,shape:n.shape}}resolveRuntimeOptions(e){let t={...this.options,...e};return{imageHeight:this.requirePositiveInteger(t.imageHeight,`imageHeight`),imageWidth:this.requirePositiveInteger(t.imageWidth,`imageWidth`),maxSideLength:this.requirePositiveInteger(t.maxSideLength,`maxSideLength`),mean:this.requireTriple(t.mean,`mean`),stdDeviation:this.requireTriple(t.stdDeviation,`stdDeviation`),channelOrder:this.requireChannelOrder(t.channelOrder),maxTextLength:t.maxTextLength,locRegNum:t.locRegNum,mergeNoSpanStructure:t.mergeNoSpanStructure,replaceEmptyCellToken:t.replaceEmptyCellToken,learnEmptyBox:t.learnEmptyBox,structureDictionary:t.structureDictionary,ignoreBboxes:t.ignoreBboxes}}requirePositiveInteger(e,t){if(!Number.isInteger(e)||e<=0)throw Error(`Invalid table structure recognition ${t}: ${e}. Expected a positive integer.`);return e}requireTriple(e,t){if(!Array.isArray(e)||e.length!==3||e.some(e=>!Number.isFinite(e)))throw Error(`Invalid table structure recognition ${t}: ${String(e)}. Expected three finite numbers.`);return[e[0],e[1],e[2]]}requireChannelOrder(e){if(e!==`rgb`&&e!==`bgr`)throw Error(`Unsupported table structure recognition channelOrder: ${e}. Expected "rgb" or "bgr".`);return e}},Ji={channelOrder:`bgr`,maxSideLength:736,limitType:`min`,maxSideLimit:4e3,textPixelThreshold:.2,boxScoreThreshold:.45,maxCandidates:3e3,unclipRatio:1.4},Yi={channelOrder:`bgr`,maxSideLength:736,limitType:`resize_long`,maxSideLimit:4e3,textPixelThreshold:.2,boxScoreThreshold:.6,maxCandidates:1e3,unclipRatio:.5,boxType:`poly`},Xi={"PP-OCRv6_tiny_det":{name:`PP-OCRv6_tiny_det`,module:`text_detection`,options:{...Ji,boxScoreThreshold:.4}},"PP-OCRv6_small_det":{name:`PP-OCRv6_small_det`,module:`text_detection`,options:Ji},"PP-OCRv6_medium_det":{name:`PP-OCRv6_medium_det`,module:`text_detection`,options:Ji},"PP-OCRv4_mobile_seal_det":{name:`PP-OCRv4_mobile_seal_det`,module:`seal_text_detection`,options:Yi},"PP-OCRv4_server_seal_det":{name:`PP-OCRv4_server_seal_det`,module:`seal_text_detection`,options:Yi}},Zi=1e-12,Qi=.002,$i=3,ea=class e{constructor(e,t,n={}){p(this,`options`,void 0),p(this,`session`,void 0),p(this,`ortModule`,void 0),this.session=t,this.ortModule=e,this.options={...hi,...n}}async run(e,t={}){let{onProgress:n,...r}=t,i=this.resolveRuntimeOptions(r),a=await this.preprocessDetection(e,i);n?.({type:`det`,stage:`preprocess`,progress:this.createProgress(1)});let o=await this.runInference(a.tensor,a.resizeParams);n?.({type:`det`,stage:`infer`,progress:this.createProgress(2)});let s=this.postprocessDetection(o,a,i);return n?.({type:`det`,stage:`postprocess`,progress:this.createProgress(3),detectedCount:s.length}),s}resolveRuntimeOptions(e={}){let t=e.inputShape??this.options.inputShape??this.resolveFixedInputShape(),n={...this.options,...e};return t?{...n,inputShape:t}:n}resolveFixedInputShape(){let e=xe(this.session);if(e.height&&e.width)return[e.channels??3,e.height,e.width]}createProgress(t){return{current:t,remain:e.TOTAL_PROGRESS_STEPS-t,total:e.TOTAL_PROGRESS_STEPS}}async preprocessDetection(e,t){return Vn(e,t)}async runInference(e,t){let n=new this.ortModule.Tensor(`float32`,e,[1,3,t.dstHeight,t.dstWidth]),r=await this.session.run(A(this.session,n)),i=this.session.outputNames[0]??Object.keys(r)[0],a=i?r[i]:void 0;if(!a)throw Error(`Detection output tensor '${i??`<none>`}' not found. Available keys: ${Object.keys(r).join(`, `)}`);let o=Un(a);return Wn(a,o,t),o}postprocessDetection(e,t,n){return hn(e,t,n)}},p(ea,`TOTAL_PROGRESS_STEPS`,3),ta={UVDoc:{name:`UVDoc`,module:`text_image_unwarping`,architecture:`UVDoc`,options:{inputName:`img`,mean:[0,0,0],stdDeviation:[1/255,1/255,1/255],channelOrder:`bgr`,preprocessPipeline:[`Read`,`Normalize`,`ToCHW`,`ToBatch`],postprocessName:`DocTr`,outputScale:255,outputChannelOrder:`bgr`,resultImageKey:`doctr_img`,dynamicInputShape:{min:[1,3,128,64],opt:[1,3,256,128],max:[8,3,512,256]}}}},na=class{constructor(e,t,n={}){p(this,`options`,void 0),p(this,`session`,void 0),p(this,`ortModule`,void 0),this.session=t,this.ortModule=e,this.options={...n}}async runRaw(e,t={}){let n=this.resolveRuntimeOptions(t);return this.runRawWithRuntimeOptions(e,n)}async run(e,t={}){let n=this.resolveRuntimeOptions(t);return Gn((await this.runRawWithRuntimeOptions(e,n)).outputs,n)}async runRawWithRuntimeOptions(e,t){let n=Jn(x(e),t),r=await this.session.run(Yn(this.ortModule,this.session,n,t));if(Object.keys(r).length===0)throw Error(`Text image unwarping session returned no output tensors.`);return{outputs:r,resizeParams:n.resizeParams}}resolveRuntimeOptions(e){let t={...this.options,...e};return{inputName:t.inputName,mean:this.requireTriple(t.mean,`mean`),stdDeviation:this.requireTriple(t.stdDeviation,`stdDeviation`),channelOrder:this.requireChannelOrder(t.channelOrder,`channelOrder`),preprocessPipeline:t.preprocessPipeline,postprocessName:t.postprocessName,outputScale:this.requireFiniteNumber(t.outputScale,`outputScale`),outputChannelOrder:this.requireChannelOrder(t.outputChannelOrder,`outputChannelOrder`),resultImageKey:t.resultImageKey,dynamicInputShape:t.dynamicInputShape}}requireTriple(e,t){if(!Array.isArray(e)||e.length!==3||e.some(e=>!Number.isFinite(e)))throw Error(`Invalid text image unwarping ${t}: ${String(e)}. Expected three finite numbers.`);return[e[0],e[1],e[2]]}requireChannelOrder(e,t){if(e!==`rgb`&&e!==`bgr`)throw Error(`Unsupported text image unwarping ${t}: ${e}. Expected "rgb" or "bgr".`);return e}requireFiniteNumber(e,t){if(!Number.isFinite(e))throw Error(`Invalid text image unwarping ${t}: ${e}. Expected a finite number.`);return e}},ra={channelOrder:`bgr`,outputSelectionStrategy:`ctc-logits`,imageHeight:48,imageWidth:320},ia=[`DecodeImage`,`MultiLabelEncode`,`RecResizeImg`,`KeepKeys`],aa={name:`ppocrv5`,fileName:`ppocrv5_dict.txt`,useSpaceChar:!0,dictionaryLength:18384,recognitionOutputClasses:18385},oa={name:`ppocrv6`,fileName:`ppocrv6_dict.txt`,useSpaceChar:!0,dictionaryLength:18708,recognitionOutputClasses:18710},sa={name:`ppocrv6_tiny`,fileName:`ppocrv6_tiny_dict.txt`,useSpaceChar:!0,dictionaryLength:6904,recognitionOutputClasses:6906},ca={"PP-OCRv5_mobile_rec":er(`PP-OCRv5_mobile_rec`,aa),"PP-OCRv5_server_rec":er(`PP-OCRv5_server_rec`,aa),"PP-OCRv6_tiny_rec":er(`PP-OCRv6_tiny_rec`,sa),"PP-OCRv6_small_rec":er(`PP-OCRv6_small_rec`,oa),"PP-OCRv6_medium_rec":er(`PP-OCRv6_medium_rec`,oa)},la=class{constructor(e,t,n={}){p(this,`options`,void 0),p(this,`session`,void 0),p(this,`ortModule`,void 0),this.session=t,this.ortModule=e,this.options={...gi,...n}}async run(e,t,n){let r=this.resolveRuntimeOptions(n?.recognition),i=this.resolveOrderingOptions(n?.ordering),a=this.sortBoxesByReadingOrder(t.filter(e=>e.width>0&&e.height>0),i),o=this.calculateBatchMaxWhRatio(a,r),s=[],c=n?.charWhiteList?.length?new Set(n.charWhiteList):void 0,l=a.length,u=n?.onProgress;u?.({type:`rec`,stage:`start`,progress:this.createProgress(0,l)});for(let[t,i]of a.entries()){let a=await this.processBox({image:e,index:t,box:i,maxWhRatio:o,charWhiteSet:c,textlineOrientation:n?.textlineOrientation,textlineOrientationClassifier:n?.textlineOrientationClassifier},r);a&&s.push(a),u?.({type:`rec`,stage:`item`,progress:this.createProgress(t+1,l),index:t,box:i,result:a??void 0,textlineOrientation:a?.textlineOrientation})}return u?.({type:`rec`,stage:`complete`,progress:this.createProgress(l,l)}),s}resolveRuntimeOptions(e={}){return{...this.options,...e}}resolveOrderingOptions(e={}){return{...yi,...e}}async processBox(e,t){let{image:n,box:r}=e,i=r.points?n.cropRotated(r.points):n.crop(r),a=await this.correctTextlineOrientation(i,e);a?.rotated&&(i=i.rotate180());let o=xe(this.session).width,s=Math.ceil(t.imageHeight*(i.width/i.height)),c=o??Math.max(t.imageWidth,s,Math.ceil(t.imageHeight*(e.maxWhRatio??0))),l=Math.min(s,c),u=i.resize({width:l,height:t.imageHeight}).tensor({mean_values:t.mean,norm_values:t.stdDeviation,channel_order:t.channelOrder}),d=this.padRecognitionTensor(u,l,t.imageHeight,c),f=new this.ortModule.Tensor(`float32`,d,[1,3,t.imageHeight,c]),{data:p,dims:m}=await this.runInference(f,t),[,h,g]=m,{text:_,confidence:v}=this.ctcLabelDecode(p,h,g,t,e.charWhiteSet);return{text:_,box:r,confidence:v,textlineOrientation:a}}async correctTextlineOrientation(e,t){let n=t.textlineOrientationClassifier;if(!n)return;let r={enabled:!0,threshold:.9,...t.textlineOrientation};if(!r.enabled)return;let i=(await n.run(e,r))[0];if(i)return{classId:i.classId,label:i.label,score:i.score,rotated:i.label.includes(`180`)&&i.score>r.threshold}}calculateBatchMaxWhRatio(e,t){let n=t.imageWidth/t.imageHeight;for(let t of e)n=Math.max(n,this.calculateBoxWhRatio(t));return n}calculateBoxWhRatio(e){if(!e.points)return e.width/e.height;let t=Math.max(this.distance(e.points[0],e.points[1]),this.distance(e.points[2],e.points[3]),1),n=Math.max(this.distance(e.points[0],e.points[3]),this.distance(e.points[1],e.points[2]),1);return n/t>=1.5?n/t:t/n}distance(e,t){return Math.hypot(e.x-t.x,e.y-t.y)}padRecognitionTensor(e,t,n,r){if(t===r)return e;let i=new Float32Array(3*n*r);for(let a=0;a<3;a++)for(let o=0;o<n;o++){let s=a*n*t+o*t,c=a*n*r+o*r;i.set(e.subarray(s,s+t),c)}return i}sortBoxesByReadingOrder(e,t){if(!t.sortByReadingOrder)return[...e];let n=[...e].sort((e,t)=>{let n=this.getBoxTopLeft(e),r=this.getBoxTopLeft(t);return n.y===r.y?n.x-r.x:n.y-r.y});for(let e=0;e<n.length-1;e++)for(let r=e;r>=0;r--){let e=n[r],i=n[r+1];if(!e||!i)break;let a=this.getBoxTopLeft(e),o=this.getBoxTopLeft(i),s=this.resolveSameLineThreshold(e,i,t);if(Math.abs(o.y-a.y)<s&&o.x<a.x)n[r]=i,n[r+1]=e;else break}return n}getBoxTopLeft(e){return e.points?.[0]??e}resolveSameLineThreshold(e,t,n){return n.sameLineThresholdRatio===void 0?n.sameLinePixelThreshold??10:(e.height+t.height)*n.sameLineThresholdRatio}createProgress(e,t){return{current:e,remain:t-e,total:t}}async runInference(e,t){let n=await this.session.run(A(this.session,e)),r=this.selectOutputTensor(n,t);if(!r)throw Error(`Recognition output tensor not found. Available keys: ${Object.keys(n).join(`, `)}`);return r}selectOutputTensor(e,t){if(t.outputSelectionStrategy!==`ctc-logits`){let t=Object.keys(e)[0];return t?e[t]:void 0}let n;for(let t of Object.keys(e)){let r=e[t],i=r?.dims;r?.data instanceof Float32Array&&i?.length===3&&(i[0]===1||i[0]===-1)&&(i[1]??0)>0&&(i[2]??0)>1&&(n=r)}if(n)return n;throw Error(`Recognition CTC logits output not found. Available outputs: ${Object.entries(e).map(([e,t])=>`${e}[${t.dims.join(`,`)}]`).join(`, `)}`)}ctcLabelDecode(e,t,n,r,i){let a=r.charactersDictionary,o=a[0]===``||a[0]===`blank`,s=o?n:n-1;if(a.length<s)throw Error(`Recognition charactersDictionary length ${a.length} is too small for model output classes ${n}. Expected at least ${s}${o?` including the CTC blank entry`:``}.`);let c=``,l=[],u=-1;for(let r=0;r<t;r++){let t=-1/0,s=0,d=r*n;for(let r=0;r<n;r++){let n=e[d+r];n>t&&(t=n,s=r)}if(s===u||(u=s,s===0))continue;let f=a[o?s:s-1]||``;(!i||i.has(f)||f===` `)&&(c+=f,l.push(t))}return{text:r.reverseText?rr(c):c,confidence:l.length>0?l.reduce((e,t)=>e+t,0)/l.length:0}}},ua={channelOrder:`bgr`,maxSideLength:960,limitType:`max`,maxSideLimit:4e3,textPixelThreshold:.3,boxScoreThreshold:.6,maxCandidates:1e3,unclipRatio:1.5},da={channelOrder:`bgr`,maxSideLength:736,limitType:`min`,maxSideLimit:4e3,textPixelThreshold:.2,boxScoreThreshold:.45,maxCandidates:3e3,unclipRatio:1.4},fa={channelOrder:`bgr`,outputSelectionStrategy:`ctc-logits`,imageHeight:48,imageWidth:320},pa=18385,ma=18384,ha=18710,ga=18708,_a=6906,va=6904,ya={name:`ppocrv5`,fileName:`ppocrv5_dict.txt`,useSpaceChar:!0,dictionaryLength:ma,recognitionOutputClasses:pa},ba={name:`ppocrv6`,fileName:`ppocrv6_dict.txt`,useSpaceChar:!0,dictionaryLength:ga,recognitionOutputClasses:ha},xa={name:`ppocrv6_tiny`,fileName:`ppocrv6_tiny_dict.txt`,useSpaceChar:!0,dictionaryLength:va,recognitionOutputClasses:_a},Sa={"PP-OCRv5":{name:`PP-OCRv5`,detection:ua,recognition:fa,dictionary:ya},"PP-OCRv5_mobile":{name:`PP-OCRv5_mobile`,detection:ua,recognition:fa,dictionary:ya},"PP-OCRv5_server":{name:`PP-OCRv5_server`,detection:ua,recognition:fa,dictionary:ya},"PP-OCRv6":{name:`PP-OCRv6`,detection:da,recognition:fa,dictionary:ba},"PP-OCRv6_tiny":{name:`PP-OCRv6_tiny`,detection:{...da,boxScoreThreshold:.4},recognition:fa,dictionary:xa},"PP-OCRv6_small":{name:`PP-OCRv6_small`,detection:da,recognition:fa,dictionary:ba},"PP-OCRv6_medium":{name:`PP-OCRv6_medium`,detection:da,recognition:fa,dictionary:ba}},Ca=class e{constructor(e){if(p(this,`options`,void 0),p(this,`detectionSession`,null),p(this,`detectionService`,null),p(this,`recognitionSession`,null),p(this,`recognitionService`,null),p(this,`textlineOrientationSession`,null),p(this,`textlineOrientationService`,null),!e?.ort)throw Error(`PaddleOcrService requires the 'ort' option to be set with onnxruntime-node or onnxruntime-wen.`);let t=ar(e.modelPreset);this.options={...xi,...t,...e||{},detection:{...xi.detection,...t.detection,...e.detection},recognition:{...xi.recognition,...t.recognition,...e.recognition},textlineOrientation:e.textlineOrientation?{...vi,...e.textlineOrientation}:void 0}}async initialize(){let e=this.options.ort;if(!e)throw Error(`PaddleOcrService requires the 'ort' option to be set with onnxruntime-node or onnxruntime-wen.`);let t=this.options.detection?.modelBuffer;if(!t)throw Error(`Detection model buffer is required. Please provide a valid ONNX model.`);this.detectionSession=await e.InferenceSession.create(t);let{modelBuffer:n,...r}=this.options.detection??{};this.detectionService=new ea(e,this.detectionSession,r);let i=this.options.recognition?.modelBuffer;if(!i)throw Error(`Recognition model buffer is required. Please provide a valid ONNX model.`);this.recognitionSession=await e.InferenceSession.create(i);let{modelBuffer:a,...o}=this.options.recognition??{};this.recognitionService=new la(e,this.recognitionSession,o);let s=this.options.textlineOrientation?.modelBuffer;if(s){this.textlineOrientationSession=await e.InferenceSession.create(s);let{modelBuffer:t,enabled:n,threshold:r,...i}=this.options.textlineOrientation??{};this.textlineOrientationService=new Ni(e,this.textlineOrientationSession,i)}}isInitialized(){return this.detectionSession!==null&&this.recognitionSession!==null}static async createInstance(t){let n=new e(t);return await n.initialize(),n}resolveDetectionRuntimeOptions(e={}){let{modelBuffer:t,...n}=this.options.detection??{};return{...hi,...n,...e}}resolveRecognitionRuntimeOptions(e={}){let{modelBuffer:t,...n}=this.options.recognition??{};return{...gi,...n,...e}}resolveRecognitionOrderingOptions(e={}){return{...yi,...e}}resolveTextlineOrientationOptions(e){if(!this.options.textlineOrientation&&!e)return;let{modelBuffer:t,...n}=this.options.textlineOrientation??{};return{...vi,...n,...e}}formatDictionaryRequirement(e){let{dictionary:t}=e;return` The ${e.name} preset expects ${t.fileName} with ${t.dictionaryLength} entries and ${t.recognitionOutputClasses} CTC output classes.`}async recognize(e,t){if(!this.detectionService||!this.recognitionService)throw Error(`PaddleOcrService is not initialized. Please call initialize() first.`);let n=this.resolveDetectionRuntimeOptions(t?.detection),r=this.resolveRecognitionRuntimeOptions(t?.recognition),i=this.resolveRecognitionOrderingOptions(t?.ordering),a=this.resolveTextlineOrientationOptions(t?.textlineOrientation);if(a?.enabled&&!this.textlineOrientationService)throw Error(`Textline orientation correction requires textlineOrientation.modelBuffer in createInstance().`);if(!r.charactersDictionary?.length){let e=this.options.modelPreset?ir(this.options.modelPreset):void 0;throw Error(`Recognition charactersDictionary is required. Provide it in createInstance({ recognition }) or recognize(_, { recognition }).${e?this.formatDictionaryRequirement(e):``}`)}let o=x(e),s=n.padding;s&&(o=o.padding({padding:s,color:[255,255,255]}));let c=await this.detectionService.run(o,{...n,onProgress:t?.onProgress}),l={...t,detection:n,recognition:r,ordering:i};return a&&(l.textlineOrientation=a),this.textlineOrientationService&&(l.textlineOrientationClassifier=this.textlineOrientationService),await this.recognitionService.run(o,c,l)}processRecognition(e,t){let n={text:``,lines:[],confidence:0},r={...bi,...t},i=r.recognitionScoreThreshold??bi.recognitionScoreThreshold,a=e.filter(e=>e.confidence>=i);if(!a.length)return n;n.confidence=a.reduce((e,t)=>e+t.confidence,0)/a.length;let o=[a[0]],s=a[0].text,c=a[0].box.height;for(let e=1;e<a.length;e++){let t=a[e],i=a[e-1];Math.abs(t.box.y-i.box.y)<=c*r.lineMergeThresholdRatio?(o.push(t),s+=` ${t.text}`,c=o.reduce((e,t)=>e+t.box.height,0)/o.length):(n.lines.push([...o]),s+=`\n${t.text}`,o=[t],c=t.box.height)}return o.length>0&&n.lines.push([...o]),n.text=s,n}async destroy(){await this.detectionSession?.release(),await this.recognitionSession?.release()}},wa={documentOrientation:{enabled:!0,threshold:0},textImageUnwarping:{enabled:!0},regionDetection:{enabled:!0},layout:{enabled:!0,fallbackRegionType:`table`},readingOrder:{enabled:!0},ocr:{enabled:!0,stripStyleTokens:!0},table:{enabled:!0},formula:{enabled:!0},seal:{enabled:!0},markdown:{enabled:!0},includeRegionImage:!1},Ta=/* @__PURE__ */ new Set([`table`]),Ea=/* @__PURE__ */ new Set([`formula`,`equation`]),Da=/* @__PURE__ */ new Set([`seal`]),Oa=[`<strike>`,`</strike>`,`<sup>`,`</sub>`,`<b>`,`</b>`,`<sub>`,`</sup>`,`<overline>`,`</overline>`,`<underline>`,`</underline>`,`<i>`,`</i>`],ka=class e{constructor(e={},t={}){p(this,`services`,void 0),p(this,`options`,void 0),this.services={...e},this.options=yr(wa,t)}static async createInstance(t){if(!t.ort)throw Error(`PaddleStructureService.createInstance requires the 'ort' option to be set.`);let n={};if(t.documentOrientation?.modelBuffer&&(n.documentOrientation=await fr(t.ort,t.documentOrientation,`PP-LCNet_x1_0_doc_ori`)),t.textImageUnwarping?.modelBuffer&&(n.textImageUnwarping=await pr(t.ort,t.textImageUnwarping,`UVDoc`)),t.regionDetection?.modelBuffer&&(n.regionDetection=await mr(t.ort,t.regionDetection,`PP-DocBlockLayout`)),t.layout?.modelBuffer&&(n.layout=await mr(t.ort,t.layout,`PP-DocLayout_plus-L`)),(t.ocr?.detection?.modelBuffer||t.ocr?.recognition?.modelBuffer)&&(n.ocr=await Ca.createInstance({...t.ocr,ort:t.ort})),(t.tableOcr?.detection?.modelBuffer||t.tableOcr?.recognition?.modelBuffer)&&(n.tableOcr=await Ca.createInstance({...t.tableOcr,ort:t.ort})),t.tableStructure?.modelBuffer&&(n.tableStructure=await hr(t.ort,t.tableStructure,`SLANet`)),t.formulaRecognition?.modelBuffer&&(n.formulaRecognition=await gr(t.ort,t.formulaRecognition,`PP-FormulaNet_plus-M`)),t.sealTextDetection?.modelBuffer&&(n.sealTextDetection=await _r(t.ort,t.sealTextDetection,`PP-OCRv4_mobile_seal_det`)),t.sealTextRecognition?.modelBuffer&&(n.sealTextRecognition=await vr(t.ort,t.sealTextRecognition,`PP-OCRv6_small_rec`)),Object.keys(n).length===0)throw Error(`PaddleStructureService.createInstance requires at least one modelBuffer or OCR model pair.`);return new e(n,t.options)}async run(e,t={}){let n=yr(this.options,t),r=x(e),i=await this.runDocumentOrientation(r,n);i.result?.angle&&(r=Cr(r,i.result.angle));let a=await this.runTextImageUnwarping(r,n);a.result&&(r=x(a.result.doctrImage));let o=await this.runRegionDetection(r,n),s=await this.runLayout(r,n),c=this.runReadingOrder(s.result??[],r,n),l=await this.runPageOcr(r,n),u=[];for(let e of c.result??[])u.push(await this.runRegion(r,e,l.result,n));let d=this.runMarkdown(u,n);return{image:Mr(r),stages:{documentOrientation:i,textImageUnwarping:a,regionDetection:o,layout:s,readingOrder:c,ocr:l,markdown:d},regionDetections:o.result??[],regions:u,markdown:d.result}}async runDocumentOrientation(e,t){if(!br(t.documentOrientation))return{status:`skipped`,reason:`document orientation disabled`};if(!this.services.documentOrientation)return{status:`skipped`,reason:`document orientation service not configured`};let{enabled:n,threshold:r,...i}=t.documentOrientation??{},a=(await this.services.documentOrientation.run(e,i))[0];return!a||a.score<(r??0)?{status:`skipped`,reason:`document orientation score below threshold`}:{status:`applied`,result:{classification:a,angle:Sr(a.label)}}}async runTextImageUnwarping(e,t){if(!br(t.textImageUnwarping))return{status:`skipped`,reason:`text image unwarping disabled`};if(!this.services.textImageUnwarping)return{status:`skipped`,reason:`text image unwarping service not configured`};let{enabled:n,...r}=t.textImageUnwarping??{};return{status:`applied`,result:await this.services.textImageUnwarping.run(e,r)}}async runLayout(e,t){let n=t.layout?.fallbackRegionType??`table`;if(!br(t.layout))return n===!1?{status:`skipped`,reason:`layout disabled`,result:[]}:{status:`skipped`,reason:`layout disabled`,result:[wr(e,n)]};if(!this.services.layout)return n===!1?{status:`skipped`,reason:`layout service not configured`,result:[]}:{status:`skipped`,reason:`layout service not configured`,result:[wr(e,n)]};let{enabled:r,fallbackRegionType:i,...a}=t.layout??{};return{status:`applied`,result:(await this.services.layout.run(e,a)).map(t=>Dr(t,e)).filter(e=>!!e)}}runReadingOrder(e,t,n){return br(n.readingOrder)?{status:`applied`,result:Tr(Er(e,t.width))}:{status:`skipped`,reason:`reading order disabled`,result:Tr(e)}}async runRegionDetection(e,t){if(!br(t.regionDetection))return{status:`skipped`,reason:`region detection disabled`,result:[]};if(!this.services.regionDetection)return{status:`skipped`,reason:`region detection service not configured`,result:[]};let{enabled:n,...r}=t.regionDetection??{};return{status:`applied`,result:(await this.services.regionDetection.run(e,r)).map(t=>Dr(t,e)).filter(e=>!!e)}}async runPageOcr(e,t){if(!br(t.ocr))return{status:`skipped`,reason:`ocr disabled`};if(!this.services.ocr)return{status:`skipped`,reason:`ocr service not configured`};let{enabled:n,stripStyleTokens:r,...i}=t.ocr??{};return{status:`applied`,result:Vr(await this.services.ocr.recognize(e,i),xr(t.ocr))}}async runRegion(e,t,n,r){let i=Ar(e,t.bbox),a=jr(t,i,r.includeRegionImage);if(Ta.has(t.type))return{...a,...await this.runTableRegion(i,r)};if(Ea.has(t.type))return{...a,...await this.runFormulaRegion(i,r)};if(Da.has(t.type))return{...a,...await this.runSealRegion(i,r)};let o=n?Hr(n,t.bbox).map(e=>Gr(e,t.bbox)):void 0;return o?{...a,status:`applied`,ocr:o}:{...a,status:`skipped`,reason:`ocr service not configured`}}async runTableRegion(e,t){if(!br(t.table))return{status:`skipped`,reason:`table recognition disabled`};if(!this.services.tableStructure)return{status:`skipped`,reason:`table structure service not configured`};let{enabled:n,ocr:r,...i}=t.table??{},a=await this.services.tableStructure.run(e,i),o=this.services.tableOcr??this.services.ocr;if(!o||!br(r??t.ocr))return{status:`applied`,table:{structure:a}};let{enabled:s,stripStyleTokens:c,...l}=r??t.ocr??{},u=Vr(await o.recognize(e,l),xr(r??t.ocr));return{status:`applied`,table:{structure:a,ocr:u,matched:lt(a,u)}}}async runFormulaRegion(e,t){if(!br(t.formula))return{status:`skipped`,reason:`formula recognition disabled`};if(!this.services.formulaRecognition)return{status:`skipped`,reason:`formula recognition service not configured`};let{enabled:n,...r}=t.formula??{};return{status:`applied`,formula:await this.services.formulaRecognition.run(e,r)}}async runSealRegion(e,t){if(!br(t.seal))return{status:`skipped`,reason:`seal recognition disabled`};if(!this.services.sealTextDetection||!this.services.sealTextRecognition)return{status:`skipped`,reason:`seal text detection or recognition service not configured`};let n=await this.services.sealTextDetection.run(e,t.seal?.detection);return{status:`applied`,seal:{boxes:n,recognition:await this.services.sealTextRecognition.run(e,n,t.seal?.recognition)}}}runMarkdown(e,t){return br(t.markdown)?{status:`applied`,result:{text:Nr(e,t.markdown?.ignoreLabels)}}:{status:`skipped`,reason:`markdown disabled`}}},Aa={tableClassification:{enabled:!0},ocr:{enabled:!0},useE2eWiredTableRecModel:!1,useE2eWirelessTableRecModel:!1,useWiredTableCellsTransToHtml:!1,useWirelessTableCellsTransToHtml:!1,useOcrResultsWithTableCells:!0},ja=class e{constructor(e={},t={}){p(this,`services`,void 0),p(this,`options`,void 0),this.services={...e},this.options=fi(Aa,t)}static async createInstance(t){if(!t.ort)throw Error(`TableRecognitionV2Service.createInstance requires the 'ort' option to be set.`);let n={};if(t.tableClassification?.modelBuffer&&(n.tableClassification=await li(t.ort,t.tableClassification,`PP-LCNet_x1_0_table_cls`)),t.wiredTableStructure?.modelBuffer&&(n.wiredTableStructure=await ui(t.ort,t.wiredTableStructure,`SLANeXt_wired`)),t.wirelessTableStructure?.modelBuffer&&(n.wirelessTableStructure=await ui(t.ort,t.wirelessTableStructure,`SLANeXt_wireless`)),t.wiredTableCellsDetection?.modelBuffer&&(n.wiredTableCellsDetection=await di(t.ort,t.wiredTableCellsDetection,`RT-DETR-L_wired_table_cell_det`)),t.wirelessTableCellsDetection?.modelBuffer&&(n.wirelessTableCellsDetection=await di(t.ort,t.wirelessTableCellsDetection,`RT-DETR-L_wireless_table_cell_det`)),(t.ocr?.detection?.modelBuffer||t.ocr?.recognition?.modelBuffer)&&(n.ocr=await Ca.createInstance({...t.ocr,ort:t.ort})),Object.keys(n).length===0)throw Error(`TableRecognitionV2Service.createInstance requires at least one modelBuffer for table classification, table structure, table cell detection, or OCR.`);return new e(n,t.options)}async run(e,t={}){let n=fi(this.options,t),r=await this.runTableClassification(e,n),i=n.tableType??pi(r),a=await this.runTableStructure(e,i,n),o=await this.runTableCellsDetection(e,i,n),s=await this.runOcr(e,n),c=o.length?Jr(o,n.useOcrResultsWithTableCells===!1?[]:s??[]):void 0,l=a&&s?.length&&a.bbox.length?lt(a,s):void 0,u=mi({tableType:i,structure:a,matched:l,cellHtml:c,options:n});if(!u)throw Error(`TableRecognitionV2Service could not produce predHtml for ${i} table. Configure table structure recognition or table cell detection.`);return{tableType:i,classification:r,structure:a,cellBoxes:o,cells:c?.cells??[],ocr:s,matched:l,predHtml:u,cellBoxList:o.map(e=>[...e.coordinate]),tableOcrPred:s?{text:s.map(e=>e.text),confidence:s.map(e=>e.confidence)}:void 0}}async runTableClassification(e,t){if(t.tableType||t.tableClassification?.enabled===!1||!this.services.tableClassification)return;let{enabled:n,...r}=t.tableClassification??{};return(await this.services.tableClassification.run(e,r))[0]}async runTableStructure(e,t,n){let r=t===`wired`?this.services.wiredTableStructure:this.services.wirelessTableStructure;if(r)return r.run(e,t===`wired`?n.wiredTableStructure:n.wirelessTableStructure)}async runTableCellsDetection(e,t,n){let r=t===`wired`?this.services.wiredTableCellsDetection:this.services.wirelessTableCellsDetection;return r?r.run(e,t===`wired`?n.wiredTableCellsDetection:n.wirelessTableCellsDetection):[]}async runOcr(e,t){if(t.ocr?.enabled===!1||!this.services.ocr)return;let{enabled:n,...r}=t.ocr??{};return this.services.ocr.recognize(e,r)}}})),Na=/* @__PURE__ */ n({InferenceSession:()=>Po,TRACE:()=>To,TRACE_EVENT_BEGIN:()=>ko,TRACE_EVENT_END:()=>Ao,TRACE_FUNC_BEGIN:()=>Do,TRACE_FUNC_END:()=>Oo,Tensor:()=>Co,default:()=>$_,env:()=>I,registerBackend:()=>Ga});
/*!
* ONNX Runtime Web v1.30.0
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT License.
*/
async function Pa(e={}){var t=e,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,i=r&&self.name?.startsWith(`em-pthread`);t.mountExternalData=(e,n)=>{e.startsWith(`./`)&&(e=e.substring(2)),(t.ad||=/* @__PURE__ */ new Map).set(e,n)},t.unmountExternalData=()=>{delete t.ad,delete t.Yd,delete t.Xd,delete t.be},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let a=e=>async(...n)=>{try{if(t.$c)throw Error(`Session already started`);let r=t.$c={Nd:n[0],errors:[]},i=await e(...n);if(t.$c!==r)throw Error(`Session mismatch`);t.hd?.flush();let a=r.errors;if(0<a.length){let e=await Promise.all(a);if(e=e.filter(e=>e),0<e.length)throw Error(e.join(`
`))}return i}finally{t.$c=null}};t.jsepInit=(e,n)=>{if(e===`webgpu`){[t.hd,t.Dd,t.Hd,t.jd,t.Gd,t.bc,t.Id,t.Kd,t.Ed,t.Fd,t.Jd]=n;let e=t.hd;t.jsepRegisterBuffer=(t,n,r,i)=>e.registerBuffer(t,n,r,i),t.jsepGetBuffer=t=>e.getBuffer(t),t.jsepCreateDownloader=(t,n,r)=>e.createDownloader(t,n,r),t.jsepOnCreateSession=t=>{e.onCreateSession(t)},t.jsepOnReleaseSession=t=>{e.onReleaseSession(t)},t.jsepOnRunStart=t=>e.onRunStart(t),t.Ld=(t,n)=>{e.upload(t,n)}}else if(e===`webnn`){let e=n[0];[t.Vd,t.vd,t.webnnEnsureTensor,t.wd,t.webnnDownloadTensor,t.Ud,t.webnnEnableTraceEvent]=n.slice(1),t.webnnReleaseTensorId=t.vd,t.webnnUploadTensor=t.wd,t.webnnRegisterMLContext=t.Ud,t.webnnOnRunStart=t=>e.onRunStart(t),t.webnnOnRunEnd=e.onRunEnd.bind(e),t.webnnOnReleaseSession=t=>{e.onReleaseSession(t)},t.webnnCreateMLTensorDownloader=(t,n)=>e.createMLTensorDownloader(t,n),t.webnnRegisterMLTensor=(t,n,r,i)=>e.registerMLTensor(t,n,r,i),t.webnnCreateMLContext=t=>e.createMLContext(t),t.webnnRegisterGraphInput=e.registerGraphInput.bind(e),t.webnnIsGraphInput=e.isGraphInput.bind(e),t.webnnRegisterGraphOutput=e.registerGraphOutput.bind(e),t.webnnIsGraphOutput=e.isGraphOutput.bind(e),t.webnnCreateTemporaryTensor=e.createTemporaryTensor.bind(e),t.webnnIsGraphInputOutputTypeSupported=e.isGraphInputOutputTypeSupported.bind(e)}};let o=()=>{let e=e=>(...t)=>{let n=cn;return t=e(...t),cn==n?t:new Promise((e,t)=>{hn={resolve:e,reject:t}})};(()=>{for(let n of[`_OrtAppendExecutionProvider`,`_OrtCreateSession`,`_OrtRun`,`_OrtRunWithBinding`,`_OrtBindInput`])t[n]=e(t[n])})(),a!==void 0&&(t._OrtRun=a(t._OrtRun),t._OrtRunWithBinding=a(t._OrtRunWithBinding)),o=void 0};t.asyncInit=()=>{o?.()};var s,c,l=(e,t)=>{throw t},u=self.location.href,d=``;if(n||r){try{d=new URL(`.`,u).href}catch{}r&&(c=e=>{var t=new XMLHttpRequest;return t.open(`GET`,e,!1),t.responseType=`arraybuffer`,t.send(null),new Uint8Array(t.response)}),s=async e=>{if(C(e))return new Promise((t,n)=>{var r=new XMLHttpRequest;r.open(`GET`,e,!0),r.responseType=`arraybuffer`,r.onload=()=>{r.status==200||r.status==0&&r.response?t(r.response):n(r.status)},r.onerror=n,r.send(null)});var t=await fetch(e,{credentials:`same-origin`});if(t.ok)return t.arrayBuffer();throw Error(t.status+` : `+t.url)}}var f,p,m,h,g,_,v=console.log.bind(console),y=console.error.bind(console),b=v,x=y,S=!1,C=e=>e.startsWith(`file://`);function w(){je.buffer!=T.buffer&&ce()}if(i){let e=function(n){try{var r=n.data,i=r.Vc;if(i===`load`){let n=[];self.onmessage=e=>n.push(e),_=()=>{postMessage({Vc:`loaded`});for(let t of n)e(t);self.onmessage=e};for(let e of r.Ad)t[e]&&!t[e].proxy||(t[e]=(...t)=>{postMessage({Vc:`callHandler`,yd:e,args:t})},e==`print`&&(b=t[e]),e==`printErr`&&(x=t[e]));je=r.Rd,ce(),p=r.Sd,fe(),wa()}else if(i===`run`){(function(e){var t=(w(),k)[e+52>>>2>>>0];e=(w(),k)[e+56>>>2>>>0],Vr(t,t-e),N(t)})(r.Uc),Nr(r.Uc,0,0,1,0,0),Oe(),Xt(r.Uc),ee||=(kr(),!0);try{Me(r.Pd,r.ed)}catch(e){if(e!=`unwind`)throw e}}else r.target!==`setimmediate`&&(i===`checkMailbox`?ee&&Zt():i&&(x(`worker: received unknown command ${i}`),x(r)))}catch(e){throw Pr(),e}};var ee=!1;self.onunhandledrejection=e=>{throw e.reason||e},self.onmessage=e}var T,E,D,te,O,k,ne,re,ie,ae,oe,se=!1;function ce(){var e=je.buffer;t.HEAP8=T=new Int8Array(e),D=new Int16Array(e),t.HEAPU8=E=new Uint8Array(e),te=new Uint16Array(e),t.HEAP32=O=new Int32Array(e),t.HEAPU32=k=new Uint32Array(e),ne=new Float32Array(e),re=new Float64Array(e),ie=new BigInt64Array(e),ae=new BigUint64Array(e)}function le(){se=!0,i?_():Fi.ub()}function ue(e){throw x(e=`Aborted(`+e+`)`),S=!0,e=new WebAssembly.RuntimeError(e+`. Build with -sASSERTIONS for more info.`),g?.(e),e}function de(){return{a:{ma:zi,hb:Ri,g:Fe,J:Le,f:He,o:Ue,i:We,$:Ge,b:Ke,S:qe,Ha:Ye,n:Xe,aa:et,Ya:tt,Da:nt,Fa:rt,Za:it,Wa:at,Pa:ot,Va:st,ka:ct,Ea:lt,Ba:ut,Xa:dt,Ca:ft,cb:pt,fa:xt,wa:St,ua:At,ea:Mt,N:Nt,H:Pt,va:Lt,_:Gt,xa:Kt,Sa:qt,za:Qt,Ia:en,sa:tn,ga:nn,Ra:Xt,$a:rn,Q:vn,r:Tn,c:Tt,ib:En,y:Dn,M:On,D:kn,l:An,s:jn,jb:Mn,I:Nn,R:Pn,j:Fn,u:In,q:Ln,k:Rn,Ma:zn,Na:Un,Oa:Wn,Ka:Gn,La:Kn,ta:Yn,eb:Xn,bb:$n,v:nr,ba:rr,ha:ir,ab:Zn,V:ar,_a:or,Aa:sr,F:Jn,U:cr,la:pr,ya:mr,gb:fr,fb:hr,Ta:yr,Ua:br,Ga:Se,T:xr,Ja:Sr,ja:Cr,Qa:wr,ia:Er,lb:Sa,na:_a,mb:xa,oa:ga,G:aa,e:Ui,t:Vi,w:Bi,B:$i,nb:pa,Z:fa,x:Ki,pa:ma,X:va,ca:da,ob:ua,pb:la,O:ea,qb:sa,qa:ca,rb:oa,L:ra,Y:ha,d:Hi,A:Gi,m:Wi,kb:Ca,p:Ji,z:Yi,C:qi,E:Xi,K:ta,ra:ia,P:ya,da:na,W:ba,sb:Qi,tb:Zi,h:Dr,a:je,db:be}}}async function fe(){function e(e,n){var r=Fi=e.exports;e={};for(let[t,n]of Object.entries(r))typeof n==`function`?(r=on(n),e[t]=r):e[t]=n;return Fi=e,Fi=(function(){var e=Fi,t=e=>t=>e(t)>>>0,n=e=>()=>e()>>>0;return(e=Object.assign({},e)).vb=t(e.vb),e.Zb=n(e.Zb),e.$b=t(e.$b),e.nc=t(e.nc),e.oc=n(e.oc),e.sc=t(e.sc),e})(),Te.push(Fi.ac),Or=(e=Fi).vb,kr=e.wb,t._OrtInit=e.xb,t._OrtGetLastError=e.yb,t._OrtCreateSessionOptions=e.zb,t._OrtAppendExecutionProvider=e.Ab,t._OrtAddFreeDimensionOverride=e.Bb,t._OrtAddSessionConfigEntry=e.Cb,t._OrtReleaseSessionOptions=e.Db,t._OrtCreateSession=e.Eb,t._OrtReleaseSession=e.Fb,t._OrtGetInputOutputCount=e.Gb,t._OrtGetInputOutputMetadata=e.Hb,t._OrtFree=e.Ib,t._OrtCreateTensor=e.Jb,t._OrtGetTensorData=e.Kb,t._OrtReleaseTensor=e.Lb,t._OrtCreateRunOptions=e.Mb,t._OrtAddRunConfigEntry=e.Nb,t._OrtReleaseRunOptions=e.Ob,t._OrtCreateBinding=e.Pb,t._OrtBindInput=e.Qb,t._OrtBindOutput=e.Rb,t._OrtClearBoundOutputs=e.Sb,t._OrtReleaseBinding=e.Tb,t._OrtRunWithBinding=e.Ub,t._OrtRun=e.Vb,t._OrtEndProfiling=e.Wb,t._JsepOutput=e.Xb,t._JsepGetNodeName=e.Yb,Ar=e.Zb,jr=t._free=e._b,Mr=t._malloc=e.$b,Nr=e.cc,Pr=e.dc,Fr=e.ec,Ir=e.fc,Lr=e.gc,Rr=e.hc,zr=e.ic,M=e.jc,Br=e.kc,Vr=e.lc,N=e.mc,Hr=e.nc,P=e.oc,Ur=e.pc,Wr=e.qc,Gr=e.rc,Kr=e.sc,qr=e.tc,Jr=e.uc,Yr=e.vc,Xr=e.wc,Zr=e.xc,Qr=e.yc,$r=e.zc,ei=e.Ac,ti=e.Bc,ni=e.Cc,ri=e.Dc,ii=e.Ec,ai=e.Fc,oi=e.Gc,si=e.Hc,ci=e.Ic,li=e.Jc,ui=e.Kc,di=e.Lc,fi=e.Mc,pi=e.Nc,mi=e.Oc,hi=e.Pc,gi=e.Qc,_i=e.Sc,vi=e.Tc,yi=e.cd,bi=e.dd,xi=e.id,Si=e.nd,Ci=e.od,wi=e.pd,Ti=e.qd,Ei=e.rd,Di=e.sd,Oi=e.td,ki=e.ud,Ai=e.zd,ji=e.Zd,Mi=e._d,Ni=e.$d,Pi=e.ae,p=n,Fi}var n,r=de();return t.instantiateWasm?new Promise(n=>{t.instantiateWasm(r,(t,r)=>{n(e(t,r))})}):i?e(new WebAssembly.Instance(p,de()),p):(oe??=t.locateFile?t.locateFile?t.locateFile(`ort-wasm-simd-threaded.jsep.wasm`,d):d+`ort-wasm-simd-threaded.jsep.wasm`:new URL(`/-TechUtilidadeskit/assets/ort-wasm-simd-threaded.jsep-MDYUKy93.wasm`,``+self.location.href).href,n=await(async function(e){var t=oe;if(!f&&!C(t))try{var n=fetch(t,{credentials:`same-origin`});return await WebAssembly.instantiateStreaming(n,e)}catch(e){x(`wasm streaming compile failed: ${e}`),x(`falling back to ArrayBuffer instantiation`)}return(async function(e,t){try{var n=await(async function(e){if(!f)try{var t=await s(e);return new Uint8Array(t)}catch{}if(e==oe&&f)e=new Uint8Array(f);else{if(!c)throw`both async and sync fetching of the wasm failed`;e=c(e)}return e})(e);return await WebAssembly.instantiate(n,t)}catch(e){x(`failed to asynchronously prepare wasm: ${e}`),ue(e)}})(t,e)})(r),e(n.instance,n.module))}class pe{name=`ExitStatus`;constructor(e){this.message=`Program terminated with exit(${e})`,this.status=e}}var me=e=>{e.terminate(),e.onmessage=()=>{}},he=[],ge=0,_e=null,ve=e=>{Ce.length==0&&(Ae(),ke(Ce[0]));var t=Ce.pop();if(!t)return 6;we.push(t),Ee[e.Uc]=t,t.Uc=e.Uc;var n={Vc:`run`,Pd:e.Od,ed:e.ed,Uc:e.Uc};return t.postMessage(n,e.md),0},ye=0,A=(e,t,...n)=>{var r,i=16*n.length,a=P(),o=Hr(i),s=o>>>3;for(r of n)typeof r==`bigint`?((w(),ie)[s++>>>0]=1n,(w(),ie)[s++>>>0]=r):((w(),ie)[s++>>>0]=0n,(w(),re)[s++>>>0]=r);return e=Fr(e,0,i,o,t),N(a),e};function be(e){if(i)return A(0,1,e);if(m=e,!(0<ye)){for(var t of we)me(t);for(t of Ce)me(t);Ce=[],we=[],Ee={},S=!0}l(0,new pe(e))}function xe(e){if(i)return A(1,0,e);Se(e)}var Se=e=>{if(m=e,i)throw xe(e),`unwind`;be(e)},Ce=[],we=[],Te=[],Ee={},De=e=>{var t=e.Uc;delete Ee[t],Ce.push(e),we.splice(we.indexOf(e),1),e.Uc=0,Ir(t)};function Oe(){Te.forEach(e=>e())}var ke=e=>new Promise(n=>{e.onmessage=r=>{var i=r.data;if(r=i.Vc,i.bd&&i.bd!=Ar()){var a=Ee[i.bd];a?a.postMessage(i,i.md):x(`Internal error! Worker sent a message "${r}" to target pthread ${i.bd}, but that thread no longer exists!`)}else r===`checkMailbox`?Zt():r===`spawnThread`?ve(i):r===`cleanupThread`?Jt(()=>{De(Ee[i.Qd])}):r===`loaded`?(e.loaded=!0,n(e)):i.target===`setimmediate`?e.postMessage(i):r===`uncaughtException`?e.onerror(i.error):r===`callHandler`?t[i.yd](...i.args):r&&x(`worker sent an unknown command ${r}`)},e.onerror=e=>{throw x(`worker sent an error! ${e.filename}:${e.lineno}: ${e.message}`),e};var r,i=[];for(r of[])t.propertyIsEnumerable(r)&&i.push(r);e.postMessage({Vc:`load`,Ad:i,Rd:je,Sd:p})});function Ae(){var e=new Worker((()=>{let e=URL;return self.location.href>`file:`&&self.location.href<`file;`?new e(`ort.bundle.min.mjs`,self.location.href):new URL(self.location.href)})(),{type:`module`,workerData:`em-pthread`,name:`em-pthread`});Ce.push(e)}var je,Me=(e,t)=>{ye=0,e=Jr(e,t),0<ye?m=e:Lr(e)},Ne=[],Pe=0;function Fe(e){var t=new Be(e>>>=0);return(w(),T)[t.Wc+12>>>0]==0&&(Re(t,!0),Pe--),ze(t,!1),Ne.push(t),Kr(e)}var Ie=0,Le=()=>{M(0,0);var e=Ne.pop();Ur(e.gd),Ie=0};function Re(e,t){t=+!!t,(w(),T)[e.Wc+12>>>0]=t}function ze(e,t){t=+!!t,(w(),T)[e.Wc+13>>>0]=t}class Be{constructor(e){this.gd=e,this.Wc=e-24}}var Ve=e=>{var t=Ie;if(!t)return Br(0),0;var n=new Be(t);(w(),k)[n.Wc+16>>>2>>>0]=t;var r=(w(),k)[n.Wc+4>>>2>>>0];if(!r)return Br(0),t;for(var i of e){if(i===0||i===r)break;if(Gr(i,r,n.Wc+16))return Br(i),t}return Br(r),t};function He(){return Ve([])}function Ue(e){return Ve([e>>>0])}function We(e,t,n,r){return Ve([e>>>0,t>>>0,n>>>0,r>>>0])}var Ge=()=>{var e=Ne.pop();e||ue(`no exception to throw`);var t=e.gd;throw(w(),T)[e.Wc+13>>>0]==0&&(Ne.push(e),ze(e,!0),Re(e,!1),Pe++),Wr(t),Ie=t};function Ke(e,t,n){var r=new Be(e>>>=0);throw t>>>=0,n>>>=0,(w(),k)[r.Wc+16>>>2>>>0]=0,(w(),k)[r.Wc+4>>>2>>>0]=t,(w(),k)[r.Wc+8>>>2>>>0]=n,Wr(e),Pe++,Ie=e}var qe=()=>Pe;function Je(e,t,n,r){return i?A(2,1,e,t,n,r):Ye(e,t,n,r)}function Ye(e,t,n,r){if(e>>>=0,t>>>=0,n>>>=0,r>>>=0,!globalThis.SharedArrayBuffer)return 6;var a=[];return i&&a.length===0?Je(e,t,n,r):(e={Od:n,Uc:e,ed:r,md:a},i?(e.Vc=`spawnThread`,postMessage(e,a),0):ve(e))}function Xe(e){throw Ie||=e>>>0,Ie}var Ze=globalThis.TextDecoder&&new TextDecoder,Qe=(e,t,n,r)=>{if(n=t+n,r)return n;for(;e[t]&&!(t>=n);)++t;return t},$e=(e,t=0,n,r)=>{if(16<(n=Qe(e,t>>>=0,n,r))-t&&e.buffer&&Ze)return Ze.decode(e.buffer instanceof ArrayBuffer?e.subarray(t,n):e.slice(t,n));for(r=``;t<n;){var i=e[t++];if(128&i){var a=63&e[t++];if((224&i)==192)r+=String.fromCharCode((31&i)<<6|a);else{var o=63&e[t++];65536>(i=(240&i)==224?(15&i)<<12|a<<6|o:(7&i)<<18|a<<12|o<<6|63&e[t++])?r+=String.fromCharCode(i):(i-=65536,r+=String.fromCharCode(55296|i>>10,56320|1023&i))}}else r+=String.fromCharCode(i)}return r},j=(e,t,n)=>(e>>>=0)?$e((w(),E),e,t,n):``;function et(e,t,n){return i?A(3,1,e,t,n):0}function tt(e,t){if(i)return A(4,1,e,t)}function nt(e,t){if(i)return A(5,1,e,t)}function rt(e,t,n){if(i)return A(6,1,e,t,n)}function it(e,t,n){return i?A(7,1,e,t,n):0}function at(e,t){if(i)return A(8,1,e,t)}function ot(e,t,n){if(i)return A(9,1,e,t,n)}function st(e,t,n,r){if(i)return A(10,1,e,t,n,r)}function ct(e,t,n,r){if(i)return A(11,1,e,t,n,r)}function lt(e,t,n,r){if(i)return A(12,1,e,t,n,r)}function ut(e){if(i)return A(13,1,e)}function dt(e,t){if(i)return A(14,1,e,t)}function ft(e,t,n){if(i)return A(15,1,e,t,n)}var pt=()=>ue(``),mt=e=>{e>>>=0;for(var t=``;;){var n=(w(),E)[e++>>>0];if(!n)return t;t+=String.fromCharCode(n)}},ht={},gt={},_t={},vt=class extends Error{constructor(e){super(e),this.name=`BindingError`}};function yt(e,t,n={}){return(function(e,t,n={}){var r=t.name;if(!e)throw new vt(`type "${r}" must have a positive integer typeid pointer`);if(gt.hasOwnProperty(e)){if(n.Bd)return;throw new vt(`Cannot register type '${r}' twice`)}gt[e]=t,delete _t[e],ht.hasOwnProperty(e)&&(t=ht[e],delete ht[e],t.forEach(e=>e()))})(e,t,n)}var bt=(e,t,n)=>{switch(t){case 1:return n?e=>(w(),T)[e>>>0]:e=>(w(),E)[e>>>0];case 2:return n?e=>(w(),D)[e>>>1>>>0]:e=>(w(),te)[e>>>1>>>0];case 4:return n?e=>(w(),O)[e>>>2>>>0]:e=>(w(),k)[e>>>2>>>0];case 8:return n?e=>(w(),ie)[e>>>3>>>0]:e=>(w(),ae)[e>>>3>>>0];default:throw TypeError(`invalid integer width (${t}): ${e}`)}};function xt(e,t,n,r,i){e>>>=0,n>>>=0,t=mt(t>>>0);let a=e=>e;if(r=r===0n){let e=8*n;a=t=>BigInt.asUintN(e,t),i=a(i)}yt(e,{name:t,Rc:a,Yc:(e,t)=>(typeof t==`number`&&(t=BigInt(t)),t),Xc:bt(t,n,!r),Zc:null})}function St(e,t,n,r){yt(e>>>=0,{name:t=mt(t>>>0),Rc:function(e){return!!e},Yc:function(e,t){return t?n:r},Xc:function(e){return this.Rc((w(),E)[e>>>0])},Zc:null})}var Ct=[],wt=[0,1,,1,null,1,!0,1,!1,1];function Tt(e){9<(e>>>=0)&&--wt[e+1]===0&&(wt[e]=void 0,Ct.push(e))}var Et=e=>{if(!e)throw new vt(`Cannot use deleted val. handle = ${e}`);return wt[e]},Dt=e=>{switch(e){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let t=Ct.pop()||wt.length;return wt[t]=e,wt[t+1]=1,t}};function Ot(e){return this.Rc((w(),k)[e>>>2>>>0])}var kt={name:`emscripten::val`,Rc:e=>{var t=Et(e);return Tt(e),t},Yc:(e,t)=>Dt(t),Xc:Ot,Zc:null};function At(e){return yt(e>>>0,kt)}var jt=(e,t)=>{switch(t){case 4:return function(e){return this.Rc((w(),ne)[e>>>2>>>0])};case 8:return function(e){return this.Rc((w(),re)[e>>>3>>>0])};default:throw TypeError(`invalid float width (${t}): ${e}`)}};function Mt(e,t,n){n>>>=0,yt(e>>>=0,{name:t=mt(t>>>0),Rc:e=>e,Yc:(e,t)=>t,Xc:jt(t,n),Zc:null})}function Nt(e,t,n,r,i){e>>>=0,n>>>=0,t=mt(t>>>0);let a=e=>e;if(r===0){var o=32-8*n;a=e=>e<<o>>>o,i=a(i)}yt(e,{name:t,Rc:a,Yc:(e,t)=>t,Xc:bt(t,n,r!==0),Zc:null})}function Pt(e,t,n){function r(e){var t=(w(),k)[e>>>2>>>0];return e=(w(),k)[e+4>>>2>>>0],new i((w(),T).buffer,e,t)}var i=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][t];yt(e>>>=0,{name:n=mt(n>>>0),Rc:r,Xc:r},{Bd:!0})}var Ft=(e,t,n)=>{var r=(w(),E);if(t>>>=0,0<n){var i=t;n=t+n-1;for(var a=0;a<e.length;++a){var o=e.codePointAt(a);if(127>=o){if(t>=n)break;r[t++>>>0]=o}else if(2047>=o){if(t+1>=n)break;r[t++>>>0]=192|o>>6,r[t++>>>0]=128|63&o}else if(65535>=o){if(t+2>=n)break;r[t++>>>0]=224|o>>12,r[t++>>>0]=128|o>>6&63,r[t++>>>0]=128|63&o}else{if(t+3>=n)break;r[t++>>>0]=240|o>>18,r[t++>>>0]=128|o>>12&63,r[t++>>>0]=128|o>>6&63,r[t++>>>0]=128|63&o,a++}}r[t>>>0]=0,e=t-i}else e=0;return e},It=e=>{for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);127>=r?t++:2047>=r?t+=2:55296<=r&&57343>=r?(t+=4,++n):t+=3}return t};function Lt(e,t){yt(e>>>=0,{name:t=mt(t>>>0),Rc(e){var t=(w(),k)[e>>>2>>>0];return t=j(e+4,t,!0),jr(e),t},Yc(e,t){t instanceof ArrayBuffer&&(t=new Uint8Array(t));var n=typeof t==`string`;if(!(n||ArrayBuffer.isView(t)&&t.BYTES_PER_ELEMENT==1))throw new vt(`Cannot pass non-string to std::string`);var r=n?It(t):t.length,i=Mr(4+r+1),a=i+4;return(w(),k)[i>>>2>>>0]=r,n?Ft(t,a,r+1):(w(),E).set(t,a>>>0),e!==null&&e.push(jr,i),i},Xc:Ot,Zc(e){jr(e)}})}var Rt=globalThis.TextDecoder?new TextDecoder(`utf-16le`):void 0,zt=(e,t,n)=>{if(e>>>=1,16<(t=Qe((w(),te),e,t/2,n))-e&&Rt)return Rt.decode((w(),te).slice(e,t));for(n=``;e<t;++e){var r=(w(),te)[e>>>0];n+=String.fromCharCode(r)}return n},Bt=(e,t,n)=>{if(n??=2147483647,2>n)return 0;var r=t;n=(n-=2)<2*e.length?n/2:e.length;for(var i=0;i<n;++i){var a=e.charCodeAt(i);(w(),D)[t>>>1>>>0]=a,t+=2}return(w(),D)[t>>>1>>>0]=0,t-r},Vt=e=>2*e.length,Ht=(e,t,n)=>{var r=``;e>>>=2;for(var i=0;!(i>=t/4);i++){var a=(w(),k)[e+i>>>0];if(!a&&!n)break;r+=String.fromCodePoint(a)}return r},Ut=(e,t,n)=>{if(t>>>=0,n??=2147483647,4>n)return 0;var r=t;n=r+n-4;for(var i=0;i<e.length;++i){var a=e.codePointAt(i);if(65535<a&&i++,(w(),O)[t>>>2>>>0]=a,(t+=4)+4>n)break}return(w(),O)[t>>>2>>>0]=0,t-r},Wt=e=>{for(var t=0,n=0;n<e.length;++n)65535<e.codePointAt(n)&&n++,t+=4;return t};function Gt(e,t,n){if(e>>>=0,t>>>=0,n=mt(n>>>=0),t===2)var r=zt,i=Bt,a=Vt;else r=Ht,i=Ut,a=Wt;yt(e,{name:n,Rc:e=>{var n=(w(),k)[e>>>2>>>0];return n=r(e+4,n*t,!0),jr(e),n},Yc:(e,r)=>{if(typeof r!=`string`)throw new vt(`Cannot pass non-string to C++ string type ${n}`);var o=a(r),s=Mr(4+o+t);return(w(),k)[s>>>2>>>0]=o/t,i(r,s+4,o+t),e!==null&&e.push(jr,s),s},Xc:Ot,Zc(e){jr(e)}})}function Kt(e,t){yt(e>>>=0,{Cd:!0,name:t=mt(t>>>0),Rc:()=>{},Yc:()=>{}})}function qt(e){Nr(e>>>0,!r,1,!n,131072,!1),Oe()}var Jt=e=>{if(!S)try{if(e(),!(0<ye))try{i?Ar()&&Lr(m):Se(m)}catch(e){e instanceof pe||e==`unwind`||l(0,e)}}catch(e){e instanceof pe||e==`unwind`||l(0,e)}},Yt=!Atomics.waitAsync||globalThis.navigator?.userAgent&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function Xt(e){e>>>=0,Yt||(Atomics.waitAsync((w(),O),e>>>2,e).value.then(Zt),e+=128,Atomics.store((w(),O),e>>>2,1))}var Zt=()=>Jt(()=>{var e=Ar();e&&(Xt(e),zr())});function Qt(e,t){(e>>>=0)==t>>>0?setTimeout(Zt):i?postMessage({bd:e,Vc:`checkMailbox`}):(e=Ee[e])&&e.postMessage({Vc:`checkMailbox`})}var $t=[];function en(e,t,n,r,i){for(t>>>=0,i>>>=0,$t.length=0,n=i>>>3,r=i+r>>>3;n<r;){var a=(w(),ie)[n++>>>0]?(w(),ie)[n++>>>0]:(w(),re)[n++>>>0];$t.push(a)}return(t?Li[t]:Ii[e])(...$t)}var tn=()=>{ye=0};function nn(e){e>>>=0,i?postMessage({Vc:`cleanupThread`,Qd:e}):De(Ee[e])}function rn(e){}var an=e=>{try{e()}catch(e){ue(e)}};function on(e){var t=(...t)=>{un.push(e);try{return e(...t)}finally{S||(un.pop(),cn&&sn===1&&un.length===0&&(sn=0,ye+=1,an(Mi),typeof Fibers<`u`&&Fibers.de()))}};return pn.set(e,t),t}var sn=0,cn=null,ln=0,un=[],dn=/* @__PURE__ */ new Map,fn=/* @__PURE__ */ new Map,pn=/* @__PURE__ */ new Map,mn=0,hn=null,gn=[],_n=e=>(function(e){if(!S){if(sn===0){var t=!1,n=!1;e((e=0)=>{if(!S&&(ln=e,t=!0,n)){sn=2,an(()=>Ni(cn)),typeof MainLoop<`u`&&MainLoop.xd&&MainLoop.resume(),e=!1;try{var r=(function(){var e=(w(),O)[cn+8>>>2>>>0];return e=fn.get(e),e=pn.get(e),--ye,e()})()}catch(t){r=t,e=!0}var i=!1;if(!cn){var a=hn;a&&(hn=null,(e?a.reject:a.resolve)(r),i=!0)}if(e&&!i)throw r}}),n=!0,t||(sn=1,cn=(function(){var e=Mr(65548),t=e+12;if((w(),k)[e>>>2>>>0]=t,(w(),k)[e+4>>>2>>>0]=t+65536,t=un[0],!dn.has(t)){var n=mn++;dn.set(t,n),fn.set(n,t)}return t=dn.get(t),(w(),O)[e+8>>>2>>>0]=t,e})(),typeof MainLoop<`u`&&MainLoop.xd&&MainLoop.pause(),an(()=>ji(cn)))}else sn===2?(sn=0,an(Pi),jr(cn),cn=null,gn.forEach(Jt)):ue(`invalid state: ${sn}`);return ln}})(t=>{e().then(t)});function vn(e){return e>>>=0,_n(async()=>Dt(await Et(e)))}var yn=[],bn=e=>{var t=yn.length;return yn.push(e),t},xn=(e,t)=>{for(var n=Array(e),r=0;r<e;++r){var i=r,a=(w(),k)[t+4*r>>>2>>>0],o=gt[a];if(o===void 0)throw e=`parameter ${r}`,a=Or(a),t=mt(a),jr(a),new vt(`${e} has unknown type ${t}`);n[i]=o}return n},Sn=(e,t,n)=>{var r=[];return e=e(r,n),r.length&&((w(),k)[t>>>2>>>0]=Dt(r)),e},Cn={},wn=e=>{var t=Cn[e];return t===void 0?mt(e):t};function Tn(e,t,n){var[r,...i]=xn(e,t>>>0);t=r.Yc.bind(r);var a=i.map(e=>e.Xc.bind(e));e--;var o={toValue:Et};switch(e=a.map((e,t)=>{var n=`argFromPtr${t}`;return o[n]=e,`${n}(args${t?`+`+8*t:``})`}),n){case 0:var s=`toValue(handle)`;break;case 2:s=`new (toValue(handle))`;break;case 3:s=``;break;case 1:o.getStringOrSymbol=wn,s=`toValue(handle)[getStringOrSymbol(methodName)]`}return s+=`(${e})`,r.Cd||(o.toReturnWire=t,o.emval_returnValue=Sn,s=`return emval_returnValue(toReturnWire, destructorsRef, ${s})`),s=`return function (handle, methodName, destructorsRef, args) {
  ${s}
  }`,n=Function(Object.keys(o),s)(...Object.values(o)),s=`methodCaller<(${i.map(e=>e.name)}) => ${r.name}>`,bn(Object.defineProperty(n,"name",{value:s}))}function En(e,t){return t>>>=0,(e=Et(e>>>0))==Et(t)}function Dn(e){return(e>>>=0)?(e=wn(e),Dt(globalThis[e])):Dt(globalThis)}function On(e){return e=wn(e>>>0),Dt(t[e])}function kn(e,t){return t>>>=0,e=Et(e>>>0),t=Et(t),Dt(e[t])}function An(e){9<(e>>>=0)&&(wt[e+1]+=1)}function jn(e,t,n,r,i){return yn[e>>>0](t>>>0,n>>>0,r>>>0,i>>>0)}function Mn(e,t,n,r,i){return jn(e>>>0,t>>>0,n>>>0,r>>>0,i>>>0)}function Nn(){return Dt([])}function Pn(e){e=Et(e>>>0);for(var t=Array(e.length),n=0;n<e.length;n++)t[n]=e[n];return Dt(t)}function Fn(e){return Dt(wn(e>>>0))}function In(){return Dt({})}function Ln(e){for(var t=Et(e>>>=0);t.length;){var n=t.pop();t.pop()(n)}Tt(e)}function Rn(e,t,n){t>>>=0,n>>>=0,e=Et(e>>>0),t=Et(t),n=Et(n),e[t]=n}function zn(e,t){e=-9007199254740992>e||9007199254740992<e?NaN:Number(e),t>>>=0,e=/* @__PURE__ */ new Date(1e3*e),(w(),O)[t>>>2>>>0]=e.getUTCSeconds(),(w(),O)[t+4>>>2>>>0]=e.getUTCMinutes(),(w(),O)[t+8>>>2>>>0]=e.getUTCHours(),(w(),O)[t+12>>>2>>>0]=e.getUTCDate(),(w(),O)[t+16>>>2>>>0]=e.getUTCMonth(),(w(),O)[t+20>>>2>>>0]=e.getUTCFullYear()-1900,(w(),O)[t+24>>>2>>>0]=e.getUTCDay(),e=(e.getTime()-Date.UTC(e.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(w(),O)[t+28>>>2>>>0]=e}var Bn=e=>e%4==0&&(e%100!=0||e%400==0),Vn=[0,31,60,91,121,152,182,213,244,274,305,335],Hn=[0,31,59,90,120,151,181,212,243,273,304,334];function Un(e,t){e=-9007199254740992>e||9007199254740992<e?NaN:Number(e),t>>>=0,e=/* @__PURE__ */ new Date(1e3*e),(w(),O)[t>>>2>>>0]=e.getSeconds(),(w(),O)[t+4>>>2>>>0]=e.getMinutes(),(w(),O)[t+8>>>2>>>0]=e.getHours(),(w(),O)[t+12>>>2>>>0]=e.getDate(),(w(),O)[t+16>>>2>>>0]=e.getMonth(),(w(),O)[t+20>>>2>>>0]=e.getFullYear()-1900,(w(),O)[t+24>>>2>>>0]=e.getDay();var n=(Bn(e.getFullYear())?Vn:Hn)[e.getMonth()]+e.getDate()-1|0;(w(),O)[t+28>>>2>>>0]=n,(w(),O)[t+36>>>2>>>0]=-60*e.getTimezoneOffset(),n=new Date(e.getFullYear(),6,1).getTimezoneOffset();var r=new Date(e.getFullYear(),0,1).getTimezoneOffset();e=0|(n!=r&&e.getTimezoneOffset()==Math.min(r,n)),(w(),O)[t+32>>>2>>>0]=e}function Wn(e){e>>>=0;var t=new Date((w(),O)[e+20>>>2>>>0]+1900,(w(),O)[e+16>>>2>>>0],(w(),O)[e+12>>>2>>>0],(w(),O)[e+8>>>2>>>0],(w(),O)[e+4>>>2>>>0],(w(),O)[e>>>2>>>0],0),n=(w(),O)[e+32>>>2>>>0],r=t.getTimezoneOffset(),i=new Date(t.getFullYear(),6,1).getTimezoneOffset(),a=new Date(t.getFullYear(),0,1).getTimezoneOffset(),o=Math.min(a,i);return 0>n?(w(),O)[e+32>>>2>>>0]=+(i!=a&&o==r):0<n!=(o==r)&&(i=Math.max(a,i),t.setTime(t.getTime()+6e4*((0<n?o:i)-r))),(w(),O)[e+24>>>2>>>0]=t.getDay(),n=(Bn(t.getFullYear())?Vn:Hn)[t.getMonth()]+t.getDate()-1|0,(w(),O)[e+28>>>2>>>0]=n,(w(),O)[e>>>2>>>0]=t.getSeconds(),(w(),O)[e+4>>>2>>>0]=t.getMinutes(),(w(),O)[e+8>>>2>>>0]=t.getHours(),(w(),O)[e+12>>>2>>>0]=t.getDate(),(w(),O)[e+16>>>2>>>0]=t.getMonth(),(w(),O)[e+20>>>2>>>0]=t.getYear(),e=t.getTime(),BigInt(isNaN(e)?-1:e/1e3)}function Gn(e,t,n,r,a,o,s){return i?A(16,1,e,t,n,r,a,o,s):-52}function Kn(e,t,n,r,a,o){if(i)return A(17,1,e,t,n,r,a,o)}var qn={},Jn=()=>performance.timeOrigin+performance.now();function Yn(e,t){return i?A(18,1,e,t):(qn[e]&&(clearTimeout(qn[e].id),delete qn[e]),t&&(qn[e]={id:setTimeout(()=>{delete qn[e],Jt(()=>Rr(e,performance.timeOrigin+performance.now()))},t),ce:t}),0)}function Xn(e,t,n,r){e>>>=0,t>>>=0,n>>>=0,r>>>=0;var i=(/* @__PURE__ */ new Date()).getFullYear(),a=new Date(i,0,1).getTimezoneOffset();i=new Date(i,6,1).getTimezoneOffset();var o=Math.max(a,i);(w(),k)[e>>>2>>>0]=60*o,(w(),O)[t>>>2>>>0]=+(a!=i),e=(t=e=>{var t=Math.abs(e);return`UTC${0<=e?`-`:`+`}${String(Math.floor(t/60)).padStart(2,`0`)}${String(t%60).padStart(2,`0`)}`})(a),t=t(i),i<a?(Ft(e,n,17),Ft(t,r,17)):(Ft(e,r,17),Ft(t,n,17))}var Zn=()=>Date.now(),Qn=1;function $n(e,t,n){if(n>>>=0,!(0<=e&&3>=e))return 28;if(e===0)e=Date.now();else{if(!Qn)return 52;e=performance.timeOrigin+performance.now()}return e=Math.round(1e6*e),(w(),ie)[n>>>3>>>0]=BigInt(e),0}var er=[],tr=(e,t)=>{er.length=0;for(var n;n=(w(),E)[e++>>>0];){var r=n!=105;t+=(r&=n!=112)&&t%8?4:0,er.push(n==112?(w(),k)[t>>>2>>>0]:n==106?(w(),ie)[t>>>3>>>0]:n==105?(w(),O)[t>>>2>>>0]:(w(),re)[t>>>3>>>0]),t+=r?8:4}return er};function nr(e,t,n){return e>>>=0,t=tr(t>>>0,n>>>0),Li[e](...t)}function rr(e,t,n){return e>>>=0,t=tr(t>>>0,n>>>0),Li[e](...t)}var ir=()=>{};function ar(e,t){return x(j(e>>>0,t>>>0))}var or=()=>{throw ye+=1,`unwind`};function sr(){return 4294901760}var cr=()=>navigator.hardwareConcurrency,lr={},ur=e=>{var t;return(t=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(e))?+t[1]:(t=/:(\d+):\d+(?:\)|$)/.exec(e))?2147483648|t[1]:0},dr=e=>{for(var t of e)(e=ur(t))&&(lr[e]=t)};function fr(){var e=Error().stack.toString().split(`
`);return e[0]==`Error`&&e.shift(),dr(e),lr.kd=ur(e[3]),lr.Md=e,lr.kd}function pr(e){if(!(e=lr[e>>>0]))return 0;var t;if(t=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(e))e=t[1];else if(t=/^\s+at (.*) \(.*\)$/.exec(e))e=t[1];else{if(!(t=/^(.+?)@/.exec(e)))return 0;e=t[1]}jr(pr.ld??0),t=It(e)+1;var n=Mr(t);return n&&Ft(e,n,t),pr.ld=n,pr.ld}function mr(e){e>>>=0;var t=(w(),E).length;if(e<=t||4294901760<e)return!1;for(var n=1;4>=n;n*=2){var r=t*(1+.2/n);r=Math.min(r,e+100663296);e:{r=(Math.min(4294901760,65536*Math.ceil(Math.max(e,r)/65536))-je.buffer.byteLength+65535)/65536|0;try{je.grow(r),ce();var i=1;break e}catch{}i=void 0}if(i)return!0}return!1}function hr(e,t,n){if(e>>>=0,t>>>=0,lr.kd==e)var r=lr.Md;else(r=Error().stack.toString().split(`
`))[0]==`Error`&&r.shift(),dr(r);for(var i=3;r[i]&&ur(r[i])!=e;)++i;for(e=0;e<n&&r[e+i];++e)(w(),O)[t+4*e>>>2>>>0]=ur(r[e+i]);return e}var gr,_r={},vr=()=>{if(!gr){var e,t={USER:`web_user`,LOGNAME:`web_user`,PATH:`/`,PWD:`/`,HOME:`/home/web_user`,LANG:(globalThis.navigator?.language??`C`).replace(`-`,`_`)+`.UTF-8`,_:`./this.program`};for(e in _r)_r[e]===void 0?delete t[e]:t[e]=_r[e];var n=[];for(e in t)n.push(`${e}=${t[e]}`);gr=n}return gr};function yr(e,t){if(i)return A(19,1,e,t);e>>>=0,t>>>=0;var n,r=0,a=0;for(n of vr()){var o=t+r;(w(),k)[e+a>>>2>>>0]=o,r+=Ft(n,o,1/0)+1,a+=4}return 0}function br(e,t){if(i)return A(20,1,e,t);e>>>=0,t>>>=0;var n=vr();for(var r of((w(),k)[e>>>2>>>0]=n.length,e=0,n))e+=It(r)+1;return(w(),k)[t>>>2>>>0]=e,0}function xr(e){return i?A(21,1,e):52}function Sr(e,t,n,r,a){return i?A(22,1,e,t,n,r,a):52}function Cr(e,t,n,r){return i?A(23,1,e,t,n,r):52}function wr(e,t,n,r){return i?A(24,1,e,t,n,r):70}var Tr=[null,[],[]];function Er(e,t,n,r){if(i)return A(25,1,e,t,n,r);t>>>=0,n>>>=0,r>>>=0;for(var a=0,o=0;o<n;o++){var s=(w(),k)[t>>>2>>>0],c=(w(),k)[t+4>>>2>>>0];t+=8;for(var l=0;l<c;l++){var u=e,d=(w(),E)[s+l>>>0],f=Tr[u];d===0||d===10?((u===1?b:x)($e(f)),f.length=0):f.push(d)}a+=c}return(w(),k)[r>>>2>>>0]=a,0}function Dr(e){return e>>>0}i||(function(){for(var e=t.numThreads-1;e--;)Ae();he.push(async()=>{var e=(async function(){if(!i)return Promise.all(Ce.map(ke))})();ge++,await e,--ge==0&&_e&&(e=_e,_e=null,e())})})(),i||(je=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),ce()),t.wasmBinary&&(f=t.wasmBinary),t.stackSave=()=>P(),t.stackRestore=e=>N(e),t.stackAlloc=e=>Hr(e),t.setValue=function(e,t,n=`i8`){switch(n.endsWith(`*`)&&(n=`*`),n){case`i1`:case`i8`:(w(),T)[e>>>0]=t;break;case`i16`:(w(),D)[e>>>1>>>0]=t;break;case`i32`:(w(),O)[e>>>2>>>0]=t;break;case`i64`:(w(),ie)[e>>>3>>>0]=BigInt(t);break;case`float`:(w(),ne)[e>>>2>>>0]=t;break;case`double`:(w(),re)[e>>>3>>>0]=t;break;case`*`:(w(),k)[e>>>2>>>0]=t;break;default:ue(`invalid type for setValue: ${n}`)}},t.getValue=function(e,t=`i8`){switch(t.endsWith(`*`)&&(t=`*`),t){case`i1`:case`i8`:return(w(),T)[e>>>0];case`i16`:return(w(),D)[e>>>1>>>0];case`i32`:return(w(),O)[e>>>2>>>0];case`i64`:return(w(),ie)[e>>>3>>>0];case`float`:return(w(),ne)[e>>>2>>>0];case`double`:return(w(),re)[e>>>3>>>0];case`*`:return(w(),k)[e>>>2>>>0];default:ue(`invalid type for getValue: ${t}`)}},t.UTF8ToString=j,t.stringToUTF8=Ft,t.lengthBytesUTF8=It;var Or,kr,Ar,jr,Mr,Nr,Pr,Fr,Ir,Lr,Rr,zr,M,Br,Vr,N,Hr,P,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr,$r,ei,ti,ni,ri,ii,ai,oi,si,ci,li,ui,di,fi,pi,mi,hi,gi,_i,vi,yi,bi,xi,Si,Ci,wi,Ti,Ei,Di,Oi,ki,Ai,ji,Mi,Ni,Pi,Fi,Ii=[be,xe,Je,et,tt,nt,rt,it,at,ot,st,ct,lt,ut,dt,ft,Gn,Kn,Yn,yr,br,xr,Sr,Cr,wr,Er],Li={1086876:(e,n,r,i,a)=>{if(t===void 0||!t.ad)return 1;if((e=j(Number(e>>>0))).startsWith(`./`)&&(e=e.substring(2)),!(e=t.ad.get(e)))return 2;if(n=Number(n>>>0),r=Number(r>>>0),i=Number(i>>>0),n+r>e.byteLength)return 3;try{let o=e.subarray(n,n+r);switch(a){case 0:(w(),E).set(o,i>>>0);break;case 1:t.Td?t.Td(i,o):t.Ld(i,o);break;default:return 4}return 0}catch{return 4}},1087700:(e,n,r)=>{t.wd(e,(w(),E).subarray(n>>>0,n+r>>>0))},1087764:()=>t.Vd(),1087806:e=>{t.vd(e)},1087843:()=>{t.Ed()},1087874:()=>{t.Fd()},1087903:()=>{t.Jd()},1087928:e=>t.Dd(e),1087961:e=>t.Hd(e),1087993:(e,n,r)=>{t.jd(Number(e),Number(n),Number(r),!0)},1088056:(e,n,r)=>{t.jd(Number(e),Number(n),Number(r))},1088113:()=>typeof wasmOffsetConverter<`u`,1088170:e=>{t.bc(`Abs`,e,void 0)},1088221:e=>{t.bc(`Neg`,e,void 0)},1088272:e=>{t.bc(`Floor`,e,void 0)},1088325:e=>{t.bc(`Ceil`,e,void 0)},1088377:e=>{t.bc(`Reciprocal`,e,void 0)},1088435:e=>{t.bc(`Sqrt`,e,void 0)},1088487:e=>{t.bc(`Exp`,e,void 0)},1088538:e=>{t.bc(`Erf`,e,void 0)},1088589:e=>{t.bc(`Sigmoid`,e,void 0)},1088644:(e,n,r)=>{t.bc(`HardSigmoid`,e,{alpha:n,beta:r})},1088723:e=>{t.bc(`HardSwish`,e,void 0)},1088780:e=>{t.bc(`Log`,e,void 0)},1088831:e=>{t.bc(`Sin`,e,void 0)},1088882:e=>{t.bc(`Cos`,e,void 0)},1088933:e=>{t.bc(`Tan`,e,void 0)},1088984:e=>{t.bc(`Asin`,e,void 0)},1089036:e=>{t.bc(`Acos`,e,void 0)},1089088:e=>{t.bc(`Atan`,e,void 0)},1089140:e=>{t.bc(`Sinh`,e,void 0)},1089192:e=>{t.bc(`Cosh`,e,void 0)},1089244:e=>{t.bc(`Asinh`,e,void 0)},1089297:e=>{t.bc(`Acosh`,e,void 0)},1089350:e=>{t.bc(`Atanh`,e,void 0)},1089403:e=>{t.bc(`Tanh`,e,void 0)},1089455:e=>{t.bc(`Not`,e,void 0)},1089506:(e,n,r)=>{t.bc(`Clip`,e,{min:n,max:r})},1089575:e=>{t.bc(`Clip`,e,void 0)},1089627:(e,n)=>{t.bc(`Elu`,e,{alpha:n})},1089685:e=>{t.bc(`Gelu`,e,void 0)},1089737:e=>{t.bc(`Relu`,e,void 0)},1089789:(e,n)=>{t.bc(`LeakyRelu`,e,{alpha:n})},1089853:(e,n)=>{t.bc(`ThresholdedRelu`,e,{alpha:n})},1089923:(e,n)=>{t.bc(`Cast`,e,{to:n})},1089981:e=>{t.bc(`Add`,e,void 0)},1090032:e=>{t.bc(`Sub`,e,void 0)},1090083:e=>{t.bc(`Mul`,e,void 0)},1090134:e=>{t.bc(`Div`,e,void 0)},1090185:e=>{t.bc(`Pow`,e,void 0)},1090236:e=>{t.bc(`Equal`,e,void 0)},1090289:e=>{t.bc(`Greater`,e,void 0)},1090344:e=>{t.bc(`GreaterOrEqual`,e,void 0)},1090406:e=>{t.bc(`Less`,e,void 0)},1090458:e=>{t.bc(`LessOrEqual`,e,void 0)},1090517:(e,n,r,i,a)=>{t.bc(`ReduceMean`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),O).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1090692:(e,n,r,i,a)=>{t.bc(`ReduceMax`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),O).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1090866:(e,n,r,i,a)=>{t.bc(`ReduceMin`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),O).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1091040:(e,n,r,i,a)=>{t.bc(`ReduceProd`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),O).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1091215:(e,n,r,i,a)=>{t.bc(`ReduceSum`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),O).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1091389:(e,n,r,i,a)=>{t.bc(`ReduceL1`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),O).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1091562:(e,n,r,i,a)=>{t.bc(`ReduceL2`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),O).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1091735:(e,n,r,i,a)=>{t.bc(`ReduceLogSum`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),O).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1091912:(e,n,r,i,a)=>{t.bc(`ReduceSumSquare`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),O).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1092092:(e,n,r,i,a)=>{t.bc(`ReduceLogSumExp`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),O).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1092272:e=>{t.bc(`Where`,e,void 0)},1092325:(e,n,r)=>{t.bc(`Transpose`,e,{perm:n?Array.from((w(),O).subarray(Number(n)>>>0,Number(r)>>>0)):[]})},1092449:(e,n,r,i)=>{t.bc(`DepthToSpace`,e,{blocksize:n,mode:j(r),format:i?`NHWC`:`NCHW`})},1092582:(e,n,r,i)=>{t.bc(`DepthToSpace`,e,{blocksize:n,mode:j(r),format:i?`NHWC`:`NCHW`})},1092715:(e,n,r,i)=>{t.bc(`DFT`,e,{axis:n,inverse:r,onesided:i})},1092807:(e,n,r,i,a,o,s,c,l,u,d,f,p,m,h)=>{t.bc(`ConvTranspose`,e,{format:l?`NHWC`:`NCHW`,autoPad:n,dilations:[r],group:i,kernelShape:[a],pads:[o,s],strides:[c],wIsConst:()=>!!(w(),T)[u>>>0],outputPadding:d?Array.from((w(),O).subarray(Number(d)>>>0,Number(f)>>>0)):[],outputShape:p?Array.from((w(),O).subarray(Number(p)>>>0,Number(m)>>>0)):[],activation:j(h)})},1093240:(e,n,r,i,a,o,s,c,l,u,d,f,p,m)=>{t.bc(`ConvTranspose`,e,{format:c?`NHWC`:`NCHW`,autoPad:n,dilations:Array.from((w(),O).subarray(Number(r)>>>0,(Number(r)>>>0)+2>>>0)),group:i,kernelShape:Array.from((w(),O).subarray(Number(a)>>>0,(Number(a)>>>0)+2>>>0)),pads:Array.from((w(),O).subarray(Number(o)>>>0,(Number(o)>>>0)+4>>>0)),strides:Array.from((w(),O).subarray(Number(s)>>>0,(Number(s)>>>0)+2>>>0)),wIsConst:()=>!!(w(),T)[l>>>0],outputPadding:u?Array.from((w(),O).subarray(Number(u)>>>0,Number(d)>>>0)):[],outputShape:f?Array.from((w(),O).subarray(Number(f)>>>0,Number(p)>>>0)):[],activation:j(m)})},1093901:(e,n,r,i,a,o,s,c,l,u,d,f,p,m,h)=>{t.bc(`ConvTranspose`,e,{format:l?`NHWC`:`NCHW`,autoPad:n,dilations:[r],group:i,kernelShape:[a],pads:[o,s],strides:[c],wIsConst:()=>!!(w(),T)[u>>>0],outputPadding:d?Array.from((w(),O).subarray(Number(d)>>>0,Number(f)>>>0)):[],outputShape:p?Array.from((w(),O).subarray(Number(p)>>>0,Number(m)>>>0)):[],activation:j(h)})},1094334:(e,n,r,i,a,o,s,c,l,u,d,f,p,m)=>{t.bc(`ConvTranspose`,e,{format:c?`NHWC`:`NCHW`,autoPad:n,dilations:Array.from((w(),O).subarray(Number(r)>>>0,(Number(r)>>>0)+2>>>0)),group:i,kernelShape:Array.from((w(),O).subarray(Number(a)>>>0,(Number(a)>>>0)+2>>>0)),pads:Array.from((w(),O).subarray(Number(o)>>>0,(Number(o)>>>0)+4>>>0)),strides:Array.from((w(),O).subarray(Number(s)>>>0,(Number(s)>>>0)+2>>>0)),wIsConst:()=>!!(w(),T)[l>>>0],outputPadding:u?Array.from((w(),O).subarray(Number(u)>>>0,Number(d)>>>0)):[],outputShape:f?Array.from((w(),O).subarray(Number(f)>>>0,Number(p)>>>0)):[],activation:j(m)})},1094995:(e,n)=>{t.bc(`GlobalAveragePool`,e,{format:n?`NHWC`:`NCHW`})},1095086:(e,n,r,i,a,o,s,c,l,u,d,f,p,m)=>{t.bc(`AveragePool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:n,ceil_mode:r,count_include_pad:i,storage_order:a,dilations:o?Array.from((w(),O).subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from((w(),O).subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from((w(),O).subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from((w(),O).subarray(Number(f)>>>0,Number(p)>>>0)):[]})},1095565:(e,n)=>{t.bc(`GlobalAveragePool`,e,{format:n?`NHWC`:`NCHW`})},1095656:(e,n,r,i,a,o,s,c,l,u,d,f,p,m)=>{t.bc(`AveragePool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:n,ceil_mode:r,count_include_pad:i,storage_order:a,dilations:o?Array.from((w(),O).subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from((w(),O).subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from((w(),O).subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from((w(),O).subarray(Number(f)>>>0,Number(p)>>>0)):[]})},1096135:(e,n)=>{t.bc(`GlobalMaxPool`,e,{format:n?`NHWC`:`NCHW`})},1096222:(e,n,r,i,a,o,s,c,l,u,d,f,p,m)=>{t.bc(`MaxPool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:n,ceil_mode:r,count_include_pad:i,storage_order:a,dilations:o?Array.from((w(),O).subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from((w(),O).subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from((w(),O).subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from((w(),O).subarray(Number(f)>>>0,Number(p)>>>0)):[]})},1096697:(e,n)=>{t.bc(`GlobalMaxPool`,e,{format:n?`NHWC`:`NCHW`})},1096784:(e,n,r,i,a,o,s,c,l,u,d,f,p,m)=>{t.bc(`MaxPool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:n,ceil_mode:r,count_include_pad:i,storage_order:a,dilations:o?Array.from((w(),O).subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from((w(),O).subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from((w(),O).subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from((w(),O).subarray(Number(f)>>>0,Number(p)>>>0)):[]})},1097259:(e,n,r,i,a)=>{t.bc(`Gemm`,e,{alpha:n,beta:r,transA:i,transB:a})},1097363:e=>{t.bc(`MatMul`,e,void 0)},1097417:(e,n,r,i)=>{t.bc(`ArgMax`,e,{keepDims:!!n,selectLastIndex:!!r,axis:i})},1097525:(e,n,r,i)=>{t.bc(`ArgMin`,e,{keepDims:!!n,selectLastIndex:!!r,axis:i})},1097633:(e,n)=>{t.bc(`Softmax`,e,{axis:n})},1097696:(e,n)=>{t.bc(`Concat`,e,{axis:n})},1097756:(e,n,r,i,a)=>{t.bc(`Split`,e,{axis:n,numOutputs:r,splitSizes:i?Array.from((w(),O).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1097912:e=>{t.bc(`Expand`,e,void 0)},1097966:(e,n)=>{t.bc(`Gather`,e,{axis:Number(n)})},1098037:(e,n)=>{t.bc(`GatherElements`,e,{axis:Number(n)})},1098116:(e,n)=>{t.bc(`GatherND`,e,{batch_dims:Number(n)})},1098195:(e,n,r,i,a,o,s,c,l,u,d)=>{t.bc(`Resize`,e,{antialias:n,axes:r?Array.from((w(),O).subarray(Number(r)>>>0,Number(i)>>>0)):[],coordinateTransformMode:j(a),cubicCoeffA:o,excludeOutside:s,extrapolationValue:c,keepAspectRatioPolicy:j(l),mode:j(u),nearestMode:j(d)})},1098557:(e,n,r,i,a,o,s)=>{t.bc(`Slice`,e,{starts:n?Array.from((w(),O).subarray(Number(n)>>>0,Number(r)>>>0)):[],ends:i?Array.from((w(),O).subarray(Number(i)>>>0,Number(a)>>>0)):[],axes:o?Array.from((w(),O).subarray(Number(o)>>>0,Number(s)>>>0)):[]})},1098821:e=>{t.bc(`Tile`,e,void 0)},1098873:(e,n,r)=>{t.bc(`InstanceNormalization`,e,{epsilon:n,format:r?`NHWC`:`NCHW`})},1098987:(e,n,r)=>{t.bc(`InstanceNormalization`,e,{epsilon:n,format:r?`NHWC`:`NCHW`})},1099101:e=>{t.bc(`Range`,e,void 0)},1099154:(e,n)=>{t.bc(`Einsum`,e,{equation:j(n)})},1099235:(e,n,r,i,a)=>{t.bc(`Pad`,e,{mode:n,value:r,pads:i?Array.from((w(),O).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1099378:(e,n,r,i,a,o)=>{t.bc(`BatchNormalization`,e,{epsilon:n,momentum:r,spatial:!!a,trainingMode:!!i,format:o?`NHWC`:`NCHW`})},1099547:(e,n,r,i,a,o)=>{t.bc(`BatchNormalization`,e,{epsilon:n,momentum:r,spatial:!!a,trainingMode:!!i,format:o?`NHWC`:`NCHW`})},1099716:(e,n,r)=>{t.bc(`CumSum`,e,{exclusive:Number(n),reverse:Number(r)})},1099813:(e,n,r)=>{t.bc(`DequantizeLinear`,e,{axis:n,blockSize:r})},1099903:(e,n,r,i,a)=>{t.bc(`GridSample`,e,{align_corners:n,mode:j(r),padding_mode:j(i),format:a?`NHWC`:`NCHW`})},1100073:(e,n,r,i,a)=>{t.bc(`GridSample`,e,{align_corners:n,mode:j(r),padding_mode:j(i),format:a?`NHWC`:`NCHW`})},1100243:(e,n)=>{t.bc(`ScatterND`,e,{reduction:j(n)})},1100328:(e,n,r,i,a,o,s,c,l)=>{t.bc(`Attention`,e,{numHeads:n,isUnidirectional:r,maskFilterValue:i,scale:a,doRotary:o,qkvHiddenSizes:s?Array.from((w(),O).subarray(Number(c)>>>0,Number(c)+s>>>0)):[],pastPresentShareBuffer:!!l})},1100600:e=>{t.bc(`BiasAdd`,e,void 0)},1100655:e=>{t.bc(`BiasSplitGelu`,e,void 0)},1100716:e=>{t.bc(`FastGelu`,e,void 0)},1100772:(e,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)=>{t.bc(`Conv`,e,{format:f?`NHWC`:`NCHW`,auto_pad:n,dilations:r?Array.from((w(),O).subarray(Number(r)>>>0,Number(i)>>>0)):[],group:a,kernel_shape:o?Array.from((w(),O).subarray(Number(o)>>>0,Number(s)>>>0)):[],pads:c?Array.from((w(),O).subarray(Number(c)>>>0,Number(l)>>>0)):[],strides:u?Array.from((w(),O).subarray(Number(u)>>>0,Number(d)>>>0)):[],w_is_const:()=>!!(w(),T)[Number(p)>>>0],activation:j(m),activation_params:h?Array.from((w(),ne).subarray(Number(h)>>>0,Number(g)>>>0)):[]})},1101356:e=>{t.bc(`Gelu`,e,void 0)},1101408:(e,n,r,i,a,o,s,c,l)=>{t.bc(`GroupQueryAttention`,e,{numHeads:n,kvNumHeads:r,scale:i,softcap:a,doRotary:o,rotaryInterleaved:s,smoothSoftmax:c,localWindowSize:l})},1101625:(e,n,r,i)=>{t.bc(`LayerNormalization`,e,{axis:n,epsilon:r,simplified:!!i})},1101736:(e,n,r,i)=>{t.bc(`LayerNormalization`,e,{axis:n,epsilon:r,simplified:!!i})},1101847:(e,n,r,i,a,o)=>{t.bc(`MatMulNBits`,e,{k:n,n:r,accuracyLevel:i,bits:a,blockSize:o})},1101974:(e,n,r,i,a,o)=>{t.bc(`MultiHeadAttention`,e,{numHeads:n,isUnidirectional:r,maskFilterValue:i,scale:a,doRotary:o})},1102133:(e,n)=>{t.bc(`QuickGelu`,e,{alpha:n})},1102197:(e,n,r,i,a)=>{t.bc(`RotaryEmbedding`,e,{interleaved:!!n,numHeads:r,rotaryEmbeddingDim:i,scale:a})},1102336:(e,n,r)=>{t.bc(`SkipLayerNormalization`,e,{epsilon:n,simplified:!!r})},1102438:(e,n,r)=>{t.bc(`SkipLayerNormalization`,e,{epsilon:n,simplified:!!r})},1102540:(e,n,r,i)=>{t.bc(`GatherBlockQuantized`,e,{gatherAxis:n,quantizeAxis:r,blockSize:i})},1102661:e=>{t.Id(e)},1102695:(e,n)=>t.Kd(Number(e),Number(n),t.$c.Nd,t.$c.errors)};function Ri(e,n,r){return _n(async()=>{await t.Gd(Number(e),Number(n),Number(r))})}function zi(){return typeof wasmOffsetConverter<`u`}function Bi(e,t,n,r){var i=P();try{return ni(e,t,n,r)}catch(e){if(N(i),e!==e+0)throw e;M(1,0)}}function Vi(e,t,n){var r=P();try{return Qr(e,t,n)}catch(e){if(N(r),e!==e+0)throw e;M(1,0)}}function Hi(e){var t=P();try{Yr(e)}catch(e){if(N(t),e!==e+0)throw e;M(1,0)}}function Ui(e,t){var n=P();try{return Jr(e,t)}catch(e){if(N(n),e!==e+0)throw e;M(1,0)}}function Wi(e,t,n){var r=P();try{qr(e,t,n)}catch(e){if(N(r),e!==e+0)throw e;M(1,0)}}function Gi(e,t){var n=P();try{ri(e,t)}catch(e){if(N(n),e!==e+0)throw e;M(1,0)}}function Ki(e,t,n,r,i,a,o){var s=P();try{return ei(e,t,n,r,i,a,o)}catch(e){if(N(s),e!==e+0)throw e;M(1,0)}}function qi(e,t,n,r,i,a){var o=P();try{Xr(e,t,n,r,i,a)}catch(e){if(N(o),e!==e+0)throw e;M(1,0)}}function Ji(e,t,n,r){var i=P();try{ti(e,t,n,r)}catch(e){if(N(i),e!==e+0)throw e;M(1,0)}}function Yi(e,t,n,r,i){var a=P();try{Zr(e,t,n,r,i)}catch(e){if(N(a),e!==e+0)throw e;M(1,0)}}function Xi(e,t,n,r,i,a,o){var s=P();try{ai(e,t,n,r,i,a,o)}catch(e){if(N(s),e!==e+0)throw e;M(1,0)}}function Zi(e,t,n,r,i,a,o){var s=P();try{oi(e,t,n,r,i,a,o)}catch(e){if(N(s),e!==e+0)throw e;M(1,0)}}function Qi(e,t,n,r,i,a,o,s){var c=P();try{ui(e,t,n,r,i,a,o,s)}catch(e){if(N(c),e!==e+0)throw e;M(1,0)}}function $i(e,t,n,r,i){var a=P();try{return ii(e,t,n,r,i)}catch(e){if(N(a),e!==e+0)throw e;M(1,0)}}function ea(e,t,n){var r=P();try{return di(e,t,n)}catch(e){if(N(r),e!==e+0)throw e;M(1,0)}}function ta(e,t,n,r,i,a,o,s){var c=P();try{fi(e,t,n,r,i,a,o,s)}catch(e){if(N(c),e!==e+0)throw e;M(1,0)}}function na(e,t,n,r,i,a,o,s,c,l,u,d){var f=P();try{si(e,t,n,r,i,a,o,s,c,l,u,d)}catch(e){if(N(f),e!==e+0)throw e;M(1,0)}}function ra(e,t,n){var r=P();try{return pi(e,t,n)}catch(e){if(N(r),e!==e+0)throw e;return M(1,0),0n}}function ia(e,t,n,r,i,a,o,s,c){var l=P();try{$r(e,t,n,r,i,a,o,s,c)}catch(e){if(N(l),e!==e+0)throw e;M(1,0)}}function aa(e){var t=P();try{return mi(e)}catch(e){if(N(t),e!==e+0)throw e;M(1,0)}}function oa(e,t){var n=P();try{return Ai(e,t)}catch(e){if(N(n),e!==e+0)throw e;return M(1,0),0n}}function sa(e,t,n,r){var i=P();try{return hi(e,t,n,r)}catch(e){if(N(i),e!==e+0)throw e;M(1,0)}}function ca(e){var t=P();try{return gi(e)}catch(e){if(N(t),e!==e+0)throw e;return M(1,0),0n}}function la(e,t,n,r){var i=P();try{return Si(e,t,n,r)}catch(e){if(N(i),e!==e+0)throw e;M(1,0)}}function ua(e,t,n,r,i){var a=P();try{return Ci(e,t,n,r,i)}catch(e){if(N(a),e!==e+0)throw e;M(1,0)}}function da(e,t,n,r,i,a){var o=P();try{return wi(e,t,n,r,i,a)}catch(e){if(N(o),e!==e+0)throw e;M(1,0)}}function fa(e,t,n,r,i,a){var o=P();try{return ci(e,t,n,r,i,a)}catch(e){if(N(o),e!==e+0)throw e;M(1,0)}}function pa(e,t,n,r,i,a){var o=P();try{return Ti(e,t,n,r,i,a)}catch(e){if(N(o),e!==e+0)throw e;M(1,0)}}function ma(e,t,n,r,i,a,o,s){var c=P();try{return li(e,t,n,r,i,a,o,s)}catch(e){if(N(c),e!==e+0)throw e;M(1,0)}}function ha(e,t,n,r,i){var a=P();try{return Ei(e,t,n,r,i)}catch(e){if(N(a),e!==e+0)throw e;return M(1,0),0n}}function ga(e,t,n,r){var i=P();try{return Di(e,t,n,r)}catch(e){if(N(i),e!==e+0)throw e;M(1,0)}}function _a(e,t,n,r){var i=P();try{return Oi(e,t,n,r)}catch(e){if(N(i),e!==e+0)throw e;M(1,0)}}function va(e,t,n,r,i,a,o,s,c,l,u,d){var f=P();try{return ki(e,t,n,r,i,a,o,s,c,l,u,d)}catch(e){if(N(f),e!==e+0)throw e;M(1,0)}}function ya(e,t,n,r,i,a,o,s,c,l,u){var d=P();try{bi(e,t,n,r,i,a,o,s,c,l,u)}catch(e){if(N(d),e!==e+0)throw e;M(1,0)}}function ba(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){var g=P();try{xi(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}catch(e){if(N(g),e!==e+0)throw e;M(1,0)}}function xa(e,t,n){var r=P();try{return _i(e,t,n)}catch(e){if(N(r),e!==e+0)throw e;M(1,0)}}function Sa(e,t,n){var r=P();try{return vi(e,t,n)}catch(e){if(N(r),e!==e+0)throw e;M(1,0)}}function Ca(e,t,n,r){var i=P();try{yi(e,t,n,r)}catch(e){if(N(i),e!==e+0)throw e;M(1,0)}}function wa(){if(0<ge)_e=wa;else if(i)h?.(t),le();else{for(var e=he;0<e.length;)e.shift()(t);0<ge?_e=wa:(t.calledRun=!0,S||(le(),h?.(t)))}}return i||(Fi=await fe(),wa()),t.PTR_SIZE=4,se?t:new Promise((e,t)=>{h=e,g=t})}var Fa,Ia,La,Ra,za,F,Ba,Va,Ha,Ua,Wa,Ga,Ka,qa,Ja,Ya,Xa,Za,Qa,$a,eo,I,to,no,ro,io,ao,oo,so,co,lo,uo,fo,po,mo,ho,go,_o,vo,yo,bo,xo,So,Co,wo,To,Eo,Do,Oo,ko,Ao,jo,Mo,No,Po,Fo,Io,Lo,Ro,zo,Bo,Vo,Ho,Uo,Wo,Go,Ko,qo,Jo,Yo,Xo,Zo,Qo,$o,es,ts,ns,rs,is,as,os,ss,cs,ls,us,ds,fs,ps,ms,hs,gs,_s,vs,ys,bs,L,xs,Ss,Cs,R,ws,Ts,Es,Ds,Os,ks,As,js,Ms,Ns,Ps,Fs,Is,Ls,Rs,zs,Bs,Vs,z,Hs,Us,Ws,Gs,Ks,qs,Js,Ys,B,Xs,Zs,Qs,V,$s,ec,tc,nc,H,rc,ic,ac,oc,sc,cc,lc,uc,dc,fc,pc,mc,hc,gc,_c,vc,yc,bc,xc,Sc,Cc,wc,Tc,Ec,Dc,Oc,kc,Ac,jc,Mc,U,W,Nc,Pc,G,K,q,J,Fc,Ic,Lc,Y,Rc,X,Z,zc,Bc,Vc,Hc,Q,Uc,Wc,Gc,Kc,qc,Jc,Yc,Xc,Zc,Qc,$c,el,tl,nl,rl,il,al,ol,sl,cl,ll,ul,dl,fl,pl,ml,hl,gl,_l,vl,yl,bl,xl,Sl,Cl,wl,Tl,El,Dl,Ol,kl,Al,jl,Ml,Nl,Pl,Fl,Il,Ll,Rl,zl,Bl,Vl,Hl,Ul,Wl,Gl,Kl,ql,Jl,Yl,Xl,Zl,Ql,$l,eu,tu,nu,ru,iu,au,ou,su,cu,lu,uu,du,fu,pu,mu,hu,gu,_u,$,vu,yu,bu,xu,Su,Cu,wu,Tu,Eu,Du,Ou,ku,Au,ju,Mu,Nu,Pu,Fu,Iu,Lu,Ru,zu,Bu,Vu,Hu,Uu,Wu,Gu,Ku,qu,Ju,Yu,Xu,Zu,Qu,$u,ed,td,nd,rd,id,ad,od,sd,cd,ld,ud,dd,fd,pd,md,hd,gd,_d,vd,yd,bd,xd,Sd,Cd,wd,Td,Ed,Dd,Od,kd,Ad,jd,Md,Nd,Pd,Fd,Id,Ld,Rd,zd,Bd,Vd,Hd,Ud,Wd,Gd,Kd,qd,Jd,Yd,Xd,Zd,Qd,$d,ef,tf,nf,rf,af,of,sf,cf,lf,uf,df,ff,pf,mf,hf,gf,_f,vf,yf,bf,xf,Sf,Cf,wf,Tf,Ef,Df,Of,kf,Af,jf,Mf,Nf,Pf,Ff,If,Lf,Rf,zf,Bf,Vf,Hf,Uf,Wf,Gf,Kf,qf,Jf,Yf,Xf,Zf,Qf,$f,ep,tp,np,rp,ip,ap,op,sp,cp,lp,up,dp,fp,pp,mp,hp,gp,_p,vp,yp,bp,xp,Sp,Cp,wp,Tp,Ep,Dp,Op,kp,Ap,jp,Mp,Np,Pp,Fp,Ip,Lp,Rp,zp,Bp,Vp,Hp,Up,Wp,Gp,Kp,qp,Jp,Yp,Xp,Zp,Qp,$p,em,tm,nm,rm,im,am,om,sm,cm,lm,um,dm,fm,pm,mm,hm,gm,_m,vm,ym,bm,xm,Sm,Cm,wm,Tm,Em,Dm,Om,km,Am,jm,Mm,Nm,Pm,Fm,Im,Lm,Rm,zm,Bm,Vm,Hm,Um,Wm,Gm,Km,qm,Jm,Ym,Xm,Zm,Qm,$m,eh,th,nh,rh,ih,ah,oh,sh,ch,lh,uh,dh,fh,ph,mh,hh,gh,_h,vh,yh,bh,xh,Sh,Ch,wh,Th,Eh,Dh,Oh,kh,Ah,jh,Mh,Nh,Ph,Fh,Ih,Lh,Rh,zh,Bh,Vh,Hh,Uh,Wh,Gh,Kh,qh,Jh,Yh,Xh,Zh,Qh,$h,eg,tg,ng,rg,ig,ag,og,sg,cg,lg,ug,dg,fg,pg,mg,hg,gg,_g,vg,yg,bg,xg,Sg,Cg,wg,Tg,Eg,Dg,Og,kg,Ag,jg,Mg,Ng,Pg,Fg,Ig,Lg,Rg,zg,Bg,Vg,Hg,Ug,Wg,Gg,Kg,qg,Jg,Yg,Xg,Zg,Qg,$g,e_,t_,n_,r_,i_,a_,o_,s_,c_,l_,u_,d_,f_,p_,m_,h_,g_,__,v_,y_,b_,x_,S_,C_,w_,T_,E_,D_,O_,k_,A_,j_,M_,N_,P_,F_,I_,L_,R_,z_,B_,V_,H_,U_,W_,G_,K_,q_,J_,Y_,X_,Z_,Q_,$_,ev=t((()=>{Fa=Object.defineProperty,Ia=Object.getOwnPropertyDescriptor,La=Object.getOwnPropertyNames,Ra=Object.prototype.hasOwnProperty,za=(e=>typeof require<`u`?require:typeof Proxy<`u`?new Proxy(e,{get:(e,t)=>(typeof require<`u`?require:e)[t]}):e)(function(e){if(typeof require<`u`)return require.apply(this,arguments);throw Error(`Dynamic require of "`+e+`" is not supported`)}),F=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},Ba=(e,t)=>{for(var n in t)Fa(e,n,{get:t[n],enumerable:!0})},Va=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(let i of La(t))!Ra.call(e,i)&&i!==n&&Fa(e,i,{get:()=>t[i],enumerable:!(r=Ia(t,i))||r.enumerable});return e},Ha=e=>Va(Fa({},`__esModule`,{value:!0}),e),Ja=F(()=>{"use strict";Ua=/* @__PURE__ */ new Map,Wa=[],Ga=(e,t,n)=>{if(t&&typeof t.init==`function`&&typeof t.createInferenceSessionHandler==`function`){let r=Ua.get(e);if(r===void 0)Ua.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let t=Wa.indexOf(e);t!==-1&&Wa.splice(t,1);for(let t=0;t<Wa.length;t++)if(Ua.get(Wa[t]).priority<=n){Wa.splice(t,0,e);return}Wa.push(e)}}else throw TypeError(`not a valid backend`)},Ka=async e=>{let t=Ua.get(e);if(!t)return`backend not found.`;if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(e){return n||(t.error=`${e}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},qa=async e=>{let t=e.executionProviders||[],n=t.map(e=>typeof e==`string`?e:e.name),r=n.length===0?Wa:n,i,a=[],o=/* @__PURE__ */ new Set;for(let e of r){let t=await Ka(e);typeof t==`string`?a.push({name:e,err:t}):(i||=t,i===t&&o.add(e))}if(!i)throw Error(`no available backend found. ERR: ${a.map(e=>`[${e.name}] ${e.err}`).join(`, `)}`);for(let{name:e,err:t}of a)n.includes(e)&&console.warn(`removing requested execution provider "${e}" from session options because it is not available: ${t}`);let s=t.filter(e=>o.has(typeof e==`string`?e:e.name));return[i,new Proxy(e,{get:(e,t)=>t===`executionProviders`?s:Reflect.get(e,t)})]}}),Ya=F(()=>{"use strict";Ja()}),Za=F(()=>{"use strict";Xa=`1.30.0`}),eo=F(()=>{"use strict";Za(),Qa=`warning`,$a={wasm:{},webgl:{},webgpu:{},versions:{common:Xa},set logLevel(e){if(e!==void 0){if(typeof e!=`string`||[`verbose`,`info`,`warning`,`error`,`fatal`].indexOf(e)===-1)throw Error(`Unsupported logging level: ${e}`);Qa=e}},get logLevel(){return Qa}},Object.defineProperty($a,"logLevel",{enumerable:!0})}),to=F(()=>{"use strict";eo(),I=$a}),io=F(()=>{"use strict";no=(e,t)=>{let n=typeof document<`u`?document.createElement(`canvas`):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext(`2d`);if(r!=null){let i,a;t?.tensorLayout!==void 0&&t.tensorLayout===`NHWC`?(i=e.dims[2],a=e.dims[3]):(i=e.dims[3],a=e.dims[2]);let o=t?.format===void 0?`RGB`:t.format,s=t?.norm,c,l;s===void 0||s.mean===void 0?c=[255,255,255,255]:typeof s.mean==`number`?c=[s.mean,s.mean,s.mean,s.mean]:(c=[s.mean[0],s.mean[1],s.mean[2],0],s.mean[3]!==void 0&&(c[3]=s.mean[3])),s===void 0||s.bias===void 0?l=[0,0,0,0]:typeof s.bias==`number`?l=[s.bias,s.bias,s.bias,s.bias]:(l=[s.bias[0],s.bias[1],s.bias[2],0],s.bias[3]!==void 0&&(l[3]=s.bias[3]));let u=a*i,d=0,f=u,p=u*2,m=-1;o===`RGBA`?(d=0,f=u,p=u*2,m=u*3):o===`RGB`?(d=0,f=u,p=u*2):o===`RBG`&&(d=0,p=u,f=u*2);for(let t=0;t<a;t++)for(let n=0;n<i;n++){let i=(e.data[d++]-l[0])*c[0],a=(e.data[f++]-l[1])*c[1],o=(e.data[p++]-l[2])*c[2],s=m===-1?255:(e.data[m++]-l[3])*c[3];r.fillStyle=`rgba(`+i+`,`+a+`,`+o+`,`+s+`)`,r.fillRect(n,t,1,1)}if(`toDataURL`in n)return n.toDataURL();throw Error(`toDataURL is not supported`)}throw Error(`Can not access image data`)},ro=(e,t)=>{let n=typeof document<`u`?document.createElement(`canvas`).getContext(`2d`):new OffscreenCanvas(1,1).getContext(`2d`),r;if(n!=null){let i,a,o;t?.tensorLayout!==void 0&&t.tensorLayout===`NHWC`?(i=e.dims[2],a=e.dims[1],o=e.dims[3]):(i=e.dims[3],a=e.dims[2],o=e.dims[1]);let s=t!==void 0&&t.format!==void 0?t.format:`RGB`,c=t?.norm,l,u;c===void 0||c.mean===void 0?l=[255,255,255,255]:typeof c.mean==`number`?l=[c.mean,c.mean,c.mean,c.mean]:(l=[c.mean[0],c.mean[1],c.mean[2],255],c.mean[3]!==void 0&&(l[3]=c.mean[3])),c===void 0||c.bias===void 0?u=[0,0,0,0]:typeof c.bias==`number`?u=[c.bias,c.bias,c.bias,c.bias]:(u=[c.bias[0],c.bias[1],c.bias[2],0],c.bias[3]!==void 0&&(u[3]=c.bias[3]));let d=a*i;if(t!==void 0&&(t.format!==void 0&&o===4&&t.format!==`RGBA`||o===3&&t.format!==`RGB`&&t.format!==`BGR`))throw Error(`Tensor format doesn't match input tensor dims`);let f=0,p=1,m=2,h=3,g=0,_=d,v=d*2,y=-1;s===`RGBA`?(g=0,_=d,v=d*2,y=d*3):s===`RGB`?(g=0,_=d,v=d*2):s===`RBG`&&(g=0,v=d,_=d*2),r=n.createImageData(i,a);for(let t=0;t<a*i;f+=4,p+=4,m+=4,h+=4,t++)r.data[f]=(e.data[g++]-u[0])*l[0],r.data[p]=(e.data[_++]-u[1])*l[1],r.data[m]=(e.data[v++]-u[2])*l[2],r.data[h]=y===-1?255:(e.data[y++]-u[3])*l[3]}else throw Error(`Can not access image data`);return r}}),fo=F(()=>{"use strict";So(),ao=(e,t)=>{if(e===void 0)throw Error(`Image buffer must be defined`);if(t.height===void 0||t.width===void 0)throw Error(`Image height and width must be defined`);if(t.tensorLayout===`NHWC`)throw Error(`NHWC Tensor layout is not supported yet`);let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},a,o;a=typeof i.mean==`number`?[i.mean,i.mean,i.mean,i.mean]:[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],o=typeof i.bias==`number`?[i.bias,i.bias,i.bias,i.bias]:[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let s=t.format===void 0?`RGBA`:t.format,c=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:`RGB`,l=n*r,u=c===`RGBA`?new Float32Array(l*4):new Float32Array(l*3),d=4,f=0,p=1,m=2,h=3,g=0,_=l,v=l*2,y=-1;s===`RGB`&&(d=3,f=0,p=1,m=2,h=-1),c===`RGBA`?y=l*3:c===`RBG`?(g=0,v=l,_=l*2):c===`BGR`&&(v=0,_=l,g=l*2);for(let t=0;t<l;t++,f+=d,m+=d,p+=d,h+=d)u[g++]=(e[f]+o[0])/a[0],u[_++]=(e[p]+o[1])/a[1],u[v++]=(e[m]+o[2])/a[2],y!==-1&&h!==-1&&(u[y++]=(e[h]+o[3])/a[3]);return c===`RGBA`?new xo(`float32`,u,[1,4,n,r]):new xo(`float32`,u,[1,3,n,r])},oo=async(e,t)=>{let n=typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement,r=typeof ImageData<`u`&&e instanceof ImageData,i=typeof ImageBitmap<`u`&&e instanceof ImageBitmap,a=typeof e==`string`,o,s=t??{},c=()=>{if(typeof document<`u`)return document.createElement(`canvas`);if(typeof OffscreenCanvas<`u`)return new OffscreenCanvas(1,1);throw Error(`Canvas is not supported`)},l=e=>typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||e instanceof OffscreenCanvas?e.getContext(`2d`):null;if(n){let n=c();n.width=e.width,n.height=e.height;let r=l(n);if(r!=null){let n=e.height,i=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(n=t.resizedHeight,i=t.resizedWidth),t!==void 0){if(s=t,t.tensorFormat!==void 0)throw Error(`Image input config format must be RGBA for HTMLImageElement`);s.tensorFormat=`RGBA`,s.height=n,s.width=i}else s.tensorFormat=`RGBA`,s.height=n,s.width=i;r.drawImage(e,0,0),o=r.getImageData(0,0,i,n).data}else throw Error(`Can not access image data`)}else if(r){let n,r;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(n=t.resizedHeight,r=t.resizedWidth):(n=e.height,r=e.width),t!==void 0&&(s=t),s.format=`RGBA`,s.height=n,s.width=r,t!==void 0){let t=c();t.width=r,t.height=n;let i=l(t);if(i!=null)i.putImageData(e,0,0),o=i.getImageData(0,0,r,n).data;else throw Error(`Can not access image data`)}else o=e.data}else if(i){if(t===void 0)throw Error(`Please provide image config with format for Imagebitmap`);let n=c();n.width=e.width,n.height=e.height;let r=l(n);if(r!=null){let t=e.height,n=e.width;return r.drawImage(e,0,0,n,t),o=r.getImageData(0,0,n,t).data,s.height=t,s.width=n,ao(o,s)}throw Error(`Can not access image data`)}else{if(a)return new Promise((t,n)=>{let r=c(),i=l(r);if(!e||!i)return n();let a=new Image;a.crossOrigin=`Anonymous`,a.src=e,a.onload=()=>{r.width=a.width,r.height=a.height,i.drawImage(a,0,0,r.width,r.height);let e=i.getImageData(0,0,r.width,r.height);s.height=r.height,s.width=r.width,t(ao(e.data,s))}});throw Error(`Input data provided is not supported - aborted tensor creation`)}if(o!==void 0)return ao(o,s);throw Error(`Input data provided is not supported - aborted tensor creation`)},so=(e,t)=>{let{width:n,height:r,download:i,dispose:a}=t;return new xo({location:`texture`,type:`float32`,texture:e,dims:[1,r,n,4],download:i,dispose:a})},co=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new xo({location:`gpu-buffer`,type:n??`float32`,gpuBuffer:e,dims:r,download:i,dispose:a})},lo=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new xo({location:`ml-tensor`,type:n??`float32`,mlTensor:e,dims:r,download:i,dispose:a})},uo=(e,t,n)=>new xo({location:`cpu-pinned`,type:e,data:t,dims:n??[t.length]})}),_o=F(()=>{"use strict";po=/* @__PURE__ */ new Map([[`float32`,Float32Array],[`uint8`,Uint8Array],[`int8`,Int8Array],[`uint16`,Uint16Array],[`int16`,Int16Array],[`int32`,Int32Array],[`bool`,Uint8Array],[`float64`,Float64Array],[`uint32`,Uint32Array],[`int4`,Uint8Array],[`uint4`,Uint8Array]]),mo=/* @__PURE__ */ new Map([[Float32Array,`float32`],[Uint8Array,`uint8`],[Int8Array,`int8`],[Uint16Array,`uint16`],[Int16Array,`int16`],[Int32Array,`int32`],[Float64Array,`float64`],[Uint32Array,`uint32`]]),ho=!1,go=()=>{if(!ho){ho=!0;let e=typeof BigInt64Array<`u`&&BigInt64Array.from,t=typeof BigUint64Array<`u`&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<`u`&&n.from;e&&(po.set(`int64`,BigInt64Array),mo.set(BigInt64Array,`int64`)),t&&(po.set(`uint64`,BigUint64Array),mo.set(BigUint64Array,`uint64`)),r?(po.set(`float16`,n),mo.set(n,`float16`)):po.set(`float16`,Uint16Array)}}}),bo=F(()=>{"use strict";So(),vo=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!=`number`||!Number.isSafeInteger(r))throw TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},yo=(e,t)=>{switch(e.location){case`cpu`:return new xo(e.type,e.data,t);case`cpu-pinned`:return new xo({location:`cpu-pinned`,data:e.data,type:e.type,dims:t});case`texture`:return new xo({location:`texture`,texture:e.texture,type:e.type,dims:t});case`gpu-buffer`:return new xo({location:`gpu-buffer`,gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case`ml-tensor`:return new xo({location:`ml-tensor`,mlTensor:e.mlTensor,type:e.type,dims:t});default:throw Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),So=F(()=>{"use strict";io(),fo(),_o(),bo(),xo=class{constructor(e,t,n){go();let r,i;if(typeof e==`object`&&`location`in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case`cpu-pinned`:{let t=po.get(r);if(!t)throw TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof t))throw TypeError(`buffer should be of type ${t.name}`);this.cpuData=e.data;break}case`texture`:if(r!==`float32`)throw TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break;case`gpu-buffer`:if(r!==`float32`&&r!==`float16`&&r!==`int32`&&r!==`int64`&&r!==`uint32`&&r!==`uint8`&&r!==`bool`&&r!==`uint4`&&r!==`int4`)throw TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break;case`ml-tensor`:if(r!==`float32`&&r!==`float16`&&r!==`int32`&&r!==`int64`&&r!==`uint32`&&r!==`uint64`&&r!==`int8`&&r!==`uint8`&&r!==`bool`&&r!==`uint4`&&r!==`int4`)throw TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break;default:throw Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,o;if(typeof e==`string`){if(r=e,o=n,e===`string`){if(!Array.isArray(t))throw TypeError(`A string tensor's data must be a string array.`);a=t}else{let n=po.get(e);if(n===void 0)throw TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e===`float16`&&n===Uint16Array||e===`uint4`||e===`int4`)throw TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${n.name} as data.`);a=e===`uint64`||e===`int64`?n.from(t,BigInt):n.from(t)}else if(t instanceof n)a=t;else if(t instanceof Uint8ClampedArray){if(e===`uint8`)a=Uint8Array.from(t);else throw TypeError(`A Uint8ClampedArray tensor's data must be type of uint8`)}else if(e===`float16`&&t instanceof Uint16Array&&n!==Uint16Array)a=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw TypeError(`A ${r} tensor's data must be type of ${n}`)}}else if(o=t,Array.isArray(e)){if(e.length===0)throw TypeError(`Tensor type cannot be inferred from an empty array.`);let t=typeof e[0];if(t===`string`)r=`string`,a=e;else if(t===`boolean`)r=`bool`,a=Uint8Array.from(e);else throw TypeError(`Invalid element type of data array: ${t}.`)}else if(e instanceof Uint8ClampedArray)r=`uint8`,a=Uint8Array.from(e);else{let t=mo.get(e.constructor);if(t===void 0)throw TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=t,a=e}if(o===void 0)o=[a.length];else if(!Array.isArray(o))throw TypeError(`A tensor's dims must be a number array`);i=o,this.cpuData=a,this.dataLocation=`cpu`}let a=vo(i);if(this.cpuData&&a!==this.cpuData.length&&(r!==`uint4`&&r!==`int4`||Math.ceil(a/2)!==this.cpuData.length))throw Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=a}static async fromImage(e,t){return oo(e,t)}static fromTexture(e,t){return so(e,t)}static fromGpuBuffer(e,t){return co(e,t)}static fromMLTensor(e,t){return lo(e,t)}static fromPinnedBuffer(e,t,n){return uo(e,t,n)}toDataURL(e){return no(this,e)}toImageData(e){return ro(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw Error(`The data is not stored as a WebGL texture.`);return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw Error(`The data is not stored as a WebGPU buffer.`);return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw Error(`The data is not stored as a WebNN MLTensor.`);return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case`cpu`:case`cpu-pinned`:return this.data;case`texture`:case`gpu-buffer`:case`ml-tensor`:if(!this.downloader)throw Error(`The current tensor is not created with a specified data downloader.`);if(this.isDownloading)throw Error(`The current tensor is being downloaded.`);try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation=`cpu`,this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}default:throw Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw Error(`The current tensor is being downloaded.`);this.disposer&&=(this.disposer(),void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation=`none`}ensureValid(){if(this.dataLocation===`none`)throw Error(`The tensor is disposed.`)}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw Error(`Cannot reshape a tensor that owns GPU resource.`);return yo(this,e)}}}),wo=F(()=>{"use strict";So(),Co=xo}),jo=F(()=>{"use strict";eo(),To=(e,t)=>{(typeof $a.trace>`u`?!$a.wasm.trace:!$a.trace)||console.timeStamp(`${e}::ORT::${t}`)},Eo=(e,t)=>{let n=(/* @__PURE__ */ Error()).stack?.split(/\r\n|\r|\n/g)||[],r=!1;for(let i=0;i<n.length;i++){if(r&&!n[i].includes(`TRACE_FUNC`)){let r=`FUNC_${e}::${n[i].trim().split(` `)[1]}`;t&&(r+=`::${t}`),To(`CPU`,r);return}n[i].includes(`TRACE_FUNC`)&&(r=!0)}},Do=e=>{(typeof $a.trace>`u`?!$a.wasm.trace:!$a.trace)||Eo(`BEGIN`,e)},Oo=e=>{(typeof $a.trace>`u`?!$a.wasm.trace:!$a.trace)||Eo(`END`,e)},ko=e=>{(typeof $a.trace>`u`?!$a.wasm.trace:!$a.trace)||console.time(`ORT::${e}`)},Ao=e=>{(typeof $a.trace>`u`?!$a.wasm.trace:!$a.trace)||console.timeEnd(`ORT::${e}`)}}),No=F(()=>{"use strict";Ja(),wo(),jo(),Mo=class e{constructor(e){this.handler=e}async run(e,t,n){Do(),ko(`InferenceSession.run`);let r={},i={};if(typeof e!=`object`||!e||e instanceof Co||Array.isArray(e))throw TypeError(`'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.`);let a=!0;if(typeof t==`object`){if(t===null)throw TypeError(`Unexpected argument[1]: cannot be null.`);if(t instanceof Co)throw TypeError(`'fetches' cannot be a Tensor`);if(Array.isArray(t)){if(t.length===0)throw TypeError(`'fetches' cannot be an empty array.`);a=!1;for(let e of t){if(typeof e!=`string`)throw TypeError(`'fetches' must be a string array or an object.`);if(this.outputNames.indexOf(e)===-1)throw RangeError(`'fetches' contains invalid output name: ${e}.`);r[e]=null}if(typeof n==`object`&&n)i=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else{let e=!1,o=Object.getOwnPropertyNames(t);for(let n of this.outputNames)if(o.indexOf(n)!==-1){let i=t[n];(i===null||i instanceof Co)&&(e=!0,a=!1,r[n]=i)}if(e){if(typeof n==`object`&&n)i=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else i=t}}else if(typeof t<`u`)throw TypeError(`Unexpected argument[1]: must be 'fetches' or 'options'.`);for(let t of this.inputNames)if(typeof e[t]>`u`)throw Error(`input '${t}' is missing in 'feeds'.`);if(a)for(let e of this.outputNames)r[e]=null;let o=await this.handler.run(e,r,i),s={};for(let e in o)if(Object.hasOwnProperty.call(o,e)){let t=o[e];s[e]=t instanceof Co?t:new Co(t.type,t.data,t.dims)}return Ao(`InferenceSession.run`),Oo(),s}async release(){return this.handler.dispose()}static async create(t,n,r,i){Do(),ko(`InferenceSession.create`);let a,o={};if(typeof t==`string`){if(a=t,typeof n==`object`&&n)o=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else if(t instanceof Uint8Array){if(a=t,typeof n==`object`&&n)o=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<`u`&&t instanceof SharedArrayBuffer){let e=t,s=0,c=t.byteLength;if(typeof n==`object`&&n)o=n;else if(typeof n==`number`){if(s=n,!Number.isSafeInteger(s))throw RangeError(`'byteOffset' must be an integer.`);if(s<0||s>=e.byteLength)throw RangeError(`'byteOffset' is out of range [0, ${e.byteLength}).`);if(c=t.byteLength-s,typeof r==`number`){if(c=r,!Number.isSafeInteger(c))throw RangeError(`'byteLength' must be an integer.`);if(c<=0||s+c>e.byteLength)throw RangeError(`'byteLength' is out of range (0, ${e.byteLength-s}].`);if(typeof i==`object`&&i)o=i;else if(typeof i<`u`)throw TypeError(`'options' must be an object.`)}else if(typeof r<`u`)throw TypeError(`'byteLength' must be a number.`)}else if(typeof n<`u`)throw TypeError(`'options' must be an object.`);a=new Uint8Array(e,s,c)}else throw TypeError(`Unexpected argument[0]: must be 'path' or 'buffer'.`);let[s,c]=await qa(o),l=await s.createInferenceSessionHandler(a,c);return Ao(`InferenceSession.create`),Oo(),new e(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Fo=F(()=>{"use strict";No(),Po=Mo}),Io=F(()=>{"use strict";}),Lo=F(()=>{"use strict";}),Ro=F(()=>{"use strict";}),zo=F(()=>{"use strict";}),Bo={},Ba(Bo,{InferenceSession:()=>Po,TRACE:()=>To,TRACE_EVENT_BEGIN:()=>ko,TRACE_EVENT_END:()=>Ao,TRACE_FUNC_BEGIN:()=>Do,TRACE_FUNC_END:()=>Oo,Tensor:()=>Co,env:()=>I,registerBackend:()=>Ga}),Vo=F(()=>{"use strict";Ya(),to(),Fo(),wo(),Io(),Lo(),jo(),Ro(),zo()}),Ho=F(()=>{"use strict";}),Uo={},Ba(Uo,{default:()=>Ko}),qo=F(()=>{"use strict";C_(),xs(),fs(),Wo=`ort-wasm-proxy-worker`,Go=globalThis.self?.name===Wo,Go&&(self.onmessage=e=>{let{type:t,in:n}=e.data;try{switch(t){case`init-wasm`:bs(n.wasm).then(()=>{d_(n).then(()=>{postMessage({type:t})},e=>{postMessage({type:t,err:e})})},e=>{postMessage({type:t,err:e})});break;case`init-ep`:{let{epName:e,env:r}=n;f_(r,e).then(()=>{postMessage({type:t})},e=>{postMessage({type:t,err:e})});break}case`copy-from`:{let{buffer:e}=n,r=g_(e);postMessage({type:t,out:r});break}case`create`:{let{model:e,options:r}=n;__(e,r).then(e=>{postMessage({type:t,out:e})},e=>{postMessage({type:t,err:e})});break}case`release`:v_(n),postMessage({type:t});break;case`run`:{let{sessionId:e,inputIndices:r,inputs:i,outputIndices:a,options:o}=n;b_(e,r,i,a,Array(a.length).fill(null),o).then(e=>{e.some(e=>e[3]!==`cpu`)?postMessage({type:t,err:`Proxy does not support non-cpu tensor location.`}):postMessage({type:t,out:e},S_([...i,...e]))},e=>{postMessage({type:t,err:e})});break}case`end-profiling`:x_(n),postMessage({type:t})}}catch(e){postMessage({type:t,err:e})}}),Ko=Go?null:e=>new Worker(e??ts,{type:`module`,name:Wo})}),Jo={},Ba(Jo,{default:()=>Yo}),Zo=F(()=>{"use strict";Yo=Pa,Xo=globalThis.self?.name?.startsWith(`em-pthread`),Xo&&Pa()}),fs=F(()=>{"use strict";Ho(),Qo=typeof location>`u`?void 0:location.origin,$o=self.location.href>`file:`&&self.location.href<`file;`,es=()=>$o?new URL(new URL(`ort.bundle.min.mjs`,self.location.href).href,Qo).href:self.location.href,ts=es(),ns=()=>{if(ts&&!ts.startsWith(`blob:`))return ts.substring(0,ts.lastIndexOf(`/`)+1)},rs=(e,t)=>{try{let n=t??ts;return(n?new URL(e,n):new URL(e)).origin===Qo}catch{return!1}},is=(e,t)=>{let n=t??ts;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},as=(e,t)=>`${t??`./`}${e}`,os=async e=>{let t=await(await fetch(e,{credentials:`same-origin`})).blob();return URL.createObjectURL(t)},ss=async e=>(await import(
/*webpackIgnore:true*/
/*@vite-ignore*/
e)).default,cs=(qo(),Ha(Uo)).default,ls=async()=>{if(!ts)throw Error(`Failed to load proxy worker: cannot determine the script source URL.`);if(rs(ts))return[void 0,cs()];let e=await os(ts);return[e,cs(e)]},us=(Zo(),Ha(Jo)).default,ds=async(e,t,n,r)=>{let i=us&&!(e||t);if(i){if(ts)i=rs(ts)||r&&!n;else if(r&&!n)i=!0;else throw Error(`cannot determine the script source URL.`)}if(i)return[void 0,us];{let r=`ort-wasm-simd-threaded.jsep.mjs`,i=e??is(r,t),a=n&&i&&!rs(i,t),o=a?await os(i):i??as(r,t);return[a?o:void 0,await ss(o)]}}}),xs=F(()=>{"use strict";fs(),ms=!1,hs=!1,gs=!1,_s=()=>{if(typeof SharedArrayBuffer>`u`)return!1;try{return typeof MessageChannel<`u`&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},vs=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},ys=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},bs=async e=>{if(ms)return Promise.resolve();if(hs)throw Error(`multiple calls to 'initializeWebAssembly()' detected.`);if(gs)throw Error(`previous call to 'initializeWebAssembly()' failed.`);hs=!0;let t=e.initTimeout,n=e.numThreads;if(e.simd!==!1){if(e.simd===`relaxed`){if(!ys())throw Error(`Relaxed WebAssembly SIMD is not supported in the current environment.`)}else if(!vs())throw Error(`WebAssembly SIMD is not supported in the current environment.`)}let r=_s();n>1&&!r&&(typeof self<`u`&&!self.crossOriginIsolated&&console.warn(`env.wasm.numThreads is set to `+n+`, but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info.`),console.warn(`WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading.`),e.numThreads=n=1);let i=e.wasmPaths,a=typeof i==`string`?i:void 0,o=i?.mjs,s=o?.href??o,c=i?.wasm,l=c?.href??c,u=e.wasmBinary,[d,f]=await ds(s,a,n>1,!!u||!!l),p=!1,m=[];if(t>0&&m.push(new Promise(e=>{setTimeout(()=>{p=!0,e()},t)})),m.push(new Promise((e,t)=>{let r={numThreads:n};if(u)r.wasmBinary=u,r.locateFile=e=>e;else if(l||a)r.locateFile=e=>l??a+e;else if(s&&s.indexOf(`blob:`)!==0)r.locateFile=e=>new URL(e,s).href;else if(d){let e=ns();e&&(r.locateFile=t=>e+t)}f(r).then(t=>{hs=!1,ms=!0,ps=t,e(),d&&URL.revokeObjectURL(d)},e=>{hs=!1,gs=!0,t(e)})})),await Promise.race(m),p)throw Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},L=()=>{if(ms&&ps)return ps;throw Error(`WebAssembly is not initialized yet.`)}}),ws=F(()=>{"use strict";xs(),Ss=(e,t)=>{let n=L(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},Cs=(e,t,n,r)=>{if(typeof e==`object`&&e){if(n.has(e))throw Error(`Circular reference in options`);n.add(e)}Object.entries(e).forEach(([e,i])=>{let a=t?t+e:e;if(typeof i==`object`)Cs(i,a+`.`,n,r);else if(typeof i==`string`||typeof i==`number`)r(a,i.toString());else if(typeof i==`boolean`)r(a,i?`1`:`0`);else throw Error(`Can't handle extra config type: ${typeof i}`)})},R=e=>{let t=L(),n=t.stackSave();try{let n=t.PTR_SIZE,r=t.stackAlloc(2*n);t._OrtGetLastError(r,r+n);let i=Number(t.getValue(r,n===4?`i32`:`i64`)),a=t.getValue(r+n,`*`),o=a?t.UTF8ToString(a):``;throw Error(`${e} ERROR_CODE: ${i}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(n)}}}),Es=F(()=>{"use strict";xs(),ws(),Ts=e=>{let t=L(),n=0,r=[],i=e||{};try{if(e?.logSeverityLevel===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!=`number`||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw Error(`log severity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!=`number`||!Number.isInteger(e.logVerbosityLevel))throw Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(i.terminate=!1);let a=0;return e?.tag!==void 0&&(a=Ss(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,a),n===0&&R(`Can't create run options.`),e?.extra!==void 0&&Cs(e.extra,``,/* @__PURE__ */ new WeakSet,(e,i)=>{let a=Ss(e,r),o=Ss(i,r);t._OrtAddRunConfigEntry(n,a,o)!==0&&R(`Can't set a run config entry: ${e} - ${i}.`)}),[n,r]}catch(e){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(e=>t._free(e)),e}}}),Ns=F(()=>{"use strict";xs(),ws(),Ds=e=>{switch(e){case`disabled`:return 0;case`basic`:return 1;case`extended`:return 2;case`layout`:return 3;case`all`:return 99;default:throw Error(`unsupported graph optimization level: ${e}`)}},Os=e=>{switch(e){case`sequential`:return 0;case`parallel`:return 1;default:throw Error(`unsupported execution mode: ${e}`)}},ks=e=>{e.extra||={},e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||=`1`,e.executionProviders&&e.executionProviders.some(e=>(typeof e==`string`?e:e.name)===`webgpu`)&&(e.enableMemPattern=!1)},As=(e,t,n,r)=>{let i=Ss(t,r),a=Ss(n,r);L()._OrtAddSessionConfigEntry(e,i,a)!==0&&R(`Can't set a session config entry: ${t} - ${n}.`)},js=async(e,t,n)=>{let r=t.executionProviders;for(let t of r){let r=typeof t==`string`?t:t.name,i=[];switch(r){case`webnn`:if(r=`WEBNN`,As(e,`session.disable_quant_qdq`,`1`,n),As(e,`session.disable_qdq_constant_folding`,`1`,n),typeof t!=`string`){let r=t?.deviceType;r&&As(e,`deviceType`,r,n)}break;case`webgpu`:if(r=`JS`,typeof t!=`string`){let r=t;if(r?.preferredLayout){if(r.preferredLayout!==`NCHW`&&r.preferredLayout!==`NHWC`)throw Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${r.preferredLayout}`);As(e,`preferredLayout`,r.preferredLayout,n)}}break;case`wasm`:case`cpu`:continue;default:throw Error(`not supported execution provider: ${r}`)}let a=Ss(r,n),o=i.length,s=0,c=0;if(o>0){s=L()._malloc(o*L().PTR_SIZE),n.push(s),c=L()._malloc(o*L().PTR_SIZE),n.push(c);for(let e=0;e<o;e++)L().setValue(s+e*L().PTR_SIZE,i[e][0],`*`),L().setValue(c+e*L().PTR_SIZE,i[e][1],`*`)}await L()._OrtAppendExecutionProvider(e,a,s,c,o)!==0&&R(`Can't append execution provider: ${r}.`)}},Ms=async e=>{let t=L(),n=0,r=[],i=e||{};ks(i);try{let e=Ds(i.graphOptimizationLevel??`all`),a=Os(i.executionMode??`sequential`),o=typeof i.logId==`string`?Ss(i.logId,r):0,s=i.logSeverityLevel??2;if(!Number.isInteger(s)||s<0||s>4)throw Error(`log severity level is not valid: ${s}`);let c=i.logVerbosityLevel??0;if(!Number.isInteger(c)||c<0||c>4)throw Error(`log verbosity level is not valid: ${c}`);let l=typeof i.optimizedModelFilePath==`string`?Ss(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(e,!!i.enableCpuMemArena,!!i.enableMemPattern,a,!!i.enableProfiling,0,o,s,c,l),n===0&&R(`Can't create session options.`),i.executionProviders&&await js(n,i,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!=`boolean`)throw Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);As(n,`enableGraphCapture`,i.enableGraphCapture.toString(),r)}if(i.freeDimensionOverrides)for(let[e,a]of Object.entries(i.freeDimensionOverrides)){if(typeof e!=`string`)throw Error(`free dimension override name must be a string: ${e}`);if(typeof a!=`number`||!Number.isInteger(a)||a<0)throw Error(`free dimension override value must be a non-negative integer: ${a}`);let i=Ss(e,r);t._OrtAddFreeDimensionOverride(n,i,a)!==0&&R(`Can't set a free dimension override: ${e} - ${a}.`)}return i.extra!==void 0&&Cs(i.extra,``,/* @__PURE__ */ new WeakSet,(e,t)=>{As(n,e,t,r)}),[n,r]}catch(e){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&R(`Can't release session options.`),r.forEach(e=>t._free(e)),e}}}),z=F(()=>{"use strict";Ps=e=>{switch(e){case`int8`:return 3;case`uint8`:return 2;case`bool`:return 9;case`int16`:return 5;case`uint16`:return 4;case`int32`:return 6;case`uint32`:return 12;case`float16`:return 10;case`float32`:return 1;case`float64`:return 11;case`string`:return 8;case`int64`:return 7;case`uint64`:return 13;case`int4`:return 22;case`uint4`:return 21;default:throw Error(`unsupported data type: ${e}`)}},Fs=e=>{switch(e){case 3:return`int8`;case 2:return`uint8`;case 9:return`bool`;case 5:return`int16`;case 4:return`uint16`;case 6:return`int32`;case 12:return`uint32`;case 10:return`float16`;case 1:return`float32`;case 11:return`float64`;case 8:return`string`;case 7:return`int64`;case 13:return`uint64`;case 22:return`int4`;case 21:return`uint4`;default:throw Error(`unsupported data type: ${e}`)}},Is=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t==`number`?t:t.reduce((e,t)=>e*t,1);return n>0?Math.ceil(r*n):void 0},Ls=e=>{switch(e){case`float16`:return typeof Float16Array<`u`?Float16Array:Uint16Array;case`float32`:return Float32Array;case`uint8`:return Uint8Array;case`int8`:return Int8Array;case`uint16`:return Uint16Array;case`int16`:return Int16Array;case`int32`:return Int32Array;case`bool`:return Uint8Array;case`float64`:return Float64Array;case`uint32`:return Uint32Array;case`int64`:return BigInt64Array;case`uint64`:return BigUint64Array;default:throw Error(`unsupported type: ${e}`)}},Rs=e=>{switch(e){case`verbose`:return 0;case`info`:return 1;case`warning`:return 2;case`error`:return 3;case`fatal`:return 4;default:throw Error(`unsupported logging level: ${e}`)}},zs=e=>e===`float32`||e===`float16`||e===`int32`||e===`int64`||e===`uint32`||e===`uint8`||e===`bool`||e===`uint4`||e===`int4`,Bs=e=>e===`float32`||e===`float16`||e===`int32`||e===`int64`||e===`uint32`||e===`uint64`||e===`int8`||e===`uint8`||e===`bool`||e===`uint4`||e===`int4`,Vs=e=>{switch(e){case`none`:return 0;case`cpu`:return 1;case`cpu-pinned`:return 2;case`texture`:return 3;case`gpu-buffer`:return 4;case`ml-tensor`:return 5;default:throw Error(`unsupported data location: ${e}`)}}}),Us=F(()=>{"use strict";Ho(),Hs=async e=>{if(typeof e==`string`){let t=await fetch(e);if(!t.ok)throw Error(`failed to load external data file: ${e}`);let n=t.headers.get(`Content-Length`),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),i;try{i=new ArrayBuffer(r)}catch(e){if(e instanceof RangeError){let e=Math.ceil(r/65536);i=new WebAssembly.Memory({initial:e,maximum:e}).buffer}else throw e}let a=0;for(;;){let{done:e,value:t}=await n.read();if(e)break;let r=t.byteLength;new Uint8Array(i,a,r).set(t),a+=r}return new Uint8Array(i,0,r)}}return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Xs=F(()=>{"use strict";z(),Ws=[`V`,`I`,`W`,`E`,`F`],Gs=(e,t)=>{console.log(`[${Ws[e]},${(/* @__PURE__ */ new Date()).toISOString()}]${t}`)},Js=(e,t)=>{Ks=e,qs=t},Ys=(e,t)=>{let n=Rs(e);n>=Rs(Ks)&&Gs(n,typeof t==`function`?t():t)},B=(...e)=>{qs&&Ys(...e)}}),H=F(()=>{"use strict";Zs=class{static calcMatMulShape(e,t){return e[1]===t[0]?[e[0],t[1]]:void 0}},Qs=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let a=Math.max(e.length,t.length),o=Array(a);if(n){if(r<2||i<2)return;let n=Zs.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(n===void 0)return;[o[a-2],o[a-1]]=n}for(let s=n?3:1;s<=a;s++){let n=r-s<0?1:e[r-s],c=i-s<0?1:t[i-s];if(n!==c&&n>1&&c>1)return;let l=Math.max(n,c);if(n&&c)o[a-s]=Math.max(n,c);else{if(l>1)return;o[a-s]=0}}return o}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},V=class e{static size(t){return e.getSizeFromDimensionRange(t,0,t.length)}static convertShape(e,t=4){let n=e.length;if(n===0)return[];let r=Array(n),i=n-1;for(;i>=0;){if(e[i]%t===0){r[i]=e[i]/t;break}if(t%e[i]!==0)throw Error(`cannot convert shape`);r[i]=1,t/=e[i],i--}for(i--;i>=0;i--)r[i]=e[i];return r}static sizeFromDimension(t,n){if(n<0||n>t.length)throw Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return e.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return e.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(e,t,n){let r=1;for(let i=t;i<n;i++){if(e[i]<0)throw Error(`cannot get valid size from specified dimension range. Most likely the range contains negative values in them.`);r*=Number(e[i])}return r}static computeStrides(e){let t=e.length;if(t===0)return[];if(t===1)return[1];let n=Array(t);n[t-1]=1,n[t-2]=e[t-1];for(let r=t-3;r>=0;--r)n[r]=n[r+1]*e[r+1];return n}static normalizeAxis(e,t){if(e<-t&&e>=t)throw Error(`unsupported axis for this operation.`);return e<0?e+t:e}static normalizeAxes(e,t){return e.map(n=>this.normalizeAxis(n,t??e.length))}static sortBasedOnPerm(e,t){return t?t.map(t=>e[t]):e.slice().reverse()}static padShape(e,t){let n=e.length;return e.map((e,r)=>e+t[r]+t[r+n])}static areEqual(e,t){return e.length===t.length&&e.every((e,n)=>e===t[n])}},$s=class e{static adjustPoolAttributes(e,t,n,r,i,a){if(!e&&n.length!==t.length-2)throw Error(`length of specified kernel shapes should be 2 less than length of input dimensions`);if(e)for(let e=0;e<t.length-2;e++)e>=n.length?n.push(t[e+2]):n[e]=t[e+2];for(let e=0;e<n.length;e++)if(e<r.length){if(r[e]<0)throw Error(`strides should be greater than or equal to 1`)}else r.push(1);for(let e=0;e<n.length;e++)if(e<i.length){if(i[e]<0)throw Error(`dilations should be greater than or equal to 1`)}else i.push(1);for(let e=0;e<n.length*2;e++)if(e<a.length){if(a[e]<0)throw Error(`pad should be greater than or equal to 1`)}else a.push(0);for(let e=0;e<n.length;e++){if(n[e]<=0)throw Error(`kernel shapes need to be greater than 0`);if(a[e]>=n[e]||a[e+n.length]>=n[e])throw Error(`pads should be smaller than kernel`)}}static adjustPadsBasedOnAutoPad(t,n,r,i,a,o,s){if(s){if(a.length!==2*(t.length-2))throw Error(`length of pads should be twice the length of data dimensions`);if(n.length!==t.length-2)throw Error(`length of strides should be the length of data dimensions`);if(i.length!==t.length-2)throw Error(`length of kernel shapes should be the length of data dimensions`);for(let c=0;c<t.length-2;c++)e.adjustPadAndReturnShape(t[c+(o?1:2)],n[c],r[c],i[c],a,c,c+t.length-2,s)}}static computePoolOutputShape(t,n,r,i,a,o,s,c=0){if(n.length<=0)throw Error(`input shape must be of size greater than 0`);let l=[n[0],n[1]];return e.computeShapeHelper(t,n,l,r,i,a,o,s,c),l}static computeConvOutputShape(t,n,r,i,a,o,s){if(t.length<=0||n.length<=0)throw Error(`invalid input tensor dims or invalid filter tensor dims`);let c=[t[0],n[0]];return e.computeShapeHelper(!1,t,c,r,i,a,o,s),c}static computeShapeHelper(t,n,r,i,a,o,s,c,l=0){if(t)for(let e=0;e<n.length-2;e++)r.push(1);else for(let t=0;t<n.length-2;t++)r.push(e.adjustPadAndReturnShape(n[t+2],i[t],a[t],o[t],s,t,t+n.length-2,c,l))}static computeOutputSize(e,t,n,r,i){let a=Math.floor(e/t)+1;return i===1&&(a=Math.ceil(e/t)+1,(a-1)*t>=n+r&&--a),a}static adjustPadAndReturnShape(t,n,r,i,a,o,s,c,l=0){let u=r*(i-1)+1;if(c&&c!==`NOTSET`)switch(c){case`VALID`:return a[o]=0,a[s]=0,e.computeOutputSize(t-u,n,t,0,l);case`SAME_LOWER`:case`SAME_UPPER`:if(r!==1)throw Error(`Dilation not supported for SAME_UPPER or SAME_LOWER`);{let r=(Math.floor((t+n-1)/n)-1)*n+i-t;return a[o]=Math.floor(c===`SAME_LOWER`?(r+1)/2:r/2),a[s]=r-a[o],e.computeOutputSize(t+a[o]+a[s]-u,n,t,a[o],l)}default:throw Error(`Unsupported AutoPad type`)}else return e.computeOutputSize(t+a[o]+a[s]-u,n,t,a[o],l)}},ec=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw Error(`shape need to be of size 2`);let a,o,s;t?(a=e[1],o=e[0]):(a=e[0],o=e[1]);let c=-1;if(r?(s=n[0],c=1):(s=n[1],c=0),n[c]!==o)throw Error(`dimension mismatch`);if(a<=0||s<=0||o<=0)throw Error(`invalid shape specified`);if(i&&!Qs.isValidBroadcast(i,[a,s]))throw Error(`gemm: invalid bias shape for broadcast`);return[a,s,o]}},tc=-34028234663852886e22,nc=34028234663852886e22}),ic=F(()=>{"use strict";z(),rc=(e,t)=>new(Ls(t))(e)}),gc=F(()=>{"use strict";z(),Xs(),ac=/* @__PURE__ */ new Map([[`float32`,32],[`float16`,16],[`int32`,32],[`uint32`,32],[`int64`,64],[`uint64`,64],[`int8`,8],[`uint8`,8],[`int4`,4],[`uint4`,4]]),oc=(e,t)=>{if(t===`int32`)return e;let n=ac.get(t);if(!n)throw Error(`WebNN backend does not support data type: ${t}`);let r=n/8;if(e.byteLength%r!==0)throw Error(`Invalid Uint8Array length - must be a multiple of ${r}.`);let i=e.byteLength/r,a=new(Ls(t))(e.buffer,e.byteOffset,i);switch(t){case`int64`:case`uint64`:{let e=new Int32Array(i);for(let t=0;t<i;t++){let n=a[t];if(n>2147483647n||n<-2147483648n)throw Error(`Can not convert int64 data to int32 - value out of range.`);e[t]=Number(n)}return new Uint8Array(e.buffer)}case`int8`:case`uint8`:case`uint32`:{if(t===`uint32`&&a.some(e=>e>2147483647))throw Error(`Can not convert uint32 data to int32 - value out of range.`);let e=Int32Array.from(a,Number);return new Uint8Array(e.buffer)}default:throw Error(`Unsupported data conversion from ${t} to 'int32'`)}},sc=(e,t)=>{if(t===`int32`)return e;if(e.byteLength%4!=0)throw Error(`Invalid Uint8Array length - must be a multiple of 4 (int32).`);let n=e.byteLength/4,r=new Int32Array(e.buffer,e.byteOffset,n);switch(t){case`int64`:{let e=BigInt64Array.from(r,BigInt);return new Uint8Array(e.buffer)}case`uint64`:{if(r.some(e=>e<0))throw Error(`Can not convert int32 data to uin64 - negative value found.`);let e=BigUint64Array.from(r,BigInt);return new Uint8Array(e.buffer)}case`int8`:{if(r.some(e=>e<-128||e>127))throw Error(`Can not convert int32 data to int8 - value out of range.`);let e=Int8Array.from(r,Number);return new Uint8Array(e.buffer)}case`uint8`:if(r.some(e=>e<0||e>255))throw Error(`Can not convert int32 data to uint8 - value out of range.`);return Uint8Array.from(r,Number);case`uint32`:{if(r.some(e=>e<0))throw Error(`Can not convert int32 data to uint32 - negative value found.`);let e=Uint32Array.from(r,Number);return new Uint8Array(e.buffer)}default:throw Error(`Unsupported data conversion from 'int32' to ${t}`)}},cc=1,lc=()=>cc++,uc=/* @__PURE__ */ new Map([[`int8`,`int32`],[`uint8`,`int32`],[`uint32`,`int32`],[`int64`,`int32`]]),dc=(e,t)=>{let n=ac.get(e);if(!n)throw Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((e,t)=>e*t)*n/8):0},fc=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:n,tensor:r,dataType:i,shape:a,fallbackDataType:o}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=r,this.dataType=i,this.tensorShape=a,this.fallbackDataType=o}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return dc(this.dataType,this.tensorShape)}destroy(){B(`verbose`,()=>`[WebNN] TensorWrapper.destroy`),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),n=sc(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}return new Uint8Array(n).buffer}return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((e,t)=>e===n[t])}setIsDataConverted(e){this.isDataConverted=e}},pc=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),o;if(!a?.input.dataTypes.includes(t)){if(o=uc.get(t),!o||!a?.input.dataTypes.includes(o))throw Error(`WebNN backend does not support data type: ${t}`);B(`verbose`,()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${o}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==dc(t,n))throw Error(`Unable to copy data to tensor with different size.`);this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let s=typeof MLTensorUsage>`u`?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,s,!0,!0,o),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType){if(this.wrapper.fallbackType===`int32`)t=oc(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`)}if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}B(`verbose`,()=>`Data size does not match tensor size. Releasing tensor.`),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isDataConverted?sc(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}return t.buffer}if(!this.wrapper)throw Error(`Tensor has not been created.`);return e?this.wrapper.read(e):this.wrapper.read()}},mc=class{constructor(e){this.backend=e,this.tensorTrackersById=/* @__PURE__ */ new Map,this.freeTensors=[],this.externalTensors=/* @__PURE__ */ new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw Error(`MLContext not found for session.`);return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=lc();return this.tensorTrackersById.set(e,new pc(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){B(`verbose`,()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(t);if(!a)throw Error(`Tensor not found.`);return a.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw Error(`Tensor not found.`);n.upload(t)}async download(e,t){B(`verbose`,()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw Error(`Tensor not found.`);return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),a=lc(),o=new fc({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(a,new pc(this,o)),this.externalTensors.add(o),a}async getCachedTensor(e,t,n,r,i,a,o){let s=this.getMLContext(e);for(let[r,i]of this.freeTensors.entries())if(i.canReuseTensor(s,t,n)){B(`verbose`,()=>`[WebNN] Reusing tensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:``} shape: ${n}`);let i=this.freeTensors.splice(r,1)[0];return i.sessionId=e,i}B(`verbose`,()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:``} shape: ${n}}`);let c=await s.createTensor({dataType:o??t,shape:n,dimensions:n,usage:r,writable:i,readable:a});return new fc({sessionId:e,context:s,tensor:c,dataType:t,shape:n,fallbackDataType:o})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},hc=(...e)=>new mc(...e)}),bc=F(()=>{"use strict";z(),xs(),ic(),gc(),Xs(),_c=/* @__PURE__ */ new Map([[1,`float32`],[10,`float16`],[6,`int32`],[12,`uint32`],[7,`int64`],[13,`uint64`],[22,`int4`],[21,`uint4`],[3,`int8`],[2,`uint8`],[9,`uint8`]]),vc=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((n,i)=>n===r[i]&&e[n]===t[n])},yc=class{constructor(e){this.tensorManager=hc(this),this.mlContextBySessionId=/* @__PURE__ */ new Map,this.sessionIdsByMLContext=/* @__PURE__ */ new Map,this.mlContextCache=[],this.sessionGraphInputs=/* @__PURE__ */ new Map,this.sessionGraphOutputs=/* @__PURE__ */ new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=/* @__PURE__ */ new Map,this.mlOpSupportLimitsBySessionId=/* @__PURE__ */ new Map,Js(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw Error(`No active session`);return this.activeSessionId}onRunStart(e){B(`verbose`,()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){B(`verbose`,()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let e of t)B(`verbose`,()=>`[WebNN] releasing temporary tensor {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let t=this.mlContextCache.findIndex(t=>t.gpuDevice===e);if(t!==-1)return this.mlContextCache[t].mlContext;{let t=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:t}),t}}if(e===void 0){let e=this.mlContextCache.findIndex(e=>e.options===void 0&&e.gpuDevice===void 0);if(e!==-1)return this.mlContextCache[e].mlContext;{let e=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:e}),e}}let t=this.mlContextCache.findIndex(t=>vc(t.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let t=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:t}),t}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=/* @__PURE__ */ new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let e=this.mlContextCache.findIndex(e=>e.mlContext===t);e!==-1&&this.mlContextCache.splice(e,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){B(`verbose`,()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let a=_c.get(n);if(!a)throw Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,r,i)}async createTemporaryTensor(e,t,n){B(`verbose`,()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=_c.get(t);if(!r)throw Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!L().shouldTransferToMLTensor)throw Error(`Trying to upload to a MLTensor while shouldTransferToMLTensor is false`);B(`verbose`,()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return rc(n,t)}}registerMLTensor(e,t,n,r){let i=_c.get(n);if(!i)throw Error(`Unsupported ONNX data type: ${n}`);let a=this.tensorManager.registerTensor(e,t,i,r);return B(`verbose`,()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${a}}`),a}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){let n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){let r=_c.get(Ps(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof r>`u`?!1:n?!!i?.input.dataTypes.includes(r):!!i?.output.dataTypes.includes(r)}flush(){}}}),xc=F(()=>{"use strict";}),jc=F(()=>{"use strict";Xs(),xc(),Sc=/* @__PURE__ */ new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Cc=[],wc=e=>Math.ceil(Number(e)/16)*16,Tc=e=>{for(let t=0;t<Cc.length;t++){let n=Cc[t];if(e<=n)return n}return Math.ceil(e/16)*16},Ec=1,Dc=()=>Ec++,Oc=async(e,t,n,r)=>{let i=wc(n),a=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let o=e.getCommandEncoder();e.endComputePass(),o.copyBufferToBuffer(t,0,a,0,i),e.flush(),await a.mapAsync(GPUMapMode.READ);let s=a.getMappedRange();if(r){let e=r();return e.set(new Uint8Array(s,0,n)),e}return new Uint8Array(s.slice(0,n))}finally{a.destroy()}},kc=class{constructor(e){this.backend=e,this.storageCache=/* @__PURE__ */ new Map,this.freeBuffers=/* @__PURE__ */ new Map,this.freeUniformBuffers=/* @__PURE__ */ new Map,this.buffersPending=[],this.capturedPendingBuffers=/* @__PURE__ */ new Map;for(let[e]of Sc)Cc.push(e),this.freeBuffers.set(e,[]),this.freeUniformBuffers.set(e,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,a=wc(i),o=this.storageCache.get(e);if(!o)throw Error(`gpu data for uploading does not exist`);if(Number(o.originalSize)!==i)throw Error(`inconsistent data size. gpu data size=${o.originalSize}, data size=${i}`);if(a===i&&r%4==0)this.backend.device.queue.writeBuffer(o.gpuData.buffer,0,n,r,i);else{let e=new Uint8Array(a);e.set(t),this.backend.device.queue.writeBuffer(o.gpuData.buffer,0,e,0,a)}B(`verbose`,()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw Error(`source gpu data for memcpy does not exist`);let r=this.storageCache.get(t);if(!r)throw Error(`destination gpu data for memcpy does not exist`);if(n.originalSize!==r.originalSize)throw Error(`inconsistent source and destination gpu data size`);let i=wc(n.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return B(`verbose`,()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=Dc();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),B(`verbose`,()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),B(`verbose`,()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=Tc(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||a){let e=(i?this.freeBuffers:this.freeUniformBuffers).get(n);r=e&&e.length>0?e.pop():this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let o={id:Dc(),type:0,buffer:r};return this.storageCache.set(o.id,{gpuData:o,originalSize:Number(e)}),B(`verbose`,()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${o.id}`),o}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e==`bigint`?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw Error(`releasing data does not exist`)}return B(`verbose`,()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw Error(`data does not exist`);await Oc(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0){if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Sc.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(e=>{e.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(e=>{e.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(e=>{e.destroy()})}),this.storageCache=/* @__PURE__ */ new Map,this.freeBuffers=/* @__PURE__ */ new Map,this.freeUniformBuffers=/* @__PURE__ */ new Map,this.capturedPendingBuffers=/* @__PURE__ */ new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(e=>{e.destroy()}),this.capturedPendingBuffers.delete(e)),--this.sessionCount,this.sessionCount===0&&(B(`warning`,()=>`[WebGPU] Clearing webgpu buffer cache`),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.storageCache=/* @__PURE__ */ new Map)}},Ac=(...e)=>new kc(...e)}),W=F(()=>{"use strict";Mc=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(`;`),this.key}},U=e=>new Mc(e)}),Q=F(()=>{"use strict";z(),H(),Nc=64,Pc=(e,t)=>{if(t===3)throw Error(`vec3 has same alignment as vec4, use vec4 instead`);switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:`f16`;case 1:return t>1?`vec${t}<f32>`:`f32`;case 6:return t>1?`vec${t}<i32>`:`i32`;case 12:return t>1?`vec${t}<u32>`:`u32`;case 7:if(t>1)throw Error(`currently not supported vecX of uint64 yet`);return[`vec2<u32>`,`i32`];case 13:if(t>1)throw Error(`currently not supported vecX of uint64 yet`);return[`vec2<u32>`,`u32`];case 9:if(t!==4)throw Error(`bool must be vec4`);return[`u32`,`vec4<bool>`];case 22:return`i32`;case 21:return`u32`;default:throw Error(`Unknown data type: ${e}`)}},G=(e,t=1)=>{let n=Pc(e,t);return typeof n==`string`?n:n[0]},K=(e,t=1)=>{let n=Pc(e,t);return typeof n==`string`?n:n[1]},q=(...e)=>{let t=[];return e.forEach(e=>{e.length!==0&&t.push({type:12,data:e},{type:12,data:V.computeStrides(e)})}),t},J=e=>e%4==0?4:e%2==0?2:1,Fc=(e=`f32`,t,n=`0`)=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,Ic=(e,t,n)=>e===`f32`?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,Lc=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,Y=(e,t,n,r)=>e.startsWith(`uniforms.`)&&n>4?typeof t==`string`?r===`f16`?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r===`f16`?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,Rc=(e,t,n,r,i)=>{let a=typeof n==`number`,o=a?n:n.length,s=[...Array(o).keys()],c=o<2?`u32`:o<=4?`vec${o}<u32>`:`array<u32, ${o}>`,l=Pc(t,i),u=typeof l==`string`?l:l[1],d={indices:c,value:u,storage:typeof l==`string`?l:l[0],tensor:t},f=e=>typeof e==`string`?e:`${e}u`,p={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},m=a?`uniforms.`:``,h=`${m}${e}_shape`,g=`${m}${e}_strides`,_=``;for(let e=0;e<o-1;e++)_+=`
    let dim${e} = current / ${Y(g,e,o)};
    let rest${e} = current % ${Y(g,e,o)};
    indices[${e}] = dim${e};
    current = rest${e};
    `;_+=`indices[${o-1}] = current;`;let v=o<2?``:`
  fn o2i_${e}(offset: u32) -> ${d.indices} {
    var indices: ${d.indices};
    var current = offset;
    ${_}
    return indices;
  }`,y=t=>(p.offsetToIndices=!0,o<2?t:`o2i_${e}(${t})`),b=[];if(o>=2)for(let e=o-1;e>=0;e--)b.push(`${Y(g,e,o)} * (indices[${e}])`);let x=o<2?``:`
  fn i2o_${e}(indices: ${d.indices}) -> u32 {
    return ${b.join(`+`)};
  }`,S=t=>(p.indicesToOffset=!0,o<2?t:`i2o_${e}(${t})`),C=(...e)=>o===0?`0u`:`${d.indices}(${e.map(f).join(`,`)})`,w=(e,t)=>o<2?`${e}`:`${Y(e,t,o)}`,ee=(e,t,n)=>o<2?`${e}=${n};`:`${Y(e,t,o)}=${n};`,T={},E=(t,n)=>{p.broadcastedIndicesToOffset=!0;let r=`${n.name}broadcastedIndicesTo${e}Offset`;if(r in T)return`${r}(${t})`;let i=[];for(let e=o-1;e>=0;e--){let t=n.indicesGet(`outputIndices`,e+n.rank-o);i.push(`${w(g,e)} * (${t} % ${w(h,e)})`)}return T[r]=`fn ${r}(outputIndices: ${n.type.indices}) -> u32 {
             return ${i.length>0?i.join(`+`):`0u`};
           }`,`${r}(${t})`},D=(t,n)=>(()=>{if(d.storage===d.value)return`${e}[${t}]=${n};`;if(d.storage===`vec2<u32>`&&d.value===`i32`)return`${e}[${t}]=vec2<u32>(u32(${n}), select(0u, 0xFFFFFFFFu, ${n} < 0));`;if(d.storage===`vec2<u32>`&&d.value===`u32`)return`${e}[${t}]=vec2<u32>(u32(${n}), 0u);`;if(d.storage===`u32`&&d.value===`vec4<bool>`)return`${e}[${t}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${n}));`;throw Error(`not supported combination of storage type ${d.storage} and value type ${d.value} yet`)})(),te=t=>(()=>{if(d.storage===d.value)return`${e}[${t}]`;if(d.storage===`vec2<u32>`&&d.value===`i32`)return`i32(${e}[${t}].x)`;if(d.storage===`vec2<u32>`&&d.value===`u32`)return`u32(${e}[${t}].x)`;if(d.storage===`u32`&&d.value===`vec4<bool>`)return`vec4<bool>(bool(${e}[${t}] & 0xFFu), bool(${e}[${t}] & 0xFF00u), bool(${e}[${t}] & 0xFF0000u), bool(${e}[${t}] & 0xFF000000u))`;throw Error(`not supported combination of storage type ${d.storage} and value type ${d.value} yet`)})(),O=o<2?``:`
  fn get_${e}ByIndices(indices: ${d.indices}) -> ${u} {
    return ${te(`i2o_${e}(indices)`)};
  }`,k=o<2?``:(()=>{let t=s.map(e=>`d${e}: u32`).join(`, `),n=s.map(e=>`d${e}`).join(`, `);return`
  fn get_${e}(${t}) -> ${u} {
    return get_${e}ByIndices(${C(n)});
  }`})(),ne=(...t)=>{if(t.length!==o)throw Error(`indices length must be ${o}`);let n=t.map(f).join(`,`);return o===0?te(`0u`):o===1?te(n[0]):(p.get=!0,p.getByIndices=!0,p.indicesToOffset=!0,`get_${e}(${n})`)},re=t=>o<2?te(t):(p.getByIndices=!0,p.indicesToOffset=!0,`get_${e}ByIndices(${t})`),ie=o<2?``:`
  fn set_${e}ByIndices(indices: ${d.indices}, value: ${u}) {
    ${D(`i2o_${e}(indices)`,`value`)}
  }`,ae=o<2?``:(()=>{let t=s.map(e=>`d${e}: u32`).join(`, `),n=s.map(e=>`d${e}`).join(`, `);return`
  fn set_${e}(${t}, value: ${u}) {
    set_${e}ByIndices(${C(n)}, value);
  }`})();return{impl:()=>{let e=[],t=!1;return p.offsetToIndices&&(e.push(v),t=!0),p.indicesToOffset&&(e.push(x),t=!0),p.broadcastedIndicesToOffset&&(Object.values(T).forEach(t=>e.push(t)),t=!0),p.set&&(e.push(ae),t=!0),p.setByIndices&&(e.push(ie),t=!0),p.get&&(e.push(k),t=!0),p.getByIndices&&(e.push(O),t=!0),!a&&t&&e.unshift(`const ${h} = ${d.indices}(${n.join(`,`)});`,`const ${g} = ${d.indices}(${V.computeStrides(n).join(`,`)});`),e.join(`
`)},type:d,offsetToIndices:y,indicesToOffset:S,broadcastedIndicesToOffset:E,indices:C,indicesGet:w,indicesSet:ee,set:(...t)=>{if(t.length!==o+1)throw Error(`indices length must be ${o}`);let n=t[o];if(typeof n!=`string`)throw Error(`value must be string`);let r=t.slice(0,o).map(f).join(`,`);return o===0?D(`0u`,n):o===1?D(r[0],n):(p.set=!0,p.setByIndices=!0,p.indicesToOffset=!0,`set_${e}(${r}, ${n})`)},setByOffset:D,setByIndices:(t,n)=>o<2?D(t,n):(p.setByIndices=!0,p.indicesToOffset=!0,`set_${e}ByIndices(${t}, ${n});`),get:ne,getByOffset:te,getByIndices:re,usage:r,name:e,strides:g,shape:h,rank:o}},X=(e,t,n,r=1)=>Rc(e,t,n,`input`,r),Z=(e,t,n,r=1)=>Rc(e,t,n,`output`,r),zc=(e,t,n)=>Rc(e,t,n,`atomicOutput`,1),Bc=(e,t,n,r=1)=>Rc(e,t,n,`internal`,r),Vc=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e==`number`?`${e}u`:e}) { return; }`}mainStart(e=Nc){let t=typeof e==`number`?e:e[0],n=typeof e==`number`?1:e[1],r=typeof e==`number`?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1;return`@compute @workgroup_size(${t}, ${n}, ${r})
  fn main(${i?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`}) {
    ${i?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*n*r}u + local_idx;`}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith(`uniforms.`)&&this.uniforms.push({name:e.shape.replace(`uniforms.`,``),type:`u32`,length:e.rank}),e.strides.startsWith(`uniforms.`)&&this.uniforms.push({name:e.strides.replace(`uniforms.`,``),type:`u32`,length:e.rank}))}declareVariable(e,t){if(e.usage===`internal`)throw Error(`cannot use internal variable with declareVariable(). use registerInternalVariables() instead.`);this.variables.push(e),this.appendVariableUniforms(e);let n=e.usage===`input`?`read`:`read_write`,r=e.usage===`atomicOutput`?`atomic<i32>`:e.type.storage;return`@group(0) @binding(${t}) var<storage, ${n}> ${e.name}: array<${r}>;`}declareVariables(...e){return e.map(e=>this.declareVariable(e,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!==`internal`)throw Error(`cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.`);this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(e=>this.registerInternalVariable(e)),this}registerUniform(e,t,n=1){return this.uniforms.push({name:e,type:t,length:n}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return``;let e=[];for(let{name:t,type:n,length:r}of this.uniforms)if(r&&r>4)n===`f16`?e.push(`@align(16) ${t}:array<mat2x4<${n}>, ${Math.ceil(r/8)}>`):e.push(`${t}:array<vec4<${n}>, ${Math.ceil(r/4)}>`);else{let i=r==null||r===1?n:`vec${r}<${n}>`;e.push(`${t}:${i}`)}return`
      struct Uniforms { ${e.join(`, `)} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=e=>[12,10,1,6][[`u32`,`f16`,`f32`,`i32`].indexOf(e)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Hc=(e,t)=>new Vc(e,t)}),Qc=F(()=>{"use strict";z(),H(),W(),Q(),Uc=(e,t)=>{if(!e||e.length!==1)throw Error(`Transpose requires 1 input.`);if(t.length!==0&&t.length!==e[0].dims.length)throw Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Wc=(e,t)=>t.length===0?[...Array(e).keys()].reverse():t,Gc=(e,t)=>V.sortBasedOnPerm(e,Wc(e.length,t)),Kc=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let n=0;n<t;++n)i+=`a[${e[n]}]=i[${n}];`;return i+=`return a;}`},qc=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},Jc=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},Yc=(e,t)=>{let n=e.dataType,r=e.dims.length,i=Wc(r,t),a=Gc(e.dims,i),o=e.dims,s=a,c=r<2||Jc(i,e.dims),l;if(c)return l=e=>{let t=X(`input`,n,o,4),r=Z(`output`,n,s,4);return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(t,r)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    output[global_idx] = input[global_idx];
  }`},{name:`TransposeCopy`,shaderCache:{inputDependencies:[`type`]},getRunData:()=>{let t=V.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(t/64/4)},programUniforms:[{type:12,data:Math.ceil(t/4)}]}},getShaderSource:l};let{newShape:u,newPerm:d}=qc(e.dims,i),f=V.areEqual(d,[2,3,1]),p=V.areEqual(d,[3,1,2]);return u.length===2||f||p?(o=f?[u[0],u[1]*u[2]]:p?[u[0]*u[1],u[2]]:u,s=[o[1],o[0]],l=e=>{let t=X(`a`,n,o.length),r=Z(`output`,n,s.length);return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(t,r)}
  var<workgroup> tile : array<array<${r.type.value}, 17>, 16>;
  ${e.mainStart([16,16,1])}
    let stride = (uniforms.output_shape[1] - 1) / 16 + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * 16u + local_id.x;
    let input_row = workgroup_id_x * 16u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${t.getByIndices(`${t.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * 16u + local_id.x;
    let output_row = workgroup_id_y * 16u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${r.setByIndices(`${r.type.indices}(output_row, output_col)`,`tile[local_id.x][local_id.y]`)}
    }
  }`},{name:`TransposeShared`,shaderCache:{inputDependencies:[`type`]},getRunData:()=>{let t=V.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(s[1]/16),y:Math.ceil(s[0]/16)},programUniforms:[{type:12,data:t},...q(o,s)]}},getShaderSource:l}):(l=e=>{let t=X(`a`,n,o.length),a=Z(`output`,n,s.length);return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(t,a)}

  ${Kc(i,r,t,a)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

    let indices = ${a.offsetToIndices(`global_idx`)};
    let aIndices = perm(indices);

    ${a.setByOffset(`global_idx`,t.getByIndices(`aIndices`))}
  }`},{name:`Transpose`,shaderCache:{hint:`${t}`,inputDependencies:[`rank`]},getRunData:()=>{let t=V.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(t/64)},programUniforms:[{type:12,data:t},...q(o,s)]}},getShaderSource:l})},Xc=(e,t)=>{Uc(e.inputs,t.perm),e.compute(Yc(e.inputs[0],t.perm))},Zc=e=>U({perm:e.perm})}),bl=F(()=>{"use strict";z(),H(),Q(),ql(),Qc(),$c={max:`select(bestValue, candidate, candidate > bestValue)`,min:`select(bestValue, candidate, candidate < bestValue)`,mean:`bestValue + candidate`,sum:`bestValue + candidate`,prod:`bestValue * candidate`,sumSquare:`bestValue + candidate * candidate`,logSumExp:`bestValue + exp(candidate)`,l1:`bestValue + abs(candidate)`,l2:`bestValue + candidate * candidate`,logSum:`bestValue + candidate`},el={max:`select(bestValue, candidate, candidate > bestValue)`,min:`select(bestValue, candidate, candidate < bestValue)`,mean:`bestValue + candidate`,sum:`bestValue + candidate`,prod:`bestValue * candidate`,sumSquare:`bestValue + candidate`,logSumExp:`bestValue + candidate`,l1:`bestValue + candidate`,l2:`bestValue + candidate`,logSum:`bestValue + candidate`},tl={max:`_A[offset]`,min:`_A[offset]`,mean:`0`,sum:`0`,prod:`1`,sumSquare:`0`,logSumExp:`0`,l1:`0`,l2:`0`,logSum:`0`},nl={max:`bestValue`,min:`bestValue`,sum:`bestValue`,prod:`bestValue`,sumSquare:`bestValue`,logSumExp:`log(bestValue)`,l1:`bestValue`,l2:`sqrt(bestValue)`,logSum:`log(bestValue)`},rl=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},il=(e,t)=>{let n=[],r=e.length;for(let i=0;i<r;i++)t.indexOf(i)===-1&&n.push(e[i]);return[n,t.map(t=>e[t])]},al=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let a=0;a<n;a++)t.indexOf(a)===-1?r.push(e[i++]):r.push(1);return r},ol=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},sl=(e,t)=>{let n=[];if(!ol(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(e=>n.push(e))}return n},cl=(e,t,n,r,i,a,o)=>{let s=n[0].dims,c=V.size(a),l=V.size(o),u=X(`_A`,n[0].dataType,s),d=Z(`output`,i,a),f=64;c===1&&(f=256);let p=`
          var<workgroup> aBestValues : array<f32, ${f}>;
       `;return{name:e,shaderCache:{hint:`${t};${f}`,inputDependencies:[`type`]},getShaderSource:e=>`
        ${e.registerUniform(`reduceSize`,`u32`).declareVariables(u,d)}
        ${p}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${e.mainStart(f)}

          let outputIndex = global_idx / ${f};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${tl[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${f}) {
           let candidate = f32(${u.getByOffset(`offset + k`)});
           bestValue = ${$c[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${f}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${el[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${d.setByOffset(`outputIndex`,`${r===`mean`?`${d.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${d.type.storage}(${nl[r]})`}`)};
         }
        }`,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:c},programUniforms:[{type:12,data:l}]})}},ll=(e,t,n,r)=>{let i=e.inputs.length===1?n:wl(e.inputs,n),a=i.axes;a.length===0&&!i.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((e,t)=>t));let o=V.normalizeAxes(a,e.inputs[0].dims.length),s=o,c=e.inputs[0],l=sl(s,e.inputs[0].dims.length);l.length>0&&(c=e.compute(Yc(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],s=rl(s.length,c.dims.length));let[u,d]=il(c.dims,s),f=u;i.keepDims&&(f=al(u,o)),e.compute(cl(t,i.cacheKey,[c],r,e.inputs[0].dataType,f,d),{inputs:[c]})},ul=(e,t)=>{ll(e,`ReduceMeanShared`,t,`mean`)},dl=(e,t)=>{ll(e,`ReduceL1Shared`,t,`l1`)},fl=(e,t)=>{ll(e,`ReduceL2Shared`,t,`l2`)},pl=(e,t)=>{ll(e,`ReduceLogSumExpShared`,t,`logSumExp`)},ml=(e,t)=>{ll(e,`ReduceMaxShared`,t,`max`)},hl=(e,t)=>{ll(e,`ReduceMinShared`,t,`min`)},gl=(e,t)=>{ll(e,`ReduceProdShared`,t,`prod`)},_l=(e,t)=>{ll(e,`ReduceSumShared`,t,`sum`)},vl=(e,t)=>{ll(e,`ReduceSumSquareShared`,t,`sumSquare`)},yl=(e,t)=>{ll(e,`ReduceLogSumShared`,t,`logSum`)}}),ql=F(()=>{"use strict";z(),H(),W(),Q(),bl(),xl=e=>{if(!e||e.length===0||e.length>2)throw Error(`Reduce op requires 1 or 2 inputs.`);if(e.length===2&&e[1].dims.length!==1)throw Error(`Invalid axes input dims.`)},Sl=e=>[``,``,`var value = ${e.getByIndices(`input_indices`)};`,``],Cl=(e,t,n,r,i,a,o=!1,s=!1)=>{let c=[],l=n[0].dims,u=l.length,d=V.normalizeAxes(i,u),f=!s&&d.length===0;l.forEach((e,t)=>{f||d.indexOf(t)>=0?o&&c.push(1):c.push(e)});let p=c.length,m=V.size(c);return{name:e,shaderCache:t,getShaderSource:e=>{let t=[],i=X(`_A`,n[0].dataType,u),s=Z(`output`,a,p),c=r(i,s,d),m=c[2];for(let e=0,n=0;e<u;e++)f||d.indexOf(e)>=0?(o&&n++,m=`for(var j${e}: u32 = 0; j${e} < ${l[e]}; j${e}++) {
                  ${c[2].includes(`last_index`)?`let last_index = j${e};`:``}
                  ${i.indicesSet(`input_indices`,e,`j${e}`)}
                  ${m}
                }`):(t.push(`${i.indicesSet(`input_indices`,e,s.indicesGet(`output_indices`,n))};`),n++);return`

        ${e.registerUniform(`output_size`,`u32`).declareVariables(i,s)}

        ${e.mainStart()}
          ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
          var input_indices: ${i.type.indices};
          let output_indices = ${s.offsetToIndices(`global_idx`)};

          ${t.join(`
`)}
          ${c[0]}       // init ops for reduce max/min
          ${c[1]}
          ${m}
          ${c[3]}
          ${c.length===4?s.setByOffset(`global_idx`,`value`):c.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:c,dataType:a}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...q(l,c)]})}},wl=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(e=>n.push(Number(e))),U({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Tl=(e,t,n,r)=>{let i=e.inputs,a=i.length===1?n:wl(i,n);e.compute(Cl(t,{hint:a.cacheKey,inputDependencies:[`rank`]},[i[0]],a.noopWithEmptyAxes&&a.axes.length===0?Sl:r,a.axes,i[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},El=(e,t)=>{xl(e.inputs),Tl(e,`ReduceLogSum`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += ${e.getByIndices(`input_indices`)};`,`value = log(value);`])},Dl=(e,t)=>{xl(e.inputs),Tl(e,`ReduceL1`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += abs(${e.getByIndices(`input_indices`)});`,``])},Ol=(e,t)=>{xl(e.inputs),Tl(e,`ReduceL2`,t,(e,t)=>[`var t = ${t.type.value}(0); var value = ${t.type.value}(0);`,``,`t = ${e.getByIndices(`input_indices`)}; value += (t * t);`,`value = sqrt(value);`])},kl=(e,t)=>{xl(e.inputs),Tl(e,`ReduceLogSumExp`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += exp(${e.getByIndices(`input_indices`)});`,`value = log(value);`])},Al=(e,t)=>{xl(e.inputs),Tl(e,`ReduceMax`,t,(e,t,n)=>{let r=[];for(let t=0;t<e.rank;t++)(n.indexOf(t)>=0||n.length===0)&&r.push(e.indicesSet(`input_indices`,t,0));return[`${r.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};`,`value = max(value, ${e.getByIndices(`input_indices`)});`,``]})},jl=(e,t)=>{xl(e.inputs),Tl(e,`ReduceMean`,t,(t,n,r)=>{let i=1;for(let n=0;n<t.rank;n++)(r.indexOf(n)>=0||r.length===0)&&(i*=e.inputs[0].dims[n]);return[`var sum = f32(0);`,``,`sum += f32(${t.getByIndices(`input_indices`)});`,`let value = ${n.type.value}(sum / ${i});`]})},Ml=(e,t)=>{xl(e.inputs),Tl(e,`ReduceMin`,t,(e,t,n)=>{let r=[];for(let t=0;t<e.rank;t++)(n.indexOf(t)>=0||n.length===0)&&r.push(`input_indices[${t}] = 0;`);return[`${r.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};`,`value = min(value, ${e.getByIndices(`input_indices`)});`,``]})},Nl=(e,t)=>{xl(e.inputs),Tl(e,`ReduceProd`,t,(e,t)=>[`var value = ${t.type.storage}(1);`,``,`value *= ${e.getByIndices(`input_indices`)};`,``])},Pl=(e,t)=>{xl(e.inputs),Tl(e,`ReduceSum`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += ${e.getByIndices(`input_indices`)};`,``])},Fl=(e,t)=>{xl(e.inputs),Tl(e,`ReduceSumSquare`,t,(e,t)=>[`var t = ${t.type.value}(0); var value = ${t.type.value}(0);`,``,`t = ${e.getByIndices(`input_indices`)}; value += t * t;`,``])},Il=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let n=0;n<t.length;n++)t.indexOf(n)===-1?r*=e[n]:i*=e[n];return i<32&&r>1024},Ll=(e,t)=>{Il(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?jl(e,t):ul(e,t)},Rl=(e,t)=>{Il(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Dl(e,t):dl(e,t)},zl=(e,t)=>{Il(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ol(e,t):fl(e,t)},Bl=(e,t)=>{Il(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?kl(e,t):pl(e,t)},Vl=(e,t)=>{Il(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Al(e,t):ml(e,t)},Hl=(e,t)=>{Il(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ml(e,t):hl(e,t)},Ul=(e,t)=>{Il(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Nl(e,t):gl(e,t)},Wl=(e,t)=>{Il(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Pl(e,t):_l(e,t)},Gl=(e,t)=>{Il(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Fl(e,t):vl(e,t)},Kl=(e,t)=>{Il(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?El(e,t):yl(e,t)}}),Ql=F(()=>{"use strict";z(),W(),ql(),Jl=e=>{if(!e||e.length===0||e.length>2)throw Error(`ArgMinMaxOp op requires 1 or 2 inputs.`);if(e[0].dataType!==1)throw Error(`Invalid input type.`)},Yl=(e,t)=>{Jl(e.inputs),e.compute(Cl(`ArgMin`,{hint:t.cacheKey,inputDependencies:[`rank`]},[e.inputs[0]],(e,n,r)=>{let i=[];for(let t=0;t<e.rank;t++)(r.indexOf(t)>=0||r.length===0)&&i.push(`input_indices[${t}] = 0;`);return[`${i.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};
var best_index : i32 = 0;`,`if (${e.getByIndices(`input_indices`)} ${t.selectLastIndex>0?`<=`:`<`} value) {
         value = ${e.getByIndices(`input_indices`)};
         best_index = i32(last_index);
       }`,``,n.setByOffset(`global_idx`,`best_index`)]},[t.axis],7,t.keepDims),{inputs:[0]})},Xl=(e,t)=>{Jl(e.inputs),e.compute(Cl(`argMax`,{hint:t.cacheKey,inputDependencies:[`rank`]},[e.inputs[0]],(e,n,r)=>{let i=[];for(let t=0;t<e.rank;t++)(r.indexOf(t)>=0||r.length===0)&&i.push(`input_indices[${t}] = 0;`);return[`${i.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};
var best_index : i32 = 0;`,`if (${e.getByIndices(`input_indices`)} ${t.selectLastIndex>0?`>=`:`>`} value) {
         value = ${e.getByIndices(`input_indices`)};
         best_index = i32(last_index);
       }`,``,n.setByOffset(`global_idx`,`best_index`)]},[t.axis],7,t.keepDims),{inputs:[0]})},Zl=e=>U(e)}),su=F(()=>{"use strict";z(),H(),xc(),Q(),$l=(e,t)=>{let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5];if(o&&s)throw Error(`Attention cannot have both past and attention_bias`);if(n.dims.length!==3)throw Error(`Input "input" must have 3 dimensions`);let c=n.dims[0],l=n.dims[1],u=n.dims[2];if(i.dims.length!==1)throw Error(`Input "bias" is expected to have 1 dimensions`);if(r.dims.length!==2)throw Error(`Input "weights" is expected to have 2 dimensions`);if(r.dims[0]!==u)throw Error(`Input 1 dimension 0 should have same length as dimension 2 of input 0`);if(i.dims[0]!==r.dims[1])throw Error(`Input "bias" dimension 0 should have same length as dimension 1 of input "weights"`);let d=i.dims[0]/3,f=d,p=f;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw Error(`qkv_hidden_sizes attribute should have 3 elements`);for(let e of t.qkvHiddenSizes)if(e%t.numHeads!==0)throw Error(`qkv_hidden_sizes should be divisible by num_heads`);d=t.qkvHiddenSizes[0],f=t.qkvHiddenSizes[1],p=t.qkvHiddenSizes[2]}let m=l;if(d!==f)throw Error(`qkv_hidden_sizes first element should be same as the second`);if(i.dims[0]!==d+f+p)throw Error(`Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes`);let h=0;if(o){if(f!==p)throw Error(`Input "past" expect k_hidden_size == v_hidden_size`);if(o.dims.length!==5)throw Error(`Input "past" must have 5 dimensions`);if(o.dims[0]!==2)throw Error(`Input "past" first dimension must be 2`);if(o.dims[1]!==c)throw Error(`Input "past" second dimension must be batch_size`);if(o.dims[2]!==t.numHeads)throw Error(`Input "past" third dimension must be num_heads`);if(o.dims[4]!==f/t.numHeads)throw Error(`Input "past" fifth dimension must be k_hidden_size / num_heads`);t.pastPresentShareBuffer||(h=o.dims[3])}let g=m+h;if(a)throw Error(`Mask not supported`);if(o)throw Error(`past is not supported`);if(s){if(s.dims.length!==4)throw Error(`Input "attention_bias" must have 4 dimensions`);if(s.dims[0]!==c||s.dims[1]!==t.numHeads||s.dims[2]!==l||s.dims[3]!==g)throw Error(`Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)`)}return{batchSize:c,sequenceLength:l,pastSequenceLength:h,kvSequenceLength:m,totalSequenceLength:g,maxSequenceLength:-1,inputHiddenSize:u,hiddenSize:d,vHiddenSize:p,headSize:Math.floor(d/t.numHeads),vHeadSize:Math.floor(p/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:0,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},eu=(e,t,n)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset(`0`)});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset(`batchIdx`)}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${n?`let past_sequence_length = uniforms.past_sequence_length`:``};
    let present_sequence_length = total_sequence_length;
    `,tu=(e,t,n,r,i,a,o,s)=>{let c=J(o?1:a),l=64,u=a/c;u<l&&(l=32);let d=Math.ceil(a/c/l),f=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:u},{type:12,data:d}],p=G(e.dataType,c),m=K(1,c),h=[`type`];return o&&h.push(`type`),s&&h.push(`type`),{name:`AttentionProbsSoftmax`,shaderCache:{hint:`${l};${p};${c}`,inputDependencies:h},getShaderSource:t=>{let n=Z(`x`,e.dataType,e.dims,c),r=[n],i=o?X(`seq_lens`,o.dataType,o.dims):void 0;i&&r.push(i);let a=s?X(`total_sequence_length_input`,s.dataType,s.dims):void 0;a&&r.push(a);let u=K(e.dataType);return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${t.registerUniforms([{name:`batch_size`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`past_sequence_length`,type:`u32`},{name:`sequence_length`,type:`u32`},{name:`total_sequence_length`,type:`u32`},{name:`elements_per_thread`,type:`u32`}]).declareVariables(...r)}
  ${t.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${eu(i,a,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${l}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${o?`u32(past_sequence_length + workgroup_id.y + 1)`:`total_sequence_length`};
    var thread_max_vector = ${m}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${m}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(c){case 1:return`thread_max_vector`;case 2:return`max(thread_max_vector.x, thread_max_vector.y)`;case 4:return`max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))`;default:throw Error(`Unsupported components: ${c}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${l}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${m}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${m}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(c){case 1:return`sum_vector`;case 2:return`sum_vector.x + sum_vector.y`;case 4:return`sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w`;default:throw Error(`Unsupported components: ${c}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${l}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${n.type.value}(${u}(1.0) / ${u}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${m}(x[offset + i]);
        x[offset + i] = ${n.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${o?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${n.type.value}(${u}(0));
        }`:``};
  }`},getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*n},programUniforms:f})}},nu=(e,t,n,r,i,a,o,s,c)=>{let l=o+a.kvSequenceLength,u=[a.batchSize,a.numHeads,a.sequenceLength,l],d=e>1&&r,f=a.kvNumHeads?a.kvNumHeads:a.numHeads,p=d?[a.batchSize,f,l,a.headSize]:void 0,m=a.nReps?a.nReps:1,h=a.scale===0?1/Math.sqrt(a.headSize):a.scale,g=J(a.headSize),_=a.headSize/g,v={x:Math.ceil(l/12),y:Math.ceil(a.sequenceLength/12),z:a.batchSize*a.numHeads},y=[{type:12,data:a.sequenceLength},{type:12,data:_},{type:12,data:l},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:h},{type:12,data:o},{type:12,data:a.kvSequenceLength},{type:12,data:m}],b=d&&r&&V.size(r.dims)>0,x=[`type`,`type`];b&&x.push(`type`),i&&x.push(`type`),s&&x.push(`type`),c&&x.push(`type`);let S=[{dims:u,dataType:t.dataType,gpuDataType:0}];return d&&S.push({dims:p,dataType:t.dataType,gpuDataType:0}),{name:`AttentionProbs`,shaderCache:{hint:`${g};${i!==void 0};${r!==void 0};${e}`,inputDependencies:x},getRunData:()=>({outputs:S,dispatchGroup:v,programUniforms:y}),getShaderSource:e=>{let a=X(`q`,t.dataType,t.dims,g),o=[a,X(`key`,n.dataType,n.dims,g)];if(b){let e=X(`past_key`,r.dataType,r.dims,g);o.push(e)}i&&o.push(X(`attention_bias`,i.dataType,i.dims));let l=s?X(`seq_lens`,s.dataType,s.dims):void 0;l&&o.push(l);let f=c?X(`total_sequence_length_input`,c.dataType,c.dims):void 0;f&&o.push(f);let h=Z(`output`,t.dataType,u),_=[h];d&&_.push(Z(`present_key`,t.dataType,p,g));let v=K(1,g);return`
  const TILE_SIZE = 12u;

  var<workgroup> tileQ: array<${a.type.storage}, 144>;
  var<workgroup> tileK: array<${a.type.storage}, 144>;
  ${e.registerUniforms([{name:`M`,type:`u32`},{name:`K`,type:`u32`},{name:`N`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`head_size`,type:`u32`},{name:`alpha`,type:`f32`},{name:`past_sequence_length`,type:`u32`},{name:`kv_sequence_length`,type:`u32`},{name:`n_reps`,type:`u32`}]).declareVariables(...o,..._)}
  ${e.mainStart([12,12,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${m===1?`headIdx`:`headIdx / uniforms.n_reps`};
    let kv_num_heads = ${m===1?`uniforms.num_heads`:`uniforms.num_heads / uniforms.n_reps`};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${eu(l,f,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${b&&d?`let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;`:``};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${d?`let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;`:``}
    var value = ${v}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${b&&d?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${d?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:``}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${v}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(g){case 1:return`value`;case 2:return`value.x + value.y`;case 4:return`value.x + value.y + value.z + value.w`;default:throw Error(`Unsupported components: ${g}`)}})()};
        output[outputIdx] = ${h.type.value} (sum * uniforms.alpha) + ${i?`attention_bias[outputIdx]`:`0.0`};
    }
  }`}}},ru=(e,t,n,r,i,a,o=void 0,s=void 0)=>{let c=a+i.kvSequenceLength,l=i.nReps?i.nReps:1,u=i.vHiddenSize*l,d=e>1&&r,f=i.kvNumHeads?i.kvNumHeads:i.numHeads,p=d?[i.batchSize,f,c,i.headSize]:void 0,m=[i.batchSize,i.sequenceLength,u],h={x:Math.ceil(i.vHeadSize/12),y:Math.ceil(i.sequenceLength/12),z:i.batchSize*i.numHeads},g=[{type:12,data:i.sequenceLength},{type:12,data:c},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:u},{type:12,data:a},{type:12,data:i.kvSequenceLength},{type:12,data:l}],_=d&&r&&V.size(r.dims)>0,v=[`type`,`type`];_&&v.push(`type`),o&&v.push(`type`),s&&v.push(`type`);let y=[{dims:m,dataType:t.dataType,gpuDataType:0}];return d&&y.push({dims:p,dataType:t.dataType,gpuDataType:0}),{name:`AttentionScore`,shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:v},getRunData:()=>({outputs:y,dispatchGroup:h,programUniforms:g}),getShaderSource:e=>{let i=X(`probs`,t.dataType,t.dims),a=[i,X(`v`,n.dataType,n.dims)];_&&a.push(X(`past_value`,r.dataType,r.dims));let c=o?X(`seq_lens`,o.dataType,o.dims):void 0;o&&a.push(c);let u=s?X(`total_sequence_length_input`,s.dataType,s.dims):void 0;s&&a.push(u);let f=[Z(`output`,t.dataType,m)];return d&&f.push(Z(`present_value`,t.dataType,p)),`
  const TILE_SIZE = 12u;
  var<workgroup> tileQ: array<${i.type.value}, 144>;
  var<workgroup> tileV: array<${i.type.value}, 144>;
  ${e.registerUniforms([{name:`M`,type:`u32`},{name:`K`,type:`u32`},{name:`N`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`head_size`,type:`u32`},{name:`v_hidden_size`,type:`u32`},{name:`past_sequence_length`,type:`u32`},{name:`kv_sequence_length`,type:`u32`},{name:`n_reps`,type:`u32`}]).declareVariables(...a,...f)}
  ${e.mainStart([12,12,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?`headIdx`:`headIdx / uniforms.n_reps`};
   let kv_num_heads = ${l===1?`uniforms.num_heads`:`uniforms.num_heads / uniforms.n_reps`};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${eu(c,u,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${_&&d?`let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;`:``};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${d?`let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;`:``}
   var value = ${i.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${_&&d?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${d?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:``}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`}}},iu=(e,t,n,r,i,a,o,s,c,l,u=void 0,d=void 0)=>{let f=Math.min(e.outputCount,1+ +!!o+ +!!s),p=f>1?o:void 0,m=f>1?s:void 0,h=f>1?l.pastSequenceLength:0,g=h+l.kvSequenceLength,_=c&&V.size(c.dims)>0?c:void 0,v=[t,n];p&&V.size(p.dims)>0&&v.push(p),_&&v.push(_),u&&v.push(u),d&&v.push(d);let y=e.compute(nu(f,t,n,p,_,l,h,u,d),{inputs:v,outputs:f>1?[-1,1]:[-1]})[0];e.compute(tu(y,l.batchSize,l.numHeads,h,l.sequenceLength,g,u,d),{inputs:u&&d?[y,u,d]:[y],outputs:[]});let b=[y,r];m&&V.size(m.dims)>0&&b.push(m),u&&b.push(u),d&&b.push(d),e.compute(ru(f,y,r,m,l,h,u,d),{inputs:b,outputs:f>1?[0,2]:[0]})},au=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,a=t.headSize,o={x:Math.ceil(t.headSize/12),y:Math.ceil(t.sequenceLength/12),z:t.batchSize*t.numHeads},s=[e.inputs[0],e.inputs[1],e.inputs[2]],c=[{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}];return e.compute({name:`AttentionPrepare`,shaderCache:{inputDependencies:[`type`,`type`,`type`]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:c}),getShaderSource:e=>{let t=Z(`output_q`,s[0].dataType,n),r=Z(`output_k`,s[0].dataType,n),i=Z(`output_v`,s[0].dataType,n),a=X(`input`,s[0].dataType,s[0].dims),o=X(`weight`,s[1].dataType,s[1].dims),c=X(`bias`,s[2].dataType,s[2].dims),l=a.type.storage;return`
  const TILE_SIZE = 12u;
  var<workgroup> tileInput: array<${l}, 144>;
  var<workgroup> tileWeightQ: array<${l}, 144>;
  var<workgroup> tileWeightK: array<${l}, 144>;
  var<workgroup> tileWeightV: array<${l}, 144>;
  ${e.registerUniforms([{name:`M`,type:`u32`},{name:`K`,type:`u32`},{name:`N`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`head_size`,type:`u32`},{name:`hidden_size`,type:`u32`},{name:`ldb`,type:`u32`}]).declareVariables(a,o,c,t,r,i)}
  ${e.mainStart([12,12,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${l}(0);
    var valueK = ${l}(0);
    var valueV = ${l}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`}},{inputs:s,outputs:[-1,-1,-1]})},ou=(e,t)=>{let n=$l(e.inputs,t),[r,i,a]=au(e,n);return iu(e,r,i,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),fu=F(()=>{"use strict";Vo(),z(),H(),W(),Q(),cu=(e,t)=>{if(!e||e.length!==5)throw Error(`BatchNormalization requires 5 inputs`);let n=(e,t,n)=>{let r=t.length;if(r!==e.length)throw Error(`${n}: num dimensions != ${r}`);t.forEach((t,r)=>{if(t!==e[r])throw Error(`${n}: dim[${r}] do not match`)})};if(e[0].dims.length>1){let r=t.format===`NHWC`?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,`Invalid input scale`),n(e[2].dims,r,`Invalid input B`),n(e[3].dims,r,`Invalid input mean`),n(e[4].dims,r,`Invalid input var`)}else n(e[1].dims,[1],`Invalid input scale`),n(e[2].dims,[1],`Invalid input B`),n(e[3].dims,[1],`Invalid input mean`),n(e[4].dims,[1],`Invalid input var`)},lu=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,a=e[0].dims,o=r?J(a[a.length-1]):1,s=i===`NHWC`&&a.length>1?o:1,c=V.size(a)/o,l=r,u=l?a.length:a,d=X(`x`,e[0].dataType,e[0].dims,o),f=X(`scale`,e[1].dataType,e[1].dims,s),p=X(`bias`,e[2].dataType,e[2].dims,s),m=X(`inputMean`,e[3].dataType,e[3].dims,s),h=X(`inputVar`,e[4].dataType,e[4].dims,s),g=Z(`y`,e[0].dataType,u,o),_=()=>{let e=``;if(r)e=`let cOffset = ${a.length===1?`0u`:i===`NHWC`?`outputIndices[${a.length-1}] / ${o}`:`outputIndices[1]`};`;else if(i===`NCHW`)e=`
            ${g.indicesSet(`outputIndices`,`0`,`0`)}
            let cOffset = ${g.indicesToOffset(`outputIndices`)};`;else{e=`var cIndices = ${f.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let t=1;t<f.rank;t++)e+=`cIndices[${t}] = outputIndices[${t}];`;e+=`let cOffset = ${f.indicesToOffset(`cIndices`)};`}return e};return{name:`BatchNormalization`,shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${o}`,inputDependencies:l?[`rank`,`type`,`type`,`type`,`type`]:void 0},getShaderSource:e=>`
  const epsilon = ${n};
  ${e.registerUniform(`outputSize`,`u32`).declareVariables(d,f,p,m,h,g)}
  ${e.mainStart()}
  ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
    var outputIndices = ${g.offsetToIndices(`global_idx * ${o}`)};
    ${_()}
    let scale = ${f.getByOffset(`cOffset`)};
    let bias = ${p.getByOffset(`cOffset`)};
    let inputMean = ${m.getByOffset(`cOffset`)};
    let inputVar = ${h.getByOffset(`cOffset`)};
    let x = ${d.getByOffset(`global_idx`)};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${g.setByOffset(`global_idx`,`value`)}
  }`,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:l?[{type:12,data:c},...q(a)]:[{type:12,data:c}]})}},uu=e=>U(e),du=(e,t)=>{let{inputs:n,outputCount:r}=e,i=uu({...t,outputCount:r});if(I.webgpu.validateInputContent&&cu(n,i),t.trainingMode)throw Error(`BatchNormalization trainingMode is not supported yet.`);e.compute(lu(n,i))}}),gu=F(()=>{"use strict";H(),Q(),pu=e=>{if(e[0].dims.length!==3)throw Error(`input should have 3 dimensions`);if(![320,640,1280].includes(e[0].dims[2]))throw Error(`number of channels should be 320, 640 or 1280`);if(e[1].dims.length!==1)throw Error(`bias is expected to have 1 dimensions`);if(e[0].dims[2]!==e[1].dims[0])throw Error(`last dimension of input and bias are not the same`)},mu=e=>{let t=e[0].dims,n=e[0].dims[2],r=V.size(t)/4,i=e[0].dataType,a=X(`input`,i,t,4),o=X(`bias`,i,[n],4),s=X(`residual`,i,t,4),c=Z(`output`,i,t,4);return{name:`BiasAdd`,getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:e=>`
  const channels = ${n}u / 4;
  ${e.declareVariables(a,o,s,c)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${a.getByOffset(`global_idx`)}
      + ${o.getByOffset(`global_idx % channels`)} + ${s.getByOffset(`global_idx`)};
    ${c.setByOffset(`global_idx`,`value`)}
  }`}},hu=e=>{pu(e.inputs),e.compute(mu(e.inputs))}}),cd=F(()=>{"use strict";z(),H(),W(),Q(),_u=(e,t,n,r,i,a,o)=>{let s=Math.ceil(t/4),c=``;c=typeof i==`string`?`${i}(a)`:i(`a`);let l=X(`inputData`,n,[s],4),u=Z(`outputData`,r,[s],4),d=[{name:`vec_size`,type:`u32`}];return o&&d.push(...o),`
      ${e.registerUniforms(d).declareVariables(l,u)}

  ${a??``}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}

    let a = ${l.getByOffset(`global_idx`)};
    ${u.setByOffset(`global_idx`,c)}
  }`},$=(e,t,n,r,i,a=e.dataType,o,s)=>{let c=[{type:12,data:Math.ceil(V.size(e.dims)/4)}];return o&&c.push(...o),{name:t,shaderCache:{hint:i,inputDependencies:[`type`]},getShaderSource:t=>_u(t,V.size(e.dims),e.dataType,a,n,r,s),getRunData:t=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(V.size(t[0].dims)/64/4)},programUniforms:c})}},vu=e=>{e.compute($(e.inputs[0],`Abs`,`abs`))},yu=e=>{e.compute($(e.inputs[0],`Acos`,`acos`))},bu=e=>{e.compute($(e.inputs[0],`Acosh`,`acosh`))},xu=e=>{e.compute($(e.inputs[0],`Asin`,`asin`))},Su=e=>{e.compute($(e.inputs[0],`Asinh`,`asinh`))},Cu=e=>{e.compute($(e.inputs[0],`Atan`,`atan`))},wu=e=>{e.compute($(e.inputs[0],`Atanh`,`atanh`))},Tu=e=>U(e),Eu=(e,t)=>{let n;switch(t.to){case 10:n=`vec4<f16>`;break;case 1:n=`vec4<f32>`;break;case 12:n=`vec4<u32>`;break;case 6:n=`vec4<i32>`;break;case 9:n=`vec4<bool>`;break;default:throw RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute($(e.inputs[0],`Cast`,n,void 0,t.cacheKey,t.to))},Du=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw Error(`Unsupport data type`)}return U({min:t,max:n})},Ou=(e,t)=>{let n=t||Du(e.inputs),r=K(e.inputs[0].dataType);e.compute($(e.inputs[0],`Clip`,e=>`clamp(${e}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:`min`,type:r},{name:`max`,type:r}]),{inputs:[0]})},ku=e=>{e.compute($(e.inputs[0],`Ceil`,`ceil`))},Au=e=>{e.compute($(e.inputs[0],`Cos`,`cos`))},ju=e=>{e.compute($(e.inputs[0],`Cosh`,`cosh`))},Mu=e=>U(e),Nu=(e,t)=>{let n=K(e.inputs[0].dataType);e.compute($(e.inputs[0],`Elu`,e=>`elu_vf32(${e})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Pu=(e=`f32`)=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Fu=e=>{let t=K(e.inputs[0].dataType);e.compute($(e.inputs[0],`Erf`,e=>`erf_vf32(${e})`,Pu(t)))},Iu=e=>{e.compute($(e.inputs[0],`Exp`,`exp`))},Lu=e=>{e.compute($(e.inputs[0],`Floor`,`floor`))},Ru=e=>{let t=K(e.inputs[0].dataType);e.compute($(e.inputs[0],`Gelu`,e=>`0.5 * ${e} * (1.0 + erf_vf32(${e} * 0.7071067811865475))`,Pu(t)))},zu=(e,t)=>{let n=K(e.inputs[0].dataType);e.compute($(e.inputs[0],`LeakyRelu`,e=>`select(leaky_relu_alpha_ * ${e}, ${e}, ${e} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},Bu=e=>{e.compute($(e.inputs[0],`Not`,e=>`!${e}`))},Vu=e=>{e.compute($(e.inputs[0],`Neg`,e=>`-${e}`))},Hu=e=>{e.compute($(e.inputs[0],`Reciprocal`,e=>`1.0/${e}`))},Uu=e=>{let t=K(e.inputs[0].dataType);e.compute($(e.inputs[0],`Relu`,e=>`select(vec4<${t}>(0.0), ${e}, ${e} > vec4<${t}>(0.0))`))},Wu=e=>{e.compute($(e.inputs[0],`Sigmoid`,e=>`(1.0 / (1.0 + exp(-${e})))`))},Gu=e=>U(e),Ku=(e,t)=>{let n=K(e.inputs[0].dataType);e.compute($(e.inputs[0],`HardSigmoid`,e=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${e} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},qu=e=>{let t=K(e.inputs[0].dataType);e.compute($(e.inputs[0],`HardSwish`,e=>`${e} * max(vec4<${t}>(0.0), min(vec4<${t}>(1.0), vec4<${t}>(${t}(1.0 / 6.0)) * ${e} + vec4<${t}>(0.5)))`))},Ju=e=>{e.compute($(e.inputs[0],`Sin`,`sin`))},Yu=e=>{e.compute($(e.inputs[0],`Sinh`,`sinh`))},Xu=e=>{e.compute($(e.inputs[0],`Sqrt`,`sqrt`))},Zu=e=>{e.compute($(e.inputs[0],`Tan`,`tan`))},Qu=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,$u=e=>{e.compute($(e.inputs[0],`Tanh`,Qu))},ed=(e=`f32`)=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Qu(`v`)};
}
`,td=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,nd=e=>{let t=K(e.inputs[0].dataType);e.compute($(e.inputs[0],`FastGelu`,td,ed(t),void 0,e.inputs[0].dataType))},rd=(e,t)=>{let n=K(e.inputs[0].dataType);return e.compute($(e.inputs[0],`ThresholdedRelu`,e=>`select(vec4<${n}>(0.0), ${e}, ${e} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},id=e=>{e.compute($(e.inputs[0],`Log`,`log`))},ad=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,od=e=>`quick_gelu_impl(${e})`,sd=(e,t)=>{let n=K(e.inputs[0].dataType);e.compute($(e.inputs[0],`QuickGelu`,od,ad(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),fd=F(()=>{"use strict";H(),Q(),cd(),ld=e=>{if(e[0].dims.length!==3)throw Error(`input should have 3 dimensions`);if(![2560,5120,10240].includes(e[0].dims[2]))throw Error(`hidden state should be 2560, 5120 or 10240`);if(e[1].dims.length!==1)throw Error(`bias is expected to have 1 dimensions`);if(e[0].dims[2]!==e[1].dims[0])throw Error(`last dimension of input and bias are not the same`)},ud=e=>{let t=e[0].dims.slice();t[2]/=2;let n=X(`input`,e[0].dataType,e[0].dims,4),r=X(`bias`,e[0].dataType,[e[0].dims[2]],4),i=Z(`output`,e[0].dataType,t,4),a=V.size(t)/4,o=G(e[0].dataType);return{name:`BiasSplitGelu`,getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:t=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${t.declareVariables(n,r,i)}

  ${Pu(o)}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset(`global_idx`,`valueLeft * geluRight`)}
  }`}},dd=e=>{ld(e.inputs),e.compute(ud(e.inputs))}}),Ed=F(()=>{"use strict";z(),H(),Q(),pd=(e,t,n,r,i,a,o,s,c,l,u,d)=>{let f,p;typeof s==`string`?f=p=(e,t)=>`${s}((${e}),(${t}))`:typeof s==`function`?f=p=s:(f=s.scalar,p=s.vector);let m=Z(`outputData`,u,r.length,4),h=X(`aData`,c,t.length,4),g=X(`bData`,l,n.length,4),_;if(i){if(a){let e=V.size(t)===1,r=V.size(n)===1,i=t.length>0&&t[t.length-1]%4==0,a=n.length>0&&n[n.length-1]%4==0;_=e||r?m.setByOffset(`global_idx`,p(e?`${h.type.value}(${h.getByOffset(`0`)}.x)`:h.getByOffset(`global_idx`),r?`${g.type.value}(${g.getByOffset(`0`)}.x)`:g.getByOffset(`global_idx`))):`
            let outputIndices = ${m.offsetToIndices(`global_idx * 4u`)};
            let offsetA = ${h.broadcastedIndicesToOffset(`outputIndices`,m)};
            let offsetB = ${g.broadcastedIndicesToOffset(`outputIndices`,m)};
            ${m.setByOffset(`global_idx`,p(o||i?h.getByOffset(`offsetA / 4u`):`${h.type.value}(${h.getByOffset(`offsetA / 4u`)}[offsetA % 4u])`,o||a?g.getByOffset(`offsetB / 4u`):`${g.type.value}(${g.getByOffset(`offsetB / 4u`)}[offsetB % 4u])`))}
          `}else _=m.setByOffset(`global_idx`,p(h.getByOffset(`global_idx`),g.getByOffset(`global_idx`)))}else{if(!a)throw Error(`no necessary to use scalar implementation for element-wise binary op implementation.`);let e=(e,t,n=``)=>{let r=`aData[indexA${t}][componentA${t}]`,i=`bData[indexB${t}][componentB${t}]`;return`
            let outputIndices${t} = ${m.offsetToIndices(`global_idx * 4u + ${t}u`)};
            let offsetA${t} = ${h.broadcastedIndicesToOffset(`outputIndices${t}`,m)};
            let offsetB${t} = ${g.broadcastedIndicesToOffset(`outputIndices${t}`,m)};
            let indexA${t} = offsetA${t} / 4u;
            let indexB${t} = offsetB${t} / 4u;
            let componentA${t} = offsetA${t} % 4u;
            let componentB${t} = offsetB${t} % 4u;
            ${e}[${t}] = ${n}(${f(r,i)});
          `};_=u===9?`
            var data = vec4<u32>(0);
            ${e(`data`,0,`u32`)}
            ${e(`data`,1,`u32`)}
            ${e(`data`,2,`u32`)}
            ${e(`data`,3,`u32`)}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:`
            ${e(`outputData[global_idx]`,0)}
            ${e(`outputData[global_idx]`,1)}
            ${e(`outputData[global_idx]`,2)}
            ${e(`outputData[global_idx]`,3)}
          `}return`
        ${e.registerUniform(`vec_size`,`u32`).declareVariables(h,g,m)}

        ${d??``}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}
        ${_}
      }`},md=(e,t,n,r,i,a,o=n.dataType)=>{let s=n.dims.map(Number),c=r.dims.map(Number),l=!V.areEqual(s,c),u=s,d=V.size(s),f=!1,p=!1,m=[l];if(l){let e=Qs.calcShape(s,c,!1);if(!e)throw Error(`Can't perform binary op on the given tensors`);u=e.slice(),d=V.size(u);let t=V.size(s)===1,n=V.size(c)===1,r=s.length>0&&s[s.length-1]%4==0,i=c.length>0&&c[c.length-1]%4==0;m.push(t),m.push(n),m.push(r),m.push(i);let a=1;for(let e=1;e<u.length;e++){let t=s[s.length-e];if(t===c[c.length-e])a*=t;else break}a%4==0?(p=!0,f=!0):(t||n||r||i)&&(f=!0)}else f=!0;return m.push(f),{name:e,shaderCache:{hint:t+m.map(e=>e.toString()).join(`_`),inputDependencies:[`rank`,`rank`]},getShaderSource:e=>pd(e,s,c,u,f,l,p,i,n.dataType,r.dataType,o,a),getRunData:()=>({outputs:[{dims:u,dataType:o}],dispatchGroup:{x:Math.ceil(d/64/4)},programUniforms:[{type:12,data:Math.ceil(V.size(u)/4)},...q(s,c,u)]})}},hd=(e,t,n,r,i,a)=>{e.compute(md(t,i??``,e.inputs[0],e.inputs[1],n,r,a))},gd=e=>{hd(e,`Add`,(e,t)=>`${e}+${t}`)},_d=e=>{hd(e,`Div`,(e,t)=>`${e}/${t}`)},vd=e=>{hd(e,`Equal`,{scalar:(e,t)=>`u32(${e}==${t})`,vector:(e,t)=>`vec4<u32>(${e}==${t})`},void 0,void 0,9)},yd=e=>{hd(e,`Mul`,(e,t)=>`${e}*${t}`)},bd=e=>{let t=X(`input`,e.inputs[0].dataType,e.inputs[0].dims).type.value;hd(e,`Pow`,{scalar:(e,t)=>`pow_custom(${e},${t})`,vector:(e,t)=>`pow_vector_custom(${e},${t})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t===`i32`?`round`:``}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},xd=e=>{hd(e,`Sub`,(e,t)=>`${e}-${t}`)},Sd=e=>{hd(e,`Greater`,{scalar:(e,t)=>`u32(${e}>${t})`,vector:(e,t)=>`vec4<u32>(${e}>${t})`},void 0,void 0,9)},Cd=e=>{hd(e,`Less`,{scalar:(e,t)=>`u32(${e}<${t})`,vector:(e,t)=>`vec4<u32>(${e}<${t})`},void 0,void 0,9)},wd=e=>{hd(e,`GreaterOrEqual`,{scalar:(e,t)=>`u32(${e}>=${t})`,vector:(e,t)=>`vec4<u32>(${e}>=${t})`},void 0,void 0,9)},Td=e=>{hd(e,`LessOrEqual`,{scalar:(e,t)=>`u32(${e}<=${t})`,vector:(e,t)=>`vec4<u32>(${e}<=${t})`},void 0,void 0,9)}}),Nd=F(()=>{"use strict";z(),H(),W(),Q(),Dd=(e,t)=>{if(!e||e.length<1)throw Error(`too few inputs`);let n=e[0],r=n.dataType,i=n.dims.length;e.forEach((e,a)=>{if(a!==0){if(e.dataType!==r)throw Error(`input tensors should be one type`);if(e.dims.length!==i)throw Error(`input tensors should have the same shape`);e.dims.forEach((e,r)=>{if(r!==t&&e!==n.dims[r])throw Error(`non concat dimensions must match`)})}})},Od=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,kd=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let a=t.setByOffset(`global_idx`,e[i].getByIndices(`indices`));n===1?r.push(a):i===0?r.push(`if (inputIndex == ${i}u) { ${a} }`):i===n-1?r.push(`else { ${a} }`):r.push(`else if (inputIndex == ${i}) { ${a} }`)}return r.join(`
`)},Ad=(e,t,n,r)=>{let i=V.size(n),a=Array(e.length),o=Array(e.length),s=0,c=[],l=[],u=[{type:12,data:i}];for(let n=0;n<e.length;++n)s+=e[n].dims[t],a[n]=s,l.push(e[n].dims.length),o[n]=X(`input${n}`,r,l[n]),c.push(`rank`),u.push({type:12,data:a[n]});for(let t=0;t<e.length;++t)u.push(...q(e[t].dims));u.push(...q(n));let d=Z(`output`,r,n.length),f=d.indicesGet(`indices`,t),p=Array.from(Array(a.length).keys()).map(e=>`uniforms.sizeInConcatAxis${e}`).join(`,`);return{name:`Concat`,shaderCache:{hint:`${t}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:u}),getShaderSource:t=>`

  ${(()=>{t.registerUniform(`outputSize`,`u32`);for(let n=0;n<e.length;n++)t.registerUniform(`sizeInConcatAxis${n}`,`u32`);return t.declareVariables(...o,d)})()}

  ${Od(a.length,p)}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}

    var indices = ${d.offsetToIndices(`global_idx`)};

    let inputIndex = calculateInputIndex(${f});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${p});
      ${f} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${kd(o,d)}
  }`}},jd=(e,t)=>{let n=e.inputs,r=n[0].dims,i=V.normalizeAxis(t.axis,r.length);Dd(n,i);let a=r.slice();a[i]=n.reduce((e,t)=>e+(t.dims.length>i?t.dims[i]:0),0);let o=n.filter(e=>V.size(e.dims)>0);e.compute(Ad(o,i,a,n[0].dataType),{inputs:o})},Md=e=>U({axis:e.axis})}),Rd=F(()=>{"use strict";z(),H(),Pd=(e,t,n=`f32`)=>{switch(e.activation){case`Relu`:return`value = max(value, ${t}(0.0));`;case`Sigmoid`:return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case`Clip`:return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case`HardSigmoid`:return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case`LeakyRelu`:return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case`Tanh`:return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case``:return``;default:throw Error(`Unsupported activation ${e.activation}`)}},Fd=(e,t)=>{e.activation===`Clip`?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation===`HardSigmoid`?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation===`LeakyRelu`&&t.push({type:1,data:e.alpha})},Id=(e,t)=>{e.activation===`Clip`?t.push({name:`clip_max`,type:`f32`},{name:`clip_min`,type:`f32`}):e.activation===`HardSigmoid`?t.push({name:`alpha`,type:`f32`},{name:`beta`,type:`f32`}):e.activation===`LeakyRelu`&&t.push({name:`alpha`,type:`f32`})},Ld=e=>{let t=e?.activation||``;if(t===`HardSigmoid`){let[n,r]=e?.activation_params||[.2,.5];return{activation:t,alpha:n,beta:r}}if(t===`Clip`){let[n,r]=e?.activation_params||[tc,nc];return{activation:t,clipMax:r,clipMin:n}}if(t===`LeakyRelu`){let[n]=e?.activation_params||[.01];return{activation:t,alpha:n}}return{activation:t}}}),Vd=F(()=>{"use strict";zd=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw Error(`${e}-component is not supported.`)}},Bd=e=>`
      ${e?`value = value + getBiasByOutputCoords(coords);`:``}
      `}),Ud=F(()=>{"use strict";Hd=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Kd=F(()=>{"use strict";z(),H(),Q(),Rd(),Wd=(e,t,n,r,i)=>{let a=r-n;return`
      ${Array.from({length:n}).map((n,o)=>`
      if (${Y(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,Y(i,o+a,r))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join(``)}
`},Gd=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,c=o[o.length-2],l=s[s.length-1],u=o[o.length-1],d=J(l),f=J(u),p=J(c),m=V.size(n)/d/p,h=e.length>2,g=r?r.slice(0,-2):n.slice(0,-2),_=[V.size(g),c,l],v=[{type:12,data:m},{type:12,data:c},{type:12,data:l},{type:12,data:u}];return Fd(t,v),v.push(...q(g,o,s)),h&&v.push(...q(e[2].dims)),v.push(...q(_)),{name:`MatMulNaive`,shaderCache:{hint:`${t.activation};${d};${f};${p};${i}`,inputDependencies:h?[`rank`,`rank`,`rank`]:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:v}),getShaderSource:r=>{let a=Bc(`batch_dims`,e[0].dataType,g.length),c=X(`a`,e[0].dataType,o.length,f),l=X(`b`,e[1].dataType,s.length,d),u=Z(`output`,e[0].dataType,_.length,d),m=G(u.type.tensor),v=Pd(t,u.type.value,m),y=[c,l],b=``;if(h){let t=i?d:1;y.push(X(`bias`,e[2].dataType,e[2].dims.length,t)),b=`${i?`value += bias[col / ${t}];`:`value += ${u.type.value}(bias[row + i]);`}`}let x=[{name:`output_size`,type:`u32`},{name:`M`,type:`u32`},{name:`N`,type:`u32`},{name:`K`,type:`u32`}];Id(t,x);let S=()=>{let e=`var a_data: ${c.type.value};`;for(let t=0;t<f;t++)e+=`
              let b_data${t} = b[(b_offset + (k + ${t}) * uniforms.N + col) / ${d}];`;for(let t=0;t<p;t++){e+=`a_data = a[(a_offset + (row + ${t}) * uniforms.K + k) / ${f}];`;for(let n=0;n<f;n++)e+=`
            values[${t}] = fma(${l.type.value}(a_data${f===1?``:`[${n}]`}), b_data${n}, values[${t}]);
`}return e};return`
  ${r.registerUniforms(x).registerInternalVariables(a).declareVariables(...y,u)}
  ${r.mainStart()}
    ${r.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let col = (global_idx % (uniforms.N / ${d})) * ${d};
    var index1 = global_idx / (uniforms.N / ${d});
    let stride1 = uniforms.M / ${p};
    let row = (index1 % stride1) * ${p};
    let batch = index1 / stride1;

    ${n.length===2?``:`let batch_indices = ${a.offsetToIndices(`batch`)};`}

    var a_indices: ${c.type.indices};
    ${Wd(`a_indices`,c,c.rank-2,a.rank,`batch_indices`)}
    ${c.indicesSet(`a_indices`,c.rank-2,0)}
    ${c.indicesSet(`a_indices`,c.rank-1,0)}
    let a_offset = ${c.indicesToOffset(`a_indices`)};

    var b_indices: ${l.type.indices};
    ${Wd(`b_indices`,l,l.rank-2,a.rank,`batch_indices`)}
    ${l.indicesSet(`b_indices`,l.rank-2,0)}
    ${l.indicesSet(`b_indices`,l.rank-1,0)}
    let b_offset = ${l.indicesToOffset(`b_indices`)};
    var values: array<${u.type.value}, ${p}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${f}) {
      ${S()}
    }
    for (var i = 0u; i < ${p}u; i++) {
      var value = values[i];
      ${b}
      ${v}
      let cur_indices = ${u.type.indices}(batch, row + i, col);
      let offset = ${u.indicesToOffset(`cur_indices`)};
      ${u.setByOffset(`offset / ${d}`,`value`)};
    }
  }
  `}}}}),tf=F(()=>{"use strict";z(),H(),Q(),Rd(),Kd(),Vd(),qd=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?`, batchIndices`:``});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?`, batchIndices`:``});
        `,Jd=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?``:`let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];`}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?``:`acc[i] = BCached3 * ACached3[i] + acc[i];`}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?``:`acc[i] = BCached3 * ACached.w + acc[i];`}
        }`,Yd=(e,t,n=`f32`,r,i=!1,a=32,o=!1,s=32)=>{let c=t[1]*e[1],l=t[0]*e[0],u=i?c:a,d=i?a:c,f=u/t[0],p=a/t[1];if((!i||f!==4||e[1]!==4)&&(i||f!==3&&f!==4)||u%t[0]!==0||a%t[1]!==0||e[0]!==4)throw Error(`If transposeA ${i} is true, innerElementSize ${f} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${f} must be 3 or 4.
  tileAWidth ${u} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${f}<${n}>, ${u/f}>, ${d}>;
var<workgroup> mm_Bsub: array<array<vec4<${n}>, ${l/e[0]}>, ${a}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${f};
const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${o?`0`:`i32(globalId.z)`};
  ${r?`let batchIndices = ${r.offsetToIndices(`u32(batch)`)};`:``}
  let globalRowStart = i32(workgroupId.y) * ${c};

  let num_tiles = ${o?`${Math.ceil(s/a)}`:`(uniforms.dim_inner - 1) / tileInner + 1`};
  var kStart = ${o?`i32(globalId.z) * ${s}`:`0`};

  var acc: array<vec4<${n}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${p};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${qd(i,r)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${p}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${r?`, batchIndices`:``});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${f===3?``:`let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];`}

          ${Jd(i,f)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Xd=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?`, batchIndices`:``});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?`, batchIndices`:``});
            `,Zd=e=>e?`let ACached = mm_Asub[k][tileRow + innerRow];`:`let ACached = mm_Asub[tileRow + innerRow][k];`,Qd=(e,t,n=`f32`,r,i=!1,a=32,o=!1,s=32,c=!1)=>{let l=e[1]*t[1],u=e[0]*t[0],d=i?l:a,f=i?a:l;if(f%t[1]!==0||d%t[0]!==0||a%t[1]!==0)throw Error(`tileAHight ${f} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${d} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let p=f/t[1],m=d/t[0],h=a/t[1],g=c?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${u};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${f}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${d}; inputCol = inputCol + ${t[0]}) {
          ${Xd(i,r)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${a}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${u}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${r?`, batchIndices`:``});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${n}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${i?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${l};

let tileRowA = i32(localId.y) * ${p};
let tileColA = i32(localId.x) * ${m};
let tileRowB = i32(localId.y) * ${h};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${p}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${m}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Xd(i,r)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${h}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${r?`, batchIndices`:``});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${n}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Zd(i)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${n}, ${d}>, ${f}>;
  var<workgroup> mm_Bsub : array<array<${n}, ${u}>, ${a}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${o?`0`:`i32(globalId.z)`};
    ${r?`let batchIndices = ${r.offsetToIndices(`u32(batch)`)};`:``}
    let num_tiles = ${o?`${Math.ceil(s/a)}`:`(uniforms.dim_inner - 1) / tileInner + 1`};
    var kStart = ${o?`i32(globalId.z) * ${s}`:`0`};

    var acc : array<array<${n}, colPerThread>, rowPerThread>;
    ${g}
  }
`},$d=(e,t,n,r,i=!1)=>{let[a,o,s,c]=r,l=G(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${zd(e,l)} {
      var value = ${zd(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${o.type.indices};
        ${Wd(`aIndices`,o,o.rank-2,a.rank,`batchIndices`)}
        ${o.indicesSet(`aIndices`,o.rank-2,`u32(row)`)}
        ${o.indicesSet(`aIndices`,o.rank-1,`u32(colIn)`)}
        value = ${o.getByIndices(`aIndices`)};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${zd(e,l)} {
      var value = ${zd(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${s.type.indices};
        ${Wd(`bIndices`,s,s.rank-2,a.rank,`batchIndices`)}
        ${s.indicesSet(`bIndices`,s.rank-2,`u32(row)`)}
        ${s.indicesSet(`bIndices`,s.rank-1,`u32(colIn)`)}
        value = ${s.getByIndices(`bIndices`)};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${zd(e,l)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?`bias[colIn]`:`${zd(e,l)}(bias[row])`};`:``}
        ${n}
        ${c.setByIndices(`vec3<u32>(coords)`,`value`)}
      }
    }
    `},ef=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,c=o.slice(0,-2),l=s.slice(0,-2),u=r?r.slice(0,-2):n.slice(0,-2),d=V.size(u),f=o[o.length-2],p=o[o.length-1],m=s[s.length-1],h=p%4==0&&m%4==0,g=f<=8?[4,1,1]:[4,4,1],_=[8,8,1],v=[Math.ceil(m/_[0]/g[0]),Math.ceil(f/_[1]/g[1]),Math.ceil(d/_[2]/g[2])],y=h?4:1,b=[...c,f,p/y],x=b.length,S=[...l,p,m/y],C=S.length,w=[d,f,m/y],ee=[{type:6,data:f},{type:6,data:m},{type:6,data:p}];Fd(t,ee),ee.push(...q(u,b,S));let T=[`rank`,`rank`],E=e.length>2;return E&&(ee.push(...q(e[2].dims)),T.push(`rank`)),ee.push(...q(w)),{name:`MatMul`,shaderCache:{hint:`${g};${t.activation};${h};${i}`,inputDependencies:T},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:v[0],y:v[1],z:v[2]},programUniforms:ee}),getShaderSource:n=>{let r=u.length,a=Bc(`batchDims`,e[0].dataType,r,1),o=G(e[0].dataType),s=X(`a`,e[0].dataType,x,y),c=X(`b`,e[1].dataType,C,y),l=Z(`result`,e[0].dataType,w.length,y),d=[s,c];if(E){let t=i?y:1;d.push(X(`bias`,e[2].dataType,e[2].dims.length,t))}let f=[{name:`dim_a_outer`,type:`i32`},{name:`dim_b_outer`,type:`i32`},{name:`dim_inner`,type:`i32`}];Id(t,f);let p=G(l.type.tensor),m=Pd(t,l.type.value,p),v=$d(y,E,m,[a,s,c,l],i);return`
  ${n.registerUniforms(f).registerInternalVariables(a).declareVariables(...d,l)}
  ${v}
  ${h?Yd(g,_,o,a):Qd(g,_,o,a)}
                   `}}}}),af=F(()=>{"use strict";z(),Xs(),Q(),Rd(),Vd(),Ud(),tf(),nf=(e,t,n,r,i=!1,a,o=4,s=4,c=4,l=`f32`)=>{let u=e=>{switch(e){case 1:return`resData = x[xIndex];`;case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return`resData = x[xIndex / 4];`;default:throw Error(`innerElementSize ${e} is not supported.`)}},d=e=>{switch(e){case 1:return`return w[row * i32(uniforms.w_shape[3]) + colIn];`;case 4:return`return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];`;default:throw Error(`innerElementSize ${e} is not supported.`)}},f=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,p=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,m=e?`i32(uniforms.x_shape[1])`:`i32(uniforms.x_shape[2])`,h=e?`i32(uniforms.x_shape[2])`:`i32(uniforms.x_shape[3])`,g=e?`row`:`col`,_=e?`col`:`row`,v=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?`i32(uniforms.result_shape[2])`:`i32(uniforms.result_shape[3])`};
    let outRow = ${g} / outWidth;
    let outCol = ${g} % outWidth;

    let WRow = ${_} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${_} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${_} % inChannels;
    var resData = ${zd(o,l)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${m} && xCol >= 0 && xCol < ${h}) {
      ${f}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${u(o)}
    }
    return resData;`,y=e?t&&r?`
    let col = colIn * ${o};
    ${v}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${v}
    }
    return ${zd(o,l)}(0.0);`:r&&n?`
    let col = colIn * ${o};
    ${v}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${v}
    }
    return ${zd(o,l)}(0.0);`,b=e?r&&n?d(s):`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${d(s)}
    }
    return ${zd(s,l)}(0.0);`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${d(s)}
    }
    return ${zd(s,l)}(0.0);`,x=zd(c,l),S=zd(e?o:s,l),C=zd(e?s:o,l),w=Pd(a,x,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${S} {
      ${e?y:b}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?b:y}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${x}) {
      let col = colIn * ${c};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?`i32(uniforms.result_shape[2])`:`i32(uniforms.result_shape[3])`};
      ${p}
      ${Bd(i)}
      ${w}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},rf=(e,t,n,r,i,a,o,s,c)=>{let l=t.format===`NHWC`,u=l?e[0].dims[3]:e[0].dims[1],d=n[0],f=l?n[2]:n[3],p=l?n[1]:n[2],m=l?n[3]:n[1],h=l&&(u%4==0||u%3==0)&&m%4==0,g=l?m:f*p,_=l?f*p:m,v=[8,8,1],y=r<=8?[4,1,1]:[4,4,1],b=[Math.ceil(g/v[0]/y[0]),Math.ceil(_/v[1]/y[1]),Math.ceil(d/v[2]/y[2])];B(`verbose`,()=>`[conv2d_mm_webgpu] dispatch = ${b}`);let x=h?l&&u%4!=0?3:4:1,S=v[1]*y[1],C=v[0]*y[0],w=Math.max(v[0]*x,v[1]),ee=r%S===0,T=i%C===0,E=a%w===0,D=h?[x,4,4]:[1,1,1],te=[{type:6,data:r},{type:6,data:i},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Fd(t,te),te.push(...q(e[0].dims,e[1].dims));let O=[`rank`,`rank`];return o&&(te.push(...q(e[2].dims)),O.push(`rank`)),te.push(...q(n)),{name:`Conv2DMatMul`,shaderCache:{hint:`${t.cacheKey};${x};${h};${ee};${T};${E};${S};${C};${w}`,inputDependencies:O},getRunData:()=>({outputs:[{dims:c?c(n):n,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:te}),getShaderSource:r=>{let i=[{name:`dim_a_outer`,type:`i32`},{name:`dim_b_outer`,type:`i32`},{name:`dim_inner`,type:`i32`},{name:`pad`,type:`i32`,length:2},{name:`stride`,type:`i32`,length:2},{name:`dilation`,type:`i32`,length:2}];Id(t,i);let a=h?4:1,c=G(e[0].dataType),u=`
      fn setOutputAtIndex(flatIndex : i32, value : ${h?`vec4<${c}>`:c}) {
        result[flatIndex] = ${h?`vec4<${c}>`:c}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${h?`vec4<${c}>`:c}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${h?`/ 4`:``}, value);
      }`,d=[X(`x`,e[0].dataType,e[0].dims.length,x===3?1:x),X(`w`,e[1].dataType,e[1].dims.length,a)],f=Z(`result`,e[0].dataType,n.length,a);if(o){let t=X(`bias`,e[2].dataType,e[2].dims.length,a);d.push(t),u+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${h?`vec4<${c}>`:c} {
          return bias[coords.${l?`w`:`y`}${h?`/ 4`:``}];
        }`}return`
        ${Hd(`uniforms.result_strides`)}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${r.registerUniforms(i).declareVariables(...d,f)}
        ${u}
        ${nf(l,ee,T,E,o,t,D[0],D[1],D[2],c)}
        ${h?Yd(y,v,c,void 0,!l,w):Qd(y,v,c,void 0,!l,w,!1,void 0,s)}`}}}}),mf=F(()=>{"use strict";z(),Xs(),H(),Q(),Rd(),Vd(),of=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},sf=e=>typeof e==`number`?[e,e,e]:e,cf=(e,t)=>t<=1?e:e+(e-1)*(t-1),lf=(e,t,n,r=1)=>{let i=cf(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},uf=(e,t,n,r,i)=>{i??=lf(e,t[0],r[0]);let a=[0,0,0,n];for(let n=0;n<3;n++)e[n]+2*i>=t[n]&&(a[n]=Math.trunc((e[n]-t[n]+2*i)/r[n]+1));return a},df=(e,t,n,r,i,a,o,s,c,l)=>{let u,d,f,p;if(e===`VALID`&&(e=0),typeof e==`number`){u={top:e,bottom:e,left:e,right:e,front:e,back:e};let m=uf([t,n,r,1],[s,c,l],1,[i,a,o],e);d=m[0],f=m[1],p=m[2]}else if(Array.isArray(e)){if(!e.every((e,t,n)=>e===n[0]))throw Error(`Unsupported padding parameter: ${e}`);u={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let m=uf([t,n,r,1],[s,c,l],1,[i,a,o],e[0]);d=m[0],f=m[1],p=m[2]}else if(e===`SAME_UPPER`){d=Math.ceil(t/i),f=Math.ceil(n/a),p=Math.ceil(r/o);let e=(d-1)*i+s-t,m=(f-1)*a+c-n,h=(p-1)*o+l-r,g=Math.floor(e/2),_=e-g,v=Math.floor(m/2),y=m-v,b=Math.floor(h/2);u={top:v,bottom:y,left:b,right:h-b,front:g,back:_}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:u,outDepth:d,outHeight:f,outWidth:p}},ff=(e,t,n,r,i,a=!1,o=`channelsLast`)=>{let s,c,l,u,d;if(o===`channelsLast`)[s,c,l,u,d]=e;else if(o===`channelsFirst`)[s,d,c,l,u]=e;else throw Error(`Unknown dataFormat ${o}`);let[f,,p,m,h]=t,[g,_,v]=sf(n),[y,b,x]=sf(r),S=cf(p,y),C=cf(m,b),w=cf(h,x),{padInfo:ee,outDepth:T,outHeight:E,outWidth:D}=df(i,c,l,u,g,_,v,S,C,w),te=a?f*d:f,O=[0,0,0,0,0];return o===`channelsFirst`?O=[s,te,T,E,D]:o===`channelsLast`&&(O=[s,T,E,D,te]),{batchSize:s,dataFormat:o,inDepth:c,inHeight:l,inWidth:u,inChannels:d,outDepth:T,outHeight:E,outWidth:D,outChannels:te,padInfo:ee,strideDepth:g,strideHeight:_,strideWidth:v,filterDepth:p,filterHeight:m,filterWidth:h,effectiveFilterDepth:S,effectiveFilterHeight:C,effectiveFilterWidth:w,dilationDepth:y,dilationHeight:b,dilationWidth:x,inShape:e,outShape:O,filterShape:t}},pf=(e,t,n,r,i,a)=>{let o=a===`channelsLast`;o?e[0].dims[3]:e[0].dims[1];let s=[64,1,1],c={x:n.map((e,t)=>t)},l=[Math.ceil(of(c.x.map(e=>n[e]))/s[0]),1,1];B(`verbose`,()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let u=[{type:12,data:V.size(n)},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];Fd(t,u),u.push(...q(e[0].dims,e[1].dims));let d=[`rank`,`rank`],f=e.length===3;return f&&(u.push(...q(e[2].dims)),d.push(`rank`)),u.push(...q(n)),{name:`Conv3DNaive`,shaderCache:{hint:`${t.cacheKey};${o};1;${f}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:u}),getShaderSource:a=>{let s=[{name:`output_size`,type:`u32`},{name:`filter_dims`,type:`u32`,length:r.length},{name:`pads`,type:`u32`,length:i.length},{name:`strides`,type:`u32`,length:t.strides.length},{name:`dilations`,type:`u32`,length:t.dilations.length}];Id(t,s);let c=G(e[0].dataType),l=X(`x`,e[0].dataType,e[0].dims.length,1),u=X(`W`,e[1].dataType,e[1].dims.length,1),d=[l,u],p=Z(`result`,e[0].dataType,n.length,1),m=``;if(f){let t=X(`bias`,e[2].dataType,e[2].dims.length,1);d.push(t),m+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${c} {
          return bias[${o?Y(`coords`,4,5):Y(`coords`,1,5)}];
        }`}let h=zd(1,c),g=Pd(t,h,c);return`
            ${m}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> ${c} {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${l.getByIndices(`aIndices`)};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> ${c} {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${u.getByIndices(`aIndices`)};
            }
          ${a.registerUniforms(s).declareVariables(...d,p)}
          ${a.mainStart()}
          ${a.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
              let coords = ${p.offsetToIndices(`global_idx`)};
              let batch = ${Y(`coords`,0,l.rank)};
              let d2 = ${o?Y(`coords`,l.rank-1,l.rank):Y(`coords`,1,l.rank)};
              let xFRCCorner = vec3<u32>(${o?Y(`coords`,1,l.rank):Y(`coords`,2,l.rank)},
              ${o?Y(`coords`,2,l.rank):Y(`coords`,3,l.rank)},
              ${o?Y(`coords`,3,l.rank):Y(`coords`,4,l.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${o?Y(`uniforms.x_shape`,1,l.rank):Y(`uniforms.x_shape`,2,l.rank)};
              let xShapeZ = ${o?Y(`uniforms.x_shape`,2,l.rank):Y(`uniforms.x_shape`,3,l.rank)};
              let xShapeW = ${o?Y(`uniforms.x_shape`,3,l.rank):Y(`uniforms.x_shape`,4,l.rank)};
              let xShapeU = ${o?Y(`uniforms.x_shape`,4,l.rank):Y(`uniforms.x_shape`,1,l.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = ${c}(0);
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${o?`let xValues = vec4<${c}>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<${c}>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<${c}>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${o?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${o?`let xValues = vec2<${c}>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<${c}>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<${c}>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${o?`let xValues = vec3<${c}>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<${c}>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<${c}>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${f?`value = value + getBiasByOutputCoords(coords)`:``};
              ${g}
              result[global_idx] = ${c}(value);
          }`}}}}),_f=F(()=>{"use strict";z(),H(),Q(),Rd(),hf=(e,t,n,r)=>{let i=e.length>2,a=i?`value += b[output_channel];`:``,o=e[0].dims,s=e[1].dims,c=t.format===`NHWC`,l=c?n[3]:n[1],u=l/t.group,d=c&&u>=4?J(l):1,f=V.size(n)/d,p=[{type:12,data:f},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:u}];Fd(t,p),p.push(...q(o,[s[0],s[1],s[2],s[3]/d]));let m=i?[`rank`,`rank`,`rank`]:[`rank`,`rank`];return p.push(...q([n[0],n[1],n[2],n[3]/d])),{name:`GroupedConv`,shaderCache:{hint:`${t.cacheKey}_${d}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:p}),getShaderSource:r=>{let l=Z(`output`,e[0].dataType,n.length,d),u=G(l.type.tensor),f=Pd(t,l.type.value,u),p=X(`x`,e[0].dataType,o.length),m=X(`w`,e[1].dataType,s.length,d),h=[p,m];i&&h.push(X(`b`,e[2].dataType,e[2].dims,d));let g=[{name:`output_size`,type:`u32`},{name:`dilations`,type:`u32`,length:t.dilations.length},{name:`strides`,type:`u32`,length:2},{name:`pads`,type:`u32`,length:2},{name:`output_channels_per_group`,type:`u32`}];Id(t,g);let _=c?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${p.get(`batch`,`xHeight`,`xWidth`,`input_channel`)};
            let wVal = ${m.get(`wHeight`,`wWidth`,`wInChannel`,`output_channel`)};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${p.get(`batch`,`input_channel`,`xHeight`,`xWidth`)};
            let wVal = ${m.get(`output_channel`,`wInChannel`,`wHeight`,`wWidth`)};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${r.registerUniforms(g).declareVariables(...h,l)}

  ${r.mainStart()}
    ${r.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

    let outputIndices = ${l.offsetToIndices(`global_idx`)};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${c?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${c?1:2}], outputIndices[${c?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${d} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${c?2:1}];

    var value: ${l.type.value} = ${l.type.value}(0);
    ${_}
    ${a}
    ${f}
    ${l.setByOffset(`global_idx`,`value`)}
  }`}}},gf=(e,t,n,r)=>{let i=e.length>2,a=J(n[3]),o=J(n[2]),s=V.size(n)/a/o,c=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],u=[n[0],n[1],n[2],n[3]/a],d=[{type:12,data:s},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Fd(t,d),d.push(...q(c,l,u));let f=(o-1)*t.strides[1]+l[1];return{name:`GroupedConv-Vectorize`,shaderCache:{hint:`${t.cacheKey};${a};${o};${f};${l[0]};${l[1]}`,inputDependencies:i?[`rank`,`rank`,`type`]:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:n=>{let r=Z(`output`,e[0].dataType,u.length,a),s=G(r.type.tensor),d=Pd(t,r.type.value,s),p=X(`x`,e[0].dataType,c.length,a),m=X(`w`,e[1].dataType,l.length,a),h=[p,m];i&&h.push(X(`b`,e[2].dataType,e[2].dims,a));let g=i?`value += b[output_channel];`:``,_=[{name:`output_size`,type:`u32`},{name:`strides`,type:`i32`,length:2},{name:`pads`,type:`i32`,length:2}];return Id(t,_),`
  ${n.registerUniforms(_).declareVariables(...h,r)}
  ${n.mainStart()}
    ${n.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${o}u;
    let col = (index1 % width1) * ${o}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${p.type.value}, ${f}>;
    var values: array<${r.type.value}, ${o}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${l[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${f}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${p.get(`batch`,`u32(x_height)`,`u32(x_width)`,`input_channel`)};
          } else {
            x_vals[i] = ${p.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${l[1]}; w_width++) {
          let w_val = ${m.get(`w_height`,`w_width`,`0`,`output_channel`)};
          for (var i = 0u; i < ${o}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${o}u; i++) {
      var value = values[i];
      ${g}
      ${d}
      ${r.set(`batch`,`row`,`col + i`,`output_channel`,`value`)};
    }
  }`}}}}),Df=F(()=>{"use strict";H(),af(),mf(),tf(),_f(),Rd(),Kd(),Qc(),vf=(e,t,n,r,i,a)=>{let o=e[0],s=e.slice(a?1:2,a?3:4),c=s.length,l=t[0],u=t.slice(2).map((e,t)=>e+(e-1)*(n[t]-1)),d=s.map((e,t)=>e+r[t]+r[t+c]).map((e,t)=>Math.floor((e-u[t]+i[t])/i[t]));return d.splice(0,0,o),d.splice(a?3:1,0,l),d},yf=[2,3,1,0],bf=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw Error(`Conv requires 2 or 3 inputs`);if(e[0].dims.length>5)throw Error(`greater than 5D is not supported`);if(e[0].dims.length!==e[1].dims.length)throw Error(`filter does not have same dimension as input`);if(e[0].dims[t.format===`NHWC`?e[0].dims.length-1:1]!==e[1].dims[1]*t.group)throw Error(`FILTER_IN_CHANNEL should be equal to DATA_CHANNEL`);if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw Error(`invalid bias`);let n=e[0].dims.length-2;if(t.dilations.length!==n)throw Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw Error(`invalid kernel shape`)},xf=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let e=2;e<t[1].dims.length;++e)n[e-2]===0&&(n[e-2]=t[1].dims[e]);let r=e.pads.slice();$s.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format===`NHWC`,e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},Sf=e=>{let t=Ld(e),n=e.format;return{autoPad:[`NOTSET`,`VALID`,`SAME_UPPER`,`SAME_LOWER`][e.auto_pad],format:n,dilations:e.dilations,group:e.group,kernelShape:e.kernel_shape,pads:e.pads,strides:e.strides,wIsConst:e.w_is_const(),...t,cacheKey:`${e.format};${t.activation};`}},Cf=(e,t,n,r)=>{let i=n.format===`NHWC`,a=vf(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let o=[t[0]];if(i){let r=e.kernelCustomData.wT??e.compute(Yc(t[1],yf),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=r),o.push(r)}else o.push(t[1]);t.length===3&&o.push(t[2]),!e.adapterInfo.isArchitecture(`ampere`)&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(gf(o,n,a,r),{inputs:o}):e.compute(hf(o,n,a,r),{inputs:o});return}let o=t.length===3,s=t[0].dims[i?1:2],c=t[0].dims[i?2:3],l=t[0].dims[i?3:1],u=t[1].dims[2],d=t[1].dims[3],f=a[i?1:2],p=a[i?2:3],m=a[i?3:1],h=i&&u===s&&d===c&&n.pads[0]===0&&n.pads[1]===0;if(h||u===1&&d===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let u=a[0],d,g,_,v=[];if(i){let r=e.kernelCustomData.wT??e.compute(Yc(t[1],yf),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=r),h){let e=s*c*l;d=t[0].reshape([1,u,e]),g=r.reshape([1,e,m]),_=[1,u,m]}else d=t[0].reshape([u,s*c,l]),g=r.reshape([1,l,m]),_=[u,f*p,m];v.push(d),v.push(g)}else d=t[0].reshape([u,l,s*c]),g=t[1].reshape([1,m,l]),_=[u,m,f*p],v.push(g),v.push(d);o&&v.push(t[2]);let y=_[2],b=v[0].dims[v[0].dims.length-1];y<8&&b<8?e.compute(Gd(v,n,a,_,i,r),{inputs:v}):e.compute(ef(v,n,a,_,i,r),{inputs:v});return}let g=e.kernelCustomData.wT??e.compute(Yc(t[1],yf),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=g);let _=[t[0],g];o&&_.push(t[2]);let v=i?f*p:m,y=i?m:f*p,b=u*d*l;e.compute(rf(_,n,a,v,y,b,o,!0,r),{inputs:_})},wf=(e,t)=>{let n=t.format===`NHWC`,r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),o=[1].concat(t.dilations),s=[1].concat(t.kernelShape),c=xf({...t,pads:i,strides:a,dilations:o,kernelShape:s},r);Cf(e,r,c,e=>n?[e[0],e[2],e[3]]:[e[0],e[1],e[3]])},Tf=(e,t,n)=>{let r=n.format===`NHWC`?`channelsLast`:`channelsFirst`,i=xf(n,t),a=n.autoPad===`NOTSET`?n.pads:n.autoPad,o=ff(t[0].dims,t[1].dims,n.strides,n.dilations,a,!1,r);e.compute(pf(t,i,o.outShape,[o.filterDepth,o.filterHeight,o.filterWidth],[o.padInfo.front,o.padInfo.top,o.padInfo.left],r))},Ef=(e,t)=>{if(bf(e.inputs,t),e.inputs[0].dims.length===3)wf(e,t);else if(e.inputs[0].dims.length===5)Tf(e,e.inputs,t);else{let n=xf(t,e.inputs);Cf(e,e.inputs,n)}}}),kf=F(()=>{"use strict";z(),Xs(),H(),Q(),Of=(e,t,n)=>{let r=e.length>2,i=t.outputShape,a=t.format===`NHWC`,o=t.group,s=e[1].dims,c=s[2]/o,l=s[3],u=a?J(c):1,d=a&&l===1&&c>=4,f=d?Math.floor(c/4)*4:Math.floor(c/u)*u,p=c-f,m=a?J(l):1,h=a?l===1?u:m:1,g=V.size(i)/m,_=[Math.ceil(g/64),1,1];B(`verbose`,()=>`[conv2d_backprop_webgpu] dispatch = ${_}`);let v=[`rank`,`rank`],y=[t.strides[0],t.strides[1]],b=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],x=[t.dilations[0],t.dilations[1]],S=[b[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),b[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],C=[S[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),S[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],w=[{type:12,data:g},{type:12,data:y},{type:12,data:b},{type:12,data:x},{type:12,data:S},{type:6,data:C},{type:12,data:f},{type:12,data:c},{type:12,data:l},...q(e[0].dims,e[1].dims)];return r&&(w.push(...q(e[2].dims)),v.push(`rank`)),w.push(...q(i)),{name:`ConvTranspose2D`,shaderCache:{hint:`${t.cacheKey};${u}${h}${m}${d}${p}`,inputDependencies:v},getRunData:()=>({dispatchGroup:{x:_[0],y:_[1],z:_[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:w}),getShaderSource:t=>{let n=[{name:`output_size`,type:`u32`},{name:`strides`,type:`u32`,length:y.length},{name:`filter_dims`,type:`u32`,length:b.length},{name:`dilations`,type:`u32`,length:b.length},{name:`effective_filter_dims`,type:`u32`,length:S.length},{name:`pads`,type:`i32`,length:C.length},{name:`input_channels_per_group_int`,type:`u32`},{name:`input_channels_per_group`,type:`u32`},{name:`output_channels_per_group`,type:`u32`}],o=G(e[0].dataType),s=a?1:2,c=a?2:3,l=a?3:1,f=X(`W`,e[1].dataType,e[1].dims.length,h),g=X(`Dy`,e[0].dataType,e[0].dims.length,u),_=[g,f];r&&_.push(X(`bias`,e[2].dataType,[i[l]].length,m));let v=Z(`result`,e[0].dataType,i.length,m),x=`
            let outputIndices = ${v.offsetToIndices(`global_idx * ${m}`)};
            let batch = ${v.indicesGet(`outputIndices`,0)};
            let d1 = ${v.indicesGet(`outputIndices`,l)};
            let r = ${v.indicesGet(`outputIndices`,s)};
            let c = ${v.indicesGet(`outputIndices`,c)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${v.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${o}(dyRCorner) + ${o}(wR)) / ${o}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${o}(uniforms.Dy_shape[${s}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${o}(dyCCorner) + ${o}(wC)) / ${o}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${o}(uniforms.Dy_shape[${c}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${d?`
                var x_offset = ${g.indicesToOffset(`${g.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${u};
                var w_offset = ${f.indicesToOffset(`${f.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${h};
                  `:``}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${d?4:u}) {
                  ${(()=>{let e=``;if(d)u===4?e+=`
        let xValue = ${g.getByOffset(`x_offset`)};
        let wValue = ${f.getByOffset(`w_offset`)};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:u===2?e+=`
          dotProd = dotProd + dot(vec4<${o}>(${g.getByOffset(`x_offset`)}, ${g.getByOffset(`x_offset + 1u`)}), vec4<${o}>(${f.getByOffset(`w_offset`)}, ${f.getByOffset(`w_offset + 1u`)}));
          x_offset += 2u;
          w_offset += 2u;`:u===1&&(e+=`
          dotProd = dotProd + dot(vec4<${o}>(${g.getByOffset(`x_offset`)}, ${g.getByOffset(`x_offset + 1u`)}, ${g.getByOffset(`x_offset + 2u`)}, ${g.getByOffset(`x_offset + 3u`)}), vec4<${o}>(${f.getByOffset(`w_offset`)}, ${f.getByOffset(`w_offset + 1u`)}, ${f.getByOffset(`w_offset + 2u`)}, ${f.getByOffset(`w_offset + 3u`)}));
          x_offset += 4u;
          w_offset += 4u;`);else if(e+=`
                  let xValue = ${a?g.getByOffset(`${g.indicesToOffset(`${g.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${u}`):g.get(`batch`,`inputChannel`,`idyR`,`idyC`)};
        `,u===1)e+=`
          let w_offset = ${f.indicesToOffset(`${f.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${f.getByOffset(`w_offset / ${h}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let t=0;t<u;t++)e+=`
            let wValue${t} = ${f.getByOffset(`${f.indicesToOffset(`${f.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${t}, wOutChannel)`)} / ${h}`)};
            dotProd = dotProd + xValue[${t}] * wValue${t};`;return e})()}
                  inputChannel = inputChannel + ${d?4:u};
                }
                ${(()=>{if(p===0)return``;if(!d)throw Error(`packInputAs4 ${d} is not true.`);let e=``;if(u===1){e+=`dotProd = dotProd`;for(let t=0;t<p;t++)e+=`
            + ${g.getByOffset(`x_offset + ${t}`)} * ${f.getByOffset(`w_offset + ${t}`)}`;e+=`;`}else if(u===2){if(p!==2)throw Error(`Invalid inputChannelsRemainder ${p}.`);e+=`
          let xValue = ${g.getByOffset(`x_offset`)};
          let wValue = ${f.getByOffset(`w_offset`)};
          dotProd = dotProd + dot(xValue, wValue);`}return e})()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${m}]`:``};
            ${v.setByOffset(`global_idx`,`value`)};
          `;return`
    ${t.registerUniforms(n).declareVariables(..._,v)}
      ${t.mainStart()}
      ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)};
    ${x}}`}}}}),zf=F(()=>{"use strict";kf(),Rd(),Qc(),Af=(e,t,n,r,i,a)=>(e-1)*t+n+(r-1)*i+1-a,jf=(e,t,n,r,i)=>{let a=Math.floor(e/2);t===`SAME_UPPER`?(n[r]=a,n[i]=e-a):t===`SAME_LOWER`&&(n[r]=e-a,n[i]=a)},Mf=(e,t,n,r,i,a,o,s,c,l)=>{let u=e.length-2,d=l.length===0;c.length<u&&c.push(...Array(u-c.length).fill(0));let f=e[0],p=t[s?3:1]*i;for(let i=0,f=e.length-u-+!!s;i<u;++i,++f){let s=e[f],p=d?s*o[i]:l[i],m=Af(s,o[i],a[i],t[f],n[i],p);jf(m,r,a,i,i+u),d&&l.push(o[i]*(s-1)+c[i]+(t[f]-1)*n[i]+1-a[i]-a[i+u])}l.splice(0,0,f),l.splice(s?3:1,0,p)},Nf=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((e,t)=>e*t,1)===0){n.length=0;for(let e=2;e<t[1].dims.length;++e)n.push(t[1].dims[e])}let r=e.format===`NHWC`;n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),a=e.outputShape.slice(),o=e.outputPadding.slice(),s=t[0].dims,c=e.dilations.slice();if(c.reduce((e,t)=>e+t,0)===0){let e=t[0].dims.length-2;c=Array(e).fill(1)}let l=e.strides.slice();if(l.reduce((e,t)=>e+t,0)===0){let e=t[0].dims.length-2;l=Array(e).fill(1)}Mf(s,n,c,e.autoPad,e.group,i,l,r,o,a);let u=Object.assign({},e);return Object.assign(u,{kernelShape:n,pads:i,outputPadding:o,outputShape:a,dilations:c,strides:l}),u},Pf=e=>{let t=Ld(e),n=e.format,r=[`NOTSET`,`VALID`,`SAME_UPPER`,`SAME_LOWER`][typeof e.autoPad>`u`?0:e.autoPad],i=e.dilations,a=e.group??1,o=e.kernelShape,s=e.pads,c=e.strides,l=e.wIsConst();return{autoPad:r,format:n,dilations:i,group:a,kernelShape:o,outputPadding:e.outputPadding,outputShape:e.outputShape,pads:s,strides:c,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Ff=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw Error(`Conv requires 2 or 3 inputs`);if(e[0].dims.length!==4&&e[0].dims.length!==3)throw Error(`currently only support 2-dimensional conv`);if(e[0].dims.length!==e[1].dims.length)throw Error(`filter does not have same dimension as input`);if(e[0].dims[t.format===`NHWC`?e[0].dims.length-1:1]!==e[1].dims[0])throw Error(`FILTER_IN_CHANNEL should be equal to DATA_CHANNEL`);let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw Error(`invalid bias`);let r=e[0].dims.length-2;if(t.dilations.reduce((e,t)=>e+t,0)>0&&t.dilations.length!==r)throw Error(`dilations should be ${r}D`);if(t.strides.reduce((e,t)=>e+t,0)>0&&t.strides.length!==r)throw Error(`strides should be ${r}D`);if(t.pads.reduce((e,t)=>e+t,0)>0&&t.pads.length!==r*2)throw Error(`pads should be ${r*2}D`);if(t.outputPadding.length!==r&&t.outputPadding.length!==0)throw Error(`output_padding should be ${r}D`);if(t.kernelShape.reduce((e,t)=>e+t,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw Error(`invalid kernel shape`);if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw Error(`invalid output shape`)},If=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(Yc(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let a=[t[0],i];t.length===3&&a.push(t[2]),e.compute(Of(a,n,r),{inputs:a})},Lf=(e,t)=>{let n=t.format===`NHWC`,r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let o=t.strides;(o.length===0||o[0]===0)&&(o=[1]);let s=t.pads;s.length===0&&(s=[0,0]),s=[0,s[0],0,s[1]],o=[1].concat(o),a=[1].concat(a),i=[1].concat(i);let c=t.outputPadding;c=[0].concat(c);let l=Nf({...t,pads:s,strides:o,dilations:a,kernelShape:i,outputPadding:c},r);If(e,r,l,e=>n?[e[0],e[2],e[3]]:[e[0],e[1],e[3]])},Rf=(e,t)=>{if(Ff(e.inputs,t),e.inputs[0].dims.length===3)Lf(e,t);else{let n=Nf(t,e.inputs);If(e,e.inputs,n)}}}),Uf=F(()=>{"use strict";z(),H(),W(),Q(),Bf=(e,t,n,r)=>{let i=V.size(t),a=t.length,o=X(`input`,e,a),s=Z(`output`,e,a),c=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),l=V.normalizeAxis(c,a);return{name:`CumSum`,shaderCache:{hint:r.cacheKey,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:l},...q(t,t)]}),getShaderSource:e=>{let t=` i32(${o.indicesGet(`inputIndices`,`uniforms.axis`)}) `,n=Y(`uniforms.input_shape`,`uniforms.axis`,a),i=r.reverse?t+(r.exclusive?` + 1`:``):`0`,c=r.reverse?n:t+(r.exclusive?``:` + 1`);return`
                ${e.registerUniform(`outputSize`,`u32`).registerUniform(`axis`,`u32`).declareVariables(o,s)}
                ${e.mainStart()}
                  ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
                  var inputIndices = ${s.offsetToIndices(`global_idx`)};
                  var sum = ${s.type.value}(0);
                  let first : i32 = ${i};
                  let last : i32 = ${c};
                  for (var i : i32 = first; i < last; i++) {
                    ${o.indicesSet(`inputIndices`,`uniforms.axis`,`u32(i)`)};
                    sum = sum + ${o.getByIndices(`inputIndices`)};
                  }
                  ${s.setByOffset(`global_idx`,`sum`)};
                }`}}},Vf=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(Bf(r,n,i,t),{inputs:[0]})},Hf=e=>{let t=e.exclusive===1,n=e.reverse===1;return U({exclusive:t,reverse:n})}}),Yf=F(()=>{"use strict";z(),H(),W(),Q(),Wf=e=>{if(!e||e.length!==1)throw Error(`DepthToSpace requires 1 input.`);if(e[0].dims.length!==4)throw Error(`DepthToSpace requires 4D input.`)},Gf=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let r=0;r<t;++r)i.push(n.indicesSet(`a`,e[r],`i[${r}]`));return i.push(`return a;}`),i.join(`
`)},Kf=(e,t)=>{let n,r,i,a,o,s,c=t.format===`NHWC`,l=t.blocksize,u=t.mode===`DCR`;c?([n,r,i,a]=e.dims,o=u?[n,r,i,l,l,a/l**2]:[n,r,i,a/l**2,l,l],s=u?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],o=u?[n,l,l,a/l**2,r,i]:[n,a/l**2,l,l,r,i],s=u?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let d=e.reshape(o),f=d.dims.length,p=e.dataType,m=X(`a`,p,f),h=Z(`output`,p,f);return{name:`DepthToSpace`,shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:[`rank`]},getRunData:e=>{let t=c?[n,r*l,i*l,a/l**2]:[n,a/l**2,r*l,i*l],o=V.size(t),u=d.dims,f=V.sortBasedOnPerm(u,s);return{outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:[{type:12,data:o},...q(u,f)]}},getShaderSource:e=>`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(m,h)}

  ${Gf(s,f,m,h)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

    let indices = ${h.offsetToIndices(`global_idx`)};
    let aIndices = perm(indices);

    ${h.setByOffset(`global_idx`,m.getByIndices(`aIndices`))}
  }`}},qf=(e,t)=>{Wf(e.inputs),e.compute(Kf(e.inputs[0],t))},Jf=e=>U({blocksize:e.blocksize,mode:e.mode,format:e.format})}),pp=F(()=>{"use strict";z(),H(),W(),Q(),Xf=256,Zf=512,Qf=2*Math.PI,$f=e=>{let t=[],n=e;for(let e of[4,2,3,5])for(;n%e===0;)t.push(e),n/=e;return n===1?t:void 0},ep=e=>{let t=e.toPrecision(9);return/[.eE]/.test(t)?t:`${t}.0`},tp=(e,t,n,r,i)=>{let a=n/e,o=Zf-r,s=e=>`smem[${o}u + base + ${e*t}u]`,c=`  for (var t = local_idx; t < ${a}u; t += ${Xf}u) {
`;c+=`    let twiddleIndex = t % ${t}u;
    let angleUnit = f32(twiddleIndex);
`,c+=`    var leg: array<vec2<f32>, 5>;
`;for(let n=0;n<e;n++){let o=`${r}u + t + ${n*a}u`;if(n===0)c+=`    leg[0] = smem[${o}];
`;else{let r=i*Qf*n/(e*t);c+=`    { let a = ${ep(r)} * angleUnit; leg[${n}] = cmul(smem[${o}], vec2<f32>(cos(a), sin(a))); }
`}}if(c+=`    let base = (t / ${t}u) * ${t*e}u + twiddleIndex;
`,e===2)c+=`    ${s(0)} = leg[0] + leg[1];
    ${s(1)} = leg[0] - leg[1];
`;else if(e===4){let e=i<0?`vec2<f32>(oddDiff.y, -oddDiff.x)`:`vec2<f32>(-oddDiff.y, oddDiff.x)`;c+=`    let evenSum = leg[0] + leg[2]; let evenDiff = leg[0] - leg[2];
`,c+=`    let oddSum = leg[1] + leg[3]; let oddDiff = leg[1] - leg[3];
`,c+=`    let oddRot = ${e};
`,c+=`    ${s(0)} = evenSum + oddSum;
    ${s(1)} = evenDiff + oddRot;
`,c+=`    ${s(2)} = evenSum - oddSum;
    ${s(3)} = evenDiff - oddRot;
`}else for(let t=0;t<e;t++){let n=[`leg[0]`];for(let r=1;r<e;r++){let a=i*Qf*(r*t)/e,o=ep(Math.cos(a)),s=ep(Math.sin(a));n.push(`vec2<f32>(leg[${r}].x*${o} - leg[${r}].y*${s}, leg[${r}].x*${s} + leg[${r}].y*${o})`)}c+=`    ${s(t)} = ${n.join(` + `)};
`}return`${c}  }
  workgroupBarrier();
`},np=(e,t,n)=>{let r=``,i=1,a=0;for(let o of e)r+=tp(o,i,t,a,n),i*=o,a=Zf-a;return{code:r,resultOffset:a}},rp=(e,t,n,r,i)=>{let a=e.dims,o=a.length,s=a[o-1],c=a[t],l=n&&r?(c-1)*2:c;i!==void 0&&(l=i);let u=n&&r?1:2,d=r&&!n?Math.floor(l/2)+1:l,f=a.slice();f[t]=d,f[o-1]=u;let p=1;for(let e=t+1;e<o-1;e++)p*=a[e];let m=V.size(a)/s/c;return{dataType:e.dataType,outputDims:f,length:l,signalLength:c,inner:p,batch:m,inputComponents:s,outputComponents:u,outputLength:d,inverse:n,onesided:r}},ip=(e,t)=>[t,e.length,e.inputComponents,e.outputComponents,e.inverse,e.onesided].join(`;`),ap=e=>[{type:12,data:e.batch},{type:12,data:e.signalLength},{type:12,data:e.inner},{type:12,data:e.outputLength}],op=(e,t,n)=>e.registerUniform(`batch`,`u32`).registerUniform(`signalLength`,`u32`).registerUniform(`inner`,`u32`).registerUniform(`outputLength`,`u32`).declareVariables(t,n),sp=e=>{let{dataType:t,length:n,inputComponents:r,outputComponents:i,inverse:a,onesided:o}=e,s=K(t),c=a?1:-1,l=a?1/n:1,u=$f(n);return{name:`DFT`,shaderCache:{hint:ip(e,`fft`),inputDependencies:[`type`]},getShaderSource:e=>{let d=X(`x`,t,[1]),f=Z(`y`,t,[1]),p=e=>{let t=`inBase + (${e}) * uniforms.inner * ${r}u`;return`vec2<f32>(${`f32(${d.getByOffset(t)})`}, ${r===2?`f32(${d.getByOffset(`${t} + 1u`)})`:`0.0`})`},m;if(a&&o){let e=Math.floor(n/2)+1,t=n%2==0?`select(provided, provided - 1u, provided == ${e}u)`:`provided`;m=`
    let provided = min(uniforms.signalLength, ${e}u);
    for (var i = local_idx; i < ${n}u; i += ${Xf}u) {
      if (i < provided) { smem[i] = ${p(`i`)}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();
    for (var k = local_idx + 1u; k < ${t}; k += ${Xf}u) {
      let h = smem[k];
      smem[${n}u - k] = vec2<f32>(h.x, -h.y);
    }
    workgroupBarrier();`}else m=`
    let loadCount = min(uniforms.signalLength, ${n}u);
    for (var i = local_idx; i < ${n}u; i += ${Xf}u) {
      if (i < loadCount) { smem[i] = ${p(`i`)}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();`;let{code:h,resultOffset:g}=np(u,n,c),_=l===1?`smem[${g}u + i]`:`smem[${g}u + i] * ${ep(l)}`,v=i===2?f.setByOffset(`off + 1u`,`${s}(v.y)`):``;return`
  ${op(e,d,f)}
  var<workgroup> smem: array<vec2<f32>, ${2*Zf}>;
  fn cmul(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }
  ${e.mainStart(Xf)}
    let row = workgroup_index;
    if (row >= uniforms.batch) { return; }
    let outer = row / uniforms.inner;
    let within = row % uniforms.inner;
    let inBase = (outer * uniforms.signalLength * uniforms.inner + within) * ${r}u;
    let outBase = (outer * uniforms.outputLength * uniforms.inner + within) * ${i}u;
    ${m}
${h}    for (var i = local_idx; i < uniforms.outputLength; i += ${Xf}u) {
      let v = ${_};
      let off = outBase + i * uniforms.inner * ${i}u;
      ${f.setByOffset(`off`,`${s}(v.x)`)}
      ${v}
    }
  }`},getRunData:()=>({outputs:[{dims:e.outputDims,dataType:t}],programUniforms:ap(e),dispatchGroup:{x:e.batch}})}},cp=e=>{let{dataType:t,length:n,inputComponents:r,outputComponents:i,inverse:a,onesided:o}=e,s=K(t),c=a?1:-1,l=a?1/n:1;return{name:`DFT`,shaderCache:{hint:ip(e,`direct`),inputDependencies:[`type`]},getShaderSource:e=>{let u=X(`x`,t,[1]),d=Z(`y`,t,[1]),f=e=>{let t=`inBase + (${e}) * uniforms.inner * ${r}u`;return`vec2<f32>(${`f32(${u.getByOffset(t)})`}, ${r===2?`f32(${u.getByOffset(`${t} + 1u`)})`:`0.0`})`},p=a&&o?`fn spectrum(inBase: u32, k: u32) -> vec2<f32> {
    let provided = min(uniforms.signalLength, ${Math.floor(n/2)+1}u);
    if (k < provided) { return ${f(`k`)}; }
    let m = ${n}u - k;
    if (m < provided) {
      let h = ${f(`m`)};
      return vec2<f32>(h.x, -h.y);
    }
    return vec2<f32>(0.0, 0.0);
  }`:`fn spectrum(inBase: u32, n: u32) -> vec2<f32> {
    if (n < uniforms.signalLength) { return ${f(`n`)}; }
    return vec2<f32>(0.0, 0.0);
  }`,m=`
      let angle = ${ep(c*Qf)} * f32(knMod) / ${ep(n)};
      acc += cmul(spectrum(inBase, n), vec2<f32>(cos(angle), sin(angle)));
      knMod += k;
      if (knMod >= ${n}u) { knMod -= ${n}u; }`,h=i===2?d.setByOffset(`off + 1u`,`${s}(v.y)`):``,g=l===1?`acc`:`acc * ${ep(l)}`;return`
  ${op(e,u,d)}
  fn cmul(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }
  ${p}
  ${e.mainStart(Xf)}
    let row = workgroup_index;
    if (row >= uniforms.batch) { return; }
    let outer = row / uniforms.inner;
    let within = row % uniforms.inner;
    let inBase = (outer * uniforms.signalLength * uniforms.inner + within) * ${r}u;
    let outBase = (outer * uniforms.outputLength * uniforms.inner + within) * ${i}u;
    for (var k = local_idx; k < uniforms.outputLength; k += ${Xf}u) {
      var acc = vec2<f32>(0.0, 0.0);
      var knMod = 0u;
      for (var n = 0u; n < ${n}u; n++) {${m}
      }
      let v = ${g};
      let off = outBase + k * uniforms.inner * ${i}u;
      ${d.setByOffset(`off`,`${s}(v.x)`)}
      ${h}
    }
  }`},getRunData:()=>({outputs:[{dims:e.outputDims,dataType:t}],programUniforms:ap(e),dispatchGroup:{x:e.batch}})}},lp=e=>{if(!e||e.dataType===0)return;if(V.size(e.dims)!==1)throw Error(`DFT optional scalar inputs must have exactly 1 element.`);if(e.dataType===6)return e.getInt32Array()[0];let t=Number(e.getBigInt64Array()[0]);if(!Number.isSafeInteger(t))throw Error(`DFT optional scalar inputs are out of JavaScript safe integer range.`);return t},up=e=>{if(!e||e.length<1)throw Error(`DFT requires at least 1 input.`);let t=e[0].dims;if(t.length<2)throw Error(`DFT input must have at least 2 dimensions.`);let n=t[t.length-1];if(n!==1&&n!==2)throw Error(`DFT input's innermost dimension must be 1 (real) or 2 (complex).`)},dp=(e,t)=>{up(e.inputs);let n=e.inputs[0],r=n.dims.length,i=t.inverse!==0,a=t.onesided!==0,o=lp(e.inputs[1]);if(o!==void 0&&o<=0)throw Error(`dft_length must be greater than zero.`);let s=V.normalizeAxis(lp(e.inputs[2])??t.axis,r);if(s===r-1)throw Error(`DFT axis must refer to a signal dimension, not the innermost (real/imaginary) dimension.`);if(i&&a&&n.dims[r-1]!==2)throw Error(`Inverse one-sided DFT (IRFFT) requires complex-valued input (innermost dimension 2).`);let c=rp(n,s,i,a,o);if(c.length<=0)throw Error(`Invalid DFT length: ${c.length}`);let l=c.length<=Zf&&$f(c.length)!==void 0?sp(c):cp(c);e.compute(l,{inputs:[0]})},fp=e=>U({axis:e.axis??1,inverse:e.inverse??0,onesided:e.onesided??0})}),Tp=F(()=>{"use strict";z(),H(),W(),Q(),mp=`[a-zA-Z]|\\.\\.\\.`,hp=`(`+mp+`)+`,gp=`^`+hp+`$`,_p=`(`+hp+`,)*`+hp,vp=`^`+_p+`$`,yp=class{constructor(e=-1){this.symbolToIndices=/* @__PURE__ */ new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},bp=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=/* @__PURE__ */ new Map,this.lhs=[],this.outputDims=[];let[n,r]=t.includes(`->`)?t.split(`->`,2):[t,``];if(!n.match(RegExp(vp)))throw Error(`Invalid LHS term`);if(n.split(`,`).forEach((t,n)=>{let r=e[n].dims.slice();if(!t.match(RegExp(gp)))throw Error(`Invalid LHS term`);let i=this.processTerm(t,!0,r,n);this.lhs.push(i)}),r===``)r+=[...this.symbolToInfo.entries()].filter(([e,t])=>t.count===1||e===`...`).map(([e])=>e).join(``);else if(!r.match(RegExp(hp)))throw Error(`Invalid RHS`);r.match(RegExp(mp,`g`))?.forEach(e=>{if(e===`...`)this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let t=this.symbolToInfo.get(e);if(t===void 0)throw Error(`Invalid RHS symbol`);this.outputDims.push(t.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw Error(`Dimension mismatch`);r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,a=!1,o=[],s=0;if(!e.match(RegExp(gp))&&!t&&e!==``)throw Error(`Invalid LHS term`);let c=e.match(RegExp(mp,`g`)),l=new yp(r);return c?.forEach((e,u)=>{if(e===`...`){if(a)throw Error(`Only one ellipsis is allowed per input term`);a=!0;let e=i-c.length+1;if(e<0)throw Error(`Ellipsis out of bounds`);if(o=n.slice(s,s+e),this.hasEllipsis){if(this.ellipsisDims.length!==o.length||this.ellipsisDims.toString()!==o.toString())throw Error(`Ellipsis dimensions mismatch`)}else if(t)this.hasEllipsis=!0,this.ellipsisDims=o;else throw Error(`Ellipsis must be specified in the LHS`);for(let e=0;e<o.length;e++){let t=String.fromCharCode(48+e);l.addSymbol(t,u+e),this.addSymbol(t,n[s++],r)}}else l.addSymbol(e,u+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(e,n[s++],r)}),l}},xp=e=>e+`_max`,Sp=(e,t,n,r)=>{let i=e.map(e=>e.length).map((e,n)=>X(`input${n}`,t,e)),a=V.size(r),o=Z(`output`,t,r.length),s=[...n.symbolToInfo.keys()].filter(e=>!n.rhs.symbolToIndices.has(e));return{name:`Einsum`,shaderCache:{hint:n.equation,inputDependencies:e.map(()=>`rank`)},getRunData:()=>{let i=s.filter(e=>n.symbolToInfo.has(e)).map(e=>({type:12,data:n.symbolToInfo.get(e)?.dimValue||0}));i.push({type:12,data:a});let o=e.map((e,t)=>[...q(e)]).reduce((e,t)=>e.concat(t),i);return o.push(...q(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:o}},getShaderSource:e=>{let t=[],r=[],a=[],c=[],l=[],u=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((e,s)=>{if(n.rhs.symbolToIndices.has(s)){let r=n.rhs.symbolToIndices.get(s)?.[0];r!==void 0&&n.lhs.forEach((n,a)=>{if(e.inputIndices.includes(a)){let e=n.symbolToIndices.get(s);if(e===void 0)throw Error(`Invalid symbol error`);e.forEach(e=>{t.push(`${i[a].indicesSet(`input${a}Indices`,e,o.indicesGet(`outputIndices`,r))}`)})}})}else n.lhs.forEach((t,n)=>{if(e.inputIndices.includes(n)){let e=t.symbolToIndices.get(s);if(e===void 0)throw Error(`Invalid symbol error`);e.forEach(e=>{r.push(`${i[n].indicesSet(`input${n}Indices`,e,`${s}`)}`)}),l.push(`prod *= ${i[n].getByIndices(`input${n}Indices`)};`)}}),a.push(`for(var ${s}: u32 = 0; ${s} < uniforms.${xp(s)}; ${s}++) {`),c.push(`}`)});let d=u?[...t,`let sum = ${i.map((e,t)=>e.getByIndices(`input${t}Indices`)).join(` * `)};`]:[...t,`var sum = 0.0;`,...a,...r,`var prod = 1.0;`,...l,`sum += prod;`,...c];return`
            ${e.registerUniforms(s.map(e=>({name:`${xp(e)}`,type:`u32`}))).registerUniform(`outputSize`,`u32`).declareVariables(...i,o)}

            ${e.mainStart()}
            ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
            var outputIndices = ${o.offsetToIndices(`global_idx`)};
            ${i.map((e,t)=>`var input${t}Indices: ${i[t].type.indices};`).join(`
`)}
            ${d.join(`
`)};
            ${o.setByOffset(`global_idx`,`sum`)};
          }`}}},Cp=(e,t)=>{let n=new bp(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((e,t)=>e.dims);e.compute(Sp(i,e.inputs[0].dataType,n,r))},wp=e=>{let t=e.equation.replace(/\s+/g,``);return U({equation:t})}}),jp=F(()=>{"use strict";z(),H(),Q(),Ep=e=>{if(!e||e.length!==2)throw Error(`Expand requires 2 input.`);let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw Error(`Expand requires shape to be broadcastable to input`)},Dp=(e,t)=>{let n=e.length-t.length,r=[];for(let t=0;t<n;++t)r.push(e[t]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},Op=(e,t)=>e.length>t.length?Dp(e,t):Dp(t,e),kp=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=Op(t,n),i=e[0].dataType,a=i===9||V.size(t)===1,o=i===9||t.length>0&&t[t.length-1]%4==0?4:1,s=a||r.length>0&&r[r.length-1]%4==0?4:1,c=Math.ceil(V.size(r)/s),l=e=>{let n=X(`input`,i,t.length,o),a=Z(`output`,i,r.length,s),c;if(i===9){let e=(e,t,r=``)=>`
          let outputIndices${t} = ${a.offsetToIndices(`outputOffset + ${t}u`)};
          let offset${t} = ${n.broadcastedIndicesToOffset(`outputIndices${t}`,a)};
          let index${t} = offset${t} / 4u;
          let component${t} = offset${t} % 4u;
          ${e}[${t}] = ${r}(${n.getByOffset(`index${t}`)}[component${t}]);
        `;c=`
        let outputOffset = global_idx * ${s};
        var data = vec4<u32>(0);
        ${e(`data`,0,`u32`)}
        ${e(`data`,1,`u32`)}
        ${e(`data`,2,`u32`)}
        ${e(`data`,3,`u32`)}
        ${a.setByOffset(`global_idx`,`data`)}
      }`}else c=`
        let outputIndices = ${a.offsetToIndices(`global_idx * ${s}`)};
        let inputOffset = ${n.broadcastedIndicesToOffset(`outputIndices`,a)};
        let data = ${a.type.value}(${n.getByOffset(`inputOffset / ${o}`)});
        ${a.setByOffset(`global_idx`,`data`)}
      }`;return`
    ${e.registerUniform(`vec_size`,`u32`).declareVariables(n,a)}
    ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}
    ${c}`},u=[{type:12,data:c},...q(t,r)];return{name:`Expand`,shaderCache:{hint:`${r.length};${o}${s}`,inputDependencies:[`rank`]},getShaderSource:l,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:u})}},Ap=e=>{Ep(e.inputs),e.compute(kp(e.inputs),{inputs:[0]})}}),Pp=F(()=>{"use strict";z(),H(),Q(),cd(),Mp=e=>{let t=e[0].dataType,n=V.size(e[0].dims),r=V.size(e[1].dims),i=r%4==0;return{name:`FastGeluWithBias`,shaderCache:{hint:`${i}`,inputDependencies:[`type`,`type`]},getShaderSource:e=>{let n=X(`x`,t,[1],4),r=X(`bias`,t,[1],4),a=Z(`y`,t,[1],4),o=[{name:`output_vec_size`,type:`u32`},{name:`bias_size`,type:`u32`}],s=e=>`
      let bias${e}_offset: u32 = (global_idx * 4 + ${e}) % uniforms.bias_size;
      let bias${e} = ${r.getByOffset(`bias${e}_offset / 4`)}[bias${e}_offset % 4];`,c=i?`
      let bias = ${r.getByOffset(`global_idx % (uniforms.bias_size / 4)`)};`:`${s(0)}${s(1)}${s(2)}${s(3)}
      let bias = ${n.type.value}(bias0, bias1, bias2, bias3);`;return`${e.registerUniforms(o).declareVariables(n,r,a)}

    ${ed(K(t))}

    ${e.mainStart(Nc)}
      ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_vec_size`)}

      let x = ${n.getByOffset(`global_idx`)};
      ${c}
      let x_in = x + bias;
      ${a.setByOffset(`global_idx`,td(`x_in`))}
    }`},getRunData:e=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/Nc/4)}})}},Np=e=>{e.inputs.length<2||V.size(e.inputs[1].dims)===0?nd(e):e.compute(Mp(e.inputs))}}),zp=F(()=>{"use strict";z(),H(),W(),Q(),Fp=e=>{if(!e||e.length!==2)throw Error(`Gather requires 2 inputs.`)},Ip=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=V.normalizeAxis(t.axis,i),o=n.slice(0);o.splice(a,1,...r);let s=n[a],c=e[0].dataType===9?4:1,l=Math.ceil(V.size(o)/c),u=[{type:12,data:l},{type:6,data:s},{type:12,data:a},...q(e[0].dims,e[1].dims,o)];return{name:`Gather`,shaderCache:{hint:t.cacheKey,inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u}),getShaderSource:t=>{let n=X(`data`,e[0].dataType,e[0].dims.length,c),s=X(`inputIndices`,e[1].dataType,e[1].dims.length),l=Z(`output`,e[0].dataType,o.length,c),u=e=>{let t=r.length,c=`var indicesIndices${e}  = ${s.type.indices}(0);`;for(let n=0;n<t;n++)c+=`${t>1?`indicesIndices${e}[${n}]`:`indicesIndices${e}`} = ${o.length>1?`outputIndices${e}[uniforms.axis + ${n}]`:`outputIndices${e}`};`;c+=`
          var idx${e} = ${s.getByIndices(`indicesIndices${e}`)};
          if (idx${e} < 0) {
            idx${e} = idx${e} + uniforms.axisDimLimit;
          }
          var dataIndices${e} : ${n.type.indices};
        `;for(let n=0,r=0;n<i;n++)n===a?(c+=`${i>1?`dataIndices${e}[${n}]`:`dataIndices${e}`} = u32(idx${e});`,r+=t):(c+=`${i>1?`dataIndices${e}[${n}]`:`dataIndices${e}`} = ${o.length>1?`outputIndices${e}[${r}]`:`outputIndices${e}`};`,r++);return c},d;if(e[0].dataType===9){let e=(e,t,r=``)=>`
          let outputIndices${t} = ${l.offsetToIndices(`outputOffset + ${t}u`)};
          ${u(t)};
          let offset${t} = ${n.indicesToOffset(`dataIndices${t}`)};
          let index${t} = offset${t} / 4u;
          let component${t} = offset${t} % 4u;
          ${e}[${t}] = ${r}(${n.getByOffset(`index${t}`)}[component${t}]);
        `;d=`
        let outputOffset = global_idx * ${c};
        var value = vec4<u32>(0);
        ${e(`value`,0,`u32`)}
        ${e(`value`,1,`u32`)}
        ${e(`value`,2,`u32`)}
        ${e(`value`,3,`u32`)}
        ${l.setByOffset(`global_idx`,`value`)}
      `}else d=`
      let outputIndices = ${l.offsetToIndices(`global_idx`)};
      ${u(``)};
      let value = ${n.getByIndices(`dataIndices`)};
      ${l.setByOffset(`global_idx`,`value`)};
      `;return`
      ${t.registerUniform(`outputSize`,`u32`).registerUniform(`axisDimLimit`,`i32`).registerUniform(`axis`,`u32`).declareVariables(n,s,l)}
      ${t.mainStart()}
        ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
        ${d}
      }`}}},Lp=e=>U({axis:e.axis}),Rp=(e,t)=>{let n=e.inputs;Fp(n),e.compute(Ip(e.inputs,t))}}),Up=F(()=>{"use strict";z(),H(),Q(),Bp=(e,t,n,r,i,a,o,s,c)=>{let l=[{type:12,data:a},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:o},{type:12,data:s},{type:12,data:c}],u=[a];return l.push(...q(t.dims,u)),e.compute({name:`computeSliceOffsets`,shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:u,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:l}),getShaderSource:e=>{let r=[X(`indices_data`,t.dataType,t.dims.length),Z(`input_slice_offsets_data`,12,1,1)],a=[{name:`output_size`,type:`u32`},{name:`batch_dims`,type:`u32`},{name:`input_dims`,type:`u32`,length:i.length},{name:`sizes_from_slice_dims_data`,type:`u32`,length:n.length},{name:`num_slices_per_batch`,type:`u32`},{name:`input_batch_stride`,type:`u32`},{name:`num_slice_dims`,type:`u32`}];return`
  ${e.registerUniforms(a).declareVariables(...r)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${i.length===1?`index += i32(uniforms.input_dims);`:`index += i32(uniforms.input_dims[input_dim_idx]);`}
      }
      ${n.length===1?`relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);`:`relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);`}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`}},{inputs:[t],outputs:[-1]})[0]},Vp=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,a=n[1].dims,o=a[a.length-1],s=V.sizeToDimension(a,a.length-1),c=V.sizeFromDimension(r,t.batchDims+o),l=V.sizeToDimension(r,t.batchDims),u=V.sizeFromDimension(r,t.batchDims),d=s/l,f=Array(o),p=c;for(let e=0;e<o;++e)f[o-1-e]=p,p*=r[t.batchDims+o-1-e];let m=Bp(e,n[1],f,t.batchDims,r,s,d,u,o),h=t.batchDims+o;if(h>r.length)throw Error(`last dimension of indices must not be larger than rank of input tensor`);let g=a.slice(0,-1).concat(r.slice(h)),_=V.size(g),v=[{type:12,data:_},{type:12,data:c},...q(n[0].dims,m.dims,g)];e.compute({name:`GatherND`,shaderCache:{hint:t.cacheKey,inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:g,dataType:i}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:v}),getShaderSource:e=>{let t=X(`data`,n[0].dataType,n[0].dims.length),r=X(`slice_offsets`,12,m.dims.length),i=Z(`output`,n[0].dataType,g.length);return`
          ${e.registerUniform(`output_size`,`u32`).registerUniform(`slice_size`,`u32`).declareVariables(t,r,i)}
            ${e.mainStart()}
            ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`}},{inputs:[n[0],m]})},Hp=e=>({batchDims:e.batch_dims,cacheKey:``})}),Jp=F(()=>{"use strict";z(),H(),W(),Q(),Wp=(e,t)=>{if(e.length<3||e.length>4)throw Error(`GatherBlockQuantized requires 3 or 4 inputs.`);let n=V.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],a=e[2],o=e.length===4?e[3]:void 0;if(a.dims.length!==i.dims.length||!i.dims.map((e,t)=>t===n?Math.ceil(e/r)===a.dims[t]:e===a.dims[t]).reduce((e,t)=>e&&t,!0))throw Error(`Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.`);if(o){if(o.dataType!==i.dataType)throw Error(`Zero point must have the same data type as the input tensor.`);if(o.dims.length!==a.dims.length||!o.dims.map((e,t)=>e===a.dims[t]).reduce((e,t)=>e&&t,!0))throw Error(`Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.`)}},Gp=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=V.normalizeAxis(t.gatherAxis,i),o=V.normalizeAxis(t.quantizeAxis,i),s=n.slice(0);s.splice(a,1,...r);let c=V.size(s),l=e[2].dataType,u=e[0].dataType===22,d=[{type:12,data:c},{type:12,data:o},{type:12,data:a},{type:12,data:t.blockSize},...q(...e.map((e,t)=>e.dims),s)];return{name:`GatherBlockQuantized`,shaderCache:{hint:`${t.cacheKey};${e.filter((e,t)=>t!==1).map(e=>e.dims.join(`_`)).join(`;`)}`,inputDependencies:Array.from({length:e.length},(e,t)=>`rank`)},getRunData:()=>({outputs:[{dims:s,dataType:l}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:d}),getShaderSource:t=>{let i=X(`data`,e[0].dataType,e[0].dims.length),o=X(`inputIndices`,e[1].dataType,e[1].dims.length),c=X(`scales`,e[2].dataType,e[2].dims.length),d=e.length>3?X(`zeroPoint`,e[3].dataType,e[3].dims.length):void 0,f=Z(`output`,l,s.length),p=[i,o,c];return d&&p.push(d),`
        ${t.registerUniforms([{name:`output_size`,type:`u32`},{name:`quantize_axis`,type:`u32`},{name:`gather_axis`,type:`u32`},{name:`block_size`,type:`u32`}]).declareVariables(...p,f)}
        ${t.mainStart()}
        let output_indices = ${f.offsetToIndices(`global_idx`)};
        var indices_indices = ${o.type.indices}(0);
        ${r.length>1?`
          for (var i: u32 = 0; i < ${r.length}; i++) {
            let index = ${f.indicesGet(`output_indices`,`uniforms.gather_axis + i`)};
            ${o.indicesSet(`indices_indices`,`i`,`index`)};
          }`:`indices_indices = ${f.indicesGet(`output_indices`,`uniforms.gather_axis`)};`};
        var data_indices = ${i.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${f.indicesGet(`output_indices`,`i`)};
          ${i.indicesSet(`data_indices`,`i`,`index`)};
        }
        var index_from_indices = ${o.getByIndices(`indices_indices`)};
        if (index_from_indices < 0) {
          index_from_indices += ${n[a]};
        }
        ${i.indicesSet(`data_indices`,`uniforms.gather_axis`,`u32(index_from_indices)`)};
        for (var i = uniforms.gather_axis + 1; i < ${s.length}; i++) {
          let index = ${f.indicesGet(`output_indices`,`i + ${r.length} - 1`)};
          ${i.indicesSet(`data_indices`,`i`,`index`)};
        }
        let data_offset = ${i.indicesToOffset(`data_indices`)};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${i.getByOffset(`data_offset / 8`)};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${u?`unpack4xI8`:`unpack4xU8`}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${c.indicesGet(`data_indices`,`uniforms.quantize_axis`)} / uniforms.block_size;
        ${c.indicesSet(`scale_indices`,`uniforms.quantize_axis`,`quantize_axis_index`)};
        var scale = ${c.getByIndices(`scale_indices`)};
        ${d?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${d.indicesToOffset(`zero_point_indices`)};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${d.getByOffset(`zero_point_offset / 8`)};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${u?`unpack4xI8`:`unpack4xU8`}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:`var zero_point = 0`};
        let dequantized_data = ${K(l)}(quantized_data - zero_point) * scale;
        ${f.setByOffset(`global_idx`,`dequantized_data`)};
    }`}}},Kp=(e,t)=>{let n=e.inputs;Wp(n,t),e.compute(Gp(e.inputs,t))},qp=e=>U({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),$p=F(()=>{"use strict";z(),H(),W(),Q(),Yp=e=>{if(!e||e.length!==2)throw Error(`GatherElements requires 2 inputs.`);if(e[0].dims.length<1)throw Error(`GatherElements requires that the data input be rank >= 1.`);if(e[0].dims.length!==e[1].dims.length)throw Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Xp=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,a=e[1].dims,o=e[1].dataType,s=V.normalizeAxis(t.axis,i),c=n[s],l=a.slice(0),u=V.size(l),d=X(`input`,r,i),f=X(`indicesInput`,o,a.length),p=Z(`output`,r,l.length),m=[{type:12,data:u},{type:6,data:c},{type:12,data:s}];return m.push(...q(n,a,l)),{name:`GatherElements`,shaderCache:{inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:m}),getShaderSource:e=>`
      ${e.registerUniform(`outputSize`,`u32`).registerUniform(`axisDimLimit`,`i32`).registerUniform(`axis`,`u32`).declareVariables(d,f,p)}
      ${e.mainStart()}
      ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}

      let outputIndices = ${p.offsetToIndices(`global_idx`)};

      var idx = ${f.getByOffset(`global_idx`)};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${d.type.indices}(outputIndices);
      ${d.indicesSet(`inputIndices`,`uniforms.axis`,`u32(idx)`)};
      let value = ${d.getByIndices(`inputIndices`)};

      ${p.setByOffset(`global_idx`,`value`)};
  }`}},Zp=e=>U({axis:e.axis}),Qp=(e,t)=>{let n=e.inputs;Yp(n),e.compute(Xp(e.inputs,t))}}),im=F(()=>{"use strict";z(),H(),Q(),em=e=>{if(!e)throw Error(`Input is missing`);if(e.length<2||e.length>3)throw Error(`Invaid input number.`);if(e.length===3&&e[2].dims.length>2)throw Error(`Invalid input shape of C`);if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw Error(`Input types are mismatched`)},tm=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,a,o]=ec.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),s=[i,a];if(!s)throw Error(`Can't use gemm on the given tensors`);let c=Math.ceil(a/16),l=Math.ceil(i/16);V.size(s);let u=[{type:12,data:c},{type:12,data:i},{type:12,data:a},{type:12,data:o},{type:1,data:t.alpha},{type:1,data:t.beta}],d=[`type`,`type`];return e.length===3&&(u.push(...q(e[2].dims)),d.push(`rank`)),u.push(...q(s)),{name:`GemmShared`,shaderCache:{hint:`${t.cacheKey}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:c*l},programUniforms:u}),getShaderSource:n=>{let r=X(`a`,e[0].dataType,e[0].dims),i=X(`b`,e[1].dataType,e[1].dims),a=null,o=[r,i];e.length===3&&(a=X(`c`,e[2].dataType,e[2].dims.length),o.push(a));let c=Z(`output`,e[0].dataType,s.length);o.push(c);let l=[{name:`num_tile_n`,type:`u32`},{name:`M`,type:`u32`},{name:`N`,type:`u32`},{name:`K`,type:`u32`},{name:`alpha`,type:`f32`},{name:`beta`,type:`f32`}],u=``,d=``;t.transA&&t.transB?(d=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[k][local_id.y] * tile_b[local_id.x][k];`):t.transA&&!t.transB?(d=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[k][local_id.y] * tile_b[k][local_id.x];`):!t.transA&&t.transB?(d=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[local_id.y][k] * tile_b[local_id.x][k];`):!t.transA&&!t.transB&&(d=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[local_id.y][k] * tile_b[k][local_id.x];`);let f=t.alpha===1?``:`value *= uniforms.alpha;`;return`
  ${n.registerUniforms(l).declareVariables(...o)}
  var<workgroup> tile_a: array<array<${r.type.storage}, 16>, 16>;
  var<workgroup> tile_b: array<array<${i.type.storage}, 16>, 16>;
  ${n.mainStart([16,16,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * 16;
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * 16;
    let num_tiles = (uniforms.K - 1) / 16 + 1;
    var k_start = 0u;
    var value = ${c.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${d}
      k_start = k_start + 16;
      workgroupBarrier();

      for (var k: u32 = 0u; k < 16; k++) {
        ${u}
      }
      workgroupBarrier();
    }

    ${f}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${a==null?``:`let cOffset = ${a.broadcastedIndicesToOffset(`vec2(m, n)`,c)}; value += ${c.type.value}(uniforms.beta) * ${a.getByOffset(`cOffset`)};`}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`}}},nm=e=>({transA:e.transA,transB:e.transB,alpha:e.alpha,beta:e.beta,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}),rm=(e,t)=>{em(e.inputs),e.compute(tm(e.inputs,t))}}),ym=F(()=>{"use strict";z(),H(),W(),Q(),[am,om,sm,cm]=[0,1,2,3],lm=e=>{if(e[0].dims.length!==4)throw Error(`only 4-D tensor is supported.`);if(e[0].dims.length!==e[1].dims.length)throw Error(`input dimensions must be equal to grid dimensions`);if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw Error(`grid batch size must match input batch size`)},um=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,dm=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,fm=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,pm=e=>`
  ${e.paddingMode===`reflection`?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:``}
`,mm=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${am}] = batch;
     indices[${om}] = channel;`+(()=>{switch(n.paddingMode){case`zeros`:return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${sm}] = u32(r);
            indices[${cm}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case`border`:return`
          indices[${sm}] = u32(clamp(r, 0, H - 1));
          indices[${cm}] = u32(clamp(c, 0, W - 1));
        `;case`reflection`:return`
          indices[${sm}] = gs_reflect(r, border[1], border[3]);
          indices[${cm}] = gs_reflect(c, border[0], border[2]);
        `;default:throw Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices(`indices`)};
  }
`,hm=(e,t,n)=>(()=>{switch(n.mode){case`nearest`:return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${am}], indices[${om}], border);
        `;case`bilinear`:return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${am}], indices[${om}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${am}], indices[${om}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${am}], indices[${om}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${am}], indices[${om}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case`bicubic`:return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${am}], indices[${om}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset(`global_idx`,`result`)}`,gm=(e,t)=>{let n=X(`x`,e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=X(`grid`,e[1].dataType,r.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format===`NHWC`&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[am,om,sm,cm]=[0,3,1,2]);let o=Z(`output`,e[0].dataType,a.length),s=n.type.value,c=[{type:12,data:V.size(a)},...q(e[0].dims,r,a)];return{name:`GridSample`,shaderCache:{hint:`${t.cacheKey}`,inputDependencies:[`type`,`type`]},getRunData:e=>{let t=V.size(a);return{outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(t/64)},programUniforms:c}},getShaderSource:e=>`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(n,i,o)}
  ${um}
  ${dm(s)}
  ${fm(t)}
  ${pm(t)}
  ${mm(n,s,t)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
      let H_in = i32(uniforms.x_shape[${sm}]);
      let W_in = i32(uniforms.x_shape[${cm}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${o.offsetToIndices(`global_idx`)};
      var grid_indices = vec3<u32>(indices[${am}], indices[${sm}], indices[${cm}]);
      let nxy = ${i.getByIndices(`grid_indices`)};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${hm(o,s,t)}
  }`}},_m=(e,t)=>{lm(e.inputs),e.compute(gm(e.inputs,t))},vm=e=>U({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Dm=F(()=>{"use strict";z(),H(),W(),xc(),su(),Q(),Qc(),bm=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,xm=(e,t)=>{let n=e[0],r=bm(e,1),i=bm(e,2),a=bm(e,3),o=bm(e,4),s=bm(e,5),c=bm(e,6),l=bm(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw Error(`Input query is expected to have 3 or 5 dimensions`);let u=n.dims[0],d=n.dims[1],f=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],p=d,m=0,h=0,g=Math.floor(f/t.numHeads);if(c&&l&&V.size(c.dims)&&V.size(l.dims)){if(c.dims.length!==4)throw Error(`Input "past_key" is expected to have 4 dimensions`);if(c.dims[0]!==u||c.dims[1]!==t.numHeads||c.dims[3]!==g)throw Error(`Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)`);if(l.dims[0]!==u||l.dims[1]!==t.numHeads||l.dims[3]!==g)throw Error(`Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)`);if(c.dims[2]!==l.dims[2])throw Error(`Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)`);if(l.dims.length!==4)throw Error(`Input "past_value" is expected to have 4 dimensions`);m=c.dims[2],h=c.dims[2]}else if(c&&V.size(c.dims)||l&&V.size(l.dims))throw Error(`Input "past_key" and "past_value" shall be both present or both absent`);let _;if(r&&V.size(r.dims)>0){if(n.dims.length!==3)throw Error(`Input "query" is expected to have 3 dimensions when key is given`);if(r.dims.length<3||r.dims.length>5)throw Error(`Input "key" is expected to have 3, 4, or 5 dimensions`);if(n.dims[0]!==r.dims[0])throw Error(`Input "query" and "key" shall have same dim 0 (batch size)`);if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw Error(`Input "query" and "key" shall have same dim 2 (hidden_size)`);_=2,p=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==g)throw Error(`Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv`);if(i)throw Error(`Expect "value" be none when "key" has packed kv format.`);_=5,p=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==g)throw Error(`Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key`);_=0,p=r.dims[2]}}else{if(n.dims.length!==5)throw Error(`Input "query" is expected to have 5 dimensions when key is empty`);if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw Error(`Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv`);_=3}if(a&&V.size(a.dims)>0){if(a.dims.length!==1)throw Error(`Input "bias" is expected to have 1 dimension`);if(r&&r.dims.length===5&&r.dims[3]===2)throw Error(`bias is not allowed for packed kv.`)}let v=m+p,y=0;if(o&&V.size(o.dims)>0){y=8;let e=o.dims;throw e.length===1?e[0]===u?y=1:e[0]===3*u+2&&(y=3):e.length===2&&e[0]===u&&e[1]===v&&(y=5),Error(y===8?`Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)`:`Mask not supported`)}let b=!1,x=f;if(i&&V.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw Error(`Input "value" is expected to have 3 or 4 dimensions`);if(n.dims[0]!==i.dims[0])throw Error(`Input "query" and "value" shall have same dim 0 (batch_size)`);if(i.dims.length===3){if(p!==i.dims[1])throw Error(`Input "key" and "value" shall have the same dim 1 (kv_sequence_length)`);x=i.dims[2]}else{if(p!==i.dims[2])throw Error(`Input "key" and "value" shall have the same dim 2 (kv_sequence_length)`);x=i.dims[1]*i.dims[3],b=!0}}if(o&&V.size(o.dims)>0)throw Error(`Key padding mask is not supported`);if(s&&V.size(s.dims)>0){if(s.dims.length!==4)throw Error(`Input "attention_bias" is expected to have 4 dimensions`);if(s.dims[0]!==u||s.dims[1]!==t.numHeads||s.dims[2]!==d||s.dims[3]!==v)throw Error(`Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)`)}return{batchSize:u,sequenceLength:d,pastSequenceLength:m,kvSequenceLength:p,totalSequenceLength:v,maxSequenceLength:h,inputHiddenSize:0,hiddenSize:f,vHiddenSize:x,headSize:g,vHeadSize:Math.floor(x/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:y,scale:t.scale,broadcastResPosBias:!1,passPastInKv:b,qkvFormat:_}},Sm=e=>U({...e}),Cm=U({perm:[0,2,1,3]}),wm=(e,t,n,r,i,a,o)=>{let s=[r,i,a],c=V.size(s),l=[{type:12,data:c},{type:12,data:o},{type:12,data:a}];return e.compute({name:`MultiHeadAttentionAddBias`,shaderCache:{inputDependencies:[`type`,`type`]},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:l}),getShaderSource:e=>{let r=Z(`qkv_with_bias`,t.dataType,s),i=X(`qkv`,t.dataType,s),a=X(`bias`,n.dataType,s);return`
  ${e.registerUniforms([{name:`output_size`,type:`u32`},{name:`bias_offset`,type:`u32`},{name:`hidden_size`,type:`u32`}]).declareVariables(i,a,r)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`}},{inputs:[t,n],outputs:[-1]})[0]},Tm=(e,t,n,r,i,a,o,s)=>{let c=a;if(o&&V.size(o.dims)>0){if(r===1)throw Error(`AddBiasReshape is not implemented. Please export your model with packed QKV or KV`);return c=wm(e,a,o,t,r,n*i,s),c=c.reshape([t,r,n,i]),n===1||r===1?c:e.compute(Yc(c,Cm.perm),{inputs:[c],outputs:[-1]})[0]}return a.dims.length===3&&(c=a.reshape([t,r,n,i])),n===1||r===1?c:e.compute(Yc(c,Cm.perm),{inputs:[c],outputs:[-1]})[0]},Em=(e,t)=>{let n=xm(e.inputs,t),r=e.inputs[0],i=bm(e.inputs,1),a=bm(e.inputs,2),o=bm(e.inputs,3),s=bm(e.inputs,4),c=bm(e.inputs,5),l=bm(e.inputs,6),u=bm(e.inputs,7);if(r.dims.length===5)throw Error(`Packed QKV is not implemented`);if(i?.dims.length===5)throw Error(`Packed KV is not implemented`);let d=i&&a&&i.dims.length===4&&a.dims.length===4,f=Tm(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,o,0);if(d)return iu(e,f,i,a,s,void 0,l,u,c,n);if(!i||!a)throw Error(`key and value must be provided`);let p=Tm(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,o,n.hiddenSize),m=Tm(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,a,o,2*n.hiddenSize);iu(e,f,p,m,s,void 0,l,u,c,n)}}),Fm=F(()=>{"use strict";z(),H(),W(),Q(),Om=e=>{if(!e||e.length<1)throw Error(`too few inputs`)},km=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(e=>n.push(Number(e))),r=n.length),U({numOutputs:r,axis:t.axis,splitSizes:n})},Am=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${Y(`uniforms.size_in_split_axis`,`i`,e)}) {
        return i;
    }
    }
    return ${e}u;
}`,jm=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices(`indices`,`input[global_idx]`);t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},Mm=(e,t)=>{let n=e[0].dims,r=V.size(n),i=e[0].dataType,a=V.normalizeAxis(t.axis,n.length),o=Array(t.numOutputs),s=X(`input`,i,n.length),c=Array(t.numOutputs),l=[],u=[],d=0,f=[{type:12,data:r}];for(let r=0;r<t.numOutputs;r++){d+=t.splitSizes[r],c[r]=d;let s=n.slice();s[a]=t.splitSizes[r],u.push(s),o[r]=Z(`output${r}`,i,s.length),l.push({dims:u[r],dataType:e[0].dataType})}return f.push({type:12,data:c},...q(n,...u)),{name:`Split`,shaderCache:{hint:t.cacheKey,inputDependencies:[`rank`]},getShaderSource:e=>`
  ${e.registerUniform(`input_size`,`u32`).registerUniform(`size_in_split_axis`,`u32`,c.length).declareVariables(s,...o)}
  ${Am(c.length)}
  ${jm(o)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.input_size`)}

    var indices = ${s.offsetToIndices(`global_idx`)};
    var index = ${s.indicesGet(`indices`,a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${Y(`uniforms.size_in_split_axis`,`output_number - 1u`,c.length)};
      ${s.indicesSet(`indices`,a,`index`)};
    }
    writeBufferData(output_number, indices, global_idx);
  }`,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:f})}},Nm=(e,t)=>{Om(e.inputs);let n=e.inputs.length===1?t:km(e.inputs,t);e.compute(Mm(e.inputs,n),{inputs:[0]})},Pm=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw Error(`numOutputs and splitSizes length must be equal`);return U({axis:t,numOutputs:r,splitSizes:n})}}),zm=F(()=>{"use strict";z(),H(),W(),Q(),Im=(e,t)=>{let[n,r,i,a]=e,{numHeads:o,rotaryEmbeddingDim:s}=t;if(n.dims.length!==3&&n.dims.length!==4)throw Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!V.areEqual(r.dims,[])&&!V.areEqual(r.dims,[1])&&r.dims.length!==2)throw Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!V.areEqual(i.dims,a.dims))throw Error(`Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape`);if(s>0&&o===0)throw Error(`num_heads must be provided if rotary_embedding_dim is specified`);let c=n.dims[0],l=n.dims[n.dims.length-2],u=i.dims[0],d=V.sizeFromDimension(n.dims,1)/l,f=s===0?i.dims[1]*2:d/o;if(s>f)throw Error(`rotary_embedding_dim must be less than or equal to head_size`);if(r.dims.length===2){if(c!==r.dims[0])throw Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(l!==r.dims[1])throw Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(l>u)throw Error(`Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported`);if(f/2!==i.dims[1]&&s/2!==i.dims[1])throw Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},Lm=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:a}=t,o=e[0].dims[0],s=V.sizeFromDimension(e[0].dims,1),c=e[0].dims[e[0].dims.length-2],l=s/c,u=e[2].dims[1],d=i===0?u*2:l/r,f=[o,c,l/d,d-u],p=V.computeStrides(f),m=[{type:1,data:a},{type:12,data:f},{type:12,data:p},...e[0].dims.length===3?Array({type:12,data:[s,l,d,1]}):[],...e[0].dims.length===4?Array({type:12,data:[s,d,c*d,1]}):[],...q(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)];return{name:`RotaryEmbedding`,shaderCache:{hint:U({interleaved:n}).cacheKey,inputDependencies:[`rank`,`rank`,`rank`,`rank`]},getShaderSource:t=>{let r=X(`input`,e[0].dataType,e[0].dims.length),i=X(`position_ids`,e[1].dataType,e[1].dims.length),a=X(`cos_cache`,e[2].dataType,e[2].dims.length),o=X(`sin_cache`,e[3].dataType,e[3].dims.length),s=Z(`output`,e[0].dataType,e[0].dims.length);return t.registerUniforms([{name:`scale`,type:`f32`},{name:`global_shape`,type:`u32`,length:f.length},{name:`global_strides`,type:`u32`,length:p.length},{name:`input_output_strides`,type:`u32`,length:p.length}]),`
        ${t.declareVariables(r,i,a,o,s)}

        ${t.mainStart(Nc)}
          let half_rotary_emb_dim = uniforms.${a.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${t.guardAgainstOutOfBoundsWorkgroupSizes(`size`)}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${i.broadcastedIndicesToOffset(`bsnh.xy`,Z(``,i.type.tensor,2))};
            let position_id =
                u32(${i.getByOffset(`position_ids_idx`)}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${n});
            let j = i + select(half_rotary_emb_dim, 1, ${n});
            let re = ${r.getByOffset(`i`)} * ${a.get(`position_id`,`bsnh[3]`)} -
                ${r.getByOffset(`j`)} * ${o.get(`position_id`,`bsnh[3]`)};
            ${s.setByOffset(`i`,`re`)}
            let im = ${r.getByOffset(`i`)} * ${o.get(`position_id`,`bsnh[3]`)} +
                ${r.getByOffset(`j`)} * ${a.get(`position_id`,`bsnh[3]`)};
            ${s.setByOffset(`j`,`im`)}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${s.setByOffset(`k`,r.getByOffset(`k`))}
          }
        }`},getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(V.size(f)/Nc)},programUniforms:m})}},Rm=(e,t)=>{Im(e.inputs,t),e.compute(Lm(e.inputs,t))}}),Gm=F(()=>{"use strict";W(),z(),su(),Dm(),Fm(),Qc(),zm(),Q(),Bm=(e,t)=>{if(t.doRotary&&e.length<=7)throw Error(`cos_cache and sin_cache inputs are required if do_rotary is specified`);let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4];if(t.doRotary!==0&&e.length<=7)throw Error(`cos_cast and sin_cache are expected if do_rotary attribute is non-zero`);if(t.localWindowSize!==-1)throw Error(`Local attention is not supported`);if(t.softcap!==0)throw Error(`Softcap is not supported`);if(t.rotaryInterleaved!==0)throw Error(`Rotary interleaved is not supported`);if(t.smoothSoftmax)throw Error(`Smooth softmax is not supported`);if(n.dims.length!==3&&n.dims.length!==5)throw Error(`Input query is expected to have 3 or 5 dimensions`);let s=n.dims[0],c=n.dims[1],l=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],u=c,d=0,f=!r||r.dims.length===0,p=Math.floor(f?l/(t.numHeads+2*t.kvNumHeads):l/t.numHeads);f&&(l=p*t.numHeads);let m=a&&a.dims.length!==0,h=o&&o.dims.length!==0;if(m&&a.dims.length===4&&a.dims[0]===s&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===p)throw Error(`BSNH pastKey/pastValue is not supported`);if(m&&h){if(a.dims.length!==4)throw Error(`Input "past_key" is expected to have 4 dimensions`);if(o.dims.length!==4)throw Error(`Input "past_value" is expected to have 4 dimensions`);d=a.dims[2]}else if(m||h)throw Error(`Input "past_key" and "past_value" shall be both present or both absent`);let g=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw Error(`Input "query" is expected to have 3 dimensions when key is given`);if(r.dims.length<3||r.dims.length>5)throw Error(`Input "key" is expected to have 3, 4, or 5 dimensions`);if(n.dims[0]!==r.dims[0])throw Error(`Input "query" and "key" shall have same dim 0 (batch size)`);if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw Error(`Dimension 2 of "query" should be a multiple of "key"`);u=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==p)throw Error(`Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv`);if(i)throw Error(`Expect "value" be none when "key" has packed kv format.`);u=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==p)throw Error(`Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key`);u=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw Error(`Input "query" is expected to have 3 or 5 dimensions when key is empty`);if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw Error(`Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv`);g=3}let _=!1,v=t.kvNumHeads?p*t.kvNumHeads:l;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw Error(`Input "value" is expected to have 3 or 4 dimensions`);if(n.dims[0]!==i.dims[0])throw Error(`Input "query" and "value" shall have same dim 0 (batch_size)`);if(i.dims.length===3){if(u!==i.dims[1])throw Error(`Input "key" and "value" shall have the same dim 1 (kv_sequence_length)`);v=i.dims[2]}else{if(u!==i.dims[2])throw Error(`Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)`);v=i.dims[1]*i.dims[3],_=!0}}let y=e.length>4?e[5]:void 0;if(y){if(y.dims.length===0)throw Error(`seqlens_k must be at least 1D, got scalar.`);let e=y.dims.reduce((e,t)=>e*t,1);if(e!==s)throw Error(`seqlens_k must have batch_size (${s}) elements, got ${e}.`);for(let e=0;e<y.dims.length;e++)if(y.dims[e]!==1&&y.dims[e]!==s)throw Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${s}), got dims[${e}] = ${y.dims[e]}.`)}return{batchSize:s,sequenceLength:c,pastSequenceLength:d,kvSequenceLength:u,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:l,vHiddenSize:v,headSize:p,vHeadSize:Math.floor(v/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:0,scale:t.scale,broadcastResPosBias:!1,passPastInKv:_,qkvFormat:g}},Vm=U({perm:[0,2,1,3]}),Hm=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(Yc(r,Vm.perm),{inputs:[r],outputs:[-1]})[0]),r},Um=(e,t,n,r)=>{let i=[`type`,`type`],a=[e*t],o=e*t,s=[{type:12,data:o},{type:12,data:t},{type:12,data:e}];return{name:`GeneratePositionIds`,shaderCache:{hint:`${e};${t}`,inputDependencies:i},getRunData:()=>({outputs:[{dims:a,dataType:7}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:s}),getShaderSource:e=>{let t=X(`seq_lens`,n.dataType,n.dims),i=X(`total_seq_lens`,r.dataType,r.dims),o=Z(`pos_ids`,7,a);return`
  ${e.registerUniforms([{name:`output_size`,type:`u32`},{name:`sequence_length`,type:`u32`},{name:`batch_size`,type:`u32`}]).declareVariables(t,i,o)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let total_sequence_length = u32(${i.getByOffset(`0`)});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${t.getByOffset(`batch_idx`)};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${o.setByOffset(`global_idx`,`pos_id`)}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${o.setByOffset(`global_idx`,`pos_id`)}
    } else if (global_idx < uniforms.batch_size) {
      ${o.setByOffset(`global_idx`,`seqlen`)}
    };
  }
  `}}},Wm=(e,t)=>{if(e.inputs.length>14&&e.inputs[14]||e.inputs.length>15&&e.inputs[15])throw Error(`GroupQueryAttention (JSEP): q_norm_weight / k_norm_weight inputs are not supported. The per-head Q/K RMS normalization prologue is implemented only on the CUDA and native WebGPU EPs.`);let n=Bm(e.inputs,t);if(e.inputs[0].dims.length===5)throw Error(`Packed QKV is not implemented`);if(e.inputs[1]?.dims.length===5)throw Error(`Packed KV is not implemented`);let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,o=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,s=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,c=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,u=n.kvNumHeads?n.kvNumHeads:n.numHeads,d=U({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,u*n.headSize,u*n.headSize]}),[f,p,m]=!i&&!a?e.compute(Mm([r],d),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,a],h,g;if(t.doRotary){let r=e.compute(Um(n.batchSize,n.sequenceLength,c,l),{inputs:[c,l],outputs:[-1]})[0],i=e.inputs[7],a=e.inputs[8],o=U({interleaved:t.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),s=[f,r,i,a],u=[-1];h=e.compute(Lm(s,o),{inputs:s,outputs:u})[0],s.splice(0,1,p);let d=U({interleaved:t.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});g=e.compute(Lm(s,d),{inputs:s,outputs:u})[0]}let _=Tm(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,t.doRotary?h:f,void 0,0),v=Hm(e,t.doRotary?g:p,n),y=Hm(e,m,n);iu(e,_,v,y,void 0,void 0,o,s,void 0,n,c,l)}}),Xm=F(()=>{"use strict";z(),H(),Qc(),Q(),Km=(e,t,n,r,i,a,o,s)=>{let c=J(a),l=c===1?`f32`:`vec${c}f`,u=c===1?`vec2f`:`mat2x${c}f`,d=i*o,f=64;d===1&&(f=256);let p=[i,o,a/c],m=[i,o,2],h=[`rank`,`type`,`type`],g=[];return g.push(...q(p,m)),e.compute({name:`InstanceNormComputeChannelScaleShift`,shaderCache:{hint:`${c};${s};${f}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:m,dataType:1}],dispatchGroup:{x:d},programUniforms:g}),getShaderSource:e=>{let i=X(`x`,t.dataType,3,c),a=[i,X(`scale`,n.dataType,n.dims),X(`bias`,r.dataType,r.dims),Z(`output`,1,3,2)];return`
  var<workgroup> workgroup_shared : array<${u}, ${f}>;
  const workgroup_size = ${f}u;
  ${e.declareVariables(...a)}
  ${e.mainStart(f)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${l}(0);
    var squared_sum = ${l}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${l}(${i.get(`batch`,`channel`,`h`)});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${u}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${Lc(`workgroup_shared[0][0]`,c)} / f32(hight * ${c});
      let squared_sum_final = ${Lc(`workgroup_shared[0][1]`,c)} / f32(hight * ${c});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${s}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`}},{inputs:[t,n,r],outputs:[-1]})[0]},qm=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],o=r[1],s=V.sizeFromDimension(r,2),c=J(s),l=V.size(i)/c,u=Km(e,t[0],t[1],t[2],a,s,o,n.epsilon),d=[a,o,s/c],f=[a,o];e.compute({name:`InstanceNormalization`,shaderCache:{hint:`${c}`,inputDependencies:[`type`,`none`]},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:[{type:12,data:l},...q(d,f,d)]}),getShaderSource:e=>{let n=X(`x`,t[0].dataType,d.length,c),r=X(`scale_shift`,1,f.length,2),i=Z(`output`,t[0].dataType,d.length,c),a=[n,r,i];return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(...a)}
  ${e.mainStart()}
  ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
      let outputIndices = ${i.offsetToIndices(`global_idx`)};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${r.getByIndices(`vec2<u32>(batch, channel)`)};
      let value = ${n.getByOffset(`global_idx`)} * ${i.type.value}(scale_shift.x) + ${i.type.value}(scale_shift.y);
      ${i.setByOffset(`global_idx`,`value`)};
  }`}},{inputs:[t[0],u]})},Jm=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],o=r[r.length-1],s=V.sizeFromDimension(r,1)/o,c=J(o),l=V.size(i)/c,u=[{type:12,data:s},{type:12,data:Math.floor(o/c)}],d=[`type`,`type`],f=!1,p=[0,r.length-1];for(let e=0;e<r.length-2;e++)f||=r[e+1]!==1,p.push(e+1);f&&=r[r.length-1]!==1;let m=f?e.compute(Yc(e.inputs[0],p),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(e,t)=>r[p[t]])),h=Km(e,m,t[1],t[2],a,s,o,n.epsilon);e.compute({name:`InstanceNormalizationNHWC`,shaderCache:{hint:`${c}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u}),getShaderSource:e=>{let n=G(t[0].dataType),r=c===1?`vec2f`:`mat${c}x2f`,a=e=>{let t=e===0?`x`:`y`,r=c===1?`f32`:`vec${c}f`;switch(c){case 1:return`${n}(${r}(scale.${t}))`;case 2:return`vec2<${n}>(${r}(scale[0].${t}, scale[1].${t}))`;case 4:return`vec4<${n}>(${r}(scale[0].${t}, scale[1].${t}, scale[2].${t}, scale[3].${t}))`;default:throw Error(`Not supported compoents ${c}`)}},o=X(`input`,t[0].dataType,t[0].dims,c),s=Z(`output`,t[0].dataType,i,c);return`
  @group(0) @binding(0) var<storage, read> input : array<${o.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${r}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${s.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${e.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${a(0)}, ${a(1)});
  }`}},{inputs:[t[0],h]})},Ym=(e,t)=>{t.format===`NHWC`?Jm(e,e.inputs,t):qm(e,e.inputs,t)}}),eh=F(()=>{"use strict";z(),H(),Q(),Zm=e=>{if(!e||e.length<2)throw Error(`layerNorm requires at least 2 inputs.`)},Qm=(e,t,n)=>{let r=t.simplified,i=e[0].dims,a=e[1],o=!r&&e[2],s=i,c=V.normalizeAxis(t.axis,i.length),l=V.sizeToDimension(i,c),u=V.sizeFromDimension(i,c),d=V.size(a.dims),f=o?V.size(o.dims):0;if(d!==u||o&&f!==u)throw Error(`Size of X.shape()[axis:] == ${u}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${d} and bias size of ${f}`);let p=[];for(let e=0;e<i.length;++e)e<c?p.push(i[e]):p.push(1);let m=J(u),h=[`type`,`type`],g=[{type:12,data:l},{type:1,data:u},{type:12,data:Math.floor(u/m)},{type:1,data:t.epsilon}];o&&h.push(`type`);let _=n>1,v=n>2,y=t=>{let n=G(e[0].dataType),i=[X(`x`,e[0].dataType,e[0].dims,m),X(`scale`,a.dataType,a.dims,m)];return o&&i.push(X(`bias`,o.dataType,o.dims,m)),i.push(Z(`output`,e[0].dataType,s,m)),_&&i.push(Z(`mean_data_output`,1,p)),v&&i.push(Z(`inv_std_output`,1,p)),`
  ${t.registerUniforms([{name:`norm_count`,type:`u32`},{name:`norm_size`,type:`f32`},{name:`norm_size_vectorized`,type:`u32`},{name:`epsilon`,type:`f32`}]).declareVariables(...i)}
  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.norm_count`)}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Fc(`f32`,m)};
    var mean_square_vector = ${Fc(`f32`,m)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Ic(n,m,`x[h + offset]`)};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Lc(`mean_vector`,m)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Lc(`mean_square_vector`,m)} / uniforms.norm_size ${r?``:`- mean * mean`} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Ic(n,m,`x[j + offset]`)};
      let f32scale = ${Ic(n,m,`scale[j]`)};
      output[j + offset] = ${i[0].type.value}((f32input ${r?``:`- mean`}) * inv_std_dev * f32scale
        ${o?`+ ${Ic(n,m,`bias[j]`)}`:``}
      );
    }

    ${_?`mean_data_output[global_idx] = mean`:``};
    ${v?`inv_std_output[global_idx] = inv_std_dev`:``};
  }`},b=[{dims:s,dataType:e[0].dataType}];return _&&b.push({dims:p,dataType:1}),v&&b.push({dims:p,dataType:1}),{name:`LayerNormalization`,shaderCache:{hint:`${m};${n};${r}`,inputDependencies:h},getRunData:()=>({outputs:b,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:g}),getShaderSource:y}},$m=(e,t)=>{Zm(e.inputs),e.compute(Qm(e.inputs,t,e.outputCount))}}),rh=F(()=>{"use strict";H(),Kd(),tf(),th=e=>{if(!e||e.length!==2)throw Error(`MatMul requires 2 inputs.`);if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw Error(`shared dimension does not match.`)},nh=e=>{th(e.inputs);let t=Qs.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw Error(`Can't use matmul on the given tensors`);let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute(Gd(e.inputs,{activation:``},t));else{let i=t[t.length-2],a=V.size(e.inputs[0].dims.slice(0,-2)),o=V.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&i===1&&o===1){let i=e.inputs[0].reshape([1,a,r]),o=e.inputs[1].reshape([1,r,n]),s=[1,a,n],c=[i,o];e.compute(ef(c,{activation:``},t,s),{inputs:c})}else e.compute(ef(e.inputs,{activation:``},t))}}}),lh=F(()=>{"use strict";z(),H(),W(),Q(),ih=(e,t)=>{if(e.length<3||e.length>4)throw Error(`MatMulNBits requires 3 or 4 inputs`);let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw Error(`The last dim of input shape does not match the k value`);let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,o=e[1];if(!V.areEqual(o.dims,[t.n,i,a]))throw Error(`The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize`);let s=e[2].dims;if(V.size(s)!==t.n*i)throw Error(`scales input size error.`);if(e.length===4){let n=e[3].dims,r=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(V.size(n)!==r)throw Error(`zeroPoints input size error.`)}},ah=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),c=V.size(s),l=e[1].dims[2]/4,u=e[0].dataType,d=J(t.k),f=J(l),p=J(o),m=s.concat([i,o]),h=i>1&&o/p%2==0?2:1,g=V.size(m)/p/h,_=[],v=[c,i,a/d],y=V.convertShape(e[1].dims).slice();y.splice(-1,1,l/f),_.push(...q(v)),_.push(...q(y)),_.push(...q(e[2].dims)),e.length===4&&_.push(...q(V.convertShape(e[3].dims)));let b=[c,i,o/p];return _.push(...q(b)),{name:`MatMulNBits`,shaderCache:{hint:`${t.blockSize};${t.bits};${d};${f};${p};${h};64`,inputDependencies:Array(e.length).fill(`rank`)},getRunData:()=>({outputs:[{dims:m,dataType:u}],dispatchGroup:{x:g},programUniforms:_}),getShaderSource:n=>{let r=v.length,i=X(`a`,e[0].dataType,r,d),a=X(`b`,12,y.length,f),o=X(`scales`,e[2].dataType,e[2].dims.length),s=[i,a,o],c=e.length===4?X(`zero_points`,12,e[3].dims.length):void 0;c&&s.push(c);let u=b.length,m=Z(`output`,e[0].dataType,u,p),g=G(e[0].dataType),_=(()=>{switch(d){case 1:return`array<${g}, 8>`;case 2:return`mat4x2<${g}>`;case 4:return`mat2x4<${g}>`;default:throw Error(`${d}-component is not supported.`)}})(),x=Math.floor(32/t.bits),S=Math.floor(x/8),C=()=>{let e=``;for(let n=0;n<S;n++){let r=n*t.bits*4,a=r+t.bits;e+=`
          // reuse a data (pass ${n})
            var input_offset${n>0?n:``} = ${n===0?i.indicesToOffset(`${i.type.indices}(batch, row, word_offset)`):`input_offset`};
            var a_data${n>0?n:``}: ${_};
            for (var j${n>0?n:``}: u32 = 0; j${n>0?n:``} < ${8/d}; j${n>0?n:``}++) {
              a_data${n>0?n:``}[j${n>0?n:``}] = ${i.getByOffset(`input_offset${n>0?n:``}`)};
              input_offset${n>0?n:``}++;
            }
          `;for(let i=0;i<p*h;i++)e+=`
            b_value = ${f===1?`b${i}_data`:`b${i}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${n*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${r}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${a}u) & b_mask);`}
            b_quantized_values = ${_}(${Array.from({length:4},(e,t)=>`${g}(b_value_lower[${t}]), ${g}(b_value_upper[${t}])`).join(`, `)});
            b_dequantized_values = ${d===1?`${_}(${Array.from({length:8},(e,t)=>`(b_quantized_values[${t}] - ${c?`zero_point${i}`:`zero_point`}) * scale${i}`).join(`, `)});`:`(b_quantized_values - ${_}(${Array(8).fill(`${c?`zero_point${i}`:`zero_point`}`).join(`,`)})) * scale${i};`};
            workgroup_shared[local_id.x * ${h} + ${Math.floor(i/p)}]${p>1?`[${i%p}]`:``} += ${Array.from({length:8/d},(e,t)=>`${d===1?`a_data${n>0?n:``}[${t}] * b_dequantized_values[${t}]`:`dot(a_data${n>0?n:``}[${t}], b_dequantized_values[${t}])`}`).join(` + `)};
          `}return e},w=()=>{let e=`
            var col_index = col * ${p};
            ${c?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${2**(t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${g}(${(2**(t.bits-1)).toFixed(1)});`}
            `;for(let n=0;n<p*h;n++)e+=`
            let scale${n} = ${o.getByOffset(`col_index * nBlocksPerCol + block`)};
            ${c?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${c.getByOffset(`zero_point_word_index`)} >> zero_point_bits_offset;
            let zero_point${n} = ${g}((zero_point_word) & ${t.bits===2?`0x3u`:`0xFu`});`:``}
            col_index += 1;`;return e},ee=()=>{let e=`col_index = col * ${p};`;for(let t=0;t<p*h;t++)e+=`
            let b${t}_data = ${a.getByIndices(`${a.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return e+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?`0x03030303u`:`0x0F0F0F0Fu`};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${_};
            var b_dequantized_values: ${_};`,e};return`
        var<workgroup> workgroup_shared: array<${m.type.value}, ${h*64}>;
        ${n.declareVariables(...s,m)}
        ${n.mainStart([64,1,1])}
          let output_indices = ${m.offsetToIndices(`(global_idx / 64) * ${h}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += 64) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/d};
            ${w()}
            for (var word: u32 = 0; word < ${l}; word += ${f}) {
              ${ee()}
              for (var i: u32 = 0; i < ${f}; i++) {
                ${C()}
                word_offset += ${x/d};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${h}) {
            var output_value: ${m.type.value} = ${m.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < 64u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${h};
            }
            ${m.setByIndices(`${m.type.indices}(batch, row, col + local_id.x)`,`output_value`)};
          }
        }`}}},oh=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),c=V.size(s),l=e[1].dims[2]/4,u=e[0].dataType,d=J(t.k),f=J(l),p=s.concat([i,o]),m=o%8==0?8:o%4==0?4:1,h=128/m,g=Math.floor(32/t.bits),_=h*f*g,v=_/d,y=_/t.blockSize,b=V.size(p)/m,x=[],S=[c,i,a/d],C=V.convertShape(e[1].dims).slice();C.splice(-1,1,l/f),x.push(...q(S)),x.push(...q(C)),x.push(...q(e[2].dims)),e.length===4&&x.push(...q(V.convertShape(e[3].dims)));let w=[c,i,o];return x.push(...q(w)),{name:`BlockwiseMatMulNBits32`,shaderCache:{hint:`${t.blockSize};${d};${f};${h};${m}`,inputDependencies:Array(e.length).fill(`rank`)},getRunData:()=>({outputs:[{dims:p,dataType:u}],dispatchGroup:{x:b},programUniforms:x}),getShaderSource:n=>{let r=S.length,i=X(`a`,e[0].dataType,r,d),a=X(`b`,12,C.length,f),o=X(`scales`,e[2].dataType,e[2].dims.length),s=[i,a,o],c=e.length===4?X(`zero_points`,12,e[3].dims.length):void 0;c&&s.push(c);let l=w.length,u=Z(`output`,e[0].dataType,l),p=G(e[0].dataType),_=()=>{switch(d){case 1:return`
          let a_data0 = vec4<${p}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${p}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${p}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${p}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw Error(`${d}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${i.type.value}, ${v}>;
        var<workgroup> inter_results: array<array<${u.type.value}, ${h}>, ${m}>;
        ${n.declareVariables(...s,u)}
        ${n.mainStart([h,m,1])}
          let output_indices = ${u.offsetToIndices(`workgroup_index * ${m}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${y} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${v};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${v}; a_offset += 128)
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${i.getByIndices(`${i.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${i.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${y} + local_id.x;
            ${c?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${c.getByOffset(`zero_point_word_index`)} >> zero_point_bits_offset;
            let zero_point = ${p}((zero_point_word) & ${t.bits===2?`0x3u`:`0xFu`});`:`
            // The default zero point is ${2**(t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${p}(${(2**(t.bits-1)).toFixed(1)});`}
            let scale = ${o.getByOffset(`b_row * n_blocks_per_col + block`)};
            let b_data = ${a.getByIndices(`${a.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/d};
            for (var i: u32 = 0; i < ${f}; i++) {
              let b_value = ${f===1?`b_data`:`b_data[i]`};
              ${(()=>{let e=Math.floor(g/8),n=``;for(let r=0;r<e;r++){let e=r*t.bits*4,i=e+t.bits;n+=`
              ${_()}
              {${t.bits===2?`
                let half_word = b_value >> ${r*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${e}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${i}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${p}>(${Array.from({length:4},(e,t)=>`${p}(b_value_lower[${t}]), ${p}(b_value_upper[${t}])`).join(`, `)});
                let b_dequantized_values = (b_quantized_values - mat2x4<${p}>(${Array(8).fill(`zero_point`).join(`,`)})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(e,t)=>`${`dot(a_data${t}, b_dequantized_values[${t}])`}`).join(` + `)};
              }
              word_offset += ${8/d};`}return n})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${m}) {
            var output_value: ${u.type.value} = ${u.type.value}(0);
            for (var b = 0u; b < ${h}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${u.setByIndices(`${u.type.indices}(batch, row, col + local_idx)`,`output_value`)}
            }
          }
        }`}}},sh=(e,t)=>{ih(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor(`intel`)&&e.adapterInfo.isArchitecture(`gen-12lp`)?e.compute(oh(e.inputs,t)):e.compute(ah(e.inputs,t))},ch=e=>U(e)}),yh=F(()=>{"use strict";z(),H(),Q(),uh=e=>{if(!e||e.length<1)throw Error(`Too few inputs`);if(e[0].dataType!==1&&e[0].dataType!==10)throw Error(`Input type must be float or float16.`);if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw Error(`The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].`)}},dh=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
            k = i32(${e.indicesGet(`indices`,i)}) - ${Y(`uniforms.pads`,i,n)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${Y(`uniforms.x_shape`,i,t)})) {
              break;
            }
            offset += k * i32(${Y(`uniforms.x_strides`,i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${r}
            value = x[offset];
          }
      `},fh=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet(`indices`,i)}) - ${Y(`uniforms.pads`,i,n)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${Y(`uniforms.x_shape`,i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${Y(`uniforms.x_shape`,i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${Y(`uniforms.x_strides`,i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},ph=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet(`indices`,i)}) - ${Y(`uniforms.pads`,i,n)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${Y(`uniforms.x_shape`,i,t)})) {
                  k = i32(${Y(`uniforms.x_shape`,i,t)}) - 1;
                }
                offset += k * i32(${Y(`uniforms.x_strides`,i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},mh=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet(`indices`,i)}) - ${Y(`uniforms.pads`,i,n)};
                if (k < 0)  {
                  k += i32(${Y(`uniforms.x_shape`,i,t)}]);
                }
                if (k >= i32(${Y(`uniforms.x_shape`,i,t)})) {
                  k -= i32(${Y(`uniforms.x_shape`,i,t)});
                }
                offset += k * i32(${Y(`uniforms.x_strides`,i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},hh=(e,t,n)=>{switch(n.mode){case 0:return dh(e,t,n.pads.length);case 1:return fh(e,t,n.pads.length);case 2:return ph(e,t,n.pads.length);case 3:return mh(e,t,n.pads.length);default:throw Error(`Invalid mode`)}},gh=(e,t)=>{let n=V.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=[{type:12,data:V.size(n)},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;return t.mode===0&&i.push({type:a?e[2].dataType:1,data:t.value}),i.push(...q(e[0].dims,n)),{name:`Pad`,shaderCache:{hint:`${t.mode}${a}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(V.size(n)/64)},programUniforms:i}),getShaderSource:i=>{let o=Z(`output`,e[0].dataType,n.length),s=X(`x`,e[0].dataType,r.length),c=s.type.value,l=hh(o,r.length,t),u=[{name:`output_size`,type:`u32`},{name:`pads`,type:`i32`,length:t.pads.length}];return t.mode===0&&u.push({name:`constant_value`,type:a?c:`f32`}),`
            ${i.registerUniforms(u).declareVariables(s,o)}
            ${i.mainStart()}
            ${i.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

            let indices = ${o.offsetToIndices(`global_idx`)};

            var value = ${c}(0);
            ${l}
            output[global_idx] = value;
        }`}}},_h=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,a=new Int32Array(2*i).fill(0);if(e.length>=4){let t=e[3].getBigInt64Array();for(let e=0;e<t.length;e++)a[Number(t[e])]=Number(n[e]),a[Number(t[e])+i]=Number(n[e+t.length])}else n.forEach((e,t)=>a[Number(t)]=Number(e));let o=[];return a.forEach(e=>o.push(e)),{mode:t.mode,value:r,pads:o}}return t},vh=(e,t)=>{uh(e.inputs);let n=_h(e.inputs,t);e.compute(gh(e.inputs,n),{inputs:[0]})}}),zh=F(()=>{"use strict";Vo(),z(),H(),Q(),bh=e=>{if(I.webgpu.validateInputContent&&(!e||e.length!==1))throw Error(`Pool ops requires 1 input.`)},xh=(e,t,n)=>{let r=t.format===`NHWC`,i=e.dims.slice();r&&i.splice(1,0,i.pop());let a=Object.hasOwnProperty.call(t,`dilations`),o=t.kernelShape.slice(),s=t.strides.slice(),c=a?t.dilations.slice():[],l=t.pads.slice();$s.adjustPoolAttributes(n,i,o,s,c,l);let u=$s.computePoolOutputShape(n,i,s,c,o,l,t.autoPad,t.ceilMode),d=Object.assign({},t);a?Object.assign(d,{kernelShape:o,strides:s,pads:l,dilations:c,cacheKey:t.cacheKey}):Object.assign(d,{kernelShape:o,strides:s,pads:l,cacheKey:t.cacheKey});let f=u.slice();return f.push(f.splice(1,1)[0]),[d,r?f:u]},Sh=(e,t)=>{let n=t.format===`NHWC`,r=V.size(e),i=V.size(t.kernelShape),a=[{type:12,data:r},{type:12,data:i}],o=[{name:`outputSize`,type:`u32`},{name:`kernelSize`,type:`u32`}];if(t.kernelShape.length<=2){let e=t.kernelShape[t.kernelShape.length-1],n=t.strides[t.strides.length-1],r=t.pads[t.pads.length/2-1],i=t.pads[t.pads.length-1],s=!!(r+i);a.push({type:12,data:e},{type:12,data:n},{type:12,data:r},{type:12,data:i}),o.push({name:`kw`,type:`u32`},{name:`sw`,type:`u32`},{name:`pwStart`,type:`u32`},{name:`pwEnd`,type:`u32`});let c=!1;if(t.kernelShape.length===2){let e=t.kernelShape[t.kernelShape.length-2],n=t.strides[t.strides.length-2],r=t.pads[t.pads.length/2-2],i=t.pads[t.pads.length-2];c=!!(r+i),a.push({type:12,data:e},{type:12,data:n},{type:12,data:r},{type:12,data:i}),o.push({name:`kh`,type:`u32`},{name:`sh`,type:`u32`},{name:`phStart`,type:`u32`},{name:`phEnd`,type:`u32`})}return[a,o,!0,s,c]}{if(n)throw Error(`Pooling with kernelShape.length > 2 is not supported for NHWC format.`);let e=V.computeStrides(t.kernelShape);return a.push({type:12,data:e},{type:12,data:t.pads},{type:12,data:t.strides}),o.push({name:`kernelStrides`,type:`u32`,length:e.length},{name:`pads`,type:`u32`,length:t.pads.length},{name:`strides`,type:`u32`,length:t.strides.length}),[a,o,!!t.pads.reduce((e,t)=>e+t),!1,!1]}},Ch=(e,t,n,r,i,a,o,s,c,l,u,d)=>{let f=i.format===`NHWC`,p=t.type.value,m=Z(`output`,t.type.tensor,r);if(i.kernelShape.length<=2){let r=``,l=``,h=``,g=n-(f?2:1);if(r=u?`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${g}] = indices[${g}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${g}] < 0 || xIndices[${g}]
                      >= uniforms.x_shape[${g}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset(`xIndices`)}];
                  ${a}
                }`:`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${g}] = indices[${g}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset(`xIndices`)}];
                  ${a}
                }`,i.kernelShape.length===2){let e=n-(f?3:2);l=d?`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${e}] = indices[${e}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${e}] < 0 || xIndices[${e}] >= uniforms.x_shape[${e}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${e}] = indices[${e}] * uniforms.sh - uniforms.phStart + j;
                `,h=`
              }
            `}return`
            ${e.registerUniforms(c).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}

              let indices = ${m.offsetToIndices(`global_idx`)};
              var xIndices = ${m.offsetToIndices(`global_idx`)};

              var value = ${p}(${s});
              var pad = 0;
              ${l}
              ${r}
              ${h}
              ${o}

              output[global_idx] = value;
            }`}{if(f)throw Error(`Pooling with kernelShape.length > 2 is not supported for NHWC format.`);let r=i.kernelShape.length,u=i.pads.length,d=``;return d=l?`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset(`xIndices`)}];
                ${a}
              }`:`
              }
              let x_val = x[${t.indicesToOffset(`xIndices`)}];
              ${a}
            `,`
            ${e.registerUniforms(c).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
              let indices = ${m.offsetToIndices(`global_idx`)};
              var xIndices = ${m.offsetToIndices(`global_idx`)};

              var offsets: array<u32, ${r}>;

              var value = ${p}(${s});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${r-1}u; j++) {
                  offsets[j] = offset / ${Y(`uniforms.kernelStrides`,`j`,r)};
                  offset -= offsets[j] * ${Y(`uniforms.kernelStrides`,`j`,r)};
                }
                offsets[${r-1}] = offset;

                isPad = false;
                for (var j = ${n-r}u; j < ${n}u; j++) {
                  xIndices[j] = indices[j] * ${Y(`uniforms.strides`,`j - ${n-r}u`,r)}
                    + offsets[j - ${n-r}u] - ${Y(`uniforms.pads`,`j - 2u`,u)};
                  ${d}
              }
              ${o}

              output[global_idx] = value;
            }`}},wh=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Th=e=>`${wh(e)};${e.countIncludePad}`,Eh=e=>`${wh(e)};${e.storageOrder};${e.dilations}`,Dh=e=>({format:e.format,autoPad:[`NOTSET`,`VALID`,`SAME_UPPER`,`SAME_LOWER`][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Oh=(e,t,n,r)=>{let[i,a]=xh(t,r,n),o=X(`x`,t.dataType,t.dims.length),s=o.type.value,c=``;i.countIncludePad?c+=`value /= ${s}(uniforms.kernelSize);`:c+=`value /= ${s}(i32(uniforms.kernelSize) - pad);`;let[l,u,d,f,p]=Sh(a,i);return l.push(...q(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${d};${f};${p}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(V.size(a)/64)},programUniforms:l}),getShaderSource:e=>Ch(e,o,t.dims.length,a.length,i,`value += x_val;`,c,0,u,d,f,p)}},kh=e=>{let t=e.count_include_pad!==0,n=Dh(e);if(n.ceilMode!==0)throw Error(`ceil_mode output-shape is computed, but ceil_mode kernel execution (padding/divisor) is not yet implemented in the WebGPU AveragePool kernel`);let r={countIncludePad:t,...n,cacheKey:``};return{...r,cacheKey:Th(r)}},Ah=(e,t)=>{bh(e.inputs),e.compute(Oh(`AveragePool`,e.inputs[0],!1,t))},jh={autoPad:``,ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Mh=e=>{let t=e.format;return{format:t,...jh,cacheKey:t}},Nh=(e,t)=>{bh(e.inputs),e.compute(Oh(`GlobalAveragePool`,e.inputs[0],!0,t))},Ph=(e,t,n,r)=>{let[i,a]=xh(t,r,n),o=X(`x`,t.dataType,t.dims.length),s=[`rank`],[c,l,u,d,f]=Sh(a,i);return c.push(...q(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${u};${d};${f}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(V.size(a)/64)},programUniforms:c}),getShaderSource:e=>Ch(e,o,t.dims.length,a.length,i,`
      value = max(x_val, value);
    `,``,t.dataType===10?-65504:-1e5,l,u,d,f)}},Fh=(e,t)=>{bh(e.inputs),e.compute(Ph(`MaxPool`,e.inputs[0],!1,t))},Ih=e=>{let t=e.storage_order,n=e.dilations,r=Dh(e);if(t!==0)throw Error(`column major storage order is not yet supported for MaxPool`);if(r.ceilMode!==0)throw Error(`ceil_mode output-shape is computed, but ceil_mode kernel execution (padding) is not yet implemented in the WebGPU MaxPool kernel`);let i={storageOrder:t,dilations:n,...r,cacheKey:``};return{...i,cacheKey:Eh(i)}},Lh=e=>{let t=e.format;return{format:t,...jh,cacheKey:t}},Rh=(e,t)=>{bh(e.inputs),e.compute(Ph(`GlobalMaxPool`,e.inputs[0],!0,t))}}),Wh=F(()=>{"use strict";z(),H(),W(),Q(),Bh=(e,t)=>{if(e.length<2||e.length>3)throw Error(`DequantizeLinear requires 2 or 3 inputs.`);if(e.length===3&&e[1].dims===e[2].dims)throw Error(`x-scale and x-zero-point must have the same shape.`);if(e.length===3&&e[0].dataType!==e[2].dataType)throw Error(`x and x-zero-point must have the same data type.`);if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw Error(`scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.`);if(e.length>2){if(e[0].dataType!==e[2].dataType)throw Error(`x and x-zero-point must have the same data type.`);if(e[1].dims.length!==e[2].dims.length)throw Error(`scale and zero-point inputs must have the same rank.`);if(!e[1].dims.map((t,n)=>t===e[2].dims[n]).reduce((e,t)=>e&&t,!0))throw Error(`scale and zero-point inputs must have the same shape.`)}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw Error(`blockSize must be set only for block quantization.`);if(!e[1].dims.map((n,r)=>r===t.axis||n===e[0].dims[r]).reduce((e,t)=>e&&t,!0))throw Error(`For block qunatization, scale input shape to match the input shape except for the axis`);if(e[1].dims.length!==e[0].dims.length)throw Error(`For block qunatization the scale input rank must be the same as the x rank.`);let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw Error(`blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].`)}},Vh=(e,t)=>{let n=V.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,a=e[0].dims,o=e[1].dataType,s=V.size(a),c=r===3||r===2,l=c?[Math.ceil(V.size(e[0].dims)/4)]:e[0].dims,u=e[1].dims,d=e.length>2?e[2]:void 0,f=d?c?[Math.ceil(V.size(d.dims)/4)]:d.dims:void 0,p=u.length===0||u.length===1&&u[0]===1,m=p===!1&&u.length===1,h=J(s),g=p&&(!c||h===4),_=g?h:1,v=g&&!c?h:1,y=X(`input`,c?12:r,l.length,v),b=X(`scale`,o,u.length),x=d?X(`zero_point`,c?12:r,f.length):void 0,S=Z(`output`,o,a.length,_),C=[y,b];x&&C.push(x);let w=[l,u];d&&w.push(f);let ee=[{type:12,data:s/_},{type:12,data:n},{type:12,data:t.blockSize},...q(...w,a)];return{name:`DequantizeLinear`,shaderCache:{hint:t.cacheKey,inputDependencies:x?[`rank`,`rank`,`rank`]:[`rank`,`rank`]},getShaderSource:e=>`
      ${e.registerUniforms([{name:`output_size`,type:`u32`},{name:`axis`,type:`u32`},{name:`block_size`,type:`u32`}]).declareVariables(...C,S)}
      ${e.mainStart()}
          ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
          let output_indices = ${S.offsetToIndices(`global_idx`)};

          // Set input x
          ${c?`
            let input = ${y.getByOffset(`global_idx / 4`)};
            let x_vec = ${i?`unpack4xI8(input)`:`unpack4xU8(input)`};
            let x_value = ${_===1?`x_vec[global_idx % 4]`:`x_vec`};`:`let x_value = ${y.getByOffset(`global_idx`)};`};

          // Set scale input
          ${p?`let scale_value= ${b.getByOffset(`0`)}`:m?`
            let scale_index = ${S.indicesGet(`output_indices`,`uniforms.axis`)};
            let scale_value= ${b.getByOffset(`scale_index`)};`:`
            var scale_indices: ${b.type.indices} = output_indices;
            let index = ${b.indicesGet(`scale_indices`,`uniforms.axis`)} / uniforms.block_size;
            ${b.indicesSet(`scale_indices`,`uniforms.axis`,`index`)};
            let scale_value= ${b.getByIndices(`scale_indices`)};`};

          // Set zero-point input
          ${x?p?c?`
                let zero_point_input = ${x.getByOffset(`0`)};
                let zero_point_vec =  ${i?`unpack4xI8(zero_point_input)`:`unpack4xU8(zero_point_input)`};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${x.getByOffset(`0`)}`:m?c?`
                let zero_point_index = ${S.indicesGet(`output_indices`,`uniforms.axis`)};
                let zero_point_input = ${x.getByOffset(`zero_point_index / 4`)};
                let zero_point_vec =  ${i?`unpack4xI8(zero_point_input)`:`unpack4xU8(zero_point_input)`};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${S.indicesGet(`output_indices`,`uniforms.axis`)};
                let zero_point_value = ${x.getByOffset(`zero_point_index`)};`:c?`
                let zero_point_offset = ${b.indicesToOffset(`scale_indices`)};
                let zero_point_input = ${x.getByOffset(`zero_point_offset / 4`)};
                let zero_point_vec = ${i?`unpack4xI8(zero_point_input)`:`unpack4xU8(zero_point_input)`};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${x.getByIndices(`scale_indices`)};`:`let zero_point_value = ${c?i?`i32`:`u32`:y.type.value}(0);`};
      // Compute and write output
      ${S.setByOffset(`global_idx`,`${S.type.value}(x_value - zero_point_value) * scale_value`)};
      }`,getRunData:()=>({outputs:[{dims:a,dataType:o}],dispatchGroup:{x:Math.ceil(s/_/64),y:1,z:1},programUniforms:ee})}},Hh=(e,t)=>{Bh(e.inputs,t),e.compute(Vh(e.inputs,t))},Uh=e=>U({axis:e.axis,blockSize:e.blockSize})}),Jh=F(()=>{"use strict";Vo(),z(),Q(),Gh=(e,t,n)=>{if(e===t||e<t&&n<0||e>t&&n>0)throw Error(`Range these inputs' contents are invalid.`)},Kh=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),a=[i],o=i,s=[{type:12,data:o},{type:r,data:e},{type:r,data:n},...q(a)];return{name:`Range`,shaderCache:{hint:`${r}`},getShaderSource:e=>{let t=Z(`output`,r,a.length),n=t.type.value,i=[{name:`outputSize`,type:`u32`},{name:`start`,type:n},{name:`delta`,type:n}];return`
        ${e.registerUniforms(i).declareVariables(t)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
        output[global_idx] = uniforms.start + ${n}(global_idx) * uniforms.delta;
      }`},getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:s})}},qh=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),I.webgpu.validateInputContent&&Gh(t,n,r),e.compute(Kh(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),$h=F(()=>{"use strict";z(),H(),W(),Q(),Yh=(e,t,n,r)=>{if(e!==`none`&&r!==`i32`&&r!==`u32`&&r!==`f32`)throw Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,a=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case`none`:return`${t}=${n};`;case`add`:return r===`i32`||r===`u32`?`atomicAdd(&${t}, bitcast<${r}>(${n}));`:`
              ${i}bitcast<${r}>(oldValue) + (${n})${a}`;case`max`:return r===`i32`||r===`u32`?`atomicMax(&${t}, bitcast<${r}>(${n}));`:`
                ${i}max(bitcast<f32>(oldValue), (${n}))${a}`;case`min`:return r===`i32`||r===`u32`?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${a}`;case`mul`:return`${i}(bitcast<${r}>(oldValue) * (${n}))${a}`;default:throw Error(`Reduction ${e} is not supported.`)}},Xh=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,a=Math.ceil(V.sizeToDimension(r,r.length-1)/1),o=r[r.length-1],s=V.sizeFromDimension(n,o),c=[{type:12,data:a},{type:12,data:o},{type:12,data:s},...q(e[1].dims,e[2].dims,i)];return{name:`ScatterND`,shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:c}),getShaderSource:n=>{let r=X(`indices`,e[1].dataType,e[1].dims.length),a=X(`updates`,e[2].dataType,e[2].dims.length,1),o=t.reduction!==`none`&&t.reduction!==``?zc(`output`,e[0].dataType,i.length):Z(`output`,e[0].dataType,i.length,1);return`
      ${n.registerUniform(`output_size`,`u32`).registerUniform(`last_index_dimension`,`u32`).registerUniform(`num_updates_elements`,`u32`).declareVariables(r,a,o)}
      ${n.mainStart()}
        ${n.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${Yh(t.reduction,`output[data_offset + i]`,`value`,o.type.value)}
  }

      }`}}},Zh=e=>U({reduction:e.reduction}),Qh=(e,t)=>{e.compute(Xh(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),bg=F(()=>{"use strict";z(),H(),W(),Q(),eg=(e,t)=>{if(e.every(e=>e>0||(()=>{throw Error(`Resize requires scales input values to be positive`)})),e.length>0){if(t.mode===`linear`){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode===`cubic`&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw Error(`Resize requires scales input size to be 2 or 4 for cubic mode`)}},tg=(e,t,n)=>{t.every(e=>e>=0&&e<n||(()=>{throw Error(`Resize requires axes input values to be positive and less than rank`)}));let r=Array(n).fill(1);return t.forEach((t,n)=>r[t]=e[n]),r},ng=(e,t,n,r,i,a)=>{let[o,s,c]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(o>0&&e.length>o&&e[o].dims.length>0)e[o].getFloat32Array().forEach(e=>a.push(e));else if(t.coordinateTransformMode===`tf_crop_and_resize`)throw Error(`Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize`);if(s>0&&e.length>s&&e[s].dims.length===1&&e[s].dims[0]>0){if(e[s].getFloat32Array().forEach(e=>r.push(e)),r.length!==0&&r.length!==l&&n>=18&&r.length!==t.axes.length)throw Error(`Resize requires scales input size to be same as input rank or axes size for opset 18 and up`);eg(r,t),t.axes.length>0&&tg(r,t.axes,l).forEach((e,t)=>r[t]=e)}if(c>0&&e.length>c&&e[c].dims.length===1&&e[c].dims[0]>0&&(e[c].getBigInt64Array().forEach(e=>i.push(Number(e))),i.length!==0&&i.length!==l&&n>=18&&i.length!==t.axes.length))throw Error(`Resize requires sizes input size to be same as input rank or axes size for opset 18 and up`);if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw Error(`Resize requires "scales" input size to be of axes rank when axes attributes is specified`);if(i.length!==0&&i.length!==t.axes.length)throw Error(`Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified`)}if(typeof r<`u`&&typeof i<`u`&&r.length>0&&i.length>l)throw Error(`Resize requires only of scales or sizes to be specified`)},rg=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,ig=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case`asymmetric`:return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${rg(`xResized`,`lengthOriginal`,`lengthResized`,t)}
          }
        `;case`pytorch_half_pixel`:return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case`tf_half_pixel_for_nn`:return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case`align_corners`:return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${rg(`xResized`,`lengthOriginal - 1`,`lengthResized - 1`,t)}
                  }`;case`tf_crop_and_resize`:return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case`half_pixel_symmetric`:return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case`half_pixel`:return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw Error(`Coordinate transform mode ${e} is not supported`)}})()+`}`,ag=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case`round_prefer_ceil`:return`if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }`;case`floor`:return`return floor(xOriginal);`;case`ceil`:return`return ceil(xOriginal);`;case`round_prefer_floor`:return`if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }`;default:if(t<11)return`if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }`;throw Error(`Nearest mode ${e} is not supported`)}})()+`}`,og=(e,t,n)=>{let r=Array(n).fill(0).concat(Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((e,a)=>{r[e]=i[a],r[a+n]=i[t.length+a]}),r):i},sg=(e,t,n,r)=>{let i=[];if(n.length>0){if(r.length>0){if(e.forEach(e=>i.push(e)),Math.max(...r)>e.length)throw Error(`axes is out of bound`);r.forEach((e,t)=>i[e]=n[t])}else n.forEach(e=>i.push(e))}else{if(t.length===0)throw Error(`Resize requires either scales or sizes.`);i=e.map((e,n)=>Math.round(e*t[n]))}return i},cg=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case`not_larger`:return n.axes.length>0?Math.min(...n.axes.map(e=>t[e]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case`not_smaller`:return n.axes.length>0?Math.max(...n.axes.map(e=>t[e]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(e=>t[e]=r),n.axes.forEach(n=>i[n]=Math.round(e[n]*t[n]))):(t.fill(r,0,t.length),i.forEach((e,n)=>i[n]=Math.round(e*t[n]))),i},lg=(e,t,n,r,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${n.length}> {
      var original_indices: array<${e.type.value}, ${n.length}>;
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${e.indicesGet(`output_indices`,`i`)};
        var scale = ${Y(`uniforms.scales`,`i`,r)};
        var roi_low = ${Y(`uniforms.roi`,`i`,i)};
        var roi_hi = ${Y(`uniforms.roi`,`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${Y(`uniforms.input_shape`,`i`,t.length)};
          var output_shape_i = ${Y(`uniforms.output_shape`,`i`,n.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,ug=(e,t,n,r,i,a,o)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet(`output_indices`,`i`)};
        var input_index: u32;
        var scale = ${Y(`uniforms.scales`,`i`,i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${Y(`uniforms.roi`,`i`,a)};
          var roi_hi = ${Y(`uniforms.roi`,`i + ${n.length}`,a)};
          var input_shape_i = ${Y(`uniforms.input_shape`,`i`,n.length)};
          var output_shape_i = ${Y(`uniforms.output_shape`,`i`,r.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${o} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet(`input_indices`,`i`,`input_index`)}
      }
      return input_indices;
    }`,dg=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet(`input_indices`,`i`)};
        if (input_index < 0 || input_index >= ${Y(`uniforms.input_shape`,`i`,t.length)}) {
          return false;
        }
      }
      return true;
    }`,fg=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet(`input_indices`,t,`channel`)};
    ${e.indicesSet(`input_indices`,n,`batch`)};
`:``,pg=(e,t,n,r,i)=>{let[a,o,s,c]=n.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet(`input_indices`,o,`max(0, min(row, ${n[o]} - 1))`)};
      ${e.indicesSet(`input_indices`,s,`max(0, min(col, ${n[s]} - 1))`)};
      ${fg(e,c,a,2)}
      return ${e.getByIndices(`input_indices`)};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${l} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${l} = originalIndices[${o}];
      var col:${l} = originalIndices[${s}];
      ${r?`if (row < 0 || row > (${n[o]} - 1) || col < 0 || col > (${n[s]} - 1)) {
        return ${i};
      }`:``};
      row = max(0, min(row, ${n[o]} - 1));
      col = max(0, min(col, ${n[s]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${n.length>2?`u32(originalIndices[${c}])`:`0`};
      var batch: u32 =  ${n.length>2?`u32(originalIndices[${a}])`:`0`};
      var x11: ${l} = getInputValue(batch, channel, row1, col1);
      var x12: ${l} = getInputValue(batch, channel, row1, col2);
      var x21: ${l} = getInputValue(batch, channel, row2, col1);
      var x22: ${l} = getInputValue(batch, channel, row2, col2);
      var dx1: ${l} = abs(row - ${l}(row1));
      var dx2: ${l} = abs(${l}(row2) - row);
      var dy1: ${l} = abs(col - ${l}(col1));
      var dy2: ${l} = abs(${l}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},mg=(e,t,n,r,i,a,o,s,c,l)=>{let[u,d]=n.length===2?[0,1]:[2,3],f=e.type.value,p=o=>{let d=o===u?`row`:`col`;return`
      fn ${d}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${f} {
        var output_index = ${t.indicesGet(`output_indices`,o)};
        var originalIdx: ${f} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[o]},
        ${r[o]}, ${n[o]}, ${a[o]}, ${a[o]} + ${n.length});
        var fractOriginalIdx: ${f} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${s} && (originalIdx < 0 || originalIdx > (${n[o]} - 1))) {
          return ${c};
        }
        var data: array<${f}, 4> = array<${f}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${d}: ${f} = originalIdx + ${f}(i);
          if (${d} < 0 || ${d} >= ${n[o]}) {
            ${l?`coefs[i + 1] = 0.0;
                        continue;`:s?`return ${c};`:`${d} = max(0, min(${d}, ${n[o]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet(`input_indices_copy`,o,`u32(${d})`)};
          data[i + 1] = ${o===u?e.getByIndices(`input_indices_copy`):`rowCubicInterpolation(input_indices_copy, output_indices)`};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${p(u)};
    ${p(d)};
  fn getCubicInterpolationCoefs(s: ${f}) -> array<${f}, 4> {
    var absS = abs(s);
    var coeffs: array<${f}, 4> = array<${f}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${f} = 1.0 - absS;
    var twoMinusAbsS: ${f} = 2.0 - absS;
    var onePlusAbsS: ${f} = 1.0 + absS;
    coeffs[0] = ((${o} * onePlusAbsS - 5 * ${o}) * onePlusAbsS + 8 * ${o}) * onePlusAbsS - 4 * ${o};
    coeffs[1] = ((${o} + 2) * absS - (${o} + 3)) * absS * absS + 1;
    coeffs[2] = ((${o} + 2) * oneMinusAbsS - (${o} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${o} * twoMinusAbsS - 5 * ${o}) * twoMinusAbsS + 8 * ${o}) * twoMinusAbsS - 4 * ${o};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${f}, 4>, coefs: array<${f}, 4>) -> ${f} {
    var coefsSum: ${f} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${f} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},hg=(e,t,n,r,i)=>{let[a,o,s,c,l]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],u=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${u} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet(`input_indices`,o,`max(0, min(depth, ${n[o]} - 1))`)};
      ${e.indicesSet(`input_indices`,s,`max(0, min(height, ${n[s]} - 1))`)};
      ${e.indicesSet(`input_indices`,c,`max(0, min(width, ${n[c]} - 1))`)};
      ${fg(e,l,a,3)}
      return ${e.getByIndices(`input_indices`)};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${u} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${u} = originalIndices[${o}];
      var height:${u} = originalIndices[${s}];
      var width:${u} = originalIndices[${c}];
      ${r?`if (depth < 0 || depth > (${n[o]} - 1) || height < 0 || height > (${n[s]} - 1) || width < 0 || (width > ${n[c]} - 1)) {
      return ${i};
        }`:``};

    depth = max(0, min(depth, ${n[o]} - 1));
      height = max(0, min(height, ${n[s]} - 1));
      width = max(0, min(width, ${n[c]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${n.length>3?`u32(originalIndices[${l}])`:`0`};
      var batch: u32 =  ${n.length>3?`u32(originalIndices[${a}])`:`0`};

      var x111: ${u} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${u} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${u} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${u} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${u} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${u} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${u} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${u} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${u} = abs(depth - ${u}(depth1));
      var dx2: ${u} = abs(${u}(depth2) - depth);
      var dy1: ${u} = abs(height - ${u}(height1));
      var dy2: ${u} = abs(${u}(height2) - height);
      var dz1: ${u} = abs(width - ${u}(width1));
      var dz2: ${u} = abs(${u}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},gg=(e,t,n,r,i,a)=>{let o=e.dims,s=og(a,t.axes,o.length),c=sg(o,r,i,t.axes),l=r.slice();r.length===0&&(l=o.map((e,t)=>e===0?1:c[t]/e),t.keepAspectRatioPolicy!==`stretch`&&(c=cg(o,l,t)));let u=Z(`output`,e.dataType,c.length),d=X(`input`,e.dataType,o.length),f=V.size(c),p=o.length===c.length&&o.every((e,t)=>e===c[t]),m=t.coordinateTransformMode===`tf_crop_and_resize`,h=t.extrapolationValue,g=d.type.value;return{name:`Resize`,shaderCache:{hint:`${t.cacheKey}|${n}|${l.length>0?t.mode===`cubic`?l:l.length:``}|${i.length>0?i:``}|${s.length>0?s:``}|${p}|${t.mode===`nearest`?o.length:o}`,inputDependencies:[`rank`]},getShaderSource:e=>`
      ${p?``:`
      ${ig(t.coordinateTransformMode,g)};
      ${(()=>{switch(t.mode){case`nearest`:return`
              ${dg(d,o)};
              ${ag(t.nearestMode,n,g)};
              ${ug(d,u,o,c,l.length,s.length,m)};
              `;case`linear`:return`
              ${lg(u,o,c,l.length,s.length)};
              ${(()=>{if(o.length===2||o.length===4)return`${pg(d,u,o,m,h)}`;if(o.length===3||o.length===5)return`${hg(d,u,o,m,h)}`;throw Error(`Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.`)})()};
            `;case`cubic`:return`
            ${(()=>{if(o.length===2||o.length===4)return`${mg(d,u,o,c,l,s,t.cubicCoeffA,m,t.extrapolationValue,t.excludeOutside)}`;throw Error(`Cubic mode only supports input dims 2 and 4 are supported in linear mode.`)})()};
            `;default:throw Error(`Invalid resize mode`)}})()};
      `}
      ${e.registerUniform(`output_size`,`u32`).registerUniform(`scales`,`f32`,l.length).registerUniform(`roi`,`f32`,s.length).declareVariables(d,u)}
      ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
        ${p?`output[global_idx] = input[global_idx];`:`
        let output_indices = ${u.offsetToIndices(`global_idx`)};
        var input_indices: ${d.type.indices};
        ${(()=>{switch(t.mode){case`nearest`:return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${d.getByIndices(`input_indices`)};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case`linear`:return`output[global_idx] = ${o.length===2||o.length===4?`bilinearInterpolation`:`trilinearInterpolation`}(output_indices);`;case`cubic`:return`output[global_idx] = bicubicInterpolation(output_indices);`;default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`,getRunData:()=>({outputs:[{dims:c,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},{type:1,data:l},{type:1,data:s},...q(o,c)]})}},_g=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},vg=(e,t)=>{let n=[],r=[],i=[],a=_g(e);if(t.antialias!==0)throw Error(`Only default value (0) for Antialias attribute is supported`);ng(e.inputs,t,a,n,r,i),e.compute(gg(e.inputs[0],t,a,n,r,i),{inputs:[0]})},yg=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,a=e.excludeOutside!==0,o=e.extrapolationValue,s=e.keepAspectRatioPolicy,c=e.mode,l=e.nearestMode===``?`simple`:e.nearestMode;return U({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:a,extrapolationValue:o,keepAspectRatioPolicy:s,mode:c,nearestMode:l})}}),wg=F(()=>{"use strict";z(),H(),Q(),xg=e=>{if(!e||e.length<3)throw Error(`layerNorm requires at least 3 inputs.`);let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw Error(`All inputs must have the same data type`);if(t.dims.length!==3&&t.dims.length!==2)throw Error(`Input must be 2D or 3D`);if(n.dims.length!==3&&n.dims.length!==2)throw Error(`Skip must be 2D or 3D`);let i=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw Error(`Skip must have the same hidden size as input`);if(n.dims[n.dims.length-2]!==a)throw Error(`Skip must have the same sequence length as input`);if(r.dims.length!==1)throw Error(`Gamma must be 1D`);if(r.dims[r.dims.length-1]!==i)throw Error(`Gamma must have the same hidden size as input`);if(e.length>3){let t=e[3];if(t.dims.length!==1)throw Error(`Beta must be 1D`);if(t.dims[t.dims.length-1]!==i)throw Error(`Beta must have the same hidden size as input`)}if(e.length>4){let t=e[4];if(t.dims.length!==1)throw Error(`Bias must be 1D`);if(t.dims[t.dims.length-1]!==i)throw Error(`Bias must have the same hidden size as input`)}},Sg=(e,t,n,r)=>{let i=t.simplified,a=e[0].dims,o=V.size(a),s=a,c=o,l=a.slice(-1)[0],u=r?a.slice(0,-1).concat(1):[],d=!i&&e.length>3,f=e.length>4,p=r&&n>1,m=r&&n>2,h=n>3,g=J(l),_=[{type:12,data:c},{type:12,data:g},{type:12,data:l},{type:1,data:t.epsilon}],v=t=>{let n=[{name:`output_size`,type:`u32`},{name:`components`,type:`u32`},{name:`hidden_size`,type:`u32`},{name:`epsilon`,type:`f32`}],r=[X(`x`,e[0].dataType,e[0].dims,g),X(`skip`,e[1].dataType,e[1].dims,g),X(`gamma`,e[2].dataType,e[2].dims,g)];d&&r.push(X(`beta`,e[3].dataType,e[3].dims,g)),f&&r.push(X(`bias`,e[4].dataType,e[4].dims,g)),r.push(Z(`output`,e[0].dataType,s,g)),p&&r.push(Z(`mean_output`,1,u)),m&&r.push(Z(`inv_std_output`,1,u)),h&&r.push(Z(`input_skip_bias_sum`,e[0].dataType,s,g));let a=G(e[0].dataType),o=G(1,g);return`

      ${t.registerUniforms(n).declareVariables(...r)}
      var<workgroup> sum_shared : array<${o}, 64>;
      var<workgroup> sum_squared_shared : array<${o}, 64>;

      ${t.mainStart([64,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / 64;

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / 64;
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == 63) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${f?`bias[offset1d + i]`:a+`(0.0)`};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${h?`input_skip_bias_sum[offset + i] = value;`:``}
          output[offset + i] = value;
          let f32_value = ${Ic(a,g,`value`)};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = 64;
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${Lc(`sum`,g)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Lc(`square_sum`,g)} / f32(uniforms.hidden_size) ${i?``:`- mean * mean`} + uniforms.epsilon);
        ${p?`mean_output[global_idx] = mean;`:``}
        ${m?`inv_std_output[global_idx] = inv_std_dev;`:``}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?``:`- ${a}(mean)`}) *
            ${a}(inv_std_dev) * gamma[offset1d + i]
            ${d?`+ beta[offset1d + i]`:``};
        }
      }`},y=[{dims:s,dataType:e[0].dataType}];return n>1&&y.push({dims:u,dataType:1}),n>2&&y.push({dims:u,dataType:1}),n>3&&y.push({dims:a,dataType:e[0].dataType}),{name:`SkipLayerNormalization`,shaderCache:{hint:`${g};${p};${m};${h}`,inputDependencies:e.map((e,t)=>`type`)},getShaderSource:v,getRunData:()=>({outputs:y,dispatchGroup:{x:Math.ceil(c/l)},programUniforms:_})}},Cg=(e,t)=>{xg(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(Sg(e.inputs,t,e.outputCount,!1),{outputs:n})}}),Ng=F(()=>{"use strict";z(),H(),W(),Q(),Tg=(e,t)=>{if(!e||e.length<1)throw Error(`too few inputs`);if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw Error(`axes, starts and ends must have the same length`)}else if(t.starts.length!==t.ends.length)throw Error(`starts and ends must have the same length`);e.slice(1).forEach((t,n)=>{if(e[n+1].dataType!==6&&e[n+1].dataType!==7)throw Error(`Input ${n} must be an array of int32 or int64`)})},Eg=(e,t)=>{let n=[];if(e.length>t){if(e[t].dataType===7)e[t].getBigInt64Array().forEach(e=>n.push(Number(e)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(e=>n.push(Number(e)));else throw Error(`Input ${t} must be an array of int32 or int64`)}return n},Dg=(e,t)=>{if(e.length>1){let t=Eg(e,1),n=Eg(e,2),r=Eg(e,3);return r.length===0&&(r=[...Array(e[0].dims.length).keys()]),U({starts:t,ends:n,axes:r})}return t},Og=(e,t,n,r,i)=>{let a=e;return e<0&&(a+=n[r[t]]),i[t]<0?Math.max(0,Math.min(a,n[r[t]]-1)):Math.max(0,Math.min(a,n[r[t]]))},kg=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${n.length-1}; i >= 0; i--) {
            let input_shape_i = ${Y(`uniforms.input_shape`,`i`,n.length)};
            let steps_i = ${Y(`uniforms.steps`,`i`,n.length)};
            let signs_i = ${Y(`uniforms.signs`,`i`,n.length)};
            let starts_i = ${Y(`uniforms.starts`,`i`,n.length)};
            var output_index = ${t.indicesGet(`output_indices`,`i`)};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet(`input_indices`,`i`,`input_index`)};
          }
          return input_indices;
      }`,Ag=(e,t)=>{let n=e[0].dims,r=V.size(n),i=t.axes.length>0?V.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],a=Eg(e,4);a.forEach(e=>e!==0||(()=>{throw Error(`step cannot be 0`)})),a.length===0&&(a=Array(i.length).fill(1));let o=t.starts.map((e,t)=>Og(e,t,n,i,a)),s=t.ends.map((e,t)=>Og(e,t,n,i,a));if(i.length!==o.length||i.length!==s.length)throw Error(`start, ends and axes should have the same number of elements`);if(i.length!==n.length)for(let e=0;e<n.length;++e)i.includes(e)||(o.splice(e,0,0),s.splice(e,0,n[e]),a.splice(e,0,1));let c=a.map(e=>Math.sign(e));a.forEach((e,t,n)=>{if(e<0){let r=(s[t]-o[t])/e,i=o[t],c=i+r*a[t];o[t]=c,s[t]=i,n[t]=-e}});let l=n.slice(0);i.forEach((e,t)=>{l[e]=Math.ceil((s[e]-o[e])/a[e])});let u={dims:l,dataType:e[0].dataType},d=Z(`output`,e[0].dataType,l.length),f=X(`input`,e[0].dataType,e[0].dims.length),p=V.size(l),m=[{name:`outputSize`,type:`u32`},{name:`starts`,type:`u32`,length:o.length},{name:`signs`,type:`i32`,length:c.length},{name:`steps`,type:`u32`,length:a.length}],h=[{type:12,data:p},{type:12,data:o},{type:6,data:c},{type:12,data:a},...q(e[0].dims,l)];return{name:`Slice`,shaderCache:{hint:`${c.length}_${o.length}_${a.length}`,inputDependencies:[`rank`]},getShaderSource:e=>`
      ${e.registerUniforms(m).declareVariables(f,d)}
        ${kg(f,d,n)}
        ${e.mainStart()}
          ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
          let output_indices = ${d.offsetToIndices(`global_idx`)};
          let input_indices = calculateInputIndices(output_indices);
          ${d.setByOffset(`global_idx`,f.getByIndices(`input_indices`))}
      }`,getRunData:()=>({outputs:[u],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:h})}},jg=(e,t)=>{Tg(e.inputs,t);let n=Dg(e.inputs,t);e.compute(Ag(e.inputs,n),{inputs:[0]})},Mg=e=>{let t=e.starts,n=e.ends,r=e.axes;return U({starts:t,ends:n,axes:r})}}),Rg=F(()=>{"use strict";z(),H(),W(),Qc(),Q(),Pg=e=>{if(!e||e.length!==1)throw Error(`Softmax op requires 1 input.`)},Fg=(e,t)=>{let n=e.inputs[0],r=n.dims,i=V.size(r),a=r.length,o=V.normalizeAxis(t.axis,a),s=o<r.length-1,c,l=[];s?(l=Array.from({length:a},(e,t)=>t),l[o]=a-1,l[a-1]=o,c=e.compute(Yc(n,l),{inputs:[n],outputs:[-1]})[0]):c=n;let u=c.dims,d=u[a-1],f=i/d,p=J(d),m=d/p,h=64;f===1&&(h=256);let g=(e,t)=>t===4?`max(max(${e}.x, ${e}.y), max(${e}.z, ${e}.w))`:t===2?`max(${e}.x, ${e}.y)`:t===3?`max(max(${e}.x, ${e}.y), ${e}.z)`:e,_=X(`x`,c.dataType,c.dims,p),v=Z(`result`,c.dataType,c.dims,p),y=_.type.value,b=G(c.dataType)===`f32`?`var threadMax = ${y}(-3.4028234663852886e+38f);`:`var threadMax = ${y}(-65504.0h);`,x=e.compute({name:`Softmax`,shaderCache:{hint:`${p};${h}`,inputDependencies:[`type`]},getRunData:()=>({outputs:[{dims:u,dataType:c.dataType}],dispatchGroup:{x:f},programUniforms:[{type:6,data:m}]}),getShaderSource:e=>`
      var<workgroup> rowMaxShared : ${y};
      var<workgroup> rowSumShared : ${y};
      var<workgroup> threadShared : array<${y}, ${h}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${y} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${y}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${e.registerUniform(`packedCols`,`i32`).declareVariables(_,v)}
      ${e.mainStart(h)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${h};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${b}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${y}(${g(`threadShared[0]`,p)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${y}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${y}(${Lc(`threadShared[0]`,p)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${y}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`},{inputs:[c],outputs:[s?-1:0]})[0];s&&e.compute(Yc(x,l),{inputs:[x]})},Ig=(e,t)=>{Pg(e.inputs),Fg(e,t)},Lg=e=>U({axis:e.axis})}),Wg=F(()=>{"use strict";z(),H(),Q(),zg=e=>Array.from(e.getBigInt64Array(),Number),Bg=e=>{if(!e||e.length!==2)throw Error(`Tile requires 2 inputs.`);if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw Error(`Tile only support float, float16, int32, and uint32 data types`);if(e[1].dataType!==7)throw Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw Error("Tile `repeats` input should be 1-D");if(zg(e[1]).length!==e[0].dims.length)throw Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Vg=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},Hg=(e,t)=>{let n=e[0].dims,r=t??zg(e[1]),i=Vg(n,r),a=V.size(i),o=e[0].dataType,s=X(`input`,o,n.length),c=Z(`output`,o,i.length);return{name:`Tile`,shaderCache:{hint:`${r}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...q(e[0].dims,i)]}),getShaderSource:e=>`
      const inputShape = ${s.indices(...n)};
      ${e.registerUniform(`output_size`,`u32`).declareVariables(s,c)}
      ${e.mainStart()}
      ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
      let output_indices = ${c.offsetToIndices(`global_idx`)};
      var input_indices: ${s.type.indices};
      for (var i = 0; i < ${n.length}; i++) {
        let input_dim_i = ${s.indicesGet(`uniforms.input_shape`,`i`)};
        let input_dim_value = ${c.indicesGet(`output_indices`,`i`)}  % input_dim_i;

        ${s.indicesSet(`input_indices`,`i`,`input_dim_value`)}
      }
      ${c.setByOffset(`global_idx`,s.getByIndices(`input_indices`))}
    }`}},Ug=e=>{Bg(e.inputs),e.compute(Hg(e.inputs),{inputs:[0]})}}),Jg=F(()=>{"use strict";z(),H(),Q(),Gg=(e,t,n,r,i)=>{let a=Z(`output_data`,i,n.length,4),o=X(`a_data`,t[1].dataType,t[1].dims.length,4),s=X(`b_data`,t[2].dataType,t[2].dims.length,4),c=X(`c_data`,t[0].dataType,t[0].dims.length,4),l,u=(e,t,n)=>`select(${t}, ${e}, ${n})`;if(!r)l=a.setByOffset(`global_idx`,u(o.getByOffset(`global_idx`),s.getByOffset(`global_idx`),c.getByOffset(`global_idx`)));else{let e=(e,t,n=``)=>{let r=`a_data[index_a${t}][component_a${t}]`,i=`b_data[index_b${t}][component_b${t}]`,l=`bool(c_data[index_c${t}] & (0xffu << (component_c${t} * 8)))`;return`
            let output_indices${t} = ${a.offsetToIndices(`global_idx * 4u + ${t}u`)};
            let offset_a${t} = ${o.broadcastedIndicesToOffset(`output_indices${t}`,a)};
            let offset_b${t} = ${s.broadcastedIndicesToOffset(`output_indices${t}`,a)};
            let offset_c${t} = ${c.broadcastedIndicesToOffset(`output_indices${t}`,a)};
            let index_a${t} = offset_a${t} / 4u;
            let index_b${t} = offset_b${t} / 4u;
            let index_c${t} = offset_c${t} / 4u;
            let component_a${t} = offset_a${t} % 4u;
            let component_b${t} = offset_b${t} % 4u;
            let component_c${t} = offset_c${t} % 4u;
            ${e}[${t}] = ${n}(${u(r,i,l)});
          `};l=i===9?`
            var data = vec4<u32>(0);
            ${e(`data`,0,`u32`)}
            ${e(`data`,1,`u32`)}
            ${e(`data`,2,`u32`)}
            ${e(`data`,3,`u32`)}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:`
            ${e(`output_data[global_idx]`,0)}
            ${e(`output_data[global_idx]`,1)}
            ${e(`output_data[global_idx]`,2)}
            ${e(`output_data[global_idx]`,3)}
          `}return`
        ${e.registerUniform(`vec_size`,`u32`).declareVariables(c,o,s,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}
        ${l}
      }`},Kg=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,a=!(V.areEqual(t,n)&&V.areEqual(n,r)),o=t,s=V.size(t);if(a){let e=Qs.calcShape(Qs.calcShape(t,n,!1),r,!1);if(!e)throw Error(`Can't perform where op on the given tensors`);o=e,s=V.size(o)}let c=Math.ceil(s/4);return{name:`Where`,shaderCache:{inputDependencies:[`rank`,`rank`,`rank`]},getShaderSource:t=>Gg(t,e,o,a,i),getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:Math.ceil(s/64/4)},programUniforms:[{type:12,data:c},...q(r,t,n,o)]})}},qg=e=>{e.compute(Kg(e.inputs))}}),Xg=F(()=>{"use strict";Ql(),su(),fu(),gu(),fd(),Ed(),Nd(),Df(),zf(),Uf(),Yf(),pp(),Tp(),jp(),Pp(),zp(),Up(),Jp(),$p(),im(),ym(),Gm(),Xm(),eh(),rh(),lh(),Dm(),yh(),zh(),Wh(),Jh(),$h(),ql(),bg(),zm(),wg(),Ng(),Rg(),Fm(),Wg(),Qc(),cd(),Jg(),Yg=/* @__PURE__ */ new Map([[`Abs`,[vu]],[`Acos`,[yu]],[`Acosh`,[bu]],[`Add`,[gd]],[`ArgMax`,[Xl,Zl]],[`ArgMin`,[Yl,Zl]],[`Asin`,[xu]],[`Asinh`,[Su]],[`Atan`,[Cu]],[`Atanh`,[wu]],[`Attention`,[ou]],[`AveragePool`,[Ah,kh]],[`BatchNormalization`,[du]],[`BiasAdd`,[hu]],[`BiasSplitGelu`,[dd]],[`Cast`,[Eu,Tu]],[`Ceil`,[ku]],[`Clip`,[Ou]],[`Concat`,[jd,Md]],[`Conv`,[Ef,Sf]],[`ConvTranspose`,[Rf,Pf]],[`Cos`,[Au]],[`Cosh`,[ju]],[`CumSum`,[Vf,Hf]],[`DepthToSpace`,[qf,Jf]],[`DequantizeLinear`,[Hh,Uh]],[`DFT`,[dp,fp]],[`Div`,[_d]],[`Einsum`,[Cp,wp]],[`Elu`,[Nu,Mu]],[`Equal`,[vd]],[`Erf`,[Fu]],[`Exp`,[Iu]],[`Expand`,[Ap]],[`FastGelu`,[Np]],[`Floor`,[Lu]],[`FusedConv`,[Ef,Sf]],[`Gather`,[Rp,Lp]],[`GatherElements`,[Qp,Zp]],[`GatherBlockQuantized`,[Kp,qp]],[`GatherND`,[Vp,Hp]],[`Gelu`,[Ru]],[`Gemm`,[rm,nm]],[`GlobalAveragePool`,[Nh,Mh]],[`GlobalMaxPool`,[Rh,Lh]],[`Greater`,[Sd]],[`GreaterOrEqual`,[wd]],[`GridSample`,[_m,vm]],[`GroupQueryAttention`,[Wm]],[`HardSigmoid`,[Ku,Gu]],[`HardSwish`,[qu]],[`InstanceNormalization`,[Ym]],[`LayerNormalization`,[$m]],[`LeakyRelu`,[zu,Mu]],[`Less`,[Cd]],[`LessOrEqual`,[Td]],[`Log`,[id]],[`MatMul`,[nh]],[`MatMulNBits`,[sh,ch]],[`MaxPool`,[Fh,Ih]],[`Mul`,[yd]],[`MultiHeadAttention`,[Em,Sm]],[`Neg`,[Vu]],[`Not`,[Bu]],[`Pad`,[vh]],[`Pow`,[bd]],[`QuickGelu`,[sd,Mu]],[`Range`,[qh]],[`Reciprocal`,[Hu]],[`ReduceMin`,[Hl]],[`ReduceMean`,[Ll]],[`ReduceMax`,[Vl]],[`ReduceSum`,[Wl]],[`ReduceProd`,[Ul]],[`ReduceL1`,[Rl]],[`ReduceL2`,[zl]],[`ReduceLogSum`,[Kl]],[`ReduceLogSumExp`,[Bl]],[`ReduceSumSquare`,[Gl]],[`Relu`,[Uu]],[`Resize`,[vg,yg]],[`RotaryEmbedding`,[Rm]],[`ScatterND`,[Qh,Zh]],[`Sigmoid`,[Wu]],[`Sin`,[Ju]],[`Sinh`,[Yu]],[`Slice`,[jg,Mg]],[`SkipLayerNormalization`,[Cg]],[`Split`,[Nm,Pm]],[`Sqrt`,[Xu]],[`Softmax`,[Ig,Lg]],[`Sub`,[xd]],[`Tan`,[Zu]],[`Tanh`,[$u]],[`ThresholdedRelu`,[rd,Mu]],[`Tile`,[Ug]],[`Transpose`,[Xc,Zc]],[`Where`,[qg]]])}),Qg=F(()=>{"use strict";Vo(),Xs(),Q(),Zg=class{constructor(e){this.backend=e,this.repo=/* @__PURE__ */ new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){Do(e.programInfo.name);let a=this.backend.device,o=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let s=[];for(let e of t)s.push({binding:s.length,resource:{buffer:e.buffer}});for(let e of n)s.push({binding:s.length,resource:{buffer:e.buffer}});i&&s.push({binding:s.length,resource:i});let c=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:s,label:e.programInfo.name});if(this.backend.sessionStatus===`capturing`){let t={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:c,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(t)}o.setPipeline(e.computePipeline),o.setBindGroup(0,c),o.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType===`at-passes`)&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Oo(e.programInfo.name)}dispose(){}build(e,t){Do(e.name);let n=this.backend.device,r=[];[{feature:`shader-f16`,extension:`f16`},{feature:`subgroups`,extension:`subgroups`}].forEach(e=>{n.features.has(e.feature)&&r.push(`enable ${e.extension};`)});let i=Hc(t,this.backend.device.limits),a=e.getShaderSource(i),o=`${r.join(`
`)}
${i.additionalImplementations}
${a}`,s=n.createShaderModule({code:o,label:e.name});B(`verbose`,()=>`[WebGPU] ${e.name} shader code: ${o}`);let c=n.createComputePipeline({compute:{module:s,entryPoint:`main`},layout:`auto`,label:e.name});return Oo(e.name),{programInfo:e,computePipeline:c,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e==`number`?e:e.x,n=typeof e==`number`?1:e.y||1,r=typeof e==`number`?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let a=t*n*r,o=Math.ceil(Math.sqrt(a));if(o>i){if(o=Math.ceil(Math.cbrt(a)),o>i)throw Error(`Total dispatch size exceeds WebGPU maximum.`);return[o,o,o]}return[o,o,1]}}}),$g={},Ba($g,{WebGpuBackend:()=>r_}),i_=F(()=>{"use strict";Vo(),z(),Xs(),ic(),jc(),Xg(),Qg(),e_=(e,t)=>{if(t.length!==e.length)throw Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case`none`:n.push(``);break;case`type`:n.push(`${i}`);break;case`rank`:{let t=e[r].dims.length;n.push(`${i};${t}`);break}case`dims`:{let t=e[r].dims.join(`,`);n.push(`${i};${t}`);break}default:throw Error(`unsupported input dependency: ${t[r]}`)}}return n.join(`|`)},t_=(e,t,n)=>{let r=e.name;return e.shaderCache?.hint&&(r+=`[`+e.shaderCache.hint+`]`),r+=`:`+n+`:${e_(t,e.shaderCache?.inputDependencies??Array(t.length).fill(`dims`))}`,r},n_=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},r_=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=/* @__PURE__ */ new Map,this.sessionStatus=`default`,this.capturedCommandList=/* @__PURE__ */ new Map,this.capturedPendingKernels=/* @__PURE__ */ new Map,this.sessionExternalDataMapping=/* @__PURE__ */ new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw Error(`currentKernelCustomData(): currentKernelId is null. (should not happen)`);let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=e=>t.features.has(e)&&n.push(e)&&!0;i(`chromium-experimental-timestamp-query-inside-passes`)||i(`timestamp-query`),i(`shader-f16`),i(`subgroups`),this.device=await t.requestDevice(r);let a=t,o=t.info??(typeof a.requestAdapterInfo==`function`?await a.requestAdapterInfo():void 0);this.adapterInfo=new n_(o),this.gpuDataManager=Ac(this),this.programManager=new Zg(this),this.kernels=/* @__PURE__ */ new Map,this.kernelPersistentData=/* @__PURE__ */ new Map,this.kernelCustomData=/* @__PURE__ */ new Map,Js(e.logLevel,!!e.debug),this.device.onuncapturederror=e=>{e.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${e.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<`u`&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&this.env?.webgpu&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||=this.device.createCommandEncoder(),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType===`at-passes`&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&=(this.computePassEncoder.end(),null)}flush(){if(!this.commandEncoder)return;Do(),this.endComputePass();let e;this.queryType!==`none`&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!==`none`&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let e=0;e<t.length/2;e++){let r=n[e],i=r.kernelId,a=this.kernels.get(i),o=a.kernelType,s=a.kernelName,c=r.programName,l=r.inputTensorViews,u=r.outputTensorViews,d=t[e*2],f=t[e*2+1];typeof this.queryTimeBase>`u`&&(this.queryTimeBase=d);let p=Number(d-this.queryTimeBase),m=Number(f-this.queryTimeBase);if(!Number.isSafeInteger(p)||!Number.isSafeInteger(m))throw RangeError(`incorrect timestamp range`);if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:l.map(e=>({dims:e.dims,dataType:Fs(e.dataType)})),outputsMetadata:u.map(e=>({dims:e.dims,dataType:Fs(e.dataType)})),kernelId:i,kernelType:o,kernelName:s,programName:c,startTime:p,endTime:m});else{let e=``;l.forEach((t,n)=>{e+=`input[${n}]: [${t.dims}] | ${Fs(t.dataType)}, `});let t=``;u.forEach((e,n)=>{t+=`output[${n}]: [${e.dims}] | ${Fs(e.dataType)}, `}),console.log(`[profiling] kernel "${i}|${o}|${s}|${c}" ${e}${t}start time: ${p} ns, execution time: ${m-p} ns`)}To(`GPU`,`${c}::${d}::${f}`)}e.unmap(),this.pendingQueries.delete(e)}),Oo()}run(e,t,n,r,i,a){Do(e.name);let o=[];for(let e=0;e<t.length;++e){let n=t[e].data;if(n===0)continue;let r=this.gpuDataManager.get(n);if(!r)throw Error(`no GPU data for input: ${n}`);o.push(r)}let{outputs:s,dispatchGroup:c,programUniforms:l}=e.getRunData(t),u=n.length===0?s.map((e,t)=>t):n;if(u.length!==s.length)throw Error(`Output size ${u.length} must be equal to ${s.length}.`);let d=[],f=[];for(let e=0;e<s.length;++e){if(!Number.isInteger(u[e])||u[e]<-3||u[e]>=a)throw Error(`Invalid output index: ${u[e]}`);if(u[e]===-3)continue;let t=u[e]===-1,n=u[e]===-2,o=t||n?i(s[e].dataType,s[e].dims):r(u[e],s[e].dataType,s[e].dims);if(d.push(o),o.data===0)continue;let c=this.gpuDataManager.get(o.data);if(!c)throw Error(`no GPU data for output: ${o.data}`);if(t&&this.temporaryData.push(c),n){let e=this.kernelPersistentData.get(this.currentKernelId);e||(e=[],this.kernelPersistentData.set(this.currentKernelId,e)),e.push(c)}f.push(c)}if(o.length!==t.length||f.length!==d.length){if(f.length===0)return Oo(e.name),d;throw Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let p;if(l){let e=0,t=[];l.forEach(n=>{let r=typeof n.data==`number`?[n.data]:n.data;if(r.length===0)return;let i=n.type===10?2:4,a,o;n.type===10?(o=r.length>4?16:r.length>2?8:r.length*i,a=r.length>4?16:i*r.length):(o=r.length<=2?r.length*i:16,a=16),e=Math.ceil(e/o)*o,t.push(e);let s=n.type===10?8:4;e+=r.length>4?Math.ceil(r.length/s)*a:r.length*i}),e=Math.ceil(e/16)*16;let n=new ArrayBuffer(e);l.forEach((e,r)=>{let i=t[r],a=typeof e.data==`number`?[e.data]:e.data;if(e.type===6)new Int32Array(n,i,a.length).set(a);else if(e.type===12)new Uint32Array(n,i,a.length).set(a);else if(e.type===10)new Uint16Array(n,i,a.length).set(a);else if(e.type===1)new Float32Array(n,i,a.length).set(a);else throw Error(`Unsupported uniform type: ${Fs(e.type)}`)});let r=this.gpuDataManager.create(e,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(r.buffer,0,n,0,e),this.gpuDataManager.release(r.id),p={offset:0,size:e,buffer:r.buffer}}let m=this.programManager.normalizeDispatchGroupSize(c),h=m[1]===1&&m[2]===1,g=t_(e,t,h),_=this.programManager.getArtifact(g);if(_||(_=this.programManager.build(e,m),this.programManager.setArtifact(g,_),B(`info`,()=>`[artifact] key: ${g}, programName: ${e.name}`)),l&&_.uniformVariablesInfo){if(l.length!==_.uniformVariablesInfo.length)throw Error(`Uniform variables count mismatch: expect ${_.uniformVariablesInfo.length}, got ${l.length} in program "${_.programInfo.name}".`);for(let e=0;e<l.length;e++){let t=l[e],n=t.type,r=typeof t.data==`number`?1:t.data.length,[i,a]=_.uniformVariablesInfo[e];if(n!==i||r!==a)throw Error(`Uniform variable ${e} mismatch: expect type ${i} with size ${a}, got type ${n} with size ${r} in program "${_.programInfo.name}".`)}}if(B(`info`,()=>`[ProgramManager] run "${e.name}" (key=${g}) with ${m[0]}x${m[1]}x${m[2]}`),this.queryType!==`none`||this.sessionStatus===`capturing`){let e={kernelId:this.currentKernelId,programName:_.programInfo.name,inputTensorViews:t,outputTensorViews:d};this.pendingKernels.push(e),this.sessionStatus===`capturing`&&this.capturedPendingKernels.get(this.currentSessionId).push(e)}return this.programManager.run(_,o,f,m,p),Oo(e.name),d}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=Yg.get(e);if(!i)throw Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let e of t)this.gpuDataManager.release(e.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw Error(`kernel not created: ${e}`);let i=r.kernelType,a=r.kernelName,o=r.kernelEntry,s=r.attributes;if(this.currentKernelId!==null)throw Error(`kernel "[${i}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,s[0]&&=(s[1]=s[0](s[1]),void 0),B(`info`,()=>`[WebGPU] Start to run kernel "[${i}] ${a}"...`);let c=this.env.debug;this.temporaryData=[];try{return c&&this.device.pushErrorScope(`validation`),o(t,s[1]),0}catch(e){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${a}" failed. ${e}`)),1}finally{c&&n.push(this.device.popErrorScope().then(e=>e?`GPU validation error for kernel "[${i}] ${a}": ${e.message}`:null));for(let e of this.temporaryData)this.gpuDataManager.release(e.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=/* @__PURE__ */ new Map,this.sessionExternalDataMapping.set(e,i));let a=i.get(t),o=this.gpuDataManager.registerExternalBuffer(n,r,a);return i.set(t,[o,n]),o}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(e=>this.gpuDataManager.unregisterExternalBuffer(e[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await Oc(this,e,t);return rc(r.buffer,n)}}writeTimestamp(e){this.queryType===`inside-passes`&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType=`none`,(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>`u`?this.env.wasm.trace:this.env.trace))&&(this.device.features.has(`chromium-experimental-timestamp-query-inside-passes`)?this.queryType=`inside-passes`:this.device.features.has(`timestamp-query`)&&(this.queryType=`at-passes`),this.queryType!==`none`&&typeof this.querySet>`u`&&(this.querySet=this.device.createQuerySet({type:`timestamp`,count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){B(`info`,`captureBegin`),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus=`capturing`}captureEnd(){B(`info`,`captureEnd`),this.flush(),this.sessionStatus=`default`}replay(){B(`info`,`replay`),this.sessionStatus=`replaying`;let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let n=this.getComputePassEncoder(),i=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),n.setPipeline(i.computePipeline),n.setBindGroup(0,i.bindGroup),n.dispatchWorkgroups(...i.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!==`none`&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType===`at-passes`)&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus=`default`}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),a_={},Ba(a_,{init:()=>c_}),l_=F(()=>{"use strict";z(),Xs(),H(),bc(),o_=class e{constructor(e,t,n,r){this.module=e,this.dataType=t,this.data=n,this.dims=r}getFloat32Array(){if(this.dataType!==1)throw Error(`Invalid data type`);let e=V.size(this.dims);return e===0?/* @__PURE__ */ new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,e)}getBigInt64Array(){if(this.dataType!==7)throw Error(`Invalid data type`);let e=V.size(this.dims);return e===0?/* @__PURE__ */ new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,e)}getInt32Array(){if(this.dataType!==6)throw Error(`Invalid data type`);let e=V.size(this.dims);return e===0?/* @__PURE__ */ new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,e)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw Error(`Invalid data type`);let e=V.size(this.dims);return e===0?/* @__PURE__ */ new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,e)}reshape(t){if(V.size(t)!==V.size(this.dims))throw Error(`Invalid new shape`);return new e(this.module,this.dataType,this.data,t)}},s_=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,a=r===4?`i32`:`i64`;this.opKernelContext=Number(e.getValue(r*i++,a));let o=Number(e.getValue(r*i++,a));this.outputCount=Number(e.getValue(r*i++,a)),this.customDataOffset=Number(e.getValue(r*i++,`*`)),this.customDataSize=Number(e.getValue(r*i++,a));let s=[];for(let t=0;t<o;t++){let t=Number(e.getValue(r*i++,a)),n=Number(e.getValue(r*i++,`*`)),o=Number(e.getValue(r*i++,a)),c=[];for(let t=0;t<o;t++)c.push(Number(e.getValue(r*i++,a)));s.push(new o_(e,t,n,c))}this.inputs=s}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let n=t?.inputs?.map(e=>typeof e==`number`?this.inputs[e]:e)??this.inputs,r=t?.outputs??[];return this.backend.run(e,n,r,(e,t,n)=>new o_(this.module,t,this.output(e,n),n),(e,t)=>{let n=Is(e,t);if(!n)throw Error(`Unsupported data type: ${e}`);let r=n>0?this.backend.gpuDataManager.create(n).id:0;return new o_(this.module,e,r,t)},this.outputCount)}output(e,t){let n=this.module.stackSave();try{let n=this.module.PTR_SIZE,r=n===4?`i32`:`i64`,i=this.module.stackAlloc((1+t.length)*n);this.module.setValue(i,t.length,r);for(let e=0;e<t.length;e++)this.module.setValue(i+n*(e+1),t[e],r);return this.module._JsepOutput(this.opKernelContext,e,i)}catch(n){throw Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${n}`)}finally{this.module.stackRestore(n)}}},c_=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw Error(`Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.`);if(e===`webgpu`){let e=(i_(),Ha($g)).WebGpuBackend,a=new e;await a.initialize(n,r),i(`webgpu`,[a,e=>a.alloc(Number(e)),e=>a.free(e),(e,n,r,i=!1)=>{if(i)B(`verbose`,()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(e)}, dst=${Number(n)}, size=${Number(r)}`),a.memcpy(Number(e),Number(n));else{B(`verbose`,()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(e)}, gpuDataId=${Number(n)}, size=${Number(r)}`);let i=t.HEAPU8.subarray(Number(e>>>0),Number(e>>>0)+Number(r));a.upload(Number(n),i)}},async(e,n,r)=>{B(`verbose`,()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${e}, dataOffset=${n}, size=${r}`),await a.download(Number(e),()=>t.HEAPU8.subarray(Number(n)>>>0,Number(n+r)>>>0))},(e,n,r)=>a.createKernel(e,Number(n),r,t.UTF8ToString(t._JsepGetNodeName(Number(n)))),e=>a.releaseKernel(e),(e,n,r,i)=>{B(`verbose`,()=>`[WebGPU] jsepRun: sessionHandle=${r}, kernel=${e}, contextDataOffset=${n}`);let o=new s_(t,a,Number(n));return a.computeKernel(Number(e),o,i)},()=>a.captureBegin(),()=>a.captureEnd(),()=>a.replay()])}else{let e=new yc(n);i(`webnn`,[e,()=>e.reserveTensorId(),t=>e.releaseTensorId(t),async(t,n,r,i,a)=>e.ensureTensor(t,n,r,i,a),(t,n)=>{e.uploadTensor(t,n)},async(t,n)=>e.downloadTensor(t,n),(t,n)=>e.registerMLContext(t,n),!!n.trace])}}}),C_=F(()=>{"use strict";Vo(),Es(),Ns(),z(),xs(),ws(),Us(),u_=(e,t)=>{L()._OrtInit(e,t)!==0&&R(`Can't initialize onnxruntime.`)},d_=async e=>{u_(e.wasm.numThreads,Rs(e.logLevel))},f_=async(e,t)=>{L().asyncInit?.();let n=e.webgpu.adapter;if(t===`webgpu`){if(typeof navigator>`u`||!navigator.gpu)throw Error(`WebGPU is not supported in current environment`);if(n){if(typeof n.limits!=`object`||typeof n.features!=`object`||typeof n.requestDevice!=`function`)throw Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let t=e.webgpu.powerPreference;if(t!==void 0&&t!==`low-power`&&t!==`high-performance`)throw Error(`Invalid powerPreference setting: "${t}"`);let r=e.webgpu.forceFallbackAdapter;if(r!==void 0&&typeof r!=`boolean`)throw Error(`Invalid forceFallbackAdapter setting: "${r}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:t,forceFallbackAdapter:r}),!n)throw Error(`Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.`)}}if(t===`webnn`&&(typeof navigator>`u`||!navigator.ml))throw Error(`WebNN is not supported in current environment`);{let r=(l_(),Ha(a_)).init;t===`webgpu`&&await r(`webgpu`,L(),e,n),t===`webnn`&&await r(`webnn`,L(),e)}},p_=/* @__PURE__ */ new Map,m_=e=>{let t=L(),n=t.stackSave();try{let n=t.PTR_SIZE,r=t.stackAlloc(2*n);t._OrtGetInputOutputCount(e,r,r+n)!==0&&R(`Can't get session input/output count.`);let i=n===4?`i32`:`i64`;return[Number(t.getValue(r,i)),Number(t.getValue(r+n,i))]}finally{t.stackRestore(n)}},h_=(e,t)=>{let n=L(),r=n.stackSave(),i=0;try{let r=n.PTR_SIZE,a=n.stackAlloc(2*r);n._OrtGetInputOutputMetadata(e,t,a,a+r)!==0&&R(`Can't get session input/output metadata.`);let o=Number(n.getValue(a,`*`));i=Number(n.getValue(a+r,`*`));let s=n.HEAP32[i/4];if(s===0)return[o,0];let c=n.HEAPU32[i/4+1],l=[];for(let e=0;e<c;e++){let t=Number(n.getValue(i+8+e*r,`*`));l.push(t===0?Number(n.getValue(i+8+(e+c)*r,`*`)):n.UTF8ToString(t))}return[o,s,l]}finally{n.stackRestore(r),i!==0&&n._OrtFree(i)}},g_=e=>{let t=L(),n=t._malloc(e.byteLength);if(n===0)throw Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},__=async(e,t)=>{let n,r,i=L();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=g_(e);let a=0,o=0,s=0,c=[],l=[],u=[];try{if([o,c]=await Ms(t),t?.externalData&&i.mountExternalData){let e=[];for(let n of t.externalData){let t=typeof n==`string`?n:n.path,r=typeof n==`string`?n:n.data;e.push(Hs(r).then(e=>{i.mountExternalData(t,e)}))}await Promise.all(e)}for(let e of t?.executionProviders??[])if((typeof e==`string`?e:e.name)===`webnn`){if(i.shouldTransferToMLTensor=!1,typeof e!=`string`){let t=e,n=t?.context,r=t?.gpuDevice,a=t?.deviceType,o=t?.powerPreference;i.currentContext=n||(r?await i.webnnCreateMLContext(r):await i.webnnCreateMLContext({deviceType:a,powerPreference:o}))}else i.currentContext=await i.webnnCreateMLContext();break}a=await i._OrtCreateSession(n,r,o),i.webgpuOnCreateSession?.(a),a===0&&R(`Can't create a session.`),i.jsepOnCreateSession?.(),i.currentContext&&(i.webnnRegisterMLContext(a,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[e,d]=m_(a),f=!!t?.enableGraphCapture,p=[],m=[],h=[],g=[],_=[];for(let t=0;t<e;t++){let[e,n,r]=h_(a,t);e===0&&R(`Can't get an input name.`),l.push(e);let o=i.UTF8ToString(e);p.push(o),h.push(n===0?{name:o,isTensor:!1}:{name:o,isTensor:!0,type:Fs(n),shape:r})}for(let n=0;n<d;n++){let[r,o,s]=h_(a,n+e);r===0&&R(`Can't get an output name.`),u.push(r);let c=i.UTF8ToString(r);m.push(c),g.push(o===0?{name:c,isTensor:!1}:{name:c,isTensor:!0,type:Fs(o),shape:s});{if(f&&t?.preferredOutputLocation===void 0){_.push(`gpu-buffer`);continue}let e=typeof t?.preferredOutputLocation==`string`?t.preferredOutputLocation:t?.preferredOutputLocation?.[c]??`cpu`,n=i.webnnIsGraphOutput;if(e===`cpu`&&n&&n(a,c)){_.push(`ml-tensor-cpu-output`);continue}if(e!==`cpu`&&e!==`cpu-pinned`&&e!==`gpu-buffer`&&e!==`ml-tensor`)throw Error(`Not supported preferred output location: ${e}.`);if(f&&e!==`gpu-buffer`)throw Error(`Not supported preferred output location: ${e}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);_.push(e)}}let v=null;return _.some(e=>e===`gpu-buffer`||e===`ml-tensor`||e===`ml-tensor-cpu-output`)&&(s=i._OrtCreateBinding(a),s===0&&R(`Can't create IO binding.`),v={handle:s,outputPreferredLocations:_,outputPreferredLocationsEncoded:_.map(e=>e===`ml-tensor-cpu-output`?`ml-tensor`:e).map(e=>Vs(e))}),p_.set(a,[a,l,u,v,f,!1]),[a,p,m,h,g]}catch(e){throw l.forEach(e=>i._OrtFree(e)),u.forEach(e=>i._OrtFree(e)),s!==0&&i._OrtReleaseBinding(s)!==0&&R(`Can't release IO binding.`),a!==0&&i._OrtReleaseSession(a)!==0&&R(`Can't release session.`),e}finally{i._free(n),o!==0&&i._OrtReleaseSessionOptions(o)!==0&&R(`Can't release session options.`),c.forEach(e=>i._free(e)),i.unmountExternalData?.()}},v_=e=>{let t=L(),n=p_.get(e);if(!n)throw Error(`cannot release session. invalid session id: ${e}`);let[r,i,a,o,s]=n;o&&(s&&t._OrtClearBoundOutputs(o.handle)!==0&&R(`Can't clear bound outputs.`),t._OrtReleaseBinding(o.handle)!==0&&R(`Can't release IO binding.`)),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),i.forEach(e=>t._OrtFree(e)),a.forEach(e=>t._OrtFree(e)),t._OrtReleaseSession(r)!==0&&R(`Can't release session.`),p_.delete(e)},y_=async(e,t,n,r,i,a,o=!1)=>{if(!e){t.push(0);return}let s=L(),c=s.PTR_SIZE,l=e[0],u=e[1],d=e[3],f=d,p,m;if(l===`string`&&(d===`gpu-buffer`||d===`ml-tensor`))throw Error(`String tensor is not supported on GPU.`);if(o&&d!==`gpu-buffer`)throw Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(d===`gpu-buffer`){let t=e[2].gpuBuffer;m=Is(Ps(l),u);{let e=s.jsepRegisterBuffer;if(!e)throw Error(`Tensor location "gpu-buffer" is not supported without using WebGPU.`);p=e(r,a,t,m)}}else if(d===`ml-tensor`){let t=e[2].mlTensor;m=Is(Ps(l),u);let n=s.webnnRegisterMLTensor;if(!n)throw Error(`Tensor location "ml-tensor" is not supported without using WebNN.`);p=n(r,t,Ps(l),u)}else{let t=e[2];if(Array.isArray(t)){m=c*t.length,p=s._malloc(m),n.push(p);for(let e=0;e<t.length;e++){if(typeof t[e]!=`string`)throw TypeError(`tensor data at index ${e} is not a string`);s.setValue(p+e*c,Ss(t[e],n),`*`)}}else{let e=s.webnnIsGraphInput,a=s.webnnIsGraphOutput;if(l!==`string`&&e&&a){let o=s.UTF8ToString(i);if(e(r,o)||a(r,o)){let e=Ps(l);m=Is(e,u),f=`ml-tensor`;let n=s.webnnCreateTemporaryTensor,i=s.webnnUploadTensor;if(!n||!i)throw Error(`Tensor location "ml-tensor" is not supported without using WebNN.`);let a=await n(r,e,u);i(a,new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),p=a}else m=t.byteLength,p=s._malloc(m),n.push(p),s.HEAPU8.set(new Uint8Array(t.buffer,t.byteOffset,m),p)}else m=t.byteLength,p=s._malloc(m),n.push(p),s.HEAPU8.set(new Uint8Array(t.buffer,t.byteOffset,m),p)}}let h=s.stackSave(),g=s.stackAlloc(4*u.length);try{u.forEach((e,t)=>s.setValue(g+t*c,e,c===4?`i32`:`i64`));let e=s._OrtCreateTensor(Ps(l),p,m,g,u.length,Vs(f));e===0&&R(`Can't create tensor for input/output. session=${r}, index=${a}.`),t.push(e)}finally{s.stackRestore(h)}},b_=async(e,t,n,r,i,a)=>{let o=L(),s=o.PTR_SIZE,c=p_.get(e);if(!c)throw Error(`cannot run inference. invalid session id: ${e}`);let l=c[0],u=c[1],d=c[2],f=c[3],p=c[4],m=c[5],h=t.length,g=r.length,_=0,v=[],y=[],b=[],x=[],S=[],C=o.stackSave(),w=o.stackAlloc(h*s),ee=o.stackAlloc(h*s),T=o.stackAlloc(g*s),E=o.stackAlloc(g*s);try{[_,v]=Ts(a),ko(`wasm prepareInputOutputTensor`);for(let r=0;r<h;r++)await y_(n[r],y,x,e,u[t[r]],t[r],p);for(let t=0;t<g;t++)await y_(i[t],b,x,e,d[r[t]],h+r[t],p);Ao(`wasm prepareInputOutputTensor`);for(let e=0;e<h;e++)o.setValue(w+e*s,y[e],`*`),o.setValue(ee+e*s,u[t[e]],`*`);for(let e=0;e<g;e++)o.setValue(T+e*s,b[e],`*`),o.setValue(E+e*s,d[r[e]],`*`);if(f&&!m){let{handle:n,outputPreferredLocations:a,outputPreferredLocationsEncoded:s}=f;if(u.length!==h)throw Error(`input count from feeds (${h}) is expected to be always equal to model's input count (${u.length}).`);ko(`wasm bindInputsOutputs`);for(let r=0;r<h;r++){let i=t[r];await o._OrtBindInput(n,u[i],y[r])!==0&&R(`Can't bind input[${r}] for session=${e}.`)}for(let t=0;t<g;t++){let c=r[t];i[t]?.[3]?(S.push(b[t]),o._OrtBindOutput(n,d[c],b[t],0)!==0&&R(`Can't bind pre-allocated output[${t}] for session=${e}.`)):o._OrtBindOutput(n,d[c],0,s[c])!==0&&R(`Can't bind output[${t}] to ${a[t]} for session=${e}.`)}Ao(`wasm bindInputsOutputs`),p_.set(e,[l,u,d,f,p,!0])}o.jsepOnRunStart?.(l),o.webnnOnRunStart?.(l);let c;c=f?await o._OrtRunWithBinding(l,f.handle,g,T,_):await o._OrtRun(l,ee,w,h,E,g,T,_),c!==0&&R(`failed to call OrtRun().`);let C=[],D=[];ko(`wasm ProcessOutputTensor`);for(let t=0;t<g;t++){let n=Number(o.getValue(T+t*s,`*`));if(n===b[t]||S.includes(b[t])){C.push(i[t]),n!==b[t]&&o._OrtReleaseTensor(n)!==0&&R(`Can't release tensor.`);continue}let a=o.stackSave(),c=o.stackAlloc(4*s),l=!1,u,d=0;try{o._OrtGetTensorData(n,c,c+s,c+2*s,c+3*s)!==0&&R(`Can't access output tensor data on index ${t}.`);let i=s===4?`i32`:`i64`,a=Number(o.getValue(c,i));d=o.getValue(c+s,`*`);let p=o.getValue(c+s*2,`*`),m=Number(o.getValue(c+s*3,i)),h=[];for(let e=0;e<m;e++)h.push(Number(o.getValue(p+e*s,i)));o._OrtFree(p)!==0&&R(`Can't free memory for tensor dims.`);let g=h.reduce((e,t)=>e*t,1);u=Fs(a);let _=f?.outputPreferredLocations[r[t]];if(u===`string`){if(_===`gpu-buffer`||_===`ml-tensor`)throw Error(`String tensor is not supported on GPU.`);let e=[];for(let t=0;t<g;t++){let n=o.getValue(d+t*s,`*`),r=o.getValue(d+(t+1)*s,`*`),i=t===g-1?void 0:r-n;e.push(o.UTF8ToString(n,i))}C.push([u,h,e,`cpu`])}else if(_===`gpu-buffer`&&g>0){let e=o.jsepGetBuffer;if(!e)throw Error(`preferredLocation "gpu-buffer" is not supported without using WebGPU.`);let t=e(d),r=Is(a,g);if(r===void 0||!zs(u))throw Error(`Unsupported data type: ${u}`);l=!0,C.push([u,h,{gpuBuffer:t,download:o.jsepCreateDownloader(t,r,u),dispose:()=>{o._OrtReleaseTensor(n)!==0&&R(`Can't release tensor.`)}},`gpu-buffer`])}else if(_===`ml-tensor`&&g>0){let t=o.webnnEnsureTensor,r=o.webnnIsGraphInputOutputTypeSupported;if(!t||!r)throw Error(`preferredLocation "ml-tensor" is not supported without using WebNN.`);if(Is(a,g)===void 0||!Bs(u))throw Error(`Unsupported data type: ${u}`);if(!r(e,u,!1))throw Error(`preferredLocation "ml-tensor" for ${u} output is not supported by current WebNN Context.`);let i=await t(e,d,a,h,!1);l=!0,C.push([u,h,{mlTensor:i,download:o.webnnCreateMLTensorDownloader(d,u),dispose:()=>{o.webnnReleaseTensorId(d),o._OrtReleaseTensor(n)}},`ml-tensor`])}else if(_===`ml-tensor-cpu-output`&&g>0){let e=o.webnnCreateMLTensorDownloader(d,u)(),t=C.length;l=!0,D.push((async()=>{let r=[t,await e];return o.webnnReleaseTensorId(d),o._OrtReleaseTensor(n),r})()),C.push([u,h,[],`cpu`])}else{let e=new(Ls(u))(g);new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(o.HEAPU8.subarray(d,d+e.byteLength)),C.push([u,h,e,`cpu`])}}finally{o.stackRestore(a),u===`string`&&d&&o._free(d),l||o._OrtReleaseTensor(n)}}f&&!p&&(o._OrtClearBoundOutputs(f.handle)!==0&&R(`Can't clear bound outputs.`),p_.set(e,[l,u,d,f,p,!1]));for(let[e,t]of await Promise.all(D))C[e][2]=t;return Ao(`wasm ProcessOutputTensor`),C}finally{o.webnnOnRunEnd?.(l),o.stackRestore(C),y.forEach(e=>o._OrtReleaseTensor(e)),b.forEach(e=>o._OrtReleaseTensor(e)),x.forEach(e=>o._free(e)),_!==0&&o._OrtReleaseRunOptions(_),v.forEach(e=>o._free(e))}},x_=e=>{let t=L(),n=p_.get(e);if(!n)throw Error(`invalid session id`);let r=n[0],i=t._OrtEndProfiling(r);i===0&&R(`Can't get an profile file name.`),t._OrtFree(i)},S_=e=>{let t=[];for(let n of e){let e=n[2];!Array.isArray(e)&&`buffer`in e&&t.push(e.buffer)}return t}}),H_=F(()=>{"use strict";Vo(),C_(),xs(),fs(),w_=()=>!!I.wasm.proxy&&typeof document<`u`,E_=!1,D_=!1,O_=!1,j_=/* @__PURE__ */ new Map,M_=(e,t)=>{let n=j_.get(e);n?n.push(t):j_.set(e,[t])},N_=()=>{if(E_||!D_||O_||!T_)throw Error(`worker not ready`)},P_=e=>{switch(e.data.type){case`init-wasm`:E_=!1,e.data.err?(O_=!0,A_[1](e.data.err)):(D_=!0,A_[0]()),k_&&=(URL.revokeObjectURL(k_),void 0);break;case`init-ep`:case`copy-from`:case`create`:case`release`:case`run`:case`end-profiling`:{let t=j_.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},F_=async()=>{if(!D_){if(E_)throw Error(`multiple calls to 'initWasm()' detected.`);if(O_)throw Error(`previous call to 'initWasm()' failed.`);if(E_=!0,w_())return new Promise((e,t)=>{T_?.terminate(),ls().then(([n,r])=>{try{T_=r,T_.onerror=e=>t(e),T_.onmessage=P_,A_=[e,t];let i={type:`init-wasm`,in:I};!i.in.wasm.wasmPaths&&(n||$o)&&(i.in.wasm.wasmPaths={wasm:new URL(`/-TechUtilidadeskit/assets/ort-wasm-simd-threaded.jsep-MDYUKy93.wasm`,``+self.location.href).href}),T_.postMessage(i),k_=n}catch(e){t(e)}},t)});try{await bs(I.wasm),await d_(I),D_=!0}catch(e){throw O_=!0,e}finally{E_=!1}}},I_=async e=>{if(w_())return N_(),new Promise((t,n)=>{M_(`init-ep`,[t,n]);let r={type:`init-ep`,in:{epName:e,env:I}};T_.postMessage(r)});await f_(I,e)},L_=async e=>w_()?(N_(),new Promise((t,n)=>{M_(`copy-from`,[t,n]);let r={type:`copy-from`,in:{buffer:e}};T_.postMessage(r,[e.buffer])})):g_(e),R_=async(e,t)=>{if(w_()){if(t?.preferredOutputLocation)throw Error(`session option "preferredOutputLocation" is not supported for proxy.`);return N_(),new Promise((n,r)=>{M_(`create`,[n,r]);let i={type:`create`,in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),T_.postMessage(i,a)})}return __(e,t)},z_=async e=>{if(w_())return N_(),new Promise((t,n)=>{M_(`release`,[t,n]);let r={type:`release`,in:e};T_.postMessage(r)});v_(e)},B_=async(e,t,n,r,i,a)=>{if(w_()){if(n.some(e=>e[3]!==`cpu`))throw Error(`input tensor on GPU is not supported for proxy.`);if(i.some(e=>e))throw Error(`pre-allocated output tensor is not supported for proxy.`);return N_(),new Promise((i,o)=>{M_(`run`,[i,o]);let s=n,c={type:`run`,in:{sessionId:e,inputIndices:t,inputs:s,outputIndices:r,options:a}};T_.postMessage(c,S_(s))})}return b_(e,t,n,r,i,a)},V_=async e=>{if(w_())return N_(),new Promise((t,n)=>{M_(`end-profiling`,[t,n]);let r={type:`end-profiling`,in:e};T_.postMessage(r)});x_(e)}}),K_=F(()=>{"use strict";Vo(),H_(),z(),Ho(),Us(),U_=(e,t)=>{switch(e.location){case`cpu`:return[e.type,e.dims,e.data,`cpu`];case`gpu-buffer`:return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},`gpu-buffer`];case`ml-tensor`:return[e.type,e.dims,{mlTensor:e.mlTensor},`ml-tensor`];default:throw Error(`invalid data location: ${e.location} for ${t()}`)}},W_=e=>{switch(e[3]){case`cpu`:return new Co(e[0],e[2],e[1]);case`gpu-buffer`:{let t=e[0];if(!zs(t))throw Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return Co.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case`ml-tensor`:{let t=e[0];if(!Bs(t))throw Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return Co.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw Error(`invalid data location: ${e[3]}`)}},G_=class{async fetchModelAndCopyToWasmMemory(e){return L_(await Hs(e))}async loadModel(e,t){Do();let n;n=typeof e==`string`?await this.fetchModelAndCopyToWasmMemory(e):e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await R_(n,t),Oo()}async dispose(){return z_(this.sessionId)}async run(e,t,n){Do();let r=[],i=[];Object.entries(e).forEach(e=>{let t=e[0],n=e[1],a=this.inputNames.indexOf(t);if(a===-1)throw Error(`invalid input '${t}'`);r.push(n),i.push(a)});let a=[],o=[];Object.entries(t).forEach(e=>{let t=e[0],n=e[1],r=this.outputNames.indexOf(t);if(r===-1)throw Error(`invalid output '${t}'`);a.push(n),o.push(r)});let s=r.map((e,t)=>U_(e,()=>`input "${this.inputNames[i[t]]}"`)),c=a.map((e,t)=>e?U_(e,()=>`output "${this.outputNames[o[t]]}"`):null),l=await B_(this.sessionId,i,s,o,c,n),u={};for(let e=0;e<l.length;e++)u[this.outputNames[o[e]]]=a[e]??W_(l[e]);return Oo(),u}startProfiling(){}endProfiling(){V_(this.sessionId)}}}),q_={},Ba(q_,{OnnxruntimeWebAssemblyBackend:()=>Y_,initializeFlags:()=>J_,wasmBackend:()=>X_}),Z_=F(()=>{"use strict";Vo(),H_(),K_(),J_=()=>{(typeof I.wasm.initTimeout!=`number`||I.wasm.initTimeout<0)&&(I.wasm.initTimeout=0);let e=I.wasm.simd;if(typeof e!=`boolean`&&e!==void 0&&e!==`fixed`&&e!==`relaxed`&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),I.wasm.simd=!1),typeof I.wasm.proxy!=`boolean`&&(I.wasm.proxy=!1),typeof I.wasm.trace!=`boolean`&&(I.wasm.trace=!1),typeof I.wasm.numThreads!=`number`||!Number.isInteger(I.wasm.numThreads)||I.wasm.numThreads<=0){if(typeof self<`u`&&!self.crossOriginIsolated)I.wasm.numThreads=1;else{let e=typeof navigator>`u`?za(`node:os`).cpus().length:navigator.hardwareConcurrency;I.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}}},Y_=class{async init(e){J_(),await F_(),await I_(e)}async createInferenceSessionHandler(e,t){let n=new G_;return await n.loadModel(e,t),n}},X_=new Y_}),Vo(),Vo(),Vo(),Q_=`1.30.0`,$_=Bo;{let e=(Z_(),Ha(q_)).wasmBackend;Ga(`webgpu`,e,5),Ga(`webnn`,e,5),Ga(`cpu`,e,10),Ga(`wasm`,e,10)}Object.defineProperty(I.versions,"web",{value:Q_,enumerable:!0})}));
/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*/
/**
* @license
* Copyright 2020 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*/
/**
* @license
* Copyright 2019 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*/
let tv={tiny:{det:`https://huggingface.co/PaddlePaddle/PP-OCRv6_tiny_det_onnx/resolve/main/inference.onnx`,rec:`https://huggingface.co/PaddlePaddle/PP-OCRv6_tiny_rec_onnx/resolve/main/inference.onnx`,yml:`https://huggingface.co/PaddlePaddle/PP-OCRv6_tiny_rec_onnx/resolve/main/inference.yml`},small:{det:`https://huggingface.co/PaddlePaddle/PP-OCRv6_small_det_onnx/resolve/main/inference.onnx`,rec:`https://huggingface.co/PaddlePaddle/PP-OCRv6_small_rec_onnx/resolve/main/inference.onnx`,yml:`https://huggingface.co/PaddlePaddle/PP-OCRv6_small_rec_onnx/resolve/main/inference.yml`},medium:{det:`https://huggingface.co/PaddlePaddle/PP-OCRv6_medium_det_onnx/resolve/main/inference.onnx`,rec:`https://huggingface.co/PaddlePaddle/PP-OCRv6_medium_rec_onnx/resolve/main/inference.onnx`,yml:`https://huggingface.co/PaddlePaddle/PP-OCRv6_medium_rec_onnx/resolve/main/inference.yml`}},nv={tiny:`PP-OCRv6_tiny`,small:`PP-OCRv6_small`,medium:`PP-OCRv6_medium`};var rv=class{#e;#t;#n;#r=null;#i=null;#a=Promise.resolve();#o=null;#s=!1;#c=null;constructor(e={}){this.#e=e.size??`small`,this.#t=e.device??`auto`,this.#n=e.onProgress}get size(){return this.#e}get device(){return this.#o}async load(){if(this.#s)throw Error(`OCR model was disposed`);if(!this.#r){if(this.#i)return this.#i;this.#i=(async()=>{let e=tv[this.#e];this.#n?.({status:`loading`,progress:0});let t=cv(),n=new sv(this.#n),[r,i,a,s,u,{PaddleOcrService:d}]=await Promise.all([lv(e.det,`det.onnx`,n,t),lv(e.rec,`rec.onnx`,n,t),uv(e.yml,t),av(),o(this.#t),Promise.resolve().then(()=>(Ma(),l))]),f=dv(a);f[f.length-1]!==` `&&f.push(` `);let p=await ov({ort:s,PaddleOcrServiceCtor:d,size:this.#e,det:r,rec:i,charactersDictionary:f,device:u});this.#s?await c(()=>p.ocr.destroy()):(this.#r=p.ocr,this.#o=p.device,this.#n?.({status:`ready`,progress:100}))})();try{await this.#i}finally{this.#i=null}}}read(e){if(this.#s)return Promise.reject(/* @__PURE__ */ Error(`OCR model was disposed`));let t=this.#l(e);return this.#a=this.#a.then(()=>t.then(()=>void 0,()=>void 0)),t}async dispose(){return this.#c||=(this.#s=!0,(async()=>{await this.#a,await this.#i;let e=this.#r;this.#r=null,this.#o=null,e&&await c(()=>e.destroy())})()),this.#c}async#l(e){if(this.#s||(await this.load(),this.#s))throw Error(`OCR model was disposed`);let t=this.#r;if(!t)throw Error(`OCR model failed to load`);this.#n?.({status:`recognizing`});let n=await pv(e),r=await c(()=>{if(this.#s)throw Error(`OCR model was disposed`);return t.recognize(n)}),i=t.processRecognition(r),a=r.map(e=>({text:e.text,score:e.confidence,box:{xmin:e.box.x,ymin:e.box.y,xmax:e.box.x+e.box.width,ymax:e.box.y+e.box.height}}));return this.#n?.({status:`done`}),{text:i.text,lines:a,confidence:i.confidence}}};let iv=null;function av(){return iv||(iv=(async()=>{let e=await Promise.resolve().then(()=>(ev(),Na));return e.env.wasm.wasmPaths=`https://cdn.jsdelivr.net/npm/onnxruntime-web@1.30.0/dist/`,e.env.wasm.numThreads=1,e})(),iv)}async function ov(e){let t=async t=>{let n=t===`webgpu`?[`webgpu`,`wasm`]:[`wasm`],r={Tensor:e.ort.Tensor,InferenceSession:{create:t=>e.ort.InferenceSession.create(t,{executionProviders:n})}},i=t===`webgpu`;return e.PaddleOcrServiceCtor.createInstance({ort:r,modelPreset:nv[e.size],detection:{modelBuffer:i?e.det.slice(0):e.det},recognition:{modelBuffer:i?e.rec.slice(0):e.rec,charactersDictionary:e.charactersDictionary}})};try{return{ocr:await t(e.device),device:e.device}}catch(n){if(e.device===`wasm`)throw n;return{ocr:await t(`wasm`),device:`wasm`}}}var sv=class{#e=/* @__PURE__ */ new Map;#t=/* @__PURE__ */ new Map;#n;#r=0;constructor(e){this.#n=e}update(e,t,n,r=!1){if(this.#e.set(e,t),n>0&&this.#t.set(e,n),!this.#n)return;let i=performance.now();if(!r&&t<n&&i-this.#r<32)return;this.#r=i;let a=0,o=0;for(let e of this.#e.values())a+=e;for(let e of this.#t.values())o+=e;let s=o>0?a/o*100:void 0;this.#n({status:`progress`,file:e,loaded:a,total:o,progress:s})}};function cv(){return typeof caches>`u`?Promise.resolve(null):caches.open(`runonweb-ppocrv6`).catch(()=>null)}async function lv(e,t,n,r){let i=await r,a=await i?.match(e);if(a){let e=await a.arrayBuffer();return n.update(t,e.byteLength,e.byteLength,!0),e}let o=await fetch(e);if(!o.ok)throw Error(`Could not load ${t} (${o.status})`);let s=Number(o.headers.get(`content-length`)??0);if(!o.body||!s){let r=await o.arrayBuffer();return n.update(t,r.byteLength,r.byteLength,!0),i?.put(e,new Response(r,{headers:{"content-length":String(r.byteLength)}})),r}n.update(t,0,s,!0);let c=o.body.getReader(),l=new Uint8Array(s),u=0;for(;;){let{done:e,value:r}=await c.read();if(e)break;if(u+r.byteLength>l.byteLength){let e=new Uint8Array(Math.max(l.byteLength*2,u+r.byteLength));e.set(l.subarray(0,u)),l=e}l.set(r,u),u+=r.byteLength,n.update(t,u,s,u>=s)}let d=u===l.byteLength?l:l.subarray(0,u),f=d.byteOffset===0&&d.byteLength===d.buffer.byteLength?d.buffer:d.slice().buffer;return i?.put(e,new Response(f,{headers:{"content-length":String(f.byteLength)}})),f}async function uv(e,t){let n=await t,r=await n?.match(e);if(r)return r.text();let i=await fetch(e);if(!i.ok)throw Error(`Could not load dictionary (${i.status})`);let a=await i.text();return n?.put(e,new Response(a)),a}function dv(e){let t=e.indexOf(`character_dict:`);if(t<0)throw Error(`PP-OCRv6 dictionary missing character_dict`);let n=[];for(let r of e.slice(t).split(`
`).slice(1)){let e=r.match(/^\s*-\s+(.*)$/);if(e)n.push(fv(e[1]??``));else if(n.length&&/^\S/.test(r))break}if(n.length<100)throw Error(`PP-OCRv6 dictionary looks empty`);return n}function fv(e){let t=e.trim();if(t===`''`||t===`""`)return``;if(t.startsWith(`'`)&&t.endsWith(`'`)||t.startsWith(`"`)&&t.endsWith(`"`)){let e=t.slice(1,-1);return t.startsWith(`'`)?e.replace(/''/g,`'`):e.replace(/\\"/g,`"`)}return t}async function pv(e){if(e instanceof ImageData)return{width:e.width,height:e.height,data:new Uint8Array(e.data.buffer,e.data.byteOffset,e.data.byteLength)};let t;t=typeof e==`string`?await mv(e):e instanceof HTMLImageElement||e instanceof HTMLCanvasElement?e:await createImageBitmap(e);let n=`naturalWidth`in t&&t.naturalWidth||t.width,r=`naturalHeight`in t&&t.naturalHeight||t.height,i=document.createElement(`canvas`);i.width=n,i.height=r;let a=i.getContext(`2d`);if(!a)throw Error(`Could not get 2d context`);a.drawImage(t,0,0);let{data:o}=a.getImageData(0,0,n,r);return typeof ImageBitmap<`u`&&t instanceof ImageBitmap&&t.close(),{width:n,height:r,data:new Uint8Array(o.buffer,o.byteOffset,o.byteLength)}}function mv(e){return new Promise((t,n)=>{let r=new Image;r.crossOrigin=`anonymous`,r.onload=()=>t(r),r.onerror=()=>n(/* @__PURE__ */ Error(`Could not load image: ${e}`)),r.src=e})}let hv=null,gv=null,_v=!1;function vv(e,t=`tiny`){let n=typeof e.progress==`number`?Math.min(100,Math.max(0,Math.round(e.progress))):void 0,r={loading:`Preparando el modelo OCR ${t===`small`?`preciso`:`rápido`}…`,progress:n===void 0?`Descargando el modelo OCR…`:`Descargando modelo OCR: ${n}%`,ready:`Modelo OCR listo.`,recognizing:`Reconociendo texto…`,done:`Lectura completada.`};self.postMessage({type:`PROGRESS`,message:r[e.status]??`Preparando OCR…`,progress:n,indeterminate:e.status===`recognizing`})}function yv(e){return new rv({size:e,device:`auto`,onProgress:t=>vv(t,e)})}async function bv(){if(!hv){if(gv)return gv;gv=(async()=>{let e=yv(`tiny`);try{await e.load(),hv=e}catch(t){throw await e.dispose(),t}})();try{await gv}finally{gv=null}}}async function xv(){let e=hv;hv=null,await e?.dispose();let t=yv(`small`);try{await t.load(),hv=t}catch(e){throw await t.dispose(),e}}function Sv(e,t){console.error(t,e);let n=e instanceof Error?e.message:String(e);self.postMessage({type:`ERROR`,message:`${t} ${n}`})}async function Cv(e){let t=await createImageBitmap(e);try{let e=Math.min(1,Math.sqrt(12e6/(t.width*t.height))),n=Math.max(1,Math.round(t.width*e)),r=Math.max(1,Math.round(t.height*e)),i=new OffscreenCanvas(n,r).getContext(`2d`,{willReadFrequently:!0});if(!i)throw Error(`El navegador no pudo preparar los píxeles de la imagen.`);return i.drawImage(t,0,0,n,r),i.getImageData(0,0,n,r)}finally{t.close()}}function wv(e,t){let{width:n,height:r,data:i}=e,a=n*r,o=new Uint8Array(a),s=/* @__PURE__ */ new Uint32Array(256);for(let e=0;e<a;e++){let t=e*4,n=Math.round(i[t]*.299+i[t+1]*.587+i[t+2]*.114);o[e]=n,s[n]++}let c=e=>{let t=Math.floor(a*e),n=0;for(let e=0;e<s.length;e++)if(n+=s[e],n>=t)return e;return 255},l=c(.02),u=Math.max(l+1,c(.98))-l,d=new Uint8Array(a);for(let e=0;e<a;e++)d[e]=Math.max(0,Math.min(255,Math.round((o[e]-l)*255/u)));let f=new Uint8ClampedArray(a*4);if(t===`nitidez`)for(let e=0;e<r;e++)for(let t=0;t<n;t++){let i=e*n+t,a=d[i]*5,o=e>0?d[i-n]:d[i],s=e+1<r?d[i+n]:d[i],c=t>0?d[i-1]:d[i],l=t+1<n?d[i+1]:d[i],u=Math.max(0,Math.min(255,a-o-s-c-l)),p=i*4;f[p]=u,f[p+1]=u,f[p+2]=u,f[p+3]=255}else{let e=new Uint32Array((n+1)*(r+1));for(let t=1;t<=r;t++){let r=0;for(let i=1;i<=n;i++)r+=d[(t-1)*n+i-1],e[t*(n+1)+i]=e[(t-1)*(n+1)+i]+r}let t=Math.max(8,Math.min(18,Math.round(Math.min(n,r)*.025)));for(let i=0;i<r;i++){let a=Math.max(0,i-t),o=Math.min(r,i+t+1);for(let r=0;r<n;r++){let s=Math.max(0,r-t),c=Math.min(n,r+t+1),l=c-s,u=o-a,p=(e[o*(n+1)+c]-e[a*(n+1)+c]-e[o*(n+1)+s]+e[a*(n+1)+s])/(l*u),m=i*n+r,h=d[m]<p-7?0:255,g=m*4;f[g]=h,f[g+1]=h,f[g+2]=h,f[g+3]=255}}}return new ImageData(f,n,r)}function Tv(e){return(e.text.trim().length+e.lines.length*10)*e.confidence}function Ev(e){return e.text.trim().length>=12&&e.confidence>=.78}self.addEventListener(`message`,async e=>{let{type:t,payload:n}=e.data??{};if(t===`INIT`)try{await bv(),self.postMessage({type:`READY`})}catch(e){Sv(e,`No se pudo cargar el modelo OCR.`)}else if(t===`PROCESS`){if(!hv)self.postMessage({type:`ERROR`,message:`El modelo OCR aún no está listo. Espera un momento e inténtalo de nuevo.`});else if(!_v){if(!(n instanceof Blob)||!n.type.startsWith(`image/`))self.postMessage({type:`ERROR`,message:`El archivo seleccionado no es una imagen válida.`});else{_v=!0;try{let e=await Cv(n),t=await hv.read(e),r=Tv(t);if(!Ev(t)){self.postMessage({type:`PROGRESS`,message:`Mejorando la lectura con un modelo más preciso…`,indeterminate:!0}),await xv();let n=await hv.read(e),i=Tv(n);if(i>r&&(t=n,r=i),!Ev(t))for(let[n,i]of[[`nitidez`,`Aumentando el contraste y la nitidez…`],[`adaptativo`,`Probando una mejora de contraste local…`]]){self.postMessage({type:`PROGRESS`,message,indeterminate:!0});let i=wv(e,n),a=await hv.read(i),o=Tv(a);if(o>r&&(t=a,r=o),Ev(t))break}}self.postMessage({type:`SUCCESS`,text:t.text,lines:t.lines,confidence:t.confidence})}catch(e){Sv(e,`No se pudo leer el texto de la imagen.`)}finally{_v=!1}}}}})})();