// Data 1
var app = new Vue({
    el: '#app',
    data: {
        logoName: 'Anna Studio',
        logoImg: 'img/sun.png',
        subMessage: 'Welcome To Anna Studio.',
        helloMessage: 'Nice To Meet You.',
        buttonText: 'More',
        coverImg: 'url(img/header-bg.jpg)',
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
        likeCounter: 896,
        unlikeCounter: 9,
        islike: false,
        isunlike: false
    },
    methods: {
        like: function (islike) {
            // this.islike = !islike;
            // if (this.isunlike) { this.isunlike = false; }
            this.likeCounter = (this.islike) ? this.likeCounter - 1 : this.likeCounter + 1;
            this.islike = !islike;
            if (this.isunlike) { this.isunlike = false;  this.unlikeCounter = this.unlikeCounter - 1; }
        },
        unlike: function (isunlike) {
            // this.isunlike = !isunlike;
            // if (this.islike) { this.islike = false;}
            this.unlikeCounter = (this.isunlike) ? this.unlikeCounter - 1 : this.unlikeCounter + 1;
            this.isunlike = !isunlike;
            if (this.islike) { this.islike = false; this.likeCounter = this.likeCounter - 1; }
        }
    }
})

// Data 2
// var app = new Vue({
//     el: '#app',
//     data: {
//         logoName: 'Cat Coffee',
//         logoImg: 'img/hot-drink.png',
//         subMessage: 'Welcome To Cat Coffee.',
//         helloMessage: 'Cat Coffee With You.',
//         buttonText: 'Love',
//         coverImg: 'url(http://b.blog.xuite.net/b/8/5/6/11151381/blog_442951/txt/15327151/4.jpg)',
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
//         likeCounter: 896,
//         unlikeCounter: 9,
//         islike: false,
//         isunlike: false
//     },
//     methods: {
//         like: function (islike) {
//             // this.islike = !islike;
//             // if (this.isunlike) { this.isunlike = false; }
//             this.likeCounter = (this.islike) ? this.likeCounter - 1 : this.likeCounter + 1;
//             this.islike = !islike;
//             if (this.isunlike) { this.isunlike = false;  this.unlikeCounter = this.unlikeCounter - 1; }
//         },
//         unlike: function (isunlike) {
//             // this.isunlike = !isunlike;
//             // if (this.islike) { this.islike = false;}
//             this.unlikeCounter = (this.isunlike) ? this.unlikeCounter - 1 : this.unlikeCounter + 1;
//             this.isunlike = !isunlike;
//             if (this.islike) { this.islike = false; this.likeCounter = this.likeCounter - 1; }
//         }
//     }
// })
