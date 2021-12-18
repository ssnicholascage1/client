import './landingPage.css'
import {Button} from "react-bootstrap"

const LandingPage = () => {
    return (
        <div className="background">
            <header>
		<h1>Today</h1>
		<form id="new-task-form">
			<input 
				type="text" 
				name="new-task-input" 
				id="new-task-input" 
				placeholder="What do you have planned?" />
			<Button variant="primary">Add Note</Button>
		</form>
	</header>
	<main>
		<section class="task-list">
			<h2>Tasks</h2>

			<div  className="tasks">
                <ul>
                    <li className="task">Read</li>
                </ul>
                <div className="btn">
                    <Button className="btn">Edit</Button>
                    <Button className="btn" variant="danger">Delete</Button>
                </div>
			</div>

		</section>
	</main>
        </div>
    )
}

export default LandingPage
