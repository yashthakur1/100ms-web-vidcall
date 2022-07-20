(self.webpackChunk=self.webpackChunk||[]).push([[520],{7520:(At,U,B)=>{"use strict";B.r(U),B.d(U,{HMSVirtualBackgroundPlugin:()=>YE});var J={};B.r(J),B.d(J,{assertParamsValid:()=>so,computeFlatOffset:()=>oo,computeOutShape:()=>Ma,getNormalizedAxes:()=>Hf,isSliceContinous:()=>ro,maskToAxes:()=>zf,parseSliceParams:()=>io,sliceInfo:()=>Ka,startForAxis:()=>Xa,startIndicesWithElidedDims:()=>Ga,stopForAxis:()=>qa,stopIndicesWithElidedDims:()=>za,stridesForAxis:()=>Ha,stridesWithElidedDims:()=>Va});var W={};B.r(W),B.d(W,{collectGatherOpShapeInfo:()=>tl,computeOutShape:()=>el,segOpComputeOptimalWindowSize:()=>Jc});var ie={};B.r(ie),B.d(ie,{ERF_A1:()=>Rc,ERF_A2:()=>Nc,ERF_A3:()=>Ac,ERF_A4:()=>_c,ERF_A5:()=>Dc,ERF_P:()=>Tc,PARALLELIZE_THRESHOLD:()=>yo,SELU_SCALE:()=>kc,SELU_SCALEALPHA:()=>Ec,applyActivation:()=>cx,assertAndGetBroadcastShape:()=>we,assertAxesAreInnerMostDims:()=>pt,assertParamsConsistent:()=>wc,assignToTypedArray:()=>gx,axesAreInnerMostDims:()=>fo,calculateShapes:()=>Io,checkEinsumDimSizes:()=>Bc,checkPadOnDimRoundingMode:()=>qm,combineLocations:()=>uc,complexWithEvenIndex:()=>hx,complexWithOddIndex:()=>fx,computeConv2DInfo:()=>gt,computeConv3DInfo:()=>Xn,computeDefaultPad:()=>xo,computeDilation2DInfo:()=>yc,computeOptimalWindowSize:()=>zs,computeOutAndReduceShapes:()=>$t,computeOutShape:()=>qt,computePool2DInfo:()=>gn,computePool3DInfo:()=>Hn,convertConv2DDataFormat:()=>bn,decodeEinsumEquation:()=>Oc,eitherStridesOrDilationsAreOne:()=>xn,expandShapeToKeepDim:()=>Ze,exponent:()=>xx,exponents:()=>mx,fromStringArrayToUint8:()=>nl,fromUint8ToStringArray:()=>jt,getAxesPermutation:()=>Je,getBroadcastDims:()=>un,getComplexWithIndex:()=>px,getEinsumComputePath:()=>Mc,getEinsumPermutation:()=>Lc,getFusedBiasGradient:()=>ax,getFusedDyActivation:()=>ix,getImageCenter:()=>Cc,getInnerMostAxes:()=>et,getPermuted:()=>vo,getReductionAxes:()=>Ba,getReshaped:()=>Co,getReshapedPermuted:()=>$o,getSliceBeginCoords:()=>vc,getSliceSize:()=>$c,getSparseFillEmptyRowsIndicesDenseShapeMismatch:()=>Wc,getSparseFillEmptyRowsNegativeIndexErrorMessage:()=>Gc,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:()=>zc,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:()=>qc,getSparseReshapeInputOutputMismatchErrorMessage:()=>jc,getSparseReshapeInputOutputMultipleErrorMessage:()=>Kc,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:()=>Hc,getSparseReshapeNegativeOutputDimErrorMessage:()=>Xc,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:()=>Zc,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:()=>Eo,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:()=>Yc,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:()=>Qc,getUndoAxesPermutation:()=>po,isIdentityPermutation:()=>Vc,log:()=>Ph,mergeRealAndImagArrays:()=>qn,prepareAndValidate:()=>Ic,prepareSplitSize:()=>Uc,segment_util:()=>W,shouldFuse:()=>lx,slice_util:()=>J,splitRealAndImagArrays:()=>dx,tupleValuesAreOne:()=>wo,upcastType:()=>bt,validateInput:()=>ux,validateUpdateShape:()=>Sc,warn:()=>lt});var ae={};B.r(ae),B.d(ae,{addImpl:()=>wl,bincountImpl:()=>p0,bincountReduceImpl:()=>g0,ceilImpl:()=>Cl,concatImpl:()=>x0,equalImpl:()=>vl,expImpl:()=>$l,expm1Impl:()=>Il,floorImpl:()=>Sl,gatherNdImpl:()=>v0,gatherV2Impl:()=>$0,greaterEqualImpl:()=>kl,greaterImpl:()=>El,lessEqualImpl:()=>Rl,lessImpl:()=>Tl,linSpaceImpl:()=>T0,logImpl:()=>Nl,maxImpl:()=>N0,maximumImpl:()=>Al,minimumImpl:()=>_l,multiplyImpl:()=>Vo,negImpl:()=>Dl,notEqualImpl:()=>Fl,prodImpl:()=>Ll,rangeImpl:()=>B0,rsqrtImpl:()=>Bl,sigmoidImpl:()=>V0,simpleAbsImpl:()=>xl,sliceImpl:()=>Ml,sparseFillEmptyRowsImpl:()=>G0,sparseReshapeImpl:()=>z0,sparseSegmentReductionImpl:()=>H0,sqrtImpl:()=>X0,squaredDifferenceImpl:()=>Vl,stridedSliceImpl:()=>j0,stringNGramsImpl:()=>Q0,stringSplitImpl:()=>J0,stringToHashBucketFastImpl:()=>ew,subImpl:()=>Ul,tileImpl:()=>sw,topKImpl:()=>rw,transposeImpl:()=>Pl,uniqueImpl:()=>ow});/**
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
 */const Q=1e-7,G=1e-4;class he{constructor(e,n){this.backend=e,this.dataMover=n,this.data=new WeakMap,this.dataIdsCount=0}get(e){return this.data.has(e)||this.dataMover.moveData(this.backend,e),this.data.get(e)}set(e,n){this.dataIdsCount++,this.data.set(e,n)}has(e){return this.data.has(e)}delete(e){return this.dataIdsCount--,this.data.delete(e)}numDataIds(){return this.dataIdsCount}}class ee{refCount(e){return j("refCount")}incRef(e){return j("incRef")}timerAvailable(){return!0}time(e){return j("time")}read(e){return j("read")}readSync(e){return j("readSync")}readToGPU(e,n){return j("readToGPU")}numDataIds(){return j("numDataIds")}disposeData(e,n){return j("disposeData")}write(e,n,s){return j("write")}move(e,n,s,r,o){return j("move")}memory(){return j("memory")}floatPrecision(){return j("floatPrecision")}epsilon(){return this.floatPrecision()===32?Q:G}dispose(){return j("dispose")}}function j(t){throw new Error(`'${t}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}/**
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
 */function ce(t){let e=t.length,n=0;for(;e>0;)n=Math.random()*e|0,e--,K(t,e,n)}function V(t,e){if(t.length!==e.length)throw new Error(`Array sizes must match to be shuffled together First array length was ${t.length}Second array length was ${e.length}`);let n=t.length,s=0;for(;n>0;)s=Math.random()*n|0,n--,K(t,n,s),K(e,n,s)}function F(t,e,n){return Math.max(t,Math.min(e,n))}function z(t){return t%2===0?t:t+1}function K(t,e,n){const s=t[e];t[e]=t[n],t[n]=s}function H(t){let e=0;for(let n=0;n<t.length;n++)e+=t[n];return e}function Y(t,e){const n=Math.random();return e*n+(1-n)*t}function le(t,e){let n=0;for(let s=0;s<t.length;s++){const r=Number(t[s])-Number(e[s]);n+=r*r}return n}function $(t,e){if(!t)throw new Error(typeof e=="string"?e:e())}function te(t,e,n=""){$(k(t,e),()=>n+` Shapes ${t} and ${e} must match`)}function Ue(t){$(t!=null,()=>"The input to the tensor constructor must be a non-null value.")}function ke(t,e=[],n=!1){if(e==null&&(e=[]),Array.isArray(t)||We(t)&&!n)for(let s=0;s<t.length;++s)ke(t[s],e,n);else e.push(t);return e}function D(t){if(t.length===0)return 1;let e=t[0];for(let n=1;n<t.length;n++)e*=t[n];return e}function ve(t){return t.length===0}function k(t,e){if(t===e)return!0;if(t==null||e==null||t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function E(t){return t%1===0}function w(t){if(Math.tanh!=null)return Math.tanh(t);if(t===1/0)return 1;if(t===-1/0)return-1;{const e=Math.exp(2*t);return(e-1)/(e+1)}}function O(t){const e=Math.ceil(Math.sqrt(t));return[e,Math.ceil(t/e)]}function Z(t){const e=new Uint32Array(t);for(let n=0;n<t;++n)e[n]=n;return ce(e),e}function fe(t,e){return e<=t.length?t:t+" ".repeat(e-t.length)}function pe(t,e=s=>0,n){return new Promise((s,r)=>{let o=0;const i=()=>{if(t()){s();return}o++;const c=e(o);if(n!=null&&o>=n){r();return}setTimeout(i,c)};i()})}function Se(t,e){let n=1,s=-1;for(let o=0;o<t.length;++o)if(t[o]>=0)n*=t[o];else if(t[o]===-1){if(s!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${s} and dim ${o}`);s=o}else if(t[o]<0)throw Error(`Shapes can not be < 0. Found ${t[o]} at dim ${o}`);if(s===-1){if(e>0&&e!==n)throw Error(`Size(${e}) must match the product of shape ${t}`);return t}if(n===0)throw Error(`Cannot infer the missing size in [${t}] when there are 0 elements`);if(e%n!==0)throw Error(`The implicit shape can't be a fractional number. Got ${e} / ${n}`);const r=t.slice();return r[s]=e/n,r}function re(t,e){const n=e.length;return t=t==null?e.map((s,r)=>r):[].concat(t),$(t.every(s=>s>=-n&&s<n),()=>`All values in axis param must be in range [-${n}, ${n}) but got axis ${t}`),$(t.every(s=>E(s)),()=>`All values in axis param must be integers but got axis ${t}`),t.map(s=>s<0?n+s:s)}function Ee(t,e){const n=[],s=[],r=e!=null&&Array.isArray(e)&&e.length===0,o=e==null||r?null:re(e,t).sort();let i=0;for(let c=0;c<t.length;++c){if(o!=null){if(o[i]===c&&t[c]!==1)throw new Error(`Can't squeeze axis ${c} since its dim '${t[c]}' is not 1`);(o[i]==null||o[i]>c)&&t[c]===1&&(n.push(t[c]),s.push(c)),o[i]<=c&&i++}t[c]!==1&&(n.push(t[c]),s.push(c))}return{newShape:n,keptDims:s}}function xe(t,e){let n=null;if(t==null||t==="float32")n=new Float32Array(e);else if(t==="int32")n=new Int32Array(e);else if(t==="bool")n=new Uint8Array(e);else throw new Error(`Unknown data type ${t}`);return n}function oe(t,e){let n=null;if(t==null||t==="float32")n=new Float32Array(e);else if(t==="int32")n=new Int32Array(e);else if(t==="bool")n=new Uint8Array(e);else if(t==="string")n=new Array(e);else throw new Error(`Unknown data type ${t}`);return n}function Xe(t,e){for(let n=0;n<t.length;n++){const s=t[n];if(isNaN(s)||!isFinite(s))throw Error(`A tensor of type ${e} being uploaded contains ${s}.`)}}function Te(t){return t==="bool"||t==="complex64"||t==="float32"||t==="int32"||t==="string"}function Fe(t,e){return!(e==="complex64"||e==="float32"&&t!=="complex64"||e==="int32"&&t!=="float32"&&t!=="complex64"||e==="bool"&&t==="bool")}function We(t){return t instanceof Float32Array||t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray}function gr(t){if(t==="float32"||t==="int32")return 4;if(t==="complex64")return 8;if(t==="bool")return 1;throw new Error(`Unknown dtype ${t}`)}function Yu(t){if(t==null)return 0;let e=0;return t.forEach(n=>e+=n.length),e}function rs(t){return typeof t=="string"||t instanceof String}function Qu(t){return typeof t=="boolean"}function Zu(t){return typeof t=="number"}function os(t){return Array.isArray(t)?os(t[0]):t instanceof Float32Array?"float32":t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray?"int32":Zu(t)?"float32":rs(t)?"string":Qu(t)?"bool":"float32"}function Qo(t){return!!(t&&t.constructor&&t.call&&t.apply)}function mr(t,e){for(let n=e;n<t;++n)if(t%n===0)return n;return t}function Re(t){const e=t.length;if(e<2)return[];const n=new Array(e-1);n[e-2]=t[e-1];for(let s=e-3;s>=0;--s)n[s]=n[s+1]*t[s+1];return n}function Zo(t,e,n,s=!1){const r=new Array;if(e.length===1){const o=e[0]*(s?2:1);for(let i=0;i<o;i++)r[i]=n[t+i]}else{const o=e[0],i=e.slice(1),c=i.reduce((a,l)=>a*l)*(s?2:1);for(let a=0;a<o;a++)r[a]=Zo(t+a*c,i,n,s)}return r}function Fn(t,e,n=!1){if(t.length===0)return e[0];const s=t.reduce((r,o)=>r*o)*(n?2:1);if(s===0)return[];if(s!==e.length)throw new Error(`[${t}] does not match the input size ${e.length}${n?" for a complex tensor":""}.`);return Zo(0,t,e,n)}function Jo(t,e){const n=St(t,e);for(let s=0;s<n.length;s++)n[s]=1;return n}function St(t,e){if(e==null||e==="float32"||e==="complex64")return new Float32Array(t);if(e==="int32")return new Int32Array(t);if(e==="bool")return new Uint8Array(t);throw new Error(`Unknown data type ${e}`)}function ZE(t,e){const n=t.reduce((s,r)=>s*r,1);if(e==null||e==="float32")return Fn(t,new Float32Array(n));if(e==="int32")return Fn(t,new Int32Array(n));if(e==="bool")return Fn(t,new Uint8Array(n));throw new Error(`Unknown data type ${e}`)}function ei(t){t.forEach(e=>{$(Number.isInteger(e)&&e>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${t}].`)})}function Pn(t,e,n){if(e===0)return 0;if(e===1)return t[0];let s=t[t.length-1];for(let r=0;r<t.length-1;++r)s+=n[r]*t[r];return s}function xr(t,e,n){if(e===0)return[];if(e===1)return[t];const s=new Array(e);for(let r=0;r<s.length-1;++r)s[r]=Math.floor(t/n[r]),t-=s[r]*n[r];return s[s.length-1]=t,s}function ti(t){return t&&t.then&&typeof t.then=="function"}var Ju=(t,e,n)=>new Promise((s,r)=>{var o=a=>{try{c(n.next(a))}catch(l){r(l)}},i=a=>{try{c(n.throw(a))}catch(l){r(l)}},c=a=>a.done?s(a.value):Promise.resolve(a.value).then(o,i);c((n=n.apply(t,e)).next())});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */const ni="tfjsflags";class ed{constructor(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=td,this.populateURLFlags()}setPlatform(e,n){this.platform!=null&&(S().getBool("IS_TEST")||S().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${n}.`)),this.platformName=e,this.platform=n}registerFlag(e,n,s){if(this.flagRegistry[e]={evaluationFn:n,setHook:s},this.urlFlags[e]!=null){const r=this.urlFlags[e];S().getBool("IS_TEST")||S().getBool("PROD")||console.warn(`Setting feature override from URL ${e}: ${r}.`),this.set(e,r)}}getAsync(e){return Ju(this,null,function*(){return e in this.flags?this.flags[e]:(this.flags[e]=yield this.evaluateFlag(e),this.flags[e])})}get(e){if(e in this.flags)return this.flags[e];const n=this.evaluateFlag(e);if(ti(n))throw new Error(`Flag ${e} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[e]=n,this.flags[e]}getNumber(e){return this.get(e)}getBool(e){return this.get(e)}getFlags(){return this.flags}get features(){return this.flags}set(e,n){if(this.flagRegistry[e]==null)throw new Error(`Cannot set flag ${e} as it has not been registered.`);this.flags[e]=n,this.flagRegistry[e].setHook!=null&&this.flagRegistry[e].setHook(n)}evaluateFlag(e){if(this.flagRegistry[e]==null)throw new Error(`Cannot evaluate flag '${e}': no evaluation function found.`);return this.flagRegistry[e].evaluationFn()}setFlags(e){this.flags=Object.assign({},e)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const e=this.getQueryParams(this.global.location.search);ni in e&&e[ni].split(",").forEach(s=>{const[r,o]=s.split(":");this.urlFlags[r]=sd(r,o)})}}function td(t){const e={};return t.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(n,...s)=>(nd(e,s[0],s[1]),s.join("="))),e}function nd(t,e,n){t[decodeURIComponent(e)]=decodeURIComponent(n||"")}function sd(t,e){if(e=e.toLowerCase(),e==="true"||e==="false")return e==="true";if(`${+e}`===e)return+e;throw new Error(`Could not parse value flag value ${e} for flag ${t}.`)}function S(){return si}let si=null;function rd(t){si=t}/**
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
 */let br;function ri(){if(br==null){let t;if(typeof window<"u")t=window;else if(typeof B.g<"u")t=B.g;else if(typeof process<"u")t=process;else if(typeof self<"u")t=self;else throw new Error("Could not find a global object");br=t}return br}function od(){const t=ri();return t._tfGlobals==null&&(t._tfGlobals=new Map),t._tfGlobals}function wr(t,e){const n=od();if(n.has(t))return n.get(t);{const s=e();return n.set(t,s),n.get(t)}}const yr="Abs",id="Acos",ad="Acosh",On="Add",cd="AddN",ld="All",ud="Any",dd="ArgMax",hd="ArgMin",fd="Asin",pd="Asinh",gd="Atan",md="Atanh",xd="Atan2",bd="AvgPool",wd="AvgPoolGrad",yd="AvgPool3D",Cd="AvgPool3DGrad",oi="BatchMatMul",vd="BatchToSpaceND",ii="Bincount",JE="BroadcastTo",$d="BroadcastArgs",is="Cast",Cr="Ceil",Id="ClipByValue",vr="Complex",ai="ComplexAbs",ci="Concat",Sd="Conv2D",Ed="Conv2DBackpropFilter",kd="Conv2DBackpropInput",Td="Conv3D",Rd="Conv3DBackpropFilterV2",Nd="Conv3DBackpropInputV2",Ad="Cos",_d="Cosh",Dd="Cumsum",li="CropAndResize",Fd="DenseBincount",Pd="DepthToSpace",Od="DepthwiseConv2dNative",Ld="DepthwiseConv2dNativeBackpropFilter",Bd="DepthwiseConv2dNativeBackpropInput",Md="Diag",Vd="Dilation2D",e2="Dilation2DBackpropInput",t2="Dilation2DBackpropFilter",ui="RealDiv",Ud="Einsum",di="Elu",Wd="EluGrad",Gd="Erf",$r="Equal",as="Exp",hi="ExpandDims",Ir="Expm1",fi="FFT",pi="Fill",gi="FlipLeftRight",Sr="Floor",mi="FloorDiv",zd="FusedBatchNorm",Hd="GatherV2",Xd="GatherNd",cs="Greater",ls="GreaterEqual",us="Identity",xi="IFFT",bi="Imag",qd="IsFinite",Kd="IsInf",jd="IsNan",wi="LeakyRelu",Er="Less",ds="LessEqual",Yd="LinSpace",hs="Log",yi="Log1p",Ci="LogicalAnd",Qd="LogicalNot",Zd="LogicalOr",n2="LogSoftmax",Jd="LRN",eh="LRNGrad",vi="Max",kr="Maximum",th="MaxPool",nh="MaxPoolGrad",sh="MaxPool3D",rh="MaxPool3DGrad",oh="MaxPoolWithArgmax",$i="Mean",Ii="Min",fs="Minimum",ih="MirrorPad",ah="Mod",ch="Multinomial",ps="Multiply",Tr="Neg",gs="NotEqual",Si="NonMaxSuppressionV3",Ei="NonMaxSuppressionV4",ki="NonMaxSuppressionV5",lh="OnesLike",uh="OneHot",Ti="Pack",dh="PadV2",s2="Pool",Ri="Pow",Ni="Prelu",Ai="Prod",_i="Range",Rr="Real",hh="Reciprocal",Di="Relu",Fi="Reshape",Pi="ResizeNearestNeighbor",fh="ResizeNearestNeighborGrad",Oi="ResizeBilinear",ph="ResizeBilinearGrad",Li="Relu6",Bi="Reverse",Mi="Round",Nr="Rsqrt",gh="ScatterNd",Vi="Select",mh="Selu",Ar="Slice",xh="Sin",bh="Sinh",wh="Sign",ms="Sigmoid",yh="Softplus",xs="Sqrt",Ui="Sum",Ch="SpaceToBatchND",Wi="SplitV",vh="Softmax",Gi="SparseFillEmptyRows",zi="SparseReshape",Hi="SparseSegmentMean",Xi="SparseSegmentSum",$h="SparseToDense",bs="SquaredDifference",Ih="Square",Sh="StridedSlice",qi="StringNGrams",Ki="StringSplit",ji="StringToHashBucketFast",ws="Sub",Eh="Tan",kh="Tanh",_r="Tile",Th="TopK",Yi="Transform",Dr="Transpose",Rh="Unique",Qi="Unpack",Nh="UnsortedSegmentSum",Zi="ZerosLike",Ji="Step",Ah="FromPixels",ea="RotateWithOffset",_h="_FusedMatMul",Dh="FusedConv2D",Fh="FusedDepthwiseConv2D";/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function lt(...t){S().getBool("IS_TEST")||S().getBool("PROD")||console.warn(...t)}function Ph(...t){S().getBool("IS_TEST")||S().getBool("PROD")||console.log(...t)}/**
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
 */const nn=wr("kernelRegistry",()=>new Map),Ln=wr("gradRegistry",()=>new Map);function ta(t,e){const n=Pr(t,e);return nn.get(n)}function na(t){return Ln.get(t)}function Fr(t){const e=nn.entries(),n=[];for(;;){const{done:s,value:r}=e.next();if(s)break;const[o,i]=r,[c]=o.split("_");c===t&&n.push(i)}return n}function sa(t){const{kernelName:e,backendName:n}=t,s=Pr(e,n);nn.has(s)&&lt(`The kernel '${e}' for backend '${n}' is already registered`),nn.set(s,t)}function r2(t){const{kernelName:e}=t;Ln.has(e)&&env().getBool("DEBUG")&&log.warn(`Overriding the gradient for '${e}'`),Ln.set(e,t)}function o2(t,e){const n=Pr(t,e);if(!nn.has(n))throw new Error(`The kernel '${t}' for backend '${e}' is not registered`);nn.delete(n)}function i2(t){if(!Ln.has(t))throw new Error(`The gradient '${t}' for backend is not registered`);Ln.delete(t)}function a2(t,e){Fr(t).forEach(s=>{const r=Object.assign({},s,{backendName:e});sa(r)})}function Pr(t,e){return`${e}_${t}`}var ra=B(3968),Oh=B.n(ra);/**
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
 */const Mt=Oh()||ra;function ys(t){return Mt.fromString(t,!0,16)}const oa=ys("c3a5c85c97cb3127"),Vt=ys("b492b66fbe98f273"),Pe=ys("9ae16a3b2f90404f");function Or(t){return t.xor(t.shru(47))}function ia(t,e,n){const s=t.slice(e,e+n);return Mt.fromBytes(Array.from(s),!0,!0)}function be(t,e){return ia(t,e,8)}function aa(t,e){return ia(t,e,4)}function Ne(t,e){return e===0?t:t.shru(e).or(t.shl(64-e))}function _t(t,e,n=ys("9ddfea08eb382d69")){let s=t.xor(e).mul(n);s=s.xor(s.shru(47));let r=e.xor(s).mul(n);return r=r.xor(r.shru(47)),r=r.mul(n),r}function Lh(t,e,n,s,r,o){r=r.add(t),o=Ne(o.add(r).add(s),21);const i=r;return r=r.add(e),r=r.add(n),o=o.add(Ne(r,44)),[r.add(s),o.add(i)]}function Cs(t,e,n,s){return Lh(be(t,e),be(t,e+8),be(t,e+16),be(t,e+24),n,s)}function Bh(t,e=t.length){if(e>=8){const n=Pe.add(e*2),s=be(t,0).add(Pe),r=be(t,e-8),o=Ne(r,37).mul(n).add(s),i=Ne(s,25).add(r).mul(n);return _t(o,i,n)}if(e>=4){const n=Pe.add(e*2),s=aa(t,0);return _t(s.shl(3).add(e),aa(t,e-4),n)}if(e>0){const n=t[0],s=t[e>>1],r=t[e-1],o=n+(s<<8),i=e+(r<<2);return Or(Pe.mul(o).xor(oa.mul(i))).mul(Pe)}return Pe}function Mh(t,e=t.length){const n=Pe.add(e*2),s=be(t,0).mul(Vt),r=be(t,8),o=be(t,e-8).mul(n),i=be(t,e-16).mul(Pe);return _t(Ne(s.add(r),43).add(Ne(o,30)).add(i),s.add(Ne(r.add(Pe),18)).add(o),n)}function Vh(t,e=t.length){const n=Pe.add(e*2),s=be(t,0).mul(Pe),r=be(t,8),o=be(t,e-8).mul(n),i=be(t,e-16).mul(Pe),c=Ne(s.add(r),43).add(Ne(o,30)).add(i),a=_t(c,s.add(Ne(r.add(Pe),18)).add(o),n),l=be(t,16).mul(n),u=be(t,24),d=c.add(be(t,e-32)).mul(n),h=a.add(be(t,e-24)).mul(n);return _t(Ne(l.add(u),43).add(Ne(d,30)).add(h),l.add(Ne(u.add(s),18)).add(d),n)}function Uh(t,e=t.length){const n=Mt.fromNumber(81,!0);if(e<=32)return e<=16?Bh(t,e):Mh(t,e);if(e<=64)return Vh(t,e);let s=n,r=n.mul(Vt).add(113),o=Or(r.mul(Pe).add(113)).mul(Pe),i=[Mt.UZERO,Mt.UZERO],c=[Mt.UZERO,Mt.UZERO];s=s.mul(Pe).add(be(t,0));let a=0;const l=(e-1>>6)*64,u=l+(e-1&63)-63;do s=Ne(s.add(r).add(i[0]).add(be(t,a+8)),37).mul(Vt),r=Ne(r.add(i[1]).add(be(t,a+48)),42).mul(Vt),s=s.xor(c[1]),r=r.add(i[0]).add(be(t,a+40)),o=Ne(o.add(c[0]),33).mul(Vt),i=Cs(t,a,i[1].mul(Vt),s.add(c[0])),c=Cs(t,a+32,o.add(c[1]),r.add(be(t,a+16))),[o,s]=[s,o],a+=64;while(a!==l);const d=Vt.add(o.and(255).shl(1));return a=u,c[0]=c[0].add(e-1&63),i[0]=i[0].add(c[0]),c[0]=c[0].add(i[0]),s=Ne(s.add(r).add(i[0]).add(be(t,a+8)),37).mul(d),r=Ne(r.add(i[1]).add(be(t,a+48)),42).mul(d),s=s.xor(c[1].mul(9)),r=r.add(i[0].mul(9).add(be(t,a+40))),o=Ne(o.add(c[0]),33).mul(d),i=Cs(t,a,i[1].mul(d),s.add(c[0])),c=Cs(t,a+32,o.add(c[1]),r.add(be(t,a+16))),[o,s]=[s,o],_t(_t(i[0],c[0],d).add(Or(r).mul(oa)).add(o),_t(i[1],c[1],d).add(s),d)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */function sn(t,e){return e==="string"?Ut(t):vs([t],e)}function Wh(t,e){return t instanceof Float32Array&&e==="float32"||t instanceof Int32Array&&e==="int32"||t instanceof Uint8Array&&e==="bool"}function vs(t,e){if(e==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(t)&&(t=ke(t)),S().getBool("DEBUG")&&Xe(t,e),Wh(t,e))return t;if(e==null||e==="float32"||e==="complex64")return new Float32Array(t);if(e==="int32")return new Int32Array(t);if(e==="bool"){const n=new Uint8Array(t.length);for(let s=0;s<n.length;++s)Math.round(t[s])!==0&&(n[s]=1);return n}else throw new Error(`Unknown data type ${e}`)}function ut(){return S().platform.now()}function c2(t,e){return S().platform.fetch(t,e)}function Ut(t,e="utf-8"){return e=e||"utf-8",S().platform.encode(t,e)}function Bn(t,e="utf-8"){return e=e||"utf-8",S().platform.decode(t,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */class Gh{constructor(e,n){this.backendTimer=e,this.logger=n,n==null&&(this.logger=new Hh)}profileKernel(e,n,s){let r;const o=()=>{r=s()};let i;const c=ut();if(this.backendTimer.timerAvailable())i=this.backendTimer.time(o);else{o();for(const l of r)l.dataSync();i=Promise.resolve({kernelMs:ut()-c})}if(S().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let l=0;l<r.length;l++){const u=r[l];u.data().then(d=>{zh(d,u.dtype,e)})}return{kernelName:e,outputs:r,inputs:n,timeMs:i.then(l=>l.kernelMs),extraInfo:i.then(l=>l.getExtraProfileInfo!=null?l.getExtraProfileInfo():"")}}logKernelProfile(e){const{kernelName:n,outputs:s,timeMs:r,inputs:o,extraInfo:i}=e;s.forEach(c=>{Promise.all([c.data(),r,i]).then(a=>{this.logger.logKernelProfile(n,c,a[0],a[1],o,a[2])})})}}function zh(t,e,n){if(e!=="float32")return!1;for(let s=0;s<t.length;s++){const r=t[s];if(isNaN(r)||!isFinite(r))return console.warn(`Found ${r} in the result of '${n}'`),!0}return!1}class Hh{logKernelProfile(e,n,s,r,o,i){const c=typeof r=="number"?fe(`${r}ms`,9):r.error,a=fe(e,25),l=n.rank,u=n.size,d=fe(n.shape.toString(),14);let h="";for(const f in o){const p=o[f];if(p!=null){const g=p.shape||n.shape,m=g.length;h+=`${f}: ${m}D ${m>0?g:""} `}}console.log(`%c${a}	%c${c}	%c${l}D ${d}	%c${u}	%c${h}	%c${i}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */function Xh(t,e,n){const s={},r={};for(let a=0;a<e.length;a++)s[e[a].id]=!0;for(let a=0;a<t.length;a++){const l=t[a],u=l.inputs;for(const d in u){const h=u[d];let f=!1;for(let p=0;p<e.length;p++)if(s[h.id]){l.outputs.forEach(g=>s[g.id]=!0),f=!0,r[l.id]=!0;break}if(f)break}}const o={};o[n.id]=!0;const i={};for(let a=t.length-1;a>=0;a--){const l=t[a],u=l.inputs;for(let d=0;d<l.outputs.length;d++)if(o[l.outputs[d].id]){for(const h in u)o[u[h].id]=!0,i[l.id]=!0;break}}const c=[];for(let a=0;a<t.length;a++){const l=t[a];if(r[l.id]&&i[l.id]){const u={};for(const h in l.inputs){const f=l.inputs[h];s[f.id]&&(u[h]=f)}const d=Object.assign({},l);d.inputs=u,d.outputs=l.outputs,c.push(d)}}return c}function qh(t,e,n,s){for(let r=e.length-1;r>=0;r--){const o=e[r],i=[];if(o.outputs.forEach(a=>{const l=t[a.id];l!=null?i.push(l):i.push(null)}),o.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${o.kernelName}.`);const c=o.gradient(i);for(const a in o.inputs){if(!(a in c))throw new Error(`Cannot backprop through input ${a}. Available gradients found: ${Object.keys(c)}.`);const l=n(()=>c[a]());if(l.dtype!=="float32")throw new Error(`Error in gradient for op ${o.kernelName}. The gradient of input ${a} must have 'float32' dtype, but has '${l.dtype}'`);const u=o.inputs[a];if(!k(l.shape,u.shape))throw new Error(`Error in gradient for op ${o.kernelName}. The gradient of input '${a}' has shape '${l.shape}', which does not match the shape of the input '${u.shape}'`);if(t[u.id]==null)t[u.id]=l;else{const d=t[u.id];t[u.id]=s(d,l),d.dispose()}}}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */const ca=20,Mn=3,Lr=7;function Kh(t,e,n,s){const r=Re(e),o=jh(t,e,n,r),i=e.length,c=$s(t,e,n,r,o),a=["Tensor"];return s&&(a.push(`  dtype: ${n}`),a.push(`  rank: ${i}`),a.push(`  shape: [${e}]`),a.push("  values:")),a.push(c.map(l=>"    "+l).join(`
`)),a.join(`
`)}function jh(t,e,n,s){const r=D(e),o=s[s.length-1],i=new Array(o).fill(0),c=e.length,a=n==="complex64"?Un(t):t;if(c>1)for(let l=0;l<r/o;l++){const u=l*o;for(let d=0;d<o;d++)i[d]=Math.max(i[d],Vn(a[u+d],0,n).length)}return i}function Vn(t,e,n){let s;return Array.isArray(t)?s=`${parseFloat(t[0].toFixed(Lr))} + ${parseFloat(t[1].toFixed(Lr))}j`:rs(t)?s=`'${t}'`:n==="bool"?s=la(t):s=parseFloat(t.toFixed(Lr)).toString(),fe(s,e)}function la(t){return t===0?"false":"true"}function $s(t,e,n,s,r,o=!0){const i=n==="complex64"?2:1,c=e[0],a=e.length;if(a===0){if(n==="complex64"){const g=Un(t);return[Vn(g[0],0,n)]}return n==="bool"?[la(t[0])]:[t[0].toString()]}if(a===1){if(c>ca){const m=Mn*i;let x=Array.from(t.slice(0,m)),b=Array.from(t.slice((c-Mn)*i,c*i));return n==="complex64"&&(x=Un(x),b=Un(b)),["["+x.map((y,C)=>Vn(y,r[C],n)).join(", ")+", ..., "+b.map((y,C)=>Vn(y,r[c-Mn+C],n)).join(", ")+"]"]}const g=n==="complex64"?Un(t):Array.from(t);return["["+g.map((m,x)=>Vn(m,r[x],n)).join(", ")+"]"]}const l=e.slice(1),u=s.slice(1),d=s[0]*i,h=[];if(c>ca){for(let g=0;g<Mn;g++){const m=g*d,x=m+d;h.push(...$s(t.slice(m,x),l,n,u,r,!1))}h.push("...");for(let g=c-Mn;g<c;g++){const m=g*d,x=m+d;h.push(...$s(t.slice(m,x),l,n,u,r,g===c-1))}}else for(let g=0;g<c;g++){const m=g*d,x=m+d;h.push(...$s(t.slice(m,x),l,n,u,r,g===c-1))}const f=a===2?",":"";h[0]="["+h[0]+f;for(let g=1;g<h.length-1;g++)h[g]=" "+h[g]+f;let p=`,
`;for(let g=2;g<a;g++)p+=`
`;return h[h.length-1]=" "+h[h.length-1]+"]"+(o?"":p),h}function Un(t){const e=[];for(let n=0;n<t.length;n+=2)e.push([t[n],t[n+1]]);return e}var Is=(t,e,n)=>new Promise((s,r)=>{var o=a=>{try{c(n.next(a))}catch(l){r(l)}},i=a=>{try{c(n.throw(a))}catch(l){r(l)}},c=a=>a.done?s(a.value):Promise.resolve(a.value).then(o,i);c((n=n.apply(t,e)).next())});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */class Br{constructor(e,n,s){if(this.dtype=n,this.shape=e.slice(),this.size=D(e),s!=null){const r=s.length;$(r===this.size,()=>`Length of values '${r}' does not match the size inferred by the shape '${this.size}'.`)}if(n==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=s||oe(n,this.size),this.strides=Re(e)}set(e,...n){n.length===0&&(n=[0]),$(n.length===this.rank,()=>`The number of provided coordinates (${n.length}) must match the rank (${this.rank})`);const s=this.locToIndex(n);this.values[s]=e}get(...e){e.length===0&&(e=[0]);let n=0;for(const r of e){if(r<0||r>=this.shape[n]){const o=`Requested out of range element at ${e}.   Buffer shape=${this.shape}`;throw new Error(o)}n++}let s=e[e.length-1];for(let r=0;r<e.length-1;++r)s+=this.strides[r]*e[r];return this.values[s]}locToIndex(e){if(this.rank===0)return 0;if(this.rank===1)return e[0];let n=e[e.length-1];for(let s=0;s<e.length-1;++s)n+=this.strides[s]*e[s];return n}indexToLoc(e){if(this.rank===0)return[];if(this.rank===1)return[e];const n=new Array(this.shape.length);for(let s=0;s<n.length-1;++s)n[s]=Math.floor(e/this.strides[s]),e-=n[s]*this.strides[s];return n[n.length-1]=e,n}get rank(){return this.shape.length}toTensor(){return dt().makeTensor(this.values,this.shape,this.dtype)}}let dt=null,rn=null,ua=null;function Yh(t){dt=t}function Qh(t){rn=t}function Zh(t){ua=t}class rt{constructor(e,n,s,r){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=n||"float32",this.size=D(e),this.strides=Re(e),this.dataId=s,this.id=r,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}buffer(){return Is(this,null,function*(){const e=yield this.data();return rn.buffer(this.shape,this.dtype,e)})}bufferSync(){return rn.buffer(this.shape,this.dtype,this.dataSync())}array(){return Is(this,null,function*(){const e=yield this.data();return Fn(this.shape,e,this.dtype==="complex64")})}arraySync(){return Fn(this.shape,this.dataSync(),this.dtype==="complex64")}data(){return Is(this,null,function*(){this.throwIfDisposed();const e=dt().read(this.dataId);if(this.dtype==="string"){const n=yield e;try{return n.map(s=>Bn(s))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return e})}dataToGPU(e){return this.throwIfDisposed(),dt().readToGPU(this.dataId,e)}dataSync(){this.throwIfDisposed();const e=dt().readSync(this.dataId);if(this.dtype==="string")try{return e.map(n=>Bn(n))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return e}bytes(){return Is(this,null,function*(){this.throwIfDisposed();const e=yield dt().read(this.dataId);return this.dtype==="string"?e:new Uint8Array(e.buffer)})}dispose(){this.isDisposed||(dt().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(e=!1){return rn.print(this,e)}clone(){return this.throwIfDisposed(),rn.clone(this)}toString(e=!1){const n=this.dataSync();return Kh(n,this.shape,this.dtype,e)}cast(e){return this.throwIfDisposed(),rn.cast(this,e)}variable(e=!0,n,s){return this.throwIfDisposed(),dt().makeVariable(this,e,n,s)}}Object.defineProperty(rt,Symbol.hasInstance,{value:t=>!!t&&t.data!=null&&t.dataSync!=null&&t.throwIfDisposed!=null});function Jh(){return wr("Tensor",()=>rt)}Jh();class Mr extends rt{constructor(e,n,s,r){super(e.shape,e.dtype,e.dataId,r);this.trainable=n,this.name=s}assign(e){if(e.dtype!==this.dtype)throw new Error(`dtype of the new value (${e.dtype}) and previous value (${this.dtype}) must match`);if(!k(e.shape,this.shape))throw new Error(`shape of the new value (${e.shape}) and previous value (${this.shape}) must match`);dt().disposeTensor(this),this.dataId=e.dataId,dt().incRef(this,null)}dispose(){dt().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(Mr,Symbol.hasInstance,{value:t=>t instanceof rt&&t.assign!=null&&t.assign instanceof Function});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */var da;(function(t){t.R0="R0",t.R1="R1",t.R2="R2",t.R3="R3",t.R4="R4",t.R5="R5",t.R6="R6"})(da||(da={}));var Vr;(function(t){t.float32="float32",t.int32="int32",t.bool="int32",t.complex64="complex64"})(Vr||(Vr={}));var Ur;(function(t){t.float32="float32",t.int32="int32",t.bool="bool",t.complex64="complex64"})(Ur||(Ur={}));var Wr;(function(t){t.float32="float32",t.int32="float32",t.bool="float32",t.complex64="complex64"})(Wr||(Wr={}));var Gr;(function(t){t.float32="complex64",t.int32="complex64",t.bool="complex64",t.complex64="complex64"})(Gr||(Gr={}));const ef={float32:Wr,int32:Vr,bool:Ur,complex64:Gr};function bt(t,e){if(t==="string"||e==="string"){if(t==="string"&&e==="string")return"string";throw new Error(`Can not upcast ${t} with ${e}`)}return ef[t][e]}function zr(t){return bt(t,"int32")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Qe(t,e){if(t.dtype===e.dtype)return[t,e];const n=bt(t.dtype,e.dtype);return[t.cast(n),e.cast(n)]}function l2(t,e){assert(t.dtype===e.dtype,()=>`The dtypes of the first(${t.dtype}) and second(${e.dtype}) input must match`)}function u2(t,e){return e.some(n=>n.id===t.id)}function ha(t){const e=[];return fa(t,e,new Set),e}function fa(t,e,n){if(t==null)return;if(t instanceof rt){e.push(t);return}if(!tf(t))return;const s=t;for(const r in s){const o=s[r];n.has(o)||(n.add(o),fa(o,e,n))}}function tf(t){return Array.isArray(t)||typeof t=="object"}var Ss=(t,e,n)=>new Promise((s,r)=>{var o=a=>{try{c(n.next(a))}catch(l){r(l)}},i=a=>{try{c(n.throw(a))}catch(l){r(l)}},c=a=>a.done?s(a.value):Promise.resolve(a.value).then(o,i);c((n=n.apply(t,e)).next())});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Hr(t){return t.kernelName!=null}class pa{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(e=>e.name)))}}}dispose(){for(const e in this.registeredVariables)this.registeredVariables[e].dispose()}}class on{constructor(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new pa}ready(){return Ss(this,null,function*(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const e=this.getSortedBackends();for(let n=0;n<e.length;n++){const s=e[n];if(yield this.initializeBackend(s).success){yield this.setBackend(s);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")})}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:e,asyncInit:n}=this.initializeBackendsAndReturnBest();if(n)throw new Error(`The highest priority backend '${e}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(e)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(e){if(!(e in this.registry))if(e in this.registryFactory){const{asyncInit:n}=this.initializeBackend(e);if(n)return null}else return null;return this.registry[e]}findBackendFactory(e){return e in this.registryFactory?this.registryFactory[e].factory:null}registerBackend(e,n,s=1){return e in this.registryFactory?(lt(`${e} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[e]={factory:n,priority:s},!0)}setBackend(e){return Ss(this,null,function*(){if(this.registryFactory[e]==null)throw new Error(`Backend name '${e}' not found in registry`);if(this.backendName=e,this.registry[e]==null){this.backendInstance=null;const{success:n,asyncInit:s}=this.initializeBackend(e);if(!(s?yield n:n))return!1}return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new Gh(this.backendInstance),!0})}setupRegisteredKernels(){Fr(this.backendName).forEach(n=>{n.setupFunc!=null&&n.setupFunc(this.backendInstance)})}disposeRegisteredKernels(e){Fr(e).forEach(s=>{s.disposeFunc!=null&&s.disposeFunc(this.registry[e])})}initializeBackend(e){const n=this.registryFactory[e];if(n==null)throw new Error(`Cannot initialize backend ${e}, no registration found.`);try{const s=n.factory();if(s&&!(s instanceof ee)&&typeof s.then=="function"){const r=++this.pendingBackendInitId,o=s.then(i=>r<this.pendingBackendInitId?!1:(this.registry[e]=i,this.pendingBackendInit=null,!0)).catch(i=>(r<this.pendingBackendInitId||(this.pendingBackendInit=null,lt(`Initialization of backend ${e} failed`),lt(i.stack||i.message)),!1));return this.pendingBackendInit=o,{success:o,asyncInit:!0}}else return this.registry[e]=s,{success:!0,asyncInit:!1}}catch(s){return lt(`Initialization of backend ${e} failed`),lt(s.stack||s.message),{success:!1,asyncInit:!1}}}removeBackend(e){if(!(e in this.registryFactory))throw new Error(`${e} backend not found in registry`);this.backendName===e&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((e,n)=>this.registryFactory[n].priority-this.registryFactory[e].priority)}initializeBackendsAndReturnBest(){const e=this.getSortedBackends();for(let n=0;n<e.length;n++){const s=e[n],{success:r,asyncInit:o}=this.initializeBackend(s);if(o||r)return{name:s,asyncInit:o}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(e,n){const s=this.state.tensorInfo.get(n),r=s.backend,o=this.readSync(n),i=r.refCount(n);r.disposeData(n,!0),s.backend=e,e.move(n,o,s.shape,s.dtype,i),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(e,n){let s=null;if(n==null){if(typeof e!="function")throw new Error("Please provide a function to tidy()");n=e}else{if(typeof e!="string"&&!(e instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof n!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");s=e}let r;return this.scopedRun(()=>this.startScope(s),()=>this.endScope(r),()=>(r=n(),r instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),r))}scopedRun(e,n,s){e();try{const r=s();return n(),r}catch(r){throw n(),r}}nextTensorId(){return on.nextTensorId++}nextVariableId(){return on.nextVariableId++}clone(e){const n=A.runKernel(us,{x:e}),s={x:e},r=i=>({x:()=>{const c="float32",a={x:i},l={dtype:c};return A.runKernel(is,a,l)}}),o=[];return this.addTapeNode(this.state.activeScope.name,s,[n],r,o,{}),n}runKernel(e,n,s){if(this.backendName==null&&this.backend,!(ta(e,this.backendName)!=null))throw new Error(`Kernel '${e}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:e,inputs:n,attrs:s})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(e,n,s){const r=this.backend.numDataIds();let o=0;s.forEach(a=>{o+=a.dtype==="complex64"?3:1});const i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],c=r-n-o-i;if(c>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${c} data ids) after running '${e}'`)}runKernelFunc(e){let n,s=[];const r=this.isTapeOn(),o=this.state.numBytes,i=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let c;this.backendName==null&&this.backend;let a;const l=Hr(e)?e.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(Hr(e)){const{kernelName:p,inputs:g,attrs:m}=e;this.backendName==null&&this.backend;const x=ta(p,this.backendName);$(x!=null,()=>`Cannot find registered kernel '${p}' for backend '${this.backendName}'`),c=()=>{const b=this.backend.numDataIds();a=x.kernelFunc({inputs:g,attrs:m,backend:this.backend});const y=Array.isArray(a)?a:[a];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(p,b,y);const C=y.map(v=>{if(v.rank!=null)return v;const{dataId:R,shape:T,dtype:_}=v;return this.makeTensorFromDataId(R,T,_)});if(r){const v=this.getTensorsForGradient(p,g,C);s=this.saveTensorsForBackwardMode(v)}return C}}else{const{forwardFunc:p}=e,g=m=>{!r||(s=m.map(x=>this.keep(this.clone(x))))};c=()=>{const m=this.backend.numDataIds();a=this.tidy(()=>p(this.backend,g));const x=Array.isArray(a)?a:[a];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(l,m,x),x}}const{inputs:u,attrs:d}=e,h=Hr(e)?null:e.backwardsFunc;let f;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?n=c():(f=this.profiler.profileKernel(l,u,()=>c()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(f),n=f.outputs)}),r&&this.addTapeNode(l,u,n,h,s,d),this.state.profiling&&this.state.activeProfile.kernels.push({name:l,bytesAdded:this.state.numBytes-o,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-i,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(u).map(p=>u[p]!=null?u[p].shape:null),outputShapes:n.map(p=>p.shape),kernelTimeMs:f.timeMs,extraInfo:f.extraInfo}),Array.isArray(a)?n:n[0]}saveTensorsForBackwardMode(e){return e.map(s=>this.keep(this.clone(s)))}getTensorsForGradient(e,n,s){const r=na(e);if(r!=null){const o=r.inputsToSave||[],i=r.outputsToSave||[];let c;r.saveAllInputs?($(Array.isArray(n),()=>"saveAllInputs is true, expected inputs to be an array."),c=Object.keys(n).map(l=>n[l])):c=o.map(l=>n[l]);const a=s.filter((l,u)=>i[u]);return c.concat(a)}return[]}makeTensor(e,n,s,r){if(e==null)throw new Error("Values passed to engine.makeTensor() are null");s=s||"float32",r=r||this.backend;let o=e;s==="string"&&rs(e[0])&&(o=e.map(a=>Ut(a)));const i=r.write(o,n,s),c=new rt(n,s,i,this.nextTensorId());if(this.trackTensor(c,r),s==="string"){const a=this.state.tensorInfo.get(i),l=Yu(o);this.state.numBytes+=l-a.bytes,a.bytes=l}return c}makeTensorFromDataId(e,n,s,r){s=s||"float32";const o=new rt(n,s,e,this.nextTensorId());return this.trackTensor(o,r),o}makeVariable(e,n=!0,s,r){s=s||this.nextVariableId().toString(),r!=null&&r!==e.dtype&&(e=e.cast(r));const o=new Mr(e,n,s,this.nextTensorId());if(this.state.registeredVariables[o.name]!=null)throw new Error(`Variable with name ${o.name} was already registered`);return this.state.registeredVariables[o.name]=o,this.incRef(o,this.backend),o}trackTensor(e,n){this.state.numTensors++,e.dtype==="string"&&this.state.numStringTensors++;let s=0;e.dtype!=="complex64"&&e.dtype!=="string"&&(s=e.size*gr(e.dtype)),this.state.numBytes+=s,this.state.tensorInfo.has(e.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(e.dataId,{backend:n||this.backend,dtype:e.dtype,shape:e.shape,bytes:s})),e instanceof Mr||this.track(e)}incRef(e,n){this.trackTensor(e,n),this.backend.incRef(e.dataId)}removeDataId(e,n){this.state.tensorInfo.has(e)&&this.state.tensorInfo.get(e).backend===n&&(this.state.tensorInfo.delete(e),this.state.numDataBuffers--)}disposeTensor(e){if(!this.state.tensorInfo.has(e.dataId))return;const n=this.state.tensorInfo.get(e.dataId);if(this.state.numTensors--,e.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=n.bytes),e.dtype!=="complex64"&&e.dtype!=="string"){const s=e.size*gr(e.dtype);this.state.numBytes-=s}n.backend.disposeData(e.dataId)&&this.removeDataId(e.dataId,n.backend)}disposeVariables(){for(const e in this.state.registeredVariables){const n=this.state.registeredVariables[e];this.disposeVariable(n)}}disposeVariable(e){this.disposeTensor(e),this.state.registeredVariables[e.name]!=null&&delete this.state.registeredVariables[e.name]}memory(){const e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,e.reasons==null&&(e.reasons=[]),e.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),e}profile(e){return Ss(this,null,function*(){this.state.profiling=!0;const n=this.state.numBytes,s=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=yield e(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(r=>r.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-n,this.state.activeProfile.newTensors=this.state.numTensors-s;for(const r of this.state.activeProfile.kernels)r.kernelTimeMs=yield r.kernelTimeMs,r.extraInfo=yield r.extraInfo;return this.state.activeProfile})}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(e,n,s,r,o,i){const c={id:this.state.nextTapeNodeId++,kernelName:e,inputs:n,outputs:s,saved:o},a=na(e);a!=null&&(r=a.gradFunc),r!=null&&(c.gradient=l=>(l=l.map((u,d)=>{if(u==null){const h=s[d],f=St(h.size,h.dtype);return this.makeTensor(f,h.shape,h.dtype)}return u}),r(l.length>1?l:l[0],o,i))),this.state.activeTape.push(c)}keep(e){return e.kept=!0,e}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(e){const n={track:[],name:"unnamed scope",id:this.state.nextScopeId++};e&&(n.name=e),this.state.scopeStack.push(n),this.state.activeScope=n}endScope(e){const n=ha(e),s=new Set(n.map(o=>o.id));for(let o=0;o<this.state.activeScope.track.length;o++){const i=this.state.activeScope.track[o];!i.kept&&!s.has(i.id)&&i.dispose()}const r=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach(o=>{!o.kept&&o.scopeId===r.id&&this.track(o)})}gradients(e,n,s,r=!1){if($(n.length>0,()=>"gradients() received an empty list of xs."),s!=null&&s.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${s.dtype}'`);const o=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",e));$(o instanceof rt,()=>"The result y returned by f() must be a tensor.");const i=Xh(this.state.activeTape,n,o);if(!r&&i.length===0&&n.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const c={};c[o.id]=s??nf(o.shape),qh(c,i,l=>this.tidy(l),sf);const a=n.map(l=>c[l.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(l=>{for(const u of l.saved)u.dispose()}),this.state.activeTape=null),{value:o,grads:a}})}customGrad(e){return $(Qo(e),()=>"The f passed in customGrad(f) must be a function."),(...n)=>{$(n.every(c=>c instanceof rt),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let s;const r={};n.forEach((c,a)=>{r[a]=c});const o=(c,a)=>(s=e(...n,a),$(s.value instanceof rt,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),$(Qo(s.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),s.value),i=(c,a)=>{const l=s.gradFunc(c,a),u=Array.isArray(l)?l:[l];$(u.length===n.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),$(u.every(h=>h instanceof rt),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const d={};return u.forEach((h,f)=>{d[f]=()=>h}),d};return this.runKernelFunc({forwardFunc:o,backwardsFunc:i,inputs:r})}}readSync(e){return this.state.tensorInfo.get(e).backend.readSync(e)}read(e){return this.state.tensorInfo.get(e).backend.read(e)}readToGPU(e,n){return this.state.tensorInfo.get(e).backend.readToGPU(e,n)}time(e){return Ss(this,null,function*(){const n=ut(),s=yield this.backend.time(e);return s.wallMs=ut()-n,s})}track(e){return this.state.activeScope!=null&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new pa;for(const e in this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}on.nextTensorId=0,on.nextVariableId=0;function nf(t){const e=Jo(D(t),"float32");return A.makeTensor(e,t,"float32")}function ga(){const t=ri();if(t._tfengine==null){const e=new ed(t);t._tfengine=new on(e)}return rd(t._tfengine.ENV),Yh(()=>t._tfengine),t._tfengine}const A=ga();function sf(t,e){const n={a:t,b:e};return A.runKernel(On,n)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */function rf(){return typeof navigator<"u"&&navigator!=null}let Xr;function d2(t){Xr=t}function ma(t){if(Xr!==void 0)return Xr;if(t||rf()){if(t||(t=navigator),t.product==="ReactNative")return!0;const e=t.userAgent||t.vendor||(typeof window<"u"?window.opera:"");if(!e){const n=t;return n.userAgentData&&n.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))}return!1}function xa(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}/**
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
 */const ht=S();ht.registerFlag("DEBUG",()=>!1,t=>{t&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),ht.registerFlag("IS_BROWSER",()=>xa()),ht.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"),ht.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)),ht.registerFlag("PROD",()=>!1),ht.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>ht.getBool("DEBUG")),ht.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0),ht.registerFlag("IS_TEST",()=>!1),ht.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>!0),ht.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */const h2={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};var qr=(t,e,n)=>new Promise((s,r)=>{var o=a=>{try{c(n.next(a))}catch(l){r(l)}},i=a=>{try{c(n.throw(a))}catch(l){r(l)}},c=a=>a.done?s(a.value):Promise.resolve(a.value).then(o,i);c((n=n.apply(t,e)).next())});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */const Es=4;function f2(t,e){return qr(this,null,function*(){const n=[],s=[],r=Array.isArray(t)?t.map(i=>i.name):Object.keys(t);for(let i=0;i<r.length;++i){const c=r[i],a=Array.isArray(t)?t[i].tensor:t[c];if(a.dtype!=="float32"&&a.dtype!=="int32"&&a.dtype!=="bool"&&a.dtype!=="string"&&a.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${c}': ${a.dtype}`);const l={name:c,shape:a.shape,dtype:a.dtype};if(a.dtype==="string"){const u=new Promise(d=>qr(this,null,function*(){const h=yield a.bytes(),f=h.reduce((m,x)=>m+x.length,0)+Es*h.length,p=new Uint8Array(f);let g=0;for(let m=0;m<h.length;m++){const x=h[m],b=new Uint8Array(new Uint32Array([x.length]).buffer);p.set(b,g),g+=Es,p.set(x,g),g+=x.length}d(p)}));s.push(u)}else s.push(a.data());e!=null&&(l.group=e),n.push(l)}const o=yield Promise.all(s);return{data:of(o),specs:n}})}function p2(t,e){const n={};let s,r=0;for(const o of e){const i=o.name,c=o.dtype,a=o.shape,l=sizeFromShape(a);let u;if("quantization"in o){const d=o.quantization;if(d.dtype==="uint8"||d.dtype==="uint16"){if(!("min"in d&&"scale"in d))throw new Error(`Weight ${o.name} with quantization ${d.dtype} doesn't have corresponding metadata min and scale.`)}else if(d.dtype==="float16"){if(c!=="float32")throw new Error(`Weight ${o.name} is quantized with ${d.dtype} which only supports weights of type float32 not ${c}.`)}else throw new Error(`Weight ${o.name} has unknown quantization dtype ${d.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);const h=DTYPE_VALUE_SIZE_MAP[d.dtype],f=t.slice(r,r+l*h),p=d.dtype==="uint8"?new Uint8Array(f):new Uint16Array(f);if(c==="float32")if(d.dtype==="uint8"||d.dtype==="uint16"){u=new Float32Array(p.length);for(let g=0;g<p.length;g++){const m=p[g];u[g]=m*d.scale+d.min}}else if(d.dtype==="float16")s===void 0&&(s=pf()),u=s(p);else throw new Error(`Unsupported quantization type ${d.dtype} for weight type float32.`);else if(c==="int32"){if(d.dtype!=="uint8"&&d.dtype!=="uint16")throw new Error(`Unsupported quantization type ${d.dtype} for weight type int32.`);u=new Int32Array(p.length);for(let g=0;g<p.length;g++){const m=p[g];u[g]=Math.round(m*d.scale+d.min)}}else throw new Error(`Unsupported dtype in weight '${i}': ${c}`);r+=l*h}else if(c==="string"){const d=sizeFromShape(o.shape);u=[];for(let h=0;h<d;h++){const f=new Uint32Array(t.slice(r,r+Es))[0];r+=Es;const p=new Uint8Array(t.slice(r,r+f));u.push(p),r+=f}}else{const d=DTYPE_VALUE_SIZE_MAP[c],h=t.slice(r,r+l*d);if(c==="float32")u=new Float32Array(h);else if(c==="int32")u=new Int32Array(h);else if(c==="bool")u=new Uint8Array(h);else if(c==="complex64"){u=new Float32Array(h);const f=new Float32Array(u.length/2),p=new Float32Array(u.length/2);for(let x=0;x<f.length;x++)f[x]=u[x*2],p[x]=u[x*2+1];const g=tensor(f,a,"float32"),m=tensor(p,a,"float32");n[i]=complex(g,m),g.dispose(),m.dispose()}else throw new Error(`Unsupported dtype in weight '${i}': ${c}`);r+=l*d}c!=="complex64"&&(n[i]=tensor(u,a,c))}return n}function of(t){if(t===null)throw new Error(`Invalid input value: ${JSON.stringify(t)}`);let e=0;const n=[];t.forEach(o=>{if(e+=o.byteLength,n.push(o.byteLength===o.buffer.byteLength?o:new o.constructor(o)),!(o instanceof Float32Array||o instanceof Int32Array||o instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${o.constructor.name}`)});const s=new Uint8Array(e);let r=0;return n.forEach(o=>{s.set(new Uint8Array(o.buffer),r),r+=o.byteLength}),s.buffer}const Kr=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function ba(t){return Kr?Buffer.byteLength(t):new Blob([t]).size}function af(t){if(Kr)return Buffer.from(t).toString("base64");const e=new Uint8Array(t);let n="";for(let s=0,r=e.length;s<r;s++)n+=String.fromCharCode(e[s]);return btoa(n)}function cf(t){if(Kr){const s=Buffer.from(t,"base64");return s.buffer.slice(s.byteOffset,s.byteOffset+s.byteLength)}const e=atob(t),n=new Uint8Array(e.length);for(let s=0;s<e.length;++s)n.set([e.charCodeAt(s)],s);return n.buffer}function lf(t){if(t.length===1)return t[0];let e=0;t.forEach(r=>{e+=r.byteLength});const n=new Uint8Array(e);let s=0;return t.forEach(r=>{n.set(new Uint8Array(r),s),s+=r.byteLength}),n.buffer}function g2(t){const e="/";for(t=t.trim();t.endsWith(e);)t=t.slice(0,t.length-1);const n=t.split(e);return n[n.length-1]}function wa(t,e){const n={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:e};return t.signature!=null&&(n.signature=t.signature),t.userDefinedMetadata!=null&&(n.userDefinedMetadata=t.userDefinedMetadata),t.modelInitializer!=null&&(n.modelInitializer=t.modelInitializer),t.trainingConfig!=null&&(n.trainingConfig=t.trainingConfig),n}function uf(t,e){return qr(this,null,function*(){const n={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy};if(t.trainingConfig!=null&&(n.trainingConfig=t.trainingConfig),t.weightsManifest!=null){const[s,r]=yield e(t.weightsManifest);n.weightSpecs=s,n.weightData=r}return t.signature!=null&&(n.signature=t.signature),t.userDefinedMetadata!=null&&(n.userDefinedMetadata=t.userDefinedMetadata),t.modelInitializer!=null&&(n.modelInitializer=t.modelInitializer),n})}function ks(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:t.modelTopology==null?0:ba(JSON.stringify(t.modelTopology)),weightSpecsBytes:t.weightSpecs==null?0:ba(JSON.stringify(t.weightSpecs)),weightDataBytes:t.weightData==null?0:t.weightData.byteLength}}function df(){const t=n=>{let s=n<<13,r=0;for(;(s&8388608)===0;)r-=8388608,s<<=1;return s&=-8388609,r+=947912704,s|r},e=new Uint32Array(2048);e[0]=0;for(let n=1;n<1024;n++)e[n]=t(n);for(let n=1024;n<2048;n++)e[n]=939524096+(n-1024<<13);return e}function hf(){const t=new Uint32Array(64);t[0]=0,t[31]=1199570944,t[32]=2147483648,t[63]=3347054592;for(let e=1;e<31;e++)t[e]=e<<23;for(let e=33;e<63;e++)t[e]=2147483648+(e-32<<23);return t}function ff(){const t=new Uint32Array(64);for(let e=0;e<64;e++)t[e]=1024;return t[0]=t[32]=0,t}function pf(){const t=df(),e=hf(),n=ff();return s=>{const r=new ArrayBuffer(4*s.length),o=new Uint32Array(r);for(let i=0;i<s.length;i++){const c=s[i],a=t[n[c>>10]+(c&1023)]+e[c>>10];o[i]=a}return new Float32Array(r)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */class $e{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return $e.instance==null&&($e.instance=new $e),$e.instance}static registerSaveRouter(e){$e.getInstance().saveRouters.push(e)}static registerLoadRouter(e){$e.getInstance().loadRouters.push(e)}static getSaveHandlers(e){return $e.getHandlers(e,"save")}static getLoadHandlers(e,n){return $e.getHandlers(e,"load",n)}static getHandlers(e,n,s){const r=[];return(n==="load"?$e.getInstance().loadRouters:$e.getInstance().saveRouters).forEach(i=>{const c=i(e,s);c!==null&&r.push(c)}),r}}const m2=t=>$e.registerSaveRouter(t),x2=t=>$e.registerLoadRouter(t),b2=t=>$e.getSaveHandlers(t),w2=(t,e)=>$e.getLoadHandlers(t,e);var Wn=(t,e,n)=>new Promise((s,r)=>{var o=a=>{try{c(n.next(a))}catch(l){r(l)}},i=a=>{try{c(n.throw(a))}catch(l){r(l)}},c=a=>a.done?s(a.value):Promise.resolve(a.value).then(o,i);c((n=n.apply(t,e)).next())});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */const Ts="tensorflowjs",jr=1,Wt="models_store",Dt="model_info_store";function y2(){return Wn(this,null,function*(){const t=Yr();return new Promise((e,n)=>{const s=t.deleteDatabase(Ts);s.onsuccess=()=>e(),s.onerror=r=>n(r)})})}function Yr(){if(!S().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const t=typeof window>"u"?self:window,e=t.indexedDB||t.mozIndexedDB||t.webkitIndexedDB||t.msIndexedDB||t.shimIndexedDB;if(e==null)throw new Error("The current browser does not appear to support IndexedDB.");return e}function Qr(t){const e=t.result;e.createObjectStore(Wt,{keyPath:"modelPath"}),e.createObjectStore(Dt,{keyPath:"modelPath"})}class Gt{constructor(e){if(this.indexedDB=Yr(),e==null||!e)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=e}save(e){return Wn(this,null,function*(){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,e)})}load(){return Wn(this,null,function*(){return this.databaseAction(this.modelPath)})}databaseAction(e,n){return new Promise((s,r)=>{const o=this.indexedDB.open(Ts,jr);o.onupgradeneeded=()=>Qr(o),o.onsuccess=()=>{const i=o.result;if(n==null){const c=i.transaction(Wt,"readonly"),l=c.objectStore(Wt).get(this.modelPath);l.onsuccess=()=>{if(l.result==null)return i.close(),r(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));s(l.result.modelArtifacts)},l.onerror=u=>(i.close(),r(l.error)),c.oncomplete=()=>i.close()}else{const c=ks(n),a=i.transaction(Dt,"readwrite");let l=a.objectStore(Dt);const u=l.put({modelPath:this.modelPath,modelArtifactsInfo:c});let d;u.onsuccess=()=>{d=i.transaction(Wt,"readwrite");const f=d.objectStore(Wt).put({modelPath:this.modelPath,modelArtifacts:n,modelArtifactsInfo:c});f.onsuccess=()=>s({modelArtifactsInfo:c}),f.onerror=p=>{l=a.objectStore(Dt);const g=l.delete(this.modelPath);g.onsuccess=()=>(i.close(),r(f.error)),g.onerror=m=>(i.close(),r(f.error))}},u.onerror=h=>(i.close(),r(u.error)),a.oncomplete=()=>{d==null?i.close():d.oncomplete=()=>i.close()}}},o.onerror=i=>r(o.error)})}}Gt.URL_SCHEME="indexeddb://";const ya=t=>S().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(Gt.URL_SCHEME)?gf(t.slice(Gt.URL_SCHEME.length)):null;$e.registerSaveRouter(ya),$e.registerLoadRouter(ya);function gf(t){return new Gt(t)}function mf(t){return t.startsWith(Gt.URL_SCHEME)?t.slice(Gt.URL_SCHEME.length):t}class xf{constructor(){this.indexedDB=Yr()}listModels(){return Wn(this,null,function*(){return new Promise((e,n)=>{const s=this.indexedDB.open(Ts,jr);s.onupgradeneeded=()=>Qr(s),s.onsuccess=()=>{const r=s.result,o=r.transaction(Dt,"readonly"),c=o.objectStore(Dt).getAll();c.onsuccess=()=>{const a={};for(const l of c.result)a[l.modelPath]=l.modelArtifactsInfo;e(a)},c.onerror=a=>(r.close(),n(c.error)),o.oncomplete=()=>r.close()},s.onerror=r=>n(s.error)})})}removeModel(e){return Wn(this,null,function*(){return e=mf(e),new Promise((n,s)=>{const r=this.indexedDB.open(Ts,jr);r.onupgradeneeded=()=>Qr(r),r.onsuccess=()=>{const o=r.result,i=o.transaction(Dt,"readwrite"),c=i.objectStore(Dt),a=c.get(e);let l;a.onsuccess=()=>{if(a.result==null)return o.close(),s(new Error(`Cannot find model with path '${e}' in IndexedDB.`));{const u=c.delete(e),d=()=>{l=o.transaction(Wt,"readwrite");const f=l.objectStore(Wt).delete(e);f.onsuccess=()=>n(a.result.modelArtifactsInfo),f.onerror=p=>s(a.error)};u.onsuccess=d,u.onerror=h=>(d(),o.close(),s(a.error))}},a.onerror=u=>(o.close(),s(a.error)),i.oncomplete=()=>{l==null?o.close():l.oncomplete=()=>o.close()}},r.onerror=o=>s(r.error)})})}}var Rs=(t,e,n)=>new Promise((s,r)=>{var o=a=>{try{c(n.next(a))}catch(l){r(l)}},i=a=>{try{c(n.throw(a))}catch(l){r(l)}},c=a=>a.done?s(a.value):Promise.resolve(a.value).then(o,i);c((n=n.apply(t,e)).next())});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */const wt="/",zt="tensorflowjs_models",Ca="info",bf="model_topology",wf="weight_specs",yf="weight_data",Cf="model_metadata";function C2(){if(!env().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("purgeLocalStorageModels() cannot proceed because local storage is unavailable in the current environment.");const t=window.localStorage,e=[];for(let n=0;n<t.length;++n){const s=t.key(n),r=zt+wt;if(s.startsWith(r)&&s.length>r.length){t.removeItem(s);const o=Ia(s);e.indexOf(o)===-1&&e.push(o)}}return e}function va(t){return{info:[zt,t,Ca].join(wt),topology:[zt,t,bf].join(wt),weightSpecs:[zt,t,wf].join(wt),weightData:[zt,t,yf].join(wt),modelMetadata:[zt,t,Cf].join(wt)}}function $a(t){for(const e of Object.values(t))window.localStorage.removeItem(e)}function Ia(t){const e=t.split(wt);if(e.length<3)throw new Error(`Invalid key format: ${t}`);return e.slice(1,e.length-1).join(wt)}function vf(t){return t.startsWith(Ht.URL_SCHEME)?t.slice(Ht.URL_SCHEME.length):t}class Ht{constructor(e){if(!S().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,e==null||!e)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=e,this.keys=va(this.modelPath)}save(e){return Rs(this,null,function*(){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const n=JSON.stringify(e.modelTopology),s=JSON.stringify(e.weightSpecs),r=ks(e);try{this.LS.setItem(this.keys.info,JSON.stringify(r)),this.LS.setItem(this.keys.topology,n),this.LS.setItem(this.keys.weightSpecs,s),this.LS.setItem(this.keys.weightData,af(e.weightData));const o={format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,signature:e.signature!=null?e.signature:void 0,userDefinedMetadata:e.userDefinedMetadata!=null?e.userDefinedMetadata:void 0,modelInitializer:e.modelInitializer!=null?e.modelInitializer:void 0,trainingConfig:e.trainingConfig!=null?e.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(o)),{modelArtifactsInfo:r}}catch{throw $a(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${r.modelTopologyBytes}, weightSpecsBytes=${r.weightSpecsBytes}, weightDataBytes=${r.weightDataBytes}.`)}}})}load(){return Rs(this,null,function*(){const e=JSON.parse(this.LS.getItem(this.keys.info));if(e==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(e.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const n={},s=JSON.parse(this.LS.getItem(this.keys.topology));if(s==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);n.modelTopology=s;const r=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(r==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);n.weightSpecs=r;const o=this.LS.getItem(this.keys.modelMetadata);if(o!=null){const c=JSON.parse(o);n.format=c.format,n.generatedBy=c.generatedBy,n.convertedBy=c.convertedBy,c.signature!=null&&(n.signature=c.signature),c.userDefinedMetadata!=null&&(n.userDefinedMetadata=c.userDefinedMetadata),c.modelInitializer!=null&&(n.modelInitializer=c.modelInitializer),c.trainingConfig!=null&&(n.trainingConfig=c.trainingConfig)}const i=this.LS.getItem(this.keys.weightData);if(i==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return n.weightData=cf(i),n})}}Ht.URL_SCHEME="localstorage://";const Sa=t=>S().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(Ht.URL_SCHEME)?$f(t.slice(Ht.URL_SCHEME.length)):null;$e.registerSaveRouter(Sa),$e.registerLoadRouter(Sa);function $f(t){return new Ht(t)}class If{constructor(){$(S().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),$(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}listModels(){return Rs(this,null,function*(){const e={},n=zt+wt,s=wt+Ca;for(let r=0;r<this.LS.length;++r){const o=this.LS.key(r);if(o.startsWith(n)&&o.endsWith(s)){const i=Ia(o);e[i]=JSON.parse(this.LS.getItem(o))}}return e})}removeModel(e){return Rs(this,null,function*(){e=vf(e);const n=va(e);if(this.LS.getItem(n.info)==null)throw new Error(`Cannot find model at path '${e}'`);const s=JSON.parse(this.LS.getItem(n.info));return $a(n),s})}}var Gn=(t,e,n)=>new Promise((s,r)=>{var o=a=>{try{c(n.next(a))}catch(l){r(l)}},i=a=>{try{c(n.throw(a))}catch(l){r(l)}},c=a=>a.done?s(a.value):Promise.resolve(a.value).then(o,i);c((n=n.apply(t,e)).next())});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */const an="://";class qe{constructor(){this.managers={}}static getInstance(){return qe.instance==null&&(qe.instance=new qe),qe.instance}static registerManager(e,n){$(e!=null,()=>"scheme must not be undefined or null."),e.endsWith(an)&&(e=e.slice(0,e.indexOf(an))),$(e.length>0,()=>"scheme must not be an empty string.");const s=qe.getInstance();$(s.managers[e]==null,()=>`A model store manager is already registered for scheme '${e}'.`),s.managers[e]=n}static getManager(e){const n=this.getInstance().managers[e];if(n==null)throw new Error(`Cannot find model manager for scheme '${e}'`);return n}static getSchemes(){return Object.keys(this.getInstance().managers)}}function Ns(t){if(t.indexOf(an)===-1)throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${qe.getSchemes().join(",")}`);return{scheme:t.split(an)[0],path:t.split(an)[1]}}function Ea(t,e,n=!1){return Gn(this,null,function*(){assert(t!==e,()=>`Old path and new path are the same: '${t}'`);const s=IORouterRegistry.getLoadHandlers(t);assert(s.length>0,()=>`Copying failed because no load handler is found for source URL ${t}.`),assert(s.length<2,()=>`Copying failed because more than one (${s.length}) load handlers for source URL ${t}.`);const r=s[0],o=IORouterRegistry.getSaveHandlers(e);assert(o.length>0,()=>`Copying failed because no save handler is found for destination URL ${e}.`),assert(o.length<2,()=>`Copying failed because more than one (${s.length}) save handlers for destination URL ${e}.`);const i=o[0],c=Ns(t).scheme,a=Ns(t).path,l=c===Ns(t).scheme,u=yield r.load();n&&l&&(yield qe.getManager(c).removeModel(a));const d=yield i.save(u);return n&&!l&&(yield qe.getManager(c).removeModel(a)),d.modelArtifactsInfo})}function v2(){return Gn(this,null,function*(){const t=qe.getSchemes(),e={};for(const n of t){const s=yield qe.getManager(n).listModels();for(const r in s){const o=n+an+r;e[o]=s[r]}}return e})}function $2(t){return Gn(this,null,function*(){const e=Ns(t);return qe.getManager(e.scheme).removeModel(e.path)})}function I2(t,e){return Gn(this,null,function*(){return Ea(t,e,!1)})}function S2(t,e){return Gn(this,null,function*(){return Ea(t,e,!0)})}/**
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
 */class Sf{fetch(e,n){return fetch(e,n)}now(){return performance.now()}encode(e,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${n}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(e)}decode(e,n){return new TextDecoder(n).decode(e)}}if(S().get("IS_BROWSER")){S().setPlatform("browser",new Sf);try{qe.registerManager(Ht.URL_SCHEME,new If)}catch{}try{qe.registerManager(Gt.URL_SCHEME,new xf)}catch{}}/**
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
 */const Ef={importFetch:()=>B(613)};let cn;function E2(){cn=null}function k2(t){cn=t}function T2(){return cn}class kf{constructor(){this.util=B(4240),this.textEncoder=new this.util.TextEncoder}fetch(e,n){return S().global.fetch!=null?S().global.fetch(e,n):(cn==null&&(cn=Ef.importFetch()),cn(e,n))}now(){const e=process.hrtime();return e[0]*1e3+e[1]/1e6}encode(e,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${n}`);return this.textEncoder.encode(e)}decode(e,n){return e.length===0?"":new this.util.TextDecoder(n).decode(e)}}S().get("IS_NODE")&&S().setPlatform("node",new kf);/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
 */function Oe(t,e="float32",n){return e=e||"float32",ei(t),new Br(t,e,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function As(t,e){let n=t;if(We(t))return e==="string"?[]:[t.length];if(!Array.isArray(t))return[];const s=[];for(;Array.isArray(n)||We(n)&&e!=="string";)s.push(n.length),n=n[0];return Array.isArray(t)&&S().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&ka(t,s,[]),s}function ka(t,e,n){if(n=n||[],!Array.isArray(t)&&!We(t)){$(e.length===0,()=>`Element arr[${n.join("][")}] is a primitive, but should be an array/TypedArray of ${e[0]} elements`);return}$(e.length>0,()=>`Element arr[${n.join("][")}] should be a primitive, but is an array of ${t.length} elements`),$(t.length===e[0],()=>`Element arr[${n.join("][")}] should have ${e[0]} elements, but has ${t.length} elements`);const s=e.slice(1);for(let r=0;r<t.length;++r)ka(t[r],s,n.concat(r))}function Ta(t,e,n,s){if(t!=="string_or_numeric"){if(t==null)throw new Error("Expected dtype cannot be null.");if(t!=="numeric"&&t!==e||t==="numeric"&&e==="string")throw new Error(`Argument '${n}' passed to '${s}' must be ${t} tensor, but got ${e} tensor`)}}function I(t,e,n,s="numeric"){if(t instanceof rt)return Ta(s,t.dtype,e,n),t;let r=os(t);if(r!=="string"&&["bool","int32","float32"].indexOf(s)>=0&&(r=s),Ta(s,r,e,n),t==null||!We(t)&&!Array.isArray(t)&&typeof t!="number"&&typeof t!="boolean"&&typeof t!="string"){const a=t==null?"null":t.constructor.name;throw new Error(`Argument '${e}' passed to '${n}' must be a Tensor or TensorLike, but got '${a}'`)}const o=As(t,r);!We(t)&&!Array.isArray(t)&&(t=[t]);const c=r!=="string"?vs(t,r):ke(t,[],!0);return A.makeTensor(c,o,r)}function Ra(t,e,n,s="numeric"){if(!Array.isArray(t))throw new Error(`Argument ${e} passed to ${n} must be a \`Tensor[]\` or \`TensorLike[]\``);return t.map((o,i)=>I(o,`${e}[${i}]`,n,s))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */const Tf="__op";function N(t){const e=Object.keys(t);if(e.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${e.length} keys.`);let n=e[0];const s=t[n];n.endsWith("_")&&(n=n.substring(0,n.length-1)),n=n+Tf;const r=(...o)=>{A.startScope(n);try{const i=s(...o);return ti(i)&&console.error("Cannot return a Promise inside of tidy."),A.endScope(i),i}catch(i){throw A.endScope(null),i}};return Object.defineProperty(r,"name",{value:n,configurable:!0}),r}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
 */function Rf(t,e){const n=I(t,"x","cast");if(!Te(e))throw new Error(`Failed to cast to unknown dtype ${e}`);if(e==="string"&&n.dtype!=="string"||e!=="string"&&n.dtype==="string")throw new Error("Only strings can be casted to strings");const s={x:n},r={dtype:e};return A.runKernel(is,s,r)}const yt=N({cast_:Rf});/**
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
 */function Nf(t){const n={x:I(t,"x","clone","string_or_numeric")};return A.runKernel(us,n)}const ln=N({clone_:Nf});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
 */function Af(t,e=!1){console.log(t.toString(e))}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
 */ga(),Qh({buffer:Oe,cast:yt,clone:ln,print:Af});var Na=(t,e,n)=>new Promise((s,r)=>{var o=a=>{try{c(n.next(a))}catch(l){r(l)}},i=a=>{try{c(n.throw(a))}catch(l){r(l)}},c=a=>a.done?s(a.value):Promise.resolve(a.value).then(o,i);c((n=n.apply(t,e)).next())});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */const _f="model",Df=".json",Ff=".weights.bin";function Aa(t){return new Promise(e=>setTimeout(e)).then(t)}class Xt{constructor(e){if(!S().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");e.startsWith(Xt.URL_SCHEME)&&(e=e.slice(Xt.URL_SCHEME.length)),(e==null||e.length===0)&&(e=_f),this.modelJsonFileName=e+Df,this.weightDataFileName=e+Ff}save(e){return Na(this,null,function*(){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");const n=window.URL.createObjectURL(new Blob([e.weightData],{type:"application/octet-stream"}));if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const s=[{paths:["./"+this.weightDataFileName],weights:e.weightSpecs}],r=wa(e,s),o=window.URL.createObjectURL(new Blob([JSON.stringify(r)],{type:"application/json"})),i=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(i.download=this.modelJsonFileName,i.href=o,yield Aa(()=>i.dispatchEvent(new MouseEvent("click"))),e.weightData!=null){const c=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;c.download=this.weightDataFileName,c.href=n,yield Aa(()=>c.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:ks(e)}}})}}Xt.URL_SCHEME="downloads://";class Pf{constructor(e){if(e==null||e.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${e}`);this.jsonFile=e[0],this.weightsFiles=e.slice(1)}load(){return Na(this,null,function*(){return new Promise((e,n)=>{const s=new FileReader;s.onload=r=>{const o=JSON.parse(r.target.result),i=o.modelTopology;if(i==null){n(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));return}if(o.weightsManifest==null){n(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));return}if(this.weightsFiles.length===0){e({modelTopology:i});return}const a=getModelArtifactsForJSON(o,l=>this.loadWeights(l));e(a)},s.onerror=r=>n(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),s.readAsText(this.jsonFile)})})}loadWeights(e){const n=[],s=[];for(const i of e)n.push(...i.weights),s.push(...i.paths);const r=this.checkManifestAndWeightFiles(e),o=s.map(i=>this.loadWeightsFile(i,r[i]));return Promise.all(o).then(i=>[n,concatenateArrayBuffers(i)])}loadWeightsFile(e,n){return new Promise((s,r)=>{const o=new FileReader;o.onload=i=>{const c=i.target.result;s(c)},o.onerror=i=>r(`Failed to weights data from file of path '${e}'.`),o.readAsArrayBuffer(n)})}checkManifestAndWeightFiles(e){const n=[],s=this.weightsFiles.map(o=>basename(o.name)),r={};for(const o of e)o.paths.forEach(i=>{const c=basename(i);if(n.indexOf(c)!==-1)throw new Error(`Duplicate file basename found in weights manifest: '${c}'`);if(n.push(c),s.indexOf(c)===-1)throw new Error(`Weight file with basename '${c}' is not provided.`);r[i]=this.weightsFiles[s.indexOf(c)]});if(n.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${n.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return r}}const Of=t=>S().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(Xt.URL_SCHEME)?Lf(t.slice(Xt.URL_SCHEME.length)):null;$e.registerSaveRouter(Of);function Lf(t="model"){return new Xt(t)}function N2(t){return new Pf(t)}/**
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
 */function _a(t,e,n,s){i(t),n=n??0,s=s??1,c(n,s);let r=0;const o=a=>(a.then(l=>{const u=n+ ++r/t.length*(s-n);return e(u),l}),a);function i(a){$(a!=null&&Array.isArray(a)&&a.length>0,()=>"promises must be a none empty array")}function c(a,l){$(a>=0&&a<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${a}`),$(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${l}`),$(l>=a,()=>`startFraction must be no more than endFraction, but got startFraction ${a} and endFraction ${l}`)}return Promise.all(t.map(o))}var Zr=(t,e,n)=>new Promise((s,r)=>{var o=a=>{try{c(n.next(a))}catch(l){r(l)}},i=a=>{try{c(n.throw(a))}catch(l){r(l)}},c=a=>a.done?s(a.value):Promise.resolve(a.value).then(o,i);c((n=n.apply(t,e)).next())});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Da(t,e){return Zr(this,null,function*(){e==null&&(e={});const n=e.fetchFunc==null?S().platform.fetch:e.fetchFunc,s=t.map(d=>n(d,e.requestInit,{isBinary:!0})),r=0,o=.5,c=(e.onProgress==null?yield Promise.all(s):yield _a(s,e.onProgress,r,o)).map(d=>d.arrayBuffer()),a=.5,l=1;return e.onProgress==null?yield Promise.all(c):yield _a(c,e.onProgress,a,l)})}function A2(t,e="",n,s){return Zr(this,null,function*(){return Bf(i=>Da(i,{requestInit:s}))(t,e,n)})}function Bf(t){return(e,n="",s)=>Zr(this,null,function*(){const r=e.map(()=>!1),o={},i=s!=null?s.map(()=>!1):[],c=[];if(e.forEach((f,p)=>{let g=0;f.weights.forEach(m=>{const x="quantization"in m?m.quantization.dtype:m.dtype,b=DTYPE_VALUE_SIZE_MAP[x]*util.sizeFromShape(m.shape),y=()=>{r[p]=!0,o[p]==null&&(o[p]=[]),o[p].push({manifestEntry:m,groupOffset:g,sizeBytes:b})};s!=null?s.forEach((C,v)=>{C===m.name&&(y(),i[v]=!0)}):y(),c.push(m.name),g+=b})}),!i.every(f=>f)){const f=s.filter((p,g)=>!i[g]);throw new Error(`Could not find weights in manifest with names: ${f.join(", ")}. 
Manifest JSON has weights with names: ${c.join(", ")}.`)}const a=r.reduce((f,p,g)=>(p&&f.push(g),f),[]),l=[];a.forEach(f=>{e[f].paths.forEach(p=>{const g=n+(n.endsWith("/")?"":"/")+p;l.push(g)})});const u=yield t(l),d={};let h=0;return a.forEach(f=>{const p=e[f].paths.length;let g=0;for(let C=0;C<p;C++)g+=u[h+C].byteLength;const m=new ArrayBuffer(g),x=new Uint8Array(m);let b=0;for(let C=0;C<p;C++){const v=new Uint8Array(u[h+C]);x.set(v,b),b+=v.byteLength}o[f].forEach(C=>{const v=m.slice(C.groupOffset,C.groupOffset+C.sizeBytes),R=decodeWeights(v,[C.manifestEntry]);for(const T in R)d[T]=R[T]}),h+=p}),d})}var Jr=(t,e,n)=>new Promise((s,r)=>{var o=a=>{try{c(n.next(a))}catch(l){r(l)}},i=a=>{try{c(n.throw(a))}catch(l){r(l)}},c=a=>a.done?s(a.value):Promise.resolve(a.value).then(o,i);c((n=n.apply(t,e)).next())});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */const Mf="application/octet-stream",Vf="application/json";class eo{constructor(e,n){if(this.DEFAULT_METHOD="POST",n==null&&(n={}),this.weightPathPrefix=n.weightPathPrefix,this.onProgress=n.onProgress,this.weightUrlConverter=n.weightUrlConverter,n.fetchFunc!=null?($(typeof n.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=n.fetchFunc):this.fetch=S().platform.fetch,$(e!=null&&e.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(e)&&$(e.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${e.length}).`),this.path=e,n.requestInit!=null&&n.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=n.requestInit||{}}save(e){return Jr(this,null,function*(){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const n=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);n.body=new FormData;const s=[{paths:["./model.weights.bin"],weights:e.weightSpecs}],r=wa(e,s);n.body.append("model.json",new Blob([JSON.stringify(r)],{type:Vf}),"model.json"),e.weightData!=null&&n.body.append("model.weights.bin",new Blob([e.weightData],{type:Mf}),"model.weights.bin");const o=yield this.fetch(this.path,n);if(o.ok)return{modelArtifactsInfo:ks(e),responses:[o]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${o.status}.`)})}load(){return Jr(this,null,function*(){const e=yield this.fetch(this.path,this.requestInit);if(!e.ok)throw new Error(`Request to ${this.path} failed with status code ${e.status}. Please verify this URL points to the model JSON of the model to load.`);let n;try{n=yield e.json()}catch{let i=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?i+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":i+=" Please make sure the server is serving valid JSON for this request.",new Error(i)}const s=n.modelTopology,r=n.weightsManifest;if(s==null&&r==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return uf(n,o=>this.loadWeights(o))})}loadWeights(e){return Jr(this,null,function*(){const n=Array.isArray(this.path)?this.path[1]:this.path,[s,r]=Uf(n),o=this.weightPathPrefix||s,i=[];for(const u of e)i.push(...u.weights);const c=[],a=[];for(const u of e)for(const d of u.paths)this.weightUrlConverter!=null?a.push(this.weightUrlConverter(d)):c.push(o+d+r);this.weightUrlConverter&&c.push(...yield Promise.all(a));const l=yield Da(c,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress});return[i,lf(l)]})}}eo.URL_SCHEME_REGEX=/^https?:\/\//;function Uf(t){const e=t.lastIndexOf("/"),n=t.lastIndexOf("?"),s=t.substring(0,e),r=n>e?t.substring(n):"";return[s+"/",r]}function Fa(t){return t.match(eo.URL_SCHEME_REGEX)!=null}const Pa=(t,e)=>{if(typeof fetch>"u"&&(e==null||e.fetchFunc==null))return null;{let n=!0;if(Array.isArray(t)?n=t.every(s=>Fa(s)):n=Fa(t),n)return Oa(t,e)}return null};$e.registerSaveRouter(Pa),$e.registerLoadRouter(Pa);function Oa(t,e){return new eo(t,e)}function _2(t,e){return Oa(t,e)}var La=(t,e,n)=>new Promise((s,r)=>{var o=a=>{try{c(n.next(a))}catch(l){r(l)}},i=a=>{try{c(n.throw(a))}catch(l){r(l)}},c=a=>a.done?s(a.value):Promise.resolve(a.value).then(o,i);c((n=n.apply(t,e)).next())});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */class to{constructor(e){this.modelArtifacts=e}load(){return La(this,null,function*(){return this.modelArtifacts})}}class Wf{constructor(e){this.saveHandler=e}save(e){return La(this,null,function*(){return this.saveHandler(e)})}}function D2(t,e,n,s){return arguments.length===1?t.modelTopology!=null||t.weightSpecs!=null?new to(t):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new to({modelTopology:t})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new to({modelTopology:t,weightSpecs:e,weightData:n,trainingConfig:s}))}function F2(t){return new Wf(t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 *//**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */function un(t,e){const n=t.length,s=[];for(let r=0;r<n;r++){const o=n-1-r,i=t[o]||1;(e[e.length-1-r]||1)>1&&i===1&&s.unshift(o)}return s}function Ba(t,e){const n=[];for(let s=0;s<e.length;s++){const r=t[t.length-s-1],o=e.length-s-1,i=e[o];(r==null||r===1&&i>1)&&n.unshift(o)}return n}function we(t,e){const n=[],s=Math.max(t.length,e.length);for(let r=0;r<s;r++){let o=t[t.length-r-1];o==null&&(o=1);let i=e[e.length-r-1];if(i==null&&(i=1),o===1)n.unshift(i);else if(i===1)n.unshift(o);else if(o!==i){const c=`Operands could not be broadcast together with shapes ${t} and ${e}.`;throw Error(c)}else n.unshift(o)}return n}/**
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
 */const no=-2,Gf=-1;function so(t,e,n){const s=t.shape.length;$(s===e.length,()=>`Error in slice${s}D: Length of begin ${e} must match the rank of the array (${s}).`),$(s===n.length,()=>`Error in slice${s}D: Length of size ${n} must match the rank of the array (${s}).`);for(let r=0;r<s;++r)$(e[r]+n[r]<=t.shape[r],()=>`Error in slice${s}D: begin[${r}] + size[${r}] (${e[r]+n[r]}) would overflow input.shape[${r}] (${t.shape[r]})`)}function zf(t){const e=[];let n=0;for(;t>0;)t&1&&e.push(n),t/=2,n++;return e}function Ma(t,e,n){const s=[];for(let r=0;r<t.length;r++)s[r]=Math.ceil((e[r]-t[r])/n[r]);return s}function Va(t,e,n,s){const r=[...t];for(let o=r.length;o<s.length;o++)r.push(1);for(let o=0;o<n;o++)o===0?r[e]=1:(r.splice(e,0,1),r.pop());return r}function Ua(t,e,n){return n<=t?n:n-(e-1)}function Wa(t,e){const n=[];for(let s=0;s<t;s++)n.push(e+s);return n}function Hf(t,e,n,s,r,o,i,c,a){const l=t.length;let u=new Array(l),d=new Array(l),h=new Array(l);if(e.length&&n>0){const f=e[0],p=n+1;u=Ga(i,f,p,s,t),d=za(c,f,p,r,t),h=Va(o,f,p,t)}else for(let f=0;f<l;f++)u[f]=Xa(i,s,o,t,f,a),d[f]=qa(c,r,o,t,f,a),h[f]=Ha(o,f,a);return{begin:u,end:d,strides:h}}function Ga(t,e,n,s,r){const o=[...r],i=Wa(n,e);for(let c=0;c<o.length;c++)if(i.indexOf(c)>-1)o[c]=0;else{const a=Ua(e,n,c);let l=s[a];t&1<<a&&(l=0),o[c]=l}return o}function za(t,e,n,s,r){const o=[...r],i=Wa(n,e);for(let c=0;c<o.length;c++)if(i.indexOf(c)>-1)o[c]=Number.MAX_SAFE_INTEGER;else{const a=Ua(e,n,c);let l=s[a];t&1<<a&&(l=Number.MAX_SAFE_INTEGER),o[c]=l}for(let c=0;c<o.length;c++){const a=r[c];o[c]<0&&(o[c]+=a),o[c]=F(0,o[c],r[c])}return o}function Ha(t,e,n){let s=t[e];return(n&1<<e||s==null)&&(s=1),s}function Xa(t,e,n,s,r,o){let i=e[r];const c=n[r]||1;(t&1<<r||o&1<<r||i==null)&&(c>0?i=Number.MIN_SAFE_INTEGER:i=Number.MAX_SAFE_INTEGER);const a=s[r];return i<0&&(i+=a),i=F(0,i,a-1),i}function qa(t,e,n,s,r,o){let i=e[r];const c=n[r]||1;(t&1<<r||o&1<<r||i==null)&&(c>0?i=Number.MAX_SAFE_INTEGER:i=Number.MIN_SAFE_INTEGER);const a=s[r];return i<0&&(i+=a),c>0?i=F(0,i,a):i=F(-1,i,a-1),i}function ro(t,e,n){let s=n.length;for(let r=0;r<n.length;r++)if(n[r]>1){s=r;break}for(let r=s+1;r<n.length;r++)if(e[r]>0||n[r]!==t[r])return!1;return!0}function oo(t,e){let n=t.length>0?t[t.length-1]:1;for(let s=0;s<t.length-1;s++)n+=t[s]*e[s];return n}function io(t,e,n){let s;const r=t.shape.length;typeof e=="number"?s=[e,...new Array(r-1).fill(0)]:e.length<r?s=e.concat(new Array(r-e.length).fill(0)):s=e.slice(),s.forEach(i=>{$(i!==-1,()=>"slice() does not support negative begin indexing.")});let o;return n==null?o=new Array(r).fill(-1):typeof n=="number"?o=[n,...new Array(r-1).fill(-1)]:n.length<r?o=n.concat(new Array(r-n.length).fill(-1)):o=n,o=o.map((i,c)=>i>=0?i:($(i===-1,()=>`Negative size values should be exactly -1 but got ${i} for the slice() size at index ${c}.`),t.shape[c]-s[c])),[s,o]}function Ka(t,e,n,s,r,o,i,c,a){let l;if(s==null?(l=new Array(e.length),l.fill(1)):l=s,i!=null&&(i&i-1)!==0)throw new Error("Multiple ellipses in slice is not allowed.");let u=!1;const d={dims:l.length,numAddAxisAfterEllipsis:0,begin:e.slice(),end:n.slice(),strides:l.slice(),beginMask:r,endMask:o,ellipsisMask:i,newAxisMask:c,shrinkAxisMask:a};for(let y=0;y<d.dims;y++)u&&(1<<y&c)!==0&&d.numAddAxisAfterEllipsis++,1<<y&i&&(u=!0);u||(d.ellipsisMask|=1<<d.dims,d.dims++);const h={dims:t.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};Xf(d,h);let f=!0,p=!0,g=!0;const m=[],x=[];for(let y=0;y<t.length;++y){if(h.strides[y]===0)throw Error(`strides[${y}] must be non-zero`);const C=!!(h.shrinkAxisMask&1<<y),v=t[y];if(v===-1){m.push(C?1:-1);continue}const R=[h.beginMask&1<<y,h.endMask&1<<y],T=[h.strides[y]>0?0:-1,h.strides[y]>0?v:v-1];if(C&&h.strides[y]<=0)throw Error("only stride 1 allowed on non-range indexing.");g=g&&h.strides[y]===1;const _=!!(h.beginMask&1<<y&&h.endMask&1<<y);if(h.beginValid&&h.endValid){if(C){const de=h.begin[y]<0?v+h.begin[y]:h.begin[y];if(h.begin[y]=de,h.end[y]=h.begin[y]+1,de<0||de>=v)throw Error(`slice index ${h.begin[y]} of dimension ${y} out of bounds.`)}else h.begin[y]=ja(h.begin[y],0,h.strides[y],v,R,T),h.end[y]=ja(h.end[y],1,h.strides[y],v,R,T);const ne=h.strides[y]===1&&h.begin[y]===0&&h.end[y]===v;f=f&&ne,p=p&&(y===0&&h.strides[y]===1||ne)}else f=f&&h.strides[y]===1&&_,p=p&&(y===0&&h.strides[y]===1||_);let M,q=!1;if(h.beginValid&&h.endValid?(M=h.end[y]-h.begin[y],q=!0):C?(M=1,q=!0):_&&v>=0&&(h.strides[y]<0?M=-v:M=v,q=!0),q){let ne;M===0||M<0!=h.strides[y]<0?ne=0:ne=Math.trunc(M/h.strides[y])+(M%h.strides[y]!==0?1:0),m.push(ne)}else m.push(-1)}for(let y=0;y<h.finalShapeGatherIndices.length;++y){const C=h.finalShapeGatherIndices[y];C>=0?x.push(m[C]):C===no&&x.push(1)}return{finalShapeSparse:x.filter((y,C)=>h.finalShapeGatherIndices[C]!==no),finalShape:x,isIdentity:f,sliceDim0:p,isSimpleSlice:g,begin:h.begin,end:h.end,strides:h.strides}}function Xf(t,e){e.beginMask=0,e.endMask=0,e.shrinkAxisMask=0;let n=0;e.beginValid=t.begin!=null,e.endValid=t.end!=null,e.begin=new Array(e.dims),e.end=new Array(e.dims),e.strides=new Array(e.dims),e.finalShapeGatherIndices=[],e.finalShapeGatherIndicesSparse=[],e.inputShapeGatherIndicesSparse=new Array(e.dims);for(let s=0;s<t.dims;s++)if(1<<s&t.ellipsisMask){const r=Math.min(e.dims-(t.dims-s)+1+t.numAddAxisAfterEllipsis,e.dims);for(;n<r;n++)e.begin[n]=0,e.end[n]=0,e.strides[n]=1,e.beginMask|=1<<n,e.endMask|=1<<n,e.finalShapeGatherIndices.push(n),e.finalShapeGatherIndicesSparse.push(-1),e.inputShapeGatherIndicesSparse[n]=s}else if(1<<s&t.newAxisMask)e.finalShapeGatherIndices.push(no),e.finalShapeGatherIndicesSparse.push(-1);else{if(n===e.begin.length)throw Error(`Index out of range using input dim ${n}; input has only ${e.dims} dims, ${e.begin.length}.`);t.begin!=null&&(e.begin[n]=t.begin[s]),t.end!=null&&(e.end[n]=t.end[s]),e.strides[n]=t.strides[s],t.beginMask&1<<s&&(e.beginMask|=1<<n),t.endMask&1<<s&&(e.endMask|=1<<n),t.shrinkAxisMask&1<<s?(e.finalShapeGatherIndices.push(Gf),e.finalShapeGatherIndicesSparse.push(-1),e.shrinkAxisMask|=1<<n):(e.finalShapeGatherIndices.push(n),e.finalShapeGatherIndicesSparse.push(s)),e.inputShapeGatherIndicesSparse[n]=s,n++}}function ja(t,e,n,s,r,o){if(r[e])return n>0?o[e]:o[e+1&1];{const i=t<0?s+t:t;return i<o[0]?o[0]:i>o[1]?o[1]:i}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function _s(t,e,n,s){if(s==null&&(s=os(t)),s==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!We(t)&&!Array.isArray(t)&&typeof t!="number"&&typeof t!="boolean"&&typeof t!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(e!=null){ei(e);const r=D(e),o=D(n);$(r===o,()=>`Based on the provided shape, [${e}], the tensor should have ${r} values but has ${o}`);for(let i=0;i<n.length;++i){const c=n[i],a=i===n.length-1?c!==D(e.slice(i)):!0;$(n[i]===e[i]||!a,()=>`Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${e}). `)}}return!We(t)&&!Array.isArray(t)&&(t=[t]),e=e||n,t=s!=="string"?vs(t,s):ke(t,[],!0),A.makeTensor(t,e,s)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Ie(t,e){if((We(t)&&e!=="string"||Array.isArray(t))&&e!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(e==="string"&&We(t)&&!(t instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return _s(t,[],[],e)}/**
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
 */function qf(t,e){const n=I(t,"real","complex"),s=I(e,"imag","complex");te(n.shape,s.shape,`real and imag shapes, ${n.shape} and ${s.shape}, must match in call to tf.complex().`);const r={real:n,imag:s};return A.runKernel(vr,r)}const zn=N({complex_:qf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function dn(t,e="float32"){if(e==="complex64"){const s=dn(t,"float32"),r=dn(t,"float32");return zn(s,r)}const n=St(D(t),e);return A.makeTensor(n,t,e)}/**
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
 */function Kf(t,e=0){$(t.length>=1,()=>"Pass at least one tensor to concat");const n=Ra(t,"tensors","concat","string_or_numeric");if(n[0].dtype==="complex64"&&n.forEach(o=>{if(o.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${o.dtype}. `)}),n.length===1)return ln(n[0]);const s=n,r={axis:e};return A.runKernel(ci,s,r)}const Ft=N({concat_:Kf});/**
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
 */function jf(t){const n={input:I(t,"input","imag")};return A.runKernel(bi,n)}const Ya=N({imag_:jf});/**
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
 */function Yf(t){const n={input:I(t,"input","real")};return A.runKernel(Rr,n)}const ao=N({real_:Yf});/**
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
 */function Qf(t,e){const s={x:I(t,"x","reshape","string_or_numeric")},r={shape:e};return A.runKernel(Fi,s,r)}const ge=N({reshape_:Qf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Zf(t,e,n){const s=I(t,"x","slice","string_or_numeric");if(s.rank===0)throw new Error("Slicing scalar is not possible");const r={x:s},o={begin:e,size:n};return A.runKernel(Ar,r,o)}const Le=N({slice_:Zf});/**
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
 */function Jf(t,e,n=0){const r={x:I(t,"x","split")},o={numOrSizeSplits:e,axis:n};return A.runKernel(Wi,r,o)}const Ds=N({split_:Jf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function ep(t){const n={x:I(t,"x","zerosLike")};return A.runKernel(Zi,n)}const tp=N({zerosLike_:ep});/**
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
 */function np(t){$(t.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${t.dtype}.`);const e={input:t};return A.runKernel(fi,e)}const Qa=N({fft_:np});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function sp(t,e){$(t.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${t.dtype}`);let n=t.shape[t.shape.length-1];const s=t.size/n;let r;if(e!=null&&e<n){const p=t.shape.map(m=>0),g=t.shape.map(m=>m);g[t.shape.length-1]=e,r=Le(t,p,g),n=e}else if(e!=null&&e>n){const p=t.shape.map(g=>g);p[t.shape.length-1]=e-n,r=Ft([t,dn(p)],t.shape.length-1),n=e}else r=t;const o=tp(r),i=ge(zn(r,o),[s,n]),c=Qa(i),a=Math.floor(n/2)+1,l=ao(c),u=Ya(c),d=Ds(l,[a,n-a],l.shape.length-1),h=Ds(u,[a,n-a],u.shape.length-1),f=r.shape.slice();return f[r.shape.length-1]=a,ge(zn(d[0],h[0]),f)}const Za=N({rfft_:sp});/**
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
 */function rp(t){$(t.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${t.dtype}.`);const e={input:t};return A.runKernel(xi,e)}const co=N({ifft_:rp});/**
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
 */function op(t,e){let n=I(t,"a","mul"),s=I(e,"b","mul");[n,s]=Qe(n,s);const r={a:n,b:s};return A.runKernel(ps,r)}const ue=N({mul_:op});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function ip(t,e){const s={x:I(t,"x","reverse")},r={dims:e};return A.runKernel(Bi,s,r)}const Ja=N({reverse_:ip});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function ap(t){const e=t.shape[t.shape.length-1],n=t.size/e;let s;if(e<=2){const r=ge(t,[n,e]);s=co(r)}else{const r=[n,2*(e-1)],o=ge(ao(t),[n,e]),i=ge(Ya(t),[n,e]),c=Ja(Le(o,[0,1],[n,e-2]),1),a=ue(Ja(Le(i,[0,1],[n,e-2]),1),Ie(-1)),l=Ft([o,c],1),u=Ft([i,a],1),d=ge(zn(l,u),[r[0],r[1]]);s=co(d)}if(s=ao(s),t.rank===3&&t.shape[0]!==0){const r=s,o=t.shape[0];s=ge(s,[o,s.shape[0]/o,s.shape[1]]),r.dispose()}return s}const cp=N({irfft_:ap});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Ct(t,e){Ue(t);const n=As(t,e);if(n.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return _s(t,null,n,e)}/**
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
 */function lp(t){return Math.floor(Math.pow(2,Math.ceil(Math.log(t)/Math.log(2))))}function ec(t,e,n){const s=1-t%2,r=new Float32Array(t);for(let o=0;o<t;++o){const i=2*Math.PI*o/(t+s-1);r[o]=e-n*Math.cos(i)}return Ct(r,"float32")}/**
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
 */function up(t){return ec(t,.54,.46)}const dp=N({hammingWindow_:up});/**
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
 */function hp(t){return ec(t,.5,.5)}const tc=N({hannWindow_:hp});/**
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
 */function nc(t,e,n){const s={shape:t,value:e,dtype:n};return A.runKernel(pi,{},s)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Fs(t,e,n){if(Ue(t),e!=null&&e.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const s=As(t,n);if(s.length!==2&&s.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(s.length===1&&e==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return _s(t,e,s,n)}/**
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
 */function fp(t,e,n,s=!1,r=0){let o=0;const i=[];for(;o+e<=t.size;)i.push(Le(t,o,e)),o+=n;if(s)for(;o<t.size;){const c=o+e-t.size,a=Ft([Le(t,o,e-c),nc([c],r)]);i.push(a),o+=n}return i.length===0?Fs([],[0,e]):ge(Ft(i),[i.length,e])}const sc=N({frame_:fp});/**
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
 */function pp(t,e,n,s,r=tc){s==null&&(s=lp(e));const o=sc(t,e,n),i=ue(o,r(e));return Za(i,s)}const gp=N({stft_:pp});/**
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
 */function mp(t,e,n,s,r="bilinear",o=0){const i=I(t,"image","cropAndResize"),c=I(e,"boxes","cropAndResize","float32"),a=I(n,"boxInd","cropAndResize","int32"),l=c.shape[0];$(i.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${i.rank}.`),$(c.rank===2&&c.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${l},4] but had shape ${c.shape}.`),$(a.rank===1&&a.shape[0]===l,()=>`Error in cropAndResize: boxInd must be have size [${l}] but had shape ${c.shape}.`),$(s.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${s.length}.`),$(s[0]>=1&&s[1]>=1,()=>`cropSize must be atleast [1,1], but was ${s}`),$(r==="bilinear"||r==="nearest",()=>`method must be bilinear or nearest, but was ${r}`);const u={image:i,boxes:c,boxInd:a},d={method:r,extrapolationValue:o,cropSize:s};return A.runKernel(li,u,d)}const xp=N({cropAndResize_:mp});/**
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
 */function bp(t){const e=I(t,"image","flipLeftRight","float32");$(e.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${e.rank}.`);const n={image:e};return A.runKernel(gi,n,{})}const wp=N({flipLeftRight_:bp});/**
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
 */function yp(t,e){const n=I(t,"x","tile","string_or_numeric");$(n.rank===e.length,()=>`Error in transpose: rank of input ${n.rank} must match length of reps ${e}.`);const s={x:n},r={reps:e};return A.runKernel(_r,s,r)}const Ps=N({tile_:yp});/**
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
 */function Cp(t){const e=I(t,"image","grayscaleToRGB"),n=e.rank-1,s=e.shape[n];$(e.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${e.rank}.`),$(s===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${s}.`);const r=new Array(e.rank);return r.fill(1,0,n),r[n]=3,Ps(e,r)}const vp=N({grayscaleToRGB_:Cp});/**
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
 */function $p(t,e,n=0,s=.5){const r=I(t,"image","rotateWithOffset","float32");$(r.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${r.rank}.`);const o={image:r},i={radians:e,fillValue:n,center:s};return A.runKernel(ea,o,i)}const Ip=N({rotateWithOffset_:$p});/**
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
 */function hn(t,e,n,s,r,o){s==null&&(s=.5),r==null&&(r=Number.NEGATIVE_INFINITY),o==null&&(o=0);const i=t.shape[0];return n=Math.min(n,i),$(0<=s&&s<=1,()=>`iouThreshold must be in [0, 1], but was '${s}'`),$(t.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${t.rank}'`),$(t.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${t.shape[1]}`),$(e.rank===1,()=>"scores must be a 1D tensor"),$(e.shape[0]===i,()=>`scores has incompatible shape with boxes. Expected ${i}, but was ${e.shape[0]}`),$(0<=o&&o<=1,()=>`softNmsSigma must be in [0, 1], but was '${o}'`),{maxOutputSize:n,iouThreshold:s,scoreThreshold:r,softNmsSigma:o}}/**
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
 */function Sp(t,e,n,s=.5,r=Number.NEGATIVE_INFINITY){const o=I(t,"boxes","nonMaxSuppression","float32"),i=I(e,"scores","nonMaxSuppression","float32"),c=hn(o,i,n,s,r);n=c.maxOutputSize,s=c.iouThreshold,r=c.scoreThreshold;const a={maxOutputSize:n,iouThreshold:s,scoreThreshold:r};return A.runKernel(Si,{boxes:o,scores:i},a)}const Ep=N({nonMaxSuppression_:Sp});/**
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
 */function kp(t,e,n){const s=Tp(t,e,n),r=s<0?-(s+1):s;t.splice(r,0,e)}function Tp(t,e,n){return Np(t,e,n||Rp)}function Rp(t,e){return t>e?1:t<e?-1:0}function Np(t,e,n){let s=0,r=t.length,o=0,i=!1;for(;s<r;){o=s+(r-s>>>1);const c=n(e,t[o]);c>0?s=o+1:(r=o,i=!c)}return i?s:-s-1}/**
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
 */function rc(t,e,n,s,r){return lo(t,e,n,s,r,0)}function oc(t,e,n,s,r,o){return lo(t,e,n,s,r,0,!1,o,!0)}function ic(t,e,n,s,r,o){return lo(t,e,n,s,r,o,!0)}function lo(t,e,n,s,r,o,i=!1,c=!1,a=!1){const l=[];for(let m=0;m<e.length;m++)e[m]>r&&l.push({score:e[m],boxIndex:m,suppressBeginIndex:0});l.sort(ac);const u=o>0?-.5/o:0,d=[],h=[];for(;d.length<n&&l.length>0;){const m=l.pop(),{score:x,boxIndex:b,suppressBeginIndex:y}=m;if(x<r)break;let C=!1;for(let v=d.length-1;v>=y;--v){const R=Ap(t,b,d[v]);if(R>=s){C=!0;break}if(m.score=m.score*_p(s,u,R),m.score<=r)break}m.suppressBeginIndex=d.length,C||(m.score===x?(d.push(b),h.push(m.score)):m.score>r&&kp(l,m,ac))}const f=d.length,p=n-f;c&&p>0&&(d.push(...new Array(p).fill(0)),h.push(...new Array(p).fill(0)));const g={selectedIndices:d};return i&&(g.selectedScores=h),a&&(g.validOutputs=f),g}function Ap(t,e,n){const s=t.subarray(e*4,e*4+4),r=t.subarray(n*4,n*4+4),o=Math.min(s[0],s[2]),i=Math.min(s[1],s[3]),c=Math.max(s[0],s[2]),a=Math.max(s[1],s[3]),l=Math.min(r[0],r[2]),u=Math.min(r[1],r[3]),d=Math.max(r[0],r[2]),h=Math.max(r[1],r[3]),f=(c-o)*(a-i),p=(d-l)*(h-u);if(f<=0||p<=0)return 0;const g=Math.max(o,l),m=Math.max(i,u),x=Math.min(c,d),b=Math.min(a,h),y=Math.max(x-g,0)*Math.max(b-m,0);return y/(f+p-y)}function _p(t,e,n){const s=Math.exp(e*n*n);return n<=t?s:0}function ac(t,e){return t.score-e.score||t.score===e.score&&e.boxIndex-t.boxIndex}var Dp=(t,e,n)=>new Promise((s,r)=>{var o=a=>{try{c(n.next(a))}catch(l){r(l)}},i=a=>{try{c(n.throw(a))}catch(l){r(l)}},c=a=>a.done?s(a.value):Promise.resolve(a.value).then(o,i);c((n=n.apply(t,e)).next())});/**
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
 */function Fp(t,e,n){return Dp(this,arguments,function*(s,r,o,i=.5,c=Number.NEGATIVE_INFINITY){const a=I(s,"boxes","nonMaxSuppressionAsync"),l=I(r,"scores","nonMaxSuppressionAsync"),u=hn(a,l,o,i,c);o=u.maxOutputSize,i=u.iouThreshold,c=u.scoreThreshold;const d=yield Promise.all([a.data(),l.data()]),h=d[0],f=d[1],{selectedIndices:p}=rc(h,f,o,i,c);return a!==s&&a.dispose(),l!==r&&l.dispose(),Ct(p,"int32")})}const Pp=Fp;/**
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
 */function Op(t,e,n,s=.5,r=Number.NEGATIVE_INFINITY,o=0){const i=I(t,"boxes","nonMaxSuppression"),c=I(e,"scores","nonMaxSuppression"),a=hn(i,c,n,s,r,o);n=a.maxOutputSize,s=a.iouThreshold,r=a.scoreThreshold,o=a.softNmsSigma;const l={boxes:i,scores:c},u={maxOutputSize:n,iouThreshold:s,scoreThreshold:r,softNmsSigma:o},d=A.runKernel(ki,l,u);return{selectedIndices:d[0],selectedScores:d[1]}}const Lp=N({nonMaxSuppressionWithScore_:Op});var Bp=(t,e,n)=>new Promise((s,r)=>{var o=a=>{try{c(n.next(a))}catch(l){r(l)}},i=a=>{try{c(n.throw(a))}catch(l){r(l)}},c=a=>a.done?s(a.value):Promise.resolve(a.value).then(o,i);c((n=n.apply(t,e)).next())});/**
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
 */function Mp(t,e,n){return Bp(this,arguments,function*(s,r,o,i=.5,c=Number.NEGATIVE_INFINITY,a=0){const l=I(s,"boxes","nonMaxSuppressionAsync"),u=I(r,"scores","nonMaxSuppressionAsync"),d=hn(l,u,o,i,c,a);o=d.maxOutputSize,i=d.iouThreshold,c=d.scoreThreshold,a=d.softNmsSigma;const h=yield Promise.all([l.data(),u.data()]),f=h[0],p=h[1],{selectedIndices:g,selectedScores:m}=ic(f,p,o,i,c,a);return l!==s&&l.dispose(),u!==r&&u.dispose(),{selectedIndices:Ct(g,"int32"),selectedScores:Ct(m)}})}const Vp=Mp;/**
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
 */function Up(t,e,n,s=.5,r=Number.NEGATIVE_INFINITY,o=!1){const i=I(t,"boxes","nonMaxSuppression"),c=I(e,"scores","nonMaxSuppression"),a=hn(i,c,n,s,r,null),l=a.maxOutputSize,u=a.iouThreshold,d=a.scoreThreshold,h={boxes:i,scores:c},f={maxOutputSize:l,iouThreshold:u,scoreThreshold:d,padToMaxOutputSize:o},p=A.runKernel(Ei,h,f);return{selectedIndices:p[0],validOutputs:p[1]}}const Wp=N({nonMaxSuppressionPadded_:Up});var Gp=(t,e,n)=>new Promise((s,r)=>{var o=a=>{try{c(n.next(a))}catch(l){r(l)}},i=a=>{try{c(n.throw(a))}catch(l){r(l)}},c=a=>a.done?s(a.value):Promise.resolve(a.value).then(o,i);c((n=n.apply(t,e)).next())});/**
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
 */function zp(t,e,n){return Gp(this,arguments,function*(s,r,o,i=.5,c=Number.NEGATIVE_INFINITY,a=!1){const l=I(s,"boxes","nonMaxSuppressionAsync"),u=I(r,"scores","nonMaxSuppressionAsync"),d=hn(l,u,o,i,c,null),h=d.maxOutputSize,f=d.iouThreshold,p=d.scoreThreshold,[g,m]=yield Promise.all([l.data(),u.data()]),{selectedIndices:x,validOutputs:b}=oc(g,m,h,f,p,a);return l!==s&&l.dispose(),u!==r&&u.dispose(),{selectedIndices:Ct(x,"int32"),validOutputs:Ie(b,"int32")}})}const Hp=zp;/**
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
 */function Xp(t,e,n=!1,s=!1){const r=I(t,"images","resizeBilinear");$(r.rank===3||r.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${r.rank}.`),$(e.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${e}.`),$(s===!1||n===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let o=r,i=!1;r.rank===3&&(i=!0,o=ge(r,[1,r.shape[0],r.shape[1],r.shape[2]]));const[]=e,c={images:o},a={alignCorners:n,halfPixelCenters:s,size:e},l=A.runKernel(Oi,c,a);return i?ge(l,[l.shape[1],l.shape[2],l.shape[3]]):l}const qp=N({resizeBilinear_:Xp});/**
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
 */function Kp(t,e,n=!1,s=!1){const r=I(t,"images","resizeNearestNeighbor");$(r.rank===3||r.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${r.rank}.`),$(e.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${e}.`),$(r.dtype==="float32"||r.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),$(s===!1||n===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let o=r,i=!1;r.rank===3&&(i=!0,o=ge(r,[1,r.shape[0],r.shape[1],r.shape[2]]));const[]=e,c={images:o},a={alignCorners:n,halfPixelCenters:s,size:e},l=A.runKernel(Pi,c,a);return i?ge(l,[l.shape[1],l.shape[2],l.shape[3]]):l}const jp=N({resizeNearestNeighbor_:Kp});/**
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
 */function Yp(t,e,n){const s=I(t,"x","bincount"),r=I(e,"weights","bincount");$(s.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${s.dtype}`),$(n>=0,()=>`size must be non-negative, but got ${n}.`),$(r.size===s.size||r.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${s.shape}, weights shape: ${r.shape}.`);const o={x:s,weights:r},i={size:n};return A.runKernel(ii,o,i)}const Qp=N({bincount_:Yp});/**
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
 */function Zp(t,e){let n=I(t,"a","lessEqual","string_or_numeric"),s=I(e,"b","lessEqual","string_or_numeric");[n,s]=Qe(n,s),we(n.shape,s.shape);const r={a:n,b:s};return A.runKernel(ds,r)}const cc=N({lessEqual_:Zp});/**
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
 */function Jp(t,e){let n=I(t,"a","greater","string_or_numeric"),s=I(e,"b","greater","string_or_numeric");[n,s]=Qe(n,s),we(n.shape,s.shape);const r={a:n,b:s};return A.runKernel(cs,r)}const uo=N({greater_:Jp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function eg(t,e=null,n=!1){let s=I(t,"x","sum");s.dtype==="bool"&&(s=yt(s,"int32"));const r={x:s},o={axis:e,keepDims:n};return A.runKernel(Ui,r,o)}const Ce=N({sum_:eg});/**
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
 */function tg(t,e){let n=I(t,"a","add"),s=I(e,"b","add");[n,s]=Qe(n,s);const r={a:n,b:s};return A.runKernel(On,r)}const vt=N({add_:tg});/**
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
 */function ng(t,e){let n=I(t,"a","floorDiv"),s=I(e,"b","floorDiv");[n,s]=Qe(n,s);const r={a:n,b:s};return A.runKernel(mi,r)}const sg=N({floorDiv_:ng});/**
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
 */function rg(t,e){let n=I(t,"a","div"),s=I(e,"b","div");if([n,s]=Qe(n,s),n.dtype==="int32"&&s.dtype==="int32")return sg(n,s);const r={a:n,b:s},o={};return A.runKernel(ui,r,o)}const ot=N({div_:rg});/**
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
 */function og(t,e){let n=I(t,"a","sub"),s=I(e,"b","sub");[n,s]=Qe(n,s);const r={a:n,b:s};return A.runKernel(ws,r)}const ye=N({sub_:og});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function ig(t){const n={x:I(t,"x","round")};return A.runKernel(Mi,n)}const ag=N({round_:ig});/**
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
 */function cg(t,e){let n=I(t,"broadcastTo","x");const s=n.shape;if(e.some(l=>!(l>0)||l%1!==0))throw new Error(`broadcastTo(): Invalid broadcast shape [${e}].`);if(e.length<n.rank)throw new Error(`broadcastTo(): shape.length=${e.length} < input.rank=${n.rank}.`);if(e.length>n.rank){const l=n.shape.slice();for(;l.length<e.length;)l.unshift(1);n=ge(n,l)}const r=n.shape,o=Array.from(e);for(let l=e.length-1;l>=0;l--)if(r[l]===e[l])o[l]=1;else if(n.shape[l]!==1)throw new Error(`broadcastTo(): [${s}] cannot be broadcast to [${e}].`);if(o.map((l,u)=>l>1?u:-1).filter(l=>l>=0).length===0)return ln(n);const c={x:n},a={reps:o};return A.runKernel(_r,c,a)}const ho=N({broadcastTo_:cg});/**
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
 */function lg(t,e,n){const s=I(e,"a","where"),r=I(n,"b","where"),o=I(t,"condition","where","bool"),i=we(we(o.shape,s.shape),r.shape),c=ho(o,i),a=ho(s,i),l=ho(r,i),u={condition:c,t:a,e:l};return A.runKernel(Vi,u)}const Os=N({where_:lg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Ls(t,e,n=1,s="float32"){if(n===0)throw new Error("Cannot have a step of zero");const r={start:t,stop:e,step:n,dtype:s};return A.runKernel(_i,{},r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function ug(t,e,n){const s=As(t,n);return _s(t,e,s,n)}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dg(t,e="binary",n=!1,s=.5){const r=I(t,"image","threshold"),o=.2989,i=.587,c=.114,a=r.shape[0]*r.shape[1];let l=ue(Ct([s]),255),u,d,h,f;if($(r.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${r.rank}.`),$(r.shape[2]===3||r.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${r.shape[2]}.`),$(r.dtype==="int32"||r.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${r.dtype}.`),$(e==="otsu"||e==="binary",()=>`Method must be binary or otsu, but was ${e}`),r.shape[2]===3){[u,d,h]=Ds(r,[1,1,1],-1);const m=ue(u,o),x=ue(d,i),b=ue(h,c);f=vt(vt(m,x),b)}else f=t;if(e==="otsu"){const m=Qp(yt(ag(f),"int32"),ug([]),256);l=hg(m,a)}const p=n?cc(f,l):uo(f,l);return yt(ue(p,255),"int32")}function hg(t,e){let n=Ct([-1]),s=Ct([0]),r=Ct([0]),o,i,c,a,l,u;for(let d=0;d<t.size-1;d++){o=Le(t,0,d+1),i=Le(t,d+1),l=ot(Ce(o),e),u=ot(Ce(i),e);const h=Ce(ue(o,Ls(0,o.size)));c=ot(h,Ce(o));const f=nc(i.shape,o.size),p=vt(Ls(0,i.size),f),g=ue(i,p);a=ot(Ce(g),Ce(i));const m=ye(c,a),x=ye(c,a),b=ue(l,u);r=ue(ue(b,m),x);const y=uo(r,s);s=Os(y,r,s),n=Os(y,Ct([d]),n)}return n}const fg=N({threshold_:dg});/**
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
 */function pg(t,e,n="nearest",s="constant",r=0,o){const i=I(t,"image","transform","float32"),c=I(e,"transforms","transform","float32");$(i.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${i.rank}.`),$(c.rank===2&&(c.shape[0]===i.shape[0]||c.shape[0]===1)&&c.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),$(o==null||o.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${o}.`);const a={image:i,transforms:c},l={interpolation:n,fillMode:s,fillValue:r,outputShape:o};return A.runKernel(Yi,a,l)}const gg=N({transform_:pg});/**
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
 */function mg(t,e){let n=I(t,"a","greaterEqual","string_or_numeric"),s=I(e,"b","greaterEqual","string_or_numeric");[n,s]=Qe(n,s),we(n.shape,s.shape);const r={a:n,b:s};return A.runKernel(ls,r)}const xg=N({greaterEqual_:mg});/**
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
 */function bg(t,e){const n=I(t,"a","logicalAnd","bool"),s=I(e,"b","logicalAnd","bool");we(n.shape,s.shape);const r={a:n,b:s};return A.runKernel(Ci,r)}const wg=N({logicalAnd_:bg});/**
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
 */function yg(t,e=0){const n=Ra(t,"tensors","stack","string_or_numeric");$(n.length>=1,()=>"Pass at least one tensor to tf.stack"),n.length>0&&$(e<=n[0].rank,()=>"Axis must be <= rank of the tensor");const s=n,r={axis:e};return A.runKernel(Ti,s,r)}const Bs=N({stack_:yg});/**
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
 */function Cg(t,e=0){const n=I(t,"x","unstack","string_or_numeric");$(e>=-n.shape.length&&e<n.shape.length,()=>`Axis = ${e} is not in [-${n.shape.length}, ${n.shape.length})`);const s={value:n},r={axis:e};return A.runKernel(Qi,s,r)}const lc=N({unstack_:Cg});/**
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
 */function vg(t,e,n){$(e%1===0,()=>`bandPart(): numLower must be an integer, got ${e}.`),$(n%1===0,()=>`bandPart(): numUpper must be an integer, got ${n}.`);const s=I(t,"a","bandPart");$(s.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${s.rank}.`);const r=s.shape,[o,i]=s.shape.slice(-2);if(!(e<=o))throw new Error(`bandPart(): numLower (${e}) must not be greater than the number of rows (${o}).`);if(!(n<=i))throw new Error(`bandPart(): numUpper (${n}) must not be greater than the number of columns (${i}).`);e<0&&(e=o),n<0&&(n=i);const c=ge(Ls(0,o,1,"int32"),[-1,1]),a=Ls(0,i,1,"int32"),l=ye(c,a),u=wg(cc(l,Ie(+e,"int32")),xg(l,Ie(-n,"int32"))),d=dn([o,i],s.dtype);return ge(Bs(lc(ge(s,[-1,o,i])).map(h=>Os(u,h,d))),r)}const $g=N({bandPart_:vg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Ig(t){const e=I(t,"x","abs");if(e.dtype==="complex64"){const n={x:e};return A.runKernel(ai,n)}else{const n={x:e};return A.runKernel(yr,n)}}const ft=N({abs_:Ig});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */function fo(t,e){for(let n=0;n<t.length;++n)if(t[t.length-n-1]!==e-1-n)return!1;return!0}function uc(t,e,n){const s=t.length+e.length,r=[];let o=0,i=0;for(let c=0;c<s;c++)n.indexOf(c)===-1?r.push(t[o++]):r.push(e[i++]);return r}function $t(t,e){const n=[],s=t.length;for(let o=0;o<s;o++)e.indexOf(o)===-1&&n.push(t[o]);const r=e.map(o=>t[o]);return[n,r]}function Ze(t,e){const n=e.map(s=>1);return uc(t,n,e)}function pt(t,e,n){$(fo(e,n),()=>`${t} supports only inner-most axes for now. Got axes ${e} and rank-${n} input.`)}function Je(t,e){if(fo(t,e))return null;const n=[];for(let s=0;s<e;++s)t.indexOf(s)===-1&&n.push(s);return t.forEach(s=>n.push(s)),n}function po(t){return t.map((e,n)=>[n,e]).sort((e,n)=>e[1]-n[1]).map(e=>e[0])}function et(t,e){const n=[];for(let s=e-t;s<e;++s)n.push(s);return n}/**
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
 */function Sg(t,e=null,n=!1){const r={x:I(t,"x","max")},o={reductionIndices:e,keepDims:n};return A.runKernel(vi,r,o)}const Ms=N({max_:Sg});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
 */function Eg(t,e=null,n=!1){const r={x:I(t,"x","min")},o={axis:e,keepDims:n};return A.runKernel(Ii,r,o)}const dc=N({min_:Eg});/**
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
 */function kg(t,e){let n=I(t,"base","pow"),s=I(e,"exp","pow");[n,s]=Qe(n,s);const r={a:n,b:s};return A.runKernel(Ri,r)}const Tg=N({pow_:kg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Rg(t){const n={x:I(t,"x","sqrt","float32")};return A.runKernel(xs,n)}const hc=N({sqrt_:Rg});/**
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
 */function Ng(t){const e=I(t,"x","square"),n={};return A.runKernel("Square",{x:e},n)}const fc=N({square_:Ng});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Ag(t,e="euclidean",n=null,s=!1){t=I(t,"x","norm");const r=pc(t,e,n);let o=r.shape;if(s){const i=re(n,t.shape);o=Ze(r.shape,i)}return ge(r,o)}function pc(t,e,n=null){if(t.rank===0)return ft(t);if(t.rank!==1&&n===null)return pc(ge(t,[-1]),e,n);if(t.rank===1||typeof n=="number"||Array.isArray(n)&&n.length===1){if(e===1)return Ce(ft(t),n);if(e===1/0)return Ms(ft(t),n);if(e===-1/0)return dc(ft(t),n);if(e==="euclidean"||e===2)return hc(Ce(Tg(ft(t),Ie(2,"int32")),n));throw new Error(`Error in norm: invalid ord value: ${e}`)}if(Array.isArray(n)&&n.length===2){if(e===1)return Ms(Ce(ft(t),n[0]),n[1]-1);if(e===1/0)return Ms(Ce(ft(t),n[1]),n[0]);if(e===-1/0)return dc(Ce(ft(t),n[1]),n[0]);if(e==="fro"||e==="euclidean")return hc(Ce(fc(t),n));throw new Error(`Error in norm: invalid ord value: ${e}`)}throw new Error(`Error in norm: invalid axis: ${n}`)}const gc=N({norm_:Ag});/**
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
 */function _g(t,e){const n=I(t,"x","squeeze");return ge(n,Ee(n.shape,e).newShape)}const Dg=N({squeeze_:_g});/**
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
 */function Fg(t){let e;if(Array.isArray(t)){e=!1,$(t!=null&&t.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const r=t[0].shape[0];for(let o=1;o<t.length;++o)$(t[o].shape[0]===r,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${t[o].shape[0]} vs. ${r})`)}else e=!0,t=Ds(t,t.shape[0],0).map(r=>Dg(r,[0]));$(t.length<=t[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${t.length}) exceeds number of dimensions (${t[0].shape[0]}).`);const n=[],s=t;for(let r=0;r<t.length;++r)n.push(A.tidy(()=>{let o=s[r];if(r>0)for(let i=0;i<r;++i){const c=ue(Ce(ue(n[i],o)),n[i]);o=ye(o,c)}return ot(o,gc(o,"euclidean"))}));return e?Bs(n,0):n}const Pg=N({gramSchmidt_:Fg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function P2(){env().set("PROD",!0)}function O2(){env().set("DEBUG",!0)}function L2(){env().set("DEPRECATION_WARNINGS_ENABLED",!1),console.warn("TensorFlow.js deprecation warnings have been disabled.")}function Og(t){S().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(t+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}Zh(Og);function B2(){ENGINE.disposeVariables()}function fn(){return A}function M2(){return ENGINE.memory()}function V2(t){return ENGINE.profile(t)}function Lg(t,e){return A.tidy(t,e)}function Bg(t){ha(t).forEach(n=>n.dispose())}function U2(t){return ENGINE.keep(t)}function W2(t){return ENGINE.time(t)}function G2(t){return ENGINE.setBackend(t)}function z2(){return ENGINE.ready()}function H2(){return ENGINE.backendName}function X2(t){ENGINE.removeBackend(t)}function q2(t){return ENGINE.findBackend(t)}function K2(t){return ENGINE.findBackendFactory(t)}function Mg(t,e,n=1){return A.registerBackend(t,e,n)}function j2(){return ENGINE.backend}function Y2(t,e){env().setPlatform(t,e)}/**
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
 */function Vg(t,e=0){const n=I(t,"x","expandDims","string_or_numeric");$(e<=n.rank,()=>"Axis must be <= rank of the tensor");const s={input:n},r={dim:e};return A.runKernel(hi,s,r)}const pn=N({expandDims_:Vg});/**
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
 */function Ug(t,e,n,s="float32"){e==null&&(e=t);const r=Oe([t,e],s),o=t<=e?t:e;for(let c=0;c<o;++c)r.set(1,c,c);const i=ge(r.toTensor(),[t,e]);if(n==null)return i;if(n.length===1)return Ps(pn(i,0),[n[0],1,1]);if(n.length===2)return Ps(pn(pn(i,0),0),[n[0],n[1],1,1]);if(n.length===3)return Ps(pn(pn(pn(i,0),0),0),[n[0],n[1],n[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${n.length}D.`)}const Wg=N({eye_:Ug});/**
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
 */function Gg(t,e,n=!1,s=!1){let r=I(t,"a","matMul"),o=I(e,"b","matMul");[r,o]=Qe(r,o);const i={a:r,b:o},c={transposeA:n,transposeB:s};return A.runKernel(oi,i,c)}const Et=N({matMul_:Gg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function zg(t){const n={x:I(t,"x","neg")};return A.runKernel(Tr,n)}const Vs=N({neg_:zg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Hg(t,e){const n=I(t,"x","transpose");if(e==null&&(e=n.shape.map((o,i)=>i).reverse()),$(n.rank===e.length,()=>`Error in transpose: rank of input ${n.rank} must match length of perm ${e}.`),e.forEach(o=>{$(o>=0&&o<n.rank,()=>`All entries in 'perm' must be between 0 and ${n.rank-1} but got ${e}`)}),n.rank<=1)return n.clone();const s={x:n},r={perm:e};return A.runKernel(Dr,s,r)}const mc=N({transpose_:Hg});/**
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
 */function Xg(t,e=!1){if($(t.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${t.rank}`),t.rank===2)return xc(t,e);{const n=t.shape.slice(0,t.shape.length-2).reduce((a,l)=>a*l),s=lc(ge(t,[n,t.shape[t.shape.length-2],t.shape[t.shape.length-1]]),0),r=[],o=[];s.forEach(a=>{const[l,u]=xc(a,e);r.push(l),o.push(u)});const i=ge(Bs(r,0),t.shape),c=ge(Bs(o,0),t.shape);return[i,c]}}function xc(t,e=!1){return A.tidy(()=>{$(t.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${t.shape.length}D Tensor.`);const n=t.shape[0],s=t.shape[1];let r=Wg(n),o=ln(t);const i=Fs([[1]],[1,1]);let c=ln(i);const a=n>=s?s:n;for(let l=0;l<a;++l){const u=o,d=c,h=r;[c,o,r]=A.tidy(()=>{const f=Le(o,[l,l],[n-l,1]),p=gc(f),g=Le(o,[l,l],[1,1]),m=Os(uo(g,0),Fs([[-1]]),Fs([[1]])),x=ye(g,ue(m,p)),b=ot(f,x);b.shape[0]===1?c=ln(i):c=Ft([i,Le(b,[1,0],[b.shape[0]-1,b.shape[1]])],0);const y=Vs(ot(Et(m,x),p)),C=Le(o,[l,0],[n-l,s]),v=ue(y,c),R=mc(c);if(l===0)o=ye(C,Et(v,Et(R,C)));else{const M=ye(C,Et(v,Et(R,C)));o=Ft([Le(o,[0,0],[l,s]),M],0)}const T=mc(v),_=Le(r,[0,l],[n,r.shape[1]-l]);if(l===0)r=ye(_,Et(Et(_,c),T));else{const M=ye(_,Et(Et(_,c),T));r=Ft([Le(r,[0,0],[n,l]),M],1)}return[c,o,r]}),Bg([u,d,h])}return!e&&n>s&&(r=Le(r,[0,0],[n,s]),o=Le(o,[0,0],[s,s])),[r,o]})}const qg=N({qr_:Xg});/**
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
 */var Ge;(function(t){t[t.NONE=0]="NONE",t[t.MEAN=1]="MEAN",t[t.SUM=2]="SUM",t[t.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(Ge||(Ge={}));/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
 */function Kg(t,e=null,n=!1){const r={x:I(t,"x","mean")},o={axis:e,keepDims:n};return A.runKernel($i,r,o)}const jg=N({mean_:Kg});/**
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
 */function Yg(t,e){let n=I(t,"a","notEqual","string_or_numeric"),s=I(e,"b","notEqual","string_or_numeric");[n,s]=Qe(n,s),we(n.shape,s.shape);const r={a:n,b:s};return A.runKernel(gs,r)}const Qg=N({notEqual_:Yg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function bc(t,e="float32"){if(e==="complex64"){const s=bc(t,"float32"),r=dn(t,"float32");return zn(s,r)}const n=Jo(D(t),e);return A.makeTensor(n,t,e)}function Zg(t,e,n=Ge.SUM_BY_NONZERO_WEIGHTS){const s=I(t,"losses","computeWeightedLoss");let r=null;e!=null&&(r=I(e,"weights","computeWeightedLoss"));const o=r==null?s:ue(s,r);if(n===Ge.NONE)return o;if(n===Ge.SUM)return Ce(o);if(n===Ge.MEAN){if(r==null)return jg(o);{const i=s.size/r.size,c=ot(Ce(o),Ce(r));return i>1?ot(c,Ie(i)):c}}if(n===Ge.SUM_BY_NONZERO_WEIGHTS){if(r==null)return ot(Ce(o),Ie(s.size));{const i=ue(r,bc(s.shape)),c=yt(Ce(Qg(i,Ie(0))),"float32");return ot(Ce(o),c)}}throw Error(`Unknown reduction: ${n}`)}const kt=N({computeWeightedLoss_:Zg});/**
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
 */function Jg(t,e,n,s=Ge.SUM_BY_NONZERO_WEIGHTS){const r=I(t,"labels","absoluteDifference"),o=I(e,"predictions","absoluteDifference");let i=null;n!=null&&(i=I(n,"weights","absoluteDifference")),te(r.shape,o.shape,"Error in absoluteDifference: ");const c=ft(ye(r,o));return kt(c,i,s)}const em=N({absoluteDifference_:Jg});function tm(t,e,n,s,r=Ge.SUM_BY_NONZERO_WEIGHTS){const o=I(t,"labels","cosineDistance"),i=I(e,"predictions","cosineDistance");let c=null;s!=null&&(c=I(s,"weights","cosineDistance")),te(o.shape,i.shape,"Error in cosineDistance: ");const a=Ie(1),l=ye(a,Ce(ue(o,i),n,!0));return kt(l,c,r)}const nm=N({cosineDistance_:tm});/**
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
 */function sm(t){const n={x:I(t,"x","relu")};return A.runKernel(Di,n)}const go=N({relu_:sm});function rm(t,e,n,s=Ge.SUM_BY_NONZERO_WEIGHTS){let r=I(t,"labels","hingeLoss");const o=I(e,"predictions","hingeLoss");let i=null;n!=null&&(i=I(n,"weights","hingeLoss")),te(r.shape,o.shape,"Error in hingeLoss: ");const c=Ie(1);r=ye(ue(Ie(2),r),c);const a=go(ye(c,ue(r,o)));return kt(a,i,s)}const om=N({hingeLoss_:rm});/**
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
 */function im(t,e){let n=I(t,"a","minimum"),s=I(e,"b","minimum");[n,s]=Qe(n,s),n.dtype==="bool"&&(n=yt(n,"int32"),s=yt(s,"int32")),we(n.shape,s.shape);const r={a:n,b:s};return A.runKernel(fs,r)}const am=N({minimum_:im});/**
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
 */function cm(t,e,n,s=1,r=Ge.SUM_BY_NONZERO_WEIGHTS){const o=I(t,"labels","huberLoss"),i=I(e,"predictions","huberLoss");let c=null;n!=null&&(c=I(n,"weights","huberLoss")),te(o.shape,i.shape,"Error in huberLoss: ");const a=Ie(s),l=ft(ye(i,o)),u=am(l,a),d=ye(l,u),h=vt(ue(Ie(.5),fc(u)),ue(a,d));return kt(h,c,r)}const lm=N({huberLoss_:cm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function um(t){const n={x:I(t,"x","log","float32")};return A.runKernel(hs,n)}const mo=N({log_:um});/**
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
 */function dm(t,e,n,s=1e-7,r=Ge.SUM_BY_NONZERO_WEIGHTS){const o=I(t,"labels","logLoss"),i=I(e,"predictions","logLoss");let c=null;n!=null&&(c=I(n,"weights","logLoss")),te(o.shape,i.shape,"Error in logLoss: ");const a=Ie(1),l=Ie(s),u=Vs(ue(o,mo(vt(i,l)))),d=ue(ye(a,o),mo(vt(ye(a,i),l))),h=ye(u,d);return kt(h,c,r)}const hm=N({logLoss_:dm});/**
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
 */function fm(t,e){let n=I(t,"a","squaredDifference"),s=I(e,"b","squaredDifference");[n,s]=Qe(n,s),we(n.shape,s.shape);const r={a:n,b:s},o={};return A.runKernel(bs,r,o)}const pm=N({squaredDifference_:fm});/**
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
 */function gm(t,e,n,s=Ge.SUM_BY_NONZERO_WEIGHTS){const r=I(t,"labels","meanSquaredError"),o=I(e,"predictions","meanSquaredError");let i=null;n!=null&&(i=I(n,"weights","meanSquaredError")),te(r.shape,o.shape,"Error in meanSquaredError: ");const c=pm(r,o);return kt(c,i,s)}const mm=N({meanSquaredError_:gm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function xm(t){const n={x:I(t,"x","exp")};return A.runKernel(as,n)}const Us=N({exp_:xm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function bm(t){const n={x:I(t,"x","log1p")};return A.runKernel(yi,n)}const wm=N({log1p_:bm});/**
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
 */function ym(t,e){const n=I(t,"labels","sigmoidCrossEntropyWithLogits"),s=I(e,"logits","sigmoidCrossEntropyWithLogits");te(n.shape,s.shape,"Error in sigmoidCrossEntropyWithLogits: ");const r=go(s),o=ue(s,n),i=wm(Us(Vs(ft(s))));return vt(ye(r,o),i)}function Cm(t,e,n,s=0,r=Ge.SUM_BY_NONZERO_WEIGHTS){let o=I(t,"multiClassLabels","sigmoidCrossEntropy");const i=I(e,"logits","sigmoidCrossEntropy");let c=null;if(n!=null&&(c=I(n,"weights","sigmoidCrossEntropy")),te(o.shape,i.shape,"Error in sigmoidCrossEntropy: "),s>0){const l=Ie(s),u=Ie(1),d=Ie(.5);o=vt(ue(o,ye(u,l)),ue(d,l))}const a=ym(o,i);return kt(a,c,r)}const vm=N({sigmoidCrossEntropy_:Cm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Q2(t){return util.assert(util.isFunction(t),()=>"The f passed in grad(f) must be a function"),(e,n)=>{const s=convertToTensor(e,"x","tf.grad","string_or_numeric"),r=n!=null?convertToTensor(n,"dy","tf.grad"):null;return ENGINE.tidy(()=>{const{value:o,grads:i}=ENGINE.gradients(()=>t(s),[s],r);return r!=null&&util.assertShapesMatch(o.shape,r.shape,"The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)"),Ws(i),i[0]})}}function Z2(t){return util.assert(util.isFunction(t),()=>"The f passed in grads(f) must be a function"),(e,n)=>{util.assert(Array.isArray(e),()=>"The args passed in grads(f)(args) must be an array of `Tensor`s or `TensorLike`s");const s=convertToTensorArray(e,"args","tf.grads","string_or_numeric"),r=n!=null?convertToTensor(n,"dy","tf.grads"):null;return ENGINE.tidy(()=>{const{value:o,grads:i}=ENGINE.gradients(()=>t(...s),s,r);return r!=null&&util.assertShapesMatch(o.shape,r.shape,"The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),Ws(i),i})}}function J2(t){return util.assert(util.isFunction(t),()=>"The f passed in valueAndGrad(f) must be a function"),(e,n)=>{util.assert(e instanceof Tensor,()=>"The x passed in valueAndGrad(f)(x) must be a tensor"),util.assert(n==null||n instanceof Tensor,()=>"The dy passed in valueAndGrad(f)(x, dy) must be a tensor");const{grads:s,value:r}=ENGINE.gradients(()=>t(e),[e],n);return Ws(s),{grad:s[0],value:r}}}function ek(t){return util.assert(util.isFunction(t),()=>"The f passed in valueAndGrads(f) must be a function"),(e,n)=>{util.assert(Array.isArray(e)&&e.every(r=>r instanceof Tensor),()=>"The args passed in valueAndGrads(f)(args) must be array of tensors"),util.assert(n==null||n instanceof Tensor,()=>"The dy passed in valueAndGrads(f)(args, dy) must be a tensor");const s=ENGINE.gradients(()=>t(...e),e,n);return n!=null&&util.assertShapesMatch(s.value.shape,n.shape,"The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),Ws(s.grads),s}}function tk(t,e){util.assert(util.isFunction(t),()=>"The f passed in variableGrads(f) must be a function"),util.assert(e==null||Array.isArray(e)&&e.every(l=>l instanceof Variable),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");const n=e!=null;if(!n){e=[];for(const l in ENGINE.registeredVariables)e.push(ENGINE.registeredVariables[l])}const s=n?e.filter(l=>!l.trainable):null,r=e.length;e=e.filter(l=>l.trainable),util.assert(e.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${r} variables is trainable.`);const o=!0,{value:i,grads:c}=ENGINE.gradients(t,e,null,o);util.assert(c.some(l=>l!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),util.assert(i.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${i.rank} tensor`);const a={};return e.forEach((l,u)=>{c[u]!=null&&(a[l.name]=c[u])}),s!=null&&s.forEach(l=>a[l.name]=null),{value:i,grads:a}}function $m(t){return A.customGrad(t)}function Ws(t){if(t.filter(n=>n==null).length>0)throw new Error(`Cannot compute gradient of y=f(x) with respect to x. Make sure that
    the f you passed encloses all operations that lead from x to y.`)}/**
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
 */function Im(t,e=null,n=!1){const s=I(t,"x","logSumExp"),r=re(e,s.shape),o=Ms(s,r,!0),i=ye(s,o),c=Us(i),a=Ce(c,r),l=mo(a),u=vt(ge(o,l.shape),l);if(n){const d=Ze(u.shape,r);return ge(u,d)}return u}const Sm=N({logSumExp_:Im});/**
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
 */function Em(t,e,n=-1){if(n===-1&&(n=e.rank-1),n!==e.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${e.rank} and dim was ${n}`);return $m((r,o,i)=>{const a=Sm(o,[n],!0),l=ye(yt(o,"float32"),a);i([r,l]);const u=Vs(ue(l,r));return{value:Ce(u,[n]),gradFunc:(f,p)=>{const[g,m]=p,x=Ze(f.shape,[n]);return[ue(ge(f,x),ye(yt(g,"float32"),Us(m))),ue(ge(f,x),ye(Us(m),yt(g,"float32")))]}}})(t,e)}function km(t,e,n,s=0,r=Ge.SUM_BY_NONZERO_WEIGHTS){let o=I(t,"onehotLabels","softmaxCrossEntropy");const i=I(e,"logits","softmaxCrossEntropy");let c=null;if(n!=null&&(c=I(n,"weights","softmaxCrossEntropy")),te(o.shape,i.shape,"Error in softmaxCrossEntropy: "),s>0){const l=Ie(s),u=Ie(1),d=Ie(o.shape[1]);o=vt(ue(o,ye(u,l)),ot(l,d))}const a=Em(o,i);return kt(a,c,r)}const Tm=N({softmaxCrossEntropy_:km});/**
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
 */function Rm(t,e,n,s){const r=I(t,"indices","sparseFillEmptyRows","int32"),o=I(e,"values","sparseFillEmptyRows"),i=I(n,"denseShape","sparseFillEmptyRows","int32"),c=I(s,"defaultValue","sparseFillEmptyRows",o.dtype);if(r.rank!==2)throw new Error(`Indices should be Tensor2D but received shape
        ${r.shape}`);if(o.rank!==1)throw new Error(`Values should be Tensor1D but received shape ${o.shape}`);if(i.rank!==1)throw new Error(`Dense shape should be Tensor1D but received shape ${i.shape}`);if(c.rank!==0)throw new Error(`Default value should be a scalar but received shape ${c.shape}`);const a={indices:r,values:o,denseShape:i,defaultValue:c},l=A.runKernel(Gi,a);return{outputIndices:l[0],outputValues:l[1],emptyRowIndicator:l[2],reverseIndexMap:l[3]}}const Nm=N({sparseFillEmptyRows_:Rm});/**
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
 */function Am(t,e,n){const s=I(t,"inputIndices","sparseReshape","int32"),r=I(e,"inputShape","sparseReshape","int32"),o=I(n,"newShape","sparseReshape","int32");if(s.rank!==2)throw new Error(`Input indices should be Tensor2D but received shape
        ${s.shape}`);if(r.rank!==1)throw new Error(`Input shape should be Tensor1D but received shape ${r.shape}`);if(o.rank!==1)throw new Error(`New shape should be Tensor1D but received shape ${o.shape}`);const i={inputIndices:s,inputShape:r,newShape:o},c=A.runKernel(zi,i);return{outputIndices:c[0],outputShape:c[1]}}const _m=N({sparseReshape_:Am});/**
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
 */function Dm(t,e,n){const s=I(t,"data","sparseSegmentMean"),r=I(e,"indices","sparseSegmentMean","int32"),o=I(n,"segmentIds","sparseSegmentMean","int32");if(s.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(r.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
          ${r.shape}`);if(o.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
          ${o.shape}`);const i={data:s,indices:r,segmentIds:o};return A.runKernel(Hi,i)}const Fm=N({sparseSegmentMean_:Dm});/**
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
 */function Pm(t,e,n){const s=I(t,"data","sparseSegmentSum"),r=I(e,"indices","sparseSegmentSum","int32"),o=I(n,"segmentIds","sparseSegmentSum","int32");if(s.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(r.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
         ${r.shape}`);if(o.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
         ${o.shape}`);const i={data:s,indices:r,segmentIds:o};return A.runKernel(Xi,i)}const Om=N({sparseSegmentSum_:Pm});/**
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
 */function Lm(t,e,n,s,r,o,i,c){const a=I(t,"data","stringNGrams","string");if(a.dtype!=="string")throw new Error("Data must be of datatype string");if(a.shape.length!==1)throw new Error(`Data must be a vector, saw: ${a.shape}`);const l=I(e,"dataSplits","stringNGrams");if(l.dtype!=="int32")throw new Error("Data splits must be of datatype int32");const u={separator:n,nGramWidths:s,leftPad:r,rightPad:o,padWidth:i,preserveShortSequences:c},d={data:a,dataSplits:l},h=A.runKernel(qi,d,u);return{nGrams:h[0],nGramsSplits:h[1]}}const Bm=N({stringNGrams_:Lm});/**
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
 */function Mm(t,e,n=!0){const s=I(t,"input","stringSplit","string"),r=I(e,"delimiter","stringSplit","string");if(s.rank!==1)throw new Error(`Input should be Tensor1D but received shape ${s.shape}`);if(r.rank!==0)throw new Error(`Delimiter should be a scalar but received shape ${r.shape}`);const o={skipEmpty:n},i={input:s,delimiter:r},c=A.runKernel(Ki,i,o);return{indices:c[0],values:c[1],shape:c[2]}}const Vm=N({stringSplit_:Mm});/**
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
 */function Um(t,e){const n=I(t,"input","stringToHashBucketFast","string"),s={numBuckets:e};if(e<=0)throw new Error("Number of buckets must be at least 1");const r={input:n};return A.runKernel(ji,r,s)}const Wm=N({stringToHashBucketFast_:Um});/**
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
 */const nk={fft:Qa,ifft:co,rfft:Za,irfft:cp},sk={hammingWindow:dp,hannWindow:tc,frame:sc,stft:gp},rk={flipLeftRight:wp,grayscaleToRGB:vp,resizeNearestNeighbor:jp,resizeBilinear:qp,rotateWithOffset:Ip,cropAndResize:xp,nonMaxSuppression:Ep,nonMaxSuppressionAsync:Pp,nonMaxSuppressionWithScore:Lp,nonMaxSuppressionWithScoreAsync:Vp,nonMaxSuppressionPadded:Wp,nonMaxSuppressionPaddedAsync:Hp,threshold:fg,transform:gg},ok={bandPart:$g,gramSchmidt:Pg,qr:qg},ik={absoluteDifference:em,computeWeightedLoss:kt,cosineDistance:nm,hingeLoss:om,huberLoss:lm,logLoss:hm,meanSquaredError:mm,sigmoidCrossEntropy:vm,softmaxCrossEntropy:Tm},ak={sparseFillEmptyRows:Nm,sparseReshape:_m,sparseSegmentMean:Fm,sparseSegmentSum:Om},ck={stringNGrams:Bm,stringSplit:Vm,stringToHashBucketFast:Wm};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */function wc(t,e){const n=t[0].length;t.forEach((r,o)=>{$(r.length===n,()=>`Error in concat${n}D: rank of tensors[${o}] must be the same as the rank of the rest (${n})`)}),$(e>=0&&e<n,()=>`Error in concat${n}D: axis must be between 0 and ${n-1}.`);const s=t[0];t.forEach((r,o)=>{for(let i=0;i<n;i++)$(i===e||r[i]===s[i],()=>`Error in concat${n}D: Shape of tensors[${o}] (${r}) does not match the shape of the rest (${s}) along the non-concatenated axis ${o}.`)})}function qt(t,e){const n=t[0].slice();for(let s=1;s<t.length;s++)n[e]+=t[s][e];return n}/**
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
 */function yc(t,e,n,s,r="NHWC",o){const i=t[3],c=[...e,i],a=bn(r);return gt(t,c,n,o,s,null,null,a)}function gn(t,e,n,s,r,o,i="channelsLast"){const[c,a]=Gs(e);let l;if(i==="channelsLast")l=[c,a,t[3],t[3]];else if(i==="channelsFirst")l=[c,a,t[1],t[1]];else throw new Error(`Unknown dataFormat ${i}`);return gt(t,l,n,s,r,o,!1,i)}function Hn(t,e,n,s,r,o,i="NDHWC"){const[c,a,l]=bo(e);let u,d;if(i==="NDHWC")d="channelsLast",u=[c,a,l,t[4],t[4]];else if(i==="NCDHW")d="channelsFirst",u=[c,a,l,t[1],t[1]];else throw new Error(`Unknown dataFormat ${i}`);return Xn(t,u,n,s,r,!1,d,o)}function gt(t,e,n,s,r,o,i=!1,c="channelsLast"){let[a,l,u,d]=[-1,-1,-1,-1];if(c==="channelsLast")[a,l,u,d]=t;else if(c==="channelsFirst")[a,d,l,u]=t;else throw new Error(`Unknown dataFormat ${c}`);const[h,f,,p]=e,[g,m]=Gs(n),[x,b]=Gs(s),y=mn(h,x),C=mn(f,b),{padInfo:v,outHeight:R,outWidth:T}=Hm(r,l,u,g,m,y,C,o,c),_=i?p*d:p;let M;return c==="channelsFirst"?M=[a,_,R,T]:c==="channelsLast"&&(M=[a,R,T,_]),{batchSize:a,dataFormat:c,inHeight:l,inWidth:u,inChannels:d,outHeight:R,outWidth:T,outChannels:_,padInfo:v,strideHeight:g,strideWidth:m,filterHeight:h,filterWidth:f,effectiveFilterHeight:y,effectiveFilterWidth:C,dilationHeight:x,dilationWidth:b,inShape:t,outShape:M,filterShape:e}}function Xn(t,e,n,s,r,o=!1,i="channelsLast",c){let[a,l,u,d,h]=[-1,-1,-1,-1,-1];if(i==="channelsLast")[a,l,u,d,h]=t;else if(i==="channelsFirst")[a,h,l,u,d]=t;else throw new Error(`Unknown dataFormat ${i}`);const[f,p,g,,m]=e,[x,b,y]=bo(n),[C,v,R]=bo(s),T=mn(f,C),_=mn(p,v),M=mn(g,R),{padInfo:q,outDepth:ne,outHeight:de,outWidth:He}=Xm(r,l,u,d,x,b,y,T,_,M,c),De=o?m*h:m;let je;return i==="channelsFirst"?je=[a,De,ne,de,He]:i==="channelsLast"&&(je=[a,ne,de,He,De]),{batchSize:a,dataFormat:i,inDepth:l,inHeight:u,inWidth:d,inChannels:h,outDepth:ne,outHeight:de,outWidth:He,outChannels:De,padInfo:q,strideDepth:x,strideHeight:b,strideWidth:y,filterDepth:f,filterHeight:p,filterWidth:g,effectiveFilterDepth:T,effectiveFilterHeight:_,effectiveFilterWidth:M,dilationDepth:C,dilationHeight:v,dilationWidth:R,inShape:t,outShape:je,filterShape:e}}function Gm(t,e,n,s,r){s==null&&(s=xo(t,e,n));const o=t[0],i=t[1],c=Kt((o-e+2*s)/n+1,r),a=Kt((i-e+2*s)/n+1,r);return[c,a]}function zm(t,e,n,s,r,o){r==null&&(r=xo(t,e,s));const i=t[0],c=t[1],a=t[2],l=Kt((i-e+2*r)/s+1,o),u=Kt((c-e+2*r)/s+1,o),d=Kt((a-e+2*r)/s+1,o);return[l,u,d,n]}function xo(t,e,n,s=1){const r=mn(e,s);return Math.floor((t[0]*(n-1)-n+r)/2)}function Gs(t){return typeof t=="number"?[t,t,t]:t.length===2?[t[0],t[1],1]:t}function bo(t){return typeof t=="number"?[t,t,t]:t}function mn(t,e){return e<=1?t:t+(t-1)*(e-1)}function Hm(t,e,n,s,r,o,i,c,a){let l,u,d;if(typeof t=="number"){l={top:t,bottom:t,left:t,right:t,type:t===0?"VALID":"NUMBER"};const f=Gm([e,n],o,s,t,c);u=f[0],d=f[1]}else if(t==="same"){u=Math.ceil(e/s),d=Math.ceil(n/r);const h=Math.max(0,(u-1)*s+o-e),f=Math.max(0,(d-1)*r+i-n),p=Math.floor(h/2),g=h-p,m=Math.floor(f/2),x=f-m;l={top:p,bottom:g,left:m,right:x,type:"SAME"}}else if(t==="valid")l={top:0,bottom:0,left:0,right:0,type:"VALID"},u=Math.ceil((e-o+1)/s),d=Math.ceil((n-i+1)/r);else if(typeof t=="object"){const h=a==="channelsLast"?t[1][0]:t[2][0],f=a==="channelsLast"?t[1][1]:t[2][1],p=a==="channelsLast"?t[2][0]:t[3][0],g=a==="channelsLast"?t[2][1]:t[3][1];l={top:h,bottom:f,left:p,right:g,type:h===0&&f===0&&p===0&&g===0?"VALID":"EXPLICIT"},u=Kt((e-o+h+f)/s+1,c),d=Kt((n-i+p+g)/r+1,c)}else throw Error(`Unknown padding parameter: ${t}`);return{padInfo:l,outHeight:u,outWidth:d}}function Xm(t,e,n,s,r,o,i,c,a,l,u){let d,h,f,p;if(typeof t=="number"){d={top:t,bottom:t,left:t,right:t,front:t,back:t,type:t===0?"VALID":"NUMBER"};const m=zm([e,n,s,1],c,1,r,t,u);h=m[0],f=m[1],p=m[2]}else if(t==="same"){h=Math.ceil(e/r),f=Math.ceil(n/o),p=Math.ceil(s/i);const g=(h-1)*r+c-e,m=(f-1)*o+a-n,x=(p-1)*i+l-s,b=Math.floor(g/2),y=g-b,C=Math.floor(m/2),v=m-C,R=Math.floor(x/2),T=x-R;d={top:C,bottom:v,left:R,right:T,front:b,back:y,type:"SAME"}}else if(t==="valid")d={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},h=Math.ceil((e-c+1)/r),f=Math.ceil((n-a+1)/o),p=Math.ceil((s-l+1)/i);else throw Error(`Unknown padding parameter: ${t}`);return{padInfo:d,outDepth:h,outHeight:f,outWidth:p}}function Kt(t,e){if(!e)return Math.trunc(t);switch(e){case"round":return Math.round(t);case"ceil":return Math.ceil(t);case"floor":return Math.floor(t);default:throw new Error(`Unknown roundingMode ${e}`)}}function wo(t){const[e,n,s]=Gs(t);return e===1&&n===1&&s===1}function xn(t,e){return wo(t)||wo(e)}function bn(t){if(t==="NHWC")return"channelsLast";if(t==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${t}`)}function qm(t,e,n){if(n!=null){if(typeof e=="string")throw Error(`Error in ${t}: pad must be an integer when using dimRoundingMode ${n} but got pad ${e}.`);if(typeof e=="number")$(E(e),()=>`Error in ${t}: pad must be an integer when using dimRoundingMode ${n} but got pad ${e}.`);else if(typeof e=="object")e.forEach(s=>{s.forEach(r=>{$(E(r),()=>`Error in ${t}: pad must be an integer when using dimRoundingMode ${n} but got pad ${r}.`)})});else throw Error(`Error in ${t}: Unknown padding parameter: ${e}`)}}/**
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
 */function Km(t){const n={x:I(t,"x","elu","float32")};return A.runKernel(di,n)}const jm=N({elu_:Km});/**
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
 */function Ym(t,e=.2){const s={x:I(t,"x","leakyRelu")},r={alpha:e};return A.runKernel(wi,s,r)}const Qm=N({leakyRelu_:Ym});/**
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
 */function Zm(t,e){const n=I(t,"x","prelu"),s=I(e,"alpha","prelu"),r={x:n,alpha:s};return A.runKernel(Ni,r)}const Jm=N({prelu_:Zm});/**
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
 */function ex(t){const n={x:I(t,"x","relu6")};return A.runKernel(Li,n)}const tx=N({relu6_:ex});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function nx(t){const n={x:I(t,"x","sigmoid","float32")};return A.runKernel(ms,n)}const sx=N({sigmoid_:nx});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function rx(t,e=0){const s={x:I(t,"x","step")},r={alpha:e};return A.runKernel(Ji,s,r)}const ox=N({step_:rx});/**
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
 */function ix(t,e,n){if(n==null||n==="linear")return t;if(n==="relu")return ue(t,ox(e));throw new Error(`Cannot compute gradient for fused activation ${n}.`)}function ax(t,e){let n=e;const s=Ba(t.shape,e.shape);return s.length>0&&(n=Ce(n,s)),ge(n,t.shape)}function cx(t,e,n,s){if(e==="linear")return t;if(e==="relu")return go(t);if(e==="elu")return jm(t);if(e==="relu6")return tx(t);if(e==="prelu")return Jm(t,n);if(e==="leakyrelu")return Qm(t,s);if(e==="sigmoid")return sx(t);throw new Error(`Unknown fused activation ${e}.`)}const lx=(t,e)=>!(t>0)||e==="linear";/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */const yo=30;function zs(t){return t<=yo?t:mr(t,Math.floor(Math.sqrt(t)))}/**
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
 */function Cc(t,e,n){const s=n*(typeof t=="number"?t:t[0]),r=e*(typeof t=="number"?t:t[1]);return[s,r]}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Co(t,e,n,s=!0){let r=[];if(s)r=r.concat(e.slice(0)),r.push(t[0]/n),r=r.concat(t.slice(1));else{r=r.concat(t[0]);const o=e.length;for(let i=0;i<o;++i)r=r.concat([t[i+1]/e[i],e[i]]);r=r.concat(t.slice(o+1))}return r}function vo(t,e,n=!0){const s=[];if(n){s.push(e);for(let r=e+1;r<t;++r)r<=2*e?(s.push(r),s.push(r-(e+1))):s.push(r)}else{const r=[],o=[];for(let i=1;i<t;++i)i>=e*2+1||i%2===1?o.push(i):r.push(i);s.push(...r),s.push(0),s.push(...o)}return s}function $o(t,e,n,s=!0){const r=[];s?r.push(t[0]/n):r.push(t[0]*n);for(let o=1;o<t.length;++o)o<=e.length?s?r.push(e[o-1]*t[o]):r.push(t[o]/e[o-1]):r.push(t[o]);return r}function vc(t,e){const n=[0];for(let s=0;s<e;++s)n.push(t[s][0]);return n}function $c(t,e,n){const s=t.slice(0,1);for(let r=0;r<n;++r)s.push(t[r+1]-e[r][0]-e[r][1]);return s}function Ic(t,e){const n=t.shape.length,s=e.shape.length;if(n<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${n}.`);if(s<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${s}.`);if(e.dtype!=="int32")throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${e.dtype}.`);if(e.shape[s-1]>n)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${e.shape[s-1]} vs. ${n}`);if(D(t.shape)===0)throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${t.shape}.`);const r=e.shape,o=r[r.length-1];let i=1;for(let d=0;d<r.length-1;++d)i*=r[d];const c=t.shape,a=r.slice();a.pop();let l=1;for(let d=o;d<n;++d)l*=c[d],a.push(c[d]);const u=[...Re(t.shape).map(d=>d/l),1].slice(0,o);return[a,i,l,u]}function Sc(t,e,n){const s=e.rank>1?e.shape[e.rank-1]:1,r=e.rank>1?e.rank-1:1,o=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${n.shape}, indices.shape: ${e.shape}, shape: ${t}, sliceDim: ${s}, and batchDim: ${r}.`;if(n.rank<r)throw new Error(o+` update.rank < ${r}. `);if(t.length<s+(n.rank-r))throw new Error(o+` Output shape length < ${s+(n.rank-r)}`);if(n.rank!==r+t.length-s)throw new Error(o+` update.rank != ${r+t.length-s}`);for(let i=0;i<r;++i)if(n.shape[i]!==e.shape[i])throw new Error(o+` updates.shape[${i}] (${n.shape[i]}) != indices.shape[${i}] (${e.shape[i]}).`);for(let i=0;i<n.rank-r;++i)if(n.shape[i+r]!==t[i+s])throw new Error(o+` updates.shape[${i+r}] (${n.shape[i+r]}) != shape[${i+r}] (${t[i+r]})`)}function ux(t,e,n){if(e.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${e.rank}.`);if(t.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${e.dtype}`);if(n.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${n}`);if(n.length===0){if(e.size===0)throw new Error(`Indices specified for empty output. indices shape: ${e.shape}`);if(t.size===0)throw new Error(`Updates specified for empty output. updates shape: ${t.shape}`)}Sc(n,e,t)}function Io(t,e,n){const s=e.shape.length,r=s>1?e.shape[s-1]:1,o=n.length;let i=1;for(let d=r;d<o;++d)i*=n[d];const c=r<1?1:r,a=D(e.shape)/c,l=[...Re(n.slice(0,r)),1],u=D(n);return{sliceRank:r,numUpdates:a,sliceSize:i,strides:l,outputSize:u}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */const Ec=1.7580993408473768,kc=1.0507009873554805;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */const Tc=.3275911,Rc=.254829592,Nc=-.284496736,Ac=1.421413741,_c=-1.453152027,Dc=1.061405429;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function qn(t,e){if(t.length!==e.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${t.length}, imag: ${e.length}.`);const n=new Float32Array(t.length*2);for(let s=0;s<n.length;s+=2)n[s]=t[s/2],n[s+1]=e[s/2];return n}function dx(t){const e=new Float32Array(t.length/2),n=new Float32Array(t.length/2);for(let s=0;s<t.length;s+=2)e[s/2]=t[s],n[s/2]=t[s+1];return{real:e,imag:n}}function hx(t){const e=Math.ceil(t.length/4),n=new Float32Array(e),s=new Float32Array(e);for(let r=0;r<t.length;r+=4)n[Math.floor(r/4)]=t[r],s[Math.floor(r/4)]=t[r+1];return{real:n,imag:s}}function fx(t){const e=Math.floor(t.length/4),n=new Float32Array(e),s=new Float32Array(e);for(let r=2;r<t.length;r+=4)n[Math.floor(r/4)]=t[r],s[Math.floor(r/4)]=t[r+1];return{real:n,imag:s}}function px(t,e){const n=t[e*2],s=t[e*2+1];return{real:n,imag:s}}function gx(t,e,n,s){t[s*2]=e,t[s*2+1]=n}function mx(t,e){const n=new Float32Array(t/2),s=new Float32Array(t/2);for(let r=0;r<Math.ceil(t/2);r++){const o=(e?2:-2)*Math.PI*(r/t);n[r]=Math.cos(o),s[r]=Math.sin(o)}return{real:n,imag:s}}function xx(t,e,n){const s=(n?2:-2)*Math.PI*(t/e),r=Math.cos(s),o=Math.sin(s);return{real:r,imag:o}}/**
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
 */const So="->",bx=/->/g,Fc=",",Pc="...";function Oc(t,e){t=t.replace(/\s/g,"");const n=(t.length-t.replace(bx,"").length)/So.length;if(n<1)throw new Error("Equations without an arrow are not supported.");if(n>1)throw new Error(`Equation must contain exactly one arrow ("${So}").`);const[s,r]=t.split(So);$(s.indexOf(Pc)===-1,()=>`The ellipsis notation ("${Pc}") is not supported yet.`);const o=s.split(Fc),i=o.length;if(e!==i)throw new Error(`Expected ${i} input tensors, received ${e}`);if(i>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");const c=[];for(let h=0;h<r.length;++h){const f=r[h];if(!o.some(p=>p.indexOf(f)!==-1))throw new Error(`Output subscripts contain the label ${f} not present in the input subscripts.`);c.indexOf(f)===-1&&c.push(f)}for(let h=0;h<s.length;++h){const f=s[h];c.indexOf(f)===-1&&f!==Fc&&c.push(f)}const a=new Array(o.length);for(let h=0;h<i;++h){if(new Set(o[h].split("")).size!==o[h].length)throw new Error(`Found duplicate axes in input component ${o[h]}. Support for duplicate axes in input is not implemented yet.`);a[h]=[];for(let f=0;f<o[h].length;++f)a[h].push(c.indexOf(o[h][f]))}const l=c.length,u=r.length,d=[];for(let h=u;h<l;++h)d.push(h);return{allDims:c,summedDims:d,idDims:a}}function Lc(t,e){let n=new Array(t);n.fill(-1);for(let r=0;r<e.length;++r)n[e[r]]=r;const s=[];for(let r=0;r<t;++r)n[r]===-1&&s.push(r);return n=n.filter(r=>r!==-1),{permutationIndices:n,expandDims:s}}function Bc(t,e,n){const s=new Array(t);for(let r=0;r<n.length;++r){const o=n[r].shape;for(let i=0;i<e[r].length;++i)s[e[r][i]]===void 0?s[e[r][i]]=o[i]:$(s[e[r][i]]===o[i],()=>`Expected dimension ${s[e[r][i]]} at axis ${i} of input shaped ${JSON.stringify(o)}, but got dimension ${o[i]}`)}}function Mc(t,e){const n=t,s=[];let r=0;t.length===0&&n.push(-1),r=t.length+1;for(let i=0;i<r;++i)s.push([]);const o=[];for(let i=0;i<n.length;++i){const c=n[i],a=wx(e,c);for(const l of a)o.indexOf(l)===-1&&(s[i].push(l),o.push(l))}return{path:n,steps:s}}function Vc(t){return t.every((e,n)=>e===n)}function wx(t,e){const n=[];for(let s=0;s<t.length;++s)(t[s].length===0||t[s].indexOf(e)!==-1||e===-1)&&n.push(s);return n}function Uc(t,e,n=0){let s=[];if(typeof e=="number")$(t.shape[n]%e===0,()=>"Number of splits must evenly divide the axis."),s=new Array(e).fill(t.shape[n]/e);else{const r=e.reduce((i,c)=>(c===-1&&(i+=1),i),0);$(r<=1,()=>"There should be only one negative value in split array.");const o=e.indexOf(-1);if(o!==-1){const i=e.reduce((c,a)=>a>0?c+a:c);e[o]=t.shape[n]-i}$(t.shape[n]===e.reduce((i,c)=>i+c),()=>"The sum of sizes must match the size of the axis dimension."),s=e}return s}/**
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
 */function Wc(t){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${t}`}function Gc(t,e){return`indices(${t}, 0) is invalid: ${e} < 0`}function zc(t,e,n){return`indices(${t}, 0) is invalid: ${e} >= ${n}`}/**
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
 */function Hc(t,e){return`only one output dimension may be -1, not both ${t} and ${e}`}function Xc(t,e){return`size ${t} must be non-negative, not ${e}`}function qc(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function Kc(t,e){const n=D(t),s=D(e);return`Input to reshape is a SparseTensor with ${n}
  dense values, but the requested shape requires a multiple of ${s}. inputShape=${t} outputShape= ${e}`}function jc(t,e){const n=D(t),s=D(e);return`Input to reshape is a tensor with ${n} dense values, but the requested shape has ${s}. inputShape=${t} outputShape=${e}`}/**
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
 */function Eo(){return"segment ids must be >= 0"}function Yc(){return"segment ids are not increasing"}function Qc(t,e){return`Segment id ${t} out of range [0, ${e}), possibly because segmentIds input is not sorted.`}function Zc(t,e,n){return`Bad: indices[${t}] == ${e} out of range [0, ${n})`}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Jc(t,e){let n=!1,s;for(t<=yo?(s=t,n=!0):s=mr(t,Math.floor(Math.sqrt(t)));!n;)s>e||s===t?n=!0:s=mr(t,s+1);return s}function el(t,e,n){const s=[],r=t.length;for(let o=0;o<r;o++)o!==e?s.push(t[o]):s.push(n);return s}function tl(t,e,n,s){const r=e.shape.length,o=t.shape.length;if(s!==0&&(s<-r||s>r))throw new Error(`Expect batchDims in the range of [-${r}, ${r}], but got ${s}`);if(s<0&&(s+=r),s>o)throw new Error(`batchDims (${s}) must be less than rank(x) (
    ${o}).`);if(n<s)throw new Error(`batchDims (${s}) must be less than or equal to axis (${n}).`);for(let d=0;d<s;++d)if(t.shape[d]!==e.shape[d])throw new Error(`x.shape[${d}]: ${t.shape[d]} should be equal to indices.shape[${d}]: ${e.shape[d]}.`);const i=t.shape[n],c=[];let a=1,l=1,u=1;for(let d=0;d<s;++d)c.push(t.shape[d]),a*=t.shape[d];for(let d=s;d<n;d++)c.push(t.shape[d]),l*=t.shape[d];for(let d=s;d<r;d++)c.push(e.shape[d]);for(let d=n+1;d<o;d++)c.push(t.shape[d]),u*=t.shape[d];return{batchSize:a,sliceSize:u,outerSize:l,dimSize:i,outputShape:c}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function jt(t){try{return t.map(e=>Bn(e))}catch(e){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${e}`)}}function nl(t){return t.map(e=>Ut(e))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function yx(t,e){const n=[];for(let o=0;o<e.length;o++)e[o]&&n.push(o);const s=Oe(t,"int32"),r=Oe([n.length,t.length],"int32");for(let o=0;o<n.length;o++){const i=s.indexToLoc(n[o]),c=o*t.length;r.values.set(i,c)}return r.toTensor()}/**
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
 *//**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
 *//**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 *//**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */const Pt={},ko={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function lk(t){delete Pt[t]}function Cx(t,e){Pt[t]=e}function mt(t,e){if(!(t in Pt)){const s=$x(t,e);if(s!==null)Pt[t]=s;else return console.log("Could not get context for WebGL version",t),null}const n=Pt[t];return n==null||n.isContextLost()?(delete Pt[t],mt(t)):(n.disable(n.DEPTH_TEST),n.disable(n.STENCIL_TEST),n.disable(n.BLEND),n.disable(n.DITHER),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SAMPLE_COVERAGE),n.enable(n.SCISSOR_TEST),n.enable(n.CULL_FACE),n.cullFace(n.BACK),Pt[t])}function vx(t){if(typeof OffscreenCanvas<"u"&&t===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}function $x(t,e){if(t!==1&&t!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");const n=e??vx(t);return n.addEventListener("webglcontextlost",s=>{s.preventDefault(),delete Pt[t]},!1),t===1?n.getContext("webgl",ko)||n.getContext("experimental-webgl",ko):n.getContext("webgl2",ko)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */var Kn;(function(t){t[t.DENSE=0]="DENSE",t[t.SHARED_BATCH=1]="SHARED_BATCH"})(Kn||(Kn={}));var tt;(function(t){t[t.RENDER=0]="RENDER",t[t.UPLOAD=1]="UPLOAD",t[t.PIXELS=2]="PIXELS",t[t.DOWNLOAD=3]="DOWNLOAD"})(tt||(tt={}));var Ae;(function(t){t[t.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",t[t.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",t[t.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",t[t.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",t[t.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"})(Ae||(Ae={}));function jn(t,e){return[e,t]}function Ix(t,e){return t*e}function uk(t,e){return[e*4,t]}function Hs(t){const e=D(t),n=Math.ceil(e/4);return O(n)}function dk(t,e){if(t%e!==0)throw new Error(`unpackedSize (${t}) must be a multiple of ${e}`);return t/e}function hk(t,e,n){const s=t.length*n/4;if(e.length<s)throw new Error(`matrix length (${e.length}) must be >= ${s}`);let r=0;for(let o=0;o<t.length;o+=4)for(let i=0;i<n;i++)e[r++]=t[o+i]}function wn(t,e){return[Math.max(1,Math.ceil(e/2)),Math.max(1,Math.ceil(t/2))]}function Sx(t,e){const[n,s]=wn(t,e);return n*s*4}function To(t,e){const n=t;let s,r,o,i,c,a,l,u,d,h;return S().getNumber("WEBGL_VERSION")===2?(s=n.R32F,r=n.R16F,o=n.RGBA16F,i=n.RGBA32F,c=n.RED,l=4,u=1,d=n.HALF_FLOAT,h=n.FLOAT,a=n.RGBA8):(s=t.RGBA,r=t.RGBA,o=t.RGBA,i=n.RGBA,c=t.RGBA,l=4,u=4,d=e!=null?e.HALF_FLOAT_OES:null,h=t.FLOAT,a=t.RGBA),{internalFormatFloat:s,internalFormatHalfFloat:r,internalFormatPackedHalfFloat:o,internalFormatPackedFloat:i,textureFormatFloat:c,downloadTextureFormat:a,downloadUnpackNumChannels:l,defaultNumChannels:u,textureTypeHalfFloat:d,textureTypeFloat:h}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */function L(t,e){const n=e();return S().getBool("DEBUG")&&Ex(t),n}function Ex(t){const e=t.getError();if(e!==t.NO_ERROR)throw new Error("WebGL Error: "+Nx(t,e))}const kx=596e-10,Tx=65504;function Rx(t){return!!(S().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||t===0||kx<Math.abs(t)&&Math.abs(t)<Tx)}function Nx(t,e){switch(e){case t.NO_ERROR:return"NO_ERROR";case t.INVALID_ENUM:return"INVALID_ENUM";case t.INVALID_VALUE:return"INVALID_VALUE";case t.INVALID_OPERATION:return"INVALID_OPERATION";case t.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case t.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case t.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return`Unknown error code ${e}`}}function Xs(t,e){return Tt(t,()=>t.getExtension(e),'Extension "'+e+'" not supported on this browser.')}function Ax(t,e){const n=Tt(t,()=>t.createShader(t.VERTEX_SHADER),"Unable to create vertex WebGLShader.");if(L(t,()=>t.shaderSource(n,e)),L(t,()=>t.compileShader(n)),t.getShaderParameter(n,t.COMPILE_STATUS)===!1)throw console.log(t.getShaderInfoLog(n)),new Error("Failed to compile vertex shader.");return n}function _x(t,e){const n=Tt(t,()=>t.createShader(t.FRAGMENT_SHADER),"Unable to create fragment WebGLShader.");if(L(t,()=>t.shaderSource(n,e)),L(t,()=>t.compileShader(n)),t.getShaderParameter(n,t.COMPILE_STATUS)===!1)throw Fx(e,t.getShaderInfoLog(n)),new Error("Failed to compile fragment shader.");return n}const Dx=/ERROR: [0-9]+:([0-9]+):/g;function Fx(t,e){const n=Dx.exec(e);if(n==null){console.log(`Couldn't parse line number in error: ${e}`),console.log(t);return}const s=+n[1],r=t.split(`
`),o=r.length.toString().length+2,i=r.map((d,h)=>fe((h+1).toString(),o)+d);let c=0;for(let d=0;d<i.length;d++)c=Math.max(i[d].length,c);const a=i.slice(0,s-1),l=i.slice(s-1,s),u=i.slice(s);console.log(a.join(`
`)),console.log(e.split(`
`)[0]),console.log(`%c ${fe(l[0],c)}`,"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(u.join(`
`))}function Px(t){return Tt(t,()=>t.createProgram(),"Unable to create WebGLProgram.")}function Ox(t,e){if(L(t,()=>t.linkProgram(e)),t.getProgramParameter(e,t.LINK_STATUS)===!1)throw console.log(t.getProgramInfoLog(e)),new Error("Failed to link vertex and fragment shaders.")}function Ro(t,e){if(L(t,()=>t.validateProgram(e)),t.getProgramParameter(e,t.VALIDATE_STATUS)===!1)throw console.log(t.getProgramInfoLog(e)),new Error("Shader program validation failed.")}function Lx(t,e){const n=Tt(t,()=>t.createBuffer(),"Unable to create WebGLBuffer");return L(t,()=>t.bindBuffer(t.ARRAY_BUFFER,n)),L(t,()=>t.bufferData(t.ARRAY_BUFFER,e,t.STATIC_DRAW)),n}function Bx(t,e){const n=Tt(t,()=>t.createBuffer(),"Unable to create WebGLBuffer");return L(t,()=>t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n)),L(t,()=>t.bufferData(t.ELEMENT_ARRAY_BUFFER,e,t.STATIC_DRAW)),n}function fk(){return env().getNumber("WEBGL_VERSION")===2?1:4}function Mx(t){return Tt(t,()=>t.createTexture(),"Unable to create WebGLTexture.")}function Vx(t,e){const n=S().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(t<=0||e<=0){const s=`[${t}x${e}]`;throw new Error("Requested texture size "+s+" is invalid.")}if(t>n||e>n){const s=`[${t}x${e}]`,r=`[${n}x${n}]`;throw new Error("Requested texture size "+s+" greater than WebGL maximum on this browser / GPU "+r+".")}}function Ux(t){return Tt(t,()=>t.createFramebuffer(),"Unable to create WebGLFramebuffer.")}function sl(t,e,n,s,r,o,i){const c=t.getAttribLocation(e,n);return c===-1?!1:(L(t,()=>t.bindBuffer(t.ARRAY_BUFFER,s)),L(t,()=>t.vertexAttribPointer(c,r,t.FLOAT,!1,o,i)),L(t,()=>t.enableVertexAttribArray(c)),!0)}function Wx(t,e,n){ol(t,n),L(t,()=>t.activeTexture(t.TEXTURE0+n)),L(t,()=>t.bindTexture(t.TEXTURE_2D,e))}function pk(t,e){ol(t,e),L(t,()=>t.activeTexture(t.TEXTURE0+e)),L(t,()=>t.bindTexture(t.TEXTURE_2D,null))}function Gx(t,e,n){return Tt(t,()=>t.getUniformLocation(e,n),'uniform "'+n+'" not present in program.')}function zx(t,e,n){return t.getUniformLocation(e,n)}function Hx(t,e,n,s){L(t,()=>Wx(t,e,s)),L(t,()=>t.uniform1i(n,s))}function gk(t){L(t,()=>t.bindFramebuffer(t.FRAMEBUFFER,null)),L(t,()=>t.viewport(0,0,t.canvas.width,t.canvas.height)),L(t,()=>t.scissor(0,0,t.canvas.width,t.canvas.height))}function No(t,e,n){L(t,()=>t.bindFramebuffer(t.FRAMEBUFFER,n)),L(t,()=>t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e,0))}function rl(t,e){L(t,()=>t.bindFramebuffer(t.FRAMEBUFFER,e)),L(t,()=>t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,null,0))}function qs(t){const e=t.checkFramebufferStatus(t.FRAMEBUFFER);if(e!==t.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+Xx(t,e))}function Xx(t,e){switch(e){case t.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case t.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case t.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case t.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return`unknown error ${e}`}}function Tt(t,e,n){const s=L(t,()=>e());if(s==null)throw new Error(n);return s}function ol(t,e){const n=t.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,s=e+t.TEXTURE0;if(s<t.TEXTURE0||s>n){const r=`[gl.TEXTURE0, gl.TEXTURE${n}]`;throw new Error(`textureUnit must be in ${r}.`)}}function yn(t,e=2){return D(t.slice(0,t.length-e))}function Cn(t){if(t.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[t.length>1?t[t.length-2]:1,t[t.length-1]]}function Ao(t){let e=[1,1,1];return t.length===0||t.length===1&&t[0]===1||(e=[yn(t),...Cn(t)]),e}function qx(t,e=!1){let n=S().getNumber("WEBGL_MAX_TEXTURE_SIZE");e&&(n=n*2,t=t.map((r,o)=>o>=t.length-2?z(t[o]):t[o]),t.length===1&&(t=[2,t[0]])),t.length!==2&&(t=Ee(t).newShape);let s=D(t);if(t.length<=1&&s<=n)return[1,s];if(t.length===2&&t[0]<=n&&t[1]<=n)return t;if(t.length===3&&t[0]*t[1]<=n&&t[2]<=n)return[t[0]*t[1],t[2]];if(t.length===3&&t[0]<=n&&t[1]*t[2]<=n)return[t[0],t[1]*t[2]];if(t.length===4&&t[0]*t[1]*t[2]<=n&&t[3]<=n)return[t[0]*t[1]*t[2],t[3]];if(t.length===4&&t[0]<=n&&t[1]*t[2]*t[3]<=n)return[t[0],t[1]*t[2]*t[3]];if(e){const r=yn(t);let o=2,i=2;return t.length&&([o,i]=Cn(t)),s=r*(o/2)*(i/2),O(s).map(c=>c*2)}return O(s)}function Ks(t){return t%2===0}function js(t,e){if(t=t.slice(-2),e=e.slice(-2),k(t,e)||!t.length||!e.length||t[0]===0||t[1]===0||e[0]===0||e[1]===0)return!0;if(t.length!==e.length){const n=t.slice(-1)[0],s=e.slice(-1)[0];if(n===s||Ks(n)&&Ks(s)&&(t[0]===1||e[0]===1))return!0}return t[1]===e[1]&&Ks(t[0])&&Ks(e[0])}let Ys,Qs;function Kx(t){if(Ys==null){const e=mt(t);Ys=e.getParameter(e.MAX_TEXTURE_SIZE)}return Ys}function mk(){Ys=null}function xk(){Qs=null}function jx(t){if(Qs==null){const e=mt(t);Qs=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,Qs)}function Yx(t){if(t===0)return 0;let e;const n=mt(t);return it(n,"EXT_disjoint_timer_query_webgl2")&&t===2?e=2:it(n,"EXT_disjoint_timer_query")?e=1:e=0,e}function it(t,e){return t.getExtension(e)!=null}function il(t){try{if(mt(t)!=null)return!0}catch(e){return console.log("Error when getting WebGL context: ",e),!1}return!1}function Qx(t){if(t===0)return!1;const e=mt(t);if(t===1){if(!it(e,"OES_texture_float"))return!1}else if(!it(e,"EXT_color_buffer_float"))return!1;return _o(e)}function Zx(t){if(t===0)return!1;const e=mt(t);if(t===1){if(!it(e,"OES_texture_float")||!it(e,"WEBGL_color_buffer_float"))return!1}else{if(it(e,"EXT_color_buffer_float"))return _o(e);const s="EXT_color_buffer_half_float";if(it(e,s)){const r=e.getExtension(s);return Jx(e,r)}return!1}return _o(e)}function _o(t){const e=To(t),n=t.createTexture();t.bindTexture(t.TEXTURE_2D,n);const s=1,r=1;t.texImage2D(t.TEXTURE_2D,0,e.internalFormatFloat,s,r,0,e.textureFormatFloat,e.textureTypeFloat,null);const o=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,o),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0);const i=t.checkFramebufferStatus(t.FRAMEBUFFER)===t.FRAMEBUFFER_COMPLETE;return t.bindTexture(t.TEXTURE_2D,null),t.bindFramebuffer(t.FRAMEBUFFER,null),t.deleteTexture(n),t.deleteFramebuffer(o),i}function Jx(t,e){const n=To(t,e),s=t.createTexture();t.bindTexture(t.TEXTURE_2D,s);const r=1,o=1;t.texImage2D(t.TEXTURE_2D,0,n.internalFormatHalfFloat,r,o,0,n.textureFormatFloat,n.textureTypeHalfFloat,null);const i=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,i),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,s,0);const c=t.checkFramebufferStatus(t.FRAMEBUFFER)===t.FRAMEBUFFER_COMPLETE;return t.bindTexture(t.TEXTURE_2D,null),t.bindFramebuffer(t.FRAMEBUFFER,null),t.deleteTexture(s),t.deleteFramebuffer(i),c}function eb(t){return t!==2?!1:mt(t).fenceSync!=null}function Yn(t,e){Array.isArray(t)||(t=[t]),t.forEach(n=>{n!=null&&$(n.dtype!=="complex64",()=>`${e} does not support complex64 tensors in the WebGL backend.`)})}/**
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
 */const X=S();X.registerFlag("HAS_WEBGL",()=>X.getNumber("WEBGL_VERSION")>0),X.registerFlag("WEBGL_VERSION",()=>il(2)?2:il(1)?1:0),X.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS",()=>!1),X.registerFlag("WEBGL_BUFFER_SUPPORTED",()=>X.get("WEBGL_VERSION")===2),X.registerFlag("WEBGL_CPU_FORWARD",()=>!0),X.registerFlag("WEBGL_FORCE_F16_TEXTURES",()=>!1),X.registerFlag("WEBGL_PACK",()=>X.getBool("HAS_WEBGL")),X.registerFlag("WEBGL_PACK_NORMALIZATION",()=>X.getBool("WEBGL_PACK")),X.registerFlag("WEBGL_PACK_CLIP",()=>X.getBool("WEBGL_PACK")),X.registerFlag("WEBGL_PACK_DEPTHWISECONV",()=>X.getBool("WEBGL_PACK")),X.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",()=>X.getBool("WEBGL_PACK")),X.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",()=>X.getBool("WEBGL_PACK")),X.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",()=>X.getBool("WEBGL_PACK")),X.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",()=>X.getBool("WEBGL_PACK")),X.registerFlag("WEBGL_PACK_REDUCE",()=>X.getBool("WEBGL_PACK")),X.registerFlag("WEBGL_LAZILY_UNPACK",()=>X.getBool("WEBGL_PACK")),X.registerFlag("WEBGL_CONV_IM2COL",()=>X.getBool("WEBGL_PACK")),X.registerFlag("WEBGL_MAX_TEXTURE_SIZE",()=>Kx(X.getNumber("WEBGL_VERSION"))),X.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",()=>jx(X.getNumber("WEBGL_VERSION"))),X.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",()=>{const t=X.getNumber("WEBGL_VERSION");return t===0?0:Yx(t)}),X.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",()=>X.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&!ma()),X.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",()=>Qx(X.getNumber("WEBGL_VERSION"))),X.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",()=>X.getBool("WEBGL_FORCE_F16_TEXTURES")?!1:X.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")),X.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",()=>Zx(X.getNumber("WEBGL_VERSION"))),X.registerFlag("WEBGL_FENCE_API_ENABLED",()=>eb(X.getNumber("WEBGL_VERSION"))),X.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",()=>X.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0),X.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD",()=>-1,t=>{if(t<0&&t!==-1)throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${t}.`)}),X.registerFlag("WEBGL_FLUSH_THRESHOLD",()=>ma()?1:-1,t=>{if(t<0&&t!==-1)throw new Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${t}.`)}),X.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD",()=>128),X.registerFlag("WEBGL_USE_SHAPES_UNIFORMS",()=>!1),X.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",()=>1e5),X.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD",()=>128);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Be(){let t,e,n,s,r,o,i,c,a,l;return S().getNumber("WEBGL_VERSION")===2?(t="#version 300 es",e="in",n="out",s="in",r="texture",o="outputColor",i="out vec4 outputColor;",c=`
      bool isnan_custom(float val) {
        return (val > 0.0 || val < 0.0) ? false : val != 0.0;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `,a="",l=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(t="",e="attribute",n="varying",s="varying",r="texture2D",o="gl_FragColor",i="",c=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,a=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,l=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:t,attribute:e,varyingVs:n,varyingFs:s,texture2D:r,output:o,defineOutput:i,defineSpecialNaN:c,defineSpecialInf:a,defineRound:l}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Yt(t,e,n="index"){const s=Re(e);return s.map((r,o)=>{const i=`int ${t[o]} = ${n} / ${r}`,c=o===s.length-1?`int ${t[o+1]} = ${n} - ${t[o]} * ${r}`:`index -= ${t[o]} * ${r}`;return`${i}; ${c};`}).join("")}function Zs(t,e,n="index"){const s=Re(e);return s.map((r,o)=>{const i=`int ${t[o]} = ${n} / outShapeStrides[${o}]`,c=o===s.length-1?`int ${t[o+1]} = ${n} - ${t[o]} * outShapeStrides[${o}]`:`index -= ${t[o]} * outShapeStrides[${o}]`;return`${i}; ${c};`}).join("")}function tb(t,e){const n=t.length,s=t.map(o=>`${e}[${o}]`),r=new Array(n-1);r[n-2]=s[n-1];for(let o=n-3;o>=0;--o)r[o]=`(${r[o+1]} * ${s[o+1]})`;return r}function nb(t,e,n="index"){const s=t.map((o,i)=>i),r=tb(s,e);return r.map((o,i)=>{const c=`int ${t[i]} = ${n} / ${r[i]}`,a=i===r.length-1?`int ${t[i+1]} = ${n} - ${t[i]} * ${r[i]}`:`index -= ${t[i]} * ${r[i]}`;return`${c}; ${a};`}).join("")}function Js(t){return t.length===1?`${t[0]}`:`vec${t.length}(${t.join(",")})`}function bk(t,e){if(t.length!==e.length)throw new Error(`Vectors to be dotted must be of the same length -got ${t.length} and ${e.length}`);const n=[],s=Math.floor(t.length/4),r=t.length%4;for(let o=0;o<s;o++){const i=t.slice(o*4,o*4+4),c=e.slice(o*4,o*4+4);n.push(`${Js(i)}, ${Js(c)}`)}if(r!==0){let o=t.slice(s*4),i=e.slice(s*4);o.length===1&&(o=o.map(c=>`float(${c})`),i=i.map(c=>`float(${c})`)),n.push(`${Js(o)}, ${Js(i)}`)}return n.map((o,i)=>`dot(${o})`).join("+")}function Do(t){const e=Re(t).map(n=>n.toString());return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * ${e[0]} + coords.y * ${e[1]} + coords.z;
  }
`}function Fo(){return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;
  }
`}const al=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */const{getBroadcastDims:cl}=ie;function sb(t,e,n){const s=[];if(t.forEach(f=>{const p=D(f.shapeInfo.logicalShape);if(f.shapeInfo.isUniform?s.push(`uniform float ${f.name}${p>1?`[${p}]`:""};`):(s.push(`uniform sampler2D ${f.name};`),s.push(`uniform int offset${f.name};`)),n.enableShapeUniforms){const{uniformShape:g}=Po(n.packedInputs,f.shapeInfo.logicalShape,f.shapeInfo.texShape);switch(g.length){case 1:s.push(`uniform int ${f.name}Shape;`);break;case 2:s.push(`uniform ivec2 ${f.name}Shape;`);break;case 3:s.push(`uniform ivec3 ${f.name}Shape;`);break;case 4:s.push(`uniform ivec4 ${f.name}Shape;`);break;default:break}s.push(`uniform ivec2 ${f.name}TexShape;`)}}),n.enableShapeUniforms){switch(e.logicalShape.length){case 1:s.push("uniform int outShape;");break;case 2:s.push("uniform ivec2 outShape;"),s.push("uniform int outShapeStrides;");break;case 3:s.push("uniform ivec3 outShape;"),s.push("uniform ivec2 outShapeStrides;");break;case 4:s.push("uniform ivec4 outShape;"),s.push("uniform ivec3 outShapeStrides;");break;default:break}s.push("uniform ivec2 outTexShape;")}n.customUniforms&&n.customUniforms.forEach(f=>{s.push(`uniform ${f.type} ${f.name}${f.arrayIndex?`[${f.arrayIndex}]`:""};`)});const r=s.join(`
`),o=t.map(f=>rb(f,e,n.packedInputs,n.enableShapeUniforms)).join(`
`),i=e.texShape,c=Be(),a=ab(c);let l,u,d=ub(c);return e.isPacked?(l=ob(e.logicalShape,i,n.enableShapeUniforms),u=lb(c)):(l=ib(e.logicalShape,i,n.enableShapeUniforms),u=cb(c)),n.packedInputs&&(d+=pb),[d,a,u,r,l,o,n.userCode].join(`
`)}function vn(t,e=!1){const n=t.shapeInfo.logicalShape;switch(n.length){case 0:return Eb(t,e);case 1:return Tb(t,e);case 2:return Nb(t,e);case 3:return _b(t,e);case 4:return Fb(t,e);case 5:return Pb(t);case 6:return Ob(t);default:throw new Error(`${n.length}-D input sampling is not yet supported`)}}function ll(t,e){switch(t.shapeInfo.logicalShape.length){case 0:return Sb(t);case 1:return kb(t,e);case 2:return Rb(t,e);case 3:return Ab(t,e);default:return Db(t,e)}}function rb(t,e,n=!1,s){let r="";n?r+=ll(t,s):r+=vn(t,s);const o=t.shapeInfo.logicalShape,i=e.logicalShape;return o.length<=i.length&&(n?r+=Lb(t,e):r+=Bb(t,e)),r}function ob(t,e,n){switch(t.length){case 0:return ul();case 1:return gb(t,e,n);case 2:return $b(t,e,n);case 3:return xb(t,e,n);default:return wb(t,e,n)}}function ib(t,e,n){switch(t.length){case 0:return ul();case 1:return mb(t,e,n);case 2:return Ib(t,e,n);case 3:return bb(t,e,n);case 4:return yb(t,e,n);case 5:return Cb(t,e);case 6:return vb(t,e);default:throw new Error(`${t.length}-D output sampling is not yet supported`)}}function ab(t){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return ${t.texture2D}(textureSampler, uv).r;
    }
  `}function cb(t){return`
    void setOutput(float val) {
      ${t.output} = vec4(val, 0, 0, 0);
    }
  `}function lb(t){return`
    void setOutput(vec4 val) {
      ${t.output} = val;
    }
  `}function ub(t){return`${t.version}
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ${t.varyingFs} vec2 resultUV;
    ${t.defineOutput}
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    ${t.defineSpecialNaN}
    ${t.defineSpecialInf}
    ${t.defineRound}

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    ${db}
    ${hb}
    ${fb}
  `}const db=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,hb=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,fb=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,pb=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function ul(){return`
    int getOutputCoords() {
      return 0;
    }
  `}function gb(t,e,n){const s=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)];return s[0]===1?n?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ceil(float(outTexShape[1]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ${s[1]}.0);
      }
    `:s[1]===1?n?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ceil(float(outTexShape[0]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ${s[0]}.0);
      }
    `:n?`
    int getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      return 2 * (resTexRC.x * packedTexShape[1] + resTexRC.y);
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));
      return 2 * (resTexRC.x * ${s[1]} + resTexRC.y);
    }
  `}function mb(t,e,n){return e[0]===1?n?`
      int getOutputCoords() {
        return int(resultUV.x * float(outTexShape[1]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.x * ${e[1]}.0);
      }
    `:e[1]===1?n?`
      int getOutputCoords() {
        return int(resultUV.y * float(outTexShape[0]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.y * ${e[0]}.0);
      }
    `:n?`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      return resTexRC.x * outTexShape[1] + resTexRC.y;
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${e[0]}, ${e[1]}));
      return resTexRC.x * ${e[1]} + resTexRC.y;
    }
  `}function xb(t,e,n){if(n)return`
    ivec3 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec3(b, r, c);
    }
  `;const s=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)],r=Math.ceil(t[2]/2),o=r*Math.ceil(t[1]/2);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));
      int index = resTexRC.x * ${s[1]} + resTexRC.y;

      int b = index / ${o};
      index -= b * ${o};

      int r = 2 * (index / ${r});
      int c = imod(index, ${r}) * 2;

      return ivec3(b, r, c);
    }
  `}function bb(t,e,n){if(n)return`
  ivec3 getOutputCoords() {
    ivec2 resTexRC = ivec2(resultUV.yx *
                           vec2(outTexShape[0], outTexShape[1]));
    int index = resTexRC.x * outTexShape[1] + resTexRC.y;
    ${Zs(["r","c","d"],t)}
    return ivec3(r, c, d);
  }
`;const s=Yt(["r","c","d"],t);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;
      ${s}
      return ivec3(r, c, d);
    }
  `}function wb(t,e,n){if(n)return`
    ivec4 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int texelsInLogicalRow = int(ceil(float(outShape[3]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatchN = texelsInBatch * outShape[1];

      int b2 = index / texelsInBatchN;
      index -= b2 * texelsInBatchN;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec4(b2, b, r, c);
    }
  `;const s=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)],r=Math.ceil(t[t.length-1]/2),o=r*Math.ceil(t[t.length-2]/2);let i=o,c="",a="b, r, c";for(let l=2;l<t.length-1;l++)i*=t[t.length-l-1],c=`
      int b${l} = index / ${i};
      index -= b${l} * ${i};
    `+c,a=`b${l}, `+a;return`
    ivec${t.length} getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));
      int index = resTexRC.x * ${s[1]} + resTexRC.y;

      ${c}

      int b = index / ${o};
      index -= b * ${o};

      int r = 2 * (index / ${r});
      int c = imod(index, ${r}) * 2;

      return ivec${t.length}(${a});
    }
  `}function yb(t,e,n){if(n)return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      ${Zs(["r","c","d","d2"],t)}
      return ivec4(r, c, d, d2);
    }
  `;const s=Yt(["r","c","d","d2"],t);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;
      ${s}
      return ivec4(r, c, d, d2);
    }
  `}function Cb(t,e){const n=Yt(["r","c","d","d2","d3"],t);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${e[0]},
                             ${e[1]}));

      int index = resTexRC.x * ${e[1]} + resTexRC.y;

      ${n}

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}function vb(t,e){const n=Yt(["r","c","d","d2","d3","d4"],t);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;

      ${n}

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}function $b(t,e,n){const s=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)];if(k(t,e))return n?`
      ivec2 getOutputCoords() {
        ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
        return 2 * ivec2(resultUV.yx * vec2(packedTexShape[0], packedTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(${s[0]}, ${s[1]}));
      }
    `;const r=Math.ceil(t[1]/2);return n?`
    ivec2 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));

      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;
      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));

      int index = resTexRC.x * ${s[1]} + resTexRC.y;
      int r = 2 * (index / ${r});
      int c = imod(index, ${r}) * 2;

      return ivec2(r, c);
    }
  `}function Ib(t,e,n){return k(t,e)?n?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(outTexShape[0], outTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(${e[0]}, ${e[1]}));
      }
    `:t[1]===1?n?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(index, 0);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${e[0]}, ${e[1]}));
        int index = resTexRC.x * ${e[1]} + resTexRC.y;
        return ivec2(index, 0);
      }
    `:t[0]===1?n?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${e[0]}, ${e[1]}));
        int index = resTexRC.x * ${e[1]} + resTexRC.y;
        return ivec2(0, index);
      }
    `:n?`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      int r = index / outShape[1];
      int c = index - r * outShape[1];
      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;
      int r = index / ${t[1]};
      int c = index - r * ${t[1]};
      return ivec2(r, c);
    }
  `}function Qt(t){return`offset${t}`}function Sb(t){const e=t.name,n="get"+e.charAt(0).toUpperCase()+e.slice(1),s=Be();return`
    vec4 ${n}() {
      return ${s.texture2D}(${e}, halfCR);
    }
  `}function Eb(t,e){const n=t.name,s="get"+n.charAt(0).toUpperCase()+n.slice(1);if(t.shapeInfo.isUniform)return`float ${s}() {return ${n};}`;const[r,o]=t.shapeInfo.texShape;if(r===1&&o===1)return`
      float ${s}() {
        return sampleTexture(${n}, halfCR);
      }
    `;const i=Qt(n);if(e)return`
    float ${s}() {
      vec2 uv = uvFromFlat(${n}TexShape[0], ${n}TexShape[1], ${i});
      return sampleTexture(${n}, uv);
    }
  `;const[c,a]=t.shapeInfo.texShape;return`
    float ${s}() {
      vec2 uv = uvFromFlat(${c}, ${a}, ${i});
      return sampleTexture(${n}, uv);
    }
  `}function kb(t,e){const n=t.name,s="get"+n.charAt(0).toUpperCase()+n.slice(1),r=t.shapeInfo.texShape,o=Be();if(e)return`
    vec4 ${s}(int index) {
      ivec2 packedTexShape = ivec2(ceil(float(${n}TexShape[0]) / 2.0), ceil(float(${n}TexShape[1]) / 2.0));
      vec2 uv = packedUVfrom1D(
        packedTexShape[0], packedTexShape[1], index);
      return ${o.texture2D}(${n}, uv);
    }
  `;const i=[Math.ceil(r[0]/2),Math.ceil(r[1]/2)];return`
    vec4 ${s}(int index) {
      vec2 uv = packedUVfrom1D(
        ${i[0]}, ${i[1]}, index);
      return ${o.texture2D}(${n}, uv);
    }
  `}function Tb(t,e){const n=t.name,s="get"+n.charAt(0).toUpperCase()+n.slice(1);if(t.shapeInfo.isUniform)return`
      float ${s}(int index) {
        ${$n(t)}
      }
    `;const r=t.shapeInfo.texShape,o=r[0],i=r[1];if(i===1&&o===1)return`
      float ${s}(int index) {
        return sampleTexture(${n}, halfCR);
      }
    `;const c=Qt(n);return i===1?e?`
      float ${s}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${c}) + 0.5) / float(${n}TexShape[0]));
        return sampleTexture(${n}, uv);
      }
    `:`
      float ${s}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${c}) + 0.5) / ${o}.0);
        return sampleTexture(${n}, uv);
      }
    `:o===1?e?`
      float ${s}(int index) {
        vec2 uv = vec2((float(index + ${c}) + 0.5) / float(${n}TexShape[1]), 0.5);
        return sampleTexture(${n}, uv);
      }
    `:`
      float ${s}(int index) {
        vec2 uv = vec2((float(index + ${c}) + 0.5) / ${i}.0, 0.5);
        return sampleTexture(${n}, uv);
      }
    `:e?`
    float ${s}(int index) {
      vec2 uv = uvFromFlat(${n}TexShape[0], ${n}TexShape[1], index + ${c});
      return sampleTexture(${n}, uv);
    }
  `:`
    float ${s}(int index) {
      vec2 uv = uvFromFlat(${o}, ${i}, index + ${c});
      return sampleTexture(${n}, uv);
    }
  `}function Rb(t,e){const n=t.shapeInfo.logicalShape,s=t.name,r="get"+s.charAt(0).toUpperCase()+s.slice(1),o=t.shapeInfo.texShape,i=o[0],c=o[1],a=Be();if(o!=null&&k(n,o))return e?`
      vec4 ${r}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${s}TexShape[1], ${s}TexShape[0]);

        return ${a.texture2D}(${s}, uv);
      }
    `:`
      vec4 ${r}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${c}.0, ${i}.0);

        return ${a.texture2D}(${s}, uv);
      }
    `;if(e)return`
    vec4 ${r}(int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${s}TexShape[0]) / 2.0), ceil(float(${s}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${s}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom2D(valuesPerRow, packedTexShape[0], packedTexShape[1], row, col);
      return ${a.texture2D}(${s}, uv);
    }
  `;const l=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)],u=Math.ceil(n[1]/2);return`
    vec4 ${r}(int row, int col) {
      vec2 uv = packedUVfrom2D(${u}, ${l[0]}, ${l[1]}, row, col);
      return ${a.texture2D}(${s}, uv);
    }
  `}function Nb(t,e){const n=t.shapeInfo.logicalShape,s=t.name,r="get"+s.charAt(0).toUpperCase()+s.slice(1),o=t.shapeInfo.texShape;if(o!=null&&k(n,o)){if(e)return`
      float ${r}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `;const h=o[0],f=o[1];return`
    float ${r}(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(${f}.0, ${h}.0);
      return sampleTexture(${s}, uv);
    }
  `}const{newShape:i,keptDims:c}=Ee(n),a=i;if(a.length<n.length){const h=In(t,a),f=["row","col"];return`
      ${vn(h,e)}
      float ${r}(int row, int col) {
        return ${r}(${Sn(f,c)});
      }
    `}if(t.shapeInfo.isUniform)return`
      float ${r}(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(${n[1]}, 1)));
        ${$n(t)}
      }
    `;const l=o[0],u=o[1],d=Qt(s);return u===1?e?`
      float ${r}(int row, int col) {
        float index = dot(vec3(row, col, ${d}), vec3(${s}Shape[1], 1, 1));
        vec2 uv = vec2(0.5, (index + 0.5) / float(${s}TexShape[0]));
        return sampleTexture(${s}, uv);
      }
    `:`
    float ${r}(int row, int col) {
      float index = dot(vec3(row, col, ${d}), vec3(${n[1]}, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / ${l}.0);
      return sampleTexture(${s}, uv);
    }
  `:l===1?e?`
      float ${r}(int row, int col) {
        float index = dot(vec3(row, col, ${d}), vec3(${s}Shape[1], 1, 1));
        vec2 uv = vec2((index + 0.5) / float(${s}TexShape[1]), 0.5);
        return sampleTexture(${s}, uv);
      }
    `:`
    float ${r}(int row, int col) {
      float index = dot(vec3(row, col, ${d}), vec3(${n[1]}, 1, 1));
      vec2 uv = vec2((index + 0.5) / ${u}.0, 0.5);
      return sampleTexture(${s}, uv);
    }
  `:e?`
      float ${r}(int row, int col) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${s}Shape[1] + col + ${d};
        vec2 uv = uvFromFlat(${s}TexShape[0], ${s}TexShape[1], index);
        return sampleTexture(${s}, uv);
      }
    `:`
  float ${r}(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * ${n[1]} + col + ${d};
    vec2 uv = uvFromFlat(${l}, ${u}, index);
    return sampleTexture(${s}, uv);
  }
`}function Ab(t,e){const n=t.shapeInfo.logicalShape,s=t.name,r="get"+s.charAt(0).toUpperCase()+s.slice(1),o=t.shapeInfo.texShape,i=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)];if(n[0]===1){const h=n.slice(1),f=[1,2],p=In(t,h),g=["b","row","col"];return`
        ${ll(p,e)}
        vec4 ${r}(int b, int row, int col) {
          return ${r}(${Sn(g,f)});
        }
      `}const c=Be();if(e)return`
    vec4 ${r}(int b, int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${s}TexShape[0]) / 2.0), ceil(float(${s}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${s}Shape[2]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${s}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom3D(
        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);
      return ${c.texture2D}(${s}, uv);
    }
  `;const a=i[0],l=i[1],u=Math.ceil(n[2]/2),d=u*Math.ceil(n[1]/2);return`
    vec4 ${r}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${a}, ${l}, ${d}, ${u}, b, row, col);
      return ${c.texture2D}(${s}, uv);
    }
  `}function _b(t,e){const n=t.shapeInfo.logicalShape,s=t.name,r="get"+s.charAt(0).toUpperCase()+s.slice(1),o=n[1]*n[2],i=n[2],{newShape:c,keptDims:a}=Ee(n),l=c;if(l.length<n.length){const g=In(t,l),m=["row","col","depth"];return`
        ${vn(g,e)}
        float ${r}(int row, int col, int depth) {
          return ${r}(${Sn(m,a)});
        }
      `}if(t.shapeInfo.isUniform)return`
      float ${r}(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(${o}, ${i}, 1)));
        ${$n(t)}
      }
    `;const u=t.shapeInfo.texShape,d=u[0],h=u[1],f=t.shapeInfo.flatOffset;if(h===o&&f==null)return e?`
      float ${r}(int row, int col, int depth) {
        int stride1 = ${s}Shape[2];
        float texR = float(row);
        float texC = dot(vec2(col, depth), vec2(stride1, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
        float ${r}(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(${i}, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(${h}.0, ${d}.0);
          return sampleTexture(${s}, uv);
        }
      `;if(h===i&&f==null)return e?`
      float ${r}(int row, int col, int depth) {
        float texR = dot(vec2(row, col), vec2(${s}Shape[1], 1));
        float texC = float(depth);
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
    float ${r}(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(${n[1]}, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${h}.0, ${d}.0);
      return sampleTexture(${s}, uv);
    }
  `;const p=Qt(s);return e?`
    float ${r}(int row, int col, int depth) {
      // Explicitly use integer operations as dot() only works on floats.
      int stride0 = ${s}Shape[1] * ${s}Shape[2];
      int stride1 = ${s}Shape[2];
      int index = row * ${o} + col * ${i} + depth + ${p};
      vec2 uv = uvFromFlat(${s}TexShape[0], ${s}TexShape[1], index);
      return sampleTexture(${s}, uv);
    }
    `:`
      float ${r}(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${o} + col * ${i} + depth + ${p};
        vec2 uv = uvFromFlat(${d}, ${h}, index);
        return sampleTexture(${s}, uv);
      }
  `}function Db(t,e){const n=t.name,s="get"+n.charAt(0).toUpperCase()+n.slice(1),r=Be();if(e)return`
    vec4 ${s}(int b2, int b, int row, int col) {
      int valuesPerRow = int(ceil(float(${n}Shape[3]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${n}Shape[2]) / 2.0));
      int index = b * texelsInBatch + (row / 2) * valuesPerRow + (col / 2);
      texelsInBatch *= ${n}Shape[1];
      index = b2 * texelsInBatch + index;
      ivec2 packedTexShape = ivec2(ceil(float(${n}TexShape[0]) / 2.0), ceil(float(${n}TexShape[1]) / 2.0));
      int texR = index / packedTexShape[1];
      int texC = index - texR * packedTexShape[1];
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(packedTexShape[1], packedTexShape[0]); return ${r.texture2D}(${n}, uv);
    }
  `;const o=t.shapeInfo.logicalShape,i=o.length,c=t.shapeInfo.texShape,a=[Math.ceil(c[0]/2),Math.ceil(c[1]/2)],l=a[0],u=a[1],d=Math.ceil(o[i-1]/2);let h=d*Math.ceil(o[i-2]/2),f="int b, int row, int col",p=`b * ${h} + (row / 2) * ${d} + (col / 2)`;for(let g=2;g<i-1;g++)f=`int b${g}, `+f,h*=o[i-g-1],p=`b${g} * ${h} + `+p;return`
    vec4 ${s}(${f}) {
      int index = ${p};
      int texR = index / ${u};
      int texC = index - texR * ${u};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${u}, ${l});
      return ${r.texture2D}(${n}, uv);
    }
  `}function Fb(t,e){const n=t.shapeInfo.logicalShape,s=t.name,r="get"+s.charAt(0).toUpperCase()+s.slice(1),o=n[3],i=n[2]*o,c=n[1]*i,{newShape:a,keptDims:l}=Ee(n);if(a.length<n.length){const b=In(t,a),y=["row","col","depth","depth2"];return`
      ${vn(b,e)}
      float ${r}(int row, int col, int depth, int depth2) {
        return ${r}(${Sn(y,l)});
      }
    `}if(t.shapeInfo.isUniform)return`
      float ${r}(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(${c}, ${i}, ${o}, 1)));
        ${$n(t)}
      }
    `;const u=t.shapeInfo.flatOffset,d=t.shapeInfo.texShape,h=d[0],f=d[1],p=`int stride2 = ${s}Shape[3];`,g=`int stride1 = ${s}Shape[2] * stride2;`,m=`int stride0 = ${s}Shape[1] * stride1;`;if(f===c&&u==null)return e?`
      float ${r}(int row, int col, int depth, int depth2) {
        ${p}
        ${g}
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(stride1, stride2, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
      float ${r}(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(${i}, ${o}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${f}.0, ${h}.0);
        return sampleTexture(${s}, uv);
      }
    `;if(f===o&&u==null)return e?`
      float ${r}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${s}Shape[1] * ${s}Shape[2], ${s}Shape[2], 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
      float ${r}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${n[1]*n[2]}, ${n[2]}, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${f}.0, ${h}.0);
        return sampleTexture(${s}, uv);
      }
    `;const x=Qt(s);return e?`
    float ${r}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      ${p}
      ${g}
      ${m}
      int index = row * stride0 + col * stride1 +
          depth * stride2 + depth2;
      vec2 uv = uvFromFlat(${s}TexShape[0], ${s}TexShape[1], index + ${x});
      return sampleTexture(${s}, uv);
    }
  `:`
    float ${r}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${c} + col * ${i} +
          depth * ${o} + depth2;
      vec2 uv = uvFromFlat(${h}, ${f}, index + ${x});
      return sampleTexture(${s}, uv);
    }
  `}function Pb(t){const e=t.shapeInfo.logicalShape,n=t.name,s="get"+n.charAt(0).toUpperCase()+n.slice(1),r=e[4],o=e[3]*r,i=e[2]*o,c=e[1]*i,{newShape:a,keptDims:l}=Ee(e);if(a.length<e.length){const g=In(t,a),m=["row","col","depth","depth2","depth3"];return`
      ${vn(g)}
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        return ${s}(${Sn(m,l)});
      }
    `}if(t.shapeInfo.isUniform)return`
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(${c}, ${i}, ${o}, ${r})) +
          depth3;
        ${$n(t)}
      }
    `;const u=t.shapeInfo.flatOffset,d=t.shapeInfo.texShape,h=d[0],f=d[1];if(f===c&&u==null)return`
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(${i}, ${o}, ${r}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${f}.0, ${h}.0);
        return sampleTexture(${n}, uv);
      }
    `;if(f===r&&u==null)return`
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(${e[1]*e[2]*e[3]},
               ${e[2]*e[3]}, ${e[3]}, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${f}.0, ${h}.0);
        return sampleTexture(${n}, uv);
      }
    `;const p=Qt(n);return`
    float ${s}(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${c} + col * ${i} + depth * ${o} +
          depth2 * ${r} + depth3 + ${p};
      vec2 uv = uvFromFlat(${h}, ${f}, index);
      return sampleTexture(${n}, uv);
    }
  `}function Ob(t){const e=t.shapeInfo.logicalShape,n=t.name,s="get"+n.charAt(0).toUpperCase()+n.slice(1),{newShape:r,keptDims:o}=Ee(e);if(r.length<e.length){const m=In(t,r),x=["row","col","depth","depth2","depth3","depth4"];return`
      ${vn(m)}
      float ${s}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return ${s}(${Sn(x,o)});
      }
    `}const i=e[5],c=e[4]*i,a=e[3]*c,l=e[2]*a,u=e[1]*l;if(t.shapeInfo.isUniform)return`
      float ${s}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(${u}, ${l}, ${a}, ${c})) +
          dot(
            vec2(depth3, depth4),
            vec2(${i}, 1)));
        ${$n(t)}
      }
    `;const d=t.shapeInfo.flatOffset,h=t.shapeInfo.texShape,f=h[0],p=h[1];if(p===u&&d==null)return`
      float ${s}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(${l}, ${a}, ${c}, ${i})) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${p}.0, ${f}.0);
        return sampleTexture(${n}, uv);
      }
    `;if(p===i&&d==null)return`
      float ${s}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(${e[1]*e[2]*e[3]*e[4]},
               ${e[2]*e[3]*e[4]},
               ${e[3]*e[4]},
               ${e[4]})) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${p}.0, ${f}.0);
        return sampleTexture(${n}, uv);
      }
    `;const g=Qt(n);return`
    float ${s}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${u} + col * ${l} + depth * ${a} +
          depth2 * ${c} + depth3 * ${i} + depth4 + ${g};
      vec2 uv = uvFromFlat(${f}, ${p}, index);
      return sampleTexture(${n}, uv);
    }
  `}function $n(t){const e=t.name,n=D(t.shapeInfo.logicalShape);return n<2?`return ${e};`:`
    for (int i = 0; i < ${n}; i++) {
      if (i == index) {
        return ${e}[i];
      }
    }
  `}function Lb(t,e){const n=t.name,s=n.charAt(0).toUpperCase()+n.slice(1),r="get"+s+"AtOutCoords",o=t.shapeInfo.logicalShape.length,i=e.logicalShape.length,c=cl(t.shapeInfo.logicalShape,e.logicalShape),a=me(i),l=i-o;let u;const d=["x","y","z","w","u","v"];o===0?u="":i<2&&c.length>=1?u="coords = 0;":u=c.map(b=>`coords.${d[b+l]} = 0;`).join(`
`);let h="";i<2&&o>0?h="coords":h=t.shapeInfo.logicalShape.map((b,y)=>`coords.${d[y+l]}`).join(", ");let f="return outputValue;";const g=D(t.shapeInfo.logicalShape)===1,x=D(e.logicalShape)===1;if(o===1&&!g&&!x)f=`
      return vec4(outputValue.xy, outputValue.xy);
    `;else if(g&&!x)i===1?f=`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:f=`
        return vec4(outputValue.x);
      `;else if(c.length){const b=o-2,y=o-1;c.indexOf(b)>-1&&c.indexOf(y)>-1?f="return vec4(outputValue.x);":c.indexOf(b)>-1?f="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":c.indexOf(y)>-1&&(f="return vec4(outputValue.xx, outputValue.zz);")}return`
    vec4 ${r}() {
      ${a} coords = getOutputCoords();
      ${u}
      vec4 outputValue = get${s}(${h});
      ${f}
    }
  `}function Bb(t,e){const n=t.name,s=n.charAt(0).toUpperCase()+n.slice(1),r="get"+s+"AtOutCoords",o=e.texShape,i=t.shapeInfo.texShape,c=t.shapeInfo.logicalShape.length,a=e.logicalShape.length;if(!t.shapeInfo.isUniform&&c===a&&t.shapeInfo.flatOffset==null&&k(i,o))return`
      float ${r}() {
        return sampleTexture(${n}, resultUV);
      }
    `;const l=me(a),u=cl(t.shapeInfo.logicalShape,e.logicalShape),d=a-c;let h;const f=["x","y","z","w","u","v"];c===0?h="":a<2&&u.length>=1?h="coords = 0;":h=u.map(g=>`coords.${f[g+d]} = 0;`).join(`
`);let p="";return a<2&&c>0?p="coords":p=t.shapeInfo.logicalShape.map((g,m)=>`coords.${f[m+d]}`).join(", "),`
    float ${r}() {
      ${l} coords = getOutputCoords();
      ${h}
      return get${s}(${p});
    }
  `}function me(t){if(t<=1)return"int";if(t===2)return"ivec2";if(t===3)return"ivec3";if(t===4)return"ivec4";if(t===5)return"ivec5";if(t===6)return"ivec6";throw Error(`GPU for rank ${t} is not yet supported`)}function Po(t,e,n){const{newShape:s,keptDims:r}=Ee(e),o=e.length,i=t&&o===3&&e[0]===1,c=i?e.slice(1):s,a=!t&&o>1&&!k(e,n)&&s.length<o||i;return{useSqueezeShape:a,uniformShape:a?c:e,keptDims:r}}function In(t,e){const n=JSON.parse(JSON.stringify(t));return n.shapeInfo.logicalShape=e,n}function Sn(t,e){return e.map(n=>t[n]).join(", ")}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */function Mb(t,e,n,s){const r=n.map((C,v)=>{const R={logicalShape:C.shape,texShape:C.isUniform?null:C.texData.texShape,isUniform:C.isUniform,isPacked:C.isUniform?!1:C.texData.isPacked,flatOffset:null};return C.texData!=null&&C.texData.slice!=null&&C.texData.slice.flatOffset>0&&(R.flatOffset=C.texData.slice.flatOffset),{name:e.variableNames[v],shapeInfo:R}}),o=r.map(C=>C.shapeInfo),i={logicalShape:s.shape,texShape:s.texData.texShape,isUniform:!1,isPacked:s.texData.isPacked,flatOffset:null},c=sb(r,i,e),a=_x(t.gl,c),l=t.createProgram(a);let u=null;const d=t.getUniformLocation(l,"NAN",!1);S().getNumber("WEBGL_VERSION")===1&&(u=t.getUniformLocation(l,"INFINITY",!1));const h=!1,f={},p={},g={};for(let C=0;C<e.variableNames.length;C++){const v=e.variableNames[C];f[v]=t.getUniformLocation(l,v,h),f[`offset${v}`]=t.getUniformLocation(l,`offset${v}`,h),e.enableShapeUniforms&&(p[`${v}Shape`]=t.getUniformLocation(l,`${v}Shape`,h),g[`${v}TexShape`]=t.getUniformLocation(l,`${v}TexShape`,h))}let m,x,b;e.enableShapeUniforms&&(m=t.getUniformLocation(l,"outShape",h),b=t.getUniformLocation(l,"outShapeStrides",h),x=t.getUniformLocation(l,"outTexShape",h));const y=[];return e.customUniforms&&e.customUniforms.forEach((C,v)=>{y[v]=t.getUniformLocation(l,C.name,h)}),{program:e,fragmentShader:a,source:c,webGLProgram:l,uniformLocations:f,customUniformLocations:y,inShapeInfos:o,outShapeInfo:i,infLoc:u,nanLoc:d,inShapesLocations:p,inTexShapesLocations:g,outShapeLocation:m,outShapeStridesLocation:b,outTexShapeLocation:x}}function dl(t,e){if(t.length!==e.length)throw Error(`Binary was compiled with ${t.length} inputs, but was executed with ${e.length} inputs`);t.forEach((n,s)=>{const r=n.logicalShape,o=e[s],i=o.shape;if(!k(r,i))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${r} and ${i} must match`);if(n.isUniform&&o.isUniform)return;const c=n.texShape,a=o.isUniform?null:o.texData.texShape;if(!k(c,a))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${c} and ${a} must match`)})}function Vb(t,e,n,s,r){e.program.enableShapeUniforms||(dl(e.inShapeInfos,n),dl([e.outShapeInfo],[s]));const o=s.texData.texture,i=s.texData.texShape;s.texData.isPacked?t.setOutputPackedMatrixTexture(o.texture,i[0],i[1]):t.setOutputMatrixTexture(o.texture,i[0],i[1]),t.setProgram(e.webGLProgram),S().getNumber("WEBGL_VERSION")===1&&e.infLoc!==null&&t.gl.uniform1f(e.infLoc,1/0),e.nanLoc!==null&&t.gl.uniform1f(e.nanLoc,NaN),n.forEach((a,l)=>{const u=e.program.variableNames[l],d=e.uniformLocations[u],h=e.uniformLocations[`offset${u}`],f=e.inShapesLocations[`${u}Shape`],p=e.inTexShapesLocations[`${u}TexShape`];if(f){const{uniformShape:g}=Po(e.program.packedInputs,a.shape,a.texData.texShape);switch(g.length){case 1:t.gl.uniform1iv(f,new Int32Array(g));break;case 2:t.gl.uniform2iv(f,new Int32Array(g));break;case 3:t.gl.uniform3iv(f,new Int32Array(g));break;case 4:t.gl.uniform4iv(f,new Int32Array(g));break;default:break}}if(p&&t.gl.uniform2i(p,a.texData.texShape[0],a.texData.texShape[1]),d!=null){if(a.isUniform){if(D(a.shape)<2)t.gl.uniform1f(d,a.uniformValues[0]);else{let g=a.uniformValues;g instanceof Float32Array||(g=new Float32Array(g)),t.gl.uniform1fv(d,g)}return}a.texData.slice!=null&&h!=null&&t.gl.uniform1i(h,a.texData.slice.flatOffset),t.setInputMatrixTexture(a.texData.texture.texture,d,l)}});const c=e.outShapeLocation;if(c)switch(s.shape.length){case 1:t.gl.uniform1iv(c,new Int32Array(s.shape));break;case 2:t.gl.uniform2iv(c,new Int32Array(s.shape));break;case 3:t.gl.uniform3iv(c,new Int32Array(s.shape));break;case 4:t.gl.uniform4iv(c,new Int32Array(s.shape));break;default:break}if(e.outShapeStridesLocation){const a=Re(s.shape);switch(s.shape.length){case 2:t.gl.uniform1iv(e.outShapeStridesLocation,new Int32Array(a));break;case 3:t.gl.uniform2iv(e.outShapeStridesLocation,new Int32Array(a));break;case 4:t.gl.uniform3iv(e.outShapeStridesLocation,new Int32Array(a));break;default:break}}e.outTexShapeLocation&&t.gl.uniform2i(e.outTexShapeLocation,s.texData.texShape[0],s.texData.texShape[1]),e.program.customUniforms&&r&&e.program.customUniforms.forEach((a,l)=>{const u=e.customUniformLocations[l],d=r[l];if(a.type==="float")t.gl.uniform1fv(u,d);else if(a.type==="vec2")t.gl.uniform2fv(u,d);else if(a.type==="vec3")t.gl.uniform3fv(u,d);else if(a.type==="vec4")t.gl.uniform4fv(u,d);else if(a.type==="int")t.gl.uniform1iv(u,d);else if(a.type==="ivec2")t.gl.uniform2iv(u,d);else if(a.type==="ivec3")t.gl.uniform3iv(u,d);else if(a.type==="ivec4")t.gl.uniform4iv(u,d);else throw Error(`uniform type ${a.type} is not supported yet.`)}),t.executeProgram()}function Ub(t,e,n){let s="";e.concat(n).forEach(i=>{const c=i.texData!=null&&i.texData.slice!=null&&i.texData.slice.flatOffset>0;if(t.enableShapeUniforms&&!i.isUniform){const a=i.texData.texShape,{useSqueezeShape:l,uniformShape:u,keptDims:d}=Po(t.packedInputs,i.shape,a);let h="",f="",p="";if(u.length===1&&t.packedInputs){const v=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)];h=`${v[0]>1}_${v[1]>1}`}else if(u.length===2&&!t.packedInputs)f=`${u[0]>1}_${u[1]>1}`;else if(u.length>2&&!t.packedInputs){const v=Re(u);p=`${v[0]===a[1]}_${v[v.length-1]===a[1]}`}const g=i.shape.length,m=u.length===2&&k(i.shape,a),x=D(i.shape)===1,b=un(i.shape,n.shape),y=!t.packedInputs&&g===n.shape.length&&k(a,n.texData.texShape),C=t.packedInputs||u.length>2?"":`${a[0]>1}_${a[1]>1}`;s+=`${g}_${y}_${l?d:""}_${u.length}_${x}_${b}_${m}_${h}_${f}_${p}_${C}_${c}`}else{const a=i.isUniform?"uniform":i.texData.texShape;s+=`${i.shape}_${a}_${c}`}});const r=t.userCode;let o=t.constructor.name;return o+="_"+s+"_"+r+`${S().getNumber("WEBGL_VERSION")}`,o}function ze(t){return S().getBool("WEBGL_USE_SHAPES_UNIFORMS")&&t<=4}/**
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
 */class Wb{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=Kn.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const n=Be();this.outputShape=e,this.enableShapeUniforms=ze(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?Zs(["r","c","d"],e):Yt(["r","c","d"],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        ${n.output} = result;
      }
    `}}/**
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
 */class Gb{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=Kn.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const n=Be();this.outputShape=e,this.enableShapeUniforms=ze(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?Zs(["r","c","d"],e):Yt(["r","c","d"],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        ${n.output} = result;
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */class zb{constructor(e){this.variableNames=["A"],this.outTexUsage=tt.DOWNLOAD;const n=Be();this.outputShape=e,this.userCode=`
      ${al}

      void main() {
        float x = getAAtOutCoords();
        ${n.output} = encode_float(x);
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */class Hb{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=tt.DOWNLOAD;const n=Be();this.outputShape=e,this.userCode=`
      ${al}

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ${n.output} = encode_float(x);
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */class Xb{constructor(e,n=!1){this.variableNames=["A"],this.customUniforms=[{name:"texShape",type:"ivec2"}];const s=Be();this.outputShape=e,this.enableShapeUniforms=ze(this.outputShape.length);let r="result";n&&(r="floor(result * 255. + 0.5)"),this.userCode=`
      ${this.enableShapeUniforms?Fo():Do(e)}

      void main() {
        ivec3 coords = getOutputCoords();

        int flatIndex = getFlatIndex(coords);
        int offset = imod(flatIndex, 4);

        flatIndex = idiv(flatIndex, 4, 1.);

        int r = flatIndex / texShape[1];
        int c = imod(flatIndex, texShape[1]);
        vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
        vec4 values = ${s.texture2D}(A, uv);

        float result;

        if(offset == 0) {
          result = values[0];
        } else if(offset == 1) {
          result = values[1];
        } else if(offset == 2) {
          result = values[2];
        } else {
          result = values[3];
        }

        ${s.output} = vec4(${r}, 0., 0., 0.);
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */class qb{constructor(e,n=!1){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:"texShape",type:"ivec2"}];const s=Be();this.outputShape=e,this.enableShapeUniforms=ze(this.outputShape.length);let r="",o="result";n&&(o="floor(result * 255. + 0.5)");for(let i=0;i<=1;i++)for(let c=0;c<=1;c++){const a=i*2+c;r+=`
          localCoords = coords;
          if(localCoords[2] + ${c} < ${this.enableShapeUniforms?"outShape[2]":`${e[2]}`}) {
          localCoords[2] += ${c};
          if (localCoords[1] + ${i} < ${this.enableShapeUniforms?"outShape[1]":`${e[1]}`}) {
            localCoords[1] += ${i};

            flatIndex = getFlatIndex(localCoords);
            offset = imod(flatIndex, 4);

            flatIndex = idiv(flatIndex, 4, 1.);

            int r = flatIndex / texShape[1];
            int c = imod(flatIndex, texShape[1]);
            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
            values = ${s.texture2D}(A, uv);

            if (offset == 0) {
              result[${a}] = values[0];
            } else if (offset == 1) {
              result[${a}] = values[1];
            } else if (offset == 2) {
              result[${a}] = values[2];
            } else {
              result[${a}] = values[3];
            }
          }
        }
        `}this.userCode=`
        ${this.enableShapeUniforms?Fo():Do(e)}

        void main() {
          ivec3 coords = getOutputCoords();

          vec4 result = vec4(0.);
          int flatIndex, r, c, offset;
          ivec3 localCoords;
          vec2 uv;
          vec4 values;

          ${r}

          ${s.output} = ${o};
        }
    `}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */function Kb(t){const e=Be(),n=`${e.version}
    precision highp float;
    ${e.attribute} vec3 clipSpacePos;
    ${e.attribute} vec2 uv;
    ${e.varyingVs} vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`;return Ax(t,n)}function jb(t){const e=new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]);return Lx(t,e)}function Yb(t){const e=new Uint16Array([0,1,2,2,1,3]);return Bx(t,e)}function Qn(t,e,n,s,r,o){Vx(e,n);const i=Mx(t),c=t.TEXTURE_2D;return L(t,()=>t.bindTexture(c,i)),L(t,()=>t.texParameteri(c,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE)),L(t,()=>t.texParameteri(c,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)),L(t,()=>t.texParameteri(c,t.TEXTURE_MIN_FILTER,t.NEAREST)),L(t,()=>t.texParameteri(c,t.TEXTURE_MAG_FILTER,t.NEAREST)),S().getNumber("WEBGL_VERSION")===1?L(t,()=>t.texImage2D(c,0,s,e,n,0,r,o,null)):L(t,()=>t.texStorage2D(c,1,s,e,n)),L(t,()=>t.bindTexture(t.TEXTURE_2D,null)),{texture:i,texShape:[n,e]}}function hl(t){return t.internalFormatFloat}function Qb(t,e,n,s){const[r,o]=jn(e,n);return Qn(t,r,o,hl(s),s.textureFormatFloat,t.FLOAT)}function fl(t){return t.internalFormatHalfFloat}function Zb(t,e,n,s){const[r,o]=jn(e,n);return Qn(t,r,o,fl(s),s.textureFormatFloat,s.textureTypeHalfFloat)}function pl(t){return t.downloadTextureFormat}function Jb(t,e,n,s){const[r,o]=jn(e,n);return Qn(t,r,o,pl(s),t.RGBA,t.UNSIGNED_BYTE)}function gl(t){return t.internalFormatPackedFloat}function e0(t,e,n,s){const[r,o]=wn(e,n);return Qn(t,r,o,gl(s),t.RGBA,t.FLOAT)}function ml(t){return t.internalFormatPackedHalfFloat}function t0(t,e,n,s){const[r,o]=wn(e,n);return Qn(t,r,o,ml(s),t.RGBA,s.textureTypeHalfFloat)}function n0(t,e,n){return L(t,()=>t.bindBuffer(t.ARRAY_BUFFER,n)),sl(t,e,"clipSpacePos",n,3,20,0)&&sl(t,e,"uv",n,2,20,12)}function s0(t,e,n,s,r,o){L(t,()=>t.bindTexture(t.TEXTURE_2D,e));let i,c,a;r instanceof Uint8Array?(i=new Uint8Array(n*s*4),c=t.UNSIGNED_BYTE,a=t.RGBA):(i=new Float32Array(n*s*4),c=t.FLOAT,a=o.internalFormatPackedFloat),i.set(r),S().getNumber("WEBGL_VERSION")===2?L(t,()=>t.texSubImage2D(t.TEXTURE_2D,0,0,0,n,s,t.RGBA,c,i)):L(t,()=>t.texImage2D(t.TEXTURE_2D,0,a,n,s,0,t.RGBA,c,i)),L(t,()=>t.bindTexture(t.TEXTURE_2D,null))}function r0(t,e,n){L(t,()=>t.bindTexture(t.TEXTURE_2D,e)),n.data instanceof Uint8Array?S().getNumber("WEBGL_VERSION")===2?L(t,()=>t.texSubImage2D(t.TEXTURE_2D,0,0,0,n.width,n.height,t.RGBA,t.UNSIGNED_BYTE,n.data)):L(t,()=>t.texImage2D(t.TEXTURE_2D,0,t.RGBA,n.width,n.height,0,t.RGBA,t.UNSIGNED_BYTE,n.data)):S().getNumber("WEBGL_VERSION")===2?L(t,()=>t.texSubImage2D(t.TEXTURE_2D,0,0,0,t.RGBA,t.UNSIGNED_BYTE,n)):L(t,()=>t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,n)),L(t,()=>t.bindTexture(t.TEXTURE_2D,null))}function o0(t,e,n,s){const r=t.createBuffer();L(t,()=>t.bindBuffer(t.PIXEL_PACK_BUFFER,r));const c=4*4*e*n;return L(t,()=>t.bufferData(t.PIXEL_PACK_BUFFER,c,t.STREAM_READ)),L(t,()=>t.readPixels(0,0,n,e,t.RGBA,t.FLOAT,0)),L(t,()=>t.bindBuffer(t.PIXEL_PACK_BUFFER,null)),r}function i0(t,e,n){const s=t,r=new Float32Array(n);return s.bindBuffer(s.PIXEL_PACK_BUFFER,e),s.getBufferSubData(s.PIXEL_PACK_BUFFER,0,r),s.bindBuffer(s.PIXEL_PACK_BUFFER,null),r}function a0(t,e,n,s){const[r,o]=jn(e,n),i=4,c=new Uint8Array(Ix(e*n,i));return L(t,()=>t.readPixels(0,0,r,o,s.downloadTextureFormat,t.UNSIGNED_BYTE,c)),new Float32Array(c.buffer)}function c0(t,e,n,s,r,o,i,c){const a=t,l=new Float32Array(Sx(o,i));return a.bindBuffer(a.PIXEL_PACK_BUFFER,e),a.getBufferSubData(a.PIXEL_PACK_BUFFER,0,l),a.bindBuffer(a.PIXEL_PACK_BUFFER,null),l}function l0(t,e,n){const s=new Float32Array(e*n*4);return L(t,()=>t.readPixels(0,0,n,e,t.RGBA,t.FLOAT,s)),s}var u0=(t,e,n)=>new Promise((s,r)=>{var o=a=>{try{c(n.next(a))}catch(l){r(l)}},i=a=>{try{c(n.throw(a))}catch(l){r(l)}},c=a=>a.done?s(a.value):Promise.resolve(a.value).then(o,i);c((n=n.apply(t,e)).next())});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */class Oo{constructor(e){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];const n=S().getNumber("WEBGL_VERSION");e!=null?(this.gl=e,Cx(n,e)):this.gl=mt(n);let s="WEBGL_color_buffer_float";const r="EXT_color_buffer_half_float";if(S().getNumber("WEBGL_VERSION")===1){const o="OES_texture_float",i="OES_texture_half_float";if(this.textureFloatExtension=Xs(this.gl,o),it(this.gl,i))this.textureHalfFloatExtension=Xs(this.gl,i);else if(S().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(s),it(this.gl,r))this.colorBufferHalfFloatExtension=Xs(this.gl,r);else if(S().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(s="EXT_color_buffer_float",it(this.gl,s))this.colorBufferFloatExtension=this.gl.getExtension(s);else if(it(this.gl,r))this.colorBufferHalfFloatExtension=this.gl.getExtension(r);else throw new Error("GL context does not support color renderable floats");this.vertexBuffer=jb(this.gl),this.indexBuffer=Yb(this.gl),this.framebuffer=Ux(this.gl),this.textureConfig=To(this.gl,this.textureHalfFloatExtension)}get debug(){return S().getBool("DEBUG")}dispose(){if(this.disposed)return;this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");const e=this.gl;L(e,()=>e.finish()),L(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,null)),L(e,()=>e.deleteFramebuffer(this.framebuffer)),L(e,()=>e.bindBuffer(e.ARRAY_BUFFER,null)),L(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)),L(e,()=>e.deleteBuffer(this.indexBuffer)),this.disposed=!0}createFloat32MatrixTexture(e,n){return this.throwIfDisposed(),Qb(this.gl,e,n,this.textureConfig)}createFloat16MatrixTexture(e,n){return this.throwIfDisposed(),Zb(this.gl,e,n,this.textureConfig)}createUnsignedBytesMatrixTexture(e,n){return this.throwIfDisposed(),Jb(this.gl,e,n,this.textureConfig)}uploadPixelDataToTexture(e,n){this.throwIfDisposed(),r0(this.gl,e,n)}uploadDenseMatrixToTexture(e,n,s,r){this.throwIfDisposed(),s0(this.gl,e,n,s,r,this.textureConfig)}createFloat16PackedMatrixTexture(e,n){return this.throwIfDisposed(),t0(this.gl,e,n,this.textureConfig)}createPackedMatrixTexture(e,n){return this.throwIfDisposed(),e0(this.gl,e,n,this.textureConfig)}deleteMatrixTexture(e){this.throwIfDisposed(),this.outputTexture===e&&(rl(this.gl,this.framebuffer),this.outputTexture=null),L(this.gl,()=>this.gl.deleteTexture(e))}downloadByteEncodedFloatMatrixFromOutputTexture(e,n,s){return this.downloadMatrixDriver(e,()=>a0(this.gl,n,s,this.textureConfig))}downloadPackedMatrixFromBuffer(e,n,s,r,o,i){return c0(this.gl,e,n,s,r,o,i,this.textureConfig)}downloadFloat32MatrixFromBuffer(e,n){return i0(this.gl,e,n)}createBufferFromTexture(e,n,s){this.bindTextureToFrameBuffer(e);const r=o0(this.gl,n,s,this.textureConfig);return this.unbindTextureToFrameBuffer(),r}createAndWaitForFence(){const e=this.createFence(this.gl);return this.pollFence(e)}createFence(e){let n,s;if(S().getBool("WEBGL_FENCE_API_ENABLED")){const r=e,o=r.fenceSync(r.SYNC_GPU_COMMANDS_COMPLETE,0);e.flush(),s=()=>{const i=r.clientWaitSync(o,0,0);return i===r.ALREADY_SIGNALED||i===r.CONDITION_SATISFIED},n=o}else S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(n=this.beginQuery(),this.endQuery(),s=()=>this.isQueryAvailable(n,S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))):s=()=>!0;return{query:n,isFencePassed:s}}downloadMatrixFromPackedTexture(e,n,s){return this.downloadMatrixDriver(e,()=>l0(this.gl,n,s))}createProgram(e){this.throwIfDisposed();const n=this.gl;this.vertexShader==null&&(this.vertexShader=Kb(n));const s=Px(n);return L(n,()=>n.attachShader(s,this.vertexShader)),L(n,()=>n.attachShader(s,e)),Ox(n,s),this.debug&&Ro(n,s),this.vertexAttrsAreBound||(this.setProgram(s),this.vertexAttrsAreBound=n0(n,this.program,this.vertexBuffer)),s}deleteProgram(e){this.throwIfDisposed(),e===this.program&&(this.program=null),e!=null&&L(this.gl,()=>this.gl.deleteProgram(e))}setProgram(e){this.throwIfDisposed(),this.program=e,this.program!=null&&this.debug&&Ro(this.gl,this.program),L(this.gl,()=>this.gl.useProgram(e))}getUniformLocation(e,n,s=!0){return this.throwIfDisposed(),s?Gx(this.gl,e,n):zx(this.gl,e,n)}getAttributeLocation(e,n){return this.throwIfDisposed(),L(this.gl,()=>this.gl.getAttribLocation(e,n))}getUniformLocationNoThrow(e,n){return this.throwIfDisposed(),this.gl.getUniformLocation(e,n)}setInputMatrixTexture(e,n,s){this.throwIfDisposed(),this.throwIfNoProgram(),Hx(this.gl,e,n,s)}setOutputMatrixTexture(e,n,s){this.setOutputMatrixTextureDriver(e,s,n)}setOutputPackedMatrixTexture(e,n,s){this.throwIfDisposed();const[r,o]=wn(n,s);this.setOutputMatrixTextureDriver(e,r,o)}setOutputMatrixWriteRegion(e,n,s,r){this.setOutputMatrixWriteRegionDriver(s,e,r,n)}setOutputPackedMatrixWriteRegion(e,n,s,r){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")}debugValidate(){this.program!=null&&Ro(this.gl,this.program),qs(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();const e=this.gl;this.debug&&this.debugValidate(),L(e,()=>e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),L(this.gl,()=>this.gl.finish())}getQueryTimerExtension(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=Xs(this.gl,S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if(S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){const s=this.gl,r=this.getQueryTimerExtensionWebGL2(),o=s.createQuery();return s.beginQuery(r.TIME_ELAPSED_EXT,o),o}const e=this.getQueryTimerExtensionWebGL1(),n=e.createQueryEXT();return e.beginQueryEXT(e.TIME_ELAPSED_EXT,n),n}endQuery(){if(S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){const n=this.gl,s=this.getQueryTimerExtensionWebGL2();n.endQuery(s.TIME_ELAPSED_EXT);return}const e=this.getQueryTimerExtensionWebGL1();e.endQueryEXT(e.TIME_ELAPSED_EXT)}waitForQueryAndGetTime(e){return u0(this,null,function*(){return yield pe(()=>this.disposed||this.isQueryAvailable(e,S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))),this.getQueryTime(e,S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))})}getQueryTime(e,n){if(n===0)return null;if(n===2){const s=this.gl;return s.getQueryParameter(e,s.QUERY_RESULT)/1e6}else{const s=this.getQueryTimerExtensionWebGL1();return s.getQueryObjectEXT(e,s.QUERY_RESULT_EXT)/1e6}}isQueryAvailable(e,n){if(n===0)return!0;if(n===2){const s=this.gl,r=this.getQueryTimerExtensionWebGL2(),o=s.getQueryParameter(e,s.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(r.GPU_DISJOINT_EXT)),o&&!this.disjoint}else{const s=this.getQueryTimerExtensionWebGL1(),r=s.getQueryObjectEXT(e,s.QUERY_RESULT_AVAILABLE_EXT);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(s.GPU_DISJOINT_EXT)),r&&!this.disjoint}}pollFence(e){return new Promise(n=>{this.addItemToPoll(()=>e.isFencePassed(),()=>n())})}pollItems(){const e=d0(this.itemsToPoll.map(n=>n.isDoneFn));for(let n=0;n<=e;++n){const{resolveFn:s}=this.itemsToPoll[n];s()}this.itemsToPoll=this.itemsToPoll.slice(e+1)}addItemToPoll(e,n){this.itemsToPoll.push({isDoneFn:e,resolveFn:n}),!(this.itemsToPoll.length>1)&&pe(()=>(this.pollItems(),this.itemsToPoll.length===0))}bindTextureToFrameBuffer(e){this.throwIfDisposed(),No(this.gl,e,this.framebuffer),this.debug&&qs(this.gl)}unbindTextureToFrameBuffer(){this.outputTexture!=null?(No(this.gl,this.outputTexture,this.framebuffer),this.debug&&qs(this.gl)):rl(this.gl,this.framebuffer)}downloadMatrixDriver(e,n){this.bindTextureToFrameBuffer(e);const s=n();return this.unbindTextureToFrameBuffer(),s}setOutputMatrixTextureDriver(e,n,s){this.throwIfDisposed();const r=this.gl;No(r,e,this.framebuffer),this.debug&&qs(r),this.outputTexture=e,L(r,()=>r.viewport(0,0,n,s)),L(r,()=>r.scissor(0,0,n,s))}setOutputMatrixWriteRegionDriver(e,n,s,r){this.throwIfDisposed(),L(this.gl,()=>this.gl.scissor(e,n,s,r))}throwIfDisposed(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")}throwIfNoProgram(){if(this.program==null)throw new Error("No GPU program is currently set.")}}function d0(t){let e=0;for(;e<t.length&&t[e]();++e);return e-1}/**
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
 */function Ot(t,e){Array.isArray(t)||(t=[t]),t.forEach(n=>{n!=null&&$(n.dtype!=="complex64",()=>`${e} does not support complex64 tensors in the CPU backend.`)})}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xl(t){const e=new Float32Array(t.length);for(let n=0;n<t.length;++n)e[n]=Math.abs(t[n]);return e}const yk={kernelName:yr,backendName:"cpu",kernelFunc:t=>{const{x:e}=t.inputs,n=t.backend;Ot(e,"abs");let s=new Float32Array(D(e.shape));const r=n.data.get(e.dataId).values;return s=xl(r),n.makeOutput(s,e.shape,e.dtype)}};/**
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
 */function nt(t){return(e,n,s,r,o)=>{const i=we(e,n),c=i.length,a=Re(i),l=D(i),u=xe(o,l),d=e.length,h=n.length,f=Re(e),p=Re(n),g=un(e,i),m=un(n,i);if(g.length+m.length===0)for(let x=0;x<u.length;++x)u[x]=t(s[x%s.length],r[x%r.length]);else for(let x=0;x<u.length;++x){const b=xr(x,c,a),y=b.slice(-d);g.forEach(T=>y[T]=0);const C=Pn(y,d,f),v=b.slice(-h);m.forEach(T=>v[T]=0);const R=Pn(v,h,p);u[x]=t(s[C],r[R])}return[u,i]}}/**
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
 */function er(t){const{inputs:e,backend:n}=t,{real:s,imag:r}=e,o=n.data.get(s.dataId).values,i=n.data.get(r.dataId).values,c=n.makeTensorInfo(s.shape,"complex64"),a=n.data.get(c.dataId);return a.complexTensorInfos={real:n.makeTensorInfo(s.shape,"float32",o),imag:n.makeTensorInfo(r.shape,"float32",i)},c}const Ck={kernelName:vr,backendName:"cpu",kernelFunc:er};/**
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
 */function Lo(t,e,n="float32"){if(n==="complex64"){const r=Lo(t,e,"float32"),o=Lo(t,e,"float32");return er({inputs:{real:r,imag:o},backend:t})}const s=St(D(e),n);return t.makeTensorInfo(e,n,s)}/**
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
 */function Bo(t){const{inputs:e,backend:n}=t,{x:s}=e;return n.incRef(s.dataId),{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}const vk={kernelName:us,backendName:"cpu",kernelFunc:Bo};/**
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
 */function bl(t){const{inputs:e,backend:n}=t,{input:s}=e,r=n.data.get(s.dataId).complexTensorInfos.real,o=n.data.get(r.dataId).values;return n.makeTensorInfo(r.shape,r.dtype,o)}const $k={kernelName:Rr,backendName:"cpu",kernelFunc:bl};/**
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
 */function Zn(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{dtype:o}=s;if(o==="complex64"){if(r.dtype==="complex64")return Bo({inputs:{x:r},backend:n});const i=Lo(n,r.shape,r.dtype),c=Zn({inputs:{x:r},backend:n,attrs:{dtype:"float32"}}),a=er({inputs:{real:c,imag:i},backend:n});return n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(c),a}if(r.dtype==="complex64"){const i=bl({inputs:{input:r},backend:n}),c=Zn({inputs:{x:i},backend:n,attrs:{dtype:o}});return n.disposeIntermediateTensorInfo(i),c}if(!Fe(r.dtype,o)){const i=Bo({inputs:{x:r},backend:n});return{dataId:i.dataId,shape:i.shape,dtype:o}}if(o==="int32"){const i=n.data.get(r.dataId).values,c=Int32Array.from(i);return n.makeTensorInfo(r.shape,"int32",c)}if(o==="bool"){const i=n.data.get(r.dataId).values,c=vs([0],r.dtype),[a,l]=nt((u,d)=>u!==d?1:0)(r.shape,[],i,c,"bool");return n.makeTensorInfo(l,"bool",a)}throw new Error(`Error in Cast: failed to cast ${r.dtype} to ${o}`)}const Ik={kernelName:is,backendName:"cpu",kernelFunc:Zn};/**
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
 */function at(t,e,n,s){return n==null?({inputs:r,backend:o})=>{const{a:i,b:c}=r,a=o;Ot([i,c],t);const l=a.data.get(i.dataId).values,u=a.data.get(c.dataId).values,d=i.dtype==="string"?jt(l):l,h=i.dtype==="string"?jt(u):u,f=s||i.dtype,[p,g]=e(i.shape,c.shape,d,h,f);return a.makeTensorInfo(g,f,p)}:({inputs:r,backend:o})=>{const{a:i,b:c}=r,a=o;if(i.dtype==="complex64"||c.dtype==="complex64"){const l=Zn({inputs:{x:i},backend:a,attrs:{dtype:"complex64"}}),u=a.data.get(l.dataId),d=u.complexTensorInfos.real,h=u.complexTensorInfos.imag,f=a.data.get(d.dataId).values,p=a.data.get(h.dataId).values,g=Zn({inputs:{x:c},backend:a,attrs:{dtype:"complex64"}}),m=a.data.get(g.dataId),x=m.complexTensorInfos.real,b=m.complexTensorInfos.imag,y=a.data.get(x.dataId).values,C=a.data.get(b.dataId).values,[v,R,T]=n(i.shape,c.shape,f,p,y,C),_=a.makeTensorInfo(T,"float32",v),M=a.makeTensorInfo(T,"float32",R),q=er({inputs:{real:_,imag:M},backend:a});return a.disposeIntermediateTensorInfo(l),a.disposeIntermediateTensorInfo(g),a.disposeIntermediateTensorInfo(_),a.disposeIntermediateTensorInfo(M),q}else{const l=a.data.get(i.dataId).values,u=a.data.get(c.dataId).values,d=s||i.dtype,[h,f]=e(i.shape,c.shape,l,u,d);return a.makeTensorInfo(f,d,h)}}}function Mo(t){return(e,n,s,r,o,i)=>{const c=we(e,n),a=D(c),l=c.length,u=Re(c),d=xe("float32",a),h=xe("float32",a),f=un(e,c),p=un(n,c),g=qn(s,r),m=qn(o,i),x=e.length,b=Re(e),y=n.length,C=Re(n);if(f.length+p.length===0)for(let v=0;v<d.length;v++){const R=v%g.length,T=v%m.length,_=t(g[R*2],g[R*2+1],m[T*2],m[T*2+1]);d[v]=_.real,h[v]=_.imag}else for(let v=0;v<d.length;v++){const R=xr(v,l,u),T=R.slice(-x);f.forEach(de=>T[de]=0);const _=Pn(T,x,b),M=R.slice(-y);p.forEach(de=>M[de]=0);const q=Pn(M,y,C),ne=t(g[_*2],g[_*2+1],m[q*2],m[q*2+1]);d[v]=ne.real,h[v]=ne.imag}return[d,h,c]}}/**
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
 */const wl=nt((t,e)=>t+e),h0=Mo((t,e,n,s)=>({real:t+n,imag:e+s})),f0=at(On,wl,h0),Sk={kernelName:On,backendName:"cpu",kernelFunc:f0};/**
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
 */function p0(t,e,n,s,r){const o=D(s),i=St(r,n);for(let c=0;c<t.length;c++){const a=t[c];if(a<0)throw new Error("Input x must be non-negative!");a>=r||(o>0?i[a]+=e[c]:i[a]+=1)}return i}function g0(t,e,n,s=!1){const r=t.shape[0],o=t.shape[1],i=Oe([r,n],e.dtype);for(let c=0;c<r;c++)for(let a=0;a<o;a++){const l=t.get(c,a);if(l<0)throw new Error("Input x must be non-negative!");l>=n||(s?i.set(1,c,l):e.size>0?i.set(i.get(c,l)+e.get(c,a),c,l):i.set(i.get(c,l)+1,c,l))}return i}/**
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
 */function Lt(t){return(e,n,s)=>{const r=xe(n,e.length);for(let o=0;o<e.length;++o)r[o]=t(e[o],s);return r}}/**
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
 */function yl(t,e,n){return({inputs:s,attrs:r,backend:o})=>{const{x:i}=s;if(Ot(i,t),i.dtype==="string"||n==="string")throw new Error("unaryKernelFunc does not support string input/output");const c=o,a=c.data.get(i.dataId).values,l=D(i.shape),u=n||i.dtype,d=oe(u,l);for(let h=0;h<l;++h)d[h]=e(a[h],r);return c.makeTensorInfo(i.shape,u,d)}}function En(t,e,n){return({inputs:s,attrs:r,backend:o})=>{const{x:i}=s;if(Ot(i,t),i.dtype==="string"||n==="string")throw new Error("unaryKernelFunc does not support string input/output");const c=o,a=c.data.get(i.dataId).values,l=n||i.dtype,u=e(a,l,r);return c.makeTensorInfo(i.shape,l,u)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Cl=Lt(t=>Math.ceil(t)),m0=En(Cr,Cl),Ek={kernelName:Cr,backendName:"cpu",kernelFunc:m0};/**
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
 */function x0(t,e,n,s){const r=oe(n,D(e));if(s&&n!=="string"){let o=0;t.forEach(i=>{const c=D(i.shape);r.set(i.vals,o),o+=c})}else{let o=0;t.forEach(i=>{const c=n==="string"?jt(i.vals):i.vals;let a=0;for(let l=0;l<i.shape[0];++l){const u=l*e[1]+o;for(let d=0;d<i.shape[1];++d)r[u+d]=c[a++]}o+=i.shape[1]})}return r}/**
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
 */const vl=nt((t,e)=>t===e?1:0),b0=at($r,vl,null,"bool"),kk={kernelName:$r,backendName:"cpu",kernelFunc:b0};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $l=Lt(t=>Math.exp(t)),w0=En(as,$l,"float32"),Tk={kernelName:as,backendName:"cpu",kernelFunc:w0};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Il=Lt(t=>Math.expm1(t)),y0=En(Ir,Il),Rk={kernelName:Ir,backendName:"cpu",kernelFunc:y0};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Sl=Lt(t=>Math.floor(t)),C0=En(Sr,Sl),Nk={kernelName:Sr,backendName:"cpu",kernelFunc:C0};/**
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
 */function v0(t,e,n,s,r,o,i,c,a){const l=Oe([s,o],n);for(let u=0;u<s;u++){const d=[];let h=0;for(let f=0;f<r;f++){const p=t[u*r+f];h+=p*i[f],d.push(p)}if(h<0||h>=a/o)throw new Error(`Invalid indices: ${d} does not index into ${c}`);for(let f=0;f<o;f++)l.values[u*o+f]=e.get(...e.indexToLoc(h*o+f))}return l}/**
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
 */function $0(t,e,n){const s=Oe(n,t.dtype);for(let r=0;r<s.size;++r){const i=s.indexToLoc(r).slice(),c=i[0],a=i[2],l=e.locToIndex([c,a]);i[2]=e.values[l];const u=t.locToIndex(i);0<=u&&u<t.values.length&&(s.values[r]=t.values[u])}return s}/**
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
 */const El=nt((t,e)=>t>e?1:0),I0=at(cs,El,null,"bool"),Ak={kernelName:cs,backendName:"cpu",kernelFunc:I0};/**
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
 */const kl=nt((t,e)=>t>=e?1:0),S0=at(ls,kl,null,"bool"),_k={kernelName:ls,backendName:"cpu",kernelFunc:S0};/**
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
 */const Tl=nt((t,e)=>t<e?1:0),E0=at(Er,Tl,null,"bool"),Dk={kernelName:Er,backendName:"cpu",kernelFunc:E0};/**
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
 */const Rl=nt((t,e)=>t<=e?1:0),k0=at(ds,Rl,null,"bool"),Fk={kernelName:ds,backendName:"cpu",kernelFunc:k0};/**
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
 */function T0(t,e,n){const s=(e-t)/(n-1),r=St(n,"float32");r[0]=t;for(let o=1;o<r.length;o++)r[o]=r[o-1]+s;return r}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Nl=Lt(t=>Math.log(t)),R0=En(hs,Nl),Pk={kernelName:hs,backendName:"cpu",kernelFunc:R0};/**
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
 */function N0(t,e,n,s){const r=xe(s,D(n));for(let o=0;o<r.length;++o){const i=o*e;let c=t[i];for(let a=0;a<e;++a){const l=t[i+a];(Number.isNaN(l)||l>c)&&(c=l)}r[o]=c}return r}/**
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
 */const Al=nt((t,e)=>Math.max(t,e)),A0=at(kr,Al),Ok={kernelName:kr,backendName:"cpu",kernelFunc:A0};/**
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
 */const _l=nt((t,e)=>Math.min(t,e)),_0=at(fs,_l),Lk={kernelName:fs,backendName:"cpu",kernelFunc:_0};/**
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
 */const Vo=nt((t,e)=>t*e),D0=Mo((t,e,n,s)=>({real:t*n-e*s,imag:t*s+e*n})),F0=at(ps,Vo,D0),Bk={kernelName:ps,backendName:"cpu",kernelFunc:F0};/**
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
 */function Dl(t,e,n){const s=sn(-1,n);return Vo([],e,s,t,n)}function P0(t){const{inputs:e,backend:n}=t,{x:s}=e;Ot(s,"neg");const r=n.data.get(s.dataId).values,[o,i]=Dl(r,s.shape,s.dtype);return n.makeTensorInfo(i,s.dtype,o)}const Mk={kernelName:Tr,backendName:"cpu",kernelFunc:P0};/**
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
 */const Fl=nt((t,e)=>t!==e?1:0),O0=at(gs,Fl,null,"bool"),Vk={kernelName:gs,backendName:"cpu",kernelFunc:O0};/**
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
 */function Pl(t,e,n,s,r){const o=e.length,i=D(e),c=Re(e),a=Re(r),l=xe(n,D(r));for(let u=0;u<i;++u){const d=xr(u,o,c),h=new Array(d.length);for(let p=0;p<h.length;p++)h[p]=d[s[p]];const f=Pn(h,o,a);l[f]=t[u]}return l}/**
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
 */function Ol(t){const{inputs:e,attrs:n,backend:s}=t,{x:r}=e,{perm:o}=n;Ot(r,"transpose");const i=r.shape.length,c=new Array(i);for(let d=0;d<c.length;d++)c[d]=r.shape[o[d]];const a=s.data.get(r.dataId).values,l=Pl(a,r.shape,r.dtype,o,c);return{dataId:s.write(l,c,r.dtype),shape:c,dtype:r.dtype}}const Uk={kernelName:Dr,backendName:"cpu",kernelFunc:Ol};/**
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
 */function Ll(t,e,n,s){const[r,o]=$t(t,s),i=bt(e,"int32"),c=St(D(r),i),a=D(o);for(let l=0;l<c.length;++l){const u=l*a;let d=1;for(let h=0;h<a;++h)d*=n[u+h];c[l]=d}return{outVals:c,outShape:r,outDtype:i}}function L0(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{axis:o,keepDims:i}=s;Ot(r,"prod");const c=r.shape.length,a=re(o,r.shape),l=Je(a,c);let u=a,d=r;const h=[];l!=null&&(d=Ol({inputs:{x:r},backend:n,attrs:{perm:l}}),h.push(d),u=et(u.length,c));const f=n.data.get(d.dataId).values,{outVals:p,outShape:g,outDtype:m}=Ll(d.shape,d.dtype,f,u);let x=g;return i&&(x=Ze(g,a)),h.forEach(b=>n.disposeIntermediateTensorInfo(b)),n.makeTensorInfo(x,m,p)}const Wk={kernelName:Ai,backendName:"cpu",kernelFunc:L0};/**
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
 */function B0(t,e,n,s){const r=t===e,o=t<e&&n<0,i=e<t&&n>1;if(r||o||i)return St(0,s);const c=Math.abs(Math.ceil((e-t)/n)),a=St(c,s);e<t&&n===1&&(n=-1),a[0]=t;for(let l=1;l<a.length;l++)a[l]=a[l-1]+n;return a}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Bl=Lt(t=>1/Math.sqrt(t)),M0=En(Nr,Bl),Gk={kernelName:Nr,backendName:"cpu",kernelFunc:M0};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const V0=Lt(t=>1/(1+Math.exp(-t))),U0=yl(ms,t=>1/(1+Math.exp(-t))),zk={kernelName:ms,backendName:"cpu",kernelFunc:U0};/**
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
 */function Ml(t,e,n,s,r){const o=ro(s,e,n),i=D(n),c=Re(s);if(o){const d=oo(e,c);return r==="string"?t.slice(d,d+i):t.subarray(d,d+i)}const a=r==="string"?jt(t):t,l=Oe(s,r,a),u=Oe(n,r);for(let d=0;d<u.size;++d){const h=u.indexToLoc(d),f=h.map((p,g)=>p+e[g]);u.set(l.get(...f),...h)}return r==="string"?nl(u.values):u.values}function W0(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{begin:o,size:i}=s;Ot(r,"slice");const[c,a]=io(r,o,i);so(r,c,a);const l=n.data.get(r.dataId).values,u=Ml(l,c,a,r.shape,r.dtype);return n.makeTensorInfo(a,r.dtype,u)}const Hk={kernelName:Ar,backendName:"cpu",kernelFunc:W0};/**
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
 */function G0(t,e,n,s,r,o,i){const c=e[0],a=o[0],l=new Array(a),u=new Array(c),d=e[1];if(a===0){if(c!==0)throw new Error(Wc(c));const m=oe(n,0),x=oe(r,0);return[m,[0,d],x,l,u]}let h=!0,f=0;const p=new Array(a).fill(0);for(let m=0;m<c;++m){const x=t[m*d];if(x<0)throw new Error(Gc(m,x));if(x>=a)throw new Error(zc(m,x,a));++p[x],h=h&&x>=f,f=x}let g=!0;for(let m=0;m<a;++m){const x=p[m]===0;l[m]=x,g=g&&!x,p[m]=Math.max(p[m],1),m>0&&(p[m]+=p[m-1])}if(g&&h){const m=t,x=s;for(let b=0;b<c;++b)u[b]=b;return[m,[c,d],x,l,u]}else{const m=p[a-1],x=oe(n,m*d),b=oe(r,m),y=new Array(a).fill(0);for(let C=0;C<c;++C){const v=t[C*d],R=y[v],T=(v===0?0:p[v-1])+R;y[v]++;for(let _=0;_<d;++_)x[T*d+_]=t[C*d+_];b[T]=s[C],u[C]=T}for(let C=0;C<a;++C)if(y[C]===0){const R=C===0?0:p[C-1];x[R*d+0]=C;for(let T=1;T<d;++T)x[R*d+T]=0;b[R]=i}return[x,[m,d],b,l,u]}}/**
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
 */function z0(t,e,n,s,r){const o=D(s),i=e[0],c=r.length,a=[];let l=1,u=-1;for(let m=0;m<c;++m){const x=r[m];if(x===-1){if(u!==-1)throw new Error(Hc(u,m));u=m,a.push(1)}else{if(x<0)throw new Error(Xc(m,x));l*=x,a.push(x)}}if(u!==-1){if(l<=0)throw new Error(qc());const m=Math.trunc(o/l);if(l*m!==o)throw new Error(Kc(s,a));a[u]=m}if(D(a)!==o)throw new Error(jc(s,a));const h=s.length,f=[];if(h>0){f[h-1]=1;for(let m=h-2;m>=0;--m)f[m]=f[m+1]*s[m+1]}const p=[];if(c>0){p[c-1]=1;for(let m=c-2;m>=0;--m)p[m]=p[m+1]*a[m+1]}const g=oe(n,i*c);for(let m=0;m<i;++m){let x=0;for(let b=0;b<h;++b)x+=t[m*h+b]*f[b];for(let b=0;b<c;++b)g[m*c+b]=Math.trunc(x/p[b]),x%=p[b]}return[g,[i,c],a]}/**
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
 */function H0(t,e,n,s,r,o=!1,i=0){const c=s.length,a=[e[0],t.length/e[0]],l=a[1],d=c>0?r[c-1]+1:0;if(d<0)throw new Error(Eo());const h=e.slice();h[0]=d;const f=h.reduce((y,C)=>y*C,1),p=oe(n,f);if(c===0)return d>0&&p.fill(i),[p,h];if(d<=0)throw new Error(Eo());let g=0,m=1,x=0,b=r[g];for(;;){let y=0;if(m<c){if(y=r[m],b===y){++m;continue}if(b>=y)throw new Error(Yc())}if(b<0||b>=d)throw new Error(Qc(b,d));b>x&&p.fill(i,x*l,b*l);for(let C=g;C<m;++C){const v=s[C];if(v<0||v>=a[0])throw new Error(Zc(C,s[C],a[0]));for(let R=0;R<l;R++)p[b*l+R]+=t[v*l+R]}if(o)for(let C=0;C<l;C++)p[b*l+C]/=m-g;if(g=m,++m,x=b+1,b=y,m>c)break}return x<d&&p.fill(i,x*l,d*l),[p,h]}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const X0=Lt(t=>Math.sqrt(t)),q0=yl(xs,t=>Math.sqrt(t)),Xk={kernelName:xs,backendName:"cpu",kernelFunc:q0};/**
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
 */const Vl=nt((t,e)=>{const n=t-e;return n*n}),K0=at(bs,Vl),qk={kernelName:bs,backendName:"cpu",kernelFunc:K0};/**
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
 */function j0(t,e,n,s){const r=Oe(t,e.dtype);for(let o=0;o<r.size;o++){const i=r.indexToLoc(o),c=new Array(i.length);for(let a=0;a<c.length;a++)c[a]=i[a]*n[a]+s[a];r.set(e.get(...c),...i)}return r}/**
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
 */class Y0{constructor(e,n,s,r,o,i){this.separator=Ut(e),this.nGramWidths=n,this.leftPad=Ut(s),this.rightPad=Ut(r),this.padWidth=o,this.preserveShort=i}getPadWidth(e){return Math.min(this.padWidth<0?e-1:this.padWidth,e-1)}getNumNGrams(e,n){const s=this.getPadWidth(n);return Math.max(0,e+2*s-n+1)}createNGrams(e,n,s,r,o,i){for(let c=0;c<o;++c){const a=this.getPadWidth(i),l=Math.max(0,a-c),u=Math.max(0,a-(o-(c+1))),d=i-(l+u),h=n+(l>0?0:c-a);let f=0;f+=l*this.leftPad.length;for(let b=0;b<d;++b)f+=e[h+b].length;f+=u*this.rightPad.length,f+=(l+u+d-1)*this.separator.length,s[r+c]=new Uint8Array(f);const g=s[r+c];let m=0;const x=b=>b.forEach(y=>g[m++]=y);for(let b=0;b<l;++b)x(this.leftPad),x(this.separator);for(let b=0;b<d-1;++b)x(e[h+b]),x(this.separator);if(d>0){x(e[h+d-1]);for(let b=0;b<u;++b)x(this.separator),x(this.rightPad)}else{for(let b=0;b<u-1;++b)x(this.rightPad),x(this.separator);x(this.rightPad)}}}compute(e,n){const s=e.length,r=n.length;if(r>0){let a=n[0];if(a!==0)throw new Error(`First split value must be 0, got ${a}`);for(let l=1;l<r;++l){let u=n[l]>=a;if(u=u&&n[l]<=s,!u)throw new Error(`Invalid split value ${n[l]}, must be in [${a}, ${s}]`);a=n[l]}if(a!==s)throw new Error(`Last split value must be data size. Expected ${s}, got ${a}`)}const o=r-1,i=oe("int32",r);if(s===0||r===0){const a=new Array(s);for(let l=0;l<=o;++l)i[l]=0;return[a,i]}i[0]=0;for(let a=1;a<=o;++a){const l=n[a]-n[a-1];let u=0;this.nGramWidths.forEach(d=>{u+=this.getNumNGrams(l,d)}),this.preserveShort&&l>0&&u===0&&(u=1),i[a]=i[a-1]+u}const c=new Array(i[o]);for(let a=0;a<o;++a){const l=n[a];let u=i[a];if(this.nGramWidths.forEach(d=>{const h=n[a+1]-n[a],f=this.getNumNGrams(h,d);this.createNGrams(e,l,c,u,f,d),u+=f}),this.preserveShort&&u===i[a]){const d=n[a+1]-n[a];if(d===0)continue;const h=d+2*this.padWidth,f=1;this.createNGrams(e,l,c,u,f,h)}}return[c,i]}}function Q0(t,e,n,s,r,o,i,c){return new Y0(n,s,r,o,i,c).compute(t,e)}/**
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
 */function Z0(t,e,n,s){if(!t.length)return;if(e.length===0){for(let o=0;o<t.length;++o)s.push(t.subarray(o,o+1));return}if(e.length===1){const o=e[0];let i=t.indexOf(o);for(;i!==-1;){const c=t.subarray(0,i);(!n||c.length!==0)&&s.push(c),t=t.subarray(i+1),i=t.indexOf(o)}(!n||t.length!==0)&&s.push(t);return}let r=0;for(let o=0;o<t.length+1;o++)if(o===t.length||e.indexOf(t[o])!==-1){const i=t.subarray(r,o);(!n||i.length!==0)&&s.push(i),r=o+1}}function J0(t,e,n){const s=t.length,r=[];let o=0,i=0;const c=new Array(s);for(let h=0;h<s;++h){const f=r.length;Z0(t[h],e,n,r);const p=r.length-f;c[h]=p,o+=p,i=Math.max(i,p)}const a=oe("int32",o*2),l=new Array(o),u=[s,i];let d=0;for(let h=0;h<s;++h)for(let f=0;f<c[h];++f)a[d*2]=h,a[d*2+1]=f,l[d]=r[d],++d;return[a,l,u]}/**
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
 */function ew(t,e){const n=oe("int32",t.length);for(let s=0;s<t.length;++s)n[s]=Uh(t[s]).modulo(e).getLowBitsUnsigned();return n}/**
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
 */const Ul=nt((t,e)=>t-e),tw=Mo((t,e,n,s)=>({real:t-n,imag:e-s})),nw=at(ws,Ul,tw),Kk={kernelName:ws,backendName:"cpu",kernelFunc:nw};/**
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
 */function sw(t,e){const n=new Array(t.rank);for(let r=0;r<n.length;r++)n[r]=t.shape[r]*e[r];const s=Oe(n,t.dtype);for(let r=0;r<s.values.length;++r){const o=s.indexToLoc(r),i=new Array(t.rank);for(let a=0;a<i.length;a++)i[a]=o[a]%t.shape[a];const c=t.locToIndex(i);s.values[r]=t.values[c]}return s}/**
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
 */const Jn=(t,e)=>{const n=e.value-t.value;return n===0?t.index-e.index:n};function Wl(t,e,n=0,s=t.length-1){for(;s>n;){if(s-n>600){const c=s-n+1,a=e-n+1,l=Math.log(c),u=.5*Math.exp(2*l/3),d=.5*Math.sqrt(l*u*(c-u)/c)*Math.sign(a-c/2),h=Math.max(n,Math.floor(e-a*u/c+d)),f=Math.min(s,Math.floor(e+(c-a)*u/c+d));Wl(t,e,h,f)}const r=t[e];let o=n,i=s;for(K(t,n,e),Jn(t[s],r)>0&&K(t,n,s);o<i;){for(K(t,o,i),o++,i--;Jn(t[o],r)<0;)o=o+1;for(;Jn(t[i],r)>0;)i=i-1}Jn(t[n],r)===0?K(t,n,i):(i=i+1,K(t,i,s)),i<=e&&(n=i+1),e<=i&&(s=i-1)}}function rw(t,e,n,s,r){const o=e[e.length-1],[i,c]=[t.length/o,o],a=xe(n,i*s),l=xe("int32",i*s);for(let d=0;d<i;d++){const h=d*c,f=t.subarray(h,h+c);let p=new Array(f.length);f.forEach((b,y)=>p[y]={value:b,index:y}),s<p.length&&(Wl(p,s),p=p.slice(0,s)),r&&p.sort(Jn);const g=d*s,m=a.subarray(g,g+s),x=l.subarray(g,g+s);for(let b=0;b<s;b++)m[b]=p[b].value,x[b]=p[b].index}const u=e.slice();return u[u.length-1]=s,[Oe(u,n,a),Oe(u,"int32",l)]}/**
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
 */function ow(t,e,n,s){const r=re(e,n)[0],o=[1,n[0],1];for(let p=0;p<r;p++)o[0]*=n[p];o[1]=n[r];for(let p=r+1;p<n.length;p++)o[2]*=n[p];const i={},c=new Int32Array(n[r]),a=new Br(o,s,t),l=[],u=o[0]===1&&o[2]===1;for(let p=0;p<n[r];p++){let g;if(u)g=t[p].toString();else{const m=[];for(let x=0;x<o[0];x++)for(let b=0;b<o[2];b++)m.push(a.get(x,p,b));g=m.join(",")}if(i[g]!==void 0)c[p]=i[g];else{const m=Object.keys(i).length;i[g]=m,c[p]=m,l.push(p)}}const d=o.slice();d[1]=Object.keys(i).length;const h=new Br(d,s);l.forEach((p,g)=>{for(let m=0;m<o[0];m++)for(let x=0;x<o[2];x++)h.set(a.get(m,p,x),m,g,x)});const f=n.slice();return f[r]=d[1],{outputValues:h.values,outputShape:f,indices:c}}/**
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
 *//**
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
 */const{addImpl:iw,bincountImpl:Gl,bincountReduceImpl:aw,ceilImpl:cw,concatImpl:lw,equalImpl:uw,expImpl:dw,expm1Impl:hw,floorImpl:fw,gatherNdImpl:pw,gatherV2Impl:gw,greaterImpl:mw,greaterEqualImpl:xw,lessImpl:bw,lessEqualImpl:ww,linSpaceImpl:yw,logImpl:Cw,maxImpl:vw,maximumImpl:$w,minimumImpl:Iw,multiplyImpl:Sw,negImpl:Ew,notEqualImpl:kw,prodImpl:Tw,rangeImpl:Rw,rsqrtImpl:Nw,sigmoidImpl:Aw,simpleAbsImpl:zl,sliceImpl:_w,sparseFillEmptyRowsImpl:Dw,sparseReshapeImpl:Fw,sparseSegmentReductionImpl:Hl,sqrtImpl:Pw,stridedSliceImpl:Ow,stringNGramsImpl:Lw,stringSplitImpl:Bw,stringToHashBucketFastImpl:Mw,subImpl:Vw,tileImpl:Uw,topKImpl:Ww,transposeImpl:Uo,uniqueImpl:Gw}=ae;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Xl(t,e){return["x","y","z","w","u","v"].slice(0,e).map(n=>`${t}.${n}`)}function Me(t,e){return e===1?[t]:Xl(t,e)}function zw(t,e){if(t===1)return"rc";let n="";for(let s=0;s<t;s++)n+=e[s],s<t-1&&(n+=",");return n}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */class Hw{constructor(e){if(this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.enableShapeUniforms=ze(this.outputShape.length),this.rank===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{const n=Me("rc",this.rank),s=me(this.rank),r=this.getOutOfBoundsCondition(n),o=this.getSetup(n),i=this.getOutput(n);this.userCode=`
        void main() {
          ${s} rc = getOutputCoords();

          if(${r}) {
            setOutput(vec4(0));
          } else {
            ${o}

            setOutput(vec4(${i}));
          }
        }
      `}}getSourceCoordsArr(e){const n=[];for(let s=0;s<=1;s++)for(let r=0;r<=1;r++){let o=`${s===0?"r":"rp1"}, ${r===0?"c":"cp1"}`;for(let i=2;i<this.rank;i++)o=`${e[e.length-1-i]},`+o;n.push(o)}return n}getOutOfBoundsCondition(e){if(this.rank===1)return`rc > ${this.enableShapeUniforms?"outShape":this.outputShape[0]}`;let n="";for(let s=this.rank-2;s<this.rank;s++)n+=`${e[s]} >= ${this.enableShapeUniforms?`outShape[${s}]`:this.outputShape[s]}`,s<this.rank-1&&(n+="||");return n}getSetup(e){if(this.rank===1)return"";const n=e.slice(-2),s=this.enableShapeUniforms?`outShape[${this.rank} - 1]`:this.outputShape[this.rank-1],r=this.enableShapeUniforms?`outShape[${this.rank} - 2]`:this.outputShape[this.rank-2];return`
      int r = ${n[0]};
      int c = ${n[1]};
      int rp1 = r + 1;
      int cp1 = c + 1;

      bool cEdge = cp1 >= ${s};
      bool rEdge = rp1 >= ${r};
    `}getOutput(e){const n=this.getSourceCoordsArr(e);return this.rank===1?`getA(rc), (rc + 1 >= ${this.enableShapeUniforms?"outShape":this.outputShape[0]} ? 0. : getA(rc + 1)), 0, 0`:`getA(${n[0]}),
            cEdge ? 0. : getA(${n[1]}),
            rEdge ? 0. : getA(${n[2]}),
            rEdge || cEdge ? 0. : getA(${n[3]})`}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */class ql{constructor(e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec3"}],this.outputShape=e,this.enableShapeUniforms=ze(this.outputShape.length);let s="";for(let r=0;r<4;r++){let o="thisRC = rc;";r%2===1&&(o+="thisRC.z += 1;"),r>1&&(o+="thisRC.y += 1;"),s+=`
        ${o}
        ${r>0?"if(thisRC.y < rows && thisRC.z < cols){":""}
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${r}] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ${r>0?"}":""}
      `}this.userCode=`
      ${Xw(n,this.enableShapeUniforms)}
      ${this.enableShapeUniforms?Fo():Do(e)}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ${this.enableShapeUniforms?"outShape[1]":e[1]};
        int cols = ${this.enableShapeUniforms?"outShape[2]":e[2]};

        ${s}

        setOutput(result);
      }
    `}}function Xw(t,e){return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${e?nb(["r","c","d"],"inputShape"):Yt(["r","c","d"],t)}
      return ivec3(r, c, d);
    }
  `}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */class qw{constructor(e){this.gpgpu=e,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}acquireTexture(e,n,s){const r=jl(n,s),o=Yl(e,r,s);o in this.freeTextures||(this.freeTextures[o]=[]),o in this.usedTextures||(this.usedTextures[o]=[]);const i=Kl(e,r,this.gpgpu.gl,this.gpgpu.textureConfig,s);if(this.freeTextures[o].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=i,this.log();const a=this.freeTextures[o].shift();return this.usedTextures[o].push(a),a}let c;return r===Ae.PACKED_2X2_FLOAT32?c=this.gpgpu.createPackedMatrixTexture(e[0],e[1]):r===Ae.PACKED_2X2_FLOAT16?c=this.gpgpu.createFloat16PackedMatrixTexture(e[0],e[1]):r===Ae.UNPACKED_FLOAT32?c=this.gpgpu.createFloat32MatrixTexture(e[0],e[1]):r===Ae.UNPACKED_FLOAT16?c=this.gpgpu.createFloat16MatrixTexture(e[0],e[1]):r===Ae.PACKED_4X1_UNSIGNED_BYTE&&(c=this.gpgpu.createUnsignedBytesMatrixTexture(e[0],e[1])),this.usedTextures[o].push(c),this.numUsedTextures++,this._numBytesAllocated+=i,this.log(),c}releaseTexture(e,n,s,r){if(this.freeTextures==null)return;const o=jl(s,r),i=Yl(n,o,r);i in this.freeTextures||(this.freeTextures[i]=[]);const c=Kl(n,o,this.gpgpu.gl,this.gpgpu.textureConfig,r),a=S().get("WEBGL_DELETE_TEXTURE_THRESHOLD");a!==-1&&this._numBytesAllocated>a?(this.gpgpu.deleteMatrixTexture(e.texture),this._numBytesAllocated-=c):(this.freeTextures[i].push(e),this.numFreeTextures++,this._numBytesFree+=c),this.numUsedTextures--;const l=this.usedTextures[i],u=l.indexOf(e);if(u<0)throw new Error("Cannot release a texture that was never provided by this texture manager");l.splice(u,1),this.log()}log(){if(!this.logEnabled)return;const e=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${e})`);const n=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*n)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(this.freeTextures!=null){for(const e in this.freeTextures)this.freeTextures[e].forEach(n=>{this.gpgpu.deleteMatrixTexture(n.texture)});for(const e in this.usedTextures)this.usedTextures[e].forEach(n=>{this.gpgpu.deleteMatrixTexture(n.texture)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}}function Kw(t,e){const n=t;if(e===n.R32F)return 4;if(e===n.R16F)return 2;if(e===n.RGBA32F)return 16;if(e===t.RGBA)return 16;if(e===n.RGBA16F)return 8;if(e===n.RGBA8)return 4;throw new Error(`Unknown internal format ${e}`)}function Kl(t,e,n,s,r){const o=jw(e,s);let i;if(r){const[a,l]=wn(t[0],t[1]);i=a*l}else{const[a,l]=jn(t[0],t[1]);i=a*l}const c=Kw(n,o);return i*c}function jw(t,e){switch(t){case Ae.PACKED_2X2_FLOAT32:return gl(e);case Ae.PACKED_2X2_FLOAT16:return ml(e);case Ae.UNPACKED_FLOAT32:return hl(e);case Ae.UNPACKED_FLOAT16:return fl(e);case Ae.PACKED_4X1_UNSIGNED_BYTE:return pl(e);default:throw new Error(`Unknown physical texture type ${t}`)}}function Yw(t){return S().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?t?Ae.PACKED_2X2_FLOAT32:Ae.UNPACKED_FLOAT32:t?Ae.PACKED_2X2_FLOAT16:Ae.UNPACKED_FLOAT16}function jl(t,e){if(t===tt.UPLOAD)return Ae.PACKED_2X2_FLOAT32;if(t===tt.RENDER||t==null)return Yw(e);if(t===tt.DOWNLOAD||t===tt.PIXELS)return Ae.PACKED_4X1_UNSIGNED_BYTE;throw new Error(`Unknown logical texture type ${t}`)}function Yl(t,e,n){return`${t[0]}_${t[1]}_${e}_${n}`}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */class Rt{constructor(e,n){this.variableNames=["A"],this.outputShape=e,this.enableShapeUniforms=ze(this.outputShape.length),this.userCode=`
      float unaryOperation(float x) {
        ${n}
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `}}const st="if (isnan(x)) return x;",Qw="return x;",Ql="return abs(x);";function jk(t=0){return st+`
    return x > 0.0 ? 1.0 : float(${t});
  `}const Zw="return (x >= 0.0) ? x : (exp(x) - 1.0);",Jw=st+`
  return (x < 0.0) ? 0.0 : x;
`,ey=st+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,kn="return x;",ty="return 1.0 / (1.0 + exp(-1.0 * x));";/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */const ny="return x;",sy=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,ry=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,oy=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,iy="return 1.0 / (1.0 + exp(-1.0 * x));";class Zt{constructor(e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.enableShapeUniforms=ze(this.outputShape.length),this.userCode=`
      vec4 unaryOperation(vec4 x) {
        ${n}
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */class ay{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=e,this.enableShapeUniforms=ze(this.outputShape.length);const n=e.length,s=Me("rc",n),r=me(n),o=zw(n,s),i=s.slice(-2),c=n<=1?"rc":`vec2(${i.join(",")})`;this.userCode=`
      void main() {
        ${r} rc = getOutputCoords();
        vec4 packedInput = getA(${o});

        setOutput(getChannel(packedInput, ${c}));
      }
    `}}var Wo=(t,e,n)=>new Promise((s,r)=>{var o=a=>{try{c(n.next(a))}catch(l){r(l)}},i=a=>{try{c(n.throw(a))}catch(l){r(l)}},c=a=>a.done?s(a.value):Promise.resolve(a.value).then(o,i);c((n=n.apply(t,e)).next())});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */const cy=yx,ly=1e-7,uy=1e-4,tr={};function dy(t){return t in tr||(tr[t]={}),tr[t]}const hy=S().getNumber("CPU_HANDOFF_SIZE_THRESHOLD"),fy=600;function py(){return S().global.screen==null?1024:S().global.screen.height*S().global.screen.width*window.devicePixelRatio*fy/1024/1024}class nr extends ee{constructor(e){super();if(this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.lastGlFlushTime=0,this.warnedAboutMemory=!1,this.pendingDeletes=0,this.disposed=!1,!S().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");let n;if(e!=null){if(e instanceof Oo)n=e;else{const s=mt(S().getNumber("WEBGL_VERSION"),e);n=new Oo(s)}this.binaryCache={},this.gpgpuCreatedLocally=!1}else{const s=mt(S().getNumber("WEBGL_VERSION"));n=new Oo(s),this.binaryCache=dy(S().getNumber("WEBGL_VERSION")),this.gpgpuCreatedLocally=!0}this.gpgpu=n,this.canvas=this.gpgpu.gl.canvas,this.textureManager=new qw(this.gpgpu),this.numMBBeforeWarning=py(),this.texData=new he(this,fn())}nextDataId(){return nr.nextDataId++}numDataIds(){return this.texData.numDataIds()-this.pendingDeletes}write(e,n,s){if((S().getBool("WEBGL_CHECK_NUMERICAL_PROBLEMS")||S().getBool("DEBUG"))&&this.checkNumericalProblems(e),s==="complex64"&&e!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");const r={id:this.nextDataId()};return this.texData.set(r,{shape:n,dtype:s,values:e,usage:tt.UPLOAD,refCount:1}),r}refCount(e){return this.texData.has(e)?this.texData.get(e).refCount:0}incRef(e){const n=this.texData.get(e);n.refCount++}decRef(e){if(this.texData.has(e)){const n=this.texData.get(e);n.refCount--}}move(e,n,s,r,o){if(S().getBool("DEBUG")&&this.checkNumericalProblems(n),r==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(e,{shape:s,dtype:r,values:n,usage:tt.UPLOAD,refCount:o})}disposeIntermediateTensorInfo(e){this.disposeData(e.dataId)}readSync(e){const n=this.texData.get(e),{values:s,dtype:r,complexTensorInfos:o,slice:i,shape:c,isPacked:a}=n;if(i!=null){let h;a?h=new Zt(c,kn):h=new Rt(c,kn);const f=this.runWebGLProgram(h,[{dataId:e,shape:c,dtype:r}],r),p=this.readSync(f.dataId);return this.disposeIntermediateTensorInfo(f),p}if(s!=null)return this.convertAndCacheOnCPU(e);if(r==="string")return s;const l=this.activeTimers!=null;let u;l&&(u=ut());let d;if(r==="complex64"){const h=this.readSync(o.real.dataId),f=this.readSync(o.imag.dataId);d=qn(h,f)}else d=this.getValuesFromTexture(e);return l&&(this.downloadWaitMs+=ut()-u),this.convertAndCacheOnCPU(e,d)}read(e){return Wo(this,null,function*(){if(this.pendingRead.has(e)){const p=this.pendingRead.get(e);return new Promise(g=>p.push(g))}const n=this.texData.get(e),{values:s,shape:r,slice:o,dtype:i,complexTensorInfos:c,isPacked:a}=n;if(o!=null){let p;a?p=new Zt(r,kn):p=new Rt(r,kn);const g=this.runWebGLProgram(p,[{dataId:e,shape:r,dtype:i}],i),m=this.read(g.dataId);return this.disposeIntermediateTensorInfo(g),m}if(s!=null)return this.convertAndCacheOnCPU(e);if(S().getBool("DEBUG")&&!S().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&S().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");let l=null,u;if(i!=="complex64"&&S().get("WEBGL_BUFFER_SUPPORTED")){u=this.decode(e);const p=this.texData.get(u.dataId);l=this.gpgpu.createBufferFromTexture(p.texture.texture,...Hs(r))}this.pendingRead.set(e,[]),i!=="complex64"&&(yield this.gpgpu.createAndWaitForFence());let d;if(i==="complex64"){const p=yield Promise.all([this.read(c.real.dataId),this.read(c.imag.dataId)]),g=p[0],m=p[1];d=qn(g,m)}else if(l==null)d=this.getValuesFromTexture(e);else{const p=D(r);d=this.gpgpu.downloadFloat32MatrixFromBuffer(l,p)}if(u!=null&&this.disposeIntermediateTensorInfo(u),l!=null){const p=this.gpgpu.gl;L(p,()=>p.deleteBuffer(l))}const h=this.convertAndCacheOnCPU(e,d),f=this.pendingRead.get(e);return this.pendingRead.delete(e),f.forEach(p=>p(h)),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e)&&fn().removeDataId(e,this),this.pendingDeletes--),h})}readToGPU(e,n={}){const s=this.texData.get(e),{values:r,shape:o,slice:i,dtype:c,isPacked:a,texture:l}=s;if(c==="complex64")throw new Error("Does not support reading texture for complex64 dtype.");if(i!=null){let f;a?f=new Zt(o,kn):f=new Rt(o,kn);const p=this.runWebGLProgram(f,[{dataId:e,shape:o,dtype:c}],c),g=this.readToGPU(p,n);return this.disposeIntermediateTensorInfo(p),g}if(l==null)throw r!=null?new Error("Data is not on GPU but on CPU."):new Error("There is no data on GPU or CPU.");const u=this.decode(e,n.customTexShape),d=fn().makeTensorFromDataId(u.dataId,u.shape,u.dtype),h=this.texData.get(u.dataId);return Object.assign({tensorRef:d},h.texture)}bufferSync(e){const n=this.readSync(e.dataId);let s=n;if(e.dtype==="string")try{s=n.map(r=>Bn(r))}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return Oe(e.shape,e.dtype,s)}checkNumericalProblems(e){if(e!=null)for(let n=0;n<e.length;n++){const s=e[n];if(!Rx(s))throw S().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error(`The value ${s} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`):Error(`The value ${s} cannot be represented on this device.`)}}getValuesFromTexture(e){const{shape:n,dtype:s,isPacked:r}=this.texData.get(e),o=D(n);if(S().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){const h=this.decode(e),f=this.texData.get(h.dataId),p=this.gpgpu.downloadMatrixFromPackedTexture(f.texture.texture,...Hs(n)).subarray(0,o);return this.disposeIntermediateTensorInfo(h),p}const i=S().getBool("WEBGL_PACK")&&r===!0,c=i?Ao(n):n,a=i?new Hb(c):new zb(c),l=this.runWebGLProgram(a,[{shape:c,dtype:s,dataId:e}],"float32"),u=this.texData.get(l.dataId),d=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(u.texture.texture,u.texShape[0],u.texShape[1]).subarray(0,o);return this.disposeIntermediateTensorInfo(l),d}timerAvailable(){return S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0}time(e){const n=this.activeTimers,s=[];let r=!1;this.programTimersStack==null?(this.programTimersStack=s,r=!0):this.activeTimers.push(s),this.activeTimers=s,e();const o=ke(this.activeTimers.map(a=>a.query)).filter(a=>a!=null),i=ke(this.activeTimers.map(a=>a.name)).filter(a=>a!=null);this.activeTimers=n,r&&(this.programTimersStack=null);const c={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null};return(()=>Wo(this,null,function*(){if(S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0){const a=yield Promise.all(o);c.kernelMs=H(a),c.getExtraProfileInfo=()=>a.map((l,u)=>({name:i[u],ms:l})).map(l=>`${l.name}: ${l.ms}`).join(", ")}else c.kernelMs={error:"WebGL query timers are not supported in this environment."};return this.uploadWaitMs=0,this.downloadWaitMs=0,c}))()}memory(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU,numBytesInGPUAllocated:this.textureManager.numBytesAllocated,numBytesInGPUFree:this.textureManager.numBytesFree}}startTimer(){return S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:ut(),endMs:null}}endTimer(e){return S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),e):(e.endMs=ut(),e)}getQueryTime(e){return Wo(this,null,function*(){if(S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0)return this.gpgpu.waitForQueryAndGetTime(e);const n=e;return n.endMs-n.startMs})}disposeData(e,n=!1){if(this.pendingDisposal.has(e))return!1;if(!this.texData.has(e))return!0;if(n?this.texData.get(e).refCount=0:this.texData.get(e).refCount--,!n&&this.texData.get(e).refCount>0)return!1;if(this.pendingRead.has(e))return this.pendingDisposal.add(e),this.pendingDeletes++,!1;this.releaseGPUData(e);const{complexTensorInfos:s}=this.texData.get(e);return s!=null&&(this.disposeData(s.real.dataId,n),this.disposeData(s.imag.dataId,n)),this.texData.delete(e),!0}releaseGPUData(e){const{texture:n,dtype:s,texShape:r,usage:o,isPacked:i,slice:c}=this.texData.get(e),a=c&&c.origDataId||e,l=this.dataRefCount.get(a);l>1?this.dataRefCount.set(a,l-1):(this.dataRefCount.delete(a),n!=null&&(this.numBytesInGPU-=this.computeBytes(r,s),this.textureManager.releaseTexture(n,r,o,i)));const u=this.texData.get(e);u.texture=null,u.texShape=null,u.isPacked=!1,u.slice=null}getTexture(e){return this.uploadToGPU(e),this.texData.get(e).texture.texture}getDataInfo(e){return this.texData.get(e)}shouldExecuteOnCPU(e,n=hy){return S().getBool("WEBGL_CPU_FORWARD")&&e.every(s=>this.texData.get(s.dataId).texture==null&&D(s.shape)<n)}getGPGPUContext(){return this.gpgpu}where(e){lt("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");const n=e.dataSync();return cy(e.shape,n)}packedUnaryOp(e,n,s){const r=new Zt(e.shape,n),o=this.compileAndRun(r,[e],s);return fn().makeTensorFromDataId(o.dataId,o.shape,o.dtype)}abs(e){if(this.shouldExecuteOnCPU([e])&&e.dtype!=="complex64"){const r=zl(this.texData.get(e.dataId).values);return this.makeOutput(e.shape,e.dtype,r)}if(S().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Ql,e.dtype);const n=new Rt(e.shape,Ql),s=this.compileAndRun(n,[e]);return fn().makeTensorFromDataId(s.dataId,s.shape,s.dtype)}makeTensorInfo(e,n,s){let r;if(n==="string"&&s!=null&&s.length>0&&rs(s[0])){const o=s.map(i=>Ut(i));r=this.write(o,e,n)}else r=this.write(s,e,n);return this.texData.get(r).usage=null,{dataId:r,shape:e,dtype:n}}makeOutput(e,n,s){const{dataId:r}=this.makeTensorInfo(e,n,s);return fn().makeTensorFromDataId(r,e,n,this)}unpackTensor(e){const n=new ay(e.shape);return this.runWebGLProgram(n,[e],e.dtype)}packTensor(e){const n=new Hw(e.shape),s=!0;return this.runWebGLProgram(n,[e],e.dtype,null,s)}packedReshape(e,n){const s=[yn(e.shape),...Cn(e.shape)],r={dtype:e.dtype,shape:s,dataId:e.dataId},o=[yn(n),...Cn(n)],i=new ql(o,s),c=!0,a=[s],l=this.runWebGLProgram(i,[r],e.dtype,a,c);return{dataId:l.dataId,shape:n,dtype:l.dtype}}decode(e,n){const s=this.texData.get(e),{isPacked:r,shape:o,dtype:i}=s;if(n!=null){const h=D(o),f=n[0]*n[1]*4;$(h<=f,()=>"customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data.")}const c=Ao(o);let a;r?a=new Gb(c):a=new Wb(c);const l=!0,u=[n??Hs(c)],d=this.runWebGLProgram(a,[{shape:c,dtype:i,dataId:e}],i,u,l,n);return{dtype:i,shape:o,dataId:d.dataId}}runWebGLProgram(e,n,s,r,o=!1,i){const c=this.makeTensorInfo(e.outputShape,s),a=this.texData.get(c.dataId);if(e.packedOutput&&(a.isPacked=!0),e.outPackingScheme===Kn.DENSE){const x=i??Hs(e.outputShape);a.texShape=x.map(b=>b*2)}if(e.outTexUsage!=null&&(a.usage=e.outTexUsage),D(c.shape)===0)return a.values=xe(c.dtype,0),c;const l=[],u=n.map(x=>{if(x.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");let b=this.texData.get(x.dataId);if(b.texture==null){if(!e.packedInputs&&D(x.shape)<=S().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:x.shape,texData:null,isUniform:!0,uniformValues:b.values};e.packedInputs&&(b.isPacked=!0,b.shape=x.shape)}if(this.uploadToGPU(x.dataId),!!b.isPacked!=!!e.packedInputs)x=b.isPacked?this.unpackTensor(x):this.packTensor(x),l.push(x),b=this.texData.get(x.dataId);else if(b.isPacked&&!js(b.shape,x.shape)){const y=x,C=x.shape;x.shape=b.shape,x=this.packedReshape(x,C),l.push(x),b=this.texData.get(x.dataId),y.shape=C}return{shape:x.shape,texData:b,isUniform:!1}});this.uploadToGPU(c.dataId);const d={shape:c.shape,texData:a,isUniform:!1},h=Ub(e,u,d),f=this.getAndSaveBinary(h,()=>Mb(this.gpgpu,e,u,d)),p=this.activeTimers!=null;let g;p&&(g=this.startTimer()),Vb(this.gpgpu,f,u,d,r),l.forEach(x=>this.disposeIntermediateTensorInfo(x)),p&&(g=this.endTimer(g),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(g)}));const m=S().get("WEBGL_FLUSH_THRESHOLD");if(m>0){const x=ut();x-this.lastGlFlushTime>m&&(this.gpgpu.gl.flush(),this.lastGlFlushTime=x)}if(!S().getBool("WEBGL_LAZILY_UNPACK")&&a.isPacked&&o===!1){const x=this.unpackTensor(c);return this.disposeIntermediateTensorInfo(c),x}return c}compileAndRun(e,n,s,r,o=!1){return s=s||n[0].dtype,this.runWebGLProgram(e,n,s,r,o)}getAndSaveBinary(e,n){return e in this.binaryCache||(this.binaryCache[e]=n()),this.binaryCache[e]}getTextureManager(){return this.textureManager}dispose(){this.disposed||(S().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(n=>{this.gpgpu.deleteProgram(this.binaryCache[n].webGLProgram),delete this.binaryCache[n]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)}floatPrecision(){return this.floatPrecisionValue==null&&(this.floatPrecisionValue=Lg(()=>{if(!S().get("WEBGL_RENDER_FLOAT32_ENABLED")){const e=S().getBool("DEBUG");S().set("DEBUG",!1);const n=this.abs(Ie(1e-8)).dataSync()[0];if(S().set("DEBUG",e),n>0)return 32}return 16})),this.floatPrecisionValue}epsilon(){return this.floatPrecision()===32?ly:uy}uploadToGPU(e){const n=this.texData.get(e),{shape:s,dtype:r,values:o,texture:i,usage:c,isPacked:a}=n;if(i!=null)return;const l=this.activeTimers!=null;let u;l&&(u=ut());let d=n.texShape;if(d==null&&(d=qx(s,a),n.texShape=d),o!=null){const h=Ao(s);let f,p=d[1],g=d[0];const m=o instanceof Uint8Array||o instanceof Uint8ClampedArray;(a||!m)&&([p,g]=wn(d[0],d[1])),a?f=new qb(h,m):f=new Xb(h,m);const x=m?[g,p]:d,b=this.makeTensorInfo(x,r),y=this.texData.get(b.dataId);m?y.usage=tt.PIXELS:y.usage=tt.UPLOAD,y.texShape=x,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(b.dataId),p,g,o);const C=[[g,p]],v=!0,R=this.runWebGLProgram(f,[b],r,C,v),T=this.texData.get(R.dataId);n.texture=T.texture,n.texShape=T.texShape,n.isPacked=T.isPacked,n.usage=T.usage,this.disposeIntermediateTensorInfo(b),this.texData.delete(R.dataId),n.values=null,l&&(this.uploadWaitMs+=ut()-u)}else{const h=this.acquireTexture(d,c,r,a);n.texture=h}}convertAndCacheOnCPU(e,n){const s=this.texData.get(e),{dtype:r}=s;return this.releaseGPUData(e),n!=null&&(s.values=gy(n,r)),s.values}acquireTexture(e,n,s,r){if(this.numBytesInGPU+=this.computeBytes(e,s),!this.warnedAboutMemory&&this.numBytesInGPU>this.numMBBeforeWarning*1024*1024){const o=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: ${o} MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(e,n,r)}computeBytes(e,n){return e[0]*e[1]*gr(n)}}nr.nextDataId=0;function gy(t,e){if(e==="float32"||e==="complex64")return t;if(e==="int32"||e==="bool"){const n=e==="int32"?new Int32Array(t.length):new Uint8Array(t.length);for(let s=0;s<n.length;++s)n[s]=Math.round(t[s]);return n}else throw new Error(`Unknown dtype ${e}`)}/**
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
 */function my(){S().set("WEBGL_FORCE_F16_TEXTURES",!0)}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
 */xa()&&Mg("webgl",()=>new nr,2);const Yk={forceHalfFloat:my};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */const Zl=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`,Qk="return (a - b) * (a - b);";class Tn{constructor(e,n,s){this.variableNames=["A","B"],this.outputShape=we(n,s),this.enableShapeUniforms=ze(this.outputShape.length),this.userCode=`
      float binaryOperation(float a, float b) {
        ${e}
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */const sr=`
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;
`,Zk=null,Jk=null;class es{constructor(e,n,s,r=!1){this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=we(n,s);const o=this.outputShape.length;this.enableShapeUniforms=ze(o);let i="";if(r)if(o===0||D(this.outputShape)===1)i=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(i=`
          ${me(o)} coords = getOutputCoords();
        `,o===1)this.enableShapeUniforms?i+=`
            result.y = (coords + 1) >= outShape ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `:i+=`
            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{const a=Me("coords",o);this.enableShapeUniforms?i+=`
            bool nextRowOutOfBounds =
              (${a[o-2]} + 1) >= outShape[${o} - 2];
            bool nextColOutOfBounds =
              (${a[o-1]} + 1) >= outShape[${o} - 1];
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `:i+=`
            bool nextRowOutOfBounds =
              (${a[o-2]} + 1) >= ${this.outputShape[o-2]};
            bool nextColOutOfBounds =
              (${a[o-1]} + 1) >= ${this.outputShape[o-1]};
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        ${e}
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        ${i}

        setOutput(result);
      }
    `}}/**
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
 */function Ke(t){const{inputs:e,backend:n}=t,{x:s}=e;return n.incRef(s.dataId),{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}const xy={kernelName:us,backendName:"webgl",kernelFunc:Ke};/**
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
 */function Bt(t){const{inputs:e,backend:n}=t,{real:s,imag:r}=e,o=n.makeTensorInfo(s.shape,"complex64"),i=n.texData.get(o.dataId),c=Ke({inputs:{x:s},backend:n}),a=Ke({inputs:{x:r},backend:n});return i.complexTensorInfos={real:c,imag:a},o}const by={kernelName:vr,backendName:"webgl",kernelFunc:Bt};/**
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
 */const Jl="return (a < 0.) ? b * a : a;",eu=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function wy(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{alpha:o}=s,i=n.makeTensorInfo([],"float32",sn(o,"float32")),c=S().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new es(eu,r.shape,i.shape):new Tn(Jl,r.shape,i.shape),a=n.runWebGLProgram(c,[r,i],"float32");return n.disposeIntermediateTensorInfo(i),a}const yy={kernelName:wi,backendName:"webgl",kernelFunc:wy};/**
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
 */const tu="return (a < 0.) ? b * a : a;",nu=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function Cy(t){const{inputs:e,backend:n}=t,{x:s,alpha:r}=e,o=S().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new es(nu,s.shape,r.shape):new Tn(tu,s.shape,r.shape);return n.runWebGLProgram(o,[s,r],"float32")}const vy={kernelName:Ni,backendName:"webgl",kernelFunc:Cy};/**
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
 */const Rn="if (isnan(x)) return x;",$y=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`,Iy=`
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;
`;function se({opSnippet:t,packedOpSnippet:e,cpuKernelImpl:n,dtype:s}){return({inputs:r,backend:o})=>{const{x:i}=r,c=o,a=s||i.dtype;if(c.shouldExecuteOnCPU([i])&&n!=null){const d=c.texData.get(i.dataId),h=n(d.values,a);return c.makeTensorInfo(i.shape,a,h)}const l=S().getBool("WEBGL_PACK_UNARY_OPERATIONS")&&e!=null;let u;return l?u=new Zt(i.shape,e):u=new Rt(i.shape,t),c.runWebGLProgram(u,[i],a)}}function _e({opSnippet:t,packedOpSnippet:e,checkOutOfBounds:n=!1,supportsComplex:s=!1,cpuKernelImpl:r,dtype:o}){return({inputs:i,backend:c})=>{const{a,b:l}=i,u=c;if(s&&a.dtype==="complex64"){const p=u.texData.get(a.dataId),g=u.texData.get(l.dataId),[m,x]=[[p.complexTensorInfos.real,g.complexTensorInfos.real],[p.complexTensorInfos.imag,g.complexTensorInfos.imag]].map(y=>{const[C,v]=y,R={dataId:C.dataId,dtype:C.dtype,shape:a.shape},T={dataId:v.dataId,dtype:v.dtype,shape:l.shape},_=new Tn(t,a.shape,l.shape);return u.runWebGLProgram(_,[R,T],bt(C.dtype,v.dtype))}),b=Bt({inputs:{real:m,imag:x},backend:u});return u.disposeIntermediateTensorInfo(m),u.disposeIntermediateTensorInfo(x),b}const d=o||bt(a.dtype,l.dtype);if((a.dtype==="string"||l.dtype==="string"||u.shouldExecuteOnCPU([a,l]))&&r!=null){const p=u.texData.get(a.dataId).values,g=u.texData.get(l.dataId).values,m=a.dtype==="string"?jt(p):p,x=a.dtype==="string"?jt(g):g,[b,y]=r(a.shape,l.shape,m,x,d),C=u.makeTensorInfo(y,d),v=u.texData.get(C.dataId);return v.values=b,C}const h=S().getBool("WEBGL_PACK_BINARY_OPERATIONS")&&e!=null;let f;return h?f=new es(e,a.shape,l.shape,n):f=new Tn(t,a.shape,l.shape),u.runWebGLProgram(f,[a,l],d)}}function rr(t,e=!1){if(t==="linear")return e?ny:Qw;if(t==="relu")return e?ry:Jw;if(t==="elu")return e?sy:Zw;if(t==="relu6")return e?oy:ey;if(t==="prelu")return e?nu:tu;if(t==="leakyrelu")return e?eu:Jl;if(t==="sigmoid")return e?iy:ty;throw new Error(`Activation ${t} has not been implemented for the WebGL backend.`)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */class su{constructor(e,n,s,r=!1,o=!1,i=!1,c=null,a=!1,l=!1){this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=s,this.enableShapeUniforms=ze(this.outputShape.length);const u=r?e[1]:e[2],d=Math.ceil(u/2),h=r?"i * 2, rc.y":"rc.y, i * 2",f=o?"rc.z, i * 2":"i * 2, rc.z",p=r?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],g=o?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"];let m="",x="";c&&(a?m=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${c}
        }`:l?m=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${c}
        }`:m=`vec4 activation(vec4 x) {
          ${c}
        }`,x="result = activation(result);");const b=i?"result += getBiasAtOutCoords();":"";i&&this.variableNames.push("bias"),a&&this.variableNames.push("preluActivationWeights"),l&&this.variableNames.push("leakyreluAlpha");let y="rc.x",C="rc.x";e[0]<n[0]?y=`int(min(float(rc.x), ${e[0]-1}.))`:n[0]<e[0]&&(C=`int(min(float(rc.x), ${n[0]-1}.))`),this.userCode=`
      ${m}
      // Don't use uniform for sharedDimensionPacked for performance.
      const float sharedDimension = ${d}.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < ${d}; i++) {
          int batchA = ${y};
          int batchB = ${C};
          vec4 a = getMatrixA(batchA, ${h});
          vec4 b = getMatrixB(batchB, ${f});

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (${p[0]} * ${g[0]});
          result += (${p[1]} * ${g[1]});
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        ${b}

        ${x}

        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */const ru={REAL:"return areal * breal - aimag * bimag;",IMAG:"return areal * bimag + aimag * breal;"};class ou{constructor(e,n,s){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=we(n,s),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        ${e}
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `}}/**
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
 */const iu="return a * b;";function Go(t){const{inputs:e,backend:n}=t,{a:s,b:r}=e,o=bt(s.dtype,r.dtype);if(s.dtype==="complex64"){const c=n.texData.get(s.dataId),a=n.texData.get(r.dataId),l=new ou(ru.REAL,s.shape,r.shape),u=new ou(ru.IMAG,s.shape,r.shape),d=[{dataId:c.complexTensorInfos.real.dataId,dtype:c.complexTensorInfos.real.dtype,shape:s.shape},{dataId:c.complexTensorInfos.imag.dataId,dtype:c.complexTensorInfos.imag.dtype,shape:s.shape},{dataId:a.complexTensorInfos.real.dataId,dtype:a.complexTensorInfos.real.dtype,shape:r.shape},{dataId:a.complexTensorInfos.imag.dataId,dtype:a.complexTensorInfos.imag.dtype,shape:r.shape}],h=n.runWebGLProgram(l,d,"float32"),f=n.runWebGLProgram(u,d,"float32"),p=Bt({inputs:{real:h,imag:f},backend:n});return n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(f),p}if(n.shouldExecuteOnCPU([s,r])){const c=n.texData.get(s.dataId),a=n.texData.get(r.dataId),[l,u]=Sw(s.shape,r.shape,c.values,a.values,o),d=n.makeTensorInfo(u,o),h=n.texData.get(d.dataId);return h.values=l,d}let i;return S().getBool("WEBGL_PACK_BINARY_OPERATIONS")?i=new es(iu,s.shape,r.shape):i=new Tn(iu,s.shape,r.shape),n.runWebGLProgram(i,[s,r],o)}const Sy={kernelName:ps,backendName:"webgl",kernelFunc:Go};/**
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
 */function Ey(t,e,n){const s=[yn(t.shape),...Cn(t.shape)],r={dtype:t.dtype,shape:s,dataId:t.dataId},o=[yn(e),...Cn(e)],i=new ql(o,s),c=!0,a=[s],l=n.runWebGLProgram(i,[r],t.dtype,a,c);return{dataId:l.dataId,shape:e,dtype:l.dtype}}/**
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
 */function P(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{shape:o}=s,i=n,c=D(r.shape),a=Se(o,c),l=D(a);$(c===l,()=>`The new shape (${a}) has ${l} elements and the old shape (${r.shape}) has ${c} elements. The new shape and old shape must have the same number of elements.`);const u=i.texData.get(r.dataId);return u.isPacked&&!js(r.shape,a)&&!(u.texture!==null&&js(u.shape,a))?Ey(r,a,i):(i.incRef(r.dataId),{dataId:r.dataId,shape:a,dtype:r.dtype})}const ky={kernelName:Fi,backendName:"webgl",kernelFunc:P};/**
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
 */class au{constructor(e,n){this.variableNames=["x"];const{windowSize:s,batchSize:r,inSize:o,outSize:i}=e;this.outputShape=[r,i];const c=Math.floor(s/4)*4,a=s%4;let l="sumValue += dot(values, ones);";if(n!=null){const d=1/n;l=`sumValue += dot(values * ${E(d)?d.toPrecision(2):d}, ones);`}let u="";o%s>0&&(u=`
        if (inIdx < 0 || inIdx >= ${o}) {
          return 0.0;
        }
      `),this.userCode=`
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${u}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${s};

        float sumValue = 0.0;

        for (int i = 0; i < ${c}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${l}
        }

        int inIdx = inOffset + ${c};
        if (${a===1}) {
          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);

          ${l}
        } else if (${a===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1), 0.0, 0.0);

          ${l}
        } else if (${a===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2), 0.0);

          ${l}
        }
        setOutput(sumValue);
      }
    `}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */class Ty{constructor(e,n){this.variableNames=["x"];const{windowSize:s,batchSize:r,inSize:o,outSize:i}=e;this.outputShape=[r,i];let c="0.0",a="";n==="prod"?c="1.0":n==="min"?(c="1.0 / 1e-20",a="min"):n==="max"&&(c="-1.0 / 1e-20",a="max");let l=`${n}(${n}(${n}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;n==="sum"?l="sumValue":n==="prod"?l="prodValue":n==="all"?l="allValue":n==="any"&&(l="anyValue");const u=Math.floor(s/4)*4,d=s%4;let h=`
      if (${n==="sum"}) {
        sumValue += dot(values, ones);
      } else if (${n==="prod"}) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = ${a}(values, minMaxValue);
        if (${n==="min"} || ${n==="max"}) {
          minMaxValue = ${a}(values, minMaxValue);
          bvec4 isNaN = isnan(values);
          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {
            minMaxValue = vec4(NAN);
          }
        }
      }
    `,f="vec4";n==="all"?(c="1.0",h=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,f="bvec4"):n==="any"&&(c="0.0",h=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,f="bvec4");let p="";o%s>0&&(p=`
        if (inIdx < 0 || inIdx >= ${o}) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = ${c};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${p}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${s};

        vec4 minMaxValue = vec4(${c});
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < ${u}; i += 4) {
          int inIdx = inOffset + i;
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${h}
        }

        int inIdx = inOffset + ${u};
        if (${d===1}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          ${h}
        } else if (${d===2}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          ${h}
        } else if (${d===3}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          ${h}
        }
        setOutput(${l});
      }
    `}}/**
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
 */function Ry(t){const e=[];for(;e.length===0||e[e.length-1].outSize!==1;){const n=e.length?e[e.length-1].outSize:t[1],s=zs(n);e.push({inSize:n,windowSize:s,outSize:Math.ceil(n/s)})}return e}function Jt(t,e,n,s){const r=Ry(t.shape);let o=t;for(let i=0;i<r.length;i++){const{inSize:c,windowSize:a,outSize:l}=r[i];let u,d;n==="mean"?u=i===0?new au({windowSize:a,inSize:c,batchSize:t.shape[0],outSize:l},c):new au({windowSize:a,inSize:c,batchSize:t.shape[0],outSize:l}):u=new Ty({windowSize:a,inSize:c,batchSize:t.shape[0],outSize:l},n),d=o,o=s.runWebGLProgram(u,[o],e),d.dataId!==t.dataId&&s.disposeIntermediateTensorInfo(d)}return o}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */class Ny{constructor(e,n){this.variableNames=["A"];const s=new Array(e.length);for(let i=0;i<s.length;i++)s[i]=e[n[i]];this.outputShape=s,this.rank=s.length;const r=me(this.rank),o=Ay(n);this.userCode=`
    void main() {
      ${r} resRC = getOutputCoords();
      setOutput(getA(${o}));
    }
    `}}function Ay(t){const e=t.length;if(e>6)throw Error(`Transpose for rank ${e} is not yet supported`);const n=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],s=new Array(e);for(let r=0;r<t.length;r++)s[t[r]]=n[r];return s.join()}/**
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
 */class _y{constructor(e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;const s=new Array(e.length);for(let u=0;u<s.length;u++)s[u]=e[n[u]];if(this.outputShape=s,this.rank=s.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);const r=me(this.rank),o=Xl("rc",this.rank),i=new Array(this.rank);for(let u=0;u<n.length;u++)i[n[u]]=o[u];const c=`vec2(${i.slice(-2).join()})`,a=`++${o[this.rank-1]} < ${s[this.rank-1]}`,l=`getChannel(getA(${i.join()}), ${c})`;this.userCode=`
    void main() {
      ${r} rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = ${l};
      if(${a}) {
        result[1] = ${l};
      }
      --${o[this.rank-1]};
      if(++${o[this.rank-2]} < ${s[this.rank-2]}) {
        result[2] = ${l};
        if(${a}) {
          result[3] = ${l};
        }
      }
      setOutput(result);
    }
    `}}/**
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
 */function or(t,e,n){const s=S().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new _y(t.shape,e):new Ny(t.shape,e);return n.runWebGLProgram(s,[t],t.dtype)}/**
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
 */function Dy(t,e,n,s){const r=e,o=t.shape.length,i=re(r,t.shape);let c=i;const a=Je(c,o),l=a!=null;let u=t;l&&(u=or(t,a,s),c=et(c.length,o)),pt("sum",c,o);const[d,h]=$t(u.shape,c);let f=d;n&&(f=Ze(d,i));const p=D(h),m=D(t.shape)/p,x=P({inputs:{x:u},attrs:{shape:[m,p]},backend:s}),b=zr(t.dtype),y=Jt(x,b,"sum",s),C=P({inputs:{x:y},attrs:{shape:f},backend:s});return s.disposeIntermediateTensorInfo(x),s.disposeIntermediateTensorInfo(y),l&&s.disposeIntermediateTensorInfo(u),C}/**
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
 */function ir(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{axis:o,keepDims:i}=s;return Dy(r,o,i,n)}const Fy={kernelName:Ui,backendName:"webgl",kernelFunc:ir};/**
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
 */function Ve(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{perm:o}=s,i=n,c=r.shape.length,a=new Array(c);for(let u=0;u<a.length;u++)a[u]=r.shape[o[u]];let l;if(i.shouldExecuteOnCPU([r])){const d=i.texData.get(r.dataId).values,h=Uo(d,r.shape,r.dtype,o,a);l=i.makeTensorInfo(a,r.dtype);const f=i.texData.get(l.dataId);f.values=h}else l=or(r,o,i);return l}const Py={kernelName:Dr,backendName:"webgl",kernelFunc:Ve};/**
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
 */const cu=1e3;function ar({a:t,b:e,transposeA:n,transposeB:s,backend:r,bias:o=null,preluActivationWeights:i=null,leakyreluAlpha:c=0,activation:a=null}){const l=t.shape.length,u=e.shape.length,d=n?t.shape[l-2]:t.shape[l-1],h=s?e.shape[u-1]:e.shape[u-2],f=n?t.shape[l-1]:t.shape[l-2],p=s?e.shape[u-2]:e.shape[u-1],g=t.shape.slice(0,-2),m=e.shape.slice(0,-2),x=D(g),b=D(m),C=we(t.shape.slice(0,-2),e.shape.slice(0,-2)).concat([f,p]);$(d===h,()=>`Error in matMul: inner shapes (${d}) and (${h}) of Tensors with shapes ${t.shape} and ${e.shape} and transposeA=${n} and transposeB=${s} must match.`);const v=n?[x,d,f]:[x,f,d],R=s?[b,p,h]:[b,h,p],T=P({inputs:{x:t},backend:r,attrs:{shape:v}}),_=P({inputs:{x:e},backend:r,attrs:{shape:R}}),M=[T,_],q=Math.max(x,b),ne=n?T.shape[1]:T.shape[2],de=o!=null,He=i!=null,De=a==="leakyrelu",je=a!=null?rr(a,!0):null,Ye=de||He||De||je!=null;let ct;if((f===1||p===1)&&ne>cu&&Ye===!1){let It=T,xt=_;n&&(It=Ve({inputs:{x:T},backend:r,attrs:{perm:[0,2,1]}}),M.push(It)),s&&(xt=Ve({inputs:{x:_},backend:r,attrs:{perm:[0,2,1]}}),M.push(xt));const Dn=p!==1,pr=p===1;let jo=It;Dn&&(jo=P({inputs:{x:It},backend:r,attrs:{shape:[q,ne,1]}}),M.push(jo));const QE=p===1?2:1;let Yo=xt;pr&&(Yo=P({inputs:{x:xt},backend:r,attrs:{shape:[q,1,ne]}}),M.push(Yo));const ju=Go({inputs:{a:jo,b:Yo},backend:r});ct=ir({inputs:{x:ju},backend:r,attrs:{axis:QE,keepDims:!0}}),M.push(ju)}else{const It=bt(t.dtype,e.dtype),xt=new su(v,R,[q,f,p],n,s,de,je,He,De),Dn=[T,_];if(o!=null&&Dn.push(o),He&&Dn.push(i),De){const pr=r.makeTensorInfo([],"float32",sn(c,"float32"));Dn.push(pr),M.push(pr)}ct=r.runWebGLProgram(xt,Dn,It)}const tn=P({inputs:{x:ct},backend:r,attrs:{shape:C}});M.push(ct);for(const It of M)r.disposeIntermediateTensorInfo(It);return tn}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Oy(t){const{inputs:e,backend:n,attrs:s}=t,{a:r,b:o,bias:i,preluActivationWeights:c}=e,{transposeA:a,transposeB:l,activation:u,leakyreluAlpha:d}=s;return ar({a:r,b:o,transposeA:a,transposeB:l,backend:n,bias:i,preluActivationWeights:c,leakyreluAlpha:d,activation:u})}const Ly={kernelName:_h,backendName:"webgl",kernelFunc:Oy};/**
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
 */const lu="return abs(x);";function By(t){const{inputs:e,backend:n}=t,{x:s}=e;if(n.shouldExecuteOnCPU([s])&&s.dtype!=="complex64"){const o=n.texData.get(s.dataId),i=zl(o.values);return n.makeTensorInfo(s.shape,s.dtype,i)}let r;return S().getBool("WEBGL_PACK_UNARY_OPERATIONS")?r=new Zt(s.shape,lu):r=new Rt(s.shape,lu),n.runWebGLProgram(r,[s],s.dtype)}const My={kernelName:yr,backendName:"webgl",kernelFunc:By};/**
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
 */const Vy=st+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,Uy=se({opSnippet:Vy}),Wy={kernelName:id,backendName:"webgl",kernelFunc:Uy};/**
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
 */const Gy=st+`
  if (x < 1.0) return NAN;
return log(x + sqrt(x * x - 1.0));`,zy=se({opSnippet:Gy}),Hy={kernelName:ad,backendName:"webgl",kernelFunc:zy};/**
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
 */const uu="return a + b;",Xy=_e({opSnippet:uu,packedOpSnippet:uu,supportsComplex:!0,cpuKernelImpl:iw}),qy={kernelName:On,backendName:"webgl",kernelFunc:Xy};/**
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
 */class Ky{constructor(e,n){this.outputShape=[],this.outputShape=e,this.variableNames=n.map((o,i)=>`T${i}`);const s=[];this.variableNames.forEach(o=>{s.push(`float v${o} = get${o}AtOutCoords();`)});const r=this.variableNames.map(o=>`v${o}`).join(" + ");this.userCode=`
      void main() {
        ${s.join(`
        `)}

        float result = ${r};
        setOutput(result);
      }
    `}}/**
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
 */class jy{constructor(e,n){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.variableNames=n.map((o,i)=>`T${i}`);const s=[];this.variableNames.forEach(o=>{s.push(`vec4 v${o} = get${o}AtOutCoords();`)});const r=this.variableNames.map(o=>`v${o}`).join(" + ");this.userCode=`
      void main() {
        ${s.join(`
        `)}

        vec4 result = ${r};
        setOutput(result);
      }
    `}}/**
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
 */function cr(t){const{inputs:e,backend:n}=t,s=e;if(s.length===1)return Ke({inputs:{x:s[0]},backend:n});if(s.length>S().get("WEBGL_MAX_TEXTURES_IN_SHADER")){const a=Math.floor(s.length/2),l=cr({inputs:s.slice(0,a),backend:n}),u=cr({inputs:s.slice(a),backend:n});return cr({inputs:[l,u],backend:n})}const r=s.map(a=>a.dtype).reduce((a,l)=>bt(a,l)),o=s.map(a=>a.shape),c=S().getBool("WEBGL_PACK")?new jy(s[0].shape,o):new Ky(s[0].shape,o);return n.runWebGLProgram(c,s,r)}const Yy={kernelName:cd,backendName:"webgl",kernelFunc:cr};/**
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
 */function Qy(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{axis:o,keepDims:i}=s,c=r.shape.length,a=re(o,r.shape);let l=a;const u=Je(l,c);let d=r;u!=null&&(d=Ve({inputs:{x:r},backend:n,attrs:{perm:u}}),l=et(l.length,c)),pt("all",l,c);const[h,f]=$t(d.shape,l),p=D(f),g=P({inputs:{x:d},backend:n,attrs:{shape:[-1,p]}}),m=Jt(g,g.dtype,"all",n);let x;if(i){const b=Ze(h,a);x=P({inputs:{x:m},backend:n,attrs:{shape:b}})}else x=P({inputs:{x:m},backend:n,attrs:{shape:h}});return n.disposeIntermediateTensorInfo(g),n.disposeIntermediateTensorInfo(m),u!=null&&n.disposeIntermediateTensorInfo(d),x}const Zy={kernelName:ld,backendName:"webgl",kernelFunc:Qy};/**
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
 */function Jy(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{axis:o,keepDims:i}=s,c=r.shape.length,a=re(o,r.shape);let l=a;const u=Je(l,c);let d=r;u!=null&&(d=Ve({inputs:{x:r},backend:n,attrs:{perm:u}}),l=et(l.length,c)),pt("any",l,c);const[h,f]=$t(d.shape,l),p=D(f),g=P({inputs:{x:d},backend:n,attrs:{shape:[-1,p]}}),m=Jt(g,g.dtype,"any",n);let x;if(i){const b=Ze(h,a);x=P({inputs:{x:m},backend:n,attrs:{shape:b}})}else x=P({inputs:{x:m},backend:n,attrs:{shape:h}});return n.disposeIntermediateTensorInfo(g),n.disposeIntermediateTensorInfo(m),u!=null&&n.disposeIntermediateTensorInfo(d),x}const eC={kernelName:ud,backendName:"webgl",kernelFunc:Jy};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */class tC{constructor(e,n,s){this.variableNames=["A"];const{windowSize:r,batchSize:o,outSize:i}=e;s||this.variableNames.push("bestIndicesA"),this.outputShape=[o,i];const c=n==="max"?">":"<",a=s?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${r};

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < ${r}; i++) {
          int inIdx = ${a};
          float candidate = getA(batch, inIdx);
          if (candidate ${c} bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `}}/**
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
 */class nC{constructor(e,n,s,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,$(e.length>2,()=>`Packed arg${s.charAt(0).toUpperCase()+s.slice(1)} supports only inputs with rank above 2.`);const o=e[e.length-1],i=Math.ceil(o/n);this.outputShape=e.slice(0,-1),i>1&&this.outputShape.push(i),r||this.variableNames.push("bestIndicesA");const c=this.outputShape,a=c.length,l=me(a),u=Me("coords",a);let d,h;if(i===1){h=a+1;const _=me(h);d=`
        ${_} sourceLocR = ${_}(${u.join()}, 0);
        ++${u[a-1]};
        ${_} sourceLocG = ${_}(${u.join()}, 0);
        ++${u[a-2]};
        ${_} sourceLocA = ${_}(${u.join()}, 0);
        --${u[a-1]};
        ${_} sourceLocB = ${_}(${u.join()}, 0);
        --${u[a-2]};`}else h=a,d=`
        ${l} sourceLocR = coords;
        ++${u[a-1]};
        ${l} sourceLocG = coords;
        ++${u[a-2]};
        ${l} sourceLocA = coords;
        --${u[a-1]};
        ${l} sourceLocB = coords;
        --${u[a-2]};`;const f=["x","y","z","w","u","v"].slice(0,h),p="."+f[h-1],g=f.map(_=>"int "+_),m=Me("sourceLocR",h-1).concat("inIdx.r"),x=Me("sourceLocG",h-1).concat("inIdx.g"),b=Me("sourceLocB",h-1).concat("inIdx.b"),y=Me("sourceLocA",h-1).concat("inIdx.a"),C=s==="max"?"greaterThan":"lessThan",v=r?"":`
          inIdx = round(vec4(getBestIndicesAChannel(${m.join()}),
                             getBestIndicesAChannel(${x.join()}),
                             getBestIndicesAChannel(${b.join()}),
                             getBestIndicesAChannel(${y.join()})));`,R=`vec4(
            getAChannel(${m.join()}),
            hasNextCol ? getAChannel(${x.join()}) : 0.,
            hasNextRow ? getAChannel(${b.join()}) : 0.,
            hasNextRow && hasNextCol ? getAChannel(${y.join()}) : 0.)`,T=r?"":`
      float getBestIndicesAChannel(${g.join()}) {
        return getChannel(getBestIndicesA(${f.join()}),
                                          vec2(${f.slice(-2).join()}));
      }`;this.userCode=`
      float getAChannel(${g.join()}) {
        return getChannel(getA(${f.join()}),
                               vec2(${f.slice(-2).join()}));
      }
      ${T}
      void main() {
        ${l} coords = getOutputCoords();
        bool hasNextCol = ${u[a-1]} < ${c[a-1]-1};
        bool hasNextRow = ${u[a-2]} < ${c[a-2]-1};
        ${d}
        ivec4 srcIdx = ivec4(sourceLocR${p}, sourceLocG${p},
          sourceLocB${p}, sourceLocA${p}) * ${n};
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = ${R};

        for (int i = 0; i < ${n}; i++) {
          inIdx = srcIdx;
          ${v}
          vec4 candidate = ${R};
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(${C}(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `}}/**
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
 */function du(t,e,n,s=null){let r=e.shape[0],o=e.shape[1];s!=null&&(r=s.shape[0],o=s.shape[1]);const i=zs(o),c={windowSize:i,inSize:o,batchSize:r,outSize:Math.ceil(o/i)},a=new tC(c,n,s==null),l=[e];s!=null&&l.push(s);const u=t.runWebGLProgram(a,l,"int32");if(u.shape[1]===1)return u;const d=du(t,e,n,u);return t.disposeIntermediateTensorInfo(u),d}function hu(t,e,n,s=null){const r=s!=null?s.shape:e.shape,o=r[r.length-1],i=zs(o),c=new nC(r,i,n,s==null),a=s==null?[e]:[e,s],l=t.runWebGLProgram(c,a,"int32");if(l.shape.length===e.shape.length){const u=hu(t,e,n,l);return t.disposeIntermediateTensorInfo(l),u}return l}function fu(t,e,n,s){const r=[n];if(pt("arg"+s.charAt(0).toUpperCase()+s.slice(1),r,e.shape.length),!S().getBool("WEBGL_PACK_REDUCE")||e.shape.length<=2){const o=[],i=t.texData.get(e.dataId),c=i!==null&&i.isPacked;let a=e;c&&(a=t.unpackTensor(e),o.push(a));const[l,u]=$t(a.shape,r),d=D(u),h=P({inputs:{x:a},backend:t,attrs:{shape:[-1,d]}});o.push(h);const f=du(t,h,s);o.push(f);const p=P({inputs:{x:f},backend:t,attrs:{shape:l}});return o.forEach(g=>t.disposeIntermediateTensorInfo(g)),p}return hu(t,e,s)}/**
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
 */function sC(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{axis:o}=s;let i=re(o,r.shape);const c=Je(i,r.shape.length);let a=r;const l=[];c!=null&&(a=Ve({inputs:{x:r},backend:n,attrs:{perm:c}}),l.push(a),i=et(i.length,a.shape.length)),pt("argMax",[i[0]],a.shape.length);const u=fu(n,a,i[0],"max");return l.forEach(d=>n.disposeIntermediateTensorInfo(d)),u}const rC={kernelName:dd,backendName:"webgl",kernelFunc:sC};/**
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
 */function oC(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{axis:o}=s;let i=re(o,r.shape);const c=Je(i,r.shape.length);let a=r;const l=[];c!=null&&(a=Ve({inputs:{x:r},backend:n,attrs:{perm:c}}),l.push(a),i=et(i.length,a.shape.length)),pt("argMin",[i[0]],a.shape.length);const u=fu(n,a,i[0],"min");return l.forEach(d=>n.disposeIntermediateTensorInfo(d)),u}const iC={kernelName:hd,backendName:"webgl",kernelFunc:oC};/**
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
 */const aC=st+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,cC=se({opSnippet:aC}),lC={kernelName:fd,backendName:"webgl",kernelFunc:cC};/**
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
 */const uC=st+"return log(x + sqrt(x * x + 1.0));",dC=se({opSnippet:uC}),hC={kernelName:pd,backendName:"webgl",kernelFunc:dC};/**
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
 */const fC=st+`
  return atan(x);
`,pC=se({opSnippet:fC}),gC={kernelName:gd,backendName:"webgl",kernelFunc:pC};/**
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
 */const mC=$y+`
  return atan(a, b);
`,xC=`
  vec4 result = atan(a, b);
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  `+Iy+`
  return result;
`,bC=_e({opSnippet:mC,packedOpSnippet:xC}),wC={kernelName:xd,backendName:"webgl",kernelFunc:bC};/**
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
 */const yC=st+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,CC=se({opSnippet:yC}),vC={kernelName:md,backendName:"webgl",kernelFunc:CC};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */class ts{constructor(e,n,s,r=!1,o=!1){if(this.variableNames=["x"],n==="avg"&&s)throw new Error("Cannot compute positions for average pool.");const i=e.filterWidth,c=e.strideHeight,a=e.strideWidth,l=e.dilationHeight,u=e.dilationWidth,d=e.effectiveFilterHeight,h=e.effectiveFilterWidth,f=e.padInfo.top,p=e.padInfo.left;this.outputShape=e.outShape;const g=n==="avg",m=`((batch  * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + d`,x=`(xR * ${e.inWidth} + xC) * ${e.inChannels} + d`;let b="0.0";if(g||(b="-1.0 / 1e-20"),s){const _=">=";this.userCode=`
        const ivec2 strides = ivec2(${c}, ${a});
        const ivec2 pads = ivec2(${f}, ${p});

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < ${d};
              wR += ${l}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${h};
                wC += ${u}) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value ${_} currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = ${r?o?m:x:`wR * ${h} + wC`};
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}const y="max";let C=`${n}(${n}(${n}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;n==="avg"&&(C="avgValue / count");const v=Math.floor(i/4)*4,R=i%4,T=`
      if (${g}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${y}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(${c}, ${a});
      const ivec2 pads = ivec2(${f}, ${p});
      const float initializationValue = ${b};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(${b});
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < ${d};
            wR += ${l}) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${v}; wC += 4) {
            int xC = xCCorner + wC * ${u};

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              getValue(batch, xR, xC + 2 * ${u}, d),
              getValue(batch, xR, xC + 3 * ${u}, d)
            );

            ${T}
          }

          int xC = xCCorner + ${v};
          if (${R===1}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            ${T}
          } else if (${R===2}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              initializationValue,
              initializationValue
            );

            ${T}
          } else if (${R===3}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              getValue(batch, xR, xC + 2 * ${u}, d),
              initializationValue
            );

            ${T}
          }
        }
        setOutput(${C});
      }
    `}}class zo{constructor(e,n,s,r=!1,o=!1){if(this.variableNames=["x"],n==="avg"&&s)throw new Error("Cannot compute positions for average pool.");const i=e.filterWidth,c=e.strideDepth,a=e.strideHeight,l=e.strideWidth,u=e.dilationDepth,d=e.dilationHeight,h=e.dilationWidth,f=e.effectiveFilterDepth,p=e.effectiveFilterHeight,g=e.effectiveFilterWidth,m=e.padInfo.front,x=e.padInfo.top,b=e.padInfo.left;this.outputShape=e.outShape;const y=n==="avg";let C="0.0";if(y||(C="-1.0 / 1e-20"),s){const q=">=";this.userCode=`
        const ivec3 strides =
            ivec3(${c}, ${a}, ${l});
        const ivec3 pads = ivec3(${m}, ${x}, ${b});

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < ${f};
              wD += ${u}) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= ${e.inDepth}) {
              continue;
            }

            for (int wR = 0; wR < ${p};
                wR += ${d}) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int wC = 0; wC < ${g};
                  wC += ${h}) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value ${q} currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition = ${r?o?`(((batch * ${e.inDepth} + xD) * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`((xD * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`wD * ${p} * ${g} +
                      wR * ${g} + wC`};
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}const v="max";let R=`${n}(${n}(${n}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;n==="avg"&&(R="avgValue / count");const T=Math.floor(i/4)*4,_=i%4,M=`
      if (${y}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${v}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(${c}, ${a}, ${l});
      const ivec3 pads = ivec3(${m}, ${x}, ${b});
      const float initializationValue = ${C};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(${C});
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < ${f};
            wD += ${u}) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${p};
            wR += ${d}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${T}; wC += 4) {
              int xC = xCCorner + wC * ${h};

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${h}, ch),
                getValue(batch, xD, xR, xC + 2 * ${h}, ch),
                getValue(batch, xD, xR, xC + 3 * ${h}, ch)
              );

              ${M}
            }

            int xC = xCCorner + ${T};
            if (${_===1}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              ${M}
            } else if (${_===2}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${h}, ch),
                initializationValue,
                initializationValue
              );

              ${M}
            } else if (${_===3}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${h}, ch),
                getValue(batch, xD, xR, xC + 2 * ${h}, ch),
                initializationValue
              );

              ${M}
            }
          }
          setOutput(${R});
        }
      }
    `}}/**
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
 */function $C(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e;Yn(r,"avgPool");const{filterSize:o,strides:i,pad:c,dimRoundingMode:a}=s,l=1;$(xn(i,l),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${l}'`);const u=gn(r.shape,o,i,l,c,a);if(u.filterWidth===1&&u.filterHeight===1&&k(u.inShape,u.outShape))return Ke({inputs:{x:r},backend:n});const d=new ts(u,"avg",!1);return n.runWebGLProgram(d,[r],"float32")}const IC={kernelName:bd,backendName:"webgl",kernelFunc:$C};/**
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
 */function SC(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{filterSize:o,strides:i,pad:c,dimRoundingMode:a,dataFormat:l}=s,u=[1,1,1],d=Hn(r.shape,o,i,u,c,a,l),h=new zo(d,"avg",!1);return n.runWebGLProgram(h,[r],"float32")}const EC={kernelName:yd,backendName:"webgl",kernelFunc:SC};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */class kC{constructor(e){this.variableNames=["dy"],this.outputShape=e.inShape;const n=e.filterHeight,s=e.filterWidth,r=e.strideHeight,o=e.strideWidth,i=e.dilationHeight,c=e.dilationWidth,a=e.effectiveFilterHeight,l=e.effectiveFilterWidth,u=a-1-e.padInfo.top,d=l-1-e.padInfo.left,h=1/(n*s);this.userCode=`
      const ivec2 pads = ivec2(${u}, ${d});
      const float avgMultiplier = float(${h});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${a};
            wR += ${i}) {
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${l};
            wC+= ${c}) {
            float dyC = float(dyCCorner + wC) / ${o}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `}}class TC{constructor(e){this.variableNames=["dy"],this.outputShape=e.inShape;const n=e.filterDepth,s=e.filterHeight,r=e.filterWidth,o=e.strideDepth,i=e.strideHeight,c=e.strideWidth,a=e.dilationDepth,l=e.dilationHeight,u=e.dilationWidth,d=e.effectiveFilterDepth,h=e.effectiveFilterHeight,f=e.effectiveFilterWidth,p=d-1-e.padInfo.front,g=h-1-e.padInfo.top,m=f-1-e.padInfo.left,x=1/(n*s*r);this.userCode=`
      const ivec3 pads = ivec3(${p}, ${g}, ${m});
      const float avgMultiplier = float(${x});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${d};
            wD += ${a}) {
          float dyD = float(dyDCorner + wD) / ${o}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${h};
              wR += ${l}) {
            float dyR = float(dyRCorner + wR) / ${i}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${f};
                wC += ${u}) {
              float dyC = float(dyCCorner + wC) / ${c}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}/**
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
 */function RC(t){const{inputs:e,backend:n,attrs:s}=t,{dy:r,input:o}=e,i=o,{filterSize:c,strides:a,pad:l,dimRoundingMode:u}=s,d=[1,1,1],h=Hn(i.shape,c,a,d,l,u),f=new TC(h);return n.runWebGLProgram(f,[r],i.dtype)}const NC={kernelName:Cd,backendName:"webgl",kernelFunc:RC};/**
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
 */function AC(t){const{inputs:e,backend:n,attrs:s}=t,{dy:r,input:o}=e,i=o;Yn([r,o],"avgPoolGrad");const{filterSize:c,strides:a,pad:l}=s,u=gn(i.shape,c,a,1,l),d=new kC(u);return n.runWebGLProgram(d,[r],i.dtype)}const _C={kernelName:wd,backendName:"webgl",kernelFunc:AC};/**
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
 */function DC(t){const{inputs:e,backend:n,attrs:s}=t,{a:r,b:o}=e,{transposeA:i,transposeB:c}=s;return ar({a:r,b:o,transposeA:i,transposeB:c,backend:n})}const FC={kernelName:oi,backendName:"webgl",kernelFunc:DC};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */class PC{constructor(e,n,s,r,o,i){this.outputShape=[],this.variableNames=["x","mean","variance"],we(e,n),we(e,s);let c="0.0";r!=null&&(we(e,r),this.variableNames.push("offset"),c="getOffsetAtOutCoords()");let a="1.0";o!=null&&(we(e,o),this.variableNames.push("scale"),a="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ${c};
        float scale = ${a};
        float inv = scale * inversesqrt(variance + float(${i}));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */class OC{constructor(e,n,s,r,o,i){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],we(e,n),we(e,s);let c="vec4(0.0)";r!=null&&(we(e,r),this.variableNames.push("offset"),c="getOffsetAtOutCoords()");let a="vec4(1.0)";o!=null&&(we(e,o),this.variableNames.push("scale"),a="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`
      void main() {
        vec4 offset = ${c};
        vec4 scale = ${a};

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(${i}));

        setOutput((x - mean) * inv + offset);
      }
    `}}/**
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
 */const LC={kernelName:zd,backendName:"webgl",kernelFunc:({inputs:t,backend:e,attrs:n})=>{const{x:s,mean:r,variance:o,offset:i,scale:c}=t;$(r.shape.length===o.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),$(i==null||r.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),$(c==null||r.shape.length===c.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let{varianceEpsilon:a}=n;a==null&&(a=.001);const l=[s,r,o];let u=null;i!=null&&(u=i.shape,l.push(i));let d=null;c!=null&&(d=c.shape,l.push(c));const h=S().getBool("WEBGL_PACK_NORMALIZATION")?new OC(s.shape,r.shape,o.shape,u,d,a):new PC(s.shape,r.shape,o.shape,u,d,a);return e.runWebGLProgram(h,l,l[0].dtype)}};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */class BC{constructor(e){this.variableNames=["source"],this.outputShape=e,this.rank=e.length;const n=me(this.rank);this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const s=MC(this.rank);let r;const o=e.map((i,c)=>`sourceLoc.${Ho[c]} = start[${c}] + coords.${Ho[c]};`);r=`
        ${n} sourceLoc;
        ${n} coords = getOutputCoords();
        ${o.join(`
`)}
      `,this.userCode=`
      void main() {
        ${r}
        setOutput(getSource(${s}));
      }
    `}}const Ho=["x","y","z","w","u","v"];function MC(t){if(t===1)return"sourceLoc";if(t<=6)return Ho.slice(0,t).map(e=>"sourceLoc."+e).join(",");throw Error(`Slicing for rank ${t} is not yet supported`)}/**
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
 */class VC{constructor(e){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const n=me(this.rank),s=Me("coords",this.rank),r=Me("sourceLoc",this.rank),o=this.rank===1?"sourceLoc":`vec2(${r.slice(-2).join()})`,i=`getChannel(getSource(${r.join()}), ${o})`,c=`
      result.x = ${i};
      if (++${s[this.rank-1]} < ${e[this.rank-1]}) {
        ++${r[this.rank-1]};
        result.y = ${i};
        --${r[this.rank-1]};
      }
    `,a=this.rank===1?"":`
      --${s[this.rank-1]};
      if (++${s[this.rank-2]} < ${e[this.rank-2]}) {
        ++${r[this.rank-2]};
        result.z = ${i};
        if (++${s[this.rank-1]} < ${e[this.rank-1]}) {
          ++${r[this.rank-1]};
          result.w = ${i};
        }
      }
    `,l=this.rank<=4?`sourceLoc = coords +
            ${n}(${e.map((u,d)=>`start[${d}]`).join()});`:e.map((u,d)=>`${r[d]} = ${s[d]} + start[${d}];`).join(`
`);this.userCode=`
      void main() {
        ${n} coords = getOutputCoords();
        ${n} sourceLoc;
        ${l}
        vec4 result = vec4(0.);
        ${c}
        ${a}
        setOutput(result);
      }
    `}}/**
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
 */function UC(t,e,n,s){const r=s.texData.get(t.dataId),o=s.makeTensorInfo(n,t.dtype),i=s.texData.get(o.dataId);Object.assign(i,r),i.refCount=1,i.shape=n,i.dtype=t.dtype;let c=oo(e,Re(t.shape));r.slice&&(c+=r.slice.flatOffset),i.slice={flatOffset:c,origDataId:r.slice&&r.slice.origDataId||t.dataId};const a=s.dataRefCount.get(i.slice.origDataId)||1;return s.dataRefCount.set(i.slice.origDataId,a+1),o}function Nn(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{begin:o,size:i}=s,[c,a]=io(r,o,i);if(so(r,c,a),D(a)===0)return n.makeTensorInfo(a,r.dtype,[]);if(n.shouldExecuteOnCPU([r])||r.dtype==="string"){const d=n.texData.get(r.dataId),h=_w(d.values,c,a,r.shape,r.dtype);return n.makeTensorInfo(a,r.dtype,h)}const{isPacked:l}=n.texData.get(r.dataId),u=ro(r.shape,c,a);if(l||!u){const d=S().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new VC(a):new BC(a),h=[c];return n.runWebGLProgram(d,[r],r.dtype,h)}return n.uploadToGPU(r.dataId),UC(r,c,a,n)}const WC={kernelName:Ar,backendName:"webgl",kernelFunc:Nn};/**
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
 */const GC={kernelName:vd,backendName:"webgl",kernelFunc:t=>{const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{blockShape:o,crops:i}=s;$(r.shape.length<=4,()=>"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet");const c=o.reduce((b,y)=>b*y),a=Co(r.shape,o,c),l=vo(a.length,o.length),u=$o(r.shape,o,c),d=vc(i,o.length),h=$c(u,i,o.length),f=[],p=P({inputs:{x:r},backend:n,attrs:{shape:a}}),g=Ve({inputs:{x:p},backend:n,attrs:{perm:l}}),m=P({inputs:{x:g},backend:n,attrs:{shape:u}}),x=Nn({inputs:{x:m},backend:n,attrs:{begin:d,size:h}});return f.push(p),f.push(g),f.push(m),f.forEach(b=>n.disposeIntermediateTensorInfo(b)),x}};/**
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
 */function zC(t){const{inputs:e,backend:n,attrs:s}=t,{x:r,weights:o}=e,{size:i}=s,c=n.readSync(r.dataId),a=n.readSync(o.dataId),l=Gl(c,a,o.dtype,o.shape,i);return n.makeTensorInfo([i],o.dtype,l)}const HC={kernelName:ii,backendName:"webgl",kernelFunc:zC};/**
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
 */function XC(t){const{inputs:e,backend:n}=t,{s0:s,s1:r}=e,o=n.readSync(s.dataId),i=n.readSync(r.dataId),c=we(Array.from(o),Array.from(i));return n.makeTensorInfo([c.length],"int32",Int32Array.from(c))}const qC={kernelName:$d,backendName:"webgl",kernelFunc:XC};/**
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
 */const pu=_e({opSnippet:"return float(a != b);",cpuKernelImpl:kw,dtype:"bool"}),KC={kernelName:gs,backendName:"webgl",kernelFunc:pu};/**
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
 */function ns(t){const{inputs:e,backend:n}=t,{input:s}=e,r=n.texData.get(s.dataId);return Ke({inputs:{x:r.complexTensorInfos.real},backend:n})}const jC={kernelName:Rr,backendName:"webgl",kernelFunc:ns};/**
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
 */const YC="return float(int(x));";function QC(t,e){const n=new Rt(t.shape,YC),s=e.runWebGLProgram(n,[t],"int32");return{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}/**
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
 */function Xo(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{dtype:o}=s;if(o==="complex64"){if(r.dtype==="complex64")return Ke({inputs:{x:r},backend:n});const i=dn(r.shape),c=Xo({inputs:{x:r},backend:n,attrs:{dtype:"float32"}}),a=Bt({inputs:{real:c,imag:i},backend:n});return i.dispose(),n.disposeIntermediateTensorInfo(c),a}if(r.dtype==="complex64"){const i=ns({inputs:{input:r},backend:n}),c=Xo({inputs:{x:i},backend:n,attrs:{dtype:o}});return n.disposeIntermediateTensorInfo(i),c}if(!Fe(r.dtype,o)){const i=Ke({inputs:{x:r},backend:n});return{dataId:i.dataId,shape:i.shape,dtype:o}}if(o==="int32")return QC(r,n);if(o==="bool"){const i=n.makeTensorInfo([],"bool",xe("bool",1)),a=pu({inputs:{a:r,b:i},backend:n});return n.disposeIntermediateTensorInfo(i),a}throw new Error(`Error in Cast: failed to cast ${r.dtype} to ${o}`)}const ZC={kernelName:is,backendName:"webgl",kernelFunc:Xo};/**
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
 */const gu="return ceil(x);",JC=se({opSnippet:gu,packedOpSnippet:gu,cpuKernelImpl:cw}),ev={kernelName:Cr,backendName:"webgl",kernelFunc:JC};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */class tv{constructor(e){this.variableNames=["A"],this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode=`

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */class nv{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode=`
      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}}/**
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
 */function sv(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{clipValueMin:o,clipValueMax:i}=s;let c;S().getBool("WEBGL_PACK_CLIP")?c=new nv(r.shape):c=new tv(r.shape);const a=[[o],[i]];return n.runWebGLProgram(c,[r],r.dtype,a)}const rv={kernelName:Id,backendName:"webgl",kernelFunc:sv};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */class ov{constructor(e){this.variableNames=["real","imag"],this.outputShape=e,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `}}/**
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
 */function mu(t,e){return{dataId:e.dataId,dtype:e.dtype,shape:t.shape}}function iv(t){const{inputs:e,backend:n}=t,{x:s}=e,r=n.texData.get(s.dataId),o=new ov(s.shape),i=[mu(s,r.complexTensorInfos.real),mu(s,r.complexTensorInfos.imag)];return n.runWebGLProgram(o,i,i[0].dtype)}const av={kernelName:ai,backendName:"webgl",kernelFunc:iv};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */class cv{constructor(e){this.outputShape=[],this.outputShape=qt(e,1),this.variableNames=e.map((i,c)=>`T${c}`);const n=new Array(e.length-1);n[0]=e[0][1];for(let i=1;i<n.length;i++)n[i]=n[i-1]+e[i][1];const s=[`if (yC < ${n[0]}) setOutput(getT0(yR, yC));`];for(let i=1;i<n.length;i++){const c=n[i-1];s.push(`else if (yC < ${n[i]}) setOutput(getT${i}(yR, yC-${c}));`)}const r=n.length,o=n[n.length-1];s.push(`else setOutput(getT${r}(yR, yC-${o}));`),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ${s.join(`
        `)}
      }
    `}}/**
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
 */class lv{constructor(e,n){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=qt(e,n);const s=this.outputShape,r=s.length,o=me(r),i=Me("coords",r),c=["x","y","z","w","u","v"].slice(0,r);this.variableNames=e.map((g,m)=>`T${m}`);const a=new Array(e.length-1);a[0]=e[0][n];for(let g=1;g<a.length;g++)a[g]=a[g-1]+e[g][n];const l=c[n],u=c.slice(-2),d=c.join();let h=`if (${l} < ${a[0]}) {
        return getChannel(
            getT0(${d}), vec2(${u.join()}));
        }`;for(let g=1;g<a.length;g++){const m=a[g-1];h+=`
        if (${l} < ${a[g]}  && ${l} >= ${a[g-1]}) {
          return getChannel(
            getT${g}(${lr(c,l,m)}),
            vec2(${lr(u,l,m)}));
        }`}const f=a.length,p=a[a.length-1];h+=`
        return getChannel(
          getT${f}(${lr(c,l,p)}),
          vec2(${lr(u,l,p)}));`,this.userCode=`
      float getValue(${c.map(g=>"int "+g)}) {
        ${h}
      }

      void main() {
        ${o} coords = getOutputCoords();
        vec4 result = vec4(getValue(${i}), 0., 0., 0.);

        ${i[r-1]} = ${i[r-1]} + 1;
        if (${i[r-1]} < ${s[r-1]}) {
          result.g = getValue(${i});
        }

        ${i[r-2]} = ${i[r-2]} + 1;
        if (${i[r-2]} < ${s[r-2]}) {
          result.a = getValue(${i});
        }

        ${i[r-1]} = ${i[r-1]} - 1;
        if (${i[r-2]} < ${s[r-2]} &&
            ${i[r-1]} < ${s[r-1]}) {
          result.b = getValue(${i});
        }
        setOutput(result);
      }
    `}}function lr(t,e,n){const s=t.indexOf(e);return t.map((o,i)=>i===s?`${o} - ${n}`:o).join()}/**
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
 */function ur(t){const{inputs:e,backend:n}=t,{input:s}=e,r=n.texData.get(s.dataId);return Ke({inputs:{x:r.complexTensorInfos.imag},backend:n})}const uv={kernelName:bi,backendName:"webgl",kernelFunc:ur};/**
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
 */function An(t,e,n){const s=t[0].dtype;if(s==="complex64"){const u=t.map(g=>ns({inputs:{input:g},backend:n})),d=t.map(g=>ur({inputs:{input:g},backend:n})),h=An(u,e,n),f=An(d,e,n),p=Bt({inputs:{real:h,imag:f},backend:n});return u.forEach(g=>n.disposeIntermediateTensorInfo(g)),d.forEach(g=>n.disposeIntermediateTensorInfo(g)),n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(f),p}let r=n.shouldExecuteOnCPU(t);if(s==="string"&&(r=!0),r){const u=t.map(x=>{const b=D(x.shape.slice(e));return P({inputs:{x},backend:n,attrs:{shape:[-1,b]}})}),d=u.map(x=>({vals:n.readSync(x.dataId),shape:x.shape})),h=qt(u.map(x=>x.shape),1),f=u[0].shape[0]===1,p=lw(d,h,s,f),g=qt(t.map(x=>x.shape),e),m=n.makeTensorInfo(g,s,p);return u.forEach(x=>n.disposeIntermediateTensorInfo(x)),m}if(t.length>S().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){const u=Math.floor(t.length/2),d=An(t.slice(0,u),e,n),h=An(t.slice(u),e,n),f=An([d,h],e,n);return n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(h),f}if(S().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&t[0].shape.length>1){const u=new lv(t.map(d=>d.shape),e);return n.runWebGLProgram(u,t,s)}const{tensors2D:o,outShape:i}=dv(t,e,n),c=new cv(o.map(u=>u.shape)),a=n.runWebGLProgram(c,o,s);o.forEach(u=>n.disposeIntermediateTensorInfo(u));const l=P({inputs:{x:a},attrs:{shape:i},backend:n});return n.disposeIntermediateTensorInfo(a),l}function dv(t,e,n){const s=qt(t.map(o=>o.shape),e);return{tensors2D:t.map(o=>P({inputs:{x:o},attrs:{shape:[-1,D(o.shape.slice(e))]},backend:n})),outShape:s}}/**
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
 */function xu(t){const{inputs:e,backend:n,attrs:s}=t,{axis:r}=s,o=re(r,e[0].shape)[0],i=qt(e.map(l=>l.shape),o);if(D(i)===0)return n.makeTensorInfo(i,e[0].dtype,[]);const c=e.filter(l=>D(l.shape)>0);if(c.length===1)return Ke({inputs:{x:c[0]},backend:n});const a=c.map(l=>l.shape);return wc(a,o),An(c,o,n)}const hv={kernelName:ci,backendName:"webgl",kernelFunc:xu};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */class bu{constructor(e,n=!1,s=null,r=!1,o=!1){this.variableNames=["x","W"],this.outputShape=e.outShape;const i=e.padInfo.top,c=e.padInfo.left,a=e.strideHeight,l=e.strideWidth,u=e.dilationHeight,d=e.dilationWidth,h=e.filterHeight,f=e.filterWidth,p=Math.floor(e.inChannels/4)*4,g=e.inChannels%4,m=e.dataFormat==="channelsLast",x=m?1:2,b=m?2:3,y=m?3:1;let C="",v="";s&&(r?C=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${s}
        }`:o?C=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${s}
        }`:C=`
          float activation(float x) {
            ${s}
          }
        `,v="result = activation(result);");const R=n?"result += getBiasAtOutCoords();":"";n&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),o&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${C}

      const ivec2 strides = ivec2(${a}, ${l});
      const ivec2 pads = ivec2(${i}, ${c});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[${y}];

        ivec2 xRCCorner =
            ivec2(coords[${x}], coords[${b}]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${h}; wR++) {
          int xR = xRCorner + wR * ${u};

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${f}; wC++) {
            int xC = xCCorner + wC * ${d};

            if (xC < 0 || xC >= ${e.inWidth}) {
              continue;
            }

            for (int d1 = 0; d1 < ${p}; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (${m}) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (${g===1}) {

              if (${m}) {
                dotProd +=
                    getX(batch, xR, xC, ${p}) *
                    getW(wR, wC, ${p}, d2);
              } else {
                dotProd +=
                    getX(batch, ${p}, xR, xC) *
                    getW(wR, wC, ${p}, d2);
              }

            } else if (${g===2}) {
              vec2 wValues = vec2(
                getW(wR, wC, ${p}, d2),
                getW(wR, wC, ${p} + 1, d2)
              );

              if (${m}) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, ${p}),
                  getX(batch, xR, xC, ${p} + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, ${p}, xR, xC),
                  getX(batch, ${p} + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (${g===3}) {
              vec3 wValues = vec3(
                getW(wR, wC, ${p}, d2),
                getW(wR, wC, ${p} + 1, d2),
                getW(wR, wC, ${p} + 2, d2)
              );

              if (${m}) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, ${p}),
                  getX(batch, xR, xC, ${p} + 1),
                  getX(batch, xR, xC, ${p} + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, ${p}, xR, xC),
                  getX(batch, ${p} + 1, xR, xC),
                  getX(batch, ${p} + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        ${R}
        ${v}
        setOutput(result);
      }
    `}}class fv{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;const n=e.padInfo.front,s=e.padInfo.top,r=e.padInfo.left,o=e.strideDepth,i=e.strideHeight,c=e.strideWidth,a=e.dilationDepth,l=e.dilationHeight,u=e.dilationWidth,d=e.filterDepth,h=e.filterHeight,f=e.filterWidth,p=Math.floor(e.inChannels/4)*4,g=e.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(${o}, ${i}, ${c});
      const ivec3 pads = ivec3(${n}, ${s}, ${r});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < ${d}; wF++) {
          int xF = xFCorner + wF * ${a};

          if (xF < 0 || xF >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${h}; wR++) {
            int xR = xRCorner + wR * ${l};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${f}; wC++) {
              int xC = xCCorner + wC * ${u};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              for (int d1 = 0; d1 < ${p}; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (${g===1}) {
                dotProd +=
                  getX(batch, xF, xR, xC, ${p}) *
                  getW(wF, wR, wC, ${p}, d2);
              } else if (${g===2}) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, ${p}),
                  getX(batch, xF, xR, xC, ${p} + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, ${p}, d2),
                  getW(wF, wR, wC, ${p} + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (${g===3}) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, ${p}),
                  getX(batch, xF, xR, xC, ${p} + 1),
                  getX(batch, xF, xR, xC, ${p} + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, ${p}, d2),
                  getW(wF, wR, wC, ${p} + 1, d2),
                  getW(wF, wR, wC, ${p} + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}/**
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
 */class pv{constructor(e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec3"},{name:"pad",type:"ivec2"},{name:"stride",type:"ivec2"},{name:"dilation",type:"ivec2"},{name:"inChannels",type:"int"},{name:"itemsPerBlockRow",type:"int"},{name:"outWidth",type:"int"}],this.outputShape=e,this.enableShapeUniforms=ze(this.outputShape.length);const{dataFormat:s}=n,r=Be(),o=s==="channelsLast",i=o?0:1,c=o?1:2,a=this.enableShapeUniforms?"if(blockIndex < outShape[1] && pos < outShape[0]) {":`if(blockIndex < ${e[1]} && pos < ${e[0]}) {`;let l="";for(let u=0;u<=1;u++)for(let d=0;d<=1;d++)l+=`
          blockIndex = rc.y + ${d};
          pos = rc.x + ${u};

          ${a}
            offsetY = int(blockIndex / outWidth) * stride[0] - pad[0];
            d0 = offsetY + dilation[0] * (pos / itemsPerBlockRow);

            if(d0 < inputShape[${i}] && d0 >= 0) {
              // Use custom imod instead mod. On Intel GPU, mod may generate
              // unexpected value.
              // https://github.com/tensorflow/tfjs/issues/5447
              offsetX = imod(blockIndex, outWidth) * stride[1] - pad[1];
              d1 = offsetX + dilation[1] * (imod(pos, itemsPerBlockRow) /
                  inChannels);

              if(d1 < inputShape[${c}] && d1 >= 0) {

                ch = imod(pos, inChannels);

                if (${o}) {
                  innerDims = vec2(d1, ch);
                  result[${u*2+d}] = getChannel(
                    getA(d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[${u*2+d}] = getChannel(
                    getA(ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec2 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        ${l}

        ${r.output} = result;
      }
    `}}/**
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
 */function wu({x:t,filter:e,convInfo:n,backend:s,bias:r=null,preluActivationWeights:o=null,leakyreluAlpha:i=0,activation:c=null}){const a=t.shape,l=s.texData.get(t.dataId),u=n.inChannels,d=a[0]*a[1]*a[2],h=n.outChannels,f=n.dataFormat==="channelsLast",p=!1,g=!1;let m;const x=[];if(!((d===1||h===1)&&u>cu)&&l.isPacked&&f&&l.texture!=null&&a[2]%2!==0&&k(l.shape.slice(-3),a.slice(-3))){const C=a[0]*a[1]*(a[2]+1),v={dataId:t.dataId,shape:[1,C,n.inChannels],dtype:t.dtype},R=l.shape;l.shape=l.shape.slice(),l.shape[l.shape.length-2]++,$(js(l.shape,v.shape),()=>`packed reshape ${l.shape} to ${v.shape} isn't free`);const T=P({inputs:{x:e},backend:s,attrs:{shape:[1,n.inChannels,n.outChannels]}});x.push(T);const _=ar({a:v,b:T,backend:s,transposeA:p,transposeB:g,bias:r,activation:c,preluActivationWeights:o,leakyreluAlpha:i}),M=s.texData.get(_.dataId);$(M.isPacked,()=>"batchMatMul result is expected to be packed"),l.shape=R,M.shape=n.outShape,m=Ke({inputs:{x:_},backend:s}),m.shape=n.outShape,x.push(_)}else{const C=f?a[0]*a[1]*a[2]:a[0]*a[2]*a[3],v=P({inputs:{x:t},backend:s,attrs:{shape:[1,C,n.inChannels]}}),R=P({inputs:{x:e},backend:s,attrs:{shape:[1,n.inChannels,n.outChannels]}}),T=ar({a:v,b:R,transposeA:p,transposeB:g,backend:s,bias:r,activation:c,preluActivationWeights:o,leakyreluAlpha:i});m=P({inputs:{x:T},backend:s,attrs:{shape:n.outShape}}),x.push(v),x.push(R),x.push(T)}for(const C of x)s.disposeIntermediateTensorInfo(C);return m}function yu({x:t,filter:e,convInfo:n,backend:s,bias:r=null,preluActivationWeights:o=null,leakyreluAlpha:i=0,activation:c=null}){const{filterWidth:a,filterHeight:l,inChannels:u,outWidth:d,outHeight:h,dataFormat:f}=n,p=f==="channelsLast",g=a*l*u,m=h*d,x=[g,m],b=!0,y=!1,C=[],v=P({inputs:{x:t},backend:s,attrs:{shape:t.shape.slice(1)}}),R=P({inputs:{x:e},backend:s,attrs:{shape:[1,g,D(e.shape)/g]}});C.push(v),C.push(R);const T=new pv(x,n),_=[v.shape,[n.padInfo.top,n.padInfo.left],[n.strideHeight,n.strideWidth],[n.dilationHeight,n.dilationWidth],[n.inChannels],[n.filterWidth*n.inChannels],[n.outWidth]],M=s.runWebGLProgram(T,[v],"float32",_),q=P({inputs:{x:M},backend:s,attrs:{shape:[1,x[0],x[1]]}});C.push(M),C.push(q);const ne=r!=null,de=o!=null,He=c==="leakyrelu",De=c?rr(c,!0):null,je=new su(q.shape,R.shape,[1,m,n.outChannels],b,y,ne,De,de,He),Ye=[q,R];if(r&&Ye.push(r),de&&Ye.push(o),He){const xt=s.makeTensorInfo([],"float32",sn(i,"float32"));Ye.push(xt),C.push(xt)}const ct=s.runWebGLProgram(je,Ye,"float32"),tn=p?[1,h,d,n.outChannels]:[1,n.outChannels,h,d],It=P({inputs:{x:ct},backend:s,attrs:{shape:tn}});C.push(ct);for(const xt of C)s.disposeIntermediateTensorInfo(xt);return It}/**
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
 */function gv(t){const{inputs:e,backend:n,attrs:s}=t,{x:r,filter:o}=e,{strides:i,pad:c,dataFormat:a,dilations:l,dimRoundingMode:u}=s,d=bn(a),h=gt(r.shape,o.shape,i,l,c,u,!1,d);let f;if(h.filterHeight===1&&h.filterWidth===1&&h.dilationHeight===1&&h.dilationWidth===1&&h.strideHeight===1&&h.strideWidth===1&&(h.padInfo.type==="SAME"||h.padInfo.type==="VALID"))f=wu({x:r,filter:o,convInfo:h,backend:n});else if(S().getBool("WEBGL_CONV_IM2COL")&&r.shape[0]===1)f=yu({x:r,filter:o,convInfo:h,backend:n});else{const g=new bu(h);f=n.runWebGLProgram(g,[r,o],"float32")}const p=P({inputs:{x:f},backend:n,attrs:{shape:h.outShape}});return n.disposeIntermediateTensorInfo(f),p}const mv={kernelName:Sd,backendName:"webgl",kernelFunc:gv};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */class xv{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const n=e.strideHeight,s=e.strideWidth,r=e.padInfo.top,o=e.padInfo.left,i=e.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${n} - ${r};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${s} - ${o};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              if (${i}) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}}class bv{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const n=e.filterHeight,s=e.filterWidth,r=e.strideHeight,o=e.strideWidth,i=e.dataFormat==="channelsLast",c=n-1-e.padInfo.top,a=s-1-e.padInfo.left,l=i?1:2,u=i?2:3,d=i?3:1;this.userCode=`
      const ivec2 pads = ivec2(${c}, ${a});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[${d}];

        ivec2 dyCorner = ivec2(coords[${l}], coords[${u}]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${n}; wR++) {
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${n} - 1 - wR;

          for (int wC = 0; wC < ${s}; wC++) {
            float dyC = float(dyCCorner + wC) / ${o}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${s} - 1 - wC;

            for (int d2 = 0; d2 < ${e.outChannels}; d2++) {

              if (${i}) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}}class wv{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const n=e.strideDepth,s=e.strideHeight,r=e.strideWidth,o=e.padInfo.front,i=e.padInfo.top,c=e.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yF = 0; yF < ${e.outDepth}; yF++) {
            int xF = wF + yF * ${n} - ${o};

            if (xF < 0 || xF >= ${e.inDepth}) {
              continue;
            }

            for (int yR = 0; yR < ${e.outHeight}; yR++) {
              int xR = wR + yR * ${s} - ${i};

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int yC = 0; yC < ${e.outWidth}; yC++) {
                int xC = wC + yC * ${r} - ${c};

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class yv{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const n=e.filterDepth,s=e.filterHeight,r=e.filterWidth,o=e.strideDepth,i=e.strideHeight,c=e.strideWidth,a=n-1-e.padInfo.front,l=s-1-e.padInfo.top,u=r-1-e.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${a}, ${l}, ${u});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < ${n}; wF++) {
          float dyF = float(dyFCorner + wF) / ${o}.0;

          if (dyF < 0.0 || dyF >= ${e.outDepth}.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = ${n} - 1 - wF;

          for (int wR = 0; wR < ${s}; wR++) {
            float dyR = float(dyRCorner + wR) / ${i}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = ${s} - 1 - wR;

            for (int wC = 0; wC < ${r}; wC++) {
              float dyC = float(dyCCorner + wC) / ${c}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = ${r} - 1 - wC;

              for (int d2 = 0; d2 < ${e.outChannels}; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}/**
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
 */function Cv(t){const{inputs:e,backend:n,attrs:s}=t,{x:r,dy:o}=e,{strides:i,pad:c,dataFormat:a,dimRoundingMode:l,filterShape:u}=s,d=bn(a),h=gt(r.shape,u,i,1,c,l,!1,d),f=new xv(h);return n.runWebGLProgram(f,[r,o],"float32")}const vv={kernelName:Ed,backendName:"webgl",kernelFunc:Cv};/**
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
 */function $v(t){const{inputs:e,backend:n,attrs:s}=t,{dy:r,filter:o}=e,{inputShape:i,strides:c,pad:a,dataFormat:l,dimRoundingMode:u}=s,d=bn(l),h=gt(i,o.shape,c,1,a,u,!1,d),f=new bv(h);return n.runWebGLProgram(f,[r,o],"float32")}const Iv={kernelName:kd,backendName:"webgl",kernelFunc:$v};/**
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
 */function Sv(t){const{inputs:e,backend:n,attrs:s}=t,{x:r,filter:o}=e,{strides:i,pad:c,dilations:a}=s,l=Xn(r.shape,o.shape,i,a,c),u=new fv(l);return n.runWebGLProgram(u,[r,o],"float32")}const Ev={kernelName:Td,backendName:"webgl",kernelFunc:Sv};/**
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
 */function kv(t){const{inputs:e,backend:n,attrs:s}=t,{x:r,dy:o}=e,{strides:i,pad:c,filterShape:a}=s,l=Xn(r.shape,a,i,1,c),u=new wv(l);return n.runWebGLProgram(u,[r,o],"float32")}const Tv={kernelName:Rd,backendName:"webgl",kernelFunc:kv};/**
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
 */function Rv(t){const{inputs:e,backend:n,attrs:s}=t,{dy:r,filter:o}=e,{pad:i,strides:c,inputShape:a}=s,l=Xn(a,o.shape,c,1,i),u=new yv(l);return n.runWebGLProgram(u,[r,o],"float32")}const Nv={kernelName:Nd,backendName:"webgl",kernelFunc:Rv};/**
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
 */const Av=Rn+`
  return cos(x);
`,_v=se({opSnippet:Av}),Dv={kernelName:Ad,backendName:"webgl",kernelFunc:_v};/**
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
 */const Fv=se({opSnippet:`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`}),Pv={kernelName:_d,backendName:"webgl",kernelFunc:Fv};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */class Ov{constructor(e,n,s,r,o){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];const[i,c,a,l]=e,[u]=n,[d,h]=s;this.outputShape=[u,d,h,l];const f=r==="bilinear"?1:0,[p,g]=[`${c-1}.0`,`${a-1}.0`],[m,x,b]=d>1?[`${(c-1)/(d-1)}`,"(y2-y1) * height_ratio",`y1*${p} + float(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${p}`],[y,C,v]=h>1?[`${(a-1)/(h-1)}`,"(x2-x1) * width_ratio",`x1*${g} + float(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${g}`];this.userCode=`
      const float height_ratio = float(${m});
      const float width_ratio = float(${y});
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= ${i}) {
          return;
        }

        float height_scale = ${x};
        float width_scale = ${C};

        float in_y = ${b};
        if( in_y < 0.0 || in_y > ${p} ) {
          setOutput(float(${o}));
          return;
        }
        float in_x = ${v};
        if( in_x < 0.0 || in_x > ${g} ) {
          setOutput(float(${o}));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(${f} == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `}}/**
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
 */const Lv={kernelName:li,backendName:"webgl",kernelFunc:t=>{const{inputs:e,backend:n,attrs:s}=t,{image:r,boxes:o,boxInd:i}=e,{cropSize:c,method:a,extrapolationValue:l}=s,u=new Ov(r.shape,o.shape,c,a,l);return n.runWebGLProgram(u,[r,o,i],"float32")}};class Cu{constructor(e,n,s){this.variableNames=["x"],this.customUniforms=[{name:"index",type:"float"}],this.outputShape=e;const r=e.length,o=n?"0.0":`getX(${vu(r,"coords")})`,i=e[e.length-1];let c="",a="";n?(c=s?`end != ${i-1}`:"end != 0",a=s?"end + 1":"end - 1"):(c=s?`end + pow2 < ${i}`:"end >= pow2",a=s?"end + pow2":"end - pow2"),this.userCode=`
      void main() {
        ${me(r)} coords = getOutputCoords();
        int end = ${$u(r,"coords")};
        float val = ${o};
        int pow2 = int(pow(2.0, index));
        if (${c}) {
          int idx = ${a};
          ${$u(r,"coords")} = idx;
          val += getX(${vu(r,"coords")});
        }
        setOutput(val);
      }
    `}}function vu(t,e){if(t===1)return`${e}`;if(t===2)return`${e}.x, ${e}.y`;if(t===3)return`${e}.x, ${e}.y, ${e}.z`;if(t===4)return`${e}.x, ${e}.y, ${e}.z, ${e}.w`;throw Error(`Cumulative sum for rank ${t} is not yet supported`)}function $u(t,e){if(t===1)return`${e}`;if(t===2)return`${e}.y`;if(t===3)return`${e}.z`;if(t===4)return`${e}.w`;throw Error(`Cumulative sum for rank ${t} is not yet supported`)}/**
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
 */function Bv(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{axis:o,exclusive:i,reverse:c}=s,a=r.shape.length,l=Je([o],a);let u=r;l!=null&&(u=Ve({inputs:{x:r},backend:n,attrs:{perm:l}}));const d=et(1,a)[0];if(d!==a-1)throw new Error(`WebGL cumsum shader expects an inner-most axis=${r.shape.length-1} but got axis=${o}`);const h=u.shape[d];let f=Ke({inputs:{x:u},backend:n});for(let p=0;p<=Math.ceil(Math.log2(h))-1;p++){const g=new Cu(u.shape,!1,c),m=[[p]],x=f;f=n.runWebGLProgram(g,[f],f.dtype,m),n.disposeIntermediateTensorInfo(x)}if(i){const p=new Cu(u.shape,i,c),g=f;f=n.runWebGLProgram(p,[f],f.dtype),n.disposeIntermediateTensorInfo(g)}if(l!=null){const p=po(l),g=Ve({inputs:{x:f},backend:n,attrs:{perm:p}});return n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(u),g}return f}const Mv={kernelName:Dd,backendName:"webgl",kernelFunc:Bv};/**
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
 */function Vv(t){const{inputs:e,backend:n,attrs:s}=t,{x:r,weights:o}=e,{size:i,binaryOutput:c}=s;if(r.shape.length===1){const a=n.readSync(r.dataId),l=n.readSync(o.dataId),u=Gl(a,l,o.dtype,o.shape,i);return n.makeTensorInfo([i],o.dtype,u)}else if(r.shape.length===2){const a=n.bufferSync(r),l=n.bufferSync(o),u=aw(a,l,i,c);return n.makeTensorInfo(u.shape,o.dtype,u.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${r.shape.length}.`)}const Uv={kernelName:Fd,backendName:"webgl",kernelFunc:Vv};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */class Wv{constructor(e,n,s){this.variableNames=["x"],this.outputShape=[],this.outputShape=e,this.blockSize=n,this.dataFormat=s,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = ${this.getHeightCoordString()};
      int w = ${this.getWidthCoordString()};
      int d = ${this.getDepthCoordString()};

      int in_h = h / ${n};
      int offset_h = imod(h, ${n});
      int in_w = w / ${n};
      int offset_w = imod(w, ${n});
      int offset_d = (offset_h * ${n} + offset_w) *
        ${this.getOutputDepthSize()};
      int in_d = d + offset_d;

      float result = ${this.getInputSamplingString()};
      setOutput(result);
    }
  `}getHeightCoordString(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"}getWidthCoordString(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"}getDepthCoordString(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"}getOutputDepthSize(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}}/**
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
 */function Gv(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{blockSize:o,dataFormat:i}=s,c=r.shape[0],a=i==="NHWC"?r.shape[1]:r.shape[2],l=i==="NHWC"?r.shape[2]:r.shape[3],u=i==="NHWC"?r.shape[3]:r.shape[1],d=a*o,h=l*o,f=u/(o*o),p=i==="NHWC"?[c,d,h,f]:[c,f,d,h],g=new Wv(p,o,i);return n.runWebGLProgram(g,[r],r.dtype)}const zv={kernelName:Pd,backendName:"webgl",kernelFunc:Gv};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */class Iu{constructor(e,n=!1,s=null,r=!1,o=!1){this.variableNames=["x","W"],this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=ze(this.outputShape.length);const i=e.filterHeight,c=e.filterWidth,a=e.outChannels/e.inChannels;let l="",u="";s&&(r?l=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${s}
        }`:o?l=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${s}
        }`:l=`
          float activation(float x) {
            ${s}
          }
        `,u="result = activation(result);");const d=n?"result += getBiasAtOutCoords();":"";n&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),o&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${l}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${a};
        int q = d2 - d1 * ${a};

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < ${i}; wR++) {
          int xR = xRCorner + wR * dilations[0];

          if (xR < 0 || xR >= inDims[0]) {
            continue;
          }

          for (int wC = 0; wC < ${c}; wC++) {
            int xC = xCCorner + wC * dilations[1];

            if (xC < 0 || xC >= inDims[1]) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        ${d}
        ${u}
        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */class Su{constructor(e,n=!1,s=null,r=!1,o=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=ze(this.outputShape.length);const i=e.outChannels/e.inChannels,c=e.padInfo.left,a=e.strideWidth,l=e.dilationWidth,u=e.filterHeight,d=e.filterWidth,h=d;let f=`
      int xR; int xC; int xCOffset;
      vec4 wTexel; vec4 previous; vec4 final;`;for(let x=0;x<d;x++)f+=`
          vec4 xTexelC${x*2};
          int xTexelC${x*2}Ready;
          vec4 xTexelC${x*2+1};
          int xTexelC${x*2+1}Ready;
          vec4 xC${x};`;f+=`
    for (int r = 0; r < ${u}; r++) {
      `;for(let x=0;x<d;x++)f+=`
          xTexelC${x*2} = vec4(0.0);
          xTexelC${x*2}Ready = 0;
          xTexelC${x*2+1} = vec4(0.0);
          xTexelC${x*2+1}Ready = 0;
          xC${x} = vec4(0.0);`;f+=`
        xR = xRCorner + r * dilations[0];
        if (xR >=0 && xR < inDims[0]) {
      `;for(let x=0;x<(h+1)/2;x++){const b=x*2;if(f+=`
          xC = xCCorner + ${b*l};
          `,a===1){if(b<d&&(c%2===1?(f+=`
                xCOffset = xC + 1;
                if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b}Ready == 0) {
                  xTexelC${b} = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${b}.zw = vec2(0.0);
                  }
                  xTexelC${b}Ready = 1;
                }
              `,l===1&&b>0?f+=`
                xC${b} = vec4(xTexelC${b-2}.zw, xTexelC${b}.xy);
                `:f+=`
                  xCOffset = xC + 1 - 2;

                  if (xCOffset >= 0 && xCOffset < inDims[1]) {
                    previous = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      previous.zw = vec2(0.0);
                    }

                    xC${b} = vec4(previous.zw, xTexelC${b}.xy);
                  } else {
                    xC${b} = vec4(0.0, 0.0, xTexelC${b}.xy);
                  }
                  `):f+=`
                if (xC >= 0 && xC < inDims[1] && xTexelC${b}Ready == 0) {
                  xTexelC${b} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${b}.zw = vec2(0.0);
                  }
                  xTexelC${b}Ready = 1;
                }

                xC${b} = xTexelC${b};
                `,b+1<d)){const y=c%2===0?z(l):l;l%2===0&&c%2===1||l%2!==0&&c%2!==1?(f+=`
                  xCOffset = xC + imod(pads[1], 2) + ${y};

                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b+1}Ready == 0) {
                    xTexelC${b+1} = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      xTexelC${b+1}.zw = vec2(0.0);
                    }
                    xTexelC${b+1}Ready = 1;
                  }
                  `,l>1&&(f+=`
                    xCOffset -= 2;
                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b}Ready == 0) {
                      xTexelC${b} = getX(batch, xR, xCOffset, d1);
                      xTexelC${b}Ready = 1;
                    }
                    `),f+=`
                  xC${b+1} = vec4(xTexelC${b}.zw, xTexelC${b+1}.xy);
                  `):y===1?f+=`
                    xC${b+1} = xTexelC${b};
                    `:f+=`
                    xCOffset = xC + ${y};

                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b+1}Ready == 0) {
                      xTexelC${b+1} = getX(batch, xR, xCOffset, d1);
                      if (xCOffset + 1 >= inDims[1]) {
                        xTexelC${b+1}.zw = vec2(0.0);
                      }
                      xTexelC${b+1}Ready = 1;
                    }

                    xC${b+1} = xTexelC${b+1};
                    `}}else b<d&&(c%2===1?(f+=`
                xCOffset = xC + 1 - strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b}Ready == 0) {
                  xTexelC${b} = getX(batch, xR, xCOffset, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${b}.zw = vec2(0.0);
                  }
                  xTexelC${b}Ready = 1;
                }

                if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${b+1}Ready == 0) {
                  xTexelC${b+1} = getX(batch, xR, xC + 1, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xC + 2 >= inDims[1]) {
                    xTexelC${b+1}.zw = vec2(0.0);
                  }
                  xTexelC${b+1}Ready = 1;
                }

                xC${b} = vec4(xTexelC${b}.zw, xTexelC${b+1}.zw);
              `,b+1<d&&(f+=`
                  final = vec4(0.0);
                  xCOffset = xC + 1 + strides[1];
                  if(xCOffset >= 0 && xCOffset < inDims[1]) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xC${b+1} = vec4(xTexelC${b+1}.xy, final.xy);
                `)):(f+=`
                if(xC >= 0 && xC < inDims[1] && xTexelC${b}Ready == 0) {
                  xTexelC${b} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${b}.zw = vec2(0.0);
                  }
                  xTexelC${b}Ready = 1;
                }

                xCOffset = xC + strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b+1}Ready == 0) {
                  xTexelC${b+1} = getX(batch, xR, xCOffset, d1);
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${b+1}.zw = vec2(0.);
                  }
                  xTexelC${b+1}Ready = 1;
                }

                xC${b} = vec4(
                  xTexelC${b}.xy, xTexelC${b+1}.xy);
              `,b+1<d&&(f+=`
                  xC${b+1} = vec4(xTexelC${b}.zw, xTexelC${b+1}.zw);
                `)));b<d&&(f+=`
            wTexel = getW(r, ${b}, d1, q);
            dotProd += xC${b} * vec4(wTexel.xz, wTexel.xz);
          `,b+1<d&&(f+=`
              wTexel = getW(r, ${b+1}, d1, q);
              dotProd += xC${b+1} * vec4(wTexel.xz, wTexel.xz);
            `))}f+=`
    }
  `,f+=`
      }
    `;let p="",g="";s&&(r?p=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${s}
        }`:o?p=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${s}
        }`:p=`vec4 activation(vec4 x) {
          ${s}
        }`,g="result = activation(result);");const m=n?"result += getBiasAtOutCoords();":"";n&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),o&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${p}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${i};
        int q = d2 - d1 * ${i};
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
        vec4 dotProd = vec4(0.000000000000001);

        ${f}

        vec4 result = dotProd - vec4(0.000000000000001);
        ${m}
        ${g}
        setOutput(result);
      }
    `}}/**
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
 */function Hv(t){const{inputs:e,backend:n,attrs:s}=t,{x:r,filter:o}=e,{strides:i,pad:c,dilations:a,dimRoundingMode:l}=s;let u=a;u==null&&(u=[1,1]),$(xn(i,u),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${i} and dilations '${u}'`);const d=gt(r.shape,o.shape,i,u,c,l,!0);let h;S().getBool("WEBGL_PACK_DEPTHWISECONV")&&d.strideWidth<=2&&d.outChannels/d.inChannels===1?h=new Su(d):h=new Iu(d);const f=[[d.padInfo.top,d.padInfo.left],[d.strideHeight,d.strideWidth],[d.dilationHeight,d.dilationWidth],[d.inHeight,d.inWidth]];return n.runWebGLProgram(h,[r,o],"float32",f)}const Xv={kernelName:Od,backendName:"webgl",kernelFunc:Hv};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */class qv{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const n=e.strideHeight,s=e.strideWidth,r=e.padInfo.top,o=e.padInfo.left,i=e.outChannels/e.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * ${i} + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${n} - ${r};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${s} - ${o};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class Kv{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const n=e.filterHeight,s=e.filterWidth,r=e.strideHeight,o=e.strideWidth,i=n-1-e.padInfo.top,c=s-1-e.padInfo.left,a=e.outChannels/e.inChannels;this.userCode=`
      const ivec2 pads = ivec2(${i}, ${c});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < ${n}; wR++) {
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${n} - 1 - wR;

          for (int wC = 0; wC < ${s}; wC++) {
            float dyC = float(dyCCorner + wC) / ${o}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${s} - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < ${a}; dm++) {
              int d2 = d1 * ${a} + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}/**
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
 */function jv(t){const{inputs:e,backend:n,attrs:s}=t,{x:r,dy:o}=e,{strides:i,dilations:c,pad:a,dimRoundingMode:l,filterShape:u}=s,d=gt(r.shape,u,i,c,a,l,!0),h=new qv(d);return n.runWebGLProgram(h,[r,o],"float32")}const Yv={kernelName:Ld,backendName:"webgl",kernelFunc:jv};/**
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
 */function Qv(t){const{inputs:e,backend:n,attrs:s}=t,{dy:r,filter:o}=e,{strides:i,dilations:c,pad:a,dimRoundingMode:l,inputShape:u}=s,d=gt(u,o.shape,i,c,a,l,!0),h=new Kv(d);return n.runWebGLProgram(h,[r,o],"float32")}const Zv={kernelName:Bd,backendName:"webgl",kernelFunc:Qv};/**
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
 */class Jv{constructor(e){this.variableNames=["X"],this.outputShape=[e,e],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `}}/**
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
 */function e1(t){const{inputs:e,backend:n}=t,{x:s}=e,r=[...s.shape,...s.shape],o=D(s.shape),i=P({inputs:{x:s},backend:n,attrs:{shape:[o]}}),c=new Jv(o),a=n.runWebGLProgram(c,[i],i.dtype),l=P({inputs:{x:a},backend:n,attrs:{shape:r}});return n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(a),l}const t1={kernelName:Md,backendName:"webgl",kernelFunc:e1};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */class n1{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;const{inHeight:n,inWidth:s,padInfo:r,strideHeight:o,strideWidth:i,filterHeight:c,filterWidth:a,dilationHeight:l,dilationWidth:u}=e,{top:d,left:h}=r;this.userCode=`
      const ivec2 strides = ivec2(${o}, ${i});
      const ivec2 pads = ivec2(${d}, ${h});
      const float neg_infinity = -3.4e38;

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.w;
        ivec2 outTopLeftCorner =
            coords.yz * strides - pads;
        int hBeg = outTopLeftCorner.x;
        int wBeg = outTopLeftCorner.y;

        float curVal = neg_infinity;
        for (int h = 0; h < ${c}; h++) {
          int hIn = hBeg + h * ${l};

          if (hIn >= 0 && hIn < ${n}) {
            for (int w = 0; w < ${a}; w++) {
              int wIn = wBeg + w * ${u};

              if (wIn >= 0 && wIn < ${s}) {
                float xVal = getX(batch, hIn, wIn, d1);
                float wVal = getW(h, w, d1);

                float val = xVal + wVal;
                if (val > curVal) {
                  curVal = val;
                }
              }
            }
          }
        }

        float result = curVal;
        setOutput(result);
      }
    `}}/**
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
 */function s1(t){const{inputs:e,backend:n,attrs:s}=t,{x:r,filter:o}=e,{strides:i,pad:c,dilations:a}=s,l=yc(r.shape,o.shape,i,c,"NHWC",a);let u;const d=new n1(l);u=n.runWebGLProgram(d,[r,o],"float32");const h=P({inputs:{x:u},backend:n,attrs:{shape:l.outShape}});return n.disposeIntermediateTensorInfo(u),h}const r1={kernelName:Vd,backendName:"webgl",kernelFunc:s1};/**
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
 */function o1(t){const{inputs:e,backend:n,attrs:s}=t,{equation:r}=s,o=e,{allDims:i,summedDims:c,idDims:a}=Oc(r,o.length);Bc(i.length,a,o);const{path:l,steps:u}=Mc(c,a),d=u.length;let h=null,f=i.length;const p=[];for(let g=0;g<d;++g){for(const m of u[g]){const{permutationIndices:x,expandDims:b}=Lc(f,a[m]);let y;Vc(x)?y=o[m]:(y=Ve({inputs:{x:o[m]},backend:n,attrs:{perm:x}}),p.push(y));const C=y.shape.slice();for(let v=0;v<b.length;++v)C.splice(b[v],0,1);k(y.shape,C)||(y=P({inputs:{x:y},backend:n,attrs:{shape:C}}),p.push(y)),h===null?h=y:(h=Go({inputs:{a:y,b:h},backend:n}),p.push(h))}g<d-1&&(l[g]>=0&&(h=ir({inputs:{x:h},backend:n,attrs:{axis:l[g]-(i.length-f),keepDims:!1}}),p.push(h)),f--)}for(const g of p)g!==h&&n.disposeIntermediateTensorInfo(g);return h}const i1={kernelName:Ud,backendName:"webgl",kernelFunc:o1};/**
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
 */const a1=se({opSnippet:"return (x >= 0.0) ? x : (exp(x) - 1.0);",packedOpSnippet:`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`}),c1={kernelName:di,backendName:"webgl",kernelFunc:a1};/**
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
 */const l1="return (b >= 1.0) ? a : a * (b + 1.0);",u1=`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,d1={kernelName:Wd,backendName:"webgl",kernelFunc:t=>{const{inputs:e,backend:n}=t,{dy:s,y:r}=e,o=S().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new es(u1,s.shape,r.shape):new Tn(l1,s.shape,r.shape);return n.runWebGLProgram(o,[s,r],s.dtype)}};/**
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
 */const h1=_e({opSnippet:"return float(a == b);",packedOpSnippet:`
  return vec4(equal(a, b));
`,dtype:"bool",cpuKernelImpl:uw}),f1={kernelName:$r,backendName:"webgl",kernelFunc:h1};/**
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
 */const p1=`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = ${Tc};
  float a1 = ${Rc};
  float a2 = ${Nc};
  float a3 = ${Ac};
  float a4 = ${_c};
  float a5 = ${Dc};

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`,g1=se({opSnippet:p1}),m1={kernelName:Gd,backendName:"webgl",kernelFunc:g1};/**
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
 */const x1=Rn+`
  return exp(x);
`,Eu=se({opSnippet:x1,packedOpSnippet:`
  vec4 result = exp(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,cpuKernelImpl:dw,dtype:"float32"}),b1={kernelName:as,backendName:"webgl",kernelFunc:Eu};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qo(t){const{inputs:e,attrs:n,backend:s}=t,{dim:r}=n,{input:o}=e,i=o.shape.length,c=o.shape.slice();let a=r;return r<0&&($(-(i+1)<=r,()=>`Axis must be in the interval [${-(i+1)}, ${i}]`),a=i+r+1),c.splice(a,0,1),P({inputs:{x:o},backend:s,attrs:{shape:c}})}const w1={kernelName:hi,backendName:"webgl",kernelFunc:qo};/**
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
 */const ku="return exp(x) - 1.0;",y1=se({opSnippet:ku,packedOpSnippet:ku,cpuKernelImpl:hw}),C1={kernelName:Ir,backendName:"webgl",kernelFunc:y1};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */class Tu{constructor(e,n,s){this.variableNames=["real","imag"];const r=n[1];this.outputShape=n;const o=s?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,i=s?`${r}.0`:"1.0";let c;if(e==="real")c="return real * expR - imag * expI;";else if(e==="imag")c="return real * expI + imag * expR;";else throw new Error(`FFT component must be either "real" or "imag", got ${e}.`);this.userCode=`
      const float exponentMultiplier = ${o};

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        ${c}
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(${r});
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < ${r}; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / ${i};
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `}}/**
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
 */function Ru(t,e,n){const s=n.texData.get(t.dataId),r=D(t.shape),o=t.shape[t.shape.length-1],i=r/o,c=P({inputs:{x:t},backend:n,attrs:{shape:[i,o]}}),a=c.shape,l=new Tu("real",a,e),u=new Tu("imag",a,e),d=[{dataId:s.complexTensorInfos.real.dataId,dtype:s.complexTensorInfos.real.dtype,shape:a},{dataId:s.complexTensorInfos.imag.dataId,dtype:s.complexTensorInfos.imag.dtype,shape:a}],h=n.runWebGLProgram(l,d,"float32"),f=n.runWebGLProgram(u,d,"float32"),p=Bt({inputs:{real:h,imag:f},backend:n});n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(f);const g=P({inputs:{x:p},backend:n,attrs:{shape:t.shape}});return n.disposeIntermediateTensorInfo(c),n.disposeIntermediateTensorInfo(p),g}/**
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
 */function v1(t){const{inputs:e,backend:n}=t,{input:s}=e;return Ru(s,!1,n)}const $1={kernelName:fi,backendName:"webgl",kernelFunc:v1};/**
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
 */class I1{constructor(e,n){this.outputShape=[],this.customUniforms=[{name:"value",type:"float"}],this.variableNames=["x"],this.outputShape=e,this.userCode=`
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}}/**
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
 */function ss(t){const{backend:e,attrs:n}=t,{shape:s,value:r}=n;let{dtype:o}=n;if(o=o||os(r),o==="string"){const i=oe(o,D(s));return i.fill(r),e.makeTensorInfo(s,o,i)}else{const i=new I1(s,r),c=[[r]];return e.runWebGLProgram(i,[],o,c)}}const S1={kernelName:pi,backendName:"webgl",kernelFunc:ss};/**
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
 */class E1{constructor(e){this.variableNames=["Image"],this.outputShape=[];const n=e[2];this.outputShape=e,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];

          int coordX = ${n} - x - 1;
          float outputValue;
          if(coordX >= 0 && coordX < ${n}) {
            outputValue = getImage(coords[0], coords[1], coordX, coords[3]);
          } else {
            outputValue = getImage(coords[0], coords[1], coords[2], coords[3]);
          }
          setOutput(outputValue);
        }
    `}}/**
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
 */const k1={kernelName:gi,backendName:"webgl",kernelFunc:({inputs:t,backend:e})=>{const{image:n}=t,s=e,r=new E1(n.shape);return s.runWebGLProgram(r,[n],n.dtype)}};/**
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
 */const Nu="return floor(x);",T1=se({opSnippet:Nu,packedOpSnippet:Nu,cpuKernelImpl:fw}),R1={kernelName:Sr,backendName:"webgl",kernelFunc:T1};/**
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
 */const N1=_e({opSnippet:`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,packedOpSnippet:`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,dtype:"int32"}),A1={kernelName:mi,backendName:"webgl",kernelFunc:N1};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */class _1{constructor(e){this.variableNames=["A"];const n=Be(),[s,r]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${r}.0, ${s}.0);

        vec4 values = ${n.texture2D}(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */class D1{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;const n=Be(),[s,r]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(${r}.0, ${s}.0);
            vec4 values = ${n.texture2D}(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        ${n.output} = result;
      }
    `}}/**
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
 */const F1={kernelName:Ah,backendName:"webgl",kernelFunc:P1};let _n;function P1(t){const{inputs:e,backend:n,attrs:s}=t;let{pixels:r}=e;const{numChannels:o}=s,i=typeof HTMLVideoElement<"u"&&r instanceof HTMLVideoElement,c=typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement,[a,l]=i?[r.videoWidth,r.videoHeight]:[r.width,r.height],u=[l,a],d=[l,a,o];(c||i)&&(_n==null&&(_n=document.createElement("canvas").getContext("2d")),_n.canvas.width=a,_n.canvas.height=l,_n.drawImage(r,0,0,a,l),r=_n.canvas);const h=n.makeTensorInfo(u,"int32");n.texData.get(h.dataId).usage=tt.PIXELS,n.gpgpu.uploadPixelDataToTexture(n.getTexture(h.dataId),r);const f=S().getBool("WEBGL_PACK")?new D1(d):new _1(d),p=n.runWebGLProgram(f,[h],"int32");return n.disposeData(h.dataId),p}/**
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
 */function O1(t){const{inputs:e,backend:n,attrs:s}=t,{x:r,filter:o,bias:i,preluActivationWeights:c}=e,{strides:a,pad:l,dataFormat:u,dilations:d,dimRoundingMode:h,activation:f,leakyreluAlpha:p}=s,g=bn(u),m=gt(r.shape,o.shape,a,d,l,h,!1,g);let x;const b=[];if(m.filterHeight===1&&m.filterWidth===1&&m.dilationHeight===1&&m.dilationWidth===1&&m.strideHeight===1&&m.strideWidth===1&&(m.padInfo.type==="SAME"||m.padInfo.type==="VALID"))x=wu({x:r,filter:o,convInfo:m,backend:n,bias:i,activation:f,preluActivationWeights:c,leakyreluAlpha:p});else if(S().getBool("WEBGL_CONV_IM2COL")&&r.shape[0]===1)x=yu({x:r,filter:o,convInfo:m,backend:n,bias:i,activation:f,preluActivationWeights:c,leakyreluAlpha:p});else{const C=i!=null,v=c!=null,R=f==="leakyrelu",T=f?rr(f,!1):null,_=new bu(m,C,T,v,R),M=[r,o];if(i&&M.push(i),c&&M.push(c),R){const q=n.makeTensorInfo([],"float32",sn(p,"float32"));M.push(q),b.push(q)}x=n.runWebGLProgram(_,M,"float32")}const y=P({inputs:{x},backend:n,attrs:{shape:m.outShape}});return b.push(x),b.forEach(C=>n.disposeIntermediateTensorInfo(C)),y}const L1={kernelName:Dh,backendName:"webgl",kernelFunc:O1};/**
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
 */function B1(t){const{inputs:e,backend:n,attrs:s}=t,{x:r,filter:o,bias:i,preluActivationWeights:c}=e,{strides:a,pad:l,dilations:u,dimRoundingMode:d,activation:h,leakyreluAlpha:f}=s,p=[];let g=u;g==null&&(g=[1,1]),$(xn(a,g),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${a} and dilations '${g}'`);const m=gt(r.shape,o.shape,a,g,l,d,!0),x=S().getBool("WEBGL_PACK_DEPTHWISECONV")&&m.strideWidth<=2&&m.outChannels/m.inChannels===1,b=h?rr(h,x):null,y=[r,o],C=i!=null,v=c!=null,R=h==="leakyrelu";if(C&&y.push(i),v&&y.push(c),R){const q=n.makeTensorInfo([],"float32",sn(f,"float32"));y.push(q),p.push(q)}let T;x?T=new Su(m,C,b,v,R):T=new Iu(m,C,b,v,R);const _=[[m.padInfo.top,m.padInfo.left],[m.strideHeight,m.strideWidth],[m.dilationHeight,m.dilationWidth],[m.inHeight,m.inWidth]],M=n.runWebGLProgram(T,y,"float32",_);return p.forEach(q=>n.disposeIntermediateTensorInfo(q)),M}const M1={kernelName:Fh,backendName:"webgl",kernelFunc:B1};class V1{constructor(e,n,s){this.sliceDim=e,this.strides=n,this.variableNames=["x","indices"],this.outputShape=s;const r=me(n.length),o=me(s.length),i=this.sliceDim>1?"strides[j]":"strides";this.userCode=`
        ${r} strides = ${r}(${this.strides});
         void main() {
          ${o} coords = getOutputCoords();
          int flattenIndex = 0;
          for (int j = 0; j < ${this.sliceDim}; j++) {
            int index = round(getIndices(coords[0], j));
            flattenIndex += index * ${i};
          }
          setOutput(getX(flattenIndex, coords[1]));
        }
      `}}/**
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
 */function U1(t){const{inputs:e,backend:n}=t,{params:s,indices:r}=e,o=r.shape,i=o[o.length-1],c=D(s.shape),[a,l,u,d]=Ic(s,r),h=P({inputs:{x:r},backend:n,attrs:{shape:[l,i]}}),f=P({inputs:{x:s},backend:n,attrs:{shape:[D(s.shape)/u,u]}});if(n.shouldExecuteOnCPU([s,r])||s.dtype==="string"){const x=n.readSync(r.dataId),b=n.bufferSync(s),y=pw(x,b,s.dtype,l,i,u,d,s.shape,c);return n.makeTensorInfo(a,s.dtype,y.values)}const p=new V1(i,d,[l,u]),g=n.runWebGLProgram(p,[f,h],f.dtype),m=P({inputs:{x:g},backend:n,attrs:{shape:a}});return n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(g),m}const W1={kernelName:Xd,backendName:"webgl",kernelFunc:U1};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */class G1{constructor(e,n){this.variableNames=["A","indices"],this.outputShape=n,this.rank=n.length;const s=me(this.rank),r=z1(e,2);this.userCode=`
      void main() {
        ${s} resRC = getOutputCoords();
        int index = int(getIndices(resRC.x, resRC.z));
        float inBounds = (index >= 0) && (index < ${e[2]}) ? 1.0 : 0.0;
        setOutput(inBounds * getA(${r}));
      }
    `}}function z1(t,e){const n=["resRC.x","resRC.y","resRC.z","resRC.w"],s=[];for(let r=0;r<t.length;r++)r===2?s.push("index"):s.push(`${n[r]}`);return s.join()}/**
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
 */function Au(t){const{inputs:e,backend:n,attrs:s}=t,{x:r,indices:o}=e,{axis:i,batchDims:c}=s,a=re(i,r.shape)[0];if(S().get("DEBUG")){const b=n.readSync(o.dataId),y=r.shape[a];for(let C=0;C<b.length;++C){const v=b[C];$(v<=y-1&&v>=0,()=>`GatherV2: the index value ${v} is not in [0, ${y-1}]`)}}const l=tl(r,o,a,c),u=D(o.shape),d=[],h=P({inputs:{x:r},backend:n,attrs:{shape:[l.batchSize,l.outerSize,l.dimSize,l.sliceSize]}}),f=P({inputs:{x:o},backend:n,attrs:{shape:[l.batchSize,u/l.batchSize]}});d.push(h),d.push(f);const p=[l.batchSize,l.outerSize,u/l.batchSize,l.sliceSize];if(n.shouldExecuteOnCPU([r,o])||r.dtype==="string"){const b=n.bufferSync(f),y=n.bufferSync(h),C=gw(y,b,p);return d.forEach(v=>n.disposeIntermediateTensorInfo(v)),n.makeTensorInfo(l.outputShape,C.dtype,C.values)}const g=new G1(h.shape,p),m=n.runWebGLProgram(g,[h,f],h.dtype);d.push(m);const x=P({inputs:{x:m},backend:n,attrs:{shape:l.outputShape}});return d.forEach(b=>n.disposeIntermediateTensorInfo(b)),x}const H1={kernelName:Hd,backendName:"webgl",kernelFunc:Au};/**
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
 */const X1=_e({opSnippet:"return float(a > b);",packedOpSnippet:`
  return vec4(greaterThan(a, b));
`,cpuKernelImpl:mw,dtype:"bool"}),q1={kernelName:cs,backendName:"webgl",kernelFunc:X1};/**
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
 */const K1=_e({opSnippet:"return float(a >= b);",packedOpSnippet:`
  return vec4(greaterThanEqual(a, b));
`,dtype:"bool",cpuKernelImpl:xw}),j1={kernelName:ls,backendName:"webgl",kernelFunc:K1};/**
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
 */function Y1(t){const{inputs:e,backend:n}=t,{input:s}=e;return Ru(s,!0,n)}const Q1={kernelName:xi,backendName:"webgl",kernelFunc:Y1};/**
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
 */const Z1=se({opSnippet:"return float(!isnan(x) && !isinf(x));",dtype:"bool"}),J1={kernelName:qd,backendName:"webgl",kernelFunc:Z1};/**
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
 */const e$=se({opSnippet:"return float(isinf(x));",dtype:"bool"}),t$={kernelName:Kd,backendName:"webgl",kernelFunc:e$};/**
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
 */const n$=se({opSnippet:"return float(isnan(x));",dtype:"bool"}),s$={kernelName:jd,backendName:"webgl",kernelFunc:n$};/**
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
 */const r$=_e({opSnippet:"return float(a < b);",packedOpSnippet:`
  return vec4(lessThan(a, b));
`,cpuKernelImpl:bw,dtype:"bool"}),o$={kernelName:Er,backendName:"webgl",kernelFunc:r$};/**
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
 */const i$=_e({opSnippet:"return float(a <= b);",packedOpSnippet:`
  return vec4(lessThanEqual(a, b));
`,cpuKernelImpl:ww,dtype:"bool"}),a$={kernelName:ds,backendName:"webgl",kernelFunc:i$};/**
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
 */function c$(t){const{backend:e,attrs:n}=t,{start:s,stop:r,num:o}=n,i=yw(s,r,o);return e.makeTensorInfo([i.length],"float32",i)}const l$={kernelName:Yd,backendName:"webgl",kernelFunc:c$};/**
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
 */const u$=Rn+`
  return x < 0.0 ? 0./0. : log(x);
`,d$=se({opSnippet:u$,packedOpSnippet:`
  vec4 result = log(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);
  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);
  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);
  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);
  return result;
`,cpuKernelImpl:Cw}),h$={kernelName:hs,backendName:"webgl",kernelFunc:d$};/**
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
 */const f$=Rn+`
  return log(1.0 + x);
`,p$=se({opSnippet:f$}),g$={kernelName:yi,backendName:"webgl",kernelFunc:p$};/**
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
 */const m$=_e({opSnippet:"return float(a >= 1.0 && b >= 1.0);",packedOpSnippet:`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,dtype:"bool"}),x$={kernelName:Ci,backendName:"webgl",kernelFunc:m$};/**
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
 */const b$=se({opSnippet:"return float(!(x >= 1.0));"}),w$={kernelName:Qd,backendName:"webgl",kernelFunc:b$};/**
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
 */const y$=_e({opSnippet:"return float(a >= 1.0 || b >= 1.0);",packedOpSnippet:`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,dtype:"bool"}),C$={kernelName:Zd,backendName:"webgl",kernelFunc:y$};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */class v${constructor(e,n,s,r,o){this.variableNames=["x"],this.outputShape=[];const i=n,c=e[3]-1;this.outputShape=e;let a;const l=`float(${s}) + float(${r}) * sum`;o===.5?a=`inversesqrt(${l})`:o===1?a=`1.0/(${l})`:a=`exp(log(${l}) * float(-${o}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -${i}; j <= ${i}; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  ${c}) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * ${a};
        setOutput(val);
      }
    `}}/**
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
 */class $${constructor(e,n,s,r,o){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;const i=n,c=e[3]-1;this.outputShape=e;let a;const l=`float(${s}) + float(${r}) * sum`;o===.5?a=`inversesqrt(${l})`:o===1?a=`1.0/(${l})`:a=`exp(log(${l}) * float(-${o}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < ${this.outputShape[3]};
        bool hasNextRow = c < ${this.outputShape[2]};

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - ${i};
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - ${i}; j <= ${i}; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(${c}));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * ${a};
        setOutput(result);
      }
    `}}/**
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
 */const I$={kernelName:Jd,backendName:"webgl",kernelFunc:t=>{const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{depthRadius:o,bias:i,alpha:c,beta:a}=s,l=S().getBool("WEBGL_PACK_NORMALIZATION")?new $$(r.shape,o,i,c,a):new v$(r.shape,o,i,c,a);return n.runWebGLProgram(l,[r],r.dtype)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */class S${constructor(e,n,s,r,o){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=e,this.depth=e[3],this.depthRadius=n,this.bias=s,this.alpha=r,this.beta=o,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < ${this.depth}; ++d) {
          int depthBegin = int(max(0.0, float(d - ${n})));
          int depthEnd = int(min(float(${this.depth}),
              float(d + ${n} + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = ${this.depth};

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(${r}) * norm + float(${s});

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(${r})
                * float(${o})
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * ${o});
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `}}/**
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
 */const E$={kernelName:eh,backendName:"webgl",kernelFunc:t=>{const{inputs:e,backend:n,attrs:s}=t,{x:r,y:o,dy:i}=e,{depthRadius:c,bias:a,alpha:l,beta:u}=s,d=new S$(r.shape,c,a,l,u);return n.runWebGLProgram(d,[r,o,i],r.dtype)}};/**
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
 */function k$(t,e,n,s){const r=D(e),i=D(t.shape)/r,c=P({inputs:{x:t},attrs:{shape:[i,r]},backend:s}),a=Jt(c,t.dtype,"max",s),l=P({inputs:{x:a},attrs:{shape:n},backend:s});return s.disposeIntermediateTensorInfo(c),s.disposeIntermediateTensorInfo(a),l}/**
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
 */function _u(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{reductionIndices:o,keepDims:i}=s,c=r.shape.length,a=re(o,r.shape);let l=a;const u=Je(l,c),d=u!=null,h=n.shouldExecuteOnCPU([r]);let f=r;if(d){if(h){const y=n.texData.get(f.dataId).values,C=new Array(c);for(let T=0;T<C.length;T++)C[T]=r.shape[u[T]];const v=Uo(y,r.shape,r.dtype,u,C);f=n.makeTensorInfo(C,r.dtype);const R=n.texData.get(f.dataId);R.values=v}else f=or(r,u,n);l=et(l.length,c)}pt("max",l,c);const[p,g]=$t(f.shape,l);let m=p;i&&(m=Ze(p,a));let x;if(h){const y=n.texData.get(f.dataId).values,C=vw(y,D(g),m,r.dtype);x=n.makeTensorInfo(m,r.dtype);const v=n.texData.get(x.dataId);v.values=C}else x=k$(f,g,m,n);return d&&n.disposeIntermediateTensorInfo(f),x}const T$={kernelName:vi,backendName:"webgl",kernelFunc:_u};/**
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
 */const R$=Zl+`
  return max(a, b);
`,N$=`
  vec4 result = vec4(max(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  `+sr+`
  return result;
`,A$=_e({opSnippet:R$,packedOpSnippet:N$,cpuKernelImpl:$w}),_$={kernelName:kr,backendName:"webgl",kernelFunc:A$};/**
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
 */function D$(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e;Yn(r,"maxPool");const{filterSize:o,strides:i,pad:c,dimRoundingMode:a}=s,l=1;$(xn(i,l),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${l}'`);const u=gn(r.shape,o,i,l,c,a);if(u.filterWidth===1&&u.filterHeight===1&&k(u.inShape,u.outShape))return Ke({inputs:{x:r},backend:n});const d=new ts(u,"max",!1);return n.runWebGLProgram(d,[r],r.dtype)}const F$={kernelName:th,backendName:"webgl",kernelFunc:D$};/**
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
 */function P$(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{filterSize:o,strides:i,pad:c,dataFormat:a,dimRoundingMode:l}=s,u=[1,1,1],d=Hn(r.shape,o,i,u,c,l,a),h=new zo(d,"max",!1);return n.runWebGLProgram(h,[r],r.dtype)}const O$={kernelName:sh,backendName:"webgl",kernelFunc:P$};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */class L${constructor(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;const n=e.strideHeight,s=e.strideWidth,r=e.dilationHeight,o=e.effectiveFilterHeight,i=e.effectiveFilterWidth,c=o-1-e.padInfo.top,a=i-1-e.padInfo.left,l=o*i-1;this.userCode=`
      const ivec2 pads = ivec2(${c}, ${a});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${o};
          wR += ${r}) {
          float dyR = float(dyRCorner + wR) / ${n}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${i}; wC++) {
            float dyC = float(dyCCorner + wC) / ${s}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = ${l} - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * ${i} + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `}}class B${constructor(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;const n=e.strideDepth,s=e.strideHeight,r=e.strideWidth,o=e.dilationDepth,i=e.dilationHeight,c=e.dilationWidth,a=e.effectiveFilterDepth,l=e.effectiveFilterHeight,u=e.effectiveFilterWidth,d=a-1-e.padInfo.front,h=l-1-e.padInfo.top,f=u-1-e.padInfo.left,p=a*l*u-1;this.userCode=`
      const ivec3 pads = ivec3(${d}, ${h}, ${f});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${a};
           wD += ${o}) {
          float dyD = float(dyDCorner + wD) / ${n}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${l};
              wR += ${i}) {
            float dyR = float(dyRCorner + wR) / ${s}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${u};
                wC += ${c}) {
              float dyC = float(dyCCorner + wC) / ${r}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = ${p} -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * ${l} * ${u} +
                  wR * ${u} + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}/**
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
 */function M$(t){const{inputs:e,backend:n,attrs:s}=t,{dy:r,input:o}=e,i=o,{filterSize:c,strides:a,pad:l,dimRoundingMode:u}=s,d=[1,1,1],h=Hn(i.shape,c,a,d,l,u),f=new zo(h,"max",!0),p=n.runWebGLProgram(f,[i],i.dtype),g=new B$(h),m=n.runWebGLProgram(g,[r,p],i.dtype);return n.disposeIntermediateTensorInfo(p),m}const V$={kernelName:rh,backendName:"webgl",kernelFunc:M$};/**
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
 */function U$(t){const{inputs:e,backend:n,attrs:s}=t,{dy:r,input:o,output:i}=e,c=o;Yn([o,i],"maxPoolGrad");const{filterSize:a,strides:l,pad:u,dimRoundingMode:d}=s,h=gn(c.shape,a,l,1,u,d),f=!0,p=new ts(h,"max",f),g=n.runWebGLProgram(p,[c],c.dtype),m=new L$(h),x=n.runWebGLProgram(m,[r,g],c.dtype);return n.disposeIntermediateTensorInfo(g),x}const W$={kernelName:nh,backendName:"webgl",kernelFunc:U$};/**
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
 */function G$(t,e,n,s){let r=new ts(n,"max",!1);const o=s.runWebGLProgram(r,[t],"float32");r=new ts(n,"max",!0,!0,e);const i=s.runWebGLProgram(r,[t],"float32");return[o,i]}/**
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
 */const z$={kernelName:oh,backendName:"webgl",kernelFunc:({inputs:t,attrs:e,backend:n})=>{const{x:s}=t,{filterSize:r,strides:o,pad:i,includeBatchInIndex:c}=e,a=n;$(s.shape.length===4,()=>`Error in maxPool: input must be rank 4 but got rank ${s.shape.length}.`);const l=[1,1];$(xn(o,l),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${o} and dilations '${l}'`);const u=gn(s.shape,r,o,l,i),[d,h]=G$(s,c,u,a);return[d,h]}};/**
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
 */function H$(t,e,n,s){const r=D(e),i=D(t.shape)/r,c=P({inputs:{x:t},attrs:{shape:[i,r]},backend:s}),a=Jt(c,"float32","mean",s),l=P({inputs:{x:a},attrs:{shape:n},backend:s});return s.disposeIntermediateTensorInfo(c),s.disposeIntermediateTensorInfo(a),l}/**
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
 */const X$={kernelName:$i,backendName:"webgl",kernelFunc:({inputs:t,attrs:e,backend:n})=>{const{x:s}=t,{keepDims:r,axis:o}=e,i=n,c=s.shape.length,a=re(o,s.shape);let l=a;const u=Je(l,c),d=u!=null,h=i.shouldExecuteOnCPU([s]),f=[];let p=s;if(d){if(h){const C=i.texData.get(p.dataId).values,v=new Array(c);for(let _=0;_<v.length;_++)v[_]=s.shape[u[_]];const R=Uo(C,s.shape,s.dtype,u,v);p=i.makeTensorInfo(v,s.dtype);const T=i.texData.get(p.dataId);T.values=R}else p=or(s,u,i);f.push(p),l=et(l.length,c)}pt("sum",l,c);const[g,m]=$t(p.shape,l);let x=g;r&&(x=Ze(g,a));const b=H$(p,m,x,i);for(const y of f)i.disposeIntermediateTensorInfo(y);return b}};/**
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
 */function q$(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{axis:o,keepDims:i}=s,c=r.shape.length,a=re(o,r.shape);let l=a;const u=Je(l,c);let d=r;u!=null&&(d=Ve({inputs:{x:r},backend:n,attrs:{perm:u}}),l=et(l.length,r.shape.length)),pt("min",l,c);const[h,f]=$t(d.shape,l),p=D(f),g=P({inputs:{x:d},backend:n,attrs:{shape:[-1,p]}}),m=Jt(g,g.dtype,"min",n);let x;if(i){const b=Ze(h,a);x=P({inputs:{x:m},backend:n,attrs:{shape:b}})}else x=P({inputs:{x:m},backend:n,attrs:{shape:h}});return n.disposeIntermediateTensorInfo(g),n.disposeIntermediateTensorInfo(m),u!=null&&n.disposeIntermediateTensorInfo(d),x}const K$={kernelName:Ii,backendName:"webgl",kernelFunc:q$};/**
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
 */const j$=Zl+`
  return min(a, b);
`,Y$=`
  vec4 result = vec4(min(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  `+sr+`
  return result;
`,Q$=_e({opSnippet:j$,packedOpSnippet:Y$,cpuKernelImpl:Iw}),Z$={kernelName:fs,backendName:"webgl",kernelFunc:Q$};/**
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
 */class J${constructor(e,n,s){this.variableNames=["x"],this.outputShape=n.map((u,d)=>u[0]+e[d]+u[1]);const r=e.length,o=me(r),i=n.map(u=>u[0]).join(","),c=n.map((u,d)=>u[0]+e[d]).join(","),a=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,r),l=s==="reflect"?0:1;if(r===1){this.userCode=`
        int start = ${i};
        int end = ${c};

        void main() {
          int outC = getOutputCoords();
          if (outC < start) {
            outC = start * 2 - outC - ${l};
          } else if(outC >= end) {
            outC = (end - 1) * 2 - outC + ${l};
          }
          setOutput(getX(outC - start));
        }
      `;return}this.userCode=`
      ${o} start = ${o}(${i});
      ${o} end = ${o}(${c});

      void main() {
        ${o} outC = getOutputCoords();
        for (int i = 0; i < ${r}; i++) {
          if (outC[i] < start[i]) {
            outC[i] = start[i] * 2 - outC[i] - ${l};
          } else if(outC[i] >= end[i]) {
            outC[i] = (end[i] - 1) * 2 - outC[i] + ${l};
          }
        }
        ${o} coords = outC - start;
        setOutput(getX(${a}));
      }
    `}}/**
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
 */class eI{constructor(e,n,s){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n.map((p,g)=>p[0]+e[g]+p[1]);const r=e.length,o=me(r),i=n.map(p=>p[0]).join(","),c=n.map((p,g)=>p[0]+e[g]).join(","),a=Me("rc",r),l=Me("source",r),u=`${a[r-1]} < ${this.outputShape[r-1]}`,d=r===1?"source":`vec2(${l.slice(-2).join()})`,h=s==="reflect"?0:1;let f="";if(r===1){const p=`
        ${o} source = rc;
        if (source < start) {
          source = start * 2 - source - ${h};
        } else if (source >= end) {
          source = (end - 1) * 2 - source + ${h};
        }
        source -= start;
      `;f=`
        ${o} rc = outputLoc;
        ${p}
        result[0] = getChannel(getX(${l.join()}), ${d});
        ${a[r-1]} += 1;
        if(${u}) {
          ${p}
          result[1] = getChannel(getX(${l.join()}), ${d});
        }
      `}else{const p=`
        ${o} source = rc;
        ${o} lt = ${o}(lessThan(source, start));
        ${o} gte = ${o}(greaterThanEqual(source, end));
        ${o} orig = 1 - (lt + gte);
        source = orig * source +
                lt * (start * 2 - source - ${h}) +
                gte * ((end - 1) * 2 - source + ${h});
        source -= start;
      `;f=`
        ${o} rc = outputLoc;
        ${p}
        result[0] = getChannel(getX(${l.join()}), ${d});
        ${a[r-1]} += 1;
        if(${u}) {
          ${p}
          result[1] = getChannel(getX(${l.join()}), ${d});
        }
        rc = outputLoc;
        ${a[r-2]} += 1;
        if(${a[r-2]} < ${this.outputShape[r-2]}) {
          ${p}
          result[2] = getChannel(getX(${l.join()}), ${d});
          ${a[r-1]} += 1;
          if(${u}) {
            ${p}
            result[3] = getChannel(getX(${l.join()}), ${d});
          }
        }
      `}this.userCode=`
      const ${o} start = ${o}(${i});
      const ${o} end = ${o}(${c});

      void main() {
        ${o} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${f}
        setOutput(result);
      }
    `}}/**
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
 */const tI={kernelName:ih,backendName:"webgl",kernelFunc:({inputs:t,backend:e,attrs:n})=>{const{x:s}=t,{paddings:r,mode:o}=n,i=S().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new eI(s.shape,r,o):new J$(s.shape,r,o);return e.runWebGLProgram(i,[s],s.dtype)}};/**
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
 */const nI=`if (b == 0.0) return NAN;
  return mod(a, b);`,sI=`
  vec4 result = mod(a, b);
  vec4 isNaN = vec4(equal(b, vec4(0.0)));
  `+sr+`
  return result;
`,rI=_e({opSnippet:nI,packedOpSnippet:sI}),oI={kernelName:ah,backendName:"webgl",kernelFunc:rI};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */class iI{constructor(e,n,s){this.variableNames=["probs"],this.customUniforms=[{name:"seed",type:"float"}],this.outputShape=[e,s],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < ${n-1}; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(${n-1}));
      }
    `}}/**
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
 */const Du=_e({opSnippet:`
if (a == b) {
  return 1.0;
};
return a / b;`,packedOpSnippet:`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,checkOutOfBounds:!0}),aI={kernelName:ui,backendName:"webgl",kernelFunc:Du};/**
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
 */const Fu="return a - b;",Pu=_e({opSnippet:Fu,packedOpSnippet:Fu,supportsComplex:!0,cpuKernelImpl:Vw}),cI={kernelName:ws,backendName:"webgl",kernelFunc:Pu};/**
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
 */function Ou(t){const{inputs:e,backend:n,attrs:s}=t,{logits:r}=e,{dim:o}=s,i=re([o],r.shape),c=_u({inputs:{x:r},backend:n,attrs:{reductionIndices:i,keepDims:!1}}),a=Ze(c.shape,i),l=P({inputs:{x:c},backend:n,attrs:{shape:a}}),u=Pu({inputs:{a:r,b:l},backend:n}),d=Eu({inputs:{x:u},backend:n}),h=ir({inputs:{x:d},backend:n,attrs:{axis:i,keepDims:!1}}),f=P({inputs:{x:h},backend:n,attrs:{shape:a}}),p=Du({inputs:{a:d,b:f},backend:n});return n.disposeIntermediateTensorInfo(c),n.disposeIntermediateTensorInfo(l),n.disposeIntermediateTensorInfo(u),n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(f),p}const lI={kernelName:vh,backendName:"webgl",kernelFunc:Ou};/**
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
 */function uI(t){const{inputs:e,backend:n,attrs:s}=t,{logits:r}=e,{numSamples:o,seed:i,normalized:c}=s,a=c?r:Ou({inputs:{logits:r},backend:n,attrs:{dim:r.shape.length-1}}),l=a.shape[0],u=a.shape[1],d=new iI(l,u,o),h=[[i]],f=n.runWebGLProgram(d,[a],"int32",h);return c||n.disposeIntermediateTensorInfo(a),f}const dI={kernelName:ch,backendName:"webgl",kernelFunc:uI};/**
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
 */const hI=st+`
  return -x;
`,fI=`
  vec4 result = -x;
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;function pI(t){const{inputs:e,backend:n}=t,{x:s}=e;if(n.shouldExecuteOnCPU([s])){const o=n.texData.get(s.dataId),[i,c]=Ew(o.values,s.shape,s.dtype);return n.makeTensorInfo(c,s.dtype,i)}let r;return S().getBool("WEBGL_PACK_UNARY_OPERATIONS")?r=new Zt(s.shape,fI):r=new Rt(s.shape,hI),n.runWebGLProgram(r,[s],s.dtype)}const gI={kernelName:Tr,backendName:"webgl",kernelFunc:pI};/**
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
 */const mI=rc;function xI(t){lt("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:e,backend:n,attrs:s}=t,{boxes:r,scores:o}=e,{maxOutputSize:i,iouThreshold:c,scoreThreshold:a}=s,l=n.readSync(r.dataId),u=n.readSync(o.dataId),{selectedIndices:d}=mI(l,u,i,c,a);return n.makeTensorInfo([d.length],"int32",new Int32Array(d))}const bI={kernelName:Si,backendName:"webgl",kernelFunc:xI};/**
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
 */const wI=oc;function yI(t){lt("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:e,backend:n,attrs:s}=t,{boxes:r,scores:o}=e,{maxOutputSize:i,iouThreshold:c,scoreThreshold:a,padToMaxOutputSize:l}=s,u=n.readSync(r.dataId),d=n.readSync(o.dataId),{selectedIndices:h,validOutputs:f}=wI(u,d,i,c,a,l);return[n.makeTensorInfo([h.length],"int32",new Int32Array(h)),n.makeTensorInfo([],"int32",new Int32Array([f]))]}const CI={kernelName:Ei,backendName:"webgl",kernelFunc:yI};/**
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
 */const vI=ic;function $I(t){lt("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:e,backend:n,attrs:s}=t,{boxes:r,scores:o}=e,{maxOutputSize:i,iouThreshold:c,scoreThreshold:a,softNmsSigma:l}=s,u=n.readSync(r.dataId),d=n.readSync(o.dataId),h=i,f=c,p=a,g=l,{selectedIndices:m,selectedScores:x}=vI(u,d,h,f,p,g);return[n.makeTensorInfo([m.length],"int32",new Int32Array(m)),n.makeTensorInfo([x.length],"float32",new Float32Array(x))]}const II={kernelName:ki,backendName:"webgl",kernelFunc:$I};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */class SI{constructor(e,n,s,r){this.variableNames=["indices"],this.outputShape=[e,n],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(${r}), float(${s}),
                      float(index == coords.y)));
      }
    `}}/**
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
 */const EI={kernelName:uh,backendName:"webgl",kernelFunc:t=>{const{inputs:e,backend:n,attrs:s}=t,{indices:r}=e,{depth:o,onValue:i,offValue:c}=s,a=D(r.shape),l=new SI(a,o,i,c),u=P({inputs:{x:r},backend:n,attrs:{shape:[a]}}),d=n.runWebGLProgram(l,[u],r.dtype);n.disposeIntermediateTensorInfo(u);const h=[...r.shape,o],f=P({inputs:{x:d},backend:n,attrs:{shape:h}});return n.disposeIntermediateTensorInfo(d),f}};/**
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
 */function dr(t){const{inputs:e,backend:n}=t,{x:s}=e;if(s.dtype==="complex64"){const r=ns({inputs:{input:s},backend:n}),o=dr({inputs:{x:r},backend:n}),i=ur({inputs:{input:s},backend:n}),c=dr({inputs:{x:i},backend:n}),a=Bt({inputs:{real:o,imag:c},backend:n});return n.disposeIntermediateTensorInfo(r),n.disposeIntermediateTensorInfo(o),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(c),a}else return ss({attrs:{shape:s.shape,dtype:s.dtype,value:s.dtype==="string"?"":0},backend:n})}const kI={kernelName:Zi,backendName:"webgl",kernelFunc:dr};/**
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
 */function Lu(t){const{inputs:e,backend:n}=t,{x:s}=e;if(s.dtype==="string")throw new Error("onesLike is not supported under string dtype");if(s.dtype==="complex64"){const r=ns({inputs:{input:s},backend:n}),o=Lu({inputs:{x:r},backend:n}),i=ur({inputs:{input:s},backend:n}),c=dr({inputs:{x:i},backend:n}),a=Bt({inputs:{real:o,imag:c},backend:n});return n.disposeIntermediateTensorInfo(r),n.disposeIntermediateTensorInfo(o),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(c),a}else return ss({attrs:{shape:s.shape,dtype:s.dtype,value:1},backend:n})}const TI={kernelName:lh,backendName:"webgl",kernelFunc:Lu};/**
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
 */function RI(t){const{inputs:e,backend:n,attrs:s}=t,{axis:r}=s;if(e.length===1)return qo({inputs:{input:e[0]},backend:n,attrs:{dim:r}});const o=e[0].shape,i=e[0].dtype;e.forEach(u=>{te(o,u.shape,"All tensors passed to stack must have matching shapes"),$(i===u.dtype,()=>"All tensors passed to stack must have matching dtypes")});const c=[],a=e.map(u=>{const d=qo({inputs:{input:u},backend:n,attrs:{dim:r}});return c.push(d),d}),l=xu({inputs:a,backend:n,attrs:{axis:r}});return c.forEach(u=>n.disposeIntermediateTensorInfo(u)),l}const NI={kernelName:Ti,backendName:"webgl",kernelFunc:RI};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */class AI{constructor(e,n,s){this.variableNames=["x"],this.customUniforms=[{name:"value",type:"float"}],this.outputShape=n.map((l,u)=>l[0]+e[u]+l[1]);const r=e.length,o=me(r),i=n.map(l=>l[0]).join(","),c=n.map((l,u)=>l[0]+e[u]).join(","),a=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,r);if(r===1){this.userCode=`
        int start = ${i};
        int end = ${c};

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(value);
          } else {
            setOutput(getX(outC - start));
          }
        }
      `;return}this.userCode=`
      ${o} start = ${o}(${i});
      ${o} end = ${o}(${c});

      void main() {
        ${o} outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(value);
        } else {
          ${o} coords = outC - start;
          setOutput(getX(${a}));
        }
      }
    `}}/**
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
 */class _I{constructor(e,n,s){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"value",type:"float"}],this.outputShape=n.map((g,m)=>g[0]+e[m]+g[1]);const r=e.length,o=me(r),i=n.map(g=>g[0]).join(","),c=n.map((g,m)=>g[0]+e[m]).join(","),a=Me("rc",r),l=Me("source",r),u=`${a[r-1]} < ${this.outputShape[r-1]}`,d=r===1?"source":`vec2(${l.slice(-2).join()})`,h=[`${o} rc = outputLoc;`,`${a[r-1]} += 1;
       if(${u}) {
      `,r===1?"":`}
       rc = outputLoc;
       ${a[r-2]} += 1;
       if(${a[r-2]} < ${this.outputShape[r-2]}) {`,r===1?"":`  ${a[r-1]} += 1;
         if(${u}) {`],f=r===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))";let p="";for(let g=0,m=r===1?2:4;g<m;g++)p+=`
        ${h[g]}
        if (${f}) {
          result[${g}] = float(value);
        } else {
          ${o} source = rc - start;
          result[${g}] = getChannel(getX(${l.join()}), ${d});
        }
      `;p+=r===1?"} ":"}}",this.userCode=`
      const ${o} start = ${o}(${i});
      const ${o} end = ${o}(${c});

      void main() {
        ${o} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${p}
        setOutput(result);
      }
    `}}/**
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
 */const Bu=t=>{const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{paddings:o,constantValue:i}=s;if(D(r.shape)===0){const l=o.map((u,d)=>u[0]+r.shape[d]+u[1]);return ss({backend:n,attrs:{shape:l,value:i,dtype:r.dtype}})}const c=S().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new _I(r.shape,o,i):new AI(r.shape,o,i),a=[[i]];return n.runWebGLProgram(c,[r],r.dtype,a)},DI={kernelName:dh,backendName:"webgl",kernelFunc:Bu};/**
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
 */const FI=`
  if(a < 0.0 && floor(b) < b){
    return NAN;
  }
  if (b == 0.0) {
    return 1.0;
  }
  return (round(mod(b, 2.0)) != 1) ?
      pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,PI=`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));
  `+sr+`
  return result;
`,OI=_e({opSnippet:FI,packedOpSnippet:PI}),LI={kernelName:Ri,backendName:"webgl",kernelFunc:OI};/**
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
 */function BI(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{axis:o,keepDims:i}=s,c=r.shape.length,a=[],l=re(o,r.shape);let u=l;const d=Je(u,c);let h=r;d!=null&&(h=Ve({inputs:{x:r},backend:n,attrs:{perm:d}}),u=et(u.length,c),a.push(h)),pt("prod",u,c);let f;if(n.shouldExecuteOnCPU([h])){const p=n.texData.get(h.dataId).values,{outVals:g,outShape:m,outDtype:x}=Tw(h.shape,h.dtype,p,u);f=n.makeTensorInfo(m,x,g)}else{const[p,g]=$t(h.shape,u),m=D(g),x=P({inputs:{x:h},backend:n,attrs:{shape:[-1,m]}}),b=zr(r.dtype),y=Jt(x,b,"prod",n);f=P({inputs:{x:y},backend:n,attrs:{shape:p}}),a.push(x),a.push(y)}if(i){a.push(f);const p=Ze(f.shape,l);f=P({inputs:{x:f},backend:n,attrs:{shape:p}})}return a.forEach(p=>n.disposeIntermediateTensorInfo(p)),f}const MI={kernelName:Ai,backendName:"webgl",kernelFunc:BI};/**
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
 */const Mu=t=>{const{backend:e,attrs:n}=t,{start:s,stop:r,step:o,dtype:i}=n,c=Rw(s,r,o,i);return e.makeTensorInfo([c.length],i,c)},VI={kernelName:_i,backendName:"webgl",kernelFunc:Mu};/**
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
 */const UI=se({opSnippet:"return 1.0 / x;"}),WI={kernelName:hh,backendName:"webgl",kernelFunc:UI};/**
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
 */const GI=st+`
  return (x < 0.0) ? 0.0 : x;
`,zI=se({opSnippet:GI,packedOpSnippet:`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`}),HI={kernelName:Di,backendName:"webgl",kernelFunc:zI};/**
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
 */const XI=st+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,qI=se({opSnippet:XI,packedOpSnippet:`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`}),KI={kernelName:Li,backendName:"webgl",kernelFunc:qI};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */class jI{constructor(e,n,s,r,o){this.variableNames=["A"],this.outputShape=[];const[i,c,a,l]=e;this.outputShape=[i,n,s,l];const u=[r&&n>1?c-1:c,r&&s>1?a-1:a],d=[r&&n>1?n-1:n,r&&s>1?s-1:s];let h;o?h="(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)":h="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${u[0]/d[0]},
          ${u[1]/d[1]});
      const vec2 inputShapeRC = vec2(${c}.0, ${a}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${h};

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(max(sourceFracIndexRC, vec2(0.0)));
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `}}/**
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
 */class YI{constructor(e,n,s,r,o){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[i,c,a,l]=e;this.outputShape=[i,n,s,l];const u=[r&&n>1?c-1:c,r&&s>1?a-1:a],d=[r&&n>1?n-1:n,r&&s>1?s-1:s];let h;o?h="(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)":h="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${u[0]/d[0]},
          ${u[1]/d[1]},
          ${u[1]/d[1]});
      const vec3 inputShapeRC = vec3(${c}.0, ${a}.0,
                                     ${a}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${h};

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(max(sourceFracIndexRC, vec3(0.0)));
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${l-1};
        bool hasNextRow = coords.z < ${s-1};

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `}}/**
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
 */function QI(t){const{inputs:e,backend:n,attrs:s}=t,{images:r}=e,{alignCorners:o,halfPixelCenters:i,size:c}=s,[a,l]=c,u=S().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new YI(r.shape,a,l,o,i):new jI(r.shape,a,l,o,i);return n.runWebGLProgram(u,[r],"float32")}const ZI={kernelName:Oi,backendName:"webgl",kernelFunc:QI};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */class JI{constructor(e,n,s){this.variableNames=["dy"],this.outputShape=[],this.outputShape=n;const[,r,o]=n,[,i,c]=e,a=[s&&i>1?r-1:r,s&&c>1?o-1:o],l=[s&&i>1?i-1:i,s&&c>1?c-1:c],u=a[0]/l[0],d=a[1]/l[1],h=1/u,f=1/d,p=Math.ceil(h)*2+2,g=Math.ceil(f)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${u});
        const float widthScale = float(${d});

        const float invHeightScale = float(${h});
        const float invWidthScale = float(${f});

        const int winHeight = int(${p});
        const int winWidth = int(${g});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${i}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${c}) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), ${r-1}.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), ${o-1}.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}}/**
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
 */function eS(t){const{inputs:e,backend:n,attrs:s}=t,{images:r,dy:o}=e,{alignCorners:i}=s,c=new JI(o.shape,r.shape,i);return n.runWebGLProgram(c,[o],o.dtype)}const tS={kernelName:ph,backendName:"webgl",kernelFunc:eS};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */class nS{constructor(e,n,s,r,o){this.variableNames=["A"],this.outputShape=[];const[i,c,a,l]=e;this.outputShape=[i,n,s,l];const u=[r&&n>1?c-1:c,r&&s>1?a-1:a],d=[r&&n>1?n-1:n,r&&s>1?s-1:s],h=r?"0.5":"0.0";let f;o?f="max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))":f="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${u[0]/d[0]},
          ${u[1]/d[1]});
      const vec2 inputShapeRC = vec2(${c}.0, ${a}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${f};

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${h})));
        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `}}/**
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
 */class sS{constructor(e,n,s,r,o){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[i,c,a,l]=e;this.outputShape=[i,n,s,l];const u=[r&&n>1?c-1:c,r&&s>1?a-1:a],d=[r&&n>1?n-1:n,r&&s>1?s-1:s],h=r?"0.5":"0.0";let f;o?f="max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))":f="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${u[0]/d[0]},
          ${u[1]/d[1]},
          ${u[1]/d[1]});
      const vec3 inputShapeRC = vec3(${c}.0, ${a}.0,
                                     ${a}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${f};

        // Compute the coordinators of nearest neighbor point.
        ivec3 sourceNearestRC = ivec3(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${h})));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${l-1};
        bool hasNextRow = coords.z < ${s-1};

        vec4 newValue = vec4(
          getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d),
          hasNextCol ? getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d + 1) : 0.0);

        setOutput(newValue);
      }
    `}}/**
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
 */function rS(t){const{inputs:e,backend:n,attrs:s}=t,{images:r}=e,{alignCorners:o,halfPixelCenters:i,size:c}=s,[a,l]=c,u=S().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new sS(r.shape,a,l,o,i):new nS(r.shape,a,l,o,i);return n.runWebGLProgram(u,[r],r.dtype)}const oS={kernelName:Pi,backendName:"webgl",kernelFunc:rS};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */class iS{constructor(e,n,s){this.variableNames=["dy"],this.outputShape=[],this.outputShape=n;const[,r,o]=n,[,i,c]=e,a=[s&&i>1?r-1:r,s&&c>1?o-1:o],l=[s&&i>1?i-1:i,s&&c>1?c-1:c],u=a[0]/l[0],d=a[1]/l[1],h=1/u,f=1/d,p=Math.ceil(h)*2+2,g=Math.ceil(f)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${u});
        const float widthScale = float(${d});

        const float invHeightScale = float(${h});
        const float invWidthScale = float(${f});

        const int winHeight = int(${p});
        const int winWidth = int(${g});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${i}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${c}) {
              continue;
            }

            float sourceFracRow =
              float(${a[0]}) *
                (float(dyR) / float(${l[0]}));

            float sourceFracCol =
                float(${a[1]}) *
                  (float(dyC) / float(${l[1]}));

            int sourceNearestRow = int(min(
                float(int(${r}) - 1),
                ${s} ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(${o}) - 1),
                ${s} ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}}/**
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
 */function aS(t){const{inputs:e,backend:n,attrs:s}=t,{images:r,dy:o}=e,{alignCorners:i}=s,c=new iS(o.shape,r.shape,i);return n.runWebGLProgram(c,[o],o.dtype)}const cS={kernelName:fh,backendName:"webgl",kernelFunc:aS};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */class lS{constructor(e,n){this.variableNames=["x"];const s=e.length;if(s>4)throw new Error(`WebGL backend: Reverse of rank-${s} tensor is not yet supported`);if(this.outputShape=e,s===1){this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(${e[0]} - coord - 1));
        }
      `;return}const r=c=>n.indexOf(c)!==-1&&e[c]!==1?`${e[c]} - coords[${c}] - 1`:`coords[${c}]`,o=e.map((c,a)=>r(a)).join(","),i=me(s);this.userCode=`
      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${o}));
      }
    `}}/**
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
 */class uS{constructor(e,n){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;const s=e.length;if(s>4)throw new Error(`WebGL backend: Reverse of rank-${s} tensor is not yet supported`);this.outputShape=e;const r=Me("rc",s),o=`${r[s-1]} + 1 < ${this.outputShape[s-1]}`,i=`${r[s-2]} + 1 < ${this.outputShape[s-2]}`,c=me(s);s===1?this.userCode=`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(${e[0]} - rc - 1),
            ${e[0]} - rc - 1);
          if(${o}){
              result.g = getChannel(getX(${e[0]} - (rc  + 1) - 1),
                ${e[0]} - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:this.userCode=`
        void main() {
          ${c} rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = ${a(r.slice())};
          if(${o}){
            result.g = ${l(r.slice())};
          }
          if(${i}) {
            result.b = ${u(r.slice())};
            if(${o}) {
              result.a = ${d(r.slice())};
            }
          }
          setOutput(result);
        }
    `;function a(p){return h(p)}function l(p){return p[s-1]="("+p[s-1]+" + 1)",h(p)}function u(p){return p[s-2]="("+p[s-2]+" + 1)",h(p)}function d(p){return p[s-1]="("+p[s-1]+" + 1)",p[s-2]="("+p[s-2]+" + 1)",h(p)}function h(p){const g=e.map((b,y)=>f(y,p)),m=g.join(","),x=g.slice(-2).join(",");return`getChannel(getX(${m}), vec2(${x}))`}function f(p,g){return n.indexOf(p)!==-1&&e[p]!==1?`${e[p]} - ${g[p]} - 1`:`${g[p]}`}}}/**
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
 */function dS(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{dims:o}=s,i=r.shape.length,c=re(o,r.shape);if(i===0)return Ke({inputs:{x:r},backend:n});const a=S().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new uS(r.shape,c):new lS(r.shape,c);return n.runWebGLProgram(a,[r],r.dtype)}const hS={kernelName:Bi,backendName:"webgl",kernelFunc:dS};/**
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
 */class fS{constructor(e,n){this.variableNames=["Image"],this.outputShape=[],this.customUniforms=[{name:"params",type:"vec4"}];const s=e[1],r=e[2];this.outputShape=e;let o="";typeof n=="number"?o=`float outputValue = ${n.toFixed(2)};`:o=`
        vec3 fill = vec3(${n.join(",")});
        float outputValue = fill[coords[3]];`,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];
          int y = coords[1];
          float coordXFloat = (float(x) - params[0]) * params[3] -
            (float(y) - params[1]) * params[2];
          float coordYFloat = (float(x) - params[0]) * params[2] +
            (float(y) - params[1]) * params[3];
          int coordX = int(round(coordXFloat + params[0]));
          int coordY = int(round(coordYFloat + params[1]));
          ${o}
          if(coordX >= 0 && coordX < ${r} && coordY >= 0 && coordY < ${s}) {
            outputValue = getImage(coords[0], coordY, coordX, coords[3]);
          }
          setOutput(outputValue);
        }
    `}}/**
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
 */const pS={kernelName:ea,backendName:"webgl",kernelFunc:({inputs:t,attrs:e,backend:n})=>{const{image:s}=t,{radians:r,fillValue:o,center:i}=e,c=n,a=new fS(s.shape,o),[l,u]=Cc(i,s.shape[1],s.shape[2]),d=[[l,u,Math.sin(r),Math.cos(r)]];return c.runWebGLProgram(a,[s],s.dtype,d)}};/**
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
 */const gS=se({opSnippet:`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`}),mS={kernelName:Mi,backendName:"webgl",kernelFunc:gS};/**
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
 */const xS=se({opSnippet:"return inversesqrt(x);",cpuKernelImpl:Nw}),bS={kernelName:Nr,backendName:"webgl",kernelFunc:xS};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */class Vu{constructor(e,n,s,r,o,i,c=!0){this.variableNames=["updates","indices","defaultValue"],this.outputShape=i;const a=me(o.length),l=me(i.length);let u="";s===1?u="i":s===2&&(u="i, j");const d=`getIndices(${u})`;let h="";r===1?h="i":r===2&&(h="i, coords[1]");const f=`getUpdates(${h})`,p=n>1?"strides[j]":"strides";this.userCode=`
        ${a} strides = ${a}(${o});

        void main() {
          ${l} coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < ${e}; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < ${n}; j++) {
              int index = round(${d});
              flattenedIndex += index * ${p};
            }
            if (flattenedIndex == coords[0]) {
              sum += ${f};
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `}}/**
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
 */function wS(t){const{inputs:e,backend:n,attrs:s}=t,{indices:r,updates:o}=e,{shape:i}=s,{sliceRank:c,numUpdates:a,sliceSize:l,strides:u,outputSize:d}=Io(o,r,i),h=[d/l,l];if(d===0)return n.makeTensorInfo(i,r.dtype);const f=P({inputs:{x:r},backend:n,attrs:{shape:[a,c]}}),p=P({inputs:{x:o},backend:n,attrs:{shape:[a,l]}}),g=n.makeTensorInfo([],"float32",new Float32Array([0])),m=new Vu(a,c,f.shape.length,p.shape.length,u,h),x=n.runWebGLProgram(m,[p,f,g],p.dtype),b=P({inputs:{x},backend:n,attrs:{shape:i}});return n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(x),n.disposeIntermediateTensorInfo(g),b}const yS={kernelName:gh,backendName:"webgl",kernelFunc:wS};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */class CS{constructor(e,n,s){this.variableNames=["c","a","b"],this.outputShape=n;let r,o;if(s>4)throw Error(`Where for rank ${s} is not yet supported`);if(s===1)o="resRC",r="resRC";else{const c=["resRC.x","resRC.y","resRC.z","resRC.w"],a=[],l=[];for(let u=0;u<n.length;u++)l.push(`${c[u]}`),u<e&&a.push(`${c[u]}`);r=a.join(),o=l.join()}const i=me(s);this.userCode=`
      void main() {
        ${i} resRC = getOutputCoords();
        float cVal = getC(${r});
        if (cVal >= 1.0) {
          setOutput(getA(${o}));
        } else {
          setOutput(getB(${o}));
        }
      }
    `}}/**
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
 */function vS(t){const{inputs:e,backend:n}=t,{condition:s,t:r,e:o}=e,i=new CS(s.shape.length,r.shape,r.shape.length);return n.runWebGLProgram(i,[s,r,o],bt(r.dtype,o.dtype))}const $S={kernelName:Vi,backendName:"webgl",kernelFunc:vS};/**
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
 */const IS=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ${Ec};
  float scale = ${kc};
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,SS=se({opSnippet:IS}),ES={kernelName:mh,backendName:"webgl",kernelFunc:SS};/**
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
 */const kS=Rn+`
  return 1.0 / (1.0 + exp(-1.0 * x));
`,TS=se({opSnippet:kS,packedOpSnippet:`
  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,cpuKernelImpl:Aw}),RS={kernelName:ms,backendName:"webgl",kernelFunc:TS};/**
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
 */const NS=se({opSnippet:`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`}),AS={kernelName:wh,backendName:"webgl",kernelFunc:NS};/**
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
 */const _S=Rn+`
  return sin(x);
`,DS=se({opSnippet:_S}),FS={kernelName:xh,backendName:"webgl",kernelFunc:DS};/**
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
 */const PS=se({opSnippet:`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`}),OS={kernelName:bh,backendName:"webgl",kernelFunc:PS};/**
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
 */const LS=se({opSnippet:`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`}),BS={kernelName:yh,backendName:"webgl",kernelFunc:LS};/**
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
 */const MS={kernelName:Ch,backendName:"webgl",kernelFunc:t=>{const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{blockShape:o,paddings:i}=s;$(r.shape.length<=4,()=>"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet");const c=o.reduce((x,b)=>x*b),a=[[0,0]];a.push(...i);for(let x=1+o.length;x<r.shape.length;++x)a.push([0,0]);const l=[],u=Bu({inputs:{x:r},backend:n,attrs:{paddings:a,constantValue:0}}),d=Co(u.shape,o,c,!1),h=vo(d.length,o.length,!1),f=$o(u.shape,o,c,!1),p=P({inputs:{x:u},backend:n,attrs:{shape:d}}),g=Ve({inputs:{x:p},backend:n,attrs:{perm:h}}),m=P({inputs:{x:g},backend:n,attrs:{shape:f}});return l.push(u),l.push(p),l.push(g),l.forEach(x=>n.disposeIntermediateTensorInfo(x)),m}};/**
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
 */function VS(t){const{inputs:e,backend:n}=t,{indices:s,values:r,denseShape:o,defaultValue:i}=e;if(o.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
         ${o.shape}`);if(s.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
         ${s.shape}`);if(r.shape.length!==1)throw new Error(`Values must be a vector, saw:
         ${r.shape}`);if(i.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${i.shape}`);const c=n.readSync(s.dataId),a=n.readSync(r.dataId),l=n.readSync(o.dataId),u=n.readSync(i.dataId)[0],[d,h,f,p,g]=Dw(c,s.shape,s.dtype,a,r.dtype,l,u);return[n.makeTensorInfo(h,s.dtype,d),n.makeTensorInfo([h[0]],r.dtype,f),n.makeTensorInfo([p.length],"bool",new Uint8Array(p.map(m=>Number(m)))),n.makeTensorInfo([g.length],s.dtype,new Int32Array(g))]}const US={kernelName:Gi,backendName:"webgl",kernelFunc:VS};/**
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
 */function WS(t){const{inputs:e,backend:n}=t,{inputIndices:s,inputShape:r,newShape:o}=e;if(s.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape ${s.shape}`);if(r.shape.length!==1)throw new Error(`Input shape should be a vector but received shape ${r.shape}`);if(o.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${o.shape}`);const i=Array.from(n.readSync(r.dataId)),c=n.readSync(s.dataId),a=Array.from(n.readSync(o.dataId)),[l,u,d]=Fw(c,s.shape,s.dtype,i,a);return[n.makeTensorInfo(u,s.dtype,l),n.makeTensorInfo([d.length],o.dtype,new Int32Array(d))]}const GS={kernelName:zi,backendName:"webgl",kernelFunc:WS};/**
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
 */function zS(t){const{inputs:e,backend:n}=t,{data:s,indices:r,segmentIds:o}=e;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(r.shape.length!==1)throw new Error(`Indices should be a vector but received shape
              ${r.shape}`);if(o.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
              ${o.shape}`);const i=n.readSync(s.dataId),c=n.readSync(r.dataId),a=n.readSync(o.dataId),[l,u]=Hl(i,s.shape,s.dtype,c,a,!0);return n.makeTensorInfo(u,s.dtype,l)}const HS={kernelName:Hi,backendName:"webgl",kernelFunc:zS};/**
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
 */function XS(t){const{inputs:e,backend:n}=t,{data:s,indices:r,segmentIds:o}=e;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(r.shape.length!==1)throw new Error(`Indices should be a vector but received shape
             ${r.shape}`);if(o.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
             ${o.shape}`);const i=n.readSync(s.dataId),c=n.readSync(r.dataId),a=n.readSync(o.dataId),[l,u]=Hl(i,s.shape,s.dtype,c,a);return n.makeTensorInfo(u,s.dtype,l)}const qS={kernelName:Xi,backendName:"webgl",kernelFunc:XS};/**
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
 */function KS(t){const{inputs:e,backend:n,attrs:s}=t,{sparseIndices:r,sparseValues:o,defaultValue:i}=e,{outputShape:c}=s,{sliceRank:a,numUpdates:l,strides:u,outputSize:d}=Io(o,r,c),h=!1,f=new Vu(l,a,r.shape.length,o.shape.length,u,[d,1],h),p=n.runWebGLProgram(f,[o,r,i],o.dtype),g=P({inputs:{x:p},backend:n,attrs:{shape:c}});return n.disposeIntermediateTensorInfo(p),g}const jS={kernelName:$h,backendName:"webgl",kernelFunc:KS};/**
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
 */function YS(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{numOrSizeSplits:o,axis:i}=s,c=re(i,r.shape)[0],a=Uc(r,o,c),l=r.shape.length,u=new Array(l).fill(0),d=r.shape.slice();return a.map(h=>{const f=[...d];f[c]=h;const p=Nn({inputs:{x:r},backend:n,attrs:{begin:u,size:f}});return u[c]+=h,p})}const QS={kernelName:Wi,backendName:"webgl",kernelFunc:YS};/**
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
 */const Uu="return sqrt(x);",ZS=se({opSnippet:Uu,packedOpSnippet:Uu,cpuKernelImpl:Pw}),JS={kernelName:xs,backendName:"webgl",kernelFunc:ZS};/**
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
 */const eE=se({opSnippet:"return x * x;"}),tE={kernelName:Ih,backendName:"webgl",kernelFunc:eE};/**
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
 */const Wu="return (a - b) * (a - b);",nE=_e({opSnippet:Wu,packedOpSnippet:Wu}),sE={kernelName:bs,backendName:"webgl",kernelFunc:nE};/**
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
 */function rE({inputs:t,attrs:e,backend:n}){const{x:s}=t,r=st+`
    return x > 0.0 ? 1.0 : float(${e.alpha});
  `,o=new Rt(s.shape,r);return n.runWebGLProgram(o,[s],s.dtype)}const oE={kernelName:Ji,backendName:"webgl",kernelFunc:rE};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */class iE{constructor(e,n,s){this.variableNames=["x"],this.outputShape=s;const r=s.length,o=me(s.length),i=me(s.length);let c="";if(r===1)c="coords * strides + begin";else{let a=0;c=s.map((l,u)=>(a++,s.length===1?`coords * strides[${u}] + begin[${u}]`:`coords[${a-1}] * strides[${u}] + begin[${u}]`)).join(",")}this.userCode=`
      ${o} begin = ${o}(${e});
      ${o} strides = ${o}(${n});

      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${c}));
      }
    `}}/**
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
 */function aE(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{begin:o,end:i,strides:c,beginMask:a,endMask:l,ellipsisMask:u,newAxisMask:d,shrinkAxisMask:h}=s,{finalShapeSparse:f,finalShape:p,isIdentity:g,sliceDim0:m,isSimpleSlice:x,begin:b,end:y,strides:C}=Ka(r.shape,o,i,c,a,l,u,d,h);let v;if(g)v=P({inputs:{x:r},backend:n,attrs:{shape:p}});else if(m||x){$(r.shape.length>=1,()=>`Input must have rank at least 1, got: ${r.shape.length}`);const T=Ma(b,y,C),_=Nn({inputs:{x:r},backend:n,attrs:{begin:b,size:T}});v=P({inputs:{x:_},backend:n,attrs:{shape:p}}),n.disposeIntermediateTensorInfo(_)}else if(n.shouldExecuteOnCPU([r])){const _=n.readSync(r.dataId),M=Oe(r.shape,r.dtype,_),q=Ow(f,M,C,b);v=n.makeTensorInfo(p,r.dtype,q.values)}else{const _=new iE(b,C,f);v=n.runWebGLProgram(_,[r],r.dtype)}const R=P({inputs:{x:v},backend:n,attrs:{shape:p}});return n.disposeIntermediateTensorInfo(v),R}const cE={kernelName:Sh,backendName:"webgl",kernelFunc:aE};/**
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
 */function lE(t){const{inputs:e,backend:n,attrs:s}=t,{separator:r,nGramWidths:o,leftPad:i,rightPad:c,padWidth:a,preserveShortSequences:l}=s,{data:u,dataSplits:d}=e,h=n.readSync(u.dataId),f=n.readSync(d.dataId),[p,g]=Lw(h,f,r,o,i,c,a,l);return[n.makeTensorInfo([p.length],"string",p),n.makeTensorInfo(d.shape,"int32",g)]}const uE={kernelName:qi,backendName:"webgl",kernelFunc:lE};/**
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
 */function dE(t){const{inputs:e,backend:n,attrs:s}=t,{skipEmpty:r}=s,{input:o,delimiter:i}=e;if(o.dtype!=="string")throw new Error("Input must be of datatype string");if(o.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${o.shape}`);if(i.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${i.shape}`);const c=n.readSync(o.dataId),a=n.readSync(i.dataId)[0],[l,u,d]=Bw(c,a,r),h=u.length;return[n.makeTensorInfo([h,2],"int32",l),n.makeTensorInfo([h],"string",u),n.makeTensorInfo([2],"int32",new Int32Array(d))]}const hE={kernelName:Ki,backendName:"webgl",kernelFunc:dE};/**
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
 */function fE(t){const{inputs:e,backend:n,attrs:s}=t,{numBuckets:r}=s,{input:o}=e;if(o.dtype!=="string")throw new Error("Input must be of datatype string");if(r<=0)throw new Error("Number of buckets must be at least 1");const i=n.readSync(o.dataId),c=Mw(i,r);return n.makeTensorInfo(o.shape,"int32",c)}const pE={kernelName:ji,backendName:"webgl",kernelFunc:fE};/**
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
 */const gE=se({opSnippet:"return tan(x);"}),mE={kernelName:Eh,backendName:"webgl",kernelFunc:gE};/**
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
 */const xE=se({opSnippet:`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`}),bE={kernelName:kh,backendName:"webgl",kernelFunc:xE};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */class wE{constructor(e,n){this.variableNames=["A"];const s=new Array(e.length);for(let i=0;i<s.length;i++)s[i]=e[i]*n[i];this.outputShape=s,this.rank=s.length;const r=me(this.rank),o=yE(e);this.userCode=`
      void main() {
        ${r} resRC = getOutputCoords();
        setOutput(getA(${o}));
      }
    `}}function yE(t){const e=t.length;if(e>5)throw Error(`Tile for rank ${e} is not yet supported`);if(e===1)return`imod(resRC, ${t[0]})`;const n=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],s=[];for(let r=0;r<t.length;r++)s.push(`imod(${n[r]}, ${t[r]})`);return s.join()}/**
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
 */function Gu(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{reps:o}=s;if(r.dtype==="string"||r.shape.length>5){const a=n.readSync(r.dataId),l=r.dtype==="string"?a.map(h=>Bn(h)):a,u=Oe(r.shape,r.dtype,l),d=Uw(u,o);return n.makeTensorInfo(d.shape,d.dtype,d.values)}const i=new wE(r.shape,o);return n.runWebGLProgram(i,[r],r.dtype)}const CE={kernelName:_r,backendName:"webgl",kernelFunc:Gu};class vE{constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"negativeInf",type:"float"},{name:"dir",type:"int"},{name:"inc",type:"int"}],this.outputShape=e,this.userCode=`
       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // We compare elements pair-wise within a group of size 2 * inc.
         // The comparing rule for each group alternates between ascending
         // and descending. Within each group, we compare each pair at
         // positions i and i+inc. To decide whether an element at position i
         // is x0 or x1, we mod it by 2 * inc, if the result is smaller than
         // inc, it is in the first half of the group, we denote it as x0,
         // otherwise we denote it as x1.
         // For example, as shown in the Bitonic top K paper referenced above,
         // Figure5(a) shows that element[1] is in the
         // second half of the group when group size is 2, but it is in the
         // first half of the group when group size is 4.

         bool isFirstInPair = imod(elemIdx, 2 * inc) < inc;
         int i = isFirstInPair ? elemIdx : elemIdx - inc;

         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + inc : int(getIndices(batch, i + inc));
         float x0 = i0 < n ? getX(batch, i0) : negativeInf;
         float x1 = i1 < n ? getX(batch, i1) : negativeInf;

         // Denotes which direction indices are in (ascending or descending).
         bool reverse = imod(elemIdx, 2 * dir) >= dir;
         bool isGreater = x0 > x1 || (x0 == x1 && i1 > i0);
         if (reverse == isGreater) { // Elements in opposite order of direction
           int iTemp = i0;
           i0 = i1;
           i1 = iTemp;
         }
         if (isFirstInPair) {
            setOutput(float(i0));
         } else {
            setOutput(float(i1));
         }
       }
     `}}class $E{constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"k",type:"int"}],this.outputShape=e,this.userCode=`
    void main() {
         // Takes max of indices (0, k), (1, k + 1), (2, k + 2) ...
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // The output size is half of the previous size.
         // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _ (k=4),
         // we only need to output the indices at positions |, the indices at
         // positions _ can be thrown away, see Figure5(b) After Phase 2
         // (Merge phase) in the Bitonic Top K paper referenced above.
         // For example, the paper shows we only need to output the orange bars.
         // The output sequence should look like this | | | | | | | |.
         // Because the sequence is halved, to map the output index back
         // to the previous sequence to find the corresponding value,
         // we need to double the index. When we double the index,
         // we basically interpolate a position, so 2i looks like
         // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k position
         // of each 2k positions by - elemIdx % k. E.g. for output at
         // index 4,5,6,7, we want to get the corresponding element at
         // original index 8,9,10,11, for output at index 8,9,10,11,
         // we want to get the corresponding element at original index
         // 16,17,18,19, so on and so forth.

         int i = elemIdx < k ? elemIdx : (elemIdx * 2 - imod(elemIdx, k));
         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + k : int(getIndices(batch, i + k));

         float x0 = getX(batch, i0);
         float x1 = i1 < n ? getX(batch, i1) : x0;

         setOutput(x0 >= x1 ? float(i0) : float(i1));
       }
     `}}/**
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
 */function en(t,e){e!==null&&t.disposeIntermediateTensorInfo(e)}function zu(t){let e=1;for(;e<t;)e*=2;return e}function IE(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{k:o,sorted:i}=s,c=S().getNumber("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD"),a=S().getNumber("TOPK_K_CPU_HANDOFF_THRESHOLD"),l=r.shape,u=l[l.length-1];if(n.shouldExecuteOnCPU([r])||u<c||o>a){const q=n.readSync(r.dataId),[ne,de]=Ww(q,l,r.dtype,o,i);return[n.makeTensorInfo(ne.shape,ne.dtype,ne.values),n.makeTensorInfo(de.shape,de.dtype,de.values)]}if(o===0)return l[l.length-1]=0,[n.makeTensorInfo(l,r.dtype,[]),n.makeTensorInfo(l,"int32",[])];if(u===1)return[r,ss({attrs:{shape:l,dtype:"int32",value:0},backend:n})];const d=n.texData.get(r.dataId),h=d!==null&&d.isPacked,f=h?n.unpackTensor(r):r,g=D(l)/u,m=P({inputs:{x:f},attrs:{shape:[g,u]},backend:n});h&&en(n,f);const x=zu(o),b=zu(u);let y=null;const C=()=>y===null?[m,m]:[m,y],v=(q,ne,de)=>{const He=C(),De=new vE(de),Ye=[[u],[y===null?1:0],[Number.NEGATIVE_INFINITY],[q],[ne]],ct=y;y=n.runWebGLProgram(De,He,"int32",Ye),en(n,ct)};for(let q=1;q<x;q*=2){const ne=q*2;for(let de=q;de>=1;de/=2)v(ne,de,[g,b])}for(let q=b;q>x;q/=2){const ne=C(),de=new $E([g,q/2]),De=[[u],[y===null?1:0],[x]],je=y;y=n.runWebGLProgram(de,ne,"int32",De),en(n,je);const Ye=x/2,ct=Ye*2;for(let tn=Ye;tn>=1;tn/=2)v(ct,tn,y.shape)}let R=y;y=Nn({inputs:{x:y},backend:n,attrs:{begin:0,size:[g,o]}}),en(n,R);let T=Au({inputs:{x:m,indices:y},backend:n,attrs:{axis:1,batchDims:1}});en(n,m);const _=l.slice(0,-1);_.push(o),R=y,y=P({inputs:{x:y},attrs:{shape:_},backend:n}),en(n,R);const M=T;return T=P({inputs:{x:T},attrs:{shape:_},backend:n}),en(n,M),[T,y]}const SE={kernelName:Th,backendName:"webgl",kernelFunc:IE};/**
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
 */class EE{constructor(e,n,s,r,o,i){this.variableNames=["Image","Transforms"],this.outputShape=i;const c=s==="nearest"?1:2;let a;switch(r){case"constant":a=1;break;case"reflect":a=2;break;case"wrap":a=3;break;case"nearest":a=4;break;default:a=1;break}this.userCode=`
            float mapCoord(float outCoord, float len) {
              float inCoord = outCoord;
              if(${a} == 2) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    if (inCoord < sz2) {
                      inCoord = sz2 * float(int(float(-inCoord / sz2))) +
                      inCoord;
                    }
                    inCoord = inCoord < -len ? inCoord + sz2 : -inCoord - 1.0;
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    inCoord -= sz2 * float(int(float(inCoord / sz2)));
                    if (inCoord >= len) {
                      inCoord = sz2 - inCoord - 1.0;
                    }
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${a} == 3) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord += len * (float(int(float(-inCoord / sz))) + 1.0);
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord -= len * float(int(float(inCoord / sz)));
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${a} == 4) {
                return clamp(outCoord, 0.0, len - 1.0);
              } else {
                return outCoord;
              }
            }

            float readWithFillValue(int batch, int coordY, int coordX,
              int channel) {
              float outputValue;
              if (0 <= coordY && coordY < ${e} && 0 <= coordX && coordX < ${n}) {
                  outputValue = getImage(batch, coordY, coordX, channel);
              } else {
                outputValue = float(${o});
              }
              return outputValue;
            }

            void main() {
              ivec4 coords = getOutputCoords();
              float outputValue;
              int batch = coords[0];
              int x = coords[2];
              int y = coords[1];
              int channel = coords[3];
              float xf = float(x);
              float yf = float(y);
              float a1 = getTransforms(batch, 0);
              float a2 = getTransforms(batch, 1);
              float a3 = getTransforms(batch, 2);
              float b1 = getTransforms(batch, 3);
              float b2 = getTransforms(batch, 4);
              float b3 = getTransforms(batch, 5);
              float c1 = getTransforms(batch, 6);
              float c2 = getTransforms(batch, 7);
              float projection = c1 * xf + c2 * yf + 1.0;
              if (projection == 0.0) {
                outputValue = float(${o});
              } else {
                float inX = (a1 * xf + a2 * yf + a3) / projection;
                float inY = (b1 * xf + b2 * yf + b3) / projection;
                float mapX = mapCoord(inX, float(${n}));
                float mapY = mapCoord(inY, float(${e}));

                if (${c} == 1) {
                  int coordY = int(round(mapY));
                  int coordX = int(round(mapX));
                  outputValue = readWithFillValue(batch, coordY, coordX,
                    channel);
                } else {
                  float yFloor = floor(mapY);
                  float xFloor = floor(mapX);
                  float yCeil = yFloor + 1.0;
                  float xCeil = xFloor + 1.0;
                  float valueYFloor = (xCeil - mapX) *
                  readWithFillValue(batch, int(yFloor), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yFloor), int(xCeil), channel);
                  float valueYCeil = (xCeil - mapX) *
                  readWithFillValue(batch, int(yCeil), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yCeil), int(xCeil), channel);
                  outputValue = (yCeil - mapY) * valueYFloor +
                  (mapY - yFloor) * valueYCeil;
                }
              }
              setOutput(outputValue);
            }
        `}}/**
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
 */function kE(t){const{inputs:e,backend:n,attrs:s}=t,{image:r,transforms:o}=e,{interpolation:i,fillMode:c,fillValue:a,outputShape:l}=s,[u,d,h,f]=r.shape,[p,g]=l??[d,h],m=[u,p,g,f],x=new EE(d,h,i,c,a,m);return n.runWebGLProgram(x,[r,o],"float32")}const TE={kernelName:Yi,backendName:"webgl",kernelFunc:kE};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function RE(t){const{inputs:e,attrs:n,backend:s}=t,{axis:r}=n,{x:o}=e;Yn(o,"unique"),console.warn("WARNING: ","UI might be locked temporarily as data is being downloaded");const i=s.readSync(o.dataId),{outputValues:c,outputShape:a,indices:l}=Gw(i,r,o.shape,o.dtype);return[s.makeTensorInfo(a,o.dtype,c),s.makeTensorInfo([l.length],"int32",l)]}const NE={kernelName:Rh,backendName:"webgl",kernelFunc:RE};/**
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
 */function AE(t){const{inputs:e,backend:n,attrs:s}=t,{value:r}=e;let{axis:o}=s;o<0&&(o+=r.shape.length);const i=r,c=i.shape.length,a=r.shape[o],l=new Array(c-1);let u=0;for(let g=0;g<c;g++)g!==o&&(l[u++]=i.shape[g]);const d=[],h=new Array(c).fill(0),f=i.shape.slice();f[o]=1;const p=new Array(a);for(let g=0;g<p.length;g++){h[o]=g;const m=Nn({inputs:{x:i},backend:n,attrs:{begin:h,size:f}}),x=P({inputs:{x:m},backend:n,attrs:{shape:l}});p[g]=x,d.push(m)}return d.forEach(g=>n.disposeIntermediateTensorInfo(g)),p}const _E={kernelName:Qi,backendName:"webgl",kernelFunc:AE};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */class DE{constructor(e,n){this.variableNames=["x","segmentIds"];const s=e.windowSize,r=e.batchSize,o=e.inSize,i=e.numSegments,c=i*Math.ceil(o/s);this.outputShape=[r,c];const a="0.0",l="sumValue",u=Math.floor(s/4)*4,d=s%4,h=`
        sumValue += dot(values, segFilter);
    `;let f="";o%s>0&&(f=`
        if (inIdx < 0 || inIdx >= ${o}) {
          return initializationValue;
        }
      `);let p="";o%s>0&&(p=`
        if (inIdx < 0 || inIdx >= ${o}) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = ${a};

      float getValue(int batch, int inIdx) {
        ${f}
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        ${p}
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          ${i})) * float(${s}));
        int currentSeg = int(mod(float(outIdx), float(${i})));

        float sumValue = 0.0;

        for (int i = 0; i < ${u}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          ${h}
        }

        int inIdx = inOffset + ${u};
        if (${d===1}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          ${h}
        } else if (${d===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          ${h}
        } else if (${d===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          ${h}
        }
        setOutput(${l});
      }
    `}}/**
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
 */function FE(t){const{inputs:e,backend:n,attrs:s}=t,{x:r,segmentIds:o}=e,{numSegments:i}=s,c=r.shape.length,a=[];let l=0;const u=Je([l],c);let d=r;u!=null&&(d=Ve({inputs:{x:r},backend:n,attrs:{perm:u}}),a.push(d),l=et(1,c)[0]);const h=el(d.shape,l,i),f=D([d.shape[l]]),p=P({inputs:{x:d},backend:n,attrs:{shape:[-1,f]}});a.push(p);const g=zr(r.dtype),m=(C,v,R,T,_)=>{const M=C.shape[0],q=C.shape[1],ne=Jc(q,_),de={windowSize:ne,inSize:q,batchSize:M,numSegments:_},He=new DE(de,v),De=n.compileAndRun(He,[C,R],T);if(a.push(De),De.shape[1]===_)return De;const je=Mu({backend:n,attrs:{start:0,stop:_,step:1,dtype:"float32"}}),Ye=Gu({inputs:{x:je},backend:n,attrs:{reps:[q/ne]}});return a.push(je),a.push(Ye),m(De,v,Ye,T,_)},x=m(p,"unsortedSegmentSum",o,g,i),b=P({inputs:{x},backend:n,attrs:{shape:h}});let y=b;if(u!=null){a.push(b);const C=po(u);y=Ve({inputs:{x:y},backend:n,attrs:{perm:C}})}return a.forEach(C=>n.disposeIntermediateTensorInfo(C)),y}const PE={kernelName:Nh,backendName:"webgl",kernelFunc:FE};/**
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
 */const OE=[Ly,My,Wy,Hy,qy,Yy,Zy,eC,rC,iC,lC,hC,gC,wC,vC,IC,EC,NC,_C,FC,LC,GC,HC,qC,ZC,ev,rv,by,av,hv,mv,vv,Iv,Ev,Tv,Nv,Dv,Pv,Lv,Mv,Uv,zv,Xv,Yv,Zv,t1,r1,i1,c1,d1,f1,m1,b1,w1,C1,$1,S1,k1,R1,A1,F1,L1,M1,W1,H1,q1,j1,xy,Q1,uv,J1,t$,s$,yy,o$,a$,l$,h$,g$,x$,w$,C$,I$,E$,T$,_$,F$,O$,V$,W$,z$,X$,K$,Z$,tI,oI,dI,Sy,gI,bI,CI,II,KC,EI,TI,NI,DI,LI,vy,MI,VI,jC,aI,WI,HI,KI,ky,ZI,tS,oS,cS,hS,pS,mS,bS,yS,$S,ES,RS,AS,FS,OS,WC,lI,BS,MS,US,GS,HS,qS,jS,QS,JS,tE,sE,oE,cE,uE,hE,pE,cI,Fy,mE,bE,CE,SE,TE,Py,NE,_E,PE,kI];for(const t of OE)sa(t);/**
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
 */var Hu=B(3242),Xu=B(6422),LE=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Nt=(t,e,n)=>new Promise((s,r)=>{var o=a=>{try{c(n.next(a))}catch(l){r(l)}},i=a=>{try{c(n.throw(a))}catch(l){r(l)}},c=a=>a.done?s(a.value):Promise.resolve(a.value).then(o,i);c((n=n.apply(t,e)).next())}),qu=LE((t,e)=>{e.exports={version:"1.4.4",license:"MIT",main:"dist/index.js",typings:"dist/index.d.ts",files:["dist","src/tflite","src/models"],scripts:{start:'concurrently "yarn dev" "yarn types"',dev:"node ../../scripts/dev","build:only":"node ../../scripts/build",build:"yarn build:only && yarn types:build",types:"tsc -w","types:build":"tsc -p tsconfig.json",test:"jest --maxWorkers=1 --passWithNoTests",lint:"eslint -c ../../.eslintrc .","lint:fix":"yarn lint --fix",prepare:"yarn build",size:"size-limit",analyze:"size-limit --why",format:"prettier --write src/**/*.ts"},peerDependencies:{"@100mslive/hms-video":"^0.2.0"},name:"@100mslive/hms-virtual-background",author:"ashish17",module:"dist/index.js",devDependencies:{"@100mslive/hms-video":"0.2.4"},dependencies:{"@tensorflow/tfjs-backend-webgl":"^3.3.0","@tensorflow/tfjs-core":"^3.3.0","@webassemblyjs/helper-wasm-bytecode":"^1.11.0","@webassemblyjs/wasm-gen":"^1.11.0","gifuct-js":"^2.1.2","wasm-check":"^2.0.2"},eslintIgnore:["tflite.js","tflite-simd.js","tflite.wasm","tflite-simd.wasm","defineTFLite.ts","importing.test.ts"],gitHead:"a209b16cf484791322b36f5499339e91f960d26b"}}),BE=qu(),Ko=`https://unpkg.com/${BE.name}/src`,hr="VBProcessor",ME="tflite/tflite.js",VE="tflite/tflite-simd.js",UE="models/selfie_segmentation_landscape.tflite",Ku=t=>new Promise(function(e,n){let s=document.createElement("script");s.src=t,s.onload=e,s.onerror=n,document.head.appendChild(s)}),WE=()=>Nt(void 0,null,function*(){let t,e=Ko+"/"+VE;yield Ku(e);try{t=yield createTFLiteSIMDModule()}catch{console.warn("SIMD not supported. You may experience poor virtual background effect."),e=Ko+"/"+ME,yield Ku(e),t=yield createTFLiteModule()}return t}),GE=()=>Nt(void 0,null,function*(){let t=Ko+"/"+UE,[e,n]=yield Promise.all([WE(),fetch(t)]),s=yield n.arrayBuffer(),r=e._getModelBufferMemoryOffset();return e.HEAPU8.set(new Uint8Array(s),r),e._loadModel(s.byteLength),console.debug(hr,"Input memory offset:",e._getInputMemoryOffset()),console.debug(hr,"Input height:",e._getInputHeight()),console.debug(hr,"Input width:",e._getInputWidth()),console.debug(hr,"Input channels:",e._getInputChannelCount()),e}),fr="VBProcessor",zE=33,HE=qu(),XE=214,qE=855,KE=120,jE=720,YE=class{constructor(t,e=!1){this.backgroundType="none",this.background=t,this.enableSharpening=e,this.backgroundImage=null,this.backgroundVideo=null,this.personMaskWidth=256,this.personMaskHeight=144,this.isVirtualBackground=!1,this.blurValue="10px",this.loadModelCalled=!1,this.tfLite=null,this.modelName="landscape-segmentation",this.outputCtx=null,this.input=null,this.output=null,this.timerID=0,this.imageAspectRatio=1,this.personMaskPixelCount=this.personMaskWidth*this.personMaskHeight,this.personMask=new ImageData(this.personMaskWidth,this.personMaskHeight),this.personMaskCanvas=document.createElement("canvas"),this.personMaskCanvas.width=this.personMaskWidth,this.personMaskCanvas.height=this.personMaskHeight,this.personMaskCtx=this.personMaskCanvas.getContext("2d"),this.filters={},this.gifFrames=null,this.gifFramesIndex=0,this.gifFrameImageData=null,this.tempGifCanvas=document.createElement("canvas"),this.tempGifContext=this.tempGifCanvas.getContext("2d"),this.giflocalCount=0,this.enableSharpening=e,this.log(fr,"Virtual Background plugin created"),this.setBackground(this.background)}init(){return Nt(this,null,function*(){this.loadModelCalled?yield this.tfLitePromise:(this.log(fr,"PREVIOUS LOADED MODEL IS ",this.tfLite),this.loadModelCalled=!0,this.tfLitePromise=GE(),this.tfLite=yield this.tfLitePromise),this.enableSharpening&&this.initSharpenFilter()})}isSupported(){return navigator.userAgent.indexOf("Chrome")!==-1||navigator.userAgent.indexOf("Firefox")!==-1||navigator.userAgent.indexOf("Edg")!==-1||navigator.userAgent.indexOf("Edge")!==-1}checkSupport(){let t={};return["Chrome","Firefox","Edg","Edge"].some(e=>navigator.userAgent.indexOf(e)!==-1)?t.isSupported=!0:(t.isSupported=!1,t.errType=Xu.Vy.PLATFORM_NOT_SUPPORTED,t.errMsg="browser not supported for plugin, see docs"),t}getName(){return HE.name}getPluginType(){return Xu.MQ.TRANSFORM}setBackground(t){return Nt(this,null,function*(){if(t!=="")if(t==="none")this.log(fr,"setting background to :",t),this.background="none",this.backgroundType="none",this.isVirtualBackground=!1;else if(t==="blur")this.log(fr,"setting background to :",t),this.background="blur",this.backgroundType="blur",this.isVirtualBackground=!1;else if(t instanceof HTMLImageElement){this.log("setting background to image",t);let e=yield this.setImage(t);if(!e||!e.complete||!e.naturalHeight)throw new Error("Invalid image. Provide a valid and successfully loaded HTMLImageElement");this.isVirtualBackground=!0,this.backgroundImage=e,this.backgroundType="image"}else if(t instanceof HTMLVideoElement)this.log("setting background to video",t),this.backgroundVideo=t,this.backgroundVideo.crossOrigin="anonymous",this.backgroundVideo.muted=!0,this.backgroundVideo.loop=!0,this.backgroundVideo.oncanplaythrough=()=>Nt(this,null,function*(){this.backgroundVideo!=null&&(yield this.backgroundVideo.play(),this.isVirtualBackground=!0,this.backgroundType="video")});else if(console.log("setting gif to background"),this.gifFrames=yield this.setGiF(t),this.gifFrames!=null&&this.gifFrames.length>0)this.backgroundType="gif",this.isVirtualBackground=!0;else throw new Error("Invalid background supplied, see the docs to check supported background type");else throw new Error("Invalid background supplied, see the docs to check supported background type")})}stop(){var t,e;this.isVirtualBackground&&((t=this.backgroundImage)==null||t.removeAttribute("src"),(e=this.backgroundVideo)==null||e.removeAttribute("src"),this.backgroundType==="video"&&(this.backgroundVideo.loop=!1,this.backgroundVideo=null)),this.outputCtx&&(this.outputCtx.fillStyle="rgb(0, 0, 0)",this.outputCtx.fillRect(0,0,this.output.width,this.output.height)),this.gifFrameImageData=null,this.gifFrames=null,this.giflocalCount=0,this.gifFramesIndex=0}processVideoFrame(t,e,n){if(!t||!e)throw new Error("Plugin invalid input/output");this.input=t,this.output=e;let s=e.getContext("2d");if(s.canvas.width!==t.width&&(s.canvas.width=t.width),s.canvas.height!==t.height&&(s.canvas.height=t.height),this.backgroundType==="video"&&(this.backgroundVideo.width=t.width,this.backgroundVideo.height=t.height),this.outputCtx=s,this.imageAspectRatio=t.width/t.height,this.imageAspectRatio<=0)throw new Error("Invalid input width/height");let r=()=>Nt(this,null,function*(){yield this.runSegmentation(n)});this.background==="none"&&!this.isVirtualBackground?(this.outputCtx.globalCompositeOperation="copy",this.outputCtx.filter="none",this.outputCtx.drawImage(t,0,0,t.width,t.height)):r()}setImage(t){return Nt(this,null,function*(){return t.crossOrigin="anonymous",new Promise((e,n)=>{t.onload=()=>e(t),t.onerror=n})})}setGiF(t){return fetch(t).then(e=>e.arrayBuffer()).then(e=>(0,Hu.vq)(e)).then(e=>(0,Hu.zw)(e,!0))}log(t,...e){console.info(t,...e)}resizeInputData(){this.personMaskCtx.drawImage(this.input,0,0,this.input.width,this.input.height,0,0,this.personMaskWidth,this.personMaskHeight);let t=this.personMaskCtx.getImageData(0,0,this.personMaskWidth,this.personMaskHeight),e=this.tfLite._getInputMemoryOffset()/4;for(let n=0;n<this.personMaskPixelCount;n++)this.tfLite.HEAPF32[e+n*3]=t.data[n*4]/255,this.tfLite.HEAPF32[e+n*3+1]=t.data[n*4+1]/255,this.tfLite.HEAPF32[e+n*3+2]=t.data[n*4+2]/255}infer(t){t||this.tfLite._runInference();let e=this.tfLite._getOutputMemoryOffset()/4;for(let n=0;n<this.personMaskPixelCount;n++)if(this.modelName==="meet"){let s=this.tfLite.HEAPF32[e+n*2],r=this.tfLite.HEAPF32[e+n*2+1],o=Math.max(s,r),i=Math.exp(s-o),c=Math.exp(r-o);this.personMask.data[n*4+3]=255*c/(i+c)}else if(this.modelName==="landscape-segmentation"){let s=this.tfLite.HEAPF32[e+n];this.personMask.data[n*4+3]=255*s}this.personMaskCtx.putImageData(this.personMask,0,0)}postProcessing(){this.outputCtx.globalCompositeOperation="copy",this.outputCtx.filter="none",this.isVirtualBackground?this.outputCtx.filter="blur(4px)":this.outputCtx.filter="blur(8px)",this.drawPersonMask(),this.outputCtx.globalCompositeOperation="source-in",this.outputCtx.filter="none",this.outputCtx.drawImage(this.input,0,0),this.enableSharpening&&this.output.width>XE&&this.output.height>KE&&this.output.width<qE&&this.output.height<jE&&this.sharpenFilter(),this.drawSegmentedBackground()}sharpenFilter(){let t=this.outputCtx.getImageData(0,0,this.output.width,this.output.height),e=this.filters.convolute(t);this.outputCtx.putImageData(e,0,0)}drawPersonMask(){this.outputCtx.drawImage(this.personMaskCanvas,0,0,this.personMaskWidth,this.personMaskHeight,0,0,this.output.width,this.output.height)}drawSegmentedBackground(){this.outputCtx.globalCompositeOperation="destination-over",this.outputCtx.imageSmoothingEnabled=!0,this.outputCtx.imageSmoothingQuality="high",this.isVirtualBackground?this.backgroundType==="video"&&this.backgroundVideo!=null&&this.backgroundVideo.readyState>=4?this.fitVideoToBackground():this.backgroundType==="image"?this.fitImageToBackground():this.backgroundType==="gif"&&(this.giflocalCount>this.gifFrames[this.gifFramesIndex].delay/zE?(this.gifFramesIndex++,this.gifFramesIndex>=this.gifFrames.length&&(this.gifFramesIndex=0),this.giflocalCount=0):this.giflocalCount++,this.fitGifToBackground()):this.addBlurToBackground()}runSegmentation(t){return Nt(this,null,function*(){this.tfLite&&(this.resizeInputData(),yield this.infer(t),this.postProcessing())})}fitVideoToBackground(){this.fitData(this.backgroundVideo,this.backgroundVideo.videoWidth,this.backgroundVideo.videoHeight)}fitImageToBackground(){this.fitData(this.backgroundImage,this.backgroundImage.width,this.backgroundImage.height)}fitGifToBackground(){if(this.gifFrameImageData==null){let t=this.gifFrames[this.gifFramesIndex].dims;this.tempGifCanvas.width=t.width,this.tempGifCanvas.height=t.height,this.gifFrameImageData=this.tempGifContext.createImageData(t.width,t.height)}this.gifFrameImageData.data.set(this.gifFrames[this.gifFramesIndex].patch),this.tempGifContext.putImageData(this.gifFrameImageData,0,0),this.fitData(this.tempGifCanvas,this.gifFrameImageData.width,this.gifFrameImageData.height)}fitData(t,e,n){let s,r,o,i;e/n<this.imageAspectRatio?(s=e,r=e/this.imageAspectRatio,o=0,i=(n-r)/2):(r=n,s=n*this.imageAspectRatio,i=0,o=(e-s)/2),this.outputCtx.drawImage(t,o,i,s,r,0,0,this.output.width,this.output.height)}addBlurToBackground(){return Nt(this,null,function*(){let t="15px";this.input.width<=160?t="5px":this.input.width<=320?t="10px":this.input.width<=640?t="15px":this.input.width<=960?t="20px":this.input.width<=1280?t="25px":this.input.width<=1920&&(t="30px"),this.outputCtx.filter=`blur(${t})`,this.outputCtx.drawImage(this.input,0,0,this.output.width,this.output.height)})}initSharpenFilter(){this.filters.tmpCanvas=document.createElement("canvas"),this.filters.tmpCtx=this.filters.tmpCanvas.getContext("2d"),this.filters.createImageData=(t,e)=>this.filters.tmpCtx.createImageData(t,e),this.filters.convolute=(t,e=[0,-1,0,-1,5,-1,0,-1,0],n)=>{let s=Math.round(Math.sqrt(e.length)),r=Math.floor(s/2),o=t.data,i=t.width,c=t.height,a=i,l=c,u=this.filters.createImageData(a,l),d=u.data,h=n?1:0;for(let f=0;f<l;f=f+1)for(let p=0;p<a;p=p+1){let g=(f*a+p)*4;if(o[g+3]!==0&&p<a&&f<l){let m=f,x=p,b=0,y=0,C=0,v=0;for(let R=0;R<s;R++)for(let T=0;T<s;T++){let _=m+R-r,M=x+T-r;if(_>=0&&_<c&&M>=0&&M<i){let q=(_*i+M)*4,ne=e[R*s+T];b+=o[q]*ne,y+=o[q+1]*ne,C+=o[q+2]*ne,v+=o[q+3]*ne}}d[g]=b,d[g+1]=y,d[g+2]=C,d[g+3]=v+h*(255-v)}}return u}}}},6474:(At,U)=>{"use strict";Object.defineProperty(U,"__esModule",{value:!0}),U.deinterlace=void 0;var B=function(W,ie){for(var ae=new Array(W.length),Q=W.length/ie,G=function(z,K){var H=W.slice(K*ie,(K+1)*ie);ae.splice.apply(ae,[z*ie,ie].concat(H))},he=[0,4,2,1],ee=[8,8,4,2],j=0,ce=0;ce<4;ce++)for(var V=he[ce];V<Q;V+=ee[ce])G(V,j),j++;return ae};U.deinterlace=B},3242:(At,U,B)=>{"use strict";var J;J={value:!0},U.zw=J=U.vq=void 0;var W=he(B(2075)),ie=B(7979),ae=B(3095),Q=B(6474),G=B(1358);function he(F){return F&&F.__esModule?F:{default:F}}var ee=function(z){var K=new Uint8Array(z);return(0,ie.parse)((0,ae.buildStream)(K),W.default)};U.vq=ee;var j=function(z){for(var K=z.pixels.length,H=new Uint8ClampedArray(K*4),Y=0;Y<K;Y++){var le=Y*4,$=z.pixels[Y],te=z.colorTable[$]||[0,0,0];H[le]=te[0],H[le+1]=te[1],H[le+2]=te[2],H[le+3]=$!==z.transparentIndex?255:0}return H},ce=function(z,K,H){if(!z.image){console.warn("gif frame does not have associated image.");return}var Y=z.image,le=Y.descriptor.width*Y.descriptor.height,$=(0,G.lzw)(Y.data.minCodeSize,Y.data.blocks,le);Y.descriptor.lct.interlaced&&($=(0,Q.deinterlace)($,Y.descriptor.width));var te={pixels:$,dims:{top:z.image.descriptor.top,left:z.image.descriptor.left,width:z.image.descriptor.width,height:z.image.descriptor.height}};return Y.descriptor.lct&&Y.descriptor.lct.exists?te.colorTable=Y.lct:te.colorTable=K,z.gce&&(te.delay=(z.gce.delay||10)*10,te.disposalType=z.gce.extras.disposal,z.gce.extras.transparentColorGiven&&(te.transparentIndex=z.gce.transparentColorIndex)),H&&(te.patch=j(te)),te};J=ce;var V=function(z,K){return z.frames.filter(function(H){return H.image}).map(function(H){return ce(H,z.gct,K)})};U.zw=V},1358:(At,U)=>{"use strict";Object.defineProperty(U,"__esModule",{value:!0}),U.lzw=void 0;var B=function(W,ie,ae){var Q=4096,G=-1,he=ae,ee,j,ce,V,F,z,K,ve,H,Y,D,le,E,w,Z,O,$=new Array(ae),te=new Array(Q),Ue=new Array(Q),ke=new Array(Q+1);for(le=W,j=1<<le,F=j+1,ee=j+2,K=G,V=le+1,ce=(1<<V)-1,H=0;H<j;H++)te[H]=0,Ue[H]=H;var D,ve,k,E,w,O,Z;for(D=ve=k=E=w=O=Z=0,Y=0;Y<he;){if(w===0){if(ve<V){D+=ie[Z]<<ve,ve+=8,Z++;continue}if(H=D&ce,D>>=V,ve-=V,H>ee||H==F)break;if(H==j){V=le+1,ce=(1<<V)-1,ee=j+2,K=G;continue}if(K==G){ke[w++]=Ue[H],K=H,E=H;continue}for(z=H,H==ee&&(ke[w++]=E,H=K);H>j;)ke[w++]=Ue[H],H=te[H];E=Ue[H]&255,ke[w++]=E,ee<Q&&(te[ee]=K,Ue[ee]=E,ee++,(ee&ce)===0&&ee<Q&&(V++,ce+=ee)),K=z}w--,$[O++]=ke[w],Y++}for(Y=O;Y<he;Y++)$[Y]=0;return $};U.lzw=B},7979:(At,U)=>{"use strict";Object.defineProperty(U,"__esModule",{value:!0}),U.loop=U.conditional=U.parse=void 0;var B=function ie(ae,Q){var G=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},he=arguments.length>3&&arguments[3]!==void 0?arguments[3]:G;if(Array.isArray(Q))Q.forEach(function(j){return ie(ae,j,G,he)});else if(typeof Q=="function")Q(ae,G,he,ie);else{var ee=Object.keys(Q)[0];Array.isArray(Q[ee])?(he[ee]={},ie(ae,Q[ee],G,he[ee])):he[ee]=Q[ee](ae,G,he,ie)}return G};U.parse=B;var J=function(ae,Q){return function(G,he,ee,j){Q(G,he,ee)&&j(G,ae,he,ee)}};U.conditional=J;var W=function(ae,Q){return function(G,he,ee,j){for(var ce=[],V=G.pos;Q(G,he,ee);){var F={};if(j(G,ae,he,F),G.pos===V)break;V=G.pos,ce.push(F)}return ce}};U.loop=W},3095:(At,U)=>{"use strict";Object.defineProperty(U,"__esModule",{value:!0}),U.readBits=U.readArray=U.readUnsigned=U.readString=U.peekBytes=U.readBytes=U.peekByte=U.readByte=U.buildStream=void 0;var B=function(V){return{data:V,pos:0}};U.buildStream=B;var J=function(){return function(V){return V.data[V.pos++]}};U.readByte=J;var W=function(){var V=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return function(F){return F.data[F.pos+V]}};U.peekByte=W;var ie=function(V){return function(F){return F.data.subarray(F.pos,F.pos+=V)}};U.readBytes=ie;var ae=function(V){return function(F){return F.data.subarray(F.pos,F.pos+V)}};U.peekBytes=ae;var Q=function(V){return function(F){return Array.from(ie(V)(F)).map(function(z){return String.fromCharCode(z)}).join("")}};U.readString=Q;var G=function(V){return function(F){var z=ie(2)(F);return V?(z[1]<<8)+z[0]:(z[0]<<8)+z[1]}};U.readUnsigned=G;var he=function(V,F){return function(z,K,H){for(var Y=typeof F=="function"?F(z,K,H):F,le=ie(V),$=new Array(Y),te=0;te<Y;te++)$[te]=le(z);return $}};U.readArray=he;var ee=function(V,F,z){for(var K=0,H=0;H<z;H++)K+=V[F+H]&&Math.pow(2,z-H-1);return K},j=function(V){return function(F){for(var z=J()(F),K=new Array(8),H=0;H<8;H++)K[7-H]=!!(z&1<<H);return Object.keys(V).reduce(function(Y,le){var $=V[le];return $.length?Y[le]=ee(K,$.index,$.length):Y[le]=K[$.index],Y},{})}};U.readBits=j},2075:(At,U,B)=>{"use strict";Object.defineProperty(U,"__esModule",{value:!0}),U.default=void 0;var J=B(7979),W=B(3095),ie={blocks:function(F){for(var z=0,K=[],H=F.data.length,Y=0,le=(0,W.readByte)()(F);le!==z&&le;le=(0,W.readByte)()(F)){if(F.pos+le>=H){var $=H-F.pos;K.push((0,W.readBytes)($)(F)),Y+=$;break}K.push((0,W.readBytes)(le)(F)),Y+=le}for(var te=new Uint8Array(Y),Ue=0,ke=0;ke<K.length;ke++)te.set(K[ke],Ue),Ue+=K[ke].length;return te}},ae=(0,J.conditional)({gce:[{codes:(0,W.readBytes)(2)},{byteSize:(0,W.readByte)()},{extras:(0,W.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,W.readUnsigned)(!0)},{transparentColorIndex:(0,W.readByte)()},{terminator:(0,W.readByte)()}]},function(V){var F=(0,W.peekBytes)(2)(V);return F[0]===33&&F[1]===249}),Q=(0,J.conditional)({image:[{code:(0,W.readByte)()},{descriptor:[{left:(0,W.readUnsigned)(!0)},{top:(0,W.readUnsigned)(!0)},{width:(0,W.readUnsigned)(!0)},{height:(0,W.readUnsigned)(!0)},{lct:(0,W.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,J.conditional)({lct:(0,W.readArray)(3,function(V,F,z){return Math.pow(2,z.descriptor.lct.size+1)})},function(V,F,z){return z.descriptor.lct.exists}),{data:[{minCodeSize:(0,W.readByte)()},ie]}]},function(V){return(0,W.peekByte)()(V)===44}),G=(0,J.conditional)({text:[{codes:(0,W.readBytes)(2)},{blockSize:(0,W.readByte)()},{preData:function(F,z,K){return(0,W.readBytes)(K.text.blockSize)(F)}},ie]},function(V){var F=(0,W.peekBytes)(2)(V);return F[0]===33&&F[1]===1}),he=(0,J.conditional)({application:[{codes:(0,W.readBytes)(2)},{blockSize:(0,W.readByte)()},{id:function(F,z,K){return(0,W.readString)(K.blockSize)(F)}},ie]},function(V){var F=(0,W.peekBytes)(2)(V);return F[0]===33&&F[1]===255}),ee=(0,J.conditional)({comment:[{codes:(0,W.readBytes)(2)},ie]},function(V){var F=(0,W.peekBytes)(2)(V);return F[0]===33&&F[1]===254}),j=[{header:[{signature:(0,W.readString)(3)},{version:(0,W.readString)(3)}]},{lsd:[{width:(0,W.readUnsigned)(!0)},{height:(0,W.readUnsigned)(!0)},{gct:(0,W.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,W.readByte)()},{pixelAspectRatio:(0,W.readByte)()}]},(0,J.conditional)({gct:(0,W.readArray)(3,function(V,F){return Math.pow(2,F.lsd.gct.size+1)})},function(V,F){return F.lsd.gct.exists}),{frames:(0,J.loop)([ae,he,ee,Q,G],function(V){var F=(0,W.peekByte)()(V);return F===33||F===44})}],ce=j;U.default=ce},3968:At=>{At.exports=B;var U=null;try{U=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function B(E,w,O){this.low=E|0,this.high=w|0,this.unsigned=!!O}B.prototype.__isLong__,Object.defineProperty(B.prototype,"__isLong__",{value:!0});function J(E){return(E&&E.__isLong__)===!0}B.isLong=J;var W={},ie={};function ae(E,w){var O,Z,fe;return w?(E>>>=0,(fe=0<=E&&E<256)&&(Z=ie[E],Z)?Z:(O=G(E,(E|0)<0?-1:0,!0),fe&&(ie[E]=O),O)):(E|=0,(fe=-128<=E&&E<128)&&(Z=W[E],Z)?Z:(O=G(E,E<0?-1:0,!1),fe&&(W[E]=O),O))}B.fromInt=ae;function Q(E,w){if(isNaN(E))return w?le:Y;if(w){if(E<0)return le;if(E>=z)return D}else{if(E<=-K)return ve;if(E+1>=K)return ke}return E<0?Q(-E,w).neg():G(E%F|0,E/F|0,w)}B.fromNumber=Q;function G(E,w,O){return new B(E,w,O)}B.fromBits=G;var he=Math.pow;function ee(E,w,O){if(E.length===0)throw Error("empty string");if(E==="NaN"||E==="Infinity"||E==="+Infinity"||E==="-Infinity")return Y;if(typeof w=="number"?(O=w,w=!1):w=!!w,O=O||10,O<2||36<O)throw RangeError("radix");var Z;if((Z=E.indexOf("-"))>0)throw Error("interior hyphen");if(Z===0)return ee(E.substring(1),w,O).neg();for(var fe=Q(he(O,8)),pe=Y,Se=0;Se<E.length;Se+=8){var re=Math.min(8,E.length-Se),Ee=parseInt(E.substring(Se,Se+re),O);if(re<8){var xe=Q(he(O,re));pe=pe.mul(xe).add(Q(Ee))}else pe=pe.mul(fe),pe=pe.add(Q(Ee))}return pe.unsigned=w,pe}B.fromString=ee;function j(E,w){return typeof E=="number"?Q(E,w):typeof E=="string"?ee(E,w):G(E.low,E.high,typeof w=="boolean"?w:E.unsigned)}B.fromValue=j;var ce=1<<16,V=1<<24,F=ce*ce,z=F*F,K=z/2,H=ae(V),Y=ae(0);B.ZERO=Y;var le=ae(0,!0);B.UZERO=le;var $=ae(1);B.ONE=$;var te=ae(1,!0);B.UONE=te;var Ue=ae(-1);B.NEG_ONE=Ue;var ke=G(-1,2147483647,!1);B.MAX_VALUE=ke;var D=G(-1,-1,!0);B.MAX_UNSIGNED_VALUE=D;var ve=G(0,-2147483648,!1);B.MIN_VALUE=ve;var k=B.prototype;k.toInt=function(){return this.unsigned?this.low>>>0:this.low},k.toNumber=function(){return this.unsigned?(this.high>>>0)*F+(this.low>>>0):this.high*F+(this.low>>>0)},k.toString=function(w){if(w=w||10,w<2||36<w)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(ve)){var O=Q(w),Z=this.div(O),fe=Z.mul(O).sub(this);return Z.toString(w)+fe.toInt().toString(w)}else return"-"+this.neg().toString(w);for(var pe=Q(he(w,6),this.unsigned),Se=this,re="";;){var Ee=Se.div(pe),xe=Se.sub(Ee.mul(pe)).toInt()>>>0,oe=xe.toString(w);if(Se=Ee,Se.isZero())return oe+re;for(;oe.length<6;)oe="0"+oe;re=""+oe+re}},k.getHighBits=function(){return this.high},k.getHighBitsUnsigned=function(){return this.high>>>0},k.getLowBits=function(){return this.low},k.getLowBitsUnsigned=function(){return this.low>>>0},k.getNumBitsAbs=function(){if(this.isNegative())return this.eq(ve)?64:this.neg().getNumBitsAbs();for(var w=this.high!=0?this.high:this.low,O=31;O>0&&(w&1<<O)==0;O--);return this.high!=0?O+33:O+1},k.isZero=function(){return this.high===0&&this.low===0},k.eqz=k.isZero,k.isNegative=function(){return!this.unsigned&&this.high<0},k.isPositive=function(){return this.unsigned||this.high>=0},k.isOdd=function(){return(this.low&1)===1},k.isEven=function(){return(this.low&1)===0},k.equals=function(w){return J(w)||(w=j(w)),this.unsigned!==w.unsigned&&this.high>>>31===1&&w.high>>>31===1?!1:this.high===w.high&&this.low===w.low},k.eq=k.equals,k.notEquals=function(w){return!this.eq(w)},k.neq=k.notEquals,k.ne=k.notEquals,k.lessThan=function(w){return this.comp(w)<0},k.lt=k.lessThan,k.lessThanOrEqual=function(w){return this.comp(w)<=0},k.lte=k.lessThanOrEqual,k.le=k.lessThanOrEqual,k.greaterThan=function(w){return this.comp(w)>0},k.gt=k.greaterThan,k.greaterThanOrEqual=function(w){return this.comp(w)>=0},k.gte=k.greaterThanOrEqual,k.ge=k.greaterThanOrEqual,k.compare=function(w){if(J(w)||(w=j(w)),this.eq(w))return 0;var O=this.isNegative(),Z=w.isNegative();return O&&!Z?-1:!O&&Z?1:this.unsigned?w.high>>>0>this.high>>>0||w.high===this.high&&w.low>>>0>this.low>>>0?-1:1:this.sub(w).isNegative()?-1:1},k.comp=k.compare,k.negate=function(){return!this.unsigned&&this.eq(ve)?ve:this.not().add($)},k.neg=k.negate,k.add=function(w){J(w)||(w=j(w));var O=this.high>>>16,Z=this.high&65535,fe=this.low>>>16,pe=this.low&65535,Se=w.high>>>16,re=w.high&65535,Ee=w.low>>>16,xe=w.low&65535,oe=0,Xe=0,Te=0,Fe=0;return Fe+=pe+xe,Te+=Fe>>>16,Fe&=65535,Te+=fe+Ee,Xe+=Te>>>16,Te&=65535,Xe+=Z+re,oe+=Xe>>>16,Xe&=65535,oe+=O+Se,oe&=65535,G(Te<<16|Fe,oe<<16|Xe,this.unsigned)},k.subtract=function(w){return J(w)||(w=j(w)),this.add(w.neg())},k.sub=k.subtract,k.multiply=function(w){if(this.isZero())return Y;if(J(w)||(w=j(w)),U){var O=U.mul(this.low,this.high,w.low,w.high);return G(O,U.get_high(),this.unsigned)}if(w.isZero())return Y;if(this.eq(ve))return w.isOdd()?ve:Y;if(w.eq(ve))return this.isOdd()?ve:Y;if(this.isNegative())return w.isNegative()?this.neg().mul(w.neg()):this.neg().mul(w).neg();if(w.isNegative())return this.mul(w.neg()).neg();if(this.lt(H)&&w.lt(H))return Q(this.toNumber()*w.toNumber(),this.unsigned);var Z=this.high>>>16,fe=this.high&65535,pe=this.low>>>16,Se=this.low&65535,re=w.high>>>16,Ee=w.high&65535,xe=w.low>>>16,oe=w.low&65535,Xe=0,Te=0,Fe=0,We=0;return We+=Se*oe,Fe+=We>>>16,We&=65535,Fe+=pe*oe,Te+=Fe>>>16,Fe&=65535,Fe+=Se*xe,Te+=Fe>>>16,Fe&=65535,Te+=fe*oe,Xe+=Te>>>16,Te&=65535,Te+=pe*xe,Xe+=Te>>>16,Te&=65535,Te+=Se*Ee,Xe+=Te>>>16,Te&=65535,Xe+=Z*oe+fe*xe+pe*Ee+Se*re,Xe&=65535,G(Fe<<16|We,Xe<<16|Te,this.unsigned)},k.mul=k.multiply,k.divide=function(w){if(J(w)||(w=j(w)),w.isZero())throw Error("division by zero");if(U){if(!this.unsigned&&this.high===-2147483648&&w.low===-1&&w.high===-1)return this;var O=(this.unsigned?U.div_u:U.div_s)(this.low,this.high,w.low,w.high);return G(O,U.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?le:Y;var Z,fe,pe;if(this.unsigned){if(w.unsigned||(w=w.toUnsigned()),w.gt(this))return le;if(w.gt(this.shru(1)))return te;pe=le}else{if(this.eq(ve)){if(w.eq($)||w.eq(Ue))return ve;if(w.eq(ve))return $;var Se=this.shr(1);return Z=Se.div(w).shl(1),Z.eq(Y)?w.isNegative()?$:Ue:(fe=this.sub(w.mul(Z)),pe=Z.add(fe.div(w)),pe)}else if(w.eq(ve))return this.unsigned?le:Y;if(this.isNegative())return w.isNegative()?this.neg().div(w.neg()):this.neg().div(w).neg();if(w.isNegative())return this.div(w.neg()).neg();pe=Y}for(fe=this;fe.gte(w);){Z=Math.max(1,Math.floor(fe.toNumber()/w.toNumber()));for(var re=Math.ceil(Math.log(Z)/Math.LN2),Ee=re<=48?1:he(2,re-48),xe=Q(Z),oe=xe.mul(w);oe.isNegative()||oe.gt(fe);)Z-=Ee,xe=Q(Z,this.unsigned),oe=xe.mul(w);xe.isZero()&&(xe=$),pe=pe.add(xe),fe=fe.sub(oe)}return pe},k.div=k.divide,k.modulo=function(w){if(J(w)||(w=j(w)),U){var O=(this.unsigned?U.rem_u:U.rem_s)(this.low,this.high,w.low,w.high);return G(O,U.get_high(),this.unsigned)}return this.sub(this.div(w).mul(w))},k.mod=k.modulo,k.rem=k.modulo,k.not=function(){return G(~this.low,~this.high,this.unsigned)},k.and=function(w){return J(w)||(w=j(w)),G(this.low&w.low,this.high&w.high,this.unsigned)},k.or=function(w){return J(w)||(w=j(w)),G(this.low|w.low,this.high|w.high,this.unsigned)},k.xor=function(w){return J(w)||(w=j(w)),G(this.low^w.low,this.high^w.high,this.unsigned)},k.shiftLeft=function(w){return J(w)&&(w=w.toInt()),(w&=63)===0?this:w<32?G(this.low<<w,this.high<<w|this.low>>>32-w,this.unsigned):G(0,this.low<<w-32,this.unsigned)},k.shl=k.shiftLeft,k.shiftRight=function(w){return J(w)&&(w=w.toInt()),(w&=63)===0?this:w<32?G(this.low>>>w|this.high<<32-w,this.high>>w,this.unsigned):G(this.high>>w-32,this.high>=0?0:-1,this.unsigned)},k.shr=k.shiftRight,k.shiftRightUnsigned=function(w){if(J(w)&&(w=w.toInt()),w&=63,w===0)return this;var O=this.high;if(w<32){var Z=this.low;return G(Z>>>w|O<<32-w,O>>>w,this.unsigned)}else return w===32?G(O,0,this.unsigned):G(O>>>w-32,0,this.unsigned)},k.shru=k.shiftRightUnsigned,k.shr_u=k.shiftRightUnsigned,k.toSigned=function(){return this.unsigned?G(this.low,this.high,!1):this},k.toUnsigned=function(){return this.unsigned?this:G(this.low,this.high,!0)},k.toBytes=function(w){return w?this.toBytesLE():this.toBytesBE()},k.toBytesLE=function(){var w=this.high,O=this.low;return[O&255,O>>>8&255,O>>>16&255,O>>>24,w&255,w>>>8&255,w>>>16&255,w>>>24]},k.toBytesBE=function(){var w=this.high,O=this.low;return[w>>>24,w>>>16&255,w>>>8&255,w&255,O>>>24,O>>>16&255,O>>>8&255,O&255]},B.fromBytes=function(w,O,Z){return Z?B.fromBytesLE(w,O):B.fromBytesBE(w,O)},B.fromBytesLE=function(w,O){return new B(w[0]|w[1]<<8|w[2]<<16|w[3]<<24,w[4]|w[5]<<8|w[6]<<16|w[7]<<24,O)},B.fromBytesBE=function(w,O){return new B(w[4]<<24|w[5]<<16|w[6]<<8|w[7],w[0]<<24|w[1]<<16|w[2]<<8|w[3],O)}}}]);

//# sourceMappingURL=520.ea2ef471.js.map