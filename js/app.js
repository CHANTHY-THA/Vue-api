
new Vue({
    el: ".app",
    data: {
        url: "http://127.0.0.1:8000/api/books",
        books: [],
        users: [],
        title: "",
        description: "",
        status: null,
        userId: null,
        editId: null,
        isUpdate: false,
        isCreate: true,
    },

    methods: {
        getTodo() {
            axios.get(this.url).then(res => {
                this.books = res.data;
                
                console.log(this.books);
               
            })
        },

        // // Create the post 
        // createPost(){
        //     if(Number(this.status) === 1){
        //         this.status = 1;
        //     }else{
        //         this.status = 2;
        //     }

        //     let post = {
        //         title:this.title,
        //         description: this.description,
        //         status: this.status,
        //         user_id: Number(this.userId)
        //     }
        //     axios.post(this.url ,post).then(res => {
        //         console.log("Created");
        //     });
            
        //     this.title = "";
        //     this.description = "";
        //     this.status = null;
        //     this.userId = null;
        // },

        // // Remove Items
        // deleteItem(item) {
        //     console.log(item);
        //     axios.delete(this.url + "/" + item.id).then(res => {
        //         console.log("Deleted")
        //     });
        // },
        // // Update items
        // Update(item) {
        //     this.isUpdate = true;
        //     this.isCreate = false;
        //     this.title = item.title;
        //     this.description = item.description;
        //     if(item.status === true){
        //         this.status = 1 ;
        //     }else{
        //         this.status = 2 ;
        //     }
           
        //     this.userId = parseInt(item.user_id);

        //     console.log(item);
        // },
        // updateItem() {
        //     if(Number(this.status) === 1){
        //         this.status = 1;
        //     }else{
        //         this.status = 2;
        //     }
        //     let post = {
        //         title:this.title,
        //         description: this.description,
        //         status: this.status,
        //         user_id: Number(this.userId)
        //     }

        //     axios.put(this.url + "/todo" , post).then(res => {
        //         console.log("Updated");
        //     });

        //     this.isUpdate = false;
        //     this.isCreate = true;
        //     this.title = "";
        //     this.description = "";
        //     this.status = null;
        //     this.userId = null;
        //     console.log("Updated data");
        // }
    },
    mounted() {
        this.getTodo();
    },
})