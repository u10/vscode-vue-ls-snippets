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
|`templatePug`|&lt;template lang="pug"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&lt;/template&gt;<br />|
|`script`|&lt;script&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&lt;/script&gt;<br />|
|`style`|&lt;style&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&lt;/style&gt;<br />|
|`styleLang`|&lt;style lang="<code>&#124;</code>"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&lt;/style&gt;<br />|

### Vue Template Snippets

| Prefix | Snippet Content |
| --- | --- |
|`v-for`|v-for="<code>&#124;</code>``item`` in <code>&#124;</code>``items``" :key="<code>&#124;</code>``item.id``"<br />|
|`v-if`|v-if="<code>&#124;</code>``condition``"<br />|
|`v-if-with-key`|v-if="<code>&#124;</code>``condition``" key="<code>&#124;</code>``key``"<br />|
|`v-else-if`|v-else-if="<code>&#124;</code>``condition``"<br />|
|`v-else-if-with-key`|v-else-if="<code>&#124;</code>``condition``" key="<code>&#124;</code>``key``"<br />|
|`v-else`|v-else<br />|
|`v-else-with-key`|v-else key="<code>&#124;</code>``key``"<br />|
|`v-show`|v-show="<code>&#124;</code>``condition``"<br />|
|`v-text`|v-text="<code>&#124;</code>``msg``"<br />|
|`v-html`|v-html="<code>&#124;</code>``html``"<br />|
|`v-pre`|v-pre<br />|
|`v-bind`|v-bind:<code>&#124;</code>="<code>&#124;</code>"<br />|
|`v-model`|v-model="<code>&#124;</code>``something``"<br />|
|`v-on`|v-on:<code>&#124;</code>``event``="<code>&#124;</code>``handle``"<br />|
|`v-on-click`|@click="<code>&#124;</code>``handler``(<code>&#124;</code>``arg``, \$event)"<br />|
|`v-once`|v-once<br />|
|`v-cloak`|v-cloak<br />|
|`key`|:key="<code>&#124;</code>``key``"<br />|
|`ref`|ref="<code>&#124;</code>``reference``"<br />|
|`slot`|slot="<code>&#124;</code>"<br />|
|`enter-class`|enter-class="<code>&#124;</code>"<br />|
|`leave-class`|leave-class="<code>&#124;</code>"<br />|
|`appear-class`|appear-class="<code>&#124;</code>"<br />|
|`enter-to-class`|enter-to-class="<code>&#124;</code>"<br />|
|`leave-to-class`|leave-to-class="<code>&#124;</code>"<br />|
|`appear-to-class`|appear-to-class="<code>&#124;</code>"<br />|
|`enter-active-class`|enter-active-class="<code>&#124;</code>"<br />|
|`leave-active-class`|leave-active-class="<code>&#124;</code>"<br />|
|`appear-active-class`|appear-active-class="<code>&#124;</code>"<br />|
|`before-enter-event`|@before-enter="<code>&#124;</code>"<br />|
|`befor-eleave-event`|@before-leave="<code>&#124;</code>"<br />|
|`before-appear-event`|@before-appear="<code>&#124;</code>"<br />|
|`enter-event`|@enter="<code>&#124;</code>"<br />|
|`leave-event`|@leave="<code>&#124;</code>"<br />|
|`appear-event`|@appear="<code>&#124;</code>"<br />|
|`after-enter-event`|@after-enter="<code>&#124;</code>"<br />|
|`after-leave-event`|@after-leave="<code>&#124;</code>"<br />|
|`after-appear-event`|@after-appear="<code>&#124;</code>"<br />|
|`enter-cancelled-event`|@enter-cancelled="<code>&#124;</code>"<br />|
|`leave-cancelled-event`|@leave-cancelled="<code>&#124;</code>"<br />|
|`appear-cancelled-event`|@appear-cancelled="<code>&#124;</code>"<br />|
|`vFor`|&lt;<code>&#124;</code>``div`` v-for="<code>&#124;</code>``item`` in <code>&#124;</code>``item``s" :key="<code>&#124;</code>``item``.id"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;{{ <code>&#124;</code>``item`` }}<br />&lt;/<code>&#124;</code>``div``&gt;<br />|
|`vIf`|&lt;<code>&#124;</code>``div`` v-if="<code>&#124;</code>``condition``"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&lt;/<code>&#124;</code>``div``&gt;<br />|
|`vIfWithKey`|&lt;<code>&#124;</code>``div`` v-if="<code>&#124;</code>``condition``" key="<code>&#124;</code>``key``"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&lt;/<code>&#124;</code>``div``&gt;<br />|
|`vElseIf`|&lt;<code>&#124;</code>``div`` v-else-if="<code>&#124;</code>``condition``"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&lt;/<code>&#124;</code>``div``&gt;<br />|
|`vElseIfWithKey`|&lt;<code>&#124;</code>``div`` v-else-if="<code>&#124;</code>``condition``" key="<code>&#124;</code>``key``"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&lt;/<code>&#124;</code>``div``&gt;<br />|
|`vElse`|&lt;<code>&#124;</code>``div`` v-else&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&lt;/<code>&#124;</code>``div``&gt;<br />|
|`vElseWithKey`|&lt;<code>&#124;</code>``div`` v-else key="<code>&#124;</code>``key``"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&lt;/<code>&#124;</code>``div``&gt;<br />|
|`vModel`|&lt;input v-model="<code>&#124;</code>``data``" type="text" /&gt;<br />|
|`vModelNum`|&lt;input v-model.number="<code>&#124;</code>``numData``" type="number" step="1" /&gt;<br />|
|`vElProps`|&lt;<code>&#124;</code>``component`` :<code>&#124;</code>``propName``="<code>&#124;</code>``propValue``"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&lt;/<code>&#124;</code>``component``&gt;<br />|
|`vSrc`|&lt;img :src="'/path/to/images/' + <code>&#124;</code>``fileName``" alt="<code>&#124;</code>``altText``"/&gt;<br />|
|`vClass`|&lt;<code>&#124;</code>``div`` :class="{ <code>&#124;</code>``className``: <code>&#124;</code>``data`` }"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&lt;/<code>&#124;</code>``div``&gt;<br />|
|`vClassObj`|&lt;<code>&#124;</code>``div`` :class="[<code>&#124;</code>``classNameA``, <code>&#124;</code>``classNameB``]"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&lt;/<code>&#124;</code>``div``&gt;<br />|
|`vClassObjMult`|&lt;<code>&#124;</code>``div`` :class="[<code>&#124;</code>``classNameA``, {<code>&#124;</code>``classNameB`` : <code>&#124;</code>``condition``}]"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&lt;/<code>&#124;</code>``div``&gt;<br />|
|`vStyle`|&lt;<code>&#124;</code>``div`` :style="{ fontSize: <code>&#124;</code>``data`` + 'px' }"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&lt;/<code>&#124;</code>``div``&gt;<br />|
|`vStyleObj`|&lt;<code>&#124;</code>``div`` :style="[<code>&#124;</code>``styleObjectA``, <code>&#124;</code>``styleObjectB]``"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&lt;/<code>&#124;</code>``div``&gt;<br />|
|`Transition`|&lt;transition<code>&#124;</code>&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&lt;/transition&gt;<br />|
|`TransitionAnim`|&lt;transition<br />&nbsp;&nbsp;&nbsp;&nbsp;mode="out-in"<br />&nbsp;&nbsp;&nbsp;&nbsp;@before-enter="beforeEnter"<br />&nbsp;&nbsp;&nbsp;&nbsp;@enter="enter"<br />&nbsp;&nbsp;&nbsp;&nbsp;@before-leave="beforeLeave"<br />&nbsp;&nbsp;&nbsp;&nbsp;@leave="leave"<br />&nbsp;&nbsp;&nbsp;&nbsp;:css="false"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&lt;/transition&gt;<br />|
|`TransitionGroup`|&lt;transition-group<code>&#124;</code>&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&lt;/transition-group&gt;<br />|
|`Slot`|&lt;slot<code>&#124;</code>&gt;<code>&#124;</code>&lt;/slot&gt;<br />|
|`Component`|&lt;component :is="<code>&#124;</code>``componentId``"&gt;&lt;/component&gt;<br />|
|`KeepAlive`|&lt;keep-alive<code>&#124;</code>&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&lt;/keep-alive&gt;<br />|

