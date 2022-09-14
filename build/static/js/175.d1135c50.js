(self.webpackChunk=self.webpackChunk||[]).push([[175],{1175:(At,W,M)=>{"use strict";M.r(W),M.d(W,{HMSVirtualBackgroundPlugin:()=>NT});var ee={};M.r(ee),M.d(ee,{assertParamsValid:()=>fo,computeFlatOffset:()=>go,computeOutShape:()=>qa,getNormalizedAxes:()=>fp,isSliceContinous:()=>po,maskToAxes:()=>hp,parseSliceParams:()=>mo,sliceInfo:()=>nc,startForAxis:()=>ec,startIndicesWithElidedDims:()=>Qa,stopForAxis:()=>tc,stopIndicesWithElidedDims:()=>Za,stridesForAxis:()=>Ja,stridesWithElidedDims:()=>Ka});var G={};M.r(G),M.d(G,{collectGatherOpShapeInfo:()=>hl,computeOutShape:()=>dl,segOpComputeOptimalWindowSize:()=>ul});var ae={};M.r(ae),M.d(ae,{ERF_A1:()=>Vc,ERF_A2:()=>Uc,ERF_A3:()=>Wc,ERF_A4:()=>Gc,ERF_A5:()=>zc,ERF_P:()=>Mc,PARALLELIZE_THRESHOLD:()=>ko,RowPartitionType:()=>xt,SELU_SCALE:()=>Bc,SELU_SCALEALPHA:()=>Lc,applyActivation:()=>_x,assertAndGetBroadcastShape:()=>Ce,assertAxesAreInnerMostDims:()=>gt,assertParamsConsistent:()=>Ec,assignToTypedArray:()=>Bx,axesAreInnerMostDims:()=>yo,calculateShapes:()=>Do,checkEinsumDimSizes:()=>jc,checkPadOnDimRoundingMode:()=>mx,combineLocations:()=>xc,combineRaggedTensorToTensorShapes:()=>Rc,complexWithEvenIndex:()=>Ox,complexWithOddIndex:()=>Px,computeConv2DInfo:()=>mt,computeConv3DInfo:()=>jn,computeDefaultPad:()=>Eo,computeDilation2DInfo:()=>Tc,computeOptimalWindowSize:()=>Zs,computeOutAndReduceShapes:()=>St,computeOutShape:()=>jt,computePool2DInfo:()=>bn,computePool3DInfo:()=>Kn,convertConv2DDataFormat:()=>yn,decodeEinsumEquation:()=>qc,eitherStridesOrDilationsAreOne:()=>wn,expandShapeToKeepDim:()=>Je,exponent:()=>Vx,exponents:()=>Mx,fromStringArrayToUint8:()=>fl,fromUint8ToStringArray:()=>Qt,getAxesPermutation:()=>et,getBroadcastDims:()=>hn,getComplexWithIndex:()=>Lx,getEinsumComputePath:()=>Yc,getEinsumPermutation:()=>Kc,getFusedBiasGradient:()=>Nx,getFusedDyActivation:()=>kx,getImageCenter:()=>Ac,getInnerMostAxes:()=>tt,getPermuted:()=>_o,getRaggedRank:()=>Nc,getReductionAxes:()=>Xa,getReshaped:()=>No,getReshapedPermuted:()=>Ao,getRowPartitionTypesHelper:()=>kc,getSliceBeginCoords:()=>Dc,getSliceSize:()=>Fc,getSparseFillEmptyRowsIndicesDenseShapeMismatch:()=>Jc,getSparseFillEmptyRowsNegativeIndexErrorMessage:()=>el,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:()=>tl,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:()=>rl,getSparseReshapeInputOutputMismatchErrorMessage:()=>il,getSparseReshapeInputOutputMultipleErrorMessage:()=>ol,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:()=>nl,getSparseReshapeNegativeOutputDimErrorMessage:()=>sl,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:()=>ll,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:()=>Oo,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:()=>al,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:()=>cl,getUndoAxesPermutation:()=>vo,isIdentityPermutation:()=>Qc,log:()=>nf,mergeRealAndImagArrays:()=>Yn,prepareAndValidate:()=>Oc,prepareSplitSize:()=>Zc,segment_util:()=>G,shouldFuse:()=>Ax,slice_util:()=>ee,splitRealAndImagArrays:()=>Fx,tupleValuesAreOne:()=>Ro,upcastType:()=>wt,validateDefaultValueShape:()=>_c,validateInput:()=>Dx,validateUpdateShape:()=>Pc,warn:()=>dt});var ce={};M.r(ce),M.d(ce,{addImpl:()=>Dl,bincountImpl:()=>Pb,bincountReduceImpl:()=>Lb,castImpl:()=>Al,ceilImpl:()=>Ol,concatImpl:()=>Mb,equalImpl:()=>Pl,expImpl:()=>Ll,expm1Impl:()=>Bl,floorImpl:()=>Ml,gatherNdImpl:()=>zb,gatherV2Impl:()=>Hb,greaterEqualImpl:()=>Ul,greaterImpl:()=>Vl,lessEqualImpl:()=>Gl,lessImpl:()=>Wl,linSpaceImpl:()=>Yb,logImpl:()=>zl,maxImpl:()=>Zb,maximumImpl:()=>Hl,minimumImpl:()=>Xl,multiplyImpl:()=>Ko,negImpl:()=>ql,notEqualImpl:()=>Kl,prodImpl:()=>Ql,raggedTensorToTensorImpl:()=>iC,rangeImpl:()=>aC,rsqrtImpl:()=>eu,scatterImpl:()=>lC,sigmoidImpl:()=>uC,simpleAbsImpl:()=>Nl,sliceImpl:()=>tu,sparseFillEmptyRowsImpl:()=>fC,sparseReshapeImpl:()=>pC,sparseSegmentReductionImpl:()=>gC,sqrtImpl:()=>mC,squaredDifferenceImpl:()=>nu,stridedSliceImpl:()=>CC,stringNGramsImpl:()=>yC,stringSplitImpl:()=>$C,stringToHashBucketFastImpl:()=>IC,subImpl:()=>su,tileImpl:()=>TC,topKImpl:()=>RC,transposeImpl:()=>jl,uniqueImpl:()=>kC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Z=1e-7,H=1e-4;class he{constructor(e,n){this.backend=e,this.dataMover=n,this.data=new WeakMap,this.dataIdsCount=0}get(e){return this.data.has(e)||this.dataMover.moveData(this.backend,e),this.data.get(e)}set(e,n){this.dataIdsCount++,this.data.set(e,n)}has(e){return this.data.has(e)}delete(e){return this.dataIdsCount--,this.data.delete(e)}numDataIds(){return this.dataIdsCount}}class te{refCount(e){return j("refCount")}incRef(e){return j("incRef")}timerAvailable(){return!0}time(e){return j("time")}read(e){return j("read")}readSync(e){return j("readSync")}readToGPU(e,n){return j("readToGPU")}numDataIds(){return j("numDataIds")}disposeData(e,n){return j("disposeData")}write(e,n,s){return j("write")}move(e,n,s,r,o){return j("move")}memory(){return j("memory")}floatPrecision(){return j("floatPrecision")}epsilon(){return this.floatPrecision()===32?Z:H}dispose(){return j("dispose")}}function j(t){throw new Error(`'${t}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function le(t){let e=t.length,n=0;for(;e>0;)n=Math.random()*e|0,e--,K(t,e,n)}function V(t,e){if(t.length!==e.length)throw new Error(`Array sizes must match to be shuffled together First array length was ${t.length}Second array length was ${e.length}`);let n=t.length,s=0;for(;n>0;)s=Math.random()*n|0,n--,K(t,n,s),K(e,n,s)}function F(t,e,n){return Math.max(t,Math.min(e,n))}function X(t){return t%2===0?t:t+1}function K(t,e,n){const s=t[e];t[e]=t[n],t[n]=s}function q(t){let e=0;for(let n=0;n<t.length;n++)e+=t[n];return e}function Y(t,e){const n=Math.random();return e*n+(1-n)*t}function ue(t,e){let n=0;for(let s=0;s<t.length;s++){const r=Number(t[s])-Number(e[s]);n+=r*r}return n}function v(t,e){if(!t)throw new Error(typeof e=="string"?e:e())}function ne(t,e,n=""){v(T(t,e),()=>n+` Shapes ${t} and ${e} must match`)}function He(t){v(t!=null,()=>"The input to the tensor constructor must be a non-null value.")}function Te(t,e=[],n=!1){if(e==null&&(e=[]),Array.isArray(t)||Xe(t)&&!n)for(let s=0;s<t.length;++s)Te(t[s],e,n);else e.push(t);return e}function D(t){if(t.length===0)return 1;let e=t[0];for(let n=1;n<t.length;n++)e*=t[n];return e}function ve(t){return t.length===0}function T(t,e){if(t===e)return!0;if(t==null||e==null||t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function E(t){return t%1===0}function C(t){if(Math.tanh!=null)return Math.tanh(t);if(t===1/0)return 1;if(t===-1/0)return-1;{const e=Math.exp(2*t);return(e-1)/(e+1)}}function P(t){const e=Math.ceil(Math.sqrt(t));return[e,Math.ceil(t/e)]}function J(t){const e=new Uint32Array(t);for(let n=0;n<t;++n)e[n]=n;return le(e),e}function fe(t,e){return e<=t.length?t:t+" ".repeat(e-t.length)}function me(t,e=s=>0,n){return new Promise((s,r)=>{let o=0;const i=()=>{if(t()){s();return}o++;const a=e(o);if(n!=null&&o>=n){r();return}setTimeout(i,a)};i()})}function Se(t,e){let n=1,s=-1;for(let o=0;o<t.length;++o)if(t[o]>=0)n*=t[o];else if(t[o]===-1){if(s!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${s} and dim ${o}`);s=o}else if(t[o]<0)throw Error(`Shapes can not be < 0. Found ${t[o]} at dim ${o}`);if(s===-1){if(e>0&&e!==n)throw Error(`Size(${e}) must match the product of shape ${t}`);return t}if(n===0)throw Error(`Cannot infer the missing size in [${t}] when there are 0 elements`);if(e%n!==0)throw Error(`The implicit shape can't be a fractional number. Got ${e} / ${n}`);const r=t.slice();return r[s]=e/n,r}function oe(t,e){const n=e.length;return t=t==null?e.map((s,r)=>r):[].concat(t),v(t.every(s=>s>=-n&&s<n),()=>`All values in axis param must be in range [-${n}, ${n}) but got axis ${t}`),v(t.every(s=>E(s)),()=>`All values in axis param must be integers but got axis ${t}`),t.map(s=>s<0?n+s:s)}function Ee(t,e){const n=[],s=[],r=e!=null&&Array.isArray(e)&&e.length===0,o=e==null||r?null:oe(e,t).sort();let i=0;for(let a=0;a<t.length;++a){if(o!=null){if(o[i]===a&&t[a]!==1)throw new Error(`Can't squeeze axis ${a} since its dim '${t[a]}' is not 1`);(o[i]==null||o[i]>a)&&t[a]===1&&(n.push(t[a]),s.push(a)),o[i]<=a&&i++}t[a]!==1&&(n.push(t[a]),s.push(a))}return{newShape:n,keptDims:s}}function xe(t,e){let n=null;if(t==null||t==="float32")n=new Float32Array(e);else if(t==="int32")n=new Int32Array(e);else if(t==="bool")n=new Uint8Array(e);else throw new Error(`Unknown data type ${t}`);return n}function se(t,e){let n=null;if(t==null||t==="float32")n=new Float32Array(e);else if(t==="int32")n=new Int32Array(e);else if(t==="bool")n=new Uint8Array(e);else if(t==="string")n=new Array(e);else throw new Error(`Unknown data type ${t}`);return n}function Ke(t,e){for(let n=0;n<t.length;n++){const s=t[n];if(isNaN(s)||!isFinite(s))throw Error(`A tensor of type ${e} being uploaded contains ${s}.`)}}function Re(t){return t==="bool"||t==="complex64"||t==="float32"||t==="int32"||t==="string"}function Pe(t,e){return!(e==="complex64"||e==="float32"&&t!=="complex64"||e==="int32"&&t!=="float32"&&t!=="complex64"||e==="bool"&&t==="bool")}function Xe(t){return t instanceof Float32Array||t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray}function Sr(t){if(t==="float32"||t==="int32")return 4;if(t==="complex64")return 8;if(t==="bool")return 1;throw new Error(`Unknown dtype ${t}`)}function pd(t){if(t==null)return 0;let e=0;return t.forEach(n=>e+=n.length),e}function ds(t){return typeof t=="string"||t instanceof String}function gd(t){return typeof t=="boolean"}function md(t){return typeof t=="number"}function hs(t){return Array.isArray(t)?hs(t[0]):t instanceof Float32Array?"float32":t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray?"int32":md(t)?"float32":ds(t)?"string":gd(t)?"bool":"float32"}function oi(t){return!!(t&&t.constructor&&t.call&&t.apply)}function Er(t,e){for(let n=e;n<t;++n)if(t%n===0)return n;return t}function ke(t){const e=t.length;if(e<2)return[];const n=new Array(e-1);n[e-2]=t[e-1];for(let s=e-3;s>=0;--s)n[s]=n[s+1]*t[s+1];return n}function ii(t,e,n,s=!1){const r=new Array;if(e.length===1){const o=e[0]*(s?2:1);for(let i=0;i<o;i++)r[i]=n[t+i]}else{const o=e[0],i=e.slice(1),a=i.reduce((c,l)=>c*l)*(s?2:1);for(let c=0;c<o;c++)r[c]=ii(t+c*a,i,n,s)}return r}function Ln(t,e,n=!1){if(t.length===0)return e[0];const s=t.reduce((r,o)=>r*o)*(n?2:1);if(s===0)return[];if(s!==e.length)throw new Error(`[${t}] does not match the input size ${e.length}${n?" for a complex tensor":""}.`);return ii(0,t,e,n)}function ai(t,e){const n=Et(t,e);for(let s=0;s<n.length;s++)n[s]=1;return n}function Et(t,e){if(e==null||e==="float32"||e==="complex64")return new Float32Array(t);if(e==="int32")return new Int32Array(t);if(e==="bool")return new Uint8Array(t);throw new Error(`Unknown data type ${e}`)}function AT(t,e){const n=t.reduce((s,r)=>s*r,1);if(e==null||e==="float32")return Ln(t,new Float32Array(n));if(e==="int32")return Ln(t,new Int32Array(n));if(e==="bool")return Ln(t,new Uint8Array(n));throw new Error(`Unknown data type ${e}`)}function ci(t){t.forEach(e=>{v(Number.isInteger(e)&&e>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${t}].`)})}function Bn(t,e,n){if(e===0)return 0;if(e===1)return t[0];let s=t[t.length-1];for(let r=0;r<t.length-1;++r)s+=n[r]*t[r];return s}function Tr(t,e,n){if(e===0)return[];if(e===1)return[t];const s=new Array(e);for(let r=0;r<s.length-1;++r)s[r]=Math.floor(t/n[r]),t-=s[r]*n[r];return s[s.length-1]=t,s}function li(t){return t&&t.then&&typeof t.then=="function"}var xd=(t,e,n)=>new Promise((s,r)=>{var o=c=>{try{a(n.next(c))}catch(l){r(l)}},i=c=>{try{a(n.throw(c))}catch(l){r(l)}},a=c=>c.done?s(c.value):Promise.resolve(c.value).then(o,i);a((n=n.apply(t,e)).next())});/**
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
 */const ui="tfjsflags";class bd{constructor(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=Cd,this.populateURLFlags()}setPlatform(e,n){this.platform!=null&&(S().getBool("IS_TEST")||S().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${e}.`)),this.platformName=e,this.platform=n}registerFlag(e,n,s){if(this.flagRegistry[e]={evaluationFn:n,setHook:s},this.urlFlags[e]!=null){const r=this.urlFlags[e];S().getBool("IS_TEST")||S().getBool("PROD")||console.warn(`Setting feature override from URL ${e}: ${r}.`),this.set(e,r)}}getAsync(e){return xd(this,null,function*(){return e in this.flags?this.flags[e]:(this.flags[e]=yield this.evaluateFlag(e),this.flags[e])})}get(e){if(e in this.flags)return this.flags[e];const n=this.evaluateFlag(e);if(li(n))throw new Error(`Flag ${e} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[e]=n,this.flags[e]}getNumber(e){return this.get(e)}getBool(e){return this.get(e)}getFlags(){return this.flags}get features(){return this.flags}set(e,n){if(this.flagRegistry[e]==null)throw new Error(`Cannot set flag ${e} as it has not been registered.`);this.flags[e]=n,this.flagRegistry[e].setHook!=null&&this.flagRegistry[e].setHook(n)}evaluateFlag(e){if(this.flagRegistry[e]==null)throw new Error(`Cannot evaluate flag '${e}': no evaluation function found.`);return this.flagRegistry[e].evaluationFn()}setFlags(e){this.flags=Object.assign({},e)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const e=this.getQueryParams(this.global.location.search);ui in e&&e[ui].split(",").forEach(s=>{const[r,o]=s.split(":");this.urlFlags[r]=yd(r,o)})}}function Cd(t){const e={};return t.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(n,...s)=>(wd(e,s[0],s[1]),s.join("="))),e}function wd(t,e,n){t[decodeURIComponent(e)]=decodeURIComponent(n||"")}function yd(t,e){if(e=e.toLowerCase(),e==="true"||e==="false")return e==="true";if(`${+e}`===e)return+e;throw new Error(`Could not parse value flag value ${e} for flag ${t}.`)}function S(){return di}let di=null;function vd(t){di=t}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Rr;function hi(){if(Rr==null){let t;if(typeof window<"u")t=window;else if(typeof M.g<"u")t=M.g;else if(typeof process<"u")t=process;else if(typeof self<"u")t=self;else throw new Error("Could not find a global object");Rr=t}return Rr}function $d(){const t=hi();return t._tfGlobals==null&&(t._tfGlobals=new Map),t._tfGlobals}function kr(t,e){const n=$d();if(n.has(t))return n.get(t);{const s=e();return n.set(t,s),n.get(t)}}const Nr="Abs",Id="Acos",Sd="Acosh",Mn="Add",Ed="AddN",Td="All",Rd="Any",kd="ArgMax",Nd="ArgMin",_d="Asin",Ad="Asinh",Dd="Atan",Fd="Atanh",Od="Atan2",Pd="AvgPool",Ld="AvgPoolGrad",Bd="AvgPool3D",Md="AvgPool3DGrad",fi="BatchMatMul",Vd="BatchToSpaceND",pi="Bincount",DT="BroadcastTo",Ud="BroadcastArgs",fs="Cast",_r="Ceil",Wd="ClipByValue",Ar="Complex",gi="ComplexAbs",mi="Concat",Gd="Conv2D",zd="Conv2DBackpropFilter",Hd="Conv2DBackpropInput",Xd="Conv3D",qd="Conv3DBackpropFilterV2",Kd="Conv3DBackpropInputV2",jd="Cos",Yd="Cosh",Qd="Cumprod",Zd="Cumsum",xi="CropAndResize",Jd="DenseBincount",eh="DepthToSpace",th="DepthwiseConv2dNative",nh="DepthwiseConv2dNativeBackpropFilter",sh="DepthwiseConv2dNativeBackpropInput",rh="Diag",oh="Dilation2D",FT="Dilation2DBackpropInput",OT="Dilation2DBackpropFilter",bi="RealDiv",ih="Einsum",Ci="Elu",ah="EluGrad",ch="Erf",Dr="Equal",ps="Exp",wi="ExpandDims",Fr="Expm1",yi="FFT",vi="Fill",$i="FlipLeftRight",Or="Floor",Ii="FloorDiv",lh="FusedBatchNorm",uh="GatherV2",dh="GatherNd",gs="Greater",ms="GreaterEqual",xs="Identity",Si="IFFT",Ei="Imag",hh="IsFinite",fh="IsInf",ph="IsNan",Ti="LeakyRelu",Pr="Less",bs="LessEqual",gh="LinSpace",Cs="Log",Ri="Log1p",ki="LogicalAnd",mh="LogicalNot",xh="LogicalOr",PT="LogicalXor",LT="LogSoftmax",BT="LowerBound",bh="LRN",Ch="LRNGrad",Ni="Max",Lr="Maximum",wh="MaxPool",yh="MaxPoolGrad",vh="MaxPool3D",$h="MaxPool3DGrad",Ih="MaxPoolWithArgmax",_i="Mean",Ai="Min",ws="Minimum",Sh="MirrorPad",Eh="Mod",Th="Multinomial",ys="Multiply",Br="Neg",vs="NotEqual",Di="NonMaxSuppressionV3",Fi="NonMaxSuppressionV4",Oi="NonMaxSuppressionV5",Rh="OnesLike",kh="OneHot",Pi="Pack",Nh="PadV2",MT="Pool",Li="Pow",Bi="Prelu",Mi="Prod",_h="RaggedTensorToTensor",Vi="Range",Mr="Real",Ah="Reciprocal",Ui="Relu",Wi="Reshape",Gi="ResizeNearestNeighbor",Dh="ResizeNearestNeighborGrad",zi="ResizeBilinear",Fh="ResizeBilinearGrad",Hi="Relu6",Xi="Reverse",qi="Round",Vr="Rsqrt",Oh="ScatterNd",Ph="SearchSorted",Ki="Select",Lh="Selu",Ur="Slice",Bh="Sin",Mh="Sinh",Vh="Sign",$s="Sigmoid",Uh="Softplus",Is="Sqrt",ji="Sum",Wh="SpaceToBatchND",Yi="SplitV",Gh="Softmax",Qi="SparseFillEmptyRows",Zi="SparseReshape",Ji="SparseSegmentMean",ea="SparseSegmentSum",zh="SparseToDense",Ss="SquaredDifference",Hh="Square",Xh="StridedSlice",ta="StringNGrams",na="StringSplit",sa="StringToHashBucketFast",Es="Sub",qh="Tan",Kh="Tanh",Wr="Tile",jh="TopK",ra="Transform",Vn="Transpose",Yh="Unique",oa="Unpack",Qh="UnsortedSegmentSum",VT="UpperBound",ia="ZerosLike",aa="Step",Zh="FromPixels",ca="RotateWithOffset",Jh="_FusedMatMul",ef="FusedConv2D",tf="FusedDepthwiseConv2D";/**
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
 */function dt(...t){S().getBool("IS_TEST")||S().getBool("PROD")||console.warn(...t)}function nf(...t){S().getBool("IS_TEST")||S().getBool("PROD")||console.log(...t)}/**
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
 */const sn=kr("kernelRegistry",()=>new Map),Un=kr("gradRegistry",()=>new Map);function la(t,e){const n=zr(t,e);return sn.get(n)}function ua(t){return Un.get(t)}function Gr(t){const e=sn.entries(),n=[];for(;;){const{done:s,value:r}=e.next();if(s)break;const[o,i]=r,[a]=o.split("_");a===t&&n.push(i)}return n}function da(t){const{kernelName:e,backendName:n}=t,s=zr(e,n);sn.has(s)&&dt(`The kernel '${e}' for backend '${n}' is already registered`),sn.set(s,t)}function UT(t){const{kernelName:e}=t;Un.has(e)&&env().getBool("DEBUG")&&log.warn(`Overriding the gradient for '${e}'`),Un.set(e,t)}function WT(t,e){const n=zr(t,e);if(!sn.has(n))throw new Error(`The kernel '${t}' for backend '${e}' is not registered`);sn.delete(n)}function GT(t){if(!Un.has(t))throw new Error(`The gradient '${t}' for backend is not registered`);Un.delete(t)}function zT(t,e){Gr(t).forEach(s=>{const r=Object.assign({},s,{backendName:e});da(r)})}function zr(t,e){return`${e}_${t}`}var ha=M(3968),sf=M.n(ha);/**
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
 */const Ut=sf()||ha;function Ts(t){return Ut.fromString(t,!0,16)}const fa=Ts("c3a5c85c97cb3127"),Wt=Ts("b492b66fbe98f273"),Le=Ts("9ae16a3b2f90404f");function Hr(t){return t.xor(t.shru(47))}function pa(t,e,n){const s=t.slice(e,e+n);return Ut.fromBytes(Array.from(s),!0,!0)}function be(t,e){return pa(t,e,8)}function ga(t,e){return pa(t,e,4)}function Ne(t,e){return e===0?t:t.shru(e).or(t.shl(64-e))}function Dt(t,e,n=Ts("9ddfea08eb382d69")){let s=t.xor(e).mul(n);s=s.xor(s.shru(47));let r=e.xor(s).mul(n);return r=r.xor(r.shru(47)),r=r.mul(n),r}function rf(t,e,n,s,r,o){r=r.add(t),o=Ne(o.add(r).add(s),21);const i=r;return r=r.add(e),r=r.add(n),o=o.add(Ne(r,44)),[r.add(s),o.add(i)]}function Rs(t,e,n,s){return rf(be(t,e),be(t,e+8),be(t,e+16),be(t,e+24),n,s)}function of(t,e=t.length){if(e>=8){const n=Le.add(e*2),s=be(t,0).add(Le),r=be(t,e-8),o=Ne(r,37).mul(n).add(s),i=Ne(s,25).add(r).mul(n);return Dt(o,i,n)}if(e>=4){const n=Le.add(e*2),s=ga(t,0);return Dt(s.shl(3).add(e),ga(t,e-4),n)}if(e>0){const n=t[0],s=t[e>>1],r=t[e-1],o=n+(s<<8),i=e+(r<<2);return Hr(Le.mul(o).xor(fa.mul(i))).mul(Le)}return Le}function af(t,e=t.length){const n=Le.add(e*2),s=be(t,0).mul(Wt),r=be(t,8),o=be(t,e-8).mul(n),i=be(t,e-16).mul(Le);return Dt(Ne(s.add(r),43).add(Ne(o,30)).add(i),s.add(Ne(r.add(Le),18)).add(o),n)}function cf(t,e=t.length){const n=Le.add(e*2),s=be(t,0).mul(Le),r=be(t,8),o=be(t,e-8).mul(n),i=be(t,e-16).mul(Le),a=Ne(s.add(r),43).add(Ne(o,30)).add(i),c=Dt(a,s.add(Ne(r.add(Le),18)).add(o),n),l=be(t,16).mul(n),u=be(t,24),d=a.add(be(t,e-32)).mul(n),h=c.add(be(t,e-24)).mul(n);return Dt(Ne(l.add(u),43).add(Ne(d,30)).add(h),l.add(Ne(u.add(s),18)).add(d),n)}function lf(t,e=t.length){const n=Ut.fromNumber(81,!0);if(e<=32)return e<=16?of(t,e):af(t,e);if(e<=64)return cf(t,e);let s=n,r=n.mul(Wt).add(113),o=Hr(r.mul(Le).add(113)).mul(Le),i=[Ut.UZERO,Ut.UZERO],a=[Ut.UZERO,Ut.UZERO];s=s.mul(Le).add(be(t,0));let c=0;const l=(e-1>>6)*64,u=l+(e-1&63)-63;do s=Ne(s.add(r).add(i[0]).add(be(t,c+8)),37).mul(Wt),r=Ne(r.add(i[1]).add(be(t,c+48)),42).mul(Wt),s=s.xor(a[1]),r=r.add(i[0]).add(be(t,c+40)),o=Ne(o.add(a[0]),33).mul(Wt),i=Rs(t,c,i[1].mul(Wt),s.add(a[0])),a=Rs(t,c+32,o.add(a[1]),r.add(be(t,c+16))),[o,s]=[s,o],c+=64;while(c!==l);const d=Wt.add(o.and(255).shl(1));return c=u,a[0]=a[0].add(e-1&63),i[0]=i[0].add(a[0]),a[0]=a[0].add(i[0]),s=Ne(s.add(r).add(i[0]).add(be(t,c+8)),37).mul(d),r=Ne(r.add(i[1]).add(be(t,c+48)),42).mul(d),s=s.xor(a[1].mul(9)),r=r.add(i[0].mul(9).add(be(t,c+40))),o=Ne(o.add(a[0]),33).mul(d),i=Rs(t,c,i[1].mul(d),s.add(a[0])),a=Rs(t,c+32,o.add(a[1]),r.add(be(t,c+16))),[o,s]=[s,o],Dt(Dt(i[0],a[0],d).add(Hr(r).mul(fa)).add(o),Dt(i[1],a[1],d).add(s),d)}/**
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
 */function rn(t,e){return e==="string"?Gt(t):ks([t],e)}function uf(t,e){return t instanceof Float32Array&&e==="float32"||t instanceof Int32Array&&e==="int32"||t instanceof Uint8Array&&e==="bool"}function ks(t,e){if(e==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(t)&&(t=Te(t)),S().getBool("DEBUG")&&Ke(t,e),uf(t,e))return t;if(e==null||e==="float32"||e==="complex64")return new Float32Array(t);if(e==="int32")return new Int32Array(t);if(e==="bool"){const n=new Uint8Array(t.length);for(let s=0;s<n.length;++s)Math.round(t[s])!==0&&(n[s]=1);return n}else throw new Error(`Unknown data type ${e}`)}function ht(){return S().platform.now()}function HT(t,e){return S().platform.fetch(t,e)}function Gt(t,e="utf-8"){return e=e||"utf-8",S().platform.encode(t,e)}function on(t,e="utf-8"){return e=e||"utf-8",S().platform.decode(t,e)}/**
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
 */class df{constructor(e,n){this.backendTimer=e,this.logger=n,n==null&&(this.logger=new ff)}profileKernel(e,n,s){let r;const o=()=>{r=s()};let i;const a=ht();if(this.backendTimer.timerAvailable())i=this.backendTimer.time(o);else{o();for(const l of r)l.dataSync();i=Promise.resolve({kernelMs:ht()-a})}if(S().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let l=0;l<r.length;l++){const u=r[l];u.data().then(d=>{hf(d,u.dtype,e)})}return{kernelName:e,outputs:r,inputs:n,timeMs:i.then(l=>l.kernelMs),extraInfo:i.then(l=>l.getExtraProfileInfo!=null?l.getExtraProfileInfo():"")}}logKernelProfile(e){const{kernelName:n,outputs:s,timeMs:r,inputs:o,extraInfo:i}=e;s.forEach(a=>{Promise.all([a.data(),r,i]).then(c=>{this.logger.logKernelProfile(n,a,c[0],c[1],o,c[2])})})}}function hf(t,e,n){if(e!=="float32")return!1;for(let s=0;s<t.length;s++){const r=t[s];if(isNaN(r)||!isFinite(r))return console.warn(`Found ${r} in the result of '${n}'`),!0}return!1}class ff{logKernelProfile(e,n,s,r,o,i){const a=typeof r=="number"?fe(`${r}ms`,9):r.error,c=fe(e,25),l=n.rank,u=n.size,d=fe(n.shape.toString(),14);let h="";for(const f in o){const p=o[f];if(p!=null){const g=p.shape||n.shape,m=g.length;h+=`${f}: ${m}D ${m>0?g:""} `}}console.log(`%c${c}	%c${a}	%c${l}D ${d}	%c${u}	%c${h}	%c${i}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}/**
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
 */function pf(t,e,n){const s={},r={};for(let c=0;c<e.length;c++)s[e[c].id]=!0;for(let c=0;c<t.length;c++){const l=t[c],u=l.inputs;for(const d in u){const h=u[d];let f=!1;for(let p=0;p<e.length;p++)if(s[h.id]){l.outputs.forEach(g=>s[g.id]=!0),f=!0,r[l.id]=!0;break}if(f)break}}const o={};o[n.id]=!0;const i={};for(let c=t.length-1;c>=0;c--){const l=t[c],u=l.inputs;for(let d=0;d<l.outputs.length;d++)if(o[l.outputs[d].id]){for(const h in u)o[u[h].id]=!0,i[l.id]=!0;break}}const a=[];for(let c=0;c<t.length;c++){const l=t[c];if(r[l.id]&&i[l.id]){const u={};for(const h in l.inputs){const f=l.inputs[h];s[f.id]&&(u[h]=f)}const d=Object.assign({},l);d.inputs=u,d.outputs=l.outputs,a.push(d)}}return a}function gf(t,e,n,s){for(let r=e.length-1;r>=0;r--){const o=e[r],i=[];if(o.outputs.forEach(c=>{const l=t[c.id];l!=null?i.push(l):i.push(null)}),o.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${o.kernelName}.`);const a=o.gradient(i);for(const c in o.inputs){if(!(c in a))throw new Error(`Cannot backprop through input ${c}. Available gradients found: ${Object.keys(a)}.`);const l=n(()=>a[c]());if(l.dtype!=="float32")throw new Error(`Error in gradient for op ${o.kernelName}. The gradient of input ${c} must have 'float32' dtype, but has '${l.dtype}'`);const u=o.inputs[c];if(!T(l.shape,u.shape))throw new Error(`Error in gradient for op ${o.kernelName}. The gradient of input '${c}' has shape '${l.shape}', which does not match the shape of the input '${u.shape}'`);if(t[u.id]==null)t[u.id]=l;else{const d=t[u.id];t[u.id]=s(d,l),d.dispose()}}}}/**
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
 */const ma=20,Wn=3,Xr=7;function mf(t,e,n,s){const r=ke(e),o=xf(t,e,n,r),i=e.length,a=Ns(t,e,n,r,o),c=["Tensor"];return s&&(c.push(`  dtype: ${n}`),c.push(`  rank: ${i}`),c.push(`  shape: [${e}]`),c.push("  values:")),c.push(a.map(l=>"    "+l).join(`
`)),c.join(`
`)}function xf(t,e,n,s){const r=D(e),o=s[s.length-1],i=new Array(o).fill(0),a=e.length,c=n==="complex64"?zn(t):t;if(a>1)for(let l=0;l<r/o;l++){const u=l*o;for(let d=0;d<o;d++)i[d]=Math.max(i[d],Gn(c[u+d],0,n).length)}return i}function Gn(t,e,n){let s;return Array.isArray(t)?s=`${parseFloat(t[0].toFixed(Xr))} + ${parseFloat(t[1].toFixed(Xr))}j`:ds(t)?s=`'${t}'`:n==="bool"?s=xa(t):s=parseFloat(t.toFixed(Xr)).toString(),fe(s,e)}function xa(t){return t===0?"false":"true"}function Ns(t,e,n,s,r,o=!0){const i=n==="complex64"?2:1,a=e[0],c=e.length;if(c===0){if(n==="complex64"){const g=zn(t);return[Gn(g[0],0,n)]}return n==="bool"?[xa(t[0])]:[t[0].toString()]}if(c===1){if(a>ma){const m=Wn*i;let x=Array.from(t.slice(0,m)),b=Array.from(t.slice((a-Wn)*i,a*i));return n==="complex64"&&(x=zn(x),b=zn(b)),["["+x.map((w,y)=>Gn(w,r[y],n)).join(", ")+", ..., "+b.map((w,y)=>Gn(w,r[a-Wn+y],n)).join(", ")+"]"]}const g=n==="complex64"?zn(t):Array.from(t);return["["+g.map((m,x)=>Gn(m,r[x],n)).join(", ")+"]"]}const l=e.slice(1),u=s.slice(1),d=s[0]*i,h=[];if(a>ma){for(let g=0;g<Wn;g++){const m=g*d,x=m+d;h.push(...Ns(t.slice(m,x),l,n,u,r,!1))}h.push("...");for(let g=a-Wn;g<a;g++){const m=g*d,x=m+d;h.push(...Ns(t.slice(m,x),l,n,u,r,g===a-1))}}else for(let g=0;g<a;g++){const m=g*d,x=m+d;h.push(...Ns(t.slice(m,x),l,n,u,r,g===a-1))}const f=c===2?",":"";h[0]="["+h[0]+f;for(let g=1;g<h.length-1;g++)h[g]=" "+h[g]+f;let p=`,
`;for(let g=2;g<c;g++)p+=`
`;return h[h.length-1]=" "+h[h.length-1]+"]"+(o?"":p),h}function zn(t){const e=[];for(let n=0;n<t.length;n+=2)e.push([t[n],t[n+1]]);return e}var _s=(t,e,n)=>new Promise((s,r)=>{var o=c=>{try{a(n.next(c))}catch(l){r(l)}},i=c=>{try{a(n.throw(c))}catch(l){r(l)}},a=c=>c.done?s(c.value):Promise.resolve(c.value).then(o,i);a((n=n.apply(t,e)).next())});/**
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
 */class qr{constructor(e,n,s){if(this.dtype=n,this.shape=e.slice(),this.size=D(e),s!=null){const r=s.length;v(r===this.size,()=>`Length of values '${r}' does not match the size inferred by the shape '${this.size}'.`)}if(n==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=s||se(n,this.size),this.strides=ke(e)}set(e,...n){n.length===0&&(n=[0]),v(n.length===this.rank,()=>`The number of provided coordinates (${n.length}) must match the rank (${this.rank})`);const s=this.locToIndex(n);this.values[s]=e}get(...e){e.length===0&&(e=[0]);let n=0;for(const r of e){if(r<0||r>=this.shape[n]){const o=`Requested out of range element at ${e}.   Buffer shape=${this.shape}`;throw new Error(o)}n++}let s=e[e.length-1];for(let r=0;r<e.length-1;++r)s+=this.strides[r]*e[r];return this.values[s]}locToIndex(e){if(this.rank===0)return 0;if(this.rank===1)return e[0];let n=e[e.length-1];for(let s=0;s<e.length-1;++s)n+=this.strides[s]*e[s];return n}indexToLoc(e){if(this.rank===0)return[];if(this.rank===1)return[e];const n=new Array(this.shape.length);for(let s=0;s<n.length-1;++s)n[s]=Math.floor(e/this.strides[s]),e-=n[s]*this.strides[s];return n[n.length-1]=e,n}get rank(){return this.shape.length}toTensor(){return ft().makeTensor(this.values,this.shape,this.dtype)}}let ft=null,an=null,ba=null;function bf(t){ft=t}function Cf(t){an=t}function wf(t){ba=t}class ot{constructor(e,n,s,r){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=n||"float32",this.size=D(e),this.strides=ke(e),this.dataId=s,this.id=r,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}buffer(){return _s(this,null,function*(){const e=yield this.data();return an.buffer(this.shape,this.dtype,e)})}bufferSync(){return an.buffer(this.shape,this.dtype,this.dataSync())}array(){return _s(this,null,function*(){const e=yield this.data();return Ln(this.shape,e,this.dtype==="complex64")})}arraySync(){return Ln(this.shape,this.dataSync(),this.dtype==="complex64")}data(){return _s(this,null,function*(){this.throwIfDisposed();const e=ft().read(this.dataId);if(this.dtype==="string"){const n=yield e;try{return n.map(s=>on(s))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return e})}dataToGPU(e){return this.throwIfDisposed(),ft().readToGPU(this.dataId,e)}dataSync(){this.throwIfDisposed();const e=ft().readSync(this.dataId);if(this.dtype==="string")try{return e.map(n=>on(n))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return e}bytes(){return _s(this,null,function*(){this.throwIfDisposed();const e=yield ft().read(this.dataId);return this.dtype==="string"?e:new Uint8Array(e.buffer)})}dispose(){this.isDisposed||(ft().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(e=!1){return an.print(this,e)}clone(){return this.throwIfDisposed(),an.clone(this)}toString(e=!1){const n=this.dataSync();return mf(n,this.shape,this.dtype,e)}cast(e){return this.throwIfDisposed(),an.cast(this,e)}variable(e=!0,n,s){return this.throwIfDisposed(),ft().makeVariable(this,e,n,s)}}Object.defineProperty(ot,Symbol.hasInstance,{value:t=>!!t&&t.data!=null&&t.dataSync!=null&&t.throwIfDisposed!=null});function yf(){return kr("Tensor",()=>ot)}yf();class Kr extends ot{constructor(e,n,s,r){super(e.shape,e.dtype,e.dataId,r),this.trainable=n,this.name=s}assign(e){if(e.dtype!==this.dtype)throw new Error(`dtype of the new value (${e.dtype}) and previous value (${this.dtype}) must match`);if(!T(e.shape,this.shape))throw new Error(`shape of the new value (${e.shape}) and previous value (${this.shape}) must match`);ft().disposeTensor(this),this.dataId=e.dataId,ft().incRef(this,null)}dispose(){ft().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(Kr,Symbol.hasInstance,{value:t=>t instanceof ot&&t.assign!=null&&t.assign instanceof Function});/**
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
 */var Ca;(function(t){t.R0="R0",t.R1="R1",t.R2="R2",t.R3="R3",t.R4="R4",t.R5="R5",t.R6="R6"})(Ca||(Ca={}));var jr;(function(t){t.float32="float32",t.int32="int32",t.bool="int32",t.complex64="complex64"})(jr||(jr={}));var Yr;(function(t){t.float32="float32",t.int32="int32",t.bool="bool",t.complex64="complex64"})(Yr||(Yr={}));var Qr;(function(t){t.float32="float32",t.int32="float32",t.bool="float32",t.complex64="complex64"})(Qr||(Qr={}));var Zr;(function(t){t.float32="complex64",t.int32="complex64",t.bool="complex64",t.complex64="complex64"})(Zr||(Zr={}));const vf={float32:Qr,int32:jr,bool:Yr,complex64:Zr};function wt(t,e){if(t==="string"||e==="string"){if(t==="string"&&e==="string")return"string";throw new Error(`Can not upcast ${t} with ${e}`)}return vf[t][e]}function Jr(t){return wt(t,"int32")}/**
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
 */function Qe(t,e){if(t.dtype===e.dtype)return[t,e];const n=wt(t.dtype,e.dtype);return[t.cast(n),e.cast(n)]}function XT(t,e){assert(t.dtype===e.dtype,()=>`The dtypes of the first(${t.dtype}) and second(${e.dtype}) input must match`)}function qT(t,e){return e.some(n=>n.id===t.id)}function wa(t){const e=[];return ya(t,e,new Set),e}function ya(t,e,n){if(t==null)return;if(t instanceof ot){e.push(t);return}if(!$f(t))return;const s=t;for(const r in s){const o=s[r];n.has(o)||(n.add(o),ya(o,e,n))}}function $f(t){return Array.isArray(t)||typeof t=="object"}var As=(t,e,n)=>new Promise((s,r)=>{var o=c=>{try{a(n.next(c))}catch(l){r(l)}},i=c=>{try{a(n.throw(c))}catch(l){r(l)}},a=c=>c.done?s(c.value):Promise.resolve(c.value).then(o,i);a((n=n.apply(t,e)).next())});/**
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
 */function eo(t){return t.kernelName!=null}class va{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(e=>e.name)))}}}dispose(){for(const e in this.registeredVariables)this.registeredVariables[e].dispose()}}class cn{constructor(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new va}ready(){return As(this,null,function*(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const e=this.getSortedBackends();for(let n=0;n<e.length;n++){const s=e[n];if(yield this.initializeBackend(s).success){yield this.setBackend(s);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")})}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:e,asyncInit:n}=this.initializeBackendsAndReturnBest();if(n)throw new Error(`The highest priority backend '${e}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(e)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(e){if(!(e in this.registry))if(e in this.registryFactory){const{asyncInit:n}=this.initializeBackend(e);if(n)return null}else return null;return this.registry[e]}findBackendFactory(e){return e in this.registryFactory?this.registryFactory[e].factory:null}registerBackend(e,n,s=1){return e in this.registryFactory?(dt(`${e} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[e]={factory:n,priority:s},!0)}setBackend(e){return As(this,null,function*(){if(this.registryFactory[e]==null)throw new Error(`Backend name '${e}' not found in registry`);if(this.backendName=e,this.registry[e]==null){this.backendInstance=null;const{success:n,asyncInit:s}=this.initializeBackend(e);if(!(s?yield n:n))return!1}return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new df(this.backendInstance),!0})}setupRegisteredKernels(){Gr(this.backendName).forEach(n=>{n.setupFunc!=null&&n.setupFunc(this.backendInstance)})}disposeRegisteredKernels(e){Gr(e).forEach(s=>{s.disposeFunc!=null&&s.disposeFunc(this.registry[e])})}initializeBackend(e){const n=this.registryFactory[e];if(n==null)throw new Error(`Cannot initialize backend ${e}, no registration found.`);try{const s=n.factory();if(s&&!(s instanceof te)&&typeof s.then=="function"){const r=++this.pendingBackendInitId,o=s.then(i=>r<this.pendingBackendInitId?!1:(this.registry[e]=i,this.pendingBackendInit=null,!0)).catch(i=>(r<this.pendingBackendInitId||(this.pendingBackendInit=null,dt(`Initialization of backend ${e} failed`),dt(i.stack||i.message)),!1));return this.pendingBackendInit=o,{success:o,asyncInit:!0}}else return this.registry[e]=s,{success:!0,asyncInit:!1}}catch(s){return dt(`Initialization of backend ${e} failed`),dt(s.stack||s.message),{success:!1,asyncInit:!1}}}removeBackend(e){if(!(e in this.registryFactory))throw new Error(`${e} backend not found in registry`);this.backendName===e&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((e,n)=>this.registryFactory[n].priority-this.registryFactory[e].priority)}initializeBackendsAndReturnBest(){const e=this.getSortedBackends();for(let n=0;n<e.length;n++){const s=e[n],{success:r,asyncInit:o}=this.initializeBackend(s);if(o||r)return{name:s,asyncInit:o}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(e,n){const s=this.state.tensorInfo.get(n),r=s.backend,o=this.readSync(n),i=r.refCount(n);r.disposeData(n,!0),s.backend=e,e.move(n,o,s.shape,s.dtype,i),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(e,n){let s=null;if(n==null){if(typeof e!="function")throw new Error("Please provide a function to tidy()");n=e}else{if(typeof e!="string"&&!(e instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof n!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");s=e}let r;return this.scopedRun(()=>this.startScope(s),()=>this.endScope(r),()=>(r=n(),r instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),r))}scopedRun(e,n,s){e();try{const r=s();return n(),r}catch(r){throw n(),r}}nextTensorId(){return cn.nextTensorId++}nextVariableId(){return cn.nextVariableId++}clone(e){const n=A.runKernel(xs,{x:e}),s={x:e},r=i=>({x:()=>{const a="float32",c={x:i},l={dtype:a};return A.runKernel(fs,c,l)}}),o=[];return this.addTapeNode(this.state.activeScope.name,s,[n],r,o,{}),n}runKernel(e,n,s){if(this.backendName==null&&this.backend,!(la(e,this.backendName)!=null))throw new Error(`Kernel '${e}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:e,inputs:n,attrs:s})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(e,n,s){const r=this.backend.numDataIds();let o=0;s.forEach(c=>{o+=c.dtype==="complex64"?3:1});const i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],a=r-n-o-i;if(a>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${a} data ids) after running '${e}'`)}runKernelFunc(e){let n,s=[];const r=this.isTapeOn(),o=this.state.numBytes,i=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let a;this.backendName==null&&this.backend;let c;const l=eo(e)?e.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(eo(e)){const{kernelName:p,inputs:g,attrs:m}=e;this.backendName==null&&this.backend;const x=la(p,this.backendName);v(x!=null,()=>`Cannot find registered kernel '${p}' for backend '${this.backendName}'`),a=()=>{const b=this.backend.numDataIds();c=x.kernelFunc({inputs:g,attrs:m,backend:this.backend});const w=Array.isArray(c)?c:[c];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(p,b,w);const y=w.map($=>$.rank!=null?$:this.makeTensorFromTensorInfo($));if(r){const $=this.getTensorsForGradient(p,g,y);s=this.saveTensorsForBackwardMode($)}return y}}else{const{forwardFunc:p}=e,g=m=>{!r||(s=m.map(x=>this.keep(this.clone(x))))};a=()=>{const m=this.backend.numDataIds();c=this.tidy(()=>p(this.backend,g));const x=Array.isArray(c)?c:[c];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(l,m,x),x}}const{inputs:u,attrs:d}=e,h=eo(e)?null:e.backwardsFunc;let f;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?n=a():(f=this.profiler.profileKernel(l,u,()=>a()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(f),n=f.outputs)}),r&&this.addTapeNode(l,u,n,h,s,d),this.state.profiling&&this.state.activeProfile.kernels.push({name:l,bytesAdded:this.state.numBytes-o,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-i,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(u).map(p=>u[p]!=null?u[p].shape:null),outputShapes:n.map(p=>p.shape),kernelTimeMs:f.timeMs,extraInfo:f.extraInfo}),Array.isArray(c)?n:n[0]}saveTensorsForBackwardMode(e){return e.map(s=>this.keep(this.clone(s)))}getTensorsForGradient(e,n,s){const r=ua(e);if(r!=null){const o=r.inputsToSave||[],i=r.outputsToSave||[];let a;r.saveAllInputs?(v(Array.isArray(n),()=>"saveAllInputs is true, expected inputs to be an array."),a=Object.keys(n).map(l=>n[l])):a=o.map(l=>n[l]);const c=s.filter((l,u)=>i[u]);return a.concat(c)}return[]}makeTensor(e,n,s,r){if(e==null)throw new Error("Values passed to engine.makeTensor() are null");s=s||"float32",r=r||this.backend;let o=e;s==="string"&&ds(e[0])&&(o=e.map(c=>Gt(c)));const i=r.write(o,n,s),a=new ot(n,s,i,this.nextTensorId());if(this.trackTensor(a,r),s==="string"){const c=this.state.tensorInfo.get(i),l=pd(o);this.state.numBytes+=l-c.bytes,c.bytes=l}return a}makeTensorFromDataId(e,n,s,r){s=s||"float32";const o={dataId:e,shape:n,dtype:s};return this.makeTensorFromTensorInfo(o,r)}makeTensorFromTensorInfo(e,n){const{dataId:s,shape:r,dtype:o}=e,i=new ot(r,o,s,this.nextTensorId());return this.trackTensor(i,n),i}makeVariable(e,n=!0,s,r){s=s||this.nextVariableId().toString(),r!=null&&r!==e.dtype&&(e=e.cast(r));const o=new Kr(e,n,s,this.nextTensorId());if(this.state.registeredVariables[o.name]!=null)throw new Error(`Variable with name ${o.name} was already registered`);return this.state.registeredVariables[o.name]=o,this.incRef(o,this.backend),o}trackTensor(e,n){this.state.numTensors++,e.dtype==="string"&&this.state.numStringTensors++;let s=0;e.dtype!=="complex64"&&e.dtype!=="string"&&(s=e.size*Sr(e.dtype)),this.state.numBytes+=s,this.state.tensorInfo.has(e.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(e.dataId,{backend:n||this.backend,dtype:e.dtype,shape:e.shape,bytes:s})),e instanceof Kr||this.track(e)}incRef(e,n){this.trackTensor(e,n),this.backend.incRef(e.dataId)}removeDataId(e,n){this.state.tensorInfo.has(e)&&this.state.tensorInfo.get(e).backend===n&&(this.state.tensorInfo.delete(e),this.state.numDataBuffers--)}disposeTensor(e){if(!this.state.tensorInfo.has(e.dataId))return;const n=this.state.tensorInfo.get(e.dataId);if(this.state.numTensors--,e.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=n.bytes),e.dtype!=="complex64"&&e.dtype!=="string"){const s=e.size*Sr(e.dtype);this.state.numBytes-=s}n.backend.disposeData(e.dataId)&&this.removeDataId(e.dataId,n.backend)}disposeVariables(){for(const e in this.state.registeredVariables){const n=this.state.registeredVariables[e];this.disposeVariable(n)}}disposeVariable(e){this.disposeTensor(e),this.state.registeredVariables[e.name]!=null&&delete this.state.registeredVariables[e.name]}memory(){const e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,e.reasons==null&&(e.reasons=[]),e.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),e}profile(e){return As(this,null,function*(){this.state.profiling=!0;const n=this.state.numBytes,s=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=yield e(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(r=>r.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-n,this.state.activeProfile.newTensors=this.state.numTensors-s;for(const r of this.state.activeProfile.kernels)r.kernelTimeMs=yield r.kernelTimeMs,r.extraInfo=yield r.extraInfo;return this.state.activeProfile})}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(e,n,s,r,o,i){const a={id:this.state.nextTapeNodeId++,kernelName:e,inputs:n,outputs:s,saved:o},c=ua(e);c!=null&&(r=c.gradFunc),r!=null&&(a.gradient=l=>(l=l.map((u,d)=>{if(u==null){const h=s[d],f=Et(h.size,h.dtype);return this.makeTensor(f,h.shape,h.dtype)}return u}),r(l.length>1?l:l[0],o,i))),this.state.activeTape.push(a)}keep(e){return e.kept=!0,e}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(e){const n={track:[],name:"unnamed scope",id:this.state.nextScopeId++};e&&(n.name=e),this.state.scopeStack.push(n),this.state.activeScope=n}endScope(e){const n=wa(e),s=new Set(n.map(o=>o.id));for(let o=0;o<this.state.activeScope.track.length;o++){const i=this.state.activeScope.track[o];!i.kept&&!s.has(i.id)&&i.dispose()}const r=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach(o=>{!o.kept&&o.scopeId===r.id&&this.track(o)})}gradients(e,n,s,r=!1){if(v(n.length>0,()=>"gradients() received an empty list of xs."),s!=null&&s.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${s.dtype}'`);const o=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",e));v(o instanceof ot,()=>"The result y returned by f() must be a tensor.");const i=pf(this.state.activeTape,n,o);if(!r&&i.length===0&&n.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const a={};a[o.id]=s??If(o.shape),gf(a,i,l=>this.tidy(l),Sf);const c=n.map(l=>a[l.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(l=>{for(const u of l.saved)u.dispose()}),this.state.activeTape=null),{value:o,grads:c}})}customGrad(e){return v(oi(e),()=>"The f passed in customGrad(f) must be a function."),(...n)=>{v(n.every(a=>a instanceof ot),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let s;const r={};n.forEach((a,c)=>{r[c]=a});const o=(a,c)=>(s=e(...n,c),v(s.value instanceof ot,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),v(oi(s.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),s.value),i=(a,c)=>{const l=s.gradFunc(a,c),u=Array.isArray(l)?l:[l];v(u.length===n.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),v(u.every(h=>h instanceof ot),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const d={};return u.forEach((h,f)=>{d[f]=()=>h}),d};return this.runKernelFunc({forwardFunc:o,backwardsFunc:i,inputs:r})}}readSync(e){return this.state.tensorInfo.get(e).backend.readSync(e)}read(e){return this.state.tensorInfo.get(e).backend.read(e)}readToGPU(e,n){return this.state.tensorInfo.get(e).backend.readToGPU(e,n)}time(e){return As(this,null,function*(){const n=ht(),s=yield this.backend.time(e);return s.wallMs=ht()-n,s})}track(e){return this.state.activeScope!=null&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new va;for(const e in this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}cn.nextTensorId=0,cn.nextVariableId=0;function If(t){const e=ai(D(t),"float32");return A.makeTensor(e,t,"float32")}function $a(){const t=hi();if(t._tfengine==null){const e=new bd(t);t._tfengine=new cn(e)}return vd(t._tfengine.ENV),bf(()=>t._tfengine),t._tfengine}const A=$a();function Sf(t,e){const n={a:t,b:e};return A.runKernel(Mn,n)}/**
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
 */function Ef(){return typeof navigator<"u"&&navigator!=null}let to;function KT(t){to=t}function Ia(t){if(to!==void 0)return to;if(t||Ef()){if(t||(t=navigator),t.product==="ReactNative")return!0;const e=t.userAgent||t.vendor||(typeof window<"u"?window.opera:"");if(!e){const n=t;return n.userAgentData&&n.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))}return!1}function Sa(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}/**
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
 */const Ze=S();Ze.registerFlag("DEBUG",()=>!1,t=>{t&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),Ze.registerFlag("IS_BROWSER",()=>Sa()),Ze.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"),Ze.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)),Ze.registerFlag("PROD",()=>!1),Ze.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>Ze.getBool("DEBUG")),Ze.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0),Ze.registerFlag("IS_TEST",()=>!1),Ze.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>!0),Ze.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1),Ze.registerFlag("ENGINE_COMPILE_ONLY",()=>!1),Ze.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);/**
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
 */const jT={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};var no=(t,e,n)=>new Promise((s,r)=>{var o=c=>{try{a(n.next(c))}catch(l){r(l)}},i=c=>{try{a(n.throw(c))}catch(l){r(l)}},a=c=>c.done?s(c.value):Promise.resolve(c.value).then(o,i);a((n=n.apply(t,e)).next())});/**
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
 */const Ds=4;function YT(t,e){return no(this,null,function*(){const n=[],s=[],r=Array.isArray(t)?t.map(i=>i.name):Object.keys(t);for(let i=0;i<r.length;++i){const a=r[i],c=Array.isArray(t)?t[i].tensor:t[a];if(c.dtype!=="float32"&&c.dtype!=="int32"&&c.dtype!=="bool"&&c.dtype!=="string"&&c.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${a}': ${c.dtype}`);const l={name:a,shape:c.shape,dtype:c.dtype};if(c.dtype==="string"){const u=new Promise(d=>no(this,null,function*(){const h=yield c.bytes(),f=h.reduce((m,x)=>m+x.length,0)+Ds*h.length,p=new Uint8Array(f);let g=0;for(let m=0;m<h.length;m++){const x=h[m],b=new Uint8Array(new Uint32Array([x.length]).buffer);p.set(b,g),g+=Ds,p.set(x,g),g+=x.length}d(p)}));s.push(u)}else s.push(c.data());e!=null&&(l.group=e),n.push(l)}const o=yield Promise.all(s);return{data:Tf(o),specs:n}})}function QT(t,e){const n={};let s,r=0;for(const o of e){const i=o.name,a=o.dtype,c=o.shape,l=sizeFromShape(c);let u;if("quantization"in o){const d=o.quantization;if(d.dtype==="uint8"||d.dtype==="uint16"){if(!("min"in d&&"scale"in d))throw new Error(`Weight ${o.name} with quantization ${d.dtype} doesn't have corresponding metadata min and scale.`)}else if(d.dtype==="float16"){if(a!=="float32")throw new Error(`Weight ${o.name} is quantized with ${d.dtype} which only supports weights of type float32 not ${a}.`)}else throw new Error(`Weight ${o.name} has unknown quantization dtype ${d.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);const h=DTYPE_VALUE_SIZE_MAP[d.dtype],f=t.slice(r,r+l*h),p=d.dtype==="uint8"?new Uint8Array(f):new Uint16Array(f);if(a==="float32")if(d.dtype==="uint8"||d.dtype==="uint16"){u=new Float32Array(p.length);for(let g=0;g<p.length;g++){const m=p[g];u[g]=m*d.scale+d.min}}else if(d.dtype==="float16")s===void 0&&(s=Of()),u=s(p);else throw new Error(`Unsupported quantization type ${d.dtype} for weight type float32.`);else if(a==="int32"){if(d.dtype!=="uint8"&&d.dtype!=="uint16")throw new Error(`Unsupported quantization type ${d.dtype} for weight type int32.`);u=new Int32Array(p.length);for(let g=0;g<p.length;g++){const m=p[g];u[g]=Math.round(m*d.scale+d.min)}}else throw new Error(`Unsupported dtype in weight '${i}': ${a}`);r+=l*h}else if(a==="string"){const d=sizeFromShape(o.shape);u=[];for(let h=0;h<d;h++){const f=new Uint32Array(t.slice(r,r+Ds))[0];r+=Ds;const p=new Uint8Array(t.slice(r,r+f));u.push(p),r+=f}}else{const d=DTYPE_VALUE_SIZE_MAP[a],h=t.slice(r,r+l*d);if(a==="float32")u=new Float32Array(h);else if(a==="int32")u=new Int32Array(h);else if(a==="bool")u=new Uint8Array(h);else if(a==="complex64"){u=new Float32Array(h);const f=new Float32Array(u.length/2),p=new Float32Array(u.length/2);for(let x=0;x<f.length;x++)f[x]=u[x*2],p[x]=u[x*2+1];const g=tensor(f,c,"float32"),m=tensor(p,c,"float32");n[i]=complex(g,m),g.dispose(),m.dispose()}else throw new Error(`Unsupported dtype in weight '${i}': ${a}`);r+=l*d}a!=="complex64"&&(n[i]=tensor(u,c,a))}return n}function Tf(t){if(t===null)throw new Error(`Invalid input value: ${JSON.stringify(t)}`);let e=0;const n=[];t.forEach(o=>{if(e+=o.byteLength,n.push(o.byteLength===o.buffer.byteLength?o:new o.constructor(o)),!(o instanceof Float32Array||o instanceof Int32Array||o instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${o.constructor.name}`)});const s=new Uint8Array(e);let r=0;return n.forEach(o=>{s.set(new Uint8Array(o.buffer),r),r+=o.byteLength}),s.buffer}const so=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function Ea(t){return so?Buffer.byteLength(t):new Blob([t]).size}function Rf(t){if(so)return Buffer.from(t).toString("base64");const e=new Uint8Array(t);let n="";for(let s=0,r=e.length;s<r;s++)n+=String.fromCharCode(e[s]);return btoa(n)}function kf(t){if(so){const s=Buffer.from(t,"base64");return s.buffer.slice(s.byteOffset,s.byteOffset+s.byteLength)}const e=atob(t),n=new Uint8Array(e.length);for(let s=0;s<e.length;++s)n.set([e.charCodeAt(s)],s);return n.buffer}function Nf(t){if(t.length===1)return t[0];let e=0;t.forEach(r=>{e+=r.byteLength});const n=new Uint8Array(e);let s=0;return t.forEach(r=>{n.set(new Uint8Array(r),s),s+=r.byteLength}),n.buffer}function ZT(t){const e="/";for(t=t.trim();t.endsWith(e);)t=t.slice(0,t.length-1);const n=t.split(e);return n[n.length-1]}function Ta(t,e){const n={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:e};return t.signature!=null&&(n.signature=t.signature),t.userDefinedMetadata!=null&&(n.userDefinedMetadata=t.userDefinedMetadata),t.modelInitializer!=null&&(n.modelInitializer=t.modelInitializer),t.trainingConfig!=null&&(n.trainingConfig=t.trainingConfig),n}function _f(t,e){return no(this,null,function*(){const n={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy};if(t.trainingConfig!=null&&(n.trainingConfig=t.trainingConfig),t.weightsManifest!=null){const[s,r]=yield e(t.weightsManifest);n.weightSpecs=s,n.weightData=r}return t.signature!=null&&(n.signature=t.signature),t.userDefinedMetadata!=null&&(n.userDefinedMetadata=t.userDefinedMetadata),t.modelInitializer!=null&&(n.modelInitializer=t.modelInitializer),n})}function Fs(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:t.modelTopology==null?0:Ea(JSON.stringify(t.modelTopology)),weightSpecsBytes:t.weightSpecs==null?0:Ea(JSON.stringify(t.weightSpecs)),weightDataBytes:t.weightData==null?0:t.weightData.byteLength}}function Af(){const t=n=>{let s=n<<13,r=0;for(;(s&8388608)===0;)r-=8388608,s<<=1;return s&=-8388609,r+=947912704,s|r},e=new Uint32Array(2048);e[0]=0;for(let n=1;n<1024;n++)e[n]=t(n);for(let n=1024;n<2048;n++)e[n]=939524096+(n-1024<<13);return e}function Df(){const t=new Uint32Array(64);t[0]=0,t[31]=1199570944,t[32]=2147483648,t[63]=3347054592;for(let e=1;e<31;e++)t[e]=e<<23;for(let e=33;e<63;e++)t[e]=2147483648+(e-32<<23);return t}function Ff(){const t=new Uint32Array(64);for(let e=0;e<64;e++)t[e]=1024;return t[0]=t[32]=0,t}function Of(){const t=Af(),e=Df(),n=Ff();return s=>{const r=new ArrayBuffer(4*s.length),o=new Uint32Array(r);for(let i=0;i<s.length;i++){const a=s[i],c=t[n[a>>10]+(a&1023)]+e[a>>10];o[i]=c}return new Float32Array(r)}}/**
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
 */class $e{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return $e.instance==null&&($e.instance=new $e),$e.instance}static registerSaveRouter(e){$e.getInstance().saveRouters.push(e)}static registerLoadRouter(e){$e.getInstance().loadRouters.push(e)}static getSaveHandlers(e){return $e.getHandlers(e,"save")}static getLoadHandlers(e,n){return $e.getHandlers(e,"load",n)}static getHandlers(e,n,s){const r=[];return(n==="load"?$e.getInstance().loadRouters:$e.getInstance().saveRouters).forEach(i=>{const a=i(e,s);a!==null&&r.push(a)}),r}}const JT=t=>$e.registerSaveRouter(t),e2=t=>$e.registerLoadRouter(t),t2=t=>$e.getSaveHandlers(t),n2=(t,e)=>$e.getLoadHandlers(t,e);var Hn=(t,e,n)=>new Promise((s,r)=>{var o=c=>{try{a(n.next(c))}catch(l){r(l)}},i=c=>{try{a(n.throw(c))}catch(l){r(l)}},a=c=>c.done?s(c.value):Promise.resolve(c.value).then(o,i);a((n=n.apply(t,e)).next())});/**
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
 */const Os="tensorflowjs",ro=1,zt="models_store",Ft="model_info_store";function s2(){return Hn(this,null,function*(){const t=oo();return new Promise((e,n)=>{const s=t.deleteDatabase(Os);s.onsuccess=()=>e(),s.onerror=r=>n(r)})})}function oo(){if(!S().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const t=typeof window>"u"?self:window,e=t.indexedDB||t.mozIndexedDB||t.webkitIndexedDB||t.msIndexedDB||t.shimIndexedDB;if(e==null)throw new Error("The current browser does not appear to support IndexedDB.");return e}function io(t){const e=t.result;e.createObjectStore(zt,{keyPath:"modelPath"}),e.createObjectStore(Ft,{keyPath:"modelPath"})}class Ht{constructor(e){if(this.indexedDB=oo(),e==null||!e)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=e}save(e){return Hn(this,null,function*(){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,e)})}load(){return Hn(this,null,function*(){return this.databaseAction(this.modelPath)})}databaseAction(e,n){return new Promise((s,r)=>{const o=this.indexedDB.open(Os,ro);o.onupgradeneeded=()=>io(o),o.onsuccess=()=>{const i=o.result;if(n==null){const a=i.transaction(zt,"readonly"),l=a.objectStore(zt).get(this.modelPath);l.onsuccess=()=>{if(l.result==null)return i.close(),r(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));s(l.result.modelArtifacts)},l.onerror=u=>(i.close(),r(l.error)),a.oncomplete=()=>i.close()}else{const a=Fs(n),c=i.transaction(Ft,"readwrite");let l=c.objectStore(Ft);const u=l.put({modelPath:this.modelPath,modelArtifactsInfo:a});let d;u.onsuccess=()=>{d=i.transaction(zt,"readwrite");const f=d.objectStore(zt).put({modelPath:this.modelPath,modelArtifacts:n,modelArtifactsInfo:a});f.onsuccess=()=>s({modelArtifactsInfo:a}),f.onerror=p=>{l=c.objectStore(Ft);const g=l.delete(this.modelPath);g.onsuccess=()=>(i.close(),r(f.error)),g.onerror=m=>(i.close(),r(f.error))}},u.onerror=h=>(i.close(),r(u.error)),c.oncomplete=()=>{d==null?i.close():d.oncomplete=()=>i.close()}}},o.onerror=i=>r(o.error)})}}Ht.URL_SCHEME="indexeddb://";const Ra=t=>S().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(Ht.URL_SCHEME)?Pf(t.slice(Ht.URL_SCHEME.length)):null;$e.registerSaveRouter(Ra),$e.registerLoadRouter(Ra);function Pf(t){return new Ht(t)}function Lf(t){return t.startsWith(Ht.URL_SCHEME)?t.slice(Ht.URL_SCHEME.length):t}class Bf{constructor(){this.indexedDB=oo()}listModels(){return Hn(this,null,function*(){return new Promise((e,n)=>{const s=this.indexedDB.open(Os,ro);s.onupgradeneeded=()=>io(s),s.onsuccess=()=>{const r=s.result,o=r.transaction(Ft,"readonly"),a=o.objectStore(Ft).getAll();a.onsuccess=()=>{const c={};for(const l of a.result)c[l.modelPath]=l.modelArtifactsInfo;e(c)},a.onerror=c=>(r.close(),n(a.error)),o.oncomplete=()=>r.close()},s.onerror=r=>n(s.error)})})}removeModel(e){return Hn(this,null,function*(){return e=Lf(e),new Promise((n,s)=>{const r=this.indexedDB.open(Os,ro);r.onupgradeneeded=()=>io(r),r.onsuccess=()=>{const o=r.result,i=o.transaction(Ft,"readwrite"),a=i.objectStore(Ft),c=a.get(e);let l;c.onsuccess=()=>{if(c.result==null)return o.close(),s(new Error(`Cannot find model with path '${e}' in IndexedDB.`));{const u=a.delete(e),d=()=>{l=o.transaction(zt,"readwrite");const f=l.objectStore(zt).delete(e);f.onsuccess=()=>n(c.result.modelArtifactsInfo),f.onerror=p=>s(c.error)};u.onsuccess=d,u.onerror=h=>(d(),o.close(),s(c.error))}},c.onerror=u=>(o.close(),s(c.error)),i.oncomplete=()=>{l==null?o.close():l.oncomplete=()=>o.close()}},r.onerror=o=>s(r.error)})})}}var Ps=(t,e,n)=>new Promise((s,r)=>{var o=c=>{try{a(n.next(c))}catch(l){r(l)}},i=c=>{try{a(n.throw(c))}catch(l){r(l)}},a=c=>c.done?s(c.value):Promise.resolve(c.value).then(o,i);a((n=n.apply(t,e)).next())});/**
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
 */const yt="/",Xt="tensorflowjs_models",ka="info",Mf="model_topology",Vf="weight_specs",Uf="weight_data",Wf="model_metadata";function r2(){if(!env().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("purgeLocalStorageModels() cannot proceed because local storage is unavailable in the current environment.");const t=window.localStorage,e=[];for(let n=0;n<t.length;++n){const s=t.key(n),r=Xt+yt;if(s.startsWith(r)&&s.length>r.length){t.removeItem(s);const o=Aa(s);e.indexOf(o)===-1&&e.push(o)}}return e}function Na(t){return{info:[Xt,t,ka].join(yt),topology:[Xt,t,Mf].join(yt),weightSpecs:[Xt,t,Vf].join(yt),weightData:[Xt,t,Uf].join(yt),modelMetadata:[Xt,t,Wf].join(yt)}}function _a(t){for(const e of Object.values(t))window.localStorage.removeItem(e)}function Aa(t){const e=t.split(yt);if(e.length<3)throw new Error(`Invalid key format: ${t}`);return e.slice(1,e.length-1).join(yt)}function Gf(t){return t.startsWith(qt.URL_SCHEME)?t.slice(qt.URL_SCHEME.length):t}class qt{constructor(e){if(!S().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,e==null||!e)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=e,this.keys=Na(this.modelPath)}save(e){return Ps(this,null,function*(){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const n=JSON.stringify(e.modelTopology),s=JSON.stringify(e.weightSpecs),r=Fs(e);try{this.LS.setItem(this.keys.info,JSON.stringify(r)),this.LS.setItem(this.keys.topology,n),this.LS.setItem(this.keys.weightSpecs,s),this.LS.setItem(this.keys.weightData,Rf(e.weightData));const o={format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,signature:e.signature!=null?e.signature:void 0,userDefinedMetadata:e.userDefinedMetadata!=null?e.userDefinedMetadata:void 0,modelInitializer:e.modelInitializer!=null?e.modelInitializer:void 0,trainingConfig:e.trainingConfig!=null?e.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(o)),{modelArtifactsInfo:r}}catch{throw _a(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${r.modelTopologyBytes}, weightSpecsBytes=${r.weightSpecsBytes}, weightDataBytes=${r.weightDataBytes}.`)}}})}load(){return Ps(this,null,function*(){const e=JSON.parse(this.LS.getItem(this.keys.info));if(e==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(e.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const n={},s=JSON.parse(this.LS.getItem(this.keys.topology));if(s==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);n.modelTopology=s;const r=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(r==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);n.weightSpecs=r;const o=this.LS.getItem(this.keys.modelMetadata);if(o!=null){const a=JSON.parse(o);n.format=a.format,n.generatedBy=a.generatedBy,n.convertedBy=a.convertedBy,a.signature!=null&&(n.signature=a.signature),a.userDefinedMetadata!=null&&(n.userDefinedMetadata=a.userDefinedMetadata),a.modelInitializer!=null&&(n.modelInitializer=a.modelInitializer),a.trainingConfig!=null&&(n.trainingConfig=a.trainingConfig)}const i=this.LS.getItem(this.keys.weightData);if(i==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return n.weightData=kf(i),n})}}qt.URL_SCHEME="localstorage://";const Da=t=>S().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(qt.URL_SCHEME)?zf(t.slice(qt.URL_SCHEME.length)):null;$e.registerSaveRouter(Da),$e.registerLoadRouter(Da);function zf(t){return new qt(t)}class Hf{constructor(){v(S().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),v(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}listModels(){return Ps(this,null,function*(){const e={},n=Xt+yt,s=yt+ka;for(let r=0;r<this.LS.length;++r){const o=this.LS.key(r);if(o.startsWith(n)&&o.endsWith(s)){const i=Aa(o);e[i]=JSON.parse(this.LS.getItem(o))}}return e})}removeModel(e){return Ps(this,null,function*(){e=Gf(e);const n=Na(e);if(this.LS.getItem(n.info)==null)throw new Error(`Cannot find model at path '${e}'`);const s=JSON.parse(this.LS.getItem(n.info));return _a(n),s})}}var Xn=(t,e,n)=>new Promise((s,r)=>{var o=c=>{try{a(n.next(c))}catch(l){r(l)}},i=c=>{try{a(n.throw(c))}catch(l){r(l)}},a=c=>c.done?s(c.value):Promise.resolve(c.value).then(o,i);a((n=n.apply(t,e)).next())});/**
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
 */const ln="://";class Be{constructor(){this.managers={}}static getInstance(){return Be.instance==null&&(Be.instance=new Be),Be.instance}static registerManager(e,n){v(e!=null,()=>"scheme must not be undefined or null."),e.endsWith(ln)&&(e=e.slice(0,e.indexOf(ln))),v(e.length>0,()=>"scheme must not be an empty string.");const s=Be.getInstance();v(s.managers[e]==null,()=>`A model store manager is already registered for scheme '${e}'.`),s.managers[e]=n}static getManager(e){const n=Be.getInstance().managers[e];if(n==null)throw new Error(`Cannot find model manager for scheme '${e}'`);return n}static getSchemes(){return Object.keys(Be.getInstance().managers)}}function Ls(t){if(t.indexOf(ln)===-1)throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${Be.getSchemes().join(",")}`);return{scheme:t.split(ln)[0],path:t.split(ln)[1]}}function Fa(t,e,n=!1){return Xn(this,null,function*(){assert(t!==e,()=>`Old path and new path are the same: '${t}'`);const s=IORouterRegistry.getLoadHandlers(t);assert(s.length>0,()=>`Copying failed because no load handler is found for source URL ${t}.`),assert(s.length<2,()=>`Copying failed because more than one (${s.length}) load handlers for source URL ${t}.`);const r=s[0],o=IORouterRegistry.getSaveHandlers(e);assert(o.length>0,()=>`Copying failed because no save handler is found for destination URL ${e}.`),assert(o.length<2,()=>`Copying failed because more than one (${s.length}) save handlers for destination URL ${e}.`);const i=o[0],a=Ls(t).scheme,c=Ls(t).path,l=a===Ls(t).scheme,u=yield r.load();n&&l&&(yield Be.getManager(a).removeModel(c));const d=yield i.save(u);return n&&!l&&(yield Be.getManager(a).removeModel(c)),d.modelArtifactsInfo})}function o2(){return Xn(this,null,function*(){const t=Be.getSchemes(),e={};for(const n of t){const s=yield Be.getManager(n).listModels();for(const r in s){const o=n+ln+r;e[o]=s[r]}}return e})}function i2(t){return Xn(this,null,function*(){const e=Ls(t);return Be.getManager(e.scheme).removeModel(e.path)})}function a2(t,e){return Xn(this,null,function*(){return Fa(t,e,!1)})}function c2(t,e){return Xn(this,null,function*(){return Fa(t,e,!0)})}/**
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
 */class Xf{fetch(e,n){return fetch(e,n)}now(){return performance.now()}encode(e,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${n}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(e)}decode(e,n){return new TextDecoder(n).decode(e)}}if(S().get("IS_BROWSER")){S().setPlatform("browser",new Xf);try{Be.registerManager(qt.URL_SCHEME,new Hf)}catch{}try{Be.registerManager(Ht.URL_SCHEME,new Bf)}catch{}}/**
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
 */const qf={importFetch:()=>M(613)};let un;function l2(){un=null}function u2(t){un=t}function d2(){return un}class Kf{constructor(){this.util=M(4240),this.textEncoder=new this.util.TextEncoder}fetch(e,n){return S().global.fetch!=null?S().global.fetch(e,n):(un==null&&(un=qf.importFetch()),un(e,n))}now(){const e=process.hrtime();return e[0]*1e3+e[1]/1e6}encode(e,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${n}`);return this.textEncoder.encode(e)}decode(e,n){return e.length===0?"":new this.util.TextDecoder(n).decode(e)}}S().get("IS_NODE")&&!S().get("IS_BROWSER")&&S().setPlatform("node",new Kf);/**
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
 */function _e(t,e="float32",n){return e=e||"float32",ci(t),new qr(t,e,n)}/**
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
 */function Bs(t,e){let n=t;if(Xe(t))return e==="string"?[]:[t.length];if(!Array.isArray(t))return[];const s=[];for(;Array.isArray(n)||Xe(n)&&e!=="string";)s.push(n.length),n=n[0];return Array.isArray(t)&&S().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&Oa(t,s,[]),s}function Oa(t,e,n){if(n=n||[],!Array.isArray(t)&&!Xe(t)){v(e.length===0,()=>`Element arr[${n.join("][")}] is a primitive, but should be an array/TypedArray of ${e[0]} elements`);return}v(e.length>0,()=>`Element arr[${n.join("][")}] should be a primitive, but is an array of ${t.length} elements`),v(t.length===e[0],()=>`Element arr[${n.join("][")}] should have ${e[0]} elements, but has ${t.length} elements`);const s=e.slice(1);for(let r=0;r<t.length;++r)Oa(t[r],s,n.concat(r))}function Pa(t,e,n,s){if(t!=="string_or_numeric"){if(t==null)throw new Error("Expected dtype cannot be null.");if(t!=="numeric"&&t!==e||t==="numeric"&&e==="string")throw new Error(`Argument '${n}' passed to '${s}' must be ${t} tensor, but got ${e} tensor`)}}function I(t,e,n,s="numeric"){if(t instanceof ot)return Pa(s,t.dtype,e,n),t;let r=hs(t);if(r!=="string"&&["bool","int32","float32"].indexOf(s)>=0&&(r=s),Pa(s,r,e,n),t==null||!Xe(t)&&!Array.isArray(t)&&typeof t!="number"&&typeof t!="boolean"&&typeof t!="string"){const c=t==null?"null":t.constructor.name;throw new Error(`Argument '${e}' passed to '${n}' must be a Tensor or TensorLike, but got '${c}'`)}const o=Bs(t,r);!Xe(t)&&!Array.isArray(t)&&(t=[t]);const a=r!=="string"?ks(t,r):Te(t,[],!0);return A.makeTensor(a,o,r)}function La(t,e,n,s="numeric"){if(!Array.isArray(t))throw new Error(`Argument ${e} passed to ${n} must be a \`Tensor[]\` or \`TensorLike[]\``);return t.map((o,i)=>I(o,`${e}[${i}]`,n,s))}/**
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
 */const jf="__op";function _(t){const e=Object.keys(t);if(e.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${e.length} keys.`);let n=e[0];const s=t[n];n.endsWith("_")&&(n=n.substring(0,n.length-1)),n=n+jf;const r=(...o)=>{A.startScope(n);try{const i=s(...o);return li(i)&&console.error("Cannot return a Promise inside of tidy."),A.endScope(i),i}catch(i){throw A.endScope(null),i}};return Object.defineProperty(r,"name",{value:n,configurable:!0}),r}/**
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
 */function Yf(t,e){const n=I(t,"x","cast");if(!Re(e))throw new Error(`Failed to cast to unknown dtype ${e}`);if(e==="string"&&n.dtype!=="string"||e!=="string"&&n.dtype==="string")throw new Error("Only strings can be casted to strings");const s={x:n},r={dtype:e};return A.runKernel(fs,s,r)}const vt=_({cast_:Yf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qf(t){const n={x:I(t,"x","clone","string_or_numeric")};return A.runKernel(xs,n)}const dn=_({clone_:Qf});/**
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
 */function Zf(t,e=!1){console.log(t.toString(e))}/**
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
 */$a(),Cf({buffer:_e,cast:vt,clone:dn,print:Zf});var Ba=(t,e,n)=>new Promise((s,r)=>{var o=c=>{try{a(n.next(c))}catch(l){r(l)}},i=c=>{try{a(n.throw(c))}catch(l){r(l)}},a=c=>c.done?s(c.value):Promise.resolve(c.value).then(o,i);a((n=n.apply(t,e)).next())});/**
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
 */const Jf="model",ep=".json",tp=".weights.bin";function Ma(t){return new Promise(e=>setTimeout(e)).then(t)}class Kt{constructor(e){if(!S().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");e.startsWith(Kt.URL_SCHEME)&&(e=e.slice(Kt.URL_SCHEME.length)),(e==null||e.length===0)&&(e=Jf),this.modelJsonFileName=e+ep,this.weightDataFileName=e+tp}save(e){return Ba(this,null,function*(){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");const n=window.URL.createObjectURL(new Blob([e.weightData],{type:"application/octet-stream"}));if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const s=[{paths:["./"+this.weightDataFileName],weights:e.weightSpecs}],r=Ta(e,s),o=window.URL.createObjectURL(new Blob([JSON.stringify(r)],{type:"application/json"})),i=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(i.download=this.modelJsonFileName,i.href=o,yield Ma(()=>i.dispatchEvent(new MouseEvent("click"))),e.weightData!=null){const a=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;a.download=this.weightDataFileName,a.href=n,yield Ma(()=>a.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:Fs(e)}}})}}Kt.URL_SCHEME="downloads://";class np{constructor(e){if(e==null||e.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${e}`);this.jsonFile=e[0],this.weightsFiles=e.slice(1)}load(){return Ba(this,null,function*(){return new Promise((e,n)=>{const s=new FileReader;s.onload=r=>{const o=JSON.parse(r.target.result),i=o.modelTopology;if(i==null){n(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));return}if(o.weightsManifest==null){n(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));return}if(this.weightsFiles.length===0){e({modelTopology:i});return}const c=getModelArtifactsForJSON(o,l=>this.loadWeights(l));e(c)},s.onerror=r=>n(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),s.readAsText(this.jsonFile)})})}loadWeights(e){const n=[],s=[];for(const i of e)n.push(...i.weights),s.push(...i.paths);const r=this.checkManifestAndWeightFiles(e),o=s.map(i=>this.loadWeightsFile(i,r[i]));return Promise.all(o).then(i=>[n,concatenateArrayBuffers(i)])}loadWeightsFile(e,n){return new Promise((s,r)=>{const o=new FileReader;o.onload=i=>{const a=i.target.result;s(a)},o.onerror=i=>r(`Failed to weights data from file of path '${e}'.`),o.readAsArrayBuffer(n)})}checkManifestAndWeightFiles(e){const n=[],s=this.weightsFiles.map(o=>basename(o.name)),r={};for(const o of e)o.paths.forEach(i=>{const a=basename(i);if(n.indexOf(a)!==-1)throw new Error(`Duplicate file basename found in weights manifest: '${a}'`);if(n.push(a),s.indexOf(a)===-1)throw new Error(`Weight file with basename '${a}' is not provided.`);r[i]=this.weightsFiles[s.indexOf(a)]});if(n.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${n.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return r}}const sp=t=>S().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(Kt.URL_SCHEME)?rp(t.slice(Kt.URL_SCHEME.length)):null;$e.registerSaveRouter(sp);function rp(t="model"){return new Kt(t)}function f2(t){return new np(t)}/**
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
 */function Va(t,e,n,s){i(t),n=n??0,s=s??1,a(n,s);let r=0;const o=c=>(c.then(l=>{const u=n+ ++r/t.length*(s-n);return e(u),l}),c);function i(c){v(c!=null&&Array.isArray(c)&&c.length>0,()=>"promises must be a none empty array")}function a(c,l){v(c>=0&&c<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${c}`),v(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${l}`),v(l>=c,()=>`startFraction must be no more than endFraction, but got startFraction ${c} and endFraction ${l}`)}return Promise.all(t.map(o))}var ao=(t,e,n)=>new Promise((s,r)=>{var o=c=>{try{a(n.next(c))}catch(l){r(l)}},i=c=>{try{a(n.throw(c))}catch(l){r(l)}},a=c=>c.done?s(c.value):Promise.resolve(c.value).then(o,i);a((n=n.apply(t,e)).next())});/**
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
 */function Ua(t,e){return ao(this,null,function*(){e==null&&(e={});const n=e.fetchFunc==null?S().platform.fetch:e.fetchFunc,s=t.map(d=>n(d,e.requestInit,{isBinary:!0})),r=0,o=.5,a=(e.onProgress==null?yield Promise.all(s):yield Va(s,e.onProgress,r,o)).map(d=>d.arrayBuffer()),c=.5,l=1;return e.onProgress==null?yield Promise.all(a):yield Va(a,e.onProgress,c,l)})}function p2(t,e="",n,s){return ao(this,null,function*(){return op(i=>Ua(i,{requestInit:s}))(t,e,n)})}function op(t){return(e,n="",s)=>ao(this,null,function*(){const r=e.map(()=>!1),o={},i=s!=null?s.map(()=>!1):[],a=[];if(e.forEach((f,p)=>{let g=0;f.weights.forEach(m=>{const x="quantization"in m?m.quantization.dtype:m.dtype,b=DTYPE_VALUE_SIZE_MAP[x]*util.sizeFromShape(m.shape),w=()=>{r[p]=!0,o[p]==null&&(o[p]=[]),o[p].push({manifestEntry:m,groupOffset:g,sizeBytes:b})};s!=null?s.forEach((y,$)=>{y===m.name&&(w(),i[$]=!0)}):w(),a.push(m.name),g+=b})}),!i.every(f=>f)){const f=s.filter((p,g)=>!i[g]);throw new Error(`Could not find weights in manifest with names: ${f.join(", ")}. 
Manifest JSON has weights with names: ${a.join(", ")}.`)}const c=r.reduce((f,p,g)=>(p&&f.push(g),f),[]),l=[];c.forEach(f=>{e[f].paths.forEach(p=>{const g=n+(n.endsWith("/")?"":"/")+p;l.push(g)})});const u=yield t(l),d={};let h=0;return c.forEach(f=>{const p=e[f].paths.length;let g=0;for(let y=0;y<p;y++)g+=u[h+y].byteLength;const m=new ArrayBuffer(g),x=new Uint8Array(m);let b=0;for(let y=0;y<p;y++){const $=new Uint8Array(u[h+y]);x.set($,b),b+=$.byteLength}o[f].forEach(y=>{const $=m.slice(y.groupOffset,y.groupOffset+y.sizeBytes),N=decodeWeights($,[y.manifestEntry]);for(const R in N)d[R]=N[R]}),h+=p}),d})}var co=(t,e,n)=>new Promise((s,r)=>{var o=c=>{try{a(n.next(c))}catch(l){r(l)}},i=c=>{try{a(n.throw(c))}catch(l){r(l)}},a=c=>c.done?s(c.value):Promise.resolve(c.value).then(o,i);a((n=n.apply(t,e)).next())});/**
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
 */const ip="application/octet-stream",ap="application/json";class lo{constructor(e,n){if(this.DEFAULT_METHOD="POST",n==null&&(n={}),this.weightPathPrefix=n.weightPathPrefix,this.onProgress=n.onProgress,this.weightUrlConverter=n.weightUrlConverter,n.fetchFunc!=null?(v(typeof n.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=n.fetchFunc):this.fetch=S().platform.fetch,v(e!=null&&e.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(e)&&v(e.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${e.length}).`),this.path=e,n.requestInit!=null&&n.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=n.requestInit||{}}save(e){return co(this,null,function*(){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const n=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);n.body=new FormData;const s=[{paths:["./model.weights.bin"],weights:e.weightSpecs}],r=Ta(e,s);n.body.append("model.json",new Blob([JSON.stringify(r)],{type:ap}),"model.json"),e.weightData!=null&&n.body.append("model.weights.bin",new Blob([e.weightData],{type:ip}),"model.weights.bin");const o=yield this.fetch(this.path,n);if(o.ok)return{modelArtifactsInfo:Fs(e),responses:[o]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${o.status}.`)})}load(){return co(this,null,function*(){const e=yield this.fetch(this.path,this.requestInit);if(!e.ok)throw new Error(`Request to ${this.path} failed with status code ${e.status}. Please verify this URL points to the model JSON of the model to load.`);let n;try{n=yield e.json()}catch{let i=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?i+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":i+=" Please make sure the server is serving valid JSON for this request.",new Error(i)}const s=n.modelTopology,r=n.weightsManifest;if(s==null&&r==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return _f(n,o=>this.loadWeights(o))})}loadWeights(e){return co(this,null,function*(){const n=Array.isArray(this.path)?this.path[1]:this.path,[s,r]=cp(n),o=this.weightPathPrefix||s,i=[];for(const u of e)i.push(...u.weights);const a=[],c=[];for(const u of e)for(const d of u.paths)this.weightUrlConverter!=null?c.push(this.weightUrlConverter(d)):a.push(o+d+r);this.weightUrlConverter&&a.push(...yield Promise.all(c));const l=yield Ua(a,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress});return[i,Nf(l)]})}}lo.URL_SCHEME_REGEX=/^https?:\/\//;function cp(t){const e=t.lastIndexOf("/"),n=t.lastIndexOf("?"),s=t.substring(0,e),r=n>e?t.substring(n):"";return[s+"/",r]}function Wa(t){return t.match(lo.URL_SCHEME_REGEX)!=null}const Ga=(t,e)=>{if(typeof fetch>"u"&&(e==null||e.fetchFunc==null))return null;{let n=!0;if(Array.isArray(t)?n=t.every(s=>Wa(s)):n=Wa(t),n)return za(t,e)}return null};$e.registerSaveRouter(Ga),$e.registerLoadRouter(Ga);function za(t,e){return new lo(t,e)}function g2(t,e){return za(t,e)}/**
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
 */class uo{constructor(e){this.modelArtifacts=e}load(){return this.modelArtifacts}}class Ha{constructor(e){this.saveHandler=e}save(e){return this.saveHandler(e)}}class lp{constructor(e){e.load&&(this.load=()=>Promise.resolve(e.load())),e.save&&(this.save=n=>Promise.resolve(e.save(n)))}}function m2(t,e,n,s){const r=arguments;return new lp(up(...r))}function up(t,e,n,s){return arguments.length===1?t.modelTopology!=null||t.weightSpecs!=null?new uo(t):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new uo({modelTopology:t})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new uo({modelTopology:t,weightSpecs:e,weightData:n,trainingConfig:s}))}function x2(t){return new Ha(t)}function b2(t){return new Ha(t)}/**
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
 */function hn(t,e){const n=t.length,s=[];for(let r=0;r<n;r++){const o=n-1-r,i=t[o]||1;(e[e.length-1-r]||1)>1&&i===1&&s.unshift(o)}return s}function Xa(t,e){const n=[];for(let s=0;s<e.length;s++){const r=t[t.length-s-1],o=e.length-s-1,i=e[o];(r==null||r===1&&i>1)&&n.unshift(o)}return n}function Ce(t,e){const n=[],s=Math.max(t.length,e.length);for(let r=0;r<s;r++){let o=t[t.length-r-1];o==null&&(o=1);let i=e[e.length-r-1];if(i==null&&(i=1),o===1)n.unshift(i);else if(i===1)n.unshift(o);else if(o!==i){const a=`Operands could not be broadcast together with shapes ${t} and ${e}.`;throw Error(a)}else n.unshift(o)}return n}/**
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
 */const ho=-2,dp=-1;function fo(t,e,n){const s=t.shape.length;v(s===e.length,()=>`Error in slice${s}D: Length of begin ${e} must match the rank of the array (${s}).`),v(s===n.length,()=>`Error in slice${s}D: Length of size ${n} must match the rank of the array (${s}).`);for(let r=0;r<s;++r)v(e[r]+n[r]<=t.shape[r],()=>`Error in slice${s}D: begin[${r}] + size[${r}] (${e[r]+n[r]}) would overflow input.shape[${r}] (${t.shape[r]})`)}function hp(t){const e=[];let n=0;for(;t>0;)t&1&&e.push(n),t/=2,n++;return e}function qa(t,e,n){const s=[];for(let r=0;r<t.length;r++)s[r]=Math.ceil((e[r]-t[r])/n[r]);return s}function Ka(t,e,n,s){const r=[...t];for(let o=r.length;o<s.length;o++)r.push(1);for(let o=0;o<n;o++)o===0?r[e]=1:(r.splice(e,0,1),r.pop());return r}function ja(t,e,n){return n<=t?n:n-(e-1)}function Ya(t,e){const n=[];for(let s=0;s<t;s++)n.push(e+s);return n}function fp(t,e,n,s,r,o,i,a,c){const l=t.length;let u=new Array(l),d=new Array(l),h=new Array(l);if(e.length&&n>0){const f=e[0],p=n+1;u=Qa(i,f,p,s,t),d=Za(a,f,p,r,t),h=Ka(o,f,p,t)}else for(let f=0;f<l;f++)u[f]=ec(i,s,o,t,f,c),d[f]=tc(a,r,o,t,f,c),h[f]=Ja(o,f,c);return{begin:u,end:d,strides:h}}function Qa(t,e,n,s,r){const o=[...r],i=Ya(n,e);for(let a=0;a<o.length;a++)if(i.indexOf(a)>-1)o[a]=0;else{const c=ja(e,n,a);let l=s[c];t&1<<c&&(l=0),o[a]=l}return o}function Za(t,e,n,s,r){const o=[...r],i=Ya(n,e);for(let a=0;a<o.length;a++)if(i.indexOf(a)>-1)o[a]=Number.MAX_SAFE_INTEGER;else{const c=ja(e,n,a);let l=s[c];t&1<<c&&(l=Number.MAX_SAFE_INTEGER),o[a]=l}for(let a=0;a<o.length;a++){const c=r[a];o[a]<0&&(o[a]+=c),o[a]=F(0,o[a],r[a])}return o}function Ja(t,e,n){let s=t[e];return(n&1<<e||s==null)&&(s=1),s}function ec(t,e,n,s,r,o){let i=e[r];const a=n[r]||1;(t&1<<r||o&1<<r||i==null)&&(a>0?i=Number.MIN_SAFE_INTEGER:i=Number.MAX_SAFE_INTEGER);const c=s[r];return i<0&&(i+=c),i=F(0,i,c-1),i}function tc(t,e,n,s,r,o){let i=e[r];const a=n[r]||1;(t&1<<r||o&1<<r||i==null)&&(a>0?i=Number.MAX_SAFE_INTEGER:i=Number.MIN_SAFE_INTEGER);const c=s[r];return i<0&&(i+=c),a>0?i=F(0,i,c):i=F(-1,i,c-1),i}function po(t,e,n){let s=n.length;for(let r=0;r<n.length;r++)if(n[r]>1){s=r;break}for(let r=s+1;r<n.length;r++)if(e[r]>0||n[r]!==t[r])return!1;return!0}function go(t,e){let n=t.length>0?t[t.length-1]:1;for(let s=0;s<t.length-1;s++)n+=t[s]*e[s];return n}function mo(t,e,n){let s;const r=t.shape.length;typeof e=="number"?s=[e,...new Array(r-1).fill(0)]:e.length<r?s=e.concat(new Array(r-e.length).fill(0)):s=e.slice(),s.forEach(i=>{v(i!==-1,()=>"slice() does not support negative begin indexing.")});let o;return n==null?o=new Array(r).fill(-1):typeof n=="number"?o=[n,...new Array(r-1).fill(-1)]:n.length<r?o=n.concat(new Array(r-n.length).fill(-1)):o=n,o=o.map((i,a)=>i>=0?i:(v(i===-1,()=>`Negative size values should be exactly -1 but got ${i} for the slice() size at index ${a}.`),t.shape[a]-s[a])),[s,o]}function nc(t,e,n,s,r,o,i,a,c){let l;if(s==null?(l=new Array(e.length),l.fill(1)):l=s,i!=null&&(i&i-1)!==0)throw new Error("Multiple ellipses in slice is not allowed.");let u=!1;const d={dims:l.length,numAddAxisAfterEllipsis:0,begin:e.slice(),end:n.slice(),strides:l.slice(),beginMask:r,endMask:o,ellipsisMask:i,newAxisMask:a,shrinkAxisMask:c};for(let w=0;w<d.dims;w++)u&&(1<<w&a)!==0&&d.numAddAxisAfterEllipsis++,1<<w&i&&(u=!0);u||(d.ellipsisMask|=1<<d.dims,d.dims++);const h={dims:t.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};pp(d,h);let f=!0,p=!0,g=!0;const m=[],x=[];for(let w=0;w<t.length;++w){if(h.strides[w]===0)throw Error(`strides[${w}] must be non-zero`);const y=!!(h.shrinkAxisMask&1<<w),$=t[w];if($===-1){m.push(y?1:-1);continue}const N=[h.beginMask&1<<w,h.endMask&1<<w],R=[h.strides[w]>0?0:-1,h.strides[w]>0?$:$-1];if(y&&h.strides[w]<=0)throw Error("only stride 1 allowed on non-range indexing.");g=g&&h.strides[w]===1;const k=!!(h.beginMask&1<<w&&h.endMask&1<<w);if(h.beginValid&&h.endValid){if(y){const ie=h.begin[w]<0?$+h.begin[w]:h.begin[w];if(h.begin[w]=ie,h.end[w]=h.begin[w]+1,ie<0||ie>=$)throw Error(`slice index ${h.begin[w]} of dimension ${w} out of bounds.`)}else h.begin[w]=sc(h.begin[w],0,h.strides[w],$,N,R),h.end[w]=sc(h.end[w],1,h.strides[w],$,N,R);const Q=h.strides[w]===1&&h.begin[w]===0&&h.end[w]===$;f=f&&Q,p=p&&(w===0&&h.strides[w]===1||Q)}else f=f&&h.strides[w]===1&&k,p=p&&(w===0&&h.strides[w]===1||k);let B,U=!1;if(h.beginValid&&h.endValid?(B=h.end[w]-h.begin[w],U=!0):y?(B=1,U=!0):k&&$>=0&&(h.strides[w]<0?B=-$:B=$,U=!0),U){let Q;B===0||B<0!=h.strides[w]<0?Q=0:Q=Math.trunc(B/h.strides[w])+(B%h.strides[w]!==0?1:0),m.push(Q)}else m.push(-1)}for(let w=0;w<h.finalShapeGatherIndices.length;++w){const y=h.finalShapeGatherIndices[w];y>=0?x.push(m[y]):y===ho&&x.push(1)}return{finalShapeSparse:x.filter((w,y)=>h.finalShapeGatherIndices[y]!==ho),finalShape:x,isIdentity:f,sliceDim0:p,isSimpleSlice:g,begin:h.begin,end:h.end,strides:h.strides}}function pp(t,e){e.beginMask=0,e.endMask=0,e.shrinkAxisMask=0;let n=0;e.beginValid=t.begin!=null,e.endValid=t.end!=null,e.begin=new Array(e.dims),e.end=new Array(e.dims),e.strides=new Array(e.dims),e.finalShapeGatherIndices=[],e.finalShapeGatherIndicesSparse=[],e.inputShapeGatherIndicesSparse=new Array(e.dims);for(let s=0;s<t.dims;s++)if(1<<s&t.ellipsisMask){const r=Math.min(e.dims-(t.dims-s)+1+t.numAddAxisAfterEllipsis,e.dims);for(;n<r;n++)e.begin[n]=0,e.end[n]=0,e.strides[n]=1,e.beginMask|=1<<n,e.endMask|=1<<n,e.finalShapeGatherIndices.push(n),e.finalShapeGatherIndicesSparse.push(-1),e.inputShapeGatherIndicesSparse[n]=s}else if(1<<s&t.newAxisMask)e.finalShapeGatherIndices.push(ho),e.finalShapeGatherIndicesSparse.push(-1);else{if(n===e.begin.length)throw Error(`Index out of range using input dim ${n}; input has only ${e.dims} dims, ${e.begin.length}.`);t.begin!=null&&(e.begin[n]=t.begin[s]),t.end!=null&&(e.end[n]=t.end[s]),e.strides[n]=t.strides[s],t.beginMask&1<<s&&(e.beginMask|=1<<n),t.endMask&1<<s&&(e.endMask|=1<<n),t.shrinkAxisMask&1<<s?(e.finalShapeGatherIndices.push(dp),e.finalShapeGatherIndicesSparse.push(-1),e.shrinkAxisMask|=1<<n):(e.finalShapeGatherIndices.push(n),e.finalShapeGatherIndicesSparse.push(s)),e.inputShapeGatherIndicesSparse[n]=s,n++}}function sc(t,e,n,s,r,o){if(r[e])return n>0?o[e]:o[e+1&1];{const i=t<0?s+t:t;return i<o[0]?o[0]:i>o[1]?o[1]:i}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gp(t,e){const s={x:I(t,"x","reshape","string_or_numeric")},r={shape:e};return A.runKernel(Wi,s,r)}const pe=_({reshape_:gp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mp(t,e){let n=I(t,"broadcastTo","x");const s=n.shape;if(e.some(l=>!(l>0)||l%1!==0))throw new Error(`broadcastTo(): Invalid broadcast shape [${e}].`);if(e.length<n.rank)throw new Error(`broadcastTo(): shape.length=${e.length} < input.rank=${n.rank}.`);if(e.length>n.rank){const l=n.shape.slice();for(;l.length<e.length;)l.unshift(1);n=pe(n,l)}const r=n.shape,o=Array.from(e);for(let l=e.length-1;l>=0;l--)if(r[l]===e[l])o[l]=1;else if(n.shape[l]!==1)throw new Error(`broadcastTo(): [${s}] cannot be broadcast to [${e}].`);if(o.map((l,u)=>l>1?u:-1).filter(l=>l>=0).length===0)return dn(n);const a={x:n},c={reps:o};return A.runKernel(Wr,a,c)}const Ms=_({broadcastTo_:mp});/**
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
 */function Vs(t,e,n,s){if(s==null&&(s=hs(t)),s==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!Xe(t)&&!Array.isArray(t)&&typeof t!="number"&&typeof t!="boolean"&&typeof t!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(e!=null){ci(e);const r=D(e),o=D(n);v(r===o,()=>`Based on the provided shape, [${e}], the tensor should have ${r} values but has ${o}`);for(let i=0;i<n.length;++i){const a=n[i],c=i===n.length-1?a!==D(e.slice(i)):!0;v(n[i]===e[i]||!c,()=>`Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${e}). `)}}return!Xe(t)&&!Array.isArray(t)&&(t=[t]),e=e||n,t=s!=="string"?ks(t,s):Te(t,[],!0),A.makeTensor(t,e,s)}/**
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
 */function Ie(t,e){if((Xe(t)&&e!=="string"||Array.isArray(t))&&e!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(e==="string"&&Xe(t)&&!(t instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Vs(t,[],[],e)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xp(t,e){const n=I(t,"real","complex"),s=I(e,"imag","complex");ne(n.shape,s.shape,`real and imag shapes, ${n.shape} and ${s.shape}, must match in call to tf.complex().`);const r={real:n,imag:s};return A.runKernel(Ar,r)}const fn=_({complex_:xp});/**
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
 */function pn(t,e="float32"){if(e==="complex64"){const s=pn(t,"float32"),r=pn(t,"float32");return fn(s,r)}const n=Et(D(t),e);return A.makeTensor(n,t,e)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bp(t,e=0){v(t.length>=1,()=>"Pass at least one tensor to concat");const n=La(t,"tensors","concat","string_or_numeric");if(n[0].dtype==="complex64"&&n.forEach(o=>{if(o.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${o.dtype}. `)}),n.length===1)return dn(n[0]);const s=n,r={axis:e};return A.runKernel(mi,s,r)}const Ot=_({concat_:bp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cp(t){const n={input:I(t,"input","imag")};return A.runKernel(Ei,n)}const xo=_({imag_:Cp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wp(t){const n={input:I(t,"input","real")};return A.runKernel(Mr,n)}const Us=_({real_:wp});/**
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
 */function yp(t,e,n){const s=I(t,"x","slice","string_or_numeric");if(s.rank===0)throw new Error("Slicing scalar is not possible");const r={x:s},o={begin:e,size:n};return A.runKernel(Ur,r,o)}const Me=_({slice_:yp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vp(t,e,n=0){const r={x:I(t,"x","split")},o={numOrSizeSplits:e,axis:n};return A.runKernel(Yi,r,o)}const Ws=_({split_:vp});/**
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
 */function $p(t){const n={x:I(t,"x","zerosLike")};return A.runKernel(ia,n)}const Ip=_({zerosLike_:$p});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sp(t){v(t.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${t.dtype}.`);const e={input:t};return A.runKernel(yi,e)}const rc=_({fft_:Sp});/**
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
 */function Ep(t,e){v(t.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${t.dtype}`);let n=t.shape[t.shape.length-1];const s=t.size/n;let r;if(e!=null&&e<n){const p=t.shape.map(m=>0),g=t.shape.map(m=>m);g[t.shape.length-1]=e,r=Me(t,p,g),n=e}else if(e!=null&&e>n){const p=t.shape.map(g=>g);p[t.shape.length-1]=e-n,r=Ot([t,pn(p)],t.shape.length-1),n=e}else r=t;const o=Ip(r),i=pe(fn(r,o),[s,n]),a=rc(i),c=Math.floor(n/2)+1,l=Us(a),u=xo(a),d=Ws(l,[c,n-c],l.shape.length-1),h=Ws(u,[c,n-c],u.shape.length-1),f=r.shape.slice();return f[r.shape.length-1]=c,pe(fn(d[0],h[0]),f)}const oc=_({rfft_:Ep});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tp(t){v(t.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${t.dtype}.`);const e={input:t};return A.runKernel(Si,e)}const bo=_({ifft_:Tp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rp(t,e){let n=I(t,"a","mul"),s=I(e,"b","mul");[n,s]=Qe(n,s);const r={a:n,b:s};return A.runKernel(ys,r)}const de=_({mul_:Rp});/**
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
 */function kp(t,e){const s={x:I(t,"x","reverse")},r={dims:e};return A.runKernel(Xi,s,r)}const ic=_({reverse_:kp});/**
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
 */function Np(t){const e=t.shape[t.shape.length-1],n=t.size/e;let s;if(e<=2){const r=pe(t,[n,e]);s=bo(r)}else{const r=[n,2*(e-1)],o=pe(Us(t),[n,e]),i=pe(xo(t),[n,e]),a=ic(Me(o,[0,1],[n,e-2]),1),c=de(ic(Me(i,[0,1],[n,e-2]),1),Ie(-1)),l=Ot([o,a],1),u=Ot([i,c],1),d=pe(fn(l,u),[r[0],r[1]]);s=bo(d)}if(s=Us(s),t.rank===3&&t.shape[0]!==0){const r=s,o=t.shape[0];s=pe(s,[o,s.shape[0]/o,s.shape[1]]),r.dispose()}return s}const _p=_({irfft_:Np});/**
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
 */function $t(t,e){He(t);const n=Bs(t,e);if(n.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return Vs(t,null,n,e)}/**
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
 */function Ap(t){return Math.floor(Math.pow(2,Math.ceil(Math.log(t)/Math.log(2))))}function ac(t,e,n){const s=1-t%2,r=new Float32Array(t);for(let o=0;o<t;++o){const i=2*Math.PI*o/(t+s-1);r[o]=e-n*Math.cos(i)}return $t(r,"float32")}/**
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
 */function Dp(t){return ac(t,.54,.46)}const Fp=_({hammingWindow_:Dp});/**
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
 */function Op(t){return ac(t,.5,.5)}const cc=_({hannWindow_:Op});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lc(t,e,n){const s={shape:t,value:e,dtype:n};return A.runKernel(vi,{},s)}/**
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
 */function Gs(t,e,n){if(He(t),e!=null&&e.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const s=Bs(t,n);if(s.length!==2&&s.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(s.length===1&&e==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Vs(t,e,s,n)}/**
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
 */function Pp(t,e,n,s=!1,r=0){let o=0;const i=[];for(;o+e<=t.size;)i.push(Me(t,o,e)),o+=n;if(s)for(;o<t.size;){const a=o+e-t.size,c=Ot([Me(t,o,e-a),lc([a],r)]);i.push(c),o+=n}return i.length===0?Gs([],[0,e]):pe(Ot(i),[i.length,e])}const uc=_({frame_:Pp});/**
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
 */function Lp(t,e,n,s,r=cc){s==null&&(s=Ap(e));const o=uc(t,e,n),i=de(o,r(e));return oc(i,s)}const Bp=_({stft_:Lp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mp(t,e,n,s,r="bilinear",o=0){const i=I(t,"image","cropAndResize"),a=I(e,"boxes","cropAndResize","float32"),c=I(n,"boxInd","cropAndResize","int32"),l=a.shape[0];v(i.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${i.rank}.`),v(a.rank===2&&a.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${l},4] but had shape ${a.shape}.`),v(c.rank===1&&c.shape[0]===l,()=>`Error in cropAndResize: boxInd must be have size [${l}] but had shape ${a.shape}.`),v(s.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${s.length}.`),v(s[0]>=1&&s[1]>=1,()=>`cropSize must be atleast [1,1], but was ${s}`),v(r==="bilinear"||r==="nearest",()=>`method must be bilinear or nearest, but was ${r}`);const u={image:i,boxes:a,boxInd:c},d={method:r,extrapolationValue:o,cropSize:s};return A.runKernel(xi,u,d)}const Vp=_({cropAndResize_:Mp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Up(t){const e=I(t,"image","flipLeftRight","float32");v(e.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${e.rank}.`);const n={image:e};return A.runKernel($i,n,{})}const Wp=_({flipLeftRight_:Up});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gp(t,e){const n=I(t,"x","tile","string_or_numeric");v(n.rank===e.length,()=>`Error in transpose: rank of input ${n.rank} must match length of reps ${e}.`);const s={x:n},r={reps:e};return A.runKernel(Wr,s,r)}const zs=_({tile_:Gp});/**
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
 */function zp(t){const e=I(t,"image","grayscaleToRGB"),n=e.rank-1,s=e.shape[n];v(e.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${e.rank}.`),v(s===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${s}.`);const r=new Array(e.rank);return r.fill(1,0,n),r[n]=3,zs(e,r)}const Hp=_({grayscaleToRGB_:zp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xp(t,e,n=0,s=.5){const r=I(t,"image","rotateWithOffset","float32");v(r.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${r.rank}.`);const o={image:r},i={radians:e,fillValue:n,center:s};return A.runKernel(ca,o,i)}const qp=_({rotateWithOffset_:Xp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gn(t,e,n,s,r,o){s==null&&(s=.5),r==null&&(r=Number.NEGATIVE_INFINITY),o==null&&(o=0);const i=t.shape[0];return n=Math.min(n,i),v(0<=s&&s<=1,()=>`iouThreshold must be in [0, 1], but was '${s}'`),v(t.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${t.rank}'`),v(t.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${t.shape[1]}`),v(e.rank===1,()=>"scores must be a 1D tensor"),v(e.shape[0]===i,()=>`scores has incompatible shape with boxes. Expected ${i}, but was ${e.shape[0]}`),v(0<=o&&o<=1,()=>`softNmsSigma must be in [0, 1], but was '${o}'`),{maxOutputSize:n,iouThreshold:s,scoreThreshold:r,softNmsSigma:o}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kp(t,e,n,s=.5,r=Number.NEGATIVE_INFINITY){const o=I(t,"boxes","nonMaxSuppression","float32"),i=I(e,"scores","nonMaxSuppression","float32"),a=gn(o,i,n,s,r);n=a.maxOutputSize,s=a.iouThreshold,r=a.scoreThreshold;const c={maxOutputSize:n,iouThreshold:s,scoreThreshold:r};return A.runKernel(Di,{boxes:o,scores:i},c)}const jp=_({nonMaxSuppression_:Kp});/**
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
 */function Yp(t,e,n){const s=Qp(t,e,n),r=s<0?-(s+1):s;t.splice(r,0,e)}function Qp(t,e,n){return Jp(t,e,n||Zp)}function Zp(t,e){return t>e?1:t<e?-1:0}function Jp(t,e,n){let s=0,r=t.length,o=0,i=!1;for(;s<r;){o=s+(r-s>>>1);const a=n(e,t[o]);a>0?s=o+1:(r=o,i=!a)}return i?s:-s-1}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dc(t,e,n,s,r){return Co(t,e,n,s,r,0)}function hc(t,e,n,s,r,o){return Co(t,e,n,s,r,0,!1,o,!0)}function fc(t,e,n,s,r,o){return Co(t,e,n,s,r,o,!0)}function Co(t,e,n,s,r,o,i=!1,a=!1,c=!1){const l=[];for(let m=0;m<e.length;m++)e[m]>r&&l.push({score:e[m],boxIndex:m,suppressBeginIndex:0});l.sort(pc);const u=o>0?-.5/o:0,d=[],h=[];for(;d.length<n&&l.length>0;){const m=l.pop(),{score:x,boxIndex:b,suppressBeginIndex:w}=m;if(x<r)break;let y=!1;for(let $=d.length-1;$>=w;--$){const N=eg(t,b,d[$]);if(N>=s){y=!0;break}if(m.score=m.score*tg(s,u,N),m.score<=r)break}m.suppressBeginIndex=d.length,y||(m.score===x?(d.push(b),h.push(m.score)):m.score>r&&Yp(l,m,pc))}const f=d.length,p=n-f;a&&p>0&&(d.push(...new Array(p).fill(0)),h.push(...new Array(p).fill(0)));const g={selectedIndices:d};return i&&(g.selectedScores=h),c&&(g.validOutputs=f),g}function eg(t,e,n){const s=t.subarray(e*4,e*4+4),r=t.subarray(n*4,n*4+4),o=Math.min(s[0],s[2]),i=Math.min(s[1],s[3]),a=Math.max(s[0],s[2]),c=Math.max(s[1],s[3]),l=Math.min(r[0],r[2]),u=Math.min(r[1],r[3]),d=Math.max(r[0],r[2]),h=Math.max(r[1],r[3]),f=(a-o)*(c-i),p=(d-l)*(h-u);if(f<=0||p<=0)return 0;const g=Math.max(o,l),m=Math.max(i,u),x=Math.min(a,d),b=Math.min(c,h),w=Math.max(x-g,0)*Math.max(b-m,0);return w/(f+p-w)}function tg(t,e,n){const s=Math.exp(e*n*n);return n<=t?s:0}function pc(t,e){return t.score-e.score||t.score===e.score&&e.boxIndex-t.boxIndex}var ng=(t,e,n)=>new Promise((s,r)=>{var o=c=>{try{a(n.next(c))}catch(l){r(l)}},i=c=>{try{a(n.throw(c))}catch(l){r(l)}},a=c=>c.done?s(c.value):Promise.resolve(c.value).then(o,i);a((n=n.apply(t,e)).next())});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sg(t,e,n){return ng(this,arguments,function*(s,r,o,i=.5,a=Number.NEGATIVE_INFINITY){const c=I(s,"boxes","nonMaxSuppressionAsync"),l=I(r,"scores","nonMaxSuppressionAsync"),u=gn(c,l,o,i,a);o=u.maxOutputSize,i=u.iouThreshold,a=u.scoreThreshold;const d=yield Promise.all([c.data(),l.data()]),h=d[0],f=d[1],{selectedIndices:p}=dc(h,f,o,i,a);return c!==s&&c.dispose(),l!==r&&l.dispose(),$t(p,"int32")})}const rg=sg;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function og(t,e,n,s=.5,r=Number.NEGATIVE_INFINITY,o=0){const i=I(t,"boxes","nonMaxSuppression"),a=I(e,"scores","nonMaxSuppression"),c=gn(i,a,n,s,r,o);n=c.maxOutputSize,s=c.iouThreshold,r=c.scoreThreshold,o=c.softNmsSigma;const l={boxes:i,scores:a},u={maxOutputSize:n,iouThreshold:s,scoreThreshold:r,softNmsSigma:o},d=A.runKernel(Oi,l,u);return{selectedIndices:d[0],selectedScores:d[1]}}const ig=_({nonMaxSuppressionWithScore_:og});var ag=(t,e,n)=>new Promise((s,r)=>{var o=c=>{try{a(n.next(c))}catch(l){r(l)}},i=c=>{try{a(n.throw(c))}catch(l){r(l)}},a=c=>c.done?s(c.value):Promise.resolve(c.value).then(o,i);a((n=n.apply(t,e)).next())});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cg(t,e,n){return ag(this,arguments,function*(s,r,o,i=.5,a=Number.NEGATIVE_INFINITY,c=0){const l=I(s,"boxes","nonMaxSuppressionAsync"),u=I(r,"scores","nonMaxSuppressionAsync"),d=gn(l,u,o,i,a,c);o=d.maxOutputSize,i=d.iouThreshold,a=d.scoreThreshold,c=d.softNmsSigma;const h=yield Promise.all([l.data(),u.data()]),f=h[0],p=h[1],{selectedIndices:g,selectedScores:m}=fc(f,p,o,i,a,c);return l!==s&&l.dispose(),u!==r&&u.dispose(),{selectedIndices:$t(g,"int32"),selectedScores:$t(m)}})}const lg=cg;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ug(t,e,n,s=.5,r=Number.NEGATIVE_INFINITY,o=!1){const i=I(t,"boxes","nonMaxSuppression"),a=I(e,"scores","nonMaxSuppression"),c=gn(i,a,n,s,r,null),l=c.maxOutputSize,u=c.iouThreshold,d=c.scoreThreshold,h={boxes:i,scores:a},f={maxOutputSize:l,iouThreshold:u,scoreThreshold:d,padToMaxOutputSize:o},p=A.runKernel(Fi,h,f);return{selectedIndices:p[0],validOutputs:p[1]}}const dg=_({nonMaxSuppressionPadded_:ug});var hg=(t,e,n)=>new Promise((s,r)=>{var o=c=>{try{a(n.next(c))}catch(l){r(l)}},i=c=>{try{a(n.throw(c))}catch(l){r(l)}},a=c=>c.done?s(c.value):Promise.resolve(c.value).then(o,i);a((n=n.apply(t,e)).next())});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fg(t,e,n){return hg(this,arguments,function*(s,r,o,i=.5,a=Number.NEGATIVE_INFINITY,c=!1){const l=I(s,"boxes","nonMaxSuppressionAsync"),u=I(r,"scores","nonMaxSuppressionAsync"),d=gn(l,u,o,i,a,null),h=d.maxOutputSize,f=d.iouThreshold,p=d.scoreThreshold,[g,m]=yield Promise.all([l.data(),u.data()]),{selectedIndices:x,validOutputs:b}=hc(g,m,h,f,p,c);return l!==s&&l.dispose(),u!==r&&u.dispose(),{selectedIndices:$t(x,"int32"),validOutputs:Ie(b,"int32")}})}const pg=fg;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gg(t,e,n=!1,s=!1){const r=I(t,"images","resizeBilinear");v(r.rank===3||r.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${r.rank}.`),v(e.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${e}.`),v(s===!1||n===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let o=r,i=!1;r.rank===3&&(i=!0,o=pe(r,[1,r.shape[0],r.shape[1],r.shape[2]]));const[]=e,a={images:o},c={alignCorners:n,halfPixelCenters:s,size:e},l=A.runKernel(zi,a,c);return i?pe(l,[l.shape[1],l.shape[2],l.shape[3]]):l}const mg=_({resizeBilinear_:gg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xg(t,e,n=!1,s=!1){const r=I(t,"images","resizeNearestNeighbor");v(r.rank===3||r.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${r.rank}.`),v(e.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${e}.`),v(r.dtype==="float32"||r.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),v(s===!1||n===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let o=r,i=!1;r.rank===3&&(i=!0,o=pe(r,[1,r.shape[0],r.shape[1],r.shape[2]]));const[]=e,a={images:o},c={alignCorners:n,halfPixelCenters:s,size:e},l=A.runKernel(Gi,a,c);return i?pe(l,[l.shape[1],l.shape[2],l.shape[3]]):l}const bg=_({resizeNearestNeighbor_:xg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cg(t,e,n){const s=I(t,"x","bincount"),r=I(e,"weights","bincount");v(s.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${s.dtype}`),v(n>=0,()=>`size must be non-negative, but got ${n}.`),v(r.size===s.size||r.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${s.shape}, weights shape: ${r.shape}.`);const o={x:s,weights:r},i={size:n};return A.runKernel(pi,o,i)}const wg=_({bincount_:Cg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yg(t,e){let n=I(t,"a","lessEqual","string_or_numeric"),s=I(e,"b","lessEqual","string_or_numeric");[n,s]=Qe(n,s),Ce(n.shape,s.shape);const r={a:n,b:s};return A.runKernel(bs,r)}const gc=_({lessEqual_:yg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vg(t,e){let n=I(t,"a","greater","string_or_numeric"),s=I(e,"b","greater","string_or_numeric");[n,s]=Qe(n,s),Ce(n.shape,s.shape);const r={a:n,b:s};return A.runKernel(gs,r)}const wo=_({greater_:vg});/**
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
 */function $g(t,e=null,n=!1){let s=I(t,"x","sum");s.dtype==="bool"&&(s=vt(s,"int32"));const r={x:s},o={axis:e,keepDims:n};return A.runKernel(ji,r,o)}const ye=_({sum_:$g});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ig(t,e){let n=I(t,"a","add"),s=I(e,"b","add");[n,s]=Qe(n,s);const r={a:n,b:s};return A.runKernel(Mn,r)}const It=_({add_:Ig});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sg(t,e){let n=I(t,"a","floorDiv"),s=I(e,"b","floorDiv");[n,s]=Qe(n,s);const r={a:n,b:s};return A.runKernel(Ii,r)}const Eg=_({floorDiv_:Sg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tg(t,e){let n=I(t,"a","div"),s=I(e,"b","div");if([n,s]=Qe(n,s),n.dtype==="int32"&&s.dtype==="int32")return Eg(n,s);const r={a:n,b:s},o={};return A.runKernel(bi,r,o)}const it=_({div_:Tg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rg(t,e){let n=I(t,"a","sub"),s=I(e,"b","sub");[n,s]=Qe(n,s);const r={a:n,b:s};return A.runKernel(Es,r)}const we=_({sub_:Rg});/**
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
 */function kg(t){const n={x:I(t,"x","round")};return A.runKernel(qi,n)}const Ng=_({round_:kg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _g(t,e,n){const s=I(e,"a","where"),r=I(n,"b","where"),o=I(t,"condition","where","bool"),i=Ce(Ce(o.shape,s.shape),r.shape),a=Ms(o,i),c=Ms(s,i),l=Ms(r,i),u={condition:a,t:c,e:l};return A.runKernel(Ki,u)}const Hs=_({where_:_g});/**
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
 */function Xs(t,e,n=1,s="float32"){if(n===0)throw new Error("Cannot have a step of zero");const r={start:t,stop:e,step:n,dtype:s};return A.runKernel(Vi,{},r)}/**
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
 */function Ag(t,e,n){const s=Bs(t,n);return Vs(t,e,s,n)}/**
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
 */function Dg(t,e="binary",n=!1,s=.5){const r=I(t,"image","threshold"),o=.2989,i=.587,a=.114,c=r.shape[0]*r.shape[1];let l=de($t([s]),255),u,d,h,f;if(v(r.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${r.rank}.`),v(r.shape[2]===3||r.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${r.shape[2]}.`),v(r.dtype==="int32"||r.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${r.dtype}.`),v(e==="otsu"||e==="binary",()=>`Method must be binary or otsu, but was ${e}`),r.shape[2]===3){[u,d,h]=Ws(r,[1,1,1],-1);const m=de(u,o),x=de(d,i),b=de(h,a);f=It(It(m,x),b)}else f=t;if(e==="otsu"){const m=wg(vt(Ng(f),"int32"),Ag([]),256);l=Fg(m,c)}const p=n?gc(f,l):wo(f,l);return vt(de(p,255),"int32")}function Fg(t,e){let n=$t([-1]),s=$t([0]),r=$t([0]),o,i,a,c,l,u;for(let d=0;d<t.size-1;d++){o=Me(t,0,d+1),i=Me(t,d+1),l=it(ye(o),e),u=it(ye(i),e);const h=ye(de(o,Xs(0,o.size)));a=it(h,ye(o));const f=lc(i.shape,o.size),p=It(Xs(0,i.size),f),g=de(i,p);c=it(ye(g),ye(i));const m=we(a,c),x=we(a,c),b=de(l,u);r=de(de(b,m),x);const w=wo(r,s);s=Hs(w,r,s),n=Hs(w,$t([d]),n)}return n}const Og=_({threshold_:Dg});/**
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
 */function Pg(t,e,n="nearest",s="constant",r=0,o){const i=I(t,"image","transform","float32"),a=I(e,"transforms","transform","float32");v(i.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${i.rank}.`),v(a.rank===2&&(a.shape[0]===i.shape[0]||a.shape[0]===1)&&a.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),v(o==null||o.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${o}.`);const c={image:i,transforms:a},l={interpolation:n,fillMode:s,fillValue:r,outputShape:o};return A.runKernel(ra,c,l)}const Lg=_({transform_:Pg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bg(t,e){let n=I(t,"a","greaterEqual","string_or_numeric"),s=I(e,"b","greaterEqual","string_or_numeric");[n,s]=Qe(n,s),Ce(n.shape,s.shape);const r={a:n,b:s};return A.runKernel(ms,r)}const Mg=_({greaterEqual_:Bg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vg(t,e){const n=I(t,"a","logicalAnd","bool"),s=I(e,"b","logicalAnd","bool");Ce(n.shape,s.shape);const r={a:n,b:s};return A.runKernel(ki,r)}const Ug=_({logicalAnd_:Vg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wg(t,e=0){const n=La(t,"tensors","stack","string_or_numeric");v(n.length>=1,()=>"Pass at least one tensor to tf.stack"),n.length>0&&v(e<=n[0].rank,()=>"Axis must be <= rank of the tensor");const s=n,r={axis:e};return A.runKernel(Pi,s,r)}const qs=_({stack_:Wg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gg(t,e=0){const n=I(t,"x","unstack","string_or_numeric");v(e>=-n.shape.length&&e<n.shape.length,()=>`Axis = ${e} is not in [-${n.shape.length}, ${n.shape.length})`);const s={value:n},r={axis:e};return A.runKernel(oa,s,r)}const mc=_({unstack_:Gg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zg(t,e,n){v(e%1===0,()=>`bandPart(): numLower must be an integer, got ${e}.`),v(n%1===0,()=>`bandPart(): numUpper must be an integer, got ${n}.`);const s=I(t,"a","bandPart");v(s.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${s.rank}.`);const r=s.shape,[o,i]=s.shape.slice(-2);if(!(e<=o))throw new Error(`bandPart(): numLower (${e}) must not be greater than the number of rows (${o}).`);if(!(n<=i))throw new Error(`bandPart(): numUpper (${n}) must not be greater than the number of columns (${i}).`);e<0&&(e=o),n<0&&(n=i);const a=pe(Xs(0,o,1,"int32"),[-1,1]),c=Xs(0,i,1,"int32"),l=we(a,c),u=Ug(gc(l,Ie(+e,"int32")),Mg(l,Ie(-n,"int32"))),d=pn([o,i],s.dtype);return pe(qs(mc(pe(s,[-1,o,i])).map(h=>Hs(u,h,d))),r)}const Hg=_({bandPart_:zg});/**
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
 */function Xg(t){const e=I(t,"x","abs");if(e.dtype==="complex64"){const n={x:e};return A.runKernel(gi,n)}else{const n={x:e};return A.runKernel(Nr,n)}}const pt=_({abs_:Xg});/**
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
 */function yo(t,e){for(let n=0;n<t.length;++n)if(t[t.length-n-1]!==e-1-n)return!1;return!0}function xc(t,e,n){const s=t.length+e.length,r=[];let o=0,i=0;for(let a=0;a<s;a++)n.indexOf(a)===-1?r.push(t[o++]):r.push(e[i++]);return r}function St(t,e){const n=[],s=t.length;for(let o=0;o<s;o++)e.indexOf(o)===-1&&n.push(t[o]);const r=e.map(o=>t[o]);return[n,r]}function Je(t,e){const n=e.map(s=>1);return xc(t,n,e)}function gt(t,e,n){v(yo(e,n),()=>`${t} supports only inner-most axes for now. Got axes ${e} and rank-${n} input.`)}function et(t,e){if(yo(t,e))return null;const n=[];for(let s=0;s<e;++s)t.indexOf(s)===-1&&n.push(s);return t.forEach(s=>n.push(s)),n}function vo(t){return t.map((e,n)=>[n,e]).sort((e,n)=>e[1]-n[1]).map(e=>e[0])}function tt(t,e){const n=[];for(let s=e-t;s<e;++s)n.push(s);return n}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qg(t,e=null,n=!1){const r={x:I(t,"x","max")},o={reductionIndices:e,keepDims:n};return A.runKernel(Ni,r,o)}const Ks=_({max_:qg});/**
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
 */function Kg(t,e=null,n=!1){const r={x:I(t,"x","min")},o={axis:e,keepDims:n};return A.runKernel(Ai,r,o)}const bc=_({min_:Kg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jg(t,e){let n=I(t,"base","pow"),s=I(e,"exp","pow");[n,s]=Qe(n,s);const r={a:n,b:s};return A.runKernel(Li,r)}const Yg=_({pow_:jg});/**
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
 */function Qg(t){const n={x:I(t,"x","sqrt","float32")};return A.runKernel(Is,n)}const Cc=_({sqrt_:Qg});/**
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
 */function Zg(t){const e=I(t,"x","square"),n={};return A.runKernel("Square",{x:e},n)}const wc=_({square_:Zg});/**
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
 */function Jg(t,e="euclidean",n=null,s=!1){t=I(t,"x","norm");const r=yc(t,e,n);let o=r.shape;if(s){const i=oe(n,t.shape);o=Je(r.shape,i)}return pe(r,o)}function yc(t,e,n=null){if(t.rank===0)return pt(t);if(t.rank!==1&&n===null)return yc(pe(t,[-1]),e,n);if(t.rank===1||typeof n=="number"||Array.isArray(n)&&n.length===1){if(e===1)return ye(pt(t),n);if(e===1/0)return Ks(pt(t),n);if(e===-1/0)return bc(pt(t),n);if(e==="euclidean"||e===2)return Cc(ye(Yg(pt(t),Ie(2,"int32")),n));throw new Error(`Error in norm: invalid ord value: ${e}`)}if(Array.isArray(n)&&n.length===2){if(e===1)return Ks(ye(pt(t),n[0]),n[1]-1);if(e===1/0)return Ks(ye(pt(t),n[1]),n[0]);if(e===-1/0)return bc(ye(pt(t),n[1]),n[0]);if(e==="fro"||e==="euclidean")return Cc(ye(wc(t),n));throw new Error(`Error in norm: invalid ord value: ${e}`)}throw new Error(`Error in norm: invalid axis: ${n}`)}const vc=_({norm_:Jg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function em(t,e){const n=I(t,"x","squeeze","string_or_numeric");return pe(n,Ee(n.shape,e).newShape)}const tm=_({squeeze_:em});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nm(t){let e;if(Array.isArray(t)){e=!1,v(t!=null&&t.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const r=t[0].shape[0];for(let o=1;o<t.length;++o)v(t[o].shape[0]===r,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${t[o].shape[0]} vs. ${r})`)}else e=!0,t=Ws(t,t.shape[0],0).map(r=>tm(r,[0]));v(t.length<=t[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${t.length}) exceeds number of dimensions (${t[0].shape[0]}).`);const n=[],s=t;for(let r=0;r<t.length;++r)n.push(A.tidy(()=>{let o=s[r];if(r>0)for(let i=0;i<r;++i){const a=de(ye(de(n[i],o)),n[i]);o=we(o,a)}return it(o,vc(o,"euclidean"))}));return e?qs(n,0):n}const sm=_({gramSchmidt_:nm});/**
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
 */function C2(){env().set("PROD",!0)}function w2(){env().set("DEBUG",!0)}function y2(){env().set("DEPRECATION_WARNINGS_ENABLED",!1),console.warn("TensorFlow.js deprecation warnings have been disabled.")}function rm(t){S().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(t+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}wf(rm);function v2(){ENGINE.disposeVariables()}function mn(){return A}function $2(){return ENGINE.memory()}function I2(t){return ENGINE.profile(t)}function $o(t,e){return A.tidy(t,e)}function om(t){wa(t).forEach(n=>n.dispose())}function S2(t){return ENGINE.keep(t)}function E2(t){return ENGINE.time(t)}function T2(t){return ENGINE.setBackend(t)}function R2(){return ENGINE.ready()}function k2(){return ENGINE.backendName}function N2(t){ENGINE.removeBackend(t)}function _2(t){return ENGINE.findBackend(t)}function A2(t){return ENGINE.findBackendFactory(t)}function im(t,e,n=1){return A.registerBackend(t,e,n)}function D2(){return ENGINE.backend}function F2(t,e){env().setPlatform(t,e)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function am(t,e=0){const n=I(t,"x","expandDims","string_or_numeric");v(e<=n.rank,()=>"Axis must be <= rank of the tensor");const s={input:n},r={dim:e};return A.runKernel(wi,s,r)}const xn=_({expandDims_:am});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cm(t,e,n,s="float32"){e==null&&(e=t);const r=_e([t,e],s),o=t<=e?t:e;for(let a=0;a<o;++a)r.set(1,a,a);const i=pe(r.toTensor(),[t,e]);if(n==null)return i;if(n.length===1)return zs(xn(i,0),[n[0],1,1]);if(n.length===2)return zs(xn(xn(i,0),0),[n[0],n[1],1,1]);if(n.length===3)return zs(xn(xn(xn(i,0),0),0),[n[0],n[1],n[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${n.length}D.`)}const lm=_({eye_:cm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function um(t,e,n=!1,s=!1){let r=I(t,"a","matMul"),o=I(e,"b","matMul");[r,o]=Qe(r,o);const i={a:r,b:o},a={transposeA:n,transposeB:s};return A.runKernel(fi,i,a)}const Tt=_({matMul_:um});/**
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
 */function dm(t){const n={x:I(t,"x","neg")};return A.runKernel(Br,n)}const qn=_({neg_:dm});/**
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
 */function hm(t,e,n){const s=I(t,"x","transpose");if(e==null&&(e=s.shape.map((i,a)=>a).reverse()),v(s.rank===e.length,()=>`Error in transpose: rank of input ${s.rank} must match length of perm ${e}.`),e.forEach(i=>{v(i>=0&&i<s.rank,()=>`All entries in 'perm' must be between 0 and ${s.rank-1} but got ${e}`)}),s.rank<=1)return s.clone();const r={x:s},o={perm:e};return s.dtype==="complex64"?$o(()=>{let i=Us(s),a=xo(s);return i=A.runKernel(Vn,{x:i},o),a=A.runKernel(Vn,{x:a},o),n&&(a=qn(a)),fn(i,a)}):A.runKernel(Vn,r,o)}const $c=_({transpose_:hm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fm(t,e=!1){if(v(t.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${t.rank}`),t.rank===2)return Ic(t,e);{const n=t.shape.slice(0,t.shape.length-2).reduce((c,l)=>c*l),s=mc(pe(t,[n,t.shape[t.shape.length-2],t.shape[t.shape.length-1]]),0),r=[],o=[];s.forEach(c=>{const[l,u]=Ic(c,e);r.push(l),o.push(u)});const i=pe(qs(r,0),t.shape),a=pe(qs(o,0),t.shape);return[i,a]}}function Ic(t,e=!1){return A.tidy(()=>{v(t.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${t.shape.length}D Tensor.`);const n=t.shape[0],s=t.shape[1];let r=lm(n),o=dn(t);const i=Gs([[1]],[1,1]);let a=dn(i);const c=n>=s?s:n;for(let l=0;l<c;++l){const u=o,d=a,h=r;[a,o,r]=A.tidy(()=>{const f=Me(o,[l,l],[n-l,1]),p=vc(f),g=Me(o,[l,l],[1,1]),m=Hs(wo(g,0),Gs([[-1]]),Gs([[1]])),x=we(g,de(m,p)),b=it(f,x);b.shape[0]===1?a=dn(i):a=Ot([i,Me(b,[1,0],[b.shape[0]-1,b.shape[1]])],0);const w=qn(it(Tt(m,x),p)),y=Me(o,[l,0],[n-l,s]),$=de(w,a),N=$c(a);if(l===0)o=we(y,Tt($,Tt(N,y)));else{const B=we(y,Tt($,Tt(N,y)));o=Ot([Me(o,[0,0],[l,s]),B],0)}const R=$c($),k=Me(r,[0,l],[n,r.shape[1]-l]);if(l===0)r=we(k,Tt(Tt(k,a),R));else{const B=we(k,Tt(Tt(k,a),R));r=Ot([Me(r,[0,0],[n,l]),B],1)}return[a,o,r]}),om([u,d,h])}return!e&&n>s&&(r=Me(r,[0,0],[n,s]),o=Me(o,[0,0],[s,s])),[r,o]})}const pm=_({qr_:fm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var qe;(function(t){t[t.NONE=0]="NONE",t[t.MEAN=1]="MEAN",t[t.SUM=2]="SUM",t[t.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(qe||(qe={}));/**
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
 */function gm(t,e=null,n=!1){const r={x:I(t,"x","mean")},o={axis:e,keepDims:n};return A.runKernel(_i,r,o)}const mm=_({mean_:gm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xm(t,e){let n=I(t,"a","notEqual","string_or_numeric"),s=I(e,"b","notEqual","string_or_numeric");[n,s]=Qe(n,s),Ce(n.shape,s.shape);const r={a:n,b:s};return A.runKernel(vs,r)}const bm=_({notEqual_:xm});/**
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
 */function Sc(t,e="float32"){if(e==="complex64"){const s=Sc(t,"float32"),r=pn(t,"float32");return fn(s,r)}const n=ai(D(t),e);return A.makeTensor(n,t,e)}function Cm(t,e,n=qe.SUM_BY_NONZERO_WEIGHTS){const s=I(t,"losses","computeWeightedLoss");let r=null;e!=null&&(r=I(e,"weights","computeWeightedLoss"));const o=r==null?s:de(s,r);if(n===qe.NONE)return o;if(n===qe.SUM)return ye(o);if(n===qe.MEAN){if(r==null)return mm(o);{const i=s.size/r.size,a=it(ye(o),ye(r));return i>1?it(a,Ie(i)):a}}if(n===qe.SUM_BY_NONZERO_WEIGHTS){if(r==null)return it(ye(o),Ie(s.size));{const i=de(r,Sc(s.shape)),a=vt(ye(bm(i,Ie(0))),"float32");return it(ye(o),a)}}throw Error(`Unknown reduction: ${n}`)}const Rt=_({computeWeightedLoss_:Cm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wm(t,e,n,s=qe.SUM_BY_NONZERO_WEIGHTS){const r=I(t,"labels","absoluteDifference"),o=I(e,"predictions","absoluteDifference");let i=null;n!=null&&(i=I(n,"weights","absoluteDifference")),ne(r.shape,o.shape,"Error in absoluteDifference: ");const a=pt(we(r,o));return Rt(a,i,s)}const ym=_({absoluteDifference_:wm});function vm(t,e,n,s,r=qe.SUM_BY_NONZERO_WEIGHTS){const o=I(t,"labels","cosineDistance"),i=I(e,"predictions","cosineDistance");let a=null;s!=null&&(a=I(s,"weights","cosineDistance")),ne(o.shape,i.shape,"Error in cosineDistance: ");const c=Ie(1),l=we(c,ye(de(o,i),n,!0));return Rt(l,a,r)}const $m=_({cosineDistance_:vm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Im(t){const n={x:I(t,"x","relu")};return A.runKernel(Ui,n)}const Io=_({relu_:Im});function Sm(t,e,n,s=qe.SUM_BY_NONZERO_WEIGHTS){let r=I(t,"labels","hingeLoss");const o=I(e,"predictions","hingeLoss");let i=null;n!=null&&(i=I(n,"weights","hingeLoss")),ne(r.shape,o.shape,"Error in hingeLoss: ");const a=Ie(1);r=we(de(Ie(2),r),a);const c=Io(we(a,de(r,o)));return Rt(c,i,s)}const Em=_({hingeLoss_:Sm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tm(t,e){let n=I(t,"a","minimum"),s=I(e,"b","minimum");[n,s]=Qe(n,s),n.dtype==="bool"&&(n=vt(n,"int32"),s=vt(s,"int32")),Ce(n.shape,s.shape);const r={a:n,b:s};return A.runKernel(ws,r)}const Rm=_({minimum_:Tm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function km(t,e,n,s=1,r=qe.SUM_BY_NONZERO_WEIGHTS){const o=I(t,"labels","huberLoss"),i=I(e,"predictions","huberLoss");let a=null;n!=null&&(a=I(n,"weights","huberLoss")),ne(o.shape,i.shape,"Error in huberLoss: ");const c=Ie(s),l=pt(we(i,o)),u=Rm(l,c),d=we(l,u),h=It(de(Ie(.5),wc(u)),de(c,d));return Rt(h,a,r)}const Nm=_({huberLoss_:km});/**
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
 */function _m(t){const n={x:I(t,"x","log","float32")};return A.runKernel(Cs,n)}const So=_({log_:_m});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Am(t,e,n,s=1e-7,r=qe.SUM_BY_NONZERO_WEIGHTS){const o=I(t,"labels","logLoss"),i=I(e,"predictions","logLoss");let a=null;n!=null&&(a=I(n,"weights","logLoss")),ne(o.shape,i.shape,"Error in logLoss: ");const c=Ie(1),l=Ie(s),u=qn(de(o,So(It(i,l)))),d=de(we(c,o),So(It(we(c,i),l))),h=we(u,d);return Rt(h,a,r)}const Dm=_({logLoss_:Am});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fm(t,e){let n=I(t,"a","squaredDifference"),s=I(e,"b","squaredDifference");[n,s]=Qe(n,s),Ce(n.shape,s.shape);const r={a:n,b:s},o={};return A.runKernel(Ss,r,o)}const Om=_({squaredDifference_:Fm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pm(t,e,n,s=qe.SUM_BY_NONZERO_WEIGHTS){const r=I(t,"labels","meanSquaredError"),o=I(e,"predictions","meanSquaredError");let i=null;n!=null&&(i=I(n,"weights","meanSquaredError")),ne(r.shape,o.shape,"Error in meanSquaredError: ");const a=Om(r,o);return Rt(a,i,s)}const Lm=_({meanSquaredError_:Pm});/**
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
 */function Bm(t){const n={x:I(t,"x","exp")};return A.runKernel(ps,n)}const js=_({exp_:Bm});/**
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
 */function Mm(t){const n={x:I(t,"x","log1p")};return A.runKernel(Ri,n)}const Vm=_({log1p_:Mm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Um(t,e){const n=I(t,"labels","sigmoidCrossEntropyWithLogits"),s=I(e,"logits","sigmoidCrossEntropyWithLogits");ne(n.shape,s.shape,"Error in sigmoidCrossEntropyWithLogits: ");const r=Io(s),o=de(s,n),i=Vm(js(qn(pt(s))));return It(we(r,o),i)}function Wm(t,e,n,s=0,r=qe.SUM_BY_NONZERO_WEIGHTS){let o=I(t,"multiClassLabels","sigmoidCrossEntropy");const i=I(e,"logits","sigmoidCrossEntropy");let a=null;if(n!=null&&(a=I(n,"weights","sigmoidCrossEntropy")),ne(o.shape,i.shape,"Error in sigmoidCrossEntropy: "),s>0){const l=Ie(s),u=Ie(1),d=Ie(.5);o=It(de(o,we(u,l)),de(d,l))}const c=Um(o,i);return Rt(c,a,r)}const Gm=_({sigmoidCrossEntropy_:Wm});/**
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
 */function O2(t){return util.assert(util.isFunction(t),()=>"The f passed in grad(f) must be a function"),(e,n)=>{const s=convertToTensor(e,"x","tf.grad","string_or_numeric"),r=n!=null?convertToTensor(n,"dy","tf.grad"):null;return ENGINE.tidy(()=>{const{value:o,grads:i}=ENGINE.gradients(()=>t(s),[s],r);return r!=null&&util.assertShapesMatch(o.shape,r.shape,"The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)"),Ys(i),i[0]})}}function P2(t){return util.assert(util.isFunction(t),()=>"The f passed in grads(f) must be a function"),(e,n)=>{util.assert(Array.isArray(e),()=>"The args passed in grads(f)(args) must be an array of `Tensor`s or `TensorLike`s");const s=convertToTensorArray(e,"args","tf.grads","string_or_numeric"),r=n!=null?convertToTensor(n,"dy","tf.grads"):null;return ENGINE.tidy(()=>{const{value:o,grads:i}=ENGINE.gradients(()=>t(...s),s,r);return r!=null&&util.assertShapesMatch(o.shape,r.shape,"The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),Ys(i),i})}}function L2(t){return util.assert(util.isFunction(t),()=>"The f passed in valueAndGrad(f) must be a function"),(e,n)=>{util.assert(e instanceof Tensor,()=>"The x passed in valueAndGrad(f)(x) must be a tensor"),util.assert(n==null||n instanceof Tensor,()=>"The dy passed in valueAndGrad(f)(x, dy) must be a tensor");const{grads:s,value:r}=ENGINE.gradients(()=>t(e),[e],n);return Ys(s),{grad:s[0],value:r}}}function B2(t){return util.assert(util.isFunction(t),()=>"The f passed in valueAndGrads(f) must be a function"),(e,n)=>{util.assert(Array.isArray(e)&&e.every(r=>r instanceof Tensor),()=>"The args passed in valueAndGrads(f)(args) must be array of tensors"),util.assert(n==null||n instanceof Tensor,()=>"The dy passed in valueAndGrads(f)(args, dy) must be a tensor");const s=ENGINE.gradients(()=>t(...e),e,n);return n!=null&&util.assertShapesMatch(s.value.shape,n.shape,"The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),Ys(s.grads),s}}function M2(t,e){util.assert(util.isFunction(t),()=>"The f passed in variableGrads(f) must be a function"),util.assert(e==null||Array.isArray(e)&&e.every(l=>l instanceof Variable),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");const n=e!=null;if(!n){e=[];for(const l in ENGINE.registeredVariables)e.push(ENGINE.registeredVariables[l])}const s=n?e.filter(l=>!l.trainable):null,r=e.length;e=e.filter(l=>l.trainable),util.assert(e.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${r} variables is trainable.`);const o=!0,{value:i,grads:a}=ENGINE.gradients(t,e,null,o);util.assert(a.some(l=>l!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),util.assert(i.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${i.rank} tensor`);const c={};return e.forEach((l,u)=>{a[u]!=null&&(c[l.name]=a[u])}),s?.forEach(l=>c[l.name]=null),{value:i,grads:c}}function zm(t){return A.customGrad(t)}function Ys(t){if(t.filter(n=>n==null).length>0)throw new Error(`Cannot compute gradient of y=f(x) with respect to x. Make sure that
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
 */function Hm(t,e=null,n=!1){const s=I(t,"x","logSumExp"),r=oe(e,s.shape),o=Ks(s,r,!0),i=we(s,o),a=js(i),c=ye(a,r),l=So(c),u=It(pe(o,l.shape),l);if(n){const d=Je(u.shape,r);return pe(u,d)}return u}const Xm=_({logSumExp_:Hm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qm(t,e,n=-1){if(n===-1&&(n=e.rank-1),n!==e.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${e.rank} and dim was ${n}`);return zm((r,o,i)=>{const c=Xm(o,[n],!0),l=we(vt(o,"float32"),c);i([r,l]);const u=qn(de(l,r));return{value:ye(u,[n]),gradFunc:(f,p)=>{const[g,m]=p,x=Je(f.shape,[n]);return[de(pe(f,x),we(vt(g,"float32"),js(m))),de(pe(f,x),we(js(m),vt(g,"float32")))]}}})(t,e)}function Km(t,e,n,s=0,r=qe.SUM_BY_NONZERO_WEIGHTS){let o=I(t,"onehotLabels","softmaxCrossEntropy");const i=I(e,"logits","softmaxCrossEntropy");let a=null;if(n!=null&&(a=I(n,"weights","softmaxCrossEntropy")),ne(o.shape,i.shape,"Error in softmaxCrossEntropy: "),s>0){const l=Ie(s),u=Ie(1),d=Ie(o.shape[1]);o=It(de(o,we(u,l)),it(l,d))}const c=qm(o,i);return Rt(c,a,r)}const jm=_({softmaxCrossEntropy_:Km});/**
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
 */function Ym(t,e,n,s){const r=I(t,"indices","sparseFillEmptyRows","int32"),o=I(e,"values","sparseFillEmptyRows"),i=I(n,"denseShape","sparseFillEmptyRows","int32"),a=I(s,"defaultValue","sparseFillEmptyRows",o.dtype);if(r.rank!==2)throw new Error(`Indices should be Tensor2D but received shape
        ${r.shape}`);if(o.rank!==1)throw new Error(`Values should be Tensor1D but received shape ${o.shape}`);if(i.rank!==1)throw new Error(`Dense shape should be Tensor1D but received shape ${i.shape}`);if(a.rank!==0)throw new Error(`Default value should be a scalar but received shape ${a.shape}`);const c={indices:r,values:o,denseShape:i,defaultValue:a},l=A.runKernel(Qi,c);return{outputIndices:l[0],outputValues:l[1],emptyRowIndicator:l[2],reverseIndexMap:l[3]}}const Qm=_({sparseFillEmptyRows_:Ym});/**
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
 */function Zm(t,e,n){const s=I(t,"inputIndices","sparseReshape","int32"),r=I(e,"inputShape","sparseReshape","int32"),o=I(n,"newShape","sparseReshape","int32");if(s.rank!==2)throw new Error(`Input indices should be Tensor2D but received shape
        ${s.shape}`);if(r.rank!==1)throw new Error(`Input shape should be Tensor1D but received shape ${r.shape}`);if(o.rank!==1)throw new Error(`New shape should be Tensor1D but received shape ${o.shape}`);const i={inputIndices:s,inputShape:r,newShape:o},a=A.runKernel(Zi,i);return{outputIndices:a[0],outputShape:a[1]}}const Jm=_({sparseReshape_:Zm});/**
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
 */function ex(t,e,n){const s=I(t,"data","sparseSegmentMean"),r=I(e,"indices","sparseSegmentMean","int32"),o=I(n,"segmentIds","sparseSegmentMean","int32");if(s.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(r.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
          ${r.shape}`);if(o.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
          ${o.shape}`);const i={data:s,indices:r,segmentIds:o};return A.runKernel(Ji,i)}const tx=_({sparseSegmentMean_:ex});/**
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
 */function nx(t,e,n){const s=I(t,"data","sparseSegmentSum"),r=I(e,"indices","sparseSegmentSum","int32"),o=I(n,"segmentIds","sparseSegmentSum","int32");if(s.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(r.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
         ${r.shape}`);if(o.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
         ${o.shape}`);const i={data:s,indices:r,segmentIds:o};return A.runKernel(ea,i)}const sx=_({sparseSegmentSum_:nx});/**
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
 */function rx(t,e,n,s,r,o,i,a){const c=I(t,"data","stringNGrams","string");if(c.dtype!=="string")throw new Error("Data must be of datatype string");if(c.shape.length!==1)throw new Error(`Data must be a vector, saw: ${c.shape}`);const l=I(e,"dataSplits","stringNGrams");if(l.dtype!=="int32")throw new Error("Data splits must be of datatype int32");const u={separator:n,nGramWidths:s,leftPad:r,rightPad:o,padWidth:i,preserveShortSequences:a},d={data:c,dataSplits:l},h=A.runKernel(ta,d,u);return{nGrams:h[0],nGramsSplits:h[1]}}const ox=_({stringNGrams_:rx});/**
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
 */function ix(t,e,n=!0){const s=I(t,"input","stringSplit","string"),r=I(e,"delimiter","stringSplit","string");if(s.rank!==1)throw new Error(`Input should be Tensor1D but received shape ${s.shape}`);if(r.rank!==0)throw new Error(`Delimiter should be a scalar but received shape ${r.shape}`);const o={skipEmpty:n},i={input:s,delimiter:r},a=A.runKernel(na,i,o);return{indices:a[0],values:a[1],shape:a[2]}}const ax=_({stringSplit_:ix});/**
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
 */function cx(t,e){const n=I(t,"input","stringToHashBucketFast","string"),s={numBuckets:e};if(e<=0)throw new Error("Number of buckets must be at least 1");const r={input:n};return A.runKernel(sa,r,s)}const lx=_({stringToHashBucketFast_:cx});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const V2={fft:rc,ifft:bo,rfft:oc,irfft:_p},U2={hammingWindow:Fp,hannWindow:cc,frame:uc,stft:Bp},W2={flipLeftRight:Wp,grayscaleToRGB:Hp,resizeNearestNeighbor:bg,resizeBilinear:mg,rotateWithOffset:qp,cropAndResize:Vp,nonMaxSuppression:jp,nonMaxSuppressionAsync:rg,nonMaxSuppressionWithScore:ig,nonMaxSuppressionWithScoreAsync:lg,nonMaxSuppressionPadded:dg,nonMaxSuppressionPaddedAsync:pg,threshold:Og,transform:Lg},G2={bandPart:Hg,gramSchmidt:sm,qr:pm},z2={absoluteDifference:ym,computeWeightedLoss:Rt,cosineDistance:$m,hingeLoss:Em,huberLoss:Nm,logLoss:Dm,meanSquaredError:Lm,sigmoidCrossEntropy:Gm,softmaxCrossEntropy:jm},H2={sparseFillEmptyRows:Qm,sparseReshape:Jm,sparseSegmentMean:tx,sparseSegmentSum:sx},X2={stringNGrams:ox,stringSplit:ax,stringToHashBucketFast:lx};/**
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
 */const ux=(()=>typeof requestAnimationFrame<"u"?requestAnimationFrame:typeof setImmediate<"u"?setImmediate:t=>t())();function dx(){return new Promise(t=>ux(()=>t()))}/**
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
 */function Ec(t,e){const n=t[0].length;t.forEach((r,o)=>{v(r.length===n,()=>`Error in concat${n}D: rank of tensors[${o}] must be the same as the rank of the rest (${n})`)}),v(e>=0&&e<n,()=>`Error in concat${n}D: axis must be between 0 and ${n-1}.`);const s=t[0];t.forEach((r,o)=>{for(let i=0;i<n;i++)v(i===e||r[i]===s[i],()=>`Error in concat${n}D: Shape of tensors[${o}] (${r}) does not match the shape of the rest (${s}) along the non-concatenated axis ${o}.`)})}function jt(t,e){const n=t[0].slice();for(let s=1;s<t.length;s++)n[e]+=t[s][e];return n}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tc(t,e,n,s,r="NHWC",o){const i=t[3],a=[...e,i],c=yn(r);return mt(t,a,n,o,s,null,null,c)}function bn(t,e,n,s,r,o,i="channelsLast"){const[a,c]=Qs(e);let l;if(i==="channelsLast")l=[a,c,t[3],t[3]];else if(i==="channelsFirst")l=[a,c,t[1],t[1]];else throw new Error(`Unknown dataFormat ${i}`);return mt(t,l,n,s,r,o,!1,i)}function Kn(t,e,n,s,r,o,i="NDHWC"){const[a,c,l]=To(e);let u,d;if(i==="NDHWC")d="channelsLast",u=[a,c,l,t[4],t[4]];else if(i==="NCDHW")d="channelsFirst",u=[a,c,l,t[1],t[1]];else throw new Error(`Unknown dataFormat ${i}`);return jn(t,u,n,s,r,!1,d,o)}function mt(t,e,n,s,r,o,i=!1,a="channelsLast"){let[c,l,u,d]=[-1,-1,-1,-1];if(a==="channelsLast")[c,l,u,d]=t;else if(a==="channelsFirst")[c,d,l,u]=t;else throw new Error(`Unknown dataFormat ${a}`);const[h,f,,p]=e,[g,m]=Qs(n),[x,b]=Qs(s),w=Cn(h,x),y=Cn(f,b),{padInfo:$,outHeight:N,outWidth:R}=px(r,l,u,g,m,w,y,o,a),k=i?p*d:p;let B;return a==="channelsFirst"?B=[c,k,N,R]:a==="channelsLast"&&(B=[c,N,R,k]),{batchSize:c,dataFormat:a,inHeight:l,inWidth:u,inChannels:d,outHeight:N,outWidth:R,outChannels:k,padInfo:$,strideHeight:g,strideWidth:m,filterHeight:h,filterWidth:f,effectiveFilterHeight:w,effectiveFilterWidth:y,dilationHeight:x,dilationWidth:b,inShape:t,outShape:B,filterShape:e}}function jn(t,e,n,s,r,o=!1,i="channelsLast",a){let[c,l,u,d,h]=[-1,-1,-1,-1,-1];if(i==="channelsLast")[c,l,u,d,h]=t;else if(i==="channelsFirst")[c,h,l,u,d]=t;else throw new Error(`Unknown dataFormat ${i}`);const[f,p,g,,m]=e,[x,b,w]=To(n),[y,$,N]=To(s),R=Cn(f,y),k=Cn(p,$),B=Cn(g,N),{padInfo:U,outDepth:Q,outHeight:ie,outWidth:Ye}=gx(r,l,u,d,x,b,w,R,k,B,a),Fe=o?m*h:m;let Oe;return i==="channelsFirst"?Oe=[c,Fe,Q,ie,Ye]:i==="channelsLast"&&(Oe=[c,Q,ie,Ye,Fe]),{batchSize:c,dataFormat:i,inDepth:l,inHeight:u,inWidth:d,inChannels:h,outDepth:Q,outHeight:ie,outWidth:Ye,outChannels:Fe,padInfo:U,strideDepth:x,strideHeight:b,strideWidth:w,filterDepth:f,filterHeight:p,filterWidth:g,effectiveFilterDepth:R,effectiveFilterHeight:k,effectiveFilterWidth:B,dilationDepth:y,dilationHeight:$,dilationWidth:N,inShape:t,outShape:Oe,filterShape:e}}function hx(t,e,n,s,r){s==null&&(s=Eo(t,e,n));const o=t[0],i=t[1],a=Yt((o-e+2*s)/n+1,r),c=Yt((i-e+2*s)/n+1,r);return[a,c]}function fx(t,e,n,s,r,o){r==null&&(r=Eo(t,e,s));const i=t[0],a=t[1],c=t[2],l=Yt((i-e+2*r)/s+1,o),u=Yt((a-e+2*r)/s+1,o),d=Yt((c-e+2*r)/s+1,o);return[l,u,d,n]}function Eo(t,e,n,s=1){const r=Cn(e,s);return Math.floor((t[0]*(n-1)-n+r)/2)}function Qs(t){return typeof t=="number"?[t,t,t]:t.length===2?[t[0],t[1],1]:t}function To(t){return typeof t=="number"?[t,t,t]:t}function Cn(t,e){return e<=1?t:t+(t-1)*(e-1)}function px(t,e,n,s,r,o,i,a,c){let l,u,d;if(typeof t=="number"){l={top:t,bottom:t,left:t,right:t,type:t===0?"VALID":"NUMBER"};const f=hx([e,n],o,s,t,a);u=f[0],d=f[1]}else if(t==="same"){u=Math.ceil(e/s),d=Math.ceil(n/r);const h=Math.max(0,(u-1)*s+o-e),f=Math.max(0,(d-1)*r+i-n),p=Math.floor(h/2),g=h-p,m=Math.floor(f/2),x=f-m;l={top:p,bottom:g,left:m,right:x,type:"SAME"}}else if(t==="valid")l={top:0,bottom:0,left:0,right:0,type:"VALID"},u=Math.ceil((e-o+1)/s),d=Math.ceil((n-i+1)/r);else if(typeof t=="object"){const h=c==="channelsLast"?t[1][0]:t[2][0],f=c==="channelsLast"?t[1][1]:t[2][1],p=c==="channelsLast"?t[2][0]:t[3][0],g=c==="channelsLast"?t[2][1]:t[3][1];l={top:h,bottom:f,left:p,right:g,type:h===0&&f===0&&p===0&&g===0?"VALID":"EXPLICIT"},u=Yt((e-o+h+f)/s+1,a),d=Yt((n-i+p+g)/r+1,a)}else throw Error(`Unknown padding parameter: ${t}`);return{padInfo:l,outHeight:u,outWidth:d}}function gx(t,e,n,s,r,o,i,a,c,l,u){let d,h,f,p;if(typeof t=="number"){d={top:t,bottom:t,left:t,right:t,front:t,back:t,type:t===0?"VALID":"NUMBER"};const m=fx([e,n,s,1],a,1,r,t,u);h=m[0],f=m[1],p=m[2]}else if(t==="same"){h=Math.ceil(e/r),f=Math.ceil(n/o),p=Math.ceil(s/i);const g=(h-1)*r+a-e,m=(f-1)*o+c-n,x=(p-1)*i+l-s,b=Math.floor(g/2),w=g-b,y=Math.floor(m/2),$=m-y,N=Math.floor(x/2),R=x-N;d={top:y,bottom:$,left:N,right:R,front:b,back:w,type:"SAME"}}else if(t==="valid")d={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},h=Math.ceil((e-a+1)/r),f=Math.ceil((n-c+1)/o),p=Math.ceil((s-l+1)/i);else throw Error(`Unknown padding parameter: ${t}`);return{padInfo:d,outDepth:h,outHeight:f,outWidth:p}}function Yt(t,e){if(!e)return Math.trunc(t);switch(e){case"round":return Math.round(t);case"ceil":return Math.ceil(t);case"floor":return Math.floor(t);default:throw new Error(`Unknown roundingMode ${e}`)}}function Ro(t){const[e,n,s]=Qs(t);return e===1&&n===1&&s===1}function wn(t,e){return Ro(t)||Ro(e)}function yn(t){if(t==="NHWC")return"channelsLast";if(t==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${t}`)}function mx(t,e,n){if(n!=null){if(typeof e=="string")throw Error(`Error in ${t}: pad must be an integer when using dimRoundingMode ${n} but got pad ${e}.`);if(typeof e=="number")v(E(e),()=>`Error in ${t}: pad must be an integer when using dimRoundingMode ${n} but got pad ${e}.`);else if(typeof e=="object")e.forEach(s=>{s.forEach(r=>{v(E(r),()=>`Error in ${t}: pad must be an integer when using dimRoundingMode ${n} but got pad ${r}.`)})});else throw Error(`Error in ${t}: Unknown padding parameter: ${e}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xx(t){const n={x:I(t,"x","elu","float32")};return A.runKernel(Ci,n)}const bx=_({elu_:xx});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cx(t,e=.2){const s={x:I(t,"x","leakyRelu")},r={alpha:e};return A.runKernel(Ti,s,r)}const wx=_({leakyRelu_:Cx});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yx(t,e){const n=I(t,"x","prelu"),s=I(e,"alpha","prelu"),r={x:n,alpha:s};return A.runKernel(Bi,r)}const vx=_({prelu_:yx});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $x(t){const n={x:I(t,"x","relu6")};return A.runKernel(Hi,n)}const Ix=_({relu6_:$x});/**
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
 */function Sx(t){const n={x:I(t,"x","sigmoid","float32")};return A.runKernel($s,n)}const Ex=_({sigmoid_:Sx});/**
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
 */function Tx(t,e=0){const s={x:I(t,"x","step")},r={alpha:e};return A.runKernel(aa,s,r)}const Rx=_({step_:Tx});/**
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
 */function kx(t,e,n){if(n==null||n==="linear")return t;if(n==="relu")return de(t,Rx(e));throw new Error(`Cannot compute gradient for fused activation ${n}.`)}function Nx(t,e){let n=e;const s=Xa(t.shape,e.shape);return s.length>0&&(n=ye(n,s)),pe(n,t.shape)}function _x(t,e,n,s){if(e==="linear")return t;if(e==="relu")return Io(t);if(e==="elu")return bx(t);if(e==="relu6")return Ix(t);if(e==="prelu")return vx(t,n);if(e==="leakyrelu")return wx(t,s);if(e==="sigmoid")return Ex(t);throw new Error(`Unknown fused activation ${e}.`)}const Ax=(t,e)=>!(t>0)||e==="linear";/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var xt;(function(t){t[t.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",t[t.VALUE_ROWIDS=1]="VALUE_ROWIDS",t[t.ROW_LENGTHS=2]="ROW_LENGTHS",t[t.ROW_SPLITS=3]="ROW_SPLITS",t[t.ROW_LIMITS=4]="ROW_LIMITS",t[t.ROW_STARTS=5]="ROW_STARTS"})(xt||(xt={}));function Rc(t,e,n){let s=new Array;if(n==null&&e==null)return s;if(e==null)for(;s.length<t+n.length;)s.push(-1);else s=e.slice();if(n==null)return s;if(t+n.length!==s.length)throw new Error(`rt input.shape and shape=${e} are incompatible: rt input.rank = ${t+n.length}, but shape.rank = ${s.length}`);for(let r=1;r<n.length;++r){const o=n[r],i=s[s.length-n.length+r],a=s[i];if(o>=0)if(a>=0){if(a!==o)throw new Error(`rt input.shape and shape=${e} are incompatible: rt input.shape[${r+t}] = ${o} but shape[${r+t}] = ${a}`)}else s[i]=o}return s}function kc(t){const e={FIRST_DIM_SIZE:xt.FIRST_DIM_SIZE,VALUE_ROWIDS:xt.VALUE_ROWIDS,ROW_LENGTHS:xt.ROW_LENGTHS,ROW_SPLITS:xt.ROW_SPLITS,ROW_LIMITS:xt.ROW_LIMITS,ROW_STARTS:xt.ROW_STARTS},n=[];for(const s of t)if(s in e)n.push(e[s]);else break;return n}function Nc(t){return t.length===0?0:t[0]===xt.FIRST_DIM_SIZE?t.length-1:t.length}function _c(t,e){if(t==null||e==null)return;const n=t.length,s=e.length;if(n>=s)throw new Error(`defaultValue.shape=${t} and ragged tensor flatValues.shape=${e}, are incompatible: defaultValue.rank = ${n} must be less than ragged tensor input flatValues.rank = ${s})`);for(let r=0;r<Math.min(n,s-1);++r){const o=t[r],i=e[r+1];if(o>=0&&i>=0&&o!==1&&o!==i)throw new Error(`defaultValue.shape=${t}, and ragged tensor input flatValues.shape=${e} are incompatible: defaultValue.shape[${r-t.length}] = ${o} but ragged tensor input.flatValues.shape[${r-t.length}] = ${i}`)}}/**
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
 */const ko=30;function Zs(t){return t<=ko?t:Er(t,Math.floor(Math.sqrt(t)))}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ac(t,e,n){const s=n*(typeof t=="number"?t:t[0]),r=e*(typeof t=="number"?t:t[1]);return[s,r]}/**
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
 */function No(t,e,n,s=!0){let r=[];if(s)r=r.concat(e.slice(0)),r.push(t[0]/n),r=r.concat(t.slice(1));else{r=r.concat(t[0]);const o=e.length;for(let i=0;i<o;++i)r=r.concat([t[i+1]/e[i],e[i]]);r=r.concat(t.slice(o+1))}return r}function _o(t,e,n=!0){const s=[];if(n){s.push(e);for(let r=e+1;r<t;++r)r<=2*e?(s.push(r),s.push(r-(e+1))):s.push(r)}else{const r=[],o=[];for(let i=1;i<t;++i)i>=e*2+1||i%2===1?o.push(i):r.push(i);s.push(...r),s.push(0),s.push(...o)}return s}function Ao(t,e,n,s=!0){const r=[];s?r.push(t[0]/n):r.push(t[0]*n);for(let o=1;o<t.length;++o)o<=e.length?s?r.push(e[o-1]*t[o]):r.push(t[o]/e[o-1]):r.push(t[o]);return r}function Dc(t,e){const n=[0];for(let s=0;s<e;++s)n.push(t[s][0]);return n}function Fc(t,e,n){const s=t.slice(0,1);for(let r=0;r<n;++r)s.push(t[r+1]-e[r][0]-e[r][1]);return s}function Oc(t,e){const n=t.shape.length,s=e.shape.length;if(n<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${n}.`);if(s<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${s}.`);if(e.dtype!=="int32")throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${e.dtype}.`);if(e.shape[s-1]>n)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${e.shape[s-1]} vs. ${n}`);if(D(t.shape)===0)throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${t.shape}.`);const r=e.shape,o=r[r.length-1];let i=1;for(let d=0;d<r.length-1;++d)i*=r[d];const a=t.shape,c=r.slice();c.pop();let l=1;for(let d=o;d<n;++d)l*=a[d],c.push(a[d]);const u=[...ke(t.shape).map(d=>d/l),1].slice(0,o);return[c,i,l,u]}function Pc(t,e,n){const s=e.rank>1?e.shape[e.rank-1]:1,r=e.rank>1?e.rank-1:1,o=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${n.shape}, indices.shape: ${e.shape}, shape: ${t}, sliceDim: ${s}, and batchDim: ${r}.`;if(n.rank<r)throw new Error(o+` update.rank < ${r}. `);if(t.length<s+(n.rank-r))throw new Error(o+` Output shape length < ${s+(n.rank-r)}`);if(n.rank!==r+t.length-s)throw new Error(o+` update.rank != ${r+t.length-s}`);for(let i=0;i<r;++i)if(n.shape[i]!==e.shape[i])throw new Error(o+` updates.shape[${i}] (${n.shape[i]}) != indices.shape[${i}] (${e.shape[i]}).`);for(let i=0;i<n.rank-r;++i)if(n.shape[i+r]!==t[i+s])throw new Error(o+` updates.shape[${i+r}] (${n.shape[i+r]}) != shape[${i+r}] (${t[i+r]})`)}function Dx(t,e,n){if(e.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${e.rank}.`);if(t.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${e.dtype}`);if(n.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${n}`);if(n.length===0){if(e.size===0)throw new Error(`Indices specified for empty output. indices shape: ${e.shape}`);if(t.size===0)throw new Error(`Updates specified for empty output. updates shape: ${t.shape}`)}Pc(n,e,t)}function Do(t,e,n){const s=e.shape.length,r=s>1?e.shape[s-1]:1,o=n.length;let i=1;for(let d=r;d<o;++d)i*=n[d];const a=r<1?1:r,c=D(e.shape)/a,l=[...ke(n.slice(0,r)),1],u=D(n);return{sliceRank:r,numUpdates:c,sliceSize:i,strides:l,outputSize:u}}/**
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
 */const Lc=1.7580993408473768,Bc=1.0507009873554805;/**
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
 */const Mc=.3275911,Vc=.254829592,Uc=-.284496736,Wc=1.421413741,Gc=-1.453152027,zc=1.061405429;/**
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
 */function Yn(t,e){if(t.length!==e.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${t.length}, imag: ${e.length}.`);const n=new Float32Array(t.length*2);for(let s=0;s<n.length;s+=2)n[s]=t[s/2],n[s+1]=e[s/2];return n}function Fx(t){const e=new Float32Array(t.length/2),n=new Float32Array(t.length/2);for(let s=0;s<t.length;s+=2)e[s/2]=t[s],n[s/2]=t[s+1];return{real:e,imag:n}}function Ox(t){const e=Math.ceil(t.length/4),n=new Float32Array(e),s=new Float32Array(e);for(let r=0;r<t.length;r+=4)n[Math.floor(r/4)]=t[r],s[Math.floor(r/4)]=t[r+1];return{real:n,imag:s}}function Px(t){const e=Math.floor(t.length/4),n=new Float32Array(e),s=new Float32Array(e);for(let r=2;r<t.length;r+=4)n[Math.floor(r/4)]=t[r],s[Math.floor(r/4)]=t[r+1];return{real:n,imag:s}}function Lx(t,e){const n=t[e*2],s=t[e*2+1];return{real:n,imag:s}}function Bx(t,e,n,s){t[s*2]=e,t[s*2+1]=n}function Mx(t,e){const n=new Float32Array(t/2),s=new Float32Array(t/2);for(let r=0;r<Math.ceil(t/2);r++){const o=(e?2:-2)*Math.PI*(r/t);n[r]=Math.cos(o),s[r]=Math.sin(o)}return{real:n,imag:s}}function Vx(t,e,n){const s=(n?2:-2)*Math.PI*(t/e),r=Math.cos(s),o=Math.sin(s);return{real:r,imag:o}}/**
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
 */const Fo="->",Ux=/->/g,Hc=",",Xc="...";function qc(t,e){t=t.replace(/\s/g,"");const n=(t.length-t.replace(Ux,"").length)/Fo.length;if(n<1)throw new Error("Equations without an arrow are not supported.");if(n>1)throw new Error(`Equation must contain exactly one arrow ("${Fo}").`);const[s,r]=t.split(Fo);v(s.indexOf(Xc)===-1,()=>`The ellipsis notation ("${Xc}") is not supported yet.`);const o=s.split(Hc),i=o.length;if(e!==i)throw new Error(`Expected ${i} input tensors, received ${e}`);if(i>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");const a=[];for(let h=0;h<r.length;++h){const f=r[h];if(!o.some(p=>p.indexOf(f)!==-1))throw new Error(`Output subscripts contain the label ${f} not present in the input subscripts.`);a.indexOf(f)===-1&&a.push(f)}for(let h=0;h<s.length;++h){const f=s[h];a.indexOf(f)===-1&&f!==Hc&&a.push(f)}const c=new Array(o.length);for(let h=0;h<i;++h){if(new Set(o[h].split("")).size!==o[h].length)throw new Error(`Found duplicate axes in input component ${o[h]}. Support for duplicate axes in input is not implemented yet.`);c[h]=[];for(let f=0;f<o[h].length;++f)c[h].push(a.indexOf(o[h][f]))}const l=a.length,u=r.length,d=[];for(let h=u;h<l;++h)d.push(h);return{allDims:a,summedDims:d,idDims:c}}function Kc(t,e){let n=new Array(t);n.fill(-1);for(let r=0;r<e.length;++r)n[e[r]]=r;const s=[];for(let r=0;r<t;++r)n[r]===-1&&s.push(r);return n=n.filter(r=>r!==-1),{permutationIndices:n,expandDims:s}}function jc(t,e,n){const s=new Array(t);for(let r=0;r<n.length;++r){const o=n[r].shape;for(let i=0;i<e[r].length;++i)s[e[r][i]]===void 0?s[e[r][i]]=o[i]:v(s[e[r][i]]===o[i],()=>`Expected dimension ${s[e[r][i]]} at axis ${i} of input shaped ${JSON.stringify(o)}, but got dimension ${o[i]}`)}}function Yc(t,e){const n=t,s=[];let r=0;t.length===0&&n.push(-1),r=t.length+1;for(let i=0;i<r;++i)s.push([]);const o=[];for(let i=0;i<n.length;++i){const a=n[i],c=Wx(e,a);for(const l of c)o.indexOf(l)===-1&&(s[i].push(l),o.push(l))}return{path:n,steps:s}}function Qc(t){return t.every((e,n)=>e===n)}function Wx(t,e){const n=[];for(let s=0;s<t.length;++s)(t[s].length===0||t[s].indexOf(e)!==-1||e===-1)&&n.push(s);return n}function Zc(t,e,n=0){let s=[];if(typeof e=="number")v(t.shape[n]%e===0,()=>"Number of splits must evenly divide the axis."),s=new Array(e).fill(t.shape[n]/e);else{const r=e.reduce((i,a)=>(a===-1&&(i+=1),i),0);v(r<=1,()=>"There should be only one negative value in split array.");const o=e.indexOf(-1);if(o!==-1){const i=e.reduce((a,c)=>c>0?a+c:a);e[o]=t.shape[n]-i}v(t.shape[n]===e.reduce((i,a)=>i+a),()=>"The sum of sizes must match the size of the axis dimension."),s=e}return s}/**
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
 */function Jc(t){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${t}`}function el(t,e){return`indices(${t}, 0) is invalid: ${e} < 0`}function tl(t,e,n){return`indices(${t}, 0) is invalid: ${e} >= ${n}`}/**
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
 */function nl(t,e){return`only one output dimension may be -1, not both ${t} and ${e}`}function sl(t,e){return`size ${t} must be non-negative, not ${e}`}function rl(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function ol(t,e){const n=D(t),s=D(e);return`Input to reshape is a SparseTensor with ${n}
  dense values, but the requested shape requires a multiple of ${s}. inputShape=${t} outputShape= ${e}`}function il(t,e){const n=D(t),s=D(e);return`Input to reshape is a tensor with ${n} dense values, but the requested shape has ${s}. inputShape=${t} outputShape=${e}`}/**
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
 */function Oo(){return"segment ids must be >= 0"}function al(){return"segment ids are not increasing"}function cl(t,e){return`Segment id ${t} out of range [0, ${e}), possibly because segmentIds input is not sorted.`}function ll(t,e,n){return`Bad: indices[${t}] == ${e} out of range [0, ${n})`}/**
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
 */function ul(t,e){let n=!1,s;for(t<=ko?(s=t,n=!0):s=Er(t,Math.floor(Math.sqrt(t)));!n;)s>e||s===t?n=!0:s=Er(t,s+1);return s}function dl(t,e,n){const s=[],r=t.length;for(let o=0;o<r;o++)o!==e?s.push(t[o]):s.push(n);return s}function hl(t,e,n,s){const r=e.shape.length,o=t.shape.length;if(s!==0&&(s<-r||s>r))throw new Error(`Expect batchDims in the range of [-${r}, ${r}], but got ${s}`);if(s<0&&(s+=r),s>o)throw new Error(`batchDims (${s}) must be less than rank(x) (
    ${o}).`);if(n<s)throw new Error(`batchDims (${s}) must be less than or equal to axis (${n}).`);for(let d=0;d<s;++d)if(t.shape[d]!==e.shape[d])throw new Error(`x.shape[${d}]: ${t.shape[d]} should be equal to indices.shape[${d}]: ${e.shape[d]}.`);const i=t.shape[n],a=[];let c=1,l=1,u=1;for(let d=0;d<s;++d)a.push(t.shape[d]),c*=t.shape[d];for(let d=s;d<n;d++)a.push(t.shape[d]),l*=t.shape[d];for(let d=s;d<r;d++)a.push(e.shape[d]);for(let d=n+1;d<o;d++)a.push(t.shape[d]),u*=t.shape[d];return{batchSize:c,sliceSize:u,outerSize:l,dimSize:i,outputShape:a}}/**
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
 */function Qt(t){try{return t.map(e=>on(e))}catch(e){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${e}`)}}function fl(t){return t.map(e=>Gt(e))}/**
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
 */function Gx(t,e){const n=[];for(let o=0;o<e.length;o++)e[o]&&n.push(o);const s=_e(t,"int32"),r=_e([n.length,t.length],"int32");for(let o=0;o<n.length;o++){const i=s.indexToLoc(n[o]),a=o*t.length;r.values.set(i,a)}return r.toTensor()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
 */const Pt={},Js={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function q2(t){delete Pt[t]}function zx(t,e){Pt[t]=e}function bt(t,e){if(!(t in Pt)||e!=null){const s=Xx(t,e);if(s!==null)Pt[t]=s;else return console.log("Could not get context for WebGL version",t),null}const n=Pt[t];return n==null||n.isContextLost()?(delete Pt[t],bt(t)):(n.disable(n.DEPTH_TEST),n.disable(n.STENCIL_TEST),n.disable(n.BLEND),n.disable(n.DITHER),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SAMPLE_COVERAGE),n.enable(n.SCISSOR_TEST),n.enable(n.CULL_FACE),n.cullFace(n.BACK),Pt[t])}function Hx(t){if(typeof OffscreenCanvas<"u"&&t===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}function Xx(t,e){if(t!==1&&t!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");const n=e??Hx(t);return n.addEventListener("webglcontextlost",s=>{s.preventDefault(),delete Pt[t]},!1),S().getBool("SOFTWARE_WEBGL_ENABLED")&&(Js.failIfMajorPerformanceCaveat=!1),t===1?n.getContext("webgl",Js)||n.getContext("experimental-webgl",Js):n.getContext("webgl2",Js)}/**
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
 */var Qn;(function(t){t[t.DENSE=0]="DENSE",t[t.SHARED_BATCH=1]="SHARED_BATCH"})(Qn||(Qn={}));var nt;(function(t){t[t.RENDER=0]="RENDER",t[t.UPLOAD=1]="UPLOAD",t[t.PIXELS=2]="PIXELS",t[t.DOWNLOAD=3]="DOWNLOAD"})(nt||(nt={}));var Ae;(function(t){t[t.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",t[t.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",t[t.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",t[t.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",t[t.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"})(Ae||(Ae={}));function Zn(t,e){return[e,t]}function qx(t,e){return t*e}function K2(t,e){return[e*4,t]}function er(t){const e=D(t),n=Math.ceil(e/4);return P(n)}function j2(t,e){if(t%e!==0)throw new Error(`unpackedSize (${t}) must be a multiple of ${e}`);return t/e}function Y2(t,e,n){const s=t.length*n/4;if(e.length<s)throw new Error(`matrix length (${e.length}) must be >= ${s}`);let r=0;for(let o=0;o<t.length;o+=4)for(let i=0;i<n;i++)e[r++]=t[o+i]}function vn(t,e){return[Math.max(1,Math.ceil(e/2)),Math.max(1,Math.ceil(t/2))]}function Kx(t,e){const[n,s]=vn(t,e);return n*s*4}function Po(t,e){const n=t;let s,r,o,i,a,c,l,u,d,h;return S().getNumber("WEBGL_VERSION")===2?(s=n.R32F,r=n.R16F,o=n.RGBA16F,i=n.RGBA32F,a=n.RED,l=4,u=1,d=n.HALF_FLOAT,h=n.FLOAT,c=n.RGBA8):(s=t.RGBA,r=t.RGBA,o=t.RGBA,i=n.RGBA,a=t.RGBA,l=4,u=4,d=e!=null?e.HALF_FLOAT_OES:null,h=t.FLOAT,c=t.RGBA),{internalFormatFloat:s,internalFormatHalfFloat:r,internalFormatPackedHalfFloat:o,internalFormatPackedFloat:i,textureFormatFloat:a,downloadTextureFormat:c,downloadUnpackNumChannels:l,defaultNumChannels:u,textureTypeHalfFloat:d,textureTypeFloat:h}}/**
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
 */function L(t,e){const n=e();return S().getBool("DEBUG")&&jx(t),n}function jx(t){const e=t.getError();if(e!==t.NO_ERROR)throw new Error("WebGL Error: "+Jx(t,e))}const Yx=596e-10,Qx=65504;function Zx(t){return!!(S().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||t===0||Yx<Math.abs(t)&&Math.abs(t)<Qx)}function Jx(t,e){switch(e){case t.NO_ERROR:return"NO_ERROR";case t.INVALID_ENUM:return"INVALID_ENUM";case t.INVALID_VALUE:return"INVALID_VALUE";case t.INVALID_OPERATION:return"INVALID_OPERATION";case t.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case t.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case t.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return`Unknown error code ${e}`}}function tr(t,e){return kt(t,()=>t.getExtension(e),'Extension "'+e+'" not supported on this browser.')}function e0(t,e){const n=kt(t,()=>t.createShader(t.VERTEX_SHADER),"Unable to create vertex WebGLShader.");if(L(t,()=>t.shaderSource(n,e)),L(t,()=>t.compileShader(n)),t.getShaderParameter(n,t.COMPILE_STATUS)===!1)throw console.log(t.getShaderInfoLog(n)),new Error("Failed to compile vertex shader.");return n}function t0(t,e){const n=kt(t,()=>t.createShader(t.FRAGMENT_SHADER),"Unable to create fragment WebGLShader.");if(L(t,()=>t.shaderSource(n,e)),L(t,()=>t.compileShader(n)),S().get("ENGINE_COMPILE_ONLY"))return n;if(t.getShaderParameter(n,t.COMPILE_STATUS)===!1)throw pl(e,t.getShaderInfoLog(n)),new Error("Failed to compile fragment shader.");return n}const n0=/ERROR: [0-9]+:([0-9]+):/g;function pl(t,e){const n=n0.exec(e);if(n==null){console.log(`Couldn't parse line number in error: ${e}`),console.log(t);return}const s=+n[1],r=t.split(`
`),o=r.length.toString().length+2,i=r.map((d,h)=>fe((h+1).toString(),o)+d);let a=0;for(let d=0;d<i.length;d++)a=Math.max(i[d].length,a);const c=i.slice(0,s-1),l=i.slice(s-1,s),u=i.slice(s);console.log(c.join(`
`)),console.log(e.split(`
`)[0]),console.log(`%c ${fe(l[0],a)}`,"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(u.join(`
`))}function s0(t){return kt(t,()=>t.createProgram(),"Unable to create WebGLProgram.")}function r0(t,e){if(L(t,()=>t.linkProgram(e)),!S().get("ENGINE_COMPILE_ONLY")&&t.getProgramParameter(e,t.LINK_STATUS)===!1)throw console.log(t.getProgramInfoLog(e)),new Error("Failed to link vertex and fragment shaders.")}function Lo(t,e){if(L(t,()=>t.validateProgram(e)),t.getProgramParameter(e,t.VALIDATE_STATUS)===!1)throw console.log(t.getProgramInfoLog(e)),new Error("Shader program validation failed.")}function o0(t,e){const n=kt(t,()=>t.createBuffer(),"Unable to create WebGLBuffer");return L(t,()=>t.bindBuffer(t.ARRAY_BUFFER,n)),L(t,()=>t.bufferData(t.ARRAY_BUFFER,e,t.STATIC_DRAW)),n}function i0(t,e){const n=kt(t,()=>t.createBuffer(),"Unable to create WebGLBuffer");return L(t,()=>t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n)),L(t,()=>t.bufferData(t.ELEMENT_ARRAY_BUFFER,e,t.STATIC_DRAW)),n}function Q2(){return env().getNumber("WEBGL_VERSION")===2?1:4}function a0(t){return kt(t,()=>t.createTexture(),"Unable to create WebGLTexture.")}function c0(t,e){const n=S().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(t<=0||e<=0){const s=`[${t}x${e}]`;throw new Error("Requested texture size "+s+" is invalid.")}if(t>n||e>n){const s=`[${t}x${e}]`,r=`[${n}x${n}]`;throw new Error("Requested texture size "+s+" greater than WebGL maximum on this browser / GPU "+r+".")}}function l0(t){return kt(t,()=>t.createFramebuffer(),"Unable to create WebGLFramebuffer.")}function gl(t,e,n,s,r,o,i){const a=t.getAttribLocation(e,n);return a===-1?!1:(L(t,()=>t.bindBuffer(t.ARRAY_BUFFER,s)),L(t,()=>t.vertexAttribPointer(a,r,t.FLOAT,!1,o,i)),L(t,()=>t.enableVertexAttribArray(a)),!0)}function u0(t,e,n){xl(t,n),L(t,()=>t.activeTexture(t.TEXTURE0+n)),L(t,()=>t.bindTexture(t.TEXTURE_2D,e))}function Z2(t,e){xl(t,e),L(t,()=>t.activeTexture(t.TEXTURE0+e)),L(t,()=>t.bindTexture(t.TEXTURE_2D,null))}function d0(t,e,n){return kt(t,()=>t.getUniformLocation(e,n),'uniform "'+n+'" not present in program.')}function h0(t,e,n){return t.getUniformLocation(e,n)}function f0(t,e,n,s){L(t,()=>u0(t,e,s)),L(t,()=>t.uniform1i(n,s))}function J2(t){L(t,()=>t.bindFramebuffer(t.FRAMEBUFFER,null)),L(t,()=>t.viewport(0,0,t.canvas.width,t.canvas.height)),L(t,()=>t.scissor(0,0,t.canvas.width,t.canvas.height))}function Bo(t,e,n){L(t,()=>t.bindFramebuffer(t.FRAMEBUFFER,n)),L(t,()=>t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e,0))}function ml(t,e){L(t,()=>t.bindFramebuffer(t.FRAMEBUFFER,e)),L(t,()=>t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,null,0))}function nr(t){const e=t.checkFramebufferStatus(t.FRAMEBUFFER);if(e!==t.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+p0(t,e))}function p0(t,e){switch(e){case t.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case t.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case t.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case t.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return`unknown error ${e}`}}function kt(t,e,n){const s=L(t,()=>e());if(s==null)throw new Error(n);return s}function xl(t,e){const n=t.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,s=e+t.TEXTURE0;if(s<t.TEXTURE0||s>n){const r=`[gl.TEXTURE0, gl.TEXTURE${n}]`;throw new Error(`textureUnit must be in ${r}.`)}}function $n(t,e=2){return D(t.slice(0,t.length-e))}function In(t){if(t.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[t.length>1?t[t.length-2]:1,t[t.length-1]]}function Mo(t){let e=[1,1,1];return t.length===0||t.length===1&&t[0]===1||(e=[$n(t),...In(t)]),e}function g0(t,e=!1){let n=S().getNumber("WEBGL_MAX_TEXTURE_SIZE");e&&(n=n*2,t=t.map((r,o)=>o>=t.length-2?X(t[o]):t[o]),t.length===1&&(t=[2,t[0]])),t.length!==2&&(t=Ee(t).newShape);let s=D(t);if(t.length<=1&&s<=n)return[1,s];if(t.length===2&&t[0]<=n&&t[1]<=n)return t;if(t.length===3&&t[0]*t[1]<=n&&t[2]<=n)return[t[0]*t[1],t[2]];if(t.length===3&&t[0]<=n&&t[1]*t[2]<=n)return[t[0],t[1]*t[2]];if(t.length===4&&t[0]*t[1]*t[2]<=n&&t[3]<=n)return[t[0]*t[1]*t[2],t[3]];if(t.length===4&&t[0]<=n&&t[1]*t[2]*t[3]<=n)return[t[0],t[1]*t[2]*t[3]];if(e){const r=$n(t);let o=2,i=2;return t.length&&([o,i]=In(t)),s=r*(o/2)*(i/2),P(s).map(a=>a*2)}return P(s)}function sr(t){return t%2===0}function rr(t,e){if(t=t.slice(-2),e=e.slice(-2),T(t,e)||!t.length||!e.length||t[0]===0||t[1]===0||e[0]===0||e[1]===0)return!0;if(t.length!==e.length){const n=t.slice(-1)[0],s=e.slice(-1)[0];if(n===s||sr(n)&&sr(s)&&(t[0]===1||e[0]===1))return!0}return t[1]===e[1]&&sr(t[0])&&sr(e[0])}let or,ir;function m0(t){if(or==null){const e=bt(t);or=e.getParameter(e.MAX_TEXTURE_SIZE)}return or}function eR(){or=null}function tR(){ir=null}function x0(t){if(ir==null){const e=bt(t);ir=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,ir)}function b0(t){if(t===0)return 0;let e;const n=bt(t);return at(n,"EXT_disjoint_timer_query_webgl2")&&t===2?e=2:at(n,"EXT_disjoint_timer_query")?e=1:e=0,e}function at(t,e){return t.getExtension(e)!=null}function bl(t){try{if(bt(t)!=null)return!0}catch(e){return console.log("Error when getting WebGL context: ",e),!1}return!1}function C0(t){if(t===0)return!1;const e=bt(t);if(t===1){if(!at(e,"OES_texture_float"))return!1}else if(!at(e,"EXT_color_buffer_float"))return!1;return Vo(e)}function w0(t){if(t===0)return!1;const e=bt(t);if(t===1){if(!at(e,"OES_texture_float")||!at(e,"WEBGL_color_buffer_float"))return!1}else{if(at(e,"EXT_color_buffer_float"))return Vo(e);const s="EXT_color_buffer_half_float";if(at(e,s)){const r=e.getExtension(s);return y0(e,r)}return!1}return Vo(e)}function Vo(t){const e=Po(t),n=t.createTexture();t.bindTexture(t.TEXTURE_2D,n);const s=1,r=1;t.texImage2D(t.TEXTURE_2D,0,e.internalFormatFloat,s,r,0,e.textureFormatFloat,e.textureTypeFloat,null);const o=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,o),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0);const i=t.checkFramebufferStatus(t.FRAMEBUFFER)===t.FRAMEBUFFER_COMPLETE;return t.bindTexture(t.TEXTURE_2D,null),t.bindFramebuffer(t.FRAMEBUFFER,null),t.deleteTexture(n),t.deleteFramebuffer(o),i}function y0(t,e){const n=Po(t,e),s=t.createTexture();t.bindTexture(t.TEXTURE_2D,s);const r=1,o=1;t.texImage2D(t.TEXTURE_2D,0,n.internalFormatHalfFloat,r,o,0,n.textureFormatFloat,n.textureTypeHalfFloat,null);const i=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,i),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,s,0);const a=t.checkFramebufferStatus(t.FRAMEBUFFER)===t.FRAMEBUFFER_COMPLETE;return t.bindTexture(t.TEXTURE_2D,null),t.bindFramebuffer(t.FRAMEBUFFER,null),t.deleteTexture(s),t.deleteFramebuffer(i),a}function v0(t){return t!==2?!1:bt(t).fenceSync!=null}function Jn(t,e){Array.isArray(t)||(t=[t]),t.forEach(n=>{n!=null&&v(n.dtype!=="complex64",()=>`${e} does not support complex64 tensors in the WebGL backend.`)})}/**
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
 */const z=S();z.registerFlag("HAS_WEBGL",()=>z.getNumber("WEBGL_VERSION")>0),z.registerFlag("WEBGL_VERSION",()=>bl(2)?2:bl(1)?1:0),z.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS",()=>!1),z.registerFlag("WEBGL_BUFFER_SUPPORTED",()=>z.get("WEBGL_VERSION")===2),z.registerFlag("WEBGL_CPU_FORWARD",()=>!0),z.registerFlag("WEBGL_FORCE_F16_TEXTURES",()=>!1),z.registerFlag("WEBGL_PACK",()=>z.getBool("HAS_WEBGL")),z.registerFlag("WEBGL_PACK_NORMALIZATION",()=>z.getBool("WEBGL_PACK")),z.registerFlag("WEBGL_PACK_CLIP",()=>z.getBool("WEBGL_PACK")),z.registerFlag("WEBGL_PACK_DEPTHWISECONV",()=>z.getBool("WEBGL_PACK")),z.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",()=>z.getBool("WEBGL_PACK")),z.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",()=>z.getBool("WEBGL_PACK")),z.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",()=>z.getBool("WEBGL_PACK")),z.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",()=>z.getBool("WEBGL_PACK")),z.registerFlag("WEBGL_PACK_REDUCE",()=>z.getBool("WEBGL_PACK")),z.registerFlag("WEBGL_LAZILY_UNPACK",()=>z.getBool("WEBGL_PACK")),z.registerFlag("WEBGL_CONV_IM2COL",()=>z.getBool("WEBGL_PACK")),z.registerFlag("WEBGL_MAX_TEXTURE_SIZE",()=>m0(z.getNumber("WEBGL_VERSION"))),z.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",()=>x0(z.getNumber("WEBGL_VERSION"))),z.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",()=>{const t=z.getNumber("WEBGL_VERSION");return t===0?0:b0(t)}),z.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",()=>z.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&!Ia()),z.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",()=>C0(z.getNumber("WEBGL_VERSION"))),z.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",()=>z.getBool("WEBGL_FORCE_F16_TEXTURES")?!1:z.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")),z.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",()=>w0(z.getNumber("WEBGL_VERSION"))),z.registerFlag("WEBGL_FENCE_API_ENABLED",()=>v0(z.getNumber("WEBGL_VERSION"))),z.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",()=>z.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0),z.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD",()=>-1,t=>{if(t<0&&t!==-1)throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${t}.`)}),z.registerFlag("WEBGL_FLUSH_THRESHOLD",()=>Ia()?1:-1,t=>{if(t<0&&t!==-1)throw new Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${t}.`)}),z.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD",()=>128),z.registerFlag("WEBGL_USE_SHAPES_UNIFORMS",()=>!1),z.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",()=>1e5),z.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD",()=>128),z.registerFlag("WEBGL_EXP_CONV",()=>!1),z.registerFlag("SOFTWARE_WEBGL_ENABLED",()=>z.getBool("IS_TEST"));/**
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
 */function Ve(){let t,e,n,s,r,o,i,a,c,l;return S().getNumber("WEBGL_VERSION")===2?(t="#version 300 es",e="in",n="out",s="in",r="texture",o="outputColor",i="out vec4 outputColor;",a=`
      bool isnan_custom(float val) {
        uint floatToUint = floatBitsToUint(val);
        return (floatToUint & 0x7fffffffu) > 0x7f800000u;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `,c="",l=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(t="",e="attribute",n="varying",s="varying",r="texture2D",o="gl_FragColor",i="",a=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,c=`
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
    `),{version:t,attribute:e,varyingVs:n,varyingFs:s,texture2D:r,output:o,defineOutput:i,defineSpecialNaN:a,defineSpecialInf:c,defineRound:l}}/**
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
 */function Zt(t,e,n="index"){const s=ke(e);return s.map((r,o)=>{const i=`int ${t[o]} = ${n} / ${r}`,a=o===s.length-1?`int ${t[o+1]} = ${n} - ${t[o]} * ${r}`:`index -= ${t[o]} * ${r}`;return`${i}; ${a};`}).join("")}function ar(t,e,n="index"){const s=ke(e);return s.map((r,o)=>{const i=`int ${t[o]} = ${n} / outShapeStrides[${o}]`,a=o===s.length-1?`int ${t[o+1]} = ${n} - ${t[o]} * outShapeStrides[${o}]`:`index -= ${t[o]} * outShapeStrides[${o}]`;return`${i}; ${a};`}).join("")}function $0(t,e){const n=t.length,s=t.map(o=>`${e}[${o}]`),r=new Array(n-1);r[n-2]=s[n-1];for(let o=n-3;o>=0;--o)r[o]=`(${r[o+1]} * ${s[o+1]})`;return r}function I0(t,e,n="index"){const s=t.map((o,i)=>i),r=$0(s,e);return r.map((o,i)=>{const a=`int ${t[i]} = ${n} / ${r[i]}`,c=i===r.length-1?`int ${t[i+1]} = ${n} - ${t[i]} * ${r[i]}`:`index -= ${t[i]} * ${r[i]}`;return`${a}; ${c};`}).join("")}function cr(t){return t.length===1?`${t[0]}`:`vec${t.length}(${t.join(",")})`}function nR(t,e){if(t.length!==e.length)throw new Error(`Vectors to be dotted must be of the same length -got ${t.length} and ${e.length}`);const n=[],s=Math.floor(t.length/4),r=t.length%4;for(let o=0;o<s;o++){const i=t.slice(o*4,o*4+4),a=e.slice(o*4,o*4+4);n.push(`${cr(i)}, ${cr(a)}`)}if(r!==0){let o=t.slice(s*4),i=e.slice(s*4);o.length===1&&(o=o.map(a=>`float(${a})`),i=i.map(a=>`float(${a})`)),n.push(`${cr(o)}, ${cr(i)}`)}return n.map((o,i)=>`dot(${o})`).join("+")}function Uo(t){const e=ke(t).map(n=>n.toString());return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * ${e[0]} + coords.y * ${e[1]} + coords.z;
  }
`}function Wo(){return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;
  }
`}const Cl=`
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
 */const{getBroadcastDims:wl}=ae;function S0(t,e,n){const s=[];if(t.forEach(f=>{const p=D(f.shapeInfo.logicalShape);if(f.shapeInfo.isUniform?s.push(`uniform float ${f.name}${p>1?`[${p}]`:""};`):(s.push(`uniform sampler2D ${f.name};`),s.push(`uniform int offset${f.name};`)),n.enableShapeUniforms){const{uniformShape:g}=Go(n.packedInputs,f.shapeInfo.logicalShape,f.shapeInfo.texShape);switch(g.length){case 1:s.push(`uniform int ${f.name}Shape;`);break;case 2:s.push(`uniform ivec2 ${f.name}Shape;`);break;case 3:s.push(`uniform ivec3 ${f.name}Shape;`);break;case 4:s.push(`uniform ivec4 ${f.name}Shape;`);break;default:break}s.push(`uniform ivec2 ${f.name}TexShape;`)}}),n.enableShapeUniforms){switch(e.logicalShape.length){case 1:s.push("uniform int outShape;");break;case 2:s.push("uniform ivec2 outShape;"),s.push("uniform int outShapeStrides;");break;case 3:s.push("uniform ivec3 outShape;"),s.push("uniform ivec2 outShapeStrides;");break;case 4:s.push("uniform ivec4 outShape;"),s.push("uniform ivec3 outShapeStrides;");break;default:break}s.push("uniform ivec2 outTexShape;")}n.customUniforms&&n.customUniforms.forEach(f=>{s.push(`uniform ${f.type} ${f.name}${f.arrayIndex?`[${f.arrayIndex}]`:""};`)});const r=s.join(`
`),o=t.map(f=>E0(f,e,n.packedInputs,n.enableShapeUniforms)).join(`
`),i=e.texShape,a=Ve(),c=k0(a);let l,u,d=A0(a);return e.isPacked?(l=T0(e.logicalShape,i,n.enableShapeUniforms),u=_0(a)):(l=R0(e.logicalShape,i,n.enableShapeUniforms),u=N0(a)),n.packedInputs&&(d+=P0),[d,c,u,r,l,o,n.userCode].join(`
`)}function Sn(t,e=!1){const n=t.shapeInfo.logicalShape;switch(n.length){case 0:return K0(t,e);case 1:return Y0(t,e);case 2:return Z0(t,e);case 3:return eb(t,e);case 4:return nb(t,e);case 5:return sb(t);case 6:return rb(t);default:throw new Error(`${n.length}-D input sampling is not yet supported`)}}function yl(t,e){switch(t.shapeInfo.logicalShape.length){case 0:return q0(t);case 1:return j0(t,e);case 2:return Q0(t,e);case 3:return J0(t,e);default:return tb(t,e)}}function E0(t,e,n=!1,s){let r="";n?r+=yl(t,s):r+=Sn(t,s);const o=t.shapeInfo.logicalShape,i=e.logicalShape;return o.length<=i.length&&(n?r+=ob(t,e):r+=ib(t,e)),r}function T0(t,e,n){switch(t.length){case 0:return vl();case 1:return L0(t,e,n);case 2:return H0(t,e,n);case 3:return M0(t,e,n);default:return U0(t,e,n)}}function R0(t,e,n){switch(t.length){case 0:return vl();case 1:return B0(t,e,n);case 2:return X0(t,e,n);case 3:return V0(t,e,n);case 4:return W0(t,e,n);case 5:return G0(t,e);case 6:return z0(t,e);default:throw new Error(`${t.length}-D output sampling is not yet supported`)}}function k0(t){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return ${t.texture2D}(textureSampler, uv).r;
    }
  `}function N0(t){return`
    void setOutput(float val) {
      ${t.output} = vec4(val, 0, 0, 0);
    }
  `}function _0(t){return`
    void setOutput(vec4 val) {
      ${t.output} = val;
    }
  `}function A0(t){return`${t.version}
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

    ${D0}
    ${F0}
    ${O0}
  `}const D0=`
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
`,F0=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,O0=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,P0=`
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
`;function vl(){return`
    int getOutputCoords() {
      return 0;
    }
  `}function L0(t,e,n){const s=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)];return s[0]===1?n?`
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
  `}function B0(t,e,n){return e[0]===1?n?`
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
  `}function M0(t,e,n){if(n)return`
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
  `}function V0(t,e,n){if(n)return`
  ivec3 getOutputCoords() {
    ivec2 resTexRC = ivec2(resultUV.yx *
                           vec2(outTexShape[0], outTexShape[1]));
    int index = resTexRC.x * outTexShape[1] + resTexRC.y;
    ${ar(["r","c","d"],t)}
    return ivec3(r, c, d);
  }
`;const s=Zt(["r","c","d"],t);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;
      ${s}
      return ivec3(r, c, d);
    }
  `}function U0(t,e,n){if(n)return`
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
  `;const s=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)],r=Math.ceil(t[t.length-1]/2),o=r*Math.ceil(t[t.length-2]/2);let i=o,a="",c="b, r, c";for(let l=2;l<t.length-1;l++)i*=t[t.length-l-1],a=`
      int b${l} = index / ${i};
      index -= b${l} * ${i};
    `+a,c=`b${l}, `+c;return`
    ivec${t.length} getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));
      int index = resTexRC.x * ${s[1]} + resTexRC.y;

      ${a}

      int b = index / ${o};
      index -= b * ${o};

      int r = 2 * (index / ${r});
      int c = imod(index, ${r}) * 2;

      return ivec${t.length}(${c});
    }
  `}function W0(t,e,n){if(n)return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      ${ar(["r","c","d","d2"],t)}
      return ivec4(r, c, d, d2);
    }
  `;const s=Zt(["r","c","d","d2"],t);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;
      ${s}
      return ivec4(r, c, d, d2);
    }
  `}function G0(t,e){const n=Zt(["r","c","d","d2","d3"],t);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${e[0]},
                             ${e[1]}));

      int index = resTexRC.x * ${e[1]} + resTexRC.y;

      ${n}

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}function z0(t,e){const n=Zt(["r","c","d","d2","d3","d4"],t);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;

      ${n}

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}function H0(t,e,n){const s=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)];if(T(t,e))return n?`
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
  `}function X0(t,e,n){return T(t,e)?n?`
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
  `}function Jt(t){return`offset${t}`}function q0(t){const e=t.name,n="get"+e.charAt(0).toUpperCase()+e.slice(1),s=Ve();return`
    vec4 ${n}() {
      return ${s.texture2D}(${e}, halfCR);
    }
  `}function K0(t,e){const n=t.name,s="get"+n.charAt(0).toUpperCase()+n.slice(1);if(t.shapeInfo.isUniform)return`float ${s}() {return ${n};}`;const[r,o]=t.shapeInfo.texShape;if(r===1&&o===1)return`
      float ${s}() {
        return sampleTexture(${n}, halfCR);
      }
    `;const i=Jt(n);if(e)return`
    float ${s}() {
      vec2 uv = uvFromFlat(${n}TexShape[0], ${n}TexShape[1], ${i});
      return sampleTexture(${n}, uv);
    }
  `;const[a,c]=t.shapeInfo.texShape;return`
    float ${s}() {
      vec2 uv = uvFromFlat(${a}, ${c}, ${i});
      return sampleTexture(${n}, uv);
    }
  `}function j0(t,e){const n=t.name,s="get"+n.charAt(0).toUpperCase()+n.slice(1),r=t.shapeInfo.texShape,o=Ve();if(e)return`
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
  `}function Y0(t,e){const n=t.name,s="get"+n.charAt(0).toUpperCase()+n.slice(1);if(t.shapeInfo.isUniform)return`
      float ${s}(int index) {
        ${En(t)}
      }
    `;const r=t.shapeInfo.texShape,o=r[0],i=r[1];if(i===1&&o===1)return`
      float ${s}(int index) {
        return sampleTexture(${n}, halfCR);
      }
    `;const a=Jt(n);return i===1?e?`
      float ${s}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${a}) + 0.5) / float(${n}TexShape[0]));
        return sampleTexture(${n}, uv);
      }
    `:`
      float ${s}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${a}) + 0.5) / ${o}.0);
        return sampleTexture(${n}, uv);
      }
    `:o===1?e?`
      float ${s}(int index) {
        vec2 uv = vec2((float(index + ${a}) + 0.5) / float(${n}TexShape[1]), 0.5);
        return sampleTexture(${n}, uv);
      }
    `:`
      float ${s}(int index) {
        vec2 uv = vec2((float(index + ${a}) + 0.5) / ${i}.0, 0.5);
        return sampleTexture(${n}, uv);
      }
    `:e?`
    float ${s}(int index) {
      vec2 uv = uvFromFlat(${n}TexShape[0], ${n}TexShape[1], index + ${a});
      return sampleTexture(${n}, uv);
    }
  `:`
    float ${s}(int index) {
      vec2 uv = uvFromFlat(${o}, ${i}, index + ${a});
      return sampleTexture(${n}, uv);
    }
  `}function Q0(t,e){const n=t.shapeInfo.logicalShape,s=t.name,r="get"+s.charAt(0).toUpperCase()+s.slice(1),o=t.shapeInfo.texShape,i=o[0],a=o[1],c=Ve();if(o!=null&&T(n,o))return e?`
      vec4 ${r}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${s}TexShape[1], ${s}TexShape[0]);

        return ${c.texture2D}(${s}, uv);
      }
    `:`
      vec4 ${r}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${a}.0, ${i}.0);

        return ${c.texture2D}(${s}, uv);
      }
    `;if(e)return`
    vec4 ${r}(int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${s}TexShape[0]) / 2.0), ceil(float(${s}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${s}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom2D(valuesPerRow, packedTexShape[0], packedTexShape[1], row, col);
      return ${c.texture2D}(${s}, uv);
    }
  `;const l=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)],u=Math.ceil(n[1]/2);return`
    vec4 ${r}(int row, int col) {
      vec2 uv = packedUVfrom2D(${u}, ${l[0]}, ${l[1]}, row, col);
      return ${c.texture2D}(${s}, uv);
    }
  `}function Z0(t,e){const n=t.shapeInfo.logicalShape,s=t.name,r="get"+s.charAt(0).toUpperCase()+s.slice(1),o=t.shapeInfo.texShape;if(o!=null&&T(n,o)){if(e)return`
      float ${r}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `;const h=o[0],f=o[1];return`
    float ${r}(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(${f}.0, ${h}.0);
      return sampleTexture(${s}, uv);
    }
  `}const{newShape:i,keptDims:a}=Ee(n),c=i;if(c.length<n.length){const h=Tn(t,c),f=["row","col"];return`
      ${Sn(h,e)}
      float ${r}(int row, int col) {
        return ${r}(${Rn(f,a)});
      }
    `}if(t.shapeInfo.isUniform)return`
      float ${r}(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(${n[1]}, 1)));
        ${En(t)}
      }
    `;const l=o[0],u=o[1],d=Jt(s);return u===1?e?`
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
`}function J0(t,e){const n=t.shapeInfo.logicalShape,s=t.name,r="get"+s.charAt(0).toUpperCase()+s.slice(1),o=t.shapeInfo.texShape,i=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)];if(n[0]===1){const h=n.slice(1),f=[1,2],p=Tn(t,h),g=["b","row","col"];return`
        ${yl(p,e)}
        vec4 ${r}(int b, int row, int col) {
          return ${r}(${Rn(g,f)});
        }
      `}const a=Ve();if(e)return`
    vec4 ${r}(int b, int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${s}TexShape[0]) / 2.0), ceil(float(${s}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${s}Shape[2]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${s}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom3D(
        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);
      return ${a.texture2D}(${s}, uv);
    }
  `;const c=i[0],l=i[1],u=Math.ceil(n[2]/2),d=u*Math.ceil(n[1]/2);return`
    vec4 ${r}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${c}, ${l}, ${d}, ${u}, b, row, col);
      return ${a.texture2D}(${s}, uv);
    }
  `}function eb(t,e){const n=t.shapeInfo.logicalShape,s=t.name,r="get"+s.charAt(0).toUpperCase()+s.slice(1),o=n[1]*n[2],i=n[2],{newShape:a,keptDims:c}=Ee(n),l=a;if(l.length<n.length){const g=Tn(t,l),m=["row","col","depth"];return`
        ${Sn(g,e)}
        float ${r}(int row, int col, int depth) {
          return ${r}(${Rn(m,c)});
        }
      `}if(t.shapeInfo.isUniform)return`
      float ${r}(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(${o}, ${i}, 1)));
        ${En(t)}
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
  `;const p=Jt(s);return e?`
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
  `}function tb(t,e){const n=t.name,s="get"+n.charAt(0).toUpperCase()+n.slice(1),r=Ve();if(e)return`
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
  `;const o=t.shapeInfo.logicalShape,i=o.length,a=t.shapeInfo.texShape,c=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)],l=c[0],u=c[1],d=Math.ceil(o[i-1]/2);let h=d*Math.ceil(o[i-2]/2),f="int b, int row, int col",p=`b * ${h} + (row / 2) * ${d} + (col / 2)`;for(let g=2;g<i-1;g++)f=`int b${g}, `+f,h*=o[i-g-1],p=`b${g} * ${h} + `+p;return`
    vec4 ${s}(${f}) {
      int index = ${p};
      int texR = index / ${u};
      int texC = index - texR * ${u};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${u}, ${l});
      return ${r.texture2D}(${n}, uv);
    }
  `}function nb(t,e){const n=t.shapeInfo.logicalShape,s=t.name,r="get"+s.charAt(0).toUpperCase()+s.slice(1),o=n[3],i=n[2]*o,a=n[1]*i,{newShape:c,keptDims:l}=Ee(n);if(c.length<n.length){const b=Tn(t,c),w=["row","col","depth","depth2"];return`
      ${Sn(b,e)}
      float ${r}(int row, int col, int depth, int depth2) {
        return ${r}(${Rn(w,l)});
      }
    `}if(t.shapeInfo.isUniform)return`
      float ${r}(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(${a}, ${i}, ${o}, 1)));
        ${En(t)}
      }
    `;const u=t.shapeInfo.flatOffset,d=t.shapeInfo.texShape,h=d[0],f=d[1],p=`int stride2 = ${s}Shape[3];`,g=`int stride1 = ${s}Shape[2] * stride2;`,m=`int stride0 = ${s}Shape[1] * stride1;`;if(f===a&&u==null)return e?`
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
    `;const x=Jt(s);return e?`
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
      int index = row * ${a} + col * ${i} +
          depth * ${o} + depth2;
      vec2 uv = uvFromFlat(${h}, ${f}, index + ${x});
      return sampleTexture(${s}, uv);
    }
  `}function sb(t){const e=t.shapeInfo.logicalShape,n=t.name,s="get"+n.charAt(0).toUpperCase()+n.slice(1),r=e[4],o=e[3]*r,i=e[2]*o,a=e[1]*i,{newShape:c,keptDims:l}=Ee(e);if(c.length<e.length){const g=Tn(t,c),m=["row","col","depth","depth2","depth3"];return`
      ${Sn(g)}
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        return ${s}(${Rn(m,l)});
      }
    `}if(t.shapeInfo.isUniform)return`
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(${a}, ${i}, ${o}, ${r})) +
          depth3;
        ${En(t)}
      }
    `;const u=t.shapeInfo.flatOffset,d=t.shapeInfo.texShape,h=d[0],f=d[1];if(f===a&&u==null)return`
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
    `;const p=Jt(n);return`
    float ${s}(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${a} + col * ${i} + depth * ${o} +
          depth2 * ${r} + depth3 + ${p};
      vec2 uv = uvFromFlat(${h}, ${f}, index);
      return sampleTexture(${n}, uv);
    }
  `}function rb(t){const e=t.shapeInfo.logicalShape,n=t.name,s="get"+n.charAt(0).toUpperCase()+n.slice(1),{newShape:r,keptDims:o}=Ee(e);if(r.length<e.length){const m=Tn(t,r),x=["row","col","depth","depth2","depth3","depth4"];return`
      ${Sn(m)}
      float ${s}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return ${s}(${Rn(x,o)});
      }
    `}const i=e[5],a=e[4]*i,c=e[3]*a,l=e[2]*c,u=e[1]*l;if(t.shapeInfo.isUniform)return`
      float ${s}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(${u}, ${l}, ${c}, ${a})) +
          dot(
            vec2(depth3, depth4),
            vec2(${i}, 1)));
        ${En(t)}
      }
    `;const d=t.shapeInfo.flatOffset,h=t.shapeInfo.texShape,f=h[0],p=h[1];if(p===u&&d==null)return`
      float ${s}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(${l}, ${c}, ${a}, ${i})) +
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
    `;const g=Jt(n);return`
    float ${s}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${u} + col * ${l} + depth * ${c} +
          depth2 * ${a} + depth3 * ${i} + depth4 + ${g};
      vec2 uv = uvFromFlat(${f}, ${p}, index);
      return sampleTexture(${n}, uv);
    }
  `}function En(t){const e=t.name,n=D(t.shapeInfo.logicalShape);return n<2?`return ${e};`:`
    for (int i = 0; i < ${n}; i++) {
      if (i == index) {
        return ${e}[i];
      }
    }
  `}function ob(t,e){const n=t.name,s=n.charAt(0).toUpperCase()+n.slice(1),r="get"+s+"AtOutCoords",o=t.shapeInfo.logicalShape.length,i=e.logicalShape.length,a=wl(t.shapeInfo.logicalShape,e.logicalShape),c=ge(i),l=i-o;let u;const d=["x","y","z","w","u","v"];o===0?u="":i<2&&a.length>=1?u="coords = 0;":u=a.map(b=>`coords.${d[b+l]} = 0;`).join(`
`);let h="";i<2&&o>0?h="coords":h=t.shapeInfo.logicalShape.map((b,w)=>`coords.${d[w+l]}`).join(", ");let f="return outputValue;";const g=D(t.shapeInfo.logicalShape)===1,x=D(e.logicalShape)===1;if(o===1&&!g&&!x)f=`
      return vec4(outputValue.xy, outputValue.xy);
    `;else if(g&&!x)i===1?f=`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:f=`
        return vec4(outputValue.x);
      `;else if(a.length){const b=o-2,w=o-1;a.indexOf(b)>-1&&a.indexOf(w)>-1?f="return vec4(outputValue.x);":a.indexOf(b)>-1?f="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":a.indexOf(w)>-1&&(f="return vec4(outputValue.xx, outputValue.zz);")}return`
    vec4 ${r}() {
      ${c} coords = getOutputCoords();
      ${u}
      vec4 outputValue = get${s}(${h});
      ${f}
    }
  `}function ib(t,e){const n=t.name,s=n.charAt(0).toUpperCase()+n.slice(1),r="get"+s+"AtOutCoords",o=e.texShape,i=t.shapeInfo.texShape,a=t.shapeInfo.logicalShape.length,c=e.logicalShape.length;if(!t.shapeInfo.isUniform&&a===c&&t.shapeInfo.flatOffset==null&&T(i,o))return`
      float ${r}() {
        return sampleTexture(${n}, resultUV);
      }
    `;const l=ge(c),u=wl(t.shapeInfo.logicalShape,e.logicalShape),d=c-a;let h;const f=["x","y","z","w","u","v"];a===0?h="":c<2&&u.length>=1?h="coords = 0;":h=u.map(g=>`coords.${f[g+d]} = 0;`).join(`
`);let p="";return c<2&&a>0?p="coords":p=t.shapeInfo.logicalShape.map((g,m)=>`coords.${f[m+d]}`).join(", "),`
    float ${r}() {
      ${l} coords = getOutputCoords();
      ${h}
      return get${s}(${p});
    }
  `}function ge(t){if(t<=1)return"int";if(t===2)return"ivec2";if(t===3)return"ivec3";if(t===4)return"ivec4";if(t===5)return"ivec5";if(t===6)return"ivec6";throw Error(`GPU for rank ${t} is not yet supported`)}function Go(t,e,n){const{newShape:s,keptDims:r}=Ee(e),o=e.length,i=t&&o===3&&e[0]===1,a=i?e.slice(1):s,c=!t&&o>1&&!T(e,n)&&s.length<o||i;return{useSqueezeShape:c,uniformShape:c?a:e,keptDims:r}}function Tn(t,e){const n=JSON.parse(JSON.stringify(t));return n.shapeInfo.logicalShape=e,n}function Rn(t,e){return e.map(n=>t[n]).join(", ")}/**
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
 */function ab(t,e,n,s){const r=n.map((u,d)=>{const h={logicalShape:u.shape,texShape:u.isUniform?null:u.texData.texShape,isUniform:u.isUniform,isPacked:u.isUniform?!1:u.texData.isPacked,flatOffset:null};return u.texData!=null&&u.texData.slice!=null&&u.texData.slice.flatOffset>0&&(h.flatOffset=u.texData.slice.flatOffset),{name:e.variableNames[d],shapeInfo:h}}),o=r.map(u=>u.shapeInfo),i={logicalShape:s.shape,texShape:s.texData.texShape,isUniform:!1,isPacked:s.texData.isPacked,flatOffset:null},a=S0(r,i,e),c=t0(t.gl,a),l=t.createProgram(c);return S().get("ENGINE_COMPILE_ONLY")?{program:e,fragmentShader:c,source:a,webGLProgram:l,inShapeInfos:o,outShapeInfo:i,uniformLocations:null,customUniformLocations:null,infLoc:null,nanLoc:null,inShapesLocations:null,inTexShapesLocations:null,outShapeLocation:null,outShapeStridesLocation:null,outTexShapeLocation:null}:Object.assign({program:e,fragmentShader:c,source:a,webGLProgram:l,inShapeInfos:o,outShapeInfo:i},$l(t,e,l))}function $l(t,e,n){const s={},r={},o={},i=[];let a,c,l,u=null,d=null;d=t.getUniformLocation(n,"NAN",!1),S().getNumber("WEBGL_VERSION")===1&&(u=t.getUniformLocation(n,"INFINITY",!1));const h=!1;for(let f=0;f<e.variableNames.length;f++){const p=e.variableNames[f];s[p]=t.getUniformLocation(n,p,h),s[`offset${p}`]=t.getUniformLocation(n,`offset${p}`,h),e.enableShapeUniforms&&(r[`${p}Shape`]=t.getUniformLocation(n,`${p}Shape`,h),o[`${p}TexShape`]=t.getUniformLocation(n,`${p}TexShape`,h))}return e.enableShapeUniforms&&(a=t.getUniformLocation(n,"outShape",h),l=t.getUniformLocation(n,"outShapeStrides",h),c=t.getUniformLocation(n,"outTexShape",h)),e.customUniforms&&e.customUniforms.forEach((f,p)=>{i[p]=t.getUniformLocation(n,f.name,h)}),{uniformLocations:s,customUniformLocations:i,infLoc:u,nanLoc:d,inShapesLocations:r,inTexShapesLocations:o,outShapeLocation:a,outShapeStridesLocation:l,outTexShapeLocation:c}}function Il(t,e){if(t.length!==e.length)throw Error(`Binary was compiled with ${t.length} inputs, but was executed with ${e.length} inputs`);t.forEach((n,s)=>{const r=n.logicalShape,o=e[s],i=o.shape;if(!T(r,i))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${r} and ${i} must match`);if(n.isUniform&&o.isUniform)return;const a=n.texShape,c=o.isUniform?null:o.texData.texShape;if(!T(a,c))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${a} and ${c} must match`)})}function cb(t,e,n,s,r){e.program.enableShapeUniforms||(Il(e.inShapeInfos,n),Il([e.outShapeInfo],[s]));const o=s.texData.texture,i=s.texData.texShape;s.texData.isPacked?t.setOutputPackedMatrixTexture(o.texture,i[0],i[1]):t.setOutputMatrixTexture(o.texture,i[0],i[1]),t.setProgram(e.webGLProgram),S().getNumber("WEBGL_VERSION")===1&&e.infLoc!==null&&t.gl.uniform1f(e.infLoc,1/0),e.nanLoc!==null&&t.gl.uniform1f(e.nanLoc,NaN),n.forEach((c,l)=>{const u=e.program.variableNames[l],d=e.uniformLocations[u],h=e.uniformLocations[`offset${u}`],f=e.inShapesLocations[`${u}Shape`],p=e.inTexShapesLocations[`${u}TexShape`];if(f){const{uniformShape:g}=Go(e.program.packedInputs,c.shape,c.texData.texShape);switch(g.length){case 1:t.gl.uniform1iv(f,new Int32Array(g));break;case 2:t.gl.uniform2iv(f,new Int32Array(g));break;case 3:t.gl.uniform3iv(f,new Int32Array(g));break;case 4:t.gl.uniform4iv(f,new Int32Array(g));break;default:break}}if(p&&t.gl.uniform2i(p,c.texData.texShape[0],c.texData.texShape[1]),d!=null){if(c.isUniform){if(D(c.shape)<2)t.gl.uniform1f(d,c.uniformValues[0]);else{let g=c.uniformValues;g instanceof Float32Array||(g=new Float32Array(g)),t.gl.uniform1fv(d,g)}return}c.texData.slice!=null&&h!=null&&t.gl.uniform1i(h,c.texData.slice.flatOffset),t.setInputMatrixTexture(c.texData.texture.texture,d,l)}});const a=e.outShapeLocation;if(a)switch(s.shape.length){case 1:t.gl.uniform1iv(a,new Int32Array(s.shape));break;case 2:t.gl.uniform2iv(a,new Int32Array(s.shape));break;case 3:t.gl.uniform3iv(a,new Int32Array(s.shape));break;case 4:t.gl.uniform4iv(a,new Int32Array(s.shape));break;default:break}if(e.outShapeStridesLocation){const c=ke(s.shape);switch(s.shape.length){case 2:t.gl.uniform1iv(e.outShapeStridesLocation,new Int32Array(c));break;case 3:t.gl.uniform2iv(e.outShapeStridesLocation,new Int32Array(c));break;case 4:t.gl.uniform3iv(e.outShapeStridesLocation,new Int32Array(c));break;default:break}}e.outTexShapeLocation&&t.gl.uniform2i(e.outTexShapeLocation,s.texData.texShape[0],s.texData.texShape[1]),e.program.customUniforms&&r&&e.program.customUniforms.forEach((c,l)=>{const u=e.customUniformLocations[l],d=r[l];if(c.type==="float")t.gl.uniform1fv(u,d);else if(c.type==="vec2")t.gl.uniform2fv(u,d);else if(c.type==="vec3")t.gl.uniform3fv(u,d);else if(c.type==="vec4")t.gl.uniform4fv(u,d);else if(c.type==="int")t.gl.uniform1iv(u,d);else if(c.type==="ivec2")t.gl.uniform2iv(u,d);else if(c.type==="ivec3")t.gl.uniform3iv(u,d);else if(c.type==="ivec4")t.gl.uniform4iv(u,d);else throw Error(`uniform type ${c.type} is not supported yet.`)}),t.executeProgram()}function lb(t,e,n){let s="";e.concat(n).forEach(i=>{const a=i.texData!=null&&i.texData.slice!=null&&i.texData.slice.flatOffset>0;if(t.enableShapeUniforms&&!i.isUniform){const c=i.texData.texShape,{useSqueezeShape:l,uniformShape:u,keptDims:d}=Go(t.packedInputs,i.shape,c);let h="",f="",p="";if(u.length===1&&t.packedInputs){const $=[Math.ceil(c[0]/2),Math.ceil(c[1]/2)];h=`${$[0]>1}_${$[1]>1}`}else if(u.length===2&&!t.packedInputs)f=`${u[0]>1}_${u[1]>1}`;else if(u.length>2&&!t.packedInputs){const $=ke(u);p=`${$[0]===c[1]}_${$[$.length-1]===c[1]}`}const g=i.shape.length,m=u.length===2&&T(i.shape,c),x=D(i.shape)===1,b=hn(i.shape,n.shape),w=!t.packedInputs&&g===n.shape.length&&T(c,n.texData.texShape),y=t.packedInputs||u.length>2?"":`${c[0]>1}_${c[1]>1}`;s+=`${g}_${w}_${l?d:""}_${u.length}_${x}_${b}_${m}_${h}_${f}_${p}_${y}_${a}`}else{const c=i.isUniform?"uniform":i.texData.texShape;s+=`${i.shape}_${c}_${a}`}});const r=t.userCode;let o=t.constructor.name;return o+="_"+s+"_"+r+`${S().getNumber("WEBGL_VERSION")}`,o}function Ue(t){return S().getBool("WEBGL_USE_SHAPES_UNIFORMS")&&t<=4}/**
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
 */class ub{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=Qn.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const n=Ve();this.outputShape=e,this.enableShapeUniforms=Ue(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?ar(["r","c","d"],e):Zt(["r","c","d"],e)}
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
 */class db{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=Qn.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const n=Ve();this.outputShape=e,this.enableShapeUniforms=Ue(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?ar(["r","c","d"],e):Zt(["r","c","d"],e)}
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
 */class hb{constructor(e){this.variableNames=["A"],this.outTexUsage=nt.DOWNLOAD;const n=Ve();this.outputShape=e,this.userCode=`
      ${Cl}

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
 */class fb{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=nt.DOWNLOAD;const n=Ve();this.outputShape=e,this.userCode=`
      ${Cl}

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
 */class pb{constructor(e,n=!1){this.variableNames=["A"],this.customUniforms=[{name:"texShape",type:"ivec2"}];const s=Ve();this.outputShape=e,this.enableShapeUniforms=Ue(this.outputShape.length);let r="result";n&&(r="floor(result * 255. + 0.5)"),this.userCode=`
      ${this.enableShapeUniforms?Wo():Uo(e)}

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
 */class gb{constructor(e,n=!1){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:"texShape",type:"ivec2"}];const s=Ve();this.outputShape=e,this.enableShapeUniforms=Ue(this.outputShape.length);let r="",o="result";n&&(o="floor(result * 255. + 0.5)");for(let i=0;i<=1;i++)for(let a=0;a<=1;a++){const c=i*2+a;r+=`
          localCoords = coords;
          if(localCoords[2] + ${a} < ${this.enableShapeUniforms?"outShape[2]":`${e[2]}`}) {
          localCoords[2] += ${a};
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
              result[${c}] = values[0];
            } else if (offset == 1) {
              result[${c}] = values[1];
            } else if (offset == 2) {
              result[${c}] = values[2];
            } else {
              result[${c}] = values[3];
            }
          }
        }
        `}this.userCode=`
        ${this.enableShapeUniforms?Wo():Uo(e)}

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
 */function mb(t){const e=Ve(),n=`${e.version}
    precision highp float;
    ${e.attribute} vec3 clipSpacePos;
    ${e.attribute} vec2 uv;
    ${e.varyingVs} vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`;return e0(t,n)}function xb(t){const e=new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]);return o0(t,e)}function bb(t){const e=new Uint16Array([0,1,2,2,1,3]);return i0(t,e)}function es(t,e,n,s,r,o){c0(e,n);const i=a0(t),a=t.TEXTURE_2D;return L(t,()=>t.bindTexture(a,i)),L(t,()=>t.texParameteri(a,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE)),L(t,()=>t.texParameteri(a,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)),L(t,()=>t.texParameteri(a,t.TEXTURE_MIN_FILTER,t.NEAREST)),L(t,()=>t.texParameteri(a,t.TEXTURE_MAG_FILTER,t.NEAREST)),S().getNumber("WEBGL_VERSION")===1?L(t,()=>t.texImage2D(a,0,s,e,n,0,r,o,null)):L(t,()=>t.texStorage2D(a,1,s,e,n)),L(t,()=>t.bindTexture(t.TEXTURE_2D,null)),{texture:i,texShape:[n,e]}}function Sl(t){return t.internalFormatFloat}function Cb(t,e,n,s){const[r,o]=Zn(e,n);return es(t,r,o,Sl(s),s.textureFormatFloat,t.FLOAT)}function El(t){return t.internalFormatHalfFloat}function wb(t,e,n,s){const[r,o]=Zn(e,n);return es(t,r,o,El(s),s.textureFormatFloat,s.textureTypeHalfFloat)}function Tl(t){return t.downloadTextureFormat}function yb(t,e,n,s){const[r,o]=Zn(e,n);return es(t,r,o,Tl(s),t.RGBA,t.UNSIGNED_BYTE)}function Rl(t){return t.internalFormatPackedFloat}function vb(t,e,n,s){const[r,o]=vn(e,n);return es(t,r,o,Rl(s),t.RGBA,t.FLOAT)}function kl(t){return t.internalFormatPackedHalfFloat}function $b(t,e,n,s){const[r,o]=vn(e,n);return es(t,r,o,kl(s),t.RGBA,s.textureTypeHalfFloat)}function Ib(t,e,n){return L(t,()=>t.bindBuffer(t.ARRAY_BUFFER,n)),gl(t,e,"clipSpacePos",n,3,20,0)&&gl(t,e,"uv",n,2,20,12)}function Sb(t,e,n,s,r,o){L(t,()=>t.bindTexture(t.TEXTURE_2D,e));let i,a,c;r instanceof Uint8Array?(i=new Uint8Array(n*s*4),a=t.UNSIGNED_BYTE,c=t.RGBA):(i=new Float32Array(n*s*4),a=t.FLOAT,c=o.internalFormatPackedFloat),i.set(r),S().getNumber("WEBGL_VERSION")===2?L(t,()=>t.texSubImage2D(t.TEXTURE_2D,0,0,0,n,s,t.RGBA,a,i)):L(t,()=>t.texImage2D(t.TEXTURE_2D,0,c,n,s,0,t.RGBA,a,i)),L(t,()=>t.bindTexture(t.TEXTURE_2D,null))}function Eb(t,e,n){L(t,()=>t.bindTexture(t.TEXTURE_2D,e)),n.data instanceof Uint8Array?S().getNumber("WEBGL_VERSION")===2?L(t,()=>t.texSubImage2D(t.TEXTURE_2D,0,0,0,n.width,n.height,t.RGBA,t.UNSIGNED_BYTE,n.data)):L(t,()=>t.texImage2D(t.TEXTURE_2D,0,t.RGBA,n.width,n.height,0,t.RGBA,t.UNSIGNED_BYTE,n.data)):S().getNumber("WEBGL_VERSION")===2?L(t,()=>t.texSubImage2D(t.TEXTURE_2D,0,0,0,t.RGBA,t.UNSIGNED_BYTE,n)):L(t,()=>t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,n)),L(t,()=>t.bindTexture(t.TEXTURE_2D,null))}function Tb(t,e,n,s){const r=t.createBuffer();L(t,()=>t.bindBuffer(t.PIXEL_PACK_BUFFER,r));const a=4*4*e*n;return L(t,()=>t.bufferData(t.PIXEL_PACK_BUFFER,a,t.STREAM_READ)),L(t,()=>t.readPixels(0,0,n,e,t.RGBA,t.FLOAT,0)),L(t,()=>t.bindBuffer(t.PIXEL_PACK_BUFFER,null)),r}function Rb(t,e,n){const s=t,r=new Float32Array(n);return s.bindBuffer(s.PIXEL_PACK_BUFFER,e),s.getBufferSubData(s.PIXEL_PACK_BUFFER,0,r),s.bindBuffer(s.PIXEL_PACK_BUFFER,null),r}function kb(t,e,n,s){const[r,o]=Zn(e,n),i=4,a=new Uint8Array(qx(e*n,i));return L(t,()=>t.readPixels(0,0,r,o,s.downloadTextureFormat,t.UNSIGNED_BYTE,a)),new Float32Array(a.buffer)}function Nb(t,e,n,s,r,o,i,a){const c=t,l=new Float32Array(Kx(o,i));return c.bindBuffer(c.PIXEL_PACK_BUFFER,e),c.getBufferSubData(c.PIXEL_PACK_BUFFER,0,l),c.bindBuffer(c.PIXEL_PACK_BUFFER,null),l}function _b(t,e,n){const s=new Float32Array(e*n*4);return L(t,()=>t.readPixels(0,0,n,e,t.RGBA,t.FLOAT,s)),s}var Ab=(t,e,n)=>new Promise((s,r)=>{var o=c=>{try{a(n.next(c))}catch(l){r(l)}},i=c=>{try{a(n.throw(c))}catch(l){r(l)}},a=c=>c.done?s(c.value):Promise.resolve(c.value).then(o,i);a((n=n.apply(t,e)).next())});/**
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
 */class zo{constructor(e){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];const n=S().getNumber("WEBGL_VERSION");e!=null?(this.gl=e,zx(n,e)):this.gl=bt(n);let s="WEBGL_color_buffer_float";const r="EXT_color_buffer_half_float";if(this.parallelCompilationExtension=this.gl.getExtension("KHR_parallel_shader_compile"),S().getNumber("WEBGL_VERSION")===1){const o="OES_texture_float",i="OES_texture_half_float";if(this.textureFloatExtension=tr(this.gl,o),at(this.gl,i))this.textureHalfFloatExtension=tr(this.gl,i);else if(S().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(s),at(this.gl,r))this.colorBufferHalfFloatExtension=tr(this.gl,r);else if(S().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(s="EXT_color_buffer_float",at(this.gl,s))this.colorBufferFloatExtension=this.gl.getExtension(s);else if(at(this.gl,r))this.colorBufferHalfFloatExtension=this.gl.getExtension(r);else throw new Error("GL context does not support color renderable floats");this.vertexBuffer=xb(this.gl),this.indexBuffer=bb(this.gl),this.framebuffer=l0(this.gl),this.textureConfig=Po(this.gl,this.textureHalfFloatExtension)}get debug(){return S().getBool("DEBUG")}dispose(){if(this.disposed)return;this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");const e=this.gl;L(e,()=>e.finish()),L(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,null)),L(e,()=>e.deleteFramebuffer(this.framebuffer)),L(e,()=>e.bindBuffer(e.ARRAY_BUFFER,null)),L(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)),L(e,()=>e.deleteBuffer(this.indexBuffer)),this.disposed=!0}createFloat32MatrixTexture(e,n){return this.throwIfDisposed(),Cb(this.gl,e,n,this.textureConfig)}createFloat16MatrixTexture(e,n){return this.throwIfDisposed(),wb(this.gl,e,n,this.textureConfig)}createUnsignedBytesMatrixTexture(e,n){return this.throwIfDisposed(),yb(this.gl,e,n,this.textureConfig)}uploadPixelDataToTexture(e,n){this.throwIfDisposed(),Eb(this.gl,e,n)}uploadDenseMatrixToTexture(e,n,s,r){this.throwIfDisposed(),Sb(this.gl,e,n,s,r,this.textureConfig)}createFloat16PackedMatrixTexture(e,n){return this.throwIfDisposed(),$b(this.gl,e,n,this.textureConfig)}createPackedMatrixTexture(e,n){return this.throwIfDisposed(),vb(this.gl,e,n,this.textureConfig)}deleteMatrixTexture(e){this.throwIfDisposed(),this.outputTexture===e&&(ml(this.gl,this.framebuffer),this.outputTexture=null),L(this.gl,()=>this.gl.deleteTexture(e))}downloadByteEncodedFloatMatrixFromOutputTexture(e,n,s){return this.downloadMatrixDriver(e,()=>kb(this.gl,n,s,this.textureConfig))}downloadPackedMatrixFromBuffer(e,n,s,r,o,i){return Nb(this.gl,e,n,s,r,o,i,this.textureConfig)}downloadFloat32MatrixFromBuffer(e,n){return Rb(this.gl,e,n)}createBufferFromTexture(e,n,s){this.bindTextureToFrameBuffer(e);const r=Tb(this.gl,n,s,this.textureConfig);return this.unbindTextureToFrameBuffer(),r}createAndWaitForFence(){const e=this.createFence(this.gl);return this.pollFence(e)}createFence(e){let n,s;if(S().getBool("WEBGL_FENCE_API_ENABLED")){const r=e,o=r.fenceSync(r.SYNC_GPU_COMMANDS_COMPLETE,0);e.flush(),s=()=>{const i=r.clientWaitSync(o,0,0);return i===r.ALREADY_SIGNALED||i===r.CONDITION_SATISFIED},n=o}else S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(n=this.beginQuery(),this.endQuery(),s=()=>this.isQueryAvailable(n,S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))):s=()=>!0;return{query:n,isFencePassed:s}}downloadMatrixFromPackedTexture(e,n,s){return this.downloadMatrixDriver(e,()=>_b(this.gl,n,s))}createProgram(e){this.throwIfDisposed();const n=this.gl;this.vertexShader==null&&(this.vertexShader=mb(n));const s=s0(n);return L(n,()=>n.attachShader(s,this.vertexShader)),L(n,()=>n.attachShader(s,e)),r0(n,s),this.debug&&Lo(n,s),this.vertexAttrsAreBound||(this.setProgram(s),this.vertexAttrsAreBound=Ib(n,this.program,this.vertexBuffer)),s}deleteProgram(e){this.throwIfDisposed(),e===this.program&&(this.program=null),e!=null&&L(this.gl,()=>this.gl.deleteProgram(e))}setProgram(e){this.throwIfDisposed(),this.program=e,this.program!=null&&this.debug&&Lo(this.gl,this.program),L(this.gl,()=>this.gl.useProgram(e))}getUniformLocation(e,n,s=!0){return this.throwIfDisposed(),s?d0(this.gl,e,n):h0(this.gl,e,n)}getAttributeLocation(e,n){return this.throwIfDisposed(),L(this.gl,()=>this.gl.getAttribLocation(e,n))}getUniformLocationNoThrow(e,n){return this.throwIfDisposed(),this.gl.getUniformLocation(e,n)}setInputMatrixTexture(e,n,s){this.throwIfDisposed(),this.throwIfNoProgram(),f0(this.gl,e,n,s)}setOutputMatrixTexture(e,n,s){this.setOutputMatrixTextureDriver(e,s,n)}setOutputPackedMatrixTexture(e,n,s){this.throwIfDisposed();const[r,o]=vn(n,s);this.setOutputMatrixTextureDriver(e,r,o)}setOutputMatrixWriteRegion(e,n,s,r){this.setOutputMatrixWriteRegionDriver(s,e,r,n)}setOutputPackedMatrixWriteRegion(e,n,s,r){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")}debugValidate(){this.program!=null&&Lo(this.gl,this.program),nr(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();const e=this.gl;this.debug&&this.debugValidate(),L(e,()=>e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),L(this.gl,()=>this.gl.finish())}getQueryTimerExtension(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=tr(this.gl,S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if(S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){const s=this.gl,r=this.getQueryTimerExtensionWebGL2(),o=s.createQuery();return s.beginQuery(r.TIME_ELAPSED_EXT,o),o}const e=this.getQueryTimerExtensionWebGL1(),n=e.createQueryEXT();return e.beginQueryEXT(e.TIME_ELAPSED_EXT,n),n}endQuery(){if(S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){const n=this.gl,s=this.getQueryTimerExtensionWebGL2();n.endQuery(s.TIME_ELAPSED_EXT);return}const e=this.getQueryTimerExtensionWebGL1();e.endQueryEXT(e.TIME_ELAPSED_EXT)}waitForQueryAndGetTime(e){return Ab(this,null,function*(){return yield me(()=>this.disposed||this.isQueryAvailable(e,S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))),this.getQueryTime(e,S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))})}getQueryTime(e,n){if(n===0)return null;if(n===2){const s=this.gl;return s.getQueryParameter(e,s.QUERY_RESULT)/1e6}else{const s=this.getQueryTimerExtensionWebGL1();return s.getQueryObjectEXT(e,s.QUERY_RESULT_EXT)/1e6}}isQueryAvailable(e,n){if(n===0)return!0;if(n===2){const s=this.gl,r=this.getQueryTimerExtensionWebGL2(),o=s.getQueryParameter(e,s.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(r.GPU_DISJOINT_EXT)),o&&!this.disjoint}else{const s=this.getQueryTimerExtensionWebGL1(),r=s.getQueryObjectEXT(e,s.QUERY_RESULT_AVAILABLE_EXT);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(s.GPU_DISJOINT_EXT)),r&&!this.disjoint}}pollFence(e){return new Promise(n=>{this.addItemToPoll(()=>e.isFencePassed(),()=>n())})}pollItems(){const e=Db(this.itemsToPoll.map(n=>n.isDoneFn));for(let n=0;n<=e;++n){const{resolveFn:s}=this.itemsToPoll[n];s()}this.itemsToPoll=this.itemsToPoll.slice(e+1)}addItemToPoll(e,n){this.itemsToPoll.push({isDoneFn:e,resolveFn:n}),!(this.itemsToPoll.length>1)&&me(()=>(this.pollItems(),this.itemsToPoll.length===0))}bindTextureToFrameBuffer(e){this.throwIfDisposed(),Bo(this.gl,e,this.framebuffer),this.debug&&nr(this.gl)}unbindTextureToFrameBuffer(){this.outputTexture!=null?(Bo(this.gl,this.outputTexture,this.framebuffer),this.debug&&nr(this.gl)):ml(this.gl,this.framebuffer)}downloadMatrixDriver(e,n){this.bindTextureToFrameBuffer(e);const s=n();return this.unbindTextureToFrameBuffer(),s}setOutputMatrixTextureDriver(e,n,s){this.throwIfDisposed();const r=this.gl;Bo(r,e,this.framebuffer),this.debug&&nr(r),this.outputTexture=e,L(r,()=>r.viewport(0,0,n,s)),L(r,()=>r.scissor(0,0,n,s))}setOutputMatrixWriteRegionDriver(e,n,s,r){this.throwIfDisposed(),L(this.gl,()=>this.gl.scissor(e,n,s,r))}throwIfDisposed(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")}throwIfNoProgram(){if(this.program==null)throw new Error("No GPU program is currently set.")}}function Db(t){let e=0;for(;e<t.length&&t[e]();++e);return e-1}/**
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
 */function Lt(t,e){Array.isArray(t)||(t=[t]),t.forEach(n=>{n!=null&&v(n.dtype!=="complex64",()=>`${e} does not support complex64 tensors in the CPU backend.`)})}/**
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
 */function Nl(t){const e=new Float32Array(t.length);for(let n=0;n<t.length;++n)e[n]=Math.abs(t[n]);return e}const rR={kernelName:Nr,backendName:"cpu",kernelFunc:t=>{const{x:e}=t.inputs,n=t.backend;Lt(e,"abs");let s=new Float32Array(D(e.shape));const r=n.data.get(e.dataId).values;return s=Nl(r),n.makeOutput(s,e.shape,e.dtype)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function st(t){return(e,n,s,r,o)=>{const i=Ce(e,n),a=i.length,c=ke(i),l=D(i),u=xe(o,l),d=e.length,h=n.length,f=ke(e),p=ke(n),g=hn(e,i),m=hn(n,i);if(g.length+m.length===0)for(let x=0;x<u.length;++x)u[x]=t(s[x%s.length],r[x%r.length]);else for(let x=0;x<u.length;++x){const b=Tr(x,a,c),w=b.slice(-d);g.forEach(R=>w[R]=0);const y=Bn(w,d,f),$=b.slice(-h);m.forEach(R=>$[R]=0);const N=Bn($,h,p);u[x]=t(s[y],r[N])}return[u,i]}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lr(t){const{inputs:e,backend:n}=t,{real:s,imag:r}=e,o=n.data.get(s.dataId).values,i=n.data.get(r.dataId).values,a=n.makeTensorInfo(s.shape,"complex64"),c=n.data.get(a.dataId);return c.complexTensorInfos={real:n.makeTensorInfo(s.shape,"float32",o),imag:n.makeTensorInfo(r.shape,"float32",i)},a}const oR={kernelName:Ar,backendName:"cpu",kernelFunc:lr};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ho(t,e,n="float32"){if(n==="complex64"){const r=Ho(t,e,"float32"),o=Ho(t,e,"float32");return lr({inputs:{real:r,imag:o},backend:t})}const s=Et(D(e),n);return t.makeTensorInfo(e,n,s)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xo(t){const{inputs:e,backend:n}=t,{x:s}=e;return n.incRef(s.dataId),{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}const iR={kernelName:xs,backendName:"cpu",kernelFunc:Xo};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _l(t){const{inputs:e,backend:n}=t,{input:s}=e,r=n.data.get(s.dataId).complexTensorInfos.real,o=n.data.get(r.dataId).values;return n.makeTensorInfo(r.shape,r.dtype,o)}const aR={kernelName:Mr,backendName:"cpu",kernelFunc:_l};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Al(t,e,n,s){if(s==="int32"){const r=Int32Array.from(t);return[e,"int32",r]}if(s==="bool"){const r=ks([0],n),[o,i]=st((a,c)=>a!==c?1:0)(e,[],t,r,"bool");return[i,"bool",o]}throw new Error(`Error in Cast: failed to cast ${n} to ${s}`)}function ts(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{dtype:o}=s;if(o==="complex64"){if(r.dtype==="complex64")return Xo({inputs:{x:r},backend:n});const u=Ho(n,r.shape,r.dtype),d=ts({inputs:{x:r},backend:n,attrs:{dtype:"float32"}}),h=lr({inputs:{real:d,imag:u},backend:n});return n.disposeIntermediateTensorInfo(u),n.disposeIntermediateTensorInfo(d),h}if(r.dtype==="complex64"){const u=_l({inputs:{input:r},backend:n}),d=ts({inputs:{x:u},backend:n,attrs:{dtype:o}});return n.disposeIntermediateTensorInfo(u),d}if(!Pe(r.dtype,o)){const u=Xo({inputs:{x:r},backend:n});return{dataId:u.dataId,shape:u.shape,dtype:o}}const i=n.data.get(r.dataId).values,[a,c,l]=Al(i,r.shape,r.dtype,o);return n.makeTensorInfo(a,c,l)}const cR={kernelName:fs,backendName:"cpu",kernelFunc:ts};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ct(t,e,n,s){return n==null?({inputs:r,backend:o})=>{const{a:i,b:a}=r,c=o;Lt([i,a],t);const l=c.data.get(i.dataId).values,u=c.data.get(a.dataId).values,d=i.dtype==="string"?Qt(l):l,h=i.dtype==="string"?Qt(u):u,f=s||i.dtype,[p,g]=e(i.shape,a.shape,d,h,f);return c.makeTensorInfo(g,f,p)}:({inputs:r,backend:o})=>{const{a:i,b:a}=r,c=o;if(i.dtype==="complex64"||a.dtype==="complex64"){const l=ts({inputs:{x:i},backend:c,attrs:{dtype:"complex64"}}),u=c.data.get(l.dataId),d=u.complexTensorInfos.real,h=u.complexTensorInfos.imag,f=c.data.get(d.dataId).values,p=c.data.get(h.dataId).values,g=ts({inputs:{x:a},backend:c,attrs:{dtype:"complex64"}}),m=c.data.get(g.dataId),x=m.complexTensorInfos.real,b=m.complexTensorInfos.imag,w=c.data.get(x.dataId).values,y=c.data.get(b.dataId).values,[$,N,R]=n(i.shape,a.shape,f,p,w,y),k=c.makeTensorInfo(R,"float32",$),B=c.makeTensorInfo(R,"float32",N),U=lr({inputs:{real:k,imag:B},backend:c});return c.disposeIntermediateTensorInfo(l),c.disposeIntermediateTensorInfo(g),c.disposeIntermediateTensorInfo(k),c.disposeIntermediateTensorInfo(B),U}else{const l=c.data.get(i.dataId).values,u=c.data.get(a.dataId).values,d=s||i.dtype,[h,f]=e(i.shape,a.shape,l,u,d);return c.makeTensorInfo(f,d,h)}}}function qo(t){return(e,n,s,r,o,i)=>{const a=Ce(e,n),c=D(a),l=a.length,u=ke(a),d=xe("float32",c),h=xe("float32",c),f=hn(e,a),p=hn(n,a),g=Yn(s,r),m=Yn(o,i),x=e.length,b=ke(e),w=n.length,y=ke(n);if(f.length+p.length===0)for(let $=0;$<d.length;$++){const N=$%g.length,R=$%m.length,k=t(g[N*2],g[N*2+1],m[R*2],m[R*2+1]);d[$]=k.real,h[$]=k.imag}else for(let $=0;$<d.length;$++){const N=Tr($,l,u),R=N.slice(-x);f.forEach(ie=>R[ie]=0);const k=Bn(R,x,b),B=N.slice(-w);p.forEach(ie=>B[ie]=0);const U=Bn(B,w,y),Q=t(g[k*2],g[k*2+1],m[U*2],m[U*2+1]);d[$]=Q.real,h[$]=Q.imag}return[d,h,a]}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Dl=st((t,e)=>t+e),Fb=qo((t,e,n,s)=>({real:t+n,imag:e+s})),Ob=ct(Mn,Dl,Fb),lR={kernelName:Mn,backendName:"cpu",kernelFunc:Ob};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pb(t,e,n,s,r){const o=D(s),i=Et(r,n);for(let a=0;a<t.length;a++){const c=t[a];if(c<0)throw new Error("Input x must be non-negative!");c>=r||(o>0?i[c]+=e[a]:i[c]+=1)}return i}function Lb(t,e,n,s=!1){const r=t.shape[0],o=t.shape[1],i=_e([r,n],e.dtype);for(let a=0;a<r;a++)for(let c=0;c<o;c++){const l=t.get(a,c);if(l<0)throw new Error("Input x must be non-negative!");l>=n||(s?i.set(1,a,l):e.size>0?i.set(i.get(a,l)+e.get(a,c),a,l):i.set(i.get(a,l)+1,a,l))}return i}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bt(t){return(e,n,s)=>{const r=xe(n,e.length);for(let o=0;o<e.length;++o)r[o]=t(e[o],s);return r}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fl(t,e,n){return({inputs:s,attrs:r,backend:o})=>{const{x:i}=s;if(Lt(i,t),i.dtype==="string"||n==="string")throw new Error("unaryKernelFunc does not support string input/output");const a=o,c=a.data.get(i.dataId).values,l=D(i.shape),u=n||i.dtype,d=se(u,l);for(let h=0;h<l;++h)d[h]=e(c[h],r);return a.makeTensorInfo(i.shape,u,d)}}function kn(t,e,n){return({inputs:s,attrs:r,backend:o})=>{const{x:i}=s;if(Lt(i,t),i.dtype==="string"||n==="string")throw new Error("unaryKernelFunc does not support string input/output");const a=o,c=a.data.get(i.dataId).values,l=n||i.dtype,u=e(c,l,r);return a.makeTensorInfo(i.shape,l,u)}}/**
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
 */const Ol=Bt(t=>Math.ceil(t)),Bb=kn(_r,Ol),uR={kernelName:_r,backendName:"cpu",kernelFunc:Bb};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mb(t,e,n,s){const r=se(n,D(e));if(s&&n!=="string"){let o=0;t.forEach(i=>{const a=D(i.shape);r.set(i.vals,o),o+=a})}else{let o=0;t.forEach(i=>{const a=n==="string"?Qt(i.vals):i.vals;let c=0;for(let l=0;l<i.shape[0];++l){const u=l*e[1]+o;for(let d=0;d<i.shape[1];++d)r[u+d]=a[c++]}o+=i.shape[1]})}return r}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pl=st((t,e)=>t===e?1:0),Vb=ct(Dr,Pl,null,"bool"),dR={kernelName:Dr,backendName:"cpu",kernelFunc:Vb};/**
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
 */const Ll=Bt(t=>Math.exp(t)),Ub=kn(ps,Ll,"float32"),hR={kernelName:ps,backendName:"cpu",kernelFunc:Ub};/**
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
 */const Bl=Bt(t=>Math.expm1(t)),Wb=kn(Fr,Bl),fR={kernelName:Fr,backendName:"cpu",kernelFunc:Wb};/**
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
 */const Ml=Bt(t=>Math.floor(t)),Gb=kn(Or,Ml),pR={kernelName:Or,backendName:"cpu",kernelFunc:Gb};/**
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
 */function zb(t,e,n,s,r,o,i,a,c){const l=_e([s,o],n);for(let u=0;u<s;u++){const d=[];let h=0;for(let f=0;f<r;f++){const p=t[u*r+f];h+=p*i[f],d.push(p)}if(h<0||h>=c/o)throw new Error(`Invalid indices: ${d} does not index into ${a}`);for(let f=0;f<o;f++)l.values[u*o+f]=e.get(...e.indexToLoc(h*o+f))}return l}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hb(t,e,n){const s=_e(n,t.dtype);for(let r=0;r<s.size;++r){const i=s.indexToLoc(r).slice(),a=i[0],c=i[2],l=e.locToIndex([a,c]);i[2]=e.values[l];const u=t.locToIndex(i);0<=u&&u<t.values.length&&(s.values[r]=t.values[u])}return s}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vl=st((t,e)=>t>e?1:0),Xb=ct(gs,Vl,null,"bool"),gR={kernelName:gs,backendName:"cpu",kernelFunc:Xb};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ul=st((t,e)=>t>=e?1:0),qb=ct(ms,Ul,null,"bool"),mR={kernelName:ms,backendName:"cpu",kernelFunc:qb};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Wl=st((t,e)=>t<e?1:0),Kb=ct(Pr,Wl,null,"bool"),xR={kernelName:Pr,backendName:"cpu",kernelFunc:Kb};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gl=st((t,e)=>t<=e?1:0),jb=ct(bs,Gl,null,"bool"),bR={kernelName:bs,backendName:"cpu",kernelFunc:jb};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yb(t,e,n){const s=(e-t)/(n-1),r=Et(n,"float32");r[0]=t;for(let o=1;o<r.length;o++)r[o]=r[o-1]+s;return r}/**
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
 */const zl=Bt(t=>Math.log(t)),Qb=kn(Cs,zl),CR={kernelName:Cs,backendName:"cpu",kernelFunc:Qb};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zb(t,e,n,s){const r=xe(s,D(n));for(let o=0;o<r.length;++o){const i=o*e;let a=t[i];for(let c=0;c<e;++c){const l=t[i+c];(Number.isNaN(l)||l>a)&&(a=l)}r[o]=a}return r}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hl=st((t,e)=>Math.max(t,e)),Jb=ct(Lr,Hl),wR={kernelName:Lr,backendName:"cpu",kernelFunc:Jb};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xl=st((t,e)=>Math.min(t,e)),eC=ct(ws,Xl),yR={kernelName:ws,backendName:"cpu",kernelFunc:eC};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ko=st((t,e)=>t*e),tC=qo((t,e,n,s)=>({real:t*n-e*s,imag:t*s+e*n})),nC=ct(ys,Ko,tC),vR={kernelName:ys,backendName:"cpu",kernelFunc:nC};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ql(t,e,n){const s=rn(-1,n);return Ko([],e,s,t,n)}function sC(t){const{inputs:e,backend:n}=t,{x:s}=e;Lt(s,"neg");const r=n.data.get(s.dataId).values,[o,i]=ql(r,s.shape,s.dtype);return n.makeTensorInfo(i,s.dtype,o)}const $R={kernelName:Br,backendName:"cpu",kernelFunc:sC};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Kl=st((t,e)=>t!==e?1:0),rC=ct(vs,Kl,null,"bool"),IR={kernelName:vs,backendName:"cpu",kernelFunc:rC};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jl(t,e,n,s,r){const o=e.length,i=D(e),a=ke(e),c=ke(r),l=xe(n,D(r));for(let u=0;u<i;++u){const d=Tr(u,o,a),h=new Array(d.length);for(let p=0;p<h.length;p++)h[p]=d[s[p]];const f=Bn(h,o,c);l[f]=t[u]}return l}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yl(t){const{inputs:e,attrs:n,backend:s}=t,{x:r}=e,{perm:o}=n;Lt(r,"transpose");const i=r.shape.length,a=new Array(i);for(let d=0;d<a.length;d++)a[d]=r.shape[o[d]];const c=s.data.get(r.dataId).values,l=jl(c,r.shape,r.dtype,o,a);return{dataId:s.write(l,a,r.dtype),shape:a,dtype:r.dtype}}const SR={kernelName:Vn,backendName:"cpu",kernelFunc:Yl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ql(t,e,n,s){const[r,o]=St(t,s),i=wt(e,"int32"),a=Et(D(r),i),c=D(o);for(let l=0;l<a.length;++l){const u=l*c;let d=1;for(let h=0;h<c;++h)d*=n[u+h];a[l]=d}return{outVals:a,outShape:r,outDtype:i}}function oC(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{axis:o,keepDims:i}=s;Lt(r,"prod");const a=r.shape.length,c=oe(o,r.shape),l=et(c,a);let u=c,d=r;const h=[];l!=null&&(d=Yl({inputs:{x:r},backend:n,attrs:{perm:l}}),h.push(d),u=tt(u.length,a));const f=n.data.get(d.dataId).values,{outVals:p,outShape:g,outDtype:m}=Ql(d.shape,d.dtype,f,u);let x=g;return i&&(x=Je(g,c)),h.forEach(b=>n.disposeIntermediateTensorInfo(b)),n.makeTensorInfo(x,m,p)}const ER={kernelName:Mi,backendName:"cpu",kernelFunc:oC};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var lt=xt;class ur{constructor(e,n,s,r,o,i,a,c,l,u){this.shape=e,this.shapeShape=n,this.values=s,this.valuesShape=r,this.valuesDType=o,this.defaultValue=i,this.defaultValueShape=a,this.rowPartitionValues=c,this.rowPartitionValuesShapes=l,this.rowPartitionTypes=kc(u),this.raggedRank=Nc(this.rowPartitionTypes)}getRowPartitionTypeByDimension(e){return this.rowPartitionTypes[0]===lt.FIRST_DIM_SIZE?this.rowPartitionTypes[e+1]:this.rowPartitionTypes[e]}getRowPartitionTensor(e){return this.rowPartitionTypes[0]===lt.FIRST_DIM_SIZE?this.rowPartitionValues[e+1]:this.rowPartitionValues[e]}getMaxWidth(e){const n=this.getRowPartitionTensor(e-1);switch(this.getRowPartitionTypeByDimension(e-1)){case lt.VALUE_ROWIDS:return ur.getMaxWidthValueRowID(n);case lt.ROW_SPLITS:return ur.getMaxWidthRowSplit(n);default:throw new Error(`Cannot handle partition type ${lt[this.getRowPartitionTypeByDimension(e-1)]}`)}}static getMaxWidthRowSplit(e){const n=e.length;if(n===0||n===1)return 0;let s=0;for(let r=0;r<n-1;++r){const o=e[r+1]-e[r];o>s&&(s=o)}return s}static getMaxWidthValueRowID(e){const n=e.length;if(n===0)return 0;let s=0,r=e[0],o=0;for(let i=1;i<n;++i){const a=e[i];a!==r&&(r=a,o=Math.max(i-s,o),s=i)}return Math.max(n-s,o)}tensorShapeFromTensor(e,n,s=!0){if(n.length===0){if(e[0]===-1)return[];throw new Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.")}return Jl(e,s)}calculateOutputSize(e){const n=this.valuesShape,s=this.defaultValueShape;_c(s,n);const r=this.tensorShapeFromTensor(this.shape,this.shapeShape),i=Rc(this.raggedRank,r,n);i[0]<0&&(i[0]=e);for(let a=1;a<=this.raggedRank;++a)i[a]<0&&(i[a]=this.getMaxWidth(a));return i}calculateFirstParentOutputIndex(e,n,s){const r=Math.min(e,s),o=[];let i=0;for(let a=0;a<r;++a,i+=n)o.push(i);for(let a=r;a<e;++a)o.push(-1);return v(o.length===e,()=>"Final length of result must be equal to firstDimension."),o}calculateOutputIndexRowSplit(e,n,s,r){const o=e.length,i=[];for(let a=0;a<o-1;++a){const c=e[a+1]-e[a];let l=Math.min(r,c),u=n[a];u===-1&&(l=0);for(let d=0;d<l;++d)i.push(u),u+=s;for(let d=0;d<c-l;++d)i.push(-1)}if(o>0&&i.length!==e[o-1])throw new Error("Invalid row split size.");return i}calculateOutputIndexValueRowID(e,n,s,r){const o=e.length,i=[];if(o===0)return[];let a=0,c=e[0];if(c>=n.length)throw new Error(`Got currentValueRowId=${c}, which is not less than ${n.length}`);let l=n[c];i.push(l);for(let u=1;u<o;++u){const d=e[u];if(d===c)l>=0&&(++a,a<r?l+=s:l=-1);else{if(a=0,c=d,d>=n.length)throw new Error(`Got nextValueRowId=${d} which is not less than ${n.length}`);l=n[d]}i.push(l)}if(i.length!==e.length)throw new Error("Invalid row ids.");return i}calculateOutputIndex(e,n,s,r){const o=this.getRowPartitionTensor(e),i=this.getRowPartitionTypeByDimension(e);switch(i){case lt.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(o,n,s,r);case lt.ROW_SPLITS:if(o.length-1>n.length)throw new Error(`Row partition size is greater than output size: ${o.length-1} > ${n.length}`);return this.calculateOutputIndexRowSplit(o,n,s,r);default:throw new Error(`Unsupported partition type: ${lt[i]}`)}}getFirstDimensionSize(){const e=this.rowPartitionValues[0];if(this.rowPartitionTypes.length===0)throw new Error("No row_partition_types given.");const n=this.rowPartitionTypes[0];switch(n){case lt.FIRST_DIM_SIZE:return e[0];case lt.VALUE_ROWIDS:throw new Error("Cannot handle VALUE_ROWIDS in first dimension.");case lt.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw new Error(`Cannot handle type ${lt[n]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw new Error("Invalid first partition input. Tensor requires at least one element.");const n=this.getFirstDimensionSize(),s=this.calculateOutputSize(n),r=new Array(this.raggedRank+1);r[r.length-1]=1;for(let c=r.length-2;c>=0;--c)r[c]=r[c+1]*s[c+1];const o=Jl(s,!1),i=se(this.valuesDType,D(o));if(r[0]*s[0]>0){let c=this.calculateFirstParentOutputIndex(n,r[0],s[0]);for(let l=1;l<=this.raggedRank;++l)c=this.calculateOutputIndex(l-1,c,r[l],s[l]);this.setOutput(this.raggedRank,c,i,o)}return[o,i]}setOutput(e,n,s,r){if(s.length===0)return;const o=this.values,i=s;let a=r.slice();a=a.slice(e+1);const c=D(a),l=n.length;let u=this.defaultValue;if(u.length!==c&&u.length!==1){const p=this.defaultValueShape;$o(()=>{const g=pe(u,p);u=Ms(g,a).dataSync()})}let d=0,h=0,f=0;for(let p=0;p<=l;++p){let g=p<l?n[p]:-1;if(g===f){++f;continue}if(h<f){const m=o.subarray(d*c),x=i.subarray(h*c),b=(f-h)*c;Zl(x,m,b)}if(p>=l){const m=s.length;g=Math.floor(m/c)}if(g>f)if(this.defaultValue.length===1)i.subarray(f*c,g*c).fill(this.defaultValue[0]),f=g;else for(;g>f;){const m=i.slice(f*c);Zl(m,u,c),++f}g<0?(d=p+1,h=f):(d=p,h=f,f=h+1)}}}function Zl(t,e,n){for(let s=0;s<n;s++)t[s]=e[s]}function Jl(t,e){const n=[];for(let s of t){if(s<0){if(!e)throw new Error(`Dimension ${s} must be >= 0`);if(s<-1)throw new Error(`Dimension ${s} must be >= -1`);s=-1}n.push(s)}return n}function iC(t,e,n,s,r,o,i,a,c,l){return new ur(t,e,n,s,r,o,i,a,c,l).compute()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function aC(t,e,n,s){const r=t===e,o=t<e&&n<0,i=e<t&&n>1;if(r||o||i)return Et(0,s);const a=Math.abs(Math.ceil((e-t)/n)),c=Et(a,s);e<t&&n===1&&(n=-1),c[0]=t;for(let l=1;l<c.length;l++)c[l]=c[l-1]+n;return c}/**
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
 */const eu=Bt(t=>1/Math.sqrt(t)),cC=kn(Vr,eu),TR={kernelName:Vr,backendName:"cpu",kernelFunc:cC};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lC(t,e,n,s,r,o,i,a,c,l){const u=[s/r,r],d=t.values,h=e.values;if(s===0)return _e(n,e.dtype);const f=_e(u,e.dtype);typeof c=="string"||typeof c=="number"?f.values.fill(c):typeof c=="boolean"&&f.values.fill(+c);for(let p=0;p<o;p++){const g=[];let m=0;for(let x=0;x<i;x++){const b=d[p*i+x];g.push(b),m+=b*a[x]}if(m<0||m>=s/r)throw new Error(`Invalid indices: ${g} does not index into ${n}`);for(let x=0;x<r;x++)l?f.values[m*r+x]+=h[p*r+x]:f.values[m*r+x]=e.rank===0?h[0]:h[p*r+x]}return f}/**
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
 */const uC=Bt(t=>1/(1+Math.exp(-t))),dC=Fl($s,t=>1/(1+Math.exp(-t))),RR={kernelName:$s,backendName:"cpu",kernelFunc:dC};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tu(t,e,n,s,r){const o=po(s,e,n),i=D(n),a=ke(s);if(o){const d=go(e,a);return r==="string"?t.slice(d,d+i):t.subarray(d,d+i)}const c=r==="string"?Qt(t):t,l=_e(s,r,c),u=_e(n,r);for(let d=0;d<u.size;++d){const h=u.indexToLoc(d),f=h.map((p,g)=>p+e[g]);u.set(l.get(...f),...h)}return r==="string"?fl(u.values):u.values}function hC(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{begin:o,size:i}=s;Lt(r,"slice");const[a,c]=mo(r,o,i);fo(r,a,c);const l=n.data.get(r.dataId).values,u=tu(l,a,c,r.shape,r.dtype);return n.makeTensorInfo(c,r.dtype,u)}const kR={kernelName:Ur,backendName:"cpu",kernelFunc:hC};/**
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
 */function fC(t,e,n,s,r,o,i){const a=e[0],c=o[0],l=new Array(c),u=new Array(a),d=e[1];if(c===0){if(a!==0)throw new Error(Jc(a));const m=se(n,0),x=se(r,0);return[m,[0,d],x,l,u]}let h=!0,f=0;const p=new Array(c).fill(0);for(let m=0;m<a;++m){const x=t[m*d];if(x<0)throw new Error(el(m,x));if(x>=c)throw new Error(tl(m,x,c));++p[x],h=h&&x>=f,f=x}let g=!0;for(let m=0;m<c;++m){const x=p[m]===0;l[m]=x,g=g&&!x,p[m]=Math.max(p[m],1),m>0&&(p[m]+=p[m-1])}if(g&&h){const m=t,x=s;for(let b=0;b<a;++b)u[b]=b;return[m,[a,d],x,l,u]}else{const m=p[c-1],x=se(n,m*d),b=se(r,m),w=new Array(c).fill(0);for(let y=0;y<a;++y){const $=t[y*d],N=w[$],R=($===0?0:p[$-1])+N;w[$]++;for(let k=0;k<d;++k)x[R*d+k]=t[y*d+k];b[R]=s[y],u[y]=R}for(let y=0;y<c;++y)if(w[y]===0){const N=y===0?0:p[y-1];x[N*d+0]=y;for(let R=1;R<d;++R)x[N*d+R]=0;b[N]=i}return[x,[m,d],b,l,u]}}/**
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
 */function pC(t,e,n,s,r){const o=D(s),i=e[0],a=r.length,c=[];let l=1,u=-1;for(let m=0;m<a;++m){const x=r[m];if(x===-1){if(u!==-1)throw new Error(nl(u,m));u=m,c.push(1)}else{if(x<0)throw new Error(sl(m,x));l*=x,c.push(x)}}if(u!==-1){if(l<=0)throw new Error(rl());const m=Math.trunc(o/l);if(l*m!==o)throw new Error(ol(s,c));c[u]=m}if(D(c)!==o)throw new Error(il(s,c));const h=s.length,f=[];if(h>0){f[h-1]=1;for(let m=h-2;m>=0;--m)f[m]=f[m+1]*s[m+1]}const p=[];if(a>0){p[a-1]=1;for(let m=a-2;m>=0;--m)p[m]=p[m+1]*c[m+1]}const g=se(n,i*a);for(let m=0;m<i;++m){let x=0;for(let b=0;b<h;++b)x+=t[m*h+b]*f[b];for(let b=0;b<a;++b)g[m*a+b]=Math.trunc(x/p[b]),x%=p[b]}return[g,[i,a],c]}/**
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
 */function gC(t,e,n,s,r,o=!1,i=0){const a=s.length,c=[e[0],t.length/e[0]],l=c[1],d=a>0?r[a-1]+1:0;if(d<0)throw new Error(Oo());const h=e.slice();h[0]=d;const f=h.reduce((w,y)=>w*y,1),p=se(n,f);if(a===0)return d>0&&p.fill(i),[p,h];if(d<=0)throw new Error(Oo());let g=0,m=1,x=0,b=r[g];for(;;){let w=0;if(m<a){if(w=r[m],b===w){++m;continue}if(b>=w)throw new Error(al())}if(b<0||b>=d)throw new Error(cl(b,d));b>x&&p.fill(i,x*l,b*l);for(let y=g;y<m;++y){const $=s[y];if($<0||$>=c[0])throw new Error(ll(y,s[y],c[0]));for(let N=0;N<l;N++)p[b*l+N]+=t[$*l+N]}if(o)for(let y=0;y<l;y++)p[b*l+y]/=m-g;if(g=m,++m,x=b+1,b=w,m>a)break}return x<d&&p.fill(i,x*l,d*l),[p,h]}/**
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
 */const mC=Bt(t=>Math.sqrt(t)),xC=Fl(Is,t=>Math.sqrt(t)),NR={kernelName:Is,backendName:"cpu",kernelFunc:xC};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const nu=st((t,e)=>{const n=t-e;return n*n}),bC=ct(Ss,nu),_R={kernelName:Ss,backendName:"cpu",kernelFunc:bC};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function CC(t,e,n,s){const r=_e(t,e.dtype);for(let o=0;o<r.size;o++){const i=r.indexToLoc(o),a=new Array(i.length);for(let c=0;c<a.length;c++)a[c]=i[c]*n[c]+s[c];r.set(e.get(...a),...i)}return r}/**
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
 */class wC{constructor(e,n,s,r,o,i){this.separator=Gt(e),this.nGramWidths=n,this.leftPad=Gt(s),this.rightPad=Gt(r),this.padWidth=o,this.preserveShort=i}getPadWidth(e){return Math.min(this.padWidth<0?e-1:this.padWidth,e-1)}getNumNGrams(e,n){const s=this.getPadWidth(n);return Math.max(0,e+2*s-n+1)}createNGrams(e,n,s,r,o,i){for(let a=0;a<o;++a){const c=this.getPadWidth(i),l=Math.max(0,c-a),u=Math.max(0,c-(o-(a+1))),d=i-(l+u),h=n+(l>0?0:a-c);let f=0;f+=l*this.leftPad.length;for(let b=0;b<d;++b)f+=e[h+b].length;f+=u*this.rightPad.length,f+=(l+u+d-1)*this.separator.length,s[r+a]=new Uint8Array(f);const g=s[r+a];let m=0;const x=b=>b.forEach(w=>g[m++]=w);for(let b=0;b<l;++b)x(this.leftPad),x(this.separator);for(let b=0;b<d-1;++b)x(e[h+b]),x(this.separator);if(d>0){x(e[h+d-1]);for(let b=0;b<u;++b)x(this.separator),x(this.rightPad)}else{for(let b=0;b<u-1;++b)x(this.rightPad),x(this.separator);x(this.rightPad)}}}compute(e,n){const s=e.length,r=n.length;if(r>0){let c=n[0];if(c!==0)throw new Error(`First split value must be 0, got ${c}`);for(let l=1;l<r;++l){let u=n[l]>=c;if(u=u&&n[l]<=s,!u)throw new Error(`Invalid split value ${n[l]}, must be in [${c}, ${s}]`);c=n[l]}if(c!==s)throw new Error(`Last split value must be data size. Expected ${s}, got ${c}`)}const o=r-1,i=se("int32",r);if(s===0||r===0){const c=new Array(s);for(let l=0;l<=o;++l)i[l]=0;return[c,i]}i[0]=0;for(let c=1;c<=o;++c){const l=n[c]-n[c-1];let u=0;this.nGramWidths.forEach(d=>{u+=this.getNumNGrams(l,d)}),this.preserveShort&&l>0&&u===0&&(u=1),i[c]=i[c-1]+u}const a=new Array(i[o]);for(let c=0;c<o;++c){const l=n[c];let u=i[c];if(this.nGramWidths.forEach(d=>{const h=n[c+1]-n[c],f=this.getNumNGrams(h,d);this.createNGrams(e,l,a,u,f,d),u+=f}),this.preserveShort&&u===i[c]){const d=n[c+1]-n[c];if(d===0)continue;const h=d+2*this.padWidth,f=1;this.createNGrams(e,l,a,u,f,h)}}return[a,i]}}function yC(t,e,n,s,r,o,i,a){return new wC(n,s,r,o,i,a).compute(t,e)}/**
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
 */function vC(t,e,n,s){if(!t.length)return;if(e.length===0){for(let o=0;o<t.length;++o)s.push(t.subarray(o,o+1));return}if(e.length===1){const o=e[0];let i=t.indexOf(o);for(;i!==-1;){const a=t.subarray(0,i);(!n||a.length!==0)&&s.push(a),t=t.subarray(i+1),i=t.indexOf(o)}(!n||t.length!==0)&&s.push(t);return}let r=0;for(let o=0;o<t.length+1;o++)if(o===t.length||e.indexOf(t[o])!==-1){const i=t.subarray(r,o);(!n||i.length!==0)&&s.push(i),r=o+1}}function $C(t,e,n){const s=t.length,r=[];let o=0,i=0;const a=new Array(s);for(let h=0;h<s;++h){const f=r.length;vC(t[h],e,n,r);const p=r.length-f;a[h]=p,o+=p,i=Math.max(i,p)}const c=se("int32",o*2),l=new Array(o),u=[s,i];let d=0;for(let h=0;h<s;++h)for(let f=0;f<a[h];++f)c[d*2]=h,c[d*2+1]=f,l[d]=r[d],++d;return[c,l,u]}/**
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
 */function IC(t,e){const n=se("int32",t.length);for(let s=0;s<t.length;++s)n[s]=lf(t[s]).modulo(e).getLowBitsUnsigned();return n}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const su=st((t,e)=>t-e),SC=qo((t,e,n,s)=>({real:t-n,imag:e-s})),EC=ct(Es,su,SC),AR={kernelName:Es,backendName:"cpu",kernelFunc:EC};/**
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
 */function TC(t,e){const n=new Array(t.rank);for(let r=0;r<n.length;r++)n[r]=t.shape[r]*e[r];const s=_e(n,t.dtype);for(let r=0;r<s.values.length;++r){const o=s.indexToLoc(r),i=new Array(t.rank);for(let c=0;c<i.length;c++)i[c]=o[c]%t.shape[c];const a=t.locToIndex(i);s.values[r]=t.values[a]}return s}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ns=(t,e)=>{const n=e.value-t.value;return n===0?t.index-e.index:n};function ru(t,e,n=0,s=t.length-1){for(;s>n;){if(s-n>600){const a=s-n+1,c=e-n+1,l=Math.log(a),u=.5*Math.exp(2*l/3),d=.5*Math.sqrt(l*u*(a-u)/a)*Math.sign(c-a/2),h=Math.max(n,Math.floor(e-c*u/a+d)),f=Math.min(s,Math.floor(e+(a-c)*u/a+d));ru(t,e,h,f)}const r=t[e];let o=n,i=s;for(K(t,n,e),ns(t[s],r)>0&&K(t,n,s);o<i;){for(K(t,o,i),o++,i--;ns(t[o],r)<0;)o=o+1;for(;ns(t[i],r)>0;)i=i-1}ns(t[n],r)===0?K(t,n,i):(i=i+1,K(t,i,s)),i<=e&&(n=i+1),e<=i&&(s=i-1)}}function RC(t,e,n,s,r){const o=e[e.length-1],[i,a]=[t.length/o,o],c=xe(n,i*s),l=xe("int32",i*s);for(let d=0;d<i;d++){const h=d*a,f=t.subarray(h,h+a);let p=new Array(f.length);f.forEach((b,w)=>p[w]={value:b,index:w}),s<p.length&&(ru(p,s),p=p.slice(0,s)),r&&p.sort(ns);const g=d*s,m=c.subarray(g,g+s),x=l.subarray(g,g+s);for(let b=0;b<s;b++)m[b]=p[b].value,x[b]=p[b].index}const u=e.slice();return u[u.length-1]=s,[_e(u,n,c),_e(u,"int32",l)]}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kC(t,e,n,s){const r=oe(e,n)[0],o=[1,n[0],1];for(let p=0;p<r;p++)o[0]*=n[p];o[1]=n[r];for(let p=r+1;p<n.length;p++)o[2]*=n[p];const i={},a=new Int32Array(n[r]),c=new qr(o,s,t),l=[],u=o[0]===1&&o[2]===1;for(let p=0;p<n[r];p++){let g;if(u)g=t[p].toString();else{const m=[];for(let x=0;x<o[0];x++)for(let b=0;b<o[2];b++)m.push(c.get(x,p,b));g=m.join(",")}if(i[g]!==void 0)a[p]=i[g];else{const m=Object.keys(i).length;i[g]=m,a[p]=m,l.push(p)}}const d=o.slice();d[1]=Object.keys(i).length;const h=new qr(d,s);l.forEach((p,g)=>{for(let m=0;m<o[0];m++)for(let x=0;x<o[2];x++)h.set(c.get(m,p,x),m,g,x)});const f=n.slice();return f[r]=d[1],{outputValues:h.values,outputShape:f,indices:a}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
 */const{addImpl:NC,bincountImpl:ou,bincountReduceImpl:_C,castImpl:AC,ceilImpl:DC,concatImpl:FC,equalImpl:OC,expImpl:PC,expm1Impl:LC,floorImpl:BC,gatherNdImpl:MC,gatherV2Impl:VC,greaterImpl:UC,greaterEqualImpl:WC,lessImpl:GC,lessEqualImpl:zC,linSpaceImpl:HC,logImpl:XC,maxImpl:qC,maximumImpl:KC,minimumImpl:jC,multiplyImpl:YC,negImpl:QC,notEqualImpl:ZC,prodImpl:JC,raggedTensorToTensorImpl:ew,rangeImpl:tw,rsqrtImpl:nw,scatterImpl:sw,sigmoidImpl:rw,simpleAbsImpl:iu,sliceImpl:ow,sparseFillEmptyRowsImpl:iw,sparseReshapeImpl:aw,sparseSegmentReductionImpl:au,sqrtImpl:cw,stridedSliceImpl:lw,stringNGramsImpl:uw,stringSplitImpl:dw,stringToHashBucketFastImpl:hw,subImpl:fw,tileImpl:pw,topKImpl:gw,transposeImpl:jo,uniqueImpl:mw}=ce;/**
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
 */function cu(t,e){return["x","y","z","w","u","v"].slice(0,e).map(n=>`${t}.${n}`)}function We(t,e){return e===1?[t]:cu(t,e)}function xw(t,e){if(t===1)return"rc";let n="";for(let s=0;s<t;s++)n+=e[s],s<t-1&&(n+=",");return n}/**
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
 */class bw{constructor(e){if(this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.enableShapeUniforms=Ue(this.outputShape.length),this.rank===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{const n=We("rc",this.rank),s=ge(this.rank),r=this.getOutOfBoundsCondition(n),o=this.getSetup(n),i=this.getOutput(n);this.userCode=`
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
 */class lu{constructor(e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec3"}],this.outputShape=e,this.enableShapeUniforms=Ue(this.outputShape.length);let s="";for(let r=0;r<4;r++){let o="thisRC = rc;";r%2===1&&(o+="thisRC.z += 1;"),r>1&&(o+="thisRC.y += 1;"),s+=`
        ${o}
        ${r>0?"if(thisRC.y < rows && thisRC.z < cols){":""}
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${r}] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ${r>0?"}":""}
      `}this.userCode=`
      ${Cw(n,this.enableShapeUniforms)}
      ${this.enableShapeUniforms?Wo():Uo(e)}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ${this.enableShapeUniforms?"outShape[1]":e[1]};
        int cols = ${this.enableShapeUniforms?"outShape[2]":e[2]};

        ${s}

        setOutput(result);
      }
    `}}function Cw(t,e){return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${e?I0(["r","c","d"],"inputShape"):Zt(["r","c","d"],t)}
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
 */class ww{constructor(e){this.gpgpu=e,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}acquireTexture(e,n,s){const r=du(n,s),o=hu(e,r,s);o in this.freeTextures||(this.freeTextures[o]=[]),o in this.usedTextures||(this.usedTextures[o]=[]);const i=uu(e,r,this.gpgpu.gl,this.gpgpu.textureConfig,s);if(this.freeTextures[o].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=i,this.log();const c=this.freeTextures[o].shift();return this.usedTextures[o].push(c),c}let a;return r===Ae.PACKED_2X2_FLOAT32?a=this.gpgpu.createPackedMatrixTexture(e[0],e[1]):r===Ae.PACKED_2X2_FLOAT16?a=this.gpgpu.createFloat16PackedMatrixTexture(e[0],e[1]):r===Ae.UNPACKED_FLOAT32?a=this.gpgpu.createFloat32MatrixTexture(e[0],e[1]):r===Ae.UNPACKED_FLOAT16?a=this.gpgpu.createFloat16MatrixTexture(e[0],e[1]):r===Ae.PACKED_4X1_UNSIGNED_BYTE&&(a=this.gpgpu.createUnsignedBytesMatrixTexture(e[0],e[1])),this.usedTextures[o].push(a),this.numUsedTextures++,this._numBytesAllocated+=i,this.log(),a}releaseTexture(e,n,s,r){if(this.freeTextures==null)return;const o=du(s,r),i=hu(n,o,r);i in this.freeTextures||(this.freeTextures[i]=[]);const a=uu(n,o,this.gpgpu.gl,this.gpgpu.textureConfig,r),c=S().get("WEBGL_DELETE_TEXTURE_THRESHOLD");c!==-1&&this._numBytesAllocated>c?(this.gpgpu.deleteMatrixTexture(e.texture),this._numBytesAllocated-=a):(this.freeTextures[i].push(e),this.numFreeTextures++,this._numBytesFree+=a),this.numUsedTextures--;const l=this.usedTextures[i],u=l.indexOf(e);if(u<0)throw new Error("Cannot release a texture that was never provided by this texture manager");l.splice(u,1),this.log()}log(){if(!this.logEnabled)return;const e=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${e})`);const n=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*n)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(this.freeTextures!=null){for(const e in this.freeTextures)this.freeTextures[e].forEach(n=>{this.gpgpu.deleteMatrixTexture(n.texture)});for(const e in this.usedTextures)this.usedTextures[e].forEach(n=>{this.gpgpu.deleteMatrixTexture(n.texture)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}}function yw(t,e){const n=t;if(e===n.R32F)return 4;if(e===n.R16F)return 2;if(e===n.RGBA32F)return 16;if(e===t.RGBA)return 16;if(e===n.RGBA16F)return 8;if(e===n.RGBA8)return 4;throw new Error(`Unknown internal format ${e}`)}function uu(t,e,n,s,r){const o=vw(e,s);let i;if(r){const[c,l]=vn(t[0],t[1]);i=c*l}else{const[c,l]=Zn(t[0],t[1]);i=c*l}const a=yw(n,o);return i*a}function vw(t,e){switch(t){case Ae.PACKED_2X2_FLOAT32:return Rl(e);case Ae.PACKED_2X2_FLOAT16:return kl(e);case Ae.UNPACKED_FLOAT32:return Sl(e);case Ae.UNPACKED_FLOAT16:return El(e);case Ae.PACKED_4X1_UNSIGNED_BYTE:return Tl(e);default:throw new Error(`Unknown physical texture type ${t}`)}}function $w(t){return S().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?t?Ae.PACKED_2X2_FLOAT32:Ae.UNPACKED_FLOAT32:t?Ae.PACKED_2X2_FLOAT16:Ae.UNPACKED_FLOAT16}function du(t,e){if(t===nt.UPLOAD)return Ae.PACKED_2X2_FLOAT32;if(t===nt.RENDER||t==null)return $w(e);if(t===nt.DOWNLOAD||t===nt.PIXELS)return Ae.PACKED_4X1_UNSIGNED_BYTE;throw new Error(`Unknown logical texture type ${t}`)}function hu(t,e,n){return`${t[0]}_${t[1]}_${e}_${n}`}/**
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
 */class Nt{constructor(e,n){this.variableNames=["A"],this.outputShape=e,this.enableShapeUniforms=Ue(this.outputShape.length),this.userCode=`
      float unaryOperation(float x) {
        ${n}
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `}}const rt="if (isnan(x)) return x;",Iw="return x;",fu="return abs(x);";function DR(t=0){return rt+`
    return x > 0.0 ? 1.0 : float(${t});
  `}const Sw="return (x >= 0.0) ? x : (exp(x) - 1.0);",Ew=rt+`
  return (x < 0.0) ? 0.0 : x;
`,Tw=rt+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,Nn="return x;",Rw="return 1.0 / (1.0 + exp(-1.0 * x));";/**
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
 */const kw="return x;",Nw=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,_w=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Aw=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Dw="return 1.0 / (1.0 + exp(-1.0 * x));";class en{constructor(e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.enableShapeUniforms=Ue(this.outputShape.length),this.userCode=`
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
 */class Fw{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=e,this.enableShapeUniforms=Ue(this.outputShape.length);const n=e.length,s=We("rc",n),r=ge(n),o=xw(n,s),i=s.slice(-2),a=n<=1?"rc":`vec2(${i.join(",")})`;this.userCode=`
      void main() {
        ${r} rc = getOutputCoords();
        vec4 packedInput = getA(${o});

        setOutput(getChannel(packedInput, ${a}));
      }
    `}}var ss=(t,e,n)=>new Promise((s,r)=>{var o=c=>{try{a(n.next(c))}catch(l){r(l)}},i=c=>{try{a(n.throw(c))}catch(l){r(l)}},a=c=>c.done?s(c.value):Promise.resolve(c.value).then(o,i);a((n=n.apply(t,e)).next())});/**
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
 */const Ow=Gx,Pw=1e-7,Lw=1e-4,dr={};function Bw(t){return t in dr||(dr[t]={}),dr[t]}const Mw=S().getNumber("CPU_HANDOFF_SIZE_THRESHOLD"),Vw=600;function Uw(){return S().global.screen==null?1024:S().global.screen.height*S().global.screen.width*window.devicePixelRatio*Vw/1024/1024}class hr extends te{constructor(e){if(super(),this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.lastGlFlushTime=0,this.warnedAboutMemory=!1,this.pendingDeletes=0,this.disposed=!1,!S().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");let n;if(e!=null){if(e instanceof zo)n=e;else{const s=bt(S().getNumber("WEBGL_VERSION"),e);n=new zo(s)}this.binaryCache={},this.gpgpuCreatedLocally=!1}else{const s=bt(S().getNumber("WEBGL_VERSION"));n=new zo(s),this.binaryCache=Bw(S().getNumber("WEBGL_VERSION")),this.gpgpuCreatedLocally=!0}this.gpgpu=n,this.canvas=this.gpgpu.gl.canvas,this.textureManager=new ww(this.gpgpu),this.numMBBeforeWarning=Uw(),this.texData=new he(this,mn())}nextDataId(){return hr.nextDataId++}numDataIds(){return this.texData.numDataIds()-this.pendingDeletes}write(e,n,s){if((S().getBool("WEBGL_CHECK_NUMERICAL_PROBLEMS")||S().getBool("DEBUG"))&&this.checkNumericalProblems(e),s==="complex64"&&e!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");const r={id:this.nextDataId()};return this.texData.set(r,{shape:n,dtype:s,values:e,usage:nt.UPLOAD,refCount:1}),r}refCount(e){return this.texData.has(e)?this.texData.get(e).refCount:0}incRef(e){const n=this.texData.get(e);n.refCount++}decRef(e){if(this.texData.has(e)){const n=this.texData.get(e);n.refCount--}}move(e,n,s,r,o){if(S().getBool("DEBUG")&&this.checkNumericalProblems(n),r==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(e,{shape:s,dtype:r,values:n,usage:nt.UPLOAD,refCount:o})}disposeIntermediateTensorInfo(e){this.disposeData(e.dataId)}readSync(e){const n=this.texData.get(e),{values:s,dtype:r,complexTensorInfos:o,slice:i,shape:a,isPacked:c}=n;if(i!=null){let h;c?h=new en(a,Nn):h=new Nt(a,Nn);const f=this.runWebGLProgram(h,[{dataId:e,shape:a,dtype:r}],r),p=this.readSync(f.dataId);return this.disposeIntermediateTensorInfo(f),p}if(s!=null)return this.convertAndCacheOnCPU(e);if(r==="string")return s;const l=this.activeTimers!=null;let u;l&&(u=ht());let d;if(r==="complex64"){const h=this.readSync(o.real.dataId),f=this.readSync(o.imag.dataId);d=Yn(h,f)}else d=this.getValuesFromTexture(e);return l&&(this.downloadWaitMs+=ht()-u),this.convertAndCacheOnCPU(e,d)}read(e){return ss(this,null,function*(){if(this.pendingRead.has(e)){const p=this.pendingRead.get(e);return new Promise(g=>p.push(g))}const n=this.texData.get(e),{values:s,shape:r,slice:o,dtype:i,complexTensorInfos:a,isPacked:c}=n;if(o!=null){let p;c?p=new en(r,Nn):p=new Nt(r,Nn);const g=this.runWebGLProgram(p,[{dataId:e,shape:r,dtype:i}],i),m=this.read(g.dataId);return this.disposeIntermediateTensorInfo(g),m}if(s!=null)return this.convertAndCacheOnCPU(e);if(S().getBool("DEBUG")&&!S().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&S().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");let l=null,u;if(i!=="complex64"&&S().get("WEBGL_BUFFER_SUPPORTED")){u=this.decode(e);const p=this.texData.get(u.dataId);l=this.gpgpu.createBufferFromTexture(p.texture.texture,...er(r))}this.pendingRead.set(e,[]),i!=="complex64"&&(yield this.gpgpu.createAndWaitForFence());let d;if(i==="complex64"){const p=yield Promise.all([this.read(a.real.dataId),this.read(a.imag.dataId)]),g=p[0],m=p[1];d=Yn(g,m)}else if(l==null)d=this.getValuesFromTexture(e);else{const p=D(r);d=this.gpgpu.downloadFloat32MatrixFromBuffer(l,p)}if(u!=null&&this.disposeIntermediateTensorInfo(u),l!=null){const p=this.gpgpu.gl;L(p,()=>p.deleteBuffer(l))}const h=this.convertAndCacheOnCPU(e,d),f=this.pendingRead.get(e);return this.pendingRead.delete(e),f.forEach(p=>p(h)),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e)&&mn().removeDataId(e,this),this.pendingDeletes--),h})}readToGPU(e,n={}){const s=this.texData.get(e),{values:r,shape:o,slice:i,dtype:a,isPacked:c,texture:l}=s;if(a==="complex64")throw new Error("Does not support reading texture for complex64 dtype.");if(i!=null){let f;c?f=new en(o,Nn):f=new Nt(o,Nn);const p=this.runWebGLProgram(f,[{dataId:e,shape:o,dtype:a}],a),g=this.readToGPU(p,n);return this.disposeIntermediateTensorInfo(p),g}if(l==null)throw r!=null?new Error("Data is not on GPU but on CPU."):new Error("There is no data on GPU or CPU.");const u=this.decode(e,n.customTexShape),d=mn().makeTensorFromTensorInfo(u),h=this.texData.get(u.dataId);return Object.assign({tensorRef:d},h.texture)}bufferSync(e){const n=this.readSync(e.dataId);if(e.dtype==="string")try{const s=n.map(r=>on(r));return _e(e.shape,e.dtype,s)}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return _e(e.shape,e.dtype,n)}checkNumericalProblems(e){if(e!=null)for(let n=0;n<e.length;n++){const s=e[n];if(!Zx(s))throw S().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error(`The value ${s} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`):Error(`The value ${s} cannot be represented on this device.`)}}getValuesFromTexture(e){const{shape:n,dtype:s,isPacked:r}=this.texData.get(e),o=D(n);if(S().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){const h=this.decode(e),f=this.texData.get(h.dataId),p=this.gpgpu.downloadMatrixFromPackedTexture(f.texture.texture,...er(n)).subarray(0,o);return this.disposeIntermediateTensorInfo(h),p}const i=S().getBool("WEBGL_PACK")&&r===!0,a=i?Mo(n):n,c=i?new fb(a):new hb(a),l=this.runWebGLProgram(c,[{shape:a,dtype:s,dataId:e}],"float32"),u=this.texData.get(l.dataId),d=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(u.texture.texture,u.texShape[0],u.texShape[1]).subarray(0,o);return this.disposeIntermediateTensorInfo(l),d}timerAvailable(){return S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0}time(e){const n=this.activeTimers,s=[];let r=!1;this.programTimersStack==null?(this.programTimersStack=s,r=!0):this.activeTimers.push(s),this.activeTimers=s,e();const o=Te(this.activeTimers.map(c=>c.query)).filter(c=>c!=null),i=Te(this.activeTimers.map(c=>c.name)).filter(c=>c!=null);this.activeTimers=n,r&&(this.programTimersStack=null);const a={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null};return(()=>ss(this,null,function*(){if(S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0){const c=yield Promise.all(o);a.kernelMs=q(c),a.getExtraProfileInfo=()=>c.map((l,u)=>({name:i[u],ms:l})).map(l=>`${l.name}: ${l.ms}`).join(", ")}else a.kernelMs={error:"WebGL query timers are not supported in this environment."};return this.uploadWaitMs=0,this.downloadWaitMs=0,a}))()}memory(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU,numBytesInGPUAllocated:this.textureManager.numBytesAllocated,numBytesInGPUFree:this.textureManager.numBytesFree}}startTimer(){return S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:ht(),endMs:null}}endTimer(e){return S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),e):(e.endMs=ht(),e)}getQueryTime(e){return ss(this,null,function*(){if(S().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0)return this.gpgpu.waitForQueryAndGetTime(e);const n=e;return n.endMs-n.startMs})}disposeData(e,n=!1){if(this.pendingDisposal.has(e))return!1;if(!this.texData.has(e))return!0;if(n?this.texData.get(e).refCount=0:this.texData.get(e).refCount--,!n&&this.texData.get(e).refCount>0)return!1;if(this.pendingRead.has(e))return this.pendingDisposal.add(e),this.pendingDeletes++,!1;this.releaseGPUData(e);const{complexTensorInfos:s}=this.texData.get(e);return s!=null&&(this.disposeData(s.real.dataId,n),this.disposeData(s.imag.dataId,n)),this.texData.delete(e),!0}releaseGPUData(e){const{texture:n,dtype:s,texShape:r,usage:o,isPacked:i,slice:a}=this.texData.get(e),c=a&&a.origDataId||e,l=this.dataRefCount.get(c);l>1?this.dataRefCount.set(c,l-1):(this.dataRefCount.delete(c),n!=null&&(this.numBytesInGPU-=this.computeBytes(r,s),this.textureManager.releaseTexture(n,r,o,i)));const u=this.texData.get(e);u.texture=null,u.texShape=null,u.isPacked=!1,u.slice=null}getTexture(e){return this.uploadToGPU(e),this.texData.get(e).texture.texture}getDataInfo(e){return this.texData.get(e)}shouldExecuteOnCPU(e,n=Mw){return S().getBool("WEBGL_CPU_FORWARD")&&e.every(s=>this.texData.get(s.dataId).texture==null&&D(s.shape)<n)}getGPGPUContext(){return this.gpgpu}where(e){dt("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");const n=e.dataSync();return Ow(e.shape,n)}packedUnaryOp(e,n,s){const r=new en(e.shape,n),o=this.compileAndRun(r,[e],s);return mn().makeTensorFromTensorInfo(o)}abs(e){if(this.shouldExecuteOnCPU([e])&&e.dtype!=="complex64"){const r=iu(this.texData.get(e.dataId).values);return this.makeOutput(e.shape,e.dtype,r)}if(S().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,fu,e.dtype);const n=new Nt(e.shape,fu),s=this.compileAndRun(n,[e]);return mn().makeTensorFromTensorInfo(s)}makeTensorInfo(e,n,s){let r;if(n==="string"&&s!=null&&s.length>0&&ds(s[0])){const o=s.map(i=>Gt(i));r=this.write(o,e,n)}else r=this.write(s,e,n);return this.texData.get(r).usage=null,{dataId:r,shape:e,dtype:n}}makeOutput(e,n,s){return mn().makeTensorFromTensorInfo(this.makeTensorInfo(e,n,s),this)}unpackTensor(e){const n=new Fw(e.shape);return this.runWebGLProgram(n,[e],e.dtype)}packTensor(e){const n=new bw(e.shape),s=!0;return this.runWebGLProgram(n,[e],e.dtype,null,s)}packedReshape(e,n){const s=[$n(e.shape),...In(e.shape)],r={dtype:e.dtype,shape:s,dataId:e.dataId},o=[$n(n),...In(n)],i=new lu(o,s),a=!0,c=[s],l=this.runWebGLProgram(i,[r],e.dtype,c,a);return{dataId:l.dataId,shape:n,dtype:l.dtype}}decode(e,n){const s=this.texData.get(e),{isPacked:r,shape:o,dtype:i}=s;if(n!=null){const h=D(o),f=n[0]*n[1]*4;v(h<=f,()=>"customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data.")}const a=Mo(o);let c;r?c=new db(a):c=new ub(a);const l=!0,u=[n??er(a)],d=this.runWebGLProgram(c,[{shape:a,dtype:i,dataId:e}],i,u,l,n);return{dtype:i,shape:o,dataId:d.dataId}}runWebGLProgram(e,n,s,r,o=!1,i){const a=this.makeTensorInfo(e.outputShape,s),c=this.texData.get(a.dataId);if(e.packedOutput&&(c.isPacked=!0),e.outPackingScheme===Qn.DENSE){const x=i??er(e.outputShape);c.texShape=x.map(b=>b*2)}if(e.outTexUsage!=null&&(c.usage=e.outTexUsage),D(a.shape)===0)return c.values=xe(a.dtype,0),a;const l=[],u=n.map(x=>{if(x.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");let b=this.texData.get(x.dataId);if(b.texture==null){if(!e.packedInputs&&D(x.shape)<=S().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:x.shape,texData:null,isUniform:!0,uniformValues:b.values};e.packedInputs&&(b.isPacked=!0,b.shape=x.shape)}if(this.uploadToGPU(x.dataId),!!b.isPacked!=!!e.packedInputs)x=b.isPacked?this.unpackTensor(x):this.packTensor(x),l.push(x),b=this.texData.get(x.dataId);else if(b.isPacked&&!rr(b.shape,x.shape)){const w=x,y=x.shape;x.shape=b.shape,x=this.packedReshape(x,y),l.push(x),b=this.texData.get(x.dataId),w.shape=y}return{shape:x.shape,texData:b,isUniform:!1}});this.uploadToGPU(a.dataId);const d={shape:a.shape,texData:c,isUniform:!1},h=lb(e,u,d),f=this.getAndSaveBinary(h,()=>ab(this.gpgpu,e,u,d)),p=this.activeTimers!=null;let g;p&&(g=this.startTimer()),S().get("ENGINE_COMPILE_ONLY")||cb(this.gpgpu,f,u,d,r),l.forEach(x=>this.disposeIntermediateTensorInfo(x)),p&&(g=this.endTimer(g),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(g)}));const m=S().get("WEBGL_FLUSH_THRESHOLD");if(m>0){const x=ht();x-this.lastGlFlushTime>m&&(this.gpgpu.gl.flush(),this.lastGlFlushTime=x)}if(!S().getBool("WEBGL_LAZILY_UNPACK")&&c.isPacked&&o===!1){const x=this.unpackTensor(a);return this.disposeIntermediateTensorInfo(a),x}return a}compileAndRun(e,n,s,r,o=!1){return s=s||n[0].dtype,this.runWebGLProgram(e,n,s,r,o)}getAndSaveBinary(e,n){return e in this.binaryCache||(this.binaryCache[e]=n()),this.binaryCache[e]}getTextureManager(){return this.textureManager}dispose(){this.disposed||(S().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(n=>{this.gpgpu.deleteProgram(this.binaryCache[n].webGLProgram),delete this.binaryCache[n]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)}floatPrecision(){return this.floatPrecisionValue==null&&(this.floatPrecisionValue=$o(()=>{if(!S().get("WEBGL_RENDER_FLOAT32_ENABLED")){const e=S().getBool("DEBUG");S().set("DEBUG",!1);const n=this.abs(Ie(1e-8)).dataSync()[0];if(S().set("DEBUG",e),n>0)return 32}return 16})),this.floatPrecisionValue}epsilon(){return this.floatPrecision()===32?Pw:Lw}uploadToGPU(e){const n=this.texData.get(e),{shape:s,dtype:r,values:o,texture:i,usage:a,isPacked:c}=n;if(i!=null)return;const l=this.activeTimers!=null;let u;l&&(u=ht());let d=n.texShape;if(d==null&&(d=g0(s,c),n.texShape=d),o!=null){const h=Mo(s);let f,p=d[1],g=d[0];const m=o instanceof Uint8Array||o instanceof Uint8ClampedArray;(c||!m)&&([p,g]=vn(d[0],d[1])),c?f=new gb(h,m):f=new pb(h,m);const x=m?[g,p]:d,b=this.makeTensorInfo(x,r),w=this.texData.get(b.dataId);m?w.usage=nt.PIXELS:w.usage=nt.UPLOAD,w.texShape=x,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(b.dataId),p,g,o);const y=[[g,p]],$=!0,N=this.runWebGLProgram(f,[b],r,y,$),R=this.texData.get(N.dataId);n.texShape=R.texShape,n.isPacked=R.isPacked,n.usage=R.usage,S().get("ENGINE_COMPILE_ONLY")?this.disposeData(N.dataId):(n.texture=R.texture,n.values=null,this.texData.delete(N.dataId)),this.disposeIntermediateTensorInfo(b),l&&(this.uploadWaitMs+=ht()-u)}else{const h=this.acquireTexture(d,a,r,c);n.texture=h}}convertAndCacheOnCPU(e,n){const s=this.texData.get(e),{dtype:r}=s;return this.releaseGPUData(e),n!=null&&(s.values=Ww(n,r)),s.values}acquireTexture(e,n,s,r){if(this.numBytesInGPU+=this.computeBytes(e,s),!this.warnedAboutMemory&&this.numBytesInGPU>this.numMBBeforeWarning*1024*1024){const o=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: ${o} MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(e,n,r)}computeBytes(e,n){return e[0]*e[1]*Sr(n)}checkCompileCompletion(){for(const[,e]of Object.entries(this.binaryCache))this.checkCompletion_(e)}checkCompileCompletionAsync(){return ss(this,null,function*(){const e=[];if(this.gpgpu.parallelCompilationExtension){for(const[,n]of Object.entries(this.binaryCache))e.push(this.checkCompletionAsync_(n));return Promise.all(e)}else{for(const[,n]of Object.entries(this.binaryCache)){const s=new Promise(r=>{try{this.checkCompletion_(n),r(!0)}catch(o){throw o}});e.push(s)}return Promise.all(e)}})}checkCompletionAsync_(e){return ss(this,null,function*(){return this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.parallelCompilationExtension.COMPLETION_STATUS_KHR)?this.checkCompletion_(e):(yield dx(),this.checkCompletionAsync_(e))})}checkCompletion_(e){if(this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.gl.LINK_STATUS)===!1)throw console.log(this.gpgpu.gl.getProgramInfoLog(e.webGLProgram)),this.gpgpu.gl.getShaderParameter(e.fragmentShader,this.gpgpu.gl.COMPILE_STATUS)===!1?(pl(e.source,this.gpgpu.gl.getShaderInfoLog(e.fragmentShader)),new Error("Failed to compile fragment shader.")):new Error("Failed to link vertex and fragment shaders.");return!0}getUniformLocations(){for(const[,e]of Object.entries(this.binaryCache)){const{uniformLocations:n,customUniformLocations:s,infLoc:r,nanLoc:o,inShapesLocations:i,inTexShapesLocations:a,outShapeLocation:c,outShapeStridesLocation:l,outTexShapeLocation:u}=$l(this.gpgpu,e.program,e.webGLProgram);e.uniformLocations=n,e.customUniformLocations=s,e.infLoc=r,e.nanLoc=o,e.inShapesLocations=i,e.inTexShapesLocations=a,e.outShapeLocation=c,e.outShapeStridesLocation=l,e.outTexShapeLocation=u}}}hr.nextDataId=0;function Ww(t,e){if(e==="float32"||e==="complex64")return t;if(e==="int32"||e==="bool"){const n=e==="int32"?new Int32Array(t.length):new Uint8Array(t.length);for(let s=0;s<n.length;++s)n[s]=Math.round(t[s]);return n}else throw new Error(`Unknown dtype ${e}`)}/**
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
 */function Gw(){S().set("WEBGL_FORCE_F16_TEXTURES",!0)}/**
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
 */Sa()&&im("webgl",()=>new hr,2);const FR={forceHalfFloat:Gw};/**
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
 */const pu=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`,OR="return (a - b) * (a - b);";class _n{constructor(e,n,s){this.variableNames=["A","B"],this.outputShape=Ce(n,s),this.enableShapeUniforms=Ue(this.outputShape.length),this.userCode=`
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
 */const fr=`
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;
`,PR=null,LR=null;class rs{constructor(e,n,s,r=!1){this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=Ce(n,s);const o=this.outputShape.length;this.enableShapeUniforms=Ue(o);let i="";if(r)if(o===0||D(this.outputShape)===1)i=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(i=`
          ${ge(o)} coords = getOutputCoords();
        `,o===1)this.enableShapeUniforms?i+=`
            result.y = (coords + 1) >= outShape ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `:i+=`
            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{const c=We("coords",o);this.enableShapeUniforms?i+=`
            bool nextRowOutOfBounds =
              (${c[o-2]} + 1) >= outShape[${o} - 2];
            bool nextColOutOfBounds =
              (${c[o-1]} + 1) >= outShape[${o} - 1];
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `:i+=`
            bool nextRowOutOfBounds =
              (${c[o-2]} + 1) >= ${this.outputShape[o-2]};
            bool nextColOutOfBounds =
              (${c[o-1]} + 1) >= ${this.outputShape[o-1]};
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
 */function je(t){const{inputs:e,backend:n}=t,{x:s}=e;return n.incRef(s.dataId),{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}const zw={kernelName:xs,backendName:"webgl",kernelFunc:je};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mt(t){const{inputs:e,backend:n}=t,{real:s,imag:r}=e,o=n.makeTensorInfo(s.shape,"complex64"),i=n.texData.get(o.dataId),a=je({inputs:{x:s},backend:n}),c=je({inputs:{x:r},backend:n});return i.complexTensorInfos={real:a,imag:c},o}const Hw={kernelName:Ar,backendName:"webgl",kernelFunc:Mt};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gu="return (a < 0.) ? b * a : a;",mu=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function Xw(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{alpha:o}=s,i=n.makeTensorInfo([],"float32",rn(o,"float32")),a=S().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new rs(mu,r.shape,i.shape):new _n(gu,r.shape,i.shape),c=n.runWebGLProgram(a,[r,i],"float32");return n.disposeIntermediateTensorInfo(i),c}const qw={kernelName:Ti,backendName:"webgl",kernelFunc:Xw};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xu="return (a < 0.) ? b * a : a;",bu=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function Kw(t){const{inputs:e,backend:n}=t,{x:s,alpha:r}=e,o=S().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new rs(bu,s.shape,r.shape):new _n(xu,s.shape,r.shape);return n.runWebGLProgram(o,[s,r],"float32")}const jw={kernelName:Bi,backendName:"webgl",kernelFunc:Kw};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const An="if (isnan(x)) return x;",Yw=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`,Qw=`
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;
`;function re({opSnippet:t,packedOpSnippet:e,cpuKernelImpl:n,dtype:s}){return({inputs:r,backend:o})=>{const{x:i}=r,a=o,c=s||i.dtype;if(a.shouldExecuteOnCPU([i])&&n!=null){const d=a.texData.get(i.dataId),h=n(d.values,c);return a.makeTensorInfo(i.shape,c,h)}const l=S().getBool("WEBGL_PACK_UNARY_OPERATIONS")&&e!=null;let u;return l?u=new en(i.shape,e):u=new Nt(i.shape,t),a.runWebGLProgram(u,[i],c)}}function De({opSnippet:t,packedOpSnippet:e,checkOutOfBounds:n=!1,supportsComplex:s=!1,cpuKernelImpl:r,dtype:o}){return({inputs:i,backend:a})=>{const{a:c,b:l}=i,u=a;if(s&&c.dtype==="complex64"){const p=u.texData.get(c.dataId),g=u.texData.get(l.dataId),[m,x]=[[p.complexTensorInfos.real,g.complexTensorInfos.real],[p.complexTensorInfos.imag,g.complexTensorInfos.imag]].map(w=>{const[y,$]=w,N={dataId:y.dataId,dtype:y.dtype,shape:c.shape},R={dataId:$.dataId,dtype:$.dtype,shape:l.shape},k=new _n(t,c.shape,l.shape);return u.runWebGLProgram(k,[N,R],wt(y.dtype,$.dtype))}),b=Mt({inputs:{real:m,imag:x},backend:u});return u.disposeIntermediateTensorInfo(m),u.disposeIntermediateTensorInfo(x),b}const d=o||wt(c.dtype,l.dtype);if((c.dtype==="string"||l.dtype==="string"||u.shouldExecuteOnCPU([c,l]))&&r!=null){const p=u.texData.get(c.dataId).values,g=u.texData.get(l.dataId).values,m=c.dtype==="string"?Qt(p):p,x=c.dtype==="string"?Qt(g):g,[b,w]=r(c.shape,l.shape,m,x,d),y=u.makeTensorInfo(w,d),$=u.texData.get(y.dataId);return $.values=b,y}const h=S().getBool("WEBGL_PACK_BINARY_OPERATIONS")&&e!=null;let f;return h?f=new rs(e,c.shape,l.shape,n):f=new _n(t,c.shape,l.shape),u.runWebGLProgram(f,[c,l],d)}}function os(t,e=!1){if(t==="linear")return e?kw:Iw;if(t==="relu")return e?_w:Ew;if(t==="elu")return e?Nw:Sw;if(t==="relu6")return e?Aw:Tw;if(t==="prelu")return e?bu:xu;if(t==="leakyrelu")return e?mu:gu;if(t==="sigmoid")return e?Dw:Rw;throw new Error(`Activation ${t} has not been implemented for the WebGL backend.`)}/**
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
 */class Cu{constructor(e,n,s,r=!1,o=!1,i=!1,a=null,c=!1,l=!1){this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=s,this.enableShapeUniforms=Ue(this.outputShape.length);const u=r?e[1]:e[2],d=Math.ceil(u/2),h=r?"i * 2, rc.y":"rc.y, i * 2",f=o?"rc.z, i * 2":"i * 2, rc.z",p=r?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],g=o?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"];let m="",x="";a&&(c?m=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${a}
        }`:l?m=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${a}
        }`:m=`vec4 activation(vec4 x) {
          ${a}
        }`,x="result = activation(result);");const b=i?"result += getBiasAtOutCoords();":"";i&&this.variableNames.push("bias"),c&&this.variableNames.push("preluActivationWeights"),l&&this.variableNames.push("leakyreluAlpha");let w="rc.x",y="rc.x";e[0]<n[0]?w=`int(min(float(rc.x), ${e[0]-1}.))`:n[0]<e[0]&&(y=`int(min(float(rc.x), ${n[0]-1}.))`),this.userCode=`
      ${m}
      // Don't use uniform for sharedDimensionPacked for performance.
      const float sharedDimension = ${d}.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < ${d}; i++) {
          int batchA = ${w};
          int batchB = ${y};
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
 */const wu={REAL:"return areal * breal - aimag * bimag;",IMAG:"return areal * bimag + aimag * breal;"};class yu{constructor(e,n,s){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=Ce(n,s),this.userCode=`
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
 */const vu="return a * b;";function Yo(t){const{inputs:e,backend:n}=t,{a:s,b:r}=e,o=wt(s.dtype,r.dtype);if(s.dtype==="complex64"){const a=n.texData.get(s.dataId),c=n.texData.get(r.dataId),l=new yu(wu.REAL,s.shape,r.shape),u=new yu(wu.IMAG,s.shape,r.shape),d=[{dataId:a.complexTensorInfos.real.dataId,dtype:a.complexTensorInfos.real.dtype,shape:s.shape},{dataId:a.complexTensorInfos.imag.dataId,dtype:a.complexTensorInfos.imag.dtype,shape:s.shape},{dataId:c.complexTensorInfos.real.dataId,dtype:c.complexTensorInfos.real.dtype,shape:r.shape},{dataId:c.complexTensorInfos.imag.dataId,dtype:c.complexTensorInfos.imag.dtype,shape:r.shape}],h=n.runWebGLProgram(l,d,"float32"),f=n.runWebGLProgram(u,d,"float32"),p=Mt({inputs:{real:h,imag:f},backend:n});return n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(f),p}if(n.shouldExecuteOnCPU([s,r])){const a=n.texData.get(s.dataId),c=n.texData.get(r.dataId),[l,u]=YC(s.shape,r.shape,a.values,c.values,o),d=n.makeTensorInfo(u,o),h=n.texData.get(d.dataId);return h.values=l,d}let i;return S().getBool("WEBGL_PACK_BINARY_OPERATIONS")?i=new rs(vu,s.shape,r.shape):i=new _n(vu,s.shape,r.shape),n.runWebGLProgram(i,[s,r],o)}const Zw={kernelName:ys,backendName:"webgl",kernelFunc:Yo};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jw(t,e,n){const s=[$n(t.shape),...In(t.shape)],r={dtype:t.dtype,shape:s,dataId:t.dataId},o=[$n(e),...In(e)],i=new lu(o,s),a=!0,c=[s],l=n.runWebGLProgram(i,[r],t.dtype,c,a);return{dataId:l.dataId,shape:e,dtype:l.dtype}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function O(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{shape:o}=s,i=n,a=D(r.shape),c=Se(o,a),l=D(c);v(a===l,()=>`The new shape (${c}) has ${l} elements and the old shape (${r.shape}) has ${a} elements. The new shape and old shape must have the same number of elements.`);const u=i.texData.get(r.dataId);return u.isPacked&&!rr(r.shape,c)&&!(u.texture!==null&&rr(u.shape,c))?Jw(r,c,i):(i.incRef(r.dataId),{dataId:r.dataId,shape:c,dtype:r.dtype})}const ey={kernelName:Wi,backendName:"webgl",kernelFunc:O};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class $u{constructor(e,n){this.variableNames=["x"];const{windowSize:s,batchSize:r,inSize:o,outSize:i}=e;this.outputShape=[r,i];const a=Math.floor(s/4)*4,c=s%4;let l="sumValue += dot(values, ones);";if(n!=null){const d=1/n;l=`sumValue += dot(values * ${E(d)?d.toPrecision(2):d}, ones);`}let u="";o%s>0&&(u=`
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

        for (int i = 0; i < ${a}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${l}
        }

        int inIdx = inOffset + ${a};
        if (${c===1}) {
          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);

          ${l}
        } else if (${c===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1), 0.0, 0.0);

          ${l}
        } else if (${c===3}) {
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
 */class ty{constructor(e,n){this.variableNames=["x"];const{windowSize:s,batchSize:r,inSize:o,outSize:i}=e;this.outputShape=[r,i];let a="0.0",c="";n==="prod"?a="1.0":n==="min"?(a="1.0 / 1e-20",c="min"):n==="max"&&(a="-1.0 / 1e-20",c="max");let l=`${n}(${n}(${n}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;n==="sum"?l="sumValue":n==="prod"?l="prodValue":n==="all"?l="allValue":n==="any"&&(l="anyValue");const u=Math.floor(s/4)*4,d=s%4;let h=`
      if (${n==="sum"}) {
        sumValue += dot(values, ones);
      } else if (${n==="prod"}) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = ${c}(values, minMaxValue);
        if (${n==="min"} || ${n==="max"}) {
          minMaxValue = ${c}(values, minMaxValue);
          bvec4 isNaN = isnan(values);
          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {
            minMaxValue = vec4(NAN);
          }
        }
      }
    `,f="vec4";n==="all"?(a="1.0",h=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,f="bvec4"):n==="any"&&(a="0.0",h=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,f="bvec4");let p="";o%s>0&&(p=`
        if (inIdx < 0 || inIdx >= ${o}) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = ${a};
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

        vec4 minMaxValue = vec4(${a});
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
 */function ny(t){const e=[];for(;e.length===0||e[e.length-1].outSize!==1;){const n=e.length?e[e.length-1].outSize:t[1],s=Zs(n);e.push({inSize:n,windowSize:s,outSize:Math.ceil(n/s)})}return e}function tn(t,e,n,s){const r=ny(t.shape);let o=t;for(let i=0;i<r.length;i++){const{inSize:a,windowSize:c,outSize:l}=r[i];let u,d;n==="mean"?u=i===0?new $u({windowSize:c,inSize:a,batchSize:t.shape[0],outSize:l},a):new $u({windowSize:c,inSize:a,batchSize:t.shape[0],outSize:l}):u=new ty({windowSize:c,inSize:a,batchSize:t.shape[0],outSize:l},n),d=o,o=s.runWebGLProgram(u,[o],e),d.dataId!==t.dataId&&s.disposeIntermediateTensorInfo(d)}return o}/**
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
 */class sy{constructor(e,n){this.variableNames=["A"];const s=new Array(e.length);for(let i=0;i<s.length;i++)s[i]=e[n[i]];this.outputShape=s,this.rank=s.length;const r=ge(this.rank),o=ry(n);this.userCode=`
    void main() {
      ${r} resRC = getOutputCoords();
      setOutput(getA(${o}));
    }
    `}}function ry(t){const e=t.length;if(e>6)throw Error(`Transpose for rank ${e} is not yet supported`);const n=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],s=new Array(e);for(let r=0;r<t.length;r++)s[t[r]]=n[r];return s.join()}/**
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
 */class oy{constructor(e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;const s=new Array(e.length);for(let u=0;u<s.length;u++)s[u]=e[n[u]];if(this.outputShape=s,this.rank=s.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);const r=ge(this.rank),o=cu("rc",this.rank),i=new Array(this.rank);for(let u=0;u<n.length;u++)i[n[u]]=o[u];const a=`vec2(${i.slice(-2).join()})`,c=`++${o[this.rank-1]} < ${s[this.rank-1]}`,l=`getChannel(getA(${i.join()}), ${a})`;this.userCode=`
    void main() {
      ${r} rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = ${l};
      if(${c}) {
        result[1] = ${l};
      }
      --${o[this.rank-1]};
      if(++${o[this.rank-2]} < ${s[this.rank-2]}) {
        result[2] = ${l};
        if(${c}) {
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
 */function pr(t,e,n){const s=S().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new oy(t.shape,e):new sy(t.shape,e);return n.runWebGLProgram(s,[t],t.dtype)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function iy(t,e,n,s){const r=e,o=t.shape.length,i=oe(r,t.shape);let a=i;const c=et(a,o),l=c!=null;let u=t;l&&(u=pr(t,c,s),a=tt(a.length,o)),gt("sum",a,o);const[d,h]=St(u.shape,a);let f=d;n&&(f=Je(d,i));const p=D(h),m=D(t.shape)/p,x=O({inputs:{x:u},attrs:{shape:[m,p]},backend:s}),b=Jr(t.dtype),w=tn(x,b,"sum",s),y=O({inputs:{x:w},attrs:{shape:f},backend:s});return s.disposeIntermediateTensorInfo(x),s.disposeIntermediateTensorInfo(w),l&&s.disposeIntermediateTensorInfo(u),y}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gr(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{axis:o,keepDims:i}=s;return iy(r,o,i,n)}const ay={kernelName:ji,backendName:"webgl",kernelFunc:gr};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ge(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{perm:o}=s,i=n,a=r.shape.length,c=new Array(a);for(let u=0;u<c.length;u++)c[u]=r.shape[o[u]];let l;if(i.shouldExecuteOnCPU([r])){const d=i.texData.get(r.dataId).values,h=jo(d,r.shape,r.dtype,o,c);l=i.makeTensorInfo(c,r.dtype);const f=i.texData.get(l.dataId);f.values=h}else l=pr(r,o,i);return l}const cy={kernelName:Vn,backendName:"webgl",kernelFunc:Ge};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Iu=1e3;function mr({a:t,b:e,transposeA:n,transposeB:s,backend:r,bias:o=null,preluActivationWeights:i=null,leakyreluAlpha:a=0,activation:c=null}){const l=t.shape.length,u=e.shape.length,d=n?t.shape[l-2]:t.shape[l-1],h=s?e.shape[u-1]:e.shape[u-2],f=n?t.shape[l-1]:t.shape[l-2],p=s?e.shape[u-2]:e.shape[u-1],g=t.shape.slice(0,-2),m=e.shape.slice(0,-2),x=D(g),b=D(m),y=Ce(t.shape.slice(0,-2),e.shape.slice(0,-2)).concat([f,p]);v(d===h,()=>`Error in matMul: inner shapes (${d}) and (${h}) of Tensors with shapes ${t.shape} and ${e.shape} and transposeA=${n} and transposeB=${s} must match.`);const $=n?[x,d,f]:[x,f,d],N=s?[b,p,h]:[b,h,p],R=O({inputs:{x:t},backend:r,attrs:{shape:$}}),k=O({inputs:{x:e},backend:r,attrs:{shape:N}}),B=[R,k],U=Math.max(x,b),Q=n?R.shape[1]:R.shape[2],ie=o!=null,Ye=i!=null,Fe=c==="leakyrelu",Oe=c!=null?os(c,!0):null,ut=ie||Ye||Fe||Oe!=null;let Ct;if((f===1||p===1)&&Q>Iu&&ut===!1){let Vt=R,On=k;n&&(Vt=Ge({inputs:{x:R},backend:r,attrs:{perm:[0,2,1]}}),B.push(Vt)),s&&(On=Ge({inputs:{x:k},backend:r,attrs:{perm:[0,2,1]}}),B.push(On));const Pn=p!==1,Ir=p===1;let si=Vt;Pn&&(si=O({inputs:{x:Vt},backend:r,attrs:{shape:[U,Q,1]}}),B.push(si));const _T=p===1?2:1;let ri=On;Ir&&(ri=O({inputs:{x:On},backend:r,attrs:{shape:[U,1,Q]}}),B.push(ri));const fd=Yo({inputs:{a:si,b:ri},backend:r});Ct=gr({inputs:{x:fd},backend:r,attrs:{axis:_T,keepDims:!0}}),B.push(fd)}else{const Vt=wt(t.dtype,e.dtype),On=new Cu($,N,[U,f,p],n,s,ie,Oe,Ye,Fe),Pn=[R,k];if(o!=null&&Pn.push(o),Ye&&Pn.push(i),Fe){const Ir=r.makeTensorInfo([],"float32",rn(a,"float32"));Pn.push(Ir),B.push(Ir)}Ct=r.runWebGLProgram(On,Pn,Vt)}const ze=O({inputs:{x:Ct},backend:r,attrs:{shape:y}});B.push(Ct);for(const Vt of B)r.disposeIntermediateTensorInfo(Vt);return ze}/**
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
 */function ly(t){const{inputs:e,backend:n,attrs:s}=t,{a:r,b:o,bias:i,preluActivationWeights:a}=e,{transposeA:c,transposeB:l,activation:u,leakyreluAlpha:d}=s;return mr({a:r,b:o,transposeA:c,transposeB:l,backend:n,bias:i,preluActivationWeights:a,leakyreluAlpha:d,activation:u})}const uy={kernelName:Jh,backendName:"webgl",kernelFunc:ly};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Su="return abs(x);";function dy(t){const{inputs:e,backend:n}=t,{x:s}=e;if(n.shouldExecuteOnCPU([s])&&s.dtype!=="complex64"){const o=n.texData.get(s.dataId),i=iu(o.values);return n.makeTensorInfo(s.shape,s.dtype,i)}let r;return S().getBool("WEBGL_PACK_UNARY_OPERATIONS")?r=new en(s.shape,Su):r=new Nt(s.shape,Su),n.runWebGLProgram(r,[s],s.dtype)}const hy={kernelName:Nr,backendName:"webgl",kernelFunc:dy};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fy=rt+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,py=re({opSnippet:fy}),gy={kernelName:Id,backendName:"webgl",kernelFunc:py};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const my=rt+`
  if (x < 1.0) return NAN;
return log(x + sqrt(x * x - 1.0));`,xy=re({opSnippet:my}),by={kernelName:Sd,backendName:"webgl",kernelFunc:xy};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Eu="return a + b;",Cy=De({opSnippet:Eu,packedOpSnippet:Eu,supportsComplex:!0,cpuKernelImpl:NC}),wy={kernelName:Mn,backendName:"webgl",kernelFunc:Cy};/**
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
 */class yy{constructor(e,n){this.outputShape=[],this.outputShape=e,this.variableNames=n.map((o,i)=>`T${i}`);const s=[];this.variableNames.forEach(o=>{s.push(`float v${o} = get${o}AtOutCoords();`)});const r=this.variableNames.map(o=>`v${o}`).join(" + ");this.userCode=`
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
 */class vy{constructor(e,n){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.variableNames=n.map((o,i)=>`T${i}`);const s=[];this.variableNames.forEach(o=>{s.push(`vec4 v${o} = get${o}AtOutCoords();`)});const r=this.variableNames.map(o=>`v${o}`).join(" + ");this.userCode=`
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
 */function xr(t){const{inputs:e,backend:n}=t,s=e;if(s.length===1)return je({inputs:{x:s[0]},backend:n});if(s.length>S().get("WEBGL_MAX_TEXTURES_IN_SHADER")){const c=Math.floor(s.length/2),l=xr({inputs:s.slice(0,c),backend:n}),u=xr({inputs:s.slice(c),backend:n});return xr({inputs:[l,u],backend:n})}const r=s.map(c=>c.dtype).reduce((c,l)=>wt(c,l)),o=s.map(c=>c.shape),a=S().getBool("WEBGL_PACK")?new vy(s[0].shape,o):new yy(s[0].shape,o);return n.runWebGLProgram(a,s,r)}const $y={kernelName:Ed,backendName:"webgl",kernelFunc:xr};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Iy(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{axis:o,keepDims:i}=s,a=r.shape.length,c=oe(o,r.shape);let l=c;const u=et(l,a);let d=r;u!=null&&(d=Ge({inputs:{x:r},backend:n,attrs:{perm:u}}),l=tt(l.length,a)),gt("all",l,a);const[h,f]=St(d.shape,l),p=D(f),g=O({inputs:{x:d},backend:n,attrs:{shape:[-1,p]}}),m=tn(g,g.dtype,"all",n);let x;if(i){const b=Je(h,c);x=O({inputs:{x:m},backend:n,attrs:{shape:b}})}else x=O({inputs:{x:m},backend:n,attrs:{shape:h}});return n.disposeIntermediateTensorInfo(g),n.disposeIntermediateTensorInfo(m),u!=null&&n.disposeIntermediateTensorInfo(d),x}const Sy={kernelName:Td,backendName:"webgl",kernelFunc:Iy};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ey(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{axis:o,keepDims:i}=s,a=r.shape.length,c=oe(o,r.shape);let l=c;const u=et(l,a);let d=r;u!=null&&(d=Ge({inputs:{x:r},backend:n,attrs:{perm:u}}),l=tt(l.length,a)),gt("any",l,a);const[h,f]=St(d.shape,l),p=D(f),g=O({inputs:{x:d},backend:n,attrs:{shape:[-1,p]}}),m=tn(g,g.dtype,"any",n);let x;if(i){const b=Je(h,c);x=O({inputs:{x:m},backend:n,attrs:{shape:b}})}else x=O({inputs:{x:m},backend:n,attrs:{shape:h}});return n.disposeIntermediateTensorInfo(g),n.disposeIntermediateTensorInfo(m),u!=null&&n.disposeIntermediateTensorInfo(d),x}const Ty={kernelName:Rd,backendName:"webgl",kernelFunc:Ey};/**
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
 */class Ry{constructor(e,n,s){this.variableNames=["A"];const{windowSize:r,batchSize:o,outSize:i}=e;s||this.variableNames.push("bestIndicesA"),this.outputShape=[o,i];const a=n==="max"?">":"<",c=s?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${r};

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < ${r}; i++) {
          int inIdx = ${c};
          float candidate = getA(batch, inIdx);
          if (candidate ${a} bestValue) {
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
 */class ky{constructor(e,n,s,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,v(e.length>2,()=>`Packed arg${s.charAt(0).toUpperCase()+s.slice(1)} supports only inputs with rank above 2.`);const o=e[e.length-1],i=Math.ceil(o/n);this.outputShape=e.slice(0,-1),i>1&&this.outputShape.push(i),r||this.variableNames.push("bestIndicesA");const a=this.outputShape,c=a.length,l=ge(c),u=We("coords",c);let d,h;if(i===1){h=c+1;const k=ge(h);d=`
        ${k} sourceLocR = ${k}(${u.join()}, 0);
        ++${u[c-1]};
        ${k} sourceLocG = ${k}(${u.join()}, 0);
        ++${u[c-2]};
        ${k} sourceLocA = ${k}(${u.join()}, 0);
        --${u[c-1]};
        ${k} sourceLocB = ${k}(${u.join()}, 0);
        --${u[c-2]};`}else h=c,d=`
        ${l} sourceLocR = coords;
        ++${u[c-1]};
        ${l} sourceLocG = coords;
        ++${u[c-2]};
        ${l} sourceLocA = coords;
        --${u[c-1]};
        ${l} sourceLocB = coords;
        --${u[c-2]};`;const f=["x","y","z","w","u","v"].slice(0,h),p="."+f[h-1],g=f.map(k=>"int "+k),m=We("sourceLocR",h-1).concat("inIdx.r"),x=We("sourceLocG",h-1).concat("inIdx.g"),b=We("sourceLocB",h-1).concat("inIdx.b"),w=We("sourceLocA",h-1).concat("inIdx.a"),y=s==="max"?"greaterThan":"lessThan",$=r?"":`
          inIdx = round(vec4(getBestIndicesAChannel(${m.join()}),
                             getBestIndicesAChannel(${x.join()}),
                             getBestIndicesAChannel(${b.join()}),
                             getBestIndicesAChannel(${w.join()})));`,N=`vec4(
            getAChannel(${m.join()}),
            hasNextCol ? getAChannel(${x.join()}) : 0.,
            hasNextRow ? getAChannel(${b.join()}) : 0.,
            hasNextRow && hasNextCol ? getAChannel(${w.join()}) : 0.)`,R=r?"":`
      float getBestIndicesAChannel(${g.join()}) {
        return getChannel(getBestIndicesA(${f.join()}),
                                          vec2(${f.slice(-2).join()}));
      }`;this.userCode=`
      float getAChannel(${g.join()}) {
        return getChannel(getA(${f.join()}),
                               vec2(${f.slice(-2).join()}));
      }
      ${R}
      void main() {
        ${l} coords = getOutputCoords();
        bool hasNextCol = ${u[c-1]} < ${a[c-1]-1};
        bool hasNextRow = ${u[c-2]} < ${a[c-2]-1};
        ${d}
        ivec4 srcIdx = ivec4(sourceLocR${p}, sourceLocG${p},
          sourceLocB${p}, sourceLocA${p}) * ${n};
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = ${N};

        for (int i = 0; i < ${n}; i++) {
          inIdx = srcIdx;
          ${$}
          vec4 candidate = ${N};
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(${y}(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

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
 */function Tu(t,e,n,s=null){let r=e.shape[0],o=e.shape[1];s!=null&&(r=s.shape[0],o=s.shape[1]);const i=Zs(o),a={windowSize:i,inSize:o,batchSize:r,outSize:Math.ceil(o/i)},c=new Ry(a,n,s==null),l=[e];s!=null&&l.push(s);const u=t.runWebGLProgram(c,l,"int32");if(u.shape[1]===1)return u;const d=Tu(t,e,n,u);return t.disposeIntermediateTensorInfo(u),d}function Ru(t,e,n,s=null){const r=s!=null?s.shape:e.shape,o=r[r.length-1],i=Zs(o),a=new ky(r,i,n,s==null),c=s==null?[e]:[e,s],l=t.runWebGLProgram(a,c,"int32");if(l.shape.length===e.shape.length){const u=Ru(t,e,n,l);return t.disposeIntermediateTensorInfo(l),u}return l}function ku(t,e,n,s){const r=[n];if(gt("arg"+s.charAt(0).toUpperCase()+s.slice(1),r,e.shape.length),!S().getBool("WEBGL_PACK_REDUCE")||e.shape.length<=2){const o=[],i=t.texData.get(e.dataId),a=i!==null&&i.isPacked;let c=e;a&&(c=t.unpackTensor(e),o.push(c));const[l,u]=St(c.shape,r),d=D(u),h=O({inputs:{x:c},backend:t,attrs:{shape:[-1,d]}});o.push(h);const f=Tu(t,h,s);o.push(f);const p=O({inputs:{x:f},backend:t,attrs:{shape:l}});return o.forEach(g=>t.disposeIntermediateTensorInfo(g)),p}return Ru(t,e,s)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ny(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{axis:o}=s;let i=oe(o,r.shape);const a=et(i,r.shape.length);let c=r;const l=[];a!=null&&(c=Ge({inputs:{x:r},backend:n,attrs:{perm:a}}),l.push(c),i=tt(i.length,c.shape.length)),gt("argMax",[i[0]],c.shape.length);const u=ku(n,c,i[0],"max");return l.forEach(d=>n.disposeIntermediateTensorInfo(d)),u}const _y={kernelName:kd,backendName:"webgl",kernelFunc:Ny};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ay(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{axis:o}=s;let i=oe(o,r.shape);const a=et(i,r.shape.length);let c=r;const l=[];a!=null&&(c=Ge({inputs:{x:r},backend:n,attrs:{perm:a}}),l.push(c),i=tt(i.length,c.shape.length)),gt("argMin",[i[0]],c.shape.length);const u=ku(n,c,i[0],"min");return l.forEach(d=>n.disposeIntermediateTensorInfo(d)),u}const Dy={kernelName:Nd,backendName:"webgl",kernelFunc:Ay};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fy=rt+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,Oy=re({opSnippet:Fy}),Py={kernelName:_d,backendName:"webgl",kernelFunc:Oy};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ly=rt+"return log(x + sqrt(x * x + 1.0));",By=re({opSnippet:Ly}),My={kernelName:Ad,backendName:"webgl",kernelFunc:By};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vy=rt+`
  return atan(x);
`,Uy=re({opSnippet:Vy}),Wy={kernelName:Dd,backendName:"webgl",kernelFunc:Uy};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gy=Yw+`
  return atan(a, b);
`,zy=`
  vec4 result = atan(a, b);
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  `+Qw+`
  return result;
`,Hy=De({opSnippet:Gy,packedOpSnippet:zy}),Xy={kernelName:Od,backendName:"webgl",kernelFunc:Hy};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qy=rt+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,Ky=re({opSnippet:qy}),jy={kernelName:Fd,backendName:"webgl",kernelFunc:Ky};/**
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
 */class is{constructor(e,n,s,r=!1,o=!1){if(this.variableNames=["x"],n==="avg"&&s)throw new Error("Cannot compute positions for average pool.");const i=e.filterWidth,a=e.strideHeight,c=e.strideWidth,l=e.dilationHeight,u=e.dilationWidth,d=e.effectiveFilterHeight,h=e.effectiveFilterWidth,f=e.padInfo.top,p=e.padInfo.left;this.outputShape=e.outShape;const g=n==="avg",m=`((batch  * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + d`,x=`(xR * ${e.inWidth} + xC) * ${e.inChannels} + d`;let b="0.0";if(g||(b="-1.0 / 1e-20"),s){const k=">=";this.userCode=`
        const ivec2 strides = ivec2(${a}, ${c});
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
              if (value ${k} currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = ${r?o?m:x:`wR * ${h} + wC`};
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}const w="max";let y=`${n}(${n}(${n}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;n==="avg"&&(y="avgValue / count");const $=Math.floor(i/4)*4,N=i%4,R=`
      if (${g}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${w}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(${a}, ${c});
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

          for (int wC = 0; wC < ${$}; wC += 4) {
            int xC = xCCorner + wC * ${u};

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              getValue(batch, xR, xC + 2 * ${u}, d),
              getValue(batch, xR, xC + 3 * ${u}, d)
            );

            ${R}
          }

          int xC = xCCorner + ${$};
          if (${N===1}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            ${R}
          } else if (${N===2}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              initializationValue,
              initializationValue
            );

            ${R}
          } else if (${N===3}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              getValue(batch, xR, xC + 2 * ${u}, d),
              initializationValue
            );

            ${R}
          }
        }
        setOutput(${y});
      }
    `}}class Qo{constructor(e,n,s,r=!1,o=!1){if(this.variableNames=["x"],n==="avg"&&s)throw new Error("Cannot compute positions for average pool.");const i=e.filterWidth,a=e.strideDepth,c=e.strideHeight,l=e.strideWidth,u=e.dilationDepth,d=e.dilationHeight,h=e.dilationWidth,f=e.effectiveFilterDepth,p=e.effectiveFilterHeight,g=e.effectiveFilterWidth,m=e.padInfo.front,x=e.padInfo.top,b=e.padInfo.left;this.outputShape=e.outShape;const w=n==="avg";let y="0.0";if(w||(y="-1.0 / 1e-20"),s){const U=">=";this.userCode=`
        const ivec3 strides =
            ivec3(${a}, ${c}, ${l});
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
                if (value ${U} currMinMaxValue) {
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
      `;return}const $="max";let N=`${n}(${n}(${n}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;n==="avg"&&(N="avgValue / count");const R=Math.floor(i/4)*4,k=i%4,B=`
      if (${w}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${$}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(${a}, ${c}, ${l});
      const ivec3 pads = ivec3(${m}, ${x}, ${b});
      const float initializationValue = ${y};
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
        vec4 minMaxValue = vec4(${y});
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

            for (int wC = 0; wC < ${R}; wC += 4) {
              int xC = xCCorner + wC * ${h};

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${h}, ch),
                getValue(batch, xD, xR, xC + 2 * ${h}, ch),
                getValue(batch, xD, xR, xC + 3 * ${h}, ch)
              );

              ${B}
            }

            int xC = xCCorner + ${R};
            if (${k===1}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              ${B}
            } else if (${k===2}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${h}, ch),
                initializationValue,
                initializationValue
              );

              ${B}
            } else if (${k===3}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${h}, ch),
                getValue(batch, xD, xR, xC + 2 * ${h}, ch),
                initializationValue
              );

              ${B}
            }
          }
          setOutput(${N});
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
 */function Yy(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e;Jn(r,"avgPool");const{filterSize:o,strides:i,pad:a,dimRoundingMode:c}=s,l=1;v(wn(i,l),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${l}'`);const u=bn(r.shape,o,i,l,a,c);if(u.filterWidth===1&&u.filterHeight===1&&T(u.inShape,u.outShape))return je({inputs:{x:r},backend:n});const d=new is(u,"avg",!1);return n.runWebGLProgram(d,[r],"float32")}const Qy={kernelName:Pd,backendName:"webgl",kernelFunc:Yy};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zy(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{filterSize:o,strides:i,pad:a,dimRoundingMode:c,dataFormat:l}=s,u=[1,1,1],d=Kn(r.shape,o,i,u,a,c,l),h=new Qo(d,"avg",!1);return n.runWebGLProgram(h,[r],"float32")}const Jy={kernelName:Bd,backendName:"webgl",kernelFunc:Zy};/**
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
 */class e1{constructor(e){this.variableNames=["dy"],this.outputShape=e.inShape;const n=e.filterHeight,s=e.filterWidth,r=e.strideHeight,o=e.strideWidth,i=e.dilationHeight,a=e.dilationWidth,c=e.effectiveFilterHeight,l=e.effectiveFilterWidth,u=c-1-e.padInfo.top,d=l-1-e.padInfo.left,h=1/(n*s);this.userCode=`
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
        for (int wR = 0; wR < ${c};
            wR += ${i}) {
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${l};
            wC+= ${a}) {
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
    `}}class t1{constructor(e){this.variableNames=["dy"],this.outputShape=e.inShape;const n=e.filterDepth,s=e.filterHeight,r=e.filterWidth,o=e.strideDepth,i=e.strideHeight,a=e.strideWidth,c=e.dilationDepth,l=e.dilationHeight,u=e.dilationWidth,d=e.effectiveFilterDepth,h=e.effectiveFilterHeight,f=e.effectiveFilterWidth,p=d-1-e.padInfo.front,g=h-1-e.padInfo.top,m=f-1-e.padInfo.left,x=1/(n*s*r);this.userCode=`
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
            wD += ${c}) {
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
              float dyC = float(dyCCorner + wC) / ${a}.0;

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
 */function n1(t){const{inputs:e,backend:n,attrs:s}=t,{dy:r,input:o}=e,i=o,{filterSize:a,strides:c,pad:l,dimRoundingMode:u}=s,d=[1,1,1],h=Kn(i.shape,a,c,d,l,u),f=new t1(h);return n.runWebGLProgram(f,[r],i.dtype)}const s1={kernelName:Md,backendName:"webgl",kernelFunc:n1};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function r1(t){const{inputs:e,backend:n,attrs:s}=t,{dy:r,input:o}=e,i=o;Jn([r,o],"avgPoolGrad");const{filterSize:a,strides:c,pad:l}=s,u=bn(i.shape,a,c,1,l),d=new e1(u);return n.runWebGLProgram(d,[r],i.dtype)}const o1={kernelName:Ld,backendName:"webgl",kernelFunc:r1};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function i1(t){const{inputs:e,backend:n,attrs:s}=t,{a:r,b:o}=e,{transposeA:i,transposeB:a}=s;return mr({a:r,b:o,transposeA:i,transposeB:a,backend:n})}const a1={kernelName:fi,backendName:"webgl",kernelFunc:i1};/**
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
 */class c1{constructor(e,n,s,r,o,i){this.outputShape=[],this.variableNames=["x","mean","variance"],Ce(e,n),Ce(e,s);let a="0.0";r!=null&&(Ce(e,r),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");let c="1.0";o!=null&&(Ce(e,o),this.variableNames.push("scale"),c="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ${a};
        float scale = ${c};
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
 */class l1{constructor(e,n,s,r,o,i){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],Ce(e,n),Ce(e,s);let a="vec4(0.0)";r!=null&&(Ce(e,r),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");let c="vec4(1.0)";o!=null&&(Ce(e,o),this.variableNames.push("scale"),c="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`
      void main() {
        vec4 offset = ${a};
        vec4 scale = ${c};

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
 */const u1={kernelName:lh,backendName:"webgl",kernelFunc:({inputs:t,backend:e,attrs:n})=>{const{x:s,mean:r,variance:o,offset:i,scale:a}=t;v(r.shape.length===o.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),v(i==null||r.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),v(a==null||r.shape.length===a.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let{varianceEpsilon:c}=n;c==null&&(c=.001);const l=[s,r,o];let u=null;i!=null&&(u=i.shape,l.push(i));let d=null;a!=null&&(d=a.shape,l.push(a));const h=S().getBool("WEBGL_PACK_NORMALIZATION")?new l1(s.shape,r.shape,o.shape,u,d,c):new c1(s.shape,r.shape,o.shape,u,d,c);return e.runWebGLProgram(h,l,l[0].dtype)}};/**
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
 */class d1{constructor(e){this.variableNames=["source"],this.outputShape=e,this.rank=e.length;const n=ge(this.rank);this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const s=h1(this.rank);let r;const o=e.map((i,a)=>`sourceLoc.${Zo[a]} = start[${a}] + coords.${Zo[a]};`);r=`
        ${n} sourceLoc;
        ${n} coords = getOutputCoords();
        ${o.join(`
`)}
      `,this.userCode=`
      void main() {
        ${r}
        setOutput(getSource(${s}));
      }
    `}}const Zo=["x","y","z","w","u","v"];function h1(t){if(t===1)return"sourceLoc";if(t<=6)return Zo.slice(0,t).map(e=>"sourceLoc."+e).join(",");throw Error(`Slicing for rank ${t} is not yet supported`)}/**
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
 */class f1{constructor(e){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const n=ge(this.rank),s=We("coords",this.rank),r=We("sourceLoc",this.rank),o=this.rank===1?"sourceLoc":`vec2(${r.slice(-2).join()})`,i=`getChannel(getSource(${r.join()}), ${o})`,a=`
      result.x = ${i};
      if (++${s[this.rank-1]} < ${e[this.rank-1]}) {
        ++${r[this.rank-1]};
        result.y = ${i};
        --${r[this.rank-1]};
      }
    `,c=this.rank===1?"":`
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
        ${a}
        ${c}
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
 */function p1(t,e,n,s){const r=s.texData.get(t.dataId),o=s.makeTensorInfo(n,t.dtype),i=s.texData.get(o.dataId);Object.assign(i,r),i.refCount=1,i.shape=n,i.dtype=t.dtype;let a=go(e,ke(t.shape));r.slice&&(a+=r.slice.flatOffset),i.slice={flatOffset:a,origDataId:r.slice&&r.slice.origDataId||t.dataId};const c=s.dataRefCount.get(i.slice.origDataId)||1;return s.dataRefCount.set(i.slice.origDataId,c+1),o}function Dn(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{begin:o,size:i}=s,[a,c]=mo(r,o,i);if(fo(r,a,c),D(c)===0)return n.makeTensorInfo(c,r.dtype,[]);if(n.shouldExecuteOnCPU([r])||r.dtype==="string"){const d=n.texData.get(r.dataId),h=ow(d.values,a,c,r.shape,r.dtype);return n.makeTensorInfo(c,r.dtype,h)}const{isPacked:l}=n.texData.get(r.dataId),u=po(r.shape,a,c);if(l||!u){const d=S().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new f1(c):new d1(c),h=[a];return n.runWebGLProgram(d,[r],r.dtype,h)}return n.uploadToGPU(r.dataId),p1(r,a,c,n)}const g1={kernelName:Ur,backendName:"webgl",kernelFunc:Dn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const m1={kernelName:Vd,backendName:"webgl",kernelFunc:t=>{const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{blockShape:o,crops:i}=s;v(r.shape.length<=4,()=>"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet");const a=o.reduce((b,w)=>b*w),c=No(r.shape,o,a),l=_o(c.length,o.length),u=Ao(r.shape,o,a),d=Dc(i,o.length),h=Fc(u,i,o.length),f=[],p=O({inputs:{x:r},backend:n,attrs:{shape:c}}),g=Ge({inputs:{x:p},backend:n,attrs:{perm:l}}),m=O({inputs:{x:g},backend:n,attrs:{shape:u}}),x=Dn({inputs:{x:m},backend:n,attrs:{begin:d,size:h}});return f.push(p),f.push(g),f.push(m),f.forEach(b=>n.disposeIntermediateTensorInfo(b)),x}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function x1(t){const{inputs:e,backend:n,attrs:s}=t,{x:r,weights:o}=e,{size:i}=s,a=n.readSync(r.dataId),c=n.readSync(o.dataId),l=ou(a,c,o.dtype,o.shape,i);return n.makeTensorInfo([i],o.dtype,l)}const b1={kernelName:pi,backendName:"webgl",kernelFunc:x1};/**
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
 */function C1(t){const{inputs:e,backend:n}=t,{s0:s,s1:r}=e,o=n.readSync(s.dataId),i=n.readSync(r.dataId),a=Ce(Array.from(o),Array.from(i));return n.makeTensorInfo([a.length],"int32",Int32Array.from(a))}const w1={kernelName:Ud,backendName:"webgl",kernelFunc:C1};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Nu=De({opSnippet:"return float(a != b);",cpuKernelImpl:ZC,dtype:"bool"}),y1={kernelName:vs,backendName:"webgl",kernelFunc:Nu};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function as(t){const{inputs:e,backend:n}=t,{input:s}=e,r=n.texData.get(s.dataId);return je({inputs:{x:r.complexTensorInfos.real},backend:n})}const v1={kernelName:Mr,backendName:"webgl",kernelFunc:as};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $1="return float(int(x));";function I1(t,e){const n=new Nt(t.shape,$1),s=e.runWebGLProgram(n,[t],"int32");return{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jo(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{dtype:o}=s;if(o==="complex64"){if(r.dtype==="complex64")return je({inputs:{x:r},backend:n});const i=pn(r.shape),a=Jo({inputs:{x:r},backend:n,attrs:{dtype:"float32"}}),c=Mt({inputs:{real:a,imag:i},backend:n});return i.dispose(),n.disposeIntermediateTensorInfo(a),c}if(r.dtype==="complex64"){const i=as({inputs:{input:r},backend:n}),a=Jo({inputs:{x:i},backend:n,attrs:{dtype:o}});return n.disposeIntermediateTensorInfo(i),a}if(!Pe(r.dtype,o)){const i=je({inputs:{x:r},backend:n});return{dataId:i.dataId,shape:i.shape,dtype:o}}if(n.shouldExecuteOnCPU([r])){const i=n.texData.get(r.dataId).values,[a,c,l]=AC(i,r.shape,r.dtype,o);return n.makeTensorInfo(a,c,l)}if(o==="int32")return I1(r,n);if(o==="bool"){const i=n.makeTensorInfo([],"bool",xe("bool",1)),c=Nu({inputs:{a:r,b:i},backend:n});return n.disposeIntermediateTensorInfo(i),c}throw new Error(`Error in Cast: failed to cast ${r.dtype} to ${o}`)}const S1={kernelName:fs,backendName:"webgl",kernelFunc:Jo};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _u="return ceil(x);",E1=re({opSnippet:_u,packedOpSnippet:_u,cpuKernelImpl:DC}),T1={kernelName:_r,backendName:"webgl",kernelFunc:E1};/**
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
 */class R1{constructor(e){this.variableNames=["A"],this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode=`

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
 */class k1{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode=`
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
 */function N1(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{clipValueMin:o,clipValueMax:i}=s;let a;S().getBool("WEBGL_PACK_CLIP")?a=new k1(r.shape):a=new R1(r.shape);const c=[[o],[i]];return n.runWebGLProgram(a,[r],r.dtype,c)}const _1={kernelName:Wd,backendName:"webgl",kernelFunc:N1};/**
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
 */class A1{constructor(e){this.variableNames=["real","imag"],this.outputShape=e,this.userCode=`
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
 */function Au(t,e){return{dataId:e.dataId,dtype:e.dtype,shape:t.shape}}function D1(t){const{inputs:e,backend:n}=t,{x:s}=e,r=n.texData.get(s.dataId),o=new A1(s.shape),i=[Au(s,r.complexTensorInfos.real),Au(s,r.complexTensorInfos.imag)];return n.runWebGLProgram(o,i,i[0].dtype)}const F1={kernelName:gi,backendName:"webgl",kernelFunc:D1};/**
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
 */class O1{constructor(e){this.outputShape=[],this.outputShape=jt(e,1),this.variableNames=e.map((i,a)=>`T${a}`);const n=new Array(e.length-1);n[0]=e[0][1];for(let i=1;i<n.length;i++)n[i]=n[i-1]+e[i][1];const s=[`if (yC < ${n[0]}) setOutput(getT0(yR, yC));`];for(let i=1;i<n.length;i++){const a=n[i-1];s.push(`else if (yC < ${n[i]}) setOutput(getT${i}(yR, yC-${a}));`)}const r=n.length,o=n[n.length-1];s.push(`else setOutput(getT${r}(yR, yC-${o}));`),this.userCode=`
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
 */class P1{constructor(e,n){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=jt(e,n);const s=this.outputShape,r=s.length,o=ge(r),i=We("coords",r),a=["x","y","z","w","u","v"].slice(0,r);this.variableNames=e.map((g,m)=>`T${m}`);const c=new Array(e.length-1);c[0]=e[0][n];for(let g=1;g<c.length;g++)c[g]=c[g-1]+e[g][n];const l=a[n],u=a.slice(-2),d=a.join();let h=`if (${l} < ${c[0]}) {
        return getChannel(
            getT0(${d}), vec2(${u.join()}));
        }`;for(let g=1;g<c.length;g++){const m=c[g-1];h+=`
        if (${l} < ${c[g]}  && ${l} >= ${c[g-1]}) {
          return getChannel(
            getT${g}(${br(a,l,m)}),
            vec2(${br(u,l,m)}));
        }`}const f=c.length,p=c[c.length-1];h+=`
        return getChannel(
          getT${f}(${br(a,l,p)}),
          vec2(${br(u,l,p)}));`,this.userCode=`
      float getValue(${a.map(g=>"int "+g)}) {
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
    `}}function br(t,e,n){const s=t.indexOf(e);return t.map((o,i)=>i===s?`${o} - ${n}`:o).join()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cr(t){const{inputs:e,backend:n}=t,{input:s}=e,r=n.texData.get(s.dataId);return je({inputs:{x:r.complexTensorInfos.imag},backend:n})}const L1={kernelName:Ei,backendName:"webgl",kernelFunc:Cr};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cs(t,e,n){const s=t[0].dtype;if(s==="complex64"){const d=t.map(m=>as({inputs:{input:m},backend:n})),h=t.map(m=>Cr({inputs:{input:m},backend:n})),f=cs(d,e,n),p=cs(h,e,n),g=Mt({inputs:{real:f,imag:p},backend:n});return d.forEach(m=>n.disposeIntermediateTensorInfo(m)),h.forEach(m=>n.disposeIntermediateTensorInfo(m)),n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(p),g}let r=n.shouldExecuteOnCPU(t);if(s==="string"&&(r=!0),r){const d=t.map(b=>{const w=D(b.shape.slice(e));return O({inputs:{x:b},backend:n,attrs:{shape:[-1,w]}})}),h=d.map(b=>({vals:n.readSync(b.dataId),shape:b.shape})),f=jt(d.map(b=>b.shape),1),p=d[0].shape[0]===1,g=FC(h,f,s,p),m=jt(t.map(b=>b.shape),e),x=n.makeTensorInfo(m,s,g);return d.forEach(b=>n.disposeIntermediateTensorInfo(b)),x}const o=S().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER");if(t.length>o){const d=[];for(let f=0;f<t.length;f+=o){const p=t.slice(f,f+o);d.push(cs(p,e,n))}const h=cs(d,e,n);for(const f of d)n.disposeIntermediateTensorInfo(f);return h}if(S().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&t[0].shape.length>1){const d=new P1(t.map(h=>h.shape),e);return n.runWebGLProgram(d,t,s)}const{tensors2D:i,outShape:a}=B1(t,e,n),c=new O1(i.map(d=>d.shape)),l=n.runWebGLProgram(c,i,s);i.forEach(d=>n.disposeIntermediateTensorInfo(d));const u=O({inputs:{x:l},attrs:{shape:a},backend:n});return n.disposeIntermediateTensorInfo(l),u}function B1(t,e,n){const s=jt(t.map(o=>o.shape),e);return{tensors2D:t.map(o=>O({inputs:{x:o},attrs:{shape:[-1,D(o.shape.slice(e))]},backend:n})),outShape:s}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Du(t){const{inputs:e,backend:n,attrs:s}=t,{axis:r}=s,o=oe(r,e[0].shape)[0],i=jt(e.map(l=>l.shape),o);if(D(i)===0)return n.makeTensorInfo(i,e[0].dtype,[]);const a=e.filter(l=>D(l.shape)>0);if(a.length===1)return je({inputs:{x:a[0]},backend:n});const c=a.map(l=>l.shape);return Ec(c,o),cs(a,o,n)}const M1={kernelName:mi,backendName:"webgl",kernelFunc:Du};/**
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
 */class Fu{constructor(e,n=!1,s=null,r=!1,o=!1){this.variableNames=["x","W"],this.outputShape=e.outShape;const i=e.padInfo.top,a=e.padInfo.left,c=e.strideHeight,l=e.strideWidth,u=e.dilationHeight,d=e.dilationWidth,h=e.filterHeight,f=e.filterWidth,p=Math.floor(e.inChannels/4)*4,g=e.inChannels%4,m=e.dataFormat==="channelsLast",x=m?1:2,b=m?2:3,w=m?3:1;let y="",$="";s&&(r?y=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${s}
        }`:o?y=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${s}
        }`:y=`
          float activation(float x) {
            ${s}
          }
        `,$="result = activation(result);");const N=n?"result += getBiasAtOutCoords();":"";n&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),o&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${y}

      const ivec2 strides = ivec2(${c}, ${l});
      const ivec2 pads = ivec2(${i}, ${a});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[${w}];

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
        ${N}
        ${$}
        setOutput(result);
      }
    `}}class V1{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;const n=e.padInfo.front,s=e.padInfo.top,r=e.padInfo.left,o=e.strideDepth,i=e.strideHeight,a=e.strideWidth,c=e.dilationDepth,l=e.dilationHeight,u=e.dilationWidth,d=e.filterDepth,h=e.filterHeight,f=e.filterWidth,p=Math.floor(e.inChannels/4)*4,g=e.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(${o}, ${i}, ${a});
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
          int xF = xFCorner + wF * ${c};

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
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ou{constructor(e,n=!1,s=null,r=!1,o=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=Ue(this.outputShape.length);const i=e.padInfo.left,a=e.strideWidth,c=e.dilationWidth,l=e.filterHeight,u=e.filterWidth,d=u;let h=`
       int xR; int xC; int xCOffset;
       vec4 wTexel; vec4 previous; vec4 final;`;for(let m=0;m<u;m++)h+=`
           vec4 xTexelC${m*2};
           int xTexelC${m*2}Ready;
           vec4 xTexelC${m*2+1};
           int xTexelC${m*2+1}Ready;
           vec4 xC${m};`;h+=`
     for (int r = 0; r < ${l}; r++) {
      for (int d1 = 0; d1 < ${e.inChannels}; d1 += 2) {
       `;for(let m=0;m<u;m++)h+=`
           xTexelC${m*2} = vec4(0.0);
           xTexelC${m*2}Ready = 0;
           xTexelC${m*2+1} = vec4(0.0);
           xTexelC${m*2+1}Ready = 0;
           xC${m} = vec4(0.0);`;h+=`
         xR = xRCorner + r * dilations[0];
         if (xR >=0 && xR < inDims[0]) {
       `;for(let m=0;m<(d+1)/2;m++){const x=m*2;if(h+=`
           xC = xCCorner + ${x*c};
           `,a===1){if(x<u&&(i%2===1?(h+=`
                 xCOffset = xC + 1;
                 if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xCOffset, d1);

                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }
               `,c===1&&x>0?h+=`
                 xC${x} = vec4(xTexelC${x-2}.zw, xTexelC${x}.xy);
                 `:h+=`
                   xCOffset = xC + 1 - 2;

                   if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       previous.zw = vec2(0.0);
                     }

                     xC${x} = vec4(previous.zw, xTexelC${x}.xy);
                   } else {
                     xC${x} = vec4(0.0, 0.0, xTexelC${x}.xy);
                   }
                   `):h+=`
                 if (xC >= 0 && xC < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }

                 xC${x} = xTexelC${x};
                 `,x+1<u)){const b=i%2===0?X(c):c;c%2===0&&i%2===1||c%2!==0&&i%2!==1?(h+=`
                   xCOffset = xC + imod(pads[1], 2) + ${b};

                   if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x+1}Ready == 0) {
                     xTexelC${x+1} = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       xTexelC${x+1}.zw = vec2(0.0);
                     }
                     xTexelC${x+1}Ready = 1;
                   }
                   `,c>1?h+=`
                     xCOffset -= 2;
                     if (xCOffset >= 0 && xCOffset < inDims[1]) {
                      previous = getX(batch, xR, xCOffset, d1);
                      xC${x+1} = vec4(previous.zw, xTexelC${x+1}.xy);
                     } else {
                      xC${x+1} = vec4(0.0, 0.0, xTexelC${x+1}.xy);
                     }
                     `:h+=`
                     xC${x+1} = vec4(xTexelC${x}.zw, xTexelC${x+1}.xy);
                     `):b===1?h+=`
                     xC${x+1} = xTexelC${x};
                     `:h+=`
                     xCOffset = xC + ${b};

                     if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x+1}Ready == 0) {
                       xTexelC${x+1} = getX(batch, xR, xCOffset, d1);
                       if (xCOffset + 1 >= inDims[1]) {
                         xTexelC${x+1}.zw = vec2(0.0);
                       }
                       xTexelC${x+1}Ready = 1;
                     }

                     xC${x+1} = xTexelC${x+1};
                     `}}else x<u&&(i%2===1?(h+=`
                 xCOffset = xC + 1 - strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xCOffset, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }

                 if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${x+1}Ready == 0) {
                   xTexelC${x+1} = getX(batch, xR, xC + 1, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xC + 2 >= inDims[1]) {
                     xTexelC${x+1}.zw = vec2(0.0);
                   }
                   xTexelC${x+1}Ready = 1;
                 }

                 xC${x} = vec4(xTexelC${x}.zw, xTexelC${x+1}.zw);
               `,x+1<u&&(h+=`
                   final = vec4(0.0);
                   xCOffset = xC + 1 + strides[1];
                   if(xCOffset >= 0 && xCOffset < inDims[1]) {
                     final = getX(batch, xR, xCOffset, d1);
                   }
                   xC${x+1} = vec4(xTexelC${x+1}.xy, final.xy);
                 `)):(h+=`
                 if(xC >= 0 && xC < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }

                 xCOffset = xC + strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x+1}Ready == 0) {
                   xTexelC${x+1} = getX(batch, xR, xCOffset, d1);
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${x+1}.zw = vec2(0.);
                   }
                   xTexelC${x+1}Ready = 1;
                 }

                 xC${x} = vec4(
                   xTexelC${x}.xy, xTexelC${x+1}.xy);
               `,x+1<u&&(h+=`
                   xC${x+1} = vec4(xTexelC${x}.zw, xTexelC${x+1}.zw);
                 `)));x<u&&(h+=`
             wTexel = getW(r, ${x}, d1, d2);
             dotProd += xC${x}.xxzz * vec4(wTexel.xy, wTexel.xy);
             if(d1 + 1 < ${e.inChannels}) {
               dotProd += xC${x}.yyww * vec4(wTexel.zw, wTexel.zw);
             }
           `,x+1<u&&(h+=`
               wTexel = getW(r, ${x+1}, d1, d2);
               dotProd += xC${x+1}.xxzz * vec4(wTexel.xy, wTexel.xy);
               if(d1 + 1 < ${e.inChannels}) {
                 dotProd += xC${x+1}.yyww * vec4(wTexel.zw, wTexel.zw);
               }
             `))}h+=`
     }
   `,h+=`
     }
   `,h+=`
     }
   `;let f="",p="";s&&(r?f=`vec4 activation(vec4 a) {
           vec4 b = getPreluActivationWeightsAtOutCoords();
           ${s}
         }`:o?f=`vec4 activation(vec4 a) {
           vec4 b = getLeakyreluAlphaAtOutCoords();
           ${s}
         }`:f=`vec4 activation(vec4 x) {
           ${s}
         }`,p="result = activation(result);");const g=n?"result += getBiasAtOutCoords();":"";n&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),o&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
       ${f}

       void main() {
         ivec4 coords = getOutputCoords();
         int batch = coords.x;
         ivec2 xRCCorner = coords.yz * strides - pads;
         int d2 = coords.w;
         int xRCorner = xRCCorner.x;
         int xCCorner = xRCCorner.y;

         //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
         vec4 dotProd = vec4(0.000000000000001);

         ${h}

         vec4 result = dotProd - vec4(0.000000000000001);
         ${g}
         ${p}
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
 */class U1{constructor(e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec4"},{name:"pad",type:"ivec2"},{name:"stride",type:"ivec2"},{name:"dilation",type:"ivec2"},{name:"inChannels",type:"int"},{name:"itemsPerBlockRow",type:"int"},{name:"outWidth",type:"int"}],this.outputShape=e,this.enableShapeUniforms=Ue(this.outputShape.length);const{dataFormat:s}=n,r=Ve(),o=s==="channelsLast",i=o?1:2,a=o?2:3,c=this.enableShapeUniforms?"if(blockIndex < outShape[2] && pos < outShape[1]) {":`if(blockIndex < ${e[2]} && pos < ${e[1]}) {`;let l="";for(let u=0;u<=1;u++)for(let d=0;d<=1;d++)l+=`
          blockIndex = rc.z + ${d};
          pos = rc.y + ${u};

          ${c}
            offsetY = int(blockIndex / outWidth) * stride[0] - pad[0];
            d0 = offsetY + dilation[0] * (pos / itemsPerBlockRow);

            if(d0 < inputShape[${i}] && d0 >= 0) {
              // Use custom imod instead mod. On Intel GPU, mod may generate
              // unexpected value.
              // https://github.com/tensorflow/tfjs/issues/5447
              offsetX = imod(blockIndex, outWidth) * stride[1] - pad[1];
              d1 = offsetX + dilation[1] * (imod(pos, itemsPerBlockRow) /
                  inChannels);

              if(d1 < inputShape[${a}] && d1 >= 0) {

                ch = imod(pos, inChannels);

                if (${o}) {
                  innerDims = vec2(d1, ch);
                  result[${u*2+d}] = getChannel(
                    getA(rc.x, d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[${u*2+d}] = getChannel(
                    getA(rc.x, ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec3 rc = getOutputCoords();

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
 */function wr(t,e){const n=t.length;return n>=3?e?[...t.slice(0,-3),t[n-3]*t[n-2],t[n-1]]:[...t.slice(0,-3),t[n-3],t[n-2]*t[n-1]]:!e&&n===1&&t[0]>1?[t[0],1]:null}function Pu({x:t,filter:e,convInfo:n,backend:s,bias:r=null,preluActivationWeights:o=null,leakyreluAlpha:i=0,activation:a=null}){const c=t.shape,l=s.texData.get(t.dataId),u=n.inChannels,d=c[0]*c[1]*c[2],h=n.outChannels,f=n.dataFormat==="channelsLast",p=!1,g=!1;let m;const x=[];if(o!=null){const y=wr(o.shape,f);y!=null&&(o=O({inputs:{x:o},backend:s,attrs:{shape:y}}),x.push(o))}if(r!=null){const y=wr(r.shape,f);y!=null&&(r=O({inputs:{x:r},backend:s,attrs:{shape:y}}),x.push(r))}if(!((d===1||h===1)&&u>Iu)&&l.isPacked&&f&&l.texture!=null&&c[2]%2!==0&&T(l.shape.slice(-3),c.slice(-3))){const y=c[0]*c[1]*(c[2]+1),$={dataId:t.dataId,shape:[1,y,n.inChannels],dtype:t.dtype},N=l.shape;l.shape=l.shape.slice(),l.shape[l.shape.length-2]++,v(rr(l.shape,$.shape),()=>`packed reshape ${l.shape} to ${$.shape} isn't free`);const R=O({inputs:{x:e},backend:s,attrs:{shape:[1,n.inChannels,n.outChannels]}});x.push(R);const k=mr({a:$,b:R,backend:s,transposeA:p,transposeB:g,bias:r,activation:a,preluActivationWeights:o,leakyreluAlpha:i}),B=s.texData.get(k.dataId);v(B.isPacked,()=>"batchMatMul result is expected to be packed"),l.shape=N,B.shape=n.outShape,m=je({inputs:{x:k},backend:s}),m.shape=n.outShape,x.push(k)}else{const y=n.outHeight*n.outWidth,$=O({inputs:{x:t},backend:s,attrs:{shape:f?[n.batchSize,y,n.inChannels]:[n.batchSize,n.inChannels,y]}}),N=O({inputs:{x:e},backend:s,attrs:{shape:[1,n.inChannels,n.outChannels]}}),R=mr({a:f?$:N,b:f?N:$,transposeA:!f,transposeB:g,backend:s,bias:r,activation:a,preluActivationWeights:o,leakyreluAlpha:i});m=O({inputs:{x:R},backend:s,attrs:{shape:n.outShape}}),x.push($),x.push(N),x.push(R)}for(const y of x)s.disposeIntermediateTensorInfo(y);return m}function Lu({x:t,filter:e,convInfo:n,backend:s,bias:r=null,preluActivationWeights:o=null,leakyreluAlpha:i=0,activation:a=null}){const{filterWidth:c,filterHeight:l,inChannels:u,outWidth:d,outHeight:h,dataFormat:f}=n,p=f==="channelsLast",g=c*l*u,m=h*d,x=[n.batchSize,g,m],b=!0,w=!1,y=[];if(o!=null){const ze=wr(o.shape,p);ze!=null&&(o=O({inputs:{x:o},backend:s,attrs:{shape:ze}}),y.push(o))}if(r!=null){const ze=wr(r.shape,p);ze!=null&&(r=O({inputs:{x:r},backend:s,attrs:{shape:ze}}),y.push(r))}const $=O({inputs:{x:e},backend:s,attrs:{shape:[1,g,D(e.shape)/g]}});y.push($);const N=new U1(x,n),R=[t.shape,[n.padInfo.top,n.padInfo.left],[n.strideHeight,n.strideWidth],[n.dilationHeight,n.dilationWidth],[n.inChannels],[n.filterWidth*n.inChannels],[n.outWidth]],k=s.runWebGLProgram(N,[t],"float32",R),B=O({inputs:{x:k},backend:s,attrs:{shape:x}});y.push(k),y.push(B);const U=r!=null,Q=o!=null,ie=a==="leakyrelu",Ye=a?os(a,!0):null,Fe=new Cu(p?B.shape:$.shape,p?$.shape:B.shape,p?[n.batchSize,m,n.outChannels]:[n.batchSize,n.outChannels,m],b,w,U,Ye,Q,ie),Oe=p?[B,$]:[$,B];if(r&&Oe.push(r),Q&&Oe.push(o),ie){const ze=s.makeTensorInfo([],"float32",rn(i,"float32"));Oe.push(ze),y.push(ze)}const ut=s.runWebGLProgram(Fe,Oe,"float32"),Ct=O({inputs:{x:ut},backend:s,attrs:{shape:n.outShape}});y.push(ut);for(const ze of y)s.disposeIntermediateTensorInfo(ze);return Ct}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function W1(t){const{inputs:e,backend:n,attrs:s}=t,{x:r,filter:o}=e,{strides:i,pad:a,dataFormat:c,dilations:l,dimRoundingMode:u}=s,d=yn(c),h=mt(r.shape,o.shape,i,l,a,u,!1,d);let f;if(h.filterHeight===1&&h.filterWidth===1&&h.dilationHeight===1&&h.dilationWidth===1&&h.strideHeight===1&&h.strideWidth===1&&(h.padInfo.type==="SAME"||h.padInfo.type==="VALID"))f=Pu({x:r,filter:o,convInfo:h,backend:n});else if(h.strideWidth<=2&&d==="channelsLast"&&S().getBool("WEBGL_EXP_CONV")){const g=new Ou(h),m=[[h.padInfo.top,h.padInfo.left],[h.strideHeight,h.strideWidth],[h.dilationHeight,h.dilationWidth],[h.inHeight,h.inWidth]];f=n.runWebGLProgram(g,[r,o],"float32",m)}else if(S().getBool("WEBGL_CONV_IM2COL"))f=Lu({x:r,filter:o,convInfo:h,backend:n});else{const g=new Fu(h);f=n.runWebGLProgram(g,[r,o],"float32")}const p=O({inputs:{x:f},backend:n,attrs:{shape:h.outShape}});return n.disposeIntermediateTensorInfo(f),p}const G1={kernelName:Gd,backendName:"webgl",kernelFunc:W1};/**
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
 */class z1{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const n=e.strideHeight,s=e.strideWidth,r=e.padInfo.top,o=e.padInfo.left,i=e.dataFormat==="channelsLast";this.userCode=`
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
    `}}class H1{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const n=e.filterHeight,s=e.filterWidth,r=e.strideHeight,o=e.strideWidth,i=e.dataFormat==="channelsLast",a=n-1-e.padInfo.top,c=s-1-e.padInfo.left,l=i?1:2,u=i?2:3,d=i?3:1;this.userCode=`
      const ivec2 pads = ivec2(${a}, ${c});

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
    `}}class X1{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const n=e.strideDepth,s=e.strideHeight,r=e.strideWidth,o=e.padInfo.front,i=e.padInfo.top,a=e.padInfo.left;this.userCode=`
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
                int xC = wC + yC * ${r} - ${a};

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
    `}}class q1{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const n=e.filterDepth,s=e.filterHeight,r=e.filterWidth,o=e.strideDepth,i=e.strideHeight,a=e.strideWidth,c=n-1-e.padInfo.front,l=s-1-e.padInfo.top,u=r-1-e.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${c}, ${l}, ${u});

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
              float dyC = float(dyCCorner + wC) / ${a}.0;

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
 */function K1(t){const{inputs:e,backend:n,attrs:s}=t,{x:r,dy:o}=e,{strides:i,pad:a,dataFormat:c,dimRoundingMode:l,filterShape:u}=s,d=yn(c),h=mt(r.shape,u,i,1,a,l,!1,d),f=new z1(h);return n.runWebGLProgram(f,[r,o],"float32")}const j1={kernelName:zd,backendName:"webgl",kernelFunc:K1};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Y1(t){const{inputs:e,backend:n,attrs:s}=t,{dy:r,filter:o}=e,{inputShape:i,strides:a,pad:c,dataFormat:l,dimRoundingMode:u}=s,d=yn(l),h=mt(i,o.shape,a,1,c,u,!1,d),f=new H1(h);return n.runWebGLProgram(f,[r,o],"float32")}const Q1={kernelName:Hd,backendName:"webgl",kernelFunc:Y1};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Z1(t){const{inputs:e,backend:n,attrs:s}=t,{x:r,filter:o}=e,{strides:i,pad:a,dilations:c}=s,l=jn(r.shape,o.shape,i,c,a),u=new V1(l);return n.runWebGLProgram(u,[r,o],"float32")}const J1={kernelName:Xd,backendName:"webgl",kernelFunc:Z1};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ev(t){const{inputs:e,backend:n,attrs:s}=t,{x:r,dy:o}=e,{strides:i,pad:a,filterShape:c}=s,l=jn(r.shape,c,i,1,a),u=new X1(l);return n.runWebGLProgram(u,[r,o],"float32")}const tv={kernelName:qd,backendName:"webgl",kernelFunc:ev};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nv(t){const{inputs:e,backend:n,attrs:s}=t,{dy:r,filter:o}=e,{pad:i,strides:a,inputShape:c}=s,l=jn(c,o.shape,a,1,i),u=new q1(l);return n.runWebGLProgram(u,[r,o],"float32")}const sv={kernelName:Kd,backendName:"webgl",kernelFunc:nv};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rv=An+`
  return cos(x);
`,ov=re({opSnippet:rv}),iv={kernelName:jd,backendName:"webgl",kernelFunc:ov};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const av=re({opSnippet:`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`}),cv={kernelName:Yd,backendName:"webgl",kernelFunc:av};/**
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
 */class lv{constructor(e,n,s,r,o){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];const[i,a,c,l]=e,[u]=n,[d,h]=s;this.outputShape=[u,d,h,l];const f=r==="bilinear"?1:0,[p,g]=[`${a-1}.0`,`${c-1}.0`],[m,x,b]=d>1?[`${(a-1)/(d-1)}`,"(y2-y1) * height_ratio",`y1*${p} + float(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${p}`],[w,y,$]=h>1?[`${(c-1)/(h-1)}`,"(x2-x1) * width_ratio",`x1*${g} + float(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${g}`];this.userCode=`
      const float height_ratio = float(${m});
      const float width_ratio = float(${w});
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
        float width_scale = ${y};

        float in_y = ${b};
        if( in_y < 0.0 || in_y > ${p} ) {
          setOutput(float(${o}));
          return;
        }
        float in_x = ${$};
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
 */const uv={kernelName:xi,backendName:"webgl",kernelFunc:t=>{const{inputs:e,backend:n,attrs:s}=t,{image:r,boxes:o,boxInd:i}=e,{cropSize:a,method:c,extrapolationValue:l}=s,u=new lv(r.shape,o.shape,a,c,l);return n.runWebGLProgram(u,[r,o,i],"float32")}};var ls;(function(t){t.Prod="*",t.Sum="+"})(ls||(ls={}));class Bu{constructor(e,n,s,r){this.op=e,this.outputShape=n,this.variableNames=["x"],this.customUniforms=[{name:"index",type:"float"}];const o=this.outputShape.length,i=this.op===ls.Prod?"1.0":"0.0",a=s?i:`getX(${Mu(o,"coords",this.op)})`,c=this.outputShape[this.outputShape.length-1];let l="",u="";s?(l=r?`end != ${c-1}`:"end != 0",u=r?"end + 1":"end - 1"):(l=r?`end + pow2 < ${c}`:"end >= pow2",u=r?"end + pow2":"end - pow2"),this.userCode=`
      void main() {
        ${ge(o)} coords = getOutputCoords();
        int end = ${Vu(o,"coords",this.op)};
        float val = ${a};
        int pow2 = int(pow(2.0, index));
        if (${l}) {
          int idx = ${u};
          ${Vu(o,"coords",this.op)} = idx;
          val ${this.op}= getX(${Mu(o,"coords",this.op)});
        }
        setOutput(val);
      }
    `}}function Mu(t,e,n){if(t===1)return`${e}`;if(t===2)return`${e}.x, ${e}.y`;if(t===3)return`${e}.x, ${e}.y, ${e}.z`;if(t===4)return`${e}.x, ${e}.y, ${e}.z, ${e}.w`;throw new Error(`Cumulative ${n} for rank ${t} is not yet supported`)}function Vu(t,e,n){if(t===1)return`${e}`;if(t===2)return`${e}.y`;if(t===3)return`${e}.z`;if(t===4)return`${e}.w`;throw new Error(`Cumulative ${n} for rank ${t} is not yet supported`)}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Uu(t,e,n,s,r,o){const i=e.shape.length,a=et([s],i);let c=e;a!=null&&(c=Ge({inputs:{x:e},backend:n,attrs:{perm:a}}));const l=tt(1,i)[0];if(l!==i-1)throw new Error(`WebGL cumprod shader expects an inner-most axis=${e.shape.length-1} but got axis=${s}`);const u=c.shape[l];let d=je({inputs:{x:c},backend:n});for(let h=0;h<=Math.ceil(Math.log2(u))-1;h++){const f=new Bu(t,c.shape,!1,o),p=[[h]],g=d;d=n.runWebGLProgram(f,[d],d.dtype,p),n.disposeIntermediateTensorInfo(g)}if(r){const h=new Bu(t,c.shape,r,o),f=d;d=n.runWebGLProgram(h,[d],d.dtype),n.disposeIntermediateTensorInfo(f)}if(a!=null){const h=vo(a),f=Ge({inputs:{x:d},backend:n,attrs:{perm:h}});return n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(c),f}return d}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dv(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{axis:o,exclusive:i,reverse:a}=s;return Uu(ls.Prod,r,n,o,i,a)}const hv={kernelName:Qd,backendName:"webgl",kernelFunc:dv};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fv(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{axis:o,exclusive:i,reverse:a}=s;return Uu(ls.Sum,r,n,o,i,a)}const pv={kernelName:Zd,backendName:"webgl",kernelFunc:fv};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gv(t){const{inputs:e,backend:n,attrs:s}=t,{x:r,weights:o}=e,{size:i,binaryOutput:a}=s;if(r.shape.length===1){const c=n.readSync(r.dataId),l=n.readSync(o.dataId),u=ou(c,l,o.dtype,o.shape,i);return n.makeTensorInfo([i],o.dtype,u)}else if(r.shape.length===2){const c=n.bufferSync(r),l=n.bufferSync(o),u=_C(c,l,i,a);return n.makeTensorInfo(u.shape,o.dtype,u.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${r.shape.length}.`)}const mv={kernelName:Jd,backendName:"webgl",kernelFunc:gv};/**
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
 */class xv{constructor(e,n,s){this.variableNames=["x"],this.outputShape=[],this.outputShape=e,this.blockSize=n,this.dataFormat=s,this.userCode=`
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
 */function bv(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{blockSize:o,dataFormat:i}=s,a=r.shape[0],c=i==="NHWC"?r.shape[1]:r.shape[2],l=i==="NHWC"?r.shape[2]:r.shape[3],u=i==="NHWC"?r.shape[3]:r.shape[1],d=c*o,h=l*o,f=u/(o*o),p=i==="NHWC"?[a,d,h,f]:[a,f,d,h],g=new xv(p,o,i);return n.runWebGLProgram(g,[r],r.dtype)}const Cv={kernelName:eh,backendName:"webgl",kernelFunc:bv};/**
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
 */class Wu{constructor(e,n=!1,s=null,r=!1,o=!1){this.variableNames=["x","W"],this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=Ue(this.outputShape.length);const i=e.filterHeight,a=e.filterWidth,c=e.outChannels/e.inChannels;let l="",u="";s&&(r?l=`float activation(float a) {
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
        int d1 = d2 / ${c};
        int q = d2 - d1 * ${c};

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

          for (int wC = 0; wC < ${a}; wC++) {
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
 */class Gu{constructor(e,n=!1,s=null,r=!1,o=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=Ue(this.outputShape.length);const i=e.outChannels/e.inChannels,a=e.padInfo.left,c=e.strideWidth,l=e.dilationWidth,u=e.filterHeight,d=e.filterWidth,h=d;let f=`
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
          `,c===1){if(b<d&&(a%2===1?(f+=`
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
                `,b+1<d)){const w=a%2===0?X(l):l;l%2===0&&a%2===1||l%2!==0&&a%2!==1?(f+=`
                  xCOffset = xC + imod(pads[1], 2) + ${w};

                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b+1}Ready == 0) {
                    xTexelC${b+1} = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      xTexelC${b+1}.zw = vec2(0.0);
                    }
                    xTexelC${b+1}Ready = 1;
                  }
                  `,l>1?f+=`
                    xCOffset -= 2;
                    if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);
                     xC${b+1} = vec4(previous.zw, xTexelC${b+1}.xy);
                    } else {
                     xC${b+1} = vec4(0.0, 0.0, xTexelC${b+1}.xy);
                    }
                    `:f+=`
                    xC${b+1} = vec4(xTexelC${b}.zw, xTexelC${b+1}.xy);
                    `):w===1?f+=`
                    xC${b+1} = xTexelC${b};
                    `:f+=`
                    xCOffset = xC + ${w};

                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b+1}Ready == 0) {
                      xTexelC${b+1} = getX(batch, xR, xCOffset, d1);
                      if (xCOffset + 1 >= inDims[1]) {
                        xTexelC${b+1}.zw = vec2(0.0);
                      }
                      xTexelC${b+1}Ready = 1;
                    }

                    xC${b+1} = xTexelC${b+1};
                    `}}else b<d&&(a%2===1?(f+=`
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
 */function wv(t){const{inputs:e,backend:n,attrs:s}=t,{x:r,filter:o}=e,{strides:i,pad:a,dilations:c,dimRoundingMode:l}=s;let u=c;u==null&&(u=[1,1]),v(wn(i,u),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${i} and dilations '${u}'`);const d=mt(r.shape,o.shape,i,u,a,l,!0);let h;S().getBool("WEBGL_PACK_DEPTHWISECONV")&&d.strideWidth<=2&&d.outChannels/d.inChannels===1?h=new Gu(d):h=new Wu(d);const f=[[d.padInfo.top,d.padInfo.left],[d.strideHeight,d.strideWidth],[d.dilationHeight,d.dilationWidth],[d.inHeight,d.inWidth]];return n.runWebGLProgram(h,[r,o],"float32",f)}const yv={kernelName:th,backendName:"webgl",kernelFunc:wv};/**
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
 */class vv{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const n=e.strideHeight,s=e.strideWidth,r=e.padInfo.top,o=e.padInfo.left,i=e.outChannels/e.inChannels;this.userCode=`
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
    `}}class $v{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const n=e.filterHeight,s=e.filterWidth,r=e.strideHeight,o=e.strideWidth,i=n-1-e.padInfo.top,a=s-1-e.padInfo.left,c=e.outChannels/e.inChannels;this.userCode=`
      const ivec2 pads = ivec2(${i}, ${a});

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
            for (int dm = 0; dm < ${c}; dm++) {
              int d2 = d1 * ${c} + dm;
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
 */function Iv(t){const{inputs:e,backend:n,attrs:s}=t,{x:r,dy:o}=e,{strides:i,dilations:a,pad:c,dimRoundingMode:l,filterShape:u}=s,d=mt(r.shape,u,i,a,c,l,!0),h=new vv(d);return n.runWebGLProgram(h,[r,o],"float32")}const Sv={kernelName:nh,backendName:"webgl",kernelFunc:Iv};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ev(t){const{inputs:e,backend:n,attrs:s}=t,{dy:r,filter:o}=e,{strides:i,dilations:a,pad:c,dimRoundingMode:l,inputShape:u}=s,d=mt(u,o.shape,i,a,c,l,!0),h=new $v(d);return n.runWebGLProgram(h,[r,o],"float32")}const Tv={kernelName:sh,backendName:"webgl",kernelFunc:Ev};/**
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
 */class Rv{constructor(e){this.variableNames=["X"],this.outputShape=[e,e],this.userCode=`
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
 */function kv(t){const{inputs:e,backend:n}=t,{x:s}=e,r=[...s.shape,...s.shape],o=D(s.shape),i=O({inputs:{x:s},backend:n,attrs:{shape:[o]}}),a=new Rv(o),c=n.runWebGLProgram(a,[i],i.dtype),l=O({inputs:{x:c},backend:n,attrs:{shape:r}});return n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(c),l}const Nv={kernelName:rh,backendName:"webgl",kernelFunc:kv};/**
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
 */class _v{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;const{inHeight:n,inWidth:s,padInfo:r,strideHeight:o,strideWidth:i,filterHeight:a,filterWidth:c,dilationHeight:l,dilationWidth:u}=e,{top:d,left:h}=r;this.userCode=`
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
        for (int h = 0; h < ${a}; h++) {
          int hIn = hBeg + h * ${l};

          if (hIn >= 0 && hIn < ${n}) {
            for (int w = 0; w < ${c}; w++) {
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
 */function Av(t){const{inputs:e,backend:n,attrs:s}=t,{x:r,filter:o}=e,{strides:i,pad:a,dilations:c}=s,l=Tc(r.shape,o.shape,i,a,"NHWC",c);let u;const d=new _v(l);u=n.runWebGLProgram(d,[r,o],"float32");const h=O({inputs:{x:u},backend:n,attrs:{shape:l.outShape}});return n.disposeIntermediateTensorInfo(u),h}const Dv={kernelName:oh,backendName:"webgl",kernelFunc:Av};/**
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
 */function Fv(t){const{inputs:e,backend:n,attrs:s}=t,{equation:r}=s,o=e,{allDims:i,summedDims:a,idDims:c}=qc(r,o.length);jc(i.length,c,o);const{path:l,steps:u}=Yc(a,c),d=u.length;let h=null,f=i.length;const p=[];for(let g=0;g<d;++g){for(const m of u[g]){const{permutationIndices:x,expandDims:b}=Kc(f,c[m]);let w;Qc(x)?w=o[m]:(w=Ge({inputs:{x:o[m]},backend:n,attrs:{perm:x}}),p.push(w));const y=w.shape.slice();for(let $=0;$<b.length;++$)y.splice(b[$],0,1);T(w.shape,y)||(w=O({inputs:{x:w},backend:n,attrs:{shape:y}}),p.push(w)),h===null?h=w:(h=Yo({inputs:{a:w,b:h},backend:n}),p.push(h))}g<d-1&&(l[g]>=0&&(h=gr({inputs:{x:h},backend:n,attrs:{axis:l[g]-(i.length-f),keepDims:!1}}),p.push(h)),f--)}for(const g of p)g!==h&&n.disposeIntermediateTensorInfo(g);return h}const Ov={kernelName:ih,backendName:"webgl",kernelFunc:Fv};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pv=re({opSnippet:"return (x >= 0.0) ? x : (exp(x) - 1.0);",packedOpSnippet:`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`}),Lv={kernelName:Ci,backendName:"webgl",kernelFunc:Pv};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Bv="return (b >= 1.0) ? a : a * (b + 1.0);",Mv=`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,Vv={kernelName:ah,backendName:"webgl",kernelFunc:t=>{const{inputs:e,backend:n}=t,{dy:s,y:r}=e,o=S().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new rs(Mv,s.shape,r.shape):new _n(Bv,s.shape,r.shape);return n.runWebGLProgram(o,[s,r],s.dtype)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Uv=De({opSnippet:"return float(a == b);",packedOpSnippet:`
  return vec4(equal(a, b));
`,dtype:"bool",cpuKernelImpl:OC}),Wv={kernelName:Dr,backendName:"webgl",kernelFunc:Uv};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gv=`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = ${Mc};
  float a1 = ${Vc};
  float a2 = ${Uc};
  float a3 = ${Wc};
  float a4 = ${Gc};
  float a5 = ${zc};

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`,zv=re({opSnippet:Gv}),Hv={kernelName:ch,backendName:"webgl",kernelFunc:zv};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xv=An+`
  return exp(x);
`,zu=re({opSnippet:Xv,packedOpSnippet:`
  vec4 result = exp(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,cpuKernelImpl:PC,dtype:"float32"}),qv={kernelName:ps,backendName:"webgl",kernelFunc:zu};/**
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
 */function ei(t){const{inputs:e,attrs:n,backend:s}=t,{dim:r}=n,{input:o}=e,i=o.shape.length,a=o.shape.slice();let c=r;return r<0&&(v(-(i+1)<=r,()=>`Axis must be in the interval [${-(i+1)}, ${i}]`),c=i+r+1),a.splice(c,0,1),O({inputs:{x:o},backend:s,attrs:{shape:a}})}const Kv={kernelName:wi,backendName:"webgl",kernelFunc:ei};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hu="return exp(x) - 1.0;",jv=re({opSnippet:Hu,packedOpSnippet:Hu,cpuKernelImpl:LC}),Yv={kernelName:Fr,backendName:"webgl",kernelFunc:jv};/**
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
 */class Xu{constructor(e,n,s){this.variableNames=["real","imag"];const r=n[1];this.outputShape=n;const o=s?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,i=s?`${r}.0`:"1.0";let a;if(e==="real")a="return real * expR - imag * expI;";else if(e==="imag")a="return real * expI + imag * expR;";else throw new Error(`FFT component must be either "real" or "imag", got ${e}.`);this.userCode=`
      const float exponentMultiplier = ${o};

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        ${a}
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
 */function qu(t,e,n){const s=n.texData.get(t.dataId),r=D(t.shape),o=t.shape[t.shape.length-1],i=r/o,a=O({inputs:{x:t},backend:n,attrs:{shape:[i,o]}}),c=a.shape,l=new Xu("real",c,e),u=new Xu("imag",c,e),d=[{dataId:s.complexTensorInfos.real.dataId,dtype:s.complexTensorInfos.real.dtype,shape:c},{dataId:s.complexTensorInfos.imag.dataId,dtype:s.complexTensorInfos.imag.dtype,shape:c}],h=n.runWebGLProgram(l,d,"float32"),f=n.runWebGLProgram(u,d,"float32"),p=Mt({inputs:{real:h,imag:f},backend:n});n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(f);const g=O({inputs:{x:p},backend:n,attrs:{shape:t.shape}});return n.disposeIntermediateTensorInfo(a),n.disposeIntermediateTensorInfo(p),g}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qv(t){const{inputs:e,backend:n}=t,{input:s}=e;return qu(s,!1,n)}const Zv={kernelName:yi,backendName:"webgl",kernelFunc:Qv};/**
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
 */class Jv{constructor(e,n){this.outputShape=[],this.customUniforms=[{name:"value",type:"float"}],this.variableNames=["x"],this.outputShape=e,this.userCode=`
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
 */function us(t){const{backend:e,attrs:n}=t,{shape:s,value:r}=n;let{dtype:o}=n;if(o=o||hs(r),o==="string"){const i=se(o,D(s));return i.fill(r),e.makeTensorInfo(s,o,i)}else{const i=new Jv(s,r),a=[[r]];return e.runWebGLProgram(i,[],o,a)}}const e$={kernelName:vi,backendName:"webgl",kernelFunc:us};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class t${constructor(e){this.variableNames=["Image"],this.outputShape=[];const n=e[2];this.outputShape=e,this.userCode=`
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
 */const n$={kernelName:$i,backendName:"webgl",kernelFunc:({inputs:t,backend:e})=>{const{image:n}=t,s=e,r=new t$(n.shape);return s.runWebGLProgram(r,[n],n.dtype)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ku="return floor(x);",s$=re({opSnippet:Ku,packedOpSnippet:Ku,cpuKernelImpl:BC}),r$={kernelName:Or,backendName:"webgl",kernelFunc:s$};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const o$=De({opSnippet:`
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
`,dtype:"int32"}),i$={kernelName:Ii,backendName:"webgl",kernelFunc:o$};/**
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
 */class a${constructor(e){this.variableNames=["A"];const n=Ve(),[s,r]=e;this.outputShape=e,this.userCode=`
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
 */class c${constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;const n=Ve(),[s,r]=e;this.outputShape=e,this.userCode=`
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
 */const l$={kernelName:Zh,backendName:"webgl",kernelFunc:u$};let Fn,ti=S().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");function u$(t){const{inputs:e,backend:n,attrs:s}=t;let{pixels:r}=e;const{numChannels:o}=s,i=typeof HTMLVideoElement<"u"&&r instanceof HTMLVideoElement,a=typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement,[c,l]=i?[r.videoWidth,r.videoHeight]:[r.width,r.height],u=[l,c],d=[l,c,o];if(a||i){const g=S().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");(Fn==null||g!==ti)&&(ti=g,Fn=document.createElement("canvas").getContext("2d",{willReadFrequently:ti})),Fn.canvas.width=c,Fn.canvas.height=l,Fn.drawImage(r,0,0,c,l),r=Fn.canvas}const h=n.makeTensorInfo(u,"int32");n.texData.get(h.dataId).usage=nt.PIXELS,n.gpgpu.uploadPixelDataToTexture(n.getTexture(h.dataId),r);const f=S().getBool("WEBGL_PACK")?new c$(d):new a$(d),p=n.runWebGLProgram(f,[h],"int32");return n.disposeData(h.dataId),p}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function d$(t){const{inputs:e,backend:n,attrs:s}=t,{x:r,filter:o,bias:i,preluActivationWeights:a}=e,{strides:c,pad:l,dataFormat:u,dilations:d,dimRoundingMode:h,activation:f,leakyreluAlpha:p}=s,g=yn(u),m=mt(r.shape,o.shape,c,d,l,h,!1,g);let x;const b=[],w=i!=null,y=a!=null,$=f==="leakyrelu",N=()=>{const k=[r,o],B=(U,Q)=>{if(Q==="NCHW"&&U.shape.length===1&&U.shape[0]!==1){const ie=O({inputs:{x:U},backend:n,attrs:{shape:[U.shape[0],1,1]}});return b.push(ie),ie}return U};if(w&&k.push(B(i,u)),y&&k.push(B(a,u)),$){const U=n.makeTensorInfo([],"float32",rn(p,"float32"));k.push(U),b.push(U)}return k};if(m.filterHeight===1&&m.filterWidth===1&&m.dilationHeight===1&&m.dilationWidth===1&&m.strideHeight===1&&m.strideWidth===1&&(m.padInfo.type==="SAME"||m.padInfo.type==="VALID"))x=Pu({x:r,filter:o,convInfo:m,backend:n,bias:i,activation:f,preluActivationWeights:a,leakyreluAlpha:p});else if(m.strideWidth<=2&&g==="channelsLast"&&S().getBool("WEBGL_EXP_CONV")){const k=f?os(f,!0):null,B=new Ou(m,w,k,y,$),U=[[m.padInfo.top,m.padInfo.left],[m.strideHeight,m.strideWidth],[m.dilationHeight,m.dilationWidth],[m.inHeight,m.inWidth]],Q=N();x=n.runWebGLProgram(B,Q,"float32",U)}else if(S().getBool("WEBGL_CONV_IM2COL"))x=Lu({x:r,filter:o,convInfo:m,backend:n,bias:i,activation:f,preluActivationWeights:a,leakyreluAlpha:p});else{const k=f?os(f,!1):null,B=new Fu(m,w,k,y,$),U=N();x=n.runWebGLProgram(B,U,"float32")}const R=O({inputs:{x},backend:n,attrs:{shape:m.outShape}});return b.push(x),b.forEach(k=>n.disposeIntermediateTensorInfo(k)),R}const h$={kernelName:ef,backendName:"webgl",kernelFunc:d$};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function f$(t){const{inputs:e,backend:n,attrs:s}=t,{x:r,filter:o,bias:i,preluActivationWeights:a}=e,{strides:c,pad:l,dilations:u,dimRoundingMode:d,activation:h,leakyreluAlpha:f}=s,p=[];let g=u;g==null&&(g=[1,1]),v(wn(c,g),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${c} and dilations '${g}'`);const m=mt(r.shape,o.shape,c,g,l,d,!0),x=S().getBool("WEBGL_PACK_DEPTHWISECONV")&&m.strideWidth<=2&&m.outChannels/m.inChannels===1,b=h?os(h,x):null,w=[r,o],y=i!=null,$=a!=null,N=h==="leakyrelu";if(y&&w.push(i),$&&w.push(a),N){const U=n.makeTensorInfo([],"float32",rn(f,"float32"));w.push(U),p.push(U)}let R;x?R=new Gu(m,y,b,$,N):R=new Wu(m,y,b,$,N);const k=[[m.padInfo.top,m.padInfo.left],[m.strideHeight,m.strideWidth],[m.dilationHeight,m.dilationWidth],[m.inHeight,m.inWidth]],B=n.runWebGLProgram(R,w,"float32",k);return p.forEach(U=>n.disposeIntermediateTensorInfo(U)),B}const p$={kernelName:tf,backendName:"webgl",kernelFunc:f$};class g${constructor(e,n,s,r){this.sliceDim=e,this.strides=n,this.paramsShape=r,this.variableNames=["x","indices"],this.outputShape=s;const o=ge(n.length),i=ge(s.length),a=this.sliceDim>1?"strides[j]":"strides",c=ge(r.length),l=r.length>1?"paramsShape[j]":"paramsShape";this.userCode=`
        ${o} strides = ${o}(${this.strides});
        ${c} paramsShape = ${c}(${this.paramsShape});
         void main() {
          ${i} coords = getOutputCoords();
          int flattenIndex = 0;
          bool out_of_bounds = false;
          for (int j = 0; j < ${this.sliceDim}; j++) {
            int index = round(getIndices(coords[0], j));
            out_of_bounds = out_of_bounds || index < 0;
            out_of_bounds = out_of_bounds || index >= ${l};
            flattenIndex += index * ${a};
          }
          setOutput(out_of_bounds ? 0.0 : getX(flattenIndex, coords[1]));
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
 */function m$(t){const{inputs:e,backend:n}=t,{params:s,indices:r}=e,o=r.shape,i=o[o.length-1],a=D(s.shape),[c,l,u,d]=Oc(s,r),h=O({inputs:{x:r},backend:n,attrs:{shape:[l,i]}}),f=O({inputs:{x:s},backend:n,attrs:{shape:[D(s.shape)/u,u]}});if(n.shouldExecuteOnCPU([s,r])||s.dtype==="string"){const x=n.readSync(r.dataId),b=n.bufferSync(s),w=MC(x,b,s.dtype,l,i,u,d,s.shape,a);return n.makeTensorInfo(c,s.dtype,w.values)}const p=new g$(i,d,[l,u],s.shape),g=n.runWebGLProgram(p,[f,h],f.dtype),m=O({inputs:{x:g},backend:n,attrs:{shape:c}});return n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(g),m}const x$={kernelName:dh,backendName:"webgl",kernelFunc:m$};/**
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
 */class b${constructor(e,n){this.variableNames=["A","indices"],this.outputShape=n,this.rank=n.length;const s=ge(this.rank),r=C$(e,2);this.userCode=`
      void main() {
        ${s} resRC = getOutputCoords();
        int index = int(getIndices(resRC.x, resRC.z));
        float inBounds = (index >= 0) && (index < ${e[2]}) ? 1.0 : 0.0;
        setOutput(inBounds * getA(${r}));
      }
    `}}function C$(t,e){const n=["resRC.x","resRC.y","resRC.z","resRC.w"],s=[];for(let r=0;r<t.length;r++)r===2?s.push("index"):s.push(`${n[r]}`);return s.join()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ju(t){const{inputs:e,backend:n,attrs:s}=t,{x:r,indices:o}=e,{axis:i,batchDims:a}=s,c=oe(i,r.shape)[0];if(S().get("DEBUG")){const b=n.readSync(o.dataId),w=r.shape[c];for(let y=0;y<b.length;++y){const $=b[y];v($<=w-1&&$>=0,()=>`GatherV2: the index value ${$} is not in [0, ${w-1}]`)}}const l=hl(r,o,c,a),u=D(o.shape),d=[],h=O({inputs:{x:r},backend:n,attrs:{shape:[l.batchSize,l.outerSize,l.dimSize,l.sliceSize]}}),f=O({inputs:{x:o},backend:n,attrs:{shape:[l.batchSize,u/l.batchSize]}});d.push(h),d.push(f);const p=[l.batchSize,l.outerSize,u/l.batchSize,l.sliceSize];if(n.shouldExecuteOnCPU([r,o])||r.dtype==="string"){const b=n.bufferSync(f),w=n.bufferSync(h),y=VC(w,b,p);return d.forEach($=>n.disposeIntermediateTensorInfo($)),n.makeTensorInfo(l.outputShape,y.dtype,y.values)}const g=new b$(h.shape,p),m=n.runWebGLProgram(g,[h,f],h.dtype);d.push(m);const x=O({inputs:{x:m},backend:n,attrs:{shape:l.outputShape}});return d.forEach(b=>n.disposeIntermediateTensorInfo(b)),x}const w$={kernelName:uh,backendName:"webgl",kernelFunc:ju};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const y$=De({opSnippet:"return float(a > b);",packedOpSnippet:`
  return vec4(greaterThan(a, b));
`,cpuKernelImpl:UC,dtype:"bool"}),v$={kernelName:gs,backendName:"webgl",kernelFunc:y$};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $$=De({opSnippet:"return float(a >= b);",packedOpSnippet:`
  return vec4(greaterThanEqual(a, b));
`,dtype:"bool",cpuKernelImpl:WC}),I$={kernelName:ms,backendName:"webgl",kernelFunc:$$};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function S$(t){const{inputs:e,backend:n}=t,{input:s}=e;return qu(s,!0,n)}const E$={kernelName:Si,backendName:"webgl",kernelFunc:S$};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const T$=re({opSnippet:"return float(!isnan(x) && !isinf(x));",dtype:"bool"}),R$={kernelName:hh,backendName:"webgl",kernelFunc:T$};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const k$=re({opSnippet:"return float(isinf(x));",dtype:"bool"}),N$={kernelName:fh,backendName:"webgl",kernelFunc:k$};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _$=re({opSnippet:"return float(isnan(x));",dtype:"bool"}),A$={kernelName:ph,backendName:"webgl",kernelFunc:_$};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const D$=De({opSnippet:"return float(a < b);",packedOpSnippet:`
  return vec4(lessThan(a, b));
`,cpuKernelImpl:GC,dtype:"bool"}),F$={kernelName:Pr,backendName:"webgl",kernelFunc:D$};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const O$=De({opSnippet:"return float(a <= b);",packedOpSnippet:`
  return vec4(lessThanEqual(a, b));
`,cpuKernelImpl:zC,dtype:"bool"}),P$={kernelName:bs,backendName:"webgl",kernelFunc:O$};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function L$(t){const{backend:e,attrs:n}=t,{start:s,stop:r,num:o}=n,i=HC(s,r,o);return e.makeTensorInfo([i.length],"float32",i)}const B$={kernelName:gh,backendName:"webgl",kernelFunc:L$};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const M$=An+`
  return x < 0.0 ? 0./0. : log(x);
`,V$=re({opSnippet:M$,packedOpSnippet:`
  vec4 result = log(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);
  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);
  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);
  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);
  return result;
`,cpuKernelImpl:XC}),U$={kernelName:Cs,backendName:"webgl",kernelFunc:V$};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const W$=An+`
  return log(1.0 + x);
`,G$=re({opSnippet:W$}),z$={kernelName:Ri,backendName:"webgl",kernelFunc:G$};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const H$=De({opSnippet:"return float(a >= 1.0 && b >= 1.0);",packedOpSnippet:`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,dtype:"bool"}),X$={kernelName:ki,backendName:"webgl",kernelFunc:H$};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const q$=re({opSnippet:"return float(!(x >= 1.0));"}),K$={kernelName:mh,backendName:"webgl",kernelFunc:q$};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const j$=De({opSnippet:"return float(a >= 1.0 || b >= 1.0);",packedOpSnippet:`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,dtype:"bool"}),Y$={kernelName:xh,backendName:"webgl",kernelFunc:j$};/**
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
 */class Q${constructor(e,n,s,r,o){this.variableNames=["x"],this.outputShape=[];const i=n,a=e[3]-1;this.outputShape=e;let c;const l=`float(${s}) + float(${r}) * sum`;o===.5?c=`inversesqrt(${l})`:o===1?c=`1.0/(${l})`:c=`exp(log(${l}) * float(-${o}));`,this.userCode=`
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
          if (idx >= 0 && idx <=  ${a}) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * ${c};
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
 */class Z${constructor(e,n,s,r,o){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;const i=n,a=e[3]-1;this.outputShape=e;let c;const l=`float(${s}) + float(${r}) * sum`;o===.5?c=`inversesqrt(${l})`:o===1?c=`1.0/(${l})`:c=`exp(log(${l}) * float(-${o}));`,this.userCode=`
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
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(${a}));

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
        vec4 result = xAtOutputCoords * ${c};
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
 */const J$={kernelName:bh,backendName:"webgl",kernelFunc:t=>{const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{depthRadius:o,bias:i,alpha:a,beta:c}=s,l=S().getBool("WEBGL_PACK_NORMALIZATION")?new Z$(r.shape,o,i,a,c):new Q$(r.shape,o,i,a,c);return n.runWebGLProgram(l,[r],r.dtype)}};/**
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
 */class eI{constructor(e,n,s,r,o){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=e,this.depth=e[3],this.depthRadius=n,this.bias=s,this.alpha=r,this.beta=o,this.userCode=`
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
 */const tI={kernelName:Ch,backendName:"webgl",kernelFunc:t=>{const{inputs:e,backend:n,attrs:s}=t,{x:r,y:o,dy:i}=e,{depthRadius:a,bias:c,alpha:l,beta:u}=s,d=new eI(r.shape,a,c,l,u);return n.runWebGLProgram(d,[r,o,i],r.dtype)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nI(t,e,n,s){const r=D(e),i=D(t.shape)/r,a=O({inputs:{x:t},attrs:{shape:[i,r]},backend:s}),c=tn(a,t.dtype,"max",s),l=O({inputs:{x:c},attrs:{shape:n},backend:s});return s.disposeIntermediateTensorInfo(a),s.disposeIntermediateTensorInfo(c),l}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yu(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{reductionIndices:o,keepDims:i}=s,a=r.shape.length,c=oe(o,r.shape);let l=c;const u=et(l,a),d=u!=null,h=n.shouldExecuteOnCPU([r]);let f=r;if(d){if(h){const w=n.texData.get(f.dataId).values,y=new Array(a);for(let R=0;R<y.length;R++)y[R]=r.shape[u[R]];const $=jo(w,r.shape,r.dtype,u,y);f=n.makeTensorInfo(y,r.dtype);const N=n.texData.get(f.dataId);N.values=$}else f=pr(r,u,n);l=tt(l.length,a)}gt("max",l,a);const[p,g]=St(f.shape,l);let m=p;i&&(m=Je(p,c));let x;if(h){const w=n.texData.get(f.dataId).values,y=qC(w,D(g),m,r.dtype);x=n.makeTensorInfo(m,r.dtype);const $=n.texData.get(x.dataId);$.values=y}else x=nI(f,g,m,n);return d&&n.disposeIntermediateTensorInfo(f),x}const sI={kernelName:Ni,backendName:"webgl",kernelFunc:Yu};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rI=pu+`
  return max(a, b);
`,oI=`
  vec4 result = vec4(max(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  `+fr+`
  return result;
`,iI=De({opSnippet:rI,packedOpSnippet:oI,cpuKernelImpl:KC}),aI={kernelName:Lr,backendName:"webgl",kernelFunc:iI};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cI(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e;Jn(r,"maxPool");const{filterSize:o,strides:i,pad:a,dimRoundingMode:c}=s,l=1;v(wn(i,l),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${l}'`);const u=bn(r.shape,o,i,l,a,c);if(u.filterWidth===1&&u.filterHeight===1&&T(u.inShape,u.outShape))return je({inputs:{x:r},backend:n});const d=new is(u,"max",!1);return n.runWebGLProgram(d,[r],r.dtype)}const lI={kernelName:wh,backendName:"webgl",kernelFunc:cI};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uI(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{filterSize:o,strides:i,pad:a,dataFormat:c,dimRoundingMode:l}=s,u=[1,1,1],d=Kn(r.shape,o,i,u,a,l,c),h=new Qo(d,"max",!1);return n.runWebGLProgram(h,[r],r.dtype)}const dI={kernelName:vh,backendName:"webgl",kernelFunc:uI};/**
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
 */class hI{constructor(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;const n=e.strideHeight,s=e.strideWidth,r=e.dilationHeight,o=e.effectiveFilterHeight,i=e.effectiveFilterWidth,a=o-1-e.padInfo.top,c=i-1-e.padInfo.left,l=o*i-1;this.userCode=`
      const ivec2 pads = ivec2(${a}, ${c});

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
    `}}class fI{constructor(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;const n=e.strideDepth,s=e.strideHeight,r=e.strideWidth,o=e.dilationDepth,i=e.dilationHeight,a=e.dilationWidth,c=e.effectiveFilterDepth,l=e.effectiveFilterHeight,u=e.effectiveFilterWidth,d=c-1-e.padInfo.front,h=l-1-e.padInfo.top,f=u-1-e.padInfo.left,p=c*l*u-1;this.userCode=`
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

        for (int wD = 0; wD < ${c};
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
                wC += ${a}) {
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
 */function pI(t){const{inputs:e,backend:n,attrs:s}=t,{dy:r,input:o}=e,i=o,{filterSize:a,strides:c,pad:l,dimRoundingMode:u}=s,d=[1,1,1],h=Kn(i.shape,a,c,d,l,u),f=new Qo(h,"max",!0),p=n.runWebGLProgram(f,[i],i.dtype),g=new fI(h),m=n.runWebGLProgram(g,[r,p],i.dtype);return n.disposeIntermediateTensorInfo(p),m}const gI={kernelName:$h,backendName:"webgl",kernelFunc:pI};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mI(t){const{inputs:e,backend:n,attrs:s}=t,{dy:r,input:o,output:i}=e,a=o;Jn([o,i],"maxPoolGrad");const{filterSize:c,strides:l,pad:u,dimRoundingMode:d}=s,h=bn(a.shape,c,l,1,u,d),f=!0,p=new is(h,"max",f),g=n.runWebGLProgram(p,[a],a.dtype),m=new hI(h),x=n.runWebGLProgram(m,[r,g],a.dtype);return n.disposeIntermediateTensorInfo(g),x}const xI={kernelName:yh,backendName:"webgl",kernelFunc:mI};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bI(t,e,n,s){let r=new is(n,"max",!1);const o=s.runWebGLProgram(r,[t],"float32");r=new is(n,"max",!0,!0,e);const i=s.runWebGLProgram(r,[t],"float32");return[o,i]}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const CI={kernelName:Ih,backendName:"webgl",kernelFunc:({inputs:t,attrs:e,backend:n})=>{const{x:s}=t,{filterSize:r,strides:o,pad:i,includeBatchInIndex:a}=e,c=n;v(s.shape.length===4,()=>`Error in maxPool: input must be rank 4 but got rank ${s.shape.length}.`);const l=[1,1];v(wn(o,l),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${o} and dilations '${l}'`);const u=bn(s.shape,r,o,l,i),[d,h]=bI(s,a,u,c);return[d,h]}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wI(t,e,n,s){const r=D(e),i=D(t.shape)/r,a=O({inputs:{x:t},attrs:{shape:[i,r]},backend:s}),c=tn(a,"float32","mean",s),l=O({inputs:{x:c},attrs:{shape:n},backend:s});return s.disposeIntermediateTensorInfo(a),s.disposeIntermediateTensorInfo(c),l}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yI={kernelName:_i,backendName:"webgl",kernelFunc:({inputs:t,attrs:e,backend:n})=>{const{x:s}=t,{keepDims:r,axis:o}=e,i=n,a=s.shape.length,c=oe(o,s.shape);let l=c;const u=et(l,a),d=u!=null,h=i.shouldExecuteOnCPU([s]),f=[];let p=s;if(d){if(h){const y=i.texData.get(p.dataId).values,$=new Array(a);for(let k=0;k<$.length;k++)$[k]=s.shape[u[k]];const N=jo(y,s.shape,s.dtype,u,$);p=i.makeTensorInfo($,s.dtype);const R=i.texData.get(p.dataId);R.values=N}else p=pr(s,u,i);f.push(p),l=tt(l.length,a)}gt("sum",l,a);const[g,m]=St(p.shape,l);let x=g;r&&(x=Je(g,c));const b=wI(p,m,x,i);for(const w of f)i.disposeIntermediateTensorInfo(w);return b}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vI(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{axis:o,keepDims:i}=s,a=r.shape.length,c=oe(o,r.shape);let l=c;const u=et(l,a);let d=r;u!=null&&(d=Ge({inputs:{x:r},backend:n,attrs:{perm:u}}),l=tt(l.length,r.shape.length)),gt("min",l,a);const[h,f]=St(d.shape,l),p=D(f),g=O({inputs:{x:d},backend:n,attrs:{shape:[-1,p]}}),m=tn(g,g.dtype,"min",n);let x;if(i){const b=Je(h,c);x=O({inputs:{x:m},backend:n,attrs:{shape:b}})}else x=O({inputs:{x:m},backend:n,attrs:{shape:h}});return n.disposeIntermediateTensorInfo(g),n.disposeIntermediateTensorInfo(m),u!=null&&n.disposeIntermediateTensorInfo(d),x}const $I={kernelName:Ai,backendName:"webgl",kernelFunc:vI};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const II=pu+`
  return min(a, b);
`,SI=`
  vec4 result = vec4(min(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  `+fr+`
  return result;
`,EI=De({opSnippet:II,packedOpSnippet:SI,cpuKernelImpl:jC}),TI={kernelName:ws,backendName:"webgl",kernelFunc:EI};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class RI{constructor(e,n,s){this.variableNames=["x"],this.outputShape=n.map((u,d)=>u[0]+e[d]+u[1]);const r=e.length,o=ge(r),i=n.map(u=>u[0]).join(","),a=n.map((u,d)=>u[0]+e[d]).join(","),c=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,r),l=s==="reflect"?0:1;if(r===1){this.userCode=`
        int start = ${i};
        int end = ${a};

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
      ${o} end = ${o}(${a});

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
 */class kI{constructor(e,n,s){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n.map((p,g)=>p[0]+e[g]+p[1]);const r=e.length,o=ge(r),i=n.map(p=>p[0]).join(","),a=n.map((p,g)=>p[0]+e[g]).join(","),c=We("rc",r),l=We("source",r),u=`${c[r-1]} < ${this.outputShape[r-1]}`,d=r===1?"source":`vec2(${l.slice(-2).join()})`,h=s==="reflect"?0:1;let f="";if(r===1){const p=`
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
        ${c[r-1]} += 1;
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
        ${c[r-1]} += 1;
        if(${u}) {
          ${p}
          result[1] = getChannel(getX(${l.join()}), ${d});
        }
        rc = outputLoc;
        ${c[r-2]} += 1;
        if(${c[r-2]} < ${this.outputShape[r-2]}) {
          ${p}
          result[2] = getChannel(getX(${l.join()}), ${d});
          ${c[r-1]} += 1;
          if(${u}) {
            ${p}
            result[3] = getChannel(getX(${l.join()}), ${d});
          }
        }
      `}this.userCode=`
      const ${o} start = ${o}(${i});
      const ${o} end = ${o}(${a});

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
 */const NI={kernelName:Sh,backendName:"webgl",kernelFunc:({inputs:t,backend:e,attrs:n})=>{const{x:s}=t,{paddings:r,mode:o}=n,i=S().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new kI(s.shape,r,o):new RI(s.shape,r,o);return e.runWebGLProgram(i,[s],s.dtype)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _I=`if (b == 0.0) return NAN;
  return mod(a, b);`,AI=`
  vec4 result = mod(a, b);
  vec4 isNaN = vec4(equal(b, vec4(0.0)));
  `+fr+`
  return result;
`,DI=De({opSnippet:_I,packedOpSnippet:AI}),FI={kernelName:Eh,backendName:"webgl",kernelFunc:DI};/**
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
 */class OI{constructor(e,n,s){this.variableNames=["probs"],this.customUniforms=[{name:"seed",type:"float"}],this.outputShape=[e,s],this.userCode=`
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
 */const Qu=De({opSnippet:`
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
`,checkOutOfBounds:!0}),PI={kernelName:bi,backendName:"webgl",kernelFunc:Qu};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zu="return a - b;",Ju=De({opSnippet:Zu,packedOpSnippet:Zu,supportsComplex:!0,cpuKernelImpl:fw}),LI={kernelName:Es,backendName:"webgl",kernelFunc:Ju};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ed(t){const{inputs:e,backend:n,attrs:s}=t,{logits:r}=e,{dim:o}=s,i=oe([o],r.shape),a=Yu({inputs:{x:r},backend:n,attrs:{reductionIndices:i,keepDims:!1}}),c=Je(a.shape,i),l=O({inputs:{x:a},backend:n,attrs:{shape:c}}),u=Ju({inputs:{a:r,b:l},backend:n}),d=zu({inputs:{x:u},backend:n}),h=gr({inputs:{x:d},backend:n,attrs:{axis:i,keepDims:!1}}),f=O({inputs:{x:h},backend:n,attrs:{shape:c}}),p=Qu({inputs:{a:d,b:f},backend:n});return n.disposeIntermediateTensorInfo(a),n.disposeIntermediateTensorInfo(l),n.disposeIntermediateTensorInfo(u),n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(f),p}const BI={kernelName:Gh,backendName:"webgl",kernelFunc:ed};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function MI(t){const{inputs:e,backend:n,attrs:s}=t,{logits:r}=e,{numSamples:o,seed:i,normalized:a}=s,c=a?r:ed({inputs:{logits:r},backend:n,attrs:{dim:r.shape.length-1}}),l=c.shape[0],u=c.shape[1],d=new OI(l,u,o),h=[[i]],f=n.runWebGLProgram(d,[c],"int32",h);return a||n.disposeIntermediateTensorInfo(c),f}const VI={kernelName:Th,backendName:"webgl",kernelFunc:MI};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const UI=rt+`
  return -x;
`,WI=`
  vec4 result = -x;
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;function GI(t){const{inputs:e,backend:n}=t,{x:s}=e;if(n.shouldExecuteOnCPU([s])){const o=n.texData.get(s.dataId),[i,a]=QC(o.values,s.shape,s.dtype);return n.makeTensorInfo(a,s.dtype,i)}let r;return S().getBool("WEBGL_PACK_UNARY_OPERATIONS")?r=new en(s.shape,WI):r=new Nt(s.shape,UI),n.runWebGLProgram(r,[s],s.dtype)}const zI={kernelName:Br,backendName:"webgl",kernelFunc:GI};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const HI=dc;function XI(t){dt("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:e,backend:n,attrs:s}=t,{boxes:r,scores:o}=e,{maxOutputSize:i,iouThreshold:a,scoreThreshold:c}=s,l=n.readSync(r.dataId),u=n.readSync(o.dataId),{selectedIndices:d}=HI(l,u,i,a,c);return n.makeTensorInfo([d.length],"int32",new Int32Array(d))}const qI={kernelName:Di,backendName:"webgl",kernelFunc:XI};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const KI=hc;function jI(t){dt("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:e,backend:n,attrs:s}=t,{boxes:r,scores:o}=e,{maxOutputSize:i,iouThreshold:a,scoreThreshold:c,padToMaxOutputSize:l}=s,u=n.readSync(r.dataId),d=n.readSync(o.dataId),{selectedIndices:h,validOutputs:f}=KI(u,d,i,a,c,l);return[n.makeTensorInfo([h.length],"int32",new Int32Array(h)),n.makeTensorInfo([],"int32",new Int32Array([f]))]}const YI={kernelName:Fi,backendName:"webgl",kernelFunc:jI};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const QI=fc;function ZI(t){dt("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:e,backend:n,attrs:s}=t,{boxes:r,scores:o}=e,{maxOutputSize:i,iouThreshold:a,scoreThreshold:c,softNmsSigma:l}=s,u=n.readSync(r.dataId),d=n.readSync(o.dataId),h=i,f=a,p=c,g=l,{selectedIndices:m,selectedScores:x}=QI(u,d,h,f,p,g);return[n.makeTensorInfo([m.length],"int32",new Int32Array(m)),n.makeTensorInfo([x.length],"float32",new Float32Array(x))]}const JI={kernelName:Oi,backendName:"webgl",kernelFunc:ZI};/**
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
 */class eS{constructor(e,n,s,r){this.variableNames=["indices"],this.outputShape=[e,n],this.userCode=`
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
 */const tS={kernelName:kh,backendName:"webgl",kernelFunc:t=>{const{inputs:e,backend:n,attrs:s}=t,{indices:r}=e,{dtype:o,depth:i,onValue:a,offValue:c}=s,l=D(r.shape),u=new eS(l,i,a,c),d=O({inputs:{x:r},backend:n,attrs:{shape:[l]}}),h=n.runWebGLProgram(u,[d],o);n.disposeIntermediateTensorInfo(d);const f=[...r.shape,i],p=O({inputs:{x:h},backend:n,attrs:{shape:f}});return n.disposeIntermediateTensorInfo(h),p}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yr(t){const{inputs:e,backend:n}=t,{x:s}=e;if(s.dtype==="complex64"){const r=as({inputs:{input:s},backend:n}),o=yr({inputs:{x:r},backend:n}),i=Cr({inputs:{input:s},backend:n}),a=yr({inputs:{x:i},backend:n}),c=Mt({inputs:{real:o,imag:a},backend:n});return n.disposeIntermediateTensorInfo(r),n.disposeIntermediateTensorInfo(o),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(a),c}else return us({attrs:{shape:s.shape,dtype:s.dtype,value:s.dtype==="string"?"":0},backend:n})}const nS={kernelName:ia,backendName:"webgl",kernelFunc:yr};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function td(t){const{inputs:e,backend:n}=t,{x:s}=e;if(s.dtype==="string")throw new Error("onesLike is not supported under string dtype");if(s.dtype==="complex64"){const r=as({inputs:{input:s},backend:n}),o=td({inputs:{x:r},backend:n}),i=Cr({inputs:{input:s},backend:n}),a=yr({inputs:{x:i},backend:n}),c=Mt({inputs:{real:o,imag:a},backend:n});return n.disposeIntermediateTensorInfo(r),n.disposeIntermediateTensorInfo(o),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(a),c}else return us({attrs:{shape:s.shape,dtype:s.dtype,value:1},backend:n})}const sS={kernelName:Rh,backendName:"webgl",kernelFunc:td};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rS(t){const{inputs:e,backend:n,attrs:s}=t,{axis:r}=s;if(e.length===1)return ei({inputs:{input:e[0]},backend:n,attrs:{dim:r}});const o=e[0].shape,i=e[0].dtype;e.forEach(u=>{ne(o,u.shape,"All tensors passed to stack must have matching shapes"),v(i===u.dtype,()=>"All tensors passed to stack must have matching dtypes")});const a=[],c=e.map(u=>{const d=ei({inputs:{input:u},backend:n,attrs:{dim:r}});return a.push(d),d}),l=Du({inputs:c,backend:n,attrs:{axis:r}});return a.forEach(u=>n.disposeIntermediateTensorInfo(u)),l}const oS={kernelName:Pi,backendName:"webgl",kernelFunc:rS};/**
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
 */class iS{constructor(e,n,s){this.variableNames=["x"],this.customUniforms=[{name:"value",type:"float"}],this.outputShape=n.map((l,u)=>l[0]+e[u]+l[1]);const r=e.length,o=ge(r),i=n.map(l=>l[0]).join(","),a=n.map((l,u)=>l[0]+e[u]).join(","),c=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,r);if(r===1){this.userCode=`
        int start = ${i};
        int end = ${a};

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
      ${o} end = ${o}(${a});

      void main() {
        ${o} outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(value);
        } else {
          ${o} coords = outC - start;
          setOutput(getX(${c}));
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
 */class aS{constructor(e,n,s){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"value",type:"float"}],this.outputShape=n.map((g,m)=>g[0]+e[m]+g[1]);const r=e.length,o=ge(r),i=n.map(g=>g[0]).join(","),a=n.map((g,m)=>g[0]+e[m]).join(","),c=We("rc",r),l=We("source",r),u=`${c[r-1]} < ${this.outputShape[r-1]}`,d=r===1?"source":`vec2(${l.slice(-2).join()})`,h=[`${o} rc = outputLoc;`,`${c[r-1]} += 1;
       if(${u}) {
      `,r===1?"":`}
       rc = outputLoc;
       ${c[r-2]} += 1;
       if(${c[r-2]} < ${this.outputShape[r-2]}) {`,r===1?"":`  ${c[r-1]} += 1;
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
      const ${o} end = ${o}(${a});

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
 */const nd=t=>{const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{paddings:o,constantValue:i}=s;if(D(r.shape)===0){const l=o.map((u,d)=>u[0]+r.shape[d]+u[1]);return us({backend:n,attrs:{shape:l,value:i,dtype:r.dtype}})}const a=S().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new aS(r.shape,o,i):new iS(r.shape,o,i),c=[[i]];return n.runWebGLProgram(a,[r],r.dtype,c)},cS={kernelName:Nh,backendName:"webgl",kernelFunc:nd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lS=`
  if(a < 0.0 && floor(b) < b){
    return NAN;
  }
  if (b == 0.0) {
    return 1.0;
  }
  return (round(mod(b, 2.0)) != 1) ?
      pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,uS=`
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
  `+fr+`
  return result;
`,dS=De({opSnippet:lS,packedOpSnippet:uS}),hS={kernelName:Li,backendName:"webgl",kernelFunc:dS};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fS(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{axis:o,keepDims:i}=s,a=r.shape.length,c=[],l=oe(o,r.shape);let u=l;const d=et(u,a);let h=r;d!=null&&(h=Ge({inputs:{x:r},backend:n,attrs:{perm:d}}),u=tt(u.length,a),c.push(h)),gt("prod",u,a);let f;if(n.shouldExecuteOnCPU([h])){const p=n.texData.get(h.dataId).values,{outVals:g,outShape:m,outDtype:x}=JC(h.shape,h.dtype,p,u);f=n.makeTensorInfo(m,x,g)}else{const[p,g]=St(h.shape,u),m=D(g),x=O({inputs:{x:h},backend:n,attrs:{shape:[-1,m]}}),b=Jr(r.dtype),w=tn(x,b,"prod",n);f=O({inputs:{x:w},backend:n,attrs:{shape:p}}),c.push(x),c.push(w)}if(i){c.push(f);const p=Je(f.shape,l);f=O({inputs:{x:f},backend:n,attrs:{shape:p}})}return c.forEach(p=>n.disposeIntermediateTensorInfo(p)),f}const pS={kernelName:Mi,backendName:"webgl",kernelFunc:fS};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gS(t){const{inputs:e,backend:n,attrs:s}=t,{shape:r,values:o,defaultValue:i,rowPartitionTensors:a}=e,{rowPartitionTypes:c}=s,l=n.readSync(r.dataId),u=n.readSync(o.dataId),d=n.readSync(i.dataId),h=a.map(m=>n.readSync(m.dataId)),f=a.map(m=>m.shape),[p,g]=ew(l,r.shape,u,o.shape,o.dtype,d,i.shape,h,f,c);return n.makeTensorInfo(p,o.dtype,g)}const mS={kernelName:_h,backendName:"webgl",kernelFunc:gS};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const sd=t=>{const{backend:e,attrs:n}=t,{start:s,stop:r,step:o,dtype:i}=n,a=tw(s,r,o,i);return e.makeTensorInfo([a.length],i,a)},xS={kernelName:Vi,backendName:"webgl",kernelFunc:sd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bS=re({opSnippet:"return 1.0 / x;"}),CS={kernelName:Ah,backendName:"webgl",kernelFunc:bS};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wS=rt+`
  return (x < 0.0) ? 0.0 : x;
`,yS=re({opSnippet:wS,packedOpSnippet:`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`}),vS={kernelName:Ui,backendName:"webgl",kernelFunc:yS};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $S=rt+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,IS=re({opSnippet:$S,packedOpSnippet:`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`}),SS={kernelName:Hi,backendName:"webgl",kernelFunc:IS};/**
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
 */class ES{constructor(e,n,s,r,o){this.variableNames=["A"],this.outputShape=[];const[i,a,c,l]=e;this.outputShape=[i,n,s,l];const u=[r&&n>1?a-1:a,r&&s>1?c-1:c],d=[r&&n>1?n-1:n,r&&s>1?s-1:s];let h;o?h="(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)":h="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${u[0]/d[0]},
          ${u[1]/d[1]});
      const vec2 inputShapeRC = vec2(${a}.0, ${c}.0);

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
 */class TS{constructor(e,n,s,r,o){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[i,a,c,l]=e;this.outputShape=[i,n,s,l];const u=[r&&n>1?a-1:a,r&&s>1?c-1:c],d=[r&&n>1?n-1:n,r&&s>1?s-1:s];let h;o?h="(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)":h="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${u[0]/d[0]},
          ${u[1]/d[1]},
          ${u[1]/d[1]});
      const vec3 inputShapeRC = vec3(${a}.0, ${c}.0,
                                     ${c}.0);

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
 */function RS(t){const{inputs:e,backend:n,attrs:s}=t,{images:r}=e,{alignCorners:o,halfPixelCenters:i,size:a}=s,[c,l]=a,u=S().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new TS(r.shape,c,l,o,i):new ES(r.shape,c,l,o,i);return n.runWebGLProgram(u,[r],"float32")}const kS={kernelName:zi,backendName:"webgl",kernelFunc:RS};/**
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
 */class NS{constructor(e,n,s){this.variableNames=["dy"],this.outputShape=[],this.outputShape=n;const[,r,o]=n,[,i,a]=e,c=[s&&i>1?r-1:r,s&&a>1?o-1:o],l=[s&&i>1?i-1:i,s&&a>1?a-1:a],u=c[0]/l[0],d=c[1]/l[1],h=1/u,f=1/d,p=Math.ceil(h)*2+2,g=Math.ceil(f)*2+2;this.userCode=`
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
            if (dyC < 0 || dyC >= ${a}) {
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
 */function _S(t){const{inputs:e,backend:n,attrs:s}=t,{images:r,dy:o}=e,{alignCorners:i}=s,a=new NS(o.shape,r.shape,i);return n.runWebGLProgram(a,[o],o.dtype)}const AS={kernelName:Fh,backendName:"webgl",kernelFunc:_S};/**
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
 */class DS{constructor(e,n,s,r,o){this.variableNames=["A"],this.outputShape=[];const[i,a,c,l]=e;this.outputShape=[i,n,s,l];const u=[r&&n>1?a-1:a,r&&s>1?c-1:c],d=[r&&n>1?n-1:n,r&&s>1?s-1:s],h=r?"0.5":"0.0";let f;o?f="max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))":f="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${u[0]/d[0]},
          ${u[1]/d[1]});
      const vec2 inputShapeRC = vec2(${a}.0, ${c}.0);

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
 */class FS{constructor(e,n,s,r,o){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[i,a,c,l]=e;this.outputShape=[i,n,s,l];const u=[r&&n>1?a-1:a,r&&s>1?c-1:c],d=[r&&n>1?n-1:n,r&&s>1?s-1:s],h=r?"0.5":"0.0";let f;o?f="max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))":f="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${u[0]/d[0]},
          ${u[1]/d[1]},
          ${u[1]/d[1]});
      const vec3 inputShapeRC = vec3(${a}.0, ${c}.0,
                                     ${c}.0);

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
 */function OS(t){const{inputs:e,backend:n,attrs:s}=t,{images:r}=e,{alignCorners:o,halfPixelCenters:i,size:a}=s,[c,l]=a,u=S().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new FS(r.shape,c,l,o,i):new DS(r.shape,c,l,o,i);return n.runWebGLProgram(u,[r],r.dtype)}const PS={kernelName:Gi,backendName:"webgl",kernelFunc:OS};/**
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
 */class LS{constructor(e,n,s){this.variableNames=["dy"],this.outputShape=[],this.outputShape=n;const[,r,o]=n,[,i,a]=e,c=[s&&i>1?r-1:r,s&&a>1?o-1:o],l=[s&&i>1?i-1:i,s&&a>1?a-1:a],u=c[0]/l[0],d=c[1]/l[1],h=1/u,f=1/d,p=Math.ceil(h)*2+2,g=Math.ceil(f)*2+2;this.userCode=`
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
            if (dyC < 0 || dyC >= ${a}) {
              continue;
            }

            float sourceFracRow =
              float(${c[0]}) *
                (float(dyR) / float(${l[0]}));

            float sourceFracCol =
                float(${c[1]}) *
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
 */function BS(t){const{inputs:e,backend:n,attrs:s}=t,{images:r,dy:o}=e,{alignCorners:i}=s,a=new LS(o.shape,r.shape,i);return n.runWebGLProgram(a,[o],o.dtype)}const MS={kernelName:Dh,backendName:"webgl",kernelFunc:BS};/**
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
 */class VS{constructor(e,n){this.variableNames=["x"];const s=e.length;if(s>4)throw new Error(`WebGL backend: Reverse of rank-${s} tensor is not yet supported`);if(this.outputShape=e,s===1){this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(${e[0]} - coord - 1));
        }
      `;return}const r=a=>n.indexOf(a)!==-1&&e[a]!==1?`${e[a]} - coords[${a}] - 1`:`coords[${a}]`,o=e.map((a,c)=>r(c)).join(","),i=ge(s);this.userCode=`
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
 */class US{constructor(e,n){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;const s=e.length;if(s>4)throw new Error(`WebGL backend: Reverse of rank-${s} tensor is not yet supported`);this.outputShape=e;const r=We("rc",s),o=`${r[s-1]} + 1 < ${this.outputShape[s-1]}`,i=`${r[s-2]} + 1 < ${this.outputShape[s-2]}`,a=ge(s);s===1?this.userCode=`
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
          ${a} rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = ${c(r.slice())};
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
    `;function c(p){return h(p)}function l(p){return p[s-1]="("+p[s-1]+" + 1)",h(p)}function u(p){return p[s-2]="("+p[s-2]+" + 1)",h(p)}function d(p){return p[s-1]="("+p[s-1]+" + 1)",p[s-2]="("+p[s-2]+" + 1)",h(p)}function h(p){const g=e.map((b,w)=>f(w,p)),m=g.join(","),x=g.slice(-2).join(",");return`getChannel(getX(${m}), vec2(${x}))`}function f(p,g){return n.indexOf(p)!==-1&&e[p]!==1?`${e[p]} - ${g[p]} - 1`:`${g[p]}`}}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function WS(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{dims:o}=s,i=r.shape.length,a=oe(o,r.shape);if(i===0)return je({inputs:{x:r},backend:n});const c=S().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new US(r.shape,a):new VS(r.shape,a);return n.runWebGLProgram(c,[r],r.dtype)}const GS={kernelName:Xi,backendName:"webgl",kernelFunc:WS};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class zS{constructor(e,n){this.variableNames=["Image"],this.outputShape=[],this.customUniforms=[{name:"params",type:"vec4"}];const s=e[1],r=e[2];this.outputShape=e;let o="";typeof n=="number"?o=`float outputValue = ${n.toFixed(2)};`:o=`
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
 */const HS={kernelName:ca,backendName:"webgl",kernelFunc:({inputs:t,attrs:e,backend:n})=>{const{image:s}=t,{radians:r,fillValue:o,center:i}=e,a=n,c=new zS(s.shape,o),[l,u]=Ac(i,s.shape[1],s.shape[2]),d=[[l,u,Math.sin(r),Math.cos(r)]];return a.runWebGLProgram(c,[s],s.dtype,d)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const XS=re({opSnippet:`
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
`}),qS={kernelName:qi,backendName:"webgl",kernelFunc:XS};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const KS=re({opSnippet:"return inversesqrt(x);",cpuKernelImpl:nw}),jS={kernelName:Vr,backendName:"webgl",kernelFunc:KS};/**
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
 */class rd{constructor(e,n,s,r,o,i,a=!0){this.variableNames=["updates","indices","defaultValue"],this.outputShape=i;const c=ge(o.length),l=ge(i.length);let u="";s===1?u="i":s===2&&(u="i, j");const d=`getIndices(${u})`;let h="";r===1?h="i":r===2&&(h="i, coords[1]");const f=`getUpdates(${h})`,p=n>1?"strides[j]":"strides";this.userCode=`
        ${c} strides = ${c}(${o});

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
 */function YS(t){const{inputs:e,backend:n,attrs:s}=t,{indices:r,updates:o}=e,{shape:i}=s,{sliceRank:a,numUpdates:c,sliceSize:l,strides:u,outputSize:d}=Do(o,r,i),h=[d/l,l];if(d===0)return n.makeTensorInfo(i,r.dtype);const f=O({inputs:{x:r},backend:n,attrs:{shape:[c,a]}}),p=O({inputs:{x:o},backend:n,attrs:{shape:[c,l]}}),g=n.makeTensorInfo([],"float32",new Float32Array([0])),m=new rd(c,a,f.shape.length,p.shape.length,u,h),x=n.runWebGLProgram(m,[p,f,g],p.dtype),b=O({inputs:{x},backend:n,attrs:{shape:i}});return n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(x),n.disposeIntermediateTensorInfo(g),b}const QS={kernelName:Oh,backendName:"webgl",kernelFunc:YS};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ZS{constructor(e,n,s,r){this.variableNames=["sortedSequence","values"],this.customUniforms=[{name:"numInputs",type:"int"}],this.outputShape=[e,s];const o="while (left < right) {",i=`for (int i = 0; i < ${Math.ceil(Math.log2(n+1))}; ++i) { if (left >= right) break;`,a=S().getNumber("WEBGL_VERSION")===2?o:i,c=r==="left"?"<":"<=";this.userCode=`
       int findBound(int batch, float value) {
         int left = 0;
         int right = numInputs;
         int mid;
         ${a}
           mid = (left + right) / 2;
           if (getSortedSequence(batch, mid) ${c} value) {
             left = mid + 1;
           } else {
             right = mid;
           }
         }
         return right;
       }

       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int valueIndex = coords[1];

         float value = getValues(batch, valueIndex);

         setOutput(float(findBound(batch, value)));
       }
     `}}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function JS(t){const{inputs:e,backend:n,attrs:s}=t,{sortedSequence:r,values:o}=e,{side:i}=s,a=new ZS(r.shape[0],r.shape[1],o.shape[1],i),c=[[r.shape[1]]];return n.runWebGLProgram(a,[r,o],"int32",c)}const eE={kernelName:Ph,backendName:"webgl",kernelFunc:JS};/**
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
 */class tE{constructor(e,n,s){this.variableNames=["c","a","b"],this.outputShape=n;let r,o;if(s>4)throw Error(`Where for rank ${s} is not yet supported`);if(s===1)o="resRC",r="resRC";else{const a=["resRC.x","resRC.y","resRC.z","resRC.w"],c=[],l=[];for(let u=0;u<n.length;u++)l.push(`${a[u]}`),u<e&&c.push(`${a[u]}`);r=c.join(),o=l.join()}const i=ge(s);this.userCode=`
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
 */function nE(t){const{inputs:e,backend:n}=t,{condition:s,t:r,e:o}=e,i=new tE(s.shape.length,r.shape,r.shape.length);return n.runWebGLProgram(i,[s,r,o],wt(r.dtype,o.dtype))}const sE={kernelName:Ki,backendName:"webgl",kernelFunc:nE};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rE=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ${Lc};
  float scale = ${Bc};
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,oE=re({opSnippet:rE}),iE={kernelName:Lh,backendName:"webgl",kernelFunc:oE};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const aE=An+`
  return 1.0 / (1.0 + exp(-1.0 * x));
`,cE=re({opSnippet:aE,packedOpSnippet:`
  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,cpuKernelImpl:rw}),lE={kernelName:$s,backendName:"webgl",kernelFunc:cE};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const uE=re({opSnippet:`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`}),dE={kernelName:Vh,backendName:"webgl",kernelFunc:uE};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hE=An+`
  return sin(x);
`,fE=re({opSnippet:hE}),pE={kernelName:Bh,backendName:"webgl",kernelFunc:fE};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gE=re({opSnippet:`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`}),mE={kernelName:Mh,backendName:"webgl",kernelFunc:gE};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xE=re({opSnippet:`
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
`}),bE={kernelName:Uh,backendName:"webgl",kernelFunc:xE};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const CE={kernelName:Wh,backendName:"webgl",kernelFunc:t=>{const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{blockShape:o,paddings:i}=s;v(r.shape.length<=4,()=>"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet");const a=o.reduce((x,b)=>x*b),c=[[0,0]];c.push(...i);for(let x=1+o.length;x<r.shape.length;++x)c.push([0,0]);const l=[],u=nd({inputs:{x:r},backend:n,attrs:{paddings:c,constantValue:0}}),d=No(u.shape,o,a,!1),h=_o(d.length,o.length,!1),f=Ao(u.shape,o,a,!1),p=O({inputs:{x:u},backend:n,attrs:{shape:d}}),g=Ge({inputs:{x:p},backend:n,attrs:{perm:h}}),m=O({inputs:{x:g},backend:n,attrs:{shape:f}});return l.push(u),l.push(p),l.push(g),l.forEach(x=>n.disposeIntermediateTensorInfo(x)),m}};/**
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
 */function wE(t){const{inputs:e,backend:n}=t,{indices:s,values:r,denseShape:o,defaultValue:i}=e;if(o.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
         ${o.shape}`);if(s.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
         ${s.shape}`);if(r.shape.length!==1)throw new Error(`Values must be a vector, saw:
         ${r.shape}`);if(i.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${i.shape}`);const a=n.readSync(s.dataId),c=n.readSync(r.dataId),l=n.readSync(o.dataId),u=n.readSync(i.dataId)[0],[d,h,f,p,g]=iw(a,s.shape,s.dtype,c,r.dtype,l,u);return[n.makeTensorInfo(h,s.dtype,d),n.makeTensorInfo([h[0]],r.dtype,f),n.makeTensorInfo([p.length],"bool",new Uint8Array(p.map(m=>Number(m)))),n.makeTensorInfo([g.length],s.dtype,new Int32Array(g))]}const yE={kernelName:Qi,backendName:"webgl",kernelFunc:wE};/**
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
 */function vE(t){const{inputs:e,backend:n}=t,{inputIndices:s,inputShape:r,newShape:o}=e;if(s.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape ${s.shape}`);if(r.shape.length!==1)throw new Error(`Input shape should be a vector but received shape ${r.shape}`);if(o.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${o.shape}`);const i=Array.from(n.readSync(r.dataId)),a=n.readSync(s.dataId),c=Array.from(n.readSync(o.dataId)),[l,u,d]=aw(a,s.shape,s.dtype,i,c);return[n.makeTensorInfo(u,s.dtype,l),n.makeTensorInfo([d.length],o.dtype,new Int32Array(d))]}const $E={kernelName:Zi,backendName:"webgl",kernelFunc:vE};/**
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
 */function IE(t){const{inputs:e,backend:n}=t,{data:s,indices:r,segmentIds:o}=e;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(r.shape.length!==1)throw new Error(`Indices should be a vector but received shape
              ${r.shape}`);if(o.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
              ${o.shape}`);const i=n.readSync(s.dataId),a=n.readSync(r.dataId),c=n.readSync(o.dataId),[l,u]=au(i,s.shape,s.dtype,a,c,!0);return n.makeTensorInfo(u,s.dtype,l)}const SE={kernelName:Ji,backendName:"webgl",kernelFunc:IE};/**
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
 */function EE(t){const{inputs:e,backend:n}=t,{data:s,indices:r,segmentIds:o}=e;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(r.shape.length!==1)throw new Error(`Indices should be a vector but received shape
             ${r.shape}`);if(o.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
             ${o.shape}`);const i=n.readSync(s.dataId),a=n.readSync(r.dataId),c=n.readSync(o.dataId),[l,u]=au(i,s.shape,s.dtype,a,c);return n.makeTensorInfo(u,s.dtype,l)}const TE={kernelName:ea,backendName:"webgl",kernelFunc:EE};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function RE(t){const{inputs:e,backend:n,attrs:s}=t,{sparseIndices:r,sparseValues:o,defaultValue:i}=e,{outputShape:a}=s,{sliceRank:c,numUpdates:l,sliceSize:u,strides:d,outputSize:h}=Do(o,r,a),f=!1;if(o.dtype==="string"){const x=n.bufferSync(r),b=n.bufferSync(o),w=on(n.readSync(i.dataId)[0]),y=sw(x,b,a,h,u,l,c,d,w,f);return n.makeTensorInfo(a,y.dtype,y.values)}const p=new rd(l,c,r.shape.length,o.shape.length,d,[h,1],f),g=n.runWebGLProgram(p,[o,r,i],o.dtype),m=O({inputs:{x:g},backend:n,attrs:{shape:a}});return n.disposeIntermediateTensorInfo(g),m}const kE={kernelName:zh,backendName:"webgl",kernelFunc:RE};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function NE(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{numOrSizeSplits:o,axis:i}=s,a=oe(i,r.shape)[0],c=Zc(r,o,a),l=r.shape.length,u=new Array(l).fill(0),d=r.shape.slice();return c.map(h=>{const f=[...d];f[a]=h;const p=Dn({inputs:{x:r},backend:n,attrs:{begin:u,size:f}});return u[a]+=h,p})}const _E={kernelName:Yi,backendName:"webgl",kernelFunc:NE};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const od="return sqrt(x);",AE=re({opSnippet:od,packedOpSnippet:od,cpuKernelImpl:cw}),DE={kernelName:Is,backendName:"webgl",kernelFunc:AE};/**
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
 */const FE=re({opSnippet:"return x * x;"}),OE={kernelName:Hh,backendName:"webgl",kernelFunc:FE};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const id="return (a - b) * (a - b);",PE=De({opSnippet:id,packedOpSnippet:id}),LE={kernelName:Ss,backendName:"webgl",kernelFunc:PE};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function BE({inputs:t,attrs:e,backend:n}){const{x:s}=t,r=rt+`
    return x > 0.0 ? 1.0 : float(${e.alpha});
  `,o=new Nt(s.shape,r);return n.runWebGLProgram(o,[s],s.dtype)}const ME={kernelName:aa,backendName:"webgl",kernelFunc:BE};/**
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
 */class VE{constructor(e,n,s){this.variableNames=["x"],this.outputShape=s;const r=s.length,o=ge(s.length),i=ge(s.length);let a="";if(r===1)a="coords * strides + begin";else{let c=0;a=s.map((l,u)=>(c++,s.length===1?`coords * strides[${u}] + begin[${u}]`:`coords[${c-1}] * strides[${u}] + begin[${u}]`)).join(",")}this.userCode=`
      ${o} begin = ${o}(${e});
      ${o} strides = ${o}(${n});

      void main() {
        ${i} coords = getOutputCoords();
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
 */function UE(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{begin:o,end:i,strides:a,beginMask:c,endMask:l,ellipsisMask:u,newAxisMask:d,shrinkAxisMask:h}=s,{finalShapeSparse:f,finalShape:p,isIdentity:g,sliceDim0:m,isSimpleSlice:x,begin:b,end:w,strides:y}=nc(r.shape,o,i,a,c,l,u,d,h);let $;if(g)$=O({inputs:{x:r},backend:n,attrs:{shape:p}});else if(m||x){v(r.shape.length>=1,()=>`Input must have rank at least 1, got: ${r.shape.length}`);const R=qa(b,w,y),k=Dn({inputs:{x:r},backend:n,attrs:{begin:b,size:R}});$=O({inputs:{x:k},backend:n,attrs:{shape:p}}),n.disposeIntermediateTensorInfo(k)}else if(n.shouldExecuteOnCPU([r])){const k=n.readSync(r.dataId),B=_e(r.shape,r.dtype,k),U=lw(f,B,y,b);$=n.makeTensorInfo(p,r.dtype,U.values)}else{const k=new VE(b,y,f);$=n.runWebGLProgram(k,[r],r.dtype)}const N=O({inputs:{x:$},backend:n,attrs:{shape:p}});return n.disposeIntermediateTensorInfo($),N}const WE={kernelName:Xh,backendName:"webgl",kernelFunc:UE};/**
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
 */function GE(t){const{inputs:e,backend:n,attrs:s}=t,{separator:r,nGramWidths:o,leftPad:i,rightPad:a,padWidth:c,preserveShortSequences:l}=s,{data:u,dataSplits:d}=e,h=n.readSync(u.dataId),f=n.readSync(d.dataId),[p,g]=uw(h,f,r,o,i,a,c,l);return[n.makeTensorInfo([p.length],"string",p),n.makeTensorInfo(d.shape,"int32",g)]}const zE={kernelName:ta,backendName:"webgl",kernelFunc:GE};/**
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
 */function HE(t){const{inputs:e,backend:n,attrs:s}=t,{skipEmpty:r}=s,{input:o,delimiter:i}=e;if(o.dtype!=="string")throw new Error("Input must be of datatype string");if(o.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${o.shape}`);if(i.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${i.shape}`);const a=n.readSync(o.dataId),c=n.readSync(i.dataId)[0],[l,u,d]=dw(a,c,r),h=u.length;return[n.makeTensorInfo([h,2],"int32",l),n.makeTensorInfo([h],"string",u),n.makeTensorInfo([2],"int32",new Int32Array(d))]}const XE={kernelName:na,backendName:"webgl",kernelFunc:HE};/**
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
 */function qE(t){const{inputs:e,backend:n,attrs:s}=t,{numBuckets:r}=s,{input:o}=e;if(o.dtype!=="string")throw new Error("Input must be of datatype string");if(r<=0)throw new Error("Number of buckets must be at least 1");const i=n.readSync(o.dataId),a=hw(i,r);return n.makeTensorInfo(o.shape,"int32",a)}const KE={kernelName:sa,backendName:"webgl",kernelFunc:qE};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const jE=re({opSnippet:"return tan(x);"}),YE={kernelName:qh,backendName:"webgl",kernelFunc:jE};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const QE=re({opSnippet:`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`}),ZE={kernelName:Kh,backendName:"webgl",kernelFunc:QE};/**
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
 */class JE{constructor(e,n){this.variableNames=["A"];const s=new Array(e.length);for(let i=0;i<s.length;i++)s[i]=e[i]*n[i];this.outputShape=s,this.rank=s.length;const r=ge(this.rank),o=eT(e);this.userCode=`
      void main() {
        ${r} resRC = getOutputCoords();
        setOutput(getA(${o}));
      }
    `}}function eT(t){const e=t.length;if(e>5)throw Error(`Tile for rank ${e} is not yet supported`);if(e===1)return`imod(resRC, ${t[0]})`;const n=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],s=[];for(let r=0;r<t.length;r++)s.push(`imod(${n[r]}, ${t[r]})`);return s.join()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ad(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{reps:o}=s;if(r.dtype==="string"||r.shape.length>5){const c=n.readSync(r.dataId),l=r.dtype==="string"?c.map(h=>on(h)):c,u=_e(r.shape,r.dtype,l),d=pw(u,o);return n.makeTensorInfo(d.shape,d.dtype,d.values)}const i=new JE(r.shape,o);return n.runWebGLProgram(i,[r],r.dtype)}const tT={kernelName:Wr,backendName:"webgl",kernelFunc:ad};class nT{constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"negativeInf",type:"float"},{name:"dir",type:"int"},{name:"inc",type:"int"}],this.outputShape=e,this.userCode=`
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
     `}}class sT{constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"k",type:"int"}],this.outputShape=e,this.userCode=`
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
 */function nn(t,e){e!==null&&t.disposeIntermediateTensorInfo(e)}function cd(t){let e=1;for(;e<t;)e*=2;return e}function rT(t){const{inputs:e,backend:n,attrs:s}=t,{x:r}=e,{k:o,sorted:i}=s,a=S().getNumber("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD"),c=S().getNumber("TOPK_K_CPU_HANDOFF_THRESHOLD"),l=r.shape,u=l[l.length-1];if(n.shouldExecuteOnCPU([r])||u<a||o>c){const U=n.readSync(r.dataId),[Q,ie]=gw(U,l,r.dtype,o,i);return[n.makeTensorInfo(Q.shape,Q.dtype,Q.values),n.makeTensorInfo(ie.shape,ie.dtype,ie.values)]}if(o===0)return l[l.length-1]=0,[n.makeTensorInfo(l,r.dtype,[]),n.makeTensorInfo(l,"int32",[])];if(u===1)return[r,us({attrs:{shape:l,dtype:"int32",value:0},backend:n})];const d=n.texData.get(r.dataId),h=d!==null&&d.isPacked,f=h?n.unpackTensor(r):r,g=D(l)/u,m=O({inputs:{x:f},attrs:{shape:[g,u]},backend:n});h&&nn(n,f);const x=cd(o),b=cd(u);let w=null;const y=()=>w===null?[m,m]:[m,w],$=(U,Q,ie)=>{const Ye=y(),Fe=new nT(ie),ut=[[u],[w===null?1:0],[Number.NEGATIVE_INFINITY],[U],[Q]],Ct=w;w=n.runWebGLProgram(Fe,Ye,"int32",ut),nn(n,Ct)};for(let U=1;U<x;U*=2){const Q=U*2;for(let ie=U;ie>=1;ie/=2)$(Q,ie,[g,b])}for(let U=b;U>x;U/=2){const Q=y(),ie=new sT([g,U/2]),Fe=[[u],[w===null?1:0],[x]],Oe=w;w=n.runWebGLProgram(ie,Q,"int32",Fe),nn(n,Oe);const ut=x/2,Ct=ut*2;for(let ze=ut;ze>=1;ze/=2)$(Ct,ze,w.shape)}let N=w;w=Dn({inputs:{x:w},backend:n,attrs:{begin:0,size:[g,o]}}),nn(n,N);let R=ju({inputs:{x:m,indices:w},backend:n,attrs:{axis:1,batchDims:1}});nn(n,m);const k=l.slice(0,-1);k.push(o),N=w,w=O({inputs:{x:w},attrs:{shape:k},backend:n}),nn(n,N);const B=R;return R=O({inputs:{x:R},attrs:{shape:k},backend:n}),nn(n,B),[R,w]}const oT={kernelName:jh,backendName:"webgl",kernelFunc:rT};/**
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
 */class iT{constructor(e,n,s,r,o,i){this.variableNames=["Image","Transforms"],this.outputShape=i;const a=s==="nearest"?1:2;let c;switch(r){case"constant":c=1;break;case"reflect":c=2;break;case"wrap":c=3;break;case"nearest":c=4;break;default:c=1;break}this.userCode=`
            float mapCoord(float outCoord, float len) {
              float inCoord = outCoord;
              if(${c} == 2) {
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
              } else if (${c} == 3) {
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
              } else if (${c} == 4) {
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

                if (${a} == 1) {
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
 */function aT(t){const{inputs:e,backend:n,attrs:s}=t,{image:r,transforms:o}=e,{interpolation:i,fillMode:a,fillValue:c,outputShape:l}=s,[u,d,h,f]=r.shape,[p,g]=l??[d,h],m=[u,p,g,f],x=new iT(d,h,i,a,c,m);return n.runWebGLProgram(x,[r,o],"float32")}const cT={kernelName:ra,backendName:"webgl",kernelFunc:aT};/**
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
 */function lT(t){const{inputs:e,attrs:n,backend:s}=t,{axis:r}=n,{x:o}=e;Jn(o,"unique"),console.warn("WARNING: ","UI might be locked temporarily as data is being downloaded");const i=s.readSync(o.dataId),{outputValues:a,outputShape:c,indices:l}=mw(i,r,o.shape,o.dtype);return[s.makeTensorInfo(c,o.dtype,a),s.makeTensorInfo([l.length],"int32",l)]}const uT={kernelName:Yh,backendName:"webgl",kernelFunc:lT};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dT(t){const{inputs:e,backend:n,attrs:s}=t,{value:r}=e;let{axis:o}=s;o<0&&(o+=r.shape.length);const i=r,a=i.shape.length,c=r.shape[o],l=new Array(a-1);let u=0;for(let g=0;g<a;g++)g!==o&&(l[u++]=i.shape[g]);const d=[],h=new Array(a).fill(0),f=i.shape.slice();f[o]=1;const p=new Array(c);for(let g=0;g<p.length;g++){h[o]=g;const m=Dn({inputs:{x:i},backend:n,attrs:{begin:h,size:f}}),x=O({inputs:{x:m},backend:n,attrs:{shape:l}});p[g]=x,d.push(m)}return d.forEach(g=>n.disposeIntermediateTensorInfo(g)),p}const hT={kernelName:oa,backendName:"webgl",kernelFunc:dT};/**
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
 */class fT{constructor(e,n){this.variableNames=["x","segmentIds"];const s=e.windowSize,r=e.batchSize,o=e.inSize,i=e.numSegments,a=i*Math.ceil(o/s);this.outputShape=[r,a];const c="0.0",l="sumValue",u=Math.floor(s/4)*4,d=s%4,h=`
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
      const float initializationValue = ${c};

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
 */function pT(t){const{inputs:e,backend:n,attrs:s}=t,{x:r,segmentIds:o}=e,{numSegments:i}=s,a=r.shape.length,c=[];let l=0;const u=et([l],a);let d=r;u!=null&&(d=Ge({inputs:{x:r},backend:n,attrs:{perm:u}}),c.push(d),l=tt(1,a)[0]);const h=dl(d.shape,l,i),f=D([d.shape[l]]),p=O({inputs:{x:d},backend:n,attrs:{shape:[-1,f]}});c.push(p);const g=Jr(r.dtype),m=(y,$,N,R,k)=>{const B=y.shape[0],U=y.shape[1],Q=ul(U,k),ie={windowSize:Q,inSize:U,batchSize:B,numSegments:k},Ye=new fT(ie,$),Fe=n.compileAndRun(Ye,[y,N],R);if(c.push(Fe),Fe.shape[1]===k)return Fe;const Oe=sd({backend:n,attrs:{start:0,stop:k,step:1,dtype:"float32"}}),ut=ad({inputs:{x:Oe},backend:n,attrs:{reps:[U/Q]}});return c.push(Oe),c.push(ut),m(Fe,$,ut,R,k)},x=m(p,"unsortedSegmentSum",o,g,i),b=O({inputs:{x},backend:n,attrs:{shape:h}});let w=b;if(u!=null){c.push(b);const y=vo(u);w=Ge({inputs:{x:w},backend:n,attrs:{perm:y}})}return c.forEach(y=>n.disposeIntermediateTensorInfo(y)),w}const gT={kernelName:Qh,backendName:"webgl",kernelFunc:pT};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mT=[uy,hy,gy,by,wy,$y,Sy,Ty,_y,Dy,Py,My,Wy,Xy,jy,Qy,Jy,s1,o1,a1,u1,m1,b1,w1,S1,T1,_1,Hw,F1,M1,G1,j1,Q1,J1,tv,sv,iv,cv,uv,hv,pv,mv,Cv,yv,Sv,Tv,Nv,Dv,Ov,Lv,Vv,Wv,Hv,qv,Kv,Yv,Zv,e$,n$,r$,i$,l$,h$,p$,x$,w$,v$,I$,zw,E$,L1,R$,N$,A$,qw,F$,P$,B$,U$,z$,X$,K$,Y$,J$,tI,sI,aI,lI,dI,gI,xI,CI,yI,$I,TI,NI,FI,VI,Zw,zI,qI,YI,JI,y1,tS,sS,oS,cS,hS,jw,pS,mS,xS,v1,PI,CS,vS,SS,ey,kS,AS,PS,MS,GS,HS,qS,jS,QS,eE,sE,iE,lE,dE,pE,mE,g1,BI,bE,CE,yE,$E,SE,TE,kE,_E,DE,OE,LE,ME,WE,zE,XE,KE,LI,ay,YE,ZE,tT,oT,cT,cy,uT,hT,gT,nS];for(const t of mT)da(t);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var ld=M(3242),ud=M(6422),xT=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),_t=(t,e,n)=>new Promise((s,r)=>{var o=c=>{try{a(n.next(c))}catch(l){r(l)}},i=c=>{try{a(n.throw(c))}catch(l){r(l)}},a=c=>c.done?s(c.value):Promise.resolve(c.value).then(o,i);a((n=n.apply(t,e)).next())}),dd=xT((t,e)=>{e.exports={version:"1.6.1-alpha.0",license:"MIT",main:"dist/index.js",typings:"dist/index.d.ts",files:["dist","src/tflite","src/models"],scripts:{start:'concurrently "yarn dev" "yarn types"',dev:"node ../../scripts/dev","build:only":"node ../../scripts/build",build:"yarn build:only && yarn types:build",types:"tsc -w","types:build":"tsc -p tsconfig.json",test:"jest --maxWorkers=1 --passWithNoTests",lint:"eslint -c ../../.eslintrc .","lint:fix":"yarn lint --fix",prepare:"yarn build",size:"size-limit",analyze:"size-limit --why",format:"prettier --write src/**/*.ts"},peerDependencies:{"@100mslive/hms-video":"^0.2.0"},name:"@100mslive/hms-virtual-background",author:"ashish17",module:"dist/index.js",devDependencies:{"@100mslive/hms-video":"0.4.1-alpha.0"},dependencies:{"@tensorflow/tfjs-backend-webgl":"^3.3.0","@tensorflow/tfjs-core":"^3.3.0","@webassemblyjs/helper-wasm-bytecode":"1.11.1","@webassemblyjs/wasm-gen":"1.11.1","gifuct-js":"^2.1.2","wasm-check":"^2.0.2"},eslintIgnore:["tflite.js","tflite-simd.js","tflite.wasm","tflite-simd.wasm","defineTFLite.ts","importing.test.ts"],gitHead:"184b0b5b8fee6e3d4d9a39ce227dfd5c23097d9b"}}),bT=dd(),ni=`https://unpkg.com/${bT.name}/src`,vr="VBProcessor",CT="tflite/tflite.js",wT="tflite/tflite-simd.js",yT="models/selfie_segmentation_landscape.tflite",hd=t=>new Promise(function(e,n){let s=document.createElement("script");s.src=t,s.onload=e,s.onerror=n,document.head.appendChild(s)}),vT=()=>_t(void 0,null,function*(){let t,e=`${ni}/${wT}`;yield hd(e);try{t=yield createTFLiteSIMDModule()}catch{console.warn("SIMD not supported. You may experience poor virtual background effect."),e=`${ni}/${CT}`,yield hd(e),t=yield createTFLiteModule()}return t}),$T=()=>_t(void 0,null,function*(){let t=`${ni}/${yT}`,[e,n]=yield Promise.all([vT(),fetch(t)]),s=yield n.arrayBuffer(),r=e._getModelBufferMemoryOffset();return e.HEAPU8.set(new Uint8Array(s),r),e._loadModel(s.byteLength),console.debug(vr,"Input memory offset:",e._getInputMemoryOffset()),console.debug(vr,"Input height:",e._getInputHeight()),console.debug(vr,"Input width:",e._getInputWidth()),console.debug(vr,"Input channels:",e._getInputChannelCount()),e}),$r="VBProcessor",IT=33,ST=dd(),ET=214,TT=855,RT=120,kT=720,NT=class{constructor(t,e=!1){this.backgroundType="none",this.background=t,this.enableSharpening=e,this.backgroundImage=null,this.backgroundVideo=null,this.personMaskWidth=256,this.personMaskHeight=144,this.isVirtualBackground=!1,this.blurValue="10px",this.loadModelCalled=!1,this.tfLite=null,this.modelName="landscape-segmentation",this.outputCtx=null,this.input=null,this.output=null,this.timerID=0,this.imageAspectRatio=1,this.personMaskPixelCount=this.personMaskWidth*this.personMaskHeight,this.personMask=new ImageData(this.personMaskWidth,this.personMaskHeight),this.personMaskCanvas=document.createElement("canvas"),this.personMaskCanvas.width=this.personMaskWidth,this.personMaskCanvas.height=this.personMaskHeight,this.personMaskCtx=this.personMaskCanvas.getContext("2d"),this.filters={},this.gifFrames=null,this.gifFramesIndex=0,this.gifFrameImageData=null,this.tempGifCanvas=document.createElement("canvas"),this.tempGifContext=this.tempGifCanvas.getContext("2d"),this.giflocalCount=0,this.enableSharpening=e,this.log($r,"Virtual Background plugin created"),this.setBackground(this.background)}init(){return _t(this,null,function*(){this.loadModelCalled?yield this.tfLitePromise:(this.log($r,"PREVIOUS LOADED MODEL IS ",this.tfLite),this.loadModelCalled=!0,this.tfLitePromise=$T(),this.tfLite=yield this.tfLitePromise),this.enableSharpening&&this.initSharpenFilter()})}isSupported(){return navigator.userAgent.indexOf("Chrome")!==-1||navigator.userAgent.indexOf("Firefox")!==-1||navigator.userAgent.indexOf("Edg")!==-1||navigator.userAgent.indexOf("Edge")!==-1}checkSupport(){let t={};return["Chrome","Firefox","Edg","Edge"].some(e=>navigator.userAgent.indexOf(e)!==-1)?t.isSupported=!0:(t.isSupported=!1,t.errType=ud.Vy.PLATFORM_NOT_SUPPORTED,t.errMsg="browser not supported for plugin, see docs"),t}getName(){return ST.name}getPluginType(){return ud.MQ.TRANSFORM}setBackground(t){return _t(this,null,function*(){if(t!=="")if(t==="none")this.log($r,"setting background to :",t),this.background="none",this.backgroundType="none",this.isVirtualBackground=!1;else if(t==="blur")this.log($r,"setting background to :",t),this.background="blur",this.backgroundType="blur",this.isVirtualBackground=!1;else if(t instanceof HTMLImageElement){this.log("setting background to image",t);let e=yield this.setImage(t);if(!e||!e.complete||!e.naturalHeight)throw new Error("Invalid image. Provide a valid and successfully loaded HTMLImageElement");this.isVirtualBackground=!0,this.backgroundImage=e,this.backgroundType="image"}else if(t instanceof HTMLVideoElement)this.log("setting background to video",t),this.backgroundVideo=t,this.backgroundVideo.crossOrigin="anonymous",this.backgroundVideo.muted=!0,this.backgroundVideo.loop=!0,this.backgroundVideo.oncanplaythrough=()=>_t(this,null,function*(){this.backgroundVideo!=null&&(yield this.backgroundVideo.play(),this.isVirtualBackground=!0,this.backgroundType="video")});else if(console.log("setting gif to background"),this.gifFrames=yield this.setGiF(t),this.gifFrames!=null&&this.gifFrames.length>0)this.backgroundType="gif",this.isVirtualBackground=!0;else throw new Error("Invalid background supplied, see the docs to check supported background type");else throw new Error("Invalid background supplied, see the docs to check supported background type")})}stop(){var t,e;this.isVirtualBackground&&((t=this.backgroundImage)==null||t.removeAttribute("src"),(e=this.backgroundVideo)==null||e.removeAttribute("src"),this.backgroundType==="video"&&(this.backgroundVideo.loop=!1,this.backgroundVideo=null)),this.outputCtx&&(this.outputCtx.fillStyle="rgb(0, 0, 0)",this.outputCtx.fillRect(0,0,this.output.width,this.output.height)),this.gifFrameImageData=null,this.gifFrames=null,this.giflocalCount=0,this.gifFramesIndex=0}processVideoFrame(t,e,n){if(!t||!e)throw new Error("Plugin invalid input/output");this.input=t,this.output=e;let s=e.getContext("2d");if(s.canvas.width!==t.width&&(s.canvas.width=t.width),s.canvas.height!==t.height&&(s.canvas.height=t.height),this.backgroundType==="video"&&(this.backgroundVideo.width=t.width,this.backgroundVideo.height=t.height),this.outputCtx=s,this.imageAspectRatio=t.width/t.height,this.imageAspectRatio<=0)throw new Error("Invalid input width/height");let r=()=>_t(this,null,function*(){yield this.runSegmentation(n)});this.background==="none"&&!this.isVirtualBackground?(this.outputCtx.globalCompositeOperation="copy",this.outputCtx.filter="none",this.outputCtx.drawImage(t,0,0,t.width,t.height)):r()}setImage(t){return _t(this,null,function*(){return t.crossOrigin="anonymous",new Promise((e,n)=>{t.onload=()=>e(t),t.onerror=n})})}setGiF(t){return fetch(t).then(e=>e.arrayBuffer()).then(e=>(0,ld.vq)(e)).then(e=>(0,ld.zw)(e,!0))}log(t,...e){console.info(t,...e)}resizeInputData(){this.personMaskCtx.drawImage(this.input,0,0,this.input.width,this.input.height,0,0,this.personMaskWidth,this.personMaskHeight);let t=this.personMaskCtx.getImageData(0,0,this.personMaskWidth,this.personMaskHeight),e=this.tfLite._getInputMemoryOffset()/4;for(let n=0;n<this.personMaskPixelCount;n++)this.tfLite.HEAPF32[e+n*3]=t.data[n*4]/255,this.tfLite.HEAPF32[e+n*3+1]=t.data[n*4+1]/255,this.tfLite.HEAPF32[e+n*3+2]=t.data[n*4+2]/255}infer(t){t||this.tfLite._runInference();let e=this.tfLite._getOutputMemoryOffset()/4;for(let n=0;n<this.personMaskPixelCount;n++)if(this.modelName==="meet"){let s=this.tfLite.HEAPF32[e+n*2],r=this.tfLite.HEAPF32[e+n*2+1],o=Math.max(s,r),i=Math.exp(s-o),a=Math.exp(r-o);this.personMask.data[n*4+3]=255*a/(i+a)}else if(this.modelName==="landscape-segmentation"){let s=this.tfLite.HEAPF32[e+n];this.personMask.data[n*4+3]=255*s}this.personMaskCtx.putImageData(this.personMask,0,0)}postProcessing(){this.outputCtx.globalCompositeOperation="copy",this.outputCtx.filter="none",this.isVirtualBackground?this.outputCtx.filter="blur(4px)":this.outputCtx.filter="blur(8px)",this.drawPersonMask(),this.outputCtx.globalCompositeOperation="source-in",this.outputCtx.filter="none",this.outputCtx.drawImage(this.input,0,0),this.enableSharpening&&this.output.width>ET&&this.output.height>RT&&this.output.width<TT&&this.output.height<kT&&this.sharpenFilter(),this.drawSegmentedBackground()}sharpenFilter(){let t=this.outputCtx.getImageData(0,0,this.output.width,this.output.height),e=this.filters.convolute(t);this.outputCtx.putImageData(e,0,0)}drawPersonMask(){this.outputCtx.drawImage(this.personMaskCanvas,0,0,this.personMaskWidth,this.personMaskHeight,0,0,this.output.width,this.output.height)}drawSegmentedBackground(){this.outputCtx.globalCompositeOperation="destination-over",this.outputCtx.imageSmoothingEnabled=!0,this.outputCtx.imageSmoothingQuality="high",this.isVirtualBackground?this.backgroundType==="video"&&this.backgroundVideo!=null&&this.backgroundVideo.readyState>=4?this.fitVideoToBackground():this.backgroundType==="image"?this.fitImageToBackground():this.backgroundType==="gif"&&(this.giflocalCount>this.gifFrames[this.gifFramesIndex].delay/IT?(this.gifFramesIndex++,this.gifFramesIndex>=this.gifFrames.length&&(this.gifFramesIndex=0),this.giflocalCount=0):this.giflocalCount++,this.fitGifToBackground()):this.addBlurToBackground()}runSegmentation(t){return _t(this,null,function*(){this.tfLite&&(this.resizeInputData(),yield this.infer(t),this.postProcessing())})}fitVideoToBackground(){this.fitData(this.backgroundVideo,this.backgroundVideo.videoWidth,this.backgroundVideo.videoHeight)}fitImageToBackground(){this.fitData(this.backgroundImage,this.backgroundImage.width,this.backgroundImage.height)}fitGifToBackground(){if(this.gifFrameImageData==null){let t=this.gifFrames[this.gifFramesIndex].dims;this.tempGifCanvas.width=t.width,this.tempGifCanvas.height=t.height,this.gifFrameImageData=this.tempGifContext.createImageData(t.width,t.height)}this.gifFrameImageData.data.set(this.gifFrames[this.gifFramesIndex].patch),this.tempGifContext.putImageData(this.gifFrameImageData,0,0),this.fitData(this.tempGifCanvas,this.gifFrameImageData.width,this.gifFrameImageData.height)}fitData(t,e,n){let s,r,o,i;e/n<this.imageAspectRatio?(s=e,r=e/this.imageAspectRatio,o=0,i=(n-r)/2):(r=n,s=n*this.imageAspectRatio,i=0,o=(e-s)/2),this.outputCtx.drawImage(t,o,i,s,r,0,0,this.output.width,this.output.height)}addBlurToBackground(){return _t(this,null,function*(){let t="15px";this.input.width<=160?t="5px":this.input.width<=320?t="10px":this.input.width<=640?t="15px":this.input.width<=960?t="20px":this.input.width<=1280?t="25px":this.input.width<=1920&&(t="30px"),this.outputCtx.filter=`blur(${t})`,this.outputCtx.drawImage(this.input,0,0,this.output.width,this.output.height)})}initSharpenFilter(){this.filters.tmpCanvas=document.createElement("canvas"),this.filters.tmpCtx=this.filters.tmpCanvas.getContext("2d"),this.filters.createImageData=(t,e)=>this.filters.tmpCtx.createImageData(t,e),this.filters.convolute=(t,e=[0,-1,0,-1,5,-1,0,-1,0],n)=>{let s=Math.round(Math.sqrt(e.length)),r=Math.floor(s/2),o=t.data,i=t.width,a=t.height,c=i,l=a,u=this.filters.createImageData(c,l),d=u.data,h=n?1:0;for(let f=0;f<l;f=f+1)for(let p=0;p<c;p=p+1){let g=(f*c+p)*4;if(o[g+3]!==0&&p<c&&f<l){let m=f,x=p,b=0,w=0,y=0,$=0;for(let N=0;N<s;N++)for(let R=0;R<s;R++){let k=m+N-r,B=x+R-r;if(k>=0&&k<a&&B>=0&&B<i){let U=(k*i+B)*4,Q=e[N*s+R];b+=o[U]*Q,w+=o[U+1]*Q,y+=o[U+2]*Q,$+=o[U+3]*Q}}d[g]=b,d[g+1]=w,d[g+2]=y,d[g+3]=$+h*(255-$)}}return u}}}},6474:(At,W)=>{"use strict";Object.defineProperty(W,"__esModule",{value:!0}),W.deinterlace=void 0;var M=function(G,ae){for(var ce=new Array(G.length),Z=G.length/ae,H=function(X,K){var q=G.slice(K*ae,(K+1)*ae);ce.splice.apply(ce,[X*ae,ae].concat(q))},he=[0,4,2,1],te=[8,8,4,2],j=0,le=0;le<4;le++)for(var V=he[le];V<Z;V+=te[le])H(V,j),j++;return ce};W.deinterlace=M},3242:(At,W,M)=>{"use strict";var ee;ee={value:!0},W.zw=ee=W.vq=void 0;var G=he(M(2075)),ae=M(7979),ce=M(3095),Z=M(6474),H=M(1358);function he(F){return F&&F.__esModule?F:{default:F}}var te=function(X){var K=new Uint8Array(X);return(0,ae.parse)((0,ce.buildStream)(K),G.default)};W.vq=te;var j=function(X){for(var K=X.pixels.length,q=new Uint8ClampedArray(K*4),Y=0;Y<K;Y++){var ue=Y*4,v=X.pixels[Y],ne=X.colorTable[v]||[0,0,0];q[ue]=ne[0],q[ue+1]=ne[1],q[ue+2]=ne[2],q[ue+3]=v!==X.transparentIndex?255:0}return q},le=function(X,K,q){if(!X.image){console.warn("gif frame does not have associated image.");return}var Y=X.image,ue=Y.descriptor.width*Y.descriptor.height,v=(0,H.lzw)(Y.data.minCodeSize,Y.data.blocks,ue);Y.descriptor.lct.interlaced&&(v=(0,Z.deinterlace)(v,Y.descriptor.width));var ne={pixels:v,dims:{top:X.image.descriptor.top,left:X.image.descriptor.left,width:X.image.descriptor.width,height:X.image.descriptor.height}};return Y.descriptor.lct&&Y.descriptor.lct.exists?ne.colorTable=Y.lct:ne.colorTable=K,X.gce&&(ne.delay=(X.gce.delay||10)*10,ne.disposalType=X.gce.extras.disposal,X.gce.extras.transparentColorGiven&&(ne.transparentIndex=X.gce.transparentColorIndex)),q&&(ne.patch=j(ne)),ne};ee=le;var V=function(X,K){return X.frames.filter(function(q){return q.image}).map(function(q){return le(q,X.gct,K)})};W.zw=V},1358:(At,W)=>{"use strict";Object.defineProperty(W,"__esModule",{value:!0}),W.lzw=void 0;var M=function(G,ae,ce){var Z=4096,H=-1,he=ce,te,j,le,V,F,X,K,ve,q,Y,D,ue,E,C,J,P,v=new Array(ce),ne=new Array(Z),He=new Array(Z),Te=new Array(Z+1);for(ue=G,j=1<<ue,F=j+1,te=j+2,K=H,V=ue+1,le=(1<<V)-1,q=0;q<j;q++)ne[q]=0,He[q]=q;var D,ve,T,E,C,P,J;for(D=ve=T=E=C=P=J=0,Y=0;Y<he;){if(C===0){if(ve<V){D+=ae[J]<<ve,ve+=8,J++;continue}if(q=D&le,D>>=V,ve-=V,q>te||q==F)break;if(q==j){V=ue+1,le=(1<<V)-1,te=j+2,K=H;continue}if(K==H){Te[C++]=He[q],K=q,E=q;continue}for(X=q,q==te&&(Te[C++]=E,q=K);q>j;)Te[C++]=He[q],q=ne[q];E=He[q]&255,Te[C++]=E,te<Z&&(ne[te]=K,He[te]=E,te++,(te&le)===0&&te<Z&&(V++,le+=te)),K=X}C--,v[P++]=Te[C],Y++}for(Y=P;Y<he;Y++)v[Y]=0;return v};W.lzw=M},7979:(At,W)=>{"use strict";Object.defineProperty(W,"__esModule",{value:!0}),W.loop=W.conditional=W.parse=void 0;var M=function ae(ce,Z){var H=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},he=arguments.length>3&&arguments[3]!==void 0?arguments[3]:H;if(Array.isArray(Z))Z.forEach(function(j){return ae(ce,j,H,he)});else if(typeof Z=="function")Z(ce,H,he,ae);else{var te=Object.keys(Z)[0];Array.isArray(Z[te])?(he[te]={},ae(ce,Z[te],H,he[te])):he[te]=Z[te](ce,H,he,ae)}return H};W.parse=M;var ee=function(ce,Z){return function(H,he,te,j){Z(H,he,te)&&j(H,ce,he,te)}};W.conditional=ee;var G=function(ce,Z){return function(H,he,te,j){for(var le=[],V=H.pos;Z(H,he,te);){var F={};if(j(H,ce,he,F),H.pos===V)break;V=H.pos,le.push(F)}return le}};W.loop=G},3095:(At,W)=>{"use strict";Object.defineProperty(W,"__esModule",{value:!0}),W.readBits=W.readArray=W.readUnsigned=W.readString=W.peekBytes=W.readBytes=W.peekByte=W.readByte=W.buildStream=void 0;var M=function(V){return{data:V,pos:0}};W.buildStream=M;var ee=function(){return function(V){return V.data[V.pos++]}};W.readByte=ee;var G=function(){var V=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return function(F){return F.data[F.pos+V]}};W.peekByte=G;var ae=function(V){return function(F){return F.data.subarray(F.pos,F.pos+=V)}};W.readBytes=ae;var ce=function(V){return function(F){return F.data.subarray(F.pos,F.pos+V)}};W.peekBytes=ce;var Z=function(V){return function(F){return Array.from(ae(V)(F)).map(function(X){return String.fromCharCode(X)}).join("")}};W.readString=Z;var H=function(V){return function(F){var X=ae(2)(F);return V?(X[1]<<8)+X[0]:(X[0]<<8)+X[1]}};W.readUnsigned=H;var he=function(V,F){return function(X,K,q){for(var Y=typeof F=="function"?F(X,K,q):F,ue=ae(V),v=new Array(Y),ne=0;ne<Y;ne++)v[ne]=ue(X);return v}};W.readArray=he;var te=function(V,F,X){for(var K=0,q=0;q<X;q++)K+=V[F+q]&&Math.pow(2,X-q-1);return K},j=function(V){return function(F){for(var X=ee()(F),K=new Array(8),q=0;q<8;q++)K[7-q]=!!(X&1<<q);return Object.keys(V).reduce(function(Y,ue){var v=V[ue];return v.length?Y[ue]=te(K,v.index,v.length):Y[ue]=K[v.index],Y},{})}};W.readBits=j},2075:(At,W,M)=>{"use strict";Object.defineProperty(W,"__esModule",{value:!0}),W.default=void 0;var ee=M(7979),G=M(3095),ae={blocks:function(F){for(var X=0,K=[],q=F.data.length,Y=0,ue=(0,G.readByte)()(F);ue!==X&&ue;ue=(0,G.readByte)()(F)){if(F.pos+ue>=q){var v=q-F.pos;K.push((0,G.readBytes)(v)(F)),Y+=v;break}K.push((0,G.readBytes)(ue)(F)),Y+=ue}for(var ne=new Uint8Array(Y),He=0,Te=0;Te<K.length;Te++)ne.set(K[Te],He),He+=K[Te].length;return ne}},ce=(0,ee.conditional)({gce:[{codes:(0,G.readBytes)(2)},{byteSize:(0,G.readByte)()},{extras:(0,G.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,G.readUnsigned)(!0)},{transparentColorIndex:(0,G.readByte)()},{terminator:(0,G.readByte)()}]},function(V){var F=(0,G.peekBytes)(2)(V);return F[0]===33&&F[1]===249}),Z=(0,ee.conditional)({image:[{code:(0,G.readByte)()},{descriptor:[{left:(0,G.readUnsigned)(!0)},{top:(0,G.readUnsigned)(!0)},{width:(0,G.readUnsigned)(!0)},{height:(0,G.readUnsigned)(!0)},{lct:(0,G.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,ee.conditional)({lct:(0,G.readArray)(3,function(V,F,X){return Math.pow(2,X.descriptor.lct.size+1)})},function(V,F,X){return X.descriptor.lct.exists}),{data:[{minCodeSize:(0,G.readByte)()},ae]}]},function(V){return(0,G.peekByte)()(V)===44}),H=(0,ee.conditional)({text:[{codes:(0,G.readBytes)(2)},{blockSize:(0,G.readByte)()},{preData:function(F,X,K){return(0,G.readBytes)(K.text.blockSize)(F)}},ae]},function(V){var F=(0,G.peekBytes)(2)(V);return F[0]===33&&F[1]===1}),he=(0,ee.conditional)({application:[{codes:(0,G.readBytes)(2)},{blockSize:(0,G.readByte)()},{id:function(F,X,K){return(0,G.readString)(K.blockSize)(F)}},ae]},function(V){var F=(0,G.peekBytes)(2)(V);return F[0]===33&&F[1]===255}),te=(0,ee.conditional)({comment:[{codes:(0,G.readBytes)(2)},ae]},function(V){var F=(0,G.peekBytes)(2)(V);return F[0]===33&&F[1]===254}),j=[{header:[{signature:(0,G.readString)(3)},{version:(0,G.readString)(3)}]},{lsd:[{width:(0,G.readUnsigned)(!0)},{height:(0,G.readUnsigned)(!0)},{gct:(0,G.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,G.readByte)()},{pixelAspectRatio:(0,G.readByte)()}]},(0,ee.conditional)({gct:(0,G.readArray)(3,function(V,F){return Math.pow(2,F.lsd.gct.size+1)})},function(V,F){return F.lsd.gct.exists}),{frames:(0,ee.loop)([ce,he,te,Z,H],function(V){var F=(0,G.peekByte)()(V);return F===33||F===44})}],le=j;W.default=le},3968:At=>{At.exports=M;var W=null;try{W=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function M(E,C,P){this.low=E|0,this.high=C|0,this.unsigned=!!P}M.prototype.__isLong__,Object.defineProperty(M.prototype,"__isLong__",{value:!0});function ee(E){return(E&&E.__isLong__)===!0}M.isLong=ee;var G={},ae={};function ce(E,C){var P,J,fe;return C?(E>>>=0,(fe=0<=E&&E<256)&&(J=ae[E],J)?J:(P=H(E,(E|0)<0?-1:0,!0),fe&&(ae[E]=P),P)):(E|=0,(fe=-128<=E&&E<128)&&(J=G[E],J)?J:(P=H(E,E<0?-1:0,!1),fe&&(G[E]=P),P))}M.fromInt=ce;function Z(E,C){if(isNaN(E))return C?ue:Y;if(C){if(E<0)return ue;if(E>=X)return D}else{if(E<=-K)return ve;if(E+1>=K)return Te}return E<0?Z(-E,C).neg():H(E%F|0,E/F|0,C)}M.fromNumber=Z;function H(E,C,P){return new M(E,C,P)}M.fromBits=H;var he=Math.pow;function te(E,C,P){if(E.length===0)throw Error("empty string");if(E==="NaN"||E==="Infinity"||E==="+Infinity"||E==="-Infinity")return Y;if(typeof C=="number"?(P=C,C=!1):C=!!C,P=P||10,P<2||36<P)throw RangeError("radix");var J;if((J=E.indexOf("-"))>0)throw Error("interior hyphen");if(J===0)return te(E.substring(1),C,P).neg();for(var fe=Z(he(P,8)),me=Y,Se=0;Se<E.length;Se+=8){var oe=Math.min(8,E.length-Se),Ee=parseInt(E.substring(Se,Se+oe),P);if(oe<8){var xe=Z(he(P,oe));me=me.mul(xe).add(Z(Ee))}else me=me.mul(fe),me=me.add(Z(Ee))}return me.unsigned=C,me}M.fromString=te;function j(E,C){return typeof E=="number"?Z(E,C):typeof E=="string"?te(E,C):H(E.low,E.high,typeof C=="boolean"?C:E.unsigned)}M.fromValue=j;var le=1<<16,V=1<<24,F=le*le,X=F*F,K=X/2,q=ce(V),Y=ce(0);M.ZERO=Y;var ue=ce(0,!0);M.UZERO=ue;var v=ce(1);M.ONE=v;var ne=ce(1,!0);M.UONE=ne;var He=ce(-1);M.NEG_ONE=He;var Te=H(-1,2147483647,!1);M.MAX_VALUE=Te;var D=H(-1,-1,!0);M.MAX_UNSIGNED_VALUE=D;var ve=H(0,-2147483648,!1);M.MIN_VALUE=ve;var T=M.prototype;T.toInt=function(){return this.unsigned?this.low>>>0:this.low},T.toNumber=function(){return this.unsigned?(this.high>>>0)*F+(this.low>>>0):this.high*F+(this.low>>>0)},T.toString=function(C){if(C=C||10,C<2||36<C)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(ve)){var P=Z(C),J=this.div(P),fe=J.mul(P).sub(this);return J.toString(C)+fe.toInt().toString(C)}else return"-"+this.neg().toString(C);for(var me=Z(he(C,6),this.unsigned),Se=this,oe="";;){var Ee=Se.div(me),xe=Se.sub(Ee.mul(me)).toInt()>>>0,se=xe.toString(C);if(Se=Ee,Se.isZero())return se+oe;for(;se.length<6;)se="0"+se;oe=""+se+oe}},T.getHighBits=function(){return this.high},T.getHighBitsUnsigned=function(){return this.high>>>0},T.getLowBits=function(){return this.low},T.getLowBitsUnsigned=function(){return this.low>>>0},T.getNumBitsAbs=function(){if(this.isNegative())return this.eq(ve)?64:this.neg().getNumBitsAbs();for(var C=this.high!=0?this.high:this.low,P=31;P>0&&(C&1<<P)==0;P--);return this.high!=0?P+33:P+1},T.isZero=function(){return this.high===0&&this.low===0},T.eqz=T.isZero,T.isNegative=function(){return!this.unsigned&&this.high<0},T.isPositive=function(){return this.unsigned||this.high>=0},T.isOdd=function(){return(this.low&1)===1},T.isEven=function(){return(this.low&1)===0},T.equals=function(C){return ee(C)||(C=j(C)),this.unsigned!==C.unsigned&&this.high>>>31===1&&C.high>>>31===1?!1:this.high===C.high&&this.low===C.low},T.eq=T.equals,T.notEquals=function(C){return!this.eq(C)},T.neq=T.notEquals,T.ne=T.notEquals,T.lessThan=function(C){return this.comp(C)<0},T.lt=T.lessThan,T.lessThanOrEqual=function(C){return this.comp(C)<=0},T.lte=T.lessThanOrEqual,T.le=T.lessThanOrEqual,T.greaterThan=function(C){return this.comp(C)>0},T.gt=T.greaterThan,T.greaterThanOrEqual=function(C){return this.comp(C)>=0},T.gte=T.greaterThanOrEqual,T.ge=T.greaterThanOrEqual,T.compare=function(C){if(ee(C)||(C=j(C)),this.eq(C))return 0;var P=this.isNegative(),J=C.isNegative();return P&&!J?-1:!P&&J?1:this.unsigned?C.high>>>0>this.high>>>0||C.high===this.high&&C.low>>>0>this.low>>>0?-1:1:this.sub(C).isNegative()?-1:1},T.comp=T.compare,T.negate=function(){return!this.unsigned&&this.eq(ve)?ve:this.not().add(v)},T.neg=T.negate,T.add=function(C){ee(C)||(C=j(C));var P=this.high>>>16,J=this.high&65535,fe=this.low>>>16,me=this.low&65535,Se=C.high>>>16,oe=C.high&65535,Ee=C.low>>>16,xe=C.low&65535,se=0,Ke=0,Re=0,Pe=0;return Pe+=me+xe,Re+=Pe>>>16,Pe&=65535,Re+=fe+Ee,Ke+=Re>>>16,Re&=65535,Ke+=J+oe,se+=Ke>>>16,Ke&=65535,se+=P+Se,se&=65535,H(Re<<16|Pe,se<<16|Ke,this.unsigned)},T.subtract=function(C){return ee(C)||(C=j(C)),this.add(C.neg())},T.sub=T.subtract,T.multiply=function(C){if(this.isZero())return Y;if(ee(C)||(C=j(C)),W){var P=W.mul(this.low,this.high,C.low,C.high);return H(P,W.get_high(),this.unsigned)}if(C.isZero())return Y;if(this.eq(ve))return C.isOdd()?ve:Y;if(C.eq(ve))return this.isOdd()?ve:Y;if(this.isNegative())return C.isNegative()?this.neg().mul(C.neg()):this.neg().mul(C).neg();if(C.isNegative())return this.mul(C.neg()).neg();if(this.lt(q)&&C.lt(q))return Z(this.toNumber()*C.toNumber(),this.unsigned);var J=this.high>>>16,fe=this.high&65535,me=this.low>>>16,Se=this.low&65535,oe=C.high>>>16,Ee=C.high&65535,xe=C.low>>>16,se=C.low&65535,Ke=0,Re=0,Pe=0,Xe=0;return Xe+=Se*se,Pe+=Xe>>>16,Xe&=65535,Pe+=me*se,Re+=Pe>>>16,Pe&=65535,Pe+=Se*xe,Re+=Pe>>>16,Pe&=65535,Re+=fe*se,Ke+=Re>>>16,Re&=65535,Re+=me*xe,Ke+=Re>>>16,Re&=65535,Re+=Se*Ee,Ke+=Re>>>16,Re&=65535,Ke+=J*se+fe*xe+me*Ee+Se*oe,Ke&=65535,H(Pe<<16|Xe,Ke<<16|Re,this.unsigned)},T.mul=T.multiply,T.divide=function(C){if(ee(C)||(C=j(C)),C.isZero())throw Error("division by zero");if(W){if(!this.unsigned&&this.high===-2147483648&&C.low===-1&&C.high===-1)return this;var P=(this.unsigned?W.div_u:W.div_s)(this.low,this.high,C.low,C.high);return H(P,W.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?ue:Y;var J,fe,me;if(this.unsigned){if(C.unsigned||(C=C.toUnsigned()),C.gt(this))return ue;if(C.gt(this.shru(1)))return ne;me=ue}else{if(this.eq(ve)){if(C.eq(v)||C.eq(He))return ve;if(C.eq(ve))return v;var Se=this.shr(1);return J=Se.div(C).shl(1),J.eq(Y)?C.isNegative()?v:He:(fe=this.sub(C.mul(J)),me=J.add(fe.div(C)),me)}else if(C.eq(ve))return this.unsigned?ue:Y;if(this.isNegative())return C.isNegative()?this.neg().div(C.neg()):this.neg().div(C).neg();if(C.isNegative())return this.div(C.neg()).neg();me=Y}for(fe=this;fe.gte(C);){J=Math.max(1,Math.floor(fe.toNumber()/C.toNumber()));for(var oe=Math.ceil(Math.log(J)/Math.LN2),Ee=oe<=48?1:he(2,oe-48),xe=Z(J),se=xe.mul(C);se.isNegative()||se.gt(fe);)J-=Ee,xe=Z(J,this.unsigned),se=xe.mul(C);xe.isZero()&&(xe=v),me=me.add(xe),fe=fe.sub(se)}return me},T.div=T.divide,T.modulo=function(C){if(ee(C)||(C=j(C)),W){var P=(this.unsigned?W.rem_u:W.rem_s)(this.low,this.high,C.low,C.high);return H(P,W.get_high(),this.unsigned)}return this.sub(this.div(C).mul(C))},T.mod=T.modulo,T.rem=T.modulo,T.not=function(){return H(~this.low,~this.high,this.unsigned)},T.and=function(C){return ee(C)||(C=j(C)),H(this.low&C.low,this.high&C.high,this.unsigned)},T.or=function(C){return ee(C)||(C=j(C)),H(this.low|C.low,this.high|C.high,this.unsigned)},T.xor=function(C){return ee(C)||(C=j(C)),H(this.low^C.low,this.high^C.high,this.unsigned)},T.shiftLeft=function(C){return ee(C)&&(C=C.toInt()),(C&=63)===0?this:C<32?H(this.low<<C,this.high<<C|this.low>>>32-C,this.unsigned):H(0,this.low<<C-32,this.unsigned)},T.shl=T.shiftLeft,T.shiftRight=function(C){return ee(C)&&(C=C.toInt()),(C&=63)===0?this:C<32?H(this.low>>>C|this.high<<32-C,this.high>>C,this.unsigned):H(this.high>>C-32,this.high>=0?0:-1,this.unsigned)},T.shr=T.shiftRight,T.shiftRightUnsigned=function(C){if(ee(C)&&(C=C.toInt()),C&=63,C===0)return this;var P=this.high;if(C<32){var J=this.low;return H(J>>>C|P<<32-C,P>>>C,this.unsigned)}else return C===32?H(P,0,this.unsigned):H(P>>>C-32,0,this.unsigned)},T.shru=T.shiftRightUnsigned,T.shr_u=T.shiftRightUnsigned,T.toSigned=function(){return this.unsigned?H(this.low,this.high,!1):this},T.toUnsigned=function(){return this.unsigned?this:H(this.low,this.high,!0)},T.toBytes=function(C){return C?this.toBytesLE():this.toBytesBE()},T.toBytesLE=function(){var C=this.high,P=this.low;return[P&255,P>>>8&255,P>>>16&255,P>>>24,C&255,C>>>8&255,C>>>16&255,C>>>24]},T.toBytesBE=function(){var C=this.high,P=this.low;return[C>>>24,C>>>16&255,C>>>8&255,C&255,P>>>24,P>>>16&255,P>>>8&255,P&255]},M.fromBytes=function(C,P,J){return J?M.fromBytesLE(C,P):M.fromBytesBE(C,P)},M.fromBytesLE=function(C,P){return new M(C[0]|C[1]<<8|C[2]<<16|C[3]<<24,C[4]|C[5]<<8|C[6]<<16|C[7]<<24,P)},M.fromBytesBE=function(C,P){return new M(C[4]<<24|C[5]<<16|C[6]<<8|C[7],C[0]<<24|C[1]<<16|C[2]<<8|C[3],P)}}}]);

//# sourceMappingURL=175.d1135c50.js.map