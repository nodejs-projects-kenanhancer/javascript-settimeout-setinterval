var axios = require('axios');

var timerId1 = setTimeout(
    function tick(url) {
        axios
            .get(url)
            .then(res => {
                clearTimeout(timerId1);

                res.data.data.slice(0, 10).forEach((item, index) => console.log(item.text_val));
            })
            .catch(err => {
                console.log(err);

                timerId1 = setTimeout(
                    tick,
                    2000,
                    "https://biz.timesofindia.indiatimes.com/bankifsc/getlist"
                );
            });
    },
    1000,
    "https://HEDEHODE");