# &lt;markdown-ppt />

网页 ppt 组件.

- 自适应屏幕 & 键盘快捷键
- 移动端 & 触摸屏快捷操作
- 深色模式
- 打印幻灯片
- 在线编辑 & 实时预览

## 使用

1. Import script from https://unpkg.com/markdown-ppt

```html
<script type="module" src="https://unpkg.com/markdown-ppt"></script>
```

2. 将markdown内容添加到 `<script type="text/markdown" />`:

```html
<markdown-ppt hotkey hashsync>
    <script type="text/markdown">
    # Title
    ---
    ## Hello World!
    ---
    ## The END
    </script>
</markdown-ppt>
```

或者设置 markdown 属性 `<markdown-ppt />`:

```html
<markdown-ppt markdown="## Hello World! " />
```

或者使用 `src` 属性 加载 `md` 文件:

```html
<markdown-ppt src="deck.md" />
```

### 属性

- `markdown="{string}"`  markdown 内容
- `src="{string}"` 远程加载外部 md 文件
- `css="{string}"` 远程加载自定义 css 文件
- `index="{number}"` 当前显示幻灯片页码
- `hashsync` 翻页更新浏览器 hash
- `hotkey` 快捷键
- `editing` 编辑
- `printing` 打印幻灯片
- `progressBar` 进度条

### 快捷键

- 下一页: <kbd>Space</kbd>
- 上一页 / 下一页: <kbd>⇦</kbd> / <kbd>⇨</kbd> or <kbd>J</kbd> / <kbd>L</kbd>
- 开始 / 结束: <kbd>⇧</kbd> / <kbd>⇩</kbd>
- 主题切换: <kbd>I</kbd> or <kbd>D</kbd>
- 打印: <kbd>P</kbd>
- 编辑: <kbd>ESC</kbd>
