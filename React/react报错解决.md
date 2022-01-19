# 1. jsx中style属性内联语法
> <button class="btn btn-danger" style="display:none">删除</button>
> 报错：prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.
> 正确写法：<button className="btn btn-danger" style={{display: "none"}}>删除</button>
style="display:none"    ------->   style={{display: "none"}}