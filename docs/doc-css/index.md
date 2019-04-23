# css如何实现页面平滑滚动？

### scroll-behavior: smooth;

其实 `scroll-behavior` 的使用没有那么多花头，你就记住这么一句话——

凡是需要 `滚动` 的地方都加一句 `scroll-behavior: smooth;` 就好了！

> 应用场景：网站使用 `Anchor（锚点）`导航，加上 `scroll-behavior: smooth;`  就可以使滚动到对应位置的过程平滑，而不是一下子跳过去。
