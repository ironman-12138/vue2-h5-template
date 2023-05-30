<template>
    <div class="index-wrapper">
        <div class="index" id="index">
            <div class="demo-root">
                <header>头部</header>
                <main>
                    <div class="item">
                        
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Index',
        data() {
            return {
                list: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
            }
        },
    }
</script>

<style scoped lang="scss">
    .index-wrapper {
        height: 100%;
        width: 100%;
        .index {
            height: 100%;
            width: 100%;
            .demo-root{
                header{
                    width: 100%;
                    height: 2rem;
                    background: rgba(53, 150, 206, 0.3);
                    font-size: .5333rem;
                    text-align: center;
                    line-height: 2rem;
                }
                main{
                    width: 100%;
                    .item {
                        height: 26.6667rem;
                        background-color: blanchedalmond;
                    }
                }
            }
        }
    }
</style>