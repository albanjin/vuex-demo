# vuex-demo
vue vuex module commit  action 
### 用vuex module 区分commit && dispatch 
``` 
this.$store.commit  ---> mutations
this.$store.dispatch  ---> action
```
### 在使用vuex module 是注意命名空间私有
```
    如果没有命名空间，获取摸个属性如下
    this.$store.state.count
    如果增加命名空间，获取属性需要咱家模块名，例如
    this.$store.state['templateA'].count
```