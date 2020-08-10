function request(url){
    setTimeout(() => {
        console.log(url, 'request')
    })
}


function foo(url) {
    let state;
    let val;
    function process(v){
        switch(state) {
            case 1:
                console.log('requesting;', url);
                return request(url)
            case 2:
                val = v;
                console.log(val);
                return ;
            case 3:
                var err = v;
                console.log('Oops:', err)
                return false;
        }
    }
    // 构造并返回一个迭代器
    return {
        next: function(v){
            if(!state) {
                state = 1;
                return {
                    done: false,
                    value: process()
                }
            } else if (state == 1) {
                state = 2;
                return {
                    done: true,
                    value: process(v)
                }
            } else {
                return {
                    done: true,
                    value: undefined
                }
            }
        },
        throw: function(e) {
            if(state === 1) {
                state = 3;
                return {
                    done: true, 
                    value: process(e)
                }
            }else { 
                throw e
            }
        }
    }
}


