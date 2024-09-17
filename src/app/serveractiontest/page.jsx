import { addPost, deletePost  } from "../../constans/action"


const ServerActionTestPage = () => {
    console.log('aaa')
    return (
        <div>
            <form action={addPost}>
                <input type="text" placeholder="title" name='title'></input>
                <input type="text" placeholder="desc" name='desc'></input>
                <input type="text" placeholder="slug" name='slug'></input>
                <input type="text" placeholder="userId" name='userId'></input>
                <button>Create now</button>
            </form>

            <form action={deletePost}>
                <input type="text" placeholder="postId" name="id" />
                <button>Delete</button>
            </form>
        </div>
    )
}

export default ServerActionTestPage