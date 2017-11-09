# Vue Snippets for Visual Studio Code

This extension adds Vue Code Snippets and Syntax Highlight into Visual Studio Code.

Recommend use vue-ls extension.

本代码片段搜集了常用的 vue 代码片段，详细清单请参考下文列表。

推荐结合 vue-ls 扩展一同使用。

## Vue Snippets

### Vue Base Snippets

| Prefix | Snippet Content |
| --- | --- |
|`vbase`|&lt;template&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />&lt;/template&gt;<br /><br />&lt;script&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;export default {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&nbsp;&nbsp;&nbsp;&nbsp;}<br />&lt;/script&gt;<br /><br />&lt;style scoped&gt;<br /><br />&lt;/style&gt;<br />|
|`template`|&lt;template&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&lt;/template&gt;<br />|
|`templatePug`|&lt;template lang=&quot;pug&quot;&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&lt;/template&gt;<br />|
|`script`|&lt;script&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&lt;/script&gt;<br />|
|`style`|&lt;style&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&lt;/style&gt;<br />|
|`styleLang`|&lt;style lang=&quot;<code>&#124;</code>&quot;&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&lt;/style&gt;<br />|

### Vue Template Snippets

| Prefix | Snippet Content |
| --- | --- |
|`v-for`|v-for=&quot;<code>&#124;</code>`item` in <code>&#124;</code>`items`&quot; :key=&quot;<code>&#124;</code>`item.id`&quot;<br />|
|`v-if`|v-if=&quot;<code>&#124;</code>`condition`&quot;<br />|
|`v-if-with-key`|v-if=&quot;<code>&#124;</code>`condition`&quot; key=&quot;<code>&#124;</code>`key`&quot;<br />|
|`v-else-if`|v-else-if=&quot;<code>&#124;</code>`condition`&quot;<br />|
|`v-else-if-with-key`|v-else-if=&quot;<code>&#124;</code>`condition`&quot; key=&quot;<code>&#124;</code>`key`&quot;<br />|
|`v-else`|v-else<br />|
|`v-else-with-key`|v-else key=&quot;<code>&#124;</code>`key`&quot;<br />|
|`v-show`|v-show=&quot;<code>&#124;</code>`condition`&quot;<br />|
|`v-text`|v-text=&quot;<code>&#124;</code>`msg`&quot;<br />|
|`v-html`|v-html=&quot;<code>&#124;</code>`html`&quot;<br />|
|`v-pre`|v-pre<br />|
|`v-bind`|v-bind<code>&#124;</code>=&quot;<code>&#124;</code>&quot;<br />|
|`v-model`|v-model=&quot;<code>&#124;</code>`something`&quot;<br />|
|`v-on`|v-on:<code>&#124;</code>`event`=&quot;<code>&#124;</code>`handle`&quot;<br />|
|`v-on-click`|@click=&quot;<code>&#124;</code>`handler`(<code>&#124;</code>`arg`, \$event)&quot;<br />|
|`v-once`|v-once<br />|
|`v-cloak`|v-cloak<br />|
|`key`|:key=&quot;<code>&#124;</code>`key`&quot;<br />|
|`ref`|ref=&quot;<code>&#124;</code>`reference`&quot;<code>&#124;</code><br />|
|`slot`|slot=&quot;<code>&#124;</code>&quot;<code>&#124;</code><br />|
|`enter-class`|enter-class=&quot;<code>&#124;</code>&quot;<code>&#124;</code><br />|
|`leave-class`|leave-class=&quot;<code>&#124;</code>&quot;<code>&#124;</code><br />|
|`appear-class`|appear-class=&quot;<code>&#124;</code>&quot;<code>&#124;</code><br />|
|`enter-to-class`|enter-to-class=&quot;<code>&#124;</code>&quot;<code>&#124;</code><br />|
|`leave-to-class`|leave-to-class=&quot;<code>&#124;</code>&quot;<code>&#124;</code><br />|
|`appear-to-class`|appear-to-class=&quot;<code>&#124;</code>&quot;<code>&#124;</code><br />|
|`enter-active-class`|enter-active-class=&quot;<code>&#124;</code>&quot;<code>&#124;</code><br />|
|`leave-active-class`|leave-active-class=&quot;<code>&#124;</code>&quot;<code>&#124;</code><br />|
|`appear-active-class`|appear-active-class=&quot;<code>&#124;</code>&quot;<code>&#124;</code><br />|
|`before-enter-event`|@before-enter=&quot;<code>&#124;</code>&quot;<code>&#124;</code><br />|
|`befor-eleave-event`|@before-leave=&quot;<code>&#124;</code>&quot;<code>&#124;</code><br />|
|`before-appear-event`|@before-appear=&quot;<code>&#124;</code>&quot;<code>&#124;</code><br />|
|`enter-event`|@enter=&quot;<code>&#124;</code>&quot;<code>&#124;</code><br />|
|`leave-event`|@leave=&quot;<code>&#124;</code>&quot;<code>&#124;</code><br />|
|`appear-event`|@appear=&quot;<code>&#124;</code>&quot;<code>&#124;</code><br />|
|`after-enter-event`|@after-enter=&quot;<code>&#124;</code>&quot;<code>&#124;</code><br />|
|`after-leave-event`|@after-leave=&quot;<code>&#124;</code>&quot;<code>&#124;</code><br />|
|`after-appear-event`|@after-appear=&quot;<code>&#124;</code>&quot;<code>&#124;</code><br />|
|`enter-cancelled-event`|@enter-cancelled=&quot;<code>&#124;</code>&quot;<code>&#124;</code><br />|
|`leave-cancelled-event`|@leave-cancelled=&quot;<code>&#124;</code>&quot;<code>&#124;</code><br />|
|`appear-cancelled-event`|@appear-cancelled=&quot;<code>&#124;</code>&quot;<code>&#124;</code><br />|
|`vFor`|&lt;<code>&#124;</code>`div` v-for=&quot;<code>&#124;</code>`item` in <code>&#124;</code>`item`s&quot; :key=&quot;<code>&#124;</code>`item`.id&quot;&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;{{ <code>&#124;</code>`item` }}<br />&lt;/<code>&#124;</code>`div`&gt;<br />|
|`vIf`|&lt;<code>&#124;</code>`div` v-if=&quot;<code>&#124;</code>`condition`&quot;&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&lt;/<code>&#124;</code>`div`&gt;<br />|
|`vIfWithKey`|&lt;<code>&#124;</code>`div` v-if=&quot;<code>&#124;</code>`condition`&quot; key=&quot;<code>&#124;</code>`key`&quot;&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&lt;/<code>&#124;</code>`div`&gt;<br />|
|`vElseIf`|&lt;<code>&#124;</code>`div` v-else-if=&quot;<code>&#124;</code>`condition`&quot;&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&lt;/<code>&#124;</code>`div`&gt;<br />|
|`vElseIfWithKey`|&lt;<code>&#124;</code>`div` v-else-if=&quot;<code>&#124;</code>`condition`&quot; key=&quot;<code>&#124;</code>`key`&quot;&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&lt;/<code>&#124;</code>`div`&gt;<br />|
|`vElse`|&lt;<code>&#124;</code>`div` v-else&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&lt;/<code>&#124;</code>`div`&gt;<br />|
|`vElseWithKey`|&lt;<code>&#124;</code>`div` v-else key=&quot;<code>&#124;</code>`key`&quot;&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&lt;/<code>&#124;</code>`div`&gt;<br />|
|`vModel`|&lt;input v-model=&quot;<code>&#124;</code>`data`&quot; type=&quot;text&quot; /&gt;<br />|
|`vModelNum`|&lt;input v-model.number=&quot;<code>&#124;</code>`numData`&quot; type=&quot;number&quot; step=&quot;1&quot; /&gt;<br />|
|`vElProps`|&lt;<code>&#124;</code>`component` :<code>&#124;</code>`propName`=&quot;<code>&#124;</code>`propValue`&quot;&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&lt;/<code>&#124;</code>`component`&gt;<br />|
|`vSrc`|&lt;img :src=&quot;&#39;/path/to/images/&#39; + <code>&#124;</code>`fileName`&quot; alt=&quot;<code>&#124;</code>`altText`&quot;/&gt;<br />|
|`vClass`|&lt;<code>&#124;</code>`div` :class=&quot;{ <code>&#124;</code>`className`: <code>&#124;</code>`data` }&quot;&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&lt;/<code>&#124;</code>`div`&gt;<br />|
|`vClassObj`|&lt;<code>&#124;</code>`div` :class=&quot;[<code>&#124;</code>`classNameA`, <code>&#124;</code>`classNameB`]&quot;&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&lt;/<code>&#124;</code>`div`&gt;<br />|
|`vClassObjMult`|&lt;<code>&#124;</code>`div` :class=&quot;[<code>&#124;</code>`classNameA`, {<code>&#124;</code>`classNameB` : <code>&#124;</code>`condition`}]&quot;&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&lt;/<code>&#124;</code>`div`&gt;<br />|
|`vStyle`|&lt;<code>&#124;</code>`div` :style=&quot;{ fontSize: <code>&#124;</code>`data` + &#39;px&#39; }&quot;&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&lt;/<code>&#124;</code>`div`&gt;<br />|
|`vStyleObj`|&lt;<code>&#124;</code>`div` :style=&quot;[<code>&#124;</code>`styleObjectA`, <code>&#124;</code>`styleObjectB]`&quot;&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&lt;/<code>&#124;</code>`div`&gt;<br />|
|`Transition`|&lt;transition<code>&#124;</code>&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&lt;/transition&gt;<code>&#124;</code><br />|
|`TransitionAnim`|&lt;transition<br />&nbsp;&nbsp;&nbsp;&nbsp;mode=&quot;out-in&quot;<br />&nbsp;&nbsp;&nbsp;&nbsp;@before-enter=&quot;beforeEnter&quot;<br />&nbsp;&nbsp;&nbsp;&nbsp;@enter=&quot;enter&quot;<br />&nbsp;&nbsp;&nbsp;&nbsp;@before-leave=&quot;beforeLeave&quot;<br />&nbsp;&nbsp;&nbsp;&nbsp;@leave=&quot;leave&quot;<br />&nbsp;&nbsp;&nbsp;&nbsp;:css=&quot;false&quot;&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&lt;/transition&gt;<br />|
|`TransitionGroup`|&lt;transition-group<code>&#124;</code>&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&lt;/transition-group&gt;<br />|
|`Slot`|&lt;slot<code>&#124;</code>&gt;<code>&#124;</code>&lt;/slot&gt;<code>&#124;</code><br />|
|`Component`|&lt;component :is=&quot;<code>&#124;</code>`componentId`&quot;&gt;&lt;/component&gt;<code>&#124;</code><br />|
|`KeepAlive`|&lt;keep-alive<code>&#124;</code>&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&lt;/keep-alive&gt;<code>&#124;</code><br />|

