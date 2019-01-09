$('#login_form').on('submit', function(e) {
    //debugger;
    e.preventDefault()
    var formData = $(this).serialize()
    console.log(formData)
    $.ajax({
        url: '/login',
        type: 'post',
        data: formData,
        dataType: 'json',
        success: function(data) {
            var err_code = data.err_code
            if (err_code === 0) {
                window.alert('登录成功！')
                    // 服务端重定向针对异步请求无效
                window.location.href = '/'
            } else if (err_code === 1) {
                window.alert('邮箱或者密码错误')
            } else if (err_code === 500) {
                window.alert('服务器忙，请稍后重试！')
            }
        }
    })
})