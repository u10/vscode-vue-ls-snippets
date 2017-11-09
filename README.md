# Vue Snippets for Visual Studio Code

This extension adds Vue Code Snippets and Syntax Highlight into Visual Studio Code.

## Vue Snippets

### Vue Base Snippets

| Prefix | Snippet Content |
| --- | --- |
|`vbase`|&lt;template&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />&lt;/template&gt;<br /><br />&lt;script&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;export default {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />&nbsp;&nbsp;&nbsp;&nbsp;}<br />&lt;/script&gt;<br /><br />&lt;style scoped&gt;<br /><br />&lt;/style&gt;<br />|
|`template`|&lt;template&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />&lt;/template&gt;<br />|
|`templatePug`|&lt;template lang=&quot;pug&quot;&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />&lt;/template&gt;<br />|
|`script`|&lt;script&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />&lt;/script&gt;<br />|
|`style`|&lt;style&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />&lt;/style&gt;<br />|
|`styleLang`|&lt;style lang=&quot;`|`&quot;&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />&lt;/style&gt;<br />|

### Vue Template Snippets

| Prefix | Snippet Content |
| --- | --- |
|`v-for`|v-for=&quot;`|item` in `|items`&quot; :key=&quot;`|item.id`&quot;<br />|
|`v-if`|v-if=&quot;`|condition`&quot;<br />|
|`v-if-with-key`|v-if=&quot;`|condition`&quot; key=&quot;`|key`&quot;<br />|
|`v-else-if`|v-else-if=&quot;`|condition`&quot;<br />|
|`v-else-if-with-key`|v-else-if=&quot;`|condition`&quot; key=&quot;`|key`&quot;<br />|
|`v-else`|v-else<br />|
|`v-else-with-key`|v-else key=&quot;`|key`&quot;<br />|
|`v-show`|v-show=&quot;`|condition`&quot;<br />|
|`v-text`|v-text=&quot;`|msg`&quot;<br />|
|`v-html`|v-html=&quot;`|html`&quot;<br />|
|`v-pre`|v-pre<br />|
|`v-bind`|v-bind`|`=&quot;`|`&quot;<br />|
|`v-model`|v-model=&quot;`|something`&quot;<br />|
|`v-on`|v-on:`|event`=&quot;`|handle`&quot;<br />|
|`v-on-click`|@click=&quot;`|handler`(`|arg`, \$event)&quot;<br />|
|`v-once`|v-once<br />|
|`v-cloak`|v-cloak<br />|
|`key`|:key=&quot;`|key`&quot;<br />|
|`ref`|ref=&quot;`|reference`&quot;`|`<br />|
|`slot`|slot=&quot;`|`&quot;`|`<br />|
|`enter-class`|enter-class=&quot;`|`&quot;`|`<br />|
|`leave-class`|leave-class=&quot;`|`&quot;`|`<br />|
|`appear-class`|appear-class=&quot;`|`&quot;`|`<br />|
|`enter-to-class`|enter-to-class=&quot;`|`&quot;`|`<br />|
|`leave-to-class`|leave-to-class=&quot;`|`&quot;`|`<br />|
|`appear-to-class`|appear-to-class=&quot;`|`&quot;`|`<br />|
|`enter-active-class`|enter-active-class=&quot;`|`&quot;`|`<br />|
|`leave-active-class`|leave-active-class=&quot;`|`&quot;`|`<br />|
|`appear-active-class`|appear-active-class=&quot;`|`&quot;`|`<br />|
|`before-enter-event`|@before-enter=&quot;`|`&quot;`|`<br />|
|`befor-eleave-event`|@before-leave=&quot;`|`&quot;`|`<br />|
|`before-appear-event`|@before-appear=&quot;`|`&quot;`|`<br />|
|`enter-event`|@enter=&quot;`|`&quot;`|`<br />|
|`leave-event`|@leave=&quot;`|`&quot;`|`<br />|
|`appear-event`|@appear=&quot;`|`&quot;`|`<br />|
|`after-enter-event`|@after-enter=&quot;`|`&quot;`|`<br />|
|`after-leave-event`|@after-leave=&quot;`|`&quot;`|`<br />|
|`after-appear-event`|@after-appear=&quot;`|`&quot;`|`<br />|
|`enter-cancelled-event`|@enter-cancelled=&quot;`|`&quot;`|`<br />|
|`leave-cancelled-event`|@leave-cancelled=&quot;`|`&quot;`|`<br />|
|`appear-cancelled-event`|@appear-cancelled=&quot;`|`&quot;`|`<br />|
|`vFor`|&lt;`|div` v-for=&quot;`|item` in `|item`s&quot; :key=&quot;`|item`.id&quot;&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;{{ `|item` }}<br />&lt;/`|div`&gt;<br />|
|`vIf`|&lt;`|div` v-if=&quot;`|condition`&quot;&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />&lt;/`|div`&gt;<br />|
|`vIfWithKey`|&lt;`|div` v-if=&quot;`|condition`&quot; key=&quot;`|key`&quot;&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />&lt;/`|div`&gt;<br />|
|`vElseIf`|&lt;`|div` v-else-if=&quot;`|condition`&quot;&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />&lt;/`|div`&gt;<br />|
|`vElseIfWithKey`|&lt;`|div` v-else-if=&quot;`|condition`&quot; key=&quot;`|key`&quot;&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />&lt;/`|div`&gt;<br />|
|`vElse`|&lt;`|div` v-else&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />&lt;/`|div`&gt;<br />|
|`vElseWithKey`|&lt;`|div` v-else key=&quot;`|key`&quot;&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />&lt;/`|div`&gt;<br />|
|`vModel`|&lt;input v-model=&quot;`|data`&quot; type=&quot;text&quot; /&gt;<br />|
|`vModelNum`|&lt;input v-model.number=&quot;`|numData`&quot; type=&quot;number&quot; step=&quot;1&quot; /&gt;<br />|
|`vElProps`|&lt;`|component` :`|propName`=&quot;`|propValue`&quot;&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />&lt;/`|component`&gt;<br />|
|`vSrc`|&lt;img :src=&quot;&#39;/path/to/images/&#39; + `|fileName`&quot; alt=&quot;`|altText`&quot;/&gt;<br />|
|`vClass`|&lt;`|div` :class=&quot;{ `|className`: `|data` }&quot;&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />&lt;/`|div`&gt;<br />|
|`vClassObj`|&lt;`|div` :class=&quot;[`|classNameA`, `|classNameB`]&quot;&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />&lt;/`|div`&gt;<br />|
|`vClassObjMult`|&lt;`|div` :class=&quot;[`|classNameA`, {`|classNameB` : `|condition`}]&quot;&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />&lt;/`|div`&gt;<br />|
|`vStyle`|&lt;`|div` :style=&quot;{ fontSize: `|data` + &#39;px&#39; }&quot;&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />&lt;/`|div`&gt;<br />|
|`vStyleObj`|&lt;`|div` :style=&quot;[`|styleObjectA`, `|styleObjectB]`&quot;&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />&lt;/`|div`&gt;<br />|
|`Transition`|&lt;transition`|`&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />&lt;/transition&gt;`|`<br />|
|`TransitionAnim`|&lt;transition<br />&nbsp;&nbsp;&nbsp;&nbsp;mode=&quot;out-in&quot;<br />&nbsp;&nbsp;&nbsp;&nbsp;@before-enter=&quot;beforeEnter&quot;<br />&nbsp;&nbsp;&nbsp;&nbsp;@enter=&quot;enter&quot;<br />&nbsp;&nbsp;&nbsp;&nbsp;@before-leave=&quot;beforeLeave&quot;<br />&nbsp;&nbsp;&nbsp;&nbsp;@leave=&quot;leave&quot;<br />&nbsp;&nbsp;&nbsp;&nbsp;:css=&quot;false&quot;&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />&lt;/transition&gt;<br />|
|`TransitionGroup`|&lt;transition-group`|`&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />&lt;/transition-group&gt;<br />|
|`Slot`|&lt;slot`|`&gt;`|`&lt;/slot&gt;`|`<br />|
|`Component`|&lt;component :is=&quot;`|componentId`&quot;&gt;&lt;/component&gt;`|`<br />|
|`KeepAlive`|&lt;keep-alive`|`&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />&lt;/keep-alive&gt;`|`<br />|

### Vue Template Pug Snippets

| Prefix | Snippet Content |
| --- | --- |
|`vFor`|`|div`(v-for=&quot;`|item` in `|item`s&quot; :key=&quot;`|item`.id&quot;)<br />&nbsp;&nbsp;&nbsp;&nbsp;{{ `|item` }}<br />|
|`vIf`|`|div`(v-if=&quot;`|condition`&quot;)<br />&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />|
|`vIfWithKey`|`|div`(v-if=&quot;`|condition`&quot; key=&quot;`|key`&quot;)<br />&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />|
|`vElseIf`|`|div`(v-else-if=&quot;`|condition`&quot;)<br />&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />|
|`vElseIfWithKey`|`|div` v-else-if=&quot;`|condition`&quot; key=&quot;`|key`&quot;<br />&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />|
|`vElse`|`|div`(v-else)<br />&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />|
|`vElseWithKey`|`|div`(v-else key=&quot;`|key`&quot;)<br />&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />|
|`vModel`|input(v-model=&quot;`|data`&quot; type=&quot;text&quot;)<br />|
|`vModelNum`|input(v-model.number=&quot;`|numData`&quot; type=&quot;number&quot; step=&quot;1&quot;)<br />|
|`vElProps`|`|component`(:`|propName`=&quot;`|propValue`&quot;)<br />&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />|
|`vSrc`|img(:src=&quot;&#39;/path/to/images/&#39; + `|fileName`&quot; alt=&quot;`|altText`&quot;)<br />|
|`vClass`|`|div`(:class=&quot;{ `|className`: `|data` }&quot;)<br />&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />|
|`vClassObj`|`|div` :class=&quot;[`|classNameA`, `|classNameB`]&quot;)<br />&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />|
|`vClassObjMult`|`|div`(:class=&quot;[`|classNameA`, {`|classNameB` : `|condition`}]&quot;)<br />&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />|
|`vStyle`|`|div`(:style=&quot;{ fontSize: `|data` + &#39;px&#39; }&quot;)<br />&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />|
|`vStyleObj`|`|div`(:style=&quot;[`|styleObjectA`, `|styleObjectB]`&quot;)<br />&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />|
|`Transition`|transition`|`<br />|
|`TransitionAnim`|transition(<br />&nbsp;&nbsp;&nbsp;&nbsp;mode=&quot;out-in&quot;<br />&nbsp;&nbsp;&nbsp;&nbsp;@before-enter=&quot;beforeEnter&quot;<br />&nbsp;&nbsp;&nbsp;&nbsp;@enter=&quot;enter&quot;<br />&nbsp;&nbsp;&nbsp;&nbsp;@before-leave=&quot;beforeLeave&quot;<br />&nbsp;&nbsp;&nbsp;&nbsp;@leave=&quot;leave&quot;<br />&nbsp;&nbsp;&nbsp;&nbsp;:css=&quot;false&quot;)<br />&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />|
|`TransitionGroup`|transition-group`|`<br />|
|`slot`|slot<br />|
|`Component`|component(:is=&quot;`|componentId`&quot;) `|`<br />|
|`KeepAlive`|keep-alive`|`<br />|

### Vue Script Snippets

| Prefix | Snippet Content |
| --- | --- |
|`vImport`|import `|Name` from &#39;./components/`|Name`&#39;<br />|
|`vImportLib`|import `|libName` from &#39;`|libName`&#39;<br />|
|`vBaseWithComponent`|import `|Name` from &#39;~components/`|Name`&#39;<br /><br />export default {<br />&nbsp;&nbsp;&nbsp;&nbsp;components: {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`|Name`<br />&nbsp;&nbsp;&nbsp;&nbsp;},<br />}<br />|
|`vNewVue`|new Vue({<br />&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />})<br />|
|`vConfigSilent`|Vue.config.silent = `|true`<br />|
|`vConfigOptionMergeStrategies`|Vue.config.optionMergeStrategies`|`<br />|
|`vConfigDevtools`|Vue.config.devtools = `|true`<br />|
|`vConfigErrorHandler`|Vue.config.errorHandler = function (err, vm, info) {<br />&nbsp;&nbsp;&nbsp;&nbsp;`|// handle error`<br />}<br />|
|`vConfigWarnHandler`|Vue.config.warnHandler = function (msg, vm, trace) {<br />&nbsp;&nbsp;&nbsp;&nbsp;`|// handle error`<br />}<br />|
|`vConfigIgnoredElements`|Vue.config.ignoredElements = [<br />&nbsp;&nbsp;&nbsp;&nbsp;&#39;`|`&#39;<br />]`|`<br />|
|`vConfigKeyCodes`|Vue.config.keyCodes = {<br />&nbsp;&nbsp;&nbsp;&nbsp;`|// camelCase won`t work`<br />}<br />|
|`vConfigPerformance`|Vue.config.performance = `|true`<br />|
|`vConfigProductionTip`|Vue.config.productionTip = `|false`<br />|
|`vUse`|Vue.use(`|plugin`)`|`<br />|
|`vInstallDirective`|Vue.directive(`|id|, [definition]`)<br />|
|`vInstallFilter`|Vue.filter(`|id|, [definition]`)<br />|
|`vInstallComponent`|Vue.component(`|id|, [definition]`)`|`<br />|
|`vNextTick`|Vue.nextTick({<br />&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />})<br />|
|`vSet`|Vue.set(`|target`, `|key`, `|value`)<br />|
|`vDelete`|Vue.delete(`|target`, `|key`)<br />|
|`vMixin`|Vue.mixin(`|mixin`)<br />|
|`vCompile`|Vue.compile(`|template`)<br />|
|`vExtend`|Vue.extend({<br />&nbsp;&nbsp;&nbsp;&nbsp;template:`|template`<br />})<br />|
|`vComponents`|components: {<br />&nbsp;&nbsp;&nbsp;&nbsp;`|componentsName`,<br />},<br />|
|`vDirectives`|directives: {<br />&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />}),<br />|
|`vDirective`|`|directiveName`: {<br />&nbsp;&nbsp;&nbsp;&nbsp;bind(el, binding, vnode) {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />&nbsp;&nbsp;&nbsp;&nbsp;}<br />},<br />|
|`vFilters`|filters: {<br />&nbsp;&nbsp;&nbsp;&nbsp;`|fnName`: function(`|value`) {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return `|value|`<br />&nbsp;&nbsp;&nbsp;&nbsp;}<br />},<br />|
|`vFilter`|`|fnName`: function(`|value`) {<br />&nbsp;&nbsp;&nbsp;&nbsp;return `|value|`<br />},<br />|
|`vMixins`|mixins: [`|mixinName`],<br />|
|`vProps`|props: {<br />&nbsp;&nbsp;&nbsp;&nbsp;`|propName`: {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: `|number`,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;default: `|`<br />&nbsp;&nbsp;&nbsp;&nbsp;},<br />},<br />|
|`vProp`|`|propName`: {<br />&nbsp;&nbsp;&nbsp;&nbsp;type: `|number`,<br />&nbsp;&nbsp;&nbsp;&nbsp;default: `|`<br />},<br />|
|`vData`|data() {<br />&nbsp;&nbsp;&nbsp;&nbsp;return {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`|key`: `|value`<br />&nbsp;&nbsp;&nbsp;&nbsp;}<br />},<br />|
|`vComputed`|computed: {<br />&nbsp;&nbsp;&nbsp;&nbsp;`|name`() {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return this.`|data` `|`<br />&nbsp;&nbsp;&nbsp;&nbsp;},<br />},<br />|
|`vComputedItem`|`|name`() {<br />&nbsp;&nbsp;&nbsp;&nbsp;return this.`|data` `|`<br />},<br />|
|`vWatch`|watch: {<br />&nbsp;&nbsp;&nbsp;&nbsp;`|data`(`|newValue`, `|oldValue`) {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />&nbsp;&nbsp;&nbsp;&nbsp;},<br />},<br />|
|`vWatchItem`|`|data`(`|newValue`, `|oldValue`) {<br />&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />},<br />|
|`vMethods`|methods: {<br />&nbsp;&nbsp;&nbsp;&nbsp;`|name`() {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />&nbsp;&nbsp;&nbsp;&nbsp;},<br />},<br />|
|`vMethod`|`|name`() {<br />&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />},<br />|
|`vTransitionAnimHook`|beforeEnter(el) {<br />&nbsp;&nbsp;&nbsp;&nbsp;console.log(&#39;beforeEnter&#39;)<br />},<br />enter(el, done) {<br />&nbsp;&nbsp;&nbsp;&nbsp;console.log(&#39;enter&#39;)<br />&nbsp;&nbsp;&nbsp;&nbsp;done()<br />},<br />beforeLeave(el) {<br />&nbsp;&nbsp;&nbsp;&nbsp;console.log(&#39;beforeLeave&#39;)<br />},<br />leave(el, done) {<br />&nbsp;&nbsp;&nbsp;&nbsp;console.log(&#39;leave&#39;)<br />&nbsp;&nbsp;&nbsp;&nbsp;done()<br />},<br />|
|`vm-data`|`|vm`.\$data`|`<br />|
|`vm-props`|`|vm`.\$props`|`<br />|
|`vm-el`|`|vm`.\$el`|`<br />|
|`vm-options`|`|vm`.\$options`|`<br />|
|`vm-parent`|`|vm`.\$parent`|`<br />|
|`vm-root`|`|vm`.\$root`|`<br />|
|`vm-children`|`|vm`.\$children`|`<br />|
|`vm-slots`|`|vm`.\$slots`|`<br />|
|`vm-scoped-slots`|\$this.\$scopedSlots.default({<br />&nbsp;&nbsp;&nbsp;&nbsp;<br />})<br />|
|`vm-refs`|`|vm`.\$refs`|`<br />|
|`vm-is-server`|`|vm`.\$isServer`|`<br />|
|`vm-attrs`|`|vm`.\$attrs`|`<br />|
|`vm-listeners`|`|vm`.\$listeners`|`<br />|
|`vm-watch`|`|vm`.\$watch(`|expOrFn`, `|callback`)<br />|
|`vm-set`|`|vm`.\$set(`|object`, `|key`, `|value`)<br />|
|`vm-delete`|`|vm`.\$delete(`|object`, `|key`)<br />|
|`vm-on`|`|vm`.\$on(&#39;`|event`&#39;, `|callback`)`|`<br />|
|`vm-once`|`|vm`.\$once(&#39;`|event`&#39;, `|callback`)`|`<br />|
|`vm-off`|`|vm`.\$off(&#39;`|event`&#39;, `|callback`)`|`<br />|
|`vm-emit`|`|vm`.\$emit(&#39;`|event`&#39;`|, […args]`)`|`<br />|
|`vm-mount`|`|vm`.\$mount(&#39;`|`&#39;)<br />|
|`vm-force-update`|`|vm`.\$forceUpdate()<br />|
|`vm-next-tick`|`|vm`.\$nextTick(`|callback`)<br />|
|`vm-destroy`|`|vm`.\$destroy()`|`<br />|
|`propsData`|propsData<br />|
|`scopedSlots`|scopedSlots<br />|
|`computed`|computed<br />|
|`render`|render<br />|
|`beforeCreate`|beforeCreate<br />|
|`created`|created<br />|
|`beforeMount`|beforeMount<br />|
|`mounted`|mounted<br />|
|`beforeUpdate`|beforeUpdate<br />|
|`updated`|updated<br />|
|`activated`|activated<br />|
|`deactivated`|deactivated<br />|
|`beforeDestroy`|beforeDestroy<br />|
|`destroyed`|destroyed<br />|
|`directives`|directives<br />|
|`filters`|filters<br />|
|`component`|component<br />|
|`components`|components<br />|
|`mixins`|mixins<br />|
|`extends`|extends<br />|
|`provide`|provide<br />|
|`inject`|inject<br />|
|`delimiters`|delimiters<br />|
|`functional`|functional<br />|
|`model`|model<br />|
|`inheritAttrs`|inheritAttrs<br />|
|`comments`|comments<br />|

## Vue Router Snippets

### Vue Template Router Snippets

| Prefix | Snippet Content |
| --- | --- |
|`RouterView`|&lt;router-view&gt;`|`&lt;/router-view&gt;`|`<br />|
|`RouterLink`|&lt;router-link `|`&gt;`|`&lt;/router-link&gt;`|`<br />|
|`RouterLinkTo`|&lt;router-link to=&quot;`|`&quot;&gt;`|`&lt;/router-link&gt;`|`<br />|
|`to`|to=&quot;`|`&quot;`|`<br />|
|`tag`|tag=&quot;`|`&quot;`|`<br />|

### Vue Template Router Pug Snippets

| Prefix | Snippet Content |
| --- | --- |
|`RouterView`|router-view `|`<br />|
|`RouterLink`|router-link `|`<br />|
|`RouterLinkTo`|router-link (to=&quot;`|`&quot;) `|`<br />|

### Vue Script Router Snippets

| Prefix | Snippet Content |
| --- | --- |
|`vNewVueRouter`|const `|router` = new VueRouter({<br />&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />})`|`<br />|
|`vRoutes`|routes: [`|`]`|`<br />|
|`vRouterBeforeEach`|`|router`.beforeEach((to, from, next) =&gt; {<br />&nbsp;&nbsp;&nbsp;&nbsp;`|// to and from are both route objects`<br />})`|`<br />|
|`vBeforeEnter`|beforeEnter: (to, from, next) =&gt; {<br />&nbsp;&nbsp;&nbsp;&nbsp;`|// ...`<br />}<br />|
|`vBeforeRouteEnter`|beforeRouteEnter: (to, from, next) =&gt; {<br />&nbsp;&nbsp;&nbsp;&nbsp;`|// ...`<br />}<br />|
|`vBeforeRouteLeave`|beforeRouteLeave: (to, from, next) =&gt; {<br />&nbsp;&nbsp;&nbsp;&nbsp;`|// ...`<br />}<br />|
|`vScrollBehavior`|scrollBehavior (to, from, savedPosition) {<br />&nbsp;&nbsp;&nbsp;&nbsp;`|// ...`<br />}<br />|
|`vrouter-push`|`|router`.push(`|`)`|`<br />|
|`vrouter-replace`|`|router`.replace(`|`)`|`<br />|
|`vrouter-go`|`|router`.go(`|`)`|`<br />|
|`alias`|alias<br />|
|`mode`|mode<br />|
|`children`|children<br />|
|`meta`|meta<br />|

## Vuex Snippets

### Vue Script Vuex Snippets

| Prefix | Snippet Content |
| --- | --- |
|`vVuexBase`|import Vue from &#39;vue&#39;;<br />import Vuex from &#39;vuex&#39;;<br /><br />Vue.use(Vuex);<br /><br />export const store = new Vuex.Store({<br />&nbsp;&nbsp;&nbsp;&nbsp;state: {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`|key`: `|value`<br />&nbsp;&nbsp;&nbsp;&nbsp;}<br />});<br />|
|`vNewVuexStore`|const `|store` = new Vuex.Store({<br />&nbsp;&nbsp;&nbsp;&nbsp;`|// ...`<br />})<br />|
|`vVuexGetters`|getters: {<br />&nbsp;&nbsp;&nbsp;&nbsp;value: `|value` =&gt; {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return state.`|value`;<br />&nbsp;&nbsp;&nbsp;&nbsp;}<br />}<br />|
|`vVuexMutations`|mutations: {<br />&nbsp;&nbsp;&nbsp;&nbsp;`|updateValue`(state, `|payload`) {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state.`|value` = `|payload`;<br />&nbsp;&nbsp;&nbsp;&nbsp;}<br />}<br />|
|`vVuexAction`|actions: {<br />&nbsp;&nbsp;&nbsp;&nbsp;`|updateValue`({commit}, `|payload`) {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;commit(`|updateValue`, `|payload`);<br />&nbsp;&nbsp;&nbsp;&nbsp;}<br />}<br />|
|`vVuexCommitInMutation`|`|mutationName`() {<br />&nbsp;&nbsp;&nbsp;&nbsp;this.\$store.commit(&#39;`|mutationName`&#39;, `|payload`)<br />}<br />|
|`vVuexDispatchInAction`|`|actionName`() {<br />&nbsp;&nbsp;&nbsp;&nbsp;this.\$store.dispatch(&#39;`|actionName`&#39;, `|payload`)<br />}<br />|
|`vVuexImport`|import { store } from &#39;./store/store&#39;;<br />|
|`vImportGSAP`|import { TimelineMax, `|Ease` } from &#39;gsap&#39;<br />|
|`state`|state<br />|
|`getters`|getters<br />|
|`mutations`|mutations<br />|
|`actions`|actions<br />|
|`modules`|modules<br />|
|`plugins`|plugins<br />|
|`commit`|commit<br />|
|`dispatch`|dispatch<br />|
|`replaceState`|replaceState<br />|
|`subscribe`|subscribe<br />|
|`registerModule`|registerModule<br />|
|`unregisterModule`|unregisterModule<br />|
|`hotUpdate`|hotUpdate<br />|
|`mapState`|mapState<br />|
|`mapGetters`|mapGetters<br />|
|`mapActions`|mapActions<br />|
|`mapMutations`|mapMutations<br />|

## SSR Snippets

### Vue Script Word Snippets

| Prefix | Snippet Content |
| --- | --- |
|`vSsrRenderer`|const `|renderer` = require(&#39;vue-server-renderer&#39;).createRenderer()`|`<br />|
|`vSsrCreateRenderer`|createRenderer({<br />&nbsp;&nbsp;&nbsp;&nbsp;`|`<br />})<br />|
|`renderToString`|renderToString<br />|
|`renderToStream`|renderToStream<br />|
|`createBundleRenderer`|createBundleRenderer<br />|
|`bundleRenderer.renderToString`|bundleRenderer.renderToString<br />|
|`bundleRenderer.renderToStream`|bundleRenderer.renderToStream<br />|



## License

MIT
