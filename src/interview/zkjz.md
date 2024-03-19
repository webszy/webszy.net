# <p title="名字显示功能开发中">[***]</p>
 <!-- + <a title="中科锦智" href="http://www.genuai.com/home">官网</a> -->
+ 面试时间：2024年3月19日
+ 面试方式：远程面试
+ 城市：西安
## 笔试题
给定如下一个数据结构,里面很有很多条数据
```javascript
const data = [{
        id:1,
        content:'test1',
        itemKey:['A','B'], //itemKey与itemValue是一一对应
        itemValue:['R01','R02']
 }
 // ... and more rows
 ]
```
### 1、生成随机数据
这道题我的思路就是就是用数组的`map`方法
```javascript
/*
* @description 生成随机数据
* @param {number} len - 生成的数据长度.
*/
function generateData(len=0){
    return new Array(len)
    .fill('')
    .map((n,index)=>{
        const itemKey = []
        const itemValue = []
        const randomLength = Math.floor(Math.random() * 10)
        for(let i=0;i<randomLength;i++){
            //这里可以在提前出一个随机方法，但是只是面试就不做了
            const key = ['A','B','C','D','E'][Math.ceil(Math.random()*5)-1] || 'A'
            const Value = ['R01','R02','R03','R04','R05'][Math.ceil(Math.random()*5)-1] || 'R01'
            itemKey.push(key)
            itemValue.push(Value)
        }
        return {
            id:index,
            content:`test${index}`,
            itemKey,
            itemValue
        }
    })
}
```
### 2、查询存在itemKey=A，itemValue=R01并且itemKey=B，itemValue=R02等等条件的id(同时满足这些条件)
### 3、查询存在itemKey=A，itemValue=R01或itemKey=B，itemValue=R02等等条件的id(满足其中一个条件)
这上面两个问题可以总结为一个方法，我设计的是传入一个对象或数组，并指定查询类型是or 还是 and

```javascript
/*
* @description 根据条件查询数据
* @example queryData({'A':'R01'},'or')
* @param {Object|Array} rule - 查询条件
* @param {'and' | 'or'} type - 查询类型
* @return {Array} 符合条件的id数组
* */
function queryData(rule,type='and'){
    if(!rule || typeof rule!=='object'){
        return null
    }

    if(!Array.isArray(rule)){
        // 简单限定规则类型是{key:value}
        if(Object.keys(rule).length !== 1){
            return
        }
        rule = [rule]
    }
    // 处理数据格式,合并itemKey和itemValue
    const formatedData = data.map(e=>{
        const items = []
        e.itemKey.forEach((n,index) => {
            // 这里需要注意一下，key和value里最好不要有加号，否则会出错
            // 这里处理一下，主要是为了方便后续使用includes方法
            items.push(`${n} + ${e.itemValue[index]}`)
        });
        return {
            id:e.id,
            items
        }
    })
    // 根据type进行过滤
    const filterAction = type === 'and'? 'every' :'some'
    return formatedData
        .filter(e=>{
            return e.items[filterAction](n=>{
                const formatedRule = rule.map(r=>Object.entries(r)[0].join(' + '))
                return formatedRule.includes(n)
            })
        })
        .map(e=>e.id)
}
 ```
# 总结
这道题给我的感觉就是查询数据库，所以只需要能够熟练的遍历数组就行了，不需要太多的算法。

我大量使用了一些比较新的`Array API`，比如`filter`、`includes`等等，只是js中的对于数组遍历的语法糖，性能会比较差，但是代码会比较简洁。
