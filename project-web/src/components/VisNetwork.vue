<script setup lang="ts">
import { onMounted } from "vue";
import { DataSet, Network } from 'vis'

function Restore() {
    // create an array with nodes
    var nodes = new DataSet([
        { id: 1, label: 'Node 1' },
        { id: 2, label: 'Node 2' },
        { id: 3, label: 'Node 3' },
        { id: 4, label: 'Node 4' },
        { id: 5, label: 'Node 5' }
    ]);
    // create an array with edges
    var edges = new DataSet([
        { from: 1, to: 3 },
        { from: 1, to: 2 },
        { from: 2, to: 4 },
        { from: 2, to: 5 }
    ]);
    // create a network
    const container: HTMLElement = document.getElementById('myNetwork') as HTMLElement;
    // provide the data in the vis format
    const data = {
        nodes: nodes,
        edges: edges
    };
    const options = {};
    new Network(container, data, options);
}

onMounted(() => {
    Restore();
})
</script>

<template>
    <p>This is a relationship network diagram realized by borrowing Vis-network</p>
    <div>
        <el-button color="#626aef" @click="Restore()">Restore</el-button>
        <div class="block-card_result">
            <div id="myNetwork" style="width: 100%; height: 100%; border: 1px solid #626aef;"></div>
        </div>
    </div>
    <p>
        <el-link href="https://visjs.github.io/vis-network/examples/"
            target="_blank">https://visjs.github.io/vis-network/examples/</el-link>
    </p>
</template>

<style lang="scss" scoped>
.block-card_result {
    width: 100%;
    height: 700px;
}
</style>