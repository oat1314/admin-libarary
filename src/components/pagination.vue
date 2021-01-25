<template>
  <div class="pagination" role="group" aria-label="分页">
    <button type="button" class="btn btn-default btn-white btn-round" 
           
            >
      1
    </button>
    <button type="button" class="btn btn-default btn-white btn-round" 
           
           >
      上一页
    </button>
    <button 
            type="button" class="btn btn-default btn-white btn-round"
            >
      5
    </button>
    <button type="button" class="btn btn-default btn-white btn-round" 
           
            >
      下一页
    </button>
    <button type="button" class="btn btn-default btn-white btn-round"
           >
      5
    </button>
    &nbsp;
    <span class="m--padding-10">
        每页
        <select v-model="size">
            <option value="1">1</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
        </select>
        条，共【{{total}}】条
    </span>
  </div>
</template>