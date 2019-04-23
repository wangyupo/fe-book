# nth-child无效

**nth-child** 必须保证前面 **没有兄弟节点** ，要么用div包住。

前面 **有兄弟节点** 的，可以用 `nth-of-type(1)` ，效果和nth-child一样。

### 参考链接

1、[first-child无效的问题 - CSDN](https://blog.csdn.net/ljw_jiawei/article/details/83586488)
