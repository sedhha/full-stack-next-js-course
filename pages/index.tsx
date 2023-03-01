import classes from '@/styles/localStyles/Header.module.css';
import Radio from '@/components/RadioButton';

export default function Home() {
	return (
		<header className={classes.Header}>
			<div className={classes.LogoWithTitle}>
				<h1 className={classes.LogoHeader}>Person Name</h1>
				<img
					className={classes.Image}
					src='/morpankh.svg'
					alt='Logo Icon'
				/>
			</div>
			<div className={classes.NavigationSections}>
				<h2>About</h2>
				<h2>Work Experience</h2>
				<h2>Blog</h2>
				<div className={classes.More}>
					<h2>More</h2>
					<div className={classes.DropDownItems}>
						<h3>Contact</h3>
						<h3>Project</h3>
						<h3>Awards</h3>
						<h3>Videos</h3>
						<h3>Testimonials</h3>
						<h3>Tech Stack</h3>
					</div>
				</div>
				<Radio />
			</div>
		</header>
	);
}
