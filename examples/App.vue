<template>
    <div id="app">test</div>
</template>
<script>
// import SignCanvas from "../packages";
export default {
    // components: { SignCanvas },
    data() {
        return {};
    },
    methods: {},
};
</script>
<style lang="scss">
* {
    margin: 0;
    padding: 0;
}
.title {
    padding: 20px;
    text-align: center;
}
.sign-canvas {
    display: block;
    margin: 20px auto;
}
.view-image {
    display: block;
    margin: 20px auto;
}
.config {
    width: 350px;
    margin: 20px auto;
    .ul-config {
        .li-c {
            display: flex;
            align-items: center;
            padding: 4px 10px;
            .item-label {
                font-size: 14px;
            }
            .item-content {
                margin-left: 10px;
            }
        }
    }
}
.sign-btns {
    display: flex;
    justify-content: space-between;
    #clear,
    #clear1,
    #save {
        display: inline-block;
        padding: 5px 10px;
        width: 76px;
        height: 40px;
        line-height: 40px;
        border: 1px solid #eee;
        background: #e1e1e1;
        border-radius: 10px;
        text-align: center;
        margin: 20px auto;
        cursor: pointer;
    }
}
</style>