### Vue Template Pug Snippets

| Prefix | Snippet Content |
| --- | --- |
|`vFor`|<code>&#124;</code>``div``(v-for="<code>&#124;</code>``item`` in <code>&#124;</code>``item``s" :key="<code>&#124;</code>``item``.id")<br />&nbsp;&nbsp;&nbsp;&nbsp;{{ <code>&#124;</code>``item`` }}<br />|
|`vIf`|<code>&#124;</code>``div``(v-if="<code>&#124;</code>``condition``")<br />&nbsp;&nbsp;&nbsp;&nbsp;<br />|
|`vIfWithKey`|<code>&#124;</code>``div``(v-if="<code>&#124;</code>``condition``" key="<code>&#124;</code>``key``")<br />&nbsp;&nbsp;&nbsp;&nbsp;<br />|
|`vElseIf`|<code>&#124;</code>``div``(v-else-if="<code>&#124;</code>``condition``")<br />&nbsp;&nbsp;&nbsp;&nbsp;<br />|
|`vElseIfWithKey`|<code>&#124;</code>``div``(v-else-if="<code>&#124;</code>``condition``" key="<code>&#124;</code>``key``")<br />&nbsp;&nbsp;&nbsp;&nbsp;<br />|
|`vElse`|<code>&#124;</code>``div``(v-else)<br />&nbsp;&nbsp;&nbsp;&nbsp;<br />|
|`vElseWithKey`|<code>&#124;</code>``div``(v-else key="<code>&#124;</code>``key``")<br />&nbsp;&nbsp;&nbsp;&nbsp;<br />|
|`vModel`|input(v-model="<code>&#124;</code>``data``" type="text")<br />|
|`vModelNum`|input(v-model.number="<code>&#124;</code>``numData``" type="number" step="1")<br />|
|`vElProps`|<code>&#124;</code>``component``(:<code>&#124;</code>``propName``="<code>&#124;</code>``propValue``")<br />&nbsp;&nbsp;&nbsp;&nbsp;<br />|
|`vSrc`|img(:src="'/path/to/images/' + <code>&#124;</code>``fileName``" alt="<code>&#124;</code>``altText``")<br />|
|`vClass`|<code>&#124;</code>``div``(:class="{ <code>&#124;</code>``className``: <code>&#124;</code>``data`` }")<br />&nbsp;&nbsp;&nbsp;&nbsp;<br />|
|`vClassObj`|<code>&#124;</code>``div``(:class="[<code>&#124;</code>``classNameA``, <code>&#124;</code>``classNameB``]")<br />&nbsp;&nbsp;&nbsp;&nbsp;<br />|
|`vClassObjMult`|<code>&#124;</code>``div``(:class="[<code>&#124;</code>``classNameA``, {<code>&#124;</code>``classNameB`` : <code>&#124;</code>``condition``}]")<br />&nbsp;&nbsp;&nbsp;&nbsp;<br />|
|`vStyle`|<code>&#124;</code>``div``(:style="{ fontSize: <code>&#124;</code>``data`` + 'px' }")<br />&nbsp;&nbsp;&nbsp;&nbsp;<br />|
|`vStyleObj`|<code>&#124;</code>``div``(:style="[<code>&#124;</code>``styleObjectA``, <code>&#124;</code>``styleObjectB]``")<br />&nbsp;&nbsp;&nbsp;&nbsp;<br />|
|`Transition`|transition<br />|
|`TransitionAnim`|transition(<br />&nbsp;&nbsp;&nbsp;&nbsp;mode="out-in"<br />&nbsp;&nbsp;&nbsp;&nbsp;@before-enter="beforeEnter"<br />&nbsp;&nbsp;&nbsp;&nbsp;@enter="enter"<br />&nbsp;&nbsp;&nbsp;&nbsp;@before-leave="beforeLeave"<br />&nbsp;&nbsp;&nbsp;&nbsp;@leave="leave"<br />&nbsp;&nbsp;&nbsp;&nbsp;:css="false")<br />&nbsp;&nbsp;&nbsp;&nbsp;<br />|
|`TransitionGroup`|transition-group<br />|
|`slot`|slot<br />|
|`Component`|component(:is="<code>&#124;</code>``componentId``") <br />|
|`KeepAlive`|keep-alive<br />|

