import { toObject, on, off, renderThumbStyle, BAR_MAP, addResizeListener, removeResizeListener, BarWidth } from './utils';
export default {
    name: 'ScrollsBar',
    mounted() {},
    props: {
        native: Boolean,
        wrapStyle: {},
        wrapClass: {},
        viewClass: {},
        viewStyle: {},
        noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
        tag: {
            type: String,
            default: 'div'
        }
    },
    data() {
        return {
            sizeWidth: '0',
            sizeHeight: '0',
            moveX: 0,
            moveY: 0
        };
    },
    methods: {
        handleScroll() {}
    },
    render(h) {
        let gutter = BarWidth();
        let style = this.wrapStyle;
        if (gutter) {
            const gutterWidth = `-${gutter}px`;
            const gutterStyle = `margin-bottom: ${gutterWidth};margin-right: ${gutterWidth}`;
            const _this = this;
            // 可配置化设置
            if (Array.isArray(this.wrapStyle)) {
                style = toObject(this.wrapStyle);
                style.marginRight = style.margin.bottom = gutterWidth;
            } else if (typeof this.wrapStyle === 'string') {
                style += gutterStyle;
            } else {
                style = gutterStyle;
            }
        }
        // 视图
        const view = h(
            this.tag,
            {
                class: ['el-scrollbar__view', this.viewClass],
                style: this.viewStyle,
                ref: 'resize'
            },
            this.$slots.default
        );
        // 视图容器
        const wrap = (
            <div ref='wrap' style={style} onScroll={this.handleScroll} class={[this.wrapClass, 'el-scrollbar__wrap', gutter ? '' : 'el-scrollBar__wrap--hidden-default']}>
                {[view]}
            </div>
        );
        let nodes;
        if (!this.native) {
            nodes = [wrap, <Bar move={this.moveX} size={this.sizeWidth}></Bar>, <Bar move={this.moveX} size={this.sizeWidth}></Bar>];
        } else {
            nodes = [<div ref='wrap' class={[this.wrapClass, 'el-scrollBar__wrap']}></div>];
        }
        return h('div', { class: 'el-scrollbar' }, this.$slots.default);
    }
};
