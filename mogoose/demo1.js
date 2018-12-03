const mongoose = require('mongoose');

//连接mongodb数据库
mongoose.connect('mongodb://localhost/test');

//创建一个模型  就是在设计数据库   表的名字是Cat， 生成 cats
const Cat = mongoose.model('Cat', { name: String });

for (var i = 0; i < 100; i++) {
    //实例化一个Cat
    const kitty = new Cat({ name: '八戒' + i });

    //持久化保存Kitty实例
    kitty.save().then(() => console.log('meow'));
}