import { on, off, renderThumbStyle, BAR_MAP } from './utils';
export default {
    name: 'Bar',
    props: {
        vertical: Boolean,
        size: String,
        move: Number
    },
    computed: {
        bar() {
            return BAR_MAP[this.vertical ? 'vertical' : 'horizontal'];
        },
        wrap() {
            return this.$parent.wrap;
        }
    },
    methods: {
        clickTrackHandler(e) {
            // 位移
            const offset = Math.abs(e.target.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]);
            const thumbHalf = this.$refs.thumb[this.bar.offset] / 2;
            // 计算进度条比例
            console.log(this.bar.offset, this.$el[this.bar.offset]);
            const thumbPositionPercentage = ((offset - thumbHalf) * 100) / this.$el[this.bar.offset];
            this.wrap[this.bar.scroll] = (thumbPositionPercentage * this.wrap[this.bar.scrollSize]) / 100;
        },
        clickThumbHandler(e) {
            console.log(e);
            if (e.ctrlKey || e.button == 2) {
                return;
            }
            this.startDrag(e);
            this[this.bar.axis] = e.currentTarget[this.offset] - (e[this.bar.client] - e.currentTarget.getBoundingClientRect()[this.bar.direction]);
        },
        startDrag(e) {
            e.stopImmediatePropagation();
            this.cursorDown = true;
            on(document, 'mousemove', this.mouseMoveDocumentHandler);
            on(document, 'mouseup', this.mouseUpDocumentHandler);
            document.onselectstart = () => false;
        },
        mouseMoveDocumentHandler(e) {
            if (this.cursorDown == false) return;
            const prePage = this[this.bar.axis];
            if (!prePage) return;
            const offset = this.$el.getBoundingClientRect()[this.bar.direction] - e[this.bar.client] * -1;
            const thumbClickPosition = this.$refs.thumb[this.bar.offet] - prePage;
            const thumbPositionPercentage = ((offset - thumbClickPosition) * 100) / this.$el[this.bar.offset];
        },
        mouseUpDocumentHandler(e) {
            this.cursorDown = false;
            this[this.bar.axis] = 0;
            off(document, 'mousemove', this.mouseMoveDocumentHandler);
            document.onselectstart = null;
        }
    },

    render(h) {
        const { size, move, bar } = this;
        console.log(this);
        return (
            <div class={['el-scrollbar__bar', `is-${bar.key}`]} onMousedown={this.clickTrackHandler}>
                <div ref='thumb' class='el-scrollbar__thumb' onMousedown={this.clickThumbHandler} style={renderThumbStyle({ size, move, bar })}></div>
            </div>
        );
    },

    destroyed() {
        off(document, 'mouseup', this.mouseUpDocumentHandler);
    }
};
