import { sayHello  } from "../../constans/action"


const ServerActionTestPage = () => {

    const actionInComponent = async () => {
        'use server'
        console.log('hello')
    }

    return (
        <div>
            <form action={actionInComponent}>
              <button>test</button>
            </form>
        </div>
    )
}

export default ServerActionTestPage