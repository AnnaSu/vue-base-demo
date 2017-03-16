// Data 1
var app = new Vue({
    el: '#app',
    data: {
        logoName: 'Anna Studio',
        subMessage: 'Welcome To Anna Studio.',
        helloMessage: 'Nice To Meet You.',
        buttonText: 'More',
        coverUrl: 'url(img/header-bg.jpg)',
        buttonTip: '點擊按鈕看更多介紹',
        teamMembers: [{
                avatar: 'img/team/1.jpg',
                name: 'Rulin',
                jobTitle: '明日之星冰霸王'
            },
            {
                avatar: 'img/team/2.jpg',
                name: 'Anna Su',
                jobTitle: '天生傲嬌小柯南'
            },
            {
                avatar: 'http://placekitten.com/g/225/225',
                name: 'Jerry Hong',
                jobTitle: '全端打雜碼農'
            }
        ],
        customerName: '',
        customerEmail: '',
        customerPhone: '',
    }
})

// Data 2
// var app = new Vue({
//     el: '#app',
//     data: {
//         logoName: 'Cat Coffee',
//         subMessage: 'Welcome To Cat Coffee.',
//         helloMessage: 'Cat Coffee With You.',
//         buttonText: 'Love',
//         coverUrl: 'url(http://b.blog.xuite.net/b/8/5/6/11151381/blog_442951/txt/15327151/4.jpg)',
//         buttonTip: '點擊按鈕看更多介紹',
//         teamMembers: [{
//                 avatar: 'img/team/1.jpg',
//                 name: 'Rulin',
//                 jobTitle: '明日之星冰霸王'
//             },
//             {
//                 avatar: 'img/team/2.jpg',
//                 name: 'Anna Su',
//                 jobTitle: '天生傲嬌小柯南'
//             },
//             {
//                 avatar: 'http://placekitten.com/g/225/225',
//                 name: 'Jerry Hong',
//                 jobTitle: '全端打雜碼農'
//             }
//         ],
//         customerName: '',
//         customerEmail: '',
//         customerPhone: '',
//     }
// })
