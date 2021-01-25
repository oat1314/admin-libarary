<template>
  <div>
    <p>
      <button v-on:click="add()" class="btn btn-white btn-default btn-round">
        <i class="ace-icon fa fa-edit"></i>
        新增
      </button>
      &nbsp;
      <button class="btn btn-white btn-default btn-round">
        <i class="ace-icon fa fa-refresh"></i>
        刷新
      </button>
    </p>

    <pagination ref="pagination"></pagination>

    <div class="row">
      <div class="col-xs-12">
        <!-- PAGE CONTENT BEGINS -->
        <div class="row">
          <div class="col-xs-12">
            <table id="simple-table" class="table table-bordered table-hover">
              <thead>
                <tr>
                  <th class="hidden-480">图书名称</th>
                  <th class="hidden-480">图书作者</th>
                  <th class="hidden-480">图书价格</th>
                  <th class="hidden-480">图书出版社</th>
                  <th class="hidden-480">图书图片</th>
                  <th class="hidden-480">操作</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <a href="#">ace.com</a>
                  </td>
                  <td>$45</td>
                  <td class="hidden-480">3,330</td>
                  <td>Feb 12</td>

                  <td>Feb 12</td>

                  <td>
                    <div class="hidden-sm hidden-xs btn-group">
                      <button class="btn btn-xs btn-success">
                        <i class="ace-icon fa fa-check bigger-120"></i>
                      </button>

                      <button class="btn btn-xs btn-info">
                        <i class="ace-icon fa fa-pencil bigger-120"></i>
                      </button>

                      <button class="btn btn-xs btn-danger">
                        <i class="ace-icon fa fa-trash-o bigger-120"></i>
                      </button>

                      <button class="btn btn-xs btn-warning">
                        <i class="ace-icon fa fa-flag bigger-120"></i>
                      </button>
                    </div>

                    <div class="hidden-md hidden-lg">
                      <div class="inline pos-rel">
                        <button
                          class="btn btn-minier btn-primary dropdown-toggle"
                          data-toggle="dropdown"
                          data-position="auto"
                        >
                          <i
                            class="ace-icon fa fa-cog icon-only bigger-110"
                          ></i>
                        </button>

                        <ul
                          class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close"
                        >
                          <li>
                            <a
                              href="#"
                              class="tooltip-info"
                              data-rel="tooltip"
                              title="View"
                            >
                              <span class="blue">
                                <i
                                  class="ace-icon fa fa-search-plus bigger-120"
                                ></i>
                              </span>
                            </a>
                          </li>

                          <li>
                            <a
                              href="#"
                              class="tooltip-success"
                              data-rel="tooltip"
                              title="Edit"
                            >
                              <span class="green">
                                <i
                                  class="ace-icon fa fa-pencil-square-o bigger-120"
                                ></i>
                              </span>
                            </a>
                          </li>

                          <li>
                            <a
                              href="#"
                              class="tooltip-error"
                              data-rel="tooltip"
                              title="Delete"
                            >
                              <span class="red">
                                <i
                                  class="ace-icon fa fa-trash-o bigger-120"
                                ></i>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /.span -->
        </div>
        <!-- /.row -->
        <!-- PAGE CONTENT ENDS -->
      </div>
      <!-- /.col -->
    </div>
    <!-- /.row -->
     <div id="form-modal" class="modal fade" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">表单</h4>
          </div>
          <div class="modal-body">
            <form class="form-horizontal">
              <div class="form-group">
                <label class="col-sm-2 control-label">名称</label>
                <div class="col-sm-10">
                  <input  class="form-control" placeholder="名称">
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">课程</label>
                <div class="col-sm-10">
                   <input  class="form-control" placeholder="名称">
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary">保存</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
  </div>
</template>

<script>
import Pagination from '../../../components/pagination';
export default {
  components: { Pagination },
  methods: {
    add() {
      $("#form-modal").modal("show");
    }
  }
}
</script>