"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[355],{5355:function(t,e,r){let s;r.d(e,{a:function(){return E}});var i=r(6298),n=r(9948),u=r(4939),h=r(9010),a=r(2459),c=class extends h.l{constructor(t,e){super(),this.options=e,this.#t=t,this.#e=null,this.bindMethods(),this.setOptions(e)}#t;#r=void 0;#s=void 0;#i=void 0;#n;#u;#e;#h;#a;#c;#o;#l;#d;#p=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.#r.addObserver(this),o(this.#r,this.options)?this.#f():this.updateResult(),this.#y())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return l(this.#r,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return l(this.#r,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#R(),this.#v(),this.#r.removeObserver(this)}setOptions(t,e){let r=this.options,s=this.#r;if(this.options=this.#t.defaultQueryOptions(t),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled&&"function"!=typeof this.options.enabled&&"boolean"!=typeof(0,i.Nc)(this.options.enabled,this.#r))throw Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#b(),this.#r.setOptions(this.options),r._defaulted&&!(0,i.VS)(this.options,r)&&this.#t.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#r,observer:this});let n=this.hasListeners();n&&d(this.#r,s,this.options,r)&&this.#f(),this.updateResult(e),n&&(this.#r!==s||(0,i.Nc)(this.options.enabled,this.#r)!==(0,i.Nc)(r.enabled,this.#r)||(0,i.KC)(this.options.staleTime,this.#r)!==(0,i.KC)(r.staleTime,this.#r))&&this.#Q();let u=this.#m();n&&(this.#r!==s||(0,i.Nc)(this.options.enabled,this.#r)!==(0,i.Nc)(r.enabled,this.#r)||u!==this.#d)&&this.#O(u)}getOptimisticResult(t){let e=this.#t.getQueryCache().build(this.#t,t),r=this.createResult(e,t);return(0,i.VS)(this.getCurrentResult(),r)||(this.#i=r,this.#u=this.options,this.#n=this.#r.state),r}getCurrentResult(){return this.#i}trackResult(t,e){let r={};return Object.keys(t).forEach(s=>{Object.defineProperty(r,s,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(s),e?.(s),t[s])})}),r}trackProp(t){this.#p.add(t)}getCurrentQuery(){return this.#r}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){let e=this.#t.defaultQueryOptions(t),r=this.#t.getQueryCache().build(this.#t,e);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,e))}fetch(t){return this.#f({...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#i))}#f(t){this.#b();let e=this.#r.fetch(this.options,t);return t?.throwOnError||(e=e.catch(i.ZT)),e}#Q(){this.#R();let t=(0,i.KC)(this.options.staleTime,this.#r);if(i.sk||this.#i.isStale||!(0,i.PN)(t))return;let e=(0,i.Kp)(this.#i.dataUpdatedAt,t);this.#o=setTimeout(()=>{this.#i.isStale||this.updateResult()},e+1)}#m(){return("function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.#r):this.options.refetchInterval)??!1}#O(t){this.#v(),this.#d=t,!i.sk&&!1!==(0,i.Nc)(this.options.enabled,this.#r)&&(0,i.PN)(this.#d)&&0!==this.#d&&(this.#l=setInterval(()=>{(this.options.refetchIntervalInBackground||u.j.isFocused())&&this.#f()},this.#d))}#y(){this.#Q(),this.#O(this.#m())}#R(){this.#o&&(clearTimeout(this.#o),this.#o=void 0)}#v(){this.#l&&(clearInterval(this.#l),this.#l=void 0)}createResult(t,e){let r;let s=this.#r,n=this.options,u=this.#i,h=this.#n,c=this.#u,l=t!==s?t.state:this.#s,{state:f}=t,y={...f},R=!1;if(e._optimisticResults){let r=this.hasListeners(),i=!r&&o(t,e),u=r&&d(t,s,e,n);(i||u)&&(y={...y,...(0,a.z)(f.data,t.options)}),"isRestoring"===e._optimisticResults&&(y.fetchStatus="idle")}let{error:v,errorUpdatedAt:b,status:Q}=y;if(e.select&&void 0!==y.data){if(u&&y.data===h?.data&&e.select===this.#h)r=this.#a;else try{this.#h=e.select,r=e.select(y.data),r=(0,i.oE)(u?.data,r,e),this.#a=r,this.#e=null}catch(t){this.#e=t}}else r=y.data;if(void 0!==e.placeholderData&&void 0===r&&"pending"===Q){let t;if(u?.isPlaceholderData&&e.placeholderData===c?.placeholderData)t=u.data;else if(t="function"==typeof e.placeholderData?e.placeholderData(this.#c?.state.data,this.#c):e.placeholderData,e.select&&void 0!==t)try{t=e.select(t),this.#e=null}catch(t){this.#e=t}void 0!==t&&(Q="success",r=(0,i.oE)(u?.data,t,e),R=!0)}this.#e&&(v=this.#e,r=this.#a,b=Date.now(),Q="error");let m="fetching"===y.fetchStatus,O="pending"===Q,g="error"===Q,C=O&&m,I=void 0!==r;return{status:Q,fetchStatus:y.fetchStatus,isPending:O,isSuccess:"success"===Q,isError:g,isInitialLoading:C,isLoading:C,data:r,dataUpdatedAt:y.dataUpdatedAt,error:v,errorUpdatedAt:b,failureCount:y.fetchFailureCount,failureReason:y.fetchFailureReason,errorUpdateCount:y.errorUpdateCount,isFetched:y.dataUpdateCount>0||y.errorUpdateCount>0,isFetchedAfterMount:y.dataUpdateCount>l.dataUpdateCount||y.errorUpdateCount>l.errorUpdateCount,isFetching:m,isRefetching:m&&!O,isLoadingError:g&&!I,isPaused:"paused"===y.fetchStatus,isPlaceholderData:R,isRefetchError:g&&I,isStale:p(t,e),refetch:this.refetch}}updateResult(t){let e=this.#i,r=this.createResult(this.#r,this.options);if(this.#n=this.#r.state,this.#u=this.options,void 0!==this.#n.data&&(this.#c=this.#r),(0,i.VS)(r,e))return;this.#i=r;let s={};t?.listeners!==!1&&(()=>{if(!e)return!0;let{notifyOnChangeProps:t}=this.options,r="function"==typeof t?t():t;if("all"===r||!r&&!this.#p.size)return!0;let s=new Set(r??this.#p);return this.options.throwOnError&&s.add("error"),Object.keys(this.#i).some(t=>this.#i[t]!==e[t]&&s.has(t))})()&&(s.listeners=!0),this.#g({...s,...t})}#b(){let t=this.#t.getQueryCache().build(this.#t,this.options);if(t===this.#r)return;let e=this.#r;this.#r=t,this.#s=t.state,this.hasListeners()&&(e?.removeObserver(this),t.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#y()}#g(t){n.V.batch(()=>{t.listeners&&this.listeners.forEach(t=>{t(this.#i)}),this.#t.getQueryCache().notify({query:this.#r,type:"observerResultsUpdated"})})}};function o(t,e){return!1!==(0,i.Nc)(e.enabled,t)&&void 0===t.state.data&&!("error"===t.state.status&&!1===e.retryOnMount)||void 0!==t.state.data&&l(t,e,e.refetchOnMount)}function l(t,e,r){if(!1!==(0,i.Nc)(e.enabled,t)){let s="function"==typeof r?r(t):r;return"always"===s||!1!==s&&p(t,e)}return!1}function d(t,e,r,s){return(t!==e||!1===(0,i.Nc)(s.enabled,t))&&(!r.suspense||"error"!==t.state.status)&&p(t,r)}function p(t,e){return!1!==(0,i.Nc)(e.enabled,t)&&t.isStaleByTime((0,i.KC)(e.staleTime,t))}var f=r(2265);r(7437);var y=f.createContext((s=!1,{clearReset:()=>{s=!1},reset:()=>{s=!0},isReset:()=>s})),R=()=>f.useContext(y),v=r(3191),b=f.createContext(!1),Q=()=>f.useContext(b);b.Provider;var m=(t,e)=>{(t.suspense||t.throwOnError)&&!e.isReset()&&(t.retryOnMount=!1)},O=t=>{f.useEffect(()=>{t.clearReset()},[t])},g=t=>{var e;let{result:r,errorResetBoundary:s,throwOnError:i,query:n}=t;return r.isError&&!s.isReset()&&!r.isFetching&&n&&(e=[r.error,n],"function"==typeof i?i(...e):!!i)},C=t=>{t.suspense&&("number"!=typeof t.staleTime&&(t.staleTime=1e3),"number"==typeof t.gcTime&&(t.gcTime=Math.max(t.gcTime,1e3)))},I=(t,e)=>t?.suspense&&e.isPending,S=(t,e,r)=>e.fetchOptimistic(t).catch(()=>{r.clearReset()});function E(t,e){return function(t,e,r){var s,i,u,h;let a=(0,v.NL)(r),c=Q(),o=R(),l=a.defaultQueryOptions(t);null===(i=a.getDefaultOptions().queries)||void 0===i||null===(s=i._experimental_beforeQuery)||void 0===s||s.call(i,l),l._optimisticResults=c?"isRestoring":"optimistic",C(l),m(l,o),O(o);let[d]=f.useState(()=>new e(a,l)),p=d.getOptimisticResult(l);if(f.useSyncExternalStore(f.useCallback(t=>{let e=c?()=>void 0:d.subscribe(n.V.batchCalls(t));return d.updateResult(),e},[d,c]),()=>d.getCurrentResult(),()=>d.getCurrentResult()),f.useEffect(()=>{d.setOptions(l,{listeners:!1})},[l,d]),I(l,p))throw S(l,d,o);if(g({result:p,errorResetBoundary:o,throwOnError:l.throwOnError,query:a.getQueryCache().get(l.queryHash)}))throw p.error;return null===(h=a.getDefaultOptions().queries)||void 0===h||null===(u=h._experimental_afterQuery)||void 0===u||u.call(h,l,p),l.notifyOnChangeProps?p:d.trackResult(p)}(t,c,e)}}}]);