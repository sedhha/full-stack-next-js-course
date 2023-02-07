import classes from '@/styles/localStyles/Header.module.css';

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
			</div>
		</header>
	);
}
