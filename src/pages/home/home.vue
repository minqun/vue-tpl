<template>
    <div>
        <ScrollsBar>
            <div style="height: 800px;">
                <p>home</p>
                <div id="box" style="height: 600px">333</div>
                <p>home</p>
                <p>home</p>
                <div id="box" style="height: 600px">333</div>
                <p>home</p>
                <p>home</p>
                <div id="box" style="height: 600px">333</div>
            </div>
        </ScrollsBar>
    </div>
</template>

<script>
export default {
    mounted() {
        // const resizeObserver = new ResizeObserver(entries => {
        //     console.log(entries);
        //     for (let entry of entries) {
        //         entry.target.style.borderRadius = Math.max(0, 250 - entry.contentRect.width) + 'px';
        //     }
        // });
        // resizeObserver.observe(document.getElementById('box'));
    },
    data() {
        return {};
    }
};
</script>
<style lang="scss"></style>
