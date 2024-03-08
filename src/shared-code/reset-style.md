# ResetStyle.css
> 以下是我自己编写的重置样式的css代码，可以直接复制到自己的项目中使用。
```css
body,
div,
p,
ul,
ol,
li,
dl,
dt,
dd,
table,
tr,
td,
th,
form,
h1,
h2,
h3,
h4,
h5,
h6,
input,
textarea,
fieldset,
figure {
    margin: 0;
    padding: 0;
}
html,
body {
    width: 100%;
    height: 100%;
    user-select: none;
    touch-action: manipulation;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
    transform: translateZ(0);/* 开启GPU加速 */
}
img {
    border: 0;
    outline: none;
}

a {
    text-decoration: none;
}

ul,
ol {
    list-style: none;
}
ins {
    text-decoration: none;
}
input,
button {
    outline: none;
    padding: 0;
    border: none;
    border: 0;
    border-radius: 0;
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: none;
}
```
