var express = require('express');
var app = express();

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
  });

app.get('/api/headerHotList', function (req, res) {
    res.json({
        "success":true,
        "data":["支付宝","微信","蚂蚁金服","借呗","诈骗","被骗","盗窃","2019兴成长计划","pandas","pyecharts","Scrapy","ggplot","Gensim","XGBoost","TensorFlow","Keras","Theano","PyTorch","NumPy","scikit-learn","SciPy","Plotly","Matplotlib","Caffe","Bokeh","Python","挠脚心","上","女","于","把","男","不","java","有","人","这","着","它","下","里","在","是","要","大","中","我","来","一","他"]
    })
})

app.get('/api/topicList', function (req, res) {
    res.json([
        {
            id:1,
            title:'社会热点'
        },
        {
            id:2,
            title:'xxxxxxx'
        },
        {
            id:3,
            title:'bbbbbbb'
        }
    ])
})

app.get('/api/articleList', function (req, res) {
    res.json([
        {
            id:1,
            title:'健身教练有多赚钱，看完我震惊了！',
            desc:'17年城市服务业平均薪资榜"新鲜出炉，健身教练以平均月薪17669元位居第一。榜单一出，健身教练再次成为热议话题。高薪，已经成为健身教练行业的重...',
            imgUrl:'http://upload-images.jianshu.io/upload_images/124665-ab97f4591118e4e0?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id:2,
            title:'推荐10款神器APP，个个你都没听说过！',
            desc:'作为喜欢“搞机”的男人 ，我来分享几款APP，个个都牛逼哄哄，黑科技十足(•̀⌄•́)，绝对对的起神器的名号！ 这些软件下载方法在文末处 一：影...',
            imgUrl:'http://upload-images.jianshu.io/upload_images/11692305-5f17526a30b6d718.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id:3,
            title:'余生很短，请不要辜负爱你的人',
            desc:'人生这么短，所以不要弄丢，对你好的那个人人生很短，爱你的人就那么多。不是每个人都会真心对你好，不是每一个你都能感受到来自对方的爱。人生过客，千千...',
            imgUrl:'http://upload-images.jianshu.io/upload_images/15549625-b05db793777d1d11.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        }
    ])
})

app.get('/api/getMoreList', function (req, res) {
    res.json([
        {
            id:4,
            title:'444444444444444！',
            desc:'44444444444444新鲜出炉，健身教练以平均月薪17669元位居第一。榜单一出，健身教练再次成为热议话题。高薪，已经成为健身教练行业的重...',
            imgUrl:'http://upload-images.jianshu.io/upload_images/124665-ab97f4591118e4e0?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id:5,
            title:'55555555555555555！',
            desc:'作55555555555人 ，我来分享几款APP，个个都牛逼哄哄，黑科技十足(•̀⌄•́)，绝对对的起神器的名号！ 这些软件下载方法在文末处 一：影...',
            imgUrl:'http://upload-images.jianshu.io/upload_images/11692305-5f17526a30b6d718.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id:6,
            title:'66666666666666666666',
            desc:'人生66666666666弄丢，对你好的那个人人生很短，爱你的人就那么多。不是每个人都会真心对你好，不是每一个你都能感受到来自对方的爱。人生过客，千千...',
            imgUrl:'http://upload-images.jianshu.io/upload_images/15549625-b05db793777d1d11.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        }
    ])
})

app.get('/api/login', function (req, res) {
    res.json({
        success:true,
        data:true
    })
})



var server = app.listen(4000, 'localhost', function () {
    console.log('服务器已经启动，地址是http://localhost:4000')
  })