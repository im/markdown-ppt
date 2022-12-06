## `<markdown-ppt />`

*按下 <kbd>空格</kbd> 开始*

---

### 一个能显示幻灯片的网页组件

```html
<markdown-ppt markdown="# 🦄" />
```

---

## 翻页页按键

上一页 / 下一页: <kbd>⇦</kbd> <kbd>⇨</kbd>

开始 / 结束: <kbd>⇧</kbd> <kbd>⇩</kbd>

---

## 切换主题

★ <kbd>D</kbd> ★

---

## 编辑

★ <kbd>ESC</kbd> ★

---


## 网页基础配置

```html
<script src="https://unpkg.com/markdown-ppt"></script>

<markdown-ppt markdown="# Title">
</markdown-ppt>
```

---

## 属性设置

```html
<markdown-ppt
  markdown="# Title" 
  index="0"
  hotkey
  hashsync
></markdown-ppt>
```

---

## 属性 

- `markdown="# Title"` markdown 内容
- `index="0"` 当前显示幻灯片页码
- `hotkey` 快捷键
- `hashsync` 翻页同步hash

---

## 更多属性

- `src="deck.md"` 远程加载外部 md 文件
- `css="deck.css"` 远程加载自定义 css 文件

---

## 自定义每张幻灯片样式

```
### 在 markdown 中编写内联样式标签

<style>
  .slide { background: url(...) center; background-size: cover }
  .content { filter: invert() }
  code { opacity: 0.8 }
</style>
```

<style>
.slide {
  background: url(./bg.jpeg) center;
  background-size: cover;
}
.content { filter: invert() }
code { opacity: 0.8 }
</style>

---


## 图表

图表基于 `echarts`   [参考地址](https://echarts.apache.org/examples/zh/index.html#chart-type-line)

```
<markdown-chart>
{
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }
  ]
}
</markdown-chart>
```
<style>
.content {
    transform: scale(0.6)!important;
}
</style>

---

#### 柱状图

<markdown-chart>
{
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }
  ]
}
</markdown-chart>
<style>
.content {
    transform: scale(0.6)!important;
}
</style>

---

#### 饼图

<markdown-chart>
{
  title: {
    text: 'Referer of a Website',
    subtext: 'Fake Data',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}
</markdown-chart>

---

## github

https://github.com/im/markdown-ppt

---

## THANKS

[![badge-src]][badge-link]

[badge-src]: https://badgen.net/badge/github/im%2Fmarkdown-ppt?icon&label&scale=2
[badge-link]: https://github.com/im/markdown-ppt
