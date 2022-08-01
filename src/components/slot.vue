<template>
    <div class="slot">
        <SlotItem tittle='tittle slot...' >
            <ul class="slotList">
                <li
                class="slotItem"
                v-for="(item, index) in tabHeader"
                v-bind:key="index"
                v-on:click="setActive(index)"
                v-bind:class="{ active : tabActive == index}"
                >
                {{item.text}}
                </li>
            </ul>
            <div class="slotContent" v-if="tabActive === 0">
                <p> 1111 Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maiores eligendi suscipit explicabo nobis, atque fugiat ab sapiente tempora asperiores fuga similique aliquam perspiciatis ipsum facere id nam architecto reprehenderit.</p>
            </div>
            <div class="slotContent" v-if="tabActive === 1">
                <p> 22222 Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maiores eligendi suscipit explicabo nobis, atque fugiat ab sapiente tempora asperiores fuga similique aliquam perspiciatis ipsum facere id nam architecto reprehenderit.</p>
            </div>
            <div class="slotContent" v-if="tabActive === 2">
                <p> 33333 Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maiores eligendi suscipit explicabo nobis, atque fugiat ab sapiente tempora asperiores fuga similique aliquam perspiciatis ipsum facere id nam architecto reprehenderit.</p>
            </div>

        </SlotItem>

    </div>
</template>
<script>
import SlotItem from './SlotItem.vue'
export default{
    name: "Slot",
    comments: {
        SlotItem
    },
    components: { SlotItem },
    data(){
        return{
            tabHeader:[
                {text:'tab1'},
                {text:'tab2'},
                {text:'tab3'},
            ],
            tabActive: 0,
        }
    },
    methods:{
        setActive(index){
            this.tabActive = index
        }
    }
}
</script>
<style>

.slotContent{
    text-align: left;
    padding: 10px 10px;
    border: 1px solid black;
}
.slotItem{
    padding: 4px 10px;
    border: 1px solid black;
    margin: 0 2px;
    background-color: #777;
    cursor: pointer;
}
.slotItem:hover{
    background-color: black;
    color: antiquewhite;
    transition: all 0.3s ease;
}
.slotList{
    list-style: none;
    display: flex;
    
}
.slot{
    width: 800px;
    height: 500px;
    border: 1px solid black;
}
.active{
       background-color: black;
    color: antiquewhite;
}
</style>