### Vue Script Snippets

| Prefix | Snippet Content |
| --- | --- |
|`vImport`|import <code>&#124;</code>``Name`` from './components/<code>&#124;</code>``Name``'<br />|
|`vImportLib`|import <code>&#124;</code>``libName`` from '<code>&#124;</code>``libName``'<br />|
|`vBaseWithComponent`|import <code>&#124;</code>``Name`` from '@/components/<code>&#124;</code>``Name``'<br /><br />export default {<br />&nbsp;&nbsp;&nbsp;&nbsp;components: {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code>``Name``<br />&nbsp;&nbsp;&nbsp;&nbsp;},<br />}<br />|
|`vNewVue`|new Vue({<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />})<br />|
|`vConfigSilent`|Vue.config.silent = <code>&#124;</code>``true``<br />|
|`vConfigOptionMergeStrategies`|Vue.config.optionMergeStrategies<br />|
|`vConfigDevtools`|Vue.config.devtools = <code>&#124;</code>``true``<br />|
|`vConfigErrorHandler`|Vue.config.errorHandler = function (err, vm, info) {<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code>``// handle error``<br />}<br />|
|`vConfigWarnHandler`|Vue.config.warnHandler = function (msg, vm, trace) {<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code>``// handle error``<br />}<br />|
|`vConfigIgnoredElements`|Vue.config.ignoredElements = [<br />&nbsp;&nbsp;&nbsp;&nbsp;'<code>&#124;</code>'<br />]<br />|
|`vConfigKeyCodes`|Vue.config.keyCodes = {<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code>``// camelCase won`t work``<br />}<br />|
|`vConfigPerformance`|Vue.config.performance = <code>&#124;</code>``true``<br />|
|`vConfigProductionTip`|Vue.config.productionTip = <code>&#124;</code>``false``<br />|
|`vUse`|Vue.use(<code>&#124;</code>``plugin``)<br />|
|`vInstallDirective`|Vue.directive(<code>&#124;</code>``id``<code>&#124;</code>``, [definition]``)<br />|
|`vInstallFilter`|Vue.filter(<code>&#124;</code>``id``<code>&#124;</code>``, [definition]``)<br />|
|`vInstallComponent`|Vue.component(<code>&#124;</code>``id``<code>&#124;</code>``, [definition]``)<br />|
|`vNextTick`|Vue.nextTick({<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />})<br />|
|`vSet`|Vue.set(<code>&#124;</code>``target``, <code>&#124;</code>``key``, <code>&#124;</code>``value``)<br />|
|`vDelete`|Vue.delete(<code>&#124;</code>``target``, <code>&#124;</code>``key``)<br />|
|`vMixin`|Vue.mixin(<code>&#124;</code>``mixin``)<br />|
|`vCompile`|Vue.compile(<code>&#124;</code>``template``)<br />|
|`vExtend`|Vue.extend({<br />&nbsp;&nbsp;&nbsp;&nbsp;template:<code>&#124;</code>``template``<br />})<br />|
|`vComponents`|components: {<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code>``componentsName``,<br />},<br />|
|`vDirectives`|directives: {<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />},<br />|
|`vDirective`|<code>&#124;</code>``directiveName``: {<br />&nbsp;&nbsp;&nbsp;&nbsp;bind(el, binding, vnode) {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&nbsp;&nbsp;&nbsp;&nbsp;}<br />},<br />|
|`vFilters`|filters: {<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code>``fnName``: function(<code>&#124;</code>``value``) {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return <code>&#124;</code>``value``<code>&#124;</code><br />&nbsp;&nbsp;&nbsp;&nbsp;}<br />},<br />|
|`vFilter`|<code>&#124;</code>``fnName``: function(<code>&#124;</code>``value``) {<br />&nbsp;&nbsp;&nbsp;&nbsp;return <code>&#124;</code>``value``<code>&#124;</code><br />},<br />|
|`vMixins`|mixins: [<code>&#124;</code>``mixinName``],<br />|
|`vProps`|props: {<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code>``propName``: {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: <code>&#124;</code>``number``,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;default: <code>&#124;</code><br />&nbsp;&nbsp;&nbsp;&nbsp;},<br />},<br />|
|`vProp`|<code>&#124;</code>``propName``: {<br />&nbsp;&nbsp;&nbsp;&nbsp;type: <code>&#124;</code>``number``,<br />&nbsp;&nbsp;&nbsp;&nbsp;default: <code>&#124;</code><br />},<br />|
|`vData`|data() {<br />&nbsp;&nbsp;&nbsp;&nbsp;return {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code>``key``: <code>&#124;</code>``value``<br />&nbsp;&nbsp;&nbsp;&nbsp;}<br />},<br />|
|`vComputed`|computed: {<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code>``name``() {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return this.<code>&#124;</code>``data`` <code>&#124;</code><br />&nbsp;&nbsp;&nbsp;&nbsp;},<br />},<br />|
|`vComputedItem`|<code>&#124;</code>``name``() {<br />&nbsp;&nbsp;&nbsp;&nbsp;return this.<code>&#124;</code>``data`` <code>&#124;</code><br />},<br />|
|`vWatch`|watch: {<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code>``data``(<code>&#124;</code>``newValue``, <code>&#124;</code>``oldValue``) {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&nbsp;&nbsp;&nbsp;&nbsp;},<br />},<br />|
|`vWatchItem`|<code>&#124;</code>``data``(<code>&#124;</code>``newValue``, <code>&#124;</code>``oldValue``) {<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />},<br />|
|`vMethods`|methods: {<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code>``name``() {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />&nbsp;&nbsp;&nbsp;&nbsp;},<br />},<br />|
|`vMethod`|<code>&#124;</code>``name``() {<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />},<br />|
|`vTransitionAnimHook`|beforeEnter(el) {<br />&nbsp;&nbsp;&nbsp;&nbsp;console.log('beforeEnter')<br />},<br />enter(el, done) {<br />&nbsp;&nbsp;&nbsp;&nbsp;console.log('enter')<br />&nbsp;&nbsp;&nbsp;&nbsp;done()<br />},<br />beforeLeave(el) {<br />&nbsp;&nbsp;&nbsp;&nbsp;console.log('beforeLeave')<br />},<br />leave(el, done) {<br />&nbsp;&nbsp;&nbsp;&nbsp;console.log('leave')<br />&nbsp;&nbsp;&nbsp;&nbsp;done()<br />},<br />|
|`vm-data`|<code>&#124;</code>``vm``.\$data<br />|
|`vm-props`|<code>&#124;</code>``vm``.\$props<br />|
|`vm-el`|<code>&#124;</code>``vm``.\$el<br />|
|`vm-options`|<code>&#124;</code>``vm``.\$options<br />|
|`vm-parent`|<code>&#124;</code>``vm``.\$parent<br />|
|`vm-root`|<code>&#124;</code>``vm``.\$root<br />|
|`vm-children`|<code>&#124;</code>``vm``.\$children<br />|
|`vm-slots`|<code>&#124;</code>``vm``.\$slots<br />|
|`vm-scoped-slots`|\$this.\$scopedSlots.default({<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />})<br />|
|`vm-refs`|<code>&#124;</code>``vm``.\$refs<br />|
|`vm-is-server`|<code>&#124;</code>``vm``.\$isServer<br />|
|`vm-attrs`|<code>&#124;</code>``vm``.\$attrs<br />|
|`vm-listeners`|<code>&#124;</code>``vm``.\$listeners<br />|
|`vm-watch`|<code>&#124;</code>``vm``.\$watch(<code>&#124;</code>``expOrFn``, <code>&#124;</code>``callback``)<br />|
|`vm-set`|<code>&#124;</code>``vm``.\$set(<code>&#124;</code>``object``, <code>&#124;</code>``key``, <code>&#124;</code>``value``)<br />|
|`vm-delete`|<code>&#124;</code>``vm``.\$delete(<code>&#124;</code>``object``, <code>&#124;</code>``key``)<br />|
|`vm-on`|<code>&#124;</code>``vm``.\$on('<code>&#124;</code>``event``', <code>&#124;</code>``callback``)<br />|
|`vm-once`|<code>&#124;</code>``vm``.\$once('<code>&#124;</code>``event``', <code>&#124;</code>``callback``)<br />|
|`vm-off`|<code>&#124;</code>``vm``.\$off('<code>&#124;</code>``event``', <code>&#124;</code>``callback``)<br />|
|`vm-emit`|<code>&#124;</code>``vm``.\$emit('<code>&#124;</code>``event``'<code>&#124;</code>``, […args]``)<br />|
|`vm-mount`|<code>&#124;</code>``vm``.\$mount('<code>&#124;</code>')<br />|
|`vm-force-update`|<code>&#124;</code>``vm``.\$forceUpdate()<br />|
|`vm-next-tick`|<code>&#124;</code>``vm``.\$nextTick(<code>&#124;</code>``callback``)<br />|
|`vm-destroy`|<code>&#124;</code>``vm``.\$destroy()<br />|
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
|`RouterView`|&lt;router-view&gt;<code>&#124;</code>&lt;/router-view&gt;<br />|
|`RouterLink`|&lt;router-link <code>&#124;</code>&gt;<code>&#124;</code>&lt;/router-link&gt;<br />|
|`RouterLinkTo`|&lt;router-link to="<code>&#124;</code>"&gt;<code>&#124;</code>&lt;/router-link&gt;<br />|
|`to`|to="<code>&#124;</code>"<br />|
|`tag`|tag="<code>&#124;</code>"<br />|

### Vue Template Router Pug Snippets

| Prefix | Snippet Content |
| --- | --- |
|`RouterView`|router-view <br />|
|`RouterLink`|router-link <br />|
|`RouterLinkTo`|router-link (to="<code>&#124;</code>") <br />|

### Vue Script Router Snippets

| Prefix | Snippet Content |
| --- | --- |
|`vNewVueRouter`|const <code>&#124;</code>``router`` = new VueRouter({<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />})<br />|
|`vRoutes`|routes: [<code>&#124;</code>]<br />|
|`vRouterBeforeEach`|<code>&#124;</code>``router``.beforeEach((to, from, next) =&gt; {<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code>``// to and from are both route objects``<br />})<br />|
|`vBeforeEnter`|beforeEnter: (to, from, next) =&gt; {<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code>``// ...``<br />}<br />|
|`vBeforeRouteEnter`|beforeRouteEnter: (to, from, next) =&gt; {<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code>``// ...``<br />}<br />|
|`vBeforeRouteLeave`|beforeRouteLeave: (to, from, next) =&gt; {<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code>``// ...``<br />}<br />|
|`vScrollBehavior`|scrollBehavior (to, from, savedPosition) {<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code>``// ...``<br />}<br />|
|`vrouter-push`|<code>&#124;</code>``router``.push(<code>&#124;</code>)<br />|
|`vrouter-replace`|<code>&#124;</code>``router``.replace(<code>&#124;</code>)<br />|
|`vrouter-go`|<code>&#124;</code>``router``.go(<code>&#124;</code>)<br />|
|`alias`|alias<br />|
|`mode`|mode<br />|
|`children`|children<br />|
|`meta`|meta<br />|

## Vuex Snippets

### Vue Script Vuex Snippets

| Prefix | Snippet Content |
| --- | --- |
|`vVuexBase`|import Vue from 'vue';<br />import Vuex from 'vuex';<br /><br />Vue.use(Vuex);<br /><br />export const store = new Vuex.Store({<br />&nbsp;&nbsp;&nbsp;&nbsp;state: {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code>``key``: <code>&#124;</code>``value``<br />&nbsp;&nbsp;&nbsp;&nbsp;}<br />});<br />|
|`vNewVuexStore`|const <code>&#124;</code>``store`` = new Vuex.Store({<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code>``// ...``<br />})<br />|
|`vVuexGetters`|getters: {<br />&nbsp;&nbsp;&nbsp;&nbsp;value: <code>&#124;</code>``value`` =&gt; {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return state.<code>&#124;</code>``value``;<br />&nbsp;&nbsp;&nbsp;&nbsp;}<br />}<br />|
|`vVuexMutations`|mutations: {<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code>``updateValue``(state, <code>&#124;</code>``payload``) {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state.<code>&#124;</code>``value`` = <code>&#124;</code>``payload``;<br />&nbsp;&nbsp;&nbsp;&nbsp;}<br />}<br />|
|`vVuexAction`|actions: {<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code>``updateValue``({commit}, <code>&#124;</code>``payload``) {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;commit(<code>&#124;</code>``updateValue``, <code>&#124;</code>``payload``);<br />&nbsp;&nbsp;&nbsp;&nbsp;}<br />}<br />|
|`vVuexCommitInMutation`|<code>&#124;</code>``mutationName``() {<br />&nbsp;&nbsp;&nbsp;&nbsp;this.\$store.commit('<code>&#124;</code>``mutationName``', <code>&#124;</code>``payload``)<br />}<br />|
|`vVuexDispatchInAction`|<code>&#124;</code>``actionName``() {<br />&nbsp;&nbsp;&nbsp;&nbsp;this.\$store.dispatch('<code>&#124;</code>``actionName``', <code>&#124;</code>``payload``)<br />}<br />|
|`vVuexImport`|import { store } from './store/store';<br />|
|`vImportGSAP`|import { TimelineMax, <code>&#124;</code>``Ease`` } from 'gsap'<br />|
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
|`vSsrRenderer`|const <code>&#124;</code>``renderer`` = require('vue-server-renderer').createRenderer()<br />|
|`vSsrCreateRenderer`|createRenderer({<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code><br />})<br />|
|`renderToString`|renderToString<br />|
|`renderToStream`|renderToStream<br />|
|`createBundleRenderer`|createBundleRenderer<br />|
|`bundleRenderer.renderToString`|bundleRenderer.renderToString<br />|
|`bundleRenderer.renderToStream`|bundleRenderer.renderToStream<br />|



## License

MIT
