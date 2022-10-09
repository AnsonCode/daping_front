const domain = "http://dp.tulingzhihui.com"


function post(path, data) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: domain + path,
            type: "post",
            dataType: "json",
            data: JSON.stringify(data),
            contentType: "application/json;charset=utf-8",
            success: function (res) {
                if (res.code == 200) {
                    // success(res.result)
                    resolve(res.result)
                } else {
                    reject(res)
                }
            },
        });
    })
}

