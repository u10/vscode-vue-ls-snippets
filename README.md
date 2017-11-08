# Vue Snippets for Visual Studio Code

This extension adds Vue Code Snippets and Syntax Highlight into Visual Studio Code.

## Vue Base Snippets

| Prefix | Snippet Content |
| --- | --- |
|`vbase`|&lt;template&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />&lt;/template&gt;<br /><br />&lt;script&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;export default {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;}<br />&lt;/script&gt;<br /><br />&lt;style scoped&gt;<br /><br />&lt;/style&gt;<br />|
|`script`|&lt;script&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<br />&lt;/script&gt;<br />|
|`styleLang`|&lt;style lang=&quot;&quot;&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<br />&lt;/style&gt;<br />|
|`template`|&lt;template&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<br />&lt;/template&gt;<br />|

## Vue Template Snippets

| Prefix | Snippet Content |
| --- | --- |
|`vClass`|&lt;div :class=&quot;{ className: data} &quot;&gt;&lt;/div&gt;<br />|
|`vClassObj`|&lt;div :class=&quot;[classNameA, classNameB]&quot;&gt;&lt;/div&gt;<br />|
|`vElProps`|&lt;component :propName=&quot;&quot;&gt;&lt;/component&gt;<br />|
|`vSrc`|&lt;img :src=&quot;&#39;/path/to/images/&#39; + fileName&quot; alt=&quot;altText&quot;/&gt;<br />|
|`vClassObjMult`|&lt;div :class=&quot;[classNameA, {classNameB : condition}]&quot;&gt;&lt;/div&gt;<br />|
|`vStyle`|&lt;div :style=&quot;{ fontSize: data} + &#39;px&#39; &quot;&gt;&lt;/div&gt;<br />|
|`vStyleObj`|&lt;div :style=&quot;[styleObjectA, styleObjectB]&quot;&gt;&lt;/div&gt;<br />|
|`vAnim`|&lt;transition<br />&nbsp;&nbsp;&nbsp;&nbsp;mode=&quot;out-in&quot;<br />&nbsp;&nbsp;&nbsp;&nbsp;@before-enter=&quot;beforeEnter&quot;<br />&nbsp;&nbsp;&nbsp;&nbsp;@enter=&quot;enter&quot;<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;@before-leave=&quot;beforeLeave&quot;<br />&nbsp;&nbsp;&nbsp;&nbsp;@leave=&quot;leave&quot;<br />&nbsp;&nbsp;&nbsp;&nbsp;:css=&quot;false&quot;&gt;<br /><br />&lt;/transition&gt;<br />|
|`vFor`|&lt;div v-for=&quot;item in items&quot; :key=&quot;item.id&quot;&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;{{ item} }<br />&lt;/div&gt;<br />|
|`vModel`|&lt;input v-model=&quot;data&quot; type=&quot;text&quot; /&gt;<br />|
|`vModelNum`|&lt;input v-model.number=&quot;numData&quot; type=&quot;number&quot; step=&quot;1&quot; /&gt;<br />|
|`v-on-click`|@click=&quot;handler(arg, \$event)&quot;<br />|
|`after-appear-event`|@after-appear=&quot;&quot;<br />|
|`after-enter-event`|@after-enter=&quot;&quot;<br />|
|`after-leave-event`|@after-leave=&quot;&quot;<br />|
|`appear-event`|@appear=&quot;&quot;<br />|
|`appear-active-class`|appear-active-class=&quot;&quot;<br />|
|`appear-cancelled-event`|@appear-cancelled=&quot;&quot;<br />|
|`appear-class`|appear-class=&quot;&quot;<br />|
|`appear-to-class`|appear-to-class=&quot;&quot;<br />|
|`before-appear-event`|@before-appear=&quot;&quot;<br />|
|`before-enter-event`|@before-enter=&quot;&quot;<br />|
|`befor-eleave-event`|@before-leave=&quot;&quot;<br />|
|`component`|&lt;component :is=&quot;componentId&quot;&gt;&lt;/component&gt;<br />|
|`enter-event`|@enter=&quot;&quot;<br />|
|`enter-active-class`|enter-active-class=&quot;&quot;<br />|
|`enter-cancelled-event`|@enter-cancelled=&quot;&quot;<br />|
|`enter-class`|enter-class=&quot;&quot;<br />|
|`enter-to-class`|enter-to-class=&quot;&quot;<br />|
|`keepAlive`|&lt;keep-alive&gt;<br /><br />&lt;/keep-alive&gt;<br />|
|`key`|:key=&quot;key&quot;<br />|
|`leave-event`|@leave=&quot;&quot;<br />|
|`leave-active-class`|leave-active-class=&quot;&quot;<br />|
|`leave-cancelled-event`|@leave-cancelled=&quot;&quot;<br />|
|`leave-class`|leave-class=&quot;&quot;<br />|
|`leave-to-class`|leave-to-class=&quot;&quot;<br />|
|`ref`|ref=&quot;reference&quot;<br />|
|`routerLink`|&lt;router-link &gt;&lt;/router-link&gt;<br />|
|`routerLinkTo`|&lt;router-link to=&quot;&quot;&gt;&lt;/router-link&gt;<br />|
|`routerView`|&lt;router-view&gt;&lt;/router-view&gt;<br />|
|`slotA`|slot=&quot;&quot;<br />|
|`slotE`|&lt;slot&gt;&lt;/slot&gt;<br />|
|`tag`|tag=&quot;&quot;<br />|
|`to`|to=&quot;&quot;<br />|
|`transition`|&lt;transition&gt;<br /><br />&lt;/transition&gt;<br />|
|`transitionGroup`|&lt;transition-group&gt;<br /><br />&lt;/transition-group&gt;<br />|
|`v-bind`|v-bind=&quot;&quot;<br />|
|`v-cloak`|v-cloak<br />|
|`v-else`|v-else<br />|
|`v-else-if`|v-else-if=&quot;condition&quot;<br />|
|`v-for`|v-for=&quot;item in items&quot;<br />|
|`v-for-with-key`|v-for=&quot;item in items&quot; :key=&quot;item.id&quot;<br />|
|`v-html`|v-html=&quot;html&quot;<br />|
|`v-if`|v-if=&quot;condition&quot;<br />|
|`v-model`|v-model=&quot;something&quot;<br />|
|`v-on`|v-on:event=&quot;handle&quot;<br />|
|`v-once`|v-once<br />|
|`v-pre`|v-pre<br />|
|`v-show`|v-show=&quot;condition&quot;<br />|
|`v-text`|v-text=&quot;msg&quot;<br />|

## Vue Template Pug Snippets

| Prefix | Snippet Content |
| --- | --- |
|`component`|component(:is=&quot;componentId&quot;) <br />|
|`keepAlive`|keep-alive<br />|
|`key`|:key=&quot;key&quot;<br />|
|`ref`|ref=&quot;reference&quot;<br />|
|`routerLink`|router-link <br />|
|`routerLinkTo`|router-link (to=&quot;&quot;) <br />|
|`routerView`|router-view <br />|
|`slotA`|slot=&quot;&quot;<br />|
|`slotE`|slot<br />|
|`tag`|tag=&quot;&quot;<br />|
|`to`|to=&quot;&quot;<br />|
|`transition`|transition<br />|
|`transitionGroup`|transition-group<br />|
|`vBind`|v-bind=&quot;&quot;<br />|
|`vCloak`|v-cloak<br />|
|`vElse`|v-else<br />|
|`vElseIf`|v-else-if=&quot;condition&quot;<br />|
|`vFor`|v-for=&quot;item in items&quot;<br />|
|`vHtml`|v-html=&quot;html&quot;<br />|
|`vIf`|v-if=&quot;condition&quot;<br />|
|`vModel`|v-model=&quot;something&quot;<br />|
|`vOn`|v-on:event=&quot;handle&quot;<br />|
|`vOnce`|v-once<br />|
|`vPre`|v-pre<br />|
|`vShow`|v-show=&quot;condition&quot;<br />|
|`vText`|v-text=&quot;msg&quot;<br />|

## Vue Script Snippets

