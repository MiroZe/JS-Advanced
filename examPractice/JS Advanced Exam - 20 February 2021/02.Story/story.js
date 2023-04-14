class Story {

    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comment = [];
        this._likes = [];
        this.id = 1

    }
    get likes () {
        
        
        if(this._likes.length === 0) {
            return `${this.title} has 0 likes`
        }else if(this._likes.length === 1) {
            return `${this._likes[0].username} likes this story!`
        } else {
            return `${this._likes[0].username} and ${this._likes.length - 1} others like this story!`
        }
    }
    like (username) {
        const isFound = this._likes.find(el => el.username == username)
        if(isFound) {
            throw new Error (`You can't like the same story twice!`)
        }
        if(username == this.creator) {
            throw new Error ('You can\'t like your own story!')
        }
        let title = this.title
        let creator = this.creator
        let temp = {
            username,
            title,
            creator
        }
        this._likes.push(temp)
        return `${username} liked ${this.title}!`
    }
    dislike (username) {
        const isFound = this._likes.find(el => el.username == username)
        if(!isFound) {
            throw new Error(`You can't dislike this story!`)
        }
        let index = this._likes.indexOf(isFound)
        this._likes.splice(index,1)
        return `${username} disliked ${this.title}`

    }
    comment (username, content, id) {
     
        const isFound = this._comment.find(el => el.Id == id)
        if(!isFound) {
            let current = {
                Id : this.id,
                Username:username,
                Content:content,
                Replies :[]
            }
            this._comment.push(current)
            this.id++
            return `${username} commented on ${this.title}`
        } else  {
          
            let replyCounter = `${isFound.Id}.${isFound.Replies.length +1}`
            let currentReply = {
                Id: replyCounter ,
                Username:username,
                Content:content
                }
                isFound.Replies.push(currentReply)
              
                return 'You replied successfully'
        }

    
        }

    toString(sortingType) {
        let result = [`Title: ${this.title}`,`Creator: ${this.creator}`,`Likes: ${this._likes.length}`,'Comments:']
        if(sortingType == 'asc'){
            this._comment.sort((a,b)=> a.Id - b.Id)
            .forEach(comment => {  result.push(`-- ${comment.Id}. ${comment.Username}: ${comment.Content}`)
            if(comment.Replies.length > 0) {
                comment.Replies.sort((a,b)=> a.Id - b.Id)
                for (let replies of comment.Replies) {               
                    result.push(`--- ${replies.Id}. ${replies.Username}: ${replies.Content}`)
                }   
            }

            })
           
        } else if ( sortingType == 'desc') {
            this._comment.sort((a,b)=> b.Id - a.Id)
            .forEach(comment => {  result.push(`-- ${comment.Id}. ${comment.Username}: ${comment.Content}`)
            if(comment.Replies.length > 0) {
                comment.Replies.sort((a,b)=> b.Id - a.Id)
                for (let replies of comment.Replies) {               
                    result.push(`--- ${replies.Id}. ${replies.Username}: ${replies.Content}`)
                }   
            }

            })
            
        } else if(sortingType == 'username' ) {
            this._comment.sort((a,b)=> a.Username.localeCompare(b.Username) )
            .forEach(comment => {result.push(`-- ${comment.Id}. ${comment.Username}: ${comment.Content}`)
            if(comment.Replies.length > 0) {
                comment.Replies.sort((a,b)=> a.Username.localeCompare(b.Username))
                for (let replies of comment.Replies) {               
                    result.push(`--- ${replies.Id}. ${replies.Username}: ${replies.Content}`)
                }   
            }

            })
        }

        return result.join('\n')
    }
    }
    
    
let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