### Vue Template Pug Snippets

| Prefix | Snippet Content |
| --- | --- |
|`vFor`|<code>&#124;</code>`div`(v-for=&quot;<code>&#124;</code>`item` in <code>&#124;</code>`item`s&quot; :key=&quot;<code>&#124;</code>`item`.id&quot;)<br />&nbsp;&nbsp;&nbsp;&nbsp;{{ <code>&#124;</code>`item` }}<br />|
|`vIf`|<code>&#124;</code>`div`(v-if=&quot;<code>&#124;</code>`condition`&quot;)<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />|
|`vIfWithKey`|<code>&#124;</code>`div`(v-if=&quot;<code>&#124;</code>`condition`&quot; key=&quot;<code>&#124;</code>`key`&quot;)<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />|
|`vElseIf`|<code>&#124;</code>`div`(v-else-if=&quot;<code>&#124;</code>`condition`&quot;)<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />|
|`vElseIfWithKey`|<code>&#124;</code>`div` v-else-if=&quot;<code>&#124;</code>`condition`&quot; key=&quot;<code>&#124;</code>`key`&quot;<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />|
|`vElse`|<code>&#124;</code>`div`(v-else)<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />|
|`vElseWithKey`|<code>&#124;</code>`div`(v-else key=&quot;<code>&#124;</code>`key`&quot;)<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />|
|`vModel`|input(v-model=&quot;<code>&#124;</code>`data`&quot; type=&quot;text&quot;)<br />|
|`vModelNum`|input(v-model.number=&quot;<code>&#124;</code>`numData`&quot; type=&quot;number&quot; step=&quot;1&quot;)<br />|
|`vElProps`|<code>&#124;</code>`component`(:<code>&#124;</code>`propName`=&quot;<code>&#124;</code>`propValue`&quot;)<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />|
|`vSrc`|img(:src=&quot;&#39;/path/to/images/&#39; + <code>&#124;</code>`fileName`&quot; alt=&quot;<code>&#124;</code>`altText`&quot;)<br />|
|`vClass`|<code>&#124;</code>`div`(:class=&quot;{ <code>&#124;</code>`className`: <code>&#124;</code>`data` }&quot;)<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />|
|`vClassObj`|<code>&#124;</code>`div` :class=&quot;[<code>&#124;</code>`classNameA`, <code>&#124;</code>`classNameB`]&quot;)<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />|
|`vClassObjMult`|<code>&#124;</code>`div`(:class=&quot;[<code>&#124;</code>`classNameA`, {<code>&#124;</code>`classNameB` : <code>&#124;</code>`condition`}]&quot;)<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />|
|`vStyle`|<code>&#124;</code>`div`(:style=&quot;{ fontSize: <code>&#124;</code>`data` + &#39;px&#39; }&quot;)<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />|
|`vStyleObj`|<code>&#124;</code>`div`(:style=&quot;[<code>&#124;</code>`styleObjectA`, <code>&#124;</code>`styleObjectB]`&quot;)<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />|
|`Transition`|transition<code>&#124;</code><br />|
|`TransitionAnim`|transition(<br />&nbsp;&nbsp;&nbsp;&nbsp;mode=&quot;out-in&quot;<br />&nbsp;&nbsp;&nbsp;&nbsp;@before-enter=&quot;beforeEnter&quot;<br />&nbsp;&nbsp;&nbsp;&nbsp;@enter=&quot;enter&quot;<br />&nbsp;&nbsp;&nbsp;&nbsp;@before-leave=&quot;beforeLeave&quot;<br />&nbsp;&nbsp;&nbsp;&nbsp;@leave=&quot;leave&quot;<br />&nbsp;&nbsp;&nbsp;&nbsp;:css=&quot;false&quot;)<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />|
|`TransitionGroup`|transition-group<code>&#124;</code><br />|
|`slot`|slot<br />|
|`Component`|component(:is=&quot;<code>&#124;</code>`componentId`&quot;) <code>&#124;</code><br />|
|`KeepAlive`|keep-alive<code>&#124;</code><br />|

### Vue Script Snippets

| Prefix | Snippet Content |
| --- | --- |
|`vImport`|import <code>&#124;</code>`Name` from &#39;./components/<code>&#124;</code>`Name`&#39;<br />|
|`vImportLib`|import <code>&#124;</code>`libName` from &#39;<code>&#124;</code>`libName`&#39;<br />|
|`vBaseWithComponent`|import <code>&#124;</code>`Name` from &#39;~components/<code>&#124;</code>`Name`&#39;<br /><br />export default {<br />&nbsp;&nbsp;&nbsp;&nbsp;components: {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code>`Name`<br />&nbsp;&nbsp;&nbsp;&nbsp;},<br />}<br />|
|`vNewVue`|new Vue({<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />})<br />|
|`vConfigSilent`|Vue.config.silent = <code>&#124;</code>`true`<br />|
|`vConfigOptionMergeStrategies`|Vue.config.optionMergeStrategies<code>&#124;</code><br />|
|`vConfigDevtools`|Vue.config.devtools = <code>&#124;</code>`true`<br />|
|`vConfigErrorHandler`|Vue.config.errorHandler = function (err, vm, info) {<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code>`// handle error`<br />}<br />|
|`vConfigWarnHandler`|Vue.config.warnHandler = function (msg, vm, trace) {<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code>`// handle error`<br />}<br />|
|`vConfigIgnoredElements`|Vue.config.ignoredElements = [<br />&nbsp;&nbsp;&nbsp;&nbsp;&#39;<code>&#124;</code>&#39;<br />]<code>&#124;</code><br />|
|`vConfigKeyCodes`|Vue.config.keyCodes = {<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code>`// camelCase won`t work`<br />}<br />|
|`vConfigPerformance`|Vue.config.performance = <code>&#124;</code>`true`<br />|
|`vConfigProductionTip`|Vue.config.productionTip = <code>&#124;</code>`false`<br />|
|`vUse`|Vue.use(<code>&#124;</code>`plugin`)<code>&#124;</code><br />|
|`vInstallDirective`|Vue.directive(<code>&#124;</code>`id`<code>&#124;</code>`, [definition]`)<br />|
|`vInstallFilter`|Vue.filter(<code>&#124;</code>`id`<code>&#124;</code>`, [definition]`)<br />|
|`vInstallComponent`|Vue.component(<code>&#124;</code>`id`<code>&#124;</code>`, [definition]`)<code>&#124;</code><br />|
|`vNextTick`|Vue.nextTick({<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />})<br />|
|`vSet`|Vue.set(<code>&#124;</code>`target`, <code>&#124;</code>`key`, <code>&#124;</code>`value`)<br />|
|`vDelete`|Vue.delete(<code>&#124;</code>`target`, <code>&#124;</code>`key`)<br />|
|`vMixin`|Vue.mixin(<code>&#124;</code>`mixin`)<br />|
|`vCompile`|Vue.compile(<code>&#124;</code>`template`)<br />|
|`vExtend`|Vue.extend({<br />&nbsp;&nbsp;&nbsp;&nbsp;template:<code>&#124;</code>`template`<br />})<br />|
|`vComponents`|components: {<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code>`componentsName`,<br />},<br />|
|`vDirectives`|directives: {<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />}),<br />|
|`vDirective`|<code>&#124;</code>`directiveName`: {<br />&nbsp;&nbsp;&nbsp;&nbsp;bind(el, binding, vnode) {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&nbsp;&nbsp;&nbsp;&nbsp;}<br />},<br />|
|`vFilters`|filters: {<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code>`fnName`: function(<code>&#124;</code>`value`) {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return <code>&#124;</code>`value`<code>&#124;</code><br />&nbsp;&nbsp;&nbsp;&nbsp;}<br />},<br />|
|`vFilter`|<code>&#124;</code>`fnName`: function(<code>&#124;</code>`value`) {<br />&nbsp;&nbsp;&nbsp;&nbsp;return <code>&#124;</code>`value`<code>&#124;</code><br />},<br />|
|`vMixins`|mixins: [<code>&#124;</code>`mixinName`],<br />|
|`vProps`|props: {<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code>`propName`: {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: <code>&#124;</code>`number`,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;default: <code>&#124;</code><br />&nbsp;&nbsp;&nbsp;&nbsp;},<br />},<br />|
|`vProp`|<code>&#124;</code>`propName`: {<br />&nbsp;&nbsp;&nbsp;&nbsp;type: <code>&#124;</code>`number`,<br />&nbsp;&nbsp;&nbsp;&nbsp;default: <code>&#124;</code><br />},<br />|
|`vData`|data() {<br />&nbsp;&nbsp;&nbsp;&nbsp;return {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code>`key`: <code>&#124;</code>`value`<br />&nbsp;&nbsp;&nbsp;&nbsp;}<br />},<br />|
|`vComputed`|computed: {<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code>`name`() {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return this.<code>&#124;</code>`data` <code>&#124;</code><br />&nbsp;&nbsp;&nbsp;&nbsp;},<br />},<br />|
|`vComputedItem`|<code>&#124;</code>`name`() {<br />&nbsp;&nbsp;&nbsp;&nbsp;return this.<code>&#124;</code>`data` <code>&#124;</code><br />},<br />|
|`vWatch`|watch: {<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code>`data`(<code>&#124;</code>`newValue`, <code>&#124;</code>`oldValue`) {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&nbsp;&nbsp;&nbsp;&nbsp;},<br />},<br />|
|`vWatchItem`|<code>&#124;</code>`data`(<code>&#124;</code>`newValue`, <code>&#124;</code>`oldValue`) {<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />},<br />|
|`vMethods`|methods: {<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code>`name`() {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&nbsp;&nbsp;&nbsp;&nbsp;},<br />},<br />|
|`vMethod`|<code>&#124;</code>`name`() {<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />},<br />|
|`vTransitionAnimHook`|beforeEnter(el) {<br />&nbsp;&nbsp;&nbsp;&nbsp;console.log(&#39;beforeEnter&#39;)<br />},<br />enter(el, done) {<br />&nbsp;&nbsp;&nbsp;&nbsp;console.log(&#39;enter&#39;)<br />&nbsp;&nbsp;&nbsp;&nbsp;done()<br />},<br />beforeLeave(el) {<br />&nbsp;&nbsp;&nbsp;&nbsp;console.log(&#39;beforeLeave&#39;)<br />},<br />leave(el, done) {<br />&nbsp;&nbsp;&nbsp;&nbsp;console.log(&#39;leave&#39;)<br />&nbsp;&nbsp;&nbsp;&nbsp;done()<br />},<br />|
|`vm-data`|<code>&#124;</code>`vm`.\$data<code>&#124;</code><br />|
|`vm-props`|<code>&#124;</code>`vm`.\$props<code>&#124;</code><br />|
|`vm-el`|<code>&#124;</code>`vm`.\$el<code>&#124;</code><br />|
|`vm-options`|<code>&#124;</code>`vm`.\$options<code>&#124;</code><br />|
|`vm-parent`|<code>&#124;</code>`vm`.\$parent<code>&#124;</code><br />|
|`vm-root`|<code>&#124;</code>`vm`.\$root<code>&#124;</code><br />|
|`vm-children`|<code>&#124;</code>`vm`.\$children<code>&#124;</code><br />|
|`vm-slots`|<code>&#124;</code>`vm`.\$slots<code>&#124;</code><br />|
|`vm-scoped-slots`|\$this.\$scopedSlots.default({<br />&nbsp;&nbsp;&nbsp;&nbsp;<br />})<br />|
|`vm-refs`|<code>&#124;</code>`vm`.\$refs<code>&#124;</code><br />|
|`vm-is-server`|<code>&#124;</code>`vm`.\$isServer<code>&#124;</code><br />|
|`vm-attrs`|<code>&#124;</code>`vm`.\$attrs<code>&#124;</code><br />|
|`vm-listeners`|<code>&#124;</code>`vm`.\$listeners<code>&#124;</code><br />|
|`vm-watch`|<code>&#124;</code>`vm`.\$watch(<code>&#124;</code>`expOrFn`, <code>&#124;</code>`callback`)<br />|
|`vm-set`|<code>&#124;</code>`vm`.\$set(<code>&#124;</code>`object`, <code>&#124;</code>`key`, <code>&#124;</code>`value`)<br />|
|`vm-delete`|<code>&#124;</code>`vm`.\$delete(<code>&#124;</code>`object`, <code>&#124;</code>`key`)<br />|
|`vm-on`|<code>&#124;</code>`vm`.\$on(&#39;<code>&#124;</code>`event`&#39;, <code>&#124;</code>`callback`)<code>&#124;</code><br />|
|`vm-once`|<code>&#124;</code>`vm`.\$once(&#39;<code>&#124;</code>`event`&#39;, <code>&#124;</code>`callback`)<code>&#124;</code><br />|
|`vm-off`|<code>&#124;</code>`vm`.\$off(&#39;<code>&#124;</code>`event`&#39;, <code>&#124;</code>`callback`)<code>&#124;</code><br />|
|`vm-emit`|<code>&#124;</code>`vm`.\$emit(&#39;<code>&#124;</code>`event`&#39;<code>&#124;</code>`, […args]`)<code>&#124;</code><br />|
|`vm-mount`|<code>&#124;</code>`vm`.\$mount(&#39;<code>&#124;</code>&#39;)<br />|
|`vm-force-update`|<code>&#124;</code>`vm`.\$forceUpdate()<br />|
|`vm-next-tick`|<code>&#124;</code>`vm`.\$nextTick(<code>&#124;</code>`callback`)<br />|
|`vm-destroy`|<code>&#124;</code>`vm`.\$destroy()<code>&#124;</code><br />|
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
|`RouterView`|&lt;router-view&gt;<code>&#124;</code>&lt;/router-view&gt;<code>&#124;</code><br />|
|`RouterLink`|&lt;router-link <code>&#124;</code>&gt;<code>&#124;</code>&lt;/router-link&gt;<code>&#124;</code><br />|
|`RouterLinkTo`|&lt;router-link to=&quot;<code>&#124;</code>&quot;&gt;<code>&#124;</code>&lt;/router-link&gt;<code>&#124;</code><br />|
|`to`|to=&quot;<code>&#124;</code>&quot;<code>&#124;</code><br />|
|`tag`|tag=&quot;<code>&#124;</code>&quot;<code>&#124;</code><br />|

### Vue Template Router Pug Snippets

| Prefix | Snippet Content |
| --- | --- |
|`RouterView`|router-view <code>&#124;</code><br />|
|`RouterLink`|router-link <code>&#124;</code><br />|
|`RouterLinkTo`|router-link (to=&quot;<code>&#124;</code>&quot;) <code>&#124;</code><br />|

### Vue Script Router Snippets

| Prefix | Snippet Content |
| --- | --- |
|`vNewVueRouter`|const <code>&#124;</code>`router` = new VueRouter({<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />})<code>&#124;</code><br />|
|`vRoutes`|routes: [<code>&#124;</code>]<code>&#124;</code><br />|
|`vRouterBeforeEach`|<code>&#124;</code>`router`.beforeEach((to, from, next) =&gt; {<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code>`// to and from are both route objects`<br />})<code>&#124;</code><br />|
|`vBeforeEnter`|beforeEnter: (to, from, next) =&gt; {<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code>`// ...`<br />}<br />|
|`vBeforeRouteEnter`|beforeRouteEnter: (to, from, next) =&gt; {<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code>`// ...`<br />}<br />|
|`vBeforeRouteLeave`|beforeRouteLeave: (to, from, next) =&gt; {<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code>`// ...`<br />}<br />|
|`vScrollBehavior`|scrollBehavior (to, from, savedPosition) {<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code>`// ...`<br />}<br />|
|`vrouter-push`|<code>&#124;</code>`router`.push(<code>&#124;</code>)<code>&#124;</code><br />|
|`vrouter-replace`|<code>&#124;</code>`router`.replace(<code>&#124;</code>)<code>&#124;</code><br />|
|`vrouter-go`|<code>&#124;</code>`router`.go(<code>&#124;</code>)<code>&#124;</code><br />|
|`alias`|alias<br />|
|`mode`|mode<br />|
|`children`|children<br />|
|`meta`|meta<br />|

## Vuex Snippets

### Vue Script Vuex Snippets

| Prefix | Snippet Content |
| --- | --- |
|`vVuexBase`|import Vue from &#39;vue&#39;;<br />import Vuex from &#39;vuex&#39;;<br /><br />Vue.use(Vuex);<br /><br />export const store = new Vuex.Store({<br />&nbsp;&nbsp;&nbsp;&nbsp;state: {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code>`key`: <code>&#124;</code>`value`<br />&nbsp;&nbsp;&nbsp;&nbsp;}<br />});<br />|
|`vNewVuexStore`|const <code>&#124;</code>`store` = new Vuex.Store({<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code>`// ...`<br />})<br />|
|`vVuexGetters`|getters: {<br />&nbsp;&nbsp;&nbsp;&nbsp;value: <code>&#124;</code>`value` =&gt; {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return state.<code>&#124;</code>`value`;<br />&nbsp;&nbsp;&nbsp;&nbsp;}<br />}<br />|
|`vVuexMutations`|mutations: {<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code>`updateValue`(state, <code>&#124;</code>`payload`) {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state.<code>&#124;</code>`value` = <code>&#124;</code>`payload`;<br />&nbsp;&nbsp;&nbsp;&nbsp;}<br />}<br />|
|`vVuexAction`|actions: {<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code>`updateValue`({commit}, <code>&#124;</code>`payload`) {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;commit(<code>&#124;</code>`updateValue`, <code>&#124;</code>`payload`);<br />&nbsp;&nbsp;&nbsp;&nbsp;}<br />}<br />|
|`vVuexCommitInMutation`|<code>&#124;</code>`mutationName`() {<br />&nbsp;&nbsp;&nbsp;&nbsp;this.\$store.commit(&#39;<code>&#124;</code>`mutationName`&#39;, <code>&#124;</code>`payload`)<br />}<br />|
|`vVuexDispatchInAction`|<code>&#124;</code>`actionName`() {<br />&nbsp;&nbsp;&nbsp;&nbsp;this.\$store.dispatch(&#39;<code>&#124;</code>`actionName`&#39;, <code>&#124;</code>`payload`)<br />}<br />|
|`vVuexImport`|import { store } from &#39;./store/store&#39;;<br />|
|`vImportGSAP`|import { TimelineMax, <code>&#124;</code>`Ease` } from &#39;gsap&#39;<br />|
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
|`vSsrRenderer`|const <code>&#124;</code>`renderer` = require(&#39;vue-server-renderer&#39;).createRenderer()<code>&#124;</code><br />|
|`vSsrCreateRenderer`|createRenderer({<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />})<br />|
|`renderToString`|renderToString<br />|
|`renderToStream`|renderToStream<br />|
|`createBundleRenderer`|createBundleRenderer<br />|
|`bundleRenderer.renderToString`|bundleRenderer.renderToString<br />|
|`bundleRenderer.renderToStream`|bundleRenderer.renderToStream<br />|



## License

MIT