| Prefix | Snippet Content |
| --- | --- |
|`vdec`|return this.num -= 1<br />|
|`vinc`|return this.num += 1<br />|
|`vcomputed`|computed: {<br />&nbsp;&nbsp;&nbsp;&nbsp;name() {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return this.data <br />&nbsp;&nbsp;&nbsp;&nbsp;}<br />},<br />|
|`vc-direct`|Vue.directive(&#39;directiveName&#39;, {<br />&nbsp;&nbsp;&nbsp;&nbsp;bind(el, binding, vnode) {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;el.style.arg = binding.value.arg;<br />&nbsp;&nbsp;&nbsp;&nbsp;}<br />});<br />|
|`vdata`|data() {<br />&nbsp;&nbsp;&nbsp;&nbsp;return {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key: value<br />&nbsp;&nbsp;&nbsp;&nbsp;}<br />},<br />|
|`vfilter`|filters: {<br />&nbsp;&nbsp;&nbsp;&nbsp;fnName: function(value) {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return value;<br />&nbsp;&nbsp;&nbsp;&nbsp;}<br />}<br />|
|`vimport-export`|import Name from &#39;~components/Name.vue&#39;<br /><br />export default {<br />&nbsp;&nbsp;&nbsp;&nbsp;components: {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name<br />&nbsp;&nbsp;&nbsp;&nbsp;},<br />}<br />|
|`vimport`|import New from &#39;./components/New.vue&#39;;<br />|
|`vimport-lib`|import { libName}  from &#39;libName&#39;<br />|
|`vimport-c`|components: {<br />&nbsp;&nbsp;&nbsp;&nbsp;New,<br />}<br />|
|`vmethod`|methods: {<br />&nbsp;&nbsp;&nbsp;&nbsp;name() {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;}<br />},<br />|
|`vmixin`|const mixinName = {<br />&nbsp;&nbsp;&nbsp;&nbsp;mounted() {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(&#39;hello from mixin!&#39;)<br />&nbsp;&nbsp;&nbsp;&nbsp;},<br />}<br />|
|`vprops`|props: {<br />&nbsp;&nbsp;&nbsp;&nbsp;propName: {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: number,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;default: <br />&nbsp;&nbsp;&nbsp;&nbsp;},<br />},<br />|
|`vanimhook-js`|beforeEnter(el) {<br />&nbsp;&nbsp;&nbsp;&nbsp;console.log(&#39;beforeEnter&#39;);<br />},<br />enter(el, done) {<br />&nbsp;&nbsp;&nbsp;&nbsp;console.log(&#39;enter&#39;);<br />&nbsp;&nbsp;&nbsp;&nbsp;done();<br />},<br />beforeLeave(el) {<br />&nbsp;&nbsp;&nbsp;&nbsp;console.log(&#39;beforeLeave&#39;);<br />},<br />leave(el, done) {<br />&nbsp;&nbsp;&nbsp;&nbsp;console.log(&#39;leave&#39;);<br />&nbsp;&nbsp;&nbsp;&nbsp;done();<br />},<br />|
|`vmixin-use`|mixins: [mixinName]<br />|
|`vwatcher`|watch: {<br />&nbsp;&nbsp;&nbsp;&nbsp;data(newValue, oldValue) {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;}<br />},<br />|
|`vmAttrs`|vm.\$attrs<br />|
|`vmChildren`|vm.\$children<br />|
|`vmData`|vm.\$data<br />|
|`vmDelete`|vm.\$delete(object, key)<br />|
|`vmDestroy`|vm.\$destroy()<br />|
|`vmEl`|vm.\$el<br />|
|`vmEmit`|vm.\$emit(&#39;event&#39;, […args])<br />|
|`vmForceUpdate`|vm.\$forceUpdate()<br />|
|`vmIsServer`|vm.\$isServer<br />|
|`vmListeners`|vm.\$listeners<br />|
|`vmMount`|vm.\$mount(&#39;&#39;)<br />|
|`vmNextTick`|vm.\$nextTick(callback)<br />|
|`vmOff`|vm.\$off(&#39;event&#39;, callback)<br />|
|`vmOn`|vm.\$on(&#39;event&#39;, callback)<br />|
|`vmOnce`|vm.\$once(&#39;event&#39;, callback)<br />|
|`vmOptions`|vm.\$options<br />|
|`vmParent`|vm.\$parent<br />|
|`vmProps`|vm.\$props<br />|
|`vmRefs`|vm.\$refs<br />|
|`vmRoot`|vm.\$root<br />|
|`vmScopedSlots`|\$this.\$scopedSlots.default({<br />&nbsp;&nbsp;&nbsp;&nbsp;<br />})<br />|
|`vmSet`|vm.\$set(object, key, value)<br />|
|`vmSlots`|vm.\$slots<br />|
|`vmWatch`|vm.\$watch(expOrFn, callback)<br />|

## Vue Script Router Snippets

| Prefix | Snippet Content |
| --- | --- |
|`beforeEnter`|beforeEnter: (to, from, next) =&gt; {<br />&nbsp;&nbsp;&nbsp;&nbsp;// ...<br />}<br />|
|`beforeRouteEnter`|beforeRouteEnter: (to, from, next) =&gt; {<br />&nbsp;&nbsp;&nbsp;&nbsp;// ...<br />}<br />|
|`beforeRouteLeave`|beforeRouteLeave: (to, from, next) =&gt; {<br />&nbsp;&nbsp;&nbsp;&nbsp;// ...<br />}<br />|
|`newVueRouter`|const router = new VueRouter({<br />&nbsp;&nbsp;&nbsp;&nbsp;<br />})<br />|
|`routerBeforeEach`|router.beforeEach((to, from, next) =&gt; {<br />&nbsp;&nbsp;&nbsp;&nbsp;// to and from are both route objects<br />})<br />|
|`routerGo`|router.go()<br />|
|`routerPush`|router.push()<br />|
|`routerReplace`|router.replace()<br />|
|`routes`|routes: []<br />|
|`scrollBehavior`|scrollBehavior (to, from, savedPosition) {<br />&nbsp;&nbsp;&nbsp;&nbsp;// ...<br />}<br />|

## Vue Script Vuex Snippets

| Prefix | Snippet Content |
| --- | --- |
|`newVuexStore`|const store = new Vuex.Store({<br />&nbsp;&nbsp;&nbsp;&nbsp;// ...<br />})<br />|
|`vcommit`|mutationName() {<br />&nbsp;&nbsp;&nbsp;&nbsp;this.\$store.commit(&#39;mutationName&#39;, payload)<br />}<br />|
|`vdispatch`|actionName() {<br />&nbsp;&nbsp;&nbsp;&nbsp;this.\tore.dispatch(&#39;actionName&#39;, payload)<br />}<br />|
|`vimport-gsap`|import { TimelineMax, Ease}  from &#39;gsap&#39;<br />|
|`vstore-import`|import { store } from &#39;./store/store&#39;;<br />|
|`vaction`|actions: {<br />&nbsp;&nbsp;&nbsp;&nbsp;updateValue({commit}, payload) {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;commit(updateValue, payload);<br />&nbsp;&nbsp;&nbsp;&nbsp;}<br />}<br />|
|`vgetter`|getters: {<br />&nbsp;&nbsp;&nbsp;&nbsp;value: value =&gt; {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return state.value;<br />&nbsp;&nbsp;&nbsp;&nbsp;}<br />}<br />|
|`vmutation`|mutations: {<br />&nbsp;&nbsp;&nbsp;&nbsp;updateValue(state, payload) {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state.value = payload;<br />&nbsp;&nbsp;&nbsp;&nbsp;}<br />}<br />|
|`vstore`|import Vue from &#39;vue&#39;;<br />import Vuex from &#39;vuex&#39;;<br /><br />Vue.use(Vuex);<br /><br />export const store = new Vuex.Store({<br />&nbsp;&nbsp;&nbsp;&nbsp;state: {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key: value<br />&nbsp;&nbsp;&nbsp;&nbsp;}<br />});<br />|

## Vue Script Word Snippets

| Prefix | Snippet Content |
| --- | --- |
|`actions`|actions<br />|
|`activated`|activated<br />|
|`alias`|alias<br />|
|`beforeCreate`|beforeCreate<br />|
|`beforeDestroy`|beforeDestroy<br />|
|`beforeMount`|beforeMount<br />|
|`beforeUpdate`|beforeUpdate<br />|
|`bundleRenderer.renderToStream`|bundleRenderer.renderToStream<br />|
|`bundleRenderer.renderToString`|bundleRenderer.renderToString<br />|
|`children`|children<br />|
|`comments`|comments<br />|
|`commit`|commit<br />|
|`component`|component<br />|
|`components`|components<br />|
|`computed`|computed<br />|
|`createBundleRenderer`|createBundleRenderer<br />|
|`created`|created<br />|
|`deactivated`|deactivated<br />|
|`delimiters`|delimiters<br />|
|`destroyed`|destroyed<br />|
|`directives`|directives<br />|
|`dispatch`|dispatch<br />|
|`extends`|extends<br />|
|`filters`|filters<br />|
|`functional`|functional<br />|
|`getters`|getters<br />|
|`hotUpdate`|hotUpdate<br />|
|`inheritAttrs`|inheritAttrs<br />|
|`inject`|inject<br />|
|`mapActions`|mapActions<br />|
|`mapGetters`|mapGetters<br />|
|`mapMutations`|mapMutations<br />|
|`mapState`|mapState<br />|
|`meta`|meta<br />|
|`mixins`|mixins<br />|
|`mode`|mode<br />|
|`model`|model<br />|
|`modules`|modules<br />|
|`mounted`|mounted<br />|
|`mutations`|mutations<br />|
|`plugins`|plugins<br />|
|`propsData`|propsData<br />|
|`provide`|provide<br />|
|`registerModule`|registerModule<br />|
|`render`|render<br />|
|`renderToStream`|renderToStream<br />|
|`renderToString`|renderToString<br />|
|`replaceState`|replaceState<br />|
|`scopedSlots`|scopedSlots<br />|
|`state`|state<br />|
|`subscribe`|subscribe<br />|
|`unregisterModule`|unregisterModule<br />|
|`updated`|updated<br />|



## License

MIT
