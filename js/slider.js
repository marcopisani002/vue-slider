const { createApp } = Vue;



const app = createApp({

    data() {

        return {

            currentImgIndex:0,

            apple: {

                images: [
                    
                    "img/logo.jpg",
                    "img/iph14.jpeg",
                    "img/airpods.jpeg",
                    "img/appletv.jpeg",
                    "img/macbook.jpeg",
                    "img/watch.jpeg",

                ]

            },

        };

    },

    methods: {

        goPrev(){
            if(this.currentImgIndex === 0){
                this.currentImgIndex=this.apple.images.length - 1;

            } else {
                this.currentImgIndex--;
              }



        },

        goNext(){
            if(this.currentImgIndex===this.apple.images.length - 1){
                this.currentImgIndex = 0;

            } else {
                this.currentImgIndex++;
              }



        },





        onThumbnailClick (clickedImgIndex) {
            this.currentImgIndex = clickedImgIndex;
          },






    },




















}).mount('#app');